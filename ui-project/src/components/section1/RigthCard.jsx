import React from 'react'
import 'remixicon/fonts/remixicon.css'
import RigthCardContent from './RigthCardContent'

const RigthCard = (props) => {
  return (
    <div className='h-full shrink-0 relative w-80 overflow-hidden  rounded-4xl'>
        <img className='h-full w-full object-cover' 
        src={props.img} alt=""/>
        
    <RigthCardContent id={props.id} intro={props.intro} color={props.color} tag={props.tag}/>



        {/* <div>

        <img className='h-full w-full object-cover' src="https://images.unsplash.com/photo-1549576490-b0b4831ef60a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        </div>
        <div>
        <img className='h-full w-full object-cover' src="https://plus.unsplash.com/premium_photo-1672046218054-dfd345721ff2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        </div> */}
  </div>
  )
}

export default RigthCard