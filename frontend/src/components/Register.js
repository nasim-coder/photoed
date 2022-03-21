import React, { Component } from 'react';

class Register extends Component() {
    render() {
        return (
            <div>
                <form action=''>
                    <input type="text" name='name' placeholder="enter name" onChange={function (e) { }} />
                    <input type="email" name="email" id="" placeholder="entr email" />
                    <input type="password" name="password" id="" placeholder="enter password" />
                    <input type="button" value="Register" />
                </form>
            </div>
        );
    }
}
export default Register;