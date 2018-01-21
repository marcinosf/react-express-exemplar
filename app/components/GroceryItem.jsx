var React = require('react');
var createReactClass = require('create-react-class');

module.exports = createReactClass({
	render:function() {
		return (
			<h4 className={this.props.item.purchased ? "strikethrough" : ""}>{this.props.item.name}</h4>
		)
	}
})
