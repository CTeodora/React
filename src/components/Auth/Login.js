import React, {Component} from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input,Col } from 'reactstrap';
import '../../css/index.css'
import Background from '../../images/img.jpg';
import {Link} from "react-router-dom";

export default class Login extends Component {
    state = {
        email: '',
        password: ''
    };

    _onChange = (e) => {
        const {name, value} = e.target;

        this.setState({
            [name]: value
        });
    };

    _login = async () => {
        const {email, password} = this.state;

        const response = await axios.post(process.env.REACT_APP_API_URL + 'login', {
            email, password
        });

        if (response && response.data && response.data.data) {
            sessionStorage.setItem('token', response.data.data.jwt);
            this.props.history.push('/users');
        } else {
            console.log("Username password do not match");
            alert("username password do not match");
        }
    };

    render() {
        const {email, password} = this.state;
      
        const background = {
            background:"url("+ Background +")",
            width:'100%', 
            height:'100%', 
            backgroundSize:'cover',
            paddingTop:'30px'
        }

        return (
        <div style={background}>
        <p style={{fontSize:'35px'}}>Login</p>          
        <Col sm="12" md={{ size: 8, offset: 2 }}>
            <Col sm={{ size: 4, offset: 4 }}>           
            <Form>
                <FormGroup>
                    <Label for="Email">Email</Label>
                    <Input type={'email'} name={'email'} id="Email" value={email} onChange={this._onChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="Password">Password</Label>
                    <Input type={'password'} name={'password'} id="Password" value={password} onChange={this._onChange}/>
                </FormGroup>               
                <Button onClick={this._login} style={{marginTop:'15px'}} size='sm'>Login</Button>         
            </Form>                                   
                              
                     
            <p style={{marginTop:'50px'}}>Not registered yet?</p>
            <Col sm={{ size: 4, offset: 4 }}>
            <p><Link to={'/register'}>Join us</Link></p>
            </Col>
            </Col>
            <div style={{paddingTop:'50px'}}>
            <p style={{fontSize:'13px'}}><Link to={'/reset'}>Forgot password?</Link></p>
            </div>
        </Col>
        
        </div>
        );
    }
}
