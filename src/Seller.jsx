import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom'

import { initialItems } from './Data.js'

export default class Seller extends Component {

   getItemsBySeller() {

      let itemsToDisplay = []

      initialItems.forEach(item => {
         if (item.sellerId === this.props.sellerId) {

            itemsToDisplay.push(item)
         }
      })

      console.log(itemsToDisplay[0].description)

      return itemsToDisplay.map(item => {

         return (
            <li>
               <Link to={"/details/" + item.id}>{item.description}</Link>
            </li>

         )
      })
   }

   render() {
      return (
         <div className="card center">

            <div>{this.props.seller.name}</div>
            <div>{this.props.seller.rating}</div>
            <div>Items sold by this seller: </div>
            {console.log(this.getItemsBySeller())}
            <ul>
               {this.getItemsBySeller()}
            </ul>

         </div>
      );
   }
} 