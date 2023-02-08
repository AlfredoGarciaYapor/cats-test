import React from 'react'

const Header = () => {
  return (
    <>
      <div className=' bg-[#02DAFF] w-full h-20 flex justify-center items-center sticky top-0'>
        <p className=' text-2xl text-white font-sans font-semibold'>CATS</p>
        <img src='./img/logo.jpg' className=' w-16' alt='cat logo'/>
        <p className=' text-2xl text-white font-sans font-semibold'> FACTS</p>
      </div>
    </>
  )
}

export default Header