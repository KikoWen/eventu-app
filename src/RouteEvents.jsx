import React, {Component} from 'react';
import {Link } from "@reach/router";
import Event from './Event';
import { getEvents, getSingleUser } from './Api';
import Footer from './Footer.jsx';
import CategoryFilter from './CategoryFilter.jsx';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

class RouteEvents extends Component{
    constructor(props){
        super(props)

        this.state={
            events:[]

            //------

            // isHidden: true,

             //------
          }
      }

      routeGetEvents = () => {
          getEvents().then(res => {
              this.setState({events:res.data})
          })
      }

      componentDidMount(){
            this.routeGetEvents();
            
            var userId = localStorage.getItem('userId')

             if (userId){
                 getSingleUser(userId).then(res =>  this.setState({currentUser:res.data}))
             }
      }

    //   toggleHidden () {
    //     this.setState({
    //       isHidden: !this.state.isHidden
    //     })
    //   }

      render(){

        var {events} = this.state
        var {currentUser} = this.props
        return (
            <div className="container homepage-container">
                <div className="header">
                    <div className="header1">   
                        <h6>What's on</h6>
                        <div className="location">
                            <h1>Auckland</h1>
                            <i className="fas fa-map-marker-alt"></i>
                        </div>
                    </div>
                    <div className="header2">
                        <h6 className="hi-name">Hi {currentUser ? currentUser.name : 'Guest'}</h6>
                    </div>
                    
                </div>
                <div className="main">
                        <Accordion >
                            <Accordion.Toggle variant="link" eventKey="0" className="filter-button">
                                filter <i class="fas fa-chevron-down"></i>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <CategoryFilter/>
                            </Accordion.Collapse>
                        </Accordion>
                    {
                        events.map(event => {

                        var eventProps = {
                            event: event,
                            key: event.id,
                            refreshData: this.routeGetEvents,
                            currentUser:currentUser
                        }
                        return <Event {...eventProps} />
                        })
                    }
                </div>
                <Footer/>
            </div>
    

        )
      }
    }

    // onClick={this.toggleHidden.bind(this)}

    // {!this.state.isHidden && }

    // const Child = () => (
    //     <div className='modal'>
    //       </div>
    //     )
    
    export default RouteEvents ;
    

