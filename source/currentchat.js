import React from 'react';

import {ChatMessage} from './chatmessage.js';

export class CurrentChat extends React.Component{
    render() {
        return (
            <div>
                <div className="row current-chat-area">
                    <div className="col-md-12">
                        <ul className="media-list">
                            <ChatMessage/>
                            <ChatMessage/>
                            <ChatMessage/>
                            <ChatMessage/>
                            <ChatMessage/>
                            <ChatMessage/>
                        </ul>
                    </div>
                </div>



            </div>

        );
    }
}