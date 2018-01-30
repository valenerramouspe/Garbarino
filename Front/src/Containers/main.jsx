import React from 'react';
import {Link} from 'react-router';
import ProductGrid from '../Components/productgrid.jsx';
import Single from '../Components/single.jsx';
import Sidebar from '../Components/sidebar.jsx'

export default class Main extends React.Component{
  constructor(props) {
    super(props);
    this.setState({
      "isFetching":true,
      "products":null
    })
  }
  render(){
    return (
      <div>
        <div id="sidebar">
          <Sidebar />
        </div>
      
        <div id="pagina">
          <div id="nav">
            <Link style={{ textDecoration: 'none' }}to="/">
              <div id="home">
                <p id="catalogo">Productos</p>
              </div>
            </Link>
          </div>
          <div id="content">
            {this.props.children} 
          </div>
        </div>
      </div>
    )
  }
}