import React from "react";
import "./style/rotationChart.less"
import "../ft-carousel.min.js"
import $ from "jquery"


export default class RotationChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount(){
        $("#carousel_1").FtCarousel();
    }

    render() {
        
        return <div className="rotationChart">
            <div className="ft-carousel" id="carousel_1">
                <ul className="carousel-inner">
                    <li className="carousel-item"><img src={require("../../../images/rotationChart/huadong1.jpg")} /></li>
                    <li className="carousel-item"><img src={require("../../../images/rotationChart/huadong2.jpg")} /></li>
                    <li className="carousel-item"><img src={require("../../../images/rotationChart/huadong3.jpg")} /></li>
                    <li className="carousel-item"><img src={require("../../../images/rotationChart/huadong4.jpg")} /></li>
                    <li className="carousel-item"><img src={require("../../../images/rotationChart/huadong5.jpg")} /></li>
                    <li className="carousel-item"><img src={require("../../../images/rotationChart/huadong6.jpg")} /></li>
                </ul>
            </div>
        </div>
    }
}