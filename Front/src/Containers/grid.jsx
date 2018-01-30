  import React from 'react';
  import ProductGrid from '../Components/productgrid.jsx'

  export default class Grid extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        "isFetching":true,
        "products":null
      }
      this.requestProducts=this.requestProducts.bind(this)
    }

    componentWillMount(){
      this.requestProducts()
    }

    requestProducts(){
      var url = "http:localhost:8080/products";
      fetch(url)
        .then((response)=>{ response.json()
          .then((data)=>{
            this.setState({
            "isFetching": false,
            "products": data
            })
          })
        })
    }
    render(){
      return(
        <div>
          <ProductGrid 
          requestProducts={this.requestProducts}
          state={this.state}
          />
        </div>
      )
    }
  } 