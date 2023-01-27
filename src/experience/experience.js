import React, { Component } from "react";
import "./experience.css";
import 'react-vertical-timeline-component/style.min.css';
import ExperienceUnit from './experience-unit';
import $ from 'jquery';


class Experience extends Component {

    handleChange(descriptionId) {
        if( descriptionId==null ){
            $('.experience-description').css('display','none');
        }else{
            $('#'+descriptionId).css('display','inline-block');
        }

    }

    render() {
        return (
            <div className="tab" id="experiences">
                <div className="title">
                    Experiences
                    <div className="secondary-title">"The only source of knowledge is experience."</div>
                </div>
                <div className="experience-stick-container">
                    <div className="experience-stick"></div>
                    <ExperienceUnit companyName="Zoho Corporation" period="Jul 2020 - Jul 2022" title="Member Technical Staff" descriptionId="zoho-job-description" onHover={this.handleChange}/>
                    <ExperienceUnit companyName="Zoho Corporation" period="Jul 2019 - Jul 2020" title="Project Trainee" descriptionId="zoho-intern-description" onHover={this.handleChange}/>
                    <ExperienceUnit companyName="Gateway software solutions" period="Jun 2018 - Jul 2018" title="Developer Intern" descriptionId="gateway-description" onHover={this.handleChange}/>
                    <ExperienceUnit companyName="NUS" period="Dec 2017 - Jan 2018" title="Data Science Intern" descriptionId="nus-description" onHover={this.handleChange}/>
                </div>

                <div className="experience-description" id="zoho-job-description">
                    <h3>Description</h3>
                    <ul>
                        <li>
                            My work involves developing a web application tool to support the zoho developers. 
                            I worked on developing a testing tool and customer support tool from scratch.
                            It is like a mini startup in here where we are involved in all kinds of work. 
                            I have provided some ideas to support project decisions that shaped our products.
                        </li>
                    </ul>
                </div>

                <div className="experience-description" id="zoho-intern-description">
                    <h3>Description</h3>
                    <ul>
                        <li>This was my first experience to company culture. I equipped myself with all the skills needed to work in a product based company. My learning curve was very steep during this period.</li>
                    </ul>
                </div>

                <div className="experience-description" id="gateway-description">
                    <h3>Description</h3>
                    <ul>
                        <li>I went for this internship during my summer holidays. I learnt all java enterprise technologies like JSP, Servlets. At the end of this internship i was able to build a small website using servlets and JSP.</li>
                    </ul>
                </div>

                <div className="experience-description" id="nus-description">
                    <h3>Description</h3>
                    <ul>
                        <li>I went for this internship during my college summer holidays. I learnt the machine learning basic concepts and algorithms. It was a great exposure to know how the world education works. It changed my knowlodge perspective a lot.</li>
                    </ul>
                </div>

            </div>
        )
    }
}

export default Experience;