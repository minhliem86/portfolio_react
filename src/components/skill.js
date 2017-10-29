import React, {Component} from 'react';
import CommonModel from '../models/common';
import VivusLib from '../libs/vivus';

const jQuery = window.jQuery;

export default class Skill extends Component{
    constructor(props)
    {
        super(props);

        this.state = {
            skills: null,
        }
    }

    componentDidMount(){
        let script = document.createElement('script');
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
                            this.state.skills !== null && this.state.skills.result.length > 0 ?
                                this.state.skills.result.map((value, key)=>
                                    <VivusLib key={key} skillId={value.name} skillName={value.name} percent={value.percent} />
                                )
                                :   (<div className="col-sm-12">Không có dữ liệu</div>)
                        }

                    </div>
                </div>
            </section>
        );
    }
}