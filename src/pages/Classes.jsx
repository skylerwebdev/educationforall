import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Home.css'
const Classes = () => {
    return (
        <div className='mnPage'>
            
            <div className="mnHdr"><h1>Education for All</h1>
            <h2>Classes</h2>
            </div>
            <div className="mnBd">
            <div className="mnRt">
                <div className="mnRtHdrDiv">
                    <h1 className='mnRtHdr'>Course Offerings K-12</h1>
                    <ul>
                    </ul>
                    <h2 className="secRtSubHdr">Coming Soon</h2>
                    <ul>
                        <li>
                            <>After Dinner with Scratch Ages 10-13</> 
                        <li>K-12 Tutoring</li>
                        </li>
                        <li>And Much More to Come</li>
                    </ul>
                </div>
                <div className="mnRtDiv"></div>
            </div>
            <div className="mnLt">
                <div className="mnLtHdrDiv">
                    <h1 className='mnLtHdr'>Course Offerings 18+</h1>
                    <ul>
                        <li>
                            <Link to='/devburnout'>4 Week Developer Burnout Class</Link>
                        </li>
                        <h2 className="secRtSubHdr">Coming Soon</h2>

                        <li>16 Week Developer Course</li>
                        <li>8 Week Part Time Burnout Course</li>
                        <li>32 Week Part Time Developer Course</li>
                            <>Individual Computer Training (Windows, oSX, and Linux)</>
                        <li>
                            <>Individual Tutoring Development</>
                        </li>
                        <li>College Tutoring</li>
                        <li>Interview Prep</li>
                        <li>
                        </li>
                        <li><>Contiuing Education</></li>
                    </ul>
                </div>
                <div className="mnLtDiv"></div>
            </div>
            </div>
        </div>
    )
}

export default Classes
