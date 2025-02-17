import React, { Fragment } from 'react';
import "../../components/css/product.css";

import $ from 'jquery';


const Product = () => {

  $(document).ready(function () {
    //side panel for milestones
    $(".filter-button").click(function () {
      $(".panel").toggleClass("is-visible");
      $("main").toggleClass("panel-visible");
      $(".filter-button").toggleClass("header-visible");
    });
  
    var secondaryHead = $("nav"),
      secondaryHeadTopPosition = secondaryHead.offset().top;
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > secondaryHeadTopPosition) {
        secondaryHead.addClass("fixed-nav");
        $(".filter-button").addClass("fixed-button");
        $(".panel").addClass("fixed-panel");
      } else {
        secondaryHead.removeClass("fixed-nav");
        $(".filter-button").removeClass("fixed-button");
        $(".panel").removeClass("fixed-panel");
      }
    });

    $(".option-one").click(function () {
      $(".one").removeClass("hidden");
      $(".two").addClass("hidden");
    });
    $(".option-two").click(function () {
      $(".two").removeClass("hidden");
      $(".one").addClass("hidden");
    });
    
    $(".all").click(function () {
      $(".two").removeClass("hidden");
      $(".one").removeClass("hidden");
    });
    
    $(".check").click(function () {
      if (
        !$("#one").is(":checked") &&
        !$("#two").is(":checked") &&
        !$("#three").is(":checked")
      ) {
        $(".group1").removeClass("hidden");
        $(".group2").removeClass("hidden");
        $(".group3").removeClass("hidden");
      } else if ($("#one").is(":checked")) {
        $(".group2").addClass("hidden");
        $(".group3").addClass("hidden");
        $(".group1").removeClass("hidden");
        if ($("#two").is(":checked")) {
          $(".group2").removeClass("hidden");
        }
        if ($("#three").is(":checked")) {
          $(".group3").removeClass("hidden");
        }
      } else if ($("#two").is(":checked")) {
        $(".group1").addClass("hidden");
        $(".group3").addClass("hidden");
        $(".group2").removeClass("hidden");
        if ($("#three").is(":checked")) {
          $(".group3").removeClass("hidden");
        }
      } else if ($("#three").is(":checked")) {
        $(".group1").addClass("hidden");
        $(".group2").addClass("hidden");
        $(".group3").removeClass("hidden");
      }
    });
  });
  
  return (
    <Fragment>
<section>
<header id="top-header">
  <h1>Content Filter</h1>
</header>

<nav>
  <ul>
    <li class="all">All</li>
    <li class="option-one">Option One</li>
    <li class="option-two">Option Two</li>
  </ul>
</nav>

<section class="filter-button">
  <a href="#0" class="panel-button">
    <span class="bars"></span>
    <span class="bars"></span>
    <span class="bars"></span>
  </a>
  <h2>Filters</h2>
</section>
<section class="panel"> 
		  <section class="panel-content">
    <section class="filters">
      <h2>Group Choices:</h2>
      <ul>
        <li class="check group1-check">
          <input id='one' type='checkbox' />
          <label for='one'>
            <span></span>
            Group 1
          </label>
        </li>
        <li class="check group2-check">
          <input id='two' type='checkbox' />
          <label for='two'>
            <span></span>
            Group 2
          </label>
        </li>
        <li class="check group3-check">
          <input id='three' type='checkbox' />
          <label for='three'>
            <span></span>
            Group 3
          </label>
        </li>
      </ul>
    </section>
  </section>
</section> 

<main>
  <section id="products">
    <div class="one group1"><span>Lorem</span></div>
    <div class="two group2"><span>Ipsum</span></div>
    <div class="two group1"><span>Lorem</span></div>
    <div class="one group2"><span>Dolor</span></div>
    <div class="two group2"><span>Sit</span></div>
    <div class="two group2"><span>Amet</span></div>
    <div class="one group1"><span>Consectetur</span></div>
    <div class="two group3"><span>Adipiscing</span></div>
    <div class="two group3"><span>Elit</span></div>
    <div class="one group3"><span>Cras</span></div>
    <div class="two group3"><span>Auctor</span></div>
    <div class="one group3"><span>Felis</span></div>
  </section>
</main>
</section>

    </Fragment>
  )
}

export default Product;