import React from "react";
import "./style/studentStory.less"
import "../ft-carousel.min.js"
import $ from "jquery"

export default class StudentStory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount(){
        $("#carousel_2").FtCarousel();
    }

    render() {
        return <div className="studentStory">
            <h2>学员故事</h2>
            <div className="ft-carousel" id="carousel_2">
                <ul className="carousel-inner">
                    <li className="carousel-item">
                        <div className="gushi-2-1">
                            <a href="http://blog.jikexueyuan.com/2.html">
                                <div className="top-div">
                                    <p>
                                        从房地产营销策划转行前端工程师。努力并不是为了证明自己多厉害，只是对自己生活方式的一种选择，每个人都可以通过自己的努力，去决定自己生活的样子。
                                    </p>
                                </div>
                                <div>
                                    <img src={require("../../../images/studentStory/gushi1.jpg")}/>
                                    <i>朱华宇</i>
                                    <i>入职 极客学院</i>
                                </div>
                            </a>
                            <a href="http://blog.jikexueyuan.com/3.html">
                                <div className="top-div">
                                    <p>
                                        从浑浑噩噩的自动化专业学生，到大三暑假进入研究院实习。当时努力克服的那些困难，都成了现在自己的资本和财富。
                                    </p>
                                </div>
                                <div>
                                    <img src={require("../../../images/studentStory/gushi2.jpg")} />
                                    <i>黄文俊</i>
                                    <i>入职 深圳北斗科技应用研究所</i>
                                </div>
                            </a>
                            <a href="http://blog.jikexueyuan.com/4.html">
                                <div className="top-div">
                                    <p>
                                        Android 7期1班学员，本科化学，毕业后考入北航研究生。学编程过程中感觉杂乱无章，想系统学习。看了视频感觉不错，就报名学习。目前入职2个多月，今后还要长期驻扎极客学院。
                                    </p>
                                </div>
                                <div>
                                    <img src={require("../../../images/studentStory/gushi3.jpg")} />
                                    <i>刘盘风</i>
                                    <i>入职 中软北京科技有限公司</i>
                                </div>
                            </a>
                        </div>
                    </li>
                    <li className="carousel-item">
                        <div className="gushi-2-2">
                            <a href="http://blog.jikexueyuan.com/5.html">
                                <div className="top-div">
                                    <p>
                                        爆炸力学硕士转安卓开发，回顾自己从爆炸力学走向代码世界的历程，感触良多。庆幸自己没有留在研究所，程序员不断学习不断进步的感觉更有意义。稳定绝不代表停滞，历练才是我们的财富。
                                	</p>
                                </div>
                                <div>
                                    <img src={require("../../../images/studentStory/gushi4.jpg")} />
                                    <i>张少龙</i>
                                    <i>北京中航智科技</i>
                                </div>
                            </a>
                            <a href="http://blog.jikexueyuan.com/6.html">
                                <div className="top-div">
                                    <p>
                                        美女程序媛，从运维转岗到前端开发工程师。工作上的变化只是一部分，遇到极客学院更重要的是让我知道了自己的潜力，不被未来的不确定性吓倒，相信有目标，肯努力就可以得到想要的生活。
                                	</p>
                                </div>
                                <div>
                                    <img src={require("../../../images/studentStory/gushi5.jpg")} />
                                    <i>杨帆</i>
                                    <i>入职 深圳IBM</i>
                                </div>
                            </a>
                            <a href="http://blog.jikexueyuan.com/7.html">
                                <div className="top-div">
                                    <p>
                                        Web大前端工程师就业班五期 03 班学员，某 985 大学信息与计算科学 2016 届毕业生，2 个月完成 16 个任务，被同班同学称为「大神」。2016 年拿到毕业证书的同时也拿到了 15K 高薪的 offer。
                                	</p>
                                </div>
                                <div>
                                    <img src={require("../../../images/studentStory/gushi6.jpg")} />
                                    <i>路昕宇</i>
                                    <i>入职 浪弯融科科技公司</i>
                                </div>
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    }
}