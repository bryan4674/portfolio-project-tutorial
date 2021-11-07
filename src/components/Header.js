import React from 'react'
import Typed from "react-typed";


const Header = () => {
    return (
        
    <div className = "header-wraper">
      <div className = "main-info"> 
        {/* <h1> web developement and websites promotions</h1> */}
     <Typed
     className= "typed-text"
     strings= {["C3-PicassO"]}
     typeSpeed={40}
     backSpeed={60}
    
    />

     {/* <a href="#" className="btn-main-offer">Contact me</a> */}

     </div>
    </div>  

    )
}

export default Header
