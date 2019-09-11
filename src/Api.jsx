import axios from 'axios';

var urlPrefix = 'http://10.2.24.40:4000/api';
var serverURL= 'http://10.2.24.40:4000/';


var getEvents = () => {
    return axios.get(urlPrefix+'/events')
        
}

var getCategories = () => {
    return axios.get(urlPrefix+'/categories')
       
}

var  addEvents = (data) => {
    return axios.post(urlPrefix+'/events',data)
    
  }

var getSingleEvent = (id) => {
    return axios.get(urlPrefix+'/events/' + id)
    
}

var updateEvents = (id,data) => {
    return axios.put(urlPrefix+'/events/'+ id,data)
    
}

var deleteEvents = (id) => {
    return axios.delete(urlPrefix+'/events/'+id)

  }

export {getEvents, getCategories , serverURL, addEvents, getSingleEvent, updateEvents, deleteEvents}