import React from 'react';
import Gravatar from 'react-gravatar';

var config = require('./config.json');

export class ChatMessage extends React.Component{

    render(){
        return(


                <li className="media">
                    <div className="media-body">
                        <div className="media">
                            <a id="avatar" className="pull-left" href="#">
                                    <Gravatar email={config.email} />
                            </a>
                            <div className="media-body">
                                Donec sit amet ligula enim. Duis vel condimentum massa.
                                Donec sit amet ligula enim. Duis vel condimentum massa.Donec sit amet ligula
                                enim.
                                Duis vel condimentum massa.
                                Donec sit amet ligula enim. Duis vel condimentum massa.
                                <br/>
                                <small className="text-muted">Alex Deo | 23rd June at 5:00pm</small>
                                <hr/>
                            </div>
                        </div>
                    </div>
                </li>


        )
    }
}