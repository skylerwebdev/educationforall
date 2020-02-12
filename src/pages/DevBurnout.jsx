import React from 'react'
import '../styles/Pages.css'
import { Link } from 'react-router-dom'
const DevBurnout = () => {
    return (

        <div className='mnPg'>
            <div className="mnHdr">
                <h1 className="mnHdr HH1">Developer Burnout Course</h1>
                <h5 className="up10">80+ HOURS OF LIVE INSTRUCTION</h5>
                    <h2 className="mnSubHdr up20 SH2">Day and Evening Classes Avaliable</h2>
    <h4 className="mnSubSubHdr SH2">5 Week Evening Classes Start 3/2/2020</h4>
    <h4 className="mnSubSubHdr up20">4 Week Day Classes Start 3/30/2020</h4>
    <h5 className="mnSubSubHdr up 10">Day 8am - 5pm CST</h5>
    <h5 className="up20">Evening 5pm - 10pm PST</h5>
            <div className="mnBd">
                <div className="mnBdLt">
                    <h2 className="mnBdLtHdr HH2">You will learn</h2>
                    <ul>
                        <li>Git</li>
                        <li>BASH</li>
                        <li>HTML</li>
                        <li>PHP</li>
                        <li>JavaScript</li>
                        <li>CSS, LESS, SASS</li>
                        <li>Node.JS</li>
                        <li>Building REST API's</li>
                        <li>SQL</li>
                        <li>React w/Classes</li>
                        <li>React w/Hooks</li>
                        <li>React Native (Building Mobile Apps)</li>
                        <li>State Management</li>
                        <li>AWS Deployments</li>
                        <li>AWS S3 Buckets</li>
                        <li>And More</li>
                    </ul>
                </div>
                <div className="mnBdRt">
                <h2 className="mnBdRtHdr HH2">What you will get out of it</h2>
                <ul className='mnBdLtOl'>
                        <li>80+ Hours of LIVE INSTRUCTION using ZOOM</li>
                        <li>100+ Hours of hands on coding experience</li>
                        <li>Experience working on a team and using Git in a team environment</li>
                        <li>Proper knowledge of how to research issues</li>
                        <li>A portfolio with your own work</li>
                        <li>Continuing Education - you will have access to any future course materials</li>
                        <li>Access to a growing development community on our exclusive Slack channel</li>
                    </ul>
                </div>
            </div>
            </div>
            <div className="pgFtr">
            <h4 className='homep'>Here is the bottom line and what a lot of coding bootcamps fail to mention. After you complete the course you will have 100+ hours of "hands on" coding experience, you will have a professional porfolio with several pieces of your own work, you will be "fluent" in several different coding languages. <br/> Unfortunately, this itself is still not enough to get a job as a professional developer. EFA is dedicated to helping finding you a job and the only way to do that is to get hours under your belt. Therefore, after you graduate from any of our courses* you will be invited to continue to work on any of our ongoing projects as an intern developer, some intern positions may be paid others others may not. Lastly, as with any of our courses you will have access to all course materials EFA has to offer*</h4>
                    <p>*Offer not valid on single courses and all monies owed must be paid in full</p>
            <h1><Link to='devburnout/price'>What does it Cost?</Link></h1>
            </div>
        </div>
    )
}



    

export default DevBurnout