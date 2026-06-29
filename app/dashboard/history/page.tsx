import Templates from '@/app/(data)/Templates';
import { db } from '@/db/db';
import { AIOutput } from '@/db/schema';
import { currentUser } from '@clerk/nextjs/server';
import { desc, eq } from 'drizzle-orm';
import Image from 'next/image';
import React from 'react';

import CopyButton from './_components/CopyButton';

export const dynamic = "force-dynamic";

export interface HISTORY {
  id: number;
  formData: string;
  aiResponse: string | null;
  templateSlug: string;
  createdBy: string;
  createdAt: Date | null;
}

async function History() {
  const user = await currentUser();

  if (!user?.primaryEmailAddress?.emailAddress) {
    return <div>Please sign in to view history</div>;
  }

  // Fetch history for current user
  const HistoryList: HISTORY[] = await db
    .select()
    .from(AIOutput)
    .where(eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress))
    .orderBy(desc(AIOutput.id));

  const GetTemplateName = (slug: string) => {
    const template = Templates?.find((item) => item.slug === slug);
    return template;
  };

  return (
    <div className="m-5 p-5 border rounded-lg bg-white shadow-sm">
      <h2 className="font-bold text-3xl">History</h2>
      <p className="text-gray-500">Search your previously generated AI content</p>

      <div className="grid grid-cols-7 font-bold bg-gray-100 mt-5 p-3 px-5 py-4 rounded-t-lg">
        <h2 className="col-span-2">TEMPLATE</h2>
        <h2 className="col-span-2">AI RESPONSE</h2>
        <h2>DATE</h2>
        <h2>WORDS</h2>
        <h2>COPY</h2>
      </div>

      {HistoryList.length === 0 ? (
        <div className="p-10 text-center text-gray-400">No history found. Generate some content first!</div>
      ) : (
        HistoryList.map((item: HISTORY, index: number) => {
          const template = GetTemplateName(item.templateSlug);
          return (
            <div key={index} className="grid grid-cols-7 my-5 p-5 border rounded-lg bg-gray-50 text-sm gap-2">
              <div className="col-span-2 flex gap-2 items-center">
                {template?.icon && (
                  <Image src={template.icon} width={25} height={25} alt="icon" />
                )}
                {template?.name || "Unknown Template"}
              </div>
              <div className="col-span-2 line-clamp-3">
                {item.aiResponse}
              </div>
              <div>
                {item.createdAt ? new Date(item.createdAt).toLocaleDateString() : 'N/A'}
              </div>
              <div>
                {item.aiResponse?.split(/\s+/).length || 0}
              </div>
              <div>
                <CopyButton text={item.aiResponse || ""} />
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}

export default History;
