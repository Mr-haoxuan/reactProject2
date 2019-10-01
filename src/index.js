import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./components/head/index";
import "./index.less"
import Body from "./components/body/index";
import Footer from "./components/foot/index";

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
                < NavBar />
                < Body />
                < Footer />
            </>
        )
    }
}

ReactDOM.render(
    <Index />,
    document.getElementById("root")
)
