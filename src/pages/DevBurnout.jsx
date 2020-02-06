import React from 'react'
import '../styles/Pages.css'
import { Link as L } from 'react-router-dom'
const DevBurnout = () => {
    return (
        <div>
                    <div className="pageMain">
            <div className="pageTop">
                <div className="ptLt"></div>
                <div className="ptCt"><h1 className="ctrHdr">Four Week Developer Burnout Course</h1></div>
                <div className="ptRt"></div>
            </div>
            <div className="pageMid">
                <div className="pmLt">
                    <h3>FIRST CLASS STARTS 3/25/2020</h3>
                    <h3>Day and Evening Classes Avaliable</h3>
                    <ul className="styleU">

                    <li>Day Classes start at 8am CST and end at 5pm CST</li>
                    <li>Evening Classes Start at 5pm CST and end at 10pm CST and will be 5 weeks</li>
                    </ul>
                   
                    {/* <Link to='/apply'>Apply Today</Link>
                     */}
                     <h3>More Information?</h3><h3 className='mnSubSubHdr'> Email: information@eduforall.tech</h3>
                    <h2>This program includes 80+ Hours of live instructor based training.</h2>
                    <h4 className='homep'>What you will learn in the 4 week Developer Burnout</h4>
                    <ul>
<li>Git</li>
<li>HTML</li>
<li>PHP</li>
<li>JavaScript</li>
<li>CSS, LESS, SASS</li>
<li>Node.JS</li>
<li>Apollo, GraphQL</li>
<li>SQL</li>
<li>React</li>
<li>Redux</li>
<li>AWS Deployments</li>
<li>AWS S3 Buckets</li>
<li>And More</li>
                    </ul>
                    <h4 className='homep'>Here is the bottom line and what a lot of coding bootcamps fail to mention. After you complete the course you will have 100+ hours of "hands on" coding experience, you will have a professional porfolio with several pieces of your own work, you will be "fluent" in several different coding languages. <br/> Unfortunately, this itself is still not enough to get a job as a professional developer. EFA is dedicated to helping finding you a job and the only way to do that is to get hours under your belt. Therefore, after you graduate from any of our courses* you will be invited to continue to work on any of our ongoing projects as an intern developer, some intern positions may be paid whereas others may not. Lastly, as with any of our courses you will have access to all course materials EFA has to offer*</h4>
                    <p>*Offer not valid on single courses and all monies owed must be paid in full</p>
                </div>
                <div className="pmRt"></div>
            </div>
            <div className="pageBot">
                <div className="pbLt"></div>
                <div className="pbCt">
                    <h1><L to='devburnout/applytoday'></L></h1>
                    <h1><L to='devburnout/price'>What does it Cost?</L></h1>
                                           </div>
                <div className="pbRt"></div>
            </div>
        </div>
        </div>
    )
}

export default DevBurnout
