(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[336],{57603:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var a=n(85893),i=(n(67294),n(95712)),s=n(9008),u=n(90284),p=n(66456),r=function(){return(0,a.jsxs)(u.Z,{style:{marginTop:"20px"},children:[(0,a.jsx)(p.Link,{route:"/",children:(0,a.jsx)("a",{className:"item",children:"CrownCoin"})}),(0,a.jsxs)(u.Z.Menu,{position:"right",children:[(0,a.jsx)(p.Link,{route:"/",children:(0,a.jsx)("a",{className:"item",children:"Campaign"})}),(0,a.jsx)(p.Link,{route:"/campaigns/new",children:(0,a.jsx)("a",{className:"item",children:"+"})})]})]})},o=function(t){return(0,a.jsxs)("body",{style:{background:"#242B2E",color:"white"},children:[(0,a.jsx)("h1",{style:{textAlign:"center",fontFamily:"cursive",padding:"20px",color:"white"},children:"CrowdCoin - Ethereum Based Kickstarter Campaign"}),(0,a.jsxs)(i.Z,{style:{background:"#242B2E",color:"white"},children:[(0,a.jsx)(s.default,{children:(0,a.jsx)("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"})}),(0,a.jsx)(r,{}),t.children]})]})}},24579:function(t,e,n){"use strict";n.d(e,{Z:function(){return s}});var a=n(61483),i=JSON.parse('{"w3":"[{\\"constant\\":false,\\"inputs\\":[{\\"name\\":\\"index\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"finalizeRequest\\",\\"outputs\\":[],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"name\\":\\"approvers\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"bool\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"getSummary\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"},{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"},{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"},{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"},{\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"manager\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"requests\\",\\"outputs\\":[{\\"name\\":\\"description\\",\\"type\\":\\"string\\"},{\\"name\\":\\"value\\",\\"type\\":\\"uint256\\"},{\\"name\\":\\"recipient\\",\\"type\\":\\"address\\"},{\\"name\\":\\"complete\\",\\"type\\":\\"bool\\"},{\\"name\\":\\"approvalCount\\",\\"type\\":\\"uint256\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"approversCount\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[{\\"name\\":\\"description\\",\\"type\\":\\"string\\"},{\\"name\\":\\"value\\",\\"type\\":\\"uint256\\"},{\\"name\\":\\"recipient\\",\\"type\\":\\"address\\"}],\\"name\\":\\"createRequest\\",\\"outputs\\":[],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"minimumContribution\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"gerRequestCount\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[],\\"name\\":\\"contribute\\",\\"outputs\\":[],\\"payable\\":true,\\"stateMutability\\":\\"payable\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[{\\"name\\":\\"index\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"approveRequest\\",\\"outputs\\":[],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"name\\":\\"minimum\\",\\"type\\":\\"uint256\\"},{\\"name\\":\\"creator\\",\\"type\\":\\"address\\"}],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"constructor\\"}]"}'),s=function(t){return new a.Z.eth.Contract(JSON.parse(i.w3),t)}},61483:function(t,e,n){"use strict";var a,i=n(3283),s=n.n(i);if("undefined"!==window.web3)a=new(s())(window.web3.currentProvider);else{var u=new(s().providers.HttpProvider)("https://rinkeby.infura.io/v3/5db396ea7bd048fd93ed09cb1928d1a1");a=new(s())(u)}e.Z=a},66456:function(t,e,n){var a=n(37018)();a.add("/campaigns/new","/campaigns/new").add("/campaigns/:address","/campaigns/show").add("/campaigns/:address/requests","/campaigns/requests/index").add("/campaigns/:address/requests/new","/campaigns/requests/new"),t.exports=a},62859:function(){},75304:function(){},46601:function(){},89214:function(){},71922:function(){},2363:function(){},52361:function(){},94616:function(){}}]);