import React, {Component} from 'react';

export default class Skill extends Component{
    render(){
        return(
            <section id="skill">
                <div className="container">
                    <h2 className="text-center">Skills</h2>
                    <hr className="star-primary"/>
                    <div className="row">
                        <div className="col-sm-4 skill-item">
                            <div className="caption-container">
                                <div className="caption">
                                    <div className="caption-content">
                                        <h4 className="caption-text">HTML5</h4>
                                        <div className="skillbar-wrapper">
                                            <div className="skillbar clearfix " data-percent="70%">
                                                <div className="skillbar-bar"></div>
                                                <div className="skill-bar-percent">70%</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <object id="ai-skill" className="object" type="image/svg+xml" data="img/icon/AI-r.svg"></object>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}