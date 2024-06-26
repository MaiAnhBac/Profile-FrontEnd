import React from 'react'
import { AiFillGithub, AiOutlineInstagram, AiOutlineMail, AiOutlineSkype } from 'react-icons/ai'
import { BiSolidPhoneCall } from 'react-icons/bi'
import { CiFacebook } from 'react-icons/ci'
import {SlUserFollowing} from 'react-icons/sl'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div className='mt-10'>
        <div className='text-center mb-5'>
          <label className='text-oranger font-medium text-base'>I WANT TO HEAR FROM YOU</label>
          <h1 className='lg:text-4xl font-bold mt-3 text-2xl'>Contact Me</h1>
        </div>
        <div className="grid lg:grid-cols-3 w-11/12 mx-auto py-10 items-center">
          <div className="flex items-center w-full mb-4">
            <span className='p-6 rounded-full bg-green-100 mr-5'><BiSolidPhoneCall className='text-green-500 w-10 h-10' /></span>
            <div>
              <h1 className='font-medium text-xl'>Call me:</h1>
              <h2 className='text-lg'>0349183173</h2>
            </div>
          </div>

          <div className="flex items-center w-full mb-4">
            <span className='p-6 rounded-full bg-pink-100 mr-5'><AiOutlineMail className='text-pink-500 w-10 h-10' /></span>
            <div>
              <h1 className='font-medium text-xl'>Email:</h1>
              <h2 className='text-lg'>maianhbac17052001@gmail.com</h2>
            </div>
          </div>

          <div className="flex items-center w-full mb-4">
            <span className='p-6 rounded-full bg-pink-100 mr-5'><SlUserFollowing className='text-pink-500 w-10 h-10' /></span>
            <div>
              <h1 className='font-medium text-xl'>Follow Me:</h1>
              <div className='flex'>
                <span className='p-1.5 rounded-3xl border-2 bg-gray-200 mr-3'><Link ><AiOutlineSkype className='w-6 h-6' /></Link></span>
                <span className='p-1.5 rounded-3xl border-2 bg-gray-200 mr-3'><Link to="https://www.facebook.com/maianhbac01/?locale=vi_VN"><CiFacebook className='w-6 h-6' /></Link></span>
                <span className='p-1.5 rounded-3xl border-2 bg-gray-200 mr-3'><Link to='https://www.instagram.com/_m.bzac05_/'><AiOutlineInstagram className='w-6 h-6' /></Link></span>
                <span className='p-1.5 rounded-3xl border-2 bg-gray-200 mr-3'><Link to='https://github.com/MaiAnhBac'><AiFillGithub className='w-6 h-6 m-auto' /></Link></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className='bg-slate-700 h-12'>
        <h1 className='text-center text-white pt-3'>Copyright © Mai Anh Bắc - Front End Developer - 2024</h1>
      </footer>
    </>
  )
}

export default Footer