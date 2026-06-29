"use client";

import React from 'react'
// import { TEMPLATE } from './TemplateListSection'
import Image from 'next/image'
import Link from 'next/link'
import { TEMPLATE } from '@/app/types' 

function TemplateCard({ item }: { item: TEMPLATE }) {
  return (
    <Link href={'/dashboard/content/' + item.slug}>
      <div className="p-6 rounded-2xl border bg-card/50 backdrop-blur-xl flex flex-col gap-4 cursor-pointer 
      shadow-sm hover:shadow-xl hover:shadow-purple-500/10 hover:border-purple-500/50
      hover:-translate-y-2 
      transition-all duration-300 group">

        <div className="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 p-3 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300">
          <Image src={item.icon} alt="icon" width={40} height={40} className="drop-shadow-sm" />
        </div>

        <div>
          <h2 className='font-bold text-xl text-card-foreground group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors'>{item.name}</h2>
          <p className='text-muted-foreground line-clamp-3 mt-2 text-sm leading-relaxed'>{item.desc}</p>
        </div>
      </div>
    </Link>
  )
}

export default TemplateCard