import React, {Component} from 'react';
import CommonModel from '../models/common';
const jQuery = window.jQuery;

export default class Project extends Component{
    constructor(props){
        super(props);
        this.state = {
            projects : null,
            showProjectItem: 3,
            expanded: false,
            selectedItem: null,
        }
        // BINDING
        this.onHandleShowitem = this.onHandleShowitem.bind(this);
        this.onHandleModal = this.onHandleModal.bind(this);
        this.onHandleCloseModal = this.onHandleCloseModal.bind(this);
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
        if(this.state.projects){
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
    }

    onHandleModal(rs, event){
        event.preventDefault();
        const selectedItem = {
            'img': rs.img_url,
            'name': rs.name,
            'description': rs.description,
            'client': rs.client,
            'service': rs.service,
            'link': rs.link
        };
        this.setState({
            selectedItem: selectedItem
        })
        jQuery('.portfolio-modal').modal('show');
    }

    onHandleCloseModal(event){
        this.setState({
            selectedItem: null,
        })
        jQuery('.portfolio-modal').modal('hide');
    }

    render(){
        let config_url = 'http://localhost/portfolio_api/';
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
                                        <a className="portfolio-link" onClick={this.onHandleModal.bind(this, rs)} project={rs}>
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
                <div className="portfolio-modal modal fade">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="close-modal" onClick={this.onHandleCloseModal} >
                                <div className="lr">
                                    <div className="rl"></div>
                                </div>
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8 mx-auto">
                                        <div className="modal-body">
                                            <h2>{this.state.selectedItem !== null && this.state.selectedItem.name}</h2>
                                            <hr className="star-primary"/>
                                            <img className="img-fluid img-centered" src={this.state.selectedItem !== null ? config_url+this.state.selectedItem.img : 'https://lorempixel.com/250/250/cats/?17317'} alt=""/>
                                            <div className="content-container">
                                                {this.state.selectedItem !== null && this.state.selectedItem.description}
                                            </div>
                                            <ul className="list-inline item-details">
                                                <li>Client:
                                                    <strong>
                                                        <a href={this.state.selectedItem !== null && this.state.selectedItem.link}>{this.state.selectedItem !== null && this.state.selectedItem.client}</a>
                                                    </strong>
                                                </li>

                                                <li>Service:
                                                    <strong>
                                                        {this.state.selectedItem !== null && this.state.selectedItem.service}
                                                    </strong>
                                                </li>
                                            </ul>
                                            <button className="btn btn-success" type="button" onClick={this.onHandleCloseModal}>
                                                <i className="fa fa-times"></i>
                                                Close
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </section>  
        );
    }
}