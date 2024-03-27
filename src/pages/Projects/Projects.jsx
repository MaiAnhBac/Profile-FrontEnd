import React from 'react'
import Nike from '../../img/Nike.png'
import { AiFillGithub } from 'react-icons/ai'
import { BsLaptop } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Headphone from '../../img/headphone.png'
import Weather from '../../img/weather.png'
import ECommerce from '../../img/e-commerce.png'
import Dashboard from '../../img/dashboard.png'

const Projects = () => {
  return (
    <div className='MyWord mt-10'>
      <div className='text-center mb-5'>
        <label className='text-oranger font-medium text-base'>CHECK OUT MY REACT PROJECTS</label>
        <h1 className='lg:text-4xl font-bold mt-3 text-2xl'>My Work</h1>
      </div>
      <div className='lg:grid grid-cols-3 gap-4 w-10/12 mx-auto'>
        <div className='bg-white rounded-md p-5 mb-3'>
          <img src={Nike} className='mb-2'></img>
          <label className='text-oranger font-medium text-xs'>REACT | REDUX | MATERIAL UI</label>
          <h1 className='lg:text-2xl font-bold text-xl'>Nike Shop</h1>
          <div className='flex justify-between mt-3'>
            <Link to='https://anhbac-nikewebsite.vercel.app/'>
              <div className='flex'>
                <BsLaptop />
                <label className='text-xs ml-3'>LIVE DEMO</label>
              </div>
            </Link>
            <Link to='https://github.com/MaiAnhBac/Nike-React'>
              <div className='flex'>
                <AiFillGithub />
                <label className='text-xs ml-3'>SOURCE CODE</label>
              </div>
            </Link>
          </div>
        </div>
        <div className='bg-white rounded-md p-5 mb-3'>
          <img src={Weather} className='mb-2'></img>
          <label className='text-oranger font-medium text-xs'>REACTJS | TAILWINDCSS</label>
          <h1 className='lg:text-2xl font-bold text-xl'>Weather App</h1>
          <div className='flex justify-between mt-3'>
            <Link to='https://github.com/MaiAnhBac/Weather-app'>
              <div className='flex items-center'>
                <BsLaptop />
                <label className='text-xs ml-3'>LIVE DEMO</label>
              </div>
            </Link>
            <Link to='https://github.com/MaiAnhBac/Weather-app '>
              <div className='flex'>
                <AiFillGithub />
                <label className='text-xs ml-3'>SOURCE CODE</label>
              </div>
            </Link>

          </div>
        </div>
        <div className='bg-white rounded-md p-5 mb-3'>
          <img src={Headphone} className='mb-2'></img>
          <label className='text-oranger font-medium text-xs'>HTML | CSS | JAVASCRIPT | RESPONSIVE</label>
          <h1 className='lg:text-2xl font-bold text-xl'>Shop Headphone</h1>
          <div className='flex justify-between mt-3'>
            <Link to='https://shop-headphone-2024.vercel.app/index.html'>
              <div className='flex items-center'>
                <BsLaptop />
                <label className='text-xs ml-3'>LIVE DEMO</label>
              </div>
            </Link>
            <Link to='https://github.com/MaiAnhBac/Shop-headphone'>
              <div className='flex'>
                <AiFillGithub />
                <label className='text-xs ml-3'>SOURCE CODE</label>
              </div>
            </Link>

          </div>
        </div>
        <div className='bg-white rounded-md p-5 mb-3'>
          <img src={Dashboard} className='mb-2'></img>
          <label className='text-oranger font-medium text-xs'>HTML | CSS | JAVASCRIPT | RESPONSIVE</label>
          <h1 className='lg:text-2xl font-bold text-xl'>Dashboard</h1>
          <div className='flex justify-between mt-3'>
            <Link to='https://dashboard-headphone-2024.vercel.app/'>
            <div className='flex'>
              <BsLaptop />
              <label className='text-xs ml-3'>LIVE DEMO</label>
            </div>            
            </Link>
            <Link to='https://github.com/MaiAnhBac/dashboard-headphone'>
            <div className='flex'>
              <AiFillGithub />
              <label className='text-xs ml-3'>SOURCE CODE</label>
            </div>
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Projects