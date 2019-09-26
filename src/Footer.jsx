import React, {Component} from 'react';
import { Link, } from "@reach/router";

class Footer extends Component{

    render(){
        var {currentUserId} = this.props
        return(

           
            <footer>
                <Link to= "/events"><i className="fas fa-home"></i></Link>
                <Link to="/events/create"><i className="fas fa-plus"></i></Link>
                { currentUserId ? (<Link to={"/users/"+currentUserId+"/savedEvents"}><i className="far fa-bookmark"></i></Link>) : (<i className="far fa-bookmark"></i>)}
                <Link to="/menu"><i className="fas fa-bars"></i></Link>
            </footer>
        )
    }
    
}

export default Footer;

