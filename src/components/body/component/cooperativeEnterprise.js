import React from "react";
import "./style/cooperativeEnterprise.less"
import Content from "../bodyConfig"

export default class CooperativeEnterprise extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    showLink(Content){
        return Content.map((item,i)=>{
            return <i key={i}>
                <a href={item.link}></a>
            </i>
        })
    }

    render() {
        return <div className="cooperativeEnterprise">
            <h2>这是合作企业模块</h2>
            {this.showLink(Content.cooperativeEnterprise)}
            <a className="moreEnterprise" href="http://www.jikexueyuan.com/partner">更多合作企业</a>
        </div>
    }
}