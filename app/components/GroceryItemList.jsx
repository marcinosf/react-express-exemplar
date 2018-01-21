var React = require('react');
var GroceryItem = require('./GroceryItem.jsx');
var createReactClass = require('create-react-class');

module.exports = createReactClass({
	render:function() {
		return (
			<div>
				<h1>Grocery Listify</h1>
				<div>
				{
					this.props.items.map(function(item,index){
						return (
							<GroceryItem item={item} key={"item"+index} />
						) 
					})
				}
				</div>
			</div>	
		)
	}
})
