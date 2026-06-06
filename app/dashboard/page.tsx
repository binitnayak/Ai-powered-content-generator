import React from 'react'
import Templates from '../(data)/Templates'
import { Search } from 'lucide-react'
import SearchSection from './_components/SearchSection'
import TemplateListSection from './_components/TemplateListSection'

function dashboard() {
  return (
    <div> 
      {
        /*search section*/
        <SearchSection/>
      }
      {/* Template list section */
<TemplateListSection/>
}
    </div>
  )
}

export default dashboard