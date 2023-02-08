import React from 'react'

const FactElement = ({fact}) => {
  return (
    <>
      <div className=' text-left'>
        <p className='font-light text-gray-500 dark:text-gray-400'>{fact}</p>
        <hr />
      </div>      
    </>
  )
}

export default FactElement