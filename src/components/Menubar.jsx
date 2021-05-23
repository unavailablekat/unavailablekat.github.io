
import React from "react";
import "../style.css"


export default class Menubar extends React.PureComponent {
    render() {
      let homeClassName = (this.props.selectedPage !== "home") ? "normal" : "hiddenMenu";
      let lawClassName = (this.props.selectedPage !== "law") ? "normal" : "hiddenMenu";
      let mediaClassName = (this.props.selectedPage !== "media") ? "normal" : "hiddenMenu";
      return (

  
      <div className="headlines">
        <a href="/"><button className={homeClassName}>Home</button></a>
  
        <a href="law"><button className={lawClassName}>Law</button></a>
        <a href="media"><button className={mediaClassName}>Media</button></a>
        <div className="dropdown">
          <span>More</span>
          <div className="dropdown-content">
            <ul>
              <li><a href="about"><button>About</button></a></li>
              <li><a href="art"><button>Art</button></a></li>
              <li><a href="tutoring"><button>Tutoring</button></a></li>
              <li><a href="other"><button>Other</button></a></li>
              <li><a href="contact"><button>Contact</button></a></li>
            </ul>
          </div>
        </div>
      </div>);
    }
}