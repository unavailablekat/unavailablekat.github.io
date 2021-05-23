
import React from "react";
import "../style.css"
import spiderman from "../images/spiderman.png"
import sword from "../images/sword.jpg"
import Artboard2 from "../images/Artboard2.jpg"
import bkgd from "../images/bkgd.jpg"
import donut from "../images/donut.png"
import cauldron from "../images/cauldron.jpg"
import city from "../images/city.jpg"
import Human from "../images/Human.png"
import cheese from "../images/cheese kun.png"
import pika from "../images/pika.png"
import girl from "../images/girl.png"
import nn from "../images/nn.png"
import demonslayer from "../images/demonslayer.png"
import mewtwo from "../images/mewtwo.png"



let listOfImages = [
    spiderman,
  sword,
  Artboard2,
  bkgd,
  donut,
  cauldron,
  city,
  Human,
  cheese,
  pika,
  girl,
  nn,
  demonslayer,
  mewtwo];      
  
  

  let listOfCaptions = [
"Spiderman (Procreate)",
"Sword (Blender)",
"TFT KDA PopStars Hushtail",
"Mountain Scene (Procreate)",
"Donut (Blender)",
"Cauldron (Procreate)",
"City View (Procreate)",
"Girl (Procreate)",
"Cheese Kun (Procreate)",
"Pikachu (Procreate)",
"Girl No. 2 (Procreate)",
"Despicable Me Minion (Procre",
"Demonslayer (Procreate)",
"Mewtwo (Procreate)",
  ]



export default class Slideshow extends React.PureComponent {
    constructor() {
        super();
        this.state = {myIndex: 0};
        setInterval(() => {
            this.plusSlides(1)
        }, 7000);
    }
    
    plusSlides(n) {
        let a = (this.state.myIndex+n);
        if  (a<0) {a=listOfImages.length-1}
        if  (a>listOfImages.length-1) {a=0}
        this.setState({myIndex: a});;
    }
    
    currentSlide(n) {
        this.setState({myIndex: n});
    }
    
    showSlides(n) {
    //   var i;
    //   var slides = document.getElementsByClassName("mySlides");
    //   var dots = document.getElementsByClassName("dot");
    //   if (n > slides.length) {slideIndex = 1}    
    //   if (n < 1) {slideIndex = slides.length}
    //   for (i = 0; i < slides.length; i++) {
    //       slides[i].style.display = "none";  
    //   }
    //   for (i = 0; i < dots.length; i++) {
    //       dots[i].className = dots[i].className.replace(" active", "");
    //   }
    //   slides[slideIndex-1].style.display = "flex";  
    //   dots[slideIndex-1].className += " active";
      
      
    }



    render() {
        
      let hiddenClassName = "mySlides fade hiddenSlide";
      let showClassName = "mySlides fade";
    
      console.log(this.state.myIndex)
      
        return (

            <div className="slideshow-container">

                {listOfImages.map((item, index, array)=>{
                    let className = (this.state.myIndex !== index) ? hiddenClassName : showClassName;
                    return(
                    <div className={className}>
                                        <div className="numbertext">({index + 1} / {array.length})</div>
                                        <img src={item} />
                                        <div className="text caption"> {listOfCaptions[index]} </div>
                                    </div>
                )

                })}


                <a className="prev" onClick={()=>this.plusSlides(-1)}>&#10094;</a>
                <a className="next" onClick={()=>this.plusSlides(1)}>&#10095;</a>


                <div style={{ textAlign: "center" }}>
                    {listOfImages.map((item, index, array)=>{
                        let className = (this.state.myIndex !== index) ? "dot" : "dot active";
                        return(
                            <span className={className} onClick={()=>this.currentSlide(index)}></span>
                    )

                    })}

                </div>
            </div>
        );
    }
}