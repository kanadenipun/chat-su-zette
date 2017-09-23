import React from 'react';

import {CurrentChat} from './currentchat';
import {SideNav} from './sidenav';
import {TypeBox} from './typebox';

export class MainDiv extends React.Component{
    render() {
        return (
            <div className="main-div">
                <div className="container">
                    <div className="row">

                        <div className="col-4 navarea">
                            <SideNav />
                        </div>

                        <div className="col-8">
                            <CurrentChat />
                            <TypeBox />
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
