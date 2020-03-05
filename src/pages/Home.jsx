import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import '../styles/Pages.css'
import CarouselComponent from '../components/CarouselComponent'

export default function Home() {
    // const hello = () => {

  const [state, setState] = useState()

    return (
        <div className='mnPg'>
            {/* <CarouselComponent /> */}
            <div className="mnHdr">
            <h1>FREE CLASS</h1>
            <h1 className='mnHdr hmHdrH1'>20 Pepole needed by this Monday</h1>
            <h5 className="mnSubHdr SH2">I would like to start small coding and development classes</h5>
            <p>I need 25-30 people to check out this course for free! This course would be great for anyone interested in the development world. There are a lot of coding bootcamps if you have ever thought about going to one this is the class for you! Once you are done you will not question it anymre.</p>
            <a href="https://www.notion.so/skylerwebdev/Intro-to-Bootcamp-Developer-Burnout-3-9-2020-Starts-3-9-Still-looking-for-about-20-people-e6774a80ab964604b334b57bf3cc8e20">Check here for more information including what we will cover.</a>
            <p>Email me to sign up info@skylerwebdev.tech</p>
            </div>
            {/* <div className="mnBd">
            <div className="mnRt">
                <div className="mnRtHdrDiv">
                    <h1 className='mnRtHdr'>Course Offerings</h1>
                    <h2 className="mnRtSubHdr">Current Courses</h2>
                    <ul>
                        <li>
                            <Link to='/devburnout'>Developer Burnout Class</Link>
                        </li>
                    </ul>
                    <h2 className="secRtSubHdr">Coming Soon</h2>
                    <ul>
                        <li>Interview Prep</li>
                        <li>16 Week Developer Course</li>
                        <li>8 Week Part Time Burnout Course</li>
                        <li>32 Week Part Time Developer Course</li>
                        <li>
                           <>Individual Computer Training (Windows, oSX, and Linux)</>
                        </li>
                        <li>
                            <>Individual Tutoring</>
                        </li>
                        <li>
                            <>After Dinner with Scratch Ages 10-13</> 
                        </li>
                        
                        <li>And More to Come.</li>
                    </ul>
                </div>
                <div className="mnRtDiv"></div>
            </div>
            <div className="mnLt">
                <div className="mnLtHdrDiv">
                    <h1 className='mnLtHdr'>Looking for Educators</h1>
                  
                    <ul>
                        <li>Instructors for our Computer Training Courses</li>
                        <li>Instructors for our Web Development Courses</li>
                        <li>Career Counselors</li>
                    </ul>
                    <p>More Information?</p>
         <a href="mailto:info@eduforall.tech"> Email: info@eduforall.tech</a>
                </div>
                <div className="mnLtDiv"></div>
            </div>
            </div> */}
        </div>
    )
}

