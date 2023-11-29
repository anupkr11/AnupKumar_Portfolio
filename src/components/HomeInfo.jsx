import React from 'react'
import { Link } from 'react-router-dom';
import {arrow} from "../assets/icons"

const InfoBox = ({text, link, btnText}) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain' />
        </Link>
    </div>
)

const renderContent = {
    1 : (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>Hi, I am <span className='font-semibold'>Anup Kumar</span>👋 <br/>MERN Stack Developer</h1>
    ),
    2 : (
        <InfoBox 
        text="B.tech CSE Undergraduate from VIT University" link="/about" btnText="Learn More"/>
    ),
    3 : (
        <InfoBox 
        text="Over the years, successfully oversaw several initiatives. Wondering what the effects will be?" link="/projects" btnText="Visit my projects section"/>
    ),
    4 : (
        <InfoBox 
        text="Feel free to contact" link="/contact" btnText="Let's Talk"/>
    ),
}


const HomeInfo = ({cuurentStage}) => {
  return renderContent[cuurentStage] || null;
}

export default HomeInfo