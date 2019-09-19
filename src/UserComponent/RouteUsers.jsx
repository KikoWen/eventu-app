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
                <div className="container user-list">
                    <i className="fas fa-arrow-left"></i>
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
            )
        }

}

export default RouteUsers ;