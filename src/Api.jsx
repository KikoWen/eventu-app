import axios from 'axios';

var urlPrefix = 'http://10.2.24.42:4000/api';
var serverURL= 'http://10.2.24.42:4000/';


var getEvents = () => {
    return axios.get(urlPrefix+'/events')
        
}

var getCategories = () => {
    return axios.get(urlPrefix+'/categories')      
}

var getSingleCategory = (id) => {
  return axios.get(urlPrefix+'/categories/'+id)      
}

var addEvents = (data) => {
    return axios.post(urlPrefix+'/events',data)
    
}

var authenticate = (data) => {
  return axios.post(urlPrefix+'/authenticate',data)          
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

//Users CRUD

var getUsers = () => {
  return axios.get(urlPrefix+'/users')
      
}

var addUsers = (data) => {
  return axios.post(urlPrefix+'/users',data)
  
}

var getSingleUser = (id) => {
  return axios.get(urlPrefix+'/users/' + id)
  
}

var updateUsers = (id,data) => {
  return axios.put(urlPrefix+'/users/'+ id,data)
  
}

var deleteUsers = (id) => {
  return axios.delete(urlPrefix+'/users/'+id)

}

var addBookmarks= (userId,data) => {
  return axios.post(urlPrefix+'/users/'+userId+'/saved-events',data)
  
}

var deleteBookmarks= (userId,eventId) => {
  return axios.delete(urlPrefix+'/users/'+userId+'/saved-events/'+eventId)
  
}


var  authenticate = (data) => {
  return axios.post(urlPrefix+'/authenticate',data)          
}

//User end

var uploadFile = (formData) => {

  var settings = { headers: {'Content-Type': 'multipart/form-data' }}
  return axios.post(urlPrefix+'/upload',formData,settings)

}

//Comment/Review CRUD 

var  addReviews = (data) => {
  return axios.post(urlPrefix+'/reviews',data)
  
}

var deleteReviews = (id) => {
  return axios.delete(urlPrefix+'/reviews/'+id)

}




export {
  serverURL, 
  getEvents,
  addEvents, 
  getSingleEvent, 
  updateEvents, 
  deleteEvents,  
  getUsers,
  addUsers, 
  getSingleUser, 
  updateUsers, 
  deleteUsers,
  authenticate,
  getCategories, 
  getSingleCategory, 
  uploadFile,
  addBookmarks,
  deleteBookmarks,
  addReviews,
  deleteReviews,
}
