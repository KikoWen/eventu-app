import React, {Component} from 'react';
import {Link } from "@reach/router";
import Event from './Event';
import { getEvents, getSingleUser } from './Api';
import Footer from './Footer.jsx';

class RouteEvents extends Component{
    constructor(props){
        super(props)

        this.state={
            events:[
            //   {
            //     name:'testing',
            //     id: 1,
            //     description: 'live music',
            //     location:'3 City rd, Grafton, Auckland',
            //     time: '10th Oct 2019',
            //     category: 'entertainment',
            // },
            // {
            //   name:'fitness',
            //   id: 3,
            //   description: 'gym time',
            //   location:'3 City rd, Grafton, Auckland',
            //   time: '10th Oct 2019',
            //   category: 'sport'
            // },
            // {
            //   name:'wellbeing',
            //   id: 2,
            //   description: 'meditation',
            //   location:'3 City rd, Grafton, Auckland',
            //   time: '10th Oct 2019',
            //   category: 'wellbeing'
            // },
            // {
            //   name:'food & drink',
            //   id: 4,
            //   description: 'meditation',
            //   location:'3 City rd, Grafton, Auckland',
            //   time: '10th Oct 2019',
            //   category: 'foodDrink'
            // },
            // {
            //   name:'exchange cloths market',
            //   id: 5,
            //   description: 'meditation',
            //   location:'3 City rd, Grafton, Auckland',
            //   time: '10th Oct 2019',
            //   category: 'miscellaneous',
            // }
            ],
            currentUser: null
        }
    }

    setCurrentUser = (user) => {
        this.setState({currentUser:user})
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

      

    
      render(){

        var {events, currentUser} = this.state
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
                        <h6 className="hi-name">
                            {
                                currentUser? (<span>Hi, {currentUser.name}</span>) : null
                            }
                        </h6>
                        <div className="filter">  
                        <div className="filter">
                            <p className="filter-p">filter</p> 
                            <i class="fas fa-chevron-down"></i>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="main">
                    {
                        events.map(event => {

                        var eventProps = {
                            event: event,
                            key: event.id,
                            refreshData: this.routeGetEvents
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
    
    export default RouteEvents ;
    

