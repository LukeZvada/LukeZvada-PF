import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCode, faCodeBranch, faExternalLinkAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import { fab, faFacebook, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Gallery_1 from '../Assets/Images/gallery/img-1.jpg';
import Gallery_2 from '../Assets/Images/TourVanaLogo.png';
import Gallery_3 from '../Assets/Images/gallery/img-3.jpg';
import Gallery_4 from '../Assets/Images/gallery/img-4.jpg';
import Gallery_5 from '../Assets/Images/gallery/img-5.jpg';
import Gallery_6 from '../Assets/Images/PilotLogLogo.png';


class Porfolio extends Component {

    state = {
        onWebDesign: false,
        onPrintDesign: false,
        onWebApp: false,
        onPhotography: false,
        isOpen : false,
    }

    render() {

        const allElement = event => {
            event.preventDefault();
            this.setState({
                onWebApp: true,
                onPrintDesign: true,
                onWebDesign: true,
                onPhotography: true,
            });
        }

        const webDesign = event => {
            event.preventDefault();
            this.setState({
                onWebDesign: true,
                onPrintDesign: false,
                onWebApp: false,
                onPhotography: false,
                isOpen: true,
            });
        }

        const printDesign = event => {
            event.preventDefault();
            this.setState({
                onPrintDesign: true,
                onWebDesign: false,
                onWebApp: false,
                onPhotography: false,
                isOpen: true,
            });
        }

        const webApp = event => {
            event.preventDefault();
            this.setState({
                onWebApp: true,
                onPrintDesign: false,
                onWebDesign: false,
                onPhotography: false,
                isOpen: true,
            });
        }

        const Photography = event => {
            event.preventDefault();
            this.setState({
                onPhotography: true,
                onWebApp: false,
                onPrintDesign: false,
                onWebDesign: false,
                isOpen: true,
            });
        }


        console.log(this.state.onWebDesign);

        return (
            <section id="protfolio" className="gallery-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12 sortable-gallery">
                            <div className="gallery-filters">
                                <div className="section-title">
                                    <span>Portfolio</span>
                                    <h2>Work I Have Done</h2>
                                </div>
                                <ul>
                                    {/* <li><a data-filter="*" href="#" className="current" onClick={allElement}>All</a></li> */}
                                    {/* <li><a data-filter=".Web-Design" href="#" onClick={webDesign}>Web Design</a></li> */}
                                    {/* <li><a data-filter=".Print-Design" href="#" onClick={printDesign}>Print Design</a></li> */}
                                    {/* <li><a data-filter=".Web-Application" href="#" onClick={webApp}>Web Application</a></li>                */}
                                    {/* <li><a data-filter=".Photography" href="#" onClick={Photography}>Photography</a></li>  */}
                                </ul>
                            </div>
                            <div className="gallery-container gallery-fancybox masonry-gallery tumho-masonary">
                               
                                {/* <div className={this.state.onPrintDesign ? "grid active" : "grid"
                                    && this.state.onWebApp ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"
                                    }>
                                   <img src={Gallery_1} className="img img-responsive" alt="" />
                                    <div className="icon">
                                        <a href="#" className="view-icon">
                                            <FontAwesomeIcon icon={faPlus} />
                                        </a>
                                    </div>
                                </div> */}
                                <div className="projects">    
                                    <a href="#">
                                        <img src={Gallery_2} alt="" className="img img-responsive"/>
                                    </a>
                                </div>
                                <div className="projects">
                                    <a href="#">
                                        <img src={Gallery_6} alt="" className="img img-responsive"/>
                                    </a>
                                </div>
       
                                {/* <div className={this.state.onPrintDesign ? "grid active" : "grid"
                                    && this.state.onPhotography ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                    <img src={Gallery_5} alt="" className="img img-responsive"/>
                                    <div className="icon">
                                        <a href="#" className="view-icon">
                                            <FontAwesomeIcon icon={faPlus} />
                                        </a>
                                    </div>
                                </div>
                                <div className={this.state.onPrintDesign ? "grid active" : "grid"
                                    && this.state.onPhotography ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                    
                                    <img src={Gallery_3} alt="" className="img img-responsive"/>
                                    <div className="icon">
                                        <a href="#" className="view-icon">
                                            <FontAwesomeIcon icon={faPlus} />
                                        </a>
                                    </div>
                                </div> */}
                                {/* <div className={this.state.onPrintDesign ? "grid active" : "grid"
                                    && this.state.onWebApp ? "grid active" : "grid"
                                    && this.state.onPhotography ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                    <img src={Gallery_4} alt="" className="img img-responsive"/>
                                    <div className="icon">
                                        <a href="#" className="view-icon">
                                            <FontAwesomeIcon icon={faPlus} />
                                        </a>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Porfolio;