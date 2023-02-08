import React from 'react'

const Footer = () => {
  return (
    <>
      <div className=' bg-[#02DAFF] w-full h-20 flex justify-between items-center fixed bottom-0'>
        <a href='https://github.com/AlfredoGarciaYapor/cats-test' className='mx-3' alt="github repository">
          <img src="./img/githubLogo.png" alt="repository" className='w-7' />
        </a>
        <p className='mx-3 text-2xl text-white font-sans font-semibold'> Alfredo Garcia Yapor</p>
      </div>
    </>
  )
}

export default Footer