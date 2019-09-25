import React from "react";
import ReactDOM from "react-dom";
import TabBar from "./tabBar";
import logo from "../../images/title/logo.png"

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    Logo() {
        return (
            <a href="wwww.jikexueyuan.com" className="logo">
                <img src={logo} style={{ height: 40+"px", width: 109+"px" }} />
            </a>
        )
    }

    render() {
        let tabBtns = ["职业学院", "会员课程", "极客社区"];
        let spinner1 = [
            {
                title: "前端学院",
                links: ["http://www.jikexueyuan.com/zhiye/web", "http://www.jikexueyuan.com/zhiye/wechatapp"],
                linknames: ["Web 前端工程师", "微信小程序工程师"]
            },
            {
                title: "后端学院",
                links: ["http://www.jikexueyuan.com/zhiye/python", "http://www.jikexueyuan.com/zhiye/go"],
                linknames: ["Python Web工程师", "Go语言工程师"]
            },
            {
                title: "后端学院",
                links: ["http://www.jikexueyuan.com/zhiye/android", "http://www.jikexueyuan.com/zhiye/ios"],
                linknames: ["Android工程师", "ios工程师"]
            }
        ];
        let spinner2 = [
            {
                linkname:""
            }
        ]
        return (
            <div className="title">
                {this.Logo()}
                <div className="tab">
                    <TabBar key="tabbar" tabBtns={tabBtns} spinner1={spinner1} />
                </div>
            </div>
        )
    }
}
