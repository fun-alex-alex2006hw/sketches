!function n(e,t,o){function r(a,c){if(!t[a]){if(!e[a]){var u="function"==typeof require&&require;if(!c&&u)return u(a,!0);if(i)return i(a,!0);var s=new Error("Cannot find module '"+a+"'");throw s.code="MODULE_NOT_FOUND",s}var l=t[a]={exports:{}};e[a][0].call(l.exports,function(n){var t=e[a][1][n];return r(t?t:n)},l,l.exports,n,e,t,o)}return t[a].exports}for(var i="function"==typeof require&&require,a=0;a<o.length;a++)r(o[a]);return r}({1:[function(n,e,t){"use strict";e.exports={include:["baleful-virtue","endemic-meter","judicious-hackwork","pernicious-maybe","spasmodic-dresser"]}},{}],2:[function(n,e,t){"use strict";function o(n){var e=n.url,t=n.fontFamily;if(!e)throw new Error("includeFont expects an opts object that includes `url`");var o=document.createElement("link");o.href=e,o.rel="stylesheet",o.type="text/css",document.head.appendChild(o),t&&(document.body.style.fontFamily=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o},{}],3:[function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=n(2),i=o(r),a=n(1),c=o(a);(0,i.default)({url:"https://fonts.googleapis.com/css?family=Space+Mono:700"});var u=c.default.include,s=document.createElement("div");s.className="container",s.innerHTML="\n  <h2>Sketches</h2>\n  <ul>\n    "+u.map(function(n){return'<li><a href="'+n+'.html">'+n+"</a></li>"}).join("")+"\n  </ul>\n";var l=document.createElement("style");l.innerText='\n  body {\n    color: #666;\n    font-family: "Space Mono", sans-serif;\n    text-align: center;\n  }\n  .container {\n    width: 84vw;\n    max-width: 640px;\n    margin: 6vh auto;\n    opacity: 0;\n    transition: opacity 250ms ease;\n  }\n  .container.show {\n    opacity: 1;\n  }\n  h2 {\n    border-bottom: 3px dashed #555;\n    padding-bottom: 60px;\n    font-size: 64px;\n    margin-bottom: 60px;\n  }\n  li {\n    margin: 2.5rem;\n    font-size: 42px;\n  }\n  li a {\n    text-decoration: none;\n    color: #777;\n    transition: color 250ms ease-in-out;\n  }\n  li a:hover {\n    color: #6ca8dc;\n  }\n',document.head.appendChild(l),document.body.appendChild(s),setTimeout(function(){return s.classList.add("show")},500)},{1:1,2:2}]},{},[3]);