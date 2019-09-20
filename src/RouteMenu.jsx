import React, {Component} from 'react';
import { Link } from "@reach/router";
class RouteMenu extends Component{
    render(){
        return(
            <div className="container">
                <Link to="/events" ><div className="menu-header text-secondary close"></div></Link>
                <div className="menu-list-container">
                    <ul className="menu-list list-group list-group-flush">
                        <Link to="/events/create"><li className="menu-items list-group-item">Add Event</li></Link>
                        <Link to="/events/saved"><li className="menu-items list-group-item">Saved Events</li></Link>
                        <li className="menu-items list-group-item">My Events</li>
                    </ul>
                </div>
            </div>
            
        );
    }
}

export default RouteMenu;