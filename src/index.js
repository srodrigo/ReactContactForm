import React from 'react';
import ReactDOM from 'react-dom';
import {ContactItem, ContactForm } from './Form';
import './index.css';

const contacts = [
  {key: 1, name: "James Nelson", email: "james@jamesknelson.com", description: 'Big guy'},
  {key: 2, name: "Bob"},
  {key: 3, name: "Alice", email: "alice.in.wonderland@whatever.com", description: 'Nice person'}
]

var newContact = {name: "", email: "", description: ""}

const contactsElements =
  contacts
    .filter(function (contact) {
      return contact.email
    })
    .map(function (contact) {
      return React.createElement(ContactItem, contact)
    })


const rootElement = React.createElement('div', {},
  React.createElement('h1', {}, 'Contacts'),
  React.createElement('ul', {}, contactsElements),
  React.createElement(ContactForm, {contact: newContact})
)

ReactDOM.render(
  rootElement,
  document.getElementById('root')
);
