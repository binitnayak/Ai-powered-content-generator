"use client"
import React, { useState } from 'react'
import Templates from '../(data)/Templates'
import { Search } from 'lucide-react'
import SearchSection from './_components/SearchSection'
import TemplateListSection from './_components/TemplateListSection'

// function dashboard() {
// const [userSearchInput, setUserSearchInput] = useState<string>("");
//   return (
//     <div> 
//       {
//         /*search section*/
//         <SearchSection onSearchInput={(value: string) => setUserSearchInput(value)} />
//       }
//       {/* Template list section */
// <TemplateListSection userSearchInput={userSearchInput}/>
// }
//     </div>
//   )
// }

// export default dashboard
function Dashboard() {
  const [userSearchInput, setUserSearchInput] = useState<string>("");

  return (
    <div>
      <SearchSection
        onSearchInput={(value: string) => setUserSearchInput(value)}
      />

      <TemplateListSection userSearchInput={userSearchInput} />
    </div>
  );
}

export default Dashboard;