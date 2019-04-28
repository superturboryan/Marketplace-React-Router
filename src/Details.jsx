import React, { Component } from 'react';
import { Link } from 'react-router-dom'

//Custom components
import Review from './Review.jsx'

export default class Details extends Component {

   render = () => {
      return (
         <div>
            <h2>{this.props.item.description}</h2>
            <img height="100px" src={this.props.item.image}></img>
            <div>Quantity remaining: {this.props.item.remaining}</div>
            <div>
               <h4>Reviews:</h4>
               <ul>
                  {this.props.item.reviews.map(review => {
                     return (<Review item={this.props.item} rating={review.rating} comment={review.comment} reviewer={review.reviewer} showLink={true} />)
                  })}
               </ul>
            </div>

         </div>
      )
   }

}