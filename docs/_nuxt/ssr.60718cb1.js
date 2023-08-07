import{m as U,h as w,f as F,r as j,n as A,u as D,l as T,q as H,c as $,a as S,d as C,t as N,b as R,w as E,s as P,o as W}from"./entry.682e0bb7.js";import{u as M,a as q,_ as V}from"./Test.5644264a.js";import{_ as K}from"./nuxt-link.453412ff.js";const I={ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1};function J(n,s={}){s={...I,...s};const r=L(s);return r.dispatch(n),r.toString()}function L(n){const s=[];let r=[];const t=e=>{s.push(e)};return{toString(){return s.join("")},getContext(){return r},dispatch(e){return n.replacer&&(e=n.replacer(e)),this["_"+(e===null?"null":typeof e)](e)},_object(e){if(e&&typeof e.toJSON=="function")return this._object(e.toJSON());const i=/\[object (.*)]/i,c=Object.prototype.toString.call(e),a=i.exec(c),o=a?a[1].toLowerCase():"unknown:["+c.toLowerCase()+"]";let l=null;if((l=r.indexOf(e))>=0)return this.dispatch("[CIRCULAR:"+l+"]");if(r.push(e),typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(e))return t("buffer:"),t(e.toString("utf8"));if(o!=="object"&&o!=="function"&&o!=="asyncfunction")this["_"+o]?this["_"+o](e):n.ignoreUnknown||this._unkown(e,o);else{let u=Object.keys(e);n.unorderedObjects&&(u=u.sort()),n.respectType!==!1&&!z(e)&&u.splice(0,0,"prototype","__proto__","letructor"),n.excludeKeys&&(u=u.filter(function(f){return!n.excludeKeys(f)})),t("object:"+u.length+":");for(const f of u)this.dispatch(f),t(":"),n.excludeValues||this.dispatch(e[f]),t(",")}},_array(e,i){if(i=typeof i<"u"?i:n.unorderedArrays!==!1,t("array:"+e.length+":"),!i||e.length<=1){for(const o of e)this.dispatch(o);return}const c=[],a=e.map(o=>{const l=L(n);return l.dispatch(o),c.push(l.getContext()),l.toString()});return r=[...r,...c],a.sort(),this._array(a,!1)},_date(e){return t("date:"+e.toJSON())},_symbol(e){return t("symbol:"+e.toString())},_unkown(e,i){if(t(i),!!e&&(t(":"),e&&typeof e.entries=="function"))return this._array(Array.from(e.entries()),!0)},_error(e){return t("error:"+e.toString())},_boolean(e){return t("bool:"+e.toString())},_string(e){t("string:"+e.length+":"),t(e.toString())},_function(e){t("fn:"),z(e)?this.dispatch("[native]"):this.dispatch(e.toString()),n.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(e.name)),n.respectFunctionProperties&&this._object(e)},_number(e){return t("number:"+e.toString())},_xml(e){return t("xml:"+e.toString())},_null(){return t("Null")},_undefined(){return t("Undefined")},_regexp(e){return t("regex:"+e.toString())},_uint8array(e){return t("uint8array:"),this.dispatch(Array.prototype.slice.call(e))},_uint8clampedarray(e){return t("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(e))},_int8array(e){return t("int8array:"),this.dispatch(Array.prototype.slice.call(e))},_uint16array(e){return t("uint16array:"),this.dispatch(Array.prototype.slice.call(e))},_int16array(e){return t("int16array:"),this.dispatch(Array.prototype.slice.call(e))},_uint32array(e){return t("uint32array:"),this.dispatch(Array.prototype.slice.call(e))},_int32array(e){return t("int32array:"),this.dispatch(Array.prototype.slice.call(e))},_float32array(e){return t("float32array:"),this.dispatch(Array.prototype.slice.call(e))},_float64array(e){return t("float64array:"),this.dispatch(Array.prototype.slice.call(e))},_arraybuffer(e){return t("arraybuffer:"),this.dispatch(new Uint8Array(e))},_url(e){return t("url:"+e.toString())},_map(e){t("map:");const i=[...e];return this._array(i,n.unorderedSets!==!1)},_set(e){t("set:");const i=[...e];return this._array(i,n.unorderedSets!==!1)},_file(e){return t("file:"),this.dispatch([e.name,e.size,e.type,e.lastModfied])},_blob(){if(n.ignoreUnknown)return t("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},_domwindow(){return t("domwindow")},_bigint(e){return t("bigint:"+e.toString())},_process(){return t("process")},_timer(){return t("timer")},_pipe(){return t("pipe")},_tcp(){return t("tcp")},_udp(){return t("udp")},_tty(){return t("tty")},_statwatcher(){return t("statwatcher")},_securecontext(){return t("securecontext")},_connection(){return t("connection")},_zlib(){return t("zlib")},_context(){return t("context")},_nodescript(){return t("nodescript")},_httpparser(){return t("httpparser")},_dataview(){return t("dataview")},_signal(){return t("signal")},_fsevent(){return t("fsevent")},_tlswrap(){return t("tlswrap")}}}function z(n){return typeof n!="function"?!1:/^function\s+\w*\s*\(\s*\)\s*{\s+\[native code]\s+}$/i.exec(Function.prototype.toString.call(n))!=null}class m{constructor(s,r){s=this.words=s||[],this.sigBytes=r!==void 0?r:s.length*4}toString(s){return(s||G).stringify(this)}concat(s){if(this.clamp(),this.sigBytes%4)for(let r=0;r<s.sigBytes;r++){const t=s.words[r>>>2]>>>24-r%4*8&255;this.words[this.sigBytes+r>>>2]|=t<<24-(this.sigBytes+r)%4*8}else for(let r=0;r<s.sigBytes;r+=4)this.words[this.sigBytes+r>>>2]=s.words[r>>>2];return this.sigBytes+=s.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new m([...this.words])}}const G={stringify(n){const s=[];for(let r=0;r<n.sigBytes;r++){const t=n.words[r>>>2]>>>24-r%4*8&255;s.push((t>>>4).toString(16),(t&15).toString(16))}return s.join("")}},Q={stringify(n){const s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=[];for(let t=0;t<n.sigBytes;t+=3){const e=n.words[t>>>2]>>>24-t%4*8&255,i=n.words[t+1>>>2]>>>24-(t+1)%4*8&255,c=n.words[t+2>>>2]>>>24-(t+2)%4*8&255,a=e<<16|i<<8|c;for(let o=0;o<4&&t*8+o*6<n.sigBytes*8;o++)r.push(s.charAt(a>>>6*(3-o)&63))}return r.join("")}},X={parse(n){const s=n.length,r=[];for(let t=0;t<s;t++)r[t>>>2]|=(n.charCodeAt(t)&255)<<24-t%4*8;return new m(r,s)}},Y={parse(n){return X.parse(unescape(encodeURIComponent(n)))}};class Z{constructor(){this._minBufferSize=0,this.blockSize=512/32,this.reset()}reset(){this._data=new m,this._nDataBytes=0}_append(s){typeof s=="string"&&(s=Y.parse(s)),this._data.concat(s),this._nDataBytes+=s.sigBytes}_doProcessBlock(s,r){}_process(s){let r,t=this._data.sigBytes/(this.blockSize*4);s?t=Math.ceil(t):t=Math.max((t|0)-this._minBufferSize,0);const e=t*this.blockSize,i=Math.min(e*4,this._data.sigBytes);if(e){for(let c=0;c<e;c+=this.blockSize)this._doProcessBlock(this._data.words,c);r=this._data.words.splice(0,e),this._data.sigBytes-=i}return new m(r,i)}}class tt extends Z{update(s){return this._append(s),this._process(),this}finalize(s){s&&this._append(s)}}const et=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],st=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],d=[];class rt extends tt{constructor(){super(),this.reset()}reset(){super.reset(),this._hash=new m([...et])}_doProcessBlock(s,r){const t=this._hash.words;let e=t[0],i=t[1],c=t[2],a=t[3],o=t[4],l=t[5],u=t[6],f=t[7];for(let h=0;h<64;h++){if(h<16)d[h]=s[r+h]|0;else{const g=d[h-15],_=(g<<25|g>>>7)^(g<<14|g>>>18)^g>>>3,y=d[h-2],O=(y<<15|y>>>17)^(y<<13|y>>>19)^y>>>10;d[h]=_+d[h-7]+O+d[h-16]}const b=o&l^~o&u,k=e&i^e&c^i&c,v=(e<<30|e>>>2)^(e<<19|e>>>13)^(e<<10|e>>>22),B=(o<<26|o>>>6)^(o<<21|o>>>11)^(o<<7|o>>>25),x=f+B+b+st[h]+d[h],p=v+k;f=u,u=l,l=o,o=a+x|0,a=c,c=i,i=e,e=x+p|0}t[0]=t[0]+e|0,t[1]=t[1]+i|0,t[2]=t[2]+c|0,t[3]=t[3]+a|0,t[4]=t[4]+o|0,t[5]=t[5]+l|0,t[6]=t[6]+u|0,t[7]=t[7]+f|0}finalize(s){super.finalize(s);const r=this._nDataBytes*8,t=this._data.sigBytes*8;return this._data.words[t>>>5]|=128<<24-t%32,this._data.words[(t+64>>>9<<4)+14]=Math.floor(r/4294967296),this._data.words[(t+64>>>9<<4)+15]=r,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function nt(n){return new rt().finalize(n).toString(Q)}function it(n,s={}){const r=typeof n=="string"?n:J(n,s);return nt(r).slice(0,10)}function ot(n=U()){var s;return(s=n.ssrContext)==null?void 0:s.event}function at(n,s,r){const[t={},e]=typeof s=="string"?[{},s]:[s,r],i=t.key||it([e,w(t.baseURL),typeof n=="string"?n:"",w(t.params||t.query)]);if(!i||typeof i!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+i);if(!n)throw new Error("[nuxt] [useFetch] request is missing.");const c=i===e?"$f"+i:i,a=F(()=>{let _=n;return typeof _=="function"&&(_=_()),w(_)});if(!t.baseURL&&typeof a.value=="string"&&a.value.startsWith("//"))throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:o,lazy:l,default:u,transform:f,pick:h,watch:b,immediate:k,...v}=t,B=j({...v,cache:typeof t.cache=="boolean"?void 0:t.cache}),x={server:o,lazy:l,default:u,transform:f,pick:h,immediate:k,watch:b===!1?[]:[B,a,...b||[]]};let p;return M(c,()=>{var y;return(y=p==null?void 0:p.abort)==null||y.call(p),p=typeof AbortController<"u"?new AbortController:{},typeof a.value=="string"&&a.value.startsWith("/"),(t.$fetch||globalThis.$fetch)(a.value,{signal:p.signal,...B})},x)}function ct(){return new URL(window.location.href)}const ft={__name:"ssr",async setup(n){let s,r;[s,r]=A(()=>P(()=>import("./test.96fdc7db.js"),["./test.96fdc7db.js","./entry.682e0bb7.js"],import.meta.url)),s=await s,r(),D({link:[{rel:"icon",href:"",type:"image/jpg",crossorigin:"anonymous"}]}),console.log(T());const t=H("a",()=>1),{data:e}=q("b");e.value=2,[s,r]=A(()=>at("https://jsonplaceholder.typicode.com/todos/",{transform:c=>c.map(({title:a})=>a)},"$NCBqywl0WN")),s=await s,r();const i=U();return console.log(i),console.log(ot()),console.log(ct()),(c,a)=>{const o=V,l=K;return W(),$("div",null,[S("div",null,[C(N(w(t)),1),S("button",{onClick:a[0]||(a[0]=u=>t.value+=1)},"a++")]),S("div",null,[C(N(w(e)),1),S("button",{onClick:a[1]||(a[1]=u=>e.value+=1)},"b++")]),R(o),R(l,{to:"/ssr2"},{default:E(()=>[C("to ssr2")]),_:1})])}}};export{ft as default};