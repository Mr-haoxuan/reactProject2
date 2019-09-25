import React from "react";
import OnlineEmploymentClass from "./component/onlineClass";
import ProfessionalCourses from "./component/professionalCourses";
import ExcellentProgrammer from "./component/excellentProgrammer";
import DevilProgrammer from "./component/devilProgrammer";
import CareerColleges from "./component/careerColleges";
import VipClass from "./component/vipClass";
import StudentStory from "./component/studentStory"
import CooperativeEnterprise from "./component/cooperativeEnterprise";
import RotationChart from "./component/rotationChart";

export default class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return <div className="body">
            <RotationChart/>
            <OnlineEmploymentClass />
            <ProfessionalCourses />
            <ExcellentProgrammer />
            <DevilProgrammer/>
            <CareerColleges/>
            <VipClass/>
            <StudentStory/>
            <CooperativeEnterprise/>
        </div>
    }
}