// import React from 'react'
// import FormSection from '../_components/FormSection'
// import OutputSection from '../_components/OutputSection'

// interface PROPS {
//   params: {
//     'template-slug': string;
//   };
// }

// function CreateNewContent({ params }: PROPS) {

//   const selectedTemplate:TEMPLATE=<templates?.find((item)=.item.slug==props.params.templatesslug)

//   return (
//     <div className='grid grid-cols-1 md:grid-cols-2 gap-10 p-5'>
//       <FormSection />
//       <OutputSection />
//     </div>
//   )
// }

// export default CreateNewContent;

import React from 'react'
import Templates from '@/app/(data)/Templates'
import { TEMPLATE } from '@/app/types'
import ClientContent from './ClientContent'

export default async function CreateNewContent({ params }: { params: Promise<{ 'template-slug': string }> }) {
  const resolvedParams = await params;
  
  const selectedTemplate: TEMPLATE | undefined = Templates.find(
    (item) => item.slug === resolvedParams['template-slug']
  );





  
  return <ClientContent selectedTemplate={selectedTemplate} />;
}