import React from "react";
import "./style/careerColleges.less"
import Content from "../bodyConfig"

export default class CareerColleges extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }

    showLink(Content){
        return Content.map((item,i)=>{
            return <a key={i}>
                <img src={require("../../../images/careerColleges/"+item.linkImg)}/>
                <i className="title">{item.linkTitle}</i>
                <i className="mask"></i>
            </a>
        })
    }

    render(){
        return <div className="careerColleges">
            <h2>这是职业学院部分</h2>
            {this.showLink(Content.careerColleges)}
        </div>
    }
}