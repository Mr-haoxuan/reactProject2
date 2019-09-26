import React from "react";
import ReactDOM from "react-dom";
import TabBar from "./component/tabBar";
import logo from "../../images/title/logo.png"
import "./index.less"
import TabBtns from "./headConfig"

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    Logo() {
        return (
            <a href="wwww.jikexueyuan.com" className="logo">
                <img src={logo} style={{ height: 40 + "px", width: 109 + "px" }} />
            </a>
        )
    }

    RightTab() {
        return (
            <>
                <div className="rightTab">
                    <div className="tab1">
                        <i className="arrow"></i>
                        <div className="tab1-spinner">
                            <div className="div1">
                                <a className="a-1" href="http://passport.jikexueyuan.com/sso/reg_phone">注册</a> |
                            <a className="a-2" href="http://passport.jikexueyuan.com/sso/login">登录</a>
                            </div>
                            <div>
                                <a className="a-3" href="http://passport.jikexueyuan.com/sso/login">
                                    <i></i> 学习中心
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab2">
                    <i className="jiantou"></i>
                    <img src="./title/heade-rwm.png" />
                </div>
                <div className="tab3"></div>
            </>
        )


    }


    render() {
        return (
            <div className="title">
                {this.Logo()}
                <div className="tab">
                    <TabBar key="tabbar" tabBtns={TabBtns.tabBtns} />
                </div>
                {/* {this.RightTab()} */}
            </div>
        )
    }
}