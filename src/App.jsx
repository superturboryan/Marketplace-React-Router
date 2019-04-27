import './App.css';
import React, { Component } from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom'
import Seller from './Seller.jsx'
import Item from './Item.jsx'
import Details from './Details.jsx'
import { initialItems, initialSellers } from './Data.js'
import Review from './Review.jsx';


export default class App extends Component {

   constructor() {
      super()
      console.log("Initializing App state")
      this.state = {
         items: [],
         descInput: "",
         priceInput: "",
         imageInput: "",
         itemIDInput: "",
         sellerIDInput: "",
         remainingInput: ""
      }
   }

   render() {
      return (
         <BrowserRouter>
            <div>
               <Route exact={true} path='/' render={this.renderAllItems} />
               <Route exact={true} path='/seller/:sid' render={this.renderSeller} />
               <Route exact={true} path='/details/:itemid' render={this.renderDetails} />
               <Route exact={true} path='/reviewer/:rid' render={this.renderReviewer} />
               <Route exact={true} path="/sellers" render={this.renderSellersList} />
               <Route exact={true} path="/allSellers" render={this.renderAllSellers} />
            </div>
         </BrowserRouter>
      );
   }

   //EVENT HANDLERS

   onSubmitHandler = event => {

      event.preventDefault()

      this.setState({
         descInput: "",
         priceInput: "",
         imageInput: "",
         itemIDInput: "",
         sellerIDInput: "",
         remainingInput: "",
         items: this.state.items.concat({
            description: this.state.descInput,
            price: this.state.priceInput,
            image: this.state.imageInput,
            id: this.state.itemIDInput,
            sellerId: this.state.sellerIDInput,
            remaining: this.state.remainingInput,
            reviews: []
         })
      })

   }

   onDescChange = event => {
      console.log("Updating the description to ", event.target.value)
      this.setState({ descInput: event.target.value })
   }

   onPriceChange = event => {
      console.log("Updating the price to ", event.target.value)
      this.setState({ priceInput: event.target.value })
   }

   onImageChange = event => {
      console.log("Updating the image URL to ", event.target.value)
      this.setState({ imageInput: event.target.value })
   }

   onItemIDChange = event => {
      console.log("Updating the item ID to ", event.target.value)
      this.setState({ itemIDInput: event.target.value })
   }

   onSellerIDChange = event => {
      console.log("Updating the seller ID to ", event.target.value)
      this.setState({ sellerIDInput: event.target.value })
   }

   onRemaniningChange = event => {
      console.log("Updating the remaining count to ", event.target.value)
      this.setState({ remainingInput: event.target.value })
   }

   //Render methods for all the Routes

   renderAllItems = () => {
      return (
         <div>
            <h2 className="center">Marketplace!</h2>
            <form className="center" onSubmit={this.onSubmitHandler}>
               <input
                  type="input"
                  placeholder="Description"
                  onChange={this.onDescChange}
                  value={this.state.descInput}>
               </input>
               <input
                  type="input"
                  placeholder="Price"
                  onChange={this.onPriceChange}
                  value={this.state.priceInput}>
               </input>
               <input
                  type="input"
                  placeholder="Image URL"
                  onChange={this.onImageChange}
                  value={this.state.imageInput}>
               </input>
               <input
                  type="input"
                  placeholder="ItemID"
                  onChange={this.onItemIDChange}
                  value={this.state.itemIDInput}>
               </input>
               <input
                  type="input"
                  placeholder="SellerID"
                  onChange={this.onSellerIDChange}
                  value={this.state.sellerIDInput}>
               </input>
               <input
                  type="input"
                  placeholder="Remaining"
                  onChange={this.onRemaniningChange}
                  value={this.state.remainingInput}>
               </input>
               <input type="submit" value="Add item"></input>
            </form>

            {initialItems.map(item =>
               (<Item
                  cost={item.price}
                  sellerId={item.sellerId}
                  imageLocation={item.image}
                  description={item.description}
                  remaining={item.remaining}
                  id={item.id}
               />))}

            {this.state.items.map(item =>
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

            <div className="center">
               <Link to={"/allSellers"}>View all sellers + items</Link>
            </div>

         </div>
      )
   }

   renderSeller = routerData => {
      let sellerId = routerData.match.params.sid
      let candidates =
         initialSellers.filter(seller => { return seller.id === sellerId })
      return (<Seller seller={candidates[0]} sellerId={sellerId} />)
   }

   renderDetails = routerData => {
      let itemId = routerData.match.params.itemid
      let item = initialItems.filter(item => { return item.id === itemId })
      return (<Details item={item[0]} />)
   }

   renderReviewer = routerData => {
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

   renderAllSellers = () => {

      return (
         <div>
            <h2>Sellers + Items</h2>
            {initialSellers.map(seller => {
               return <Seller seller={seller} sellerId={seller.id} />
            })}
         </div>
      )
   }

   renderSellersList = () => {

      return (
         <div>
            <h2>Sellers</h2>
            {initialSellers.map(seller => {
               return <div><Link to={"/seller/" + seller.id}>{seller.name}</Link></div>
            })}
         </div>
      )
   }

}

