import React from 'react'
import { ContactItem } from './ContactItem'
import { ContactForm } from './ContactForm'

export const ContactFormController = React.createClass({

  propTypes: {
    contacts: React.PropTypes.array.isRequired,
    httpClient: React.PropTypes.func.isRequired
  },

  handleSubmit: saveContact,

  getInitialState () {
    return {
      contacts: this.props.contacts
    }
  },

  render: function() {
    return React.createElement('div', {},
      React.createElement('h1', {}, 'Contacts'),
      React.createElement('ul', {}, contactsElements(this.state.contacts)),
      React.createElement(ContactForm, {contact: newContactDefaultValues, handleSubmit: saveContact.bind(this)})
    )
  },
})

const contactsElements = function(contacts) {
  return contacts
    .filter(function (contact) {
      return contact.email
    })
    .filter(function removeEmailsFromDomainExampleCom(contact) {
      return !contact.email.includes("@example.com")
    })
    .map(function (contact) {
      return React.createElement(ContactItem, contact)
    })
}

const newContactDefaultValues = {name: "", email: "", description: ""}

const saveContact = function(formData) {

	var httpClient = this.props.httpClient;
	var $this = this;

	function makeRequest(urlData) {
		httpClient.post(
			{ 
				url: urlData,
				form: formData 
			},
			function (error, response, body) {
				if (!error && response.statusCode == 200) {
					const contacts = $this.state.contacts;
          formData.key = contacts.length + 1;
					contacts.push(formData)
					$this.setState({contacts})
				}
			});
	}

	const url = 'https://private-1bd9e-contacts40.apiary-mock.com/contacts/123';
	makeRequest(url)

}
