import React from 'react'
import { ContactFormController}  from './ContactFormController'
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
import { mount } from 'enzyme'
chai.use(chaiEnzyme())
const expect = chai.expect

describe('ContactFormController', () => {
  it('renders ContactForm', () => {
    const contacts = [
      {key: 1, name: "James Nelson", email: "james@jamesknelson.com", description: 'Big guy'},
      {key: 2, name: "Bob"},
      {key: 3, name: "Alice", email: "alice.in.wonderland@whatever.com", description: 'Nice person'}
    ]
    const contactFormController = mount(React.createElement(ContactFormController, {contacts}))

    expect(contactFormController).to.contain.text("james@jamesknelson.com")
    expect(contactFormController).to.contain.text("alice.in.wonderland@whatever.com")
  });

  it('does not show emails "@example.com"', () => {
    const contacts = [
      {key: 1, name: "James Nelson", email: "james@a.com"},
      {key: 2, name: "Bob", email: "bob@example.com"}
    ]
    const contactFormController = mount(React.createElement(ContactFormController, {contacts}))

    expect(contactFormController).to.contain.text("james@a.com")
    expect(contactFormController).to.not.contain.text("bob@example.com")
  });


  it('submitting a new contact, adds it to the list ', () => {
    const contacts = [
      {key: 1, name: "James Nelson", email: "james@a.com"}
    ]
    const contactFormController = mount(React.createElement(ContactFormController, {contacts}))

    fillForm(contactFormController, "joan", "john@a.com")
    submitForm(contactFormController)

    expect(contactFormController).to.contain.text("James Nelson")
    expect(contactFormController).to.contain.text("joan")
    expect(contactFormController).to.contain.text("james@a.com")
    expect(contactFormController).to.contain.text("john@a.com")

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
});