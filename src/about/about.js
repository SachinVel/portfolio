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
                            <div className="basic-info__val">22</div>
                        </div>
                        <div className="basic-info__unit">
                            <div className="basic-info__name">Email ID</div>
                            <div className="basic-info__val">velsachin98@gmail.com</div>
                        </div>
                        <div className="basic-info__unit">
                            <div className="basic-info__name">Location</div>
                            <div className="basic-info__val">Chennai, Tamil Nadu, India.</div>
                        </div>
                    </div>
                </div>
                <div className="story-container">
                    I'm a allround web developer. The primary languages that i use are java and javascript. I like to learn new things everyday and challenge myself. I like to step out of my comfort zone and expose myself to new chanllenges because that's when my knowledge will grow exponentially.
                    My goal is to become a java full stack web developer with expertise in java and getting exposed to other parts of web development as well.
                </div>
                
            </div>
        );
    }
}

export default About;