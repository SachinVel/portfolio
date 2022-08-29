import React,{Component} from "react";
import "./experience.css";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import zohoIcon from '../images/zoho-logo.png';
import kumaraguruIcon from '../images/kumaraguru-logo.jpg';
import internshipIcon from '../images/internship-logo.png';
import NUSLogo from '../images/NUS-logo.jpg';
import VNLogo from '../images/VN-logo.jpeg';
import umcpLogo from '../images/umcp-logo.png';



class Experience extends Component{
    render(){
        return (
            <div className="tab" id="experiences">
                <div className="title">
                    Experiences
                    <div className="secondary-title">"The only source of knowledge is experience."</div>
                </div>
                <VerticalTimeline>
                <VerticalTimelineElement
                        date="Aug 2022 - May 2024"
                        icon={<img src={umcpLogo} width="40" height="30"/>}
                        iconStyle={{ background: 'rgb(236 236 236)', color: '#fff', paddingTop: "18px", }}
                    >
                        <h3 className="header-primary">Professional MEng, Software Engineering</h3>
                        <h4 className="header-secondary">University of Maryland, College Park</h4>
                        <div className="experience-description">
                            I'm yet to explore this new chapter
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        date="Jul 2020 - Jun 2022"
                        icon={<img src={zohoIcon} width="40" height="20"/>}
                        iconStyle={{ background: 'rgb(236 236 236)', color: '#fff', paddingTop: "18px", }}
                    >
                        <h3 className="header-primary">Member of Technical Staff</h3>
                        <h4 className="header-secondary">Zoho corporation, chennai</h4>
                        <div className="experience-description">
                            Here, I meet new challenges everyday. My work here usually involves developing a web application tool to support the zoho developers.
                            I work on developing a testing tool and customer support tool from scratch. It is like a mini startup in here where we are involved in all kinds of work. I have provided some ideas to support project decisions that shaped our products.
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        date="Jun 2019 - Jul 2020"
                        icon={<img src={zohoIcon} width="40" height="20" />}
                        iconStyle={{ background: 'rgb(236 236 236)', color: '#fff', paddingTop: "18px", }}
                    >
                        <h3 className="header-primary">Project Trainee</h3>
                        <h4 className="header-secondary">Zoho corporation, chennai</h4>
                        <div className="experience-description">
                            This was my first experience to company culture. I equipped myself with all the skills needed to work in a product based company. My learning curve was very steep during this period.
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        date="May 2016 - Jul 2020"
                        icon={<img src={kumaraguruIcon} width="45" height="45" style={{borderRadius: "45px"}}/>}
                        iconStyle={{ background: 'rgb(31 40 67)', color: '#fff', paddingTop: "6px", }}
                    >
                        <h3 className="header-primary">Bachelors of Computer science and engineering</h3>
                        <h4 className="header-secondary">kumaraguru college of technology, coimbatore</h4>
                        <div>
                            I was introduced to basics of computer science and engineering like compilers, databases, AI, OS, Data structures etc. My interest towards computer science is developed during this period.
                            It was a fun roller coaster ride.
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        date="Jun 2018 - Jul 2018"
                        icon={<img src={internshipIcon} width="45" height="45" style={{ borderRadius: "45px" }} />}
                        iconStyle={{ background: 'white', color: '#fff', paddingTop: "6px", }}
                    >
                        <h3 className="header-primary">J2EE Internship</h3>
                        <h4 className="header-secondary">Gateway software solutions, coimbatore</h4>
                        <div>
                            I went for this internship during my summer holidays. I learnt all java enterprise technologies like JSP, Servlets. At the end of this internship i was able to build a small website using servlets and JSP.
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        date="Jun 2018 - Jul 2018"
                        icon={<img src={NUSLogo} width="45" height="45" style={{ borderRadius: "45px" }} />}
                        iconStyle={{ background: 'white', color: '#fff', paddingTop: "6px", }}
                    >
                        <h3 className="header-primary">Data Science Internship</h3>
                        <h4 className="header-secondary">National university of singapore, singapore</h4>
                        <div>
                            I went for this internship during my college summer holidays. I learnt the machine learning basic concepts and algorithms. It was a great exposure to know how the world education works. It changed my knowlodge perspective a lot.
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        date="Jun 2018 - Jul 2018"
                        icon={<img src={VNLogo} width="61" height="61" style={{ borderRadius: "45px" }} />}
                        iconStyle={{ background: 'white', color: '#fff',  }}
                    >
                        <h3 className="header-primary">Higher Secondary School</h3>
                        <h4 className="header-secondary">Vidhya niketan school, coimbatore</h4>
                        <div>
                            I learnt all the life skills and discipline values in this school. My hobbies and interests are orignated from this school. This school has taught me how to learn and acquire knowloedge.
                        </div>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        )
    }
}

export default Experience;