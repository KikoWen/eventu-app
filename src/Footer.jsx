import React, {Component} from 'react';
import { Link, } from "@reach/router";
// import { navigate } from '@reach/router';

class Footer extends Component{

    render(){
        var {event} = this.props
        return(

            // <div class="footer">
            //     <div class="home-footer">
            //     <i class="fas fa-home"></i>
            //     <i class="fas fa-plus"></i>
            //     <i class="far fa-bookmark"></i>
            //     <i class="fas fa-bars"></i>
            //     </div>
            // </div>
            <footer>
                <Link to= "/events"><i class="fas fa-home"></i></Link>
                <Link to="/events/create"><i className="fas fa-plus"></i></Link>
                <i class="far fa-bookmark"></i>
                <i class="fas fa-bars"></i>
            </footer>
        )
    }
    
}

export default Footer;

