// import React from 'react'
// import { ArrowUpRight } from 'lucide-react';
// const RightContent = () => {
//   return (
//     <div  className='flex h-full w-3/4 bg-blue-600'>
//         <div >
//             <ArrowUpRight className='text-8xl'/>
//              </div>
//     </div>
//   )
// }

// export default RightContent

import React from 'react'
import RigthCard from './RigthCard'
const RightContent = (props) => {
  console.log(props.users);
  return (
    <div id='right' className='flex h-full w-2/3  flex flex-nowrap gap-10 p-8'>
       {/* <RigthCard user={props.users}/>
       <RigthCard/>
       <RigthCard/>
       <RigthCard/>
       <RigthCard/> */}
       {props.users.map(function (elem,idx){
        return <RigthCard key={idx} intro={elem.intro} color={elem.color} id={idx+1} img={elem.img} tag={elem.tag}/>
       })}
       </div >
  )
}

export default RightContent
