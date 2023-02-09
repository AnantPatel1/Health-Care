import React from 'react'
import classes from "./Navbar.module.css"
import Logo from "../../Assets/logo.png"
 function Navbar() {
  return (
    <div>
    <div className={classes['main-image']}>
    <img src={Logo} alt="invalid" />
    </div>

    <div className={classes.Background}>
    
    </div>
     
    <div>
    <ul>
    <li className={`${classes.link } ${classes.home}`}> Home </li>
    <li className={`${classes.link } ${classes.Home}`}>Home</li>
    <li className={`${classes.link } ${classes.OurProduct}`}>OurProduct</li>
    <li className={`${classes.link } ${classes.ContactUs}`}>ContactUs</li>
    </ul>
    
    
    
    </div>
    </div>
  )
}
export default Navbar;
