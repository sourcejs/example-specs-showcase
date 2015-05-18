var React = require('sourcejs-react/node_modules/react/addons');
module.exports = React.createClass({
    render: function () {
        return (
            <a href="#777" className="btn btn-primary">{this.props.children}</a>
        );
    }
});