let initialItems = [
   {
      description: "Nice boat",
      price: 10000,
      image: "/boat.png",
      id: "asewq",
      sellerId: "ewio",
      remaining: 5,
      reviews: [
         { rating: 4, comment: "Got me across the lake just fine, could be sturdier", reviewer: "Ryan" },
         { rating: 3, comment: "Did not like the colour, let it float away for someone else", reviewer: "John" }
      ]
   },
   {
      id: "wqwasq",
      description: "Lawn chairs",
      price: 50,
      image: "/lawnchair.jpg",
      sellerId: "xcvb",
      remaining: 10,
      reviews: [
         { rating: 1, comment: "Broke when I tried to fold it", reviewer: "Ryan" },
         { rating: 4, comment: "My dog loved it for soaking up the sun", reviewer: "John" }
      ]
   },
   {
      id: "abcde",
      description: "Triumph Thruxton R - new model, retro styling",
      price: 10000,
      image: "./moto.jpg",
      sellerId: "triumph",
      remaining: 3,
      reviews: [
         { rating: 5, comment: "Love the retro styling, love Triumph!", reviewer: "Ryan" },
         { rating: 5, comment: "Straight out of another era, timeless.", reviewer: "John" }
      ]
   },
   {
      id: "abcdf",
      description: "Triumph Street Triple R",
      price: 6000,
      image: "./moto2.jpg",
      sellerId: "triumph",
      remaining: 5,
      reviews: [
         { rating: 4, comment: "Great bike, torque all throughout the powerband", reviewer: "Ryan" },
         { rating: 3, comment: "With only 100rwhp, it could use a little more oomph at the top end", reviewer: "John" }
      ]
   },
   {
      id: "abcdg",
      description: "Triumph Scrambler 1200 xe",
      price: 12000,
      image: "./moto3.jpg",
      sellerId: "triumph",
      remaining: 15,
      reviews: [
         { rating: 4, comment: "Got me across the lake just fine, could be sturdier", reviewer: "Ryan" },
         { rating: 3, comment: "Did not like the colour, let it float away for someone else", reviewer: "John" }
      ]
   }
]

let initialSellers = [{
   id: "ewio",
   name: "Jack Frost",
   rating: "5 stars",
}, {
   id: "xcvb",
   name: "Hank Green",
   rating: "2 stars",
}, {
   id: "triumph",
   name: "Rich McGee",
   rating: "4.5 stars"
}]

export { initialItems, initialSellers }
