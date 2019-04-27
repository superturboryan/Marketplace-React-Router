import './App.css';
import React, { Component } from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom'
import Seller from './Seller.jsx'
import Item from './Item.jsx'
import Details from './Details.jsx'
import { initialItems, initialSellers } from './Data.js'
import Review from './Review.jsx';

let renderAllItems = () => {
   return (
      <div>
         <h2 className="center">Marketplace!</h2>
         {initialItems.map(item =>
            (<Item
               cost={item.price}
               sellerId={item.sellerId}
               imageLocation={item.image}
               description={item.description}
               remaining={item.remaining}
               id={item.id}
            />))}
         <div className="center">
            <Link to={"/sellers"}>View all sellers</Link>
         </div>
      </div>
   )
}

let renderSeller = routerData => {
   let sellerId = routerData.match.params.sid
   let candidates =
      initialSellers.filter(seller => { return seller.id === sellerId })
   return (<Seller seller={candidates[0]} sellerId={sellerId} />)
}

let renderDetails = routerData => {
   let itemId = routerData.match.params.itemid
   let item = initialItems.filter(item => { return item.id === itemId })
   return (<Details item={item[0]} />)
}

let renderReviewer = routerData => {
   let reviewerName = routerData.match.params.rid
   let reviewsToDisplay = []

   initialItems.forEach(item => {

      item.reviews.forEach(review => {
         if (review.reviewer === reviewerName) {
            reviewsToDisplay.push([review, item])
         }
      })
   })

   return (
      <div>
         <h4>Reviews by {reviewerName}</h4>
         <ul>
            {reviewsToDisplay.map(review => {
               return (<Review item={review[1]} rating={review[0].rating} comment={review[0].comment} reviewer={review[0].reviewer} showLink={false} />)
            })}
         </ul>
      </div>
   )
}

let renderAllSellers = () => {


   return (
      <div>
         <h2>Sellers</h2>
         {initialSellers.map(seller => {
            return <Seller seller={seller} sellerId={seller.id} />
         })}
      </div>
   )
}

export default class App extends Component {
   render() {
      return (
         <BrowserRouter>
            <div>
               <Route exact={true} path='/' render={renderAllItems} />
               <Route exact={true} path='/seller/:sid' render={renderSeller} />
               <Route exact={true} path='/details/:itemid' render={renderDetails} />
               <Route exact={true} path='/reviewer/:rid' render={renderReviewer} />
               <Route exact={true} path="/sellers" render={renderAllSellers} />
            </div>
         </BrowserRouter>
      );
   }
}

