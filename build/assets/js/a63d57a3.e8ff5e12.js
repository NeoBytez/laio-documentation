"use strict";(self.webpackChunklaio_documentation=self.webpackChunklaio_documentation||[]).push([[163],{2134:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var t=a(4848),o=a(8453);const r={},i="Notify",l={id:"Laio/common/Library/Notify",title:"Notify",description:"Overview",source:"@site/docs/Laio/common/Library/Notify.md",sourceDirName:"Laio/common/Library",slug:"/Laio/common/Library/Notify",permalink:"/laio-documentation/Laio/common/Library/Notify",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"EArray",permalink:"/laio-documentation/Laio/common/Library/EArray"},next:{title:"Object Pool",permalink:"/laio-documentation/Laio/common/Library/ObjectPool"}},c={},s=[{value:"Overview",id:"overview",level:2},{value:"Events",id:"events",level:2},{value:"Example",id:"example",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"notify",children:"Notify"})}),"\n",(0,t.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(n.p,{children:"A class to wrap around a value to get callbacks when the value changes."}),"\n",(0,t.jsx)(n.h2,{id:"events",children:"Events"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"public delegate void OnValueChange(T newValue)\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"public delegate void OnValueChangeWithOld(T oldValue, T newValue)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"public Notify<float> Health;\r\n\r\nprivate void Awake()\r\n{\r\n     Health = new Notify<float>(100)\r\n     // Make the UI update whenever the value of health changes\r\n     Health.onValueChange += UIManager.Instance.OnHealthChange;\r\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>l});var t=a(6540);const o={},r=t.createContext(o);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);