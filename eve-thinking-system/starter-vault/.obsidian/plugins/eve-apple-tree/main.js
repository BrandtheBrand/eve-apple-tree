var Ss=Object.defineProperty;var ch=Object.getOwnPropertyDescriptor;var hh=Object.getOwnPropertyNames;var uh=Object.prototype.hasOwnProperty;var dh=(s,e,t)=>e in s?Ss(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var fh=(s,e)=>{for(var t in e)Ss(s,t,{get:e[t],enumerable:!0})},ph=(s,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of hh(e))!uh.call(s,i)&&i!==t&&Ss(s,i,{get:()=>e[i],enumerable:!(n=ch(e,i))||n.enumerable});return s};var mh=s=>ph(Ss({},"__esModule",{value:!0}),s);var de=(s,e,t)=>(dh(s,typeof e!="symbol"?e+"":e,t),t);var g0={};fh(g0,{default:()=>Vr});module.exports=mh(g0);var Hn=require("obsidian");var hn=require("obsidian");var Ma="160",Qt={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ai={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},gh=0,Va=1,_h=2;var yc=1,vh=2,_n=3,Bn=0,Tt=1,qt=2;var Nn=0,Ot=1,zn=2,Ga=3,Wa=4,xh=5,Jn=100,yh=101,Mh=102,Xa=103,Ya=104,bh=200,Eh=201,Sh=202,Th=203,Ro=204,Co=205,wh=206,Ah=207,Rh=208,Ch=209,Ph=210,Lh=211,Ih=212,Dh=213,Nh=214,Uh=0,Oh=1,Fh=2,tr=3,Bh=4,zh=5,kh=6,Hh=7,Mc=0,Vh=1,Gh=2,Un=0,Wh=1,Xh=2,Yh=3,qh=4,Zh=5,Jh=6;var bc=300,Ui=301,Oi=302,Po=303,Lo=304,Lr=306,Io=1e3,Zt=1001,Do=1002,Ct=1003,qa=1004;var qr=1005;var kt=1006,$h=1007;var ss=1008;var On=1009,Kh=1010,jh=1011,ba=1012,Ec=1013,In=1014,Dn=1015,rs=1016,Sc=1017,Tc=1018,jn=1020,Qh=1021,Jt=1023,eu=1024,tu=1025,Qn=1026,Fi=1027,nu=1028,wc=1029,iu=1030,Ac=1031,Rc=1033,Zr=33776,Jr=33777,$r=33778,Kr=33779,Za=35840,Ja=35841,$a=35842,Ka=35843,Cc=36196,ja=37492,Qa=37496,el=37808,tl=37809,nl=37810,il=37811,sl=37812,rl=37813,ol=37814,al=37815,ll=37816,cl=37817,hl=37818,ul=37819,dl=37820,fl=37821,jr=36492,pl=36494,ml=36495,su=36283,gl=36284,_l=36285,vl=36286;var nr=2300,ir=2301,Qr=2302,xl=2400,yl=2401,Ml=2402;var Pc=3e3,ei=3001,ru=3200,ou=3201,au=0,lu=1,Ht="",yt="srgb",xn="srgb-linear",Ea="display-p3",Ir="display-p3-linear",sr="linear",Qe="srgb",rr="rec709",or="p3";var hi=7680;var bl=519,cu=512,hu=513,uu=514,Lc=515,du=516,fu=517,pu=518,mu=519,No=35044;var El="300 es",Uo=1035,vn=2e3,ar=2001,an=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}},Et=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Sl=1234567,ji=Math.PI/180,os=180/Math.PI;function on(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Et[s&255]+Et[s>>8&255]+Et[s>>16&255]+Et[s>>24&255]+"-"+Et[e&255]+Et[e>>8&255]+"-"+Et[e>>16&15|64]+Et[e>>24&255]+"-"+Et[t&63|128]+Et[t>>8&255]+"-"+Et[t>>16&255]+Et[t>>24&255]+Et[n&255]+Et[n>>8&255]+Et[n>>16&255]+Et[n>>24&255]).toLowerCase()}function gt(s,e,t){return Math.max(e,Math.min(t,s))}function Sa(s,e){return(s%e+e)%e}function gu(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function _u(s,e,t){return s!==e?(t-s)/(e-s):0}function Qi(s,e,t){return(1-t)*s+t*e}function vu(s,e,t,n){return Qi(s,e,1-Math.exp(-t*n))}function xu(s,e=1){return e-Math.abs(Sa(s,e*2)-e)}function yu(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Mu(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function bu(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Eu(s,e){return s+Math.random()*(e-s)}function Su(s){return s*(.5-Math.random())}function Tu(s){s!==void 0&&(Sl=s);let e=Sl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function wu(s){return s*ji}function Au(s){return s*os}function Oo(s){return(s&s-1)===0&&s!==0}function Ru(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function lr(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Cu(s,e,t,n,i){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),d=r((e-n)/2),u=a((e-n)/2),m=r((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":s.set(o*h,l*d,l*u,o*c);break;case"YZY":s.set(l*u,o*h,l*d,o*c);break;case"ZXZ":s.set(l*d,l*u,o*h,o*c);break;case"XZX":s.set(o*h,l*g,l*m,o*c);break;case"YXY":s.set(l*m,o*h,l*g,o*c);break;case"ZYZ":s.set(l*g,l*m,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function rn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ke(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var _s={DEG2RAD:ji,RAD2DEG:os,generateUUID:on,clamp:gt,euclideanModulo:Sa,mapLinear:gu,inverseLerp:_u,lerp:Qi,damp:vu,pingpong:xu,smoothstep:yu,smootherstep:Mu,randInt:bu,randFloat:Eu,randFloatSpread:Su,seededRandom:Tu,degToRad:wu,radToDeg:Au,isPowerOfTwo:Oo,ceilPowerOfTwo:Ru,floorPowerOfTwo:lr,setQuaternionFromProperEuler:Cu,normalize:Ke,denormalize:rn},re=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ye=class s{constructor(e,t,n,i,r,a,o,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],m=n[5],g=n[8],_=i[0],f=i[3],p=i[6],E=i[1],v=i[4],A=i[7],D=i[2],b=i[5],w=i[8];return r[0]=a*_+o*E+l*D,r[3]=a*f+o*v+l*b,r[6]=a*p+o*A+l*w,r[1]=c*_+h*E+d*D,r[4]=c*f+h*v+d*b,r[7]=c*p+h*A+d*w,r[2]=u*_+m*E+g*D,r[5]=u*f+m*v+g*b,r[8]=u*p+m*A+g*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*r,m=c*r-a*l,g=t*d+n*u+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=d*_,e[1]=(i*c-h*n)*_,e[2]=(o*n-i*a)*_,e[3]=u*_,e[4]=(h*t-i*l)*_,e[5]=(i*r-o*t)*_,e[6]=m*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(eo.makeScale(e,t)),this}rotate(e){return this.premultiply(eo.makeRotation(-e)),this}translate(e,t){return this.premultiply(eo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},eo=new Ye;function Ic(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function cr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Pu(){let s=cr("canvas");return s.style.display="block",s}var Tl={};function es(s){s in Tl||(Tl[s]=!0,console.warn(s))}var wl=new Ye().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Al=new Ye().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ts={[xn]:{transfer:sr,primaries:rr,toReference:s=>s,fromReference:s=>s},[yt]:{transfer:Qe,primaries:rr,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Ir]:{transfer:sr,primaries:or,toReference:s=>s.applyMatrix3(Al),fromReference:s=>s.applyMatrix3(wl)},[Ea]:{transfer:Qe,primaries:or,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Al),fromReference:s=>s.applyMatrix3(wl).convertLinearToSRGB()}},Lu=new Set([xn,Ir]),je={enabled:!0,_workingColorSpace:xn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Lu.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;let n=Ts[e].toReference,i=Ts[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Ts[s].primaries},getTransfer:function(s){return s===Ht?sr:Ts[s].transfer}};function Di(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function to(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var ui,hr=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ui===void 0&&(ui=cr("canvas")),ui.width=e.width,ui.height=e.height;let n=ui.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ui}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=cr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Di(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Di(t[n]/255)*255):t[n]=Di(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Iu=0,ur=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Iu++}),this.uuid=on(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(no(i[a].image)):r.push(no(i[a]))}else r=no(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function no(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?hr.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Du=0,Vt=class s extends an{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=Zt,i=Zt,r=kt,a=ss,o=Jt,l=On,c=s.DEFAULT_ANISOTROPY,h=Ht){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Du++}),this.uuid=on(),this.name="",this.source=new ur(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(es("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===ei?yt:Ht),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Io:e.x=e.x-Math.floor(e.x);break;case Zt:e.x=e.x<0?0:1;break;case Do:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Io:e.y=e.y-Math.floor(e.y);break;case Zt:e.y=e.y<0?0:1;break;case Do:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return es("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===yt?ei:Pc}set encoding(e){es("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ei?yt:Ht}};Vt.DEFAULT_IMAGE=null;Vt.DEFAULT_MAPPING=bc;Vt.DEFAULT_ANISOTROPY=1;var Mt=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],m=l[5],g=l[9],_=l[2],f=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+f)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,A=(m+1)/2,D=(p+1)/2,b=(h+u)/4,w=(d+_)/4,z=(g+f)/4;return v>A&&v>D?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=b/n,r=w/n):A>D?A<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(A),n=b/i,r=z/i):D<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(D),n=w/r,i=z/r),this.set(n,i,r,t),this}let E=Math.sqrt((f-g)*(f-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(E)<.001&&(E=1),this.x=(f-g)/E,this.y=(d-_)/E,this.z=(u-h)/E,this.w=Math.acos((c+m+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Fo=class extends an{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t);let i={width:e,height:t,depth:1};n.encoding!==void 0&&(es("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ei?yt:Ht),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Vt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new ur(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},yn=class extends Fo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},dr=class extends Vt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Zt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Bo=class extends Vt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Zt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var $t=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],u=r[a+0],m=r[a+1],g=r[a+2],_=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=u,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(d!==_||l!==u||c!==m||h!==g){let f=1-o,p=l*u+c*m+h*g+d*_,E=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let D=Math.sqrt(v),b=Math.atan2(D,p*E);f=Math.sin(f*b)/D,o=Math.sin(o*b)/D}let A=o*E;if(l=l*f+u*A,c=c*f+m*A,h=h*f+g*A,d=d*f+_*A,f===1-o){let D=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=D,c*=D,h*=D,d*=D}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[a],u=r[a+1],m=r[a+2],g=r[a+3];return e[t]=o*g+h*d+l*m-c*u,e[t+1]=l*g+h*u+c*d-o*m,e[t+2]=c*g+h*m+o*u-l*d,e[t+3]=h*g-o*d-l*u-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),d=o(r/2),u=l(n/2),m=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*m*g,this._y=c*m*d-u*h*g,this._z=c*h*g+u*m*d,this._w=c*h*d-u*m*g;break;case"YXZ":this._x=u*h*d+c*m*g,this._y=c*m*d-u*h*g,this._z=c*h*g-u*m*d,this._w=c*h*d+u*m*g;break;case"ZXY":this._x=u*h*d-c*m*g,this._y=c*m*d+u*h*g,this._z=c*h*g+u*m*d,this._w=c*h*d-u*m*g;break;case"ZYX":this._x=u*h*d-c*m*g,this._y=c*m*d+u*h*g,this._z=c*h*g-u*m*d,this._w=c*h*d+u*m*g;break;case"YZX":this._x=u*h*d+c*m*g,this._y=c*m*d+u*h*g,this._z=c*h*g-u*m*d,this._w=c*h*d-u*m*g;break;case"XZY":this._x=u*h*d-c*m*g,this._y=c*m*d-u*h*g,this._z=c*h*g+u*m*d,this._w=c*h*d+u*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){let m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(a-i)*m}else if(n>o&&n>d){let m=2*Math.sqrt(1+n-o-d);this._w=(h-l)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(r+c)/m}else if(o>d){let m=2*Math.sqrt(1+o-n-d);this._w=(r-c)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+d-n-o);this._w=(a-i)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=a*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Rl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Rl.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-r*i),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=i+l*d+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return io.copy(this).projectOnVector(e),this.sub(io)}reflect(e){return this.sub(io.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},io=new L,Rl=new $t,ti=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Wt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Wt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Wt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Wt):Wt.fromBufferAttribute(r,a),Wt.applyMatrix4(e.matrixWorld),this.expandByPoint(Wt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ws.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ws.copy(n.boundingBox)),ws.applyMatrix4(e.matrixWorld),this.union(ws)}let i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Wt),Wt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xi),As.subVectors(this.max,Xi),di.subVectors(e.a,Xi),fi.subVectors(e.b,Xi),pi.subVectors(e.c,Xi),An.subVectors(fi,di),Rn.subVectors(pi,fi),Wn.subVectors(di,pi);let t=[0,-An.z,An.y,0,-Rn.z,Rn.y,0,-Wn.z,Wn.y,An.z,0,-An.x,Rn.z,0,-Rn.x,Wn.z,0,-Wn.x,-An.y,An.x,0,-Rn.y,Rn.x,0,-Wn.y,Wn.x,0];return!so(t,di,fi,pi,As)||(t=[1,0,0,0,1,0,0,0,1],!so(t,di,fi,pi,As))?!1:(Rs.crossVectors(An,Rn),t=[Rs.x,Rs.y,Rs.z],so(t,di,fi,pi,As))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(dn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},dn=[new L,new L,new L,new L,new L,new L,new L,new L],Wt=new L,ws=new ti,di=new L,fi=new L,pi=new L,An=new L,Rn=new L,Wn=new L,Xi=new L,As=new L,Rs=new L,Xn=new L;function so(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Xn.fromArray(s,r);let o=i.x*Math.abs(Xn.x)+i.y*Math.abs(Xn.y)+i.z*Math.abs(Xn.z),l=e.dot(Xn),c=t.dot(Xn),h=n.dot(Xn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Nu=new ti,Yi=new L,ro=new L,Bi=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Nu.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Yi.subVectors(e,this.center);let t=Yi.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Yi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ro.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Yi.copy(e.center).add(ro)),this.expandByPoint(Yi.copy(e.center).sub(ro))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},fn=new L,oo=new L,Cs=new L,Cn=new L,ao=new L,Ps=new L,lo=new L,ni=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=fn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fn.copy(this.origin).addScaledVector(this.direction,t),fn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){oo.copy(e).add(t).multiplyScalar(.5),Cs.copy(t).sub(e).normalize(),Cn.copy(this.origin).sub(oo);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Cs),o=Cn.dot(this.direction),l=-Cn.dot(Cs),c=Cn.lengthSq(),h=Math.abs(1-a*a),d,u,m,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let _=1/h;d*=_,u*=_,m=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),m=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),m=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),m=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),m=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(oo).addScaledVector(Cs,u),m}intersectSphere(e,t){fn.subVectors(e.center,this.origin);let n=fn.dot(this.direction),i=fn.dot(fn)-n*n,r=e.radius*e.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,fn)!==null}intersectTriangle(e,t,n,i,r){ao.subVectors(t,e),Ps.subVectors(n,e),lo.crossVectors(ao,Ps);let a=this.direction.dot(lo),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Cn.subVectors(this.origin,e);let l=o*this.direction.dot(Ps.crossVectors(Cn,Ps));if(l<0)return null;let c=o*this.direction.dot(ao.cross(Cn));if(c<0||l+c>a)return null;let h=-o*Cn.dot(lo);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},lt=class s{constructor(e,t,n,i,r,a,o,l,c,h,d,u,m,g,_,f){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,h,d,u,m,g,_,f)}set(e,t,n,i,r,a,o,l,c,h,d,u,m,g,_,f){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=m,p[7]=g,p[11]=_,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/mi.setFromMatrixColumn(e,0).length(),r=1/mi.setFromMatrixColumn(e,1).length(),a=1/mi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=a*h,m=a*d,g=o*h,_=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=m+g*c,t[5]=u-_*c,t[9]=-o*l,t[2]=_-u*c,t[6]=g+m*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,m=l*d,g=c*h,_=c*d;t[0]=u+_*o,t[4]=g*o-m,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=m*o-g,t[6]=_+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,m=l*d,g=c*h,_=c*d;t[0]=u-_*o,t[4]=-a*d,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*h,t[9]=_-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,m=a*d,g=o*h,_=o*d;t[0]=l*h,t[4]=g*c-m,t[8]=u*c+_,t[1]=l*d,t[5]=_*c+u,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,m=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-u*d,t[8]=g*d+m,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=m*d+g,t[10]=u-_*d}else if(e.order==="XZY"){let u=a*l,m=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+_,t[5]=a*h,t[9]=m*d-g,t[2]=g*d-m,t[6]=o*h,t[10]=_*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Uu,e,Ou)}lookAt(e,t,n){let i=this.elements;return Dt.subVectors(e,t),Dt.lengthSq()===0&&(Dt.z=1),Dt.normalize(),Pn.crossVectors(n,Dt),Pn.lengthSq()===0&&(Math.abs(n.z)===1?Dt.x+=1e-4:Dt.z+=1e-4,Dt.normalize(),Pn.crossVectors(n,Dt)),Pn.normalize(),Ls.crossVectors(Dt,Pn),i[0]=Pn.x,i[4]=Ls.x,i[8]=Dt.x,i[1]=Pn.y,i[5]=Ls.y,i[9]=Dt.y,i[2]=Pn.z,i[6]=Ls.z,i[10]=Dt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],m=n[13],g=n[2],_=n[6],f=n[10],p=n[14],E=n[3],v=n[7],A=n[11],D=n[15],b=i[0],w=i[4],z=i[8],M=i[12],y=i[1],N=i[5],X=i[9],j=i[13],R=i[2],U=i[6],O=i[10],q=i[14],Y=i[3],W=i[7],K=i[11],Z=i[15];return r[0]=a*b+o*y+l*R+c*Y,r[4]=a*w+o*N+l*U+c*W,r[8]=a*z+o*X+l*O+c*K,r[12]=a*M+o*j+l*q+c*Z,r[1]=h*b+d*y+u*R+m*Y,r[5]=h*w+d*N+u*U+m*W,r[9]=h*z+d*X+u*O+m*K,r[13]=h*M+d*j+u*q+m*Z,r[2]=g*b+_*y+f*R+p*Y,r[6]=g*w+_*N+f*U+p*W,r[10]=g*z+_*X+f*O+p*K,r[14]=g*M+_*j+f*q+p*Z,r[3]=E*b+v*y+A*R+D*Y,r[7]=E*w+v*N+A*U+D*W,r[11]=E*z+v*X+A*O+D*K,r[15]=E*M+v*j+A*q+D*Z,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],m=e[14],g=e[3],_=e[7],f=e[11],p=e[15];return g*(+r*l*d-i*c*d-r*o*u+n*c*u+i*o*m-n*l*m)+_*(+t*l*m-t*c*u+r*a*u-i*a*m+i*c*h-r*l*h)+f*(+t*c*d-t*o*m-r*a*d+n*a*m+r*o*h-n*c*h)+p*(-i*o*h-t*l*d+t*o*u+i*a*d-n*a*u+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],m=e[11],g=e[12],_=e[13],f=e[14],p=e[15],E=d*f*c-_*u*c+_*l*m-o*f*m-d*l*p+o*u*p,v=g*u*c-h*f*c-g*l*m+a*f*m+h*l*p-a*u*p,A=h*_*c-g*d*c+g*o*m-a*_*m-h*o*p+a*d*p,D=g*d*l-h*_*l-g*o*u+a*_*u+h*o*f-a*d*f,b=t*E+n*v+i*A+r*D;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/b;return e[0]=E*w,e[1]=(_*u*r-d*f*r-_*i*m+n*f*m+d*i*p-n*u*p)*w,e[2]=(o*f*r-_*l*r+_*i*c-n*f*c-o*i*p+n*l*p)*w,e[3]=(d*l*r-o*u*r-d*i*c+n*u*c+o*i*m-n*l*m)*w,e[4]=v*w,e[5]=(h*f*r-g*u*r+g*i*m-t*f*m-h*i*p+t*u*p)*w,e[6]=(g*l*r-a*f*r-g*i*c+t*f*c+a*i*p-t*l*p)*w,e[7]=(a*u*r-h*l*r+h*i*c-t*u*c-a*i*m+t*l*m)*w,e[8]=A*w,e[9]=(g*d*r-h*_*r-g*n*m+t*_*m+h*n*p-t*d*p)*w,e[10]=(a*_*r-g*o*r+g*n*c-t*_*c-a*n*p+t*o*p)*w,e[11]=(h*o*r-a*d*r-h*n*c+t*d*c+a*n*m-t*o*m)*w,e[12]=D*w,e[13]=(h*_*i-g*d*i+g*n*u-t*_*u-h*n*f+t*d*f)*w,e[14]=(g*o*i-a*_*i-g*n*l+t*_*l+a*n*f-t*o*f)*w,e[15]=(a*d*i-h*o*i+h*n*l-t*d*l-a*n*u+t*o*u)*w,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,d=o+o,u=r*c,m=r*h,g=r*d,_=a*h,f=a*d,p=o*d,E=l*c,v=l*h,A=l*d,D=n.x,b=n.y,w=n.z;return i[0]=(1-(_+p))*D,i[1]=(m+A)*D,i[2]=(g-v)*D,i[3]=0,i[4]=(m-A)*b,i[5]=(1-(u+p))*b,i[6]=(f+E)*b,i[7]=0,i[8]=(g+v)*w,i[9]=(f-E)*w,i[10]=(1-(u+_))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=mi.set(i[0],i[1],i[2]).length(),a=mi.set(i[4],i[5],i[6]).length(),o=mi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Xt.copy(this);let c=1/r,h=1/a,d=1/o;return Xt.elements[0]*=c,Xt.elements[1]*=c,Xt.elements[2]*=c,Xt.elements[4]*=h,Xt.elements[5]*=h,Xt.elements[6]*=h,Xt.elements[8]*=d,Xt.elements[9]*=d,Xt.elements[10]*=d,t.setFromRotationMatrix(Xt),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=vn){let l=this.elements,c=2*r/(t-e),h=2*r/(n-i),d=(t+e)/(t-e),u=(n+i)/(n-i),m,g;if(o===vn)m=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===ar)m=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=vn){let l=this.elements,c=1/(t-e),h=1/(n-i),d=1/(a-r),u=(t+e)*c,m=(n+i)*h,g,_;if(o===vn)g=(a+r)*d,_=-2*d;else if(o===ar)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},mi=new L,Xt=new lt,Uu=new L(0,0,0),Ou=new L(1,1,1),Pn=new L,Ls=new L,Dt=new L,Cl=new lt,Pl=new $t,fr=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(gt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-gt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Cl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Cl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Pl.setFromEuler(this),this.setFromQuaternion(Pl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};fr.DEFAULT_ORDER="XYZ";var as=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Fu=0,Ll=new L,gi=new $t,pn=new lt,Is=new L,qi=new L,Bu=new L,zu=new $t,Il=new L(1,0,0),Dl=new L(0,1,0),Nl=new L(0,0,1),ku={type:"added"},Hu={type:"removed"},Ft=class s extends an{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fu++}),this.uuid=on(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new L,t=new fr,n=new $t,i=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new lt},normalMatrix:{value:new Ye}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new as,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return gi.setFromAxisAngle(e,t),this.quaternion.multiply(gi),this}rotateOnWorldAxis(e,t){return gi.setFromAxisAngle(e,t),this.quaternion.premultiply(gi),this}rotateX(e){return this.rotateOnAxis(Il,e)}rotateY(e){return this.rotateOnAxis(Dl,e)}rotateZ(e){return this.rotateOnAxis(Nl,e)}translateOnAxis(e,t){return Ll.copy(e).applyQuaternion(this.quaternion),this.position.add(Ll.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Il,e)}translateY(e){return this.translateOnAxis(Dl,e)}translateZ(e){return this.translateOnAxis(Nl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Is.copy(e):Is.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),qi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pn.lookAt(qi,Is,this.up):pn.lookAt(Is,qi,this.up),this.quaternion.setFromRotationMatrix(pn),i&&(pn.extractRotation(i.matrixWorld),gi.setFromRotationMatrix(pn),this.quaternion.premultiply(gi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(ku)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Hu)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(pn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qi,e,Bu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qi,zu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let i=this.children;for(let r=0,a=i.length;r<a;r++){let o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};Ft.DEFAULT_UP=new L(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Yt=new L,mn=new L,co=new L,gn=new L,_i=new L,vi=new L,Ul=new L,ho=new L,uo=new L,fo=new L,Ds=!1,Kn=class s{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Yt.subVectors(e,t),i.cross(Yt);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Yt.subVectors(i,t),mn.subVectors(n,t),co.subVectors(e,t);let a=Yt.dot(Yt),o=Yt.dot(mn),l=Yt.dot(co),c=mn.dot(mn),h=mn.dot(co),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,m=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,gn)===null?!1:gn.x>=0&&gn.y>=0&&gn.x+gn.y<=1}static getUV(e,t,n,i,r,a,o,l){return Ds===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ds=!0),this.getInterpolation(e,t,n,i,r,a,o,l)}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,gn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,gn.x),l.addScaledVector(a,gn.y),l.addScaledVector(o,gn.z),l)}static isFrontFacing(e,t,n,i){return Yt.subVectors(n,t),mn.subVectors(e,t),Yt.cross(mn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yt.subVectors(this.c,this.b),mn.subVectors(this.a,this.b),Yt.cross(mn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return Ds===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ds=!0),s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,a,o;_i.subVectors(i,n),vi.subVectors(r,n),ho.subVectors(e,n);let l=_i.dot(ho),c=vi.dot(ho);if(l<=0&&c<=0)return t.copy(n);uo.subVectors(e,i);let h=_i.dot(uo),d=vi.dot(uo);if(h>=0&&d<=h)return t.copy(i);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(_i,a);fo.subVectors(e,r);let m=_i.dot(fo),g=vi.dot(fo);if(g>=0&&m<=g)return t.copy(r);let _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(vi,o);let f=h*g-m*d;if(f<=0&&d-h>=0&&m-g>=0)return Ul.subVectors(r,i),o=(d-h)/(d-h+(m-g)),t.copy(i).addScaledVector(Ul,o);let p=1/(f+_+u);return a=_*p,o=u*p,t.copy(n).addScaledVector(_i,a).addScaledVector(vi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Dc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ln={h:0,s:0,l:0},Ns={h:0,s:0,l:0};function po(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Be=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=je.workingColorSpace){return this.r=e,this.g=t,this.b=n,je.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=je.workingColorSpace){if(e=Sa(e,1),t=gt(t,0,1),n=gt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=po(a,r,e+1/3),this.g=po(a,r,e),this.b=po(a,r,e-1/3)}return je.toWorkingColorSpace(this,i),this}setStyle(e,t=yt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yt){let n=Dc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Di(e.r),this.g=Di(e.g),this.b=Di(e.b),this}copyLinearToSRGB(e){return this.r=to(e.r),this.g=to(e.g),this.b=to(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yt){return je.fromWorkingColorSpace(St.copy(this),e),Math.round(gt(St.r*255,0,255))*65536+Math.round(gt(St.g*255,0,255))*256+Math.round(gt(St.b*255,0,255))}getHexString(e=yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.fromWorkingColorSpace(St.copy(this),t);let n=St.r,i=St.g,r=St.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=je.workingColorSpace){return je.fromWorkingColorSpace(St.copy(this),t),e.r=St.r,e.g=St.g,e.b=St.b,e}getStyle(e=yt){je.fromWorkingColorSpace(St.copy(this),e);let t=St.r,n=St.g,i=St.b;return e!==yt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ln),this.setHSL(Ln.h+e,Ln.s+t,Ln.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ln),e.getHSL(Ns);let n=Qi(Ln.h,Ns.h,t),i=Qi(Ln.s,Ns.s,t),r=Qi(Ln.l,Ns.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},St=new Be;Be.NAMES=Dc;var Vu=0,kn=class extends an{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vu++}),this.uuid=on(),this.name="",this.type="Material",this.blending=Ot,this.side=Bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ro,this.blendDst=Co,this.blendEquation=Jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=tr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hi,this.stencilZFail=hi,this.stencilZPass=hi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ot&&(n.blending=this.blending),this.side!==Bn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ro&&(n.blendSrc=this.blendSrc),this.blendDst!==Co&&(n.blendDst=this.blendDst),this.blendEquation!==Jn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==tr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==hi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==hi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},ii=class extends kn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Mc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var ht=new L,Us=new re,vt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=No,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Dn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Us.fromBufferAttribute(this,t),Us.applyMatrix3(e),this.setXY(t,Us.x,Us.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix3(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix4(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyNormalMatrix(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.transformDirection(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=rn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ke(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=rn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=rn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=rn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=rn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),i=Ke(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),i=Ke(i,this.array),r=Ke(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==No&&(e.usage=this.usage),e}};var pr=class extends vt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var mr=class extends vt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var wt=class extends vt{constructor(e,t,n){super(new Float32Array(e),t,n)}};var Gu=0,zt=new lt,mo=new Ft,xi=new L,Nt=new ti,Zi=new ti,mt=new L,xt=class s extends an{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gu++}),this.uuid=on(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ic(e)?mr:pr)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ye().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zt.makeRotationFromQuaternion(e),this.applyMatrix4(zt),this}rotateX(e){return zt.makeRotationX(e),this.applyMatrix4(zt),this}rotateY(e){return zt.makeRotationY(e),this.applyMatrix4(zt),this}rotateZ(e){return zt.makeRotationZ(e),this.applyMatrix4(zt),this}translate(e,t,n){return zt.makeTranslation(e,t,n),this.applyMatrix4(zt),this}scale(e,t,n){return zt.makeScale(e,t,n),this.applyMatrix4(zt),this}lookAt(e){return mo.lookAt(e),mo.updateMatrix(),this.applyMatrix4(mo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xi).negate(),this.translate(xi.x,xi.y,xi.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new wt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ti);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];Nt.setFromBufferAttribute(r),this.morphTargetsRelative?(mt.addVectors(this.boundingBox.min,Nt.min),this.boundingBox.expandByPoint(mt),mt.addVectors(this.boundingBox.max,Nt.max),this.boundingBox.expandByPoint(mt)):(this.boundingBox.expandByPoint(Nt.min),this.boundingBox.expandByPoint(Nt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(Nt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Zi.setFromBufferAttribute(o),this.morphTargetsRelative?(mt.addVectors(Nt.min,Zi.min),Nt.expandByPoint(mt),mt.addVectors(Nt.max,Zi.max),Nt.expandByPoint(mt)):(Nt.expandByPoint(Zi.min),Nt.expandByPoint(Zi.max))}Nt.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)mt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(mt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)mt.fromBufferAttribute(o,c),l&&(xi.fromBufferAttribute(e,c),mt.add(xi)),i=Math.max(i,n.distanceToSquared(mt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,i=t.position.array,r=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vt(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let y=0;y<o;y++)c[y]=new L,h[y]=new L;let d=new L,u=new L,m=new L,g=new re,_=new re,f=new re,p=new L,E=new L;function v(y,N,X){d.fromArray(i,y*3),u.fromArray(i,N*3),m.fromArray(i,X*3),g.fromArray(a,y*2),_.fromArray(a,N*2),f.fromArray(a,X*2),u.sub(d),m.sub(d),_.sub(g),f.sub(g);let j=1/(_.x*f.y-f.x*_.y);isFinite(j)&&(p.copy(u).multiplyScalar(f.y).addScaledVector(m,-_.y).multiplyScalar(j),E.copy(m).multiplyScalar(_.x).addScaledVector(u,-f.x).multiplyScalar(j),c[y].add(p),c[N].add(p),c[X].add(p),h[y].add(E),h[N].add(E),h[X].add(E))}let A=this.groups;A.length===0&&(A=[{start:0,count:n.length}]);for(let y=0,N=A.length;y<N;++y){let X=A[y],j=X.start,R=X.count;for(let U=j,O=j+R;U<O;U+=3)v(n[U+0],n[U+1],n[U+2])}let D=new L,b=new L,w=new L,z=new L;function M(y){w.fromArray(r,y*3),z.copy(w);let N=c[y];D.copy(N),D.sub(w.multiplyScalar(w.dot(N))).normalize(),b.crossVectors(z,N);let j=b.dot(h[y])<0?-1:1;l[y*4]=D.x,l[y*4+1]=D.y,l[y*4+2]=D.z,l[y*4+3]=j}for(let y=0,N=A.length;y<N;++y){let X=A[y],j=X.start,R=X.count;for(let U=j,O=j+R;U<O;U+=3)M(n[U+0]),M(n[U+1]),M(n[U+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new vt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);let i=new L,r=new L,a=new L,o=new L,l=new L,c=new L,h=new L,d=new L;if(e)for(let u=0,m=e.count;u<m;u+=3){let g=e.getX(u+0),_=e.getX(u+1),f=e.getX(u+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,f),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,f),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let u=0,m=t.count;u<m;u+=3)i.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)mt.fromBufferAttribute(e,t),mt.normalize(),e.setXYZ(t,mt.x,mt.y,mt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),m=0,g=0;for(let _=0,f=l.length;_<f;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*h;for(let p=0;p<h;p++)u[g++]=c[m++]}return new vt(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],m=e(u,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let m=c[d];h.push(m.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,m=d.length;u<m;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ol=new lt,Yn=new ni,Os=new Bi,Fl=new L,yi=new L,Mi=new L,bi=new L,go=new L,Fs=new L,Bs=new re,zs=new re,ks=new re,Bl=new L,zl=new L,kl=new L,Hs=new L,Vs=new L,Ut=class extends Ft{constructor(e=new xt,t=new ii){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(r&&o){Fs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(go.fromBufferAttribute(d,e),a?Fs.addScaledVector(go,h):Fs.addScaledVector(go.sub(t),h))}t.add(Fs)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Os.copy(n.boundingSphere),Os.applyMatrix4(r),Yn.copy(e.ray).recast(e.near),!(Os.containsPoint(Yn.origin)===!1&&(Yn.intersectSphere(Os,Fl)===null||Yn.origin.distanceToSquared(Fl)>(e.far-e.near)**2))&&(Ol.copy(r).invert(),Yn.copy(e.ray).applyMatrix4(Ol),!(n.boundingBox!==null&&Yn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Yn)))}_computeIntersections(e,t,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){let f=u[g],p=a[f.materialIndex],E=Math.max(f.start,m.start),v=Math.min(o.count,Math.min(f.start+f.count,m.start+m.count));for(let A=E,D=v;A<D;A+=3){let b=o.getX(A),w=o.getX(A+1),z=o.getX(A+2);i=Gs(this,p,e,n,c,h,d,b,w,z),i&&(i.faceIndex=Math.floor(A/3),i.face.materialIndex=f.materialIndex,t.push(i))}}else{let g=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let f=g,p=_;f<p;f+=3){let E=o.getX(f),v=o.getX(f+1),A=o.getX(f+2);i=Gs(this,a,e,n,c,h,d,E,v,A),i&&(i.faceIndex=Math.floor(f/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){let f=u[g],p=a[f.materialIndex],E=Math.max(f.start,m.start),v=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let A=E,D=v;A<D;A+=3){let b=A,w=A+1,z=A+2;i=Gs(this,p,e,n,c,h,d,b,w,z),i&&(i.faceIndex=Math.floor(A/3),i.face.materialIndex=f.materialIndex,t.push(i))}}else{let g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let f=g,p=_;f<p;f+=3){let E=f,v=f+1,A=f+2;i=Gs(this,a,e,n,c,h,d,E,v,A),i&&(i.faceIndex=Math.floor(f/3),t.push(i))}}}};function Wu(s,e,t,n,i,r,a,o){let l;if(e.side===Tt?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===Bn,o),l===null)return null;Vs.copy(o),Vs.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(Vs);return c<t.near||c>t.far?null:{distance:c,point:Vs.clone(),object:s}}function Gs(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,yi),s.getVertexPosition(l,Mi),s.getVertexPosition(c,bi);let h=Wu(s,e,t,n,yi,Mi,bi,Hs);if(h){i&&(Bs.fromBufferAttribute(i,o),zs.fromBufferAttribute(i,l),ks.fromBufferAttribute(i,c),h.uv=Kn.getInterpolation(Hs,yi,Mi,bi,Bs,zs,ks,new re)),r&&(Bs.fromBufferAttribute(r,o),zs.fromBufferAttribute(r,l),ks.fromBufferAttribute(r,c),h.uv1=Kn.getInterpolation(Hs,yi,Mi,bi,Bs,zs,ks,new re),h.uv2=h.uv1),a&&(Bl.fromBufferAttribute(a,o),zl.fromBufferAttribute(a,l),kl.fromBufferAttribute(a,c),h.normal=Kn.getInterpolation(Hs,yi,Mi,bi,Bl,zl,kl,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new L,materialIndex:0};Kn.getNormal(yi,Mi,bi,d.normal),h.face=d}return h}var ls=class s extends xt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,m=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new wt(c,3)),this.setAttribute("normal",new wt(h,3)),this.setAttribute("uv",new wt(d,2));function g(_,f,p,E,v,A,D,b,w,z,M){let y=A/w,N=D/z,X=A/2,j=D/2,R=b/2,U=w+1,O=z+1,q=0,Y=0,W=new L;for(let K=0;K<O;K++){let Z=K*N-j;for(let ce=0;ce<U;ce++){let V=ce*y-X;W[_]=V*E,W[f]=Z*v,W[p]=R,c.push(W.x,W.y,W.z),W[_]=0,W[f]=0,W[p]=b>0?1:-1,h.push(W.x,W.y,W.z),d.push(ce/w),d.push(1-K/z),q+=1}}for(let K=0;K<z;K++)for(let Z=0;Z<w;Z++){let ce=u+Z+U*K,V=u+Z+U*(K+1),Q=u+(Z+1)+U*(K+1),pe=u+(Z+1)+U*K;l.push(ce,V,pe),l.push(V,Q,pe),Y+=6}o.addGroup(m,Y,M),m+=Y,u+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function zi(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Rt(s){let e={};for(let t=0;t<s.length;t++){let n=zi(s[t]);for(let i in n)e[i]=n[i]}return e}function Xu(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Nc(s){return s.getRenderTarget()===null?s.outputColorSpace:je.workingColorSpace}var Yu={clone:zi,merge:Rt},qu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Mn=class extends kn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qu,this.fragmentShader=Zu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zi(e.uniforms),this.uniformsGroups=Xu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},gr=class extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=vn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Pt=class extends gr{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=os*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ji*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return os*2*Math.atan(Math.tan(ji*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ji*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ei=-90,Si=1,zo=class extends Ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Pt(Ei,Si,e,t);i.layers=this.layers,this.add(i);let r=new Pt(Ei,Si,e,t);r.layers=this.layers,this.add(r);let a=new Pt(Ei,Si,e,t);a.layers=this.layers,this.add(a);let o=new Pt(Ei,Si,e,t);o.layers=this.layers,this.add(o);let l=new Pt(Ei,Si,e,t);l.layers=this.layers,this.add(l);let c=new Pt(Ei,Si,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===vn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ar)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(d,u,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},_r=class extends Vt{constructor(e,t,n,i,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Ui,super(e,t,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ko=class extends yn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(es("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ei?yt:Ht),this.texture=new _r(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:kt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ls(5,5,5),r=new Mn({name:"CubemapFromEquirect",uniforms:zi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Tt,blending:Nn});r.uniforms.tEquirect.value=t;let a=new Ut(i,r),o=t.minFilter;return t.minFilter===ss&&(t.minFilter=kt),new zo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}},_o=new L,Ju=new L,$u=new Ye,Lt=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=_o.subVectors(n,t).cross(Ju.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(_o),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||$u.getNormalMatrix(e),i=this.coplanarPoint(_o).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},qn=new Bi,Ws=new L,ki=class{constructor(e=new Lt,t=new Lt,n=new Lt,i=new Lt,r=new Lt,a=new Lt){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=vn){let n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],d=i[6],u=i[7],m=i[8],g=i[9],_=i[10],f=i[11],p=i[12],E=i[13],v=i[14],A=i[15];if(n[0].setComponents(l-r,u-c,f-m,A-p).normalize(),n[1].setComponents(l+r,u+c,f+m,A+p).normalize(),n[2].setComponents(l+a,u+h,f+g,A+E).normalize(),n[3].setComponents(l-a,u-h,f-g,A-E).normalize(),n[4].setComponents(l-o,u-d,f-_,A-v).normalize(),t===vn)n[5].setComponents(l+o,u+d,f+_,A+v).normalize();else if(t===ar)n[5].setComponents(o,d,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qn)}intersectsSprite(e){return qn.center.set(0,0,0),qn.radius=.7071067811865476,qn.applyMatrix4(e.matrixWorld),this.intersectsSphere(qn)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Ws.x=i.normal.x>0?e.max.x:e.min.x,Ws.y=i.normal.y>0?e.max.y:e.min.y,Ws.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ws)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Uc(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Ku(s,e){let t=e.isWebGL2,n=new WeakMap;function i(c,h){let d=c.array,u=c.usage,m=d.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,d,u),c.onUploadCallback();let _;if(d instanceof Float32Array)_=s.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=s.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=s.SHORT;else if(d instanceof Uint32Array)_=s.UNSIGNED_INT;else if(d instanceof Int32Array)_=s.INT;else if(d instanceof Int8Array)_=s.BYTE;else if(d instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,h,d){let u=h.array,m=h._updateRange,g=h.updateRanges;if(s.bindBuffer(d,c),m.count===-1&&g.length===0&&s.bufferSubData(d,0,u),g.length!==0){for(let _=0,f=g.length;_<f;_++){let p=g[_];t?s.bufferSubData(d,p.start*u.BYTES_PER_ELEMENT,u,p.start,p.count):s.bufferSubData(d,p.start*u.BYTES_PER_ELEMENT,u.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}m.count!==-1&&(t?s.bufferSubData(d,m.offset*u.BYTES_PER_ELEMENT,u,m.offset,m.count):s.bufferSubData(d,m.offset*u.BYTES_PER_ELEMENT,u.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(s.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let u=n.get(c);(!u||u.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let d=n.get(c);if(d===void 0)n.set(c,i(c,h));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,c,h),d.version=c.version}}return{get:a,remove:o,update:l}}var Ho=class s extends xt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,d=e/o,u=t/l,m=[],g=[],_=[],f=[];for(let p=0;p<h;p++){let E=p*u-a;for(let v=0;v<c;v++){let A=v*d-r;g.push(A,-E,0),_.push(0,0,1),f.push(v/o),f.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<o;E++){let v=E+c*p,A=E+c*(p+1),D=E+1+c*(p+1),b=E+1+c*p;m.push(v,A,b),m.push(A,D,b)}this.setIndex(m),this.setAttribute("position",new wt(g,3)),this.setAttribute("normal",new wt(_,3)),this.setAttribute("uv",new wt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},ju=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ed=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,td=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nd=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,id=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,rd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,od=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ad=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,ld=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ud=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,dd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,fd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,pd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,md=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_d=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,yd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Md=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,bd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ed=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Sd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Td=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ad=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cd=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Pd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ld=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Id=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Dd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Nd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ud=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Od=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,kd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Hd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Xd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Yd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$d=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Kd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,jd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Qd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ef=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,rf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,of=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,af=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,cf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,df=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ff=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,pf=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,mf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,gf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,_f=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,vf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Mf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,bf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ef=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Af=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Rf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,If=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Df=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Nf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Uf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Of=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ff=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Bf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,kf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Vf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,qf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Zf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Jf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$f=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Kf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,jf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ep=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,np=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ip=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,rp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,op=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ap=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,lp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,up=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,fp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,_p=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,xp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,yp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ep=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ap=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Rp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Pp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Lp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:ju,alphahash_pars_fragment:Qu,alphamap_fragment:ed,alphamap_pars_fragment:td,alphatest_fragment:nd,alphatest_pars_fragment:id,aomap_fragment:sd,aomap_pars_fragment:rd,batching_pars_vertex:od,batching_vertex:ad,begin_vertex:ld,beginnormal_vertex:cd,bsdfs:hd,iridescence_fragment:ud,bumpmap_pars_fragment:dd,clipping_planes_fragment:fd,clipping_planes_pars_fragment:pd,clipping_planes_pars_vertex:md,clipping_planes_vertex:gd,color_fragment:_d,color_pars_fragment:vd,color_pars_vertex:xd,color_vertex:yd,common:Md,cube_uv_reflection_fragment:bd,defaultnormal_vertex:Ed,displacementmap_pars_vertex:Sd,displacementmap_vertex:Td,emissivemap_fragment:wd,emissivemap_pars_fragment:Ad,colorspace_fragment:Rd,colorspace_pars_fragment:Cd,envmap_fragment:Pd,envmap_common_pars_fragment:Ld,envmap_pars_fragment:Id,envmap_pars_vertex:Dd,envmap_physical_pars_fragment:Xd,envmap_vertex:Nd,fog_vertex:Ud,fog_pars_vertex:Od,fog_fragment:Fd,fog_pars_fragment:Bd,gradientmap_pars_fragment:zd,lightmap_fragment:kd,lightmap_pars_fragment:Hd,lights_lambert_fragment:Vd,lights_lambert_pars_fragment:Gd,lights_pars_begin:Wd,lights_toon_fragment:Yd,lights_toon_pars_fragment:qd,lights_phong_fragment:Zd,lights_phong_pars_fragment:Jd,lights_physical_fragment:$d,lights_physical_pars_fragment:Kd,lights_fragment_begin:jd,lights_fragment_maps:Qd,lights_fragment_end:ef,logdepthbuf_fragment:tf,logdepthbuf_pars_fragment:nf,logdepthbuf_pars_vertex:sf,logdepthbuf_vertex:rf,map_fragment:of,map_pars_fragment:af,map_particle_fragment:lf,map_particle_pars_fragment:cf,metalnessmap_fragment:hf,metalnessmap_pars_fragment:uf,morphcolor_vertex:df,morphnormal_vertex:ff,morphtarget_pars_vertex:pf,morphtarget_vertex:mf,normal_fragment_begin:gf,normal_fragment_maps:_f,normal_pars_fragment:vf,normal_pars_vertex:xf,normal_vertex:yf,normalmap_pars_fragment:Mf,clearcoat_normal_fragment_begin:bf,clearcoat_normal_fragment_maps:Ef,clearcoat_pars_fragment:Sf,iridescence_pars_fragment:Tf,opaque_fragment:wf,packing:Af,premultiplied_alpha_fragment:Rf,project_vertex:Cf,dithering_fragment:Pf,dithering_pars_fragment:Lf,roughnessmap_fragment:If,roughnessmap_pars_fragment:Df,shadowmap_pars_fragment:Nf,shadowmap_pars_vertex:Uf,shadowmap_vertex:Of,shadowmask_pars_fragment:Ff,skinbase_vertex:Bf,skinning_pars_vertex:zf,skinning_vertex:kf,skinnormal_vertex:Hf,specularmap_fragment:Vf,specularmap_pars_fragment:Gf,tonemapping_fragment:Wf,tonemapping_pars_fragment:Xf,transmission_fragment:Yf,transmission_pars_fragment:qf,uv_pars_fragment:Zf,uv_pars_vertex:Jf,uv_vertex:$f,worldpos_vertex:Kf,background_vert:jf,background_frag:Qf,backgroundCube_vert:ep,backgroundCube_frag:tp,cube_vert:np,cube_frag:ip,depth_vert:sp,depth_frag:rp,distanceRGBA_vert:op,distanceRGBA_frag:ap,equirect_vert:lp,equirect_frag:cp,linedashed_vert:hp,linedashed_frag:up,meshbasic_vert:dp,meshbasic_frag:fp,meshlambert_vert:pp,meshlambert_frag:mp,meshmatcap_vert:gp,meshmatcap_frag:_p,meshnormal_vert:vp,meshnormal_frag:xp,meshphong_vert:yp,meshphong_frag:Mp,meshphysical_vert:bp,meshphysical_frag:Ep,meshtoon_vert:Sp,meshtoon_frag:Tp,points_vert:wp,points_frag:Ap,shadow_vert:Rp,shadow_frag:Cp,sprite_vert:Pp,sprite_frag:Lp},ue={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},sn={basic:{uniforms:Rt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Rt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Be(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Rt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Rt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Rt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Be(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Rt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Rt([ue.points,ue.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Rt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Rt([ue.common,ue.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Rt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Rt([ue.sprite,ue.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:Rt([ue.common,ue.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:Rt([ue.lights,ue.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};sn.physical={uniforms:Rt([sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};var Xs={r:0,b:0,g:0};function Ip(s,e,t,n,i,r,a){let o=new Be(0),l=r===!0?0:1,c,h,d=null,u=0,m=null;function g(f,p){let E=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=(p.backgroundBlurriness>0?t:e).get(v)),v===null?_(o,l):v&&v.isColor&&(_(v,1),E=!0);let A=s.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||E)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Lr)?(h===void 0&&(h=new Ut(new ls(1,1,1),new Mn({name:"BackgroundCubeMaterial",uniforms:zi(sn.backgroundCube.uniforms),vertexShader:sn.backgroundCube.vertexShader,fragmentShader:sn.backgroundCube.fragmentShader,side:Tt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,b,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=je.getTransfer(v.colorSpace)!==Qe,(d!==v||u!==v.version||m!==s.toneMapping)&&(h.material.needsUpdate=!0,d=v,u=v.version,m=s.toneMapping),h.layers.enableAll(),f.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Ut(new Ho(2,2),new Mn({name:"BackgroundMaterial",uniforms:zi(sn.background.uniforms),vertexShader:sn.background.vertexShader,fragmentShader:sn.background.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=je.getTransfer(v.colorSpace)!==Qe,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||u!==v.version||m!==s.toneMapping)&&(c.material.needsUpdate=!0,d=v,u=v.version,m=s.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null))}function _(f,p){f.getRGB(Xs,Nc(s)),n.buffers.color.setClear(Xs.r,Xs.g,Xs.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(f,p=1){o.set(f),l=p,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(f){l=f,_(o,l)},render:g}}function Dp(s,e,t,n){let i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=f(null),c=l,h=!1;function d(R,U,O,q,Y){let W=!1;if(a){let K=_(q,O,U);c!==K&&(c=K,m(c.object)),W=p(R,q,O,Y),W&&E(R,q,O,Y)}else{let K=U.wireframe===!0;(c.geometry!==q.id||c.program!==O.id||c.wireframe!==K)&&(c.geometry=q.id,c.program=O.id,c.wireframe=K,W=!0)}Y!==null&&t.update(Y,s.ELEMENT_ARRAY_BUFFER),(W||h)&&(h=!1,z(R,U,O,q),Y!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function u(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function m(R){return n.isWebGL2?s.bindVertexArray(R):r.bindVertexArrayOES(R)}function g(R){return n.isWebGL2?s.deleteVertexArray(R):r.deleteVertexArrayOES(R)}function _(R,U,O){let q=O.wireframe===!0,Y=o[R.id];Y===void 0&&(Y={},o[R.id]=Y);let W=Y[U.id];W===void 0&&(W={},Y[U.id]=W);let K=W[q];return K===void 0&&(K=f(u()),W[q]=K),K}function f(R){let U=[],O=[],q=[];for(let Y=0;Y<i;Y++)U[Y]=0,O[Y]=0,q[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:O,attributeDivisors:q,object:R,attributes:{},index:null}}function p(R,U,O,q){let Y=c.attributes,W=U.attributes,K=0,Z=O.getAttributes();for(let ce in Z)if(Z[ce].location>=0){let Q=Y[ce],pe=W[ce];if(pe===void 0&&(ce==="instanceMatrix"&&R.instanceMatrix&&(pe=R.instanceMatrix),ce==="instanceColor"&&R.instanceColor&&(pe=R.instanceColor)),Q===void 0||Q.attribute!==pe||pe&&Q.data!==pe.data)return!0;K++}return c.attributesNum!==K||c.index!==q}function E(R,U,O,q){let Y={},W=U.attributes,K=0,Z=O.getAttributes();for(let ce in Z)if(Z[ce].location>=0){let Q=W[ce];Q===void 0&&(ce==="instanceMatrix"&&R.instanceMatrix&&(Q=R.instanceMatrix),ce==="instanceColor"&&R.instanceColor&&(Q=R.instanceColor));let pe={};pe.attribute=Q,Q&&Q.data&&(pe.data=Q.data),Y[ce]=pe,K++}c.attributes=Y,c.attributesNum=K,c.index=q}function v(){let R=c.newAttributes;for(let U=0,O=R.length;U<O;U++)R[U]=0}function A(R){D(R,0)}function D(R,U){let O=c.newAttributes,q=c.enabledAttributes,Y=c.attributeDivisors;O[R]=1,q[R]===0&&(s.enableVertexAttribArray(R),q[R]=1),Y[R]!==U&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,U),Y[R]=U)}function b(){let R=c.newAttributes,U=c.enabledAttributes;for(let O=0,q=U.length;O<q;O++)U[O]!==R[O]&&(s.disableVertexAttribArray(O),U[O]=0)}function w(R,U,O,q,Y,W,K){K===!0?s.vertexAttribIPointer(R,U,O,Y,W):s.vertexAttribPointer(R,U,O,q,Y,W)}function z(R,U,O,q){if(n.isWebGL2===!1&&(R.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();let Y=q.attributes,W=O.getAttributes(),K=U.defaultAttributeValues;for(let Z in W){let ce=W[Z];if(ce.location>=0){let V=Y[Z];if(V===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&(V=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&(V=R.instanceColor)),V!==void 0){let Q=V.normalized,pe=V.itemSize,be=t.get(V);if(be===void 0)continue;let ge=be.buffer,Le=be.type,Ue=be.bytesPerElement,Se=n.isWebGL2===!0&&(Le===s.INT||Le===s.UNSIGNED_INT||V.gpuType===Ec);if(V.isInterleavedBufferAttribute){let Ne=V.data,P=Ne.stride,he=V.offset;if(Ne.isInstancedInterleavedBuffer){for(let $=0;$<ce.locationSize;$++)D(ce.location+$,Ne.meshPerAttribute);R.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Ne.meshPerAttribute*Ne.count)}else for(let $=0;$<ce.locationSize;$++)A(ce.location+$);s.bindBuffer(s.ARRAY_BUFFER,ge);for(let $=0;$<ce.locationSize;$++)w(ce.location+$,pe/ce.locationSize,Le,Q,P*Ue,(he+pe/ce.locationSize*$)*Ue,Se)}else{if(V.isInstancedBufferAttribute){for(let Ne=0;Ne<ce.locationSize;Ne++)D(ce.location+Ne,V.meshPerAttribute);R.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let Ne=0;Ne<ce.locationSize;Ne++)A(ce.location+Ne);s.bindBuffer(s.ARRAY_BUFFER,ge);for(let Ne=0;Ne<ce.locationSize;Ne++)w(ce.location+Ne,pe/ce.locationSize,Le,Q,pe*Ue,pe/ce.locationSize*Ne*Ue,Se)}}else if(K!==void 0){let Q=K[Z];if(Q!==void 0)switch(Q.length){case 2:s.vertexAttrib2fv(ce.location,Q);break;case 3:s.vertexAttrib3fv(ce.location,Q);break;case 4:s.vertexAttrib4fv(ce.location,Q);break;default:s.vertexAttrib1fv(ce.location,Q)}}}}b()}function M(){X();for(let R in o){let U=o[R];for(let O in U){let q=U[O];for(let Y in q)g(q[Y].object),delete q[Y];delete U[O]}delete o[R]}}function y(R){if(o[R.id]===void 0)return;let U=o[R.id];for(let O in U){let q=U[O];for(let Y in q)g(q[Y].object),delete q[Y];delete U[O]}delete o[R.id]}function N(R){for(let U in o){let O=o[U];if(O[R.id]===void 0)continue;let q=O[R.id];for(let Y in q)g(q[Y].object),delete q[Y];delete O[R.id]}}function X(){j(),h=!0,c!==l&&(c=l,m(c.object))}function j(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:X,resetDefaultState:j,dispose:M,releaseStatesOfGeometry:y,releaseStatesOfProgram:N,initAttributes:v,enableAttribute:A,disableUnusedAttributes:b}}function Np(s,e,t,n){let i=n.isWebGL2,r;function a(h){r=h}function o(h,d){s.drawArrays(r,h,d),t.update(d,r,1)}function l(h,d,u){if(u===0)return;let m,g;if(i)m=s,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,h,d,u),t.update(d,r,u)}function c(h,d,u){if(u===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<u;g++)this.render(h[g],d[g]);else{m.multiDrawArraysWEBGL(r,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=d[_];t.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function Up(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),u=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),f=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),E=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),v=u>0,A=a||e.has("OES_texture_float"),D=v&&A,b=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:f,maxVaryings:p,maxFragmentUniforms:E,vertexTextures:v,floatFragmentTextures:A,floatVertexTextures:D,maxSamples:b}}function Op(s){let e=this,t=null,n=0,i=!1,r=!1,a=new Lt,o=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let m=d.length!==0||u||n!==0||i;return i=u,n=d.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,m){let g=d.clippingPlanes,_=d.clipIntersection,f=d.clipShadows,p=s.get(d);if(!i||g===null||g.length===0||r&&!f)r?h(null):c();else{let E=r?0:n,v=E*4,A=p.clippingState||null;l.value=A,A=h(g,u,v,m);for(let D=0;D!==v;++D)A[D]=t[D];p.clippingState=A,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,m,g){let _=d!==null?d.length:0,f=null;if(_!==0){if(f=l.value,g!==!0||f===null){let p=m+_*4,E=u.matrixWorldInverse;o.getNormalMatrix(E),(f===null||f.length<p)&&(f=new Float32Array(p));for(let v=0,A=m;v!==_;++v,A+=4)a.copy(d[v]).applyMatrix4(E,o),a.normal.toArray(f,A),f[A+3]=a.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,f}}function Fp(s){let e=new WeakMap;function t(a,o){return o===Po?a.mapping=Ui:o===Lo&&(a.mapping=Oi),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Po||o===Lo)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new ko(l.height/2);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Vo=class extends gr{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Pi=4,Hl=[.125,.215,.35,.446,.526,.582],$n=20,vo=new Vo,Vl=new Be,xo=null,yo=0,Mo=0,Zn=(1+Math.sqrt(5))/2,Ti=1/Zn,Gl=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,Zn,Ti),new L(0,Zn,-Ti),new L(Ti,0,Zn),new L(-Ti,0,Zn),new L(Zn,Ti,0),new L(-Zn,Ti,0)],vr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){xo=this._renderer.getRenderTarget(),yo=this._renderer.getActiveCubeFace(),Mo=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(xo,yo,Mo),e.scissorTest=!1,Ys(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ui||e.mapping===Oi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xo=this._renderer.getRenderTarget(),yo=this._renderer.getActiveCubeFace(),Mo=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:kt,minFilter:kt,generateMipmaps:!1,type:rs,format:Jt,colorSpace:xn,depthBuffer:!1},i=Wl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wl(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Bp(r)),this._blurMaterial=zp(r,e,t)}return i}_compileMaterial(e){let t=new Ut(this._lodPlanes[0],e);this._renderer.compile(t,vo)}_sceneToCubeUV(e,t,n,i){let o=new Pt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Vl),h.toneMapping=Un,h.autoClear=!1;let m=new ii({name:"PMREM.Background",side:Tt,depthWrite:!1,depthTest:!1}),g=new Ut(new ls,m),_=!1,f=e.background;f?f.isColor&&(m.color.copy(f),e.background=null,_=!0):(m.color.copy(Vl),_=!0);for(let p=0;p<6;p++){let E=p%3;E===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):E===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let v=this._cubeSize;Ys(i,E*v,p>2?v:0,v,v),h.setRenderTarget(i),_&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=f}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Ui||e.mapping===Oi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xl());let r=i?this._cubemapMaterial:this._equirectMaterial,a=new Ut(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Ys(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,vo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Gl[(i-1)%Gl.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new Ut(this._lodPlanes[i],c),u=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*$n-1),_=r/g,f=isFinite(r)?1+Math.floor(h*_):$n;f>$n&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${$n}`);let p=[],E=0;for(let w=0;w<$n;++w){let z=w/_,M=Math.exp(-z*z/2);p.push(M),w===0?E+=M:w<f&&(E+=2*M)}for(let w=0;w<p.length;w++)p[w]=p[w]/E;u.envMap.value=e.texture,u.samples.value=f,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:v}=this;u.dTheta.value=g,u.mipInt.value=v-n;let A=this._sizeLods[i],D=3*A*(i>v-Pi?i-v+Pi:0),b=4*(this._cubeSize-A);Ys(t,D,b,3*A,2*A),l.setRenderTarget(t),l.render(d,vo)}};function Bp(s){let e=[],t=[],n=[],i=s,r=s-Pi+1+Hl.length;for(let a=0;a<r;a++){let o=Math.pow(2,i);t.push(o);let l=1/o;a>s-Pi?l=Hl[a-s+Pi-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,g=6,_=3,f=2,p=1,E=new Float32Array(_*g*m),v=new Float32Array(f*g*m),A=new Float32Array(p*g*m);for(let b=0;b<m;b++){let w=b%3*2/3-1,z=b>2?0:-1,M=[w,z,0,w+2/3,z,0,w+2/3,z+1,0,w,z,0,w+2/3,z+1,0,w,z+1,0];E.set(M,_*g*b),v.set(u,f*g*b);let y=[b,b,b,b,b,b];A.set(y,p*g*b)}let D=new xt;D.setAttribute("position",new vt(E,_)),D.setAttribute("uv",new vt(v,f)),D.setAttribute("faceIndex",new vt(A,p)),e.push(D),i>Pi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Wl(s,e,t){let n=new yn(s,e,t);return n.texture.mapping=Lr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ys(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function zp(s,e,t){let n=new Float32Array($n),i=new L(0,1,0);return new Mn({name:"SphericalGaussianBlur",defines:{n:$n,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ta(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Xl(){return new Mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ta(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Yl(){return new Mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ta(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Ta(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function kp(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Po||l===Lo,h=l===Ui||l===Oi;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return t===null&&(t=new vr(s)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{let d=o.image;if(c&&d&&d.height>0||h&&d&&i(d)){t===null&&(t=new vr(s));let u=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,u),o.addEventListener("dispose",r),u.texture}else return null}}}return o}function i(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Hp(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Vp(s,e,t,n){let i={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);for(let g in u.morphAttributes){let _=u.morphAttributes[g];for(let f=0,p=_.length;f<p;f++)e.remove(_[f])}u.removeEventListener("dispose",a),delete i[u.id];let m=r.get(u);m&&(e.remove(m),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,t.memory.geometries++),u}function l(d){let u=d.attributes;for(let g in u)e.update(u[g],s.ARRAY_BUFFER);let m=d.morphAttributes;for(let g in m){let _=m[g];for(let f=0,p=_.length;f<p;f++)e.update(_[f],s.ARRAY_BUFFER)}}function c(d){let u=[],m=d.index,g=d.attributes.position,_=0;if(m!==null){let E=m.array;_=m.version;for(let v=0,A=E.length;v<A;v+=3){let D=E[v+0],b=E[v+1],w=E[v+2];u.push(D,b,b,w,w,D)}}else if(g!==void 0){let E=g.array;_=g.version;for(let v=0,A=E.length/3-1;v<A;v+=3){let D=v+0,b=v+1,w=v+2;u.push(D,b,b,w,w,D)}}else return;let f=new(Ic(u)?mr:pr)(u,1);f.version=_;let p=r.get(d);p&&e.remove(p),r.set(d,f)}function h(d){let u=r.get(d);if(u){let m=d.index;m!==null&&u.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Gp(s,e,t,n){let i=n.isWebGL2,r;function a(m){r=m}let o,l;function c(m){o=m.type,l=m.bytesPerElement}function h(m,g){s.drawElements(r,g,o,m*l),t.update(g,r,1)}function d(m,g,_){if(_===0)return;let f,p;if(i)f=s,p="drawElementsInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](r,g,o,m*l,_),t.update(g,r,_)}function u(m,g,_){if(_===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<_;p++)this.render(m[p]/l,g[p]);else{f.multiDrawElementsWEBGL(r,g,0,o,m,0,_);let p=0;for(let E=0;E<_;E++)p+=g[E];t.update(p,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=d,this.renderMultiDraw=u}function Wp(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Xp(s,e){return s[0]-e[0]}function Yp(s,e){return Math.abs(e[1])-Math.abs(s[1])}function qp(s,e,t){let n={},i=new Float32Array(8),r=new WeakMap,a=new Mt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,d){let u=c.morphTargetInfluences;if(e.isWebGL2===!0){let m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=m!==void 0?m.length:0,_=r.get(h);if(_===void 0||_.count!==g){let R=function(){X.dispose(),r.delete(h),h.removeEventListener("dispose",R)};_!==void 0&&_.texture.dispose();let E=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,A=h.morphAttributes.color!==void 0,D=h.morphAttributes.position||[],b=h.morphAttributes.normal||[],w=h.morphAttributes.color||[],z=0;E===!0&&(z=1),v===!0&&(z=2),A===!0&&(z=3);let M=h.attributes.position.count*z,y=1;M>e.maxTextureSize&&(y=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let N=new Float32Array(M*y*4*g),X=new dr(N,M,y,g);X.type=Dn,X.needsUpdate=!0;let j=z*4;for(let U=0;U<g;U++){let O=D[U],q=b[U],Y=w[U],W=M*y*4*U;for(let K=0;K<O.count;K++){let Z=K*j;E===!0&&(a.fromBufferAttribute(O,K),N[W+Z+0]=a.x,N[W+Z+1]=a.y,N[W+Z+2]=a.z,N[W+Z+3]=0),v===!0&&(a.fromBufferAttribute(q,K),N[W+Z+4]=a.x,N[W+Z+5]=a.y,N[W+Z+6]=a.z,N[W+Z+7]=0),A===!0&&(a.fromBufferAttribute(Y,K),N[W+Z+8]=a.x,N[W+Z+9]=a.y,N[W+Z+10]=a.z,N[W+Z+11]=Y.itemSize===4?a.w:1)}}_={count:g,texture:X,size:new re(M,y)},r.set(h,_),h.addEventListener("dispose",R)}let f=0;for(let E=0;E<u.length;E++)f+=u[E];let p=h.morphTargetsRelative?1:1-f;d.getUniforms().setValue(s,"morphTargetBaseInfluence",p),d.getUniforms().setValue(s,"morphTargetInfluences",u),d.getUniforms().setValue(s,"morphTargetsTexture",_.texture,t),d.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}else{let m=u===void 0?0:u.length,g=n[h.id];if(g===void 0||g.length!==m){g=[];for(let v=0;v<m;v++)g[v]=[v,0];n[h.id]=g}for(let v=0;v<m;v++){let A=g[v];A[0]=v,A[1]=u[v]}g.sort(Yp);for(let v=0;v<8;v++)v<m&&g[v][1]?(o[v][0]=g[v][0],o[v][1]=g[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(Xp);let _=h.morphAttributes.position,f=h.morphAttributes.normal,p=0;for(let v=0;v<8;v++){let A=o[v],D=A[0],b=A[1];D!==Number.MAX_SAFE_INTEGER&&b?(_&&h.getAttribute("morphTarget"+v)!==_[D]&&h.setAttribute("morphTarget"+v,_[D]),f&&h.getAttribute("morphNormal"+v)!==f[D]&&h.setAttribute("morphNormal"+v,f[D]),i[v]=b,p+=b):(_&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),f&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),i[v]=0)}let E=h.morphTargetsRelative?1:1-p;d.getUniforms().setValue(s,"morphTargetBaseInfluence",E),d.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function Zp(s,e,t,n){let i=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,d=e.get(l,h);if(i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return d}function a(){i=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var xr=class extends Vt{constructor(e,t,n,i,r,a,o,l,c,h){if(h=h!==void 0?h:Qn,h!==Qn&&h!==Fi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Qn&&(n=In),n===void 0&&h===Fi&&(n=jn),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ct,this.minFilter=l!==void 0?l:Ct,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Oc=new Vt,Fc=new xr(1,1);Fc.compareFunction=Lc;var Bc=new dr,zc=new Bo,kc=new _r,ql=[],Zl=[],Jl=new Float32Array(16),$l=new Float32Array(9),Kl=new Float32Array(4);function Gi(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=ql[i];if(r===void 0&&(r=new Float32Array(i),ql[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function dt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function ft(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Dr(s,e){let t=Zl[e];t===void 0&&(t=new Int32Array(e),Zl[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Jp(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function $p(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;s.uniform2fv(this.addr,e),ft(t,e)}}function Kp(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dt(t,e))return;s.uniform3fv(this.addr,e),ft(t,e)}}function jp(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;s.uniform4fv(this.addr,e),ft(t,e)}}function Qp(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),ft(t,e)}else{if(dt(t,n))return;Kl.set(n),s.uniformMatrix2fv(this.addr,!1,Kl),ft(t,n)}}function em(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),ft(t,e)}else{if(dt(t,n))return;$l.set(n),s.uniformMatrix3fv(this.addr,!1,$l),ft(t,n)}}function tm(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),ft(t,e)}else{if(dt(t,n))return;Jl.set(n),s.uniformMatrix4fv(this.addr,!1,Jl),ft(t,n)}}function nm(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function im(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;s.uniform2iv(this.addr,e),ft(t,e)}}function sm(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;s.uniform3iv(this.addr,e),ft(t,e)}}function rm(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;s.uniform4iv(this.addr,e),ft(t,e)}}function om(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function am(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;s.uniform2uiv(this.addr,e),ft(t,e)}}function lm(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;s.uniform3uiv(this.addr,e),ft(t,e)}}function cm(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;s.uniform4uiv(this.addr,e),ft(t,e)}}function hm(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r=this.type===s.SAMPLER_2D_SHADOW?Fc:Oc;t.setTexture2D(e||r,i)}function um(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||zc,i)}function dm(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||kc,i)}function fm(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Bc,i)}function pm(s){switch(s){case 5126:return Jp;case 35664:return $p;case 35665:return Kp;case 35666:return jp;case 35674:return Qp;case 35675:return em;case 35676:return tm;case 5124:case 35670:return nm;case 35667:case 35671:return im;case 35668:case 35672:return sm;case 35669:case 35673:return rm;case 5125:return om;case 36294:return am;case 36295:return lm;case 36296:return cm;case 35678:case 36198:case 36298:case 36306:case 35682:return hm;case 35679:case 36299:case 36307:return um;case 35680:case 36300:case 36308:case 36293:return dm;case 36289:case 36303:case 36311:case 36292:return fm}}function mm(s,e){s.uniform1fv(this.addr,e)}function gm(s,e){let t=Gi(e,this.size,2);s.uniform2fv(this.addr,t)}function _m(s,e){let t=Gi(e,this.size,3);s.uniform3fv(this.addr,t)}function vm(s,e){let t=Gi(e,this.size,4);s.uniform4fv(this.addr,t)}function xm(s,e){let t=Gi(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function ym(s,e){let t=Gi(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Mm(s,e){let t=Gi(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function bm(s,e){s.uniform1iv(this.addr,e)}function Em(s,e){s.uniform2iv(this.addr,e)}function Sm(s,e){s.uniform3iv(this.addr,e)}function Tm(s,e){s.uniform4iv(this.addr,e)}function wm(s,e){s.uniform1uiv(this.addr,e)}function Am(s,e){s.uniform2uiv(this.addr,e)}function Rm(s,e){s.uniform3uiv(this.addr,e)}function Cm(s,e){s.uniform4uiv(this.addr,e)}function Pm(s,e,t){let n=this.cache,i=e.length,r=Dr(t,i);dt(n,r)||(s.uniform1iv(this.addr,r),ft(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Oc,r[a])}function Lm(s,e,t){let n=this.cache,i=e.length,r=Dr(t,i);dt(n,r)||(s.uniform1iv(this.addr,r),ft(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||zc,r[a])}function Im(s,e,t){let n=this.cache,i=e.length,r=Dr(t,i);dt(n,r)||(s.uniform1iv(this.addr,r),ft(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||kc,r[a])}function Dm(s,e,t){let n=this.cache,i=e.length,r=Dr(t,i);dt(n,r)||(s.uniform1iv(this.addr,r),ft(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Bc,r[a])}function Nm(s){switch(s){case 5126:return mm;case 35664:return gm;case 35665:return _m;case 35666:return vm;case 35674:return xm;case 35675:return ym;case 35676:return Mm;case 5124:case 35670:return bm;case 35667:case 35671:return Em;case 35668:case 35672:return Sm;case 35669:case 35673:return Tm;case 5125:return wm;case 36294:return Am;case 36295:return Rm;case 36296:return Cm;case 35678:case 36198:case 36298:case 36306:case 35682:return Pm;case 35679:case 36299:case 36307:return Lm;case 35680:case 36300:case 36308:case 36293:return Im;case 36289:case 36303:case 36311:case 36292:return Dm}}var Go=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=pm(t.type)}},Wo=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Nm(t.type)}},Xo=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(e,t[o.id],n)}}},bo=/(\w+)(\])?(\[|\.)?/g;function jl(s,e){s.seq.push(e),s.map[e.id]=e}function Um(s,e,t){let n=s.name,i=n.length;for(bo.lastIndex=0;;){let r=bo.exec(n),a=bo.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){jl(t,c===void 0?new Go(o,s,e):new Wo(o,s,e));break}else{let d=t.map[o];d===void 0&&(d=new Xo(o),jl(t,d)),t=d}}}var Ni=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);Um(r,a,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function Ql(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var Om=37297,Fm=0;function Bm(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function zm(s){let e=je.getPrimaries(je.workingColorSpace),t=je.getPrimaries(s),n;switch(e===t?n="":e===or&&t===rr?n="LinearDisplayP3ToLinearSRGB":e===rr&&t===or&&(n="LinearSRGBToLinearDisplayP3"),s){case xn:case Ir:return[n,"LinearTransferOETF"];case yt:case Ea:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function ec(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Bm(s.getShaderSource(e),a)}else return i}function km(s,e){let t=zm(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Hm(s,e){let t;switch(e){case Wh:t="Linear";break;case Xh:t="Reinhard";break;case Yh:t="OptimizedCineon";break;case qh:t="ACESFilmic";break;case Jh:t="AgX";break;case Zh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Vm(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Li).join(`
`)}function Gm(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Li).join(`
`)}function Wm(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Xm(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Li(s){return s!==""}function tc(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function nc(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Ym=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yo(s){return s.replace(Ym,Zm)}var qm=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Zm(s,e){let t=Ve[e];if(t===void 0){let n=qm.get(e);if(n!==void 0)t=Ve[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Yo(t)}var Jm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ic(s){return s.replace(Jm,$m)}function $m(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function sc(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Km(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===yc?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===vh?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===_n&&(e="SHADOWMAP_TYPE_VSM"),e}function jm(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ui:case Oi:e="ENVMAP_TYPE_CUBE";break;case Lr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Qm(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Oi:e="ENVMAP_MODE_REFRACTION";break}return e}function eg(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Mc:e="ENVMAP_BLENDING_MULTIPLY";break;case Vh:e="ENVMAP_BLENDING_MIX";break;case Gh:e="ENVMAP_BLENDING_ADD";break}return e}function tg(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function ng(s,e,t,n){let i=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Km(t),c=jm(t),h=Qm(t),d=eg(t),u=tg(t),m=t.isWebGL2?"":Vm(t),g=Gm(t),_=Wm(r),f=i.createProgram(),p,E,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Li).join(`
`),p.length>0&&(p+=`
`),E=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Li).join(`
`),E.length>0&&(E+=`
`)):(p=[sc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Li).join(`
`),E=[m,sc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Un?"#define TONE_MAPPING":"",t.toneMapping!==Un?Ve.tonemapping_pars_fragment:"",t.toneMapping!==Un?Hm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,km("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Li).join(`
`)),a=Yo(a),a=tc(a,t),a=nc(a,t),o=Yo(o),o=tc(o,t),o=nc(o,t),a=ic(a),o=ic(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,E=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===El?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===El?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E);let A=v+p+a,D=v+E+o,b=Ql(i,i.VERTEX_SHADER,A),w=Ql(i,i.FRAGMENT_SHADER,D);i.attachShader(f,b),i.attachShader(f,w),t.index0AttributeName!==void 0?i.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(f,0,"position"),i.linkProgram(f);function z(X){if(s.debug.checkShaderErrors){let j=i.getProgramInfoLog(f).trim(),R=i.getShaderInfoLog(b).trim(),U=i.getShaderInfoLog(w).trim(),O=!0,q=!0;if(i.getProgramParameter(f,i.LINK_STATUS)===!1)if(O=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,f,b,w);else{let Y=ec(i,b,"vertex"),W=ec(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(f,i.VALIDATE_STATUS)+`

Program Info Log: `+j+`
`+Y+`
`+W)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(R===""||U==="")&&(q=!1);q&&(X.diagnostics={runnable:O,programLog:j,vertexShader:{log:R,prefix:p},fragmentShader:{log:U,prefix:E}})}i.deleteShader(b),i.deleteShader(w),M=new Ni(i,f),y=Xm(i,f)}let M;this.getUniforms=function(){return M===void 0&&z(this),M};let y;this.getAttributes=function(){return y===void 0&&z(this),y};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=i.getProgramParameter(f,Om)),N},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(f),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Fm++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=b,this.fragmentShader=w,this}var ig=0,qo=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Zo(e),t.set(e,n)),n}},Zo=class{constructor(e){this.id=ig++,this.code=e,this.usedTimes=0}};function sg(s,e,t,n,i,r,a){let o=new as,l=new qo,c=[],h=i.isWebGL2,d=i.logarithmicDepthBuffer,u=i.vertexTextures,m=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function f(M,y,N,X,j){let R=X.fog,U=j.geometry,O=M.isMeshStandardMaterial?X.environment:null,q=(M.isMeshStandardMaterial?t:e).get(M.envMap||O),Y=q&&q.mapping===Lr?q.image.height:null,W=g[M.type];M.precision!==null&&(m=i.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));let K=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,Z=K!==void 0?K.length:0,ce=0;U.morphAttributes.position!==void 0&&(ce=1),U.morphAttributes.normal!==void 0&&(ce=2),U.morphAttributes.color!==void 0&&(ce=3);let V,Q,pe,be;if(W){let ot=sn[W];V=ot.vertexShader,Q=ot.fragmentShader}else V=M.vertexShader,Q=M.fragmentShader,l.update(M),pe=l.getVertexShaderID(M),be=l.getFragmentShaderID(M);let ge=s.getRenderTarget(),Le=j.isInstancedMesh===!0,Ue=j.isBatchedMesh===!0,Se=!!M.map,Ne=!!M.matcap,P=!!q,he=!!M.aoMap,$=!!M.lightMap,oe=!!M.bumpMap,J=!!M.normalMap,Te=!!M.displacementMap,_e=!!M.emissiveMap,S=!!M.metalnessMap,x=!!M.roughnessMap,F=M.anisotropy>0,ie=M.clearcoat>0,te=M.iridescence>0,ee=M.sheen>0,Ee=M.transmission>0,fe=F&&!!M.anisotropyMap,xe=ie&&!!M.clearcoatMap,Ce=ie&&!!M.clearcoatNormalMap,ze=ie&&!!M.clearcoatRoughnessMap,ne=te&&!!M.iridescenceMap,Je=te&&!!M.iridescenceThicknessMap,Ge=ee&&!!M.sheenColorMap,Oe=ee&&!!M.sheenRoughnessMap,Re=!!M.specularMap,ve=!!M.specularColorMap,C=!!M.specularIntensityMap,ae=Ee&&!!M.transmissionMap,we=Ee&&!!M.thicknessMap,Me=!!M.gradientMap,se=!!M.alphaMap,I=M.alphaTest>0,le=!!M.alphaHash,me=!!M.extensions,Ie=!!U.attributes.uv1,Pe=!!U.attributes.uv2,qe=!!U.attributes.uv3,Ze=Un;return M.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(Ze=s.toneMapping),{isWebGL2:h,shaderID:W,shaderType:M.type,shaderName:M.name,vertexShader:V,fragmentShader:Q,defines:M.defines,customVertexShaderID:pe,customFragmentShaderID:be,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:Ue,instancing:Le,instancingColor:Le&&j.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:ge===null?s.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:xn,map:Se,matcap:Ne,envMap:P,envMapMode:P&&q.mapping,envMapCubeUVHeight:Y,aoMap:he,lightMap:$,bumpMap:oe,normalMap:J,displacementMap:u&&Te,emissiveMap:_e,normalMapObjectSpace:J&&M.normalMapType===lu,normalMapTangentSpace:J&&M.normalMapType===au,metalnessMap:S,roughnessMap:x,anisotropy:F,anisotropyMap:fe,clearcoat:ie,clearcoatMap:xe,clearcoatNormalMap:Ce,clearcoatRoughnessMap:ze,iridescence:te,iridescenceMap:ne,iridescenceThicknessMap:Je,sheen:ee,sheenColorMap:Ge,sheenRoughnessMap:Oe,specularMap:Re,specularColorMap:ve,specularIntensityMap:C,transmission:Ee,transmissionMap:ae,thicknessMap:we,gradientMap:Me,opaque:M.transparent===!1&&M.blending===Ot,alphaMap:se,alphaTest:I,alphaHash:le,combine:M.combine,mapUv:Se&&_(M.map.channel),aoMapUv:he&&_(M.aoMap.channel),lightMapUv:$&&_(M.lightMap.channel),bumpMapUv:oe&&_(M.bumpMap.channel),normalMapUv:J&&_(M.normalMap.channel),displacementMapUv:Te&&_(M.displacementMap.channel),emissiveMapUv:_e&&_(M.emissiveMap.channel),metalnessMapUv:S&&_(M.metalnessMap.channel),roughnessMapUv:x&&_(M.roughnessMap.channel),anisotropyMapUv:fe&&_(M.anisotropyMap.channel),clearcoatMapUv:xe&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ze&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Je&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ge&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&_(M.sheenRoughnessMap.channel),specularMapUv:Re&&_(M.specularMap.channel),specularColorMapUv:ve&&_(M.specularColorMap.channel),specularIntensityMapUv:C&&_(M.specularIntensityMap.channel),transmissionMapUv:ae&&_(M.transmissionMap.channel),thicknessMapUv:we&&_(M.thicknessMap.channel),alphaMapUv:se&&_(M.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(J||F),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUv1s:Ie,vertexUv2s:Pe,vertexUv3s:qe,pointsUvs:j.isPoints===!0&&!!U.attributes.uv&&(Se||se),fog:!!R,useFog:M.fog===!0,fogExp2:R&&R.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:j.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:ce,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&N.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ze,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Se&&M.map.isVideoTexture===!0&&je.getTransfer(M.map.colorSpace)===Qe,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===qt,flipSided:M.side===Tt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:me&&M.extensions.derivatives===!0,extensionFragDepth:me&&M.extensions.fragDepth===!0,extensionDrawBuffers:me&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:me&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:me&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function p(M){let y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(let N in M.defines)y.push(N),y.push(M.defines[N]);return M.isRawShaderMaterial===!1&&(E(y,M),v(y,M),y.push(s.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function E(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function v(M,y){o.disableAll(),y.isWebGL2&&o.enable(0),y.supportsVertexTextures&&o.enable(1),y.instancing&&o.enable(2),y.instancingColor&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),M.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.skinning&&o.enable(4),y.morphTargets&&o.enable(5),y.morphNormals&&o.enable(6),y.morphColors&&o.enable(7),y.premultipliedAlpha&&o.enable(8),y.shadowMapEnabled&&o.enable(9),y.useLegacyLights&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),M.push(o.mask)}function A(M){let y=g[M.type],N;if(y){let X=sn[y];N=Yu.clone(X.uniforms)}else N=M.uniforms;return N}function D(M,y){let N;for(let X=0,j=c.length;X<j;X++){let R=c[X];if(R.cacheKey===y){N=R,++N.usedTimes;break}}return N===void 0&&(N=new ng(s,y,M,r),c.push(N)),N}function b(M){if(--M.usedTimes===0){let y=c.indexOf(M);c[y]=c[c.length-1],c.pop(),M.destroy()}}function w(M){l.remove(M)}function z(){l.dispose()}return{getParameters:f,getProgramCacheKey:p,getUniforms:A,acquireProgram:D,releaseProgram:b,releaseShaderCache:w,programs:c,dispose:z}}function rg(){let s=new WeakMap;function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function t(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function og(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function rc(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function oc(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(d,u,m,g,_,f){let p=s[e];return p===void 0?(p={id:d.id,object:d,geometry:u,material:m,groupOrder:g,renderOrder:d.renderOrder,z:_,group:f},s[e]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=m,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=_,p.group=f),e++,p}function o(d,u,m,g,_,f){let p=a(d,u,m,g,_,f);m.transmission>0?n.push(p):m.transparent===!0?i.push(p):t.push(p)}function l(d,u,m,g,_,f){let p=a(d,u,m,g,_,f);m.transmission>0?n.unshift(p):m.transparent===!0?i.unshift(p):t.unshift(p)}function c(d,u){t.length>1&&t.sort(d||og),n.length>1&&n.sort(u||rc),i.length>1&&i.sort(u||rc)}function h(){for(let d=e,u=s.length;d<u;d++){let m=s[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function ag(){let s=new WeakMap;function e(n,i){let r=s.get(n),a;return r===void 0?(a=new oc,s.set(n,[a])):i>=r.length?(a=new oc,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function lg(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Be};break;case"SpotLight":t={position:new L,direction:new L,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new L,halfWidth:new L,halfHeight:new L};break}return s[e.id]=t,t}}}function cg(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var hg=0;function ug(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function dg(s,e){let t=new lg,n=cg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new L);let r=new L,a=new lt,o=new lt;function l(h,d){let u=0,m=0,g=0;for(let X=0;X<9;X++)i.probe[X].set(0,0,0);let _=0,f=0,p=0,E=0,v=0,A=0,D=0,b=0,w=0,z=0,M=0;h.sort(ug);let y=d===!0?Math.PI:1;for(let X=0,j=h.length;X<j;X++){let R=h[X],U=R.color,O=R.intensity,q=R.distance,Y=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=U.r*O*y,m+=U.g*O*y,g+=U.b*O*y;else if(R.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(R.sh.coefficients[W],O);M++}else if(R.isDirectionalLight){let W=t.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity*y),R.castShadow){let K=R.shadow,Z=n.get(R);Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,i.directionalShadow[_]=Z,i.directionalShadowMap[_]=Y,i.directionalShadowMatrix[_]=R.shadow.matrix,A++}i.directional[_]=W,_++}else if(R.isSpotLight){let W=t.get(R);W.position.setFromMatrixPosition(R.matrixWorld),W.color.copy(U).multiplyScalar(O*y),W.distance=q,W.coneCos=Math.cos(R.angle),W.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),W.decay=R.decay,i.spot[p]=W;let K=R.shadow;if(R.map&&(i.spotLightMap[w]=R.map,w++,K.updateMatrices(R),R.castShadow&&z++),i.spotLightMatrix[p]=K.matrix,R.castShadow){let Z=n.get(R);Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,i.spotShadow[p]=Z,i.spotShadowMap[p]=Y,b++}p++}else if(R.isRectAreaLight){let W=t.get(R);W.color.copy(U).multiplyScalar(O),W.halfWidth.set(R.width*.5,0,0),W.halfHeight.set(0,R.height*.5,0),i.rectArea[E]=W,E++}else if(R.isPointLight){let W=t.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity*y),W.distance=R.distance,W.decay=R.decay,R.castShadow){let K=R.shadow,Z=n.get(R);Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,Z.shadowCameraNear=K.camera.near,Z.shadowCameraFar=K.camera.far,i.pointShadow[f]=Z,i.pointShadowMap[f]=Y,i.pointShadowMatrix[f]=R.shadow.matrix,D++}i.point[f]=W,f++}else if(R.isHemisphereLight){let W=t.get(R);W.skyColor.copy(R.color).multiplyScalar(O*y),W.groundColor.copy(R.groundColor).multiplyScalar(O*y),i.hemi[v]=W,v++}}E>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_FLOAT_1,i.rectAreaLTC2=ue.LTC_FLOAT_2):(i.rectAreaLTC1=ue.LTC_HALF_1,i.rectAreaLTC2=ue.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_FLOAT_1,i.rectAreaLTC2=ue.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_HALF_1,i.rectAreaLTC2=ue.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=m,i.ambient[2]=g;let N=i.hash;(N.directionalLength!==_||N.pointLength!==f||N.spotLength!==p||N.rectAreaLength!==E||N.hemiLength!==v||N.numDirectionalShadows!==A||N.numPointShadows!==D||N.numSpotShadows!==b||N.numSpotMaps!==w||N.numLightProbes!==M)&&(i.directional.length=_,i.spot.length=p,i.rectArea.length=E,i.point.length=f,i.hemi.length=v,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=D,i.pointShadowMap.length=D,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=D,i.spotLightMatrix.length=b+w-z,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=z,i.numLightProbes=M,N.directionalLength=_,N.pointLength=f,N.spotLength=p,N.rectAreaLength=E,N.hemiLength=v,N.numDirectionalShadows=A,N.numPointShadows=D,N.numSpotShadows=b,N.numSpotMaps=w,N.numLightProbes=M,i.version=hg++)}function c(h,d){let u=0,m=0,g=0,_=0,f=0,p=d.matrixWorldInverse;for(let E=0,v=h.length;E<v;E++){let A=h[E];if(A.isDirectionalLight){let D=i.directional[u];D.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),D.direction.sub(r),D.direction.transformDirection(p),u++}else if(A.isSpotLight){let D=i.spot[g];D.position.setFromMatrixPosition(A.matrixWorld),D.position.applyMatrix4(p),D.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),D.direction.sub(r),D.direction.transformDirection(p),g++}else if(A.isRectAreaLight){let D=i.rectArea[_];D.position.setFromMatrixPosition(A.matrixWorld),D.position.applyMatrix4(p),o.identity(),a.copy(A.matrixWorld),a.premultiply(p),o.extractRotation(a),D.halfWidth.set(A.width*.5,0,0),D.halfHeight.set(0,A.height*.5,0),D.halfWidth.applyMatrix4(o),D.halfHeight.applyMatrix4(o),_++}else if(A.isPointLight){let D=i.point[m];D.position.setFromMatrixPosition(A.matrixWorld),D.position.applyMatrix4(p),m++}else if(A.isHemisphereLight){let D=i.hemi[f];D.direction.setFromMatrixPosition(A.matrixWorld),D.direction.transformDirection(p),f++}}}return{setup:l,setupView:c,state:i}}function ac(s,e){let t=new dg(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(d){n.push(d)}function o(d){i.push(d)}function l(d){t.setup(n,d)}function c(d){t.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function fg(s,e){let t=new WeakMap;function n(r,a=0){let o=t.get(r),l;return o===void 0?(l=new ac(s,e),t.set(r,[l])):a>=o.length?(l=new ac(s,e),o.push(l)):l=o[a],l}function i(){t=new WeakMap}return{get:n,dispose:i}}var Jo=class extends kn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ru,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},$o=class extends kn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},pg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function gg(s,e,t){let n=new ki,i=new re,r=new re,a=new Mt,o=new Jo({depthPacking:ou}),l=new $o,c={},h=t.maxTextureSize,d={[Bn]:Tt,[Tt]:Bn,[qt]:qt},u=new Mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:pg,fragmentShader:mg}),m=u.clone();m.defines.HORIZONTAL_PASS=1;let g=new xt;g.setAttribute("position",new vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Ut(g,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yc;let p=this.type;this.render=function(b,w,z){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||b.length===0)return;let M=s.getRenderTarget(),y=s.getActiveCubeFace(),N=s.getActiveMipmapLevel(),X=s.state;X.setBlending(Nn),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);let j=p!==_n&&this.type===_n,R=p===_n&&this.type!==_n;for(let U=0,O=b.length;U<O;U++){let q=b[U],Y=q.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;i.copy(Y.mapSize);let W=Y.getFrameExtents();if(i.multiply(W),r.copy(Y.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/W.x),i.x=r.x*W.x,Y.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/W.y),i.y=r.y*W.y,Y.mapSize.y=r.y)),Y.map===null||j===!0||R===!0){let Z=this.type!==_n?{minFilter:Ct,magFilter:Ct}:{};Y.map!==null&&Y.map.dispose(),Y.map=new yn(i.x,i.y,Z),Y.map.texture.name=q.name+".shadowMap",Y.camera.updateProjectionMatrix()}s.setRenderTarget(Y.map),s.clear();let K=Y.getViewportCount();for(let Z=0;Z<K;Z++){let ce=Y.getViewport(Z);a.set(r.x*ce.x,r.y*ce.y,r.x*ce.z,r.y*ce.w),X.viewport(a),Y.updateMatrices(q,Z),n=Y.getFrustum(),A(w,z,Y.camera,q,this.type)}Y.isPointLightShadow!==!0&&this.type===_n&&E(Y,z),Y.needsUpdate=!1}p=this.type,f.needsUpdate=!1,s.setRenderTarget(M,y,N)};function E(b,w){let z=e.update(_);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new yn(i.x,i.y)),u.uniforms.shadow_pass.value=b.map.texture,u.uniforms.resolution.value=b.mapSize,u.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(w,null,z,u,_,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(w,null,z,m,_,null)}function v(b,w,z,M){let y=null,N=z.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(N!==void 0)y=N;else if(y=z.isPointLight===!0?l:o,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let X=y.uuid,j=w.uuid,R=c[X];R===void 0&&(R={},c[X]=R);let U=R[j];U===void 0&&(U=y.clone(),R[j]=U,w.addEventListener("dispose",D)),y=U}if(y.visible=w.visible,y.wireframe=w.wireframe,M===_n?y.side=w.shadowSide!==null?w.shadowSide:w.side:y.side=w.shadowSide!==null?w.shadowSide:d[w.side],y.alphaMap=w.alphaMap,y.alphaTest=w.alphaTest,y.map=w.map,y.clipShadows=w.clipShadows,y.clippingPlanes=w.clippingPlanes,y.clipIntersection=w.clipIntersection,y.displacementMap=w.displacementMap,y.displacementScale=w.displacementScale,y.displacementBias=w.displacementBias,y.wireframeLinewidth=w.wireframeLinewidth,y.linewidth=w.linewidth,z.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let X=s.properties.get(y);X.light=z}return y}function A(b,w,z,M,y){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&y===_n)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,b.matrixWorld);let j=e.update(b),R=b.material;if(Array.isArray(R)){let U=j.groups;for(let O=0,q=U.length;O<q;O++){let Y=U[O],W=R[Y.materialIndex];if(W&&W.visible){let K=v(b,W,M,y);b.onBeforeShadow(s,b,w,z,j,K,Y),s.renderBufferDirect(z,null,j,K,b,Y),b.onAfterShadow(s,b,w,z,j,K,Y)}}}else if(R.visible){let U=v(b,R,M,y);b.onBeforeShadow(s,b,w,z,j,U,null),s.renderBufferDirect(z,null,j,U,b,null),b.onAfterShadow(s,b,w,z,j,U,null)}}let X=b.children;for(let j=0,R=X.length;j<R;j++)A(X[j],w,z,M,y)}function D(b){b.target.removeEventListener("dispose",D);for(let z in c){let M=c[z],y=b.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}function _g(s,e,t){let n=t.isWebGL2;function i(){let I=!1,le=new Mt,me=null,Ie=new Mt(0,0,0,0);return{setMask:function(Pe){me!==Pe&&!I&&(s.colorMask(Pe,Pe,Pe,Pe),me=Pe)},setLocked:function(Pe){I=Pe},setClear:function(Pe,qe,Ze,st,ot){ot===!0&&(Pe*=st,qe*=st,Ze*=st),le.set(Pe,qe,Ze,st),Ie.equals(le)===!1&&(s.clearColor(Pe,qe,Ze,st),Ie.copy(le))},reset:function(){I=!1,me=null,Ie.set(-1,0,0,0)}}}function r(){let I=!1,le=null,me=null,Ie=null;return{setTest:function(Pe){Pe?Ue(s.DEPTH_TEST):Se(s.DEPTH_TEST)},setMask:function(Pe){le!==Pe&&!I&&(s.depthMask(Pe),le=Pe)},setFunc:function(Pe){if(me!==Pe){switch(Pe){case Uh:s.depthFunc(s.NEVER);break;case Oh:s.depthFunc(s.ALWAYS);break;case Fh:s.depthFunc(s.LESS);break;case tr:s.depthFunc(s.LEQUAL);break;case Bh:s.depthFunc(s.EQUAL);break;case zh:s.depthFunc(s.GEQUAL);break;case kh:s.depthFunc(s.GREATER);break;case Hh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}me=Pe}},setLocked:function(Pe){I=Pe},setClear:function(Pe){Ie!==Pe&&(s.clearDepth(Pe),Ie=Pe)},reset:function(){I=!1,le=null,me=null,Ie=null}}}function a(){let I=!1,le=null,me=null,Ie=null,Pe=null,qe=null,Ze=null,st=null,ot=null;return{setTest:function($e){I||($e?Ue(s.STENCIL_TEST):Se(s.STENCIL_TEST))},setMask:function($e){le!==$e&&!I&&(s.stencilMask($e),le=$e)},setFunc:function($e,ct,nn){(me!==$e||Ie!==ct||Pe!==nn)&&(s.stencilFunc($e,ct,nn),me=$e,Ie=ct,Pe=nn)},setOp:function($e,ct,nn){(qe!==$e||Ze!==ct||st!==nn)&&(s.stencilOp($e,ct,nn),qe=$e,Ze=ct,st=nn)},setLocked:function($e){I=$e},setClear:function($e){ot!==$e&&(s.clearStencil($e),ot=$e)},reset:function(){I=!1,le=null,me=null,Ie=null,Pe=null,qe=null,Ze=null,st=null,ot=null}}}let o=new i,l=new r,c=new a,h=new WeakMap,d=new WeakMap,u={},m={},g=new WeakMap,_=[],f=null,p=!1,E=null,v=null,A=null,D=null,b=null,w=null,z=null,M=new Be(0,0,0),y=0,N=!1,X=null,j=null,R=null,U=null,O=null,q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,W=0,K=s.getParameter(s.VERSION);K.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(K)[1]),Y=W>=1):K.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),Y=W>=2);let Z=null,ce={},V=s.getParameter(s.SCISSOR_BOX),Q=s.getParameter(s.VIEWPORT),pe=new Mt().fromArray(V),be=new Mt().fromArray(Q);function ge(I,le,me,Ie){let Pe=new Uint8Array(4),qe=s.createTexture();s.bindTexture(I,qe),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ze=0;Ze<me;Ze++)n&&(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)?s.texImage3D(le,0,s.RGBA,1,1,Ie,0,s.RGBA,s.UNSIGNED_BYTE,Pe):s.texImage2D(le+Ze,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Pe);return qe}let Le={};Le[s.TEXTURE_2D]=ge(s.TEXTURE_2D,s.TEXTURE_2D,1),Le[s.TEXTURE_CUBE_MAP]=ge(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Le[s.TEXTURE_2D_ARRAY]=ge(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Le[s.TEXTURE_3D]=ge(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ue(s.DEPTH_TEST),l.setFunc(tr),_e(!1),S(Va),Ue(s.CULL_FACE),J(Nn);function Ue(I){u[I]!==!0&&(s.enable(I),u[I]=!0)}function Se(I){u[I]!==!1&&(s.disable(I),u[I]=!1)}function Ne(I,le){return m[I]!==le?(s.bindFramebuffer(I,le),m[I]=le,n&&(I===s.DRAW_FRAMEBUFFER&&(m[s.FRAMEBUFFER]=le),I===s.FRAMEBUFFER&&(m[s.DRAW_FRAMEBUFFER]=le)),!0):!1}function P(I,le){let me=_,Ie=!1;if(I)if(me=g.get(le),me===void 0&&(me=[],g.set(le,me)),I.isWebGLMultipleRenderTargets){let Pe=I.texture;if(me.length!==Pe.length||me[0]!==s.COLOR_ATTACHMENT0){for(let qe=0,Ze=Pe.length;qe<Ze;qe++)me[qe]=s.COLOR_ATTACHMENT0+qe;me.length=Pe.length,Ie=!0}}else me[0]!==s.COLOR_ATTACHMENT0&&(me[0]=s.COLOR_ATTACHMENT0,Ie=!0);else me[0]!==s.BACK&&(me[0]=s.BACK,Ie=!0);Ie&&(t.isWebGL2?s.drawBuffers(me):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(me))}function he(I){return f!==I?(s.useProgram(I),f=I,!0):!1}let $={[Jn]:s.FUNC_ADD,[yh]:s.FUNC_SUBTRACT,[Mh]:s.FUNC_REVERSE_SUBTRACT};if(n)$[Xa]=s.MIN,$[Ya]=s.MAX;else{let I=e.get("EXT_blend_minmax");I!==null&&($[Xa]=I.MIN_EXT,$[Ya]=I.MAX_EXT)}let oe={[bh]:s.ZERO,[Eh]:s.ONE,[Sh]:s.SRC_COLOR,[Ro]:s.SRC_ALPHA,[Ph]:s.SRC_ALPHA_SATURATE,[Rh]:s.DST_COLOR,[wh]:s.DST_ALPHA,[Th]:s.ONE_MINUS_SRC_COLOR,[Co]:s.ONE_MINUS_SRC_ALPHA,[Ch]:s.ONE_MINUS_DST_COLOR,[Ah]:s.ONE_MINUS_DST_ALPHA,[Lh]:s.CONSTANT_COLOR,[Ih]:s.ONE_MINUS_CONSTANT_COLOR,[Dh]:s.CONSTANT_ALPHA,[Nh]:s.ONE_MINUS_CONSTANT_ALPHA};function J(I,le,me,Ie,Pe,qe,Ze,st,ot,$e){if(I===Nn){p===!0&&(Se(s.BLEND),p=!1);return}if(p===!1&&(Ue(s.BLEND),p=!0),I!==xh){if(I!==E||$e!==N){if((v!==Jn||b!==Jn)&&(s.blendEquation(s.FUNC_ADD),v=Jn,b=Jn),$e)switch(I){case Ot:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case zn:s.blendFunc(s.ONE,s.ONE);break;case Ga:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Wa:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Ot:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case zn:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Ga:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Wa:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}A=null,D=null,w=null,z=null,M.set(0,0,0),y=0,E=I,N=$e}return}Pe=Pe||le,qe=qe||me,Ze=Ze||Ie,(le!==v||Pe!==b)&&(s.blendEquationSeparate($[le],$[Pe]),v=le,b=Pe),(me!==A||Ie!==D||qe!==w||Ze!==z)&&(s.blendFuncSeparate(oe[me],oe[Ie],oe[qe],oe[Ze]),A=me,D=Ie,w=qe,z=Ze),(st.equals(M)===!1||ot!==y)&&(s.blendColor(st.r,st.g,st.b,ot),M.copy(st),y=ot),E=I,N=!1}function Te(I,le){I.side===qt?Se(s.CULL_FACE):Ue(s.CULL_FACE);let me=I.side===Tt;le&&(me=!me),_e(me),I.blending===Ot&&I.transparent===!1?J(Nn):J(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),o.setMask(I.colorWrite);let Ie=I.stencilWrite;c.setTest(Ie),Ie&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),F(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Ue(s.SAMPLE_ALPHA_TO_COVERAGE):Se(s.SAMPLE_ALPHA_TO_COVERAGE)}function _e(I){X!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),X=I)}function S(I){I!==gh?(Ue(s.CULL_FACE),I!==j&&(I===Va?s.cullFace(s.BACK):I===_h?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Se(s.CULL_FACE),j=I}function x(I){I!==R&&(Y&&s.lineWidth(I),R=I)}function F(I,le,me){I?(Ue(s.POLYGON_OFFSET_FILL),(U!==le||O!==me)&&(s.polygonOffset(le,me),U=le,O=me)):Se(s.POLYGON_OFFSET_FILL)}function ie(I){I?Ue(s.SCISSOR_TEST):Se(s.SCISSOR_TEST)}function te(I){I===void 0&&(I=s.TEXTURE0+q-1),Z!==I&&(s.activeTexture(I),Z=I)}function ee(I,le,me){me===void 0&&(Z===null?me=s.TEXTURE0+q-1:me=Z);let Ie=ce[me];Ie===void 0&&(Ie={type:void 0,texture:void 0},ce[me]=Ie),(Ie.type!==I||Ie.texture!==le)&&(Z!==me&&(s.activeTexture(me),Z=me),s.bindTexture(I,le||Le[I]),Ie.type=I,Ie.texture=le)}function Ee(){let I=ce[Z];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function fe(){try{s.compressedTexImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xe(){try{s.compressedTexImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ce(){try{s.texSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ze(){try{s.texSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ne(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Je(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ge(){try{s.texStorage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Oe(){try{s.texStorage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Re(){try{s.texImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ve(){try{s.texImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function C(I){pe.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),pe.copy(I))}function ae(I){be.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),be.copy(I))}function we(I,le){let me=d.get(le);me===void 0&&(me=new WeakMap,d.set(le,me));let Ie=me.get(I);Ie===void 0&&(Ie=s.getUniformBlockIndex(le,I.name),me.set(I,Ie))}function Me(I,le){let Ie=d.get(le).get(I);h.get(le)!==Ie&&(s.uniformBlockBinding(le,Ie,I.__bindingPointIndex),h.set(le,Ie))}function se(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},Z=null,ce={},m={},g=new WeakMap,_=[],f=null,p=!1,E=null,v=null,A=null,D=null,b=null,w=null,z=null,M=new Be(0,0,0),y=0,N=!1,X=null,j=null,R=null,U=null,O=null,pe.set(0,0,s.canvas.width,s.canvas.height),be.set(0,0,s.canvas.width,s.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Ue,disable:Se,bindFramebuffer:Ne,drawBuffers:P,useProgram:he,setBlending:J,setMaterial:Te,setFlipSided:_e,setCullFace:S,setLineWidth:x,setPolygonOffset:F,setScissorTest:ie,activeTexture:te,bindTexture:ee,unbindTexture:Ee,compressedTexImage2D:fe,compressedTexImage3D:xe,texImage2D:Re,texImage3D:ve,updateUBOMapping:we,uniformBlockBinding:Me,texStorage2D:Ge,texStorage3D:Oe,texSubImage2D:Ce,texSubImage3D:ze,compressedTexSubImage2D:ne,compressedTexSubImage3D:Je,scissor:C,viewport:ae,reset:se}}function vg(s,e,t,n,i,r,a){let o=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,d,u=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,x){return m?new OffscreenCanvas(S,x):cr("canvas")}function _(S,x,F,ie){let te=1;if((S.width>ie||S.height>ie)&&(te=ie/Math.max(S.width,S.height)),te<1||x===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){let ee=x?lr:Math.floor,Ee=ee(te*S.width),fe=ee(te*S.height);d===void 0&&(d=g(Ee,fe));let xe=F?g(Ee,fe):d;return xe.width=Ee,xe.height=fe,xe.getContext("2d").drawImage(S,0,0,Ee,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+Ee+"x"+fe+")."),xe}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function f(S){return Oo(S.width)&&Oo(S.height)}function p(S){return o?!1:S.wrapS!==Zt||S.wrapT!==Zt||S.minFilter!==Ct&&S.minFilter!==kt}function E(S,x){return S.generateMipmaps&&x&&S.minFilter!==Ct&&S.minFilter!==kt}function v(S){s.generateMipmap(S)}function A(S,x,F,ie,te=!1){if(o===!1)return x;if(S!==null){if(s[S]!==void 0)return s[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let ee=x;if(x===s.RED&&(F===s.FLOAT&&(ee=s.R32F),F===s.HALF_FLOAT&&(ee=s.R16F),F===s.UNSIGNED_BYTE&&(ee=s.R8)),x===s.RED_INTEGER&&(F===s.UNSIGNED_BYTE&&(ee=s.R8UI),F===s.UNSIGNED_SHORT&&(ee=s.R16UI),F===s.UNSIGNED_INT&&(ee=s.R32UI),F===s.BYTE&&(ee=s.R8I),F===s.SHORT&&(ee=s.R16I),F===s.INT&&(ee=s.R32I)),x===s.RG&&(F===s.FLOAT&&(ee=s.RG32F),F===s.HALF_FLOAT&&(ee=s.RG16F),F===s.UNSIGNED_BYTE&&(ee=s.RG8)),x===s.RGBA){let Ee=te?sr:je.getTransfer(ie);F===s.FLOAT&&(ee=s.RGBA32F),F===s.HALF_FLOAT&&(ee=s.RGBA16F),F===s.UNSIGNED_BYTE&&(ee=Ee===Qe?s.SRGB8_ALPHA8:s.RGBA8),F===s.UNSIGNED_SHORT_4_4_4_4&&(ee=s.RGBA4),F===s.UNSIGNED_SHORT_5_5_5_1&&(ee=s.RGB5_A1)}return(ee===s.R16F||ee===s.R32F||ee===s.RG16F||ee===s.RG32F||ee===s.RGBA16F||ee===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function D(S,x,F){return E(S,F)===!0||S.isFramebufferTexture&&S.minFilter!==Ct&&S.minFilter!==kt?Math.log2(Math.max(x.width,x.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?x.mipmaps.length:1}function b(S){return S===Ct||S===qa||S===qr?s.NEAREST:s.LINEAR}function w(S){let x=S.target;x.removeEventListener("dispose",w),M(x),x.isVideoTexture&&h.delete(x)}function z(S){let x=S.target;x.removeEventListener("dispose",z),N(x)}function M(S){let x=n.get(S);if(x.__webglInit===void 0)return;let F=S.source,ie=u.get(F);if(ie){let te=ie[x.__cacheKey];te.usedTimes--,te.usedTimes===0&&y(S),Object.keys(ie).length===0&&u.delete(F)}n.remove(S)}function y(S){let x=n.get(S);s.deleteTexture(x.__webglTexture);let F=S.source,ie=u.get(F);delete ie[x.__cacheKey],a.memory.textures--}function N(S){let x=S.texture,F=n.get(S),ie=n.get(x);if(ie.__webglTexture!==void 0&&(s.deleteTexture(ie.__webglTexture),a.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(F.__webglFramebuffer[te]))for(let ee=0;ee<F.__webglFramebuffer[te].length;ee++)s.deleteFramebuffer(F.__webglFramebuffer[te][ee]);else s.deleteFramebuffer(F.__webglFramebuffer[te]);F.__webglDepthbuffer&&s.deleteRenderbuffer(F.__webglDepthbuffer[te])}else{if(Array.isArray(F.__webglFramebuffer))for(let te=0;te<F.__webglFramebuffer.length;te++)s.deleteFramebuffer(F.__webglFramebuffer[te]);else s.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&s.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&s.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let te=0;te<F.__webglColorRenderbuffer.length;te++)F.__webglColorRenderbuffer[te]&&s.deleteRenderbuffer(F.__webglColorRenderbuffer[te]);F.__webglDepthRenderbuffer&&s.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let te=0,ee=x.length;te<ee;te++){let Ee=n.get(x[te]);Ee.__webglTexture&&(s.deleteTexture(Ee.__webglTexture),a.memory.textures--),n.remove(x[te])}n.remove(x),n.remove(S)}let X=0;function j(){X=0}function R(){let S=X;return S>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+i.maxTextures),X+=1,S}function U(S){let x=[];return x.push(S.wrapS),x.push(S.wrapT),x.push(S.wrapR||0),x.push(S.magFilter),x.push(S.minFilter),x.push(S.anisotropy),x.push(S.internalFormat),x.push(S.format),x.push(S.type),x.push(S.generateMipmaps),x.push(S.premultiplyAlpha),x.push(S.flipY),x.push(S.unpackAlignment),x.push(S.colorSpace),x.join()}function O(S,x){let F=n.get(S);if(S.isVideoTexture&&Te(S),S.isRenderTargetTexture===!1&&S.version>0&&F.__version!==S.version){let ie=S.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pe(F,S,x);return}}t.bindTexture(s.TEXTURE_2D,F.__webglTexture,s.TEXTURE0+x)}function q(S,x){let F=n.get(S);if(S.version>0&&F.__version!==S.version){pe(F,S,x);return}t.bindTexture(s.TEXTURE_2D_ARRAY,F.__webglTexture,s.TEXTURE0+x)}function Y(S,x){let F=n.get(S);if(S.version>0&&F.__version!==S.version){pe(F,S,x);return}t.bindTexture(s.TEXTURE_3D,F.__webglTexture,s.TEXTURE0+x)}function W(S,x){let F=n.get(S);if(S.version>0&&F.__version!==S.version){be(F,S,x);return}t.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+x)}let K={[Io]:s.REPEAT,[Zt]:s.CLAMP_TO_EDGE,[Do]:s.MIRRORED_REPEAT},Z={[Ct]:s.NEAREST,[qa]:s.NEAREST_MIPMAP_NEAREST,[qr]:s.NEAREST_MIPMAP_LINEAR,[kt]:s.LINEAR,[$h]:s.LINEAR_MIPMAP_NEAREST,[ss]:s.LINEAR_MIPMAP_LINEAR},ce={[cu]:s.NEVER,[mu]:s.ALWAYS,[hu]:s.LESS,[Lc]:s.LEQUAL,[uu]:s.EQUAL,[pu]:s.GEQUAL,[du]:s.GREATER,[fu]:s.NOTEQUAL};function V(S,x,F){if(F?(s.texParameteri(S,s.TEXTURE_WRAP_S,K[x.wrapS]),s.texParameteri(S,s.TEXTURE_WRAP_T,K[x.wrapT]),(S===s.TEXTURE_3D||S===s.TEXTURE_2D_ARRAY)&&s.texParameteri(S,s.TEXTURE_WRAP_R,K[x.wrapR]),s.texParameteri(S,s.TEXTURE_MAG_FILTER,Z[x.magFilter]),s.texParameteri(S,s.TEXTURE_MIN_FILTER,Z[x.minFilter])):(s.texParameteri(S,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(S,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(S===s.TEXTURE_3D||S===s.TEXTURE_2D_ARRAY)&&s.texParameteri(S,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(x.wrapS!==Zt||x.wrapT!==Zt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(S,s.TEXTURE_MAG_FILTER,b(x.magFilter)),s.texParameteri(S,s.TEXTURE_MIN_FILTER,b(x.minFilter)),x.minFilter!==Ct&&x.minFilter!==kt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(s.texParameteri(S,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(S,s.TEXTURE_COMPARE_FUNC,ce[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let ie=e.get("EXT_texture_filter_anisotropic");if(x.magFilter===Ct||x.minFilter!==qr&&x.minFilter!==ss||x.type===Dn&&e.has("OES_texture_float_linear")===!1||o===!1&&x.type===rs&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||n.get(x).__currentAnisotropy)&&(s.texParameterf(S,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy)}}function Q(S,x){let F=!1;S.__webglInit===void 0&&(S.__webglInit=!0,x.addEventListener("dispose",w));let ie=x.source,te=u.get(ie);te===void 0&&(te={},u.set(ie,te));let ee=U(x);if(ee!==S.__cacheKey){te[ee]===void 0&&(te[ee]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,F=!0),te[ee].usedTimes++;let Ee=te[S.__cacheKey];Ee!==void 0&&(te[S.__cacheKey].usedTimes--,Ee.usedTimes===0&&y(x)),S.__cacheKey=ee,S.__webglTexture=te[ee].texture}return F}function pe(S,x,F){let ie=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(ie=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&(ie=s.TEXTURE_3D);let te=Q(S,x),ee=x.source;t.bindTexture(ie,S.__webglTexture,s.TEXTURE0+F);let Ee=n.get(ee);if(ee.version!==Ee.__version||te===!0){t.activeTexture(s.TEXTURE0+F);let fe=je.getPrimaries(je.workingColorSpace),xe=x.colorSpace===Ht?null:je.getPrimaries(x.colorSpace),Ce=x.colorSpace===Ht||fe===xe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let ze=p(x)&&f(x.image)===!1,ne=_(x.image,ze,!1,i.maxTextureSize);ne=_e(x,ne);let Je=f(ne)||o,Ge=r.convert(x.format,x.colorSpace),Oe=r.convert(x.type),Re=A(x.internalFormat,Ge,Oe,x.colorSpace,x.isVideoTexture);V(ie,x,Je);let ve,C=x.mipmaps,ae=o&&x.isVideoTexture!==!0&&Re!==Cc,we=Ee.__version===void 0||te===!0,Me=D(x,ne,Je);if(x.isDepthTexture)Re=s.DEPTH_COMPONENT,o?x.type===Dn?Re=s.DEPTH_COMPONENT32F:x.type===In?Re=s.DEPTH_COMPONENT24:x.type===jn?Re=s.DEPTH24_STENCIL8:Re=s.DEPTH_COMPONENT16:x.type===Dn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===Qn&&Re===s.DEPTH_COMPONENT&&x.type!==ba&&x.type!==In&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=In,Oe=r.convert(x.type)),x.format===Fi&&Re===s.DEPTH_COMPONENT&&(Re=s.DEPTH_STENCIL,x.type!==jn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=jn,Oe=r.convert(x.type))),we&&(ae?t.texStorage2D(s.TEXTURE_2D,1,Re,ne.width,ne.height):t.texImage2D(s.TEXTURE_2D,0,Re,ne.width,ne.height,0,Ge,Oe,null));else if(x.isDataTexture)if(C.length>0&&Je){ae&&we&&t.texStorage2D(s.TEXTURE_2D,Me,Re,C[0].width,C[0].height);for(let se=0,I=C.length;se<I;se++)ve=C[se],ae?t.texSubImage2D(s.TEXTURE_2D,se,0,0,ve.width,ve.height,Ge,Oe,ve.data):t.texImage2D(s.TEXTURE_2D,se,Re,ve.width,ve.height,0,Ge,Oe,ve.data);x.generateMipmaps=!1}else ae?(we&&t.texStorage2D(s.TEXTURE_2D,Me,Re,ne.width,ne.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,ne.width,ne.height,Ge,Oe,ne.data)):t.texImage2D(s.TEXTURE_2D,0,Re,ne.width,ne.height,0,Ge,Oe,ne.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){ae&&we&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Me,Re,C[0].width,C[0].height,ne.depth);for(let se=0,I=C.length;se<I;se++)ve=C[se],x.format!==Jt?Ge!==null?ae?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,0,ve.width,ve.height,ne.depth,Ge,ve.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,se,Re,ve.width,ve.height,ne.depth,0,ve.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?t.texSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,0,ve.width,ve.height,ne.depth,Ge,Oe,ve.data):t.texImage3D(s.TEXTURE_2D_ARRAY,se,Re,ve.width,ve.height,ne.depth,0,Ge,Oe,ve.data)}else{ae&&we&&t.texStorage2D(s.TEXTURE_2D,Me,Re,C[0].width,C[0].height);for(let se=0,I=C.length;se<I;se++)ve=C[se],x.format!==Jt?Ge!==null?ae?t.compressedTexSubImage2D(s.TEXTURE_2D,se,0,0,ve.width,ve.height,Ge,ve.data):t.compressedTexImage2D(s.TEXTURE_2D,se,Re,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?t.texSubImage2D(s.TEXTURE_2D,se,0,0,ve.width,ve.height,Ge,Oe,ve.data):t.texImage2D(s.TEXTURE_2D,se,Re,ve.width,ve.height,0,Ge,Oe,ve.data)}else if(x.isDataArrayTexture)ae?(we&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Me,Re,ne.width,ne.height,ne.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,Ge,Oe,ne.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,Re,ne.width,ne.height,ne.depth,0,Ge,Oe,ne.data);else if(x.isData3DTexture)ae?(we&&t.texStorage3D(s.TEXTURE_3D,Me,Re,ne.width,ne.height,ne.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,Ge,Oe,ne.data)):t.texImage3D(s.TEXTURE_3D,0,Re,ne.width,ne.height,ne.depth,0,Ge,Oe,ne.data);else if(x.isFramebufferTexture){if(we)if(ae)t.texStorage2D(s.TEXTURE_2D,Me,Re,ne.width,ne.height);else{let se=ne.width,I=ne.height;for(let le=0;le<Me;le++)t.texImage2D(s.TEXTURE_2D,le,Re,se,I,0,Ge,Oe,null),se>>=1,I>>=1}}else if(C.length>0&&Je){ae&&we&&t.texStorage2D(s.TEXTURE_2D,Me,Re,C[0].width,C[0].height);for(let se=0,I=C.length;se<I;se++)ve=C[se],ae?t.texSubImage2D(s.TEXTURE_2D,se,0,0,Ge,Oe,ve):t.texImage2D(s.TEXTURE_2D,se,Re,Ge,Oe,ve);x.generateMipmaps=!1}else ae?(we&&t.texStorage2D(s.TEXTURE_2D,Me,Re,ne.width,ne.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ge,Oe,ne)):t.texImage2D(s.TEXTURE_2D,0,Re,Ge,Oe,ne);E(x,Je)&&v(ie),Ee.__version=ee.version,x.onUpdate&&x.onUpdate(x)}S.__version=x.version}function be(S,x,F){if(x.image.length!==6)return;let ie=Q(S,x),te=x.source;t.bindTexture(s.TEXTURE_CUBE_MAP,S.__webglTexture,s.TEXTURE0+F);let ee=n.get(te);if(te.version!==ee.__version||ie===!0){t.activeTexture(s.TEXTURE0+F);let Ee=je.getPrimaries(je.workingColorSpace),fe=x.colorSpace===Ht?null:je.getPrimaries(x.colorSpace),xe=x.colorSpace===Ht||Ee===fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);let Ce=x.isCompressedTexture||x.image[0].isCompressedTexture,ze=x.image[0]&&x.image[0].isDataTexture,ne=[];for(let se=0;se<6;se++)!Ce&&!ze?ne[se]=_(x.image[se],!1,!0,i.maxCubemapSize):ne[se]=ze?x.image[se].image:x.image[se],ne[se]=_e(x,ne[se]);let Je=ne[0],Ge=f(Je)||o,Oe=r.convert(x.format,x.colorSpace),Re=r.convert(x.type),ve=A(x.internalFormat,Oe,Re,x.colorSpace),C=o&&x.isVideoTexture!==!0,ae=ee.__version===void 0||ie===!0,we=D(x,Je,Ge);V(s.TEXTURE_CUBE_MAP,x,Ge);let Me;if(Ce){C&&ae&&t.texStorage2D(s.TEXTURE_CUBE_MAP,we,ve,Je.width,Je.height);for(let se=0;se<6;se++){Me=ne[se].mipmaps;for(let I=0;I<Me.length;I++){let le=Me[I];x.format!==Jt?Oe!==null?C?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,I,0,0,le.width,le.height,Oe,le.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,I,ve,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):C?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,I,0,0,le.width,le.height,Oe,Re,le.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,I,ve,le.width,le.height,0,Oe,Re,le.data)}}}else{Me=x.mipmaps,C&&ae&&(Me.length>0&&we++,t.texStorage2D(s.TEXTURE_CUBE_MAP,we,ve,ne[0].width,ne[0].height));for(let se=0;se<6;se++)if(ze){C?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,ne[se].width,ne[se].height,Oe,Re,ne[se].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,ve,ne[se].width,ne[se].height,0,Oe,Re,ne[se].data);for(let I=0;I<Me.length;I++){let me=Me[I].image[se].image;C?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,I+1,0,0,me.width,me.height,Oe,Re,me.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,I+1,ve,me.width,me.height,0,Oe,Re,me.data)}}else{C?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Oe,Re,ne[se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,ve,Oe,Re,ne[se]);for(let I=0;I<Me.length;I++){let le=Me[I];C?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,I+1,0,0,Oe,Re,le.image[se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,I+1,ve,Oe,Re,le.image[se])}}}E(x,Ge)&&v(s.TEXTURE_CUBE_MAP),ee.__version=te.version,x.onUpdate&&x.onUpdate(x)}S.__version=x.version}function ge(S,x,F,ie,te,ee){let Ee=r.convert(F.format,F.colorSpace),fe=r.convert(F.type),xe=A(F.internalFormat,Ee,fe,F.colorSpace);if(!n.get(x).__hasExternalTextures){let ze=Math.max(1,x.width>>ee),ne=Math.max(1,x.height>>ee);te===s.TEXTURE_3D||te===s.TEXTURE_2D_ARRAY?t.texImage3D(te,ee,xe,ze,ne,x.depth,0,Ee,fe,null):t.texImage2D(te,ee,xe,ze,ne,0,Ee,fe,null)}t.bindFramebuffer(s.FRAMEBUFFER,S),J(x)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ie,te,n.get(F).__webglTexture,0,oe(x)):(te===s.TEXTURE_2D||te>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ie,te,n.get(F).__webglTexture,ee),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Le(S,x,F){if(s.bindRenderbuffer(s.RENDERBUFFER,S),x.depthBuffer&&!x.stencilBuffer){let ie=o===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(F||J(x)){let te=x.depthTexture;te&&te.isDepthTexture&&(te.type===Dn?ie=s.DEPTH_COMPONENT32F:te.type===In&&(ie=s.DEPTH_COMPONENT24));let ee=oe(x);J(x)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ee,ie,x.width,x.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,ee,ie,x.width,x.height)}else s.renderbufferStorage(s.RENDERBUFFER,ie,x.width,x.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,S)}else if(x.depthBuffer&&x.stencilBuffer){let ie=oe(x);F&&J(x)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ie,s.DEPTH24_STENCIL8,x.width,x.height):J(x)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ie,s.DEPTH24_STENCIL8,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,S)}else{let ie=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let te=0;te<ie.length;te++){let ee=ie[te],Ee=r.convert(ee.format,ee.colorSpace),fe=r.convert(ee.type),xe=A(ee.internalFormat,Ee,fe,ee.colorSpace),Ce=oe(x);F&&J(x)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ce,xe,x.width,x.height):J(x)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ce,xe,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,xe,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ue(S,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,S),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),O(x.depthTexture,0);let ie=n.get(x.depthTexture).__webglTexture,te=oe(x);if(x.depthTexture.format===Qn)J(x)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ie,0,te):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ie,0);else if(x.depthTexture.format===Fi)J(x)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ie,0,te):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Se(S){let x=n.get(S),F=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!x.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Ue(x.__webglFramebuffer,S)}else if(F){x.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[ie]),x.__webglDepthbuffer[ie]=s.createRenderbuffer(),Le(x.__webglDepthbuffer[ie],S,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=s.createRenderbuffer(),Le(x.__webglDepthbuffer,S,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ne(S,x,F){let ie=n.get(S);x!==void 0&&ge(ie.__webglFramebuffer,S,S.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),F!==void 0&&Se(S)}function P(S){let x=S.texture,F=n.get(S),ie=n.get(x);S.addEventListener("dispose",z),S.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=s.createTexture()),ie.__version=x.version,a.memory.textures++);let te=S.isWebGLCubeRenderTarget===!0,ee=S.isWebGLMultipleRenderTargets===!0,Ee=f(S)||o;if(te){F.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(o&&x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer[fe]=[];for(let xe=0;xe<x.mipmaps.length;xe++)F.__webglFramebuffer[fe][xe]=s.createFramebuffer()}else F.__webglFramebuffer[fe]=s.createFramebuffer()}else{if(o&&x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer=[];for(let fe=0;fe<x.mipmaps.length;fe++)F.__webglFramebuffer[fe]=s.createFramebuffer()}else F.__webglFramebuffer=s.createFramebuffer();if(ee)if(i.drawBuffers){let fe=S.texture;for(let xe=0,Ce=fe.length;xe<Ce;xe++){let ze=n.get(fe[xe]);ze.__webglTexture===void 0&&(ze.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&S.samples>0&&J(S)===!1){let fe=ee?x:[x];F.__webglMultisampledFramebuffer=s.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let xe=0;xe<fe.length;xe++){let Ce=fe[xe];F.__webglColorRenderbuffer[xe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,F.__webglColorRenderbuffer[xe]);let ze=r.convert(Ce.format,Ce.colorSpace),ne=r.convert(Ce.type),Je=A(Ce.internalFormat,ze,ne,Ce.colorSpace,S.isXRRenderTarget===!0),Ge=oe(S);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ge,Je,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.RENDERBUFFER,F.__webglColorRenderbuffer[xe])}s.bindRenderbuffer(s.RENDERBUFFER,null),S.depthBuffer&&(F.__webglDepthRenderbuffer=s.createRenderbuffer(),Le(F.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(te){t.bindTexture(s.TEXTURE_CUBE_MAP,ie.__webglTexture),V(s.TEXTURE_CUBE_MAP,x,Ee);for(let fe=0;fe<6;fe++)if(o&&x.mipmaps&&x.mipmaps.length>0)for(let xe=0;xe<x.mipmaps.length;xe++)ge(F.__webglFramebuffer[fe][xe],S,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,xe);else ge(F.__webglFramebuffer[fe],S,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);E(x,Ee)&&v(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ee){let fe=S.texture;for(let xe=0,Ce=fe.length;xe<Ce;xe++){let ze=fe[xe],ne=n.get(ze);t.bindTexture(s.TEXTURE_2D,ne.__webglTexture),V(s.TEXTURE_2D,ze,Ee),ge(F.__webglFramebuffer,S,ze,s.COLOR_ATTACHMENT0+xe,s.TEXTURE_2D,0),E(ze,Ee)&&v(s.TEXTURE_2D)}t.unbindTexture()}else{let fe=s.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(o?fe=S.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(fe,ie.__webglTexture),V(fe,x,Ee),o&&x.mipmaps&&x.mipmaps.length>0)for(let xe=0;xe<x.mipmaps.length;xe++)ge(F.__webglFramebuffer[xe],S,x,s.COLOR_ATTACHMENT0,fe,xe);else ge(F.__webglFramebuffer,S,x,s.COLOR_ATTACHMENT0,fe,0);E(x,Ee)&&v(fe),t.unbindTexture()}S.depthBuffer&&Se(S)}function he(S){let x=f(S)||o,F=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ie=0,te=F.length;ie<te;ie++){let ee=F[ie];if(E(ee,x)){let Ee=S.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,fe=n.get(ee).__webglTexture;t.bindTexture(Ee,fe),v(Ee),t.unbindTexture()}}}function $(S){if(o&&S.samples>0&&J(S)===!1){let x=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],F=S.width,ie=S.height,te=s.COLOR_BUFFER_BIT,ee=[],Ee=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=n.get(S),xe=S.isWebGLMultipleRenderTargets===!0;if(xe)for(let Ce=0;Ce<x.length;Ce++)t.bindFramebuffer(s.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,fe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let Ce=0;Ce<x.length;Ce++){ee.push(s.COLOR_ATTACHMENT0+Ce),S.depthBuffer&&ee.push(Ee);let ze=fe.__ignoreDepthValues!==void 0?fe.__ignoreDepthValues:!1;if(ze===!1&&(S.depthBuffer&&(te|=s.DEPTH_BUFFER_BIT),S.stencilBuffer&&(te|=s.STENCIL_BUFFER_BIT)),xe&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,fe.__webglColorRenderbuffer[Ce]),ze===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Ee]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Ee])),xe){let ne=n.get(x[Ce]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ne,0)}s.blitFramebuffer(0,0,F,ie,0,0,F,ie,te,s.NEAREST),c&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ee)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),xe)for(let Ce=0;Ce<x.length;Ce++){t.bindFramebuffer(s.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,fe.__webglColorRenderbuffer[Ce]);let ze=n.get(x[Ce]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,fe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,ze,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}}function oe(S){return Math.min(i.maxSamples,S.samples)}function J(S){let x=n.get(S);return o&&S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Te(S){let x=a.render.frame;h.get(S)!==x&&(h.set(S,x),S.update())}function _e(S,x){let F=S.colorSpace,ie=S.format,te=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===Uo||F!==xn&&F!==Ht&&(je.getTransfer(F)===Qe?o===!1?e.has("EXT_sRGB")===!0&&ie===Jt?(S.format=Uo,S.minFilter=kt,S.generateMipmaps=!1):x=hr.sRGBToLinear(x):(ie!==Jt||te!==On)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),x}this.allocateTextureUnit=R,this.resetTextureUnits=j,this.setTexture2D=O,this.setTexture2DArray=q,this.setTexture3D=Y,this.setTextureCube=W,this.rebindTextures=Ne,this.setupRenderTarget=P,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=$,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=J}function xg(s,e,t){let n=t.isWebGL2;function i(r,a=Ht){let o,l=je.getTransfer(a);if(r===On)return s.UNSIGNED_BYTE;if(r===Sc)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Tc)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Kh)return s.BYTE;if(r===jh)return s.SHORT;if(r===ba)return s.UNSIGNED_SHORT;if(r===Ec)return s.INT;if(r===In)return s.UNSIGNED_INT;if(r===Dn)return s.FLOAT;if(r===rs)return n?s.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Qh)return s.ALPHA;if(r===Jt)return s.RGBA;if(r===eu)return s.LUMINANCE;if(r===tu)return s.LUMINANCE_ALPHA;if(r===Qn)return s.DEPTH_COMPONENT;if(r===Fi)return s.DEPTH_STENCIL;if(r===Uo)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===nu)return s.RED;if(r===wc)return s.RED_INTEGER;if(r===iu)return s.RG;if(r===Ac)return s.RG_INTEGER;if(r===Rc)return s.RGBA_INTEGER;if(r===Zr||r===Jr||r===$r||r===Kr)if(l===Qe)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Zr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Jr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===$r)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Kr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Zr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Jr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===$r)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Kr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Za||r===Ja||r===$a||r===Ka)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Za)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ja)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===$a)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ka)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Cc)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===ja||r===Qa)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===ja)return l===Qe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Qa)return l===Qe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===el||r===tl||r===nl||r===il||r===sl||r===rl||r===ol||r===al||r===ll||r===cl||r===hl||r===ul||r===dl||r===fl)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===el)return l===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===tl)return l===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===nl)return l===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===il)return l===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===sl)return l===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===rl)return l===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ol)return l===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===al)return l===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ll)return l===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===cl)return l===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===hl)return l===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ul)return l===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===dl)return l===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===fl)return l===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===jr||r===pl||r===ml)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===jr)return l===Qe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===pl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ml)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===su||r===gl||r===_l||r===vl)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===jr)return o.COMPRESSED_RED_RGTC1_EXT;if(r===gl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===_l)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===vl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===jn?n?s.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}var Ko=class extends Pt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},_t=class extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}},yg={type:"move"},ts=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _t,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _t,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _t,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let _ of e.hand.values()){let f=t.getJointPose(_,n),p=this._getHandJoint(c,_);f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=f.radius),p.visible=f!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&u>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(yg)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new _t;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},jo=class extends an{constructor(e,t){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,m=null,g=null,_=t.getContextAttributes(),f=null,p=null,E=[],v=[],A=new re,D=null,b=new Pt;b.layers.enable(1),b.viewport=new Mt;let w=new Pt;w.layers.enable(2),w.viewport=new Mt;let z=[b,w],M=new Ko;M.layers.enable(1),M.layers.enable(2);let y=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let Q=E[V];return Q===void 0&&(Q=new ts,E[V]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(V){let Q=E[V];return Q===void 0&&(Q=new ts,E[V]=Q),Q.getGripSpace()},this.getHand=function(V){let Q=E[V];return Q===void 0&&(Q=new ts,E[V]=Q),Q.getHandSpace()};function X(V){let Q=v.indexOf(V.inputSource);if(Q===-1)return;let pe=E[Q];pe!==void 0&&(pe.update(V.inputSource,V.frame,c||a),pe.dispatchEvent({type:V.type,data:V.inputSource}))}function j(){i.removeEventListener("select",X),i.removeEventListener("selectstart",X),i.removeEventListener("selectend",X),i.removeEventListener("squeeze",X),i.removeEventListener("squeezestart",X),i.removeEventListener("squeezeend",X),i.removeEventListener("end",j),i.removeEventListener("inputsourceschange",R);for(let V=0;V<E.length;V++){let Q=v[V];Q!==null&&(v[V]=null,E[V].disconnect(Q))}y=null,N=null,e.setRenderTarget(f),m=null,u=null,d=null,i=null,p=null,ce.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(V){if(i=V,i!==null){if(f=e.getRenderTarget(),i.addEventListener("select",X),i.addEventListener("selectstart",X),i.addEventListener("selectend",X),i.addEventListener("squeeze",X),i.addEventListener("squeezestart",X),i.addEventListener("squeezeend",X),i.addEventListener("end",j),i.addEventListener("inputsourceschange",R),_.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(A),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let Q={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(i,t,Q),i.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),p=new yn(m.framebufferWidth,m.framebufferHeight,{format:Jt,type:On,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let Q=null,pe=null,be=null;_.depth&&(be=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=_.stencil?Fi:Qn,pe=_.stencil?jn:In);let ge={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:r};d=new XRWebGLBinding(i,t),u=d.createProjectionLayer(ge),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),p=new yn(u.textureWidth,u.textureHeight,{format:Jt,type:On,depthTexture:new xr(u.textureWidth,u.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});let Le=e.properties.get(p);Le.__ignoreDepthValues=u.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),ce.setContext(i),ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function R(V){for(let Q=0;Q<V.removed.length;Q++){let pe=V.removed[Q],be=v.indexOf(pe);be>=0&&(v[be]=null,E[be].disconnect(pe))}for(let Q=0;Q<V.added.length;Q++){let pe=V.added[Q],be=v.indexOf(pe);if(be===-1){for(let Le=0;Le<E.length;Le++)if(Le>=v.length){v.push(pe),be=Le;break}else if(v[Le]===null){v[Le]=pe,be=Le;break}if(be===-1)break}let ge=E[be];ge&&ge.connect(pe)}}let U=new L,O=new L;function q(V,Q,pe){U.setFromMatrixPosition(Q.matrixWorld),O.setFromMatrixPosition(pe.matrixWorld);let be=U.distanceTo(O),ge=Q.projectionMatrix.elements,Le=pe.projectionMatrix.elements,Ue=ge[14]/(ge[10]-1),Se=ge[14]/(ge[10]+1),Ne=(ge[9]+1)/ge[5],P=(ge[9]-1)/ge[5],he=(ge[8]-1)/ge[0],$=(Le[8]+1)/Le[0],oe=Ue*he,J=Ue*$,Te=be/(-he+$),_e=Te*-he;Q.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(_e),V.translateZ(Te),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();let S=Ue+Te,x=Se+Te,F=oe-_e,ie=J+(be-_e),te=Ne*Se/x*S,ee=P*Se/x*S;V.projectionMatrix.makePerspective(F,ie,te,ee,S,x),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function Y(V,Q){Q===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(Q.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(i===null)return;M.near=w.near=b.near=V.near,M.far=w.far=b.far=V.far,(y!==M.near||N!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),y=M.near,N=M.far);let Q=V.parent,pe=M.cameras;Y(M,Q);for(let be=0;be<pe.length;be++)Y(pe[be],Q);pe.length===2?q(M,b,w):M.projectionMatrix.copy(b.projectionMatrix),W(V,M,Q)};function W(V,Q,pe){pe===null?V.matrix.copy(Q.matrixWorld):(V.matrix.copy(pe.matrixWorld),V.matrix.invert(),V.matrix.multiply(Q.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(Q.projectionMatrix),V.projectionMatrixInverse.copy(Q.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=os*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(V){l=V,u!==null&&(u.fixedFoveation=V),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=V)};let K=null;function Z(V,Q){if(h=Q.getViewerPose(c||a),g=Q,h!==null){let pe=h.views;m!==null&&(e.setRenderTargetFramebuffer(p,m.framebuffer),e.setRenderTarget(p));let be=!1;pe.length!==M.cameras.length&&(M.cameras.length=0,be=!0);for(let ge=0;ge<pe.length;ge++){let Le=pe[ge],Ue=null;if(m!==null)Ue=m.getViewport(Le);else{let Ne=d.getViewSubImage(u,Le);Ue=Ne.viewport,ge===0&&(e.setRenderTargetTextures(p,Ne.colorTexture,u.ignoreDepthValues?void 0:Ne.depthStencilTexture),e.setRenderTarget(p))}let Se=z[ge];Se===void 0&&(Se=new Pt,Se.layers.enable(ge),Se.viewport=new Mt,z[ge]=Se),Se.matrix.fromArray(Le.transform.matrix),Se.matrix.decompose(Se.position,Se.quaternion,Se.scale),Se.projectionMatrix.fromArray(Le.projectionMatrix),Se.projectionMatrixInverse.copy(Se.projectionMatrix).invert(),Se.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),ge===0&&(M.matrix.copy(Se.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),be===!0&&M.cameras.push(Se)}}for(let pe=0;pe<E.length;pe++){let be=v[pe],ge=E[pe];be!==null&&ge!==void 0&&ge.update(be,Q,c||a)}K&&K(V,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}let ce=new Uc;ce.setAnimationLoop(Z),this.setAnimationLoop=function(V){K=V},this.dispose=function(){}}};function Mg(s,e){function t(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function n(f,p){p.color.getRGB(f.fogColor.value,Nc(s)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function i(f,p,E,v,A){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(f,p):p.isMeshToonMaterial?(r(f,p),d(f,p)):p.isMeshPhongMaterial?(r(f,p),h(f,p)):p.isMeshStandardMaterial?(r(f,p),u(f,p),p.isMeshPhysicalMaterial&&m(f,p,A)):p.isMeshMatcapMaterial?(r(f,p),g(f,p)):p.isMeshDepthMaterial?r(f,p):p.isMeshDistanceMaterial?(r(f,p),_(f,p)):p.isMeshNormalMaterial?r(f,p):p.isLineBasicMaterial?(a(f,p),p.isLineDashedMaterial&&o(f,p)):p.isPointsMaterial?l(f,p,E,v):p.isSpriteMaterial?c(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,t(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===Tt&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,t(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===Tt&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,t(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,t(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let E=e.get(p).envMap;if(E&&(f.envMap.value=E,f.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap){f.lightMap.value=p.lightMap;let v=s._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=p.lightMapIntensity*v,t(p.lightMap,f.lightMapTransform)}p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,f.aoMapTransform))}function a(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform))}function o(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function l(f,p,E,v){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*E,f.scale.value=v*.5,p.map&&(f.map.value=p.map,t(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function c(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function h(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function d(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function u(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,f.roughnessMapTransform)),e.get(p).envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function m(f,p,E){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Tt&&f.clearcoatNormalScale.value.negate())),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=E.texture,f.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,p){p.matcap&&(f.matcap.value=p.matcap)}function _(f,p){let E=e.get(p).light;f.referencePosition.value.setFromMatrixPosition(E.matrixWorld),f.nearDistance.value=E.shadow.camera.near,f.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function bg(s,e,t,n){let i={},r={},a=[],o=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(E,v){let A=v.program;n.uniformBlockBinding(E,A)}function c(E,v){let A=i[E.id];A===void 0&&(g(E),A=h(E),i[E.id]=A,E.addEventListener("dispose",f));let D=v.program;n.updateUBOMapping(E,D);let b=e.render.frame;r[E.id]!==b&&(u(E),r[E.id]=b)}function h(E){let v=d();E.__bindingPointIndex=v;let A=s.createBuffer(),D=E.__size,b=E.usage;return s.bindBuffer(s.UNIFORM_BUFFER,A),s.bufferData(s.UNIFORM_BUFFER,D,b),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,A),A}function d(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(E){let v=i[E.id],A=E.uniforms,D=E.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let b=0,w=A.length;b<w;b++){let z=Array.isArray(A[b])?A[b]:[A[b]];for(let M=0,y=z.length;M<y;M++){let N=z[M];if(m(N,b,M,D)===!0){let X=N.__offset,j=Array.isArray(N.value)?N.value:[N.value],R=0;for(let U=0;U<j.length;U++){let O=j[U],q=_(O);typeof O=="number"||typeof O=="boolean"?(N.__data[0]=O,s.bufferSubData(s.UNIFORM_BUFFER,X+R,N.__data)):O.isMatrix3?(N.__data[0]=O.elements[0],N.__data[1]=O.elements[1],N.__data[2]=O.elements[2],N.__data[3]=0,N.__data[4]=O.elements[3],N.__data[5]=O.elements[4],N.__data[6]=O.elements[5],N.__data[7]=0,N.__data[8]=O.elements[6],N.__data[9]=O.elements[7],N.__data[10]=O.elements[8],N.__data[11]=0):(O.toArray(N.__data,R),R+=q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,X,N.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(E,v,A,D){let b=E.value,w=v+"_"+A;if(D[w]===void 0)return typeof b=="number"||typeof b=="boolean"?D[w]=b:D[w]=b.clone(),!0;{let z=D[w];if(typeof b=="number"||typeof b=="boolean"){if(z!==b)return D[w]=b,!0}else if(z.equals(b)===!1)return z.copy(b),!0}return!1}function g(E){let v=E.uniforms,A=0,D=16;for(let w=0,z=v.length;w<z;w++){let M=Array.isArray(v[w])?v[w]:[v[w]];for(let y=0,N=M.length;y<N;y++){let X=M[y],j=Array.isArray(X.value)?X.value:[X.value];for(let R=0,U=j.length;R<U;R++){let O=j[R],q=_(O),Y=A%D;Y!==0&&D-Y<q.boundary&&(A+=D-Y),X.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=A,A+=q.storage}}}let b=A%D;return b>0&&(A+=D-b),E.__size=A,E.__cache={},this}function _(E){let v={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(v.boundary=4,v.storage=4):E.isVector2?(v.boundary=8,v.storage=8):E.isVector3||E.isColor?(v.boundary=16,v.storage=12):E.isVector4?(v.boundary=16,v.storage=16):E.isMatrix3?(v.boundary=48,v.storage=48):E.isMatrix4?(v.boundary=64,v.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),v}function f(E){let v=E.target;v.removeEventListener("dispose",f);let A=a.indexOf(v.__bindingPointIndex);a.splice(A,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function p(){for(let E in i)s.deleteBuffer(i[E]);a=[],i={},r={}}return{bind:l,update:c,dispose:p}}var cs=class{constructor(e={}){let{canvas:t=Pu(),context:n=null,depth:i=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let u;n!==null?u=n.getContextAttributes().alpha:u=a;let m=new Uint32Array(4),g=new Int32Array(4),_=null,f=null,p=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=yt,this._useLegacyLights=!1,this.toneMapping=Un,this.toneMappingExposure=1;let v=this,A=!1,D=0,b=0,w=null,z=-1,M=null,y=new Mt,N=new Mt,X=null,j=new Be(0),R=0,U=t.width,O=t.height,q=1,Y=null,W=null,K=new Mt(0,0,U,O),Z=new Mt(0,0,U,O),ce=!1,V=new ki,Q=!1,pe=!1,be=null,ge=new lt,Le=new re,Ue=new L,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ne(){return w===null?q:1}let P=n;function he(T,B){for(let H=0;H<T.length;H++){let G=T[H],k=t.getContext(G,B);if(k!==null)return k}return null}try{let T={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ma}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",I,!1),t.addEventListener("webglcontextcreationerror",le,!1),P===null){let B=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&B.shift(),P=he(B,T),P===null)throw he(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&P instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),P.getShaderPrecisionFormat===void 0&&(P.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let $,oe,J,Te,_e,S,x,F,ie,te,ee,Ee,fe,xe,Ce,ze,ne,Je,Ge,Oe,Re,ve,C,ae;function we(){$=new Hp(P),oe=new Up(P,$,e),$.init(oe),ve=new xg(P,$,oe),J=new _g(P,$,oe),Te=new Wp(P),_e=new rg,S=new vg(P,$,J,_e,oe,ve,Te),x=new Fp(v),F=new kp(v),ie=new Ku(P,oe),C=new Dp(P,$,ie,oe),te=new Vp(P,ie,Te,C),ee=new Zp(P,te,ie,Te),Ge=new qp(P,oe,S),ze=new Op(_e),Ee=new sg(v,x,F,$,oe,C,ze),fe=new Mg(v,_e),xe=new ag,Ce=new fg($,oe),Je=new Ip(v,x,F,J,ee,u,l),ne=new gg(v,ee,oe),ae=new bg(P,Te,oe,J),Oe=new Np(P,$,Te,oe),Re=new Gp(P,$,Te,oe),Te.programs=Ee.programs,v.capabilities=oe,v.extensions=$,v.properties=_e,v.renderLists=xe,v.shadowMap=ne,v.state=J,v.info=Te}we();let Me=new jo(v,P);this.xr=Me,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let T=$.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=$.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(T){T!==void 0&&(q=T,this.setSize(U,O,!1))},this.getSize=function(T){return T.set(U,O)},this.setSize=function(T,B,H=!0){if(Me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=T,O=B,t.width=Math.floor(T*q),t.height=Math.floor(B*q),H===!0&&(t.style.width=T+"px",t.style.height=B+"px"),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(U*q,O*q).floor()},this.setDrawingBufferSize=function(T,B,H){U=T,O=B,q=H,t.width=Math.floor(T*H),t.height=Math.floor(B*H),this.setViewport(0,0,T,B)},this.getCurrentViewport=function(T){return T.copy(y)},this.getViewport=function(T){return T.copy(K)},this.setViewport=function(T,B,H,G){T.isVector4?K.set(T.x,T.y,T.z,T.w):K.set(T,B,H,G),J.viewport(y.copy(K).multiplyScalar(q).floor())},this.getScissor=function(T){return T.copy(Z)},this.setScissor=function(T,B,H,G){T.isVector4?Z.set(T.x,T.y,T.z,T.w):Z.set(T,B,H,G),J.scissor(N.copy(Z).multiplyScalar(q).floor())},this.getScissorTest=function(){return ce},this.setScissorTest=function(T){J.setScissorTest(ce=T)},this.setOpaqueSort=function(T){Y=T},this.setTransparentSort=function(T){W=T},this.getClearColor=function(T){return T.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor.apply(Je,arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha.apply(Je,arguments)},this.clear=function(T=!0,B=!0,H=!0){let G=0;if(T){let k=!1;if(w!==null){let ye=w.texture.format;k=ye===Rc||ye===Ac||ye===wc}if(k){let ye=w.texture.type,Ae=ye===On||ye===In||ye===ba||ye===jn||ye===Sc||ye===Tc,De=Je.getClearColor(),Fe=Je.getClearAlpha(),We=De.r,ke=De.g,He=De.b;Ae?(m[0]=We,m[1]=ke,m[2]=He,m[3]=Fe,P.clearBufferuiv(P.COLOR,0,m)):(g[0]=We,g[1]=ke,g[2]=He,g[3]=Fe,P.clearBufferiv(P.COLOR,0,g))}else G|=P.COLOR_BUFFER_BIT}B&&(G|=P.DEPTH_BUFFER_BIT),H&&(G|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",I,!1),t.removeEventListener("webglcontextcreationerror",le,!1),xe.dispose(),Ce.dispose(),_e.dispose(),x.dispose(),F.dispose(),ee.dispose(),C.dispose(),ae.dispose(),Ee.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",ot),Me.removeEventListener("sessionend",$e),be&&(be.dispose(),be=null),ct.stop()};function se(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let T=Te.autoReset,B=ne.enabled,H=ne.autoUpdate,G=ne.needsUpdate,k=ne.type;we(),Te.autoReset=T,ne.enabled=B,ne.autoUpdate=H,ne.needsUpdate=G,ne.type=k}function le(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function me(T){let B=T.target;B.removeEventListener("dispose",me),Ie(B)}function Ie(T){Pe(T),_e.remove(T)}function Pe(T){let B=_e.get(T).programs;B!==void 0&&(B.forEach(function(H){Ee.releaseProgram(H)}),T.isShaderMaterial&&Ee.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,H,G,k,ye){B===null&&(B=Se);let Ae=k.isMesh&&k.matrixWorld.determinant()<0,De=rh(T,B,H,G,k);J.setMaterial(G,Ae);let Fe=H.index,We=1;if(G.wireframe===!0){if(Fe=te.getWireframeAttribute(H),Fe===void 0)return;We=2}let ke=H.drawRange,He=H.attributes.position,at=ke.start*We,It=(ke.start+ke.count)*We;ye!==null&&(at=Math.max(at,ye.start*We),It=Math.min(It,(ye.start+ye.count)*We)),Fe!==null?(at=Math.max(at,0),It=Math.min(It,Fe.count)):He!=null&&(at=Math.max(at,0),It=Math.min(It,He.count));let pt=It-at;if(pt<0||pt===1/0)return;C.setup(k,G,De,H,Fe);let un,nt=Oe;if(Fe!==null&&(un=ie.get(Fe),nt=Re,nt.setIndex(un)),k.isMesh)G.wireframe===!0?(J.setLineWidth(G.wireframeLinewidth*Ne()),nt.setMode(P.LINES)):nt.setMode(P.TRIANGLES);else if(k.isLine){let Xe=G.linewidth;Xe===void 0&&(Xe=1),J.setLineWidth(Xe*Ne()),k.isLineSegments?nt.setMode(P.LINES):k.isLineLoop?nt.setMode(P.LINE_LOOP):nt.setMode(P.LINE_STRIP)}else k.isPoints?nt.setMode(P.POINTS):k.isSprite&&nt.setMode(P.TRIANGLES);if(k.isBatchedMesh)nt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else if(k.isInstancedMesh)nt.renderInstances(at,pt,k.count);else if(H.isInstancedBufferGeometry){let Xe=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Gr=Math.min(H.instanceCount,Xe);nt.renderInstances(at,pt,Gr)}else nt.render(at,pt)};function qe(T,B,H){T.transparent===!0&&T.side===qt&&T.forceSinglePass===!1?(T.side=Tt,T.needsUpdate=!0,Es(T,B,H),T.side=Bn,T.needsUpdate=!0,Es(T,B,H),T.side=qt):Es(T,B,H)}this.compile=function(T,B,H=null){H===null&&(H=T),f=Ce.get(H),f.init(),E.push(f),H.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(f.pushLight(k),k.castShadow&&f.pushShadow(k))}),T!==H&&T.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(f.pushLight(k),k.castShadow&&f.pushShadow(k))}),f.setupLights(v._useLegacyLights);let G=new Set;return T.traverse(function(k){let ye=k.material;if(ye)if(Array.isArray(ye))for(let Ae=0;Ae<ye.length;Ae++){let De=ye[Ae];qe(De,H,k),G.add(De)}else qe(ye,H,k),G.add(ye)}),E.pop(),f=null,G},this.compileAsync=function(T,B,H=null){let G=this.compile(T,B,H);return new Promise(k=>{function ye(){if(G.forEach(function(Ae){_e.get(Ae).currentProgram.isReady()&&G.delete(Ae)}),G.size===0){k(T);return}setTimeout(ye,10)}$.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let Ze=null;function st(T){Ze&&Ze(T)}function ot(){ct.stop()}function $e(){ct.start()}let ct=new Uc;ct.setAnimationLoop(st),typeof self<"u"&&ct.setContext(self),this.setAnimationLoop=function(T){Ze=T,Me.setAnimationLoop(T),T===null?ct.stop():ct.start()},Me.addEventListener("sessionstart",ot),Me.addEventListener("sessionend",$e),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(B),B=Me.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,B,w),f=Ce.get(T,E.length),f.init(),E.push(f),ge.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),V.setFromProjectionMatrix(ge),pe=this.localClippingEnabled,Q=ze.init(this.clippingPlanes,pe),_=xe.get(T,p.length),_.init(),p.push(_),nn(T,B,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(Y,W),this.info.render.frame++,Q===!0&&ze.beginShadows();let H=f.state.shadowsArray;if(ne.render(H,T,B),Q===!0&&ze.endShadows(),this.info.autoReset===!0&&this.info.reset(),Je.render(_,T),f.setupLights(v._useLegacyLights),B.isArrayCamera){let G=B.cameras;for(let k=0,ye=G.length;k<ye;k++){let Ae=G[k];Oa(_,T,Ae,Ae.viewport)}}else Oa(_,T,B);w!==null&&(S.updateMultisampleRenderTarget(w),S.updateRenderTargetMipmap(w)),T.isScene===!0&&T.onAfterRender(v,T,B),C.resetDefaultState(),z=-1,M=null,E.pop(),E.length>0?f=E[E.length-1]:f=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function nn(T,B,H,G){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)H=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)f.pushLight(T),T.castShadow&&f.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||V.intersectsSprite(T)){G&&Ue.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ge);let Ae=ee.update(T),De=T.material;De.visible&&_.push(T,Ae,De,H,Ue.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||V.intersectsObject(T))){let Ae=ee.update(T),De=T.material;if(G&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ue.copy(T.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),Ue.copy(Ae.boundingSphere.center)),Ue.applyMatrix4(T.matrixWorld).applyMatrix4(ge)),Array.isArray(De)){let Fe=Ae.groups;for(let We=0,ke=Fe.length;We<ke;We++){let He=Fe[We],at=De[He.materialIndex];at&&at.visible&&_.push(T,Ae,at,H,Ue.z,He)}}else De.visible&&_.push(T,Ae,De,H,Ue.z,null)}}let ye=T.children;for(let Ae=0,De=ye.length;Ae<De;Ae++)nn(ye[Ae],B,H,G)}function Oa(T,B,H,G){let k=T.opaque,ye=T.transmissive,Ae=T.transparent;f.setupLightsView(H),Q===!0&&ze.setGlobalState(v.clippingPlanes,H),ye.length>0&&sh(k,ye,B,H),G&&J.viewport(y.copy(G)),k.length>0&&bs(k,B,H),ye.length>0&&bs(ye,B,H),Ae.length>0&&bs(Ae,B,H),J.buffers.depth.setTest(!0),J.buffers.depth.setMask(!0),J.buffers.color.setMask(!0),J.setPolygonOffset(!1)}function sh(T,B,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;let ye=oe.isWebGL2;be===null&&(be=new yn(1,1,{generateMipmaps:!0,type:$.has("EXT_color_buffer_half_float")?rs:On,minFilter:ss,samples:ye?4:0})),v.getDrawingBufferSize(Le),ye?be.setSize(Le.x,Le.y):be.setSize(lr(Le.x),lr(Le.y));let Ae=v.getRenderTarget();v.setRenderTarget(be),v.getClearColor(j),R=v.getClearAlpha(),R<1&&v.setClearColor(16777215,.5),v.clear();let De=v.toneMapping;v.toneMapping=Un,bs(T,H,G),S.updateMultisampleRenderTarget(be),S.updateRenderTargetMipmap(be);let Fe=!1;for(let We=0,ke=B.length;We<ke;We++){let He=B[We],at=He.object,It=He.geometry,pt=He.material,un=He.group;if(pt.side===qt&&at.layers.test(G.layers)){let nt=pt.side;pt.side=Tt,pt.needsUpdate=!0,Fa(at,H,G,It,pt,un),pt.side=nt,pt.needsUpdate=!0,Fe=!0}}Fe===!0&&(S.updateMultisampleRenderTarget(be),S.updateRenderTargetMipmap(be)),v.setRenderTarget(Ae),v.setClearColor(j,R),v.toneMapping=De}function bs(T,B,H){let G=B.isScene===!0?B.overrideMaterial:null;for(let k=0,ye=T.length;k<ye;k++){let Ae=T[k],De=Ae.object,Fe=Ae.geometry,We=G===null?Ae.material:G,ke=Ae.group;De.layers.test(H.layers)&&Fa(De,B,H,Fe,We,ke)}}function Fa(T,B,H,G,k,ye){T.onBeforeRender(v,B,H,G,k,ye),T.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),k.onBeforeRender(v,B,H,G,T,ye),k.transparent===!0&&k.side===qt&&k.forceSinglePass===!1?(k.side=Tt,k.needsUpdate=!0,v.renderBufferDirect(H,B,G,k,T,ye),k.side=Bn,k.needsUpdate=!0,v.renderBufferDirect(H,B,G,k,T,ye),k.side=qt):v.renderBufferDirect(H,B,G,k,T,ye),T.onAfterRender(v,B,H,G,k,ye)}function Es(T,B,H){B.isScene!==!0&&(B=Se);let G=_e.get(T),k=f.state.lights,ye=f.state.shadowsArray,Ae=k.state.version,De=Ee.getParameters(T,k.state,ye,B,H),Fe=Ee.getProgramCacheKey(De),We=G.programs;G.environment=T.isMeshStandardMaterial?B.environment:null,G.fog=B.fog,G.envMap=(T.isMeshStandardMaterial?F:x).get(T.envMap||G.environment),We===void 0&&(T.addEventListener("dispose",me),We=new Map,G.programs=We);let ke=We.get(Fe);if(ke!==void 0){if(G.currentProgram===ke&&G.lightsStateVersion===Ae)return za(T,De),ke}else De.uniforms=Ee.getUniforms(T),T.onBuild(H,De,v),T.onBeforeCompile(De,v),ke=Ee.acquireProgram(De,Fe),We.set(Fe,ke),G.uniforms=De.uniforms;let He=G.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(He.clippingPlanes=ze.uniform),za(T,De),G.needsLights=ah(T),G.lightsStateVersion=Ae,G.needsLights&&(He.ambientLightColor.value=k.state.ambient,He.lightProbe.value=k.state.probe,He.directionalLights.value=k.state.directional,He.directionalLightShadows.value=k.state.directionalShadow,He.spotLights.value=k.state.spot,He.spotLightShadows.value=k.state.spotShadow,He.rectAreaLights.value=k.state.rectArea,He.ltc_1.value=k.state.rectAreaLTC1,He.ltc_2.value=k.state.rectAreaLTC2,He.pointLights.value=k.state.point,He.pointLightShadows.value=k.state.pointShadow,He.hemisphereLights.value=k.state.hemi,He.directionalShadowMap.value=k.state.directionalShadowMap,He.directionalShadowMatrix.value=k.state.directionalShadowMatrix,He.spotShadowMap.value=k.state.spotShadowMap,He.spotLightMatrix.value=k.state.spotLightMatrix,He.spotLightMap.value=k.state.spotLightMap,He.pointShadowMap.value=k.state.pointShadowMap,He.pointShadowMatrix.value=k.state.pointShadowMatrix),G.currentProgram=ke,G.uniformsList=null,ke}function Ba(T){if(T.uniformsList===null){let B=T.currentProgram.getUniforms();T.uniformsList=Ni.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function za(T,B){let H=_e.get(T);H.outputColorSpace=B.outputColorSpace,H.batching=B.batching,H.instancing=B.instancing,H.instancingColor=B.instancingColor,H.skinning=B.skinning,H.morphTargets=B.morphTargets,H.morphNormals=B.morphNormals,H.morphColors=B.morphColors,H.morphTargetsCount=B.morphTargetsCount,H.numClippingPlanes=B.numClippingPlanes,H.numIntersection=B.numClipIntersection,H.vertexAlphas=B.vertexAlphas,H.vertexTangents=B.vertexTangents,H.toneMapping=B.toneMapping}function rh(T,B,H,G,k){B.isScene!==!0&&(B=Se),S.resetTextureUnits();let ye=B.fog,Ae=G.isMeshStandardMaterial?B.environment:null,De=w===null?v.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:xn,Fe=(G.isMeshStandardMaterial?F:x).get(G.envMap||Ae),We=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,ke=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),He=!!H.morphAttributes.position,at=!!H.morphAttributes.normal,It=!!H.morphAttributes.color,pt=Un;G.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(pt=v.toneMapping);let un=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,nt=un!==void 0?un.length:0,Xe=_e.get(G),Gr=f.state.lights;if(Q===!0&&(pe===!0||T!==M)){let Bt=T===M&&G.id===z;ze.setState(G,T,Bt)}let rt=!1;G.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==Gr.state.version||Xe.outputColorSpace!==De||k.isBatchedMesh&&Xe.batching===!1||!k.isBatchedMesh&&Xe.batching===!0||k.isInstancedMesh&&Xe.instancing===!1||!k.isInstancedMesh&&Xe.instancing===!0||k.isSkinnedMesh&&Xe.skinning===!1||!k.isSkinnedMesh&&Xe.skinning===!0||k.isInstancedMesh&&Xe.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Xe.instancingColor===!1&&k.instanceColor!==null||Xe.envMap!==Fe||G.fog===!0&&Xe.fog!==ye||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==ze.numPlanes||Xe.numIntersection!==ze.numIntersection)||Xe.vertexAlphas!==We||Xe.vertexTangents!==ke||Xe.morphTargets!==He||Xe.morphNormals!==at||Xe.morphColors!==It||Xe.toneMapping!==pt||oe.isWebGL2===!0&&Xe.morphTargetsCount!==nt)&&(rt=!0):(rt=!0,Xe.__version=G.version);let Vn=Xe.currentProgram;rt===!0&&(Vn=Es(G,B,k));let ka=!1,Wi=!1,Wr=!1,bt=Vn.getUniforms(),Gn=Xe.uniforms;if(J.useProgram(Vn.program)&&(ka=!0,Wi=!0,Wr=!0),G.id!==z&&(z=G.id,Wi=!0),ka||M!==T){bt.setValue(P,"projectionMatrix",T.projectionMatrix),bt.setValue(P,"viewMatrix",T.matrixWorldInverse);let Bt=bt.map.cameraPosition;Bt!==void 0&&Bt.setValue(P,Ue.setFromMatrixPosition(T.matrixWorld)),oe.logarithmicDepthBuffer&&bt.setValue(P,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&bt.setValue(P,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,Wi=!0,Wr=!0)}if(k.isSkinnedMesh){bt.setOptional(P,k,"bindMatrix"),bt.setOptional(P,k,"bindMatrixInverse");let Bt=k.skeleton;Bt&&(oe.floatVertexTextures?(Bt.boneTexture===null&&Bt.computeBoneTexture(),bt.setValue(P,"boneTexture",Bt.boneTexture,S)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}k.isBatchedMesh&&(bt.setOptional(P,k,"batchingTexture"),bt.setValue(P,"batchingTexture",k._matricesTexture,S));let Xr=H.morphAttributes;if((Xr.position!==void 0||Xr.normal!==void 0||Xr.color!==void 0&&oe.isWebGL2===!0)&&Ge.update(k,H,Vn),(Wi||Xe.receiveShadow!==k.receiveShadow)&&(Xe.receiveShadow=k.receiveShadow,bt.setValue(P,"receiveShadow",k.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Gn.envMap.value=Fe,Gn.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),Wi&&(bt.setValue(P,"toneMappingExposure",v.toneMappingExposure),Xe.needsLights&&oh(Gn,Wr),ye&&G.fog===!0&&fe.refreshFogUniforms(Gn,ye),fe.refreshMaterialUniforms(Gn,G,q,O,be),Ni.upload(P,Ba(Xe),Gn,S)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ni.upload(P,Ba(Xe),Gn,S),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&bt.setValue(P,"center",k.center),bt.setValue(P,"modelViewMatrix",k.modelViewMatrix),bt.setValue(P,"normalMatrix",k.normalMatrix),bt.setValue(P,"modelMatrix",k.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let Bt=G.uniformsGroups;for(let Yr=0,lh=Bt.length;Yr<lh;Yr++)if(oe.isWebGL2){let Ha=Bt[Yr];ae.update(Ha,Vn),ae.bind(Ha,Vn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Vn}function oh(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function ah(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(T,B,H){_e.get(T.texture).__webglTexture=B,_e.get(T.depthTexture).__webglTexture=H;let G=_e.get(T);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=H===void 0,G.__autoAllocateDepthBuffer||$.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,B){let H=_e.get(T);H.__webglFramebuffer=B,H.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(T,B=0,H=0){w=T,D=B,b=H;let G=!0,k=null,ye=!1,Ae=!1;if(T){let Fe=_e.get(T);Fe.__useDefaultFramebuffer!==void 0?(J.bindFramebuffer(P.FRAMEBUFFER,null),G=!1):Fe.__webglFramebuffer===void 0?S.setupRenderTarget(T):Fe.__hasExternalTextures&&S.rebindTextures(T,_e.get(T.texture).__webglTexture,_e.get(T.depthTexture).__webglTexture);let We=T.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Ae=!0);let ke=_e.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(ke[B])?k=ke[B][H]:k=ke[B],ye=!0):oe.isWebGL2&&T.samples>0&&S.useMultisampledRTT(T)===!1?k=_e.get(T).__webglMultisampledFramebuffer:Array.isArray(ke)?k=ke[H]:k=ke,y.copy(T.viewport),N.copy(T.scissor),X=T.scissorTest}else y.copy(K).multiplyScalar(q).floor(),N.copy(Z).multiplyScalar(q).floor(),X=ce;if(J.bindFramebuffer(P.FRAMEBUFFER,k)&&oe.drawBuffers&&G&&J.drawBuffers(T,k),J.viewport(y),J.scissor(N),J.setScissorTest(X),ye){let Fe=_e.get(T.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+B,Fe.__webglTexture,H)}else if(Ae){let Fe=_e.get(T.texture),We=B||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Fe.__webglTexture,H||0,We)}z=-1},this.readRenderTargetPixels=function(T,B,H,G,k,ye,Ae){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=_e.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ae!==void 0&&(De=De[Ae]),De){J.bindFramebuffer(P.FRAMEBUFFER,De);try{let Fe=T.texture,We=Fe.format,ke=Fe.type;if(We!==Jt&&ve.convert(We)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let He=ke===rs&&($.has("EXT_color_buffer_half_float")||oe.isWebGL2&&$.has("EXT_color_buffer_float"));if(ke!==On&&ve.convert(ke)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ke===Dn&&(oe.isWebGL2||$.has("OES_texture_float")||$.has("WEBGL_color_buffer_float")))&&!He){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-G&&H>=0&&H<=T.height-k&&P.readPixels(B,H,G,k,ve.convert(We),ve.convert(ke),ye)}finally{let Fe=w!==null?_e.get(w).__webglFramebuffer:null;J.bindFramebuffer(P.FRAMEBUFFER,Fe)}}},this.copyFramebufferToTexture=function(T,B,H=0){let G=Math.pow(2,-H),k=Math.floor(B.image.width*G),ye=Math.floor(B.image.height*G);S.setTexture2D(B,0),P.copyTexSubImage2D(P.TEXTURE_2D,H,0,0,T.x,T.y,k,ye),J.unbindTexture()},this.copyTextureToTexture=function(T,B,H,G=0){let k=B.image.width,ye=B.image.height,Ae=ve.convert(H.format),De=ve.convert(H.type);S.setTexture2D(H,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,H.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,H.unpackAlignment),B.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,G,T.x,T.y,k,ye,Ae,De,B.image.data):B.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,G,T.x,T.y,B.mipmaps[0].width,B.mipmaps[0].height,Ae,B.mipmaps[0].data):P.texSubImage2D(P.TEXTURE_2D,G,T.x,T.y,Ae,De,B.image),G===0&&H.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),J.unbindTexture()},this.copyTextureToTexture3D=function(T,B,H,G,k=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let ye=T.max.x-T.min.x+1,Ae=T.max.y-T.min.y+1,De=T.max.z-T.min.z+1,Fe=ve.convert(G.format),We=ve.convert(G.type),ke;if(G.isData3DTexture)S.setTexture3D(G,0),ke=P.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)S.setTexture2DArray(G,0),ke=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,G.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,G.unpackAlignment);let He=P.getParameter(P.UNPACK_ROW_LENGTH),at=P.getParameter(P.UNPACK_IMAGE_HEIGHT),It=P.getParameter(P.UNPACK_SKIP_PIXELS),pt=P.getParameter(P.UNPACK_SKIP_ROWS),un=P.getParameter(P.UNPACK_SKIP_IMAGES),nt=H.isCompressedTexture?H.mipmaps[k]:H.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,nt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,nt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,T.min.x),P.pixelStorei(P.UNPACK_SKIP_ROWS,T.min.y),P.pixelStorei(P.UNPACK_SKIP_IMAGES,T.min.z),H.isDataTexture||H.isData3DTexture?P.texSubImage3D(ke,k,B.x,B.y,B.z,ye,Ae,De,Fe,We,nt.data):H.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),P.compressedTexSubImage3D(ke,k,B.x,B.y,B.z,ye,Ae,De,Fe,nt.data)):P.texSubImage3D(ke,k,B.x,B.y,B.z,ye,Ae,De,Fe,We,nt),P.pixelStorei(P.UNPACK_ROW_LENGTH,He),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,at),P.pixelStorei(P.UNPACK_SKIP_PIXELS,It),P.pixelStorei(P.UNPACK_SKIP_ROWS,pt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,un),k===0&&G.generateMipmaps&&P.generateMipmap(ke),J.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?S.setTextureCube(T,0):T.isData3DTexture?S.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?S.setTexture2DArray(T,0):S.setTexture2D(T,0),J.unbindTexture()},this.resetState=function(){D=0,b=0,w=null,J.reset(),C.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Ea?"display-p3":"srgb",t.unpackColorSpace=je.workingColorSpace===Ir?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===yt?ei:Pc}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ei?yt:xn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Qo=class extends cs{};Qo.prototype.isWebGL1Renderer=!0;var yr=class s{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Be(e),this.near=t,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Mr=class extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},ea=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=No,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=on()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=on()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=on()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},At=new L,br=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}setX(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=rn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=rn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=rn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=rn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),i=Ke(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),i=Ke(i,this.array),r=Ke(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new vt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Kt=class extends kn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},wi,Ji=new L,Ai=new L,Ri=new L,Ci=new re,$i=new re,Hc=new lt,qs=new L,Ki=new L,Zs=new L,lc=new re,Eo=new re,cc=new re,bn=class extends Ft{constructor(e=new Kt){if(super(),this.isSprite=!0,this.type="Sprite",wi===void 0){wi=new xt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ea(t,5);wi.setIndex([0,1,2,0,2,3]),wi.setAttribute("position",new br(n,3,0,!1)),wi.setAttribute("uv",new br(n,2,3,!1))}this.geometry=wi,this.material=e,this.center=new re(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ai.setFromMatrixScale(this.matrixWorld),Hc.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ri.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ai.multiplyScalar(-Ri.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let a=this.center;Js(qs.set(-.5,-.5,0),Ri,a,Ai,i,r),Js(Ki.set(.5,-.5,0),Ri,a,Ai,i,r),Js(Zs.set(.5,.5,0),Ri,a,Ai,i,r),lc.set(0,0),Eo.set(1,0),cc.set(1,1);let o=e.ray.intersectTriangle(qs,Ki,Zs,!1,Ji);if(o===null&&(Js(Ki.set(-.5,.5,0),Ri,a,Ai,i,r),Eo.set(0,1),o=e.ray.intersectTriangle(qs,Zs,Ki,!1,Ji),o===null))return;let l=e.ray.origin.distanceTo(Ji);l<e.near||l>e.far||t.push({distance:l,point:Ji.clone(),uv:Kn.getInterpolation(Ji,qs,Ki,Zs,lc,Eo,cc,new re),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Js(s,e,t,n,i,r){Ci.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?($i.x=r*Ci.x-i*Ci.y,$i.y=i*Ci.x+r*Ci.y):$i.copy(Ci),s.copy(e),s.x+=$i.x,s.y+=$i.y,s.applyMatrix4(Hc)}var ln=class extends kn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},hc=new L,uc=new L,dc=new lt,So=new ni,$s=new Bi,En=class extends Ft{constructor(e=new xt,t=new ln){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)hc.fromBufferAttribute(t,i-1),uc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=hc.distanceTo(uc);e.setAttribute("lineDistance",new wt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$s.copy(n.boundingSphere),$s.applyMatrix4(i),$s.radius+=r,e.ray.intersectsSphere($s)===!1)return;dc.copy(i).invert(),So.copy(e.ray).applyMatrix4(dc);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new L,h=new L,d=new L,u=new L,m=this.isLineSegments?2:1,g=n.index,f=n.attributes.position;if(g!==null){let p=Math.max(0,a.start),E=Math.min(g.count,a.start+a.count);for(let v=p,A=E-1;v<A;v+=m){let D=g.getX(v),b=g.getX(v+1);if(c.fromBufferAttribute(f,D),h.fromBufferAttribute(f,b),So.distanceSqToSegment(c,h,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);let z=e.ray.origin.distanceTo(u);z<e.near||z>e.far||t.push({distance:z,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,a.start),E=Math.min(f.count,a.start+a.count);for(let v=p,A=E-1;v<A;v+=m){if(c.fromBufferAttribute(f,v),h.fromBufferAttribute(f,v+1),So.distanceSqToSegment(c,h,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);let b=e.ray.origin.distanceTo(u);b<e.near||b>e.far||t.push({distance:b,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}},fc=new L,pc=new L,Er=class extends En{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)fc.fromBufferAttribute(t,i),pc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+fc.distanceTo(pc);e.setAttribute("lineDistance",new wt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Sn=class extends Vt{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Gt=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);let h=n[i],u=n[i+1]-h,m=(a-h)/u;return(i+m)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),o=this.getPoint(r),l=t||(a.isVector2?new re:new L);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new L,i=[],r=[],a=[],o=new L,l=new lt;for(let m=0;m<=e;m++){let g=m/e;i[m]=this.getTangentAt(g,new L)}r[0]=new L,a[0]=new L;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let m=1;m<=e;m++){if(r[m]=r[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(i[m-1],i[m]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(gt(i[m-1].dot(i[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(o,g))}a[m].crossVectors(i[m],r[m])}if(t===!0){let m=Math.acos(gt(r[0].dot(r[e]),-1,1));m/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(m=-m);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],m*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},hs=class extends Gt{constructor(e=0,t=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){let n=t||new re,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,m=c-this.aY;l=u*h-m*d+this.aX,c=u*d+m*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ta=class extends hs{constructor(e,t,n,i,r,a){super(e,t,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function wa(){let s=0,e=0,t=0,n=0;function i(r,a,o,l){s=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,m=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,m*=h,i(a,o,u,m)},calc:function(r){let a=r*r,o=a*r;return s+e*r+t*a+n*o}}}var Ks=new L,To=new wa,wo=new wa,Ao=new wa,na=class extends Gt{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new L){let n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(Ks.subVectors(i[0],i[1]).add(i[0]),c=Ks);let d=i[o%r],u=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(Ks.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Ks),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),m),_=Math.pow(d.distanceToSquared(u),m),f=Math.pow(u.distanceToSquared(h),m);_<1e-4&&(_=1),g<1e-4&&(g=_),f<1e-4&&(f=_),To.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,_,f),wo.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,_,f),Ao.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,_,f)}else this.curveType==="catmullrom"&&(To.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),wo.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Ao.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(To.calc(l),wo.calc(l),Ao.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new L().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function mc(s,e,t,n,i){let r=(n-e)*.5,a=(i-t)*.5,o=s*s,l=s*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*s+t}function Eg(s,e){let t=1-s;return t*t*e}function Sg(s,e){return 2*(1-s)*s*e}function Tg(s,e){return s*s*e}function ns(s,e,t,n){return Eg(s,e)+Sg(s,t)+Tg(s,n)}function wg(s,e){let t=1-s;return t*t*t*e}function Ag(s,e){let t=1-s;return 3*t*t*s*e}function Rg(s,e){return 3*(1-s)*s*s*e}function Cg(s,e){return s*s*s*e}function is(s,e,t,n,i){return wg(s,e)+Ag(s,t)+Rg(s,n)+Cg(s,i)}var Sr=class extends Gt{constructor(e=new re,t=new re,n=new re,i=new re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new re){let n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(is(e,i.x,r.x,a.x,o.x),is(e,i.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ia=class extends Gt{constructor(e=new L,t=new L,n=new L,i=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new L){let n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(is(e,i.x,r.x,a.x,o.x),is(e,i.y,r.y,a.y,o.y),is(e,i.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Tr=class extends Gt{constructor(e=new re,t=new re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new re){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},sa=class extends Gt{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},wr=class extends Gt{constructor(e=new re,t=new re,n=new re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new re){let n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(ns(e,i.x,r.x,a.x),ns(e,i.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ra=class extends Gt{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){let n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(ns(e,i.x,r.x,a.x),ns(e,i.y,r.y,a.y),ns(e,i.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ar=class extends Gt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new re){let n=t,i=this.points,r=(i.length-1)*e,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],d=i[a>i.length-3?i.length-1:a+2];return n.set(mc(o,l.x,c.x,h.x,d.x),mc(o,l.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new re().fromArray(i))}return this}},oa=Object.freeze({__proto__:null,ArcCurve:ta,CatmullRomCurve3:na,CubicBezierCurve:Sr,CubicBezierCurve3:ia,EllipseCurve:hs,LineCurve:Tr,LineCurve3:sa,QuadraticBezierCurve:wr,QuadraticBezierCurve3:ra,SplineCurve:Ar}),aa=class extends Gt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new oa[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,r=this.curves;i<r.length;i++){let a=r[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new oa[i.type]().fromJSON(i))}return this}},Rr=class extends aa{constructor(e){super(),this.type="Path",this.currentPoint=new re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Tr(this.currentPoint.clone(),new re(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let r=new wr(this.currentPoint.clone(),new re(e,t),new re(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,a){let o=new Sr(this.currentPoint.clone(),new re(e,t),new re(n,i),new re(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Ar(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,r,a),this}absarc(e,t,n,i,r,a){return this.absellipse(e,t,n,n,i,r,a),this}ellipse(e,t,n,i,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,r,a,o,l),this}absellipse(e,t,n,i,r,a,o,l){let c=new hs(e,t,n,i,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var Hi=class extends Rr{constructor(e){super(e),this.uuid=on(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new Rr().fromJSON(i))}return this}},Pg={triangulate:function(s,e,t=2){let n=e&&e.length,i=n?e[0]*t:s.length,r=Vc(s,0,i,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,d,u,m;if(n&&(r=Ug(s,e,r,t)),s.length>80*t){o=c=s[0],l=h=s[1];for(let g=t;g<i;g+=t)d=s[g],u=s[g+1],d<o&&(o=d),u<l&&(l=u),d>c&&(c=d),u>h&&(h=u);m=Math.max(c-o,h-l),m=m!==0?32767/m:0}return us(r,a,t,o,l,m,0),a}};function Vc(s,e,t,n,i){let r,a;if(i===Yg(s,e,t,n)>0)for(r=e;r<t;r+=n)a=gc(r,s[r],s[r+1],a);else for(r=t-n;r>=e;r-=n)a=gc(r,s[r],s[r+1],a);return a&&Nr(a,a.next)&&(fs(a),a=a.next),a}function si(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Nr(t,t.next)||it(t.prev,t,t.next)===0)){if(fs(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function us(s,e,t,n,i,r,a){if(!s)return;!a&&r&&kg(s,n,i,r);let o=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?Ig(s,n,i,r):Lg(s)){e.push(l.i/t|0),e.push(s.i/t|0),e.push(c.i/t|0),fs(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=Dg(si(s),e,t),us(s,e,t,n,i,r,2)):a===2&&Ng(s,e,t,n,i,r):us(si(s),e,t,n,i,r,1);break}}}function Lg(s){let e=s.prev,t=s,n=s.next;if(it(e,t,n)>=0)return!1;let i=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=i<r?i<a?i:a:r<a?r:a,d=o<l?o<c?o:c:l<c?l:c,u=i>r?i>a?i:a:r>a?r:a,m=o>l?o>c?o:c:l>c?l:c,g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=m&&Ii(i,o,r,l,a,c,g.x,g.y)&&it(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Ig(s,e,t,n){let i=s.prev,r=s,a=s.next;if(it(i,r,a)>=0)return!1;let o=i.x,l=r.x,c=a.x,h=i.y,d=r.y,u=a.y,m=o<l?o<c?o:c:l<c?l:c,g=h<d?h<u?h:u:d<u?d:u,_=o>l?o>c?o:c:l>c?l:c,f=h>d?h>u?h:u:d>u?d:u,p=la(m,g,e,t,n),E=la(_,f,e,t,n),v=s.prevZ,A=s.nextZ;for(;v&&v.z>=p&&A&&A.z<=E;){if(v.x>=m&&v.x<=_&&v.y>=g&&v.y<=f&&v!==i&&v!==a&&Ii(o,h,l,d,c,u,v.x,v.y)&&it(v.prev,v,v.next)>=0||(v=v.prevZ,A.x>=m&&A.x<=_&&A.y>=g&&A.y<=f&&A!==i&&A!==a&&Ii(o,h,l,d,c,u,A.x,A.y)&&it(A.prev,A,A.next)>=0))return!1;A=A.nextZ}for(;v&&v.z>=p;){if(v.x>=m&&v.x<=_&&v.y>=g&&v.y<=f&&v!==i&&v!==a&&Ii(o,h,l,d,c,u,v.x,v.y)&&it(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;A&&A.z<=E;){if(A.x>=m&&A.x<=_&&A.y>=g&&A.y<=f&&A!==i&&A!==a&&Ii(o,h,l,d,c,u,A.x,A.y)&&it(A.prev,A,A.next)>=0)return!1;A=A.nextZ}return!0}function Dg(s,e,t){let n=s;do{let i=n.prev,r=n.next.next;!Nr(i,r)&&Gc(i,n,n.next,r)&&ds(i,r)&&ds(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),fs(n),fs(n.next),n=s=r),n=n.next}while(n!==s);return si(n)}function Ng(s,e,t,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Gg(a,o)){let l=Wc(a,o);a=si(a,a.next),l=si(l,l.next),us(a,e,t,n,i,r,0),us(l,e,t,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function Ug(s,e,t,n){let i=[],r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:s.length,c=Vc(s,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(Vg(c));for(i.sort(Og),r=0;r<i.length;r++)t=Fg(i[r],t);return t}function Og(s,e){return s.x-e.x}function Fg(s,e){let t=Bg(s,e);if(!t)return e;let n=Wc(t,s);return si(n,n.next),si(t,t.next)}function Bg(s,e){let t=e,n=-1/0,i,r=s.x,a=s.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){let u=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=r&&u>n&&(n=u,i=t.x<t.next.x?t:t.next,u===r))return i}t=t.next}while(t!==e);if(!i)return null;let o=i,l=i.x,c=i.y,h=1/0,d;t=i;do r>=t.x&&t.x>=l&&r!==t.x&&Ii(a<c?r:n,a,l,c,a<c?n:r,a,t.x,t.y)&&(d=Math.abs(a-t.y)/(r-t.x),ds(t,s)&&(d<h||d===h&&(t.x>i.x||t.x===i.x&&zg(i,t)))&&(i=t,h=d)),t=t.next;while(t!==o);return i}function zg(s,e){return it(s.prev,s,e.prev)<0&&it(e.next,s,s.next)<0}function kg(s,e,t,n){let i=s;do i.z===0&&(i.z=la(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Hg(i)}function Hg(s){let e,t,n,i,r,a,o,l,c=1;do{for(t=s,s=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,o--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,c*=2}while(a>1);return s}function la(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function Vg(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Ii(s,e,t,n,i,r,a,o){return(i-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(i-a)*(n-o)}function Gg(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!Wg(s,e)&&(ds(s,e)&&ds(e,s)&&Xg(s,e)&&(it(s.prev,s,e.prev)||it(s,e.prev,e))||Nr(s,e)&&it(s.prev,s,s.next)>0&&it(e.prev,e,e.next)>0)}function it(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Nr(s,e){return s.x===e.x&&s.y===e.y}function Gc(s,e,t,n){let i=Qs(it(s,e,t)),r=Qs(it(s,e,n)),a=Qs(it(t,n,s)),o=Qs(it(t,n,e));return!!(i!==r&&a!==o||i===0&&js(s,t,e)||r===0&&js(s,n,e)||a===0&&js(t,s,n)||o===0&&js(t,e,n))}function js(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Qs(s){return s>0?1:s<0?-1:0}function Wg(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Gc(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function ds(s,e){return it(s.prev,s,s.next)<0?it(s,e,s.next)>=0&&it(s,s.prev,e)>=0:it(s,e,s.prev)<0||it(s,s.next,e)<0}function Xg(s,e){let t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Wc(s,e){let t=new ca(s.i,s.x,s.y),n=new ca(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function gc(s,e,t,n){let i=new ca(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function fs(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function ca(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Yg(s,e,t,n){let i=0;for(let r=e,a=t-n;r<t;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}var Fn=class s{static area(e){let t=e.length,n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let n=[],i=[],r=[];_c(e),vc(n,e);let a=e.length;t.forEach(_c);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,vc(n,t[l]);let o=Pg.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function _c(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function vc(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var Cr=class s extends xt{constructor(e=new Hi([new re(.5,.5),new re(-.5,.5),new re(-.5,-.5),new re(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new wt(i,3)),this.setAttribute("uv",new wt(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,m=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:m-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,f=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,E=t.UVGenerator!==void 0?t.UVGenerator:qg,v,A=!1,D,b,w,z;p&&(v=p.getSpacedPoints(h),A=!0,u=!1,D=p.computeFrenetFrames(h,!1),b=new L,w=new L,z=new L),u||(f=0,m=0,g=0,_=0);let M=o.extractPoints(c),y=M.shape,N=M.holes;if(!Fn.isClockWise(y)){y=y.reverse();for(let P=0,he=N.length;P<he;P++){let $=N[P];Fn.isClockWise($)&&(N[P]=$.reverse())}}let j=Fn.triangulateShape(y,N),R=y;for(let P=0,he=N.length;P<he;P++){let $=N[P];y=y.concat($)}function U(P,he,$){return he||console.error("THREE.ExtrudeGeometry: vec does not exist"),P.clone().addScaledVector(he,$)}let O=y.length,q=j.length;function Y(P,he,$){let oe,J,Te,_e=P.x-he.x,S=P.y-he.y,x=$.x-P.x,F=$.y-P.y,ie=_e*_e+S*S,te=_e*F-S*x;if(Math.abs(te)>Number.EPSILON){let ee=Math.sqrt(ie),Ee=Math.sqrt(x*x+F*F),fe=he.x-S/ee,xe=he.y+_e/ee,Ce=$.x-F/Ee,ze=$.y+x/Ee,ne=((Ce-fe)*F-(ze-xe)*x)/(_e*F-S*x);oe=fe+_e*ne-P.x,J=xe+S*ne-P.y;let Je=oe*oe+J*J;if(Je<=2)return new re(oe,J);Te=Math.sqrt(Je/2)}else{let ee=!1;_e>Number.EPSILON?x>Number.EPSILON&&(ee=!0):_e<-Number.EPSILON?x<-Number.EPSILON&&(ee=!0):Math.sign(S)===Math.sign(F)&&(ee=!0),ee?(oe=-S,J=_e,Te=Math.sqrt(ie)):(oe=_e,J=S,Te=Math.sqrt(ie/2))}return new re(oe/Te,J/Te)}let W=[];for(let P=0,he=R.length,$=he-1,oe=P+1;P<he;P++,$++,oe++)$===he&&($=0),oe===he&&(oe=0),W[P]=Y(R[P],R[$],R[oe]);let K=[],Z,ce=W.concat();for(let P=0,he=N.length;P<he;P++){let $=N[P];Z=[];for(let oe=0,J=$.length,Te=J-1,_e=oe+1;oe<J;oe++,Te++,_e++)Te===J&&(Te=0),_e===J&&(_e=0),Z[oe]=Y($[oe],$[Te],$[_e]);K.push(Z),ce=ce.concat(Z)}for(let P=0;P<f;P++){let he=P/f,$=m*Math.cos(he*Math.PI/2),oe=g*Math.sin(he*Math.PI/2)+_;for(let J=0,Te=R.length;J<Te;J++){let _e=U(R[J],W[J],oe);ge(_e.x,_e.y,-$)}for(let J=0,Te=N.length;J<Te;J++){let _e=N[J];Z=K[J];for(let S=0,x=_e.length;S<x;S++){let F=U(_e[S],Z[S],oe);ge(F.x,F.y,-$)}}}let V=g+_;for(let P=0;P<O;P++){let he=u?U(y[P],ce[P],V):y[P];A?(w.copy(D.normals[0]).multiplyScalar(he.x),b.copy(D.binormals[0]).multiplyScalar(he.y),z.copy(v[0]).add(w).add(b),ge(z.x,z.y,z.z)):ge(he.x,he.y,0)}for(let P=1;P<=h;P++)for(let he=0;he<O;he++){let $=u?U(y[he],ce[he],V):y[he];A?(w.copy(D.normals[P]).multiplyScalar($.x),b.copy(D.binormals[P]).multiplyScalar($.y),z.copy(v[P]).add(w).add(b),ge(z.x,z.y,z.z)):ge($.x,$.y,d/h*P)}for(let P=f-1;P>=0;P--){let he=P/f,$=m*Math.cos(he*Math.PI/2),oe=g*Math.sin(he*Math.PI/2)+_;for(let J=0,Te=R.length;J<Te;J++){let _e=U(R[J],W[J],oe);ge(_e.x,_e.y,d+$)}for(let J=0,Te=N.length;J<Te;J++){let _e=N[J];Z=K[J];for(let S=0,x=_e.length;S<x;S++){let F=U(_e[S],Z[S],oe);A?ge(F.x,F.y+v[h-1].y,v[h-1].x+$):ge(F.x,F.y,d+$)}}}Q(),pe();function Q(){let P=i.length/3;if(u){let he=0,$=O*he;for(let oe=0;oe<q;oe++){let J=j[oe];Le(J[2]+$,J[1]+$,J[0]+$)}he=h+f*2,$=O*he;for(let oe=0;oe<q;oe++){let J=j[oe];Le(J[0]+$,J[1]+$,J[2]+$)}}else{for(let he=0;he<q;he++){let $=j[he];Le($[2],$[1],$[0])}for(let he=0;he<q;he++){let $=j[he];Le($[0]+O*h,$[1]+O*h,$[2]+O*h)}}n.addGroup(P,i.length/3-P,0)}function pe(){let P=i.length/3,he=0;be(R,he),he+=R.length;for(let $=0,oe=N.length;$<oe;$++){let J=N[$];be(J,he),he+=J.length}n.addGroup(P,i.length/3-P,1)}function be(P,he){let $=P.length;for(;--$>=0;){let oe=$,J=$-1;J<0&&(J=P.length-1);for(let Te=0,_e=h+f*2;Te<_e;Te++){let S=O*Te,x=O*(Te+1),F=he+oe+S,ie=he+J+S,te=he+J+x,ee=he+oe+x;Ue(F,ie,te,ee)}}}function ge(P,he,$){l.push(P),l.push(he),l.push($)}function Le(P,he,$){Se(P),Se(he),Se($);let oe=i.length/3,J=E.generateTopUV(n,i,oe-3,oe-2,oe-1);Ne(J[0]),Ne(J[1]),Ne(J[2])}function Ue(P,he,$,oe){Se(P),Se(he),Se(oe),Se(he),Se($),Se(oe);let J=i.length/3,Te=E.generateSideWallUV(n,i,J-6,J-3,J-2,J-1);Ne(Te[0]),Ne(Te[1]),Ne(Te[3]),Ne(Te[1]),Ne(Te[2]),Ne(Te[3])}function Se(P){i.push(l[P*3+0]),i.push(l[P*3+1]),i.push(l[P*3+2])}function Ne(P){r.push(P.x),r.push(P.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Zg(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new oa[i.type]().fromJSON(i)),new s(n,e.options)}},qg={generateTopUV:function(s,e,t,n,i){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new re(r,a),new re(o,l),new re(c,h)]},generateSideWallUV:function(s,e,t,n,i,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],d=e[n*3+2],u=e[i*3],m=e[i*3+1],g=e[i*3+2],_=e[r*3],f=e[r*3+1],p=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new re(a,1-l),new re(c,1-d),new re(u,1-g),new re(_,1-p)]:[new re(o,1-l),new re(h,1-d),new re(m,1-g),new re(f,1-p)]}};function Zg(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Pr=class s extends xt{constructor(e=new Hi([new re(0,.5),new re(-.5,-.5),new re(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new wt(i,3)),this.setAttribute("normal",new wt(r,3)),this.setAttribute("uv",new wt(a,2));function c(h){let d=i.length/3,u=h.extractPoints(t),m=u.shape,g=u.holes;Fn.isClockWise(m)===!1&&(m=m.reverse());for(let f=0,p=g.length;f<p;f++){let E=g[f];Fn.isClockWise(E)===!0&&(g[f]=E.reverse())}let _=Fn.triangulateShape(m,g);for(let f=0,p=g.length;f<p;f++){let E=g[f];m=m.concat(E)}for(let f=0,p=m.length;f<p;f++){let E=m[f];i.push(E.x,E.y,0),r.push(0,0,1),a.push(E.x,E.y)}for(let f=0,p=_.length;f<p;f++){let E=_[f],v=E[0]+d,A=E[1]+d,D=E[2]+d;n.push(v,A,D),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Jg(t,e)}static fromJSON(e,t){let n=[];for(let i=0,r=e.shapes.length;i<r;i++){let a=t[e.shapes[i]];n.push(a)}return new s(n,e.curveSegments)}};function Jg(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){let i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}function er(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function $g(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var Vi=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ha=class extends Vi{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:xl,endingEnd:xl}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case yl:r=e,o=2*t-n;break;case Ml:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case yl:a=e,l=2*n-t;break;case Ml:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,m=this._weightNext,g=(n-t)/(i-t),_=g*g,f=_*g,p=-u*f+2*u*_-u*g,E=(1+u)*f+(-1.5-2*u)*_+(-.5+u)*g+1,v=(-1-m)*f+(1.5+m)*_+.5*g,A=m*f-m*_;for(let D=0;D!==o;++D)r[D]=p*a[h+D]+E*a[c+D]+v*a[l+D]+A*a[d+D];return r}},ua=class extends Vi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},da=class extends Vi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},jt=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=er(t,this.TimeBufferType),this.values=er(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:er(e.times,Array),values:er(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new da(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ua(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ha(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case nr:t=this.InterpolantFactoryMethodDiscrete;break;case ir:t=this.InterpolantFactoryMethodLinear;break;case Qr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return nr;case this.InterpolantFactoryMethodLinear:return ir;case this.InterpolantFactoryMethodSmooth:return Qr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&$g(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Qr,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{let d=o*n,u=d-n,m=d+n;for(let g=0;g!==n;++g){let _=t[d+g];if(_!==t[u+g]||_!==t[m+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*n,u=a*n;for(let m=0;m!==n;++m)t[u+m]=t[d+m]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};jt.prototype.TimeBufferType=Float32Array;jt.prototype.ValueBufferType=Float32Array;jt.prototype.DefaultInterpolation=ir;var ri=class extends jt{};ri.prototype.ValueTypeName="bool";ri.prototype.ValueBufferType=Array;ri.prototype.DefaultInterpolation=nr;ri.prototype.InterpolantFactoryMethodLinear=void 0;ri.prototype.InterpolantFactoryMethodSmooth=void 0;var fa=class extends jt{};fa.prototype.ValueTypeName="color";var pa=class extends jt{};pa.prototype.ValueTypeName="number";var ma=class extends Vi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t),c=e*o;for(let h=c+o;c!==h;c+=4)$t.slerpFlat(r,0,a,c-o,a,c,l);return r}},ps=class extends jt{InterpolantFactoryMethodLinear(e){return new ma(this.times,this.values,this.getValueSize(),e)}};ps.prototype.ValueTypeName="quaternion";ps.prototype.DefaultInterpolation=ir;ps.prototype.InterpolantFactoryMethodSmooth=void 0;var oi=class extends jt{};oi.prototype.ValueTypeName="string";oi.prototype.ValueBufferType=Array;oi.prototype.DefaultInterpolation=nr;oi.prototype.InterpolantFactoryMethodLinear=void 0;oi.prototype.InterpolantFactoryMethodSmooth=void 0;var ga=class extends jt{};ga.prototype.ValueTypeName="vector";var _a=class{constructor(e,t,n){let i=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let m=c[d],g=c[d+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}},Kg=new _a,va=class{constructor(e){this.manager=e!==void 0?e:Kg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};va.DEFAULT_MATERIAL_NAME="__DEFAULT";var Aa="\\[\\]\\.:\\/",jg=new RegExp("["+Aa+"]","g"),Ra="[^"+Aa+"]",Qg="[^"+Aa.replace("\\.","")+"]",e0=/((?:WC+[\/:])*)/.source.replace("WC",Ra),t0=/(WCOD+)?/.source.replace("WCOD",Qg),n0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ra),i0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ra),s0=new RegExp("^"+e0+t0+n0+i0+"$"),r0=["material","materials","bones","map"],xa=class{constructor(e,t,n){let i=n||et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},et=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(jg,"")}static parseTrackName(e){let t=s0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);r0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[i];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};et.Composite=xa;et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};et.prototype.GetterByBindingType=[et.prototype._getValue_direct,et.prototype._getValue_array,et.prototype._getValue_arrayElement,et.prototype._getValue_toArray];et.prototype.SetterByBindingTypeAndVersioning=[[et.prototype._setValue_direct,et.prototype._setValue_direct_setNeedsUpdate,et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[et.prototype._setValue_array,et.prototype._setValue_array_setNeedsUpdate,et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[et.prototype._setValue_arrayElement,et.prototype._setValue_arrayElement_setNeedsUpdate,et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[et.prototype._setValue_fromArray,et.prototype._setValue_fromArray_setNeedsUpdate,et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var v0=new Float32Array(1);var ms=class{constructor(e,t,n=0,i=1/0){this.ray=new ni(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new as,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return ya(e,this,n,t),n.sort(xc),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)ya(e[i],this,n,t);return n.sort(xc),n}};function xc(s,e){return s.distance-e.distance}function ya(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){let i=s.children;for(let r=0,a=i.length;r<a;r++)ya(i[r],e,t,!0)}}var gs=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(gt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ma}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ma);var Yc={type:"change"},Ca={type:"start"},qc={type:"end"},Ur=new ni,Zc=new Lt,o0=Math.cos(70*_s.DEG2RAD),Or=class extends an{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Qt.ROTATE,MIDDLE:Qt.DOLLY,RIGHT:Qt.PAN},this.touches={ONE:ai.ROTATE,TWO:ai.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(C){C.addEventListener("keydown",Ce),this._domElementKeyEvents=C},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ce),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Yc),n.update(),r=i.NONE},this.update=function(){let C=new L,ae=new $t().setFromUnitVectors(e.up,new L(0,1,0)),we=ae.clone().invert(),Me=new L,se=new $t,I=new L,le=2*Math.PI;return function(Ie=null){let Pe=n.object.position;C.copy(Pe).sub(n.target),C.applyQuaternion(ae),o.setFromVector3(C),n.autoRotate&&r===i.NONE&&X(y(Ie)),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let qe=n.minAzimuthAngle,Ze=n.maxAzimuthAngle;isFinite(qe)&&isFinite(Ze)&&(qe<-Math.PI?qe+=le:qe>Math.PI&&(qe-=le),Ze<-Math.PI?Ze+=le:Ze>Math.PI&&(Ze-=le),qe<=Ze?o.theta=Math.max(qe,Math.min(Ze,o.theta)):o.theta=o.theta>(qe+Ze)/2?Math.max(qe,o.theta):Math.min(Ze,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&b||n.object.isOrthographicCamera?o.radius=K(o.radius):o.radius=K(o.radius*c),C.setFromSpherical(o),C.applyQuaternion(we),Pe.copy(n.target).add(C),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let st=!1;if(n.zoomToCursor&&b){let ot=null;if(n.object.isPerspectiveCamera){let $e=C.length();ot=K($e*c);let ct=$e-ot;n.object.position.addScaledVector(A,ct),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){let $e=new L(D.x,D.y,0);$e.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),st=!0;let ct=new L(D.x,D.y,0);ct.unproject(n.object),n.object.position.sub(ct).add($e),n.object.updateMatrixWorld(),ot=C.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;ot!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(ot).add(n.object.position):(Ur.origin.copy(n.object.position),Ur.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Ur.direction))<o0?e.lookAt(n.target):(Zc.setFromNormalAndCoplanarPoint(n.object.up,n.target),Ur.intersectPlane(Zc,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),st=!0);return c=1,b=!1,st||Me.distanceToSquared(n.object.position)>a||8*(1-se.dot(n.object.quaternion))>a||I.distanceToSquared(n.target)>0?(n.dispatchEvent(Yc),Me.copy(n.object.position),se.copy(n.object.quaternion),I.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Je),n.domElement.removeEventListener("pointerdown",S),n.domElement.removeEventListener("pointercancel",F),n.domElement.removeEventListener("wheel",ee),n.domElement.removeEventListener("pointermove",x),n.domElement.removeEventListener("pointerup",F),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Ce),n._domElementKeyEvents=null)};let n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},r=i.NONE,a=1e-6,o=new gs,l=new gs,c=1,h=new L,d=new re,u=new re,m=new re,g=new re,_=new re,f=new re,p=new re,E=new re,v=new re,A=new L,D=new re,b=!1,w=[],z={},M=!1;function y(C){return C!==null?2*Math.PI/60*n.autoRotateSpeed*C:2*Math.PI/60/60*n.autoRotateSpeed}function N(C){let ae=Math.abs(C*.01);return Math.pow(.95,n.zoomSpeed*ae)}function X(C){l.theta-=C}function j(C){l.phi-=C}let R=function(){let C=new L;return function(we,Me){C.setFromMatrixColumn(Me,0),C.multiplyScalar(-we),h.add(C)}}(),U=function(){let C=new L;return function(we,Me){n.screenSpacePanning===!0?C.setFromMatrixColumn(Me,1):(C.setFromMatrixColumn(Me,0),C.crossVectors(n.object.up,C)),C.multiplyScalar(we),h.add(C)}}(),O=function(){let C=new L;return function(we,Me){let se=n.domElement;if(n.object.isPerspectiveCamera){let I=n.object.position;C.copy(I).sub(n.target);let le=C.length();le*=Math.tan(n.object.fov/2*Math.PI/180),R(2*we*le/se.clientHeight,n.object.matrix),U(2*Me*le/se.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(R(we*(n.object.right-n.object.left)/n.object.zoom/se.clientWidth,n.object.matrix),U(Me*(n.object.top-n.object.bottom)/n.object.zoom/se.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function q(C){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Y(C){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function W(C,ae){if(!n.zoomToCursor)return;b=!0;let we=n.domElement.getBoundingClientRect(),Me=C-we.left,se=ae-we.top,I=we.width,le=we.height;D.x=Me/I*2-1,D.y=-(se/le)*2+1,A.set(D.x,D.y,1).unproject(n.object).sub(n.object.position).normalize()}function K(C){return Math.max(n.minDistance,Math.min(n.maxDistance,C))}function Z(C){d.set(C.clientX,C.clientY)}function ce(C){W(C.clientX,C.clientX),p.set(C.clientX,C.clientY)}function V(C){g.set(C.clientX,C.clientY)}function Q(C){u.set(C.clientX,C.clientY),m.subVectors(u,d).multiplyScalar(n.rotateSpeed);let ae=n.domElement;X(2*Math.PI*m.x/ae.clientHeight),j(2*Math.PI*m.y/ae.clientHeight),d.copy(u),n.update()}function pe(C){E.set(C.clientX,C.clientY),v.subVectors(E,p),v.y>0?q(N(v.y)):v.y<0&&Y(N(v.y)),p.copy(E),n.update()}function be(C){_.set(C.clientX,C.clientY),f.subVectors(_,g).multiplyScalar(n.panSpeed),O(f.x,f.y),g.copy(_),n.update()}function ge(C){W(C.clientX,C.clientY),C.deltaY<0?Y(N(C.deltaY)):C.deltaY>0&&q(N(C.deltaY)),n.update()}function Le(C){let ae=!1;switch(C.code){case n.keys.UP:C.ctrlKey||C.metaKey||C.shiftKey?j(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,n.keyPanSpeed),ae=!0;break;case n.keys.BOTTOM:C.ctrlKey||C.metaKey||C.shiftKey?j(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,-n.keyPanSpeed),ae=!0;break;case n.keys.LEFT:C.ctrlKey||C.metaKey||C.shiftKey?X(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(n.keyPanSpeed,0),ae=!0;break;case n.keys.RIGHT:C.ctrlKey||C.metaKey||C.shiftKey?X(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(-n.keyPanSpeed,0),ae=!0;break}ae&&(C.preventDefault(),n.update())}function Ue(C){if(w.length===1)d.set(C.pageX,C.pageY);else{let ae=ve(C),we=.5*(C.pageX+ae.x),Me=.5*(C.pageY+ae.y);d.set(we,Me)}}function Se(C){if(w.length===1)g.set(C.pageX,C.pageY);else{let ae=ve(C),we=.5*(C.pageX+ae.x),Me=.5*(C.pageY+ae.y);g.set(we,Me)}}function Ne(C){let ae=ve(C),we=C.pageX-ae.x,Me=C.pageY-ae.y,se=Math.sqrt(we*we+Me*Me);p.set(0,se)}function P(C){n.enableZoom&&Ne(C),n.enablePan&&Se(C)}function he(C){n.enableZoom&&Ne(C),n.enableRotate&&Ue(C)}function $(C){if(w.length==1)u.set(C.pageX,C.pageY);else{let we=ve(C),Me=.5*(C.pageX+we.x),se=.5*(C.pageY+we.y);u.set(Me,se)}m.subVectors(u,d).multiplyScalar(n.rotateSpeed);let ae=n.domElement;X(2*Math.PI*m.x/ae.clientHeight),j(2*Math.PI*m.y/ae.clientHeight),d.copy(u)}function oe(C){if(w.length===1)_.set(C.pageX,C.pageY);else{let ae=ve(C),we=.5*(C.pageX+ae.x),Me=.5*(C.pageY+ae.y);_.set(we,Me)}f.subVectors(_,g).multiplyScalar(n.panSpeed),O(f.x,f.y),g.copy(_)}function J(C){let ae=ve(C),we=C.pageX-ae.x,Me=C.pageY-ae.y,se=Math.sqrt(we*we+Me*Me);E.set(0,se),v.set(0,Math.pow(E.y/p.y,n.zoomSpeed)),q(v.y),p.copy(E);let I=(C.pageX+ae.x)*.5,le=(C.pageY+ae.y)*.5;W(I,le)}function Te(C){n.enableZoom&&J(C),n.enablePan&&oe(C)}function _e(C){n.enableZoom&&J(C),n.enableRotate&&$(C)}function S(C){n.enabled!==!1&&(w.length===0&&(n.domElement.setPointerCapture(C.pointerId),n.domElement.addEventListener("pointermove",x),n.domElement.addEventListener("pointerup",F)),Ge(C),C.pointerType==="touch"?ze(C):ie(C))}function x(C){n.enabled!==!1&&(C.pointerType==="touch"?ne(C):te(C))}function F(C){Oe(C),w.length===0&&(n.domElement.releasePointerCapture(C.pointerId),n.domElement.removeEventListener("pointermove",x),n.domElement.removeEventListener("pointerup",F)),n.dispatchEvent(qc),r=i.NONE}function ie(C){let ae;switch(C.button){case 0:ae=n.mouseButtons.LEFT;break;case 1:ae=n.mouseButtons.MIDDLE;break;case 2:ae=n.mouseButtons.RIGHT;break;default:ae=-1}switch(ae){case Qt.DOLLY:if(n.enableZoom===!1)return;ce(C),r=i.DOLLY;break;case Qt.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enablePan===!1)return;V(C),r=i.PAN}else{if(n.enableRotate===!1)return;Z(C),r=i.ROTATE}break;case Qt.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enableRotate===!1)return;Z(C),r=i.ROTATE}else{if(n.enablePan===!1)return;V(C),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Ca)}function te(C){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;Q(C);break;case i.DOLLY:if(n.enableZoom===!1)return;pe(C);break;case i.PAN:if(n.enablePan===!1)return;be(C);break}}function ee(C){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(C.preventDefault(),n.dispatchEvent(Ca),ge(Ee(C)),n.dispatchEvent(qc))}function Ee(C){let ae=C.deltaMode,we={clientX:C.clientX,clientY:C.clientY,deltaY:C.deltaY};switch(ae){case 1:we.deltaY*=16;break;case 2:we.deltaY*=100;break}return C.ctrlKey&&!M&&(we.deltaY*=10),we}function fe(C){C.key==="Control"&&(M=!0,document.addEventListener("keyup",xe,{passive:!0,capture:!0}))}function xe(C){C.key==="Control"&&(M=!1,document.removeEventListener("keyup",xe,{passive:!0,capture:!0}))}function Ce(C){n.enabled===!1||n.enablePan===!1||Le(C)}function ze(C){switch(Re(C),w.length){case 1:switch(n.touches.ONE){case ai.ROTATE:if(n.enableRotate===!1)return;Ue(C),r=i.TOUCH_ROTATE;break;case ai.PAN:if(n.enablePan===!1)return;Se(C),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case ai.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;P(C),r=i.TOUCH_DOLLY_PAN;break;case ai.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;he(C),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Ca)}function ne(C){switch(Re(C),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;$(C),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;oe(C),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Te(C),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;_e(C),n.update();break;default:r=i.NONE}}function Je(C){n.enabled!==!1&&C.preventDefault()}function Ge(C){w.push(C.pointerId)}function Oe(C){delete z[C.pointerId];for(let ae=0;ae<w.length;ae++)if(w[ae]==C.pointerId){w.splice(ae,1);return}}function Re(C){let ae=z[C.pointerId];ae===void 0&&(ae=new re,z[C.pointerId]=ae),ae.set(C.pageX,C.pageY)}function ve(C){let ae=C.pointerId===w[0]?w[1]:w[0];return z[ae]}n.domElement.addEventListener("contextmenu",Je),n.domElement.addEventListener("pointerdown",S),n.domElement.addEventListener("pointercancel",F),n.domElement.addEventListener("wheel",ee,{passive:!1}),document.addEventListener("keydown",fe,{passive:!0,capture:!0}),this.update()}};var Na=require("obsidian");var Pa=16250092,La=15196114,tt=9,wn=5.5,vs=1.6,en=.06,Tn=.1,a0=1.42,Fr=vs+.15,l0=s=>.3+.7*Math.min(1,s/tt),Br=s=>vs+l0(s)*(wn*a0-vs),Jc=2*wn+5,$c=1.15,Kc=1.6,jc=.5,xs="#5d8a3e",li="#b07a3c",Ia={light:{bg:Pa,fog:La,linkMul:1},dark:{bg:658450,fog:1119262,linkMul:2}},ys=[{tint:"#5d7c8c",ring:"#3c5663"},{tint:"#b09161",ring:"#7d6334"},{tint:"#bb8079",ring:"#8a534b"},{tint:"#7d9b78",ring:"#516e4d"},{tint:"#8f87a0",ring:"#5f566f"},{tint:"#7e9aa6",ring:"#4d6b77"},{tint:"#c0936f",ring:"#8a5f3c"},{tint:"#9a9466",ring:"#65603a"}],ci={leaf:{tint:"#aeb9b6",ring:"#7c8a86",r:.21},trunk:{tint:"#8f87a0",ring:"#5f566f",r:.3},root:{tint:"#a98f5e",ring:"#6f5a32",r:.54},flower:{tint:"#cf8aa3",ring:"#9c5572",r:.4,glow:"#ff9ec2"},apple:{tint:"#d77f72",ring:"#a14b3f",r:.42,glow:"#ff8a76"}};function tn(s,e){return s*(Math.PI*2/Math.max(1,e))}function cn(s,e,t){return new L(e*Math.cos(s),t,-e*Math.sin(s))}function Qc(s,e){if(!s.length)return;let t=s.map(u=>u.time),n=Math.min(...t),i=Math.max(...t),r=i-n||1;for(let u of s)u.tNorm=(u.time-n)/r;let a=2.39996323,o=.52,l=(u,m,g)=>{let _=u.slice();for(let p=1;p<_.length;p++)_[p]<_[p-1]+o&&(_[p]=_[p-1]+o);let f=_[_.length-1]-m;if(_[_.length-1]>g&&f>1e-6){let p=(g-m)/f;for(let E=0;E<_.length;E++)_[E]=m+(_[E]-m)*p}return _},c=s.filter(u=>u.treeType==="root"),h=new Map;for(let u of s){if(u.treeType==="root"){if(c.length>1){let g=c.indexOf(u);u.pos=new L(Math.cos(g*a)*.15,-1.2,Math.sin(g*a)*.15)}else u.pos=new L(0,-1.2,0);continue}let m=u.treeType==="trunk"||u.field<0?"_axis":u.field;h.has(m)||h.set(m,[]),h.get(m).push(u)}let d=(h.get("_axis")||[]).sort((u,m)=>u.time-m.time||(u.id<m.id?-1:1));{let u=l(d.map(m=>.6+m.tNorm*(tt-.8)),.6,tt-.4);d.forEach((m,g)=>{m.pos=new L(Math.cos(g*a)*.22,u[g],Math.sin(g*a)*.22)})}for(let[u,m]of h){if(u==="_axis")continue;let g=u,_=tn(g,e)+en+Tn,f=tn(g+1,e)-en-Tn,p=f>_?f-_:Math.PI*2/e*.8;m.sort((v,A)=>v.time-A.time||(v.id<A.id?-1:1));let E=l(m.map(v=>.7+v.tNorm*(tt-1.2)),.7,tt-.5);m.forEach((v,A)=>{let D=E[A],b=.3+.7*(D/tt),w=_+p*(.08+.84*(A*.6180339887%1)),z=vs+b*(wn-vs)*(.4+.5*((A*.7548776662+.33)%1));v.pos=cn(w,z,D)})}}function eh(s,e,t){let n=s.filter(m=>m.treeType==="leaf"&&m.field>=0);if(n.length<3||n.length>500||e>=20)return;let i=new Map(n.map((m,g)=>[m.id,g])),r=n.map(()=>[]);for(let m of t){let g=i.get(m.from),_=i.get(m.to);g==null||_==null||g===_||n[g].field===n[_].field&&(r[g].push(_),r[_].push(g))}let a=.82,o=.013,l=1,c=.4,h=130,d=6.2831853,u=n.map(m=>({a0:tn(m.field,e)+en+Tn,a1:tn(m.field+1,e)-en-Tn,hlo:Math.max(.7,m.pos.y-2.2),hhi:Math.min(tt*1.16,m.pos.y+2.2)}));for(let m=0;m<h;m++){let g=n.map(()=>[0,0,0]);for(let _=0;_<n.length;_++){let f=n[_];for(let p of r[_]){let E=n[p];g[_][0]+=(E.pos.x-f.pos.x)*o,g[_][1]+=(E.pos.y-f.pos.y)*o*.4,g[_][2]+=(E.pos.z-f.pos.z)*o}}for(let _=0;_<n.length;_++){let f=n[_];for(let p=_+1;p<n.length;p++){let E=n[p],v=f.pos.x-E.pos.x,A=f.pos.y-E.pos.y,D=f.pos.z-E.pos.z,b=Math.sqrt(v*v+A*A+D*D)||.001;if(b<a){let w=l*(a-b)/b;g[_][0]+=v*w,g[_][1]+=A*w*.4,g[_][2]+=D*w,g[p][0]-=v*w,g[p][1]-=A*w*.4,g[p][2]-=D*w}}}for(let _=0;_<n.length;_++){let f=n[_];if(f._pinned)continue;let p=g[_][0],E=g[_][1],v=g[_][2],A=Math.sqrt(p*p+E*E+v*v);if(A>c){let R=c/A;p*=R,E*=R,v*=R}let D=f.pos.x+p,b=f.pos.y+E,w=f.pos.z+v;b=Math.min(u[_].hhi,Math.max(u[_].hlo,b));let z=Math.atan2(-w,D);z<0&&(z+=d);let M=Math.hypot(D,w),y=u[_].a0,N=u[_].a1;y<0&&(y+=d),N<0&&(N+=d),N>=y&&(z<y?z=y:z>N&&(z=N));let X=Br(b),j=Fr;M<j?M=j:M>X&&(M=X),f.pos.set(M*Math.cos(z),b,-M*Math.sin(z))}}}function th(s,e,t,n,i){if(s<0)return!1;let r=Math.PI*2,a=.001;if(n<.7-a||n>tt*1.16+a)return!1;let o=Math.hypot(t,i);if(o<Fr-a||o>Br(n)+a)return!1;let l=tn(s,e)+en+Tn,c=tn(s+1,e)-en-Tn;if(l<0&&(l+=r),c<0&&(c+=r),c<l)return!0;let h=Math.atan2(-i,t);return h<0&&(h+=r),h>=l-a&&h<=c+a}function ut(s,e){let t=parseInt(s.slice(1),16);return`rgba(${t>>16&255},${t>>8&255},${t&255},${e})`}function Da(s,e){let t=parseInt(s.slice(1),16),n=t>>16&255,i=t>>8&255,r=t&255;return n=Math.round(n+(255-n)*e),i=Math.round(i+(255-i)*e),r=Math.round(r+(255-r)*e),n<<16|i<<8|r}function zr(s,e){return"#"+Da(s,e).toString(16).padStart(6,"0")}var c0=["root","trunk","leaf","flower","apple"];function h0(s){let e=String(s??"").toLowerCase().trim();return c0.includes(e)?e:"leaf"}function u0(s,e){if(s instanceof Date)return s.getTime()/864e5;if(typeof s=="number")return s;if(typeof s=="string"&&s.trim()){let t=Date.parse(s);if(!isNaN(t))return t/864e5;let n=parseFloat(s);if(!isNaN(n))return n}return e}function d0(s){let e=s;if(e.startsWith("---")){let t=e.indexOf(`
---`,3);t!==-1&&(e=e.slice(e.indexOf(`
`,t+1)+1))}for(let t of e.split(`
`)){let n=t.trim();if(!n||n.startsWith("#")||n.startsWith("---")||n.startsWith("<!--"))continue;let i=n.replace(/[*_`>#\[\]]/g,"").trim();if(i)return i.length>160?i.slice(0,157)+"\u2026":i}return""}function f0(s){if(!Array.isArray(s))return;let e=[];for(let t of s)if(t&&typeof t=="object"){let n=t,i=String(n.c??n.chair??"").trim(),r=String(n.t??n.take??"").trim();i&&e.push({c:i,t:r})}return e.length?e:void 0}function p0(s){let e=s.split(`
`),t=e.findIndex(i=>/^#{1,6}\s+stakeholder views\b/i.test(i.trim()));if(t<0)return;let n=[];for(t=t+1;t<e.length;t++){let i=e[t].trim();if(!i)continue;if(/^#{1,6}\s/.test(i))break;let r=i.match(/^[-*]\s*\*\*(.+?)\*\*\s*[:：]?\s*(.*)$/);if(r){let a=r[1].replace(/[:：]\s*$/,"").trim();a&&n.push({c:a,t:r[2].trim()})}}return n.length?n:void 0}async function nh(s,e){let t=s.vault.getMarkdownFiles(),n=e.forestByFolder!==!1,i=g=>{if(!n)return"(all)";let _=g.indexOf("/");return _<0?"(root)":g.slice(0,_)},r=[],a=new Map;for(let g of t){let f=s.metadataCache.getFileCache(g)?.frontmatter??{};if(f.bridge_from!=null&&f.bridge_to!=null){let v=typeof f.explain=="string"?f.explain:typeof f.description=="string"?f.description:"";r.push({id:g.path,from:String(f.bridge_from).trim(),to:String(f.bridge_to).trim(),fromNote:f.bridge_from_note!=null?String(f.bridge_from_note).trim():void 0,toNote:f.bridge_to_note!=null?String(f.bridge_to_note).trim():void 0,title:typeof f.title=="string"&&f.title||g.basename,explain:v,filePath:g.path});continue}let p=f.tree_type!=null||f.field!=null||f.time!=null||f.flower!=null;if(e.onlyTreeNotes&&!p)continue;let E=i(g.path);a.has(E)||a.set(E,[]),a.get(E).push(g)}let o=[...a.values()].reduce((g,_)=>g+_.length,0);o>1500&&new Na.Notice("Eve Apple Tree: large vault ("+o+" notes). Tip: turn on 'Only show notes with tree frontmatter' in settings for a cleaner, faster tree.",8e3);let l=s.metadataCache.resolvedLinks||{},c=[],h=[];for(let[g,_]of a){let f=[],p=new Map,E=R=>(p.has(R)||(p.set(R,f.length),f.push(R)),p.get(R)),v=[],A=new Map;for(let R of _){let U=s.metadataCache.getFileCache(R),O=U?.frontmatter??{},q=h0(O.tree_type??(O.flower?"flower":void 0)),Y=q==="root"||q==="trunk",W=O.field!=null?String(O.field).trim():"",K=Y?null:W||"Unfiled",Z=K?E(K):-1,ce=typeof O.description=="string"?O.description:"",V=f0(O.views),Q=!V&&(U?.headings??[]).some(ge=>/^stakeholder views\b/i.test(ge.heading)),pe=o>2e3;if(!ce&&!pe||Q){let ge="";try{ge=await s.vault.cachedRead(R)}catch{ge=""}!ce&&!pe&&(ce=d0(ge)),Q&&(V=p0(ge))}let be={id:R.path,title:typeof O.title=="string"&&O.title||R.basename,description:ce,treeType:q,field:Z,fieldName:K,time:u0(O.time,R.stat.ctime/864e5),views:V,tNorm:0,pos:null};v.push(be),A.set(R.path,be)}let D=[],b=new Map;for(let R of _){let U=R.path,O=A.get(U);if(O)for(let q of Object.keys(l[U]||{})){let Y=A.get(q);if(!Y||O===Y)continue;let W=O.field<0,K=Y.field<0,Z;W&&K?Z="spine":W||K?Z="branch":O.field===Y.field?Z="intra":Z="rhizome",D.push({from:U,to:q,kind:Z}),b.has(q)||b.set(q,[]),b.get(q).push(U)}}let w=Math.max(1,f.length);Qc(v,w);let z=e.dotPositions||{};for(let R of v){let U=z[R.id];if(!(!U||typeof U.x!="number"||typeof U.y!="number"||typeof U.z!="number")){if(R.field<0||R.treeType==="root"||R.treeType==="trunk"||!th(R.field,w,U.x,U.y,U.z)){delete z[R.id];continue}R.pos.set(U.x,U.y,U.z),R._pinned=!0}}let M=v.filter(R=>R.treeType==="leaf"&&R.field>=0).length;e.clusterLinkedDots!==!1&&eh(v,w,D);let y=[...new Set(v.flatMap(R=>(R.views??[]).map(U=>U.c).filter(Boolean)))],N=s.vault.getName(),X=g==="(root)"||g==="(all)"?N:g;e.clusterLinkedDots!==!1&&M>500&&h.push(X);let j={id:g,topic:X,origin:{x:0,z:0},nodes:v,edges:D,fields:f,byId:A,incoming:b,cast:y};for(let R of v)R.tree=j;c.push(j)}h.length&&new Na.Notice(`Eve Apple Tree: clustering skipped for ${h.join(", ")} (over 500 notes) to keep Obsidian fast.`),c.sort((g,_)=>g.id<_.id?-1:g.id>_.id?1:0);let d=e.treeOrigins||{};c.forEach((g,_)=>{let f=d[g.id];g.origin=f&&typeof f.x=="number"&&typeof f.z=="number"?{x:f.x,z:f.z}:{x:(_-(c.length-1)/2)*Jc,z:0};for(let p of g.nodes)p.pos.x+=g.origin.x,p.pos.z+=g.origin.z});let u=new Set(c.map(g=>g.id)),m=r.filter(g=>u.has(g.from)&&u.has(g.to)&&g.from!==g.to);return{trees:c,bridges:m}}var Ms="eve-apple-tree-view",m0={root:1,trunk:.8,apple:.7,flower:.65,leaf:0},Hr=class Hr extends hn.ItemView{constructor(t,n,i){super(t);this.settings=n;this.persist=i;de(this,"root");de(this,"labelLayer");de(this,"renderer");de(this,"scene");de(this,"camera");de(this,"controls");de(this,"raf",0);de(this,"ro");de(this,"w",1);de(this,"h",1);de(this,"reduced",window.matchMedia("(prefers-reduced-motion: reduce)").matches);de(this,"forest",{trees:[],bridges:[]});de(this,"allNodes",[]);de(this,"byId",new Map);de(this,"bridges",[]);de(this,"G");de(this,"texCache",{});de(this,"fadeMats",[]);de(this,"glowMats",new Map);de(this,"glowAnim",[]);de(this,"glowDimMat");de(this,"themeDark",!1);de(this,"linkMul",1);de(this,"themeBtn");de(this,"themeManual",!1);de(this,"textScale",1);de(this,"shine",1);de(this,"silIcon","round");de(this,"uiCard");de(this,"pill");de(this,"noteCard");de(this,"sectorsOn",!0);de(this,"fieldLabelsOn",!0);de(this,"accentLabelsOn",!0);de(this,"bridgesOn",!0);de(this,"fieldMode","flat");de(this,"lodT",0);de(this,"lensChair",null);de(this,"lensCast",[]);de(this,"viewDots",[]);de(this,"mirrorEl");de(this,"lensSelect");de(this,"pool",[]);de(this,"active",new Map);de(this,"sEls",[]);de(this,"aEls",[]);de(this,"sectorAnchor",[]);de(this,"sectorTree",[]);de(this,"preset");de(this,"tween",null);de(this,"selected",null);de(this,"selRing");de(this,"D0",29);de(this,"edgeIndex",new Map);de(this,"press",null);de(this,"drag",null);de(this,"resetArmed",0);de(this,"treeDrag",null);de(this,"groundPlane",new Lt(new L(0,1,0),0));de(this,"resetTreeArmed",0);de(this,"resizeRenderer",()=>{if(!this.renderer)return;let t=this.root.getBoundingClientRect();this.w=Math.max(1,t.width),this.h=Math.max(1,t.height),this.camera.aspect=this.w/this.h,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.w,this.h)});de(this,"_v",new L);de(this,"_fr",new ki);de(this,"_m",new lt);de(this,"titleOn",!1);de(this,"descOn",!1);de(this,"easeInOutCubic",t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2);de(this,"resetView",()=>this.flyTo(this.preset.pos,this.preset.target));de(this,"onPointerDown",t=>{if(t.button!==0||!this.renderer||t.target!==this.renderer.domElement)return;let n=this.pick(t);if(this.press={x:t.clientX,y:t.clientY,t:performance.now(),node:n?.node??null,bridge:n?.bridge??null},n?.node&&n.node.sprite&&this.isDraggable(n.node)){t.stopPropagation();let r=n.node.sprite,a=new L;this.camera.getWorldDirection(a);let o=new Lt().setFromNormalAndCoplanarPoint(a,r.position.clone()),l=this.rayOnPlane(t,o),c=l?r.position.clone().sub(l):new L;this.drag={node:n.node,plane:o,offset:c,prevSpin:this.controls.autoRotate,moved:!1},this.controls.autoRotate=!1,this.renderer.domElement.setPointerCapture?.(t.pointerId);return}let i=n?.tree??(n?.node&&this.isTreeAnchor(n.node)?n.node.tree:void 0);if(i){t.stopPropagation();let r=this.rayOnPlane(t,this.groundPlane),a=r?new L(i.origin.x-r.x,0,i.origin.z-r.z):new L;this.treeDrag={tree:i,offset:a,prevSpin:this.controls.autoRotate,moved:!1},this.controls.autoRotate=!1,this.renderer.domElement.setPointerCapture?.(t.pointerId)}});de(this,"onPointerMove",t=>{if(this.press){if(this.drag){if(!this.drag.moved&&Math.hypot(t.clientX-this.press.x,t.clientY-this.press.y)<5)return;this.drag.moved=!0;let n=this.rayOnPlane(t,this.drag.plane);if(!n)return;this.moveNode(this.drag.node,this.clampToWedge(this.drag.node,n.add(this.drag.offset)));return}if(this.treeDrag){if(!this.treeDrag.moved&&Math.hypot(t.clientX-this.press.x,t.clientY-this.press.y)<5)return;this.treeDrag.moved=!0;let n=this.rayOnPlane(t,this.groundPlane);if(!n)return;this.moveTree(this.treeDrag.tree,n.x+this.treeDrag.offset.x,n.z+this.treeDrag.offset.z)}}});de(this,"onPointerUp",t=>{if(t.button!==0||!this.press)return;let n=Math.hypot(t.clientX-this.press.x,t.clientY-this.press.y),i=this.press,r=this.drag,a=this.treeDrag;if(this.press=null,this.drag=null,this.treeDrag=null,r&&(this.renderer?.domElement.releasePointerCapture?.(t.pointerId),this.controls.autoRotate=r.prevSpin,r.moved)){this.persistDot(r.node);return}if(a&&(this.renderer?.domElement.releasePointerCapture?.(t.pointerId),this.controls.autoRotate=a.prevSpin,a.moved)){this.forest.bridges.length&&this.rebuildBridges(),this.persistTree(a.tree);return}n>5||(i.node?this.selectNode(i.node):i.bridge?this.showBridge(i.bridge):this.deselect())});de(this,"onContextMenu",t=>{t.preventDefault()})}getViewType(){return Ms}getDisplayText(){return"Eve's Apple Tree"}getIcon(){return"sprout"}async onOpen(){this.root=this.contentEl.createDiv({cls:"eve-tree-root"}),this.labelLayer=this.root.createDiv({cls:"eve-labels"}),this.registerEvent(this.app.workspace.on("css-change",()=>{this.themeManual||this.applyTheme(this.detectObsidianDark())})),this.registerDomEvent(document,"keydown",t=>{t.key==="Escape"&&this.noteCard?.classList.contains("show")&&(t.preventDefault(),this.deselect())}),this.app.workspace.onLayoutReady(()=>{this.reload()})}async onClose(){this.dispose()}get isForest(){return this.forest.trees.length>1}async reload(){if(this.dispose(!1),this.textScale=this.settings.textSize&&this.settings.textSize>0?this.settings.textSize:1,this.shine=this.settings.glowScale!=null&&this.settings.glowScale>=0?this.settings.glowScale:1,this.silIcon=this.settings.zoomOutIcon??"round",this.forest=await nh(this.app,this.settings),this.allNodes=this.forest.trees.flatMap(t=>t.nodes),this.byId=new Map(this.allNodes.map(t=>[t.id,t])),!this.allNodes.length){this.showEmpty();return}this.initThree(),this.buildScene(),this.buildControlsPanel(),this.applyTheme(this.themeManual?this.themeDark:this.detectObsidianDark()),this.applyTextScale(),this.fit(),this.startLoop()}applyTextScale(){this.root.style.setProperty("--eve-txt",String(this.textScale))}showEmpty(){let t=this.root.createDiv({cls:"eve-empty"});t.createEl("b",{text:"Your tree has no notes yet."}),t.createEl("br"),t.createEl("br"),t.appendText("Tag your first note by adding a frontmatter block at the very top of the file:"),t.createEl("pre",{cls:"eve-empty-code"}).createEl("code",{text:`---
tree_type: leaf
field: Researcher
time: 2026-06-26
---`}),t.appendText("Then click "),t.createEl("b",{text:"Rebuild from vault"}),t.appendText(". Links between notes become branches; cross-field links become rhizome. Put each topic in its own folder and the vault becomes a "),t.createEl("b",{text:"forest"}),t.appendText("."),t.createEl("br"),t.createEl("br"),t.appendText("Already have notes but see nothing? By default the tree shows only notes that carry this frontmatter. To render every note in the vault, turn off "),t.createEl("b",{text:"Settings \u2192 Eve's Apple Tree \u2192 \u201COnly show notes with tree frontmatter.\u201D"}),t.createEl("br"),t.createEl("br"),t.createEl("button",{cls:"eve-btn",text:"\u27F3 Rebuild from vault"}).addEventListener("click",()=>{this.reload()})}initThree(){let t=this.root.getBoundingClientRect();this.w=Math.max(1,t.width),this.h=Math.max(1,t.height),this.scene=new Mr,this.scene.background=new Be(Pa),this.scene.fog=new yr(La,20,54),this.camera=new Pt(50,this.w/this.h,.1,2e3),this.camera.position.set(20,12,20),this.renderer=new cs({antialias:!0,alpha:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(this.w,this.h);let n=this.renderer.domElement;n.classList.add("eve-canvas"),this.root.insertBefore(n,this.labelLayer),this.controls=new Or(this.camera,n),this.controls.enableDamping=!0,this.controls.minDistance=4,this.controls.maxDistance=400,this.controls.autoRotateSpeed=.7,this.controls.target.set(0,tt*.46,0),this.controls.enablePan=!0,this.controls.screenSpacePanning=!0,this.controls.zoomToCursor=!0,this.controls.mouseButtons={LEFT:Qt.ROTATE,MIDDLE:Qt.DOLLY,RIGHT:Qt.PAN},this.preset={pos:this.camera.position.clone(),target:this.controls.target.clone()},this.D0=this.camera.position.distanceTo(this.controls.target),this.G={fieldFlat:new _t,fieldColumn:new _t,struct:new _t,rhizome:new _t,dots:new _t,glow:new _t,sil:new _t,bridge:new _t,select:new _t},Object.values(this.G).forEach(i=>this.scene.add(i)),this.ro=new ResizeObserver(()=>this.resizeRenderer()),this.ro.observe(this.root),this.root.addEventListener("pointerdown",this.onPointerDown,!0),this.root.addEventListener("pointermove",this.onPointerMove,!0),this.root.addEventListener("pointerup",this.onPointerUp,!0),n.addEventListener("contextmenu",this.onContextMenu)}dotTexture(t,n){let i=t+n;if(this.texCache[i])return this.texCache[i];let r=160,a=document.createElement("canvas");a.width=a.height=r;let o=a.getContext("2d"),l=r/2,c=r/2,h=o.createRadialGradient(l,c,8,l,c,78);h.addColorStop(0,ut(t,.22)),h.addColorStop(1,ut(t,0)),o.fillStyle=h,o.beginPath(),o.arc(l,c,78,0,7),o.fill(),o.fillStyle=ut(t,.96),o.beginPath(),o.arc(l,c,30,0,7),o.fill(),o.lineWidth=5,o.strokeStyle=ut(n,.95),o.beginPath(),o.arc(l,c,30,0,7),o.stroke(),o.fillStyle="#ffffff",o.beginPath(),o.arc(l,c,12,0,7),o.fill();let d=new Sn(a);return d.anisotropy=4,this.texCache[i]=d,d}diamondTexture(t){let n="dia"+t;if(this.texCache[n])return this.texCache[n];let i=160,r=document.createElement("canvas");r.width=r.height=i;let a=r.getContext("2d"),o=i/2,l=a.createRadialGradient(o,o,1,o,o,74);l.addColorStop(0,ut(t,.9)),l.addColorStop(.3,ut(t,.42)),l.addColorStop(1,ut(t,0)),a.fillStyle=l,a.beginPath(),a.arc(o,o,74,0,7),a.fill(),a.globalCompositeOperation="lighter";let c=(u,m)=>{let g=a.createLinearGradient(o-u,o,o+u,o);g.addColorStop(0,"rgba(255,255,255,0)"),g.addColorStop(.5,"rgba(255,255,255,.92)"),g.addColorStop(1,"rgba(255,255,255,0)"),a.fillStyle=g,a.fillRect(o-u,o-m/2,u*2,m)},h=(u,m,g)=>{a.save(),a.translate(o,o),a.rotate(u),a.translate(-o,-o),c(m,g),a.restore()};h(0,72,5),h(Math.PI/2,72,5),h(Math.PI/4,40,3),h(-Math.PI/4,40,3),l=a.createRadialGradient(o,o,0,o,o,16),l.addColorStop(0,"rgba(255,255,255,1)"),l.addColorStop(.5,ut(zr(t,.6),.95)),l.addColorStop(1,ut(t,0)),a.fillStyle=l,a.beginPath(),a.arc(o,o,16,0,7),a.fill(),a.globalCompositeOperation="source-over";let d=new Sn(r);return d.anisotropy=4,this.texCache[n]=d,d}haloTexture(){if(this.texCache.halo)return this.texCache.halo;let t=128,n=document.createElement("canvas");n.width=n.height=t;let i=n.getContext("2d"),r=t/2,a=i.createRadialGradient(r,r,0,r,r,r);a.addColorStop(0,"rgba(255,255,255,1)"),a.addColorStop(.22,"rgba(255,255,255,0.62)"),a.addColorStop(.45,"rgba(255,255,255,0.28)"),a.addColorStop(.7,"rgba(255,255,255,0.08)"),a.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=a,i.fillRect(0,0,t,t);let o=new Sn(n);return o.anisotropy=4,this.texCache.halo=o,o}glowMat(t,n){let i=t+(n?"|a":"|b"),r=this.glowMats.get(i);return r||(r=new Kt({map:this.haloTexture(),color:new Be(t),transparent:!0,depthWrite:!1,blending:this.themeDark?zn:Ot,fog:!0,opacity:0}),this.glowMats.set(i,r),this.glowAnim.push({m:r,accent:n})),r}glowDim(){return this.glowDimMat||(this.glowDimMat=new Kt({map:this.haloTexture(),color:new Be("#c8d0da"),transparent:!0,depthWrite:!1,blending:this.themeDark?zn:Ot,fog:!0,opacity:0})),this.glowDimMat}ringTexture(){if(this.texCache.ring)return this.texCache.ring;let t=128,n=document.createElement("canvas");n.width=n.height=t;let i=n.getContext("2d");i.lineWidth=7,i.strokeStyle="rgba(34,48,58,.9)",i.beginPath(),i.arc(t/2,t/2,t/2-8,0,7),i.stroke(),i.lineWidth=3,i.strokeStyle="rgba(255,255,255,.9)",i.beginPath(),i.arc(t/2,t/2,t/2-8,0,7),i.stroke();let r=new Sn(n);return this.texCache.ring=r,r}treeSilTexture(t="round"){let n="sil-"+t;if(this.texCache[n])return this.texCache[n];let i=256,r=document.createElement("canvas");r.width=r.height=i;let a=r.getContext("2d"),o=(h,d)=>{a.fillStyle=ut("#5b4632",.92),a.fillRect(i*(.5-d/2),i*h,i*d,i*(.97-h))},l=(h,d,u)=>{let m=i*h,g=i*d,_=i*u,f=a.createRadialGradient(m,g,_*.78,m,g,_);f.addColorStop(0,ut(xs,.96)),f.addColorStop(.86,ut(xs,.93)),f.addColorStop(1,ut(xs,0)),a.fillStyle=f,a.beginPath(),a.arc(m,g,_,0,7),a.fill()};if(t==="conifer"){o(.82,.07);let h=(d,u,m)=>{a.fillStyle=ut(xs,.94),a.beginPath(),a.moveTo(i*.5,i*(d-m)),a.lineTo(i*(.5+u),i*d),a.lineTo(i*(.5-u),i*d),a.closePath(),a.fill()};h(.82,.3,.26),h(.62,.25,.24),h(.44,.19,.22)}else if(t==="apple"){o(.56,.085),l(.5,.42,.25),l(.27,.46,.2),l(.73,.46,.2),l(.38,.36,.17),l(.62,.36,.17),l(.5,.34,.17);let h=(d,u,m)=>{let g=i*d,_=i*u,f=i*m,p=a.createRadialGradient(g,_,1,g,_,f);p.addColorStop(0,ut("#d23b2c",.98)),p.addColorStop(1,ut("#7a2018",.6)),a.fillStyle=p,a.beginPath(),a.arc(g,_,f,0,7),a.fill()};h(.4,.5,.03),h(.58,.47,.03),h(.5,.55,.028),h(.66,.52,.026),h(.33,.45,.026)}else o(.6,.075),l(.5,.37,.3),l(.31,.44,.2),l(.69,.44,.2),l(.38,.27,.17),l(.62,.27,.17),l(.5,.22,.17);let c=new Sn(r);return this.texCache[n]=c,c}bridgeTexture(){if(this.texCache.bridge)return this.texCache.bridge;let t=128,n=document.createElement("canvas");n.width=n.height=t;let i=n.getContext("2d"),r=i.createRadialGradient(64,64,4,64,64,60);r.addColorStop(0,ut(li,.95)),r.addColorStop(.55,ut(li,.5)),r.addColorStop(1,ut(li,0)),i.fillStyle=r,i.beginPath(),i.arc(64,64,60,0,7),i.fill(),i.fillStyle="#fff",i.font="bold 60px ui-monospace,Menlo,monospace",i.textAlign="center",i.textBaseline="middle",i.fillText("\u21C4",64,66);let a=new Sn(n);return this.texCache.bridge=a,a}secOf(t){return ys[(t%ys.length+ys.length)%ys.length]}buildScene(){for(let t of this.forest.trees)this.buildDots(t),this.buildLinks(t),this.buildFields(t),this.buildSilhouette(t);this.buildBridges(),this.applyFieldMode(),this.buildLabels(),this.selRing=new bn(new Kt({map:this.ringTexture(),transparent:!0,depthWrite:!1,fog:!0,opacity:0})),this.selRing.visible=!1,this.G.select.add(this.selRing)}buildDots(t){for(let n of t.nodes){let i=ci[n.treeType],r=i.tint,a=i.ring;if(n.treeType==="leaf"&&n.field>=0){let g=this.secOf(n.field);r=g.tint,a=g.ring}let o=n.treeType==="trunk"?1-.4*n.tNorm:1,l=i.r*2*o,c=new bn(new Kt({map:this.dotTexture(r,a),transparent:!0,depthWrite:!1,fog:!0}));c.position.copy(n.pos),c.scale.set(l,l,1),c.userData={node:n,baseScale:l,tint:r,ring:a},this.G.dots.add(c),n.sprite=c,n._lens=1;let h=!!i.glow,d=this.glowMat(h?i.glow:r,h),u=new bn(d);u.position.copy(n.pos);let m=l*(h?3.2:2.6);u.scale.set(m,m,1),u.userData={litMat:d},this.G.glow.add(u),n.glowSprite=u}}buildLinks(t){let n={spine:"#6f6780",branch:"#8a8276",intra:"#7d7a86"},i=[],r=[],a=[],o=[],l=[],c=[],h=new Be;for(let u of t.edges){let m=t.byId.get(u.from),g=t.byId.get(u.to);if(!m||!g)continue;let _=!(u.kind in n);h.set(_?"#5f7382":n[u.kind]);let f=_?a:i,p=_?o:r,E=_?c:l;f.push(m.pos.x,m.pos.y,m.pos.z,g.pos.x,g.pos.y,g.pos.z),p.push(h.r,h.g,h.b,h.r,h.g,h.b),E.push([m,g])}let d=(u,m,g,_,f)=>{if(!u.length)return;let p=new xt,E=new vt(new Float32Array(u),3);p.setAttribute("position",E),p.setAttribute("color",new vt(new Float32Array(m),3));let v=new ln({vertexColors:!0,transparent:!0,opacity:_,fog:!0});f.add(new Er(p,v)),this.fadeMats.push({m:v,b:_,link:!0}),g.forEach(([A,D],b)=>{this.indexEdgeVertex(A.id,E,b*2),this.indexEdgeVertex(D.id,E,b*2+1)})};d(i,r,l,.5,this.G.struct),d(a,o,c,.14,this.G.rhizome)}indexEdgeVertex(t,n,i){let r=this.edgeIndex.get(t);r||(r=[],this.edgeIndex.set(t,r)),r.push({attr:n,vi:i})}wedgeShape(t,n,i){let r=new Hi;return r.moveTo(0,0),r.lineTo(i*Math.cos(t),i*Math.sin(t)),r.absarc(0,0,i,t,n,!1),r.lineTo(0,0),r}edgeFade(t,n,i,r){let a=new xt().setFromPoints([t,n]),o=new Be(i);a.setAttribute("color",new vt(new Float32Array([o.r,o.g,o.b,.24,o.r,o.g,o.b,0]),4));let l=new ln({vertexColors:!0,transparent:!0,fog:!0}),c=new En(a,l);c.renderOrder=-1,r.add(c),this.fadeMats.push({m:l,b:1})}buildFields(t){let n=Math.max(1,t.fields.length),i=wn,r=tt,a=t.origin.x,o=t.origin.z,l=new _t;l.position.set(a,0,o),this.G.fieldFlat.add(l);let c=new _t;c.position.set(a,0,o),this.G.fieldColumn.add(c),t.fieldFlatG=l,t.fieldColumnG=c;let h=6,d=28;for(let m=0;m<n;m++){let g=this.secOf(m),_=tn(m,n)+en,f=tn(m+1,n)-en,p=(_+f)/2,E=new Be(g.tint),v=new Be(g.ring).getHex(),A=new Pr(this.wedgeShape(_,f,i),28);A.rotateX(-Math.PI/2),A.translate(0,.01,0);let D=new ii({color:E,transparent:!0,opacity:.13,depthWrite:!1,side:qt,fog:!0});l.add(new Ut(A,D)),this.fadeMats.push({m:D,b:.13});let b=new ln({color:v,transparent:!0,opacity:.12,fog:!0});l.add(new En(new xt().setFromPoints([cn(_,i,.01),cn(_,i,r*.92)]),b)),this.fadeMats.push({m:b,b:.12});let w=new Cr(this.wedgeShape(_,f,i),{depth:r,bevelEnabled:!1,steps:h,curveSegments:d});w.rotateX(-Math.PI/2),w.translate(0,.012,0);let z=w.attributes.position,M=new Float32Array(z.count*4),y=(O,q,Y)=>{let W=Math.min(1,Math.max(0,(Y-O)/(q-O)));return W*W*(3-2*W)};for(let O=0;O<z.count;O++){let q=z.getX(O),Y=z.getY(O),W=z.getZ(O),K=Math.min(1,Math.max(0,Y/r)),Z=1-y(.62,1,K),ce=.45+.55*y(0,.22,K),V=.78+.22*(1-Math.min(1,Math.hypot(q,W)/i));M[O*4]=1,M[O*4+1]=1,M[O*4+2]=1,M[O*4+3]=Z*ce*V}w.setAttribute("color",new vt(M,4));let N=new ii({color:new Be(Da(g.tint,.34)),vertexColors:!0,transparent:!0,opacity:.12,side:Tt,depthWrite:!1,blending:Ot,fog:!0}),X=new Ut(w,N);X.renderOrder=-2,c.add(X),this.fadeMats.push({m:N,b:.12}),this.edgeFade(cn(_,i,.012),cn(_,i,r),g.ring,c),this.edgeFade(cn(f,i,.012),cn(f,i,r),g.ring,c);let j=[];for(let O=0;O<=d;O++)j.push(cn(_+(f-_)*O/d,i,.014));let R=new ln({color:new Be(g.ring),transparent:!0,opacity:.26,fog:!0}),U=new En(new xt().setFromPoints(j),R);U.renderOrder=-1,c.add(U),this.fadeMats.push({m:R,b:.26}),this.sectorAnchor.push(cn(p,i+.7,r*.5)),this.sectorTree.push(t),this.sEls.push(this.mkSectorLabel(t.fields[m],g.ring))}let u=m=>{let g=[];for(let f=0;f<=120;f++){let p=f/120*Math.PI*2;g.push(new L(Math.cos(p)*i,.006,Math.sin(p)*i))}let _=new ln({color:13287336,transparent:!0,opacity:.55,fog:!0});m.add(new En(new xt().setFromPoints(g),_)),this.fadeMats.push({m:_,b:.55})};u(l),u(c)}mkSectorLabel(t,n){let i=this.labelLayer.createDiv({cls:"eve-slabel"});return i.setText(t),i.style.color=n,i}buildSilhouette(t){let n=new bn(new Kt({map:this.treeSilTexture(this.silIcon),transparent:!0,depthWrite:!1,fog:!1,opacity:0}));n.position.set(t.origin.x,tt*.5,t.origin.z),n.scale.set(2*wn*.8,tt*1.26,1),n.userData={tree:t},t.sil=n,this.G.sil.add(n),t.silMarks=[];let i=(r,a,o,l)=>{let c=new bn(new Kt({map:this.dotTexture(a,o),transparent:!0,depthWrite:!1,fog:!1,opacity:0}));c.userData={tree:t,mark:r},c.scale.set(l,l,1),this.G.sil.add(c),t.silMarks.push(c),this.placeSilMark(c)};if(t.nodes.some(r=>r.treeType==="apple")&&i("apple","#e0564b","#7a2018",1.5),t.nodes.some(r=>r.treeType==="flower")&&i("flower","#e0489a","#8a2560",1.5),this.isForest){let r=this.labelLayer.createDiv({cls:"eve-tlabel"});r.setText(t.topic),t.nameLabelEl=r}}placeSilMark(t){let n=t.userData.tree,i=t.userData.mark,[r,a]=Hr.SIL_MARK_ANCHOR[this.silIcon][i];t.position.set(n.origin.x+(r-.5)*wn*1.6,tt*(1.13-1.26*a),n.origin.z)}resolveNote(t,n){if(!n)return null;if(t.byId.has(n))return t.byId.get(n);let i=n.replace(/\.md$/,"").toLowerCase();return t.nodes.find(r=>r.id.replace(/\.md$/,"").toLowerCase().endsWith("/"+i)||r.title.toLowerCase()===i)??null}repOf(t){return t.nodes.find(n=>n.treeType==="trunk")||t.nodes.find(n=>n.treeType==="root")||t.nodes[0]||null}buildBridges(){for(let t of this.forest.bridges){let n=this.forest.trees.find(m=>m.id===t.from),i=this.forest.trees.find(m=>m.id===t.to);if(!n||!i||n===i)continue;let r=this.resolveNote(n,t.fromNote),a=this.resolveNote(i,t.toNote),o=r?r.pos.clone():new L(n.origin.x,tt*.5,n.origin.z),l=a?a.pos.clone():new L(i.origin.x,tt*.5,i.origin.z),c=[];for(let m=0;m<=24;m++){let g=m/24,_=new L().lerpVectors(o,l,g);_.y+=Math.sin(g*Math.PI)*1.6,c.push(_)}let h=new ln({color:new Be(li),transparent:!0,opacity:.6,fog:!0});this.G.bridge.add(new En(new xt().setFromPoints(c),h));let d=o.clone().add(l).multiplyScalar(.5);d.y=Math.max(o.y,l.y)+1.6;let u=new bn(new Kt({map:this.bridgeTexture(),transparent:!0,depthWrite:!1,fog:!0}));u.position.copy(d),u.scale.set(.95,.95,1),u.userData={bridge:t},this.G.bridge.add(u),this.bridges.push({def:t,sprite:u})}}applyFieldMode(){this.G.fieldFlat.visible=this.sectorsOn&&this.fieldMode==="flat",this.G.fieldColumn.visible=this.sectorsOn&&this.fieldMode==="column"}buildLabels(){for(let n=0;n<28;n++){let i=this.labelLayer.createDiv({cls:"eve-lblnode"}),r=i.createSpan({cls:"nt"}),a=i.createSpan({cls:"nd"});this.pool.push({el:i,t:r,d:a,node:null,op:0,target:0,tier:1,curId:null,sx:0,sy:0,sel:!1})}this.aEls=this.allNodes.filter(n=>n.treeType==="flower"||n.treeType==="apple").map(n=>{let i=this.labelLayer.createDiv({cls:"eve-alabel"});i.style.color=ci[n.treeType].ring;let r=i.createSpan({cls:"ad"});return r.style.background=ci[n.treeType].glow||ci[n.treeType].tint,i.appendChild(document.createTextNode(n.treeType==="flower"?"AHA":"OUTPUT")),{el:i,node:n}})}clamp01(t){return t<0?0:t>1?1:t}ss(t,n,i){let r=Math.min(1,Math.max(0,(i-t)/(n-t)));return r*r*(3-2*r)}updateLabels(){let t=this.w,n=this.h,i=this.camera,r=this.controls;i.updateMatrixWorld();let a=1-this.lodT,o=i.position.distanceTo(r.target),l=.7*this.D0,c=.42*this.D0,h=.04*this.D0;this.titleOn=o<(this.titleOn?l+h:l-h),this.descOn=o<(this.descOn?c+h:c-h);let d=1.1*this.D0,u=.95*this.D0,m=.5*this.D0;this._m.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._fr.setFromProjectionMatrix(this._m);for(let b of this.forest.trees){if(!b.nameLabelEl)continue;this._v.set(b.origin.x,-2.8,b.origin.z).project(i);let w=this._v.x>=-1.05&&this._v.x<=1.05&&this._v.y>=-1.05&&this._v.y<=1.05&&this._v.z<1;b.nameLabelEl.style.opacity=w?this.lodT.toFixed(3):"0",b.nameLabelEl.style.transform=`translate3d(${Math.round((this._v.x*.5+.5)*t)}px,${Math.round((-this._v.y*.5+.5)*n)}px,0) translate(-50%,0)`}let g=this.clamp01((l-o)/(l-c));this.sEls.forEach((b,w)=>{let z=this.sectorAnchor[w],M=this.sectorTree[w];if(!z||!M||!this.fieldLabelsOn||a<.05){b.style.opacity="0";return}if(this._v.set(z.x+M.origin.x,z.y,z.z+M.origin.z).project(i),!(this._v.x>=-1.05&&this._v.x<=1.05&&this._v.y>=-1.05&&this._v.y<=1.05&&this._v.z<1)){b.style.opacity="0";return}b.style.opacity=((1-.9*g)*a).toFixed(3),b.style.transform=`translate3d(${Math.round((this._v.x*.5+.5)*t)}px,${Math.round((-this._v.y*.5+.5)*n)}px,0) translate(-50%,-50%)`}),this.aEls.forEach(b=>{if(!this.accentLabelsOn||a<.05){b.el.style.opacity="0";return}if(this._v.copy(b.node.pos).project(i),!(this._v.x>=-1&&this._v.x<=1&&this._v.y>=-1&&this._v.y<=1&&this._v.z<1)){b.el.style.opacity="0";return}b.el.style.opacity=(.92*a).toFixed(3),b.el.style.transform=`translate3d(${Math.round((this._v.x*.5+.5)*t)}px,${Math.round((-this._v.y*.5+.5)*n)}px,0) translate(-50%,-160%)`});let _=[];if(a>=.05)for(let b of this.allNodes){let w=b===this.selected;if(!w&&!this.titleOn||b.treeType==="root"&&!w||!this._fr.containsPoint(b.pos))continue;let z=i.position.distanceTo(b.pos);if(!w&&z>d)continue;let M=(w?1:this.ss(u,m,z))*a;if(!w&&M<.02)continue;this._v.copy(b.pos).project(i);let y=(this._v.x*.5+.5)*t,N=(-this._v.y*.5+.5)*n,X=w||this.descOn?2:1,j=z-(m0[b.treeType]||0)*this.D0*.18-(w?1e6:0);_.push({n:b,sx:y,sy:N,op:M,tier:X,score:j,sel:w})}_.sort((b,w)=>b.score-w.score);let f=[],p=0,E=0;for(let b of _){if(!b.sel){if(p>=18)break;let w=!1;for(let z of f){let M=z.sx-b.sx,y=z.sy-b.sy;if(M*M+y*y<900){w=!0;break}}if(w)continue}b.tier===2&&!b.sel&&(E>=8?b.tier=1:E++),f.push(b),b.sel||p++}let v=new Set,A=()=>this.pool.find(b=>b.node===null);for(let b of f){let w=this.active.get(b.n.id);if(!w){let z=A();if(!z)continue;w=z,w.node=b.n,w.op=0,w.curId=null,this.active.set(b.n.id,w)}if(v.add(b.n.id),w.curId!==b.n.id){w.t.empty();let z=w.t.createSpan({cls:"fd"});z.style.background=b.n.field>=0?this.secOf(b.n.field).tint:ci[b.n.treeType].ring,w.t.appendChild(document.createTextNode(b.n.title)),w.d.setText(b.n.description),w.curId=b.n.id}w.target=b.op,w.tier=b.tier,w.sel=b.sel,w.sx=Math.round(b.sx+10),w.sy=Math.round(b.sy-7)}for(let b of this.pool)b.node&&!v.has(b.node.id)&&(b.target=0);let D=this.reduced?1:.18;for(let b of this.pool)if(!(!b.node&&b.op<=.001)){if(b.op+=(b.target-b.op)*D,b.target===0&&b.op<.02){b.op=0,b.el.style.opacity="0",b.node&&(this.active.delete(b.node.id),b.node=null);continue}b.el.style.opacity=b.op.toFixed(3),b.el.style.transform=`translate3d(${b.sx}px,${b.sy}px,0)`,b.el.toggleClass("sel",!!b.sel),b.d.toggleClass("show",b.tier===2)}}flyTo(t,n,i=640){if(this.reduced){this.camera.position.copy(t),this.controls.target.copy(n),this.controls.update();return}this.controls.enabled=!1,this.tween={fromPos:this.camera.position.clone(),fromTgt:this.controls.target.clone(),toPos:t.clone(),toTarget:n.clone(),t0:performance.now(),dur:i}}fit(){let t=wn,n=tt,i=1/0,r=-1/0,a=1/0,o=-1/0;for(let A of this.forest.trees)i=Math.min(i,A.origin.x-t),r=Math.max(r,A.origin.x+t),a=Math.min(a,A.origin.z-t),o=Math.max(o,A.origin.z+t);let l=(i+r)/2,c=(a+o)/2,h=new L(l,n*.46,c),d=t;for(let A of this.forest.trees)d=Math.max(d,Math.hypot(A.origin.x-l,A.origin.z-c)+t);let u=Math.hypot(d,n*.52),m=_s.degToRad(this.camera.fov),g=this.camera.aspect||1,_=2*Math.atan(Math.tan(m/2)*g),f=1.7*Math.max(u/Math.sin(m/2),u/Math.sin(_/2)),p=new L(20,12-tt*.46,20).normalize(),E=h.clone().addScaledVector(p,f);this.D0=f,this.preset={pos:E.clone(),target:h.clone()},this.controls.maxDistance=Math.max(400,f*2.8);let v=this.scene.fog;v.near=Math.max(1,f*.42),v.far=f*1.9+d,this.camera.position.copy(E),this.controls.target.copy(h),this.controls.update()}focusTree(t){let n=new L(t.origin.x,tt*.46,t.origin.z),i=Math.hypot(wn,tt*.52),r=_s.degToRad(this.camera.fov),a=this.camera.aspect||1,o=2*Math.atan(Math.tan(r/2)*a),l=1.7*Math.max(i/Math.sin(r/2),i/Math.sin(o/2)),c=new L(20,12-tt*.46,20).normalize();this.flyTo(n.clone().addScaledVector(c,l),n)}pick(t){if(!this.renderer)return null;let n=this.renderer.domElement.getBoundingClientRect(),i=new re((t.clientX-n.left)/n.width*2-1,-((t.clientY-n.top)/n.height)*2+1),r=new ms;r.setFromCamera(i,this.camera);let a=[...this.G.dots.children];if(this.G.bridge.visible)for(let c of this.bridges)a.push(c.sprite);if(this.lodT>.05)for(let c of this.forest.trees)c.sil&&a.push(c.sil);let o=r.intersectObjects(a,!1)[0];if(!o)return null;let l=o.object.userData;return l.bridge?{bridge:l.bridge}:l.tree?{tree:l.tree}:l.node?{node:l.node}:null}rayOnPlane(t,n){if(!this.renderer)return null;let i=this.renderer.domElement.getBoundingClientRect(),r=new re((t.clientX-i.left)/i.width*2-1,-((t.clientY-i.top)/i.height)*2+1),a=new ms;a.setFromCamera(r,this.camera);let o=new L;return a.ray.intersectPlane(n,o)?o:null}isDraggable(t){return t.field>=0&&t.treeType!=="root"&&t.treeType!=="trunk"}isTreeAnchor(t){return t.treeType==="root"||t.treeType==="trunk"}clampToWedge(t,n){let i=t.tree?.origin??{x:0,z:0},r=Math.max(1,t.tree?.fields.length??1),a=Math.PI*2,o=.05,l=n.x-i.x,c=n.z-i.z,h=n.y;h<.7?h=.7:h>tt*1.16&&(h=tt*1.16);let d=Math.hypot(l,c),u=Fr,m=Br(h);d<u?d=u:d>m&&(d=m);let g=tn(t.field,r)+en+Tn+o,_=tn(t.field+1,r)-en-Tn-o;_<g&&(g=_=(g+_)/2),g<0&&(g+=a),_<0&&(_+=a);let f=Math.atan2(-c,l);return f<0&&(f+=a),f<g?f=g:f>_&&(f=_),new L(i.x+d*Math.cos(f),h,i.z-d*Math.sin(f))}moveNode(t,n){t.pos.copy(n),t.sprite?.position.copy(n),t.glowSprite?.position.copy(n),t===this.selected&&this.selRing.position.copy(n);let i=this.edgeIndex.get(t.id);if(i){let r=new Set;for(let a of i)a.attr.setXYZ(a.vi,n.x,n.y,n.z),r.add(a.attr);r.forEach(a=>a.needsUpdate=!0)}}persistDot(t){var i;let n=t.tree?.origin??{x:0,z:0};((i=this.settings).dotPositions??(i.dotPositions={}))[t.id]={x:t.pos.x-n.x,y:t.pos.y,z:t.pos.z-n.z},t._pinned=!0,this.persist()}moveTree(t,n,i){let r=n-t.origin.x,a=i-t.origin.z;if(!r&&!a)return;t.origin.x=n,t.origin.z=i;let o=new L;for(let l of t.nodes)o.set(l.pos.x+r,l.pos.y,l.pos.z+a),this.moveNode(l,o);if(t.fieldFlatG?.position.set(n,0,i),t.fieldColumnG?.position.set(n,0,i),t.sil&&t.sil.position.set(n,tt*.5,i),t.silMarks)for(let l of t.silMarks)this.placeSilMark(l)}persistTree(t){var n;((n=this.settings).treeOrigins??(n.treeOrigins={}))[t.id]={x:t.origin.x,z:t.origin.z},this.persist()}rebuildBridges(){this.G.bridge.traverse(t=>{t.geometry?.dispose?.();let n=t.material;n&&(Array.isArray(n)?n:[n]).forEach(i=>i.dispose?.())}),this.G.bridge.clear(),this.bridges=[],this.buildBridges()}selectNode(t){this.selected=t,this.lensChair&&this.applyLens();let n=t.sprite;if(n){let i=n.userData.baseScale;this.selRing.position.copy(t.pos),this.selRing.scale.set(i*2.4,i*2.4,1),this.selRing.material.opacity=.95,this.selRing.visible=!0,this.G.dots.children.forEach(r=>r.scale.setScalar(r.userData.baseScale)),n.scale.setScalar(i*1.35)}this.showCard(t)}deselect(){let t=this.selected;this.selected=null,this.selRing.visible=!1,t&&this.lensChair&&this.applyLens(),this.G.dots.children.forEach(n=>n.scale.setScalar(n.userData.baseScale)),this.hideCard()}hideCard(){this.noteCard?.removeClass("show")}async openFileInTab(t){let n=this.app.vault.getAbstractFileByPath(t);n instanceof hn.TFile?await this.app.workspace.getLeaf("tab").openFile(n):new hn.Notice("Note not found: "+t)}showCard(t){let n=this.noteCard;if(!n)return;n.empty(),n.removeClass("bridge");let i=n.createSpan({cls:"eve-nclose",text:"\u2715"});i.setAttr("role","button"),i.setAttr("aria-label","Close"),i.addEventListener("click",()=>this.deselect());let r=t.tree,a=t.fieldName??(t.treeType==="root"?"Root":t.treeType==="trunk"?"Trunk":"Unfiled"),o=n.createDiv({cls:"eve-ntag",text:a+" \xB7 "+t.treeType+(this.isForest&&r?" \xB7 "+r.topic:"")}),l=t.field>=0?this.secOf(t.field).ring:ci[t.treeType].ring;if(o.style.color=this.themeDark?zr(l,.45):l,n.createEl("h3",{cls:"eve-ntitle",text:t.title}),t.description&&n.createDiv({cls:"eve-ndesc",text:t.description}),t.views&&t.views.length){n.createDiv({cls:"eve-nsec",text:"\u{1F441} Stakeholder views ("+t.views.length+")"});for(let h of t.views){if(!h.c&&!h.t)continue;let d=n.createDiv({cls:"eve-nview"});this.lensChair&&d.toggleClass("on",h.c===this.lensChair),d.createSpan({cls:"eve-vchair",text:h.c+": "}),d.appendText(h.t)}}if(r){let h=(u,m)=>{if(n.createDiv({cls:"eve-nsec",text:u}),!m.length){n.createSpan({cls:"eve-nnone",text:"\u2014 none \u2014"});return}for(let g of m){let _=r.byId.get(g)??null,f=n.createSpan({cls:"eve-chip",text:_?_.title:g});_&&f.addEventListener("click",()=>this.selectNode(_))}},d=[...new Set(r.edges.filter(u=>u.from===t.id).map(u=>u.to))];h("Links to \u2192",d),h("\u2190 Linked from",[...new Set(r.incoming.get(t.id)||[])])}n.createEl("button",{cls:"eve-btn eve-nopen",text:"Open note \u2197"}).addEventListener("click",()=>void this.openFileInTab(t.id)),n.addClass("show")}showBridge(t){this.deselect();let n=this.noteCard;if(!n)return;n.empty(),n.addClass("bridge");let i=n.createSpan({cls:"eve-nclose",text:"\u2715"});i.setAttr("role","button"),i.setAttr("aria-label","Close"),i.addEventListener("click",()=>this.hideCard());let r=n.createDiv({cls:"eve-ntag",text:"\u21C4 Bridge"});r.style.color=this.themeDark?zr(li,.45):li,n.createEl("h3",{cls:"eve-ntitle",text:t.title}),n.createDiv({cls:"eve-ndesc",text:t.explain||"A manual link between two trees."}),n.createDiv({cls:"eve-nsec",text:"Connects"});let a=this.forest.trees.find(l=>l.id===t.from),o=this.forest.trees.find(l=>l.id===t.to);for(let l of[a,o]){if(!l)continue;let c=n.createSpan({cls:"eve-chip",text:"\u{1F333} "+l.topic}),h=this.repOf(l);h&&c.addEventListener("click",()=>this.selectNode(h))}t.filePath&&n.createEl("button",{cls:"eve-btn eve-nopen",text:"Open note \u2197"}).addEventListener("click",()=>void this.openFileInTab(t.filePath)),n.addClass("show")}detectObsidianDark(){return document.body.classList.contains("theme-dark")}applyTheme(t){if(!this.renderer)return;this.themeDark=t;let n=t?Ia.dark:Ia.light;this.linkMul=n.linkMul,this.scene.background.set(n.bg),this.scene.fog.color.set(n.fog),this.root.classList.toggle("dark",t);for(let r of this.allNodes)if(r.sprite){let a=r.sprite.userData,o=r.sprite.material;o.map=t?this.diamondTexture(a.tint):this.dotTexture(a.tint,a.ring),o.blending=t?zn:Ot,o.needsUpdate=!0}let i=t?zn:Ot;for(let r of this.glowAnim)r.m.blending=i,r.m.needsUpdate=!0;this.glowDimMat&&(this.glowDimMat.blending=i,this.glowDimMat.needsUpdate=!0);for(let r of this.forest.trees)if(r.silMarks)for(let a of r.silMarks){let o=a.material;o.blending=t?zn:Ot,o.needsUpdate=!0}this.themeBtn&&this.themeBtn.setText(t?"\u2600\uFE0F Light":"\u{1F319} Dark")}buildControlsPanel(){let t=this.root.createDiv({cls:"eve-card eve-ui"});this.uiCard=t,this.pill=this.root.createDiv({cls:"eve-card eve-pill",text:"\u{1F34E}"}),this.pill.setAttr("role","button"),this.pill.setAttr("aria-label","Show panel"),this.pill.setAttr("title","Show panel"),this.pill.addEventListener("click",()=>this.setPanelCollapsed(!1));let n=t.createDiv({cls:"eve-hd"}),i=n.createDiv({cls:"eve-hdtitle"});i.createDiv({cls:"eve-brand",text:"\u{1F34E} Eve's Apple Tree"}),i.createDiv({cls:"eve-slogan",text:"think how to think"});let r=n.createSpan({cls:"eve-min",text:"\u2013"});r.setAttr("role","button"),r.setAttr("aria-label","Minimize panel"),r.setAttr("title","Minimize"),r.addEventListener("click",()=>this.setPanelCollapsed(!0));let a=t.createDiv({cls:"eve-pitch"});a.appendText("Your notes become a living "),a.createEl("b",{text:"tree of light"}),a.appendText(" \u2014 so you can "),a.createEl("b",{text:"see the shape of your own thinking"}),a.appendText(": forgotten links resurface, related ideas cluster, and your breakthroughs glow."),this.isForest&&t.createDiv({cls:"eve-topic",text:`\u{1F332} Forest \xB7 ${this.forest.trees.length} trees`});let o=t.createDiv({cls:"eve-grp eve-guide"});o.createDiv({cls:"eve-lbl",text:"How to use it"});let l=o.createEl("ul",{cls:"eve-steps"}),c=(y,N)=>{let X=l.createEl("li");X.createEl("span",{cls:"k",text:y}),X.appendText(N)};c("Drag \xB7 scroll \xB7 two-finger-drag"," to fly through it, zoom, and pan."),c("Click a dot"," \u2192 see its card; drag a dot to reposition it (saved)."),c("Zoom sets the detail"," \u2192 far out: green tree icons (names beneath) \xB7 mid: constellation \xB7 closer: titles \xB7 closest: + descriptions."),c("Related ideas cluster","; your \u{1F338} ah-has & \u{1F34E} outputs glow.");let h=t.createDiv({cls:"eve-grp"});h.createDiv({cls:"eve-lbl",text:"Show / hide"});let d=(y,N,X)=>{let j=h.createDiv({cls:"eve-row"}),R=j.createEl("input",{type:"checkbox"});return R.checked=N,j.createEl("label",{text:y}),R.addEventListener("change",()=>X(R.checked)),j.addEventListener("click",U=>{U.target!==R&&(R.checked=!R.checked,X(R.checked))}),R};d("Field sectors",this.sectorsOn,y=>{this.sectorsOn=y,this.applyFieldMode()}),d("Trunk & branch links",!0,y=>{this.G.struct.visible=y}),d("Cross-field links",!0,y=>{this.G.rhizome.visible=y}),d("Field names",this.fieldLabelsOn,y=>{this.fieldLabelsOn=y}),d("Ah-ha \u{1F338} / Output \u{1F34E}",this.accentLabelsOn,y=>{this.accentLabelsOn=y}),this.bridges.length&&d("Cross-tree bridges",!0,y=>{this.bridgesOn=y,this.G.bridge.visible=y}),d("Auto-spin (rotate)",!1,y=>{this.controls.autoRotate=y});let u=t.createDiv({cls:"eve-grp"});u.createDiv({cls:"eve-lbl",text:"Field render mode"});let m=u.createDiv({cls:"eve-seg"}),g=(y,N,X)=>{let j=m.createEl("label"),R=j.createEl("input",{type:"radio"});R.name="eve-fmode",R.value=y,R.checked=X,j.appendChild(document.createTextNode(N)),R.addEventListener("change",()=>{R.checked&&(this.fieldMode=y,this.applyFieldMode())})};g("flat","Flat wedge",this.fieldMode==="flat"),g("column","Column",this.fieldMode==="column");let _=t.createDiv({cls:"eve-grp"});_.createDiv({cls:"eve-lbl",text:"Appearance"});let f=(y,N,X,j,R,U,O,q)=>{let Y=_.createDiv({cls:"eve-slider"}),W=Y.createDiv({cls:"eve-slrow"});W.createSpan({cls:"eve-slname",text:y});let K=W.createSpan({cls:"eve-slval",text:U(R)}),Z=Y.createEl("input",{type:"range"});Z.min=String(N),Z.max=String(X),Z.step=String(j),Z.value=String(R),Z.addEventListener("input",()=>{let ce=+Z.value;K.setText(U(ce)),O(ce)}),Z.addEventListener("change",()=>q(+Z.value))},p=y=>y.toFixed(2)+"\xD7";f("Text size",.6,2,.05,this.textScale,p,y=>{this.textScale=y,this.applyTextScale()},y=>{this.settings.textSize=y,this.persist()}),f("Light shine",0,2,.05,this.shine,p,y=>{this.shine=y},y=>{this.settings.glowScale=y,this.persist()}),_.createDiv({cls:"eve-lbl eve-lbl2",text:"Zoom-out icon"});let E=_.createEl("select",{cls:"eve-lenssel"});[["round","\u25CF Round"],["conifer","\u25B2 Conifer"],["apple","\u{1F34E} Apple"]].forEach(([y,N])=>{let X=E.createEl("option",{text:N});X.value=y}),E.value=this.silIcon,E.addEventListener("change",()=>{this.silIcon=E.value,this.settings.zoomOutIcon=this.silIcon;for(let y of this.forest.trees){if(y.sil){let N=y.sil.material;N.map=this.treeSilTexture(this.silIcon),N.needsUpdate=!0}if(y.silMarks)for(let N of y.silMarks)this.placeSilMark(N)}this.persist()});let v=t.createDiv({cls:"eve-grp"});v.createDiv({cls:"eve-lbl",text:"View"});let A=v.createDiv({cls:"eve-btns"});if(A.createEl("button",{cls:"eve-btn",text:"\u21BA Reset",attr:{title:"Return to the opening view"}}).addEventListener("click",this.resetView),A.createEl("button",{cls:"eve-btn",text:"\u22B9 Fit",attr:{title:"Re-frame the whole tree / forest"}}).addEventListener("click",()=>{this.fit(),this.resetView()}),this.themeBtn=A.createEl("button",{cls:"eve-btn",text:this.themeDark?"\u2600\uFE0F Light":"\u{1F319} Dark",attr:{title:"Switch between light and diamond-dark"}}),this.themeBtn.addEventListener("click",()=>{this.themeManual=!0,this.applyTheme(!this.themeDark)}),t.createEl("button",{cls:"eve-btn",text:"\u27F3 Rebuild from vault"}).addEventListener("click",()=>this.reload()),t.createEl("button",{cls:"eve-btn",text:"\u233E Reset dot layout",attr:{title:"Clear every dot you've dragged and re-run the auto-layout"}}).addEventListener("click",()=>{let y=performance.now();if(y-this.resetArmed>3e3){this.resetArmed=y,new hn.Notice("Reset dot layout? Click again within 3s to clear every moved dot.");return}this.resetArmed=0,this.settings.dotPositions={},new hn.Notice("Dot layout reset."),this.persist().then(()=>this.reload())}),t.createEl("button",{cls:"eve-btn",text:"\u233E Reset tree layout",attr:{title:"Clear every tree you've dragged and return it to the auto row"}}).addEventListener("click",()=>{let y=performance.now();if(y-this.resetTreeArmed>3e3){this.resetTreeArmed=y,new hn.Notice("Reset tree layout? Click again within 3s to clear every moved tree.");return}this.resetTreeArmed=0,this.settings.treeOrigins={},new hn.Notice("Tree layout reset."),this.persist().then(()=>this.reload())}),this.isForest){let y=t.createDiv({cls:"eve-grp"});y.createDiv({cls:"eve-lbl",text:"Focus tree"});let N=y.createEl("select",{cls:"eve-lenssel"}),X=N.createEl("option",{text:"\u{1F332} Whole forest"});X.value="-1",this.forest.trees.forEach((j,R)=>{let U=N.createEl("option",{text:"\u{1F333} "+j.topic});U.value=String(R)}),N.addEventListener("change",()=>{let j=+N.value;j<0?this.resetView():this.focusTree(this.forest.trees[j])})}this.buildChairLens(t),this.noteCard=this.root.createDiv({cls:"eve-card eve-note"}),this.setPanelCollapsed(this.settings.panelCollapsed??!1,!1)}setPanelCollapsed(t,n=!0){this.uiCard?.toggleClass("hidden",t),this.pill?.toggleClass("show",t),n&&(this.settings.panelCollapsed=t,this.persist())}viewChairs(t){return(t.views??[]).map(n=>n.c).filter(Boolean)}buildChairLens(t){let n=[...new Set(this.forest.trees.flatMap(o=>o.cast||[]))];if(this.lensCast=[...new Set([...n,...this.allNodes.flatMap(o=>this.viewChairs(o))])],!this.lensCast.length)return;this.viewDots=this.allNodes.filter(o=>(o.views??[]).length>0);let i=t.createDiv({cls:"eve-grp"});i.createDiv({cls:"eve-lbl",text:"Stakeholder lens"}),i.createDiv({cls:"eve-lenshint",text:"Sit in one chair: ideas that chair has no view on dim away, so you sweep the tree through one perspective."});let r=i.createEl("select",{cls:"eve-lenssel"});this.lensSelect=r;let a=r.createEl("option",{text:"\u2014 off (all chairs) \u2014"});a.value="",this.lensCast.forEach(o=>{let l=r.createEl("option",{text:o});l.value=o}),r.addEventListener("change",()=>{this.lensChair=r.value||null,this.applyLens()}),this.mirrorEl=i.createDiv({cls:"eve-mirror"}),this.renderMirror()}renderMirror(){let t=this.mirrorEl;if(!t)return;t.empty();let n=this.viewDots.length,i=this.lensCast.map(a=>{let o=this.viewDots.filter(l=>this.viewChairs(l).includes(a)).length;return{c:a,k:o,pct:n?Math.round(100*o/n):0}}).sort((a,o)=>o.k-a.k||(a.c<o.c?-1:1)),r=t.createDiv({cls:"eve-mcap"});if(this.lensChair){let a=i.find(o=>o.c===this.lensChair);r.setText(`${this.lensChair} \xB7 ${a.k}/${n} dots (${a.pct}%)`)}else r.setText(`chair-mirror \xB7 ${n} dot${n===1?"":"s"} with views`);for(let a of i){let o=t.createDiv({cls:"eve-mrow"+(a.c===this.lensChair?" on":"")});o.setAttr("role","button"),o.tabIndex=0,o.setAttr("aria-label",`Stakeholder lens: ${a.c} (${a.pct}%)`),o.createSpan({cls:"eve-mname",text:a.c});let l=o.createSpan({cls:"eve-mbar"});l.createEl("i").style.width=a.pct+"%",o.createSpan({cls:"eve-mpct",text:a.pct+"%"});let c=()=>{this.lensChair=this.lensChair===a.c?null:a.c,this.lensSelect&&(this.lensSelect.value=this.lensChair??""),this.applyLens()};o.addEventListener("click",c),o.addEventListener("keydown",h=>{(h.key==="Enter"||h.key===" ")&&(h.preventDefault(),c())})}}applyLens(){for(let t of this.allNodes){let n=!this.lensChair||t===this.selected||this.viewChairs(t).includes(this.lensChair);t._lens=n?1:.1,t.glowSprite&&(t.glowSprite.material=n?t.glowSprite.userData.litMat:this.glowDim())}this.renderMirror()}startLoop(){let t=n=>{if(this.raf=requestAnimationFrame(t),this.tween){let c=Math.min(1,(n-this.tween.t0)/this.tween.dur),h=this.easeInOutCubic(c);this.camera.position.lerpVectors(this.tween.fromPos,this.tween.toPos,h),this.controls.target.lerpVectors(this.tween.fromTgt,this.tween.toTarget,h),c>=1&&(this.tween=null,this.controls.enabled=!0)}this.controls.update();let i=this.camera.position.distanceTo(this.controls.target);this.lodT=this.ss($c*this.D0,Kc*this.D0,i);let r=1-this.lodT;for(let c of this.allNodes){let h=(c._lens??1)<1?this.themeDark?.22:.1:c._lens??1;c.sprite&&(c.sprite.material.opacity=h*r)}let a=this.themeDark?.3:.13,o=this.themeDark?.55:.26,l=this.themeDark?.95:.52;for(let c of this.glowAnim)c.m.opacity=Math.min(l,(c.accent?o:a)*r*this.shine);this.glowDimMat&&(this.glowDimMat.opacity=Math.min(l,(this.themeDark?.12:.05)*r*this.shine));for(let c of this.forest.trees)if(c.sil&&(c.sil.material.opacity=this.lodT*jc),c.silMarks)for(let h of c.silMarks)h.material.opacity=this.lodT;for(let c of this.fadeMats)c.m.opacity=c.b*r*(c.link?this.linkMul:1);this.selected&&this.selected.sprite&&(this.selRing.position.copy(this.selected.pos),this.selRing.material.opacity=.95*r),this.updateLabels(),this.renderer.render(this.scene,this.camera)};this.raf=requestAnimationFrame(t)}dispose(t=!0){if(this.raf&&(cancelAnimationFrame(this.raf),this.raf=0),this.ro?.disconnect(),this.ro=void 0,this.root?.removeEventListener("pointerdown",this.onPointerDown,!0),this.root?.removeEventListener("pointermove",this.onPointerMove,!0),this.root?.removeEventListener("pointerup",this.onPointerUp,!0),this.renderer){let n=this.renderer.domElement;n.removeEventListener("contextmenu",this.onContextMenu),this.controls?.dispose(),this.scene?.traverse(i=>{if(i.geometry?.dispose?.(),i.material){let r=i.material;(Array.isArray(r)?r:[r]).forEach(a=>a.dispose?.())}}),Object.values(this.texCache).forEach(i=>i.dispose()),this.texCache={},this.renderer.dispose(),this.renderer.forceContextLoss(),n.remove(),this.renderer=void 0}this.fadeMats=[],this.bridges=[],this.glowMats.forEach(n=>n.dispose()),this.glowMats.clear(),this.glowDimMat?.dispose(),this.glowDimMat=void 0,this.glowAnim=[],this.pool=[],this.active.clear(),this.sEls=[],this.aEls=[],this.sectorAnchor=[],this.sectorTree=[],this.selected=null,this.tween=null,this.lodT=0,this.press=null,this.drag=null,this.treeDrag=null,this.edgeIndex.clear(),this.uiCard=void 0,this.pill=void 0,this.noteCard=void 0,this.lensChair=null,this.lensCast=[],this.viewDots=[],this.mirrorEl=void 0,this.lensSelect=void 0,t&&this.root?(this.root.empty(),this.labelLayer=this.root.createDiv({cls:"eve-labels"})):this.root&&(Array.from(this.root.children).forEach(n=>n.remove()),this.labelLayer=this.root.createDiv({cls:"eve-labels"}))}};de(Hr,"SIL_MARK_ANCHOR",{round:{apple:[.63,.3],flower:[.37,.3]},apple:{apple:[.62,.35],flower:[.38,.35]},conifer:{apple:[.6,.56],flower:[.4,.6]}});var kr=Hr;var ih={onlyTreeNotes:!0,forestByFolder:!0,clusterLinkedDots:!0},Vr=class extends Hn.Plugin{constructor(){super(...arguments);de(this,"settings",ih)}async onload(){await this.loadSettings(),this.registerView(Ms,t=>new kr(t,this.settings,()=>this.saveSettings())),this.addRibbonIcon("sprout","Open Eve's Apple Tree",()=>this.activateView()),this.addCommand({id:"open-eve-apple-tree",name:"Open the tree of light",callback:()=>this.activateView()}),this.addSettingTab(new Ua(this.app,this))}async activateView(){let{workspace:t}=this.app,n=t.getLeavesOfType(Ms)[0]??null;n||(n=t.getLeaf(!0),await n.setViewState({type:Ms,active:!0})),await t.revealLeaf(n)}async loadSettings(){this.settings=Object.assign({},ih,await this.loadData());let t=this.settings;t.treeScale!==void 0&&(delete t.treeScale,await this.saveSettings())}async saveSettings(){await this.saveData(this.settings)}},Ua=class extends Hn.PluginSettingTab{constructor(t,n){super(t,n);de(this,"plugin");this.plugin=n}display(){let{containerEl:t}=this;t.empty(),t.createEl("p",{text:"Your notes grow into a living 3D tree of light. Notes are placed by their frontmatter: tree_type (root/trunk/leaf/flower/apple), field (sector), and time (height). Links become branches; cross-field links become rhizome. Open the tree from the ribbon (sprout icon) or the command palette."}),new Hn.Setting(t).setName("Only show notes with tree frontmatter").setDesc("When on, the tree renders only notes that have tree_type / field / time / flower frontmatter \u2014 keeps the view clean in a mixed vault. Click 'Rebuild from vault' in the view after changing.").addToggle(n=>n.setValue(this.plugin.settings.onlyTreeNotes).onChange(async i=>{this.plugin.settings.onlyTreeNotes=i,await this.plugin.saveSettings()})),new Hn.Setting(t).setName("Forest mode \u2014 one folder = one tree").setDesc("When on (recommended), each top-level folder becomes its own independent tree, arranged side by side as a forest. When off, the whole vault is a single tree. Click 'Rebuild from vault' in the view after changing.").addToggle(n=>n.setValue(this.plugin.settings.forestByFolder).onChange(async i=>{this.plugin.settings.forestByFolder=i,await this.plugin.saveSettings()})),new Hn.Setting(t).setName("Cluster linked dots").setDesc("When on (recommended), dots in the same field that link to each other are pulled together into clusters, while unrelated dots sit further apart \u2014 keeping the field wedges but making related ideas group. Turn off for a purely even spread. Skipped automatically for trees over 500 notes to keep Obsidian responsive. Click 'Rebuild from vault' in the view after changing.").addToggle(n=>n.setValue(this.plugin.settings.clusterLinkedDots).onChange(async i=>{this.plugin.settings.clusterLinkedDots=i,await this.plugin.saveSettings()}))}};
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
