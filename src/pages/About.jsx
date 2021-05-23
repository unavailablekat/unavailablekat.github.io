
import React from "react";
import "../style.css"
import myVideo from "../videos/about5.mp4"
import Menubar from "../components/Menubar";

export default class About extends React.PureComponent {
    render() {
      return (<div>
           <video autoPlay muted loop id="myVideo">
              <source src={myVideo}  type="video/mp4"/>
              Your browser does not support HTML5 video.
            </video>
            
            <div className="background">
            <Menubar/>

            <div className="about" style={{textAlign: "center"}}> 
            <div className="text3">About</div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        <div className="info"> Hi! I am Angie Hyo-Yeon Kim and I am a LLB/ Arts (Media and Communications) student at the University of Sydney, Australia. My majors include Law, Media and Communications and Digital Cultures. 
            <br/> 
            <br/>
            So far, I have had the privilege of working at a law firm as a law clerk, in government for the NSW ICT/ Telco Authority in procurement, freelance online writing, tutoring students from younger primary to university in English, History and Marketing/ Business topics.
            <br/>
            <br/>
            Culturally, I am a dual national, having been born in Seoul, Korea, but raised in Australia by a mother of Australian nationality. 
            <br/>
            <br/>
            Outside work and study, my hobbies including learning about technology, Marvel and Star Wars movies, boxing, snowboarding, digital painting and VR and PC gaming.
            <br/>
            
           

            
        </div>
        </div>
        </div>
           </div>);
    }
}