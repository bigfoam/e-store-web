import React from "react";
import { Input, ButtonInput } from 'react-bootstrap';
import { Link } from "react-router";

export default class Login extends React.Component {

    render() {
        return (
            <div className="container">
                <form>
                    <Input type="text" placeholder="手机号"/>
                    <Input type="password" placeholder="密码"/>
                    <ButtonInput type="submit" value="登陆"/>
                </form>
                <Link to="/register">新用户注册</Link>
            </div>
        );
    }
}