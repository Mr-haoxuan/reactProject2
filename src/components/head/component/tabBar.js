import React from "react";
import "./styles/tabBar.less"

export default class TabBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    showIndexlink(){
        return (<li key="inedxlink">
            <a href="http://www.jikexueyuan.com/" className="indexlink">首页</a>
        </li>)
    }

    showTab() {
        const { tabBtns = [] } = this.props;
        return tabBtns.map((tabItem, index) => {
            return (
                <li key={index}>
                    <i className="green">{tabItem}</i>
                    <i className="arrow"></i>
                    <div className="spinner">
                    {index == 0 ? this.showSpinner1() : this.showSpinner2()}
                    </div>
                </li>
            )
        })
    }

    showSpinner1() {
        const { spinner1 = [] } = this.props;
        return spinner1.map((item, i) => {
            return (
                <div key={i}>
                    <div  className="spinnerTitleDiv">
                        <i className="spinnerTitle">{item.title}</i>
                    </div>
                    <div  className="spinnerLinkDiv">
                        {item.links.map((linkItem, i) => {
                            return (
                                <a key={i} href={linkItem}>
                                    <i></i>
                                    {item.linknames[i]}
                                </a>
                            )
                        })}
                    </div>
                </div>
            )
        })
    }

    showSpinner2() {

    }

    render() {
        return <ul>
            {this.showIndexlink()}
            {this.showTab()}
        </ul>
    }
}