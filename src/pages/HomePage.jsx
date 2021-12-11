import BrowseHighlight from '../components/HomePage/BrowseHighlights'
import ProductsList from '../components/HomePage/ProductsList'

// Constants
const browseItems = [
   {
      img: '/assets/images/auction/01.png',
      name: 'Vehicle'
   },
   {
      img: '/assets/images/auction/02.png',
      name: 'Jewerly'
   },
   {
      img: '/assets/images/auction/03.png',
      name: 'Watches'
   },
   {
      img: '/assets/images/auction/04.png',
      name: 'Electronics'
   },
   {
      img: '/assets/images/auction/05.png',
      name: 'Sports'
   },
   {
      img: '/assets/images/auction/06.png',
      name: 'Real Estate'
   },
]

const products = {
   jewelries: {
      category: 'Jewelry',
      description: 'Online jewelry auctions where you can bid now and save money',
      items: [
         {  
            img: 'assets/images/auction/jewelry/auction-1.jpg',
            title: 'Gold ring with clear stone',
            currentBid: '876.00',
            buyNow: '5,00.00',
            bids: '30',
            time: ''
         },
         {  
            img: 'assets/images/auction/jewelry/auction-2.jpg',
            title: 'Gold ring with clear stone',
            currentBid: '876.00',
            buyNow: '5,00.00',
            bids: '30',
            time: ''
         },
         {  
            img: 'assets/images/auction/jewelry/auction-3.jpg',
            title: 'Gold ring with clear stone',
            currentBid: '876.00',
            buyNow: '5,00.00',
            bids: '30',
            time: ''
         },
      ]
   },
   watches: {
      category: 'Watches',
      description: 'Shop for men & women designer brand watches',
      items: [
         {  
            img: 'assets/images/auction/watches/auction-1.jpg',
            title: 'Vintage rolex',
            currentBid: '876.00',
            buyNow: '5,00.00',
            bids: '30',
            time: ''
         },
         {  
            img: 'assets/images/auction/watches/auction-2.jpg',
            title: 'Lady\'s Vintage Rolex Datejust',
            currentBid: '876.00',
            buyNow: '5,00.00',
            bids: '30',
            time: ''
         },
         {  
            img: 'assets/images/auction/watches/auction-3.jpg',
            title: 'Lady\'s retro diamond',
            currentBid: '876.00',
            buyNow: '5,00.00',
            bids: '30',
            time: ''
         },
      ]
   }
}

export default function HomePage() {
   return (
      <>
         <BrowseHighlight items={browseItems}/>
         <ProductsList items={products}/>
      </>
   )
}