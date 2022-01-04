
const MenuComponent = () => {
    return (
        <ul className="menu ml-auto">
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="#">Auction</a>
            </li>
            <li>
                <a href="#0">Account</a>
                <ul className="submenu">
                    <li>
                        <a href="/dashboard">Dashboard</a>
                    </li>
                    <li>
                        <a href="/my-profile">My Profile</a>
                    </li>
                    <li>
                        <a href="/winning-bids">Winning bids</a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="/contact">Contact</a>
            </li>
            <li>
                <a href="/sign-up">Sign up</a>
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
                    </ul>
                    <ul className="cart-button-area">
                        <li>
                            <a href="#0" className="cart-button"><i className="flaticon-shopping-basket"></i><span className="amount">08</span></a>
                        </li>                        
                        <li>
                            <a href="/sign-in" className="user-button"><i className="flaticon-user"></i></a>
                        </li>                        
                    </ul>
                </div>
            </div>
        </div>
        <div className="header-bottom">
            <div className="container">
                <div className="header-wrapper">
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