import React, {Component} from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class Reset extends Component {

    state = {
        email: ''
    };

    _onChange = (e) => {
        const {name, value} = e.target;

        this.setState({
            [name]: value
        });
    };

    _forgotPassword = async () => {
        const {email} = this.state;

        await axios.post(process.env.REACT_APP_API_URL + 'forgotPassword', {
            email
        });

        this.props.history.push('/login');
    };

    render() {
        const {email} = this.state;

        return (
            <Form>
                <FormGroup>
                    <Label for="Email">Email</Label>
                    <Input type={'email'} name={'email'} id="Email" value={email} onChange={this._onChange} />
                </FormGroup>
                <Button onClick={this._forgotPassword}>Submit</Button>
            </Form>
        );
    }
}