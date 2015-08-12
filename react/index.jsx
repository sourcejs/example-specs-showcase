var React = require('sourcejs-react/node_modules/react/addons');
var Button = require('./templates/default.jsx');
var ButtonGroup = require('./templates/group.jsx');
module.exports = React.createClass({
    render: function () {
        return (
            <div>
                <link href="css/react.css" rel="stylesheet"/>

                <div className="source_info">
                    <p>This spec is rendered out of <code>index.jsx</code> file using <a href="http://github.com/szarouski/sourcejs-react">sourcejs-react</a> plugin.
                    </p>
                    <p>Wrapper view with linked Boostrap CSS styles is taken from <code>doc.ejs</code> <a
                        href="https://github.com/sourcejs/Source/blob/master/core/views/doc.ejs">file</a>, which is
                        configured in Spec's <code>info.json</code>.
                    </p>
                    <p>
                        View this Spec <a href="https://github.com/sourcejs/example-specs-showcase/blob/master/react/index.jsx"> source code </a>.
                    </p>
                </div>
                <section className="source_section">
                    <h2>Basic button</h2>

                    <p>Button description.</p>
                    <div className="source_example">
                        <Button>Button</Button>
                    </div>
                </section>
                <section className="source_section">
                    <h2>Button group</h2>

                    <p>Button group description.</p>
                    <code className="src-html source_visible"></code>

                    <div className="source_example">
                        <ButtonGroup data={['Left', 'Middle', 'Right']} />
                    </div>
                </section>
                <section className="source_section">
                    <h2>Custom button</h2>

                    <p>Style for this button are from linked Spec CSS file <code>css/react.css</code>.</p>
                    <code className="src-html source_visible"></code>

                    <div className="source_example"><a href="#777" className="react-btn">React Button</a></div>
                </section>
            </div>
        );
    }
});