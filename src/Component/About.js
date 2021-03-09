import React, { Component } from 'react';
import aboutImg from '../Assets/Images/LukeZvadaFUNphoto.JPG';

class About extends Component {
    render() {
        return (
            <div className="hx-about-style-1" id="about">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-xl-6 col-lg-6 d-xl-flex d-lg-flex d-block align-items-center">
                            <div className="hx-about-content">
                                <div className="hx-site-title">
                                    {/* <span>Expert Web Developer & Designer</span> */}
                                    <h2>About Me</h2>
                                </div>
                                <p>Previously working in the music industry as a tour manager, I learned how to solve issues on the go, organize a complicated schedule, and manage team morale. Through that hard work, I have found a new passion for software development. I attended Nashville Software School that allowed me to take that new passion and turn it into reality. Having strong attributes such as problem solving, dependability, and efficiency, I have embraced this new opportunity in tech and continue to learn and grow as a software developer every day.</p>                                
                                <div className="btns">
                                    <a href="https://drive.google.com/file/d/1ifOw3l4yafqhqOifmcFjvidutyyCcD4m/view?usp=sharing" className="theme-btn-download">Download Resume PDF</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5">
                            <div className="hx-about-img">
                                <img src={aboutImg}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;