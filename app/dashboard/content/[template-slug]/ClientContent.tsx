"use client";

import React, { useState } from "react";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import { TEMPLATE } from "@/app/types";
import { useUser } from "@clerk/nextjs";

interface PROPS {
  selectedTemplate?: TEMPLATE;
}

export default function ClientContent({ selectedTemplate }: PROPS) {
  const [aiOutput, setAiOutput] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const { user } = useUser();

  const generateAIContent = async (formData: any) => {
    if (!selectedTemplate) return;

    setLoading(true);

    const FinalAIPrompt =
      JSON.stringify(formData) + ", " + selectedTemplate.aiPrompt;

    try {
      // 🔥 STEP 1: Generate AI content
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: FinalAIPrompt,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setAiOutput(data.text);

      // 🔥 STEP 2: Save to DB
      await fetch("/api/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formData: JSON.stringify(formData),
          aiResponse: data.text,
          templateSlug: selectedTemplate.slug,
          createdBy: user?.primaryEmailAddress?.emailAddress || "anonymous",
        }),
      });

    } catch (e: any) {
      console.error("CLIENT ERROR:", e);
      setAiOutput("Error generating content: " + e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-5">
      <FormSection
        selectedTemplate={selectedTemplate}
        userFormClick={generateAIContent}
        loading={loading}
      />

      <OutputSection aiOutput={aiOutput} />
    </div>
  );
}