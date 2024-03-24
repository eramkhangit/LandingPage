import React from 'react'

function Button( { title }) {
   
  return (
    <div>
        <button className='border-2 border-slate-400 bg-white py-2 px-5 rounded-full mt-4 text-black hover:bg-green-400  shadow-lg transition-all '>
            {title}</button>
    </div>
  )
}

export default Button