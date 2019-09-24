import React, { Component }from 'react';
import Event from './Event.jsx';
import {Link} from "@reach/router";
import  {getSingleCategory, getCategories}  from './Api.jsx';
import Footer from './Footer.jsx';
import CategoryFilter from './CategoryFilter.jsx';

class RouteSingleCategory extends Component{
    constructor(props){
        super(props)
        this.state = {
            category:null
        }
    }

    routeGetCategory = (id) =>{
        getSingleCategory(id).then(res => this.setState({category:res.data}))
    }

    componentDidMount(){
        var {id} = this.props
        this.routeGetCategory(id)
    }

    componentDidUpdate(prevProps){
        var {id} = this.props
        if(prevProps.id != id){
            this.routeGetCategory(id)
        }
    }

    render(){
        var {category} =this.state
        var {currentUser} = this.props
        return category ?(
            <div className="container category-filter">
                <div className="header"> 
                <div className="header1"> 
                    <Link to='/events'><i className="fas fa-arrow-left"></i></Link>
                </div>
                <div className="header2">
                    <h6 className="hi-name">Hi {currentUser ? currentUser.name : 'Guest'}</h6>
                </div>
                
                </div>

            <div className="main">
                <CategoryFilter/>

                <h3 className="category-name-style" style={{color:category.color}}>{category.name}</h3>
                {
                    category.events.map((event)=>{

                        var eventProps = {
                            event:event,
                            key: event.id,
                            refreshData: () => this.routeGetCategory(category.id),
                            currentUser: this.props.currentUser
                        };
                        return (<Event {...eventProps} />)
                    })
                }
            </div>  
            <Footer />
            </div> 
        ) : null
    }


}

export default RouteSingleCategory;