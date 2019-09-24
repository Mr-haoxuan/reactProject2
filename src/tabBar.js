import React from "react";

export default class TabBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    showTab() {
        const { tabBtns = [] } = this.props;
        return tabBtns.map((tabItem, index) => {
            return (
                <li key={index}>
                    <i className="green">{tabItem}</i>
                    <i className="arrow"></i>
                    {/* <div>
                    {index == 0 ? this.showSpinner1() : this.showSpinner2}
                    </div> */}
                </li>
            )
        })
    }

    // showSpinner1() {
    //     const { spinner1 = [] } = this.props;
    //     return spinner1.map((item, i) => {
    //         return (
    //             <>
    //                 <div key={i} className="xiala-1-2">
    //                     <i className="xiala-1-2-1">{item.title}</i>
    //                 </div>
    //                 <div key={i} className="xiala-1-2-2">
    //                     {item.links.map((linkItem, i) => {
    //                         return (
    //                             <a key={i} href={linkItem}>
    //                                 <i></i>
    //                                 {item.linknames[i]}
    //                             </a>
    //                         )
    //                     })}
    //                 </div>
    //             </>
    //         )
    //     })
    // }

    showSpinner2() {

    }

    render() {
        return <ul>
            {this.showTab()}
        </ul>
    }
}