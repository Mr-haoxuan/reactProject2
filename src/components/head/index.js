import React from "react";
import ReactDOM from "react-dom";
import TabBar from "./component/tabBar";
import logo from "../../images/title/logo.png"
import headerwm from "../../images/title/headerwm.png"
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

    showTab1Spinner() {
        const { rightSpinner = [] } = TabBtns;
        return rightSpinner.map((item, i) => {
            return (
                <a key={i} className={"a-"+(i+3)} href={item.link}>
                    <i></i> {item.linkname}
                </a>
            )
        })
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
                                {this.showTab1Spinner()}
                            </div>
                        </div>
                    </div>
                    <div className="tab2">
                        <i className="arrow"></i>
                        <img src={headerwm} />
                    </div>
                    <div className="tab3"></div>
                </div>
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
                {this.RightTab()}
            </div>
        )
    }
}