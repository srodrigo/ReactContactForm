import React from 'react'
import ReactDOM from 'react-dom'
import ContactForm from './ContactFormController'
import './index.css'

const contacts = [
  {key: 1, name: "James Nelson", email: "james@jamesknelson.com", description: 'Big guy'},
  {key: 2, name: "Bob"},
  {key: 3, name: "Alice", email: "alice.in.wonderland@whatever.com", description: 'Nice person'}
]

ReactDOM.render(
  ContactForm(contacts),
  document.getElementById('root')
)
