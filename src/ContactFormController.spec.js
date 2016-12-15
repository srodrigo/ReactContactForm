import React from 'react'
import { ContactFormController}  from './ContactFormController'
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
import { mount } from 'enzyme'
chai.use(chaiEnzyme())
const expect = chai.expect
var nock = require('nock');
var sinon = require('sinon');
var request = require('request');

describe('ContactFormController', () => {

	var httpClient;

	beforeEach(function() {
		httpClient = function() {};
		httpClient.post =	sinon.spy();
	});

	it('renders ContactForm', () => {
		const contacts = [
			{key: 1, name: "James Nelson", email: "james@jamesknelson.com", description: 'Big guy'},
			{key: 2, name: "Bob"},
			{key: 3, name: "Alice", email: "alice.in.wonderland@whatever.com", description: 'Nice person'}
		]
		const contactFormController = mount(React.createElement(ContactFormController, {contacts: contacts, httpClient: httpClient}))

		expect(contactFormController).to.contain.text("james@jamesknelson.com")
		expect(contactFormController).to.contain.text("alice.in.wonderland@whatever.com")
	});

	it('does not show emails "@example.com"', () => {
		const contacts = [
			{key: 1, name: "James Nelson", email: "james@a.com"},
			{key: 2, name: "Bob", email: "bob@example.com"}
		]
		const contactFormController = mount(React.createElement(ContactFormController, {contacts: contacts, httpClient: httpClient}))

		expect(contactFormController).to.contain.text("james@a.com")
		expect(contactFormController).to.not.contain.text("bob@example.com")
	});

	it('send the contact to the backend when submitting a new contact', () => {
		const contacts = [
			{key: 1, name: "James Nelson", email: "james@a.com"}
		]
		const contactFormController = mount(React.createElement(ContactFormController, {contacts: contacts, httpClient: httpClient}))

		fillForm(contactFormController, "joan", "john@a.com")
		submitForm(contactFormController)

		const contact = {description: "", email: "john@a.com", name: "joan" }
		var expected = {
			url : 'https://private-1bd9e-contacts40.apiary-mock.com/contacts/123',
			form: contact
		};
		expect(httpClient.post.calledOnce).to.be.true;
		sinon.assert.calledWith(httpClient.post, expected);
	});

	it('adds the contact to the list when submitting a new contact response is successful', (done) => {
		const contact = {name: "James Nelson", email: "james@a.com"}
		nock('https://private-1bd9e-contacts40.apiary-mock.com')
			.post('/contacts/123', contact)
			.reply(200);

		const contactFormController = mount(React.createElement(ContactFormController, {contacts: [], httpClient: request}))

		fillForm(contactFormController, "James Nelson", "james@a.com")
		submitForm(contactFormController)

		setTimeout(() => {
			try {
				expect(contactFormController).to.contain.text("james@a.com");
			} catch (err) {
				fail(err);
			}
			done();
		}, 10);

	});

	function fillForm(formController, name, email) {
		formController.find('input').at(0)
			.simulate('change', {target: {value: name}})

		formController.find('input').at(1)
			.simulate('change', {target: {value: email}})
	}

	function submitForm(formController) {
		formController.find('button').simulate('click')
	}

});
