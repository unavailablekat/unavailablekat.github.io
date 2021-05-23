
import React from "react";
import "../style.css"
import myVideo from "../videos/sky.mp4"
import Menubar from "../components/Menubar";

export default class Tutoring extends React.PureComponent {
    render() {
      return (<div>
        <video autoPlay muted loop id="myVideo">
          <source src={myVideo} type="video/mp4"/>
          Your browser does not support HTML5 video.
        </video>
        
          
          <div className="background1">
            <Menubar/>
         
            <div class="otherwork"> 
      <div className="text3" >Tutoring</div>
      <div className="artcontainer">
      <div className="text">
        <ul>
          <li>HSC/ SAT/ equivalent</li>
          <ul>
            <li>Essays</li>
            <li>English</li>
            <li>English Extension 1</li>
            <li>English Extension 2</li>
            <li>Modern History</li>
            <li>Biology</li>
          </ul>
          <br/>
          <li>Early University</li>
          <ul>
            <li>Business</li>
            <li>Essays</li>
          </ul>
          <br/>
          <li>Middle/ High School</li>
          <ul>
            <li>Essays</li>
            <li>English</li>
            <li>Humanities</li>
            <li>Biology</li>
            <li>Creative Writing</li>
          </ul>
          <br/>
          <li>Primary (all ages and grades)</li>
        </ul>
        <br/>
        <br/>
        Experience: Tutoring privately and at a Korean academy since 2012.
        <ul><li>Online and offline.</li></ul>
      </div>
              </div>
              </div>
              </div>
           </div>);
    }
}