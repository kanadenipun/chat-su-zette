var React = require('react');
var ReactDOM = require('react-dom');

var Hello = React.createClass({
    render: function () {
        let hello="hello";
        console.log(hello);
        hello="world";
        console.log(hello);
        return <div>Hello {this.props.name}</div>;
    }
});

ReactDOM.render(
    <Hello name="World" />,
    document.getElementById('react-container')
);
