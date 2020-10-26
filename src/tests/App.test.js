import React from "react";
import { expect } from "chai";
import { mount, shallow } from "enzyme";
import App from "../App";

describe("Test suit for App", function () {
	it("includes one element in App class", function () {
		const wrapper = shallow(<App />);
		expect(wrapper.find(".App")).length(1);
	});
});

describe("Test suit for DogsList", function () {
	it("Dog List contains two dogs", function () {
		const wrapper = mount(<App />);
		expect(wrapper.find("Dogs").find("DogItem")).length(2);
	});

	it("removes dog from list when deleted", function () {
		const wrapper = mount(<App />);
		const deleteLink = wrapper.find("a").first();

		deleteLink.simulate("click");

		expect(wrapper.find("DogsList").find("Dogs").find("DogItem")).length(1);
	});
});

describe("Test suit for AddDog", function () {
	it("successfully adds a dog to list when form submitted", function () {
		const wrapper = mount(<App />);
		const dogsList = wrapper.find("DogsList");
		const initialState = dogsList.state().dogs;
		const addDog = wrapper.find("AddDog");
		const image =
			"https://s-media-cache-ak0.pinimg.com/originals/51/ae/30/51ae30b78696b33a64661fa3ac205b3b.jpg";

		addDog.find("#dogName").getDOMNode(0).value = "rechie";
		addDog.find("#imageURL").getDOMNode(0).value = image;
		addDog.find("#dogBreed").getDOMNode(0).value = "Husky";

		const form = addDog.find("form");
		form.simulate("submit");

		expect(wrapper.find("Dogs").find("DogItem")).length(3);
		expect(dogsList.state().dogs[2].name === "rechie");
		expect(dogsList.state().dogs[2].breed === "Husky");
		expect(dogsList.state().dogs[2].image === image);
		expect(dogsList.state().dogs).to.have.members(initialState);
	});
});
