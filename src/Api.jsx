import axios from 'axios';

var urlPrefix = 'http://localhost:4000/api';
var serverURL= 'http://localhost:4000/';


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

var uploadFile = (formData) => {

  var settings = { headers: {'Content-Type': 'multipart/form-data' }}
  return axios.post(urlPrefix+'/upload',formData,settings)

}

export {getEvents, getCategories , serverURL, addEvents, getSingleEvent, updateEvents, deleteEvents,uploadFile}