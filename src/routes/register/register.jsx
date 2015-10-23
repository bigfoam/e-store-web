import React from "react";
import { Input, ButtonInput } from 'react-bootstrap';
import { Link } from "react-router";

export default class Register extends React.Component {

    render() {
        return (
            <div className="container">
                <form>
                    <Input type="text" label="手机号码" placeholder="请输入你的手机号码"/>
                    <Input type="text" label="手机验证码" placeholder="请输入手机验证码"/>
                    <ButtonInput value="获取验证码"/>
                    <Input type="password" label="密码" placeholder="密码长度6-20字符"/>
                    <ButtonInput type="submit" value="同意协议并注册"/>
                </form>
                <Link to="/login">直接登录</Link>
            </div>
        );
    }
}