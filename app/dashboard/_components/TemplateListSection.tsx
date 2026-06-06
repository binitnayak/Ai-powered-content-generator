import Templates from '@/app/(data)/Templates'
import React, { useEffect } from 'react'
import TemplateCard from './TemplateCard'

export interface TEMPLATE {
  name: string;
  desc: string;
  icon: string;
  category: string;
  slug: string;
  form?: FORM[];
}

export interface FORM {
  label: string;
  field: string;
  name: string;
  required?: boolean;
}

function TemplateListSection({userSearchInput}:any) {

useEffect(()=>{
   console.log(userSearchInput)
},[userSearchInput])


  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-10">
      {Templates.map((item: TEMPLATE, index: number) => (
        <TemplateCard key={index} item={item} />
      ))}
    </div>
  );
}

export default TemplateListSection;