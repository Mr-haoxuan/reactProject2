import React from "react";
import "./style/professionalCourses.less"
import Content from "../bodyConfig"
import img from "../../../images/professionalCourses/js.jpg"

export default class ProfessionalCourses extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    showLink(content){
        
        return content.map((item,i)=>{
            return (
                <a key={i} href={item.link}>
                    <img src={require("../../../images/professionalCourses/"+item.linkimg)}/>
                    <div>
                        <p>{item.linkname}</p>
                        <p>{item.classTime}</p>
                        <p>{item.price}</p>
                        <p>{item.originalPrice}</p>
                        <p>{item.studentCount}</p>
                    </div>
                </a>
            )
        })
    }

    render(){
        return <div className="professionalCourses">
            <h2>专业精选课</h2>
            {this.showLink(Content.professionalCourses)}
        </div>
    }
}    