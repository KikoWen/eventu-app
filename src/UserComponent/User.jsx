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
                    <div className="label"> Name: {user.name}</div>
                    <div className="label"> Username: {user.username}</div>
                    <div className="label">Email: {user.email}</div>
                    <div className="label">Role: {user.role}</div>
                    <div className="edit-platform">
                        <div className="user-delete">
                            <i onClick={this.handleTrashClick} className="far fa-trash-alt"></i>
                            </div>
                        <div className="user-edit">
                            <Link to={'/users/'+ user.id+'/edit'}>
                                <i className="far fa-edit"></i>
                            </Link>
                            </div>
                    
                    </div>
                </div>
        )
    }
}

export default User;