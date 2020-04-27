(this["webpackJsonpclima-app"]=this["webpackJsonpclima-app"]||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"SET_CITY",(function(){return z})),a.d(n,"SET_FORECAST_DATA",(function(){return H})),a.d(n,"GET_WEATHER_CITY",(function(){return Y})),a.d(n,"SET_WEATHER_CITY",(function(){return q})),a.d(n,"setSelectedCity",(function(){return F})),a.d(n,"setWeather",(function(){return M}));var c,r=a(0),o=a.n(r),i=a(25),u=a.n(i),l=a(17),s=(a(59),a(15)),m=a(16),d=a(18),f=a(19),p=a(101),h=a(8),E=a(116),y=(a(35),function(e){var t=e.city;return o.a.createElement("div",{className:"LocationCont"},o.a.createElement("h1",null,t))}),v=a(4),b=a(33),O=a.n(b),w=(a(26),c={},Object(v.a)(c,"cloud","cloud"),Object(v.a)(c,"rain","rain"),Object(v.a)(c,"sun","day-sunny"),Object(v.a)(c,"snow","snow"),Object(v.a)(c,"thunder","day-thunderstorm"),Object(v.a)(c,"drizzle","day-showers"),c),j=function(e){var t=e.temperatura,a=e.state;return o.a.createElement("div",{className:"climaTemperature"},function(e){var t=w[e];return t?o.a.createElement(O.a,{className:"wicon",name:t,size:"4x"}):o.a.createElement(O.a,{className:"wicon",name:"day-sunny",size:"4x"})}(a),o.a.createElement("span",{className:"temp"},"".concat(t," ")),o.a.createElement("span",{className:"tempType"},"C\xb0"))},C=function(e){var t=e.humidity,a=e.wind;return o.a.createElement("div",{className:"climaExtraInfoCont"},o.a.createElement("span",{className:"climaExtraText"},"Humedad ".concat(t," %")),o.a.createElement("span",{className:"climaExtraText"},"Vientos ".concat(a)))},T=function(e){var t=e.data,a=t.temperatura,n=t.state,c=t.humidity,r=t.wind;return o.a.createElement("div",{className:"climaData"},o.a.createElement(j,{temperatura:a,state:n}),o.a.createElement(C,{humidity:c,wind:r}))},D=function(e){var t=e.onClimaLocationClick,a=e.city,n=e.data;return o.a.createElement("div",{className:"climaLocationCont",onClick:t},o.a.createElement(y,{city:a}),n?o.a.createElement(T,{data:n}):o.a.createElement(E.a,{size:50}))},k=(a(36),function(e){var t=e.cities,a=e.onSelectedLocation;return console.log(t),o.a.createElement("div",{className:"LocationList"},function(e){return e.map((function(e){return o.a.createElement(D,{key:e.key,city:e.name,onClimaLocationClick:function(){return function(e){console.log("handleClimaLocationClick"),a(e)}(e.name)},data:e.data})}))}(t))}),_=a(13),x=a(47),g=a(14),S="c1a32c6a16e3c7c67e682396eb583f15",N=a(9),A=a.n(N),L=(a(61),a(44)),W=a.n(L),I=function(e){var t,a=e.main,n=a.humidity,c=a.temp,r=e.wind.speed,o=function(e){var t=e.id;return t<300?"thunder":t<400?"drizzle":t<600?"rain":t<700?"snow":800===t?"sun":"cloud"}(e.weather[0]);return{humidity:n,temperatura:(t=c,Number(W()(t).from("K").to("C").toFixed(0))),state:o,wind:"".concat(r," m/s")}},R=function(e){return e.list.filter((function(e){return 6===A.a.unix(e.dt).utc().hour()||12===A.a.unix(e.dt).utc().hour()||18===A.a.unix(e.dt).utc().hour()||6===A.a.unix(e.dt).hour()||12===A.a.unix(e.dt).hour()||18===A.a.unix(e.dt).hour()})).map((function(e){return{weekDay:A.a.unix(e.dt).format("ddd"),hour:A.a.unix(e.dt).hour(),data:I(e)}}))},z="SET_CITY",H="SET_FORECAST_DATA",Y="GET_WEATHER_CITY",q="SET_WEATHER_CITY",F=function(e){return function(t,a){var n="".concat("http://api.openweathermap.org/data/2.5/forecast","?q=").concat(e,"&appid=").concat(S);console.log(n),t(function(e){return{type:z,payload:e}}(e));var c=a(),r=c.cities[e]&&c.cities[e].forecastDate,o=new Date;if(!(r&&o-r<6e4))return fetch(n).then((function(e){return e.json()})).then((function(a){var n=R(a);console.log(n),t(function(e){return{type:H,payload:e}}({city:e,forecastData:n}))}))}},M=function(e){return function(t){e.forEach((function(a){t(function(e){return{type:Y,payload:e}}(a));var n="".concat("http://api.openweathermap.org/data/2.5/weather","?q=").concat(e,"&appid=").concat(S);fetch(n).then((function(e){return e.json()})).then((function(e){var n=I(e);t(function(e){return{type:q,payload:e}}({city:a,weather:n}))}))}))}},B=a(45),G=a.n(B),J=Object(_.a)((function(e,t){return e[t]&&e[t].forecastData}),(function(e){return e})),P=Object(_.a)((function(e){return t=e,G()(t).map((function(e){var t=Object(x.a)(e,2),a=t[0];return{key:a,name:a,data:t[1].weather}}));var t}),(function(e){return e})),V=Object(h.c)({cities:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case H:var a=t.payload,n=a.city,c=a.forecastData;return Object(g.a)({},e,Object(v.a)({},n,Object(g.a)({},e[n],{forecastData:c,forecastDate:new Date})));case Y:var r=t.payload;return Object(g.a)({},e,Object(v.a)({},r,Object(g.a)({},e[r],{weather:null})));case q:var o=t.payload,i=o.city,u=o.weather;return Object(g.a)({},e,Object(v.a)({},i,Object(g.a)({},e[i],{weather:u})));default:return e}},city:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case z:return t.payload;default:return e}}}),X=Object(_.a)((function(e){return e.city}),(function(e){return e})),K=Object(_.a)((function(e){return e.cities}),X,J),U=Object(_.a)((function(e){return e.cities}),P),$=function(e){Object(f.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).handleSelectionLocation=function(t){e.props.setSelectedCity(t)},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.cities,a=e.city;this.props.setWeather(t),this.props.setSelectedCity(a)}},{key:"render",value:function(){return console.log(this.props.citiesWeather),o.a.createElement(k,{cities:this.props.citiesWeather,onSelectedLocation:this.handleSelectionLocation})}}]),a}(r.Component),Q=Object(l.b)((function(e){return{citiesWeather:U(e),city:X(e)}}),(function(e){return Object(h.b)(n,e)}))($),Z=function(e){var t=e.weekDay,a=e.hour,n=e.data;return o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("h2",null,t," Hora: ",a,"hs")),o.a.createElement(T,{data:n}))},ee=function(e){var t=e.city,a=e.forecastData;return o.a.createElement("div",{className:"Forecast-title"},o.a.createElement("h2",null,"Pronostico extendido ",t),a?function(e){return e.map((function(e){return o.a.createElement(Z,{key:"".concat(e.weekDay).concat(e.hour),weekDay:e.weekDay,hour:e.hour,data:e.data})}))}(a):o.a.createElement("h3",null,"cargando pronostico"))},te=function(e){Object(f.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props,t=e.city,a=e.forecastData;return t&&o.a.createElement(ee,{city:t,forecastData:a})}}]),a}(r.Component),ae=Object(l.b)((function(e){return{city:X(e),forecastData:K(e)}}),null)(te),ne=a(20),ce=a(117),re=a(119),oe=a(118),ie=(a(99),["barquisimeto,ve","bogota,col","Madrid,es","Lima,pe"]),ue=function(e){Object(f.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return o.a.createElement(ne.Grid,{className:"App"},o.a.createElement(ne.Row,null,o.a.createElement(ce.a,{position:"sticky"},o.a.createElement(oe.a,null,o.a.createElement(re.a,{variant:"subtitle1",color:"inherit"},"Clima App")))),o.a.createElement(ne.Row,null,o.a.createElement(ne.Col,{xs:12,md:6},o.a.createElement(Q,{cities:ie})),o.a.createElement(ne.Col,{xs:12,md:6},o.a.createElement(p.a,{elevation:4},o.a.createElement("div",{className:"Details"},o.a.createElement(ae,null))))))}}]),a}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var le=a(46),se=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||h.d,me=Object(h.e)(V,{city:"Barquisimeto, ve"},se(Object(h.a)(le.a)));u.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(l.a,{store:me},o.a.createElement(ue,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},26:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},50:function(e,t,a){e.exports=a(100)},59:function(e,t,a){},99:function(e,t,a){}},[[50,1,2]]]);
//# sourceMappingURL=main.74d34916.chunk.js.map