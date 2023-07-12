import axios from 'axios';

const instance = axios.create({
    //Local API
    baseURL: 'http://localhost:8080'
    //the API (cloud function ) URL 
    //use the URL of the cloud functions url once setup 
});

export default instance;