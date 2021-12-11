import BrowseHighlight from "../components/HomePage/BrowseHighlights"

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
];

export default function HomePage() {
   return (
      <>
         <BrowseHighlight items={browseItems}/>
      </>
   )
}