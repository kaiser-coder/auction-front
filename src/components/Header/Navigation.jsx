
const MenuComponent = () => {
    return (
        <ul className="menu ml-auto">
            <li>
                <a href="#0">Home</a>
                <ul className="submenu">
                    <li>
                        <a href="index.html">Home Page One</a>
                    </li>
                    <li>
                        <a href="index-2.html">Home Page Two</a>
                    </li>
                    <li>
                        <a href="index-3.html">Home Page Three</a>
                    </li>
                    <li>
                        <a href="index-4.html">Home Page Four</a>
                    </li>
                    <li>
                        <a href="index-5.html">Home Page Five</a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="product.html">Auction</a>
            </li>
            <li>
                <a href="#0">Pages</a>
                <ul className="submenu">
                    <li>
                        <a href="#0">Product</a>
                        <ul className="submenu">
                            <li>
                                <a href="product.html">Product Page 1</a>
                            </li>
                            <li>
                                <a href="product-2.html">Product Page 2</a>
                            </li>
                            <li>
                                <a href="product-details.html">Product Details</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#0">My Account</a>
                        <ul className="submenu">
                            <li>
                                <a href="sign-up.html">Sign Up</a>
                            </li>
                            <li>
                                <a href="sign-in.html">Sign In</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#0">Dashboard</a>
                        <ul className="submenu">
                            <li>
                                <a href="dashboard.html">Dashboard</a>
                            </li>
                            <li>
                                <a href="profile.html">Personal Profile</a>
                            </li>
                            <li>
                                <a href="my-bid.html">My Bids</a>
                            </li>
                            <li>
                                <a href="winning-bids.html">Winning Bids</a>
                            </li>
                            <li>
                                <a href="notifications.html">My Alert</a>
                            </li>
                            <li>
                                <a href="my-favorites.html">My Favorites</a>
                            </li>
                            <li>
                                <a href="referral.html">Referrals</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="about.html">About Us</a>
                    </li>
                    <li>
                        <a href="faqs.html">Faqs</a>
                    </li>
                    <li>
                        <a href="error.html">404 Error</a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="contact.html">Contact</a>
            </li>
        </ul>
    )
}

export default function Navigation() {
   return (
      <header>
        <div className="header-top">
            <div className="container">
                <div className="header-top-wrapper">
                    <ul className="customer-support">
                        <li>
                            <a href="#0" className="mr-3"><i className="fas fa-phone-alt"></i><span className="ml-2 d-none d-sm-inline-block">Customer Support</span></a>
                        </li>
                        <li>
                            <i className="fas fa-globe"></i>
                            <select name="language" className="select-bar">
                                <option value="en">En</option>
                                <option value="Bn">Bn</option>
                                <option value="Rs">Rs</option>
                                <option value="Us">Us</option>
                                <option value="Pk">Pk</option>
                                <option value="Arg">Arg</option>
                            </select>
                        </li>
                    </ul>
                    <ul className="cart-button-area">
                        <li>
                            <a href="#0" className="cart-button"><i className="flaticon-shopping-basket"></i><span className="amount">08</span></a>
                        </li>                        
                        <li>
                            <a href="sign-in.html" className="user-button"><i className="flaticon-user"></i></a>
                        </li>                        
                    </ul>
                </div>
            </div>
        </div>
        <div className="header-bottom">
            <div className="container">
                <div className="header-wrapper">
                    <div className="logo">
                        <a href="index.html">
                            <img src="/assets/images/logo/logo.png" alt="logo"/>
                        </a>
                    </div>
                    <MenuComponent/>
                    <form className="search-form">
                        <input type="text" placeholder="Search for brand, model...."/>
                        <button type="submit"><i className="fas fa-search"></i></button>
                    </form>
                    <div className="search-bar d-md-none">
                        <a href="#0"><i className="fas fa-search"></i></a>
                    </div>
                    <div className="header-bar d-lg-none">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    </header>
   )
}