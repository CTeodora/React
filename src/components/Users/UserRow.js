import React, {Component} from 'react';
import {Row, Col, Button} from 'reactstrap';
import PropTypes from 'prop-types';
import '../../css/Users.css';

export default class UserRow extends Component {
    static propTypes = {
        user: PropTypes.object.isRequired,
        edit: PropTypes.func.isRequired,
        remove: PropTypes.func.isRequired
    };

    _showRole = role => {
        switch (role) {
            case 1:
                return 'Admin';
            case 2:
                return 'User';
            default:
                return 'Unknown'
        }
    };

    _edit = (user) => {
        const {edit} = this.props;

        edit && edit(user);
    };

    _remove = (user) => {
        const {remove} = this.props;

        remove && remove(user);
    };

    render() {
        const {user} = this.props;

        return (
            <Row>
                <Col xs={1}>{user.id}</Col>
                <Col xs={3}>{user.name}</Col>
                <Col xs={4}>{user.email}</Col>
                <Col xs={2}>{this._showRole(user.role_id)}</Col>
                <Col xs={2} >
                    <Button className="options" color="info" size="sm" onClick={() => this._edit(user)}>Edit</Button>
                    <Button className="options" color="danger" size="sm" onClick={() => this._remove(user)}>Delete</Button>
                </Col>
            </Row>
        );
    }
}