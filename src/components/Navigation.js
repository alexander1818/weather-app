import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import home from '../pages/Home'
import AddCity from '../pages/AddCity'
import Contacts from '../pages/Contacts'
import '../components/Weather.css'
import './Navigation.css'

const Navigation = (props) => {

  return (
    <Router>
      <div className="header">

        <span><Link to="../pages/Home">Home</Link></span>
        <span><Link to="../pages/AddCity">AddCity</Link></span>
        <span><Link to="../pages/Contacts">Contacts</Link></span>

        <Switch>
          <Route exact path="/pages/Contacts" component={Contacts}></Route>
          {/* при переходе на AddCity ругается на map */}
          <Route exact path="/pages/AddCity" component= {AddCity}></Route>  
          <Route exact path="/pages/Home" component={home}></Route>
        </Switch>

      </div>
    </Router>
  )
}
export default Navigation;
