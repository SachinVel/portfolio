import React,{Component} from 'react';
import './profiles.css';

class ProfileUnit extends Component{

    handleClick(event){
        window.open(this.props.link);
    }

    render(){
        return(
            <div className={"profiles-unit "+ this.props.className}>
                <div className="profiles-unit__wrapper" onClick={this.handleClick.bind(this)}>
                    <img src={this.props.icon} height="30px" width="30px" className="profiles-icon"></img>
                    <span className="profiles-unit__text">{this.props.displayName}</span>
                    <span className="profiles-unit__sub-text">{this.props.subtext}</span>
                </div>
            </div>
        )
    }
}

export default ProfileUnit;