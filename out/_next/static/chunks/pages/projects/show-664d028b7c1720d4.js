(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[718],{4746:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/show",function(){return r(14451)}])},14451:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return W}});var n=r(34051),o=r.n(n),i=r(85893),u=r(67294),a=r(52256),s=r(18005),c=r(80967),l=r(83544),f=r(53445),p=r(1508),d=r(75424),h=r(60416),m=r(68156),v=r(96215);function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t,r,n,o,i,u){try{var a=e[i](u),s=a.value}catch(c){return void r(c)}a.done?t(s):Promise.resolve(s).then(n,o)}function w(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function u(e){y(i,n,o,u,a,"next",e)}function a(e){y(i,n,o,u,a,"throw",e)}u(void 0)}))}}function j(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function x(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _(e){return _=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},_(e)}function O(e,t){return!t||"object"!==C(t)&&"function"!==typeof t?b(e):t}function P(e,t){return P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},P(e,t)}var C=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function k(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=_(e);if(t){var o=_(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return O(this,r)}}var R=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(a,e);var t,r,n,u=k(a);function a(){var e;j(this,a),x(b(e=u.apply(this,arguments)),"state",{value:"",loading:!1,errorMessage:""});var t=b(e);return x(b(e),"onSubmit",function(){var e=w(o().mark((function e(r){var n,i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),t.setState({loading:!0,errorMessage:""}),n=(0,f.Z)(t.props.address),e.prev=3,e.next=6,p.Z.eth.getAccounts();case 6:return i=e.sent,e.next=9,n.methods.contribute().send({from:i[0],value:p.Z.utils.toWei(t.state.value,"ether")});case 9:v.Router.replaceRoute("/projects/".concat(t.props.address)),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(3),t.setState({errorMessage:e.t0.message});case 15:t.setState({loading:!1,value:""});case 16:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(t){return e.apply(this,arguments)}}()),e}return t=a,(r=[{key:"render",value:function(){var e=this;return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(d.Z,{onSubmit:this.onSubmit,error:!!this.state.errorMessage,children:[(0,i.jsxs)(d.Z.Field,{children:[(0,i.jsx)("label",{style:{fontSize:"1.2rem"},children:"Amount to Contribute"}),(0,i.jsx)(h.Z,{label:"ether",labelPosition:"right",value:this.state.value,type:"number",onChange:function(t){return e.setState({value:t.target.value})},step:"1",placeholder:"Minimum contribution is ".concat(this.props.minValue," wei.")})]}),(0,i.jsx)(m.Z,{error:!0,header:"Oops!",content:this.state.errorMessage}),(0,i.jsx)(c.Z,{type:"submit",color:"instagram",disabled:!this.state.value,loading:this.state.loading,children:"Contribute!"})]})})}}])&&g(t.prototype,r),n&&g(t,n),a}(u.Component);function Z(e,t,r,n,o,i,u){try{var a=e[i](u),s=a.value}catch(c){return void r(c)}a.done?t(s):Promise.resolve(s).then(n,o)}function S(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function E(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function q(e){return q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},q(e)}function T(e,t){return!t||"object"!==B(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function M(e,t){return M=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},M(e,t)}var B=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function N(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=q(e);if(t){var o=q(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return T(this,r)}}var W=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&M(e,t)}(d,e);var t,r,n,u=N(d);function d(){return S(this,d),u.apply(this,arguments)}return t=d,n=[{key:"getInitialProps",value:function(e){return(t=o().mark((function t(){var r,n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=(0,f.Z)(e.query.address),t.next=3,r.methods.getSummary().call();case 3:return n=t.sent,t.abrupt("return",{minimumContribution:n[0],contractBalance:n[1],requestCount:n[2],approversCount:n[3],manager:n[4],address:e.query.address});case 5:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function u(e){Z(i,n,o,u,a,"next",e)}function a(e){Z(i,n,o,u,a,"throw",e)}u(void 0)}))})();var t}}],(r=[{key:"renderCards",value:function(){var e=this.props,t=e.minimumContribution,r=e.contractBalance,n=e.requestCount,o=e.approversCount,u=[{header:e.manager,meta:"Address of Manager",description:"The manager created the project and can request contributors for money.",style:{overflowWrap:"break-word"}},{header:t,meta:"Minimum Contribution (wei)",description:"You must contribute atleast this must wei to fund this project.",style:{overflowWrap:"break-word"}},{header:n,meta:"Number of Requests",description:"A request tries to withdraw money from the contract.Request must be approved by approvers.",style:{overflowWrap:"break-word"}},{header:o,meta:"Number of Approvers",description:"The no of times people donated to this project.",style:{overflowWrap:"break-word"}},{header:p.Z.utils.fromWei(r,"ether"),meta:"Project Balance Fund(ether)",description:"The balance is how much money this project has left to spend.",style:{overflowWrap:"break-word"}}];return(0,i.jsx)(a.Z.Group,{items:u})}},{key:"render",value:function(){return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(l.Z,{children:[(0,i.jsx)("h1",{children:"Project Details"}),(0,i.jsxs)(s.Z,{children:[(0,i.jsxs)(s.Z.Row,{children:[(0,i.jsx)(s.Z.Column,{width:10,children:this.renderCards()}),(0,i.jsx)(s.Z.Column,{width:6,children:(0,i.jsx)(R,{address:this.props.address,minValue:this.props.minimumContribution})})]}),(0,i.jsx)(s.Z.Row,{children:(0,i.jsx)(s.Z.Column,{children:(0,i.jsx)(v.Link,{route:"/projects/".concat(this.props.address,"/requests"),children:(0,i.jsx)("a",{children:(0,i.jsx)(c.Z,{color:"instagram",children:"Requests"})})})})})]})]})})}}])&&E(t.prototype,r),n&&E(t,n),d}(u.Component)}},function(e){e.O(0,[482,714,127,578,299,865,774,888,179],(function(){return t=4746,e(e.s=t);var t}));var t=e.O();_N_E=t}]);