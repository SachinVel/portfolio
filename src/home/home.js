import React,{ Component } from "react";
import "./home.css";

class Home extends Component{
    scrollDown(){
        document.getElementById("main-content").scrollIntoView();
    }
    render(){
        return (
            <div id="home-tab">
                <div className="home-screen-filter"></div>
                <div id="home-title-container">
                    <div className="home-title">I'm Sachin Velmurugan</div>
                    <div className="home-title-subtext">Full stack web developer</div>
                </div>
                <div className="scroll-down-containter" onClick={this.scrollDown}>
                    <div className="chevron"></div>
                    <div className="chevron"></div>
                    <div className="chevron"></div>
                    <div className="scroll-down-text">scroll down</div>
                </div>
            </div>
        );
    }
}

export default Home;