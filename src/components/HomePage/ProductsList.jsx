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
      <section class="watches-auction-section padding-bottom padding-top">
        <div class="container">
            <div class="section-header-3">
                <div class="left">
                    <div class="thumb">
                        <img src="assets/images/header-icons/coin-1.png" alt="header-icons"/>
                    </div>
                    <div class="title-area">
                        <h2 class="title">{watches.category}</h2>
                        <p>{watches.description}</p>
                    </div>
                </div>
                <a href="#0" class="normal-button">View All</a>
            </div>
            <div class="row justify-content-center mb-30-none">
               {
                  watches.items.map((item, key) => {
                     return (
                        <div class="col-sm-10 col-md-6 col-lg-4">
                           <div class="auction-item-2">
                                 <div class="auction-thumb">
                                    <a href="product-details.html"><img src={item.img} alt="watches"/></a>
                                    <a href="#0" class="rating"><i class="far fa-star"></i></a>
                                    <a href="#0" class="bid"><i class="flaticon-auction"></i></a>
                                 </div>
                                 <div class="auction-content">
                                    <h6 class="title">
                                       <a href="product-details.html">{item.title}</a>
                                    </h6>
                                    <div class="bid-area">
                                       <div class="bid-amount">
                                             <div class="icon">
                                                <i class="flaticon-auction"></i>
                                             </div>
                                             <div class="amount-content">
                                                <div class="current">Current Bid</div>
                                                <div class="amount">${item.currentBid}</div>
                                             </div>
                                       </div>
                                       <div class="bid-amount">
                                             <div class="icon">
                                                <i class="flaticon-money"></i>
                                             </div>
                                             <div class="amount-content">
                                                <div class="current">Buy Now</div>
                                                <div class="amount">${item.buyNow}</div>
                                             </div>
                                       </div>
                                    </div>
                                    <div class="countdown-area">
                                       <div class="countdown">
                                          <div id="bid_counter20"></div>
                                       </div>
                                       <span class="total-bids">{item.bids} Bids</span>
                                    </div>
                                    <div class="text-center">
                                       <a href="#0" class="custom-button">Submit a bid</a>
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