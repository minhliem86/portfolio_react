import React, {Component} from 'react';
import Vivus from 'vivus';

export default class VivusLib extends Component{
    componentDidMount(){
        new Vivus(this.props.skillId, {duration: 150});
    }
    render(){
        let percent = this.props.percent + "%";
        let config_url = 'http://localhost/portfolio_api/';
        return(
            <div className="col-sm-4 skill-item">
                <div className="caption-container">
                    <div className="caption">
                        <div className="caption-content">
                            <h4 className="caption-text">{this.props.skillName}</h4>
                            <div className="skillbar-wrapper">
                                <div className="skillbar clearfix " data-percent={percent}>
                                    <div className="skillbar-bar" ></div>
                                    <div className="skill-bar-percent">{this.props.percent}%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <object id={this.props.skillId} className ="object" type="image/svg+xml" data="%PUBLIC_URL%/img/icon/CSS3-b.svg"></object>
                </div>
            </div>
        );
    }
}