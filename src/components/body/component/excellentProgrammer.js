import React from "react";
import "./style/excellentProgrammer.less"
import Content from "../bodyConfig"

export default class ExcellentProgrammer extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }

    ifLinkTitle(linkTitle){
        if(linkTitle != ""){
            return linkTitle.map((item,i)  => {
                return <i key={i} className="linkTitle" >{item}</i>
            })
            
        }
    }

    iflinkSubtitle(linkSubtitle){
        if(linkSubtitle != ""){
            return <i className="subTitle" >{linkSubtitle}</i>
        }
    }

    showlink(link){
        return link.map((item,i)=>{
            return <a key={i}>
                {this.ifLinkTitle(item.linkTitle)}
                {this.iflinkSubtitle(item.linkSubtitle)}
                <i className="mask"></i>
            </a>
        })
    }

    render(){
        return (
            <div className="excellentProgrammer">
                <h2>大牛程序员</h2>
                {this.showlink(Content.excellentProgrammer)}
            </div>
        )
    }
}