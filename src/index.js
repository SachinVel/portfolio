// @ts-nocheck
import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from "./home/home.js";

import Experience from "./experience/experience.js";
import About from "./about/about.js";
import Projects from "./projects/projects.js";
import Skills from "./skills/skills.js";




class Menu extends Component{
    constructor(props){
        super(props);
        this.state = {position:"absolute"};
    }
    onScroll = (event) => {
        let mainContent = document.getElementById("main-content");
        if (window.scrollY > (mainContent.offsetTop-50)){
            this.setState({position:"fixed"})
        }else{
            this.setState({position:"absolute"})
        }
    }

    componentDidMount() {
        window.onscroll = this.onScroll;
    }

    render(){
        let className = this.state.position==="absolute"?"menu":"fixed menu";
        
        return(
            <ul className={className} id="menu">
                <MenuOption id="about" name="About" />
                <MenuOption id="experiences" name="Experiences" />
                <MenuOption id="skills" name="Skills" />
                <MenuOption id="projects" name="Projects" />
            </ul>
        );
    }
}

class MenuOption extends Component{
    onClick = function(event){
        let tabId = event.target.getAttribute("data-id");
        let tab = document.getElementById(tabId);
        window.scrollTo({
            top: tab.offsetTop + tab.parentElement.parentElement.offsetTop,
            left: 0,
            behavior: 'smooth'
        });
    }
    render(){
        return(
            <li data-id={this.props.id} className="menu__option" onClick={this.onClick}>{this.props.name}</li>
        );
    }
}

class MainContent extends Component{
    render(){
        return (
            
            <section className="main-content" id="main-content">
                <Menu />
                <div className="yellow-background">
                    <About />
                </div>    
                {/* <div className="darkblue-background">
                    <Profiles />
                </div> */}
                <div className="green-background">
                    <Experience />
                </div>
                <div className="purple-background">
                    <Skills/>
                </div>
                <div className="red-background">
                    <Projects/>
                </div>
            </section>
        );
    }
}
class MainOutline extends Component{
    render(){
        return (
            <Fragment>
                <Home/>
                <MainContent />
            </Fragment>
        );
    }
}


 
// =============================================================
ReactDOM.render(
    <MainOutline />,
    document.getElementById('root')
);