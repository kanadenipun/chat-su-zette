import React from 'react';
import ReactDOM from 'react-dom';

import {NavBar} from './navbar.js';
import {MainDiv} from './maindiv.js';


var ChatSuzette = React.createClass({
    render: function () {
        return(
            <div>
                <NavBar/>
                <MainDiv/>
            </div>
        )
    }
});

ReactDOM.render(
    <ChatSuzette />,
    document.getElementById('react-container')
);

