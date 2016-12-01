import React from 'react'
import { ContactItem } from './ContactItem'
import { ContactForm } from './ContactForm'

module.exports = function (contacts) {
  const contactsElements =
    contacts
      .filter(function (contact) {
        return contact.email
      })
      .filter(function removeEmailsFromDomainExampleCom(contact){
        return !contact.email.includes("@example.com")
      })
      .map(function (contact) {
        return React.createElement(ContactItem, contact)
      })

  const newContactDefaultValues = {name: "", email: "", description: ""}

  return React.createElement('div', {},
    React.createElement('h1', {}, 'Contacts'),
    React.createElement('ul', {}, contactsElements),
    React.createElement(ContactForm, {contact: newContactDefaultValues, handleSubmit: saveContact})
  )

  function saveContact (e) {
    e.preventDefault()

    function makeRequest(url) {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', url, true);
      xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
          console.log(xhr.responseText)
        }
      };
      xhr.send()
    }

    const url = 'https://private-1bd9e-contacts40.apiary-mock.com/contacts/123';
    makeRequest(url)
  }
}
