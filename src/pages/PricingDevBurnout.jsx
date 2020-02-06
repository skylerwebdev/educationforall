import React from 'react'
import '../styles/Pages.css'
import { Link as L } from 'react-router-dom'
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
                        <li>$100 to Reserve a Seat</li>
                        <li>$50 before the beginning of each instruction week</li>
                        <li>A percentage of your salary for 2 years after you are making $30,000+ per year not to exceed 10% Based on what you believe we are worth.</li>
                    </ul>
                </div>
                <div className="mnBdRt">
                <h4>Introductory Pricing for the second 25 Day and Evening (50 Total)</h4>
                    <ul className='styleUl'>
                        <li>$200 to Reserve a Seat</li>
                        <li>$100 before the beginning of each instruction week</li>
                        <li>A percentage of your salary for 2 years after you are making $30,000+ per year not to exceed 10% Based on what you believe we are worth.</li>
                    </ul>
                <h2 className="mnBdRtHdr HH2">Regular Pricing $15000 or</h2>
                                            <ul className='styleUl'>
                                            <li>$200 Down</li>
                                            <li>$200 Per Week during the course</li>
                                            <li>10% of your income during your first 2 years as a developer not to exceed $15,000</li></ul>
                </div>
            </div>
            </div>
            <div className="pgFtr">
                <h1 className="pgFtrH1 HH1"><a href='https://forms.gle/YkrVF7reHZsqji4n6'>APPLY TODAY</a></h1>
            </div>
        </div>
    )
}

export default PricingDevBurnout
