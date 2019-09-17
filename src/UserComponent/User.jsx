import React, {Component} from 'react';
import { Link, navigate } from "@reach/router";
import { deleteUsers,serverURL } from '../Api';

class User extends Component{

    handleTrashClick = () => {
        var {user,refreshData} = this.props
        deleteUsers(user.id).then(res => refreshData())
       
    }

    render(){
        var{user} =this.props
        return(
           
            <div className="userpage-details">
                <div className="user-name">{user.name}</div>
                <div className="user-email">{user.email}</div>
                <div className="user-role">{user.role}</div>
                <div className="edit-platform">
                    <div className="user-delete"><i onClick={this.handleTrashClick} className="far fa-trash-alt"></i></div>
                    <div className="user-edit"><i className="far fa-edit"></i></div>
                
                </div>
            </div>
        )
    }
}

export default User;