(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[86],{9637:function(t,e,n){"use strict";n.r(e);var r=n(85893),i=n(87757),a=n.n(i),s=n(92137),o=n(6610),u=n(5991),c=n(63349),l=n(65255),f=n(86089),h=n(77608),d=n(96156),p=n(67294),m=n(57603),g=n(81420),v=n(60416),b=n(68788),Z=n(48237),x=n(63293),y=n(61483),w=n(66456);function C(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=(0,h.Z)(t);if(e){var i=(0,h.Z)(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return(0,f.Z)(this,n)}}var _=function(t){(0,l.Z)(n,t);var e=C(n);function n(){var t;(0,o.Z)(this,n);for(var r=arguments.length,i=new Array(r),u=0;u<r;u++)i[u]=arguments[u];return t=e.call.apply(e,[this].concat(i)),(0,d.Z)((0,c.Z)(t),"state",{minimumContribution:"",errorMsg:"",loading:!1,disabled:!1}),(0,d.Z)((0,c.Z)(t),"onSubmit",function(){var e=(0,s.Z)(a().mark((function e(n){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),t.setState({loading:!0,errorMsg:"",disabled:!0}),e.prev=2,e.next=5,y.Z.eth.getAccounts();case 5:return r=e.sent,e.next=8,x.Z.methods.createCampaign(t.state.minimumContribution).send({from:r[0]});case 8:w.Router.pushRoute("/"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),t.setState({errorMsg:e.t0.message});case 14:t.setState({loading:!1,disabled:!1});case 15:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}()),t}return(0,u.Z)(n,[{key:"render",value:function(){var t=this;return(0,r.jsxs)(m.Z,{children:[(0,r.jsx)("h3",{children:"Create a Campaign"}),(0,r.jsxs)(g.Z,{onSubmit:this.onSubmit,error:!!this.state.errorMsg,children:[(0,r.jsxs)(g.Z.Field,{children:[(0,r.jsx)("label",{style:{color:"white"},children:"Minimum contribution"}),(0,r.jsx)(v.Z,{label:"wei",labelPosition:"right",value:this.state.minimumContribution,onChange:function(e){t.setState({minimumContribution:e.target.value})}})]}),(0,r.jsx)(b.Z,{error:!0,header:"Oops!",content:this.state.errorMsg}),(0,r.jsx)(Z.Z,{disabled:this.state.disabled,loading:this.state.loading,primary:!0,style:{marginTop:"10px"},children:"Create"})]})]})}}]),n}(p.Component);e.default=_},38506:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/campaigns/new",function(){return n(9637)}])}},function(t){t.O(0,[774,141,685,904,888,179],(function(){return e=38506,t(t.s=e);var e}));var e=t.O();_N_E=e}]);