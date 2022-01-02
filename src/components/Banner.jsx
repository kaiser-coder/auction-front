export default function Banner() {
   return (
      <section className="banner-section bg_img" data-background="assets/images/banner/banner-bg-1.png">
        <div className="container">
            <div className="row align-items-center justify-content-between">
                <div className="col-lg-6 col-xl-6">
                    <div className="banner-content cl-white">
                        <h5 className="cate">Next Generation Auction</h5>
                        <h1 className="title"><span className="d-xl-block">Find Your</span> Next Deal!</h1>
                        <p>
                            Online Auction is where everyone goes to shop, sell,and give, while discovering variety and affordability.
                        </p>
                        <a href="#0" className="custom-button yellow btn-large">Get Started</a>
                    </div>
                </div>
                <div className="d-none d-lg-block col-lg-6">
                    <div className="banner-thumb-2">
                        <img src="assets/images/banner/banner-1.png" alt="banner"/>
                    </div>
                </div>
            </div>
         </div>
         <div className="banner-shape d-none d-lg-block">
               <img src="assets/css/img/banner-shape.png" alt="css"/>
         </div>
      </section>
   )
}