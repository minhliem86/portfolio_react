import React, {Component} from 'react';
import CommonModel from '../models/common';
// import VivusLib from '../libs/vivus';
import Vivus from 'vivus';
import AI from '../icons/AI-r.svg';
import PSD from '../icons/photoshop-b.svg';
import HTML from '../icons/HTML5-r.svg';
import CSS from '../icons/CSS3-b.svg';
import JS from '../icons/JS-r.svg';
import JQUERY from '../icons/jquery-b.svg';
import PHP from '../icons/PHP-b.svg';
import LARAVEL from '../icons/laravel-r.svg';
import REACT from '../icons/react-b.svg';

class Image extends Component{
    render(){
        return(
            <div className="col-sm-4 skill-item" >
                <div className="caption-container">
                    <div className="caption">
                        <div className="caption-content">
                            <h4 className="caption-text">{this.props.name}</h4>
                            <div className="skillbar-wrapper">
                                <div className="skillbar clearfix " data-percent={this.props.percent}>
                                    <div className="skillbar-bar" ></div>
                                    <div className="skill-bar-percent">{this.props.percent}%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id={this.props.ID}></div>
                </div>
            </div>
        );
    }
}

const imgs = [
    'AI','PSD','HTML','CSS','JS','JQUERY','PHP','LARAVEL','REACT'
];

export default class Skill extends Component{
    constructor(props)
    {
        super(props);

        this.state = {
            skills: null,
        }
    }

    componentDidMount(){
        imgs.map((value, key) =>{
            new Vivus(value, {
                duration: 200,
                file: value
            })
        })

        this.getListSkill();
    }

    getListSkill(){
        CommonModel.getSkills().then( data => {
           this.setState({
               skills: data.data,
           })
        });
    }



    render(){
        return(
            <section id="skill">
                <div className="container">
                    <h2 className="text-center">Skills</h2>
                    <hr className="star-primary"/>
                    <div className="row">
                        {
                            imgs.map((v,k) =>
                                <Image name={v} percent="75" ID={v}/>
                            )
                        }


                        {/*{
                            this.state.skills !== null && this.state.skills.result.length > 0 ?
                                this.state.skills.result.map((value, key)=>


                                )
                                :   (<div className="col-sm-12">Không có dữ liệu</div>)
                        }*/}

                    </div>
                </div>
            </section>
        );
    }
}