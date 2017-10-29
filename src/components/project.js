import React, {Component} from 'react';
import CommonModel from '../models/common';

export default class Project extends Component{
    constructor(props){
        super(props);

        this.state = {
            projects : null,
            showProjectItem: 3,
            expanded: false
        }

        this.onHandleShowitem = this.onHandleShowitem.bind(this)
    }

    componentDidMount(){
        this.getProjectList();
    }

    getProjectList(){
        CommonModel.getProjects().then((data) => {
           this.setState({
               projects: data.data
           })
        });
    }
    /*EVENT HANDLE*/
    onHandleShowitem(event){

    }

    render(){
        return(
            <section id="portfolio">
                <div className="container">
                    <h2 className="text-center">Projects</h2>
                    <hr className="star-primary"/>
                    <div className="row">
                        <div className="col-sm-4  portfolio-item">

                            <a className="portfolio-link" href="#portfolioModal1" data-toggle="modal">
                                <div className="caption">
                                    <div className="caption-content">
                                        <i className="fa fa-search-plus fa-3x"></i>
                                    </div>
                                </div>
                                <img className="img-fluid" src="img/portfolio/cabin.png" alt=""/>
                            </a>
                        </div>
                    </div>
                    {
                        this.state.expanded ? (
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="btn-container text-center">
                                        <button type="button" className="btn btn-warning" onClick={this.onHandleShowitem}>Show Less</button>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="btn-container text-center">
                                        <button type="button" className="btn btn-primary" onClick={this.this.onHandleShowitem}>Show More</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }

                </div>
            </section>  
        );
    }
}