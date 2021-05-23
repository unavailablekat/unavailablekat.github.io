
import React from "react";
import "../style.css"
import myVideo from "../videos/pex.mp4"
import Menubar from "../components/Menubar";

export default class Home extends React.PureComponent {
    render() {
      return (<div><video autoPlay muted loop id="myVideo">
      <source src={myVideo} type="video/mp4"/>
      Your browser does not support HTML5 video.
    </video>

  
    <div className="background1">
        <Menubar  selectedPage="home"/>
  
        <div className="main rightClass">
          <div className="text4">Angie Kim</div>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <div className="text3">Law Student</div>
          <br/>
          <div className="text3">Media Graduate</div>
  
  
        </div>
      </div></div>);
    }
}