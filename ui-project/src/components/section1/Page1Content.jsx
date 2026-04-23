import React from 'react'
import LeftContent from './LeftContent'
import RigthContent from './RightContent'
const Page1Content = (props) => {
  return (
    <div className='pb-16 pt-6 flex items-center gap-15 h-[90vh] px-18'>
       <LeftContent/>
        <RigthContent users={props.users}/>
    </div>
  )
}

export default Page1Content