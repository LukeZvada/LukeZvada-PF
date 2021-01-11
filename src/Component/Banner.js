import React, { Component } from 'react';
import { faFacebook, faAccessibleIcon, faFacebookF, faTwitter, faInstagram, faPinterest, faPinterestP, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Slides from '../Assets/Images/banner2.jpg';

class Banner extends Component {
    render() {
        return(
            <section id="home" className="hero hero-slider-wrapper hero-style-1">
                <div className="hero-slider">
                    <div className="slide">
                        <div className="slider-image">
                            <img src={Slides}/>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col col-md-8 col-sm-12 slide-caption">
                                    <div className="slide-subtitle">
                                        <h4>Luke Zvada</h4>
                                    </div>
                                    <div className="slide-title">
                                        <h2>Software Developer</h2>
                                    </div>
                                    <div className="btns">
                                        <a href="#contact" className="theme-btn go-contact-area">Contact Me</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copy"><p>Software Developer & Creative Design</p></div>
                <div className="social-links">
                    <ul>
                        <li>
                            <a href="https://github.com/LukeZvada">
                                <FontAwesomeIcon className="fa-icon" icon={faGithub} />
                            </a>
                        </li>
                        {/* <li>
                            <a href="https://twitter.com/zvadamusic">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/zvadamusic/">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </li> */}
                        <li>
                            <a href="https://www.linkedin.com/in/lukezvada/">
                                <FontAwesomeIcon className="fa-icon" icon={faLinkedin} />
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Banner;