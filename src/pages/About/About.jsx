import React from 'react'
import about from '../../img/about.svg'
import Button from '../../component/Button/Button'

const About = () => {
  return (
    <div className='About lg:flex w-10/12 m-auto pt-10'>
      <div className='lg:w-1/2'>
        <img src={about} className='lg:w-11/12'></img>
      </div>
      <div className='lg:w-1/2'>
        <label className='text-oranger font-medium text-base'>ABOUT</label>
        <h1 className='lg:text-4xl font-bold mt-6 text-3xl'>Hi! I Am Bac</h1>
        <p className='mt-6 xl:text-1xl'>I am an information technology student who is studying and interested in software engineering, expecically in the field of Front End. This is my portfolio of what projects I have worked on.</p>
        <div className='lg:w-1/3 w-1/2'>
          <Button name={'DOWNLOAD CV'} to='https://www.topcv.vn/xem-cv/CVIABgEFVlMAXAMLVFIEAwNWAF0FUFIBAw4LCQ6f75'></Button>
        </div>
      </div>
    </div>
  )
}

export default About