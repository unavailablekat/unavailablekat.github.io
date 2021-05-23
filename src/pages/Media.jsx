
import React from "react";
import "../style.css"
import myVideo from "../videos/media4.mp4"
import Menubar from "../components/Menubar";

export default class Law extends React.PureComponent {
    render() {
      return (<div>
           <video autoPlay muted loop id="myVideo">
              <source src={myVideo}  type="video/mp4"/>
              Your browser does not support HTML5 video.
            </video>
            
            <div className="background1">
            <Menubar  selectedPage="media"/>

            <div className="topmain">
            <div className="text4" >
              Media Graduate</div>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="text3" >Interests</div>
            <br/>
            <div className="text">
            <ul>
              <li>News-writing</li>
              <li>Longform writing</li>
              <li>Video Production</li>
              <li>Online Media</li>
            </ul>
            <br/>
            <div className="text3" >Portfolio</div>
            <br/>
            <div className="text3" >Qualifications</div>
            <ul>
              <li> Bachelor of Media & Communications </li>
              <li>2nd Major: Digital Cultures</li>
            </ul>
            <br/>  
            <div className="text3" >Experience</div>
            <br/>
            <ul>
              <li> 2018-2019: Work & Internship with CB Exec - writing blog and review articles</li>
            </ul>
        </div>
        </div>
           </div>
           </div>);
    }
}