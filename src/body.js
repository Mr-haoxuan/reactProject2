import React from "react";
import OnlineEmploymentClass from "./onlineClass";
import ProfessionalCourses from "./professionalCourses";
import ExcellentProgrammer from "./excellentProgrammer";
import DevilProgrammer from "./devilProgrammer";
import CareerColleges from "./careerColleges";
import VipClass from "./vipClass";
import StudentStory from "./studentStory"

export default class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return <div className="body">
            这是body部分
            <OnlineEmploymentClass />
            <ProfessionalCourses />
            <ExcellentProgrammer />
            <DevilProgrammer/>
            <CareerColleges/>
            <VipClass/>
            <StudentStory/>
        </div>
    }
}