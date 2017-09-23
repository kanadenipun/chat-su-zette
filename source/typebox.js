import React from 'react';

export class TypeBox extends React.Component{
    render() {
        return (
            <div>
                <div className="row current-chat-footer">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Type your message..."/>
                            <span className="input-group-btn">
                            <button className="btn btn-secondary" type="button">Send</button>
                            </span>
                    </div>
                </div>
            </div>
        )
    }

}

