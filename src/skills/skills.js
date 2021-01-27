import React,{Component} from "react";
import "./skills.css";

class SkillComponent extends Component{
    render(){

        let progressBarStyle = {
            width : this.props.skillPercentage+"%"
        };

        return (

            <div className="skill-component">
                <h3 className="progress-title">{this.props.skillName}</h3>
                <div className={"progress "+this.props.barColor}>
                    <div className={"progress-bar progress-bar-striped progress-bar--" + this.props.barColor+" active"} style={progressBarStyle}>
                        <div className="progress-value">{this.props.skillPercentage}%</div>
                    </div>
                </div>
            </div>
            
            //     <h1>{this.props.skillName}</h1>
            //     <div className="skill-percent-container">
            //         <progress id="file" value={this.props.skillPercentage} max="100"> </progress>
            //         <span className="skill-percent-label">{this.props.skillPercentage+" %"}</span>
            //     </div>
            // </div>
        )
    }
}
class Skills extends Component{
    render(){
        return(
            <div className="tab" id="skills">
                <div className="title">
                    Skills
                    <div className="secondary-title">"The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge."</div>
                </div>
                <div className="skills-container">
                    <SkillComponent skillName="Java" skillPercentage="75" barColor="red" />
                    <SkillComponent skillName="Struts" skillPercentage="30" barColor="red" />
                    <SkillComponent skillName="Jersey" skillPercentage="60" barColor="red"/>
                    <SkillComponent skillName="Junit/Mockito" skillPercentage="40" barColor="red"/>
                    <SkillComponent skillName="Javascript" skillPercentage="75" barColor="blue"/>
                    <SkillComponent skillName="Jquery" skillPercentage="80" barColor="blue" />
                    <SkillComponent skillName="React" skillPercentage="30" barColor="blue" />
                    <SkillComponent skillName="HTML/CSS" skillPercentage="90" barColor="green" />
                    <SkillComponent skillName="Handlebars" skillPercentage="80" barColor="green" />
                    <SkillComponent skillName="MYSQL" skillPercentage="70" barColor="green" />
                </div>
            </div>
        )
    }
}

export default Skills;