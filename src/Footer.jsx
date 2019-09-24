import React, {Component} from 'react';
import { Link, } from "@reach/router";
// import { navigate } from '@reach/router';

class Footer extends Component{

    render(){
        var {event} = this.props
        return(

           
            <footer>
                <Link to= "/events"><i className="fas fa-home"></i></Link>
                <Link to="/events/create"><i className="fas fa-plus"></i></Link>
                <i className="far fa-bookmark"></i>
                <Link to="/menu"><i className="fas fa-bars"></i></Link>
            </footer>
        )
    }
    
}

export default Footer;

