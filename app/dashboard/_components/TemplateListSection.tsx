// import Templates from '@/app/(data)/Templates'
// import React, { useEffect, useState } from 'react'
// import TemplateCard from './TemplateCard'

// export interface TEMPLATE {
//   name: string;
//   desc: string;
//   icon: string;
//   category: string;
//   slug: string;
//   form?: FORM[];
// }

// export interface FORM {
//   label: string;
//   field: string;
//   name: string;
//   required?: boolean;
// }

// function TemplateListSection({userSearchInput}:any) {
// const [templateList,setTemplateList]=useState(Templates)
// useEffect(()=>{
// if(userSearchInput)
// {
//   const filterData=Templates.filter(item=>
//     item.name.toLowerCase().includes(userSearchInput.toLowerCase)
//   );
//   setTemplateList(filterData);
// }
// else{
//   setTemplateList(Templates)
// }





// },[userSearchInput])




//   return (
//     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-10">
//       {Templates.map((item: TEMPLATE, index: number) => (
//         <TemplateCard key={index} item={item} />
//       ))}
//     </div>
//   );
// }

// export default TemplateListSection;

// "use client";

// import Templates from '@/app/(data)/Templates';
// import React, { useEffect, useState } from 'react';
// import TemplateCard from './TemplateCard';
// import { TEMPLATE, FORM } from '@/app/types'

// // ✅ Types
// export interface TEMPLATE {
//   name: string;
//   desc: string;
//   icon: string;
//   category: string;
//   slug: string;
//   form?: FORM[];
// }

// export interface FORM {
//   label: string;
//   field: string;
//   name: string;
//   required?: boolean;
// }

// // ✅ Props typing
// interface PROPS {
//   userSearchInput: string;
// }

// function TemplateListSection({ userSearchInput }: PROPS) {

//   const [templateList, setTemplateList] = useState<TEMPLATE[]>(Templates);

//   useEffect(() => {
//     const search = userSearchInput?.toLowerCase().trim();

//     if (search) {
//       const filterData = Templates.filter((item) =>
//         item.name.toLowerCase().includes(search) ||
//         item.desc.toLowerCase().includes(search) ||
//         item.category.toLowerCase().includes(search)
//       );

//       setTemplateList(filterData);
//     } else {
//       setTemplateList(Templates);
//     }
//   }, [userSearchInput]);

//   return (
//     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-10">
//       {templateList.length > 0 ? (
//         templateList.map((item: TEMPLATE, index: number) => (
//           <TemplateCard key={index} item={item} />
//         ))
//       ) : (
//         <p className="col-span-full text-center text-gray-500">
//           No templates found 😕
//         </p>
//       )}
//     </div>
//   );
// }

// export default TemplateListSection;


"use client";

import Templates from '@/app/(data)/Templates';
import React from 'react';
import TemplateCard from './TemplateCard';
import { TEMPLATE } from '@/app/types';

function TemplateListSection({ userSearchInput }: { userSearchInput: string }) {
  const search = userSearchInput?.toLowerCase().trim();

  const templateList = search
    ? Templates.filter((item) =>
        item.name.toLowerCase().includes(search) ||
        item.desc.toLowerCase().includes(search) ||
        item.category.toLowerCase().includes(search)
      )
    : Templates;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-10">
      {templateList.map((item: TEMPLATE, index: number) => (
        <TemplateCard key={index} item={item} />
      ))}
    </div>
  );
}

export default TemplateListSection;