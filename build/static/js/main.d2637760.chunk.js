(this.webpackJsonpcuentas=this.webpackJsonpcuentas||[]).push([[0],{188:function(e,t,a){e.exports=a(385)},193:function(e,t,a){},381:function(e,t,a){},385:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(7),i=a.n(r),l=(a(193),a(50)),c=a(51),s=a(54),d=a(52),u=a(55),p=a(387),m=a(132),b=a(11),g=function(){var e=p.a.Header;return o.a.createElement(e,{className:"header"},o.a.createElement("div",{className:"textHeader"},"CUENTAS POR COBRAR"))},h=a(388),f=a(57),v=a.n(f),E=function(e){var t,a,n;return v.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.method,o.next=3,v.a.awrap(fetch(e.endpoint,{method:t}));case 3:return a=o.sent,o.next=6,v.a.awrap(a.json());case 6:return n=o.sent,o.abrupt("return",n);case 8:case"end":return o.stop()}}))},y=function(){var e;return v.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return e={endpoint:"http://www.misistema.mx/beluga/Finanzas/endpoints/cuentas/get/clientes.php",method:"GET"},t.abrupt("return",E(e));case 2:case"end":return t.stop()}}))},C=p.a.Content,k=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={data:[],columns:[],loading:!1},a.componentDidMount=function(){var e=a.state.data;a.setState({loading:!0});y().then((function(t){t.payload.map((function(t,a){return e.push({key:a,cliente:t,numeroDeFacturasPorPagar:"",montoTotalPorPagar:"",semana1:"",semana2:""}),t})),a.setState({data:e})})),a.setState({data:e,columns:[{title:"CLIENTE",dataIndex:"cliente",key:"cliente"},{title:"# DE FACTURAS POR PAGAR",dataIndex:"numeroDeFacturasPorPagar",key:"numeroDeFacturasPorPagar"},{title:"MONTO TOTAL POR PAGAR",dataIndex:"montoTotalPorPagar",key:"montoTotalPorPagar"},{title:"SEMANA 1",dataIndex:"semana1",key:"semana1"},{title:"SEMANA 2",dataIndex:"semana2",key:"semana2"}],loading:!1})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.data,a=e.columns,n=e.loading;return o.a.createElement(C,null,o.a.createElement(p.a,{style:{padding:"24px 24px",background:"#fff"}},o.a.createElement(h.a,{className:"components-table-demo-nested",columns:a,dataSource:t,loading:n,bordered:!0,pagination:{position:"top"}})))}}]),t}(n.Component),w=a(53),A=a(389),O={labels:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],datasets:[{label:"Ventas",backgroundColor:"rgba(156, 242, 110, 0.84)",borderColor:"rgba(88, 215, 20, 1)",borderWidth:2,hoverBackgroundColor:"rgba(88, 215, 20, 1)",hoverBorderColor:"rgba(88, 215, 20, 1)",data:[200526,251e3,19e4,3e5,201e3,195e3,21e4,25e4,198e3,205e3,183e3,186e3]}]},S=function(){return o.a.createElement(A.a,{title:"Ventas 2019",bordered:!1},o.a.createElement(w.a,{data:O,height:100,options:{maintainAspectRatio:!0}}))},j={labels:["AQUAPRIMA","BACARDI","DILTEX"],datasets:[{data:[300,50,100],backgroundColor:["#FF6384","#36A2EB","#FFCE56"],hoverBackgroundColor:["#FF6384","#36A2EB","#FFCE56"]}]},B=function(){return o.a.createElement(A.a,{title:"Clientes",bordered:!1},o.a.createElement(w.b,{data:j,height:100}))},R={labels:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],datasets:[{label:"Cobrado",fill:!1,lineTension:.1,backgroundColor:"rgba(166, 166, 166, 0.81)",borderColor:"rgba(0, 0, 0, 0.81)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(0, 0, 0, 0.81)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(59, 59, 59, 0.81)",pointHoverBorderColor:"rgba(59, 59, 59, 0.81)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:[195e3,23e4,15e4,25e4,201e3,11e4,2e5,26e4,2e5,204e3,183e3,2e5]},{label:"Vendido",fill:!1,lineTension:.1,backgroundColor:"rgba(255, 0, 0, 0.62)",borderColor:"rgba(255, 0, 0, 0.78)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(255, 0, 0, 1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(255, 0, 0, 1)",pointHoverBorderColor:"rgba(255, 0, 0, 1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:[200526,251e3,19e4,3e5,201e3,195e3,21e4,25e4,198e3,205e3,183e3,186e3]}]},P=function(){return o.a.createElement(A.a,{title:"Cobranza 2019",bordered:!1},o.a.createElement(w.c,{data:R,height:50,weight:300}))},x=a(60),F=a(25),T=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(x.a,null,o.a.createElement(F.a,{span:12},o.a.createElement(S,null)),o.a.createElement(F.a,{span:12},o.a.createElement(B,null))),o.a.createElement(x.a,null,o.a.createElement(F.a,{span:24},o.a.createElement(P,null))))}}]),t}(n.Component),D=(a(381),a(382),p.a.Sider),I=p.a.Content,N=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={collapsed:!0,opcion:"tabla"},a.toggle=function(){a.setState({collapsed:!a.state.collapsed})},a.option=function(e){console.log(e.item.props.name),a.setState({opcion:e.item.props.name})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.opcion;return o.a.createElement(p.a,{style:{position:"fixed",zIndex:1,width:"100%",height:"100%"}},o.a.createElement(D,{trigger:null,collapsible:!0,collapsed:this.state.collapsed},o.a.createElement(m.a,{theme:"dark",mode:"inline",defaultSelectedKeys:["1"]},o.a.createElement("div",{className:"collapse",onClick:this.toggle},o.a.createElement(b.a,{className:"trigger",type:this.state.collapsed?"menu-unfold":"menu-fold"})),o.a.createElement(m.a.Item,{key:"1",name:"tabla",onClick:this.option},o.a.createElement(b.a,{type:"table"}),o.a.createElement("span",null,"Control")),o.a.createElement(m.a.Item,{key:"2",name:"analitycs",onClick:this.option},o.a.createElement(b.a,{type:"bar-chart"}),o.a.createElement("span",null,"Analitycs")),o.a.createElement(m.a.Item,{key:"3",name:"upload",onClick:this.option},o.a.createElement(b.a,{type:"upload"}),o.a.createElement("span",null,"Agregar Facturas")))),o.a.createElement(p.a,null,o.a.createElement(g,null),o.a.createElement(I,null,"tabla"===e&&o.a.createElement(k,null),"analitycs"===e&&o.a.createElement(T,null))))}}]),t}(n.Component),W=a(184),H=a(33),M=a(182),J=a(183),U=Object(H.combineReducers)({});var z=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function L(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var G=function(){var e=H.applyMiddleware.apply(void 0,[J.a].concat([])),t=Object(M.composeWithDevTools)(e);return Object(H.createStore)(U,{},t)}();i.a.render(o.a.createElement(W.a,{store:G},o.a.createElement(N,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Alerramm/cuentas.git",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/Alerramm/cuentas.git","/service-worker.js");z?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):L(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):L(t,e)}))}}()}},[[188,1,2]]]);
//# sourceMappingURL=main.d2637760.chunk.js.map