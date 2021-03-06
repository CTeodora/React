import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {Button, Navbar, Nav, NavItem, } from 'reactstrap';


export default class Header extends Component {
    state = {
        redirect: false
    };

    _logout = () => {
        sessionStorage.removeItem('token');

        this.setState({
            redirect: true
        });
    };

 

    render() {
        if (this.state.redirect) {
            return <Redirect to={'/login'}/>;
        }

        return (
            <div>
            <Navbar color="light" >
            <Nav className="ml-auto">
              <NavItem>
               <Button outline color="secondary" size="sm" onClick={this._logout}>Logout</Button>
              </NavItem>          
            </Nav>
            </Navbar>
            </div>
        );
    }
}