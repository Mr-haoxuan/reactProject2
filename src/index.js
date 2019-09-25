import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./navBar";
import "./index.less"
import Body from "./body";
import Footer from "./footer";

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
                <NavBar />
                < Body />
                < Footer/>
            </>
        )
    }
}

ReactDOM.render(
    <Index />,
    document.getElementById("root")
)
