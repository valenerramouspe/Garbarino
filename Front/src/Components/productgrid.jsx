import React from 'react'
import {Link} from 'react-router';

 export default class ProductGrid extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      "isFetching":true,
      "products":null      
    }
  }

  componentWillMount() {
    this.props.requestProducts();
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
    "isFetching":this.props.state.isFetching,
    "products":this.props.state.products
    })
  }
  render(){
    if(this.state.isFetching===true){
      return (
        <img src="http://www.amaniocular.com/Content/images/loader.gif" />
      )
    }
    else{
      const cantidad=this.state.products.length===1?"Producto":"Productos"
      return (
        <div>
          <div className="captions">
            <p className="titulo">{this.state.products.length} {cantidad}</p>
          </div>
          {this.state.products.map((prod) =>
            <Link key={prod.id} to={`/single/${prod.id}`}>
              <div className="producto">
                <div className="vista">
                </div>
                <div className="bottomProducto">
                  <p className="title">{prod.name}</p>
                  <p className="clase">{prod.brand}</p>
                  <p className="clase">$ {prod.list_price}</p>
                </div>
              </div>
            </Link>
          )}
        </div>
      )
    }
  }
}