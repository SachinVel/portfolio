import React,{Component} from "react";
import "./about.css";
import logo from '../images/face-image.png';

class About extends Component{
    render(){
        return (
            <div className="tab" id="about">
                <div className="title">
                    About
                    <div className="secondary-title">I'm a java full stack web developer.</div>
                </div>
                <div className="image-block-container">
                    <img src={logo} height="200" width="200" className="face-image" alt=""></img>
                    <div className="basic-info-container">
                        <div className="basic-info__unit">
                            <div className="basic-info__name">Name</div>
                            <div className="basic-info__val">Sachin Velmurugan</div>
                        </div>
                        <div className="basic-info__unit">
                            <div className="basic-info__name">Age</div>
                            <div className="basic-info__val">24</div>
                        </div>
                        <div className="basic-info__unit">
                            <div className="basic-info__name">Email ID</div>
                            <div className="basic-info__val">velsachin98@gmail.com</div>
                        </div>
                        <div className="basic-info__unit">
                            <div className="basic-info__name">Location</div>
                            <div className="basic-info__val">Maryland, USA.</div>
                        </div>
                    </div>
                </div>
                <div className="story-container">
                    I'm a passionate and curious software developer. I like to learn new things everyday and challenge myself. My interests are in data structures and algorithms, problem solving and full stack web development. My current goal is to become T-shaped professional in Java full stack web development.
                </div>
                
            </div>
        );
    }
}

export default About;