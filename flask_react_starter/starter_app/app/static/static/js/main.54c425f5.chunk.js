(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{23:function(e,t,a){e.exports=a.p+"static/media/hiclipart_football.a1d9a169.png"},57:function(e,t,a){e.exports=a.p+"static/media/stats_picture.6d50b6ac.png"},58:function(e,t,a){e.exports=a.p+"static/media/data_image.b0dc9ae5.jpg"},67:function(e,t,a){e.exports=a(85)},72:function(e,t,a){},78:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){e.exports=a.p+"static/media/players_background.44c48b37.jpg"},85:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(10),l=a.n(o),c=(a(72),a(16)),s=a(14),i=a(11),m=a(6),u=a.n(m),p=a(9),d=a(17),f=a(25),g=a.n(f),b=function(e){return{type:"SET_USER",user:e}},y=function(e,t){return function(){var a=Object(p.a)(u.a.mark((function a(n){var r,o,l;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(e&&t){a.next=2;break}return a.abrupt("return");case 2:return console.log(e,t),r=g.a.get("XSRF-TOKEN"),console.log(r),a.next=7,fetch("/api/users/",{method:"put",headers:{"Content-Type":"application/json","X-CSRF-TOKEN":r},body:JSON.stringify({username:e,password:t})});case 7:return o=a.sent,a.next=10,o.json();case 10:if(l=a.sent,console.log(l),!o.ok||!l.user){a.next=18;break}console.log(l.user),localStorage.setItem("user",JSON.stringify(l.user)),n(b(l.user)),a.next=19;break;case 18:return a.abrupt("return",l.errors);case 19:return a.abrupt("return",l);case 20:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},h=function(e,t,a){return function(){var n=Object(p.a)(u.a.mark((function n(r){var o,l,c;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=g.a.get("XSRF-TOKEN"),console.log(e,t,a),n.next=4,fetch("/api/users/",{method:"POST",headers:{"Content-Type":"application/json","X-CSRF-TOKEN":o},body:JSON.stringify({username:e,email:t,password:a})});case 4:return l=n.sent,n.next=7,l.json();case 7:if(c=n.sent,console.log(c),!l.ok||!c.user){n.next=15;break}return localStorage.setItem("user",JSON.stringify(c.user)),r(b(c.user)),n.abrupt("return",c);case 15:return n.abrupt("return",c.errors);case 16:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},x=JSON.parse(localStorage.getItem("user")),E=x?x:{};console.log(E);var v=a(114),N=a(121),j=a(122),k=a(124),T=a(125),C=a(117),w=a(119),O=a(120);a(78);var S=function(){var e=Object(i.c)((function(e){return e.auth})),t=Object(v.a)({navBar:{backgroundImage:"radial-gradient(rgba(110, 12, 25, .9), rgb(110, 12, 25, .9), rgba(0, 0, 0, .7))",width:"100%",padding:"0",maxHeight:"64px"},leftSide:{display:"flex",padding:"0 2em",justifyContent:"flex-start"},middle:{display:"flex",justifyContent:"center"},rightSide:{display:"flex",padding:"0 2em",justifyContent:"flex-end"},sideLinks:{padding:"0 .5em"},logo:{fontFamily:"Roboto"},logoutButton:{padding:"0 .5em","&:hover":{cursor:"pointer"}}})();return r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,{position:"sticky",className:t.navBar},r.a.createElement(w.a,null,r.a.createElement(O.a,{container:!0,xs:12},r.a.createElement(O.a,{item:!0,xs:3,className:t.leftSide},localStorage.getItem("user")?r.a.createElement("div",null,r.a.createElement(c.c,{to:"/myTeam/".concat(e.id),id:"links",className:t.sideLinks},"My team"),r.a.createElement(c.c,{to:"/players",id:"links",className:t.sideLinks},"Available Players")):null),r.a.createElement(O.a,{item:!0,xs:6,className:t.middle},r.a.createElement(c.c,{to:"/",activeclass:"active",id:"links",className:t.logo},"FFStockpile")),r.a.createElement(O.a,{item:!0,xs:3,className:t.rightSide},localStorage.getItem("user")?r.a.createElement("div",{className:t.logoutDiv},r.a.createElement("a",{onClick:function(){localStorage.clear(),window.location.href="/login"},className:t.logoutButton},"Log out")):r.a.createElement("div",null,r.a.createElement(c.c,{to:"/login",id:"links",className:t.sideLinks},"Login"),r.a.createElement(c.c,{to:"/signup",id:"links",className:t.sideLinks},"Sign up")))))))},I=function(e,t){return function(){var a=Object(p.a)(u.a.mark((function a(n){var r,o;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch("/api/ffsplayers/".concat(e,"/").concat(t));case 2:return r=a.sent,a.next=5,r.json();case 5:if(o=a.sent,console.log(o),!r.ok||o.errors){a.next=11;break}return localStorage.setItem("team_players",JSON.stringify(o)),n({type:"GET_FFSPLAYERS",ffsplayer:o}),a.abrupt("return",o);case 11:return a.abrupt("return",o);case 12:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},F=function(e,t,a){return function(){var n=Object(p.a)(u.a.mark((function n(r){var o,l,c,s;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/api/ffsplayers/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({player_id:e,league_id:t,team_id:a})});case 2:return o=n.sent,n.next=5,o.json();case 5:if(l=n.sent,console.log(l),!o.ok){n.next=15;break}return console.log("somthing"),n.next=11,r(I(t,a));case 11:return c=n.sent,console.log(c),s=Object.values(c),n.abrupt("return",s[s.length-1]);case 15:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},B=function(e){return function(){var t=Object(p.a)(u.a.mark((function t(a){var n,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/api/ffsplayers/".concat(e),{method:"DELETE",headers:{"Content-Type":"application/json"}});case 2:return n=t.sent,t.next=5,n.json();case 5:r=t.sent,console.log(r);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},_=JSON.parse(localStorage.getItem("team_players")),R=_||{};console.log(R);var D=function(e){return{type:"GET_LEAGUE",league:e}},L=function(e,t){return function(){var a=Object(p.a)(u.a.mark((function a(n){var r,o;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return e||(e=0),a.next=3,fetch("/api/leagues/".concat(e),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({leagueId:e})});case 3:return r=a.sent,a.next=6,r.json();case 6:return o=a.sent,console.log(o),r.ok&&o.league&&(localStorage.setItem("league",JSON.stringify(o.league)),n(D(o.league)),n(I(e,t))),a.abrupt("return",o);case 10:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},W=JSON.parse(localStorage.getItem("league")),P=W||{};console.log(P);var A=function(e){return function(){var t=Object(p.a)(u.a.mark((function t(a){var n,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return g.a.get("XSRF-TOKEN"),console.log(e),t.next=4,fetch("/api/teams/".concat(e),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({ownerId:e})});case 4:return n=t.sent,t.next=7,n.json();case 7:if(r=t.sent,console.log(r),!n.ok||!r.team){t.next=14;break}return localStorage.setItem("team",JSON.stringify(r.team)),a({type:"GET_TEAM",team:r.team}),a(L(r.team.league_id,r.team.id)),t.abrupt("return",r);case 14:return t.abrupt("return",r);case 15:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},U=JSON.parse(localStorage.getItem("team")),J=U||{};console.log(J);a(80);var G=a(23),H=a.n(G);var Y=function(){var e=Object(i.b)(),t=Object(n.useState)(""),a=Object(d.a)(t,2),o=a[0],l=a[1],s=Object(n.useState)(""),m=Object(d.a)(s,2),f=m[0],g=m[1],b=Object(n.useState)([]),h=Object(d.a)(b,2),x=h[0],E=h[1],C=function(){var t=Object(p.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),o&&f){t.next=5;break}E("Please enter a username and password"),t.next=17;break;case 5:return t.next=7,e(y(o,f));case 7:if(n=t.sent,console.log(n),!n[1]){t.next=14;break}console.log(n[1]),E(Object.values(n[1])),t.next=17;break;case 14:return t.next=16,e(A(n.user.id));case 16:window.location.href="./myTeam/".concat(n.user.id);case 17:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),w=Object(v.a)((function(e){return{loginForm:function(){return{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"fit-content",width:"100%",padding:"2em 0",backgroundColor:"rgba(255, 255, 255, .6)",backdropFilter:"5px",borderRadius:"10px"}},outerContainer:{width:"100vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100vh"},links:{textDecoration:"none",fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',padding:".7em",zIndex:"10",margin:"0","&:hover":{color:"white"}},header:{fontFamily:"Rockwell"},errorItem:{listStyleType:"none",color:"rgb(200, 0, 0)",fontWeight:"400",padding:".3em"},spacing:{padding:".3em 0"},loginButton:{padding:".3em",marginTop:".3em","&:hover":{backgroundColor:"blue",color:"white"}},signupButton:{backgroundColor:"rgba(255, 255, 255, .6)",marginTop:"1em",borderRadius:"10px",padding:"0","&:hover":{backgroundColor:"rgba(110, 12, 25, 1)"}},homeButton:{backgroundColor:"rgba(255, 255, 255, .6)",marginTop:"1em",borderRadius:"10px",padding:"0",width:"100%","&:hover":{backgroundColor:"rgba(200, 200, 255, .8)"}}}}))();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{class:"area"},r.a.createElement(N.a,{id:"login-form",className:w.outerContainer},r.a.createElement("ul",{class:"footballs"},r.a.createElement("div",null,r.a.createElement("img",{src:H.a})),r.a.createElement("div",null,r.a.createElement("img",{src:H.a})),r.a.createElement("div",null,r.a.createElement("img",{src:H.a})),r.a.createElement("div",null,r.a.createElement("img",{src:H.a}))),r.a.createElement("div",null,r.a.createElement("form",{method:"put",action:"/api/users/",onSubmit:C,className:w.loginForm},r.a.createElement(j.a,{variant:"h4",className:w.header},"FFStockpile"),x?r.a.createElement("div",{className:w.errorItem},x):null,r.a.createElement(k.a,{id:"standard-basic",className:w.spacing,type:"text",label:"Username",value:o,onChange:function(e){l(e.target.value)}}),r.a.createElement(k.a,{id:"standard-basic",className:w.spacing,type:"password",label:"Password",value:f,onChange:function(e){g(e.target.value)}}),r.a.createElement(T.a,{className:w.loginButton,type:"submit"},"Log in")),r.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},r.a.createElement(T.a,{className:w.signupButton},r.a.createElement(c.c,{to:"/signup",className:w.links},"Don't have an account? Sign up")),r.a.createElement(T.a,{component:c.b,to:"/",className:w.homeButton},r.a.createElement("p",{id:"homeButton",className:w.links},"Home")))))))},K=a(36);a(81);var X=function(){var e=Object(i.b)(),t=Object(n.useState)(""),a=Object(d.a)(t,2),o=a[0],l=a[1],s=Object(n.useState)(""),m=Object(d.a)(s,2),f=m[0],g=m[1],b=Object(n.useState)(""),x=Object(d.a)(b,2),E=x[0],C=x[1],w=Object(n.useState)(""),O=Object(d.a)(w,2),S=O[0],I=O[1],F=Object(n.useState)([]),B=Object(d.a)(F,2),_=B[0],R=B[1];Object(n.useEffect)((function(){console.log(Object.values(_))}),[_]);var D=function(){var t=Object(p.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),R([]),o&&f&&E&&S){t.next=8;break}return t.next=5,R(["Please fill out all fields."]);case 5:console.log(_),t.next=23;break;case 8:if(E!==S){t.next=23;break}return t.next=11,e(h(o,f,E));case 11:if(n=t.sent,console.log(n),!n.errors){t.next=20;break}console.log(n),R(Object.values(n.errors)),console.log(_),t.next=23;break;case 20:return t.next=22,e(y(o,E));case 22:window.location.href="./myTeam/".concat(n.user.id);case 23:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),L=Object(v.a)((function(e){return Object(K.a)({signupForm:function(){return Object(K.a)({display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"fit-content",width:"fit-content",padding:"2em",backgroundColor:"rgba(255, 255, 255, .6)",backdropFilter:"5px",borderRadius:"10px"},"padding","2em 3em")},outerContainer:{width:"100vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100vh",background:"linear-gradient(-45deg, rgba(255, 255, 255, .2),  rgba(25, 111, 12, .7))"},links:{textDecoration:"none",fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif'},header:{fontFamily:"Rockwell"},spacing:{marginTop:".3em"},errorList:{padding:"0",display:"flex",flexDirection:"column",alignItems:"center"},errorUL:{display:"flex",flexDirection:"column",alignItems:"center",margin:".3em 0 0 0",padding:"0"},errorItem:{listStyleType:"none",color:"rgb(200, 0, 0)",fontWeight:"400"},passwordConfirm:function(){return{marginTop:".3em",borderRadius:"3px",backgroundColor:S!==E?"rgba(255, 0, 0, .3)":"rgba(255, 255, 255, 0)"}},signupButton:{marginTop:"1em","&:hover":{backgroundColor:"rgba(110, 12, 25, 1)",color:"white"}},homeButton:{backgroundColor:"rgba(255, 255, 255, 0)",marginTop:"1em",borderRadius:"10px",padding:"0"}},"links",{textDecoration:"none",fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',padding:".7em",zIndex:"10"})}))();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{class:"area"},r.a.createElement(N.a,{className:L.outerContainer},r.a.createElement("ul",{class:"footballs"},r.a.createElement("div",null,r.a.createElement("img",{src:H.a})),r.a.createElement("div",null,r.a.createElement("img",{src:H.a})),r.a.createElement("div",null,r.a.createElement("img",{src:H.a})),r.a.createElement("div",null,r.a.createElement("img",{src:H.a}))),r.a.createElement("form",{action:"/api/users/",method:"post",onSubmit:D,className:L.signupForm},r.a.createElement(j.a,{variant:"h4",className:L.header},"FFStockpile"),_?r.a.createElement("div",{className:L.errorList},r.a.createElement("ul",{className:L.errorUL},_.map((function(e,t){return r.a.createElement("li",{key:t,className:L.errorItem},e)})))):null,r.a.createElement(k.a,{id:"standard-basic",className:L.spacing,type:"text",value:o,onChange:function(e){l(e.target.value)},label:"Username"}),r.a.createElement(k.a,{id:"standard-basic",className:L.spacing,type:"email",label:"Email",value:f,onChange:function(e){g(e.target.value)}}),r.a.createElement(k.a,{id:"standard-basic",className:L.spacing,type:"password",label:"Password",value:E,onChange:function(e){C(e.target.value)}}),r.a.createElement(k.a,{id:"standard-basic",className:L.spacing,type:"password",label:"Confirm Password",value:S,onChange:function(e){I(e.target.value)},inputProps:{className:L.passwordConfirm}}),r.a.createElement(T.a,{type:"submit",className:L.signupButton},"Sign up"),r.a.createElement(T.a,{className:L.homeButton},r.a.createElement(c.c,{to:"/",className:L.links},"Home"))))))},M=a(60),z=a(123);a(82);var Q=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.auth})),a=Object(i.c)((function(e){return e.teams})),o=Object(i.c)((function(e){return e.leagues.name})),l=Object(i.c)((function(e){return e.teams.name})),c=Object(i.c)((function(e){return e.ffsplayers})),m=Object(n.useState)(""),f=Object(d.a)(m,2),g=(f[0],f[1],t.id),b=a.league_id;t||(window.location.href="/");var y=function(){var t=Object(p.a)(u.a.mark((function t(n){var r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(I(b,a.id));case 2:r=t.sent,console.log(r);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=Object(p.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(g),t.next=3,e(A(g));case 3:n=t.sent,console.log(n),console.log(x);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),x=Object(M.a)(Object.values(c));Object(n.useEffect)((function(){h(),console.log(x)}),[]);var E=function(){var t=Object(p.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(n.target.value),t.next=3,e(B(n.target.value));case 3:t.sent,y(a.id,b);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),N=Object(v.a)((function(e){var t;return{outsideLinks:{display:"flex",flexDirection:"column",alignItems:"center",borderRight:"2px solid gray",height:"100%"},outsideContainer:{height:"100%"},infoContainer:{position:"absolute",top:"100px",minWidth:"fit-content"},playerInfo:{display:"flex",justifyContent:"center",height:"fit-content",minWidth:"fit-content",marginLeft:"5em"},logoutDiv:{width:"100%",display:"flex",justifyContent:"flex-end"},logoutButton:{"&:hover":{backgroundColor:"rgb(200, 0, 0)"}},gridTitle:{display:"flex",justifyContent:"center",minWidth:"fit-content",fontWeight:"600"},gridTitleName:{display:"flex",minWidth:"fit-content",fontWeight:"600"},playerInfoContainer:{paddingLeft:"0",paddingTop:".5em",width:"100%",overflowY:"overlay"},playerItem:{display:"flex",justifyContent:"center"},linksContainer:{height:"100%"},stuffContainer:{height:"100%",backgroundColor:"rgba(255, 255, 255, .6)",padding:"1em",borderRadius:"10px"},helpLinks:{marginTop:".5em",textDecoration:"none"},playerData:(t={display:"flex",justifyContent:"center",border:"1px solid black",padding:".2em 0",backgroundColor:"rgba(255, 255, 255, .5)",height:"2.5em"},Object(K.a)(t,"display","flex"),Object(K.a)(t,"alignItems","center"),t),playerDataName:{border:"1px solid black",padding:"0 0 0 .2em",backgroundColor:"rgba(255, 255, 255, .5)",height:"2.5em",display:"flex",alignItems:"center"},teamInfoContainer:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},leagueAndTeam:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginBottom:"1.5em",border:"2px solid black"},leagueAndTeamInfo:{padding:".2em"},dropButton:{border:"1px solid rgb(200, 0, 78)",borderRadius:"4px",padding:".3em",fontFamily:"Roboto, Helvetica, Arial, sans-serif",fontWeight:"500",color:"rgb(200, 0, 78)",backgroundColor:"transparent",textTransform:"uppercase","&:hover":{backgroundColor:"rgba(200, 0, 0, .3)",color:"black"}},noPlayers:{marginTop:".5em"}}}))();return r.a.createElement(r.a.Fragment,null,t?r.a.createElement("div",{id:"bodyDiv"},r.a.createElement(S,null),r.a.createElement("div",{className:N.outsideContainer},r.a.createElement(z.a,{className:N.infoContainer},r.a.createElement(O.a,{container:!0,item:!0,xs:12,className:N.stuffContainer},r.a.createElement(z.a,{className:N.leagueAndTeam},r.a.createElement(j.a,{variant:"h4",className:N.leagueAndTeamInfo},"League: ",o),r.a.createElement(j.a,{variant:"h4",className:N.leagueAndTeamInfo},"Team: ",l)),r.a.createElement(O.a,{item:!0,xs:2,className:N.linksContainer},r.a.createElement("div",{className:N.outsideLinks},r.a.createElement("a",{href:"https://fantasy.nfl.com/",className:N.helpLinks},"NFL Fantasy"),r.a.createElement("a",{href:"https://www.cbssports.com/fantasy/",className:N.helpLinks},"CBS Fantasy"),r.a.createElement("a",{href:"https://www.espn.com/fantasy/football/",className:N.helpLinks},"ESPN Fantasy"),r.a.createElement("a",{href:"https://football.fantasysports.yahoo.com/",className:N.helpLinks},"Yahoo Fantasy"))),r.a.createElement(O.a,{container:!0,item:!0,xs:9,className:N.playerInfo},r.a.createElement(O.a,{container:!0,item:!0},r.a.createElement(O.a,{item:!0,xs:2,className:N.gridTitleName},"Name"),r.a.createElement(O.a,{item:!0,xs:1,className:N.gridTitle},"Team"),r.a.createElement(O.a,{item:!0,xs:1,className:N.gridTitle},"Position"),r.a.createElement(O.a,{item:!0,xs:1,className:N.gridTitle},"Height"),r.a.createElement(O.a,{item:!0,xs:1,className:N.gridTitle},"Weight"),r.a.createElement(O.a,{item:!0,xs:2,className:N.gridTitle},"DOB"),r.a.createElement(O.a,{item:!0,xs:2,className:N.gridTitle},"College"),r.a.createElement(O.a,{item:!0,xs:1,className:N.gridTitle})),r.a.createElement(O.a,{className:N.playerInfoContainer},x.length?x.map((function(e){return r.a.createElement(O.a,{container:!0,item:!0},r.a.createElement(O.a,{item:!0,xs:2,className:N.playerDataName},e.full_name),r.a.createElement(O.a,{item:!0,xs:1,className:N.playerData},e.nfl_team),r.a.createElement(O.a,{item:!0,xs:1,className:N.playerData},e.position),r.a.createElement(O.a,{item:!0,xs:1,className:N.playerData},e.height),r.a.createElement(O.a,{item:!0,xs:1,className:N.playerData},e.weight),r.a.createElement(O.a,{item:!0,xs:2,className:N.playerData},e.dob),r.a.createElement(O.a,{item:!0,xs:2,className:N.playerData},e.college),r.a.createElement(O.a,{item:!0,xs:1,className:N.playerData},r.a.createElement("button",{className:N.dropButton,value:e.player_id,onClick:E},"Drop")))})):r.a.createElement(j.a,{variant:"h5",className:N.noPlayers}," - You must have a team to have players."))))))):r.a.createElement(s.a,{to:"/"}))};a(83);var q=function(){var e=Object(i.b)(),t=Object.values(Object(i.c)((function(e){return e.ffsplayers}))),a=Object(i.c)((function(e){return e.teams.id})),o=Object(i.c)((function(e){return e.leagues.id})),l=Object(i.c)((function(e){return e.ffsplayers})),c=Object(n.useState)([]),s=Object(d.a)(c,2),m=s[0],f=s[1],b=Object(n.useState)(""),y=Object(d.a)(b,2),h=(y[0],y[1],g.a.get("XSRF-TOKEN")),x=function(){var e=Object(p.a)(u.a.mark((function e(t){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(h),e.next=3,fetch("/api/players/".concat(o));case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,console.log(n.players),f(n.players),m.length?console.log(!0):console.log(!1);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(p.a)(u.a.mark((function e(t){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t.target.value),e.next=3,fetch("/api/players/".concat(o,"/").concat(t.target.value));case 3:return a=e.sent,t.persist(),e.next=7,a.json();case 7:n=e.sent,console.log(n.players),f(n.players);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){x()}),[]),Object(n.useEffect)((function(e){x()}),[l]);var N=function(){var t=Object(p.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(n.target.value,a,o),t.next=3,e(F(n.target.value,o,a));case 3:t.sent;case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=Object(v.a)((function(e){return{playerInfo:{position:"relative"},playersContainer:{width:"85%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"rgba(255, 255, 255, .6)",paddingTop:"1em",borderRadius:"3px"},playersContainerBar:{width:"85%",display:"flex",alignItems:"center",justifyContent:"center"},playerRow:{display:"flex",justifyContent:"center",padding:".2em 0",border:"1px solid black",height:"3em"},gridTitle:{display:"flex",justifyContent:"center",minWidth:"fit-content",fontWeight:"600"},gridTitleName:{display:"flex",minWidth:"fit-content",fontWeight:"600"},playerTitle:{display:"flex",justifyContent:"center",alignItems:"center",fontWeight:"450"},playerTitleName:{display:"flex",alignItems:"center",fontWeight:"450"},secondBar:{display:"flex",justifyContent:"center"},secondBarPlayer:{display:"flex",justifyContent:"center",width:"85%"},myTeamContainer:{display:"flex",flexDirection:"column",backgroundColor:"rgba(255, 255, 255, .6)",paddingTop:"1em",paddingBottom:"1em",borderRadius:"3px",marginRight:"5px"},leftGrid:{position:"sticky",overflowY:"overlay",height:"calc(100vh - 95px)"},rightGrid:{overflowY:"overlay",height:"calc(100vh - 95px)"},myTeamInfo:{display:"flex",justifyContent:"space-between",width:"100%"},myTeamPlayer:{display:"flex",maxWidth:"33.3%",justifyContent:"center",padding:".3em"},myTeamPlayerName:{display:"flex",maxWidth:"33.3%",justifyContent:"center",padding:".3em 0"},myTeamPlayerPosition:{display:"flex",maxWidth:"33.3%",justifyContent:"flex-start",padding:".3em"},myTeamTitle:{display:"flex",justifyContent:"center"},positionSelector:{display:"flex",justifyContent:"center",marginBottom:".8em",background:"rgba(255, 255, 255, .3)",padding:".5em 1em",borderRadius:"8px"},addButton:{border:"1px solid rgb(0, 0, 200)",borderRadius:"4px",padding:".3em",fontFamily:"Roboto, Helvetica, Arial, sans-serif",fontWeight:"500",color:"rgb(0, 0, 200)",backgroundColor:"transparent",textTransform:"uppercase","&:hover":{backgroundColor:"rgba(0, 0, 200, .3)",color:"white"}},positionButton:{border:"1px solid rgb(0, 0, 0)",borderRadius:"4px",padding:".3em",margin:"0 .7em",fontFamily:"Roboto, Helvetica, Arial, sans-serif",fontWeight:"500",color:"rgb(0, 0, 0)",backgroundColor:"transparent",textTransform:"uppercase","&:hover":{backgroundColor:"rgba(0, 0, 0, .3)",color:"white"}}}}))();return r.a.createElement(r.a.Fragment,null,r.a.createElement(S,null),r.a.createElement(C.a,{id:"secondBar"},r.a.createElement(O.a,{container:!0,item:!0,className:j.secondBar},r.a.createElement(O.a,{item:!0,xs:2},r.a.createElement(O.a,{item:!0,className:j.myTeamTitle},"My Team")),r.a.createElement(O.a,{xs:10,className:j.secondBarPlayer},r.a.createElement(z.a,{className:j.playersContainerBar},r.a.createElement(O.a,{item:!0,xs:2,className:j.gridTitleName},"Name"),r.a.createElement(O.a,{item:!0,xs:1,className:j.gridTitle},"Team"),r.a.createElement(O.a,{item:!0,xs:1,className:j.gridTitle},"Position"),r.a.createElement(O.a,{item:!0,xs:1,className:j.gridTitle},"Height"),r.a.createElement(O.a,{item:!0,xs:1,className:j.gridTitle},"Weight"),r.a.createElement(O.a,{item:!0,xs:2,className:j.gridTitle},"DOB"),r.a.createElement(O.a,{item:!0,xs:2,className:j.gridTitleName},"College"),r.a.createElement(O.a,{item:!0,xs:1}))))),r.a.createElement(z.a,{className:j.playerInfo},r.a.createElement(O.a,{container:!0,xs:12},r.a.createElement(O.a,{xs:2,className:j.leftGrid},r.a.createElement("div",{className:j.myTeamContainer},t.map((function(e){return r.a.createElement(O.a,{container:!0,className:j.myTeamInfo},r.a.createElement(O.a,{item:!0,xs:1}),r.a.createElement(O.a,{item:!0,xs:4,className:j.myTeamPlayerName},e.full_name),r.a.createElement(O.a,{item:!0,xs:3,className:j.myTeamPlayer},e.nfl_team),r.a.createElement(O.a,{item:!0,xs:3,className:j.myTeamPlayerPosition},e.position))})))),r.a.createElement(O.a,{xs:10,className:j.rightGrid},m.length?r.a.createElement(z.a,{className:j.playersContainer},r.a.createElement("div",{className:j.positionSelector},r.a.createElement("button",{value:"QB",className:j.positionButton,onClick:E},"QB"),r.a.createElement("button",{value:"RB",className:j.positionButton,onClick:E},"RB"),r.a.createElement("button",{value:"WR",className:j.positionButton,onClick:E},"WR"),r.a.createElement("button",{value:"TE",className:j.positionButton,onClick:E},"TE"),r.a.createElement("button",{value:"K",className:j.positionButton,onClick:E},"K"),r.a.createElement("button",{value:"DEF",className:j.positionButton,onClick:E},"DEF")),m.map((function(e){return r.a.createElement(O.a,{container:!0,item:!0,className:j.playerRow},r.a.createElement(O.a,{item:!0,xs:2,className:j.playerTitleName},e.full_name),r.a.createElement(O.a,{item:!0,xs:1,className:j.playerTitle},e.nfl_team),r.a.createElement(O.a,{item:!0,xs:1,className:j.playerTitle},e.position),r.a.createElement(O.a,{item:!0,xs:1,className:j.playerTitle},e.height),r.a.createElement(O.a,{item:!0,xs:1,className:j.playerTitle},e.weight),r.a.createElement(O.a,{item:!0,xs:2,className:j.playerTitle},e.dob),r.a.createElement(O.a,{item:!0,xs:2,className:j.playerTitleName},e.college),r.a.createElement(O.a,{item:!0,xs:1,className:j.playerTitle},r.a.createElement("button",{className:j.addButton,value:e.player_id,onClick:N},"Add")))}))):null))))},V=a(57),Z=a.n(V),$=a(58),ee=a.n($);a(84);var te=function(){Object(i.c)((function(e){return e.auth}));var e=Object(v.a)({background:{width:"100%"},outerContainerUpper:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",padding:"3% 0 3% 0"},outerContainerLower:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",padding:"0 0 3% 0"},footer:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",padding:"0 0 3% 0"},upperImage:{width:"90%",maxWidth:"90%",maxHeight:"90%",borderRadius:"4px"},footerImage:{width:"100%",height:"60%"},textContainer:{display:"flex",justifyContent:"center",position:"absolute",top:"20%"},imageContainerTop:{display:"flex",justifyContent:"flex-end",alignItems:"center",borderTop:"1px solid black"},imageContainerBottom:{display:"flex",justifyContent:"flex-start",alignItems:"center",borderTop:"1px solid black"},titleText:{fontWeight:"600",textAlign:"center",width:"100%",marginBottom:".7em",color:"rgb(245, 245, 245)"},pText:{fontWeight:"600",color:"rgb(245, 245, 245)"},pTitleText:{fontWeight:"700",color:"rgb(245, 245, 245)"},gridText:{display:"flex",flexDirection:"column",justifyContent:"center",borderTop:"1px solid black"}})();return r.a.createElement(r.a.Fragment,null,r.a.createElement(S,null),r.a.createElement("div",{className:e.background},r.a.createElement(z.a,{className:e.outerContainerUpper},r.a.createElement(O.a,{container:!0,xs:10,spacing:2},r.a.createElement(j.a,{variant:"h3",className:e.titleText},"Welcome to FFStockpile!"),r.a.createElement(O.a,{item:!0,xs:6,className:e.gridText},r.a.createElement(j.a,{variant:"h4",className:e.pTitleText},"All the stats you need"),r.a.createElement("p",{className:e.pText},"We give you all the stats you need to make informed decisions. With FFStockpile you'll never have to worry about a lack of information.")),r.a.createElement(O.a,{item:!0,xs:6,className:e.imageContainerTop},r.a.createElement("img",{src:Z.a,className:e.upperImage})))),r.a.createElement(z.a,{className:e.outerContainerLower},r.a.createElement(O.a,{container:!0,xs:10,spacing:2,className:e.gridContainer},r.a.createElement(O.a,{item:!0,xs:6,className:e.imageContainerBottom},r.a.createElement("img",{src:ee.a,className:e.upperImage})),r.a.createElement(O.a,{item:!0,xs:6,className:e.gridText},r.a.createElement(j.a,{variant:"h4",className:e.pTitleText},"Your data all in one place"),r.a.createElement("p",{className:e.pText},"Never again be forced to jump between websites to find the information you need. From basic stats to the most complex, we have them all, and now you do too. "))))))};var ae=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("strong",null,"Username:")," ",e.user.username,r.a.createElement("br",null),r.a.createElement("strong",null,"Email:")," ",e.user.email,r.a.createElement("br",null),r.a.createElement("hr",null))};var ne=function(e){var t=Object(n.useState)([]),a=Object(d.a)(t,2),o=a[0],l=a[1];Object(n.useEffect)((function(){function e(){return(e=Object(p.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/users/");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,l(a.users);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var c=o.map((function(e){return r.a.createElement(ae,{key:e.id,user:e})}));return console.log("____Rendering User List____"),r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"User List: "),c)},re=function(e){var t=e.component,a=e.path,n=e.currentUserId,o=e.exact;return r.a.createElement(s.b,{path:a,exact:o,render:function(e){return n?r.a.createElement(t,e):r.a.createElement(s.a,{to:"/"})}})};var oe,le=function(){localStorage.getItem("user");var e=Object(i.c)((function(e){return e.auth.id}));return console.log(e),console.log("____Rendering app_____"),r.a.createElement(c.a,null,r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/users",component:ne,currentUserId:e}),r.a.createElement(s.b,{exact:!0,path:"/login",component:Y,currentUserId:e}),r.a.createElement(s.b,{exact:!0,path:"/signup",component:X,currentUserId:e}),r.a.createElement(re,{path:"/myTeam/:id",component:Q,currentUserId:e}),r.a.createElement(re,{exact:!0,path:"/players",component:q,currentUserId:e}),r.a.createElement(s.b,{path:"/",component:te})))},ce=a(33),se=a(59),ie=Object(ce.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":return t.user;default:return e}},leagues:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_LEAGUE":return t.league;default:return e}},ffsplayers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_FFSPLAYERS":case"ADD_FFSPLAYER":return t.ffsplayer;default:return e}},teams:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_TEAM":return t.team;default:return e}}});oe=Object(ce.a)(se.a);var me,ue=Object(ce.d)(ie,me,oe);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,{store:ue},r.a.createElement(le,null))),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.54c425f5.chunk.js.map