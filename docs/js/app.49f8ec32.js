(function(e){function t(t){for(var n,r,s=t[0],l=t[1],c=t[2],p=0,d=[];p<s.length;p++)r=s[p],o[r]&&d.push(o[r][0]),o[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(d.length)d.shift()();return a.push.apply(a,c||[]),i()}function i(){for(var e,t=0;t<a.length;t++){for(var i=a[t],n=!0,s=1;s<i.length;s++){var l=i[s];0!==o[l]&&(n=!1)}n&&(a.splice(t--,1),e=r(r.s=i[0]))}return e}var n={},o={app:0},a=[];function r(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=n,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(i,n,function(t){return e[t]}.bind(null,n));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;a.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"0210":function(e,t,i){},"054a":function(e,t,i){"use strict";var n=i("4047"),o=i.n(n);o.a},"339a":function(e,t,i){},"3b49":function(e,t,i){"use strict";var n=i("9251"),o=i.n(n);o.a},4047:function(e,t,i){},"545c":function(e,t,i){},"56d7":function(e,t,i){"use strict";i.r(t);i("cadf"),i("551c"),i("097d");var n=i("2b0e"),o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("app-header"),i("app-content",[i("router-view")],1),i("app-footer")],1)},a=[],r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"app-header"},[i("router-link",{attrs:{to:"/"}},[i("h1",[e._v("CorCoder")])]),i("span",{staticClass:"subtitle"},[e._v("Developer")]),i("navigation")],1)},s=[],l=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"navigation"},[i("router-link",{attrs:{to:"/"}},[e._v("about")]),i("router-link",{attrs:{to:"/projects"}},[e._v("projects")]),i("router-link",{attrs:{to:"/contact"}},[e._v("contact")])],1)},c=[],u=(i("a5df"),i("2877")),p={},d=Object(u["a"])(p,l,c,!1,null,"08988d1b",null);d.options.__file="Navigation.vue";var h=d.exports,g={name:"AppHeader",components:{Navigation:h}},m=g,f=(i("826e"),Object(u["a"])(m,r,s,!1,null,"ee6bd2b2",null));f.options.__file="AppHeader.vue";var b=f.exports,y=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"app-content"},[e._t("default")],2)},v=[],w={},S=w,P=(i("d026"),Object(u["a"])(S,y,v,!1,null,"398d0446",null));P.options.__file="AppContent.vue";var k=P.exports,j=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"app-footer"},[e._v("© "+e._s(e.year)+" Cor Pruijs")])},_=[],A={name:"AppFooter",data:function(){return{year:(new Date).getFullYear()}}},T=A,x=(i("3b49"),Object(u["a"])(T,j,_,!1,null,"af9a707a",null));x.options.__file="AppFooter.vue";var I=x.exports,C={name:"App",components:{AppHeader:b,AppContent:k,AppFooter:I}},O=C,J=(i("5c0b"),Object(u["a"])(O,o,a,!1,null,null,null));J.options.__file="App.vue";var H=J.exports,L=i("8c4f"),G=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("text-page",[i("h2",[e._v("About")]),i("p",[e._v("I'm a 19 year old developer who is specialised in designing and building web applications using "),i("i",[e._v("Vue.js")]),e._v(", but likes doing (almost) every kind of programming. I enjoy working on creative solutions to complex problems, learning about new technologies and working together with a great team.")]),i("p",[e._v("My interest in programming started when I was 11 years old. My dad taught me how to write basic command line programs in C, and since then I've worked on a lot of different programming projects, using numerous languages, frameworks and technologies. I have worked professionally as a front end web developer and designer for multiple clients, and continue to do so. I also occasionally deliver tech support to one person businesses, friends and my family.")]),i("p",[e._v("While working on a lot of programming projects, I also managed to get my high school degree in 2018. I did VWO NT with extra "),i("i",[e._v("Mathematics, Computer Science")]),e._v(" and "),i("i",[e._v("Art")]),e._v(" as my chosen subjects. I graduated with a 9 for "),i("i",[e._v("Mathematics B, Mathematics D")]),e._v(" and "),i("i",[e._v("Computer Science")]),e._v(", and an 8 for "),i("i",[e._v("Physics")]),e._v(" and "),i("i",[e._v("English.")])]),i("p",[e._v("I'm currently working at SciSports as a software engineer, and I plan on studying "),i("i",[e._v("Computer Science and Game Development")]),e._v(" at the Utrecht University later this year.")])])},M=[],D=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"text-page"},[i("div",{staticClass:"text-page-content"},[e._t("default")],2)])},W=[],U=(i("8bfe"),{}),z=Object(u["a"])(U,D,W,!1,null,"597117bb",null);z.options.__file="TextPage.vue";var F=z.exports,V={name:"Home",components:{TextPage:F}},E=V,B=Object(u["a"])(E,G,M,!1,null,null,null);B.options.__file="Home.vue";var $=B.exports,N=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("text-page",[i("h2",[e._v("Projects")]),i("p",[e._v("These are (almost) all projects I worked on. Some of them are personal, others were made for my study, and others are professional projects. The older the project, the worse the code is, but each project contributed to my programming experience and learning process.")]),i("div",{staticClass:"filters"},[i("div",{staticClass:"filters-header"},[i("button",{class:{"toggle-filters-button":!0,"filters-are-shown":e.showFilters},on:{click:function(t){e.showFilters=!e.showFilters}}},[e._v("\n              Filter projects\n      ")]),i("span",{directives:[{name:"show",rawName:"v-show",value:e.filteringIsEnabled,expression:"filteringIsEnabled"}],staticClass:"filter-status"},[e._v(e._s(e.filterStatus))])]),i("div",{directives:[{name:"show",rawName:"v-show",value:e.showFilters,expression:"showFilters"}],staticClass:"filter-container"},[i("div",{staticClass:"filter"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.filters.professional.enabled,expression:"filters.professional.enabled"}],attrs:{type:"checkbox",id:"filters-professional-checkbox"},domProps:{checked:Array.isArray(e.filters.professional.enabled)?e._i(e.filters.professional.enabled,null)>-1:e.filters.professional.enabled},on:{change:function(t){var i=e.filters.professional.enabled,n=t.target,o=!!n.checked;if(Array.isArray(i)){var a=null,r=e._i(i,a);n.checked?r<0&&e.$set(e.filters.professional,"enabled",i.concat([a])):r>-1&&e.$set(e.filters.professional,"enabled",i.slice(0,r).concat(i.slice(r+1)))}else e.$set(e.filters.professional,"enabled",o)}}}),i("label",{attrs:{for:"filters-professional-checkbox"}},[e._v("Only show professional projects")])]),i("div",{staticClass:"filter"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.filters.openSource.enabled,expression:"filters.openSource.enabled"}],attrs:{type:"checkbox",id:"filters-open-source-checkbox"},domProps:{checked:Array.isArray(e.filters.openSource.enabled)?e._i(e.filters.openSource.enabled,null)>-1:e.filters.openSource.enabled},on:{change:function(t){var i=e.filters.openSource.enabled,n=t.target,o=!!n.checked;if(Array.isArray(i)){var a=null,r=e._i(i,a);n.checked?r<0&&e.$set(e.filters.openSource,"enabled",i.concat([a])):r>-1&&e.$set(e.filters.openSource,"enabled",i.slice(0,r).concat(i.slice(r+1)))}else e.$set(e.filters.openSource,"enabled",o)}}}),i("label",{attrs:{for:"filters-open-source-checkbox"}},[e._v("Only show open source projects")])])])]),i("div",{staticClass:"projects"},e._l(e.filteredProjects,function(e){return i("project-info",{key:e.title,attrs:{project:e}})}),1)])},R=[],Q=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"project-info"},[i("h3",[e._v(e._s(e.project.title))]),i("p",{staticClass:"project-date"},[e._v(e._s(e.project.type)+", "+e._s(e.project.date))]),i("p",{staticClass:"project-description"},[e._v(e._s(e.project.description)+" ")]),e._l(e.project.technologies,function(t){return i("div",{key:t,staticClass:"technology-badge"},[e._v(e._s(t))])}),i("p",{staticClass:"contributors-line"},[i("i",[e._v(e._s(e.contributors))])]),e.projectLink?i("p",{staticClass:"project-link"},[i("a",{attrs:{href:e.projectLink}},[e._v("View "+e._s(e.project.githubPage)+" on GitHub")])]):e._e(),e._l(e.project.externalLinks,function(t){return i("p",{key:t.title,staticClass:"external-link"},[i("a",{attrs:{href:t.link}},[e._v(e._s(t.title))])])})],2)},K=[],X={props:["project"],computed:{projectLink:function(){return this.project.githubPage?"https://github.com/".concat(this.project.githubPage):null},contributors:function(){if(this.project.contributors){for(var e="Made in cooperation with ",t=this.project.contributors.length,i=0;i<t;i++){var n=this.project.contributors[i];e+=n,i+1<t&&(e+=i+2===t?" and ":", ")}return e+=".",e}return null}}},Y=X,q=(i("f0dd"),Object(u["a"])(Y,Q,K,!1,null,"7d5e58ec",null));q.options.__file="ProjectInfo.vue";var Z=q.exports,ee=i("d4bf"),te={name:"Projects",components:{TextPage:F,ProjectInfo:Z},data:function(){return{projects:ee,showFilters:!1,filters:{professional:{enabled:!1,filter:function(e){return"Professional"===e.type}},openSource:{enabled:!1,filter:function(e){return e.githubPage}}}}},computed:{filteredProjects:function(){function e(e){return e.enabled?function(t){return e.filter(t)}:function(e){return!0}}return this.projects.filter(e(this.filters.professional)).filter(e(this.filters.openSource))},filteringIsEnabled:function(){return this.filters.professional.enabled||this.filters.openSource.enabled},filterStatus:function(){return"".concat(this.filteredProjects.length,"/").concat(this.projects.length," are shown")}}},ie=te,ne=(i("054a"),Object(u["a"])(ie,N,R,!1,null,null,null));ne.options.__file="Projects.vue";var oe=ne.exports,ae=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("text-page",[i("h2",[e._v("Contact")]),i("p",[e._v("Feel free to contact me if you would like to work with me, or if you have any questions.")]),i("p",[e._v("Email me at "),i("a",{attrs:{href:"mailto:cor@pruijs.nl"}},[e._v("cor@pruijs.nl")])])])},re=[],se={name:"Contact",components:{TextPage:F}},le=se,ce=Object(u["a"])(le,ae,re,!1,null,null,null);ce.options.__file="Contact.vue";var ue=ce.exports;n["a"].use(L["a"]);var pe=new L["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:$},{path:"/projects",name:"projects",component:oe},{path:"/contact",name:"contact",component:ue}]}),de=i("2f62");n["a"].use(de["a"]);var he=new de["a"].Store({state:{},mutations:{},actions:{}});n["a"].config.productionTip=!1,new n["a"]({router:pe,store:he,render:function(e){return e(H)}}).$mount("#app")},"5bf8":function(e,t,i){},"5c0b":function(e,t,i){"use strict";var n=i("5e27"),o=i.n(n);o.a},"5e27":function(e,t,i){},7702:function(e,t,i){},"826e":function(e,t,i){"use strict";var n=i("7702"),o=i.n(n);o.a},"8bfe":function(e,t,i){"use strict";var n=i("5bf8"),o=i.n(n);o.a},9251:function(e,t,i){},a5df:function(e,t,i){"use strict";var n=i("545c"),o=i.n(n);o.a},d026:function(e,t,i){"use strict";var n=i("0210"),o=i.n(n);o.a},d4bf:function(e){e.exports=[{title:"SciSports",type:"Professional",date:"March 2019 - Now",description:"I'm currently working at SciSports as a software engineer.",technologies:["Web","Vue.js","Vue Router","vue-cli","SCSS","CSS","JavaScript","WebPack","Babel","Design","HTML","Affinity Designer","JIRA"],externalLinks:[{title:"SciSports about page",link:"https://www.scisports.com/about-us/"}]},{title:"This website",type:"Professional",date:"January 2019",description:"This site is used to showcase who I am and what I've worked on. I generated this project list using a Vue component that parses a projects.json file. This allows users to filter projects and ensures consistent styling.",technologies:["Web","Vue.js","Vue Router","vue-cli","SCSS","CSS","JavaScript","WebPack","Babel","Design","HTML","Affinity Designer","GitHub Pages"],githubPage:"cor/corcoder.com"},{title:"OverTheWire Natas",type:"Personal",date:"January 2019",description:"The OverTheWire wargames help you learn and practice security concepts in the form of hacking games. I'm currently halfway through the Natas wargame, which teaches you serverside web-security by exploiting security holes in websites.",technologies:["bash","Linux","HTTP","PHP","SQL","Encryption","Security"],externalLinks:[{title:"OverTheWire Natas",link:"https://overthewire.org/wargames/natas/"}]},{title:"OverTheWire Bandit",type:"Personal",date:"January 2019",description:"The OverTheWire wargames help you learn and practice security concepts in the form of hacking games. I finished the entire Bandit wargame, and it was a really fun and valuable learning experience!",technologies:["bash","Linux","SSH","Encryption","Security"],externalLinks:[{title:"OverTheWire Bandit",link:"https://overthewire.org/wargames/bandit/"}]},{title:"Unboxing Solutions",type:"Professional",date:"2017-2018",description:"I worked on an unreleased project for Unboxing Solutions. In this project I fulfilled the role of designing and building an entire Vue.js SPA, which included interacting a lot with a RESTful API. I worked closely together with the lead back end developer, and had meaningful discussions on the API design and it's interaction with the client side application. We switched between a lot of different technologies, and I learned a lot from the process of building this application. I especially learned a lot about designing a great front-end web SPA architecture, optimizing user experiences and interacting with an API in a transparent, real time way. Working for Unboxing Solutions has by far been my most valuable programming experience.",technologies:["Web","Vue.js","Vuex","Vue Router","vue-cli","axios","API","SCSS","CSS","JavaScript","WebPack","Babel","Design","HTML","HTTPS","Affinity Designer"],externalLinks:[{title:"Unboxing Solutions",link:"http://unboxingsolutions.nl/"}]},{title:"One Hour Game Jam 164",type:"Personal",date:"June 2018",description:'My third One Hour Game Jam, which is a development competition in which you need to create an entire game in one hour. The theme was "your favorite game but the most simplest possible", so I made a tiny version of Valve\'s Portal.',technologies:["Game","Unity","C#","Art","Sketch"],githubPage:"cor/1hgj-164"},{title:"One Hour Game Jam 163",type:"Personal",date:"June 2018",description:'My second One Hour Game Jam, which is a development competition in which you need to create an entire game in one hour. The theme was "Unexpected", so I made a 2D game in which you need to click as many randomly falling objects as possible within one minute, with an unexpected surprise ending.',technologies:["Game","Unity","C#"],githubPage:"cor/1hgj-163"},{title:"generhizo",type:"Study",date:"April 2018",description:"A dynamic iOS rhizomatic art piece that uses an iPad's gyroscope to create abstract rhizomatic shapes. It includes a lot of fun sliders and options to play with.",technologies:["iOS","Swift","Art"],githubPage:"cor/generhizo"},{title:"PWSlayer",type:"Study",date:"October 2016 - February 2017",description:"A rouge like game experiment made for a school project, which includes a dungeon generating system and an inventory/item management system. In this project I worked with a sound FX artist, which was a great experience.",technologies:["Game","Unity","C#","Art","Sound FX"],githubPage:"cor/pwslayer",contributors:["Stefan Boneschanscher","Duncan de Heusden"]},{title:"mariandijkhuizen.com",type:"Professional",date:"2016",description:"A promotional site I made for Marian Dijkhuizen, a german mezzosoprano. This website is designed together with my client to look exactly like the client wants. It includes an about page, a lot of audio samples (powered by a custom built audio player and a customized Vimeo player), a photo gallery powered by PhotoSwipe and three blog-like pages that the client can edit using markdown files.",technologies:["Web","HTML","CSS","SCSS","JavaScript","babel","gulp","jekyll","localization","Markdown","GitHub Pages","Sketch"],externalLinks:[{title:"Visit mariandijkhuizen.com",link:"http://mariandijkhuizen.com"}]},{title:"studiokwastenzo.nl",type:"Professional",date:"December 2016",description:"An information website about art workshops/courses. This website is designed together with my client to look exactly like the client wants. It is a simple text based static website, with a responsive design and some fun over the top animations.",technologies:["Web","JavaScript","gulp","Babel","CSS","SCSS","GitHub Pages","Sketch"],externalLinks:[{title:"Visit studiokwastenzo.nl",link:"http://studiokwastenzo.nl"}]},{title:"Woording",type:"Study",date:"2015-2016",description:"Woording is a service that lets you study languages. It was a really big school project and it included an API, a web SPA (which was first written in AngularJS, and later rewritten in Vue.js), an iOS app and an Android app. We even dockerized our application. I helped building every part, except for the Android app. Creating this project was an incredibly valuable experience because I learned a lot about developing applications and working together with a team. Even though I really cringe when I look back at how bad some of the code was, it was still one of my most valuable programming experiences.",technologies:["Python","Flask","API","HTTP","Web","JavaScript","Vue.js","Vuex","Vue Router","CSS","SCSS","Docker","SQL","bash","nginx","iOS","Swift","Sketch"],githubPage:"woording",contributors:["Philip de Bruin","Leon Grasmeijer"]},{title:"Redacted artist",type:"Professional",date:"2016",description:"I worked professionally for an artist and made a nice responsive portfolio website, which included a back end painting management system based on bash scripts and Imagemagick. Unfortunately this website could not be launched due to personal circumstances in the artist's life, which is why it was never published.",technologies:["Web","JavaScript","gulp","Babel","HTML","CSS","SCSS","PhotoSwipe","bash","GitHub Pages"]},{title:"tree-generator",type:"Study",date:"June 2016",description:"An iOS abstract tree generator that I made as an art project for school.",technologies:["iOS","Swift","Art"],githubPage:"cor/tree-generator"},{title:"blopper",type:"Personal",date:"May 2016",description:'A tiny iOS app used for cheating at the real life "blop game".',technologies:["iOS","Swift"],githubPage:"cor/blopper"},{title:"altitrial",type:"Study",date:"April 2016",description:"A game prototype in which you drive in a car, and fly from building to building like the scene in Fast and the Furious 7. The game includes a script that automatically generates skyscrapers based on a data model that is editable within the Unity 3D editor, and editing the model shows the resulting 3D object instantly.",technologies:["Game","Unity","C#","Blender"],githubPage:"cor/altitrial",contributors:["Niels van Harten","Leon Grasmeijer"]},{title:"Ludum Dare 34",type:"Personal",date:"December 2015",description:"LD34 is the third game development contest I entered. I made a top down space shooter with pixel art in Unity3D. Due to lack of time I did not submit my creation, as I could not finish the game.",technologies:["Game","Unity","Art"],githubPage:"cor/LD34"},{title:"php-school-assignments",type:"Study",date:"December 2015",description:"Some super simple PHP exercises I had to do for school.",technologies:["PHP"],githubPage:"cor/php-school-assignments"},{title:"linkline.nl",type:"Professional",date:"July-November 2015",description:"An administrative business info site. This website has a responsive design that is designed together with my client to look exactly like the client wants.",technologies:["Web","HTML","CSS","SCSS","JavaScript","gulp","Babel","GitHub Pages"],externalLinks:[{title:"Visit linkline.nl",link:"http://linkline.nl"}]},{title:"One Hour Game Jam 19",type:"Personal",date:"August 2015",description:'My first One Hour Game Jam, which is a development competition in which you need to create an entire game in one hour. The theme was "Rock Simulator", so I made a 2D survival game in which you walk/jump around a tiny planet and avoid getting hit by incoming meteors.',technologies:["Game","Unity"],githubPage:"cor/RockSimulator"},{title:"Ludum Dare 33",type:"Personal",date:"August 2015",description:'LD33 is the second game development contest I entered. The objective of this contest was to make a game in 24 hours based on the theme "You are the Monster". We made a top down monster game in which you need to defend buildings by eating incoming attackers. Each level is randomly generated, and gets more difficult through a few algorithms. We used a Travis CI pipeline to automatically generate game builds in order to improve development efficiency and collaboration.',technologies:["Game","Unity","Art","Sound FX","AI","CI","Travis CI"],githubPage:"cor/LD33",contributors:["Jurriaan Pruijs"]},{title:"corinehazeleger.com",type:"Professional",date:"May-April 2015",description:"This is my first professional web development project. This website has a responsive design that is designed together with my client to look exactly like the client wants. It's an art portfolio site, which includes a PhotoSwipe powered gallery.",technologies:["Web","HTML","CSS","JavaScript","PhotoSwipe","GitHub Pages"],externalLinks:[{title:"Visit corinehazeleger.com",link:"http://corinehazeleger.com"}]},{title:"ThrowBot",type:"Personal",date:"July 2015",description:"A Unity based 3D missile launcher with AI that teaches itself to hit a target.",githubPage:"cor/ThrowBot",technologies:["Game","Unity","AI"]},{title:"CandyMachine",type:"Study",date:"May-June 2015",description:"A Java Swing candy machine UI demo made for a school project.",githubPage:"cor/CandyMachine",technologies:["Java","Swing"]},{title:"ClockJS",type:"Study",date:"May 2015",description:"A JavaScript canvas based real time customizable clock drawing program I made for a school art project. (including a version based on Pink Floyd's 'Time')",githubPage:"cor/ClockJS",technologies:["Web","JavaScript","canvas"]},{title:"CannibalFish",type:"Personal",date:"April 2015",description:"A Unity prototype clone of the famous 'Ugh' game in which you need to eat other fishes in order to survive.",githubPage:"cor/CannibalFish",technologies:["Game","Unity","C#","Pixelart"]},{title:"Ludum Dare 32",type:"Personal",date:"April 2015",description:'LD32 is the first game development contest I entered. The objective of this contest was to make a game in 24 hours based on the theme "An Unconventional Weapon". I made a side scrolling adventure game in which you have a mysterious pizza blasting gun named Project Pizza.',githubPage:"cor/LD32",technologies:["Game","Unity","C#","Pixelart"]},{title:"grammatical-gender-trainer",type:"Personal",date:"February 2015",description:"An iOS app used for studying grammatical genders (such as der, die and das in German). Uses the API of wrts, a Dutch word studying site, to import word lists.",githubPage:"cor/grammatical-gender-trainer",technologies:["iOS","Swift","AutoLayout","HTTP","API"],contributors:["Jurriaan Pruijs"]},{title:"PeasantWars",type:"Personal",date:"December 2014 - January 2015",description:"A top down shooter prototype written in Java",githubPage:"cor/PeasantWars",technologies:["Game","Java"],contributors:["Leon Grasmeijer"]},{title:"BinaryConverter",type:"Personal",date:"November 2014",description:"An iOS app that converts numbers in binary, octal, decimal and hexadecimal numeral systems.",technologies:["iOS","Swift"]},{title:"get-out",type:"Personal",date:"October-November 2014",description:"A top down shooter written in Swift using SpriteKit",githubPage:"cor/get-out",technologies:["Game","Swift","iOS","SpriteKit"]},{title:"swong",type:"Personal",date:"July-October 2014",description:"Swift + Pong = Swong, an iOS game made with Swift and Apple's SpriteKit framework. Has local multiplayer, lots of customizability options and nice animations. Also includes a promotion website that I made for a school project. The website has a JavaScript canvas based version of the game running in the background.",technologies:["Game","iOS","Swift","SpriteKit","Art","Web","JavaScript","canvas","CSS"],githubPage:"cor/swong"},{title:"supercalc",type:"Personal",date:"July 2014",description:"A simple iOS calculator app written in Swift as an exercise of Stanford's iTunes U course on iOS development.",githubPage:"cor/supercalc",technologies:["Swift","iOS"]},{title:"TicTacoToeJS",type:"Personal",date:"April-August 2014",description:"A web version of my TicTacoToe game written in JavaScript/jQuery. Includes lots of animations",githubPage:"cor/TicTacoToeJS",technologies:["JavaScript","jQuery","CSS","HTML"]},{title:"Buttonmasher",type:"Personal",date:"March-August 2014",description:"A web based mastermind style code cracking game in which you need to find the SHA-512 encrypted code by brute-force/guessing it.",githubPage:"cor/Buttonmasher",technologies:["JavaScript","jQuery","CSS","HTML","Encryption"]},{title:"TicTacoToe-swift",type:"Personal",date:"July 2014",description:"An iOS version of my TicTacoToe game written in Swift",githubPage:"cor/TicTacoToe-swift",technologies:["Swift","iOS"]},{title:"Ultimedia",type:"Study",date:"May-June 2014",description:"Ultimedia is a static news site I made for a school project",githubPage:"cor/ultimedia",technologies:["HTML","CSS"]},{title:"swift-canvas",type:"Personal",date:"June 2014",description:"A small drawing program written in Swift playgrounds that uses emoji to render simple geometric drawings.",githubPage:"cor/swift-canvas",technologies:["iOS","Swift"]},{title:"PirateGame",type:"Personal",date:"May 2014",description:"A super simple pirate styled iOS game written in Objective-C.",githubPage:"cor/PirateGame",technologies:["Game","iOS","Objective-C"]},{title:"TicTacoToe",type:"Personal",date:"February 2014",description:"This is my oldest project on GitHub, and thus the first project I made using a source control system. It's a console based Tic Tac Toe game written in Java.",githubPage:"cor/tictacotoe",technologies:["Game","Java"]}]},f0dd:function(e,t,i){"use strict";var n=i("339a"),o=i.n(n);o.a}});
//# sourceMappingURL=app.49f8ec32.js.map