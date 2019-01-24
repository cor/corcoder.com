(function(e){function t(t){for(var o,r,s=t[0],c=t[1],l=t[2],d=0,p=[];d<s.length;d++)r=s[d],a[r]&&p.push(a[r][0]),a[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);u&&u(t);while(p.length)p.shift()();return n.push.apply(n,l||[]),i()}function i(){for(var e,t=0;t<n.length;t++){for(var i=n[t],o=!0,s=1;s<i.length;s++){var c=i[s];0!==a[c]&&(o=!1)}o&&(n.splice(t--,1),e=r(r.s=i[0]))}return e}var o={},a={app:0},n=[];function r(t){if(o[t])return o[t].exports;var i=o[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=o,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(i,o,function(t){return e[t]}.bind(null,o));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;n.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"0210":function(e,t,i){},"2f4d":function(e,t,i){"use strict";var o=i("e832"),a=i.n(o);a.a},"4c20":function(e,t,i){},"56d7":function(e,t,i){"use strict";i.r(t);i("cadf"),i("551c"),i("097d");var o=i("2b0e"),a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("app-header"),i("app-content",[i("router-view")],1),i("app-footer")],1)},n=[],r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"app-header"},[i("h1",[e._v("CorCoder")]),i("span",{staticClass:"subtitle"},[e._v("Developer")]),i("navigation")],1)},s=[],c=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"navigation"},[i("router-link",{attrs:{to:"/"}},[e._v("about")]),i("router-link",{attrs:{to:"/projects"}},[e._v("projects")]),i("router-link",{attrs:{to:"/contact"}},[e._v("contact")])],1)},l=[],u={},d=u,p=(i("2f4d"),i("2877")),h=Object(p["a"])(d,c,l,!1,null,"8fb244a6",null);h.options.__file="Navigation.vue";var g=h.exports,m={name:"AppHeader",components:{Navigation:g}},b=m,f=(i("ac99"),Object(p["a"])(b,r,s,!1,null,"1fb33335",null));f.options.__file="AppHeader.vue";var v=f.exports,w=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"app-content"},[e._t("default")],2)},y=[],S={},j=S,P=(i("d026"),Object(p["a"])(j,w,y,!1,null,"398d0446",null));P.options.__file="AppContent.vue";var _=P.exports,A=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"app-footer"},[i("p",[i("i"),e._v("© "+e._s(e.year)+" Cor Pruijs")])])])},T=[],k={name:"AppFooter",data:function(){return{year:(new Date).getFullYear()}}},I=k,C=(i("d8cd"),Object(p["a"])(I,A,T,!1,null,"726377f2",null));C.options.__file="AppFooter.vue";var x=C.exports,O={name:"App",components:{AppHeader:v,AppContent:_,AppFooter:x}},J=O,H=(i("5c0b"),Object(p["a"])(J,a,n,!1,null,null,null));H.options.__file="App.vue";var G=H.exports,M=i("8c4f"),D=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("text-page",[i("h2",[e._v("About")]),i("p",[e._v("I'm a 19 year old developer who focuses mainly on building web SPA's using Vue.js, but likes doing (almost) every kind of programming.")]),i("p",[e._v("My interest in programming started when I was 11 years old. My dad thaught me how write basic command line programs in C, and since then I've done lots of programming in multiple languages, made a lot of projects, and worked professionally as a web developer and designer for a few clients.")])])},U=[],L=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"text-page"},[i("div",{staticClass:"text-page-content"},[e._t("default")],2)])},W=[],z=(i("8bfe"),{}),F=Object(p["a"])(z,L,W,!1,null,"597117bb",null);F.options.__file="TextPage.vue";var E=F.exports,V={name:"Home",components:{TextPage:E}},B=V,$=Object(p["a"])(B,D,U,!1,null,null,null);$.options.__file="Home.vue";var N=$.exports,R=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("text-page",[i("h2",[e._v("Projects")]),i("p",[e._v("These are all projects I worked on. Some of them are personal, others were made for my study, and others are professional projects. The older the project, the worse the code is, but each project contributed to my programming experience and learning process.")]),i("p",[i("i",[e._v("This page is still under construction, and will be updated shortly.")])]),e._l(e.projects,function(e){return i("project-info",{key:e.title,attrs:{project:e}})})],2)},K=[],Q=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"project-info"},[i("h3",[e._v(e._s(e.project.title))]),i("p",{staticClass:"project-date"},[e._v(e._s(e.project.date))]),i("p",{staticClass:"project-description"},[e._v(e._s(e.project.description)+" ")]),e._l(e.project.technologies,function(t){return i("div",{key:t,staticClass:"technology-badge"},[e._v(e._s(t))])}),i("p",[i("i",[e._v(e._s(e.contributors))])]),e.projectLink?i("p",{staticClass:"project-link"},[i("a",{attrs:{href:e.projectLink}},[e._v("View on GitHub")])]):e._e()],2)},X=[],Y={props:["project"],computed:{projectLink:function(){return this.project.githubPage?"https://github.com/".concat(this.project.githubPage):null},contributors:function(){if(this.project.contributors){for(var e="Made in cooperation with ",t=this.project.contributors.length,i=0;i<t;i++){var o=this.project.contributors[i];e+=o,i+1<t&&(e+=i+2===t?" and ":", ")}return e+=".",e}return null}}},q=Y,Z=(i("9eb0"),Object(p["a"])(q,Q,X,!1,null,"cb6c3aea",null));Z.options.__file="ProjectInfo.vue";var ee=Z.exports,te=i("d4bf"),ie={name:"About",components:{TextPage:E,ProjectInfo:ee},data:function(){return{projects:te}}},oe=ie,ae=(i("7b10"),Object(p["a"])(oe,R,K,!1,null,"65e48346",null));ae.options.__file="Projects.vue";var ne=ae.exports,re=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("text-page",[i("h2",[e._v("Contact")]),i("p",[e._v("Feel free to contact me if you would like to work with me, or if you have any questions.")]),i("p",[e._v("Email me at "),i("a",{attrs:{href:"mailto:cor@pruijs.nl"}},[e._v("cor@pruijs.nl")])])])},se=[],ce={name:"Contact",components:{TextPage:E}},le=ce,ue=Object(p["a"])(le,re,se,!1,null,null,null);ue.options.__file="Contact.vue";var de=ue.exports;o["a"].use(M["a"]);var pe=new M["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:N},{path:"/projects",name:"projects",component:ne},{path:"/contact",name:"contact",component:de}]}),he=i("2f62");o["a"].use(he["a"]);var ge=new he["a"].Store({state:{},mutations:{},actions:{}});o["a"].config.productionTip=!1,new o["a"]({router:pe,store:ge,render:function(e){return e(G)}}).$mount("#app")},"5bf8":function(e,t,i){},"5c0b":function(e,t,i){"use strict";var o=i("5e27"),a=i.n(o);a.a},"5e27":function(e,t,i){},"758d":function(e,t,i){},"7b10":function(e,t,i){"use strict";var o=i("7c01"),a=i.n(o);a.a},"7c01":function(e,t,i){},"8bfe":function(e,t,i){"use strict";var o=i("5bf8"),a=i.n(o);a.a},"9eb0":function(e,t,i){"use strict";var o=i("758d"),a=i.n(o);a.a},ac99:function(e,t,i){"use strict";var o=i("4c20"),a=i.n(o);a.a},b1e0:function(e,t,i){},d026:function(e,t,i){"use strict";var o=i("0210"),a=i.n(o);a.a},d4bf:function(e){e.exports=[{title:"Unboxing Solutions",date:"2017-2018",description:"I worked on an unreleased project for Unboxing Solutions. In this project I fulfilled the role of designing and building an entire Vue.js SPA, which included interacting a lot with a RESTful API. I worked closely together with the lead back end developer, and had meaningful discussions on the API design and it's interaction with the client side aplication. We switched between a lot of different technologies, and I learned a lot from the process of building this application. I especially learned a lot about designing a great front-end web SPA architecture, optimizing user experiences and interacting with an API in a transparent, real time way. Working for Unboxing Solutions has by far been my most valuable programming experience.",technologies:["Web","Vue.js","Vuex","Vue Router","vue-cli","axios","API","SCSS","CSS","JavaScript","WebPack","Design","HTML","HTTPS"]},{title:"One Hour Game Jam 164",date:"June 2018",description:'My third One Hour Game Jam, which is a development competition in which you need to create an entire game in one hour. The theme was "your favorite game but the most simplest possible", so I made a mini version of Valve\'s Portal.',technologies:["Game","Unity","C#"],githubPage:"cor/1hgj-164"},{title:"One Hour Game Jam 163",date:"June 2018",description:'My secondth One Hour Game Jam, which is a development competition in which you need to create an entire game in one hour. The theme was "Unexpected", so I made a 2D game in which you need to click as many randomly falling objects as possiblie within one minute, with an unexpected surprise ending.',technologies:["Game","Unity","C#"],githubPage:"cor/1hgj-163"},{title:"generhizo",date:"April 2018",description:"A dynamic iOS rhizomatic art piece that uses an iPad's gyroscope to create abstract rhizomatic shapes. It includes a lot of fun sliders and options to play with.",technologies:["iOS","Swift","Art"],githubPage:"cor/generhizo"},{title:"PWSlayer",date:"October 2016 - February 2017",description:"A rouge like game experiment made for a school project, which includes a dungeon generating system and an inventory/item management system. In this project I worked with a sound FX artist, which was a great experience.",technologies:["Game","Unity","C#","Art","Sound FX"],githubPage:"cor/pwslayer",contributors:["Stefan Boneschanscher","Duncan de Heusden"]},{title:"mariandijkhuizen.com",date:"2016",description:"A promotional site I made for Marian Dijkhuizen, a german mezzosoprano. This website is designed together with my client to look exactly like the client wants. It includes an about page, a lot of audio samples (powered by a custom built audio player and a customized Vimeo player), a photo gallery powered by PhotoSwipe and three blog-like pages that the client can edit using markdown files.",technologies:["Web","HTML","CSS","SCSS","JavaScript","babel","gulp","jekyll","localization","Markdown","GitHub Pages"]},{title:"studiokwastenzo.nl",date:"December 2016",description:"An information website about art workshops/courses. This website is designed together with my client to look exactly like the client wants. It is a simple text based static website, with a responsive design and some fun over the top animations.",technologies:["Web","JavaScript","gulp","Babel","CSS","SCSS","GitHub Pages"]},{title:"Woording",date:"2015-2016",description:"Woording is a service that lets you study languages. It was a really big school project and it included an API, a web SPA (which was first written in AngularJS, and later rewritten in Vue.js), an iOS app and an Android app. We even dockerized our application. I helped building every part, except for the Android app. Creating this project was an incredibly valuable experience because I learned a lot about developing applications and working together with a team. Even though I really cringe when I look back at how bad some of the code was, it was still one of my most valuable programming experiences.",technologies:["Python","Flask","API","HTTP","Web","JavaScript","Vue.js","Vuex","Vue Router","CSS","SCSS","Docker","bash","nginx","iOS","Swift"],githubPage:"woording",contributors:["Philip de Bruin","Leon Grasmeijer"]},{title:"Redacted artist",date:"2016",description:"I worked professionally for an artist and made a nice responsive portfolio website, which included a back end painting management system based on bash scripts and Imagemagick. Unfortunately this website could not be launched due to personal circumstances in the artist's life, which is why it was never published.",technologies:["Web","JavaScript","gulp","Babel","HTML","CSS","SCSS","PhotoSwipe","bash","GitHub Pages"]},{title:"tree-generator",date:"June 2016",description:"An iOS abstract tree generator that I made as an art project for school.",technologies:["iOS","Swift","Art"],githubPage:"cor/tree-generator"},{title:"blopper",date:"May 2016",description:'A tiny iOS app used for cheating at the real life "blop game".',technologies:["iOS","Swift"],githubPage:"cor/blopper"},{title:"altitrial",date:"April 2016",description:"A game prototype in which you drive in a car, and fly from building to building like the scene in Fast and the Furious 7. The game includes a script that automatically generates skyscrapers based on a data model that is editable within the Unity 3D editor, and editting the model shows the resulting 3D object instantly.",technologies:["Game","Unity","C#","Blender"],githubPage:"cor/altitrial",contributors:["Niels van Harten","Leon Grasmeijer"]},{title:"Ludum Dare 34",date:"December 2015",description:"LD34 is the third game development contest I entered. I made a top down space shooter with pixel art in Unity3D. Due to lack of time I did not submit my creation, as I could not finish the game.",technologies:["Game","Unity","Art"],githubPage:"cor/LD34"},{title:"php-school-assignments",date:"December 2015",description:"Some super simple PHP exercises I had to do for school.",technologies:["PHP"],githubPage:"cor/php-school-assignments"},{title:"linkline.nl",date:"July-November 2015",description:"An administrative buisness info site. This website has a responsive design that is designed together with my client to look exactly like the client wants.",technologies:["Web","HTML","CSS","SCSS","JavaScript","gulp","Babel","GitHub Pages"]},{title:"One Hour Game Jam 19",date:"August 2015",description:'My first One Hour Game Jam, which is a development competition in which you need to create an entire game in one hour. The theme was "Rock Simulator", so I made a 2D survival game in which you walk/jump around a tiny planet and avoid getting hit by incomming meteors.',technologies:["Game","Unity"],githubPage:"cor/RockSimulator"},{title:"Ludum Dare 33",date:"August 2015",description:'LD33 is the secondth game development contest I entered. The objective of this contentest was to make a game in 24 hours based on the theme "You are the Monster". We made a top down monster game in which you need to defend buildings by eating incomming attackers. Each level is randomly generated, and gets more difficult through a few algorithms. We used a Travis CI pipeline to automatically generate game builds in order to improve development efficiency and collaboration.',technologies:["Game","Unity","Art","Sound FX","AI","CI","Travis CI"],contributors:["Jurriaan Pruijs"]},{title:"corinehazeleger.com",date:"May-April 2015",description:"This is my first professional web development project. This website has a responsive design that is designed together with my client to look exactly like the client wants. It's an art portfolio site, which includes a PhotoSwipe powered gallery.",technologies:["Web","HTML","CSS","JavaScript","PhotoSwipe","GitHub Pages"]},{title:"ThrowBot",date:"July 2015",description:"A Unity based 3D missle launcher with AI that teaches itself to hit a target.",githubPage:"cor/ThrowBot",technologies:["Game","Unity","AI"]},{title:"CandyMachine",date:"May-June 2015",description:"A Java Swing candy machine UI demo made for a school project.",githubPage:"cor/CandyMachine",technologies:["Java","Swing"]},{title:"ClockJS",date:"May 2015",description:"A JavaScript canvas based real time customizable clock drawing program I made for a school art project. (including a version based on Pink Floyd's 'Time')",githubPage:"cor/ClockJS",technologies:["Web","JavaScript","canvas"]},{title:"CannibalFish",date:"April 2015",description:"A Unity prototype clone of the famous 'Ugh' game in which you need to eat other fishes in order to survive.",githubPage:"cor/CannibalFish",technologies:["Game","Unity","C#","Pixelart"]},{title:"Ludum Dare 32",date:"April 2015",description:'LD32 is the first game development contest I entered. The objective of this contentest was to make a game in 24 hours based on the theme "An Unconventional Weapon". I made a side scrolling adventure game in which you have a mysterious pizza blasting gun named Project Pizza.',githubPage:"cor/LD32",technologies:["Game","Unity","C#","Pixelart"]},{title:"grammatical-gender-trainer",date:"February 2015",description:"An iOS app used for studying grammatical genders (such as der, die and das in German). Uses the API of wrts, a Dutch word studying site, to import word lists.",githubPage:"cor/grammatical-gender-trainer",technologies:["iOS","Swift","AutoLayout","HTTP","API"],contributors:["Jurriaan Pruijs"]},{title:"PeasantWars",date:"December 2014 - January 2015",description:"A top down shooter prototype written in Java",githubPage:"cor/PeasantWars",technologies:["Game","Java"],contributors:["Leon Grasmeijer"]},{title:"BinaryConverter",date:"November 2014",description:"An iOS app that converts numbers in binary, octal, decimal and hexadecimal numeral systems.",technologies:["iOS","Swift"]},{title:"get-out",date:"October-November 2014",description:"A top down shooter written in Swift using SpriteKit",githubPage:"cor/get-out",technologies:["Game","Swift","iOS","SpriteKit"]},{title:"swong",date:"July-October 2014",description:"Swift + Pong = Swong, an iOS game made with Swift and Apple's SpriteKit framework. Has local multiplayer, lots of customizability options and nice animations. Also includes a promotion website that I made for a scool project. The website has a JavaScript canvas based version of the game running in the background.",technologies:["Game","iOS","Swift","SpriteKit","Art","Web","JavaScript","canvas","CSS"],githubPage:"cor/swong"},{title:"supercalc",date:"July 2014",description:"A simple iOS calculator app written in Swift as an exercise of Stanford's iTunes U course on iOS development.",githubPage:"cor/supercalc",technologies:["Swift","iOS"]},{title:"TicTacoToeJS",date:"April-August 2014",description:"A web version of my TicTacoToe game written in JavaScript/jQuery. Includes lots of animations",githubPage:"cor/TicTacoToeJS",technologies:["JavaScript","jQuery","CSS","HTML"]},{title:"Buttonmasher",date:"March-August 2014",description:"A web based mastermind style code cracking game in which you need to find the SHA-512 encrypted code by bruteforce/guessing it.",githubPage:"cor/Buttonmasher",technologies:["JavaScript","jQuery","CSS","HTML","Encryption"]},{title:"TicTacoToe-swift",date:"July 2014",description:"An iOS version of my TicTacoToe game written in Swift",githubPage:"cor/TicTacoToe-swift",technologies:["Swift","iOS"]},{title:"Ultimedia",date:"May-June 2014",description:"Ultimedia is a static news site I made for a school project",githubPage:"cor/ultimedia",technologies:["HTML","CSS"]},{title:"swift-canvas",date:"June 2014",description:"A small drawing program written in Swift playgrounds that uses emoji to render simple geometric drawings.",githubPage:"cor/swift-canvas",technologies:["iOS","Swift"]},{title:"darrep.com",date:"June 2014",description:"An old and outdated site displaying a few apps.",technologies:["Web","HTML","CSS","JavaScript"]},{title:"PirateGame",date:"May 2014",description:"A super simple pirate styled iOS game written in Objective-C.",githubPage:"cor/PirateGame",technologies:["Game","iOS","Objective-C"]},{title:"TicTacoToe",date:"February 2014",description:"This is my oldest project on GitHub, and thus the first project I made using a source control system. It's a console based Tic Tac Toe game written in Java.",githubPage:"cor/tictacotoe",technologies:["Game","Java"]}]},d8cd:function(e,t,i){"use strict";var o=i("b1e0"),a=i.n(o);a.a},e832:function(e,t,i){}});
//# sourceMappingURL=app.ebb5737f.js.map