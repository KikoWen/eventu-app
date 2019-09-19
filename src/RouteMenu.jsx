import React, {Component} from 'react';
import { Link } from "@reach/router";
class RouteMenu extends Component{
    render(){
        return(
            <div className="container">
                <Link to="/events" ><div className="menu-header text-secondary close"></div></Link>
                <div className="menu-list-container">
                    <ul className="menu-list list-group list-group-flush">
                        <li className="menu-items list-group-item">Add Event</li>
                        <li className="menu-items list-group-item">Search Events</li>
                        <li className="menu-items list-group-item">Save Events</li>
                        <li className="menu-items list-group-item">My Events</li>
                        <li className="menu-items list-group-item">My Account</li>
                    </ul>
                </div>
            </div>
            
        );
    }
}

export default RouteMenu;