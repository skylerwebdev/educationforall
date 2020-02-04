import React, {useState} from 'react'
import { NavLink as NL } from 'react-router-dom'
import '../styles/Nav.css'
import useWindowSize from '../configs/useWindowSize'

const NavBar = () => {
    const size = useWindowSize();
    const [open, setOpen] = useState(false)

    const shownav = () => {
    if(open === true){
        setOpen(false)
        console.log("clicked")
    } if(open === false)
    {
        setOpen(true)
    }
    }


    return (
        localStorage.getItem("token") ? (
        <div className={open && size.width < 768 ?"mN full":"mN"}>
            <div className="nLt">
            <span className="open nL"  onClick={shownav}>Education for All</span>
            <p>{size.width}</p>
            </div>
            <div className={!open || size.width > 768 ? "nCt hidden" : "nCt"}>
            </div>
            <div className={!open || size.width > 768 ? "nRt hidden" : "nRt"}>
            {/* <NL className="nL button" to='/logout'>Logout</NL>
            <NL className="nL button" to='#'>Register</NL> */}
            <NL className="nL" exact to='/'>Home</NL>
            {/* <NL className="nL" to='/about'>About</NL> */}
            <NL className="nL" to='/classes'>Classes</NL>
            </div>
        </div>) :
        (
            <div className={open && size.width < 768 ?"mN full":"mN"}>
                <div className="nLt">
                <span className="open nL"  onClick={shownav}>Education for All</span>
                <p>{size.width}</p>
                </div>
                <div className={!open || size.width > 768 ? "nCt hidden" : "nCt"}>
                </div>
                {/* {/* <div className={!open || size.width > 768 ? "nRt hidden" : "nRt"}> */}
                {/* <NL className="nL button" to='/login'>Login</NL> */}
                <NL className="nL" exact to='/'>Home</NL>
                {/* <NL className="nL" to='/about'>About</NL> */}
                <NL className="nL" to='/classes'>Classes</NL>
                {/* <NL className="nL button" to='#'>Register</NL> */}
                {/* </div> */} */}
            </div>) 
    )
}

export default NavBar
