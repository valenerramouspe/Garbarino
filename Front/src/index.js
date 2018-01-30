var React = require('react')
var ReactDOM = require('react-dom');
import Main from './Containers/main.jsx';
import ProductGrid from './Components/productgrid.jsx';
import Grid from './Containers/grid.jsx';
import Single from './Components/single.jsx';
import Brand from './Components/brand.jsx'
import {Router, Route, hashHistory, IndexRoute, Link} from 'react-router'

ReactDOM.render((
	<Router history={hashHistory}>
    	<Route path="/" component={Main}>
    		<IndexRoute component={Grid}/>
    		<Route path="/single/:id" component={Single} />
    		<Route path="/brand/:brand" component={Brand} />
    	</Route>
  	</Router>
	), document.getElementById('app'));