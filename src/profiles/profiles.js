import React,{Component} from 'react';
import './profiles.css';
import stackoverflowIcon from '../images/stackoverflow.png';
import hackerrankIcon from '../images/hackerrank.png';
import linkedinIcon from '../images/linkedin.png';
import githubIcon from '../images/github.svg';
import ProfileUnit from './profile-unit.js';


class Profiles extends Component{
    render(){
        return(
            <div className="tab">
                <div className="title" id="profiles">
                    Profiles
                    <div className="secondary-title">"There is no competition because nobody can be me."</div>
                </div>
                <div className="profiles-container">
                    <ProfileUnit displayName="Stackoverflow" icon={stackoverflowIcon} subtext="answered 35 questions - 416 reputation" className="" link="https://stackoverflow.com/users/11956621/sachin"/>
                    <ProfileUnit displayName="Hackerrank" icon={hackerrankIcon} className="" subtext="5 star in java and problem solving" link="https://www.hackerrank.com/velsachin98"/>
                    <ProfileUnit displayName="Linkedin" icon={linkedinIcon} className="" link="https://www.linkedin.com/in/sachin-velmurugan-2969b7150"/>
                    <ProfileUnit displayName="Github" icon={githubIcon} className="" link="https://github.com/SachinVel"/>
                </div>
            </div>
        );
    }
}

export default Profiles;