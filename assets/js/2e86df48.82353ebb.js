"use strict";(self.webpackChunklit_wiki=self.webpackChunklit_wiki||[]).push([[494],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return p}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,u=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=c(r),p=o,f=d["".concat(u,".").concat(p)]||d[p]||s[p]||l;return r?n.createElement(f,a(a({ref:t},m),{},{components:r})):n.createElement(f,a({ref:t},m))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<l;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1820:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return p},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s}});var n=r(7462),o=r(3366),l=(r(7294),r(3905)),a=["components"],i={},u="Core module",c={unversionedId:"modules/core_module/core_module",id:"modules/core_module/core_module",title:"Core module",description:"Classes",source:"@site/docs/modules/core_module/core_module.md",sourceDirName:"modules/core_module",slug:"/modules/core_module/",permalink:"/lit-wiki/docs/modules/core_module/",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/modules/core_module/core_module.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Modules",permalink:"/lit-wiki/docs/modules/"},next:{title:"Array",permalink:"/lit-wiki/docs/modules/core_module/array"}},m={},s=[{value:"Classes",id:"classes",level:2},{value:"Globals",id:"globals",level:2},{value:"Functions",id:"functions",level:2}],d={toc:s};function p(e){var t=e.components,r=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"core-module"},"Core module"),(0,l.kt)("h2",{id:"classes"},"Classes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/module/core_module/class"},"Class")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/module/core_module/object"},"Object")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/module/core_module/number"},"Number")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/module/core_module/string"},"String")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/module/core_module/bool"},"Bool")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/module/core_module/function"},"Function")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/module/core_module/fiber"},"Fiber")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/module/core_module/module"},"Module")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/module/core_module/array"},"Array")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/module/core_module/map"},"Map")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/module/core_module/range"},"Range"))),(0,l.kt)("h2",{id:"globals"},"Globals"),(0,l.kt)("p",null,'lit_set_global(state, CONST_STRING(state, "globals"), OBJECT_VALUE(state->vm->globals));'),(0,l.kt)("h2",{id:"functions"},"Functions"),(0,l.kt)("p",null,'lit_define_native(state, "time", time_native);\nlit_define_native(state, "systemTime", systemTime_native);\nlit_define_native(state, "print", print_native);'),(0,l.kt)("p",null,'lit_define_native_primitive(state, "require", require_primitive);\nlit_define_native_primitive(state, "eval", eval_primitive);'))}p.isMDXComponent=!0}}]);