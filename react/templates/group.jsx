var React = require('sourcejs-react/node_modules/react/addons');
module.exports = React.createClass({
    render: function () {
        var children = this.props.data.map(function (item) {
            return <button className="btn btn-default">{item}</button>;
        });
        return (
            <div className="btn-group">
                {children}
            </div>
        );
    }
});