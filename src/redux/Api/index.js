import axios from 'axios';


export const fetchdata =  () => axios.get(`http://localhost:5000/AccountDetails`).then(res => res)            
