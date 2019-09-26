import React from "react";
import "./style/vipClass.less"

export default class VipClass extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        return <div className="vipClass">这是会员课程模块</div>
    }
}