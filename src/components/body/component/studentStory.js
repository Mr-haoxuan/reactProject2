import React from "react";
import "./style/studentStory.less"

export default class StudentStory extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        return <div className="studentStory">这是学生故事</div>
    }
}