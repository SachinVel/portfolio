import React,{ Component } from 'react';
import './projects.css';

class ProjectTile extends Component{
    render(){
        return (
            <div className="project-tile">
                {this.props.children}
            </div>
        )
    }
}
class Projects extends Component{
    render(){
        return (
            <div className="tab" id="projects">
                <div className="title">
                    Projects
                    <div className="secondary-title">"We are only what we do. Not what we say we are."</div>
                </div>
                <div className="projects-container">
                <ProjectTile>
                        <h3>Chess</h3>
                        <div>This is a maven project that implements the functionality of chess. The purpose of this project is to understand clean code practices and design patterns. Test driven development approach is followed in this project.</div>
                        <div className="project-tags">
                            <strong>Tags : </strong>
                            <span>
                                Java, Maven, Junit, Mockito, Design patterns
                            </span>
                        </div>
                    </ProjectTile>
                    <ProjectTile>
                        <h3>Clothing Website</h3>
                        <div>This website is generated at the end of my summer internship at gateway software solutions. This website is built purely on servlet and JSP without any framework.</div>
                        <div className="project-tags">
                            <strong>Tags : </strong>
                            <span>
                                HTML, CSS, Javascript, JSP, Servlet, Java
                            </span>
                        </div>
                    </ProjectTile>
                    <ProjectTile>
                        <h3>Movie wiki</h3>
                        <div>This is a front end website which searches the keyword given by the user in imdb open source database and displays the result in tiles. The information about the movie is also displayed.</div>
                        <div className="project-tags">
                            <strong>Tags : </strong>
                            <span>
                                HTML, CSS, Javascript, Media Query, API
                            </span>
                        </div>
                    </ProjectTile>
                    <ProjectTile>
                        <h3>Check scanner</h3>
                        <div>This project extracts the details from the image of the bank cheque. We used frozen east detection open source model to detect the location of the text and we used tesseractopen source model to detect the text value.</div>
                        <div className="project-tags">
                            <strong>Tags : </strong>
                            <span>
                                Anaconda, python, deep learning, CNN
                            </span>
                        </div>
                    </ProjectTile>
                </div>
            </div>
        );
    }
}

export default Projects;