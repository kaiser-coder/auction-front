import HeroSection from "../components/HeroSection"

export default function Profile() {
   return (
      <main>
         <HeroSection title="My Profile"/>

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
                                 <span className="username"><a href="http://pixner.net/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="f993969197b99e94989095d79a9694">[email&#160;protected]</a></span>
                              </div>
                           </div>
                           <ul className="dashboard-menu">
                              <li>
                                 <a href="dashboard.html"><i className="flaticon-dashboard"></i>Dashboard</a>
                              </li>
                              <li>
                                 <a href="#0" className="active"><i className="flaticon-settings"></i>Personal Profile </a>
                              </li>
                              <li>
                                 <a href="my-bid.html"><i className="flaticon-auction"></i>My Bids</a>
                              </li>
                              <li>
                                 <a href="winning-bids.html"><i className="flaticon-best-seller"></i>Winning Bids</a>
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
                     <div className="row">
                           <div className="col-12">
                              <div className="dash-pro-item mb-30 dashboard-widget">
                                 <div className="header">
                                       <h4 className="title">Personal Details</h4>
                                       <span className="edit"><i className="flaticon-edit"></i> Edit</span>
                                 </div>
                                 <ul className="dash-pro-body">
                                       <li>
                                          <div className="info-name">Name</div>
                                          <div className="info-value">Albert Owens</div>
                                       </li>
                                       <li>
                                          <div className="info-name">Date of Birth</div>
                                          <div className="info-value">15-03-1974</div>
                                       </li>
                                       <li>
                                          <div className="info-name">Address</div>
                                          <div className="info-value">8198 Fieldstone Dr.La Crosse, WI 54601</div>
                                       </li>
                                 </ul>
                              </div>
                           </div>
                           <div className="col-12">
                              <div className="dash-pro-item mb-30 dashboard-widget">
                                 <div className="header">
                                       <h4 className="title">Account Settings</h4>
                                       <span className="edit"><i className="flaticon-edit"></i> Edit</span>
                                 </div>
                                 <ul className="dash-pro-body">
                                       <li>
                                          <div className="info-name">Language</div>
                                          <div className="info-value">English (United States)</div>
                                       </li>
                                       <li>
                                          <div className="info-name">Time Zone</div>
                                          <div className="info-value">(GMT-06:00) Central America</div>
                                       </li>
                                       <li>
                                          <div className="info-name">Status</div>
                                          <div className="info-value"><i className="flaticon-check text-success"></i> Active</div>
                                       </li>
                                 </ul>
                              </div>
                           </div>
                           <div className="col-12">
                              <div className="dash-pro-item mb-30 dashboard-widget">
                                 <div className="header">
                                       <h4 className="title">Email Address</h4>
                                       <span className="edit"><i className="flaticon-edit"></i> Edit</span>
                                 </div>
                                 <ul className="dash-pro-body">
                                       <li>
                                          <div className="info-name">Email</div>
                                          <div className="info-value"><a href="http://pixner.net/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="5c3d303e392e286f68651c3b313d3530723f3331">[email&#160;protected]</a></div>
                                       </li>
                                 </ul>
                              </div>
                           </div>
                           <div className="col-12">
                              <div className="dash-pro-item mb-30 dashboard-widget">
                                 <div className="header">
                                       <h4 className="title">Phone</h4>
                                       <span className="edit"><i className="flaticon-edit"></i> Edit</span>
                                 </div>
                                 <ul className="dash-pro-body">
                                       <li>
                                          <div className="info-name">Mobile</div>
                                          <div className="info-value">+1 234-567-8925</div>
                                       </li>
                                 </ul>
                              </div>
                           </div>
                           <div className="col-12">
                              <div className="dash-pro-item dashboard-widget">
                                 <div className="header">
                                       <h4 className="title">Security</h4>
                                       <span className="edit"><i className="flaticon-edit"></i> Edit</span>
                                 </div>
                                 <ul className="dash-pro-body">
                                       <li>
                                          <div className="info-name">Password</div>
                                          <div className="info-value">xxxxxxxxxxxxxxxx</div>
                                       </li>
                                 </ul>
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