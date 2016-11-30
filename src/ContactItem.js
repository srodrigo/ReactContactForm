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
