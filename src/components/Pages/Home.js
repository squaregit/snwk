import React, { useEffect } from "react";
import { Fragment } from "react";

import "../css/slide.css"
import "../Pages/Animation.js"
import { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import "bootstrap/dist/css/bootstrap.min.css";
import "@fontsource/space-grotesk";
import "@fontsource/space-grotesk/400.css";

import logo from "../../assets/logo_squarenetwork.jpg";
import flash from "../../assets/flash.png";
import innovation from "../../assets/Innovate.png";
import excellence from "../../assets/Excellence.png";
import global from "../../assets/Global.png";
import brilliance from "../../assets/brilliance.png";
import wifi from "../../assets/wifi_squarenetwork.png";
import switches from "../../assets/switches_squarenetwork.png";
import gateways from "../../assets/gateways_squarenetwork.jpg";
import Services from "../../assets/Services_squarenetwork.jpg";
import routers from "../../assets/router-r.png";
import servers from "../../assets/servers.png";
import cable from "../../assets/cables.png";
import ssd from "../../assets/ssd_qn.png";
import wlc from "../../assets/wlc.png";
import chassis from "../../assets/chassis.png";
import ipphone from "../../assets/ipphone.png";
import fantray from "../../assets/fantray.png";
import poweradaptor from "../../assets/power_adaptor.png";

import home from "../../assets/home2.jpg";
import $ from 'jquery';


import {
  CarouselControl,
  Carousel,
  CarouselItem,
  CarouselIndicators, UncontrolledCarousel
} from 'reactstrap';

export const Home = () => {



  
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      img: "image/slide1.png",
      author: "LUNDEV",
      title: "DESIGN SLIDER",
      topic: "ANI",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi...",
    },
    {
      img: "image/slide2.png",
      author: "LUNDEV",
      title: "DESIGN SLIDER",
      topic: "ANI",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi...",
    },
    {
      img: "image/slide3.png",
      author: "LUNDEV",
      title: "DESIGN SLIDER",
      topic: "ANI",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi...",
    },
    {
      img: "image/1.jpg",
      author: "LUNDEV",
      title: "DESIGN SLIDER",
      topic: "ANI",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi...",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1)
    );
  };

  // Start the auto-slide interval
  useEffect(() => {
    const autoSlide = setInterval(nextSlide, 10000); // 7 seconds delay for each slide
    return () => clearInterval(autoSlide); // Cleanup on component unmount
  }, []);

  


  $(document).ready(function () {

    $('ul.tabs li').click(function () {
      var tab_id = $(this).attr('data-tab');

      $('ul.tabs li').removeClass('current');
      $('.tab-content').removeClass('current');

      $(this).addClass('current');
      $("#" + tab_id).addClass('current');
    })
  })


  $(document).ready(function () {
    var tabCount = $('ul.tabs li').length;

    // Total number of tabs

    var currentIndex = 0;
   
    // Index for the active tab

    // Function to switch tabs

    function switchTab() {
      var tab_id = $('ul.tabs li').eq(currentIndex).attr('data-tab');

      $('ul.tabs li').removeClass('current');
      $('.tab-content').removeClass('current');

      $('ul.tabs li').eq(currentIndex).addClass('current');
      $("#" + tab_id).addClass('current');

      // Move to the next tab, loop back to the first if at the end
      currentIndex = (currentIndex + 1) % tabCount;
    }

    // Initial tab switch
    switchTab();

    // Set interval for automatic tab switching every 5 seconds (5000ms)
    
    setInterval(switchTab, 50000);
  });


  // number-count 

  $('.counter-count').each(function () {
    $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
    }, {
      duration: 5000,
      easing: 'swing',
      step: function (now) {
        $(this).text(Math.ceil(now));
      }
    });
  });

  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };


  return (

    <Fragment>


      <div id='particle-network-animation'>
      </div>


<div className="pa" id="particles-js">

      <UncontrolledCarousel
        items={[

          {
            // altText: 'Great things in business are never done by one person.They are done by a team of people.',
            caption: 'Square Networks helps you	to save time and money',
            key: 1,
            src: require('../../assets/slide2.png')

          },

          {
            altText: 'Slide 2',
            caption: 'We deliver quality and service to clients ',
            key: 2,
            src: require('../../assets/slide1.png')
          },

          {
            altText: 'Slide 3',
            caption: 'We never dreamed about success , we worked  for it.',
            key: 3,
            src: require('../../assets/slide3.png')

          }
        ]}
      />
</div>

      
{/* <section>
<div class="bdt-timeline-container">
  <div class="upk-salf-slider-wrapper">
        <div class="swiper-container mySwiper2">
            <div class="swiper-wrapper">
                <div class="upk-salf-item swiper-slide">
                    <div class="upk-salf-image-wrap">
                        <img class="upk-xanc-img" src="https://picsum.photos/id/1011/1200/800" />
                    </div>
                    <div class="upk-salf-content-wrap">
                        <h3 class="upk-salf-title" data-swiper-parallax-y="-150" data-swiper-parallax-duration="1200">
                            we help you make modern interior
                        </h3>
                        <div class="upk-salf-desc" data-swiper-parallax-y="-200" data-swiper-parallax-duration="1400" >we will help you to make an elegant and luxurius interrior designed by porfessional interrior designer.</div>
                        <div class="upk-salf-button" data-swiper-parallax-y="-300" data-swiper-parallax-duration="1500">
                            <a class="link link--arrowed" href="#">read more
                                <svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 32 32">
                                    <g fill="none" stroke="#ff215a" stroke-width="1.5" stroke-linejoin="round" stroke-miterlimit="10">
                                    <circle class="arrow-icon--circle" cx="16" cy="16" r="15.12"></circle>
                                    <path class="arrow-icon--arrow" d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"></path>
                                    </g>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="upk-salf-item swiper-slide">
                    <div class="upk-salf-image-wrap">
                        <img class="upk-xanc-img" src="https://picsum.photos/id/1026/1200/800" />
                    </div>
                    <div class="upk-salf-content-wrap">
                        <h3 class="upk-salf-title" data-swiper-parallax-y="-150" data-swiper-parallax-duration="1200">
                            we help you make modern interior
                        </h3>
                        <div class="upk-salf-desc" data-swiper-parallax-y="-200" data-swiper-parallax-duration="1400">we will help you to make an elegant and luxurius interrior designed by porfessional interrior designer.</div>

                            <div class="upk-salf-button" data-swiper-parallax-y="-300" data-swiper-parallax-duration="1500">
                            <a class="link link--arrowed" href="#">read more
                                <svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 32 32">
                                    <g fill="none" stroke="#ff215a" stroke-width="1.5" stroke-linejoin="round" stroke-miterlimit="10">
                                    <circle class="arrow-icon--circle" cx="16" cy="16" r="15.12"></circle>
                                    <path class="arrow-icon--arrow" d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"></path>
                                    </g>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="upk-salf-item swiper-slide">
                    <div class="upk-salf-image-wrap">
                        <img class="upk-xanc-img" src="https://picsum.photos/id/201/1200/800" />
                    </div>
                    <div class="upk-salf-content-wrap">
                        <h3 class="upk-salf-title" data-swiper-parallax-y="-150" data-swiper-parallax-duration="1200">
                            we help you make modern interior
                        </h3>
                        <div class="upk-salf-desc" data-swiper-parallax-y="-200" data-swiper-parallax-duration="1400">we will help you to make an elegant and luxurius interrior designed by porfessional interrior designer.</div>

                            <div class="upk-salf-button" data-swiper-parallax-y="-300" data-swiper-parallax-duration="1500">
                            <a class="link link--arrowed" href="#">read more
                                <svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 32 32">
                                    <g fill="none" stroke="#ff215a" stroke-width="1.5" stroke-linejoin="round" stroke-miterlimit="10">
                                    <circle class="arrow-icon--circle" cx="16" cy="16" r="15.12"></circle>
                                    <path class="arrow-icon--arrow" d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"></path>
                                    </g>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
              
                <div class="upk-salf-item swiper-slide">
                    <div class="upk-salf-image-wrap">
                        <img class="upk-xanc-img" src="https://picsum.photos/id/167/1200/800" />
                    </div>
                    <div class="upk-salf-content-wrap">
                        <h3 class="upk-salf-title" data-swiper-parallax-y="-150" data-swiper-parallax-duration="1200">
                            we help you make modern interior
                        </h3>
                        <div class="upk-salf-desc" data-swiper-parallax-y="-200" data-swiper-parallax-duration="1400">we will help you to make an elegant and luxurius interrior designed by porfessional interrior designer.</div>

                            <div class="upk-salf-button" data-swiper-parallax-y="-300" data-swiper-parallax-duration="1500">
                            <a class="link link--arrowed" href="#">read more
                                <svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 32 32">
                                    <g fill="none" stroke="#ff215a" stroke-width="1.5" stroke-linejoin="round" stroke-miterlimit="10">
                                    <circle class="arrow-icon--circle" cx="16" cy="16" r="15.12"></circle>
                                    <path class="arrow-icon--arrow" d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"></path>
                                    </g>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="upk-page-scroll">
            <a class="arrow-up">
                <div class="long-arrow-left"></div>
                <span class="arrow-slide"></span>
            </a>
        </div>
        <div class="upk-salf-nav-pag-wrap">
            
            <div class="upk-salf-navigation">
                <div class="upk-button-prev upk-n-p">
                    <a class="link link--arrowed" href="#">
                        <svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 32 32">
                            <g fill="none" stroke="#ff215a" stroke-width="1.5" stroke-linejoin="round" stroke-miterlimit="10">
                            <circle class="arrow-icon--circle" cx="16" cy="16" r="15.12"></circle>
                            <path class="arrow-icon--arrow" d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"></path>
                            </g>
                        </svg>
                    </a>
                </div>
                <div class="upk-button-next upk-n-p">
                    <a class="link link--arrowed" href="#">
                        <svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 32 32">
                            <g fill="none" stroke="#ff215a" stroke-width="1.5" stroke-linejoin="round" stroke-miterlimit="10">
                            <circle class="arrow-icon--circle" cx="16" cy="16" r="15.12"></circle>
                            <path class="arrow-icon--arrow" d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"></path>
                            </g>
                        </svg>
                    </a>
                </div>
            </div>

            <div class="upk-salf-pagi-wrap">
                <div class="swiper-pagination"></div>
            </div>
        </div>
    </div>
 <a class="button" href="https://bdthemes.net/demo/wordpress/ultimate-post-kit/demo/">view wordpress demo</a>
</div>
</section> */}


      <section className="container">
        <div className="row">
          <div className="col-md-6">
            <p>
              Welcome To Square Network Solutions
            </p>
            <h3 className="heading_top drop-out fade-in-down">
              We are always Faster & reliable </h3>

            <p className="heading_top_p">
              Square Network is your one-stop solution for all your IT infrastructure servicing needs. We are a one-of-its-kind organization that services consumers, retailers, SMBs and enterprise customers.
            </p>

            <p className="heading_top_p">
              With the experience of handling more than 3800 clients across Tamil Nadu, the Square Network team is adept with the latest technology and has a thorough understanding of customer requirements to provide a world of IT hardware services, solutions and support across different industry verticals.
            </p>

            <a className="btnn" href="">
              Become a Client
            </a>
          </div>

          <div className="col-md-6 text-center ">
            <div className="rotation_sec">
            <div className="slideshow">

              <div className="slide" style={{ "--i": 0 }}>
                <h2>01<span>Switches</span></h2>
                <img src={switches} className="" alt="switches_squarenetwork" />

              </div>

              <div className="slide" style={{ "--i": 1 }}>
                <h2>02<span>Routers</span></h2>
                <img src={routers} className="" alt="router_squarenetwork" />

              </div>

              <div className="slide" style={{ "--i": 2 }}>
                <h2>03<span>Servers</span></h2>
                <img src={servers} className="" alt="server_squarenetwork" />

              </div>

              <div className="slide" style={{ "--i": 3 }}>
                <h2>04<span>Cables</span></h2>
                <img src={cable} className="" alt="cable_squarenetwork" />

              </div>

              <div className="slide" style={{ "--i": 4 }}>
                <h2>05<span>SSD</span></h2>
                <img src={ssd} className="" alt="ssd_squarenetwork" />

              </div>

              <div className="slide" style={{ "--i": 5 }}>
                <h2>06<span>WLC</span></h2>
                <img src={wlc} className="" alt="wlc_squarenetwork" />

              </div>

              <div className="slide" style={{ "--i": 6 }}>
                <h2>07<span>Chassis</span></h2>
                <img src={chassis} className="" alt="chassis_squarenetwork" />

              </div>

              <div className="slide" style={{ "--i": 7 }}>
                <h2>08<span>IP Phone</span></h2>
                <img src={ipphone} className="" alt="ipphone_squarenetwork" />

              </div>

              <div className="slide" style={{ "--i": 8 }}>
                <h2>09<span>Fan Tray</span></h2>
                <img src={fantray} className="" alt="fantary_squarenetwork" />
              </div>

              <div className="slide" style={{ "--i": 9 }}>
                <h2>10<span>Power Adaptor</span></h2>
                <img src={poweradaptor} className="" alt="poweradaptor_squarenetwork" />
              </div>

            </div>
            </div>


          </div>
        </div>
      </section>

      <div className="container">
        <Nav tabs>

          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '1' })}
              onClick={() => { toggle('1'); }}>
              Tab1
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '2' })}
              onClick={() => { toggle('2'); }}
            >
              More Tabs
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                {/* <h4>Tab 1 Contents</h4> */}
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="6">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
              <Col sm="6">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>

      <section className="red_net">
        <div className="container">

        <div className="row">
          <div className="col-md-6">
            <p>
              Improve your business with us!
            </p>

            <h3 className="heading_top">
              Have a project in mind ? Work With Us.
            </h3>

            <p className="heading_top_p">
              We are proud to showcase a team of highly qualified and certified professionals, including brand certifications from leading brands as well as technology certifications like CCNA. Our engineers go through rigorous trainings and certification exercises in order to maintain the highest quality standards.
            </p>

            <p className="heading_top_p">
              Our mantra for success is single-fold customer satisfaction, if not delight. We not only strive to deliver further, better and quicker; but also listen actively to feedback we receive from our customers to try and enhance our service delivery experience.
            </p>
            <p className="heading_top_p">
              With Square Network, clients are assured that their IT infrastructure is in the hands of experts.
            </p>

            <a className="btnn" href="">
              Become a Client
            </a>
          </div>

          <div className="col-md-6 text-center" style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignContent: 'center'
          }}>
            <div className="cntr_cntr_hme">

              <div className="row">
                <div className="col-md-6">
                  <div className="hme_box">
                    <h5>
                      Quick Turnaround
                    </h5>
                    <p>
                      Whether it is procurement of new hardware or servicing of your existing systems, get it at a guaranteed turnaround time
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="hme_box">
                    <h5>
                      Solutions Analysis
                    </h5>
                    <p>
                      Choosing the right IT solution as per customer requirement analysis, setting up, and integrating into existing systems.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="hme_box">
                    <h5>
                      Maintenance Management
                    </h5>

                    <p>
                      Rapid response hardware maintenance contracts for printers, computers, and servers with on-site and remote support.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="hme_box">
                    <h5>
                      Network Integration
                    </h5>

                    <p>
                      Reinforce your LAN, WAN, WLAN, load balancing technologies, cabling, network management, design, network infrastructure.
                    </p>

                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
        </div>
      </section>

      <section className="our_sec container">

        <div className="container">
          <h3 className="text-center our_vlu">Our  Values</h3>
        </div>

        <div className="row">
          <div className="col-md-3">
            <div className="abt_our_each">

              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#FFD43B" d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2c0 0 0 0 0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4c0 0 0 0 0 0c19.8 27.1 39.7 54.4 49.2 86.2l160 0zM192 512c44.2 0 80-35.8 80-80l0-16-160 0 0 16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z" />
              </svg>

              <h3>Innovation</h3>
              <span>
                We drive creativity, constantly improve and lead in networking solutions.
              </span>

            </div>
          </div>

          <div className="col-md-3">
            <div className="abt_our_each">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">

                <path fill="#df3a3a" d="M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3l0-84.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5l0 21.5c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-26.8C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112l32 0c24 0 46.2 7.5 64.4 20.3zM448 416l0-21.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176l32 0c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2l0 26.8c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7l0 84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3l0-84.7c-10 11.3-16 26.1-16 42.3zm144-42.3l0 84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2l0 42.8c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-42.8c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112l32 0c61.9 0 112 50.1 112 112z" /></svg>

              <h3>Customer Focused</h3>
              <span>
                Understanding unique needs, providing customized networking solutions.
              </span>

            </div>
          </div>

          <div className="col-md-3">
            <div className="abt_our_each">

              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#095cec" d="M448 256A192 192 0 1 0 64 256a192 192 0 1 0 384 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 80a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm0-224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zM224 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" /></svg>

              <h3>Integrity</h3>
              <span>
                Maintaining high ethical standards, transparency and honesty in all fields.
              </span>
            </div>
          </div>
          <div className="col-md-3">
            <div className="abt_our_each">

              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#058543" d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8l0 378.1C394 378 431.1 230.1 432 141.4L256 66.8s0 0 0 0z" /></svg>

              <h3>Reliability</h3>
              <span>
                Delivering robust, dependable networking solutions clients can trust.
              </span>
            </div>
          </div>

        </div>

      </section>
      <section className="red_nett">

      </section>

      <section className="container">
        <div className="row">
          <div className="col-md-6">
            <div id="tab-1" className="tab-content current">
              <h3>
                Wi-Fi
              </h3>
              <ul>
                <li>
                  Offers a wide range of Indoor, Outdoor and In-room Wi-Fi 7, Wi-Fi 6 and Wi-Fi 5  access points.
                </li>

                <li>
                  Provides high-speed connectivity, optimum coverage and reliable performance in low to high-density areas.
                </li>

                <li>
                  Provides flexible management options for the cloud-managed Square Network Rudder NSC and the Square Network ACE mobile application.
                </li>

                <li>
                  Full enterprise-grade networking, observability and security features.
                </li>

              </ul>
            </div>


            <div id="tab-2" className="tab-content">

              <h3>Switches</h3>
              <ul>
                <li>
                  Offers a full range of core, data centre, enterprise and industrial switches with options for PoE, Full PoE, Non-PoE, RPS and lightning-fast 100G fiber connectivity.
                </li>
                <li>
                  From 4-port to 48-port and watts budget of 130 to 1500 watts switches, according to the need for a solution.
                </li>
                <li>
                  Centralized network management with the Square Network Rudder NSC cloud-managed solution and the Square Network ACE mobile application.
                </li>
                <li>
                  Offer high-speed data transmission, efficient packet forwarding, VLAN support, QoS.
                </li>
              </ul>
            </div>

            <div id="tab-3" className="tab-content">
              <h3>Gateways</h3>
              <ul>
                <li> Square Network Networks Gateways provide unbreakable WAN connection over multiple ISPs for always-on enterprise networks. </li>
                <li>
                  Zero-touch deployment, VPN for branch connectivity and link load balancing.
                </li>
                <li>
                  Anywhere- Anytime manageability of Gateway devices using Rudder cloud and Square Network ACE Mobile application.
                </li>
                <li>
                  Intelligent WAN steering and Resilient bonding link.
                </li>
              </ul>
            </div>


            <div id="tab-4" className="tab-content">

              <h3>Services</h3>
              <ul>
                
                <li>
                  Square Network Wi-Fi Service Management Platform (Square Network SMP) provides a secure, scalable and complete hotspot network.
                </li>

                <li>
                  Square Network Zero Trust Network Access  secure and critical enterprise network with passwordless authentication and user onboarding.
                </li>

                <li>
                  Square Network Identity Management (Square NetworkIM) to centrally manage enterprise users and devices.
                </li>
                <li>
                  Cloud-hosted services are designed for elastic scalability and service resiliency.
                </li>
              </ul>

            </div>

          </div>


          <div className="col-md-6">
            <ul className="tabs">

              <li className="tab-link current " data-tab="tab-1">

                <div>
                  <img src={wifi} className="" alt="wifi" />
                </div>
                <h3>Wi-Fi</h3>
                <p>Reliable, Agile, Fast </p>
              </li>


              <li className="tab-link" data-tab="tab-2">

                <div>
                  <img src={switches} className="" alt="switches_squarenetwork" />

                  <h3>Switches</h3>
                  <p>Scalable, Ultra Fast, Flexible</p>
                </div>
              </li>

              <li className="tab-link" data-tab="tab-3">
                <div>
                  <img src={gateways} className="" alt="gateways_squarenetwork" />
                  <h3>Gateways</h3>
                  <p>Resilient, Secured, Connective</p>
                </div>
              </li>

              <li className="tab-link" data-tab="tab-4">
                <div>
                  <img src={Services} className="" alt="Services_squarenetwork" />
                  <h3>
                    Services
                  </h3>
                  <p>Vertical Centric, Solution <br />
                    Oriented, Enhanced Security</p>

                </div>
              </li>

            </ul>
          </div>

        </div>



        <div id="tab-1" className="tab-content current">

        </div>
        <div id="tab-2" className="tab-content">

        </div>
        <div id="tab-3" className="tab-content">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </div>
        <div id="tab-4" className="tab-content">
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>

      </section>

      <div className="counter">
        <div className="container">
          <div className="row">

            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">

              <div className="employees">
                <p className="counter-count">+879</p>
                <p className="employee-p">Registered Partners</p>
              </div>

            </div>

            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
              <div className="customer">
                <p className="counter-count">+954</p>
                <p className="customer-p">Deployments</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
              <div className="design">
                <p className="counter-count">+2,250 </p>
                <p className="design-p">Happy Customers</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
              <div className="order">
                <p className="counter-count">+652</p>
                <p className="order-p">Team Strength</p>
              </div>
            </div>

          </div>
        </div>
      </div>

    </Fragment>

  );
};
