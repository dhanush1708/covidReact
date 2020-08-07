(this.webpackJsonpcovidtut=this.webpackJsonpcovidtut||[]).push([[0],{11:function(e,t,a){e.exports={container:"Cards_container__3bjn6",card:"Cards_card__eGUfZ",infected:"Cards_infected__-adYp",recovered:"Cards_recovered__1aizD",deaths:"Cards_deaths__Qdjzq"}},202:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(64),o=a.n(c),s=a(5),i=a.n(s),d=a(13),u=a(65),l=a(66),p=a(76),m=a(74),f=a(215),v=a(218),b=a(217),h=a(219),E=a(26),g=a.n(E),x=a(11),y=a.n(x),_=a(27),C=a.n(_),k=function(e){var t=e.data,a=t.confirmed,r=t.recovered,c=t.deaths,o=t.lastUpdate;return a?n.a.createElement("div",{className:y.a.container},n.a.createElement(f.a,{container:!0,spacing:3,justify:"center"},n.a.createElement(f.a,{item:!0,component:v.a,xs:12,md:3,className:C()(y.a.card,y.a.infected)},n.a.createElement(b.a,null,n.a.createElement(h.a,{color:"textSecondary",gutterBottom:!0},"Infected"),n.a.createElement(h.a,{variant:"h5"},n.a.createElement(g.a,{end:a.value,duration:1,separator:","})),n.a.createElement(h.a,{color:"textSecondary"},"as on ",new Date(o).toDateString()),n.a.createElement(h.a,{variant:"body2"},"Number of active COVID-19 cases"))),n.a.createElement(f.a,{item:!0,component:v.a,xs:12,md:3,className:C()(y.a.card,y.a.recovered)}," ",n.a.createElement(b.a,null,n.a.createElement(h.a,{color:"textSecondary",gutterBottom:!0},"Recovered"),n.a.createElement(h.a,{variant:"h5"},n.a.createElement(g.a,{end:r.value,duration:1,separator:","})),n.a.createElement(h.a,{color:"textSecondary"},"as on ",new Date(o).toDateString()),n.a.createElement(h.a,{variant:"body2"},"Number of Recovered COVID-19 cases"))),n.a.createElement(f.a,{item:!0,component:v.a,xs:12,md:3,className:C()(y.a.card,y.a.deaths)}," ",n.a.createElement(b.a,null,n.a.createElement(h.a,{color:"textSecondary",gutterBottom:!0},"Deaths"),n.a.createElement(h.a,{variant:"h5"},n.a.createElement(g.a,{end:c.value,duration:1,separator:","})),n.a.createElement(h.a,{color:"textSecondary"},"as on ",new Date(o).toDateString()),n.a.createElement(h.a,{variant:"body2"},"Number of deaths due to COVID-19"))))):"Loading..."},D=a(75),O=a(38),S=a.n(O),j="https://covid19.mathdro.id/api",w=function(){var e=Object(d.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.a.get(j);case 3:return t=e.sent,a={confirmed:t.data.confirmed,recovered:t.data.recovered,deaths:t.data.deaths,lastUpdate:t.data.lastUpdate},e.abrupt("return",a);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(d.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.a.get(j+"/daily");case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),B=a(71),I=a(72),L=a.n(I),R=function(){var e=Object(r.useState)({}),t=Object(D.a)(e,2),a=t[0],c=t[1];Object(r.useEffect)((function(){(function(){var e=Object(d.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=c,e.next=3,N();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var o=null!=a[0]?n.a.createElement(B.Line,{options:{responsive:!0,legend:{display:!0},scales:{xAxes:[{gridLines:{display:!1},ticks:{autoSkip:!0,maxTicksLimit:12}}],yAxes:[{scaleLabel:{display:!0,labelString:"Cases"},ticks:{stepSize:4e6},gridLines:{display:!1}}]}},data:{labels:a.map((function(e){var t=e.reportDate;return new Date(t).toLocaleString("en",{month:"short"})})),datasets:[{data:a.map((function(e){return e.totalConfirmed})),label:"Infected",borderColor:"rgba(0,0,255,0.6)",backgroundColor:"rgba(0,0,255,0.1)",pointBorderColor:"rgba(0,0,0,0)",pointBackgroundColor:"rgba(0,0,0,0)",pointRadius:20,borderWidth:3},{data:a.map((function(e){return e.deaths.total})),label:"Deaths",borderColor:"rgba(255,0,0,0.6)",backgroundColor:"rgba(255,0,0,0.2)",pointBorderColor:"rgba(0,0,0,0)",pointBackgroundColor:"rgba(0,0,0,0)",pointRadius:20}]}}):null;return n.a.createElement("div",{className:L.a.container},o)},U=a(73),z=a.n(U),A=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(e){var r;return Object(u.a)(this,a),(r=t.call(this,e)).state={data:{}},r}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(d.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.data;return n.a.createElement("div",{className:z.a.container},n.a.createElement(k,{data:e}),n.a.createElement(R,null))}}]),a}(n.a.Component);o.a.render(n.a.createElement(A,null),document.getElementById("root"))},72:function(e,t,a){e.exports={container:"Chart_container__1PIOn"}},73:function(e,t,a){e.exports={container:"App_container__1MQN3"}},79:function(e,t,a){e.exports=a(202)}},[[79,1,2]]]);
//# sourceMappingURL=main.a28796e4.chunk.js.map