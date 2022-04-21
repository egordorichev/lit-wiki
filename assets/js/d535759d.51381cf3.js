"use strict";(self.webpackChunklit_wiki=self.webpackChunklit_wiki||[]).push([[696],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(n),f=i,b=d["".concat(u,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(b,o(o({ref:t},l),{},{components:n})):r.createElement(b,o({ref:t},l))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5508:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],c={},u="Fibers",s={unversionedId:"getting_started/fibers",id:"getting_started/fibers",title:"Fibers",description:"Lit doesn't have real threading. But it has a concept, called fibers. In basic terms, fiber is a function, that can pause its",source:"@site/docs/0_getting_started/6_fibers.md",sourceDirName:"0_getting_started",slug:"/getting_started/fibers",permalink:"/lit-wiki/docs/getting_started/fibers",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/0_getting_started/6_fibers.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Classes",permalink:"/lit-wiki/docs/getting_started/classes"},next:{title:"Modules",permalink:"/lit-wiki/docs/getting_started/modules"}},l={},p=[],d={toc:p};function f(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"fibers"},"Fibers"),(0,a.kt)("p",null,"Lit doesn't have real threading. But it has a concept, called fibers. In basic terms, fiber is a function, that can pause its\nexecution, and then be continued from where it has left. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'var walker = new Fiber(() => {\n    print("Walking...")\n\n    // Pause the execution of the fiber and go back to whoever called it\n    Fiber.yield()\n\n    print("And walking...")\n\n    // You can even return values with it\n    Fiber.yield("I\'m tired")\n    return 32\n})\n\nwalker.run() // Expected: Walking...\nprint("Fiber returned control") // Expected: Fiber returned control\n\nvar result = walker.run() // Expected: And walking...\nprint(result) // Expected: I\'m tired\n\nwalker.run()\n\n// You can check, if the fiber ended execution yet\nprint(walker.done) // Expected: true\n')),(0,a.kt)("p",null,"As you can see, ",(0,a.kt)("inlineCode",{parentName:"p"},"Fiber.yield()")," returns execution to the caller, and it can even return some value.\nFibers are lightweight enough for you to use without any back thought."))}f.isMDXComponent=!0}}]);