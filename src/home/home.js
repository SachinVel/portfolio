import React,{ Component } from "react";
import "./home.css";

class Home extends Component{
    render(){
        return (
            <div id="home-tab">
                <div className="home-screen-filter"></div>
                <div id="home-title-container">
                    <h1 className="home-title">I'm Sachin.</h1>
                    <h1 className="home-title">a Web Developer .</h1>
                </div>
                <div className="scroll-down-containter">
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