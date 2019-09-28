import React from "react";
import "./style/devilProgrammer.less"
import Content from "../bodyConfig"

export default class DevilProgrammer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    showLink(Content){
        
        return Content.map((item,i)=>{
            return <a key={i}>
                    <img src={require("../../../images/devilProgrammer/"+item.linkImg)}/>
                <div>
                    <i className="i1">{item.linkTitle}</i>
                    <i className="i2">{item.linkSubtitle}</i>
                </div>
                <i className="mask"></i>
            </a>
        })
    }

    render(){
        return(
            <div className="devilProgrammer">
                <h2>这是魔鬼程序员模块</h2>
                {this.showLink(Content.DevilProgrammer)}
            </div>
        ) 
    }
}



