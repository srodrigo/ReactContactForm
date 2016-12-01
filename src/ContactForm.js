const React = require('react')

export const ContactForm = React.createClass({
  propTypes: {
    contact: React.PropTypes.object,
    handleSubmit: React.PropTypes.func
  },

  handleSubmitClick (e) {
    e.preventDefault()
    this.props.handleSubmit({name:"", email: this.state.email, description:""})
  },

  getInitialState: function () {
    return {name: "", email: "", description: ""}
  },

  render: function () {
    return React.createElement('form', {},
      React.createElement('input', {type: 'text', placeholder: 'Name', value: this.state.name, onChange: this.saveTo.bind(this, 'name')}),
      React.createElement('input', {type: 'text', placeholder: 'E-mail', value: this.state.email, onChange: (e) => this.saveTo('email', e)}),
      React.createElement('textarea', {type: 'text', placeholder: 'Description', value: this.state.description, onChange: this.saveTo.bind(this, 'description')}),
      React.createElement('button', {type: 'submit', onClick: this.props.handleSubmit}, "Submit")
    )
  },

  saveTo: function (field, e) {
    this.setState({[field]: e.target.value})
  }
})