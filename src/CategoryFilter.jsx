import React, { Component }from 'react';
import {Link} from "@reach/router";
import {getCategories} from './Api.jsx';
import Accordion from 'react-bootstrap/Accordion';


class CategoryFilter extends Component{
    constructor(props){
        super(props);
        this.state ={
            categories:[],
            isCategoryOn: false
            
        }
    }

    handleFilterClick = () =>{
        this.setState({
            isCategoryOn: !this.state.isCategoryOn
        })
     }


    componentDidMount(){
        getCategories().then(res=>this.setState({categories:res.data}))
    }



    render(){
        var {categories} = this.state
        return(
            <Accordion >
                <Accordion.Toggle variant="link" eventKey="0" className="filter-button" onClick ={this.handleFilterClick}>
                filter 
                { this.state.isCategoryOn ? (<i className="fas fa-chevron-up"></i>) : (<i className="fas fa-chevron-down filter-i-color"></i>)}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <div className="categories">
                        {
                        categories.map( category => {

                        var categoryProps ={
                            category:category,
                            key:category.id,
                            refreshData: this.routeGetEvents,
                        }
                        var categoryStyle = {
                            color:category.color,
                            border:'thin solid ' + category.color
                        }
                        return (
                            <Link to={'/categories/'+category.id} className={category.name} style={categoryStyle}>{category.name}</Link>
                            )
                        })
                        }
                    </div>

                </Accordion.Collapse>
            </Accordion>

        )
    }


}

export default CategoryFilter;