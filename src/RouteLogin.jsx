import React, {Component} from 'react';
import {  navigate } from "@reach/router";
import {authenticate} from './Api.jsx';


class RouteLogin extends Component {
    constructor(props){
        super(props);
        this.state = {
            message:''
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault();

        var formData = new FormData(this.form);
        var data = {
            name: formData.get('username-input'),
            password: formData.get('password-input'),
        }
        
        var {setCurrentUser} = this.props

        authenticate(data)
        .then(res => {
            var user = res.data
            setCurrentUser(user)
            return user
        })
        .then(user => {
            if(user){
                localStorage.setItem('userId',user.id)
                navigate('/events')
            }else{
                this.setState({message:'Try again'})
            }
        })
    }
   

    render(){
        return(
            <div class="container">
                <img src="Eventu.png" alt="" class="logo"/>
            <form onSubmit={this.handleFormSubmit} ref={(el) => {this.form = el}}>
                <div class="email-contents">
                    <h5 class="welcome">WELCOME</h5>
                    <input type="text" name="username-input" id="Username-input" placeholder="Username"/>
                    <input type="password" name="password-input" id="Password-input" placeholder="Password"/>
                    <p>Forgot password?</p>
                </div>
                
                <button type="Sign-in" class="btn-purple">SIGN IN</button>
                {/* <p class="alret">{this.state.message}</p> */}
            </form>

                <div class="notice-for-signup">
                    <p>Don't have an account?</p>
                    <p class="red-text">Create new account</p>
                </div>
                <div class="space"></div>
                <p class="guestlogin">Login as a guest</p>
                
            </div>
        )
    }
}

export default RouteLogin ;