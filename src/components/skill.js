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

        /*ANIMATION SKILL*/
        // jQuery('.skill-item').each(function (index) {
        //    vivus(jQuery(this).find('.object').attr('id'), {duration: 150});
        // });
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
                        <VivusLib skillId="test" skillName="HTML" percent="70"/>
                    </div>
                </div>
            </section>
        );
    }
}