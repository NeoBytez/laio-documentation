"use strict";(self.webpackChunklaio_documentation=self.webpackChunklaio_documentation||[]).push([[687],{7475:(t,e,A)=>{A.r(e),A.d(e,{assets:()=>s,contentTitle:()=>a,default:()=>I,frontMatter:()=>o,metadata:()=>g,toc:()=>u});var n=A(4848),r=A(8453);const o={},a="Toast",g={id:"LaioEditor/Common/Toast",title:"Toast",description:"Overview",source:"@site/docs/LaioEditor/Common/Toast.md",sourceDirName:"LaioEditor/Common",slug:"/LaioEditor/Common/Toast",permalink:"/laio-documentation/LaioEditor/Common/Toast",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Laio Style",permalink:"/laio-documentation/LaioEditor/Common/LaioStyle"},next:{title:"Toast Content",permalink:"/laio-documentation/LaioEditor/Common/ToastContent"}},s={},u=[{value:"Overview",id:"overview",level:2},{value:"Static Methods",id:"static-methods",level:2},{value:"Example",id:"example",level:2}];function d(t){const e={code:"code",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",pre:"pre",...(0,r.R)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.header,{children:(0,n.jsx)(e.h1,{id:"toast",children:"Toast"})}),"\n",(0,n.jsx)(e.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(e.p,{children:"An editor toast"}),"\n",(0,n.jsx)(e.h2,{id:"static-methods",children:"Static Methods"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-csharp",children:"public static void ShowToast(ToastContent content)\n"})}),"\n",(0,n.jsx)(e.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-csharp",children:'public void ShowToast()\r\n{\r\n    // Create our toast content\r\n    ToastContent content = new ToastContent(\r\n        "Name", // Toast name\r\n        "Please input your name", // Toast description\r\n        new ToastInput[] { new ToastInput("First Name"), new ToastInput("Last Name")}, // Toast inputs\r\n        new ToastButton[] { new ToastButton("Cancel"), new ToastButton("Confirm") }   // Toast buttons\r\n        );\r\n\r\n    //Subscribe to toast callback\r\n    Toast.onToastSelection += OnToastSelection;\r\n\r\n    // Show the toast\r\n    Toast.ShowToast(content);\r\n\r\n}\r\n\r\n//Toast callback\r\nprivate void OnToastSelection(string[] values, int button)\r\n{\r\n    // button == 0 | Cancel\r\n    // button == 1 | Confirm\r\n\r\n    //Unsubscribe from toast selection\r\n    Toast.onToastSelection -= OnToastSelection;\r\n}\n'})}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"img",src:A(8973).A+"",width:"350",height:"252"})})]})}function I(t={}){const{wrapper:e}={...(0,r.R)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(d,{...t})}):d(t)}},8973:(t,e,A)=>{A.d(e,{A:()=>n});const n="data:image/png;base64,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0LTa9dBrc7ezF10iU/txz+OvQ/SzJl932n7ca2/VqpW9XGa8h532c0mh99atp4vBDx06NLqsp16D3oNGjRpFy0qx9xpAzfMGr+70oLCtqKjIC96VK1fae60tWrTIXot3yJAhtl23WtfF0Dds2GAWLlxoPv/8c3sjTM1r2bKlvTOE1lm9erX57LPPoluzF9penC79qAuex6cPHTpkli5dar755hvbW3fztJ833njDXhdYr8Fdozf5c+j5O++8Y6c1tKKH7rZx5ZVXRsvMnz/fPPfcc9FzHRHoaEDvj24A+vrrr5tnnnnG7vOuu+6yy6TtR9cv1msX3TPOvQeS9nOlvbdaT++bXotevy4+r9e4bds2s3379kq/1wBqXhS8c+fOtRclV2Dt3bvXhoB6U/Eg6du3rw0A11NTz00BoSBS7zI+DquLlbvAueeee2wIuPXGjh1rbweftj23HUkGry6m7nqiAwcOtNtw83RLIA2R6Ll6vz/++KPtxaYFonqTeiSHGtST/P7776NesEKxR48eZvjw4XbavW71IrUf9eSLBa/unqEeuZvvpP1cae+tW89tU2P0uvGoW/bIkSO291vqew2g5uUFr+72MHr06KgHHA+SGTNm2F9khaijIHEn4nQIrODevHmzDUq3ng6D9UuvWwipx+tuv15se04yeN20e/7hhx9G0+pJunnyww8/2JCpSvCKes86NNc21HtUUOln1PsVX04hpoArFrzahpsXl/ZzSaH3Nrme7iaiHq17ruW031LfawA1r+AYrxMPkunTp5uNGzfaHlicDmV1q56vv/7aHtrrbhQK13gAKbAUEgp2BbDGH9O259aTeLhoOn77ofhzTbteomif6gErXLp27WoOHz4czevVq1dJwaufZ926dbbHqQ8mtWl68eLFOcupx6vx1bT9KADj70lc2s+V9t4m11PwLliwIHrugrfU9xpAzatU8OoXWAGgYQI918kojW/ql1dhtGbNmmg9jX26QNA92JYvXx7NW7t2rR2/TNueW1YULqUGr3px7uSWxl1dCGrYQOOfunmnnms81AWiArrQe6AxX/VmtR19tU5tujecXqfblk546cafCvC0/VQ1eNPe2+R6hYK31PcaQM2rVPDK5MmTbcjoEFy/uAMGDLDt6j3p+Z49e+yJHh2KK4B0H7arr77aHDx40G7nrbfeMvv374+C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dJKpW7euOeecc4CyoZo844wzbI1Ss8iCQjUrOcF72mmnmbPPPtu7EeCfptpUjVKzyApfzUpO8J566qnelYFyoRqlZpElyZoVgheZQvAiawheZB7Bi6wheJF5BC+yhuBF5hG8yBqCF5lH8CJrCF5kHsGLrCF4kXkEL7KG4EXmEbzIGoIXmUfwImsIXmQewYusIXiReQQvsqZo8HLBEZQzLpKDrCnpIjm6fJkuY0Yho9yoJgtdFpKaRTkqVLOSE7yihZTQ6h4D5UI16StgahblKq1m84IXAFCzCF4ACCwveM8//3xz3nnnAWVDNZmsU2oVWVCodnOCVws1aNDAtGzZ0rRu3Rr4x6kWVZPJAqZWUe4K1a7kBK8SmkJGuVFNqjapVWSNr3YlL3h9KwP/NF/w+pYDyg3Bi8wieMNr166d6datm3ceSkfwlujOO+8069evN6+//rrZunWrGTt2rHe5EDp27Gg2btzonVebELx+NVWrI0aMMB9++KF54403zMCBA83hw4fNLbfc4l0W6QjeEowePdp89NFHZsqUKWbAgAHmwQcftEWn577la1qXLl3MJ5984p1XmxC8+WqyVleuXGlmz55tp9XzHTlyZN4yKA3BW4K33nrLjBo1Kqdt2LBh5uOPPzZt2rSxzzt37mxmzpxpli1bZqZNm2batm1r29UjmDNnjunXr59ZsmSJmT9/vg1Otx0V8NSpU83SpUvN9OnTTfv27QvO69Chg20neP9G8OYrpVZVV6pR1eoTTzxhj6DUnlarkyZNMocOHTLbt2+362hZzY+vN3z4cLNixQrTp08f+1y9YtXu448/bvf90EMP2ef333+/Xa82I3iL6Nu3r3nvvfe88xwVnpZZvHixqaiosMMATz31lJ2nwv38889tQd57773mxRdfNHv37o3W1bIbNmww48aNs0W5c+fOnHnr1q2z6+mXZMeOHdE2CV6CN6mUWhXVm2gIQgH72muv2Q/8tFrV8MWuXbvs8urpxmtQ019++aXZtGmTDdc77rjDbmf58uVm/PjxZs+ePXZd9ZYnTpxoe+DJD4fahuAt4u677za7d+/2zovr0aNHND106FBz4MABO62i/Prrr20467l6wkeOHDGdOnUygwYNMu+++27UOxb1cLWs5h08eDDqpcj+/ftt74Xg/RvBm6uUWlUv9P333885stI6CsS0WtXz1atX256vppPBe/To0Zwjsq+++irajsI33tlYtGiR7RG757URwVuEAtCFaBr1ENQ71QmNN99801K7LyR1gqJ79+52/E3rxOc5mqf1FLbOp59+att926yNCN5cpdSq6id5YnbBggVWWq1qOi144+sln6tn7Y7WZN68eWbhwoXR89qI4C1CPQMVUa9evXLa1cPdsmWL7ZHqMEyHTzrrq0/9/v37lxS8Cut4QcZp6OGll16yvY04d0iY3GZtRPDmKqVWVXPx4SzREJfOT6TVqqYJ3upD8JZg1qxZZt++faZnz572uQpLJxk07qrnEyZMyCksHUqVErw6qaGTHgputWv7Gl7QL9Ctt95qz06rF6N5OnmncTltz7fN2ojgzVesVvXhHa85hbKe64RaWq1qmuCtPgRvCdRT0IkBFZPCUCcSnn/++WicTL1cFbfO+uqssk4qlBK8mh4zZowdc9MQxQcffGBD3C2neTpZou9Nahs6HFS7b5u1EcGbr1itiqsrDV/pSG3y5Mm2vVitErzVh+CtBBV1165dc4o4TgXnTihUhk5iqLh923Xz3IkL/BfBW1ixWk2rOdQ8gheZRfAiq0oKXq74hHLD1cmQVSVdncxd47RFixbejQChqRbTrsdLraJcqTZdrcZrV3KCV+rVq2fOPPNMe3dM4J+mWlRNJuuUWkW5S6vdvOAFANQsghcAgrrQ/D8vGN1rlsj0swAAAABJRU5ErkJggg=="},8453:(t,e,A)=>{A.d(e,{R:()=>a,x:()=>g});var n=A(6540);const r={},o=n.createContext(r);function a(t){const e=n.useContext(o);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function g(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:a(t.components),n.createElement(o.Provider,{value:e},t.children)}}}]);