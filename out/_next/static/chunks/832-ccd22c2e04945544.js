(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[832],{83544:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var s=n(85893),i=(n(67294),n(95712)),r=n(9008),a=n(4298),u=n(63272),c=n(96215),d=function(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(u.Z,{style:{marginTop:"15px"},children:[(0,s.jsx)(c.Link,{route:"/",children:(0,s.jsxs)("a",{className:"item",style:{fontSize:"1.3rem",fontWeight:"bold"},children:["Mr.CampFund"," "]})}),(0,s.jsxs)(u.Z.Menu,{position:"right",children:[(0,s.jsx)(c.Link,{route:"/",children:(0,s.jsx)("a",{className:"item",style:{fontSize:"1rem",fontWeight:"bold"},children:"Projects"})}),(0,s.jsx)(c.Link,{route:"/projects/new",children:(0,s.jsx)("a",{className:"item",style:{fontSize:"1.2rem",fontWeight:"bold"},children:"+"})})]})]})})},o=function(e){return(0,s.jsxs)(i.Z,{children:[(0,s.jsx)(r.default,{children:(0,s.jsx)("link",{async:!0,rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css"})}),(0,s.jsx)(a.default,{src:"https://cdn.jsdelivr.net/npm/semantic-ui-react/dist/umd/semantic-ui-react.min.js"}),(0,s.jsx)(d,{}),e.children]})}},12889:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var s=n(1508),i=JSON.parse('{"Mt":[{"inputs":[{"internalType":"uint256","name":"minAmount","type":"uint256"}],"name":"createCampaign","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"deployedCampaigns","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getDeployedCampaigns","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"}]}'),r=new s.Z.eth.Contract(i.Mt,"0xcF5B526a133f84532fD7cDE89dbdE9f2c7e9Bd06")},1508:function(e,t,n){"use strict";var s,i=n(3283),r=n.n(i);if("undefined"!==typeof window.ethereum)window.ethereum.request({method:"eth_requestAccounts"}),s=new(r())(window.ethereum);else{var a=new(r().providers.HttpProvider)("https://rinkeby.infura.io/v3/b3d784d7ac5546fa8809aa72e3f18597");s=new(r())(a)}t.Z=s},96215:function(e,t,n){"use strict";var s=n(37018)();s.add("/projects/new","/projects/new").add("/projects/:address","/projects/show").add("/projects/:address/requests","/projects/requests/index").add("/projects/:address/requests/new","/projects/requests/new"),e.exports=s},46601:function(){},89214:function(){},71922:function(){},2363:function(){},27790:function(){},52361:function(){},94616:function(){},6567:function(){}}]);