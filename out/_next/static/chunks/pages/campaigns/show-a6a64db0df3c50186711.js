(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[634],{84008:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return S}});var n=r(87757),a=r.n(n),s=r(92137),o=r(85893),i=r(6610),u=r(5991),c=r(65255),l=r(86089),d=r(77608),h=r(67294),p=r(57603),f=r(24579),m=r(73626),v=r(14309),Z=r(48237),g=r(63349),y=r(96156),b=r(66456),w=(r(73935),r(81420)),x=r(60416),C=r(68788),j=r(61483);function R(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,d.Z)(e);if(t){var a=(0,d.Z)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return(0,l.Z)(this,r)}}var k=function(e){(0,c.Z)(r,e);var t=R(r);function r(){var e;(0,i.Z)(this,r);for(var n=arguments.length,o=new Array(n),u=0;u<n;u++)o[u]=arguments[u];return e=t.call.apply(t,[this].concat(o)),(0,y.Z)((0,g.Z)(e),"state",{value:"",errorMsg:"",loading:!1,disabled:!1}),(0,y.Z)((0,g.Z)(e),"onSubmit",function(){var t=(0,s.Z)(a().mark((function t(r){var n,s;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.preventDefault(),e.setState({loading:!0,errorMsg:"",disabled:!0}),n=(0,f.Z)(e.props.address),t.prev=3,t.next=6,j.Z.eth.getAccounts();case 6:return s=t.sent,t.next=9,n.methods.contribute().send({from:s[0],value:j.Z.utils.toWei(e.state.value,"ether")});case 9:b.Router.replaceRoute("/campaigns/".concat(e.props.address)),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(3),e.setState({errorMsg:t.t0.message});case 15:e.setState({loading:!1,disabled:!1});case 16:case"end":return t.stop()}}),t,null,[[3,12]])})));return function(e){return t.apply(this,arguments)}}()),e}return(0,u.Z)(r,[{key:"render",value:function(){var e=this;return(0,o.jsxs)(w.Z,{onSubmit:this.onSubmit,error:!!this.state.errorMsg,children:[(0,o.jsxs)(w.Z.Field,{children:[(0,o.jsx)("label",{style:{color:"white"},children:"Amount to Contibute"}),(0,o.jsx)(x.Z,{value:this.state.value,label:"ether",labelPosition:"right",onChange:function(t){return e.setState({value:t.target.value})}})]}),(0,o.jsx)(C.Z,{error:!0,header:"Oops!",content:this.state.errorMsg}),(0,o.jsx)(Z.Z,{disabled:this.state.disabled,loading:this.state.loading,primary:!0,children:"Contribute!"})]})}}]),r}(h.Component);function _(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,d.Z)(e);if(t){var a=(0,d.Z)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return(0,l.Z)(this,r)}}var S=function(e){(0,c.Z)(r,e);var t=_(r);function r(){return(0,i.Z)(this,r),t.apply(this,arguments)}return(0,u.Z)(r,[{key:"renderCards",value:function(){var e=this.props,t=e.balance,r=[{header:e.manager,meta:"Address of manager",description:"The Manager created this campaign and can create request to withdraw money",style:{overflowWrap:"break-word"}},{header:e.minimumContribution,meta:"Minimum Contribution (wei)",description:"You must contributr at least this much wei to become an approver."},{header:e.requestsCount,meta:"Number of Requests",description:"A request to withdraw money from the contract.Request must be approved by approvers"},{header:e.approversCount,meta:"Number of approvers",description:"Number of people who have already donated to this campaign."},{header:j.Z.utils.fromWei(t,"ether"),meta:"Campaign Balance(ether)",description:"The balance is how much this campaign has left to spend."}];return(0,o.jsx)(m.Z.Group,{items:r})}},{key:"render",value:function(){return(0,o.jsxs)(p.Z,{children:[(0,o.jsx)("h3",{children:"Campaign Show"}),(0,o.jsxs)(v.Z,{children:[(0,o.jsxs)(v.Z.Column,{width:10,children:[(0,o.jsx)(v.Z.Row,{children:this.renderCards()}),(0,o.jsx)(v.Z.Row,{style:{marginTop:"20px"},children:(0,o.jsx)(b.Link,{route:"/campaigns/".concat(this.props.address,"/requests"),children:(0,o.jsx)("a",{children:(0,o.jsx)(Z.Z,{primary:!0,children:"View Requests"})})})})]}),(0,o.jsx)(v.Z.Column,{width:6,children:(0,o.jsx)(v.Z.Row,{children:(0,o.jsx)(k,{address:this.props.address})})})]})]})}}],[{key:"getInitialProps",value:function(){var e=(0,s.Z)(a().mark((function e(t){var r,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(0,f.Z)(t.query.address),e.next=3,r.methods.getSummary().call();case 3:return n=e.sent,e.abrupt("return",{address:t.query.address,minimumContribution:n[0],balance:n[1],requestsCount:n[2],approversCount:n[3],manager:n[4]});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),r}(h.Component)},86374:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/campaigns/show",function(){return r(84008)}])}},function(e){e.O(0,[774,141,685,403,336,888,179],(function(){return t=86374,e(e.s=t);var t}));var t=e.O();_N_E=t}]);