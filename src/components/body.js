import React from "react"

export default function header(){
    return(
     <nav >
       <div className="header-card"> 
           <h1>Kirubel Tesfaw</h1> 
           <h5>Software Developer</h5>
           <h6>Software Engineering</h6>
       </div>
        <div className="button">
        <button className="email-button" onClick={() => {}}> 
            <img src="../../Email.png" className="email"/>
                      <span>  Email</span>
        </button>
        <button className="linkedin-button" onClick={() => {}}> 
                        <img src="../../Linkedin.jpeg" className="email"/>
                        <span>Linkedin</span>
        </button>
        </div>
        <div className="text">
        <div className="about">
        <h1>About</h1>
        <h4>img elements must have an alt prop, 
            either with meaningful text, or an empty string for 
            decorative images img elements must have an alt prop, 
            either with meaningful text, or an empty string for 
            decorative images</h4>
            </div>
            <div className="interests">
        <h1>Interests</h1>
        <h4>img elements must have an alt prop, either with meaningful
             text, or an empty string for decorative images img 
             elements must have an alt prop, either with meaningful 
             text, or an empty string for decorative images</h4>
       </div>
       </div>
     </nav>
     )  
 }