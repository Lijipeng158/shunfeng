import React, { Component } from 'react';
import {HashRouter as Router,Route,NavLink,Switch,Redirect} from "react-router-dom";
import Home from "./components/home/home";
import Classify from "./components/classify/classify";
import Discover from "./components/discover/discover";
import Shopcar from "./components/shopcar/shopcar";
import My from "./components/my/my";
import "./common/css/App.scss"

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
              <Route path="/home" exact component={Home}/>
              <Route path="/classify" component={Classify}/>
              <Route path="/discover" component={Discover}/>
              <Route path="/shopcar" component={Shopcar}/>
              <Route path="/my" component={My}/>
              <Redirect path="/" to="/home"/>
          </Switch>
          <div className="footer">
            <div><NavLink to="/home">首页</NavLink></div>
            <div><NavLink to="/classify">分类</NavLink></div>
            <div><NavLink to="/discover">发现</NavLink></div>
            <div><NavLink to="/shopcar">购物车</NavLink></div>
            <div><NavLink to="/my">我的</NavLink></div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
