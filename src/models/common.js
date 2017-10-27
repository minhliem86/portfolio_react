import axios from 'axios';

let config_url = 'http://localhost/portfolio_api/api/v1/';
class CommonModel {

    static getSkills(){
        let url = config_url+'skills';
        return axios.get(url);
    }

    static getProjects(){
        let url = config_url+'projects';
        return axios.get(url);
    }

    static getProjectById( id=1){
        let url = config_url+`projects/${id}`;
        return axios.get(url);
    }
}

export default CommonModel;