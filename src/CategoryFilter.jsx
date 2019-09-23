import React, { Component }from 'react';
import {Link} from "@reach/router";
import {getCategories} from './Api.jsx';
class CategoryFilter extends Component{
    constructor(props){
        super(props);
        this.state ={
            categories:[]
            
        }
    }

    componentDidMount(){
        getCategories().then(res=>this.setState({categories:res.data}))
    }

    render(){
        var {categories} = this.state
        return(
            // <div className="container ">
                 <div className="categories">
                     {
                         categories.map( category => {

                             var categoryProps ={
                                 category:category,
                                 key:category.id,
                                 refreshData: this.routeGetEvents,
                                //  color:category.color
                             }
                             return (
                                <Link to={'/categories/'+category.id} className={category.name}>{category.name}</Link>
                             )
                         })
                     }
                </div>
            // </div>

        )
    }


}

export default CategoryFilter;