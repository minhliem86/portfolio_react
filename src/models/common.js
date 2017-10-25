import axios from 'axios';

let config_url = 'http://porfolio.ruasieutoc.com/api/v1/';
class CommonModel {

    getSkills(){
        let url = config_url+'skills';
        return axios.get(url);
    }

    getProjects(){
        let url = config_url+'projects';
        return axios.get(url);
    }

    getProjectById(id=1){
        let url = config_url+`projects/${id}`;
        return axios.get(url);
    }

}