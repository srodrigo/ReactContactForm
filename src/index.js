import React from 'react'
import ReactDOM from 'react-dom'
import {ContactFormController} from './ContactFormController'
const request = require('request')
const contacts = [
  {key: 1, name: "James Nelson", email: "james@jamesknelson.com", description: 'Big guy'},
  {key: 2, name: "Bob"},
  {key: 3, name: "Alice", email: "alice.in.wonderland@whatever.com", description: 'Nice person'}
]

ReactDOM.render(
  React.createElement(ContactFormController, {
    contacts: contacts, 
    httpClient: request
  }),
  document.getElementById('root')
)
