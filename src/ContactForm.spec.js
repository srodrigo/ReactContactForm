import {ContactForm } from './ContactForm'
import React from 'react'
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
import { mount } from 'enzyme'
import sinon from 'sinon'
chai.use(chaiEnzyme())
const expect = chai.expect

describe('ContactForm', () => {
  it('adds a contact', () => {
    const formContact = {name: '', email: ''}
    const saveContact = sinon.spy()
    const contactForm = mount(React.createElement(ContactForm, {contact: formContact, handleSubmit: saveContact}))

    contactForm.find('button').simulate('click')

    expect(saveContact.calledOnce).to.equal(true)
  });
});
