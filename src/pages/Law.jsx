
import React from "react";
import "../style.css"
import myVideo from "../videos/water.mp4"
import Menubar from "../components/Menubar";

export default class Law extends React.PureComponent {
    render() {
      return (<div>
        <video autoPlay muted loop id="myVideo">
          <source src={myVideo} type="video/mp4"/>
          Your browser does not support HTML5 video.
        </video>
        
        
          <div className="background1">
            <Menubar selectedPage="law"/>
         
                  <div className="topmain"> 
                    <br/>
                    <br/>
                    <div className="text4">
                      Law Student</div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <div className="text3" >Interests</div>
                    <br/>
                    <div className="text">
                    <ul>
                      <li>Contract Law</li>
                      <li>Tort Law</li>
                      <li>Public International Law</li>
                      <li>Private International Law</li>
                      <li>Legal Research</li>
        
                    </ul>
                    </div>
                    <br/>
                    <div className="text3" >Experience</div>
                    <br/>
                    <div className="text">
                    <ul>
                      <li>2014-2015: Worked as a law clerk at Martin Bell & Solicitors</li>
                    </ul>
                    </div>
                    <br/>
                    <div className="text3" >Qualifications</div>
                    <br/>
                    <div className="text">
                    <ul>
                      <li> LLB (/Arts (Media & Communications)) at the University of Sydney (est. graduation: end 2021)</li>
                    </ul>
                    </div>
                    <br/>
                </div>
              </div>
           </div>);
    }
}