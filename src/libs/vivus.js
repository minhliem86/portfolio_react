import React, {Component} from 'react';
import Vivus from 'vivus';

export default class VivusLib extends Component{
    componentDidMount(){
        new Vivus('liem', {duration: 150});
    }
    render(){
        let percent = this.props.percent + "%";
        let img = 'http://localhost/portfolio_api/'+this.props.img;
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
                    <object id="liem" className ="object" type="image/svg+xml" data="http://localhost/portfolio_api/public/uploads/photos/shares/CSS3-b.svg"></object>
                </div>
            </div>
        );
    }
}