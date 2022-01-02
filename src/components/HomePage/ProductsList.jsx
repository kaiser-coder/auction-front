import CallInComponent from './CallInComponent'
import HowSection from './HowSection'
import ClientSection from './ClientSection'

// Sub-Components
const JewelryListComponent = ({jewelries}) => {
   return (
      <section className="jewelry-auction-section padding-bottom padding-top pos-rel">
        <div className="jewelry-bg d-none d-xl-block"><img src="assets/images/auction/jewelry/jwelry-bg.png" alt="jewelry"/></div>
        <div className="container">
            <div className="section-header-3">
                <div className="left">
                    <div className="thumb">
                        <img src="assets/images/header-icons/coin-1.png" alt="header-icons"/>
                    </div>
                    <div className="title-area">
                        <h2 className="title">{jewelries.category}</h2>
                        <p>{jewelries.description}</p>
                    </div>
                </div>
                <a href="#0" className="normal-button">View All</a>
            </div>
            <div className="row justify-content-center mb-30-none">
               {
                  jewelries.items.map((item, key) => (
                     <div className="col-sm-10 col-md-6 col-lg-4">
                        <div className="auction-item-2">
                           <div className="auction-thumb">
                              <a href="product-details.html"><img src={item.img} alt="jewelry"/></a>
                              <a href="#0" className="rating"><i className="far fa-star"></i></a>
                              <a href="#0" className="bid"><i className="flaticon-auction"></i></a>
                           </div>
                           <div className="auction-content">
                              <h6 className="title">
                                 <a href="product-details.html">{item.title}</a>
                              </h6>
                              <div className="bid-area">
                                 <div className="bid-amount">
                                       <div className="icon">
                                          <i className="flaticon-auction"></i>
                                       </div>
                                       <div className="amount-content">
                                          <div className="current">Current Bid</div>
                                          <div className="amount">${item.currentBid}</div>
                                       </div>
                                 </div>
                                 <div className="bid-amount">
                                       <div className="icon">
                                          <i className="flaticon-money"></i>
                                       </div>
                                       <div className="amount-content">
                                          <div className="current">Buy Now</div>
                                          <div className="amount">${item.buyNow}</div>
                                       </div>
                                 </div>
                              </div>
                              <div className="countdown-area">
                                 <div className="countdown">
                                       <div id="bid_counter23"></div>
                                 </div>
                                 <span className="total-bids">{item.bids} Bids</span>
                              </div>
                              <div className="text-center">
                                 <a href="#0" className="custom-button">Submit a bid</a>
                              </div>
                           </div>
                        </div>
                     </div>
                  ))
               }
            </div>
        </div>
      </section>
   )
}

const WatchListComponent = ({watches}) => {
   return (
      <section className="watches-auction-section padding-bottom padding-top">
        <div className="container">
            <div className="section-header-3">
                <div className="left">
                    <div className="thumb">
                        <img src="assets/images/header-icons/coin-1.png" alt="header-icons"/>
                    </div>
                    <div className="title-area">
                        <h2 className="title">{watches.category}</h2>
                        <p>{watches.description}</p>
                    </div>
                </div>
                <a href="#0" className="normal-button">View All</a>
            </div>
            <div className="row justify-content-center mb-30-none">
               {
                  watches.items.map((item, key) => {
                     return (
                        <div className="col-sm-10 col-md-6 col-lg-4">
                           <div className="auction-item-2">
                                 <div className="auction-thumb">
                                    <a href="product-details.html"><img src={item.img} alt="watches"/></a>
                                    <a href="#0" className="rating"><i className="far fa-star"></i></a>
                                    <a href="#0" className="bid"><i className="flaticon-auction"></i></a>
                                 </div>
                                 <div className="auction-content">
                                    <h6 className="title">
                                       <a href="product-details.html">{item.title}</a>
                                    </h6>
                                    <div className="bid-area">
                                       <div className="bid-amount">
                                             <div className="icon">
                                                <i className="flaticon-auction"></i>
                                             </div>
                                             <div className="amount-content">
                                                <div className="current">Current Bid</div>
                                                <div className="amount">${item.currentBid}</div>
                                             </div>
                                       </div>
                                       <div className="bid-amount">
                                             <div className="icon">
                                                <i className="flaticon-money"></i>
                                             </div>
                                             <div className="amount-content">
                                                <div className="current">Buy Now</div>
                                                <div className="amount">${item.buyNow}</div>
                                             </div>
                                       </div>
                                    </div>
                                    <div className="countdown-area">
                                       <div className="countdown">
                                          <div id="bid_counter20"></div>
                                       </div>
                                       <span className="total-bids">{item.bids} Bids</span>
                                    </div>
                                    <div className="text-center">
                                       <a href="#0" className="custom-button">Submit a bid</a>
                                    </div>
                                 </div>
                           </div>
                        </div>
                     )
                  })
               }
            </div>
        </div>
    </section>
   )
}

export default function ProductsList ({items}) {
   return (
      <>
         <JewelryListComponent jewelries={items.jewelries}/>
         <CallInComponent/>
         <WatchListComponent watches={items.watches}/>
         <HowSection/>
         <ClientSection/>
      </>
   )
}