import React, {Component} from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input,Col } from 'reactstrap';
import Background from '../../images/img.jpg';
import '../../css/index.css'

export default class Register extends Component {
    state = {
        name: '',
        email: '',
        password: ''
    };

    _onChange = (e) => {
        const {name, value} = e.target;

        this.setState({
            [name]: value
        });
    };

    _register = async () => {
        const {name, email, password} = this.state;

        await axios.post(process.env.REACT_APP_API_URL + 'register', {
            name,email, password
        });

        this.props.history.push('/login');
    };

    render() {
        const {name, email, password} = this.state;
        const background = {
            background:"url("+ Background +")",
            width:'100%', 
            height:'100%', 
            backgroundSize:'cover',
            paddingTop:'30px'
        }


        return (
        <div style={background}>
        <p style={{fontSize:'30px'}}>Register</p>          
        <Col sm="12" md={{ size: 8, offset: 2 }}>
            <Col sm={{ size: 4, offset: 4 }}>
            <Form>
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input type="text" name="name" id="name" placeholder="name" onChange={this._onChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" name="email" id="email" placeholder="email" onChange={this._onChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input type="password" name="password" id="password" placeholder="password" onChange={this._onChange}/>
                </FormGroup>
                               
                <Button  onClick={this._register} style={{marginTop:'25px'}} color='primary' size='sm'>Submit</Button>              
            </Form>
            </Col>
        </Col>
        </div>
        );
    }
}
