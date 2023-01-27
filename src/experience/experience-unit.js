import React,{Component} from "react";

class ExperienceUnit extends Component{

    constructor(props) {
        super(props);
    
        // This binding is necessary to make `this` work in the callback
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
      }

    onMouseEnter(){
        this.props.onHover(this.props.descriptionId);
    }

    onMouseLeave(){
        this.props.onHover(null);
    }
    render(){
        return (
            <div class="experience-unit" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
                <div class="experience-company">{this.props.companyName}</div>
                <div class="experience-title">{this.props.title}</div>
                <div class="experience-period">{this.props.period}</div>
            </div>
        )
    }
}

export default ExperienceUnit;