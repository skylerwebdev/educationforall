import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Home.css'
const Home = () => {
    return (
        <div className='mnPage'>
            
            <div className="mnHdr"><h1>Welcome to Education for All</h1>
            <h2>Established 2020</h2>
            <h2>Our Mission:</h2>
            <p>To provide quality education to people in all varietes of subjects. To not make false promises and mislead you. Lastly, to keep you the customer happy.</p>
            <h2>WE ARE NOT A CODING BOOTCAMP</h2>
            <p>We would not like to be looked at as a "coding bootcamp" that term tends to be overrated and overused. Most coding bootcamps promise you that when you graduate you will magically be handed a job. Unfortunately, that is not the case at all. In order FOR MOST PEOPLE to be considered for a job as a professional developer they must have 1000+ hours of coding under their belts, have a professional resume, and have a professional portfolio.</p><p> <Link to='/devburnout'>Our 4 Week Burnout</Link> only gives you 100-150 hours of "hands on coding" experince. Never fear At Education for All we will not leave you hanging. Once you graduate from one of our programs you will automatically be hired as an intern. This will not only give you more hours of coding experince, real life portfolio pieces, and most importantly a job for your resume. SOME internships may even put a little bit of money in your pocket as well. </p>
            </div>
            <div className="mnBd">
            <div className="mnRt">
                <div className="mnRtHdrDiv">
                    <h1 className='mnRtHdr'>Course Offerings</h1>
                    <h2 className="mnRtSubHdr">Current Courses</h2>
                    <ul>
                        <li>
                            <Link to='/devburnout'>4 Week Developer Burnout Class</Link>
                        </li>
                    </ul>
                    <h2 className="secRtSubHdr">Coming Soon</h2>
                    <ul>
                        <li>K-12 Tutoring</li>
                        <li>College Tutoring</li>
                        <li>Interview Prep</li>
                        <li>16 Week Developer Course</li>
                        <li>8 Week Part Time Burnout Course</li>
                        <li>32 Week Part Time Developer Course</li>
                        <li>
                            <>Individual Computer Training (Windows, oSX, and Linux)</>
                        </li>
                        <li>
                            <>Individual Tutoring Development</>
                        </li>
                        <li>
                            <>After Dinner with Scratch Ages 10-13</> 
                        </li>
                        <li><>Contiuing Education</></li>
                        <li>And Much More to Come.</li>
                    </ul>
                </div>
                <div className="mnRtDiv"></div>
            </div>
            <div className="mnLt">
                <div className="mnLtHdrDiv">
                    <h1 className='mnLtHdr'>Looking for Educators</h1>
                    <h2 className="mnLtSubHdr">Current Openings</h2>
                    <ul>
                        <li>Student Tutors K-12 (Anyone age 13+ may apply)</li>
                        <li>Student Tutors Development (Anyone age 13+ may apply)</li>
                        <li>Student Tutors College Courses</li>    
                        <li>Instructors for our Computer Training Courses</li>
                        <li>Instructors for our Web Development Courses</li>
                        <li>Career Counselors</li>
                    </ul>
                    <p>More Information?</p>
            Email: skylerwebdev@gmail.com
                </div>
                <div className="mnLtDiv"></div>
            </div>
            </div>
        </div>
    )
}

export default Home
