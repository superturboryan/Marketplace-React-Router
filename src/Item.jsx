import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './App.css';

export default class Item extends Component {
   render() {
      return (<div className="card center ">
         <img height="100px" src={this.props.imageLocation} />
         <div>
            <div>{this.props.description}</div>
            <div>${this.props.cost}</div>
            <div><Link to={"/seller/" + this.props.sellerId}>Seller details</Link></div>
            <div><Link to={"/details/" + this.props.id}> Item Details </Link></div>
         </div>
      </div>)
   }
}



