import React,{Component} from "react";
import "./about.css";
import logo from '../images/face-image.png';
import stackoverflowIcon from '../images/stackoverflow.png';
import hackerrankIcon from '../images/hackerrank.png';
import linkedinIcon from '../images/linkedin.png';
import githubIcon from '../images/github.svg';
import ProfileUnit from '../profiles/profile-unit.js';

class About extends Component{
    render(){
        return (
            <div className="tab" id="about">
                <div className="title about-title">
                    About
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
                            <div className="basic-info__val">College Park, MD, USA.</div>
                        </div>
                    </div>
                </div>
                <div className="objective-container">
                    <h3 className="section-title">Objective</h3>
                    I like to work in challenging environment so that I can learn new things and grow exponentially. 
                    My interests are in data structures and algorithms, problem solving and full stack web development.
                    My current goal is to become T-shaped professional in full stack web development with primary focus on back-end development.
                </div>

                <div className="objective-container">
                    <h3 className="section-title">Profiles</h3>
                    <div className="profiles-container">
                        <ProfileUnit displayName="Stackoverflow" icon={stackoverflowIcon} subtext="answered 35 questions - 416 reputation" className="" link="https://stackoverflow.com/users/11956621/sachin"/>
                        <ProfileUnit displayName="Hackerrank" icon={hackerrankIcon} className="" subtext="5 star in java and problem solving" link="https://www.hackerrank.com/velsachin98"/>
                        <ProfileUnit displayName="Linkedin" icon={linkedinIcon} className="" link="https://www.linkedin.com/in/sachin-velmurugan-2969b7150"/>
                        <ProfileUnit displayName="Github" icon={githubIcon} className="" link="https://github.com/SachinVel"/>
                    </div>
                </div>
                
                
            </div>
        );
    }
}

export default About;