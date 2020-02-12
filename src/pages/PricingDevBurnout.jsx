import React from 'react'
import '../styles/Pages.css'
import { Link } from 'react-router-dom'
const PricingDevBurnout = () => {
    
    return (
        <div className='mnPg'>
            <div className="mnHdr">
                <h1 className="mnHdr HH1">4 Week Developer Burnout Pricing</h1>
    <h2 className="mnSubHdr SH2">Have Development Experience?</h2>
    <h5 className="mnSubSubHdr SH5">Looking for 5 Individuals to be Team Leads and attend the class for FREE</h5>
            <div className="mnBd">
                <div className="mnBdLt">
                <h4>Introductory Pricing for the first 25 Day and Evening (50 Total)</h4>
                    
                     <ul className='styleUl'>
                        <li>$50 to Reserve a Seat</li>
                        <li>$100 before the beginning of each instruction week</li>
                    </ul>
                </div>
                <div className="mnBdRt">
                <h4>Introductory Pricing for the second 25 Day and Evening (50 Total)</h4>
                <ul className="styleUl">
                        <li>$100 to Reserve a Seat</li>
                        <li>$200 before the beginning of each instruction week</li>
                    </ul>
                                  
                </div>
            </div>
            </div>
            <div className="pgFtr">
            <h2 className="mnBdRtHdr HH2">Regular Pricing</h2>
                                            <ul className='styleU'>
                                            <li>$200 to Reserve a Seat</li>
                                            <li>$250 before the beginning of each instruction week</li>
                                            </ul>
                <h1 className="pgFtrH1 HH1"><Link to='/devburnout/signup'>Reserve your seat today!!!</Link></h1>
                
                <p>Class sizes limited to 50 people!</p>
            </div>
        </div>
    )
}

export default PricingDevBurnout
