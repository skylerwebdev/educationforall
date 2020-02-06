import React from 'react'
import '../styles/Pages.css'
const Jobs = () => {
    const str = 'There is no cost to apply. However, If you are over the age of 18 and are selected for a K-12 Tutoring Position there is a $45 background check fee.';
    const age = str.toUpperCase();
    return (
        <div className='mnPg'>
            <div className="mnHdr">
                <h1 className="mnHdr HH1">NOW HIRING</h1>
    <h5 className="mnSubHdr SH5">Education For All is now hiring for all positions. At this time all positions are part time and as needed. Instructors/Tutors will be paid a rate agreed upon per class/student.  {age}</h5>
            <div className="mnBd">
                <div className="mnBdLt">
                    <h2 className="mnBdLtHdr HH2">Hiring / Selection Process</h2>
                    <ol className='mnBdLtOl'>
                        <li><a href='#'> 1. Apply</a></li>
                        <li><a href='#'>2. Take assessments</a> (if applicable)</li>
                        <li>3. Interview</li>
                        <li><a href='#'>4. Submit Needed Documentation</a></li>
                        <li>5. Wait to be contacted</li>
                    </ol>
                </div>
                <div className="mnBdRt">
                <h2 className="mnBdRtHdr HH2">Positions Avaliable</h2>
                <ul className='mnBdLtOl'>
                        <li>Home School Instructors</li>
                        <li>Instructors for our Computer Training Courses</li>
                        <li>Instructors for our Web Development Courses</li>
                        <li>Tutors K-12 (Anyone age 13+ may apply)</li>
                        <li>Tutors Development (Anyone age 13+ may apply)</li>
                        <li>Tutors College Courses</li>    
                        <li>Career Counselors</li>
                    </ul>
                </div>
            </div>
            </div>
            <div className="pgFtr">
                <h1 className="pgFtrH1 HH1"><a href='#'>APPLY TODAY</a></h1>
            </div>
        </div>
    )
}

export default Jobs
