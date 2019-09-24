import React, {Component} from 'react';
import {Link } from "@reach/router";
import User from './User';
import { getUsers } from '../Api';
import Footer from '../Footer.jsx'

class RouteUsers extends Component{
    constructor(props){
        super(props)

        this.state={
            users:[]
        }
    }

        routeGetUsers = () => {
            getUsers().then(res => {
                this.setState({users:res.data})
            })
        }
  
        componentDidMount(){
            this.routeGetUsers();
        }


        render(){
            var {users} = this.state
            return(
                <div className="container">
                    <div className="header">
                        <Link to='/events/' className="goback"><i className="fas fa-arrow-left"></i></Link>
                    </div>
                <div className="main">
                    <div className="user-list">
                        <h1>User list</h1>
                        <div className="userpage-info">
                            {
                                users.map(user =>{

                                    var userProps ={
                                        user: user,
                                        key: user.id,
                                        refreshData: this.routeGetUsers
                                    }
                                    return<User {...userProps}/>
                                })
                            }
                        </div>  
                        <Footer/>
                    </div>
                </div>
                </div>
            )
        }

}

export default RouteUsers ;