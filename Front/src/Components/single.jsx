import React from "react"

export default class Single extends React.Component{
	constructor(props){
		super(props);
		this.state = {
      	"isFetching":true,
      	"products":null      
    	}
		this.requestOne=this.requestOne.bind(this)
	}
	requestOne(id){
    	var url = "http:localhost:8080/products";
    	fetch(url).then((response)=>{
      		response.json().then((data)=>{
        		const single = data.filter(function (i){return i.id == id});
        		this.setState({
      			"isFetching": false,
      			"products": single
      			})
    		})
  		})
	}
	componentWillMount(){
	this.requestOne(this.props.params.id)
	}
	render(){	
		if(this.state.isFetching===true){
			return(
				<img src="http://www.amaniocular.com/Content/images/loader.gif"></img>
			)
		}
		else{
			return(
				<div>
					<div className="single">
			    		<p className="singleTitle">{this.state.products[0].name}</p>
			    		<p>{this.state.products[0].brand}</p>
              			<p>Precio: $ {this.state.products[0].list_price}</p>              	
					</div>
				</div>
			)
		}
	}
}
