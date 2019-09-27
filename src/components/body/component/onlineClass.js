import React from "react";
import "./style/onlineClass.less"
import Content from "../bodyConfig"


export default class OnlineEmploymentClass extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }

    showClassLink(content){
        return content.map((item,i)=>{
            return <a key={i} href={item.link}>
                <p>{item.linkname}</p>
            </a>
        })
    }

    render(){

        return <div className="onlineClass">
            <h2>线上就业班</h2>
            {this.showClassLink(Content.onlineClass)}
            <a className="recruitAD" href="#"></a>
        </div>
    }
}