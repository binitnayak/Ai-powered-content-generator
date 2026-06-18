"use client";

import React from 'react'
// import { TEMPLATE } from './TemplateListSection'
import Image from 'next/image'
import Link from 'next/link'
import { TEMPLATE } from '@/app/types' 

function TemplateCard({ item }: { item: TEMPLATE }) {
  return (
    <Link href={'/dashboard/content/' + item.slug}>
      <div className="p-5 rounded-xl border bg-white/80 backdrop-blur-md flex flex-col gap-3 cursor-pointer 
      shadow-sm hover:shadow-2xl 
      hover:-translate-y-1 hover:scale-105 
      transition-all duration-300">

        {/* ✅ Better to use next/image */}
        <Image src={item.icon} alt="icon" width={50} height={50} />

        <h2 className='font-medium text-lg'>{item.name}</h2>
        <p className='text-gray-500 line-clamp-3'>{item.desc}</p>

      </div>
    </Link>
  )
}

export default TemplateCard