import React, { Component } from "react";

class AddDog extends Component {
	constructor(props) {
		super();
		this.state = {
			newDog: {},
    };
    
		this.name = React.createRef();
		this.breed = React.createRef();
		this.image = React.createRef();
	}

	handleSubmit(e) {
		if (this.name.current.value === "") {
			alert("Title is required");
		} else if (this.image.current.value === "") {
			alert("Image link is required");
		} else if (this.breed.current.value === "") {
			alert("Breed is required");
		} else {
			this.setState(
				{
					newDog: {
						name: this.name.current.value,
						breed: this.breed.current.value,
						image: this.image.current.value,
					},
				},
				function () {
					this.props.addDog(this.state.newDog);
				}
			);
		}
		e.preventDefault();
	}

	render() {
		return (
			<div>
				<h3 id="addDog">Add Dog</h3>
				<form onSubmit={this.handleSubmit.bind(this)}>
					<div>
						<label>Name</label>
						<br />
						<input id="dogName" type="text" ref={this.name} />
					</div>
					<div>
						<label>Image</label>
						<br />
						<input id="imageURL" type="text" ref={this.image} />
					</div>
					<div>
						<label>Breed</label>
						<br />
						<input id="dogBreed" type="text" ref={this.breed} />
					</div>
					<br />
					<input id="submitButton" type="submit" value="Submit" />
					<br />
				</form>
			</div>
		);
	}
}

export default AddDog;
