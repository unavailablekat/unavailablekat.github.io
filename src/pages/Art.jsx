
import React from "react";
import "../style.css";
import myVideo from "../videos/x4.mp4";
import Menubar from "../components/Menubar";
import Slideshow from "../components/Slideshow";

export default class Art extends React.PureComponent {
  render() {
    return (<div>
      <video autoPlay muted loop id="myVideo">
        <source src={myVideo} type="video/mp4" />
              Your browser does not support HTML5 video.
            </video>

      <div className="background1">
        <Menubar />



        <div className="otherwork">
          <div className="text4" >Art</div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="text3" >Skills</div>
          <div className="artcontainer">
            <div className="text">
              <ul>
                <li>Procreate</li>
                <li>Blender</li>
                <li>Adobe Photoshop</li>
                <li>Adobe Lightroom</li>
                <li>Adobe Premiere Pro</li>
              </ul>
            </div>
          <Slideshow/>
            
          </div>
          <br />
          <br />



        </div>
      </div>
    </div>);

  }
}
