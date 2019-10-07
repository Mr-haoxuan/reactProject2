import React from "react";
import "./style/login.less"
import advImg from "../../../images/login/mianfei.jpg"

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <>
                <div className="login">
                    <div>
                        <a className="a-1" href="http://my.jikexueyuan.com/setting/user/">
                            <img width="57px" height="57px" />
                        </a>
                        <i className="i-1">Hello,</i>
                        <i className="i-2">欢迎成为极客一员</i>
                    </div>
                    <a className="loginBtn" href="">登录</a>
                    <a className="registerBtn" href="http://passport.jikexueyuan.com/sso/reg_phone">注册</a>
                </div>
                <a className="advImg" href="http://mogui.jikexueyuan.com/mg2/?jike_campaign=moguiweb&amp;jike_location=www_index_cf_right_imagelink&amp;jike_content=170308">
                    <img src={advImg} width="240" height="160"/>
                </a>
            </>
                )
            }
}