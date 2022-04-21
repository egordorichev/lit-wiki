"use strict";(self.webpackChunklit_wiki=self.webpackChunklit_wiki||[]).push([[961],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return s}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var m=a.createContext({}),d=function(e){var n=a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=d(e.components);return a.createElement(m.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=d(t),s=r,h=c["".concat(m,".").concat(s)]||c[s]||p[s]||i;return t?a.createElement(h,l(l({ref:n},u),{},{components:t})):a.createElement(h,l({ref:n},u))}));function s(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=c;var o={};for(var m in n)hasOwnProperty.call(n,m)&&(o[m]=n[m]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=t[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},2306:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return m},default:function(){return s},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return p}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),l=["components"],o={},m="Random",d={unversionedId:"modules/math_module/random",id:"modules/math_module/random",title:"Random",description:"Static methods",source:"@site/docs/modules/math_module/random.md",sourceDirName:"modules/math_module",slug:"/modules/math_module/random",permalink:"/lit-wiki/docs/modules/math_module/random",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/modules/math_module/random.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Math",permalink:"/lit-wiki/docs/modules/math_module/math"}},u={},p=[{value:"Static methods",id:"static-methods",level:2},{value:"setSeed(seed)",id:"setseedseed",level:3},{value:"int(min, max)",id:"intmin-max",level:3},{value:"int(max)",id:"intmax",level:3},{value:"int()",id:"int",level:3},{value:"float(min, max)",id:"floatmin-max",level:3},{value:"float(max)",id:"floatmax",level:3},{value:"float()",id:"float",level:3},{value:"bool()",id:"bool",level:3},{value:"chance(chance)",id:"chancechance",level:3},{value:"chance()",id:"chance",level:3},{value:"pick(from)",id:"pickfrom",level:3},{value:"Instance methods",id:"instance-methods",level:2},{value:"constructor(seed)",id:"constructorseed",level:3},{value:"constructor()",id:"constructor",level:3},{value:"setSeed(seed)",id:"setseedseed-1",level:3},{value:"int(min, max)",id:"intmin-max-1",level:3},{value:"int(max)",id:"intmax-1",level:3},{value:"int()",id:"int-1",level:3},{value:"float(min, max)",id:"floatmin-max-1",level:3},{value:"float(max)",id:"floatmax-1",level:3},{value:"float()",id:"float-1",level:3},{value:"bool()",id:"bool-1",level:3},{value:"chance(chance)",id:"chancechance-1",level:3},{value:"chance()",id:"chance-1",level:3},{value:"pick(from)",id:"pickfrom-1",level:3}],c={toc:p};function s(e){var n=e.components,t=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"random"},"Random"),(0,i.kt)("h2",{id:"static-methods"},"Static methods"),(0,i.kt)("h3",{id:"setseedseed"},"setSeed(seed)"),(0,i.kt)("p",null,'Sets global random instance seed. Seed determines how the random numbers are generated.\nIf the program starts with the same random seed every time, the same sequence of "random"\nnumbers will be generated.'),(0,i.kt)("h3",{id:"intmin-max"},"int(min, max)"),(0,i.kt)("p",null,"Returns a random integer in the range between ",(0,i.kt)("inlineCode",{parentName:"p"},"min")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"max"),"."),(0,i.kt)("h3",{id:"intmax"},"int(max)"),(0,i.kt)("p",null,"Returns a random integer in the range between ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"max"),"."),(0,i.kt)("h3",{id:"int"},"int()"),(0,i.kt)("p",null,"Returns a random integer in the range between ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"RAND_MAX"),"."),(0,i.kt)("h3",{id:"floatmin-max"},"float(min, max)"),(0,i.kt)("p",null,"Returns a random number in the range between ",(0,i.kt)("inlineCode",{parentName:"p"},"min")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"max"),"."),(0,i.kt)("h3",{id:"floatmax"},"float(max)"),(0,i.kt)("p",null,"Returns a random number in the range between ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"max"),"."),(0,i.kt)("h3",{id:"float"},"float()"),(0,i.kt)("p",null,"Returns a random number in the range between ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"RAND_MAX"),"."),(0,i.kt)("h3",{id:"bool"},"bool()"),(0,i.kt)("p",null,"Returns either ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," with a 50% chance for either case."),(0,i.kt)("h3",{id:"chancechance"},"chance(chance)"),(0,i.kt)("p",null,"Generates a random number between ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"100")," and returns ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", if it was smaller than ",(0,i.kt)("inlineCode",{parentName:"p"},"chance"),"."),(0,i.kt)("h3",{id:"chance"},"chance()"),(0,i.kt)("p",null,"Generates a random number between ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"100")," and returns ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", if it was smaller than ",(0,i.kt)("inlineCode",{parentName:"p"},"50"),"."),(0,i.kt)("h3",{id:"pickfrom"},"pick(from)"),(0,i.kt)("p",null,"Returns a random element from given array or map with equal weight for every element in the structure."),(0,i.kt)("h2",{id:"instance-methods"},"Instance methods"),(0,i.kt)("h3",{id:"constructorseed"},"constructor(seed)"),(0,i.kt)("p",null,"Returns a new ",(0,i.kt)("inlineCode",{parentName:"p"},"Random")," instance with random seed set to ",(0,i.kt)("inlineCode",{parentName:"p"},"seed"),"."),(0,i.kt)("h3",{id:"constructor"},"constructor()"),(0,i.kt)("p",null,"Returns a new ",(0,i.kt)("inlineCode",{parentName:"p"},"Random")," instance."),(0,i.kt)("h3",{id:"setseedseed-1"},"setSeed(seed)"),(0,i.kt)("p",null,"Sets instance seed to ",(0,i.kt)("inlineCode",{parentName:"p"},"seed"),'. Seed determines how the random numbers are generated.\nIf the program starts with the same random seed every time, the same sequence of "random"\nnumbers will be generated.'),(0,i.kt)("h3",{id:"intmin-max-1"},"int(min, max)"),(0,i.kt)("p",null,"Returns a random integer in the range between ",(0,i.kt)("inlineCode",{parentName:"p"},"min")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"max"),"."),(0,i.kt)("h3",{id:"intmax-1"},"int(max)"),(0,i.kt)("p",null,"Returns a random integer in the range between ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"max"),"."),(0,i.kt)("h3",{id:"int-1"},"int()"),(0,i.kt)("p",null,"Returns a random integer in the range between ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"RAND_MAX"),"."),(0,i.kt)("h3",{id:"floatmin-max-1"},"float(min, max)"),(0,i.kt)("p",null,"Returns a random number in the range between ",(0,i.kt)("inlineCode",{parentName:"p"},"min")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"max"),"."),(0,i.kt)("h3",{id:"floatmax-1"},"float(max)"),(0,i.kt)("p",null,"Returns a random number in the range between ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"max"),"."),(0,i.kt)("h3",{id:"float-1"},"float()"),(0,i.kt)("p",null,"Returns a random number in the range between ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"RAND_MAX"),"."),(0,i.kt)("h3",{id:"bool-1"},"bool()"),(0,i.kt)("p",null,"Returns either ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," with a 50% chance for either case."),(0,i.kt)("h3",{id:"chancechance-1"},"chance(chance)"),(0,i.kt)("p",null,"Generates a random number between ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"100")," and returns ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", if it was smaller than ",(0,i.kt)("inlineCode",{parentName:"p"},"chance"),"."),(0,i.kt)("h3",{id:"chance-1"},"chance()"),(0,i.kt)("p",null,"Generates a random number between ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"100")," and returns ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", if it was smaller than ",(0,i.kt)("inlineCode",{parentName:"p"},"50"),"."),(0,i.kt)("h3",{id:"pickfrom-1"},"pick(from)"),(0,i.kt)("p",null,"Returns a random element from given array or map with equal weight for every element in the structure."))}s.isMDXComponent=!0}}]);