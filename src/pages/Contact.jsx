
import React from "react";
import "../style.css"
import myVideo from "../videos/waterrr.mp4"
import Menubar from "../components/Menubar";

export default class Contact extends React.PureComponent {
  render() {
    return (<div>
      <video autoPlay muted loop id="myVideo">
        <source src={myVideo} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>


      <div className="background1">
        <Menubar />

        <div className="main rightClass">
          <div className="text4" >Contact</div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="text3" >kimangie@me.com</div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="text" ></div>
        </div>
      </div>
    </div>);
  }
}
