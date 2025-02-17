import React, { Fragment } from "react";
import "../../components/css/about.css";

import switches from "../../assets/about_head.png";


export const About = () => {
  return (
    <Fragment>
      <section className="abt_sec">
        <div className="container">
          <div className="row">
            <div className="col-md-6" >
              <div>
                <h3 className="abt_head">
                  We are Square Networks, a Zen Exim Brand
                </h3>

                <p>
                  Wired & Wireless Networks
                  Any Vertical, Any Location, Any Deployment
                   We deliver what our customers need, not just what they request

                </p>
              </div>
            </div>
            <div className="col-md-6" >
              <img src={switches} className="" alt="switches_squarenetwork" />
            </div>
          </div>

        </div>
      </section>

      <section className="container">
        <p>
          At Square Networks, we are dedicated to reinventing networks, revolutionizing the way businesses and individuals connect and communicate in the digital era. With our cutting-edge technologies and unparalleled expertise, we offer a comprehensive range of network solutions that empower our clients to thrive in an increasingly interconnected world. We take pride in understanding our customers' true needs, going beyond mere requests. Our approach revolves around delivering personalized solutions that perfectly align with your business goals.
        </p>
      </section>

      <section className="our_sec container">

        <div className="container">
          <h3 className="text-center our_vlu">Our Core Values</h3>
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
          </div><div className="col-md-3">
            <div className="abt_our_each">

              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#095cec" d="M448 256A192 192 0 1 0 64 256a192 192 0 1 0 384 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 80a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm0-224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zM224 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" /></svg>

              <h3>Integrity</h3>
              <span>
                Maintaining high ethical standards, transparency and honesty in all fields.
              </span>
            </div>
          </div><div className="col-md-3">
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

      <section>
        <div className="text-center">
          <h3>
          Why Quantum Networks?
          </h3>

          
        </div>
      </section>

    </Fragment>
  );
};
