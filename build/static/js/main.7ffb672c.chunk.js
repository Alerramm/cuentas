(this.webpackJsonpcuentas=this.webpackJsonpcuentas||[]).push([[0],{188:function(e,t,a){e.exports=a(385)},193:function(e,t,a){},381:function(e,t,a){},385:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),l=a.n(o),i=(a(193),a(50)),c=a(51),s=a(54),d=a(52),u=a(55),m=a(387),p=a(132),b=a(11),g=function(){var e=m.a.Header;return r.a.createElement(e,{className:"header"},r.a.createElement("div",{className:"textHeader"},"CUENTAS POR COBRAR"))},h=a(388),E=a(57),f=a.n(E),v=function(e){var t,a,n;return f.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.method,r.next=3,f.a.awrap(fetch(e.endpoint,{method:t}));case 3:return a=r.sent,r.next=6,f.a.awrap(a.json());case 6:return n=r.sent,r.abrupt("return",n);case 8:case"end":return r.stop()}}))},y=function(){var e;return f.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return e={endpoint:"http://www.misistema.mx/beluga/Finanzas/endpoints/cuentas/get/clientes.php",method:"GET"},t.abrupt("return",v(e));case 2:case"end":return t.stop()}}))},C=m.a.Content,k=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={data:[],columns:[],loading:!1},a.componentDidMount=function(){var e=a.state.data;a.setState({loading:!0});y().then((function(t){t.payload.map((function(t,a){e.push({key:a,cliente:t,numeroDeFacturasPorPagar:"",montoTotalPorPagar:"",semana1:"",semana2:""})})),a.setState({data:e})})),a.setState({data:e,columns:[{title:"CLIENTE",dataIndex:"cliente",key:"cliente"},{title:"# DE FACTURAS POR PAGAR",dataIndex:"numeroDeFacturasPorPagar",key:"numeroDeFacturasPorPagar"},{title:"MONTO TOTAL POR PAGAR",dataIndex:"montoTotalPorPagar",key:"montoTotalPorPagar"},{title:"SEMANA 1",dataIndex:"semana1",key:"semana1"},{title:"SEMANA 2",dataIndex:"semana2",key:"semana2"}],loading:!1})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.data,a=e.columns,n=e.loading;return r.a.createElement(C,null,r.a.createElement(m.a,{style:{padding:"24px 24px",background:"#fff"}},r.a.createElement(h.a,{className:"components-table-demo-nested",columns:a,dataSource:t,loading:n,bordered:!0,pagination:{position:"top"}})))}}]),t}(n.Component),A=a(53),O=a(389),B={labels:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],datasets:[{label:"Ventas",backgroundColor:"rgba(156, 242, 110, 0.84)",borderColor:"rgba(88, 215, 20, 1)",borderWidth:2,hoverBackgroundColor:"rgba(88, 215, 20, 1)",hoverBorderColor:"rgba(88, 215, 20, 1)",data:[200526,251e3,19e4,3e5,201e3,195e3,21e4,25e4,198e3,205e3,183e3,186e3]}]},w=function(){return r.a.createElement(O.a,{title:"Ventas 2019",bordered:!1},r.a.createElement(A.a,{data:B,height:100,options:{maintainAspectRatio:!0}}))},j={labels:["AQUAPRIMA","BACARDI","DILTEX"],datasets:[{data:[300,50,100],backgroundColor:["#FF6384","#36A2EB","#FFCE56"],hoverBackgroundColor:["#FF6384","#36A2EB","#FFCE56"]}]},S=function(){return r.a.createElement(O.a,{title:"Clientes",bordered:!1},r.a.createElement(A.b,{data:j,height:100}))},P={labels:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],datasets:[{label:"Cobrado",fill:!1,lineTension:.1,backgroundColor:"rgba(166, 166, 166, 0.81)",borderColor:"rgba(0, 0, 0, 0.81)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(0, 0, 0, 0.81)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(59, 59, 59, 0.81)",pointHoverBorderColor:"rgba(59, 59, 59, 0.81)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:[195e3,23e4,15e4,25e4,201e3,11e4,2e5,26e4,2e5,204e3,183e3,2e5]},{label:"Vendido",fill:!1,lineTension:.1,backgroundColor:"rgba(255, 0, 0, 0.62)",borderColor:"rgba(255, 0, 0, 0.78)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(255, 0, 0, 1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(255, 0, 0, 1)",pointHoverBorderColor:"rgba(255, 0, 0, 1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:[200526,251e3,19e4,3e5,201e3,195e3,21e4,25e4,198e3,205e3,183e3,186e3]}]},R=function(){return r.a.createElement(O.a,{title:"Cobranza 2019",bordered:!1},r.a.createElement(A.c,{data:P,height:50,weight:300}))},x=a(60),F=a(25),D=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(x.a,null,r.a.createElement(F.a,{span:12},r.a.createElement(w,null)),r.a.createElement(F.a,{span:12},r.a.createElement(S,null))),r.a.createElement(x.a,null,r.a.createElement(F.a,{span:24},r.a.createElement(R,null))))}}]),t}(n.Component),I=(a(381),a(382),m.a.Sider),T=m.a.Content,H=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={collapsed:!0,opcion:"tabla"},a.toggle=function(){a.setState({collapsed:!a.state.collapsed})},a.option=function(e){console.log(e.item.props.name),a.setState({opcion:e.item.props.name})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.opcion;return r.a.createElement(m.a,{style:{position:"fixed",zIndex:1,width:"100%",height:"100%"}},r.a.createElement(I,{trigger:null,collapsible:!0,collapsed:this.state.collapsed},r.a.createElement(p.a,{theme:"dark",mode:"inline",defaultSelectedKeys:["1"]},r.a.createElement("div",{className:"collapse",onClick:this.toggle},r.a.createElement(b.a,{className:"trigger",type:this.state.collapsed?"menu-unfold":"menu-fold"})),r.a.createElement(p.a.Item,{key:"1",name:"tabla",onClick:this.option},r.a.createElement(b.a,{type:"table"}),r.a.createElement("span",null,"Control")),r.a.createElement(p.a.Item,{key:"2",name:"analitycs",onClick:this.option},r.a.createElement(b.a,{type:"bar-chart"}),r.a.createElement("span",null,"Analitycs")),r.a.createElement(p.a.Item,{key:"3",name:"upload",onClick:this.option},r.a.createElement(b.a,{type:"upload"}),r.a.createElement("span",null,"Agregar Facturas")))),r.a.createElement(m.a,null,r.a.createElement(g,null),r.a.createElement(T,null,"tabla"===e&&r.a.createElement(k,null),"analitycs"===e&&r.a.createElement(D,null))))}}]),t}(n.Component),N=a(184),M=a(33),J=a(182),W=a(183),z=Object(M.combineReducers)({});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var G=function(){var e=M.applyMiddleware.apply(void 0,[W.a].concat([])),t=Object(J.composeWithDevTools)(e);return Object(M.createStore)(z,{},t)}();l.a.render(r.a.createElement(N.a,{store:G},r.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[188,1,2]]]);
//# sourceMappingURL=main.7ffb672c.chunk.js.map