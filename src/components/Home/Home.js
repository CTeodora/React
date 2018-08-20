import React, {Component} from 'react';
import {Link} from "react-router-dom";

export default class Home extends Component {
    render() {
        return (
            <div>
                <p>Hello, friends!</p>
                <p> <Link to={'/login'}>Login</Link> first.</p>
            </div>
        )
    }
}
