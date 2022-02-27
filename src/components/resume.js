 import React from "react";
 import "../styles/resume.css"
// import Pdf from "";

 export default function Resume() {
   return (
       <>
     <div className="resume-container">
       <h2>Resume</h2>
       <div className="resume-anchor">
       <a  href= "https://drive.google.com/file/d/1KncwQGRcapmHhWF-Wp-kMDkDy8uHiZBF/view?usp=sharing" target="_blank">
           <p id="resume-text"> My Resume</p>
       </a>
       </div>
       <ul className="list-items">
         {" "}
         <h3>Front-end Proficiencies</h3>
         <li>HTML</li>
         <li>CSS</li>
         <li>JacaScript</li>
         <li>Boostrap</li>
         <li>jQuery</li>
         <li>React</li>
       </ul>
       <ul className="list-items">
         {" "}
         <h3>Front-end Proficiencies</h3>
         <li>Node</li>
         <li>Express</li>
         <li>MySQL</li>
         <li>MongoDB</li>
         <li>REST</li>
         <li>APIs</li>
       </ul>
     </div>
     </>
   );
 }