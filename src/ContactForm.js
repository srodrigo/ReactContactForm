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
  },

  render: function () {
    return React.createElement('form', {},
      React.createElement(ContactDiv, {handleSubmit: this.handleSubmitFunc})
    )
  }
})