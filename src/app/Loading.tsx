import React from 'react'

const Loading = () => {
  return (
    <div className='container mx-auto flex mt-40 flex-col items-center justify-center text-primaryDarker'>
      <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
        <circle cx="50" cy="50" r="40" className='bg-primary' stroke-width="10" />
      </svg>
      carregando...
  </div>
  )
}

export default Loading