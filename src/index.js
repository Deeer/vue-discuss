import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Home from './components/Home';
import About from './components/About';
import List from './components/List';
import item from './components/item';

ReactDOM.render((
	<div>
	  
		 <Router history={browserHistory}>
		  <Route path="/" component={App}>
		   <IndexRoute component={Home}/>  
		   <Route path='/about' component={About}></Route>
		   <Route path='/list' component={List}>
		    <Route path="/list/:item" component={item}/>
		   </Route>	   
		  </Route>
		</Router>
	</div>
), document.getElementById('root'));


