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
        // BINDING
        this.onHandleShowitem = this.onHandleShowitem.bind(this);
        this.onHandleModal = this.onHandleModal.bind(this);
    }

    componentDidMount(){
        this.getProjectList();

    }

    getProjectList(){
        CommonModel.getProjects().then((data) => {
            // console.log(data.data);
           this.setState({
               projects: data.data
           })
        });
    }
    /*EVENT HANDLE*/
    onHandleShowitem(event){
        if(this.state.showProjectItem === 3){
            this.setState({
                showProjectItem: this.state.projects.result.length,
                expanded: true
            })
        }else{
            this.setState({
                showProjectItem: 3,
                expanded: false
            })
        }

    }

    onHandleModal(event){

    }

    render(){
        this.state.projects !== null && console.log(this.state.projects.result.slice(0, this.state.showProjectItem));
        return(
            <section id="portfolio">
                <div className="container">
                    <h2 className="text-center">Projects</h2>
                    <hr className="star-primary"/>
                    <div className="row">
                        {
                            this.state.projects !== null && this.state.projects.result.length > 0 ? (
                                this.state.projects.result.slice(0, this.state.showProjectItem).map( (rs, key)=>
                                    <div className="col-sm-4  portfolio-item" key={key} >
                                        <a className="portfolio-link" onClick={this.onHandleModal} project={rs }>
                                            <div className="caption">
                                                <div className="caption-content">
                                                    <i className="fa fa-search-plus fa-3x"></i>
                                                </div>
                                            </div>
                                            <img className="img-fluid" src="img/portfolio/cabin.png" alt=""/>
                                        </a>
                                    </div>
                                )
                            ) : (
                                <div className="col-sm-12 portfolio-item text-center">
                                    <p>Chưa có dữ liệu</p>
                                </div>
                            )
                        }


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
                                        <button type="button" className="btn btn-primary" onClick={this.onHandleShowitem}>Show More</button>
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