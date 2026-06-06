import React from 'react'
import { TEMPLATE } from './TemplateListSection'
import Image from 'next/image'
function TemplateCard({ item }: { item: TEMPLATE }) {
  return (
    // <div className='p-5 shadow-md rounded-md border bg-white flex flex-col gap-3 cursor-pointer hover:scale-105 transition-all  '>
    <div className="p-5 rounded-xl border bg-white/80 backdrop-blur-md flex flex-col gap-3 cursor-pointer 
shadow-sm hover:shadow-2xl 
hover:-translate-y-1 hover:scale-105 
transition-all duration-300">
<img src={item.icon} alt="icon" width={50}  height={50}/>
<h2 className='font-medium text-lg'>{item.name}</h2>
<p className='text-gray-500 line-clamp-3'>{item.desc}</p>

    </div>
  )
}

export default TemplateCard