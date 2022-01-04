import HeroSection from "../components/HeroSection"

export default function WinningBid() {
   return (
      <main>
         <HeroSection title="Winning Bids"/>
         <section className="dashboard-section padding-bottom mt--240 mt-lg--440 pos-rel">
            <div className="container">
                  <div className="row justify-content-center">
                     <div className="col-sm-10 col-md-7 col-lg-4">
                        <div className="dashboard-widget mb-30 mb-lg-0 sticky-menu">
                              <div className="user">
                                 <div className="thumb-area">
                                    <div className="thumb">
                                          <img src="assets/images/dashboard/user.png" alt="user"/>
                                    </div>
                                    <label htmlFor="profile-pic" className="profile-pic-edit"><i className="flaticon-pencil"></i></label>
                                    <input type="file" id="profile-pic" className="d-none"/>
                                 </div>
                                 <div className="content">
                                    <h5 className="title"><a href="#0">Percy Reed</a></h5>
                                    <span className="username"><a href="http://pixner.net/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="9ff5f0f7f1dff8f2fef6f3b1fcf0f2">[email&#160;protected]</a></span>
                                 </div>
                              </div>
                              <ul className="dashboard-menu">
                                 <li>
                                    <a href="dashboard.html"><i className="flaticon-dashboard"></i>Dashboard</a>
                                 </li>
                                 <li>
                                    <a href="profile.html"><i className="flaticon-settings"></i>Personal Profile </a>
                                 </li>
                                 <li>
                                    <a href="my-bid.html"><i className="flaticon-auction"></i>My Bids</a>
                                 </li>
                                 <li>
                                    <a href="#0" className="active"><i className="flaticon-best-seller"></i>Winning Bids</a>
                                 </li>
                                 <li>
                                    <a href="notifications.html"><i className="flaticon-alarm"></i>My Alerts</a>
                                 </li>
                                 <li>
                                    <a href="my-favorites.html"><i className="flaticon-star"></i>My Favorites</a>
                                 </li>
                                 <li>
                                    <a href="referral.html"><i className="flaticon-shake-hand"></i>Referrals</a>
                                 </li>
                              </ul>
                        </div>
                     </div>
                     <div className="col-lg-8">
                        <div className="dash-bid-item dashboard-widget mb-40-60">
                              <div className="header">
                                 <h4 className="title">Winning Bids</h4>
                              </div>
                              <div className="button-area justify-content-between">
                                 <form className="product-search">
                                    <input type="text" placeholder="Item Name"/>
                                    <button type="submit"><i className="fas fa-search"></i></button>
                                 </form>
                                 <div className="sort-winning-bid">
                                    <div className="item">Sort By : </div>
                                    <select name="sort-by" className="select-bar">
                                          <option value="all">All</option>
                                          <option value="name">Name</option>
                                          <option value="date">Date</option>
                                          <option value="type">Type</option>
                                          <option value="car">Car</option>
                                    </select>
                                 </div>
                              </div>
                        </div>
                        <div className="row mb-30-none justify-content-center">
                              <div className="col-sm-10 col-md-6">
                                 <div className="auction-item-2">
                                    <div className="auction-thumb">
                                          <a href="product-details.html"><img src="assets/images/auction/car/auction-3.jpg" alt="car"/></a>
                                          <a href="#0" className="rating"><i className="far fa-star"></i></a>
                                          <a href="#0" className="bid"><i className="flaticon-auction"></i></a>
                                    </div>
                                    <div className="auction-content">
                                          <h6 className="title">
                                             <a href="#0">2018 Hyundai Sonata</a>
                                          </h6>
                                          <div className="bid-area">
                                             <div className="bid-amount">
                                                <div className="icon">
                                                      <i className="flaticon-auction"></i>
                                                </div>
                                                <div className="amount-content">
                                                      <div className="current">Current Bid</div>
                                                      <div className="amount">$876.00</div>
                                                </div>
                                             </div>
                                             <div className="bid-amount">
                                                <div className="icon">
                                                      <i className="flaticon-money"></i>
                                                </div>
                                                <div className="amount-content">
                                                      <div className="current">Buy Now</div>
                                                      <div className="amount">$5,00.00</div>
                                                </div>
                                             </div>
                                          </div>
                                          <div className="countdown-area">
                                             <div className="countdown">
                                                <div id="bid_counter26"></div>
                                             </div>
                                             <span className="total-bids">30 Bids</span>
                                          </div>
                                          <div className="text-center">
                                             <a href="#0" className="custom-button">Submit a bid</a>
                                          </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-sm-10 col-md-6">
                                 <div className="auction-item-2">
                                    <div className="auction-thumb">
                                          <a href="product-details.html"><img src="/assets/images/auction/product/08.png" alt="car"/></a>
                                          <a href="#0" className="rating"><i className="far fa-star"></i></a>
                                          <a href="#0" className="bid"><i className="flaticon-auction"></i></a>
                                    </div>
                                    <div className="auction-content">
                                          <h6 className="title">
                                             <a href="#0">2018 Nissan Versa, S</a>
                                          </h6>
                                          <div className="bid-area">
                                             <div className="bid-amount">
                                                <div className="icon">
                                                      <i className="flaticon-auction"></i>
                                                </div>
                                                <div className="amount-content">
                                                      <div className="current">Current Bid</div>
                                                      <div className="amount">$876.00</div>
                                                </div>
                                             </div>
                                             <div className="bid-amount">
                                                <div className="icon">
                                                      <i className="flaticon-money"></i>
                                                </div>
                                                <div className="amount-content">
                                                      <div className="current">Buy Now</div>
                                                      <div className="amount">$5,00.00</div>
                                                </div>
                                             </div>
                                          </div>
                                          <div className="countdown-area">
                                             <div className="countdown">
                                                <div id="bid_counter27"></div>
                                             </div>
                                             <span className="total-bids">30 Bids</span>
                                          </div>
                                          <div className="text-center">
                                             <a href="#0" className="custom-button">Submit a bid</a>
                                          </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-sm-10 col-md-6">
                                 <div className="auction-item-2">
                                    <div className="auction-thumb">
                                          <a href="product-details.html"><img src="assets/images/auction/product/04.png" alt="product"/></a>
                                          <a href="#0" className="rating"><i className="far fa-star"></i></a>
                                          <a href="#0" className="bid"><i className="flaticon-auction"></i></a>
                                    </div>
                                    <div className="auction-content">
                                          <h6 className="title">
                                             <a href="#0">2019 Mercedes-Benz C, 300</a>
                                          </h6>
                                          <div className="bid-area">
                                             <div className="bid-amount">
                                                <div className="icon">
                                                      <i className="flaticon-auction"></i>
                                                </div>
                                                <div className="amount-content">
                                                      <div className="current">Current Bid</div>
                                                      <div className="amount">$876.00</div>
                                                </div>
                                             </div>
                                             <div className="bid-amount">
                                                <div className="icon">
                                                      <i className="flaticon-money"></i>
                                                </div>
                                                <div className="amount-content">
                                                      <div className="current">Buy Now</div>
                                                      <div className="amount">$5,00.00</div>
                                                </div>
                                             </div>
                                          </div>
                                          <div className="countdown-area">
                                             <div className="countdown">
                                                <div id="bid_counter1"></div>
                                             </div>
                                             <span className="total-bids">30 Bids</span>
                                          </div>
                                          <div className="text-center">
                                             <a href="#0" className="custom-button">Submit a bid</a>
                                          </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-sm-10 col-md-6">
                                 <div className="auction-item-2">
                                    <div className="auction-thumb">
                                          <a href="product-details.html"><img src="assets/images/auction/product/07.png" alt="product"/></a>
                                          <a href="#0" className="rating"><i className="far fa-star"></i></a>
                                          <a href="#0" className="bid"><i className="flaticon-auction"></i></a>
                                    </div>
                                    <div className="auction-content">
                                          <h6 className="title">
                                             <a href="#0">2017 Harley-Davidson XG750,</a>
                                          </h6>
                                          <div className="bid-area">
                                             <div className="bid-amount">
                                                <div className="icon">
                                                      <i className="flaticon-auction"></i>
                                                </div>
                                                <div className="amount-content">
                                                      <div className="current">Current Bid</div>
                                                      <div className="amount">$876.00</div>
                                                </div>
                                             </div>
                                             <div className="bid-amount">
                                                <div className="icon">
                                                      <i className="flaticon-money"></i>
                                                </div>
                                                <div className="amount-content">
                                                      <div className="current">Buy Now</div>
                                                      <div className="amount">$5,00.00</div>
                                                </div>
                                             </div>
                                          </div>
                                          <div className="countdown-area">
                                             <div className="countdown">
                                                <div id="bid_counter2"></div>
                                             </div>
                                             <span className="total-bids">30 Bids</span>
                                          </div>
                                          <div className="text-center">
                                             <a href="#0" className="custom-button">Submit a bid</a>
                                          </div>
                                    </div>
                                 </div>
                              </div>
                        </div>
                     </div>
                  </div>
            </div>
         </section>
      </main>
   )
}