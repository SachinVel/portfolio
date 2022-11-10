import React, { Component } from "react";
import "./skills.css";
import BarChart from "./BarChart.js";



class Skills extends Component {

    languageData = {
        labels: [
            "Java",
            "Javascript",
            "HTML/CSS",
            "MySQL",
            "Python",
            "C/C++",
        ],
        datasets: [{
            barPercentage: 0.7,
            label: "Languages",
            data: [90, 90, 90, 60, 30, 30],
            backgroundColor: ["#669911"]
        }]
    };

    technologyData = {
        labels: [
            "JQuery",
            "JSP/Servlet",
            "Git",
            "Spring Boot",
            "ReactJs",
            "JUnit/Mockito",
            "NodeJs",
            "AWS",
        ],
        datasets: [{
            label: "Technology/Frameworks",
            barPercentage: 0.7,
            data: [90, 90, 90, 60, 30, 30, 30, 30],
            backgroundColor: ["#EE4B2B"]
        }]
    };

    softwareData = {
        labels: [
            "Figma",
            "Sourcetree",
            "Github",
            "VSCode",
            "Intellij"
        ],
        datasets: [{
            label: "Software",
            barPercentage: 0.7,
            data: [90, 90, 90, 90, 60],
            backgroundColor: ["#007FFF"]
        }]
    };

    constructor(props) {
        super(props);
        this.state = { 
            skillType : 'language',
            chartData: this.languageData 
        };
        
    }

    componentDidMount(){
        document.getElementById(this.state.skillType+'-skill-option').checked = true;
    }

    onChange = (event) => {
        let inputVal = event.target.value;
        if( inputVal.includes("language-skill") ){
            this.setState({
                skillType : 'language',
                chartData: this.languageData
            })
        }else if(inputVal.includes("technology-skill")){
            this.setState({
                skillType : 'technology',
                chartData: this.technologyData
            });
        }else{
            this.setState({
                skillType : 'software',
                chartData: this.softwareData
            });
        }
    }


    render() {
        return (
            <div className="tab" id="skills">
                <div className="title">
                    Skills
                    <div className="secondary-title">"The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge."</div>
                </div>
                <div className="skills-container">
                    <div className="skill-option-container">
                        <input type="radio" name="skill-type" id="language-skill-option" class="js-skill-option" value="language-skill" onChange={this.onChange} />
                        <label for="language-skill-option" className="skill-option-text" >Languages</label>
                        <input type="radio" name="skill-type" id="technology-skill-option" class="js-skill-option" value="technology-skill" onChange={this.onChange} />
                        <label for="technology-skill-option" className="skill-option-text">Technology</label>
                        <input type="radio" name="skill-type" id="software-skill-option" class="js-skill-option" value="software-skill" onChange={this.onChange} />
                        <label for="software-skill-option" className="skill-option-text">Software</label>
                    </div>
                    <BarChart chartData={this.state.chartData} />
                </div>
            </div>
        )
    }
}

export default Skills;