// ==UserScript==
// @name 			cs032 NiceSite
// @namespace		http://eliasmartinezcohen.com/
// @include     	http://cs.brown.edu/courses/cs032/*
//
// @run-at document-start
// 
// ==/UserScript==


//load css
var head = document.getElementsByTagName('head')[0],
link = document.createElement('link');
link.type = 'text/css';
link.rel = 'stylesheet';
link.href = "https://raw.github.com/eliath/cs032_NiceSite/master/nice.css";
head.appendChild(link);


/* Delete spongebob shit */
console.log("removing banner...");
var _banner = document.getElementById("banner-container");
_banner.parentNode.removeChild(_banner); //delete pic banner
console.log("done rm banner");
