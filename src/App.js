import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavLink from './components/NavLink';


class App extends Component {

render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">你好,ReactRouter!</h1>
        </header>
        
         <div className='menu'>
         <p><NavLink to="/" onlyActiveOnIndex={true} >首页</NavLink></p>
         <p><NavLink to="/about" >About</NavLink></p>
         <p><NavLink to="/list">List</NavLink></p>
        
         </div>
         
         
        {this.props.children}
        
      </div>
    );
  }
}

export default App;
