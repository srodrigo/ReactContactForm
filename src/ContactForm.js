const React = require('react')

const ContactDiv = React.createClass({
  propTypes: {
    handleSubmit: React.PropTypes.func.isRequired
  },
  render: function () {
    return React.createElement('div', {},
      React.createElement('input', {type: 'text', placeholder: 'Name'}),
      React.createElement('input', {type: 'text', placeholder: 'E-mail'}),
      React.createElement('textarea', {type: 'text', placeholder: 'Description'}),
      React.createElement('button', {type: 'submit', onClick: this.props.handleSubmit}, "Submit")
    )
  }
})

export const ContactForm = React.createClass({
  propTypes: {
    contact: React.PropTypes.object.isRequired
  },

  handleSubmitFunc: function (e) {
    e.preventDefault()
    console.log('submit!!!')
  },

  render: function () {
    return React.createElement('form', {},
      React.createElement(ContactDiv, {handleSubmit: this.handleSubmitFunc})
    )
  }
})