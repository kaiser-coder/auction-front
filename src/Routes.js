import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './components/Header/index'
import Footer from './components/Footer'
import Banner from './components/Banner'

import HomePage from './pages/HomePage'

export default function Routes() {
   return (
      <BrowserRouter>
         <Header/>
         <Banner/>

         <Switch>
            <Route exact path="/" component={HomePage} />
         </Switch>
         
         <Footer/>
      </BrowserRouter>
   )
}

