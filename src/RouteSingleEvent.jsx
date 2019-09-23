import React, { Component } from 'react';
import { Link } from "@reach/router";
import Event from './Event';
import { getEvents, getSingleEvent, serverURL } from './Api.jsx';
import Footer from './Footer.jsx';

class RouteSingleEvent extends Component {

    constructor(props){
        super(props)
        this.state = {
            event:null
        }
    }

    componentDidMount(){
        var {id} = this.props

        getSingleEvent(id).then(res=>{

            this.setState({event:res.data})
        })
    }
    render() {

        var {event} = this.state

        return event ? (
            <div className="container">
                <div className="mainevent-section">
                    <div className="image-section" style={{backgroundImage:'linear-gradient(165deg, rgba(0,0,0,0) 43%, #0091FF),url('+serverURL+event.photo+')'}}>
                        <i className="fas fa-arrow-left"></i>
                        <a className="entertainment" href="#">Entertainment</a>
                    </div>

                    <div className="text-contents">
                        <div className="title">
                            <h2>{event.name}</h2>
                            <div className="icons">
                                <i className="far fa-bookmark"></i>
                                <i className="fas fa-share-square"></i>
                            </div>
                        </div>

                        <div className="explanation">
                            <p>{event.description} <a href="">read more</a></p>
                        </div>

                        <div className="date-info">
                            <div className="when">
                                <h4>When</h4>
                                <p>{event.time}</p>
                            </div>
                            <div className="info where">
                                <h4>Where</h4>
                                <p>{event.location}</p>
                            </div>
                            <div className="info cost">
                                <h4>Cost</h4>
                                <p>{event.cost}</p>
                            </div>

                        </div>
                    </div>

                </div>
                <div className="comment-section">
                    <p className="pcomment-section">Comments</p>

                    <div className="card comment-card">
                        <div className="card-body">
                            <p className="username">jimmy_xo</p>
                            <h5 className="card-title">Can't wait!</h5>
                            <p className="card-text comment">Bought my tickets yesterday -tickets are selling out fast</p>
                            <i className="fas fa-edit"></i>
                            <i className="fas fa-trash"></i>
                        </div>

                    </div>

                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Add comment" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                            <div className="input-group-append">
                                <button className="comment-button" type="button">add</button>
                            </div>
                    </div>
                </div>
            </div>
                ) :null
            }
        }
        
        
export default RouteSingleEvent ;