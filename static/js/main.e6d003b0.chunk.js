(this["webpackJsonpmusic-player"]=this["webpackJsonpmusic-player"]||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n.n(r),a=n(12),i=n.n(a),s=n(4),o=n.n(s),u=n(6),l=n(3),j=n(8),d=n(0),b=function(e){var t=e.currentSong;return Object(d.jsxs)("div",{className:"song",children:[Object(d.jsx)("img",{src:t.image,alt:t.name}),Object(d.jsx)("h2",{children:t.name}),Object(d.jsx)("h3",{children:t.artist})]})},p=n(7),h=n(5),g=function(e){var t=e.setSongs,n=e.setCurrentSong,r=e.songs,c=e.currentSong,a=e.isPlaying,i=e.setIsPlaying,s=e.audioRef,j=e.songInfo,b=e.setSongInfo,g=function(e){return Math.floor(e/60)+":"+("0"+Math.floor(e%60)).slice(-2)},O=function(){var e=Object(u.a)(o.a.mark((function e(t){var i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=r.findIndex((function(e){return e.id===c.id})),"skip-forward"!==t){e.next=7;break}return e.next=4,n(r[(i+1)%r.length]);case 4:f(r[(i+1)%r.length]),e.next=16;break;case 7:if("skip-back"!==t){e.next=16;break}if((i-1)%r.length!==-1){e.next=13;break}return n(r[r.length-1]),a&&s.current.play(),f(r[r.length-1]),e.abrupt("return");case 13:return e.next=15,n(r[(i-1)%r.length]);case 15:f(r[(i-1)%r.length]);case 16:a&&s.current.play();case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(e){var n=r.map((function(t){return t.id===e.id?Object(l.a)(Object(l.a)({},t),{},{active:!0}):Object(l.a)(Object(l.a)({},t),{},{active:!1})}));t(n)};return Object(d.jsxs)("div",{className:"player",children:[Object(d.jsxs)("div",{className:"time-control",children:[Object(d.jsx)("div",{children:g(j.currentTime)}),Object(d.jsx)("input",{onChange:function(e){s.current.currentTime=e.target.value,b(Object(l.a)(Object(l.a)({},j),{},{currentTime:e.target.value}))},min:"0",max:g(j.duration)||0,value:j.currentTime,type:"range"}),Object(d.jsx)("div",{children:j.duration?g(j.duration):"0:00"})]}),Object(d.jsxs)("div",{className:"player-control",children:[Object(d.jsx)(p.a,{size:"2x",icon:h.a,onClick:function(){return O("skip-back")}}),Object(d.jsx)(p.a,{onClick:function(){a?(s.current.pause(),i(!a)):(s.current.play(),i(!a))},size:"2x",icon:a?h.d:h.e}),Object(d.jsx)(p.a,{size:"2x",icon:h.b,onClick:function(){return O("skip-forward")}})]})]})},O=n(27),f=function(){return[{name:"Bliss (A Felicidade)",artist:"Misha, Jussi Halme",image:"https://chillhop.com/wp-content/uploads/2021/05/2473c60e471fe9b40e246bf7711c87d3d6ea69a7-1024x1024.jpg",audio:"https://mp3.chillhop.com/serve.php/?mp3=17933",color:["#EE7E78","#292F47"],id:Object(O.a)(),active:!0},{name:"greatefull",artist:"Jussi Halme",image:"https://chillhop.com/wp-content/uploads/2021/05/2473c60e471fe9b40e246bf7711c87d3d6ea69a7-1024x1024.jpg",audio:"https://mp3.chillhop.com/serve.php/?mp3=19058",color:["#EE7E78","#292F47"],id:Object(O.a)(),active:!1},{name:"Kinship",artist:"Sleepy Fish, mommy",image:"https://chillhop.com/wp-content/uploads/2021/05/1245c0271290a3196328c0cf4aaa910cd873dfe7-1024x1024.jpg",audio:"https://mp3.chillhop.com/serve.php/?mp3=17931",color:["#EE7E78","#292F47"],id:Object(O.a)(),active:!1}]},m=function(e){var t=e.song,n=e.songs,r=e.setCurrentSong,c=e.audioRef,a=e.isPlaying,i=e.setSongs,s=function(){var e=Object(u.a)(o.a.mark((function e(){var s,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=n.map((function(e){return e.id===t.id?Object(l.a)(Object(l.a)({},e),{},{active:!0}):Object(l.a)(Object(l.a)({},e),{},{active:!1})})),e.next=3,i(s);case 3:return u=t,e.next=6,r(u);case 6:a&&c.current.play();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{onClick:s,className:"library-song ".concat(t.active?"selected":""),children:[Object(d.jsx)("img",{src:t.image,alt:t.name}),Object(d.jsxs)("div",{className:"song-description",children:[Object(d.jsx)("h3",{children:t.name}),Object(d.jsx)("h4",{children:t.artist})]})]})},x=function(e){var t=e.songs,n=e.setCurrentSong,r=e.audioRef,c=e.isPlaying,a=e.setSongs,i=e.isOpenLibrary;return Object(d.jsxs)("div",{className:"library ".concat(i?"library-active":""),children:[Object(d.jsx)("h2",{children:"Library"}),t.map((function(e){return Object(d.jsx)(m,{setSongs:a,isPlaying:c,audioRef:r,songs:t,setCurrentSong:n,id:e.id,song:e},e.id)}))]})},v=function(e){var t=e.isOpenLibrary,n=e.setIsOpenLibrary;return Object(d.jsx)("div",{className:"nav-main",children:Object(d.jsxs)("div",{className:"nav-container",children:[Object(d.jsx)("h1",{children:"Waves"}),Object(d.jsxs)("button",{onClick:function(){return n(!t)},children:["Library",Object(d.jsx)(p.a,{icon:h.c})]})]})})};var y=function(){var e=Object(r.useState)(f()),t=Object(j.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(n[0]),i=Object(j.a)(a,2),s=i[0],p=i[1],h=Object(r.useState)(!1),O=Object(j.a)(h,2),m=O[0],y=O[1],S=Object(r.useRef)(null),k=Object(r.useState)({currentTime:0,duration:0}),C=Object(j.a)(k,2),w=C[0],I=C[1],L=Object(r.useState)(!1),E=Object(j.a)(L,2),N=E[0],P=E[1],T=function(e){var t=e.target.currentTime,n=e.target.duration;I(Object(l.a)(Object(l.a)({},w),{},{currentTime:t,duration:n}))},F=function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.findIndex((function(e){return e.id===s.id})),e.next=3,p(n[(t+1)%n.length]);case 3:m&&S.current.play();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"App ".concat(N?"library--active":""),children:[Object(d.jsx)(v,{setIsOpenLibrary:P,isOpenLibrary:N}),Object(d.jsx)(b,{currentSong:s}),Object(d.jsx)(g,{setSongs:c,setCurrentSong:p,songs:n,songInfo:w,setSongInfo:I,audioRef:S,isPlaying:m,setIsPlaying:y,currentSong:s}),Object(d.jsx)(x,{isOpenLibrary:N,setIsOpenLibrary:P,setSongs:c,isPlaying:m,audioRef:S,setCurrentSong:p,songs:n}),Object(d.jsx)("audio",{onEnded:F,onLoadedMetadata:T,onTimeUpdate:T,ref:S,src:s.audio})]})},S=(n(24),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))});i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(y,{})}),document.getElementById("root")),S()}},[[25,1,2]]]);
//# sourceMappingURL=main.e6d003b0.chunk.js.map