import React, { Component } from 'react'
import {browserHistory} from 'react-router'
import NavLink from './NavLink'


class List extends Component{
	go(){
		
		let itemValue=document.getElementById('btn').value;
		console.log(itemValue);
		let path=`/list/${itemValue}`;
		if(path==='/list/item1' || path==='/list/item2'||path==='/list/item3'||path==='/list/item4'){
			browserHistory.push(path);
			itemValue='';
		}else{
			alert('请输入正确的item')
		}
		
	};
	componentDidMount(){
		var oBtn=document.getElementById('btn');
		var _this=this;
		oBtn.addEventListener('keydown',function(ev){
			if(ev.keyCode===13){
				_this.go();
			}
		})
		
	}
	render() {
    return (
    	<div className='list'>
    	  <div>List</div>
    	  <div className='search'>
    	   <input type='text' placeholder='itemValue' id='btn' />
    	    <button id='go' onClick={this.go.bind(this)}>GO</button>
    	  </div>
    	    结果为:{this.props.children}
	    	<p><NavLink to="/list/item1">item1</NavLink></p>
	    	<p><NavLink to="/list/item2">item2</NavLink></p>
	    	<p><NavLink to="/list/item3">item3</NavLink></p>
	    	<p><NavLink to="/list/item4">item4</NavLink></p>
	    	
	    	
    	</div>
    )
  }
}

export default List;