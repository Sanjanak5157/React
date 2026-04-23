import React from 'react'

const RigthCardContent = (props1) => {
  return (
       <div className='absolute top-0 left-0 h-full w-full  p-8
       flex flex-col justify-between '>

        <h1 className=' bg-white text-2xl font-bold rounded-full h-15 w-15 
        flex justify-center items-center'>{props1.id}</h1>

        <div>
           <p className='text-xl font-4xl leading-relaxed text-white mb-30'>{props1.intro}</p>
         <div className='flex justify-between'>

         <button style={{backgroundColor:props1.color}} className=' text-white font-medium px-8 py-3 
         rounded-full text-lg'>{props1.tag}</button>
         <button style={{backgroundColor:props1.color}}className=' text-white font-medium px-8 py-3 
         rounded-full text-lg'> <i className="ri-arrow-right-line"></i></button>

        </div>
      </div>
    </div>
    
  )
}

export default RigthCardContent