import React from "react";
import Logo from "../../images/foot/logo-footer.png"
import "./index.less"
import Content from "./footConfig"
import AppImg from "../../images/foot/app.png"
import certImg from "../../images/foot/cert.png"

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    showFooterLogo() {
        return <div className="footer-1-logo">
            <img src={Logo} />
            <i>极客学院，编程是一种信仰！</i>
        </div>
    }

    showLinkList(Content) {
        return Content.map((item, i) => {
            return <dl key={i}>
                <dd>{item.linkTitle}</dd>
                {this.showLink(item.linkList)}
            </dl>
        })
    }

    showLink(Content) {
        return Content.map((item, i) => {
            return <dt key={i}>
                <a href={item.link}>{item.linkName}</a>
            </dt>
        })
    }

    showTel() {
        return <div className="tel">
            <p>服务热线：400-678-8266</p>
            <div>
                <img src={AppImg} />
                iPhon
            </div>
            <div>
                <img src={AppImg} />
                Android
            </div>
        </div>
    }

    showFooterMassage() {
        return <div className="footer-2">
            Copyright © 2013-2017&nbsp;
            <a href="http://www.jikexueyuan.com/">www.jikexueyuan.com</a>
            All Rights Reserved. 京ICP备11018032号-8 京公网安备11010802020210
            <a href="http://qun.jikexueyuan.com/jikexueyuan/topic/430"></a>
            <a href="http://weibo.com/jikexueyuan"></a>
            <a href="">
                <img src={certImg} />
            </a>
        </div>
    }

    render() {
        return <div className="footer">
            <div className="footer-1">
                {this.showFooterLogo()}
                {this.showLinkList(Content.linkList)}
                {this.showTel()}
            </div>
            {this.showFooterMassage()}
        </div>
    }
}