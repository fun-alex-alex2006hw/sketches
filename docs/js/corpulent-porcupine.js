!function n(t,e,r){function o(u,a){if(!e[u]){if(!t[u]){var c="function"==typeof require&&require;if(!a&&c)return c(u,!0);if(i)return i(u,!0);var f=new Error("Cannot find module '"+u+"'");throw f.code="MODULE_NOT_FOUND",f}var s=e[u]={exports:{}};t[u][0].call(s.exports,function(n){var e=t[u][1][n];return o(e?e:n)},s,s.exports,n,t,e,r)}return e[u].exports}for(var i="function"==typeof require&&require,u=0;u<r.length;u++)o(r[u]);return o}({1:[function(n,t,e){function r(n,t,e){return n[0]=t[0]+e[0],n[1]=t[1]+e[1],n}t.exports=r},{}],2:[function(n,t,e){function r(n){var t=new Float32Array(2);return t[0]=n[0],t[1]=n[1],t}t.exports=r},{}],3:[function(n,t,e){function r(n,t){return n[0]=t[0],n[1]=t[1],n}t.exports=r},{}],4:[function(n,t,e){function r(){var n=new Float32Array(2);return n[0]=0,n[1]=0,n}t.exports=r},{}],5:[function(n,t,e){function r(n,t,e){var r=t[0]*e[1]-t[1]*e[0];return n[0]=n[1]=0,n[2]=r,n}t.exports=r},{}],6:[function(n,t,e){function r(n,t){var e=t[0]-n[0],r=t[1]-n[1];return Math.sqrt(e*e+r*r)}t.exports=r},{}],7:[function(n,t,e){function r(n,t,e){return n[0]=t[0]/e[0],n[1]=t[1]/e[1],n}t.exports=r},{}],8:[function(n,t,e){function r(n,t){return n[0]*t[0]+n[1]*t[1]}t.exports=r},{}],9:[function(n,t,e){function r(n,t,e,r,i,u){var a,c;for(t||(t=2),e||(e=0),c=r?Math.min(r*t+e,n.length):n.length,a=e;a<c;a+=t)o[0]=n[a],o[1]=n[a+1],i(o,o,u),n[a]=o[0],n[a+1]=o[1];return n}t.exports=r;var o=n(4)()},{4:4}],10:[function(n,t,e){function r(n,t){var e=new Float32Array(2);return e[0]=n,e[1]=t,e}t.exports=r},{}],11:[function(n,t,e){t.exports={create:n(4),clone:n(2),fromValues:n(10),copy:n(3),set:n(22),add:n(1),subtract:n(25),multiply:n(16),divide:n(7),min:n(15),max:n(14),scale:n(20),scaleAndAdd:n(21),distance:n(6),squaredDistance:n(23),length:n(12),squaredLength:n(24),negate:n(17),normalize:n(18),dot:n(8),cross:n(5),lerp:n(13),random:n(19),transformMat2:n(26),transformMat2d:n(27),transformMat3:n(28),transformMat4:n(29),forEach:n(9)}},{1:1,10:10,12:12,13:13,14:14,15:15,16:16,17:17,18:18,19:19,2:2,20:20,21:21,22:22,23:23,24:24,25:25,26:26,27:27,28:28,29:29,3:3,4:4,5:5,6:6,7:7,8:8,9:9}],12:[function(n,t,e){function r(n){var t=n[0],e=n[1];return Math.sqrt(t*t+e*e)}t.exports=r},{}],13:[function(n,t,e){function r(n,t,e,r){var o=t[0],i=t[1];return n[0]=o+r*(e[0]-o),n[1]=i+r*(e[1]-i),n}t.exports=r},{}],14:[function(n,t,e){function r(n,t,e){return n[0]=Math.max(t[0],e[0]),n[1]=Math.max(t[1],e[1]),n}t.exports=r},{}],15:[function(n,t,e){function r(n,t,e){return n[0]=Math.min(t[0],e[0]),n[1]=Math.min(t[1],e[1]),n}t.exports=r},{}],16:[function(n,t,e){function r(n,t,e){return n[0]=t[0]*e[0],n[1]=t[1]*e[1],n}t.exports=r},{}],17:[function(n,t,e){function r(n,t){return n[0]=-t[0],n[1]=-t[1],n}t.exports=r},{}],18:[function(n,t,e){function r(n,t){var e=t[0],r=t[1],o=e*e+r*r;return o>0&&(o=1/Math.sqrt(o),n[0]=t[0]*o,n[1]=t[1]*o),n}t.exports=r},{}],19:[function(n,t,e){function r(n,t){t=t||1;var e=2*Math.random()*Math.PI;return n[0]=Math.cos(e)*t,n[1]=Math.sin(e)*t,n}t.exports=r},{}],20:[function(n,t,e){function r(n,t,e){return n[0]=t[0]*e,n[1]=t[1]*e,n}t.exports=r},{}],21:[function(n,t,e){function r(n,t,e,r){return n[0]=t[0]+e[0]*r,n[1]=t[1]+e[1]*r,n}t.exports=r},{}],22:[function(n,t,e){function r(n,t,e){return n[0]=t,n[1]=e,n}t.exports=r},{}],23:[function(n,t,e){function r(n,t){var e=t[0]-n[0],r=t[1]-n[1];return e*e+r*r}t.exports=r},{}],24:[function(n,t,e){function r(n){var t=n[0],e=n[1];return t*t+e*e}t.exports=r},{}],25:[function(n,t,e){function r(n,t,e){return n[0]=t[0]-e[0],n[1]=t[1]-e[1],n}t.exports=r},{}],26:[function(n,t,e){function r(n,t,e){var r=t[0],o=t[1];return n[0]=e[0]*r+e[2]*o,n[1]=e[1]*r+e[3]*o,n}t.exports=r},{}],27:[function(n,t,e){function r(n,t,e){var r=t[0],o=t[1];return n[0]=e[0]*r+e[2]*o+e[4],n[1]=e[1]*r+e[3]*o+e[5],n}t.exports=r},{}],28:[function(n,t,e){function r(n,t,e){var r=t[0],o=t[1];return n[0]=e[0]*r+e[3]*o+e[6],n[1]=e[1]*r+e[4]*o+e[7],n}t.exports=r},{}],29:[function(n,t,e){function r(n,t,e){var r=t[0],o=t[1];return n[0]=e[0]*r+e[4]*o+e[12],n[1]=e[1]*r+e[5]*o+e[13],n}t.exports=r},{}],30:[function(n,t,e){function r(n,t){n=n||0;for(var e=new Array(n),r=0;r<n;r++)e[r]=t;return e}t.exports=r},{}],31:[function(n,t,e){!function(n,r){"object"==typeof e?t.exports=r(n,n.document):"function"==typeof define&&define.amd?define(function(){return r(n,n.document)}):n.Sketch=r(n,n.document)}("undefined"!=typeof window?window:this,function(n,t){"use strict";function e(n){return"[object Array]"==Object.prototype.toString.call(n)}function r(n){return"function"==typeof n}function o(n){return"number"==typeof n}function i(n){return"string"==typeof n}function u(n){return A[n]||String.fromCharCode(n)}function a(n,t,e){for(var r in t)!e&&r in n||(n[r]=t[r]);return n}function c(n,t){return function(){n.apply(t,arguments)}}function f(n){var t={};for(var e in n)"webkitMovementX"!==e&&"webkitMovementY"!==e&&(r(n[e])?t[e]=c(n[e],n):t[e]=n[e]);return t}function s(n){function t(t){r(t)&&t.apply(n,[].splice.call(arguments,1))}function e(n){for(L=0;L<nn.length;L++)D=nn[L],i(D)?N[(n?"add":"remove")+"EventListener"].call(N,D,k,!1):r(D)?k=D:N=D}function o(){S(T),T=q(o),V||(t(n.setup),V=r(n.setup)),Q||(t(n.resize),Q=r(n.resize)),n.running&&!Y&&(n.dt=(R=+new Date)-n.now,n.millis+=n.dt,n.now=R,t(n.update),Z&&(n.retina&&(n.save(),n.scale(K,K)),n.autoclear&&n.clear()),t(n.draw),Z&&n.retina&&n.restore()),Y=++Y%n.interval}function c(){N=J?n.style:n.canvas,_=J?"px":"",U=n.width,X=n.height,n.fullscreen&&(X=n.height=w.innerHeight,U=n.width=w.innerWidth),n.retina&&Z&&K&&(N.style.height=X+"px",N.style.width=U+"px",U*=K,X*=K),N.height!==X&&(N.height=X+_),N.width!==U&&(N.width=U+_),V&&t(n.resize)}function s(t,e){return I=e.getBoundingClientRect(),t.x=t.pageX-I.left-(w.scrollX||w.pageXOffset),t.y=t.pageY-I.top-(w.scrollY||w.pageYOffset),n.retina&&Z&&K&&(t.x*=K,t.y*=K),t}function l(t,e){return s(t,n.element),e=e||{},e.ox=e.x||t.x,e.oy=e.y||t.y,e.x=t.x,e.y=t.y,e.dx=e.x-e.ox,e.dy=e.y-e.oy,e}function p(n){if(n.preventDefault(),F=f(n),F.originalEvent=n,F.touches)for(j.length=F.touches.length,L=0;L<F.touches.length;L++)j[L]=l(F.touches[L],j[L]);else j.length=0,j[0]=l(F,$);return a($,j[0],!0),F}function d(e){for(e=p(e),G=(H=nn.indexOf(z=e.type))-1,n.dragging=!!/down|start/.test(z)||!/up|end/.test(z)&&n.dragging;G;)i(nn[G])?t(n[nn[G--]],e):i(nn[H])?t(n[nn[H++]],e):G=0}function h(e){W=e.keyCode,B="keyup"==e.type,tn[W]=tn[u(W)]=!B,t(n[e.type],e)}function g(e){n.autopause&&("blur"==e.type?b:x)(),t(n[e.type],e)}function x(){n.now=+new Date,n.running=!0}function b(){n.running=!1}function E(){(n.running?b:x)()}function P(){Z&&n.clearRect(0,0,n.width,n.height)}function C(){O=n.element.parentNode,L=M.indexOf(n),O&&O.removeChild(n.element),~L&&M.splice(L,1),e(!1),b()}var T,k,N,O,I,L,_,R,D,F,z,W,B,G,H,U,X,Y=0,j=[],Q=!1,V=!1,K=w.devicePixelRatio||1,J=n.type==v,Z=n.type==m,$={x:0,y:0,ox:0,oy:0,dx:0,dy:0},nn=[n.eventTarget||n.element,d,"mousedown","touchstart",d,"mousemove","touchmove",d,"mouseup","touchend",d,"click",d,"mouseout",d,"mouseover",y,h,"keydown","keyup",w,g,"focus","blur",c,"resize"],tn={};for(W in A)tn[A[W]]=!1;return a(n,{touches:j,mouse:$,keys:tn,dragging:!1,running:!1,millis:0,now:NaN,dt:NaN,destroy:C,toggle:E,clear:P,start:x,stop:b}),M.push(n),n.autostart&&x(),e(!0),c(),o(),n}for(var l,p,d="E LN10 LN2 LOG2E LOG10E PI SQRT1_2 SQRT2 abs acos asin atan ceil cos exp floor log round sin sqrt tan atan2 pow max min".split(" "),h="__hasSketch",g=Math,m="canvas",x="webgl",v="dom",y=t,w=n,M=[],b={fullscreen:!0,autostart:!0,autoclear:!0,autopause:!0,container:y.body,interval:1,globals:!0,retina:!1,type:m},A={8:"BACKSPACE",9:"TAB",13:"ENTER",16:"SHIFT",27:"ESCAPE",32:"SPACE",37:"LEFT",38:"UP",39:"RIGHT",40:"DOWN"},E={CANVAS:m,WEB_GL:x,WEBGL:x,DOM:v,instances:M,install:function(n){if(!n[h]){for(var t=0;t<d.length;t++)n[d[t]]=g[d[t]];a(n,{TWO_PI:2*g.PI,HALF_PI:g.PI/2,QUARTER_PI:g.PI/4,random:function(n,t){return e(n)?n[~~(g.random()*n.length)]:(o(t)||(t=n||1,n=0),n+g.random()*(t-n))},lerp:function(n,t,e){return n+e*(t-n)},map:function(n,t,e,r,o){return(n-t)/(e-t)*(o-r)+r}}),n[h]=!0}},create:function(n){return n=a(n||{},b),n.globals&&E.install(self),l=n.element=n.element||y.createElement(n.type===v?"div":"canvas"),p=n.context=n.context||function(){switch(n.type){case m:return l.getContext("2d",n);case x:return l.getContext("webgl",n)||l.getContext("experimental-webgl",n);case v:return l.canvas=l}}(),(n.container||y.body).appendChild(l),E.augment(p,n)},augment:function(n,t){return t=a(t||{},b),t.element=n.canvas||n,t.element.className+=" sketch",a(n,t,!0),s(n)}},P=["ms","moz","webkit","o"],C=self,T=0,k="AnimationFrame",N="request"+k,O="cancel"+k,q=C[N],S=C[O],I=0;I<P.length&&!q;I++)q=C[P[I]+"Request"+k],S=C[P[I]+"Cancel"+k];return C[N]=q=q||function(n){var t=+new Date,e=g.max(0,16-(t-T)),r=setTimeout(function(){n(t+e)},e);return T=t+e,r},C[O]=S=S||function(n){clearTimeout(n)},E})},{}],32:[function(n,t,e){"use strict";function r(n){return n&&n.__esModule?n:{default:n}}function o(n){if(Array.isArray(n)){for(var t=0,e=Array(n.length);t<n.length;t++)e[t]=n[t];return e}return Array.from(n)}function i(n){var t=[b.width/2,b.height/2];return n=n||t,{position:n,progress:0,color:y[Math.random()*y.length|0]}}function u(n){var t=a(n);if(!t.length)return null;var e=t[Math.random()*t.length|0];return M[f(n,e)]=!0,c(e)?e:null}function a(n){for(var t=[],e=0;e<360;)t.push(e),e+=x;var r=t.map(function(t){var e=t/360*Math.PI*2,r=(0,h.scale)([],[Math.cos(e),Math.sin(e)],m);return(0,h.add)(r,r,n)});return r.filter(function(t){return!M[f(t,n)]})}function c(n){return!(n[0]<0||n[1]<0)&&!(n[0]>b.width||n[1]>b.height)}function f(n,t){n=n.map(function(n){return Math.round(n)}),t=t.map(function(n){return Math.round(n)});var e=void 0,r=void 0;return n[0]<t[0]?(e=n,r=t):n[0]>t[0]?(e=t,r=n):n[1]<t[1]?(e=n,r=t):(e=t,r=n),"("+e[0]+"-"+e[1]+")-("+r[0]+"-"+r[1]+")"}var s=n(31),l=r(s),p=n(30),d=r(p),h=n(11),g=50,m=10,x=60,v=.5,y=["rgba(100, 100, 100, 0.1)","rgba(109, 129, 163, 0.1)"],w=void 0,M={},b=l.default.create({autoclear:!1});b.setup=function(){w=(0,d.default)(g).map(i)},b.update=function(){if(!w.length)return void b.stop();if(w.length<g&&Math.random()<.5){var n=w[Math.random()*w.length|0];w.push(i(n.position))}w.forEach(function(n){n.nextPosition&&1!==n.progress||(n.position=n.nextPosition||n.position,n.nextPosition=u(n.position),n.progress=0),n.progress+=(1-n.progress)*v,n.progress=n.progress>.99?1:n.progress}),w=w.filter(function(n){return n.nextPosition})},b.draw=function(){w.forEach(function(n,t){var e=(0,h.subtract)([],n.nextPosition,n.position),r=(0,h.add)([],(0,h.scale)(e,e,n.progress),n.position);b.beginPath(),b.moveTo.apply(b,o(n.position)),b.lineTo.apply(b,o(r)),b.strokeStyle=n.color,b.lineWidth=1,b.stroke()})}},{11:11,30:30,31:31}]},{},[32]);