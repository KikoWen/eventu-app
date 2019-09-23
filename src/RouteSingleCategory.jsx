import React, { Component }from 'react';
import Event from './Event.jsx';
import  {getSingleCategory}  from './Api.jsx';
import Footer from './Footer.jsx';
import CategoryFilter from './CategoryFilter.jsx';
import Accordion from 'react-bootstrap/Accordion';

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

    render(){
        var {category} =this.state
        return category ?(
            <div className="container">
            <div className="main">

                <h3 className="category-name-style">{category.name}</h3>
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