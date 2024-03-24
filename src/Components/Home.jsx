import React from 'react'
import { NavLink } from 'react-router-dom'
// import { Button } from 'react-scroll'
import Button from './Button'
// import Contact from './Contact'

function Home() {
  return (
    <div className='min-h-[70vh] border-2 border-blue-700 flex flex-col md:flex-row md:justify-between items-center md:mx-32 mx-5 mt-10'>

      <div className='md:w-2/4 text-center'>

        <h2>Lorem Ipsum</h2><span>ABC</span>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim inventore accusamus maiores hic culpa quasi architecto. Doloribus atque eum accusamus odio vero reprehenderit. Nihil reprehenderit culpa commodi voluptates consectetur. Nemo!</p>

        <NavLink >
          <Button title="Contact Us" />
        </NavLink>

        <div>
          <img src="" alt="" />
        </div>

      </div>
    </div>
  )
}

export default Home