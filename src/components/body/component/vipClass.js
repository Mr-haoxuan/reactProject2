import React from "react";
import "./style/vipClass.less"
import Content from "../bodyConfig"

export default class VipClass extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }

    showLink(Content){
        return Content.map((item,i)=>{
            return <a key={i}>
                <img src={require("../../../images/vipClass/"+item.linkImg)}/>
                <i className="title">{item.linkTitle}</i>
                <i>{item.linkSubtitle}</i>
            </a>
        })
    }

    render(){
        return <div className="vipClass">
            <h2>会员课程</h2>
            {this.showLink(Content.vipClass)}
            <a className="all-lesson" href="http://www.jikexueyuan.com/course/">全部会员课程</a>
        </div>
    }
}