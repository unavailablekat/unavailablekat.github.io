
import React from "react";
import "../style.css"
import myVideo from "../videos/water.mp4"
import Menubar from "../components/Menubar";

export default class Other extends React.PureComponent {
    render() {
      return (<div>
        <video autoPlay muted loop id="myVideo">
          <source src={myVideo} type="video/mp4"/>
          Your browser does not support HTML5 video.
        </video>
        
        
          <div className="background1">
            <Menubar/>
         
            <div className="about" > 
            <div class="text3" style={{textAlign:"center"}}>Other Skills/ Experience</div>
            <br/>
            <br/>
            <br/>
            <br/>
        <div className="info" style={{textAlign:"left"}}>
            <ul>
                <li>NSW Gov Dept of Customer Service</li>
                <ul>
                    <li>Administrative Support Officer for Telco/ ICT Procurement (Internship: 2021)</li>
                </ul>
                <li>Fluent in English</li>
                <li>Basic proficiency (can read, write, speak) in Korean</li>
            </ul>
            <br/>
            <br/>
          
            
        </div>
        </div>
        </div>
           </div>);
    }
}