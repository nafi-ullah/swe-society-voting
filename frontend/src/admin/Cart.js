import React from 'react'


const Cart = ({name, post, image, marka, vote}) => {

  return (
    <div className='flex w-[550px] mr-5 mt-12  border-2  text-black border-black border-dashed rounded-md  h-[230px]'>
       <div className='m-2 w-[150px]'>
          <img src={marka} alt="" width={130} height={60}/>
       </div>
       <div className='flex flex-col'>
            <div className='text-xl mt-3 font-bold'>{name}</div>
            <div className='text-lg'>{post}</div>
            <div className='flex justify-center rounded-full bg-red-200 w-[100px] h-[100px] m-auto'>
              <div className='text-5xl pt-6'>
              {vote}
              </div>
           
            
            </div>
       </div>
       
        
        </div>
  )
}

export default Cart