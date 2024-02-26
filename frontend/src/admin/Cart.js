import React from 'react'


const Cart = ({result}) => {

  return (
    <div className='flex flex-col items-center border-2  text-black border-black border-dashed rounded-md  h-[194px]'>
        <div className='w-full flex'>
        <div className='w-[100px] '>

        {/* <img src={logo} alt="log" /> */}
        <div className='h-[77px]'></div>
            
        </div>
       
        </div>
       
        <div className='w-[150px] text-2xl' >
            {result}
        </div>
       
        
        </div>
  )
}

export default Cart