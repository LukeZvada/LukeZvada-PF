import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faFacebookF, faTwitter, faInstagram, faPinterestP, faYoutube, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../Assets/Images/logo.png';

class Footer extends Component {
    render() {
        return (
            <div className="footer-area text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="footer-image">
                                <a href="index.html">
                                    <img src={Logo}/>
                                </a>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="footer-menu">
                                <ul className="d-flex " >
                                    <li>
                                        <a href="https://github.com/LukeZvada">
                                            <FontAwesomeIcon icon={faGithub} />
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
                                            <FontAwesomeIcon icon={faLinkedin} />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="footer-sub">
                                <p><i className="fa fa-copyright"></i>2020<span> Luke Zvada</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;