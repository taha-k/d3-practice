"use strict";

var React = require("react");
var Input = require('../common/textinput.jsx');
var AuthorForm = React.createClass({
	propTypes: {
		author: React.PropTypes.object.isRequired,
		onSave: React.PropTypes.func.isRequired,
		errors: React.PropTypes.object,
		onChange: React.PropTypes.func.isRequired
	},
	render: function() {
		return (
			<form>
				<h1>Manage Author</h1>
				
				<Input
					name="firstName"
					label = "First Name"
					onChange={this.props.onChange}
					value={this.props.author.firstName}
					error={this.props.errors.firstName} />
				<br />

				<Input
					name="lastName"
					label="Last Name"
					onChange={this.props.onChange}
					value={this.props.author.lastName}
					error={this.props.errors.lastName} />
				<br />

				<input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave} />
			</form>
			
		);
	}
});

module.exports = AuthorForm;