import React from "react";
import {Link} from "react-router"

export default class Brand extends React.Component{
	constructor(props){
		super(props)
		this.state = {
      	"isFetching":true,
      	"products":null      
    	}
    	this.requestBrand=this.requestBrand.bind(this)
	}
	requestBrand(brand){
    	var url = "http:localhost:8080/products";
    	fetch(url)
        .then((response)=>{ response.json()
    		  .then((data)=>{
        		const list = data.filter(function (i){return i.brand == brand});
        		this.setState({
      			"isFetching": false,
      			"products": list
      			})
    		  })
  		  })
	 }
	componentWillMount(){
		this.requestBrand(this.props.params.brand)
	}

  componentWillReceiveProps(nextprops){
    this.requestBrand(this.props.params.brand)
  }

	render(){
    if(this.state.isFetching===true){
      return (
        <p>Loading...</p>
      )
    }
    else{
      const cantidad=this.state.products.length===1?"Producto":"Productos"
      return (
        <div>
          <div className="captions">
            <p className="titulo">{this.props.params.brand}</p>
            <p className="quantity">{this.state.products.length} {cantidad}</p>
          </div>
          {this.state.products.map((prod) =>
          	<Link key={prod.id} to={`/single/${prod.id}`}>
              <div key={prod.id} className="producto">
                <p className="title bottomProducto">{prod.name}</p>
                <p className="title bottomProducto">$ {prod.list_price}</p>
              </div>
            </Link>
          )}
        </div>
      )
    }
  }
}