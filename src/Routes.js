import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './components/Header/index'
import Footer from './components/Footer'
import Banner from './components/Banner'

import HomePage from './pages/HomePage'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import WinningBid from './pages/WinningBid'
import Contact from './pages/Contact'

export default function Routes() {
   return (
      <BrowserRouter>
         <Header/>
         <Banner/>

         <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/sign-in" component={Signin} />
            <Route exact path="/sign-up" component={Signup} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/my-profile" component={Profile} />
            <Route exact path="/winning-bids" component={WinningBid} />
            <Route exact path="/contact" component={Contact} />
         </Switch>
         
         <Footer/>
      </BrowserRouter>
   )
}

