import React, { Component } from 'react';
import './Form.css';

const emailRule = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const validateEmail = value => emailRule.test(value)

class Form extends Component {
    state = {
        name: '',
        email: '',
        error: {
            email: false
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })

        if(event.target.name === 'email') {
            const result = validateEmail(event.target.value);
            this.setState({
                error: {
                    email: !result
                }
            })
        }

    }

    handleSubmit = (event) => {
        event.preventDefault();
        //call api
        console.log(JSON.stringify(this.state))
    }

    render() {
        return <form onSubmit={this.handleSubmit}>
            <label>
                Name: 
                <input 
                    type='text' 
                    name='name' 
                    onChange={this.handleChange}
                    value={this.state.name} />
            </label>
            <label>
                Email: 
                <input 
                    type='text' 
                    name='email' 
                    onChange={this.handleChange}
                    value={this.state.email} />
            </label>
            {this.state.error.email &&
                 <i style={{color: 'red'}}>Please input a valid email.</i>
             }
            <input 
                className='submit' 
                type='submit' 
                value='Submit'
                disabled={!this.state.name || !this.state.email || this.state.error.email} />
        </form>
    }
}

export default Form;