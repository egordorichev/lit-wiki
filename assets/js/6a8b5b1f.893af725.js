"use strict";(self.webpackChunklit_wiki=self.webpackChunklit_wiki||[]).push([[863],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=l(r),f=o,d=m["".concat(u,".").concat(f)]||m[f]||p[f]||a;return r?n.createElement(d,c(c({ref:t},s),{},{components:r})):n.createElement(d,c({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4506:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),c=["components"],i={},u="Range",l={unversionedId:"modules/core_module/range",id:"modules/core_module/range",title:"Range",description:"LITINHERITCLASS(state->object_class)",source:"@site/docs/modules/core_module/range.md",sourceDirName:"modules/core_module",slug:"/modules/core_module/range",permalink:"/lit-wiki/docs/modules/core_module/range",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/modules/core_module/range.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Object",permalink:"/lit-wiki/docs/modules/core_module/object"},next:{title:"String",permalink:"/lit-wiki/docs/modules/core_module/string"}},s={},p=[],m={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"range"},"Range"),(0,a.kt)("p",null,"LIT_INHERIT_CLASS(state->object_class)\nLIT_BIND_CONSTRUCTOR(invalid_constructor)"),(0,a.kt)("p",null,'LIT_BIND_METHOD("iterator", range_iterator)\nLIT_BIND_METHOD("iteratorValue", range_iteratorValue)\nLIT_BIND_METHOD("toString", range_toString)'),(0,a.kt)("p",null,'LIT_BIND_FIELD("from", range_from, range_set_from)\nLIT_BIND_FIELD("to", range_to, range_set_to)\nLIT_BIND_GETTER("length", range_length)'))}f.isMDXComponent=!0}}]);