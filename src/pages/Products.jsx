import ProductItem from '../components/ProductItem'

const products = [
   {
      product: 1
   },
   {
      product: 2
   }
]

export default function Products({}) {
   return (
      <section className="featured-auction-section padding-bottom mt--240 mt-lg--440 pos-rel">
        <div className="container">
            <div className="section-header cl-white mw-100 left-style">
                <h3 className="title">Bid on These Featured Auctions!</h3>
            </div>
            <div className="product-auction padding-bottom">
               <div className="container">
                  <div className="row mb-30-none justify-content-center">
                     {
                        products.map((product) => <ProductItem/>)
                     }
                  </div>
               </div>
            </div>
        </div>
      </section>
   )
}