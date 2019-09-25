import React, {Component} from 'react';
import { Link } from "@reach/router";

class RouteMenu extends Component{
    render(){
        var {currentUser} = this.props
        return(
            <div className="container">
                <Link to="/events" ><div className="menu-header text-secondary close"></div></Link>
                <div className="menu-list-container">

                    <ul className="menu-list list-group list-group-flush">
                        <Link to="/events/create"><li className="menu-items list-group-item">Add Event</li></Link>
                        <Link to={'/users/'+currentUser.id+'/savedEvents'}><li className="menu-items list-group-item">Saved Events</li></Link>
                        {/* <li className="menu-items list-group-item">My Events</li>
                        <li className="menu-items list-group-item">My Events</li> */}
                        <Link to = "/users/:id/edit" ><li className="menu-items list-group-item">My Account</li></Link>
                        {currentUser && currentUser.role == "admin" ? (
                            <Link to = "/users/" ><li className="menu-items list-group-item">View all Users</li></Link>
                        ) : null}
                       
                    </ul>
                </div>
            </div>
            
        );
    }
}

export default RouteMenu;