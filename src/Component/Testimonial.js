import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import testimonialImg_1 from '../Assets/Images/Decks.jpeg';
import testimonialImg_2 from '../Assets/Images/Daniel.png';

class Testimonial extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            arrows: false,
            slidesToScroll: 1,
            centerPadding: 30,
            focusOnSelect: false,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    initialSlide: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
            ]
        };
        return (
            <div className="testimonial-area">
                <div className="container">
                    <div className="testimonial-active">
                    <Slider {...settings}>
                        <div className="testimonial-wrap">
                            <div className="testimonial-item">
                                <div className="testimonial-content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo.</p>
                                </div>
                                <div className="testimonial-sub">
                                    <div className="testimonial-img">
                                        <img src={testimonialImg_1}/>
                                    </div>
                                    <div className="testimonial-tumb-content">
                                        <h4>Ben Decker</h4>
                                        <span>Tour Manager for Jordan Davis</span>
                                    </div>
                                </div>
                            </div>
                        </div> 
                        <div className="testimonial-wrap">
                            <div className="testimonial-item">
                                <div className="testimonial-content">
                                    <p>Luke’s leadership skills prove that anything is possible. With Luke as our captain, our team learned time and time again that any mountain can be moved. Not only that, but that working hard and having fun are not mutually exclusive.</p>
                                </div>
                                <div className="testimonial-sub">
                                    <div className="testimonial-img">
                                        <img src={testimonialImg_2}/>
                                    </div>
                                    <div className="testimonial-tumb-content">
                                        <h4>Daniel Lewis</h4>
                                        <span>Production Manager for Jordan Davis</span>
                                    </div>
                                </div>
                            </div>
                        </div>   
                        {/* <div className="testimonial-wrap">
                            <div className="testimonial-item">
                                <div className="testimonial-content">
                                    <p>Luke’s leadership skills prove that anything is possible. With Luke as our captain, our team learned time and time again that any mountain can be moved. Not only that, but that working hard and having fun are not mutually exclusive.</p>
                                </div>
                                <div className="testimonial-sub">
                                    <div className="testimonial-img">
                                        <img src={testimonialImg_1}/>
                                    </div>
                                    <div className="testimonial-tumb-content">
                                        <h4>Jenelia Watson</h4>
                                        <span>Ceo Of Aroma Brand</span>
                                    </div>
                                </div>
                            </div>
                        </div>  */}
                        {/* <div className="testimonial-wrap">
                            <div className="testimonial-item">
                                <div className="testimonial-content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo.</p>
                                </div>
                                <div className="testimonial-sub">
                                    <div className="testimonial-img">
                                        <img src={testimonialImg_2}/>
                                    </div>
                                    <div className="testimonial-tumb-content">
                                        <h4>John Doe</h4>
                                        <span>Ceo Of Aroma Brand</span>
                                    </div>
                                </div>
                            </div>
                        </div>   */}
                    </Slider>
                    </div>
                </div>
            </div>
        );
    }
}

export default Testimonial;         