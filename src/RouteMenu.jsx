import React, {Component} from 'react';
import { Link, navigate } from "@reach/router";

class RouteMenu extends Component{


    handleLogoutClick = () => {
        localStorage.removeItem('userId')
        this.props.setCurrentUser(null)
        navigate('/')
      }

    render(){
        var {currentUser} = this.props
        return(
            <div className="container">
                <div className="main">
                    <Link to="/events" ><div className="menu-header text-secondary close"></div></Link>
                    <div className="menu-list-container">

                        <ul className="menu-list list-group list-group-flush">
                            <Link to="/events/create"><li className="menu-items list-group-item">Add Event</li></Link>
                            { currentUser ? (<Link to={'/users/'+currentUser.id+'/savedEvents'}><li className="menu-items list-group-item">Saved Events</li></Link>) : null  }
                            {/* <li className="menu-items list-group-item">My Events</li>
                            <li className="menu-items list-group-item">My Events</li> */}
                            <Link to = "/users/:id/edit" ><li className="menu-items list-group-item">My Account</li></Link>
                            {currentUser && currentUser.role == "admin" ? (
                                <Link to = "/users/" ><li className="menu-items list-group-item">View all Users</li></Link>
                            ) : null}

                            {currentUser? (
                                <Link to = "/" ><li className="menu-items list-group-item" onClick={this.handleLogoutClick}>Log out</li></Link>
                            ) : null}
                        
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default RouteMenu;