import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Review extends Component {

   render() {

      if (this.props.showLink) {
         return (
            <li>
               <div>{this.props.rating}/5☆</div>
               <div>"{this.props.comment}" - written by {this.props.reviewer}</div>
               <div><Link to={"/reviewer/" + this.props.reviewer}>See all reviews by {this.props.reviewer}</Link></div>
            </li>
         )
      }
      else {
         return (
            <li>
               <h4>{this.props.item.description}</h4>
               <div>{this.props.rating}/5☆</div>
               <div>"{this.props.comment}"</div>
            </li>
         )
      }
   }
}