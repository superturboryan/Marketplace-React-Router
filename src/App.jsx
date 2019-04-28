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
         remainingInput: "",
         ///////////////////
         sellers: [],
         addSellerIDInput: "",
         addSellerNameInput: "",
         addSellerRatingInput: "",
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
               <Link className="margin-v" to={"/"}>Return to Marketplace</Link>
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

   onSellerSubmitHandler = event => {

      event.preventDefault()

      this.setState({
         addSellerIDInput: "",
         addSellerNameInput: "",
         addSellerRatingInput: "",
         sellers: this.state.sellers.concat({
            id: this.state.addSellerIDInput,
            name: this.state.addSellerNameInput,
            rating: this.state.addSellerRatingInput
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

   onAddSellerIDChange = event => {
      console.log("Updating the new seller id to ", event.target.value)
      this.setState({ addSellerIDInput: event.target.value })
   }

   onAddSellerNameChange = event => {
      console.log("Updating the new seller name to ", event.target.value)
      this.setState({ addSellerNameInput: event.target.value })
   }

   onAddSellerRatingChange = event => {
      console.log("Updating the new seller's rating to ", event.target.value)
      this.setState({ addSellerRatingInput: event.target.value })
   }

   //Render methods for all the Routes

   renderAllItems = () => {
      return (
         <div className="container center margin-v">

            <h2 className="center margin-v">Marketplace!</h2>

            <div className="center margin-v">
               Add an item to the Marketplace!
               <form onSubmit={this.onSubmitHandler}>
                  <input
                     type="text"
                     placeholder="Description"
                     onChange={this.onDescChange}
                     value={this.state.descInput}
                     className="descriptionInput">
                  </input>
                  <input
                     type="text"
                     placeholder="Price"
                     onChange={this.onPriceChange}
                     value={this.state.priceInput}>
                  </input>
                  <input
                     type="text"
                     placeholder="Image URL"
                     onChange={this.onImageChange}
                     value={this.state.imageInput}>
                  </input>
                  <input
                     type="text"
                     placeholder="ItemID"
                     onChange={this.onItemIDChange}
                     value={this.state.itemIDInput}>
                  </input>
                  <input
                     type="text"
                     placeholder="SellerID"
                     onChange={this.onSellerIDChange}
                     value={this.state.sellerIDInput}>
                  </input>
                  <input
                     type="text"
                     placeholder="Remaining"
                     onChange={this.onRemaniningChange}
                     value={this.state.remainingInput}>
                  </input>
                  <input className="myButton" type="submit" value="Add item"></input>
               </form>
            </div>

            <div className="center margin-v">
               Add a seller to the Marketplace!
               <form onSubmit={this.onSellerSubmitHandler}>

                  <input
                     type="text"
                     placeholder="Seller ID"
                     onChange={this.onAddSellerIDChange}
                     value={this.state.addSellerIDInput}>
                  </input>
                  <input
                     type="text"
                     placeholder="Seller Name"
                     onChange={this.onAddSellerNameChange}
                     value={this.state.addSellerNameInput}>
                  </input>
                  <input
                     type="text"
                     placeholder="Rating"
                     onChange={this.onAddSellerRatingChange}
                     value={this.state.addSellerRatingInput}>
                  </input>

                  <input className="myButton" type="submit" value="Add Seller"></input>

               </form>
            </div>

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


            <Link className="myButton automargin" to={"/sellers"}>View all sellers</Link>

            <Link className="myButton automargin" to={"/allSellers"}>View all sellers + items</Link>


         </div>
      )
   }

   renderSeller = routerData => {
      let sellerId = routerData.match.params.sid

      let addedSellerIds = this.state.sellers.map(seller => {
         return seller.id
      })

      if (addedSellerIds.includes(sellerId)) {

         let candidates =
            this.state.sellers.filter(seller => { return seller.id === sellerId })

         return (
            <div>
               <Seller seller={candidates[0]} sellerId={sellerId} addedItems={this.state.items} />
            </div>
         )
      }

      let candidates =
         initialSellers.filter(seller => { return seller.id === sellerId })
      return (
         <div>
            <Seller seller={candidates[0]} sellerId={sellerId} addedItems={this.state.items} />
         </div>
      )
   }

   renderDetails = routerData => {
      let itemId = routerData.match.params.itemid

      let addedIds = this.state.items.map(item => {
         return item.id
      })
      // console.log(addedIds)
      // Check if the item to display is from the user added items
      if (addedIds.includes(itemId)) {

         let item = this.state.items.filter(item => { return item.id === itemId })
         return (
            <div>
               <Details item={item[0]} />
               <form onSubmit={this.onSubmitReviewHandler}>
                  <input
                     type="text"
                     placeholder="">
                  </input>
               </form>
            </div>
         )
      }

      let item = initialItems.filter(item => { return item.id === itemId })
      return (
         <div>
            <Details item={item[0]} />
         </div>
      )
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
            <div className="margin-v">
               {initialSellers.map(seller => {
                  return <Seller seller={seller} sellerId={seller.id} addedItems={this.state.items} />
               })}
               {this.state.sellers.map(seller => {
                  return <Seller seller={seller} sellerId={seller.id} addedItems={this.state.items} />
               })}
            </div>
         </div>
      )
   }

   renderSellersList = () => {

      return (
         <div>
            <h2>Sellers</h2>
            {initialSellers.map(seller => {
               return (
                  <div>
                     <Link to={"/seller/" + seller.id}>{seller.name}</Link>
                  </div>
               )
            })}
            {this.state.sellers.map(seller => {
               return (
                  <div>
                     <Link to={"/seller/" + seller.id}>{seller.name}</Link>
                  </div>
               )
            })}
         </div>
      )
   }

}

