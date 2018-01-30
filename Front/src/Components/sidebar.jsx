import React from 'react';
import {Link} from 'react-router';

export default class Sidebar extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		return(
			<div>
				<Link to="/brand/LG" style={{ textDecoration: 'none' }}><p className="navigation">LG</p></Link>
				<Link to="/brand/SONY" style={{ textDecoration: 'none' }}><p className="navigation">Sony</p></Link>
				<Link to="/brand/Microsoft" style={{ textDecoration: 'none' }}><p className="navigation">Microsoft</p></Link>
			</div>
		)
	}
}