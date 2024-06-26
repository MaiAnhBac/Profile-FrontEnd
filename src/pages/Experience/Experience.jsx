import React from 'react'
import './Experience.scss'
import { BiLogoCss3, BiLogoJavascript,BiLogoReact, BiLogoSass, BiLogoTailwindCss } from 'react-icons/bi'
import { BiLogoMedium } from "react-icons/bi";
import { SiRedux } from "react-icons/si";
import { AiFillHtml5 } from 'react-icons/ai'
import {FaHourglassHalf} from 'react-icons/fa'
import {TbBrandNextjs} from 'react-icons/tb'

const Experience = () => {
    return (
        <div className='Experience mt-10'>
            <div className='text-center mb-5'>
                <label className='text-oranger font-medium text-base'>EXPERIENCE</label>
                <h1 className='lg:text-4xl font-bold mt-3 text-2xl'>Work Experience</h1>
            </div>

            <div class="tl">
                <div class="tl-container tl-left">
                    <div class="tl-content">
                        <span className='absolute top-0'><TbBrandNextjs className='next' /></span>
                        <div className="left-content">
                            <h2 className='p-1 border-2 w-1/3 rounded-2xl text-center' >ReactJS</h2>
                            <h1 className='lg:text-xl font-bold mt-3 text-2xl'>
                                Project
                            </h1>
                            <h1 className='lg:text-lg font-bold text-2xl'>
                                Nike Shop
                            </h1>
                            <div className='grid lg:grid-cols-4 gap-2 mt-5 grid-cols-2'>
                                <div className="react w-auto flex py-0.5 px-1 border-2 rounded-2xl text-center">
                                    <BiLogoReact className='icon-react w-5 h-5' />
                                    <h3 className='ml-2 text-xs' >React</h3>
                                </div>
                                <div className="react w-auto flex p-0.5 border-2 rounded-2xl text-center">
                                    <SiRedux style={{color: '#230033' }} className=' w-5 h-5 text-sky-500' />
                                    <h3 className='ml-2 text-xs' >Redux</h3>
                                </div>
                                <div className="react w-auto flex p-0.5 border-2 rounded-2xl text-center">
                                    <BiLogoMedium style={{color: 'blue'}} className=' w-5 h-5 text-amber-300' />
                                    <h3 className='ml-2 text-xs' >Material UI</h3>
                                </div>
                            </div>
                        </div>
                        <h4 className='text-xs font-medium lg:absolute'>02.2023 - 04.2023</h4>
                    </div>
                </div>
                <div class="tl-container tl-right">
                    <div class="tl-content">
                        <span className='absolute top-0'><BiLogoReact className='icon w-10 h-10' /></span>
                        <div className="left-content">
                            <h2 className='p-1 border-2 w-1/3 rounded-2xl text-center' >ReactJS</h2>
                            <h1 className='lg:text-xl font-bold mt-3 text-2xl'>
                                Project
                            </h1>
                            <h1 className='lg:text-lg font-bold text-2xl'>
                                Weather App
                            </h1>
                            <div className='grid lg:grid-cols-4 gap-2 mt-5 grid-cols-2'>
                                <div className="react w-auto flex p-0.5 border-2 rounded-2xl text-center">
                                    <BiLogoReact className='icon-react w-5 h-5' />
                                    <h3 className='ml-2 text-xs' >React</h3>
                                </div>
                                
                                <div className="react w-auto flex p-0.5 border-2 rounded-2xl text-center">
                                    <BiLogoTailwindCss className=' w-5 h-5 text-sky-500' />
                                    <h3 className='ml-2 text-xs' >Tailwind</h3>
                                </div>

                            </div>
                        </div>
                        <h4 className='text-xs font-medium lg:absolute'>04.2023 - 05.2023</h4>
                    </div>
                </div>
                <div class="tl-container tl-left">
                    <div class="tl-content">
                        <span className='absolute top-0'><BiLogoReact className='icon w-10 h-10' /></span>
                        <div className="left-content">
                            <h2 className='p-1 border-2 w-1/3 rounded-2xl text-center' >Front End</h2>
                            <h1 className='lg:text-xl font-bold mt-3 text-2xl'>
                                Project
                            </h1>
                            <h1 className='lg:text-lg font-bold text-2xl'>
                                Website and Dashboard Headphone
                            </h1>
                            <div className='grid lg:grid-cols-4 gap-2 mt-5 grid-cols-2'>
                                <div className="react w-auto flex py-0.5 px-1 border-2 rounded-2xl text-center">
                                    <AiFillHtml5 className=' w-5 h-5 text-orange-600' />
                                    <h3 className='ml-2 text-xs' >Html5</h3>
                                </div>
                                <div className="react w-auto flex p-0.5 border-2 rounded-2xl text-center">
                                    <BiLogoCss3 style={{color: 'blue'}} className=' w-5 h-5 text-pink-500' />
                                    <h3 className='ml-2 text-xs' >CSS</h3>
                                </div>
                                <div className="react w-auto flex p-0.5 border-2 rounded-2xl text-center">
                                    <BiLogoJavascript className=' w-5 h-5 text-amber-300' />
                                    <h3 className='ml-2 text-xs' >Javascript</h3>
                                </div>
                            </div>
                        </div>
                        <h4 className='text-xs font-medium lg:absolute'>14.09.2023 - 27.09.2023</h4>
                    </div>
                </div>
                <div class="tl-container tl-hour">
                    <div class="tl-content !bg-transparent">
                        <span className='absolute top-0'><FaHourglassHalf className='icon text-amber-300' /></span>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Experience