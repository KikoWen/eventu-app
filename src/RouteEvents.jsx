import React, {Component} from 'react';
import Event from './Event';
import { getEvents, getSingleUser } from './Api';
import Footer from './Footer.jsx';
import CategoryFilter from './CategoryFilter.jsx';

class RouteEvents extends Component{
    constructor(props){
        super(props)

        this.state={
            events:[],
            isCategoryOn: false
          }
          
      }

      routeGetEvents = () => {
          getEvents().then(res => {
              this.setState({events:res.data})
          })
      }

      handleFilterClick = () =>{
         this.setState({
             isCategoryOn: !this.state.isCategoryOn
         })
      }

      componentDidMount(){
            this.routeGetEvents();
            
            // var userId = localStorage.getItem('userId')

            //  if (userId){
            //      getSingleUser(userId).then(res =>  this.setState({currentUser:res.data}))
            //  }
      }

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
                    <CategoryFilter/>
                    {
                        events.map(event => {

                        var eventProps = {
                            event: event,
                            key: event.id,
                            refreshData: this.routeGetEvents,
                            currentUser: currentUser,
                            setCurrentUser:this.props.setCurrentUser
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
    

