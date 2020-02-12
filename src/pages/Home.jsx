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
            
            <h1 className='mnHdr hmHdrH1'>NOT A CODING BOOTCAMP</h1>
            <h5 className="mnSubHdr SH2">"Coding Bootcamp" is a term that tends to be overrated and overused.</h5>
            <p>Most coding bootcamps promise that when you graduate you will magically be handed a job.
                 Unfortunately, that is not the case. In order for MOST PEOPLE to be considered for a job as a professional developer they must have 1000+ hours of coding under their belts, have a professional resume, and have a professional portfolio.</p><p> <Link to='/devburnout'>Our Developer Burnout course</Link> only gives you 100-150 hours of "hands on coding" experience. Never fear At Education for All we will not leave you hanging. Once you graduate from one of our programs you will automatically be hired as an intern. This will not only give you more hours of coding experience, real life portfolio pieces, and most importantly a job for your resume. SOME internships may even put a little bit of money in your pocket as well. </p>
            </div>
            <div className="mnBd">
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
            </div>
        </div>
    )
}

