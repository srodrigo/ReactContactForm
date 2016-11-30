const React = require('react')



export const ContactItem = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    email: React.PropTypes.string.isRequired,
  },

  render: function () {
    return (
      React.createElement('li', {className: 'contact'},
        React.createElement('h2', {className: 'contact-name'}, this.props.name),
        React.createElement('a', {href: 'mailto:' + this.props.email}, this.props.email)
      )
    )
  }
})

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