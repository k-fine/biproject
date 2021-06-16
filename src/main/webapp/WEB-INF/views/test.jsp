<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">

<title>Insert title here</title>
<style>
// Variables
//
$section-class: 'section';
$section-expanded-class: 'is-expanded';
$section-has-expanded-class: 'has-expanded-item';

$section-colors: #F06060, #FA987D, #72CCA7, #10A296;

$section-transition-property: all;
$section-transition-duration: 500ms;
$section-transition-timing-function: cubic-bezier(.4,0,.2,1);


// Component Styles
//
.#{$section-class} {
  position: absolute;
  z-index: 0;
	width: 50%;
	height: 50%;
  overflow: hidden;
  cursor: pointer;
  transform: scale(1);
  will-change: transform, contents;
  transition-property: $section-transition-property;
  transition-duration: $section-transition-duration;
  transition-timing-function: $section-transition-timing-function;

  &:nth-child(1) {
    top: 0;
    left: 0;
    background: nth($section-colors, 1);
  }

  &:nth-child(2) {
    top: 0;
    left: 50%;
    background: nth($section-colors, 2);
  }

  &:nth-child(3) {
    top: 50%;
    left: 0;
    background: nth($section-colors, 3);
  }

  &:nth-child(4) {
    top: 50%;
    left: 50%;
    background: nth($section-colors, 4);
  }

  &.#{$section-expanded-class} {
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100%;
    height: 100%;
    cursor: initial;
  }
  
  .#{$section-has-expanded-class} &:not(.#{$section-expanded-class}) {
    transform: scale(0);
  }

}
  
.close-section {
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  width: 3rem;
  height: 3rem;
  align-items: center;
  justify-content: center;
  line-height: 1;
  font-size: 2rem;
  text-align: center;
  color: #fff;
  opacity: 0;
  cursor: pointer;
  pointer-events: none;
  transition: opacity 150ms linear;
  will-change: opacity;

  .#{$section-class}.#{$section-expanded-class} & {
    opacity: 1;
    transition-delay: $section-transition-duration;
    pointer-events: initial;
  }
}


// ===========
// Demo Styles
// ===========
* {
  box-sizing: border-box;
}
html {
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
}
body {
  margin: 0;
  font: 16px/1.5 'Roboto Slab', sans-serif;
  background: #000;
}
.demo-box {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 2rem;
  font-weight: 300;
}
</style>
</head>

<body>
<main class="main">
  <section class="section">
    <div class="close-section">&times;</div>
    <div class="demo-box">Section 1</div>
  </section>
  <section class="section">
    <div class="close-section">&times;</div>
    <div class="demo-box">Section 2</div>
  </section>
  <section class="section">
    <div class="close-section">&times;</div>
    <div class="demo-box">Section 3</div>
  </section>
  <section class="section">
    <div class="close-section">&times;</div>
    <div class="demo-box">Section 4</div>
  </section>
</main>
<script>
var Boxlayout = (function () {
	  var wrapper = document.body,
	    sections = Array.from(document.querySelectorAll(".section")),
	    closeButtons = Array.from(document.querySelectorAll(".close-section")),
	    expandedClass = "is-expanded",
	    hasExpandedClass = "has-expanded-item";

	  return { init: init };

	  function init() {
	    _initEvents();
	  }

	  function _initEvents() {
	    sections.forEach(function (element) {
	      element.onclick = function () {
	        _openSection(this);
	      };
	    });
	    closeButtons.forEach(function (element) {
	      element.onclick = function (element) {
	        element.stopPropagation();
	        _closeSection(this.parentElement);
	      };
	    });
	  }

	  function _openSection(element) {
	    if (!element.classList.contains(expandedClass)) {
	      element.classList.add(expandedClass);
	      wrapper.classList.add(hasExpandedClass);
	    }
	  }

	  function _closeSection(element) {
	    if (element.classList.contains(expandedClass)) {
	      element.classList.remove(expandedClass);
	      wrapper.classList.remove(hasExpandedClass);
	    }
	  }
	})();

	Boxlayout.init();
</script>
</body>
</html>