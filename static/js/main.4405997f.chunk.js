(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(2),c=n.n(r),i=(n(14),n(3)),l=n(4),s=n(6),u=n(5),m=n(7),d=(n(15),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={items:[]},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.openweathermap.org/data/2.5/forecast?q=Yogyakarta,id&mode=json&appid=e1522e4dd8a16d7ada4bd39f22c57e4b&units=metric").then(function(e){return e.json()}).then(function(e){return e.list.map(function(e){return{date:"".concat(e.dt_txt),temp:"".concat(e.main.temp),temp_min:"".concat(e.main.temp_min),temp_max:"".concat(e.main.temp_max),weather:"".concat(e.weather[0].main)}})}).then(function(t){return e.setState({items:t,isLoaded:!1})}).catch(function(e){return console.log("parsing failed",e)})}},{key:"render",value:function(){var e=this.state.items;return o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("h2",{className:"ctr"},"Prakiraan Cuaca Yogyakarta"),o.a.createElement("table",{className:"table"},o.a.createElement("thead",{className:"thead-dark"},o.a.createElement("tr",null,o.a.createElement("th",{scope:"col"},"Date"),o.a.createElement("th",{scope:"col"},"Temp"),o.a.createElement("th",{scope:"col"},"Temp Min"),o.a.createElement("th",{scope:"col"},"Temp Max"),o.a.createElement("th",{scope:"col"},"Weather"))),o.a.createElement("tbody",null,e.length>0?e.map(function(e){var t=e.date,n=e.temp,a=e.temp_min,r=e.temp_max,c=e.weather;return o.a.createElement("tr",null,o.a.createElement("th",null,t),o.a.createElement("td",null,n),o.a.createElement("td",null,a),o.a.createElement("td",null,r),o.a.createElement("td",null,c))}):null))))}}]),t}(a.Component));var h=function(){return o.a.createElement("div",null,o.a.createElement(d,null))},p=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function f(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(o.a.createElement(h,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/responsiWEB3",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/responsiWEB3","/service-worker.js");p?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):f(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):f(t,e)})}}()},8:function(e,t,n){e.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.4405997f.chunk.js.map