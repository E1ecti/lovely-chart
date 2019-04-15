(function(){var oa=Math.pow,pa=Math.PI,qa=Math.max,ra=Math.min,sa=Math.ceil,ta=Math.round,ua=Math.floor;function a(a,b,c,d){function e(a,b,c,d,e,g=1,i=null,k=!1){const l=R(c),m=sa(d/l)*l,n=ua(e/l)*l;f.font=Da,f.textAlign=k?"right":"left",f.textBaseline="bottom",f.lineWidth=1,f.beginPath();for(let o=m;o<=n;o+=l){const[,c]=b.toPixels(0,o),d=U(g,c);f.fillStyle=i?ia(a,`palette-${j}-${i}-text`,d):ia(a,`palette-${j}-y-axis-text`,d),k?f.fillText(M(o),h.width-xa,c-xa/2):f.fillText(M(o),xa,c-xa/2),k?(f.strokeStyle=ia(a,`palette-${j}-${i}-text`,g),f.moveTo(h.width-xa,c),f.lineTo(h.width-2*xa,c)):(f.moveTo(xa,c),f.strokeStyle=ia(a,"grid-lines",g),f.lineTo(h.width-xa,c))}f.stroke()}const f=a,g=b,h=c,j=d;return{drawXAxis:function(a,b){f.clearRect(0,h.height-Ga+1,c.width,Ga+1);const d=h.height-Ga/2,e=ua(a.xAxisScale),k=P(e),l=1-(a.xAxisScale-e);f.font=Da,f.textAlign="center",f.textBaseline="middle";for(let c=a.labelFromIndex;c<=a.labelToIndex;c++){const e=c-Ha;if(0!=e%k)continue;const i=g.xLabels[c],[m]=b.toPixels(c,0);let n=0==e%(2*k)?1:l;n=T(n,m,h.width),f.fillStyle=ia(a,`palette-${j}-x-axis-text`,n),f.fillText(i.text,m,d)}},drawYAxis:function(a,b,c){const{yAxisScale:d,yAxisScaleFrom:f,yAxisScaleTo:h,yAxisScaleProgress:u=0,yMinViewport:i,yMinViewportFrom:j,yMinViewportTo:k,yMaxViewport:l,yMaxViewportFrom:m,yMaxViewportTo:n,yMinViewportSecond:o,yMinViewportSecondFrom:p,yMinViewportSecondTo:q,yMaxViewportSecond:r,yMaxViewportSecondFrom:s,yMaxViewportSecondTo:t}=a,v=c&&g.datasets[0].colorName;if(e(a,b,ta(h||d),void 0===k?i:k,void 0===n?l:n,f?u:1,v),0<u&&(void 0!==j||void 0!==m)&&e(a,b,ta(f),void 0===j?i:j,void 0===m?l:m,1-u,v),c){const{yAxisScaleSecond:b,yAxisScaleSecondFrom:d,yAxisScaleSecondTo:f,yAxisScaleSecondProgress:h=0}=a,i=g.datasets[g.datasets.length-1].colorName;e(a,c,ta(f||b),void 0===q?o:q,void 0===t?r:t,d?h:1,i,!0),0<h&&(void 0!==p||void 0!==s)&&e(a,c,ta(d),void 0===p?o:p,void 0===s?r:s,1-h,i,!0)}}}}function b(a,b,c){function d(a){n.innerHTML?n.innerHTML!==a&&(n=na(n,a,"caption right")):n.innerHTML=a}function e(a){o=!0,m=na(l,"Zoom Out","title zoom-out"),Y(m,"click",g),d(a)}function f(){k=ab(),k.className="header",l=ab(),l.className="title",l.innerHTML=i,k.appendChild(l),n=ab(),n.className="caption right",k.appendChild(n),h.appendChild(k)}function g(){o=!0,l=na(m,i,"title",!0),j()}const h=a,i=b,j=c;let k,l,m,n,o=!1;const p=F(d,800,!1,!0);return f(),{setCaption:p,zoom:e}}function c(a,b,c,d){function e(a){const{begin:b,end:c}=a;p({begin:b,end:c},!0),j(a)&&(H=a,r(A,B),k(a))}function f(){y=ab(),y.className="minimap",y.style.height=`${Ja}px`,h(),i(),u.appendChild(y),C={width:A.offsetWidth,height:A.offsetHeight}}function g(){return{width:u.offsetWidth-2*Ka,height:Ja}}function h(){const{canvas:a,context:b}=q(y,g());A=a,B=b}function i(){D=ab(),D.className="ruler",D.innerHTML=Na,E=D.children[1],da(E.children[1],{onCapture:l,onDrag:m,draggingCursor:"grabbing"}),da(E.children[0],{onCapture:l,onDrag:n,draggingCursor:"ew-resize"}),da(E.children[2],{onCapture:l,onDrag:o,draggingCursor:"ew-resize"}),y.appendChild(D)}function j(a){if(!H)return!0;const b=v.datasets.map(({key:a})=>`opacity#${a}`);return b.push("yMaxMinimap"),b.some(b=>H[b]!==a[b])}function k(a={}){const{datasets:b}=v,c={from:0,to:a.totalXWidth},d={begin:0,end:1,totalXWidth:a.totalXWidth,yMin:a.yMinMinimap,yMax:a.yMaxMinimap,availableWidth:C.width,availableHeight:C.height,yPadding:1},e=b.map(({key:b})=>X(a,b)),f=$(v,b,c,e,d,!0),g=s(d);let h=null,i=null;if(v.hasSecondYAxis){const d=b.find(a=>a.hasOwnYAxis),f={yMin:a.yMinMinimapSecond,yMax:a.yMaxMinimapSecond};h=$(v,[d],c,e,f)[0],i=g.copy(f)}z(B,a,v,c,f,g,h,i,La,e,w,!0)}function l(a){F=a.target.offsetLeft}function m(a,b,{dragOffsetX:c}){const d=C.width-E.offsetWidth,e=qa(0,ra(F+c,d)),f=e+E.offsetWidth,g=e/C.width,h=f/C.width;p({begin:g,end:h})}function n(a,b,{dragOffsetX:c}){const d=E.offsetLeft+E.offsetWidth-2*Ma,e=ra(d,qa(0,F+c)),f=e/C.width;p({begin:f})}function o(a,b,{dragOffsetX:c}){const d=E.offsetLeft+2*Ma,e=C.width,f=qa(d,ra(F+Ma+c,e)),g=f/C.width;p({end:g})}function p(a,b){const c=Object.assign({},I,a);c.begin===I.begin&&c.end===I.end||(I=c,J(),!b&&x(I))}function t(){const{begin:a,end:b}=I;D.children[0].style.width=`${100*a}%`,D.children[1].style.width=`${100*(b-a)}%`,D.children[2].style.width=`${100*(1-b)}%`}const u=a,v=b,w=c,x=d;let y,A,B,C,D,E,F,H,I={};const J=G(t);return f(),p(wa),{update:e}}function d(a,b,c){function d({range:b={},filter:c={},focusOn:a}={},d){Object.assign(j,b),Object.assign(k,c);const f=p;p=e(g,h,j,k,a,f),d||l.forEach(({prop:a,duration:b,options:c})=>{const d=m.get(a),e=d?d.to:f[a];if(e!==void 0&&e!==p[a]){const e=d?c.includes("fast")?f[a]:d.current:f[a];d&&m.remove(a),m.add(a,e,p[a],b,c)}}),m.isRunning()||o()}function f(){i(E(p,m.getState()))}const g=a,h=b,i=c,j={begin:0,end:1},k=function(){const a={};return g.datasets.forEach(({key:b})=>{a[b]=!0}),a}(),l=function(){const a=[],b=g.datasets.map(({key:a})=>`opacity#${a} 200`),c=ha().map(a=>`${a} 300`);return C([Za,b,c]).forEach(b=>{const[c,d,...e]=b.split(" ");a.push({prop:c,duration:d,options:e})}),a}(),m=n(f),o=G(f);let p={};return{update:d}}function e(a,b,c,d,e,g){const{begin:k,end:l}=c,m=a.xLabels.length-1,n=qa(0,sa(m*k)),o=ra(ua(m*l),m),p=i(b.width,n,o),q=a.isStacked?h(a,d,n,o,g):f(a,d,n,o,g),r=j(b.height,q.yMinViewport,q.yMaxViewport),s=a.hasSecondYAxis&&j(b.height,q.yMinViewportSecond,q.yMaxViewportSecond),t=R(r);if(q.yMinViewport-=q.yMinViewport%t,s){const a=R(s);q.yMinViewportSecond-=q.yMinViewportSecond%a}const u={};return a.datasets.forEach(({key:a})=>{u[`opacity#${a}`]=d[a]?1:0}),Object.assign({totalXWidth:m,xAxisScale:p,yAxisScale:r,yAxisScaleSecond:s,labelFromIndex:qa(0,n-1),labelToIndex:ra(o+1,m),filter:d,focusOn:void 0===e?g.focusOn:e},q,u,ga(),c)}function f(a,b,c,d,e){const f=a.hasSecondYAxis&&a.datasets.slice(-1)[0],h=a.datasets.filter(a=>b[a.key]&&a!==f),i=g(a,c,d,e,h);if(f){const h=b[f.key]?[f]:[],{yMinViewport:j,yMaxViewport:k,yMinMinimap:l,yMaxMinimap:m}=g(a,c,d,e,[f]);Object.assign(i,{yMinViewportSecond:j,yMaxViewportSecond:k,yMinMinimapSecond:l,yMaxMinimapSecond:m})}return i}function g(a,b,c,d,e){const{min:f=d.yMinMinimap,max:g=d.yMaxMinimap}=A(C(e.map(({yMax:a,yMin:b})=>[a,b]))),h=f/g>Ia?f:0;let i,j;if(0===b&&c===a.xLabels.length-1)i=h,j=g;else{const a=e.map(({values:a})=>a),f=a.map(a=>a.slice(b,c+1)),g=A(C(f)),h=g.min||d.yMinViewport;j=g.max||d.yMaxViewport,i=h/j>Ia?h:0}return{yMinViewport:i,yMaxViewport:j,yMinMinimap:h,yMaxMinimap:g}}function h(a,b,c,d,e){const f=a.datasets.filter(a=>b[a.key]),g=f.map(({values:a})=>a),h=g.length?D(g):[],{max:i=e.yMaxMinimap}=A(h),{max:j=e.yMaxViewport}=A(h.slice(c,d+1));return{yMinViewport:0,yMaxViewport:j,yMinMinimap:0,yMaxMinimap:i}}function i(a,b,c){const d=ua(a/Ea);return Q((c-b)/d)}function j(a,b,c){const d=ua((a-Ga)/Fa);return S((c-b)/d)}function k(a,b,c){function d(){i=ab(),i.className="tools",g.datasets.forEach(({key:a,name:b,colorName:c})=>{const d=ab("a");d.href="#",d.dataset.key=a,d.className=`checkbox ${c} checked`,d.innerHTML=`<span class="circle"></span><span class="label">${b}</span>`,d.addEventListener("click",e),i.appendChild(d)}),f.appendChild(i)}function e(a){a&&(a.preventDefault(),a.currentTarget.classList.toggle("checked"));const b={};Array.from(i.getElementsByTagName("a")).forEach(a=>{b[a.dataset.key]=a.classList.contains("checked")}),h(b)}if(2>b.datasets.length)return;const f=a,g=b,h=c;let i;d(),e()}function l(a,b,c,d,e,f){function g(){K=ab(),K.className="tooltip",h(),i(),"ontouchstart"in window?(Y(K,"touchmove",j),Y(K,"touchstart",j),Y(document,"touchstart",k)):(Y(K,"mousemove",j),Y(K,"click",l),Y(document,"mousemove",k)),y.appendChild(K)}function h(){const{canvas:a,context:b}=q(K,A);L=a,M=b}function i(){N=ab(),N.className="balloon",N.innerHTML="<div class=\"title\"></div><div class=\"legend\"></div>",Y(N,"click",m),K.appendChild(N)}function j(a){if(!(a.target===N||N.contains(a.target)||R)){const b=x(K);P=(a.touches?a.touches[0].clientX:a.clientX)-b.left,Q=(a.touches?a.touches[0].clientY:a.clientY)-b.top;const c=H.findClosesLabelIndex(P);return c<E.labelFromIndex||c>E.labelToIndex?void n():void S()}}function k(a){null===P||a.target===K||K.contains(a.target)||n()}function l(){R=!R}function m(){N.classList.add("loading");const a=H.findClosesLabelIndex(P);C(a)}function n(a){P=null,R=!1,r(L,M),v(),!a&&D&&D(null)}function o(a){if(!P||!E)return;const c=H.findClosesLabelIndex(P),d=c>=E.labelFromIndex&&c<=E.labelToIndex;if(!d)return void n(a);!a&&D&&(b.isPie?D(w()):D(c));const[e]=H.toPixels(c,0),f=z.datasets.map(({key:a,name:b,colorName:d,values:e,hasOwnYAxis:f},g)=>({key:a,name:b,colorName:d,value:e[c],hasOwnYAxis:f,originalIndex:g})).filter(({key:a})=>E.filter[a]);u(f,e,c),(z.isLines||z.isAreas)&&(r(L,M),z.isLines&&p(f,c),t(e,A.height-Ga,ia(E,"grid-lines")))}function p(a,b){a.forEach(({value:a,colorName:c,hasOwnYAxis:d,originalIndex:e})=>{const f=b-E.labelFromIndex,g=d?I[f]:F[e][f];if(g){const[a,e]=d?J.toPixels(b,g.stackValue):H.toPixels(b,g.stackValue);s([a,e],ia(E,`palette-${B}-${c}-line`),ia(E,"background"))}})}function s([a,b],c,d){M.strokeStyle=c,M.fillStyle=d,M.lineWidth=2,M.beginPath(),M.arc(a,b,4,0,2*pa),M.fill(),M.stroke()}function t(a,b,c){M.strokeStyle=c,M.lineWidth=1,M.beginPath(),M.moveTo(a,0),M.lineTo(a,b),M.stroke()}function u(a,b,c){const d=z.xLabels[c],e=new Date(d.value);N.children[0].innerHTML=`${Sa[e.getDay()]}, ${d.text}`,N.children[1].innerHTML=a.map(({name:a,colorName:b,value:c})=>"<div class=\"dataset transition-container\">"+`  <span>${a}</span>`+`  <span class="value transition top right ${b}">${O(c)}</span>`+"</div>").join("");const f=(E.labelFromIndex+E.labelToIndex)/2,g=c<f?P+Ta:P-(N.offsetWidth+Ta);N.style.transform=`translateX(${g}px) translateZ(0)`,N.classList.add("shown")}function v(){N.classList.remove("shown")}function w(){var a=Math.sqrt,b=Math.atan2;const{width:c,height:d}=K.getBoundingClientRect(),e=[c/2,d/2],f=b(Q-e[1],P-e[0]),g=a((P-e[0])**2+(Q-e[1])**2);return{angle:f>=-pa/2?f:2*pa+f,distance:g}}function x(a){return a.getBoundingClientRect()}const y=a,z=b,A=c,B=d,C=e,D=f;let E,F,H,I,J,K,L,M,N,P,Q,R=!1;const S=G(o);return g(),{update:function(a,b,c,d,e){E=a,F=b,H=c,I=d,J=e,o(!0)}}}function m(a){return 1-oa(1-a,1.675)}function n(a){function b(a,b,c,d,f){g[a]={from:b,to:c,duration:d,options:f,current:b,startedAt:Date.now(),progress:0},h||(h=requestAnimationFrame(e))}function c(a){delete g[a],d()||(cancelAnimationFrame(h),h=null)}function d(){return!!Object.keys(g).length}function e(){const a={};Object.keys(g).forEach(b=>{const{startedAt:d,from:e,to:f,duration:i=Ua,options:h}=g[b],j=ra(1,(Date.now()-d)/i);let k=e+(f-e)*m(j);h.includes("ceil")?k=sa(k):h.includes("floor")&&(k=ua(k)),g[b].current=k,g[b].progress=j,a[b]=k,1===j&&c(b)}),f(a),d()&&(h=requestAnimationFrame(e))}const f=a,g={};let h=null;return{add:b,remove:c,get:function(a){return g[a]},getState:function(){const a={};return Object.keys(g).forEach(b=>{const{current:c,from:d,to:e,progress:f}=g[b];a[b]=c,a[`${b}From`]=d,a[`${b}To`]=e,a[`${b}Progress`]=f}),a},isRunning:d}}function o(a,b={}){const{columns:c,names:d,colors:e,types:f,y_scaled:g}=a;let h=[];const j=[];return c.forEach((a,e)=>{const i=a.shift();return i===va?(h=a,void B(h)):void j.push({key:i,colorName:b[i],name:d[i],type:f[i],values:a,hasOwnYAxis:g&&e===c.length-1})}),j.forEach(a=>{a.labels=h}),{datasets:j}}function p(a,b,c){const{datasets:d}=o(a,b);let e=1/0,f=-Infinity;d.forEach(a=>{const{min:b,max:c}=A(a.values);b<e&&(e=b),c>f&&(f=c),a.yMin=b,a.yMax=c});const g=d.map(a=>a.labels[0]),h=d.map(a=>a.labels[a.labels.length-1]),i=ra.apply(null,g),j=qa.apply(null,h),k="hours"===c?J(i,j):I(i,j);return{datasets:d,yMin:e,yMax:f,xLabels:k,hasSecondYAxis:a.y_scaled,isStacked:a.stacked,isPercentage:a.percentage,isPie:a.pie,isLines:d.some(({type:a})=>"line"===a),isBars:d.some(({type:a})=>"bar"===a),isAreas:d.some(({type:a})=>"area"===a)}}function q(a,{width:b,height:c}){const d=ab("canvas");d.width=b*Oa,d.height=c*Oa,d.style.width="100%",d.style.height=`${c}px`;const e=d.getContext("2d");return e.scale(Oa,Oa),a.appendChild(d),{canvas:d,context:e}}function r(a,b){b.clearRect(0,0,a.width,a.height)}function s(a){function b(a,b){return[a*n-o,j-(b*q-r)]}function c(a){return ta((a+o)/n)}const{begin:d,end:e,totalXWidth:f,yMin:g,yMax:h,availableWidth:i,availableHeight:j,xPadding:k=0,yPadding:l=0}=a;let m=i;0===d&&(m-=k),1===e&&(m-=k);const n=m/((e-d)*f);let o=d*f*n;0===d&&(o-=k);const p=j-l,q=p/(h-g),r=g*q;return{toPixels:b,findClosesLabelIndex:c,copy:function(b,c){return s(E(a,b),c)},getCenter:function(){return[i/2,j-p/2]},getSize:function(){return[i,p]},getParams:function(){return a}}}function t(a,b,c,d){a.beginPath();for(let e=0,f=b.length;e<f;e++){const{labelIndex:d,stackValue:f}=b[e],[g,h]=c.toPixels(d,f);a.lineTo(g,h)}a.save(),a.strokeStyle=d.color,a.lineWidth=d.lineWidth,a.globalAlpha=d.opacity,a.lineJoin="bevel",a.lineCap="butt",a.stroke(),a.restore()}function u(a,b,c,d){const{yMin:e}=c.getParams();a.save(),a.fillStyle=d.color;for(let f=0,g=b.length;f<g;f++){const{labelIndex:g,stackValue:h,stackOffset:i=0}=b[f],[,j]=c.toPixels(g,qa(i,e)),[k,l]=c.toPixels(g,h),m=k-d.lineWidth/2,n=d.lineWidth+.5;a.fillRect(m,l,n,j-l)}a.restore()}function v(a,b,c){const[d,e]=b.getCenter(),[f,g]=b.getSize(),[h]=b.toPixels(c.focusOn,0);a.fillStyle=c.color,a.fillRect(d-f/2,e-g/2,h-c.lineWidth/2,g),a.fillRect(h+c.lineWidth/2,e-g/2,f-(h+c.lineWidth/2),g)}function w(a,b,c,d){a.beginPath();for(let e=0,f=b.length;e<f;e++){const{labelIndex:d,stackValue:f}=b[e],[g,h]=c.toPixels(d,f);a.lineTo(g,h)}a.save(),a.fillStyle=d.color,a.lineWidth=d.lineWidth,a.globalAlpha=d.opacity,a.lineJoin="bevel",a.lineCap="butt",a.fill(),a.restore()}function x(a,b,c,d){const{visibleValue:e,stackValue:f,stackOffset:g=0}=b[0];if(!e)return;const{yMin:h,yMax:i}=c.getParams(),j=1/(i-h),k=e*j,l=2*(g*j*pa)-pa/2,m=2*(f*j*pa)-pa/2,{radius:o=120,center:[p,q],pointerVector:n}=d,r=n&&l<=n.angle&&n.angle<m&&n.distance<=o?Ca:0,s=(l+m)/2,t=Math.cos(s),u=Math.sin(s),v=t*r,w=u*r;a.save(),a.beginPath(),a.fillStyle=d.color,a.moveTo(p+v,q+w),a.arc(p+v,q+w,o,l,m),a.lineTo(p+v,q+w),a.fill(),a.font=`700 ${V(k,o)}px Helvetica, Arial, sans-serif`,a.textAlign="center",a.textBaseline="middle",a.fillStyle="white";const x=W(k,o);a.fillText(`${ta(100*k)}%`,p+t*x+v,q+u*x+w),a.restore()}function y(a,...b){return"line"===a?t(...b):"bar"===a?u(...b):"area"===a?w(...b):"pie"===a?x(...b):void 0}function z(a,b,c,d,e,f,g,h,j,k,l,m){if(c.datasets.forEach(({colorName:n,type:o,hasOwnYAxis:p},q)=>{if(!k[q])return;const i={color:ia(b,`palette-${l}-${n}-line`),lineWidth:j,opacity:c.isStacked?1:k[q]},r="pie"===o&&m?"area":o;let s=p?g:e[q],t=p?h:f;if("area"===r){const{yMin:a,yMax:b}=f.getParams(),c=b-a,g=[{labelIndex:d.from,stackValue:0},{labelIndex:d.to,stackValue:0}],h=[{labelIndex:d.to,stackValue:c},{labelIndex:d.from,stackValue:c}];s=C([e[q-1]||g,h])}if("pie"===r&&(i.center=f.getCenter(),i.radius=ra(...f.getSize())*Ba,i.pointerVector=b.focusOn),"bar"===r){const[a]=f.toPixels(0,0),[c]=f.toPixels(1,0);i.lineWidth=c-a,i.focusOn=b.focusOn}y(r,a,s,t,i)}),b.focusOn&&c.isBars){const[c]=f.toPixels(0,0),[d]=f.toPixels(1,0);v(a,f,{focusOn:b.focusOn,color:ia(b,"mask"),lineWidth:d-c})}}function A(a){const b=a.length;let c=a[0],d=a[0];for(let e=0;e<b;e++){const b=a[e];b>c?c=b:b<d&&(d=b)}return{max:c,min:d}}function B(a){for(let b=0,c=a.length;b<c;b++)if(a[b]!==void 0&&a[b+1]!==void 0&&a[b]>=a[b+1])throw new Error("Array is not sorted")}function C(a){return[].concat.apply([],a)}function D(a){const b=[],c=a.length;for(let d=0,e=a[0].length;d<e;d++){b[d]=0;for(let e=0;e<c;e++)b[d]+=a[e][d]}return b}function E(a,b){return new Proxy({},{get:(c,d)=>void 0===b[d]?a[d]:b[d]})}function F(a,b,c=!0,d=!0){let e,f=!1;return function(...g){e=g,f||(c&&a(...e),f=!0,setTimeout(()=>{f=!1,d&&a(...e)},b))}}function G(a){let b,c=!1;return function(...d){b=d,c||(c=!0,requestAnimationFrame(()=>{c=!1,a(...b)}))}}function H(a,b,c=!0,d=!0){let e=null;return function(){e?(clearTimeout(e),e=null):c&&a(),e=setTimeout(()=>{d&&a(),e=null},b)}}function I(a,b){a=K(a),b=K(b);const c=[];for(let d=a;d<=b;d+=Pa){const a=new Date(d),b=a.getDate(),e=Ra[a.getMonth()];c.push({value:d,text:`${e} ${b}`})}return c}function J(a,b){a=L(a),b=L(b);const c=[];for(let d=a;d<=b;d+=Qa){const a=new Date(d),b=a.getUTCHours(),e=a.getUTCMinutes();c.push({value:d,text:`${10>b?"0":""}${b}:${10>e?"0":""}${e}`})}return c}function K(a){return a-a%Pa}function L(a){return a-a%Qa}function M(a,b=1){if(1e6<=a)return N(a/1e6,b)+"M";return 1e3<=a?N(a/1e3,b)+"K":a}function N(a,b){return a.toFixed(b).replace(/(\d{3,})\.\d+/,"$1").replace(/\.0+$/,"")}function O(a){return(a+"").replace(/\d(?=(\d{3})+$)/g,"$& ")}function P(a){return oa(2,a)}function Q(a){return sa(Math.log2(a||1))}function R(a){return $a[a]||$a[$a.length-1]}function S(a){return $a.findIndex(b=>b>=a)||$a.length-1}function T(a,b,c){const d=ra(b+xa,c-b);return 40>=d&&(a=ra(1,a,d/40)),a}function U(a,b){return b-xa<=20?ra(1,a,(b-xa)/20):a}function V(a,b){return(b+150*a)/8}function W(a,b){return .99<=a?0:ra(1-Math.log(30*a)/5,4/5)*b}function X(a,b){return qa(0,ra(2*a[`opacity#${b}`]-1,1))}function Y(a,b,c){a.addEventListener(b,c)}function Z(a,b,c){a.removeEventListener(b,c)}function $(a,b,c,d,e,f){let g=b.map(({values:a})=>a.slice(c.from,c.to+1));a.isPie&&!f&&(g=ca(g));const h=g.map((b,e)=>b.map((b,f)=>{let g=b;return a.isStacked&&(g*=d[e]),{labelIndex:c.from+f,value:b,visibleValue:g,stackOffset:0,stackValue:g}}));return a.isPercentage&&aa(h,e),a.isStacked&&ba(h),h}function _(a){return D(a.map(a=>a.map(({visibleValue:a})=>a)))}function aa(a,b){const c=_(a);a.forEach(a=>{a.forEach((a,d)=>{a.percent=a.visibleValue/c[d],a.visibleValue=a.percent*b.yMax})})}function ba(a){const b=[];a.forEach(a=>{a.forEach((a,c)=>{b[c]===void 0&&(b[c]=0),a.stackOffset=b[c],b[c]+=a.visibleValue,a.stackValue=b[c]})})}function ca(a){return a.map(a=>[a.reduce((a,b)=>a+b,0)])}function da(a,b){function c(c){c.target!==a||(c.preventDefault(),g=c,"mousedown"===c.type?(Y(document,"mousemove",f),Y(document,"mouseup",d)):"touchstart"===c.type&&(Y(document,"touchmove",f),Y(document,"touchend",d),Y(document,"touchcancel",d),c.pageX===void 0&&(c.pageX=c.touches[0].pageX)),b.draggingCursor&&document.body.classList.add(`cursor-${b.draggingCursor}`),b.onCapture&&b.onCapture(c))}function d(){g&&(b.draggingCursor&&document.body.classList.remove(`cursor-${b.draggingCursor}`),Z(document,"mouseup",d),Z(document,"mousemove",f),Z(document,"touchcancel",d),Z(document,"touchend",d),Z(document,"touchmove",f),g=null)}function f(a){g&&("touchmove"===a.type&&a.pageX===void 0&&(a.pageX=a.touches[0].pageX),b.onDrag(a,g,{dragOffsetX:a.pageX-g.pageX}))}let g=null;Y(a,"mousedown",c),Y(a,"touchstart",c)}function ea(a){bb=a,cb=Object.keys(bb["skin-day"])}function fa(){return document.body.classList.contains("skin-night")?"skin-night":"skin-day"}function ga(){const a={},b=bb[fa()];return cb.forEach(c=>{db.forEach((d,e)=>{const f=ja(b[c]);a[`colorChannels#${c}#${d}`]=f[e]})}),a}function ha(){return C(cb.map(a=>db.map(b=>`colorChannels#${a}#${b}`)))}function ia(a,b,c=1){const d=db.map(c=>{const d=a[`colorChannels#${b}#${c}`];return"A"===c?d:ta(d)});return ka(d,c)}function ja(a){const[b,c]=a.replace("#","").split("/");return[parseInt(b.slice(0,2),16),parseInt(b.slice(2,4),16),parseInt(b.slice(4,6),16),c?parseFloat(c):1]}function ka([c,d,e,b=1],a=1){return`rgba(${c}, ${d}, ${e}, ${b*a})`}function la(a){a.classList.remove("animated"),a.classList.add("animated"),a.classList.remove("hidden")}function ma(a){a.classList.remove("animated"),a.classList.add("animated"),a.classList.add("hidden")}function na(a,b,c,d=!1){const e=a.parentNode;e.classList.add("transition-container");const f=ab();f.className=`${c} transition ${d?"top":"bottom"} hidden`,f.innerHTML=b;const g=e.querySelectorAll(`.${c.split(" ").join(".")}.hidden`);return g.forEach(a=>a.remove()),a.classList.add("transition"),a.classList.remove("bottom","top"),a.classList.add(d?"bottom":"top"),e.insertBefore(f,a.nextSibling),la(f),ma(a),f}window.LovelyChart={create:function(e){function f(){H.update()}function g(){B=ab(),B.className=`lovely-chart palette-${M.palette||Ya}`,_a(B);const a=document.getElementById(M.containerId);a.appendChild(B)}function h(){const{canvas:a,context:b}=q(B,{width:B.clientWidth,height:ya});C=a,D=b,E={width:C.offsetWidth,height:C.offsetHeight}}function i(){const{data:a,dataSource:b}=M;return a?Promise.resolve(a):b?fetch(`${b}/overview.json`).then(a=>a.json()):void 0}function j(a){const{dataSource:b}=M,c=a.getMonth()+1,d=a.getDate(),e=`${a.getFullYear()}-${10>c?"0":""}${c}/${10>d?"0":""}${d}`;return fetch(`${b}/${e}.json`).then(a=>a.json())}function m(){F=b(B,M.title,v),h(),G=a(D,A,E,M.palette),H=d(A,E,n),I=c(B,A,M.palette,o),J=l(B,A,E,M.palette,u,y),k(B,A,t)}function n(a){K=a;const{datasets:b}=A,c={from:a.labelFromIndex,to:a.labelToIndex},d={begin:a.begin,end:a.end,totalXWidth:a.totalXWidth,yMin:a.yMinViewport,yMax:a.yMaxViewport,availableWidth:E.width,availableHeight:E.height-Ga,xPadding:xa,yPadding:za},e=b.map(({key:b})=>a[`opacity#${b}`]),f=$(A,b,c,e,d),g=s(d);let h=null,i=null;if(A.hasSecondYAxis){const d=b.find(a=>a.hasOwnYAxis),f={yMin:a.yMinViewportSecond,yMax:a.yMaxViewportSecond};h=$(A,[d],c,e,f)[0],i=g.copy(f)}F.setCaption(`${A.xLabels[a.labelFromIndex].text} — ${A.xLabels[a.labelToIndex].text}`),r(C,D),z(D,a,A,c,f,g,h,i,Aa,e,M.palette),A.isPie||(G.drawYAxis(a,g,i),G.drawXAxis(a,g)),I.update(a),J.update(a,f,g,h,i)}function o(a){H.update({range:a})}function t(a){H.update({filter:a})}function u(a){if(M.dataSource&&!N){L=K;const{value:b,text:c}=A.xLabels[a];F.zoom(c);const d=M.zoomToPie?Promise.resolve(x()):j(new Date(b));d.then(b=>w(b,a))}}function v(){if(!M.dataSource)return;const a=ta((K.labelFromIndex+K.labelToIndex)/2);i().then(b=>w(b,a))}function w(a,b){const c=1/A.xLabels.length,d=b/(A.xLabels.length-1);H.update({range:{begin:d-c/2,end:d+c/2}}),setTimeout(()=>{Object.assign(A,p(a,M.datasetColors,N||M.zoomToPie?"days":"hours")),H.update({range:{begin:Xa-Wa,end:Xa+Wa}},!0);const b=N||M.zoomToPie?A.xLabels.length:A.xLabels.length/24,c=1/b/2;H.update({range:N?{begin:L.begin,end:L.end}:{begin:Xa-c,end:Xa+c}}),N=!N},Va)}function x(){return i().then(a=>{const b=Object.assign({},a);return b.columns=a.columns.map(a=>{const b=a.slice(K.labelFromIndex+1,K.labelToIndex+1);return b.unshift(a[0]),b}),Object.keys(b.types).forEach(a=>{"x"!==a&&(b.types[a]="pie")}),b.pie=!0,b})}function y(a){(A.isBars||A.isPie)&&H.update({focusOn:a})}let A,B,C,D,E,F,G,H,I,J,K,L,M=e,N=!1;return g(),i().then(a=>{A=p(a,M.datasetColors),m()}),{redraw:f}},setupColors:ea};const va="x",wa={begin:.333,end:.667},xa=10,ya=320,za=10,Aa=2,Ba=.9/2,Ca=10,Da="300 10px Helvetica, Arial, sans-serif",Ea=45,Fa=50,Ga=30,Ha=1,Ia=.1,Ja=40,Ka=10,La=1,Ma=8,Na="<div class=\"mask\"></div><div class=\"slider\"><div class=\"handle\"><span></span></div><div class=\"inner\"></div><div class=\"handle\"><span></span></div></div><div class=\"mask\"></div>",Oa=window.devicePixelRatio||1,Pa=86400000,Qa=3600000,Ra=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Sa=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],Ta=20,Ua=400,Va=Ua,Wa=.1,Xa=.5,Ya="type-1",Za=["begin 200 fast","end 200 fast","labelFromIndex 200 fast floor","labelToIndex 200 fast ceil","xAxisScale","yMinViewport","yMaxViewport","yMinViewportSecond","yMaxViewportSecond","yMinMinimap","yMaxMinimap","yMinMinimapSecond","yMaxMinimapSecond","yAxisScale 300","yAxisScaleSecond 300"],$a=[1,2,8,18,50,100,250,500,1e3,2500,5e3,1e4,25e3,5e4,1e5,25e4,5e5,1e6,25e5,5e6,1e7,25e6,5e7,1e8],_a=(()=>{const a=[],b=H(function(){a.forEach(a=>{a.classList.remove("hidden")})},500,!0,!1),c=H(function(){a.forEach(a=>{const{top:b,bottom:c}=a.getBoundingClientRect(),d=0>c||b>window.innerHeight;a.classList.toggle("hidden",d)})},500,!1,!0);return function(d){a.push(d),1===a.length&&(window.onscroll=()=>{b(),c()})}})(),ab=(a="div")=>document.createElement(a);let bb,cb;const db=["R","G","B","A"]})();