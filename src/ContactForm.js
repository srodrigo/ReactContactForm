import React from 'react'
import {ContactItem, ContactForm } from './Form'

module.exports = function (contacts) {
  const contactsElements =
    contacts
      .filter(function (contact) {
        return contact.email
      })
      .map(function (contact) {
        return React.createElement(ContactItem, contact)
      })

  const newContactDefaultValues = {name: "", email: "", description: ""}

  return React.createElement('div', {},
    React.createElement('h1', {}, 'Contacts'),
    React.createElement('ul', {}, contactsElements),
    React.createElement(ContactForm, {contact: newContactDefaultValues})
  )
}
