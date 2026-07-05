var Es=Object.defineProperty;var ch=Object.getOwnPropertyDescriptor;var hh=Object.getOwnPropertyNames;var uh=Object.prototype.hasOwnProperty;var dh=(s,e,t)=>e in s?Es(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var fh=(s,e)=>{for(var t in e)Es(s,t,{get:e[t],enumerable:!0})},ph=(s,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of hh(e))!uh.call(s,i)&&i!==t&&Es(s,i,{get:()=>e[i],enumerable:!(n=ch(e,i))||n.enumerable});return s};var mh=s=>ph(Es({},"__esModule",{value:!0}),s);var me=(s,e,t)=>(dh(s,typeof e!="symbol"?e+"":e,t),t);var g0={};fh(g0,{default:()=>Vr});module.exports=mh(g0);var Hn=require("obsidian");var kn=require("obsidian");var Ma="160",Qt={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ai={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},gh=0,Va=1,_h=2;var yc=1,xh=2,gn=3,Fn=0,Tt=1,qt=2;var Dn=0,Ot=1,Bn=2,Ga=3,Wa=4,vh=5,Jn=100,yh=101,Mh=102,Xa=103,Ya=104,bh=200,Sh=201,Eh=202,Th=203,Ro=204,Co=205,wh=206,Ah=207,Rh=208,Ch=209,Ph=210,Lh=211,Ih=212,Dh=213,Nh=214,Uh=0,Oh=1,Fh=2,tr=3,Bh=4,zh=5,kh=6,Hh=7,Mc=0,Vh=1,Gh=2,Nn=0,Wh=1,Xh=2,Yh=3,qh=4,Zh=5,Jh=6;var bc=300,Ui=301,Oi=302,Po=303,Lo=304,Lr=306,Io=1e3,Zt=1001,Do=1002,Ct=1003,qa=1004;var qr=1005;var kt=1006,$h=1007;var ss=1008;var Un=1009,Kh=1010,jh=1011,ba=1012,Sc=1013,Ln=1014,In=1015,rs=1016,Ec=1017,Tc=1018,jn=1020,Qh=1021,Jt=1023,eu=1024,tu=1025,Qn=1026,Fi=1027,nu=1028,wc=1029,iu=1030,Ac=1031,Rc=1033,Zr=33776,Jr=33777,$r=33778,Kr=33779,Za=35840,Ja=35841,$a=35842,Ka=35843,Cc=36196,ja=37492,Qa=37496,el=37808,tl=37809,nl=37810,il=37811,sl=37812,rl=37813,ol=37814,al=37815,ll=37816,cl=37817,hl=37818,ul=37819,dl=37820,fl=37821,jr=36492,pl=36494,ml=36495,su=36283,gl=36284,_l=36285,xl=36286;var nr=2300,ir=2301,Qr=2302,vl=2400,yl=2401,Ml=2402;var Pc=3e3,ei=3001,ru=3200,ou=3201,au=0,lu=1,Ht="",yt="srgb",xn="srgb-linear",Sa="display-p3",Ir="display-p3-linear",sr="linear",Qe="srgb",rr="rec709",or="p3";var hi=7680;var bl=519,cu=512,hu=513,uu=514,Lc=515,du=516,fu=517,pu=518,mu=519,No=35044;var Sl="300 es",Uo=1035,_n=2e3,ar=2001,an=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}},St=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],El=1234567,ji=Math.PI/180,os=180/Math.PI;function on(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(St[s&255]+St[s>>8&255]+St[s>>16&255]+St[s>>24&255]+"-"+St[e&255]+St[e>>8&255]+"-"+St[e>>16&15|64]+St[e>>24&255]+"-"+St[t&63|128]+St[t>>8&255]+"-"+St[t>>16&255]+St[t>>24&255]+St[n&255]+St[n>>8&255]+St[n>>16&255]+St[n>>24&255]).toLowerCase()}function gt(s,e,t){return Math.max(e,Math.min(t,s))}function Ea(s,e){return(s%e+e)%e}function gu(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function _u(s,e,t){return s!==e?(t-s)/(e-s):0}function Qi(s,e,t){return(1-t)*s+t*e}function xu(s,e,t,n){return Qi(s,e,1-Math.exp(-t*n))}function vu(s,e=1){return e-Math.abs(Ea(s,e*2)-e)}function yu(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Mu(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function bu(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Su(s,e){return s+Math.random()*(e-s)}function Eu(s){return s*(.5-Math.random())}function Tu(s){s!==void 0&&(El=s);let e=El+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function wu(s){return s*ji}function Au(s){return s*os}function Oo(s){return(s&s-1)===0&&s!==0}function Ru(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function lr(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Cu(s,e,t,n,i){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),d=r((e-n)/2),u=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":s.set(o*h,l*d,l*u,o*c);break;case"YZY":s.set(l*u,o*h,l*d,o*c);break;case"ZXZ":s.set(l*d,l*u,o*h,o*c);break;case"XZX":s.set(o*h,l*g,l*f,o*c);break;case"YXY":s.set(l*f,o*h,l*g,o*c);break;case"ZYZ":s.set(l*g,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function rn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ke(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var _s={DEG2RAD:ji,RAD2DEG:os,generateUUID:on,clamp:gt,euclideanModulo:Ea,mapLinear:gu,inverseLerp:_u,lerp:Qi,damp:xu,pingpong:vu,smoothstep:yu,smootherstep:Mu,randInt:bu,randFloat:Su,randFloatSpread:Eu,seededRandom:Tu,degToRad:wu,radToDeg:Au,isPowerOfTwo:Oo,ceilPowerOfTwo:Ru,floorPowerOfTwo:lr,setQuaternionFromProperEuler:Cu,normalize:Ke,denormalize:rn},re=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ye=class s{constructor(e,t,n,i,r,a,o,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],M=i[1],x=i[4],A=i[7],D=i[2],b=i[5],w=i[8];return r[0]=a*_+o*M+l*D,r[3]=a*m+o*x+l*b,r[6]=a*p+o*A+l*w,r[1]=c*_+h*M+d*D,r[4]=c*m+h*x+d*b,r[7]=c*p+h*A+d*w,r[2]=u*_+f*M+g*D,r[5]=u*m+f*x+g*b,r[8]=u*p+f*A+g*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,g=t*d+n*u+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=d*_,e[1]=(i*c-h*n)*_,e[2]=(o*n-i*a)*_,e[3]=u*_,e[4]=(h*t-i*l)*_,e[5]=(i*r-o*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(eo.makeScale(e,t)),this}rotate(e){return this.premultiply(eo.makeRotation(-e)),this}translate(e,t){return this.premultiply(eo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},eo=new Ye;function Ic(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function cr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Pu(){let s=cr("canvas");return s.style.display="block",s}var Tl={};function es(s){s in Tl||(Tl[s]=!0,console.warn(s))}var wl=new Ye().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Al=new Ye().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ts={[xn]:{transfer:sr,primaries:rr,toReference:s=>s,fromReference:s=>s},[yt]:{transfer:Qe,primaries:rr,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Ir]:{transfer:sr,primaries:or,toReference:s=>s.applyMatrix3(Al),fromReference:s=>s.applyMatrix3(wl)},[Sa]:{transfer:Qe,primaries:or,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Al),fromReference:s=>s.applyMatrix3(wl).convertLinearToSRGB()}},Lu=new Set([xn,Ir]),je={enabled:!0,_workingColorSpace:xn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Lu.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;let n=Ts[e].toReference,i=Ts[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Ts[s].primaries},getTransfer:function(s){return s===Ht?sr:Ts[s].transfer}};function Di(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function to(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var ui,hr=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ui===void 0&&(ui=cr("canvas")),ui.width=e.width,ui.height=e.height;let n=ui.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ui}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=cr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Di(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Di(t[n]/255)*255):t[n]=Di(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Iu=0,ur=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Iu++}),this.uuid=on(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(no(i[a].image)):r.push(no(i[a]))}else r=no(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function no(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?hr.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Du=0,Vt=class s extends an{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=Zt,i=Zt,r=kt,a=ss,o=Jt,l=Un,c=s.DEFAULT_ANISOTROPY,h=Ht){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Du++}),this.uuid=on(),this.name="",this.source=new ur(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(es("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===ei?yt:Ht),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Io:e.x=e.x-Math.floor(e.x);break;case Zt:e.x=e.x<0?0:1;break;case Do:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Io:e.y=e.y-Math.floor(e.y);break;case Zt:e.y=e.y<0?0:1;break;case Do:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return es("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===yt?ei:Pc}set encoding(e){es("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ei?yt:Ht}};Vt.DEFAULT_IMAGE=null;Vt.DEFAULT_MAPPING=bc;Vt.DEFAULT_ANISOTROPY=1;var Mt=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(c+1)/2,A=(f+1)/2,D=(p+1)/2,b=(h+u)/4,w=(d+_)/4,z=(g+m)/4;return x>A&&x>D?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=b/n,r=w/n):A>D?A<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(A),n=b/i,r=z/i):D<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(D),n=w/r,i=z/r),this.set(n,i,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(d-_)/M,this.z=(u-h)/M,this.w=Math.acos((c+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Fo=class extends an{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t);let i={width:e,height:t,depth:1};n.encoding!==void 0&&(es("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ei?yt:Ht),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Vt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new ur(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},vn=class extends Fo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},dr=class extends Vt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Zt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Bo=class extends Vt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Zt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var $t=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],u=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=u,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(d!==_||l!==u||c!==f||h!==g){let m=1-o,p=l*u+c*f+h*g+d*_,M=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){let D=Math.sqrt(x),b=Math.atan2(D,p*M);m=Math.sin(m*b)/D,o=Math.sin(o*b)/D}let A=o*M;if(l=l*m+u*A,c=c*m+f*A,h=h*m+g*A,d=d*m+_*A,m===1-o){let D=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=D,c*=D,h*=D,d*=D}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*d+l*f-c*u,e[t+1]=l*g+h*u+c*d-o*f,e[t+2]=c*g+h*f+o*u-l*d,e[t+3]=h*g-o*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),d=o(r/2),u=l(n/2),f=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=a*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Rl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Rl.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-r*i),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=i+l*d+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return io.copy(this).projectOnVector(e),this.sub(io)}reflect(e){return this.sub(io.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},io=new L,Rl=new $t,ti=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Wt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Wt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Wt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Wt):Wt.fromBufferAttribute(r,a),Wt.applyMatrix4(e.matrixWorld),this.expandByPoint(Wt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ws.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ws.copy(n.boundingBox)),ws.applyMatrix4(e.matrixWorld),this.union(ws)}let i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Wt),Wt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xi),As.subVectors(this.max,Xi),di.subVectors(e.a,Xi),fi.subVectors(e.b,Xi),pi.subVectors(e.c,Xi),wn.subVectors(fi,di),An.subVectors(pi,fi),Wn.subVectors(di,pi);let t=[0,-wn.z,wn.y,0,-An.z,An.y,0,-Wn.z,Wn.y,wn.z,0,-wn.x,An.z,0,-An.x,Wn.z,0,-Wn.x,-wn.y,wn.x,0,-An.y,An.x,0,-Wn.y,Wn.x,0];return!so(t,di,fi,pi,As)||(t=[1,0,0,0,1,0,0,0,1],!so(t,di,fi,pi,As))?!1:(Rs.crossVectors(wn,An),t=[Rs.x,Rs.y,Rs.z],so(t,di,fi,pi,As))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(un),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},un=[new L,new L,new L,new L,new L,new L,new L,new L],Wt=new L,ws=new ti,di=new L,fi=new L,pi=new L,wn=new L,An=new L,Wn=new L,Xi=new L,As=new L,Rs=new L,Xn=new L;function so(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Xn.fromArray(s,r);let o=i.x*Math.abs(Xn.x)+i.y*Math.abs(Xn.y)+i.z*Math.abs(Xn.z),l=e.dot(Xn),c=t.dot(Xn),h=n.dot(Xn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Nu=new ti,Yi=new L,ro=new L,Bi=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Nu.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Yi.subVectors(e,this.center);let t=Yi.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Yi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ro.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Yi.copy(e.center).add(ro)),this.expandByPoint(Yi.copy(e.center).sub(ro))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},dn=new L,oo=new L,Cs=new L,Rn=new L,ao=new L,Ps=new L,lo=new L,ni=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,dn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=dn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(dn.copy(this.origin).addScaledVector(this.direction,t),dn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){oo.copy(e).add(t).multiplyScalar(.5),Cs.copy(t).sub(e).normalize(),Rn.copy(this.origin).sub(oo);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Cs),o=Rn.dot(this.direction),l=-Rn.dot(Cs),c=Rn.lengthSq(),h=Math.abs(1-a*a),d,u,f,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let _=1/h;d*=_,u*=_,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(oo).addScaledVector(Cs,u),f}intersectSphere(e,t){dn.subVectors(e.center,this.origin);let n=dn.dot(this.direction),i=dn.dot(dn)-n*n,r=e.radius*e.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,dn)!==null}intersectTriangle(e,t,n,i,r){ao.subVectors(t,e),Ps.subVectors(n,e),lo.crossVectors(ao,Ps);let a=this.direction.dot(lo),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Rn.subVectors(this.origin,e);let l=o*this.direction.dot(Ps.crossVectors(Rn,Ps));if(l<0)return null;let c=o*this.direction.dot(ao.cross(Rn));if(c<0||l+c>a)return null;let h=-o*Rn.dot(lo);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},lt=class s{constructor(e,t,n,i,r,a,o,l,c,h,d,u,f,g,_,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,h,d,u,f,g,_,m)}set(e,t,n,i,r,a,o,l,c,h,d,u,f,g,_,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/mi.setFromMatrixColumn(e,0).length(),r=1/mi.setFromMatrixColumn(e,1).length(),a=1/mi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=a*h,f=a*d,g=o*h,_=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=u-_*c,t[9]=-o*l,t[2]=_-u*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,f=l*d,g=c*h,_=c*d;t[0]=u+_*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=_+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,f=l*d,g=c*h,_=c*d;t[0]=u-_*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=_-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,f=a*d,g=o*h,_=o*d;t[0]=l*h,t[4]=g*c-f,t[8]=u*c+_,t[1]=l*d,t[5]=_*c+u,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-u*d,t[8]=g*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*d+g,t[10]=u-_*d}else if(e.order==="XZY"){let u=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+_,t[5]=a*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*h,t[10]=_*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Uu,e,Ou)}lookAt(e,t,n){let i=this.elements;return It.subVectors(e,t),It.lengthSq()===0&&(It.z=1),It.normalize(),Cn.crossVectors(n,It),Cn.lengthSq()===0&&(Math.abs(n.z)===1?It.x+=1e-4:It.z+=1e-4,It.normalize(),Cn.crossVectors(n,It)),Cn.normalize(),Ls.crossVectors(It,Cn),i[0]=Cn.x,i[4]=Ls.x,i[8]=It.x,i[1]=Cn.y,i[5]=Ls.y,i[9]=It.y,i[2]=Cn.z,i[6]=Ls.z,i[10]=It.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],M=n[3],x=n[7],A=n[11],D=n[15],b=i[0],w=i[4],z=i[8],v=i[12],T=i[1],N=i[5],Y=i[9],k=i[13],C=i[2],U=i[6],B=i[10],Z=i[14],q=i[3],G=i[7],J=i[11],j=i[15];return r[0]=a*b+o*T+l*C+c*q,r[4]=a*w+o*N+l*U+c*G,r[8]=a*z+o*Y+l*B+c*J,r[12]=a*v+o*k+l*Z+c*j,r[1]=h*b+d*T+u*C+f*q,r[5]=h*w+d*N+u*U+f*G,r[9]=h*z+d*Y+u*B+f*J,r[13]=h*v+d*k+u*Z+f*j,r[2]=g*b+_*T+m*C+p*q,r[6]=g*w+_*N+m*U+p*G,r[10]=g*z+_*Y+m*B+p*J,r[14]=g*v+_*k+m*Z+p*j,r[3]=M*b+x*T+A*C+D*q,r[7]=M*w+x*N+A*U+D*G,r[11]=M*z+x*Y+A*B+D*J,r[15]=M*v+x*k+A*Z+D*j,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*l*d-i*c*d-r*o*u+n*c*u+i*o*f-n*l*f)+_*(+t*l*f-t*c*u+r*a*u-i*a*f+i*c*h-r*l*h)+m*(+t*c*d-t*o*f-r*a*d+n*a*f+r*o*h-n*c*h)+p*(-i*o*h-t*l*d+t*o*u+i*a*d-n*a*u+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],M=d*m*c-_*u*c+_*l*f-o*m*f-d*l*p+o*u*p,x=g*u*c-h*m*c-g*l*f+a*m*f+h*l*p-a*u*p,A=h*_*c-g*d*c+g*o*f-a*_*f-h*o*p+a*d*p,D=g*d*l-h*_*l-g*o*u+a*_*u+h*o*m-a*d*m,b=t*M+n*x+i*A+r*D;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/b;return e[0]=M*w,e[1]=(_*u*r-d*m*r-_*i*f+n*m*f+d*i*p-n*u*p)*w,e[2]=(o*m*r-_*l*r+_*i*c-n*m*c-o*i*p+n*l*p)*w,e[3]=(d*l*r-o*u*r-d*i*c+n*u*c+o*i*f-n*l*f)*w,e[4]=x*w,e[5]=(h*m*r-g*u*r+g*i*f-t*m*f-h*i*p+t*u*p)*w,e[6]=(g*l*r-a*m*r-g*i*c+t*m*c+a*i*p-t*l*p)*w,e[7]=(a*u*r-h*l*r+h*i*c-t*u*c-a*i*f+t*l*f)*w,e[8]=A*w,e[9]=(g*d*r-h*_*r-g*n*f+t*_*f+h*n*p-t*d*p)*w,e[10]=(a*_*r-g*o*r+g*n*c-t*_*c-a*n*p+t*o*p)*w,e[11]=(h*o*r-a*d*r-h*n*c+t*d*c+a*n*f-t*o*f)*w,e[12]=D*w,e[13]=(h*_*i-g*d*i+g*n*u-t*_*u-h*n*m+t*d*m)*w,e[14]=(g*o*i-a*_*i-g*n*l+t*_*l+a*n*m-t*o*m)*w,e[15]=(a*d*i-h*o*i+h*n*l-t*d*l-a*n*u+t*o*u)*w,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,g=r*d,_=a*h,m=a*d,p=o*d,M=l*c,x=l*h,A=l*d,D=n.x,b=n.y,w=n.z;return i[0]=(1-(_+p))*D,i[1]=(f+A)*D,i[2]=(g-x)*D,i[3]=0,i[4]=(f-A)*b,i[5]=(1-(u+p))*b,i[6]=(m+M)*b,i[7]=0,i[8]=(g+x)*w,i[9]=(m-M)*w,i[10]=(1-(u+_))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=mi.set(i[0],i[1],i[2]).length(),a=mi.set(i[4],i[5],i[6]).length(),o=mi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Xt.copy(this);let c=1/r,h=1/a,d=1/o;return Xt.elements[0]*=c,Xt.elements[1]*=c,Xt.elements[2]*=c,Xt.elements[4]*=h,Xt.elements[5]*=h,Xt.elements[6]*=h,Xt.elements[8]*=d,Xt.elements[9]*=d,Xt.elements[10]*=d,t.setFromRotationMatrix(Xt),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=_n){let l=this.elements,c=2*r/(t-e),h=2*r/(n-i),d=(t+e)/(t-e),u=(n+i)/(n-i),f,g;if(o===_n)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===ar)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=_n){let l=this.elements,c=1/(t-e),h=1/(n-i),d=1/(a-r),u=(t+e)*c,f=(n+i)*h,g,_;if(o===_n)g=(a+r)*d,_=-2*d;else if(o===ar)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},mi=new L,Xt=new lt,Uu=new L(0,0,0),Ou=new L(1,1,1),Cn=new L,Ls=new L,It=new L,Cl=new lt,Pl=new $t,fr=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(gt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-gt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Cl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Cl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Pl.setFromEuler(this),this.setFromQuaternion(Pl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};fr.DEFAULT_ORDER="XYZ";var as=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Fu=0,Ll=new L,gi=new $t,fn=new lt,Is=new L,qi=new L,Bu=new L,zu=new $t,Il=new L(1,0,0),Dl=new L(0,1,0),Nl=new L(0,0,1),ku={type:"added"},Hu={type:"removed"},Ft=class s extends an{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fu++}),this.uuid=on(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new L,t=new fr,n=new $t,i=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new lt},normalMatrix:{value:new Ye}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new as,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return gi.setFromAxisAngle(e,t),this.quaternion.multiply(gi),this}rotateOnWorldAxis(e,t){return gi.setFromAxisAngle(e,t),this.quaternion.premultiply(gi),this}rotateX(e){return this.rotateOnAxis(Il,e)}rotateY(e){return this.rotateOnAxis(Dl,e)}rotateZ(e){return this.rotateOnAxis(Nl,e)}translateOnAxis(e,t){return Ll.copy(e).applyQuaternion(this.quaternion),this.position.add(Ll.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Il,e)}translateY(e){return this.translateOnAxis(Dl,e)}translateZ(e){return this.translateOnAxis(Nl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Is.copy(e):Is.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),qi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fn.lookAt(qi,Is,this.up):fn.lookAt(Is,qi,this.up),this.quaternion.setFromRotationMatrix(fn),i&&(fn.extractRotation(i.matrixWorld),gi.setFromRotationMatrix(fn),this.quaternion.premultiply(gi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(ku)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Hu)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(fn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qi,e,Bu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qi,zu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let i=this.children;for(let r=0,a=i.length;r<a;r++){let o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};Ft.DEFAULT_UP=new L(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Yt=new L,pn=new L,co=new L,mn=new L,_i=new L,xi=new L,Ul=new L,ho=new L,uo=new L,fo=new L,Ds=!1,Kn=class s{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Yt.subVectors(e,t),i.cross(Yt);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Yt.subVectors(i,t),pn.subVectors(n,t),co.subVectors(e,t);let a=Yt.dot(Yt),o=Yt.dot(pn),l=Yt.dot(co),c=pn.dot(pn),h=pn.dot(co),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,mn)===null?!1:mn.x>=0&&mn.y>=0&&mn.x+mn.y<=1}static getUV(e,t,n,i,r,a,o,l){return Ds===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ds=!0),this.getInterpolation(e,t,n,i,r,a,o,l)}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,mn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,mn.x),l.addScaledVector(a,mn.y),l.addScaledVector(o,mn.z),l)}static isFrontFacing(e,t,n,i){return Yt.subVectors(n,t),pn.subVectors(e,t),Yt.cross(pn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yt.subVectors(this.c,this.b),pn.subVectors(this.a,this.b),Yt.cross(pn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return Ds===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ds=!0),s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,a,o;_i.subVectors(i,n),xi.subVectors(r,n),ho.subVectors(e,n);let l=_i.dot(ho),c=xi.dot(ho);if(l<=0&&c<=0)return t.copy(n);uo.subVectors(e,i);let h=_i.dot(uo),d=xi.dot(uo);if(h>=0&&d<=h)return t.copy(i);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(_i,a);fo.subVectors(e,r);let f=_i.dot(fo),g=xi.dot(fo);if(g>=0&&f<=g)return t.copy(r);let _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(xi,o);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return Ul.subVectors(r,i),o=(d-h)/(d-h+(f-g)),t.copy(i).addScaledVector(Ul,o);let p=1/(m+_+u);return a=_*p,o=u*p,t.copy(n).addScaledVector(_i,a).addScaledVector(xi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Dc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pn={h:0,s:0,l:0},Ns={h:0,s:0,l:0};function po(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Be=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=je.workingColorSpace){return this.r=e,this.g=t,this.b=n,je.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=je.workingColorSpace){if(e=Ea(e,1),t=gt(t,0,1),n=gt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=po(a,r,e+1/3),this.g=po(a,r,e),this.b=po(a,r,e-1/3)}return je.toWorkingColorSpace(this,i),this}setStyle(e,t=yt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yt){let n=Dc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Di(e.r),this.g=Di(e.g),this.b=Di(e.b),this}copyLinearToSRGB(e){return this.r=to(e.r),this.g=to(e.g),this.b=to(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yt){return je.fromWorkingColorSpace(Et.copy(this),e),Math.round(gt(Et.r*255,0,255))*65536+Math.round(gt(Et.g*255,0,255))*256+Math.round(gt(Et.b*255,0,255))}getHexString(e=yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.fromWorkingColorSpace(Et.copy(this),t);let n=Et.r,i=Et.g,r=Et.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=je.workingColorSpace){return je.fromWorkingColorSpace(Et.copy(this),t),e.r=Et.r,e.g=Et.g,e.b=Et.b,e}getStyle(e=yt){je.fromWorkingColorSpace(Et.copy(this),e);let t=Et.r,n=Et.g,i=Et.b;return e!==yt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Pn),this.setHSL(Pn.h+e,Pn.s+t,Pn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Pn),e.getHSL(Ns);let n=Qi(Pn.h,Ns.h,t),i=Qi(Pn.s,Ns.s,t),r=Qi(Pn.l,Ns.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Et=new Be;Be.NAMES=Dc;var Vu=0,zn=class extends an{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vu++}),this.uuid=on(),this.name="",this.type="Material",this.blending=Ot,this.side=Fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ro,this.blendDst=Co,this.blendEquation=Jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=tr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hi,this.stencilZFail=hi,this.stencilZPass=hi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ot&&(n.blending=this.blending),this.side!==Fn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ro&&(n.blendSrc=this.blendSrc),this.blendDst!==Co&&(n.blendDst=this.blendDst),this.blendEquation!==Jn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==tr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==hi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==hi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},ii=class extends zn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Mc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var ht=new L,Us=new re,xt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=No,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Us.fromBufferAttribute(this,t),Us.applyMatrix3(e),this.setXY(t,Us.x,Us.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix3(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix4(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyNormalMatrix(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.transformDirection(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=rn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ke(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=rn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=rn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=rn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=rn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),i=Ke(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),i=Ke(i,this.array),r=Ke(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==No&&(e.usage=this.usage),e}};var pr=class extends xt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var mr=class extends xt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var wt=class extends xt{constructor(e,t,n){super(new Float32Array(e),t,n)}};var Gu=0,zt=new lt,mo=new Ft,vi=new L,Dt=new ti,Zi=new ti,mt=new L,vt=class s extends an{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gu++}),this.uuid=on(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ic(e)?mr:pr)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ye().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zt.makeRotationFromQuaternion(e),this.applyMatrix4(zt),this}rotateX(e){return zt.makeRotationX(e),this.applyMatrix4(zt),this}rotateY(e){return zt.makeRotationY(e),this.applyMatrix4(zt),this}rotateZ(e){return zt.makeRotationZ(e),this.applyMatrix4(zt),this}translate(e,t,n){return zt.makeTranslation(e,t,n),this.applyMatrix4(zt),this}scale(e,t,n){return zt.makeScale(e,t,n),this.applyMatrix4(zt),this}lookAt(e){return mo.lookAt(e),mo.updateMatrix(),this.applyMatrix4(mo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vi).negate(),this.translate(vi.x,vi.y,vi.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new wt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ti);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];Dt.setFromBufferAttribute(r),this.morphTargetsRelative?(mt.addVectors(this.boundingBox.min,Dt.min),this.boundingBox.expandByPoint(mt),mt.addVectors(this.boundingBox.max,Dt.max),this.boundingBox.expandByPoint(mt)):(this.boundingBox.expandByPoint(Dt.min),this.boundingBox.expandByPoint(Dt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(Dt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Zi.setFromBufferAttribute(o),this.morphTargetsRelative?(mt.addVectors(Dt.min,Zi.min),Dt.expandByPoint(mt),mt.addVectors(Dt.max,Zi.max),Dt.expandByPoint(mt)):(Dt.expandByPoint(Zi.min),Dt.expandByPoint(Zi.max))}Dt.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)mt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(mt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)mt.fromBufferAttribute(o,c),l&&(vi.fromBufferAttribute(e,c),mt.add(vi)),i=Math.max(i,n.distanceToSquared(mt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,i=t.position.array,r=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xt(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let T=0;T<o;T++)c[T]=new L,h[T]=new L;let d=new L,u=new L,f=new L,g=new re,_=new re,m=new re,p=new L,M=new L;function x(T,N,Y){d.fromArray(i,T*3),u.fromArray(i,N*3),f.fromArray(i,Y*3),g.fromArray(a,T*2),_.fromArray(a,N*2),m.fromArray(a,Y*2),u.sub(d),f.sub(d),_.sub(g),m.sub(g);let k=1/(_.x*m.y-m.x*_.y);isFinite(k)&&(p.copy(u).multiplyScalar(m.y).addScaledVector(f,-_.y).multiplyScalar(k),M.copy(f).multiplyScalar(_.x).addScaledVector(u,-m.x).multiplyScalar(k),c[T].add(p),c[N].add(p),c[Y].add(p),h[T].add(M),h[N].add(M),h[Y].add(M))}let A=this.groups;A.length===0&&(A=[{start:0,count:n.length}]);for(let T=0,N=A.length;T<N;++T){let Y=A[T],k=Y.start,C=Y.count;for(let U=k,B=k+C;U<B;U+=3)x(n[U+0],n[U+1],n[U+2])}let D=new L,b=new L,w=new L,z=new L;function v(T){w.fromArray(r,T*3),z.copy(w);let N=c[T];D.copy(N),D.sub(w.multiplyScalar(w.dot(N))).normalize(),b.crossVectors(z,N);let k=b.dot(h[T])<0?-1:1;l[T*4]=D.x,l[T*4+1]=D.y,l[T*4+2]=D.z,l[T*4+3]=k}for(let T=0,N=A.length;T<N;++T){let Y=A[T],k=Y.start,C=Y.count;for(let U=k,B=k+C;U<B;U+=3)v(n[U+0]),v(n[U+1]),v(n[U+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new xt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let i=new L,r=new L,a=new L,o=new L,l=new L,c=new L,h=new L,d=new L;if(e)for(let u=0,f=e.count;u<f;u+=3){let g=e.getX(u+0),_=e.getX(u+1),m=e.getX(u+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)i.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)mt.fromBufferAttribute(e,t),mt.normalize(),e.setXYZ(t,mt.x,mt.y,mt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new xt(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=e(u,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ol=new lt,Yn=new ni,Os=new Bi,Fl=new L,yi=new L,Mi=new L,bi=new L,go=new L,Fs=new L,Bs=new re,zs=new re,ks=new re,Bl=new L,zl=new L,kl=new L,Hs=new L,Vs=new L,Ut=class extends Ft{constructor(e=new vt,t=new ii){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(r&&o){Fs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(go.fromBufferAttribute(d,e),a?Fs.addScaledVector(go,h):Fs.addScaledVector(go.sub(t),h))}t.add(Fs)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Os.copy(n.boundingSphere),Os.applyMatrix4(r),Yn.copy(e.ray).recast(e.near),!(Os.containsPoint(Yn.origin)===!1&&(Yn.intersectSphere(Os,Fl)===null||Yn.origin.distanceToSquared(Fl)>(e.far-e.near)**2))&&(Ol.copy(r).invert(),Yn.copy(e.ray).applyMatrix4(Ol),!(n.boundingBox!==null&&Yn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Yn)))}_computeIntersections(e,t,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){let m=u[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),x=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let A=M,D=x;A<D;A+=3){let b=o.getX(A),w=o.getX(A+1),z=o.getX(A+2);i=Gs(this,p,e,n,c,h,d,b,w,z),i&&(i.faceIndex=Math.floor(A/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let M=o.getX(m),x=o.getX(m+1),A=o.getX(m+2);i=Gs(this,a,e,n,c,h,d,M,x,A),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){let m=u[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),x=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let A=M,D=x;A<D;A+=3){let b=A,w=A+1,z=A+2;i=Gs(this,p,e,n,c,h,d,b,w,z),i&&(i.faceIndex=Math.floor(A/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let M=m,x=m+1,A=m+2;i=Gs(this,a,e,n,c,h,d,M,x,A),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function Wu(s,e,t,n,i,r,a,o){let l;if(e.side===Tt?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===Fn,o),l===null)return null;Vs.copy(o),Vs.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(Vs);return c<t.near||c>t.far?null:{distance:c,point:Vs.clone(),object:s}}function Gs(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,yi),s.getVertexPosition(l,Mi),s.getVertexPosition(c,bi);let h=Wu(s,e,t,n,yi,Mi,bi,Hs);if(h){i&&(Bs.fromBufferAttribute(i,o),zs.fromBufferAttribute(i,l),ks.fromBufferAttribute(i,c),h.uv=Kn.getInterpolation(Hs,yi,Mi,bi,Bs,zs,ks,new re)),r&&(Bs.fromBufferAttribute(r,o),zs.fromBufferAttribute(r,l),ks.fromBufferAttribute(r,c),h.uv1=Kn.getInterpolation(Hs,yi,Mi,bi,Bs,zs,ks,new re),h.uv2=h.uv1),a&&(Bl.fromBufferAttribute(a,o),zl.fromBufferAttribute(a,l),kl.fromBufferAttribute(a,c),h.normal=Kn.getInterpolation(Hs,yi,Mi,bi,Bl,zl,kl,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new L,materialIndex:0};Kn.getNormal(yi,Mi,bi,d.normal),h.face=d}return h}var ls=class s extends vt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new wt(c,3)),this.setAttribute("normal",new wt(h,3)),this.setAttribute("uv",new wt(d,2));function g(_,m,p,M,x,A,D,b,w,z,v){let T=A/w,N=D/z,Y=A/2,k=D/2,C=b/2,U=w+1,B=z+1,Z=0,q=0,G=new L;for(let J=0;J<B;J++){let j=J*N-k;for(let he=0;he<U;he++){let W=he*T-Y;G[_]=W*M,G[m]=j*x,G[p]=C,c.push(G.x,G.y,G.z),G[_]=0,G[m]=0,G[p]=b>0?1:-1,h.push(G.x,G.y,G.z),d.push(he/w),d.push(1-J/z),Z+=1}}for(let J=0;J<z;J++)for(let j=0;j<w;j++){let he=u+j+U*J,W=u+j+U*(J+1),Q=u+(j+1)+U*(J+1),fe=u+(j+1)+U*J;l.push(he,W,fe),l.push(W,Q,fe),q+=6}o.addGroup(f,q,v),f+=q,u+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function zi(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Rt(s){let e={};for(let t=0;t<s.length;t++){let n=zi(s[t]);for(let i in n)e[i]=n[i]}return e}function Xu(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Nc(s){return s.getRenderTarget()===null?s.outputColorSpace:je.workingColorSpace}var Yu={clone:zi,merge:Rt},qu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,yn=class extends zn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qu,this.fragmentShader=Zu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zi(e.uniforms),this.uniformsGroups=Xu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},gr=class extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=_n}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Pt=class extends gr{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=os*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ji*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return os*2*Math.atan(Math.tan(ji*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ji*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Si=-90,Ei=1,zo=class extends Ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Pt(Si,Ei,e,t);i.layers=this.layers,this.add(i);let r=new Pt(Si,Ei,e,t);r.layers=this.layers,this.add(r);let a=new Pt(Si,Ei,e,t);a.layers=this.layers,this.add(a);let o=new Pt(Si,Ei,e,t);o.layers=this.layers,this.add(o);let l=new Pt(Si,Ei,e,t);l.layers=this.layers,this.add(l);let c=new Pt(Si,Ei,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===_n)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ar)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},_r=class extends Vt{constructor(e,t,n,i,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Ui,super(e,t,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ko=class extends vn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(es("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ei?yt:Ht),this.texture=new _r(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:kt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ls(5,5,5),r=new yn({name:"CubemapFromEquirect",uniforms:zi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Tt,blending:Dn});r.uniforms.tEquirect.value=t;let a=new Ut(i,r),o=t.minFilter;return t.minFilter===ss&&(t.minFilter=kt),new zo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}},_o=new L,Ju=new L,$u=new Ye,Nt=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=_o.subVectors(n,t).cross(Ju.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(_o),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||$u.getNormalMatrix(e),i=this.coplanarPoint(_o).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},qn=new Bi,Ws=new L,ki=class{constructor(e=new Nt,t=new Nt,n=new Nt,i=new Nt,r=new Nt,a=new Nt){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=_n){let n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],d=i[6],u=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],M=i[13],x=i[14],A=i[15];if(n[0].setComponents(l-r,u-c,m-f,A-p).normalize(),n[1].setComponents(l+r,u+c,m+f,A+p).normalize(),n[2].setComponents(l+a,u+h,m+g,A+M).normalize(),n[3].setComponents(l-a,u-h,m-g,A-M).normalize(),n[4].setComponents(l-o,u-d,m-_,A-x).normalize(),t===_n)n[5].setComponents(l+o,u+d,m+_,A+x).normalize();else if(t===ar)n[5].setComponents(o,d,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qn)}intersectsSprite(e){return qn.center.set(0,0,0),qn.radius=.7071067811865476,qn.applyMatrix4(e.matrixWorld),this.intersectsSphere(qn)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Ws.x=i.normal.x>0?e.max.x:e.min.x,Ws.y=i.normal.y>0?e.max.y:e.min.y,Ws.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ws)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Uc(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Ku(s,e){let t=e.isWebGL2,n=new WeakMap;function i(c,h){let d=c.array,u=c.usage,f=d.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,d,u),c.onUploadCallback();let _;if(d instanceof Float32Array)_=s.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=s.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=s.SHORT;else if(d instanceof Uint32Array)_=s.UNSIGNED_INT;else if(d instanceof Int32Array)_=s.INT;else if(d instanceof Int8Array)_=s.BYTE;else if(d instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:f}}function r(c,h,d){let u=h.array,f=h._updateRange,g=h.updateRanges;if(s.bindBuffer(d,c),f.count===-1&&g.length===0&&s.bufferSubData(d,0,u),g.length!==0){for(let _=0,m=g.length;_<m;_++){let p=g[_];t?s.bufferSubData(d,p.start*u.BYTES_PER_ELEMENT,u,p.start,p.count):s.bufferSubData(d,p.start*u.BYTES_PER_ELEMENT,u.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}f.count!==-1&&(t?s.bufferSubData(d,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count):s.bufferSubData(d,f.offset*u.BYTES_PER_ELEMENT,u.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(s.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let u=n.get(c);(!u||u.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let d=n.get(c);if(d===void 0)n.set(c,i(c,h));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,c,h),d.version=c.version}}return{get:a,remove:o,update:l}}var Ho=class s extends vt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,d=e/o,u=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){let M=p*u-a;for(let x=0;x<c;x++){let A=x*d-r;g.push(A,-M,0),_.push(0,0,1),m.push(x/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){let x=M+c*p,A=M+c*(p+1),D=M+1+c*(p+1),b=M+1+c*p;f.push(x,A,b),f.push(A,D,b)}this.setIndex(f),this.setAttribute("position",new wt(g,3)),this.setAttribute("normal",new wt(_,3)),this.setAttribute("uv",new wt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},ju=`#ifdef USE_ALPHAHASH
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
#endif`,xd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Sd=`vec3 transformedNormal = objectNormal;
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
#endif`,Ed=`#ifdef USE_DISPLACEMENTMAP
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
#endif`,xf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vf=`#ifndef FLAT_SHADED
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
#endif`,Sf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ef=`#ifdef USE_CLEARCOATMAP
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
}`,xp=`#define NORMAL
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
}`,vp=`#define NORMAL
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
}`,Sp=`#define STANDARD
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
}`,Ep=`#define TOON
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
}`,Ve={alphahash_fragment:ju,alphahash_pars_fragment:Qu,alphamap_fragment:ed,alphamap_pars_fragment:td,alphatest_fragment:nd,alphatest_pars_fragment:id,aomap_fragment:sd,aomap_pars_fragment:rd,batching_pars_vertex:od,batching_vertex:ad,begin_vertex:ld,beginnormal_vertex:cd,bsdfs:hd,iridescence_fragment:ud,bumpmap_pars_fragment:dd,clipping_planes_fragment:fd,clipping_planes_pars_fragment:pd,clipping_planes_pars_vertex:md,clipping_planes_vertex:gd,color_fragment:_d,color_pars_fragment:xd,color_pars_vertex:vd,color_vertex:yd,common:Md,cube_uv_reflection_fragment:bd,defaultnormal_vertex:Sd,displacementmap_pars_vertex:Ed,displacementmap_vertex:Td,emissivemap_fragment:wd,emissivemap_pars_fragment:Ad,colorspace_fragment:Rd,colorspace_pars_fragment:Cd,envmap_fragment:Pd,envmap_common_pars_fragment:Ld,envmap_pars_fragment:Id,envmap_pars_vertex:Dd,envmap_physical_pars_fragment:Xd,envmap_vertex:Nd,fog_vertex:Ud,fog_pars_vertex:Od,fog_fragment:Fd,fog_pars_fragment:Bd,gradientmap_pars_fragment:zd,lightmap_fragment:kd,lightmap_pars_fragment:Hd,lights_lambert_fragment:Vd,lights_lambert_pars_fragment:Gd,lights_pars_begin:Wd,lights_toon_fragment:Yd,lights_toon_pars_fragment:qd,lights_phong_fragment:Zd,lights_phong_pars_fragment:Jd,lights_physical_fragment:$d,lights_physical_pars_fragment:Kd,lights_fragment_begin:jd,lights_fragment_maps:Qd,lights_fragment_end:ef,logdepthbuf_fragment:tf,logdepthbuf_pars_fragment:nf,logdepthbuf_pars_vertex:sf,logdepthbuf_vertex:rf,map_fragment:of,map_pars_fragment:af,map_particle_fragment:lf,map_particle_pars_fragment:cf,metalnessmap_fragment:hf,metalnessmap_pars_fragment:uf,morphcolor_vertex:df,morphnormal_vertex:ff,morphtarget_pars_vertex:pf,morphtarget_vertex:mf,normal_fragment_begin:gf,normal_fragment_maps:_f,normal_pars_fragment:xf,normal_pars_vertex:vf,normal_vertex:yf,normalmap_pars_fragment:Mf,clearcoat_normal_fragment_begin:bf,clearcoat_normal_fragment_maps:Sf,clearcoat_pars_fragment:Ef,iridescence_pars_fragment:Tf,opaque_fragment:wf,packing:Af,premultiplied_alpha_fragment:Rf,project_vertex:Cf,dithering_fragment:Pf,dithering_pars_fragment:Lf,roughnessmap_fragment:If,roughnessmap_pars_fragment:Df,shadowmap_pars_fragment:Nf,shadowmap_pars_vertex:Uf,shadowmap_vertex:Of,shadowmask_pars_fragment:Ff,skinbase_vertex:Bf,skinning_pars_vertex:zf,skinning_vertex:kf,skinnormal_vertex:Hf,specularmap_fragment:Vf,specularmap_pars_fragment:Gf,tonemapping_fragment:Wf,tonemapping_pars_fragment:Xf,transmission_fragment:Yf,transmission_pars_fragment:qf,uv_pars_fragment:Zf,uv_pars_vertex:Jf,uv_vertex:$f,worldpos_vertex:Kf,background_vert:jf,background_frag:Qf,backgroundCube_vert:ep,backgroundCube_frag:tp,cube_vert:np,cube_frag:ip,depth_vert:sp,depth_frag:rp,distanceRGBA_vert:op,distanceRGBA_frag:ap,equirect_vert:lp,equirect_frag:cp,linedashed_vert:hp,linedashed_frag:up,meshbasic_vert:dp,meshbasic_frag:fp,meshlambert_vert:pp,meshlambert_frag:mp,meshmatcap_vert:gp,meshmatcap_frag:_p,meshnormal_vert:xp,meshnormal_frag:vp,meshphong_vert:yp,meshphong_frag:Mp,meshphysical_vert:bp,meshphysical_frag:Sp,meshtoon_vert:Ep,meshtoon_frag:Tp,points_vert:wp,points_frag:Ap,shadow_vert:Rp,shadow_frag:Cp,sprite_vert:Pp,sprite_frag:Lp},ue={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},sn={basic:{uniforms:Rt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Rt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Be(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Rt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Rt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Rt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Be(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Rt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Rt([ue.points,ue.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Rt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Rt([ue.common,ue.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Rt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Rt([ue.sprite,ue.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:Rt([ue.common,ue.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:Rt([ue.lights,ue.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};sn.physical={uniforms:Rt([sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};var Xs={r:0,b:0,g:0};function Ip(s,e,t,n,i,r,a){let o=new Be(0),l=r===!0?0:1,c,h,d=null,u=0,f=null;function g(m,p){let M=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?t:e).get(x)),x===null?_(o,l):x&&x.isColor&&(_(x,1),M=!0);let A=s.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||M)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Lr)?(h===void 0&&(h=new Ut(new ls(1,1,1),new yn({name:"BackgroundCubeMaterial",uniforms:zi(sn.backgroundCube.uniforms),vertexShader:sn.backgroundCube.vertexShader,fragmentShader:sn.backgroundCube.fragmentShader,side:Tt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,b,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=je.getTransfer(x.colorSpace)!==Qe,(d!==x||u!==x.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,d=x,u=x.version,f=s.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Ut(new Ho(2,2),new yn({name:"BackgroundMaterial",uniforms:zi(sn.background.uniforms),vertexShader:sn.background.vertexShader,fragmentShader:sn.background.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=je.getTransfer(x.colorSpace)!==Qe,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||u!==x.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,d=x,u=x.version,f=s.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,p){m.getRGB(Xs,Nc(s)),n.buffers.color.setClear(Xs.r,Xs.g,Xs.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),l=p,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(o,l)},render:g}}function Dp(s,e,t,n){let i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=m(null),c=l,h=!1;function d(C,U,B,Z,q){let G=!1;if(a){let J=_(Z,B,U);c!==J&&(c=J,f(c.object)),G=p(C,Z,B,q),G&&M(C,Z,B,q)}else{let J=U.wireframe===!0;(c.geometry!==Z.id||c.program!==B.id||c.wireframe!==J)&&(c.geometry=Z.id,c.program=B.id,c.wireframe=J,G=!0)}q!==null&&t.update(q,s.ELEMENT_ARRAY_BUFFER),(G||h)&&(h=!1,z(C,U,B,Z),q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function u(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function f(C){return n.isWebGL2?s.bindVertexArray(C):r.bindVertexArrayOES(C)}function g(C){return n.isWebGL2?s.deleteVertexArray(C):r.deleteVertexArrayOES(C)}function _(C,U,B){let Z=B.wireframe===!0,q=o[C.id];q===void 0&&(q={},o[C.id]=q);let G=q[U.id];G===void 0&&(G={},q[U.id]=G);let J=G[Z];return J===void 0&&(J=m(u()),G[Z]=J),J}function m(C){let U=[],B=[],Z=[];for(let q=0;q<i;q++)U[q]=0,B[q]=0,Z[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:B,attributeDivisors:Z,object:C,attributes:{},index:null}}function p(C,U,B,Z){let q=c.attributes,G=U.attributes,J=0,j=B.getAttributes();for(let he in j)if(j[he].location>=0){let Q=q[he],fe=G[he];if(fe===void 0&&(he==="instanceMatrix"&&C.instanceMatrix&&(fe=C.instanceMatrix),he==="instanceColor"&&C.instanceColor&&(fe=C.instanceColor)),Q===void 0||Q.attribute!==fe||fe&&Q.data!==fe.data)return!0;J++}return c.attributesNum!==J||c.index!==Z}function M(C,U,B,Z){let q={},G=U.attributes,J=0,j=B.getAttributes();for(let he in j)if(j[he].location>=0){let Q=G[he];Q===void 0&&(he==="instanceMatrix"&&C.instanceMatrix&&(Q=C.instanceMatrix),he==="instanceColor"&&C.instanceColor&&(Q=C.instanceColor));let fe={};fe.attribute=Q,Q&&Q.data&&(fe.data=Q.data),q[he]=fe,J++}c.attributes=q,c.attributesNum=J,c.index=Z}function x(){let C=c.newAttributes;for(let U=0,B=C.length;U<B;U++)C[U]=0}function A(C){D(C,0)}function D(C,U){let B=c.newAttributes,Z=c.enabledAttributes,q=c.attributeDivisors;B[C]=1,Z[C]===0&&(s.enableVertexAttribArray(C),Z[C]=1),q[C]!==U&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](C,U),q[C]=U)}function b(){let C=c.newAttributes,U=c.enabledAttributes;for(let B=0,Z=U.length;B<Z;B++)U[B]!==C[B]&&(s.disableVertexAttribArray(B),U[B]=0)}function w(C,U,B,Z,q,G,J){J===!0?s.vertexAttribIPointer(C,U,B,q,G):s.vertexAttribPointer(C,U,B,Z,q,G)}function z(C,U,B,Z){if(n.isWebGL2===!1&&(C.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();let q=Z.attributes,G=B.getAttributes(),J=U.defaultAttributeValues;for(let j in G){let he=G[j];if(he.location>=0){let W=q[j];if(W===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(W=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(W=C.instanceColor)),W!==void 0){let Q=W.normalized,fe=W.itemSize,Me=t.get(W);if(Me===void 0)continue;let ye=Me.buffer,Le=Me.type,Ue=Me.bytesPerElement,Ee=n.isWebGL2===!0&&(Le===s.INT||Le===s.UNSIGNED_INT||W.gpuType===Sc);if(W.isInterleavedBufferAttribute){let Ne=W.data,P=Ne.stride,ce=W.offset;if(Ne.isInstancedInterleavedBuffer){for(let K=0;K<he.locationSize;K++)D(he.location+K,Ne.meshPerAttribute);C.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Ne.meshPerAttribute*Ne.count)}else for(let K=0;K<he.locationSize;K++)A(he.location+K);s.bindBuffer(s.ARRAY_BUFFER,ye);for(let K=0;K<he.locationSize;K++)w(he.location+K,fe/he.locationSize,Le,Q,P*Ue,(ce+fe/he.locationSize*K)*Ue,Ee)}else{if(W.isInstancedBufferAttribute){for(let Ne=0;Ne<he.locationSize;Ne++)D(he.location+Ne,W.meshPerAttribute);C.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let Ne=0;Ne<he.locationSize;Ne++)A(he.location+Ne);s.bindBuffer(s.ARRAY_BUFFER,ye);for(let Ne=0;Ne<he.locationSize;Ne++)w(he.location+Ne,fe/he.locationSize,Le,Q,fe*Ue,fe/he.locationSize*Ne*Ue,Ee)}}else if(J!==void 0){let Q=J[j];if(Q!==void 0)switch(Q.length){case 2:s.vertexAttrib2fv(he.location,Q);break;case 3:s.vertexAttrib3fv(he.location,Q);break;case 4:s.vertexAttrib4fv(he.location,Q);break;default:s.vertexAttrib1fv(he.location,Q)}}}}b()}function v(){Y();for(let C in o){let U=o[C];for(let B in U){let Z=U[B];for(let q in Z)g(Z[q].object),delete Z[q];delete U[B]}delete o[C]}}function T(C){if(o[C.id]===void 0)return;let U=o[C.id];for(let B in U){let Z=U[B];for(let q in Z)g(Z[q].object),delete Z[q];delete U[B]}delete o[C.id]}function N(C){for(let U in o){let B=o[U];if(B[C.id]===void 0)continue;let Z=B[C.id];for(let q in Z)g(Z[q].object),delete Z[q];delete B[C.id]}}function Y(){k(),h=!0,c!==l&&(c=l,f(c.object))}function k(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Y,resetDefaultState:k,dispose:v,releaseStatesOfGeometry:T,releaseStatesOfProgram:N,initAttributes:x,enableAttribute:A,disableUnusedAttributes:b}}function Np(s,e,t,n){let i=n.isWebGL2,r;function a(h){r=h}function o(h,d){s.drawArrays(r,h,d),t.update(d,r,1)}function l(h,d,u){if(u===0)return;let f,g;if(i)f=s,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](r,h,d,u),t.update(d,r,u)}function c(h,d,u){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<u;g++)this.render(h[g],d[g]);else{f.multiDrawArraysWEBGL(r,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=d[_];t.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function Up(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),u=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),x=u>0,A=a||e.has("OES_texture_float"),D=x&&A,b=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:f,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:M,vertexTextures:x,floatFragmentTextures:A,floatVertexTextures:D,maxSamples:b}}function Op(s){let e=this,t=null,n=0,i=!1,r=!1,a=new Nt,o=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=s.get(d);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{let M=r?0:n,x=M*4,A=p.clippingState||null;l.value=A,A=h(g,u,x,f);for(let D=0;D!==x;++D)A[D]=t[D];p.clippingState=A,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,g){let _=d!==null?d.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let p=f+_*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,A=f;x!==_;++x,A+=4)a.copy(d[x]).applyMatrix4(M,o),a.normal.toArray(m,A),m[A+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Fp(s){let e=new WeakMap;function t(a,o){return o===Po?a.mapping=Ui:o===Lo&&(a.mapping=Oi),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Po||o===Lo)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new ko(l.height/2);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Vo=class extends gr{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Pi=4,Hl=[.125,.215,.35,.446,.526,.582],$n=20,xo=new Vo,Vl=new Be,vo=null,yo=0,Mo=0,Zn=(1+Math.sqrt(5))/2,Ti=1/Zn,Gl=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,Zn,Ti),new L(0,Zn,-Ti),new L(Ti,0,Zn),new L(-Ti,0,Zn),new L(Zn,Ti,0),new L(-Zn,Ti,0)],xr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){vo=this._renderer.getRenderTarget(),yo=this._renderer.getActiveCubeFace(),Mo=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(vo,yo,Mo),e.scissorTest=!1,Ys(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ui||e.mapping===Oi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vo=this._renderer.getRenderTarget(),yo=this._renderer.getActiveCubeFace(),Mo=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:kt,minFilter:kt,generateMipmaps:!1,type:rs,format:Jt,colorSpace:xn,depthBuffer:!1},i=Wl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wl(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Bp(r)),this._blurMaterial=zp(r,e,t)}return i}_compileMaterial(e){let t=new Ut(this._lodPlanes[0],e);this._renderer.compile(t,xo)}_sceneToCubeUV(e,t,n,i){let o=new Pt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Vl),h.toneMapping=Nn,h.autoClear=!1;let f=new ii({name:"PMREM.Background",side:Tt,depthWrite:!1,depthTest:!1}),g=new Ut(new ls,f),_=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,_=!0):(f.color.copy(Vl),_=!0);for(let p=0;p<6;p++){let M=p%3;M===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):M===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let x=this._cubeSize;Ys(i,M*x,p>2?x:0,x,x),h.setRenderTarget(i),_&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Ui||e.mapping===Oi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xl());let r=i?this._cubemapMaterial:this._equirectMaterial,a=new Ut(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Ys(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,xo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Gl[(i-1)%Gl.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new Ut(this._lodPlanes[i],c),u=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*$n-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):$n;m>$n&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${$n}`);let p=[],M=0;for(let w=0;w<$n;++w){let z=w/_,v=Math.exp(-z*z/2);p.push(v),w===0?M+=v:w<m&&(M+=2*v)}for(let w=0;w<p.length;w++)p[w]=p[w]/M;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:x}=this;u.dTheta.value=g,u.mipInt.value=x-n;let A=this._sizeLods[i],D=3*A*(i>x-Pi?i-x+Pi:0),b=4*(this._cubeSize-A);Ys(t,D,b,3*A,2*A),l.setRenderTarget(t),l.render(d,xo)}};function Bp(s){let e=[],t=[],n=[],i=s,r=s-Pi+1+Hl.length;for(let a=0;a<r;a++){let o=Math.pow(2,i);t.push(o);let l=1/o;a>s-Pi?l=Hl[a-s+Pi-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,_=3,m=2,p=1,M=new Float32Array(_*g*f),x=new Float32Array(m*g*f),A=new Float32Array(p*g*f);for(let b=0;b<f;b++){let w=b%3*2/3-1,z=b>2?0:-1,v=[w,z,0,w+2/3,z,0,w+2/3,z+1,0,w,z,0,w+2/3,z+1,0,w,z+1,0];M.set(v,_*g*b),x.set(u,m*g*b);let T=[b,b,b,b,b,b];A.set(T,p*g*b)}let D=new vt;D.setAttribute("position",new xt(M,_)),D.setAttribute("uv",new xt(x,m)),D.setAttribute("faceIndex",new xt(A,p)),e.push(D),i>Pi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Wl(s,e,t){let n=new vn(s,e,t);return n.texture.mapping=Lr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ys(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function zp(s,e,t){let n=new Float32Array($n),i=new L(0,1,0);return new yn({name:"SphericalGaussianBlur",defines:{n:$n,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ta(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Xl(){return new yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ta(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Yl(){return new yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ta(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Ta(){return`

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
	`}function kp(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Po||l===Lo,h=l===Ui||l===Oi;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return t===null&&(t=new xr(s)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{let d=o.image;if(c&&d&&d.height>0||h&&d&&i(d)){t===null&&(t=new xr(s));let u=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,u),o.addEventListener("dispose",r),u.texture}else return null}}}return o}function i(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Hp(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Vp(s,e,t,n){let i={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);for(let g in u.morphAttributes){let _=u.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}u.removeEventListener("dispose",a),delete i[u.id];let f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,t.memory.geometries++),u}function l(d){let u=d.attributes;for(let g in u)e.update(u[g],s.ARRAY_BUFFER);let f=d.morphAttributes;for(let g in f){let _=f[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],s.ARRAY_BUFFER)}}function c(d){let u=[],f=d.index,g=d.attributes.position,_=0;if(f!==null){let M=f.array;_=f.version;for(let x=0,A=M.length;x<A;x+=3){let D=M[x+0],b=M[x+1],w=M[x+2];u.push(D,b,b,w,w,D)}}else if(g!==void 0){let M=g.array;_=g.version;for(let x=0,A=M.length/3-1;x<A;x+=3){let D=x+0,b=x+1,w=x+2;u.push(D,b,b,w,w,D)}}else return;let m=new(Ic(u)?mr:pr)(u,1);m.version=_;let p=r.get(d);p&&e.remove(p),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Gp(s,e,t,n){let i=n.isWebGL2,r;function a(f){r=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function h(f,g){s.drawElements(r,g,o,f*l),t.update(g,r,1)}function d(f,g,_){if(_===0)return;let m,p;if(i)m=s,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,o,f*l,_),t.update(g,r,_)}function u(f,g,_){if(_===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<_;p++)this.render(f[p]/l,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,o,f,0,_);let p=0;for(let M=0;M<_;M++)p+=g[M];t.update(p,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=d,this.renderMultiDraw=u}function Wp(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Xp(s,e){return s[0]-e[0]}function Yp(s,e){return Math.abs(e[1])-Math.abs(s[1])}function qp(s,e,t){let n={},i=new Float32Array(8),r=new WeakMap,a=new Mt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,d){let u=c.morphTargetInfluences;if(e.isWebGL2===!0){let f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=f!==void 0?f.length:0,_=r.get(h);if(_===void 0||_.count!==g){let C=function(){Y.dispose(),r.delete(h),h.removeEventListener("dispose",C)};_!==void 0&&_.texture.dispose();let M=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,A=h.morphAttributes.color!==void 0,D=h.morphAttributes.position||[],b=h.morphAttributes.normal||[],w=h.morphAttributes.color||[],z=0;M===!0&&(z=1),x===!0&&(z=2),A===!0&&(z=3);let v=h.attributes.position.count*z,T=1;v>e.maxTextureSize&&(T=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let N=new Float32Array(v*T*4*g),Y=new dr(N,v,T,g);Y.type=In,Y.needsUpdate=!0;let k=z*4;for(let U=0;U<g;U++){let B=D[U],Z=b[U],q=w[U],G=v*T*4*U;for(let J=0;J<B.count;J++){let j=J*k;M===!0&&(a.fromBufferAttribute(B,J),N[G+j+0]=a.x,N[G+j+1]=a.y,N[G+j+2]=a.z,N[G+j+3]=0),x===!0&&(a.fromBufferAttribute(Z,J),N[G+j+4]=a.x,N[G+j+5]=a.y,N[G+j+6]=a.z,N[G+j+7]=0),A===!0&&(a.fromBufferAttribute(q,J),N[G+j+8]=a.x,N[G+j+9]=a.y,N[G+j+10]=a.z,N[G+j+11]=q.itemSize===4?a.w:1)}}_={count:g,texture:Y,size:new re(v,T)},r.set(h,_),h.addEventListener("dispose",C)}let m=0;for(let M=0;M<u.length;M++)m+=u[M];let p=h.morphTargetsRelative?1:1-m;d.getUniforms().setValue(s,"morphTargetBaseInfluence",p),d.getUniforms().setValue(s,"morphTargetInfluences",u),d.getUniforms().setValue(s,"morphTargetsTexture",_.texture,t),d.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}else{let f=u===void 0?0:u.length,g=n[h.id];if(g===void 0||g.length!==f){g=[];for(let x=0;x<f;x++)g[x]=[x,0];n[h.id]=g}for(let x=0;x<f;x++){let A=g[x];A[0]=x,A[1]=u[x]}g.sort(Yp);for(let x=0;x<8;x++)x<f&&g[x][1]?(o[x][0]=g[x][0],o[x][1]=g[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(Xp);let _=h.morphAttributes.position,m=h.morphAttributes.normal,p=0;for(let x=0;x<8;x++){let A=o[x],D=A[0],b=A[1];D!==Number.MAX_SAFE_INTEGER&&b?(_&&h.getAttribute("morphTarget"+x)!==_[D]&&h.setAttribute("morphTarget"+x,_[D]),m&&h.getAttribute("morphNormal"+x)!==m[D]&&h.setAttribute("morphNormal"+x,m[D]),i[x]=b,p+=b):(_&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),m&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),i[x]=0)}let M=h.morphTargetsRelative?1:1-p;d.getUniforms().setValue(s,"morphTargetBaseInfluence",M),d.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function Zp(s,e,t,n){let i=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,d=e.get(l,h);if(i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return d}function a(){i=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var vr=class extends Vt{constructor(e,t,n,i,r,a,o,l,c,h){if(h=h!==void 0?h:Qn,h!==Qn&&h!==Fi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Qn&&(n=Ln),n===void 0&&h===Fi&&(n=jn),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ct,this.minFilter=l!==void 0?l:Ct,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Oc=new Vt,Fc=new vr(1,1);Fc.compareFunction=Lc;var Bc=new dr,zc=new Bo,kc=new _r,ql=[],Zl=[],Jl=new Float32Array(16),$l=new Float32Array(9),Kl=new Float32Array(4);function Gi(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=ql[i];if(r===void 0&&(r=new Float32Array(i),ql[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function dt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function ft(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Dr(s,e){let t=Zl[e];t===void 0&&(t=new Int32Array(e),Zl[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Jp(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function $p(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;s.uniform2fv(this.addr,e),ft(t,e)}}function Kp(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dt(t,e))return;s.uniform3fv(this.addr,e),ft(t,e)}}function jp(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;s.uniform4fv(this.addr,e),ft(t,e)}}function Qp(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),ft(t,e)}else{if(dt(t,n))return;Kl.set(n),s.uniformMatrix2fv(this.addr,!1,Kl),ft(t,n)}}function em(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),ft(t,e)}else{if(dt(t,n))return;$l.set(n),s.uniformMatrix3fv(this.addr,!1,$l),ft(t,n)}}function tm(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),ft(t,e)}else{if(dt(t,n))return;Jl.set(n),s.uniformMatrix4fv(this.addr,!1,Jl),ft(t,n)}}function nm(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function im(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;s.uniform2iv(this.addr,e),ft(t,e)}}function sm(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;s.uniform3iv(this.addr,e),ft(t,e)}}function rm(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;s.uniform4iv(this.addr,e),ft(t,e)}}function om(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function am(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;s.uniform2uiv(this.addr,e),ft(t,e)}}function lm(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;s.uniform3uiv(this.addr,e),ft(t,e)}}function cm(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;s.uniform4uiv(this.addr,e),ft(t,e)}}function hm(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r=this.type===s.SAMPLER_2D_SHADOW?Fc:Oc;t.setTexture2D(e||r,i)}function um(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||zc,i)}function dm(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||kc,i)}function fm(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Bc,i)}function pm(s){switch(s){case 5126:return Jp;case 35664:return $p;case 35665:return Kp;case 35666:return jp;case 35674:return Qp;case 35675:return em;case 35676:return tm;case 5124:case 35670:return nm;case 35667:case 35671:return im;case 35668:case 35672:return sm;case 35669:case 35673:return rm;case 5125:return om;case 36294:return am;case 36295:return lm;case 36296:return cm;case 35678:case 36198:case 36298:case 36306:case 35682:return hm;case 35679:case 36299:case 36307:return um;case 35680:case 36300:case 36308:case 36293:return dm;case 36289:case 36303:case 36311:case 36292:return fm}}function mm(s,e){s.uniform1fv(this.addr,e)}function gm(s,e){let t=Gi(e,this.size,2);s.uniform2fv(this.addr,t)}function _m(s,e){let t=Gi(e,this.size,3);s.uniform3fv(this.addr,t)}function xm(s,e){let t=Gi(e,this.size,4);s.uniform4fv(this.addr,t)}function vm(s,e){let t=Gi(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function ym(s,e){let t=Gi(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Mm(s,e){let t=Gi(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function bm(s,e){s.uniform1iv(this.addr,e)}function Sm(s,e){s.uniform2iv(this.addr,e)}function Em(s,e){s.uniform3iv(this.addr,e)}function Tm(s,e){s.uniform4iv(this.addr,e)}function wm(s,e){s.uniform1uiv(this.addr,e)}function Am(s,e){s.uniform2uiv(this.addr,e)}function Rm(s,e){s.uniform3uiv(this.addr,e)}function Cm(s,e){s.uniform4uiv(this.addr,e)}function Pm(s,e,t){let n=this.cache,i=e.length,r=Dr(t,i);dt(n,r)||(s.uniform1iv(this.addr,r),ft(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Oc,r[a])}function Lm(s,e,t){let n=this.cache,i=e.length,r=Dr(t,i);dt(n,r)||(s.uniform1iv(this.addr,r),ft(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||zc,r[a])}function Im(s,e,t){let n=this.cache,i=e.length,r=Dr(t,i);dt(n,r)||(s.uniform1iv(this.addr,r),ft(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||kc,r[a])}function Dm(s,e,t){let n=this.cache,i=e.length,r=Dr(t,i);dt(n,r)||(s.uniform1iv(this.addr,r),ft(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Bc,r[a])}function Nm(s){switch(s){case 5126:return mm;case 35664:return gm;case 35665:return _m;case 35666:return xm;case 35674:return vm;case 35675:return ym;case 35676:return Mm;case 5124:case 35670:return bm;case 35667:case 35671:return Sm;case 35668:case 35672:return Em;case 35669:case 35673:return Tm;case 5125:return wm;case 36294:return Am;case 36295:return Rm;case 36296:return Cm;case 35678:case 36198:case 36298:case 36306:case 35682:return Pm;case 35679:case 36299:case 36307:return Lm;case 35680:case 36300:case 36308:case 36293:return Im;case 36289:case 36303:case 36311:case 36292:return Dm}}var Go=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=pm(t.type)}},Wo=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Nm(t.type)}},Xo=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(e,t[o.id],n)}}},bo=/(\w+)(\])?(\[|\.)?/g;function jl(s,e){s.seq.push(e),s.map[e.id]=e}function Um(s,e,t){let n=s.name,i=n.length;for(bo.lastIndex=0;;){let r=bo.exec(n),a=bo.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){jl(t,c===void 0?new Go(o,s,e):new Wo(o,s,e));break}else{let d=t.map[o];d===void 0&&(d=new Xo(o),jl(t,d)),t=d}}}var Ni=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);Um(r,a,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function Ql(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var Om=37297,Fm=0;function Bm(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function zm(s){let e=je.getPrimaries(je.workingColorSpace),t=je.getPrimaries(s),n;switch(e===t?n="":e===or&&t===rr?n="LinearDisplayP3ToLinearSRGB":e===rr&&t===or&&(n="LinearSRGBToLinearDisplayP3"),s){case xn:case Ir:return[n,"LinearTransferOETF"];case yt:case Sa:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function ec(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Bm(s.getShaderSource(e),a)}else return i}function km(s,e){let t=zm(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Hm(s,e){let t;switch(e){case Wh:t="Linear";break;case Xh:t="Reinhard";break;case Yh:t="OptimizedCineon";break;case qh:t="ACESFilmic";break;case Jh:t="AgX";break;case Zh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Vm(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Li).join(`
`)}function Gm(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Li).join(`
`)}function Wm(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Xm(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Li(s){return s!==""}function tc(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function nc(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Ym=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yo(s){return s.replace(Ym,Zm)}var qm=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Zm(s,e){let t=Ve[e];if(t===void 0){let n=qm.get(e);if(n!==void 0)t=Ve[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Yo(t)}var Jm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ic(s){return s.replace(Jm,$m)}function $m(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function sc(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Km(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===yc?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===xh?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===gn&&(e="SHADOWMAP_TYPE_VSM"),e}function jm(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ui:case Oi:e="ENVMAP_TYPE_CUBE";break;case Lr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Qm(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Oi:e="ENVMAP_MODE_REFRACTION";break}return e}function eg(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Mc:e="ENVMAP_BLENDING_MULTIPLY";break;case Vh:e="ENVMAP_BLENDING_MIX";break;case Gh:e="ENVMAP_BLENDING_ADD";break}return e}function tg(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function ng(s,e,t,n){let i=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Km(t),c=jm(t),h=Qm(t),d=eg(t),u=tg(t),f=t.isWebGL2?"":Vm(t),g=Gm(t),_=Wm(r),m=i.createProgram(),p,M,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Li).join(`
`),p.length>0&&(p+=`
`),M=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Li).join(`
`),M.length>0&&(M+=`
`)):(p=[sc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Li).join(`
`),M=[f,sc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Nn?"#define TONE_MAPPING":"",t.toneMapping!==Nn?Ve.tonemapping_pars_fragment:"",t.toneMapping!==Nn?Hm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,km("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Li).join(`
`)),a=Yo(a),a=tc(a,t),a=nc(a,t),o=Yo(o),o=tc(o,t),o=nc(o,t),a=ic(a),o=ic(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,M=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Sl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Sl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);let A=x+p+a,D=x+M+o,b=Ql(i,i.VERTEX_SHADER,A),w=Ql(i,i.FRAGMENT_SHADER,D);i.attachShader(m,b),i.attachShader(m,w),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function z(Y){if(s.debug.checkShaderErrors){let k=i.getProgramInfoLog(m).trim(),C=i.getShaderInfoLog(b).trim(),U=i.getShaderInfoLog(w).trim(),B=!0,Z=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(B=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,b,w);else{let q=ec(i,b,"vertex"),G=ec(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+k+`
`+q+`
`+G)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(C===""||U==="")&&(Z=!1);Z&&(Y.diagnostics={runnable:B,programLog:k,vertexShader:{log:C,prefix:p},fragmentShader:{log:U,prefix:M}})}i.deleteShader(b),i.deleteShader(w),v=new Ni(i,m),T=Xm(i,m)}let v;this.getUniforms=function(){return v===void 0&&z(this),v};let T;this.getAttributes=function(){return T===void 0&&z(this),T};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=i.getProgramParameter(m,Om)),N},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Fm++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=w,this}var ig=0,qo=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Zo(e),t.set(e,n)),n}},Zo=class{constructor(e){this.id=ig++,this.code=e,this.usedTimes=0}};function sg(s,e,t,n,i,r,a){let o=new as,l=new qo,c=[],h=i.isWebGL2,d=i.logarithmicDepthBuffer,u=i.vertexTextures,f=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return v===0?"uv":`uv${v}`}function m(v,T,N,Y,k){let C=Y.fog,U=k.geometry,B=v.isMeshStandardMaterial?Y.environment:null,Z=(v.isMeshStandardMaterial?t:e).get(v.envMap||B),q=Z&&Z.mapping===Lr?Z.image.height:null,G=g[v.type];v.precision!==null&&(f=i.getMaxPrecision(v.precision),f!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));let J=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,j=J!==void 0?J.length:0,he=0;U.morphAttributes.position!==void 0&&(he=1),U.morphAttributes.normal!==void 0&&(he=2),U.morphAttributes.color!==void 0&&(he=3);let W,Q,fe,Me;if(G){let ot=sn[G];W=ot.vertexShader,Q=ot.fragmentShader}else W=v.vertexShader,Q=v.fragmentShader,l.update(v),fe=l.getVertexShaderID(v),Me=l.getFragmentShaderID(v);let ye=s.getRenderTarget(),Le=k.isInstancedMesh===!0,Ue=k.isBatchedMesh===!0,Ee=!!v.map,Ne=!!v.matcap,P=!!Z,ce=!!v.aoMap,K=!!v.lightMap,oe=!!v.bumpMap,$=!!v.normalMap,Te=!!v.displacementMap,ge=!!v.emissiveMap,S=!!v.metalnessMap,y=!!v.roughnessMap,O=v.anisotropy>0,ie=v.clearcoat>0,te=v.iridescence>0,ee=v.sheen>0,Se=v.transmission>0,de=O&&!!v.anisotropyMap,xe=ie&&!!v.clearcoatMap,Ce=ie&&!!v.clearcoatNormalMap,ze=ie&&!!v.clearcoatRoughnessMap,ne=te&&!!v.iridescenceMap,Je=te&&!!v.iridescenceThicknessMap,Ge=ee&&!!v.sheenColorMap,Oe=ee&&!!v.sheenRoughnessMap,Re=!!v.specularMap,_e=!!v.specularColorMap,R=!!v.specularIntensityMap,ae=Se&&!!v.transmissionMap,we=Se&&!!v.thicknessMap,be=!!v.gradientMap,se=!!v.alphaMap,I=v.alphaTest>0,le=!!v.alphaHash,pe=!!v.extensions,Ie=!!U.attributes.uv1,Pe=!!U.attributes.uv2,qe=!!U.attributes.uv3,Ze=Nn;return v.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(Ze=s.toneMapping),{isWebGL2:h,shaderID:G,shaderType:v.type,shaderName:v.name,vertexShader:W,fragmentShader:Q,defines:v.defines,customVertexShaderID:fe,customFragmentShaderID:Me,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:Ue,instancing:Le,instancingColor:Le&&k.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:ye===null?s.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:xn,map:Ee,matcap:Ne,envMap:P,envMapMode:P&&Z.mapping,envMapCubeUVHeight:q,aoMap:ce,lightMap:K,bumpMap:oe,normalMap:$,displacementMap:u&&Te,emissiveMap:ge,normalMapObjectSpace:$&&v.normalMapType===lu,normalMapTangentSpace:$&&v.normalMapType===au,metalnessMap:S,roughnessMap:y,anisotropy:O,anisotropyMap:de,clearcoat:ie,clearcoatMap:xe,clearcoatNormalMap:Ce,clearcoatRoughnessMap:ze,iridescence:te,iridescenceMap:ne,iridescenceThicknessMap:Je,sheen:ee,sheenColorMap:Ge,sheenRoughnessMap:Oe,specularMap:Re,specularColorMap:_e,specularIntensityMap:R,transmission:Se,transmissionMap:ae,thicknessMap:we,gradientMap:be,opaque:v.transparent===!1&&v.blending===Ot,alphaMap:se,alphaTest:I,alphaHash:le,combine:v.combine,mapUv:Ee&&_(v.map.channel),aoMapUv:ce&&_(v.aoMap.channel),lightMapUv:K&&_(v.lightMap.channel),bumpMapUv:oe&&_(v.bumpMap.channel),normalMapUv:$&&_(v.normalMap.channel),displacementMapUv:Te&&_(v.displacementMap.channel),emissiveMapUv:ge&&_(v.emissiveMap.channel),metalnessMapUv:S&&_(v.metalnessMap.channel),roughnessMapUv:y&&_(v.roughnessMap.channel),anisotropyMapUv:de&&_(v.anisotropyMap.channel),clearcoatMapUv:xe&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ze&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:Je&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ge&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&_(v.sheenRoughnessMap.channel),specularMapUv:Re&&_(v.specularMap.channel),specularColorMapUv:_e&&_(v.specularColorMap.channel),specularIntensityMapUv:R&&_(v.specularIntensityMap.channel),transmissionMapUv:ae&&_(v.transmissionMap.channel),thicknessMapUv:we&&_(v.thicknessMap.channel),alphaMapUv:se&&_(v.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&($||O),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUv1s:Ie,vertexUv2s:Pe,vertexUv3s:qe,pointsUvs:k.isPoints===!0&&!!U.attributes.uv&&(Ee||se),fog:!!C,useFog:v.fog===!0,fogExp2:C&&C.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:k.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:he,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&N.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ze,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Ee&&v.map.isVideoTexture===!0&&je.getTransfer(v.map.colorSpace)===Qe,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===qt,flipSided:v.side===Tt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:pe&&v.extensions.derivatives===!0,extensionFragDepth:pe&&v.extensions.fragDepth===!0,extensionDrawBuffers:pe&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:pe&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:pe&&v.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()}}function p(v){let T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(let N in v.defines)T.push(N),T.push(v.defines[N]);return v.isRawShaderMaterial===!1&&(M(T,v),x(T,v),T.push(s.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function M(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function x(v,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),T.batching&&o.enable(19),v.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.useLegacyLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),v.push(o.mask)}function A(v){let T=g[v.type],N;if(T){let Y=sn[T];N=Yu.clone(Y.uniforms)}else N=v.uniforms;return N}function D(v,T){let N;for(let Y=0,k=c.length;Y<k;Y++){let C=c[Y];if(C.cacheKey===T){N=C,++N.usedTimes;break}}return N===void 0&&(N=new ng(s,T,v,r),c.push(N)),N}function b(v){if(--v.usedTimes===0){let T=c.indexOf(v);c[T]=c[c.length-1],c.pop(),v.destroy()}}function w(v){l.remove(v)}function z(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:A,acquireProgram:D,releaseProgram:b,releaseShaderCache:w,programs:c,dispose:z}}function rg(){let s=new WeakMap;function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function t(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function og(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function rc(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function oc(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(d,u,f,g,_,m){let p=s[e];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},s[e]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=_,p.group=m),e++,p}function o(d,u,f,g,_,m){let p=a(d,u,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(d,u,f,g,_,m){let p=a(d,u,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(d,u){t.length>1&&t.sort(d||og),n.length>1&&n.sort(u||rc),i.length>1&&i.sort(u||rc)}function h(){for(let d=e,u=s.length;d<u;d++){let f=s[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function ag(){let s=new WeakMap;function e(n,i){let r=s.get(n),a;return r===void 0?(a=new oc,s.set(n,[a])):i>=r.length?(a=new oc,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function lg(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Be};break;case"SpotLight":t={position:new L,direction:new L,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new L,halfWidth:new L,halfHeight:new L};break}return s[e.id]=t,t}}}function cg(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var hg=0;function ug(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function dg(s,e){let t=new lg,n=cg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new L);let r=new L,a=new lt,o=new lt;function l(h,d){let u=0,f=0,g=0;for(let Y=0;Y<9;Y++)i.probe[Y].set(0,0,0);let _=0,m=0,p=0,M=0,x=0,A=0,D=0,b=0,w=0,z=0,v=0;h.sort(ug);let T=d===!0?Math.PI:1;for(let Y=0,k=h.length;Y<k;Y++){let C=h[Y],U=C.color,B=C.intensity,Z=C.distance,q=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=U.r*B*T,f+=U.g*B*T,g+=U.b*B*T;else if(C.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(C.sh.coefficients[G],B);v++}else if(C.isDirectionalLight){let G=t.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity*T),C.castShadow){let J=C.shadow,j=n.get(C);j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize=J.mapSize,i.directionalShadow[_]=j,i.directionalShadowMap[_]=q,i.directionalShadowMatrix[_]=C.shadow.matrix,A++}i.directional[_]=G,_++}else if(C.isSpotLight){let G=t.get(C);G.position.setFromMatrixPosition(C.matrixWorld),G.color.copy(U).multiplyScalar(B*T),G.distance=Z,G.coneCos=Math.cos(C.angle),G.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),G.decay=C.decay,i.spot[p]=G;let J=C.shadow;if(C.map&&(i.spotLightMap[w]=C.map,w++,J.updateMatrices(C),C.castShadow&&z++),i.spotLightMatrix[p]=J.matrix,C.castShadow){let j=n.get(C);j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize=J.mapSize,i.spotShadow[p]=j,i.spotShadowMap[p]=q,b++}p++}else if(C.isRectAreaLight){let G=t.get(C);G.color.copy(U).multiplyScalar(B),G.halfWidth.set(C.width*.5,0,0),G.halfHeight.set(0,C.height*.5,0),i.rectArea[M]=G,M++}else if(C.isPointLight){let G=t.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity*T),G.distance=C.distance,G.decay=C.decay,C.castShadow){let J=C.shadow,j=n.get(C);j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize=J.mapSize,j.shadowCameraNear=J.camera.near,j.shadowCameraFar=J.camera.far,i.pointShadow[m]=j,i.pointShadowMap[m]=q,i.pointShadowMatrix[m]=C.shadow.matrix,D++}i.point[m]=G,m++}else if(C.isHemisphereLight){let G=t.get(C);G.skyColor.copy(C.color).multiplyScalar(B*T),G.groundColor.copy(C.groundColor).multiplyScalar(B*T),i.hemi[x]=G,x++}}M>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_FLOAT_1,i.rectAreaLTC2=ue.LTC_FLOAT_2):(i.rectAreaLTC1=ue.LTC_HALF_1,i.rectAreaLTC2=ue.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_FLOAT_1,i.rectAreaLTC2=ue.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_HALF_1,i.rectAreaLTC2=ue.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=g;let N=i.hash;(N.directionalLength!==_||N.pointLength!==m||N.spotLength!==p||N.rectAreaLength!==M||N.hemiLength!==x||N.numDirectionalShadows!==A||N.numPointShadows!==D||N.numSpotShadows!==b||N.numSpotMaps!==w||N.numLightProbes!==v)&&(i.directional.length=_,i.spot.length=p,i.rectArea.length=M,i.point.length=m,i.hemi.length=x,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=D,i.pointShadowMap.length=D,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=D,i.spotLightMatrix.length=b+w-z,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=z,i.numLightProbes=v,N.directionalLength=_,N.pointLength=m,N.spotLength=p,N.rectAreaLength=M,N.hemiLength=x,N.numDirectionalShadows=A,N.numPointShadows=D,N.numSpotShadows=b,N.numSpotMaps=w,N.numLightProbes=v,i.version=hg++)}function c(h,d){let u=0,f=0,g=0,_=0,m=0,p=d.matrixWorldInverse;for(let M=0,x=h.length;M<x;M++){let A=h[M];if(A.isDirectionalLight){let D=i.directional[u];D.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),D.direction.sub(r),D.direction.transformDirection(p),u++}else if(A.isSpotLight){let D=i.spot[g];D.position.setFromMatrixPosition(A.matrixWorld),D.position.applyMatrix4(p),D.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),D.direction.sub(r),D.direction.transformDirection(p),g++}else if(A.isRectAreaLight){let D=i.rectArea[_];D.position.setFromMatrixPosition(A.matrixWorld),D.position.applyMatrix4(p),o.identity(),a.copy(A.matrixWorld),a.premultiply(p),o.extractRotation(a),D.halfWidth.set(A.width*.5,0,0),D.halfHeight.set(0,A.height*.5,0),D.halfWidth.applyMatrix4(o),D.halfHeight.applyMatrix4(o),_++}else if(A.isPointLight){let D=i.point[f];D.position.setFromMatrixPosition(A.matrixWorld),D.position.applyMatrix4(p),f++}else if(A.isHemisphereLight){let D=i.hemi[m];D.direction.setFromMatrixPosition(A.matrixWorld),D.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:i}}function ac(s,e){let t=new dg(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(d){n.push(d)}function o(d){i.push(d)}function l(d){t.setup(n,d)}function c(d){t.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function fg(s,e){let t=new WeakMap;function n(r,a=0){let o=t.get(r),l;return o===void 0?(l=new ac(s,e),t.set(r,[l])):a>=o.length?(l=new ac(s,e),o.push(l)):l=o[a],l}function i(){t=new WeakMap}return{get:n,dispose:i}}var Jo=class extends zn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ru,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},$o=class extends zn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},pg=`void main() {
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
}`;function gg(s,e,t){let n=new ki,i=new re,r=new re,a=new Mt,o=new Jo({depthPacking:ou}),l=new $o,c={},h=t.maxTextureSize,d={[Fn]:Tt,[Tt]:Fn,[qt]:qt},u=new yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:pg,fragmentShader:mg}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new vt;g.setAttribute("position",new xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Ut(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yc;let p=this.type;this.render=function(b,w,z){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;let v=s.getRenderTarget(),T=s.getActiveCubeFace(),N=s.getActiveMipmapLevel(),Y=s.state;Y.setBlending(Dn),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);let k=p!==gn&&this.type===gn,C=p===gn&&this.type!==gn;for(let U=0,B=b.length;U<B;U++){let Z=b[U],q=Z.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;i.copy(q.mapSize);let G=q.getFrameExtents();if(i.multiply(G),r.copy(q.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/G.x),i.x=r.x*G.x,q.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/G.y),i.y=r.y*G.y,q.mapSize.y=r.y)),q.map===null||k===!0||C===!0){let j=this.type!==gn?{minFilter:Ct,magFilter:Ct}:{};q.map!==null&&q.map.dispose(),q.map=new vn(i.x,i.y,j),q.map.texture.name=Z.name+".shadowMap",q.camera.updateProjectionMatrix()}s.setRenderTarget(q.map),s.clear();let J=q.getViewportCount();for(let j=0;j<J;j++){let he=q.getViewport(j);a.set(r.x*he.x,r.y*he.y,r.x*he.z,r.y*he.w),Y.viewport(a),q.updateMatrices(Z,j),n=q.getFrustum(),A(w,z,q.camera,Z,this.type)}q.isPointLightShadow!==!0&&this.type===gn&&M(q,z),q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(v,T,N)};function M(b,w){let z=e.update(_);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new vn(i.x,i.y)),u.uniforms.shadow_pass.value=b.map.texture,u.uniforms.resolution.value=b.mapSize,u.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(w,null,z,u,_,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(w,null,z,f,_,null)}function x(b,w,z,v){let T=null,N=z.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(N!==void 0)T=N;else if(T=z.isPointLight===!0?l:o,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let Y=T.uuid,k=w.uuid,C=c[Y];C===void 0&&(C={},c[Y]=C);let U=C[k];U===void 0&&(U=T.clone(),C[k]=U,w.addEventListener("dispose",D)),T=U}if(T.visible=w.visible,T.wireframe=w.wireframe,v===gn?T.side=w.shadowSide!==null?w.shadowSide:w.side:T.side=w.shadowSide!==null?w.shadowSide:d[w.side],T.alphaMap=w.alphaMap,T.alphaTest=w.alphaTest,T.map=w.map,T.clipShadows=w.clipShadows,T.clippingPlanes=w.clippingPlanes,T.clipIntersection=w.clipIntersection,T.displacementMap=w.displacementMap,T.displacementScale=w.displacementScale,T.displacementBias=w.displacementBias,T.wireframeLinewidth=w.wireframeLinewidth,T.linewidth=w.linewidth,z.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let Y=s.properties.get(T);Y.light=z}return T}function A(b,w,z,v,T){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&T===gn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,b.matrixWorld);let k=e.update(b),C=b.material;if(Array.isArray(C)){let U=k.groups;for(let B=0,Z=U.length;B<Z;B++){let q=U[B],G=C[q.materialIndex];if(G&&G.visible){let J=x(b,G,v,T);b.onBeforeShadow(s,b,w,z,k,J,q),s.renderBufferDirect(z,null,k,J,b,q),b.onAfterShadow(s,b,w,z,k,J,q)}}}else if(C.visible){let U=x(b,C,v,T);b.onBeforeShadow(s,b,w,z,k,U,null),s.renderBufferDirect(z,null,k,U,b,null),b.onAfterShadow(s,b,w,z,k,U,null)}}let Y=b.children;for(let k=0,C=Y.length;k<C;k++)A(Y[k],w,z,v,T)}function D(b){b.target.removeEventListener("dispose",D);for(let z in c){let v=c[z],T=b.target.uuid;T in v&&(v[T].dispose(),delete v[T])}}}function _g(s,e,t){let n=t.isWebGL2;function i(){let I=!1,le=new Mt,pe=null,Ie=new Mt(0,0,0,0);return{setMask:function(Pe){pe!==Pe&&!I&&(s.colorMask(Pe,Pe,Pe,Pe),pe=Pe)},setLocked:function(Pe){I=Pe},setClear:function(Pe,qe,Ze,st,ot){ot===!0&&(Pe*=st,qe*=st,Ze*=st),le.set(Pe,qe,Ze,st),Ie.equals(le)===!1&&(s.clearColor(Pe,qe,Ze,st),Ie.copy(le))},reset:function(){I=!1,pe=null,Ie.set(-1,0,0,0)}}}function r(){let I=!1,le=null,pe=null,Ie=null;return{setTest:function(Pe){Pe?Ue(s.DEPTH_TEST):Ee(s.DEPTH_TEST)},setMask:function(Pe){le!==Pe&&!I&&(s.depthMask(Pe),le=Pe)},setFunc:function(Pe){if(pe!==Pe){switch(Pe){case Uh:s.depthFunc(s.NEVER);break;case Oh:s.depthFunc(s.ALWAYS);break;case Fh:s.depthFunc(s.LESS);break;case tr:s.depthFunc(s.LEQUAL);break;case Bh:s.depthFunc(s.EQUAL);break;case zh:s.depthFunc(s.GEQUAL);break;case kh:s.depthFunc(s.GREATER);break;case Hh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}pe=Pe}},setLocked:function(Pe){I=Pe},setClear:function(Pe){Ie!==Pe&&(s.clearDepth(Pe),Ie=Pe)},reset:function(){I=!1,le=null,pe=null,Ie=null}}}function a(){let I=!1,le=null,pe=null,Ie=null,Pe=null,qe=null,Ze=null,st=null,ot=null;return{setTest:function($e){I||($e?Ue(s.STENCIL_TEST):Ee(s.STENCIL_TEST))},setMask:function($e){le!==$e&&!I&&(s.stencilMask($e),le=$e)},setFunc:function($e,ct,nn){(pe!==$e||Ie!==ct||Pe!==nn)&&(s.stencilFunc($e,ct,nn),pe=$e,Ie=ct,Pe=nn)},setOp:function($e,ct,nn){(qe!==$e||Ze!==ct||st!==nn)&&(s.stencilOp($e,ct,nn),qe=$e,Ze=ct,st=nn)},setLocked:function($e){I=$e},setClear:function($e){ot!==$e&&(s.clearStencil($e),ot=$e)},reset:function(){I=!1,le=null,pe=null,Ie=null,Pe=null,qe=null,Ze=null,st=null,ot=null}}}let o=new i,l=new r,c=new a,h=new WeakMap,d=new WeakMap,u={},f={},g=new WeakMap,_=[],m=null,p=!1,M=null,x=null,A=null,D=null,b=null,w=null,z=null,v=new Be(0,0,0),T=0,N=!1,Y=null,k=null,C=null,U=null,B=null,Z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,G=0,J=s.getParameter(s.VERSION);J.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(J)[1]),q=G>=1):J.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),q=G>=2);let j=null,he={},W=s.getParameter(s.SCISSOR_BOX),Q=s.getParameter(s.VIEWPORT),fe=new Mt().fromArray(W),Me=new Mt().fromArray(Q);function ye(I,le,pe,Ie){let Pe=new Uint8Array(4),qe=s.createTexture();s.bindTexture(I,qe),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ze=0;Ze<pe;Ze++)n&&(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)?s.texImage3D(le,0,s.RGBA,1,1,Ie,0,s.RGBA,s.UNSIGNED_BYTE,Pe):s.texImage2D(le+Ze,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Pe);return qe}let Le={};Le[s.TEXTURE_2D]=ye(s.TEXTURE_2D,s.TEXTURE_2D,1),Le[s.TEXTURE_CUBE_MAP]=ye(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Le[s.TEXTURE_2D_ARRAY]=ye(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Le[s.TEXTURE_3D]=ye(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ue(s.DEPTH_TEST),l.setFunc(tr),ge(!1),S(Va),Ue(s.CULL_FACE),$(Dn);function Ue(I){u[I]!==!0&&(s.enable(I),u[I]=!0)}function Ee(I){u[I]!==!1&&(s.disable(I),u[I]=!1)}function Ne(I,le){return f[I]!==le?(s.bindFramebuffer(I,le),f[I]=le,n&&(I===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=le),I===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=le)),!0):!1}function P(I,le){let pe=_,Ie=!1;if(I)if(pe=g.get(le),pe===void 0&&(pe=[],g.set(le,pe)),I.isWebGLMultipleRenderTargets){let Pe=I.texture;if(pe.length!==Pe.length||pe[0]!==s.COLOR_ATTACHMENT0){for(let qe=0,Ze=Pe.length;qe<Ze;qe++)pe[qe]=s.COLOR_ATTACHMENT0+qe;pe.length=Pe.length,Ie=!0}}else pe[0]!==s.COLOR_ATTACHMENT0&&(pe[0]=s.COLOR_ATTACHMENT0,Ie=!0);else pe[0]!==s.BACK&&(pe[0]=s.BACK,Ie=!0);Ie&&(t.isWebGL2?s.drawBuffers(pe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(pe))}function ce(I){return m!==I?(s.useProgram(I),m=I,!0):!1}let K={[Jn]:s.FUNC_ADD,[yh]:s.FUNC_SUBTRACT,[Mh]:s.FUNC_REVERSE_SUBTRACT};if(n)K[Xa]=s.MIN,K[Ya]=s.MAX;else{let I=e.get("EXT_blend_minmax");I!==null&&(K[Xa]=I.MIN_EXT,K[Ya]=I.MAX_EXT)}let oe={[bh]:s.ZERO,[Sh]:s.ONE,[Eh]:s.SRC_COLOR,[Ro]:s.SRC_ALPHA,[Ph]:s.SRC_ALPHA_SATURATE,[Rh]:s.DST_COLOR,[wh]:s.DST_ALPHA,[Th]:s.ONE_MINUS_SRC_COLOR,[Co]:s.ONE_MINUS_SRC_ALPHA,[Ch]:s.ONE_MINUS_DST_COLOR,[Ah]:s.ONE_MINUS_DST_ALPHA,[Lh]:s.CONSTANT_COLOR,[Ih]:s.ONE_MINUS_CONSTANT_COLOR,[Dh]:s.CONSTANT_ALPHA,[Nh]:s.ONE_MINUS_CONSTANT_ALPHA};function $(I,le,pe,Ie,Pe,qe,Ze,st,ot,$e){if(I===Dn){p===!0&&(Ee(s.BLEND),p=!1);return}if(p===!1&&(Ue(s.BLEND),p=!0),I!==vh){if(I!==M||$e!==N){if((x!==Jn||b!==Jn)&&(s.blendEquation(s.FUNC_ADD),x=Jn,b=Jn),$e)switch(I){case Ot:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Bn:s.blendFunc(s.ONE,s.ONE);break;case Ga:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Wa:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Ot:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Bn:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Ga:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Wa:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}A=null,D=null,w=null,z=null,v.set(0,0,0),T=0,M=I,N=$e}return}Pe=Pe||le,qe=qe||pe,Ze=Ze||Ie,(le!==x||Pe!==b)&&(s.blendEquationSeparate(K[le],K[Pe]),x=le,b=Pe),(pe!==A||Ie!==D||qe!==w||Ze!==z)&&(s.blendFuncSeparate(oe[pe],oe[Ie],oe[qe],oe[Ze]),A=pe,D=Ie,w=qe,z=Ze),(st.equals(v)===!1||ot!==T)&&(s.blendColor(st.r,st.g,st.b,ot),v.copy(st),T=ot),M=I,N=!1}function Te(I,le){I.side===qt?Ee(s.CULL_FACE):Ue(s.CULL_FACE);let pe=I.side===Tt;le&&(pe=!pe),ge(pe),I.blending===Ot&&I.transparent===!1?$(Dn):$(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),o.setMask(I.colorWrite);let Ie=I.stencilWrite;c.setTest(Ie),Ie&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),O(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Ue(s.SAMPLE_ALPHA_TO_COVERAGE):Ee(s.SAMPLE_ALPHA_TO_COVERAGE)}function ge(I){Y!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),Y=I)}function S(I){I!==gh?(Ue(s.CULL_FACE),I!==k&&(I===Va?s.cullFace(s.BACK):I===_h?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ee(s.CULL_FACE),k=I}function y(I){I!==C&&(q&&s.lineWidth(I),C=I)}function O(I,le,pe){I?(Ue(s.POLYGON_OFFSET_FILL),(U!==le||B!==pe)&&(s.polygonOffset(le,pe),U=le,B=pe)):Ee(s.POLYGON_OFFSET_FILL)}function ie(I){I?Ue(s.SCISSOR_TEST):Ee(s.SCISSOR_TEST)}function te(I){I===void 0&&(I=s.TEXTURE0+Z-1),j!==I&&(s.activeTexture(I),j=I)}function ee(I,le,pe){pe===void 0&&(j===null?pe=s.TEXTURE0+Z-1:pe=j);let Ie=he[pe];Ie===void 0&&(Ie={type:void 0,texture:void 0},he[pe]=Ie),(Ie.type!==I||Ie.texture!==le)&&(j!==pe&&(s.activeTexture(pe),j=pe),s.bindTexture(I,le||Le[I]),Ie.type=I,Ie.texture=le)}function Se(){let I=he[j];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function de(){try{s.compressedTexImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xe(){try{s.compressedTexImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ce(){try{s.texSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ze(){try{s.texSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ne(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Je(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ge(){try{s.texStorage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Oe(){try{s.texStorage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Re(){try{s.texImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _e(){try{s.texImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function R(I){fe.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),fe.copy(I))}function ae(I){Me.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),Me.copy(I))}function we(I,le){let pe=d.get(le);pe===void 0&&(pe=new WeakMap,d.set(le,pe));let Ie=pe.get(I);Ie===void 0&&(Ie=s.getUniformBlockIndex(le,I.name),pe.set(I,Ie))}function be(I,le){let Ie=d.get(le).get(I);h.get(le)!==Ie&&(s.uniformBlockBinding(le,Ie,I.__bindingPointIndex),h.set(le,Ie))}function se(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},j=null,he={},f={},g=new WeakMap,_=[],m=null,p=!1,M=null,x=null,A=null,D=null,b=null,w=null,z=null,v=new Be(0,0,0),T=0,N=!1,Y=null,k=null,C=null,U=null,B=null,fe.set(0,0,s.canvas.width,s.canvas.height),Me.set(0,0,s.canvas.width,s.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Ue,disable:Ee,bindFramebuffer:Ne,drawBuffers:P,useProgram:ce,setBlending:$,setMaterial:Te,setFlipSided:ge,setCullFace:S,setLineWidth:y,setPolygonOffset:O,setScissorTest:ie,activeTexture:te,bindTexture:ee,unbindTexture:Se,compressedTexImage2D:de,compressedTexImage3D:xe,texImage2D:Re,texImage3D:_e,updateUBOMapping:we,uniformBlockBinding:be,texStorage2D:Ge,texStorage3D:Oe,texSubImage2D:Ce,texSubImage3D:ze,compressedTexSubImage2D:ne,compressedTexSubImage3D:Je,scissor:R,viewport:ae,reset:se}}function xg(s,e,t,n,i,r,a){let o=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,d,u=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,y){return f?new OffscreenCanvas(S,y):cr("canvas")}function _(S,y,O,ie){let te=1;if((S.width>ie||S.height>ie)&&(te=ie/Math.max(S.width,S.height)),te<1||y===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){let ee=y?lr:Math.floor,Se=ee(te*S.width),de=ee(te*S.height);d===void 0&&(d=g(Se,de));let xe=O?g(Se,de):d;return xe.width=Se,xe.height=de,xe.getContext("2d").drawImage(S,0,0,Se,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+Se+"x"+de+")."),xe}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function m(S){return Oo(S.width)&&Oo(S.height)}function p(S){return o?!1:S.wrapS!==Zt||S.wrapT!==Zt||S.minFilter!==Ct&&S.minFilter!==kt}function M(S,y){return S.generateMipmaps&&y&&S.minFilter!==Ct&&S.minFilter!==kt}function x(S){s.generateMipmap(S)}function A(S,y,O,ie,te=!1){if(o===!1)return y;if(S!==null){if(s[S]!==void 0)return s[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let ee=y;if(y===s.RED&&(O===s.FLOAT&&(ee=s.R32F),O===s.HALF_FLOAT&&(ee=s.R16F),O===s.UNSIGNED_BYTE&&(ee=s.R8)),y===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&(ee=s.R8UI),O===s.UNSIGNED_SHORT&&(ee=s.R16UI),O===s.UNSIGNED_INT&&(ee=s.R32UI),O===s.BYTE&&(ee=s.R8I),O===s.SHORT&&(ee=s.R16I),O===s.INT&&(ee=s.R32I)),y===s.RG&&(O===s.FLOAT&&(ee=s.RG32F),O===s.HALF_FLOAT&&(ee=s.RG16F),O===s.UNSIGNED_BYTE&&(ee=s.RG8)),y===s.RGBA){let Se=te?sr:je.getTransfer(ie);O===s.FLOAT&&(ee=s.RGBA32F),O===s.HALF_FLOAT&&(ee=s.RGBA16F),O===s.UNSIGNED_BYTE&&(ee=Se===Qe?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT_4_4_4_4&&(ee=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&(ee=s.RGB5_A1)}return(ee===s.R16F||ee===s.R32F||ee===s.RG16F||ee===s.RG32F||ee===s.RGBA16F||ee===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function D(S,y,O){return M(S,O)===!0||S.isFramebufferTexture&&S.minFilter!==Ct&&S.minFilter!==kt?Math.log2(Math.max(y.width,y.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?y.mipmaps.length:1}function b(S){return S===Ct||S===qa||S===qr?s.NEAREST:s.LINEAR}function w(S){let y=S.target;y.removeEventListener("dispose",w),v(y),y.isVideoTexture&&h.delete(y)}function z(S){let y=S.target;y.removeEventListener("dispose",z),N(y)}function v(S){let y=n.get(S);if(y.__webglInit===void 0)return;let O=S.source,ie=u.get(O);if(ie){let te=ie[y.__cacheKey];te.usedTimes--,te.usedTimes===0&&T(S),Object.keys(ie).length===0&&u.delete(O)}n.remove(S)}function T(S){let y=n.get(S);s.deleteTexture(y.__webglTexture);let O=S.source,ie=u.get(O);delete ie[y.__cacheKey],a.memory.textures--}function N(S){let y=S.texture,O=n.get(S),ie=n.get(y);if(ie.__webglTexture!==void 0&&(s.deleteTexture(ie.__webglTexture),a.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(O.__webglFramebuffer[te]))for(let ee=0;ee<O.__webglFramebuffer[te].length;ee++)s.deleteFramebuffer(O.__webglFramebuffer[te][ee]);else s.deleteFramebuffer(O.__webglFramebuffer[te]);O.__webglDepthbuffer&&s.deleteRenderbuffer(O.__webglDepthbuffer[te])}else{if(Array.isArray(O.__webglFramebuffer))for(let te=0;te<O.__webglFramebuffer.length;te++)s.deleteFramebuffer(O.__webglFramebuffer[te]);else s.deleteFramebuffer(O.__webglFramebuffer);if(O.__webglDepthbuffer&&s.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&s.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let te=0;te<O.__webglColorRenderbuffer.length;te++)O.__webglColorRenderbuffer[te]&&s.deleteRenderbuffer(O.__webglColorRenderbuffer[te]);O.__webglDepthRenderbuffer&&s.deleteRenderbuffer(O.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let te=0,ee=y.length;te<ee;te++){let Se=n.get(y[te]);Se.__webglTexture&&(s.deleteTexture(Se.__webglTexture),a.memory.textures--),n.remove(y[te])}n.remove(y),n.remove(S)}let Y=0;function k(){Y=0}function C(){let S=Y;return S>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+i.maxTextures),Y+=1,S}function U(S){let y=[];return y.push(S.wrapS),y.push(S.wrapT),y.push(S.wrapR||0),y.push(S.magFilter),y.push(S.minFilter),y.push(S.anisotropy),y.push(S.internalFormat),y.push(S.format),y.push(S.type),y.push(S.generateMipmaps),y.push(S.premultiplyAlpha),y.push(S.flipY),y.push(S.unpackAlignment),y.push(S.colorSpace),y.join()}function B(S,y){let O=n.get(S);if(S.isVideoTexture&&Te(S),S.isRenderTargetTexture===!1&&S.version>0&&O.__version!==S.version){let ie=S.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{fe(O,S,y);return}}t.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+y)}function Z(S,y){let O=n.get(S);if(S.version>0&&O.__version!==S.version){fe(O,S,y);return}t.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+y)}function q(S,y){let O=n.get(S);if(S.version>0&&O.__version!==S.version){fe(O,S,y);return}t.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+y)}function G(S,y){let O=n.get(S);if(S.version>0&&O.__version!==S.version){Me(O,S,y);return}t.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+y)}let J={[Io]:s.REPEAT,[Zt]:s.CLAMP_TO_EDGE,[Do]:s.MIRRORED_REPEAT},j={[Ct]:s.NEAREST,[qa]:s.NEAREST_MIPMAP_NEAREST,[qr]:s.NEAREST_MIPMAP_LINEAR,[kt]:s.LINEAR,[$h]:s.LINEAR_MIPMAP_NEAREST,[ss]:s.LINEAR_MIPMAP_LINEAR},he={[cu]:s.NEVER,[mu]:s.ALWAYS,[hu]:s.LESS,[Lc]:s.LEQUAL,[uu]:s.EQUAL,[pu]:s.GEQUAL,[du]:s.GREATER,[fu]:s.NOTEQUAL};function W(S,y,O){if(O?(s.texParameteri(S,s.TEXTURE_WRAP_S,J[y.wrapS]),s.texParameteri(S,s.TEXTURE_WRAP_T,J[y.wrapT]),(S===s.TEXTURE_3D||S===s.TEXTURE_2D_ARRAY)&&s.texParameteri(S,s.TEXTURE_WRAP_R,J[y.wrapR]),s.texParameteri(S,s.TEXTURE_MAG_FILTER,j[y.magFilter]),s.texParameteri(S,s.TEXTURE_MIN_FILTER,j[y.minFilter])):(s.texParameteri(S,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(S,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(S===s.TEXTURE_3D||S===s.TEXTURE_2D_ARRAY)&&s.texParameteri(S,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(y.wrapS!==Zt||y.wrapT!==Zt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(S,s.TEXTURE_MAG_FILTER,b(y.magFilter)),s.texParameteri(S,s.TEXTURE_MIN_FILTER,b(y.minFilter)),y.minFilter!==Ct&&y.minFilter!==kt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(s.texParameteri(S,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(S,s.TEXTURE_COMPARE_FUNC,he[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let ie=e.get("EXT_texture_filter_anisotropic");if(y.magFilter===Ct||y.minFilter!==qr&&y.minFilter!==ss||y.type===In&&e.has("OES_texture_float_linear")===!1||o===!1&&y.type===rs&&e.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||n.get(y).__currentAnisotropy)&&(s.texParameterf(S,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy)}}function Q(S,y){let O=!1;S.__webglInit===void 0&&(S.__webglInit=!0,y.addEventListener("dispose",w));let ie=y.source,te=u.get(ie);te===void 0&&(te={},u.set(ie,te));let ee=U(y);if(ee!==S.__cacheKey){te[ee]===void 0&&(te[ee]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,O=!0),te[ee].usedTimes++;let Se=te[S.__cacheKey];Se!==void 0&&(te[S.__cacheKey].usedTimes--,Se.usedTimes===0&&T(y)),S.__cacheKey=ee,S.__webglTexture=te[ee].texture}return O}function fe(S,y,O){let ie=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(ie=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(ie=s.TEXTURE_3D);let te=Q(S,y),ee=y.source;t.bindTexture(ie,S.__webglTexture,s.TEXTURE0+O);let Se=n.get(ee);if(ee.version!==Se.__version||te===!0){t.activeTexture(s.TEXTURE0+O);let de=je.getPrimaries(je.workingColorSpace),xe=y.colorSpace===Ht?null:je.getPrimaries(y.colorSpace),Ce=y.colorSpace===Ht||de===xe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let ze=p(y)&&m(y.image)===!1,ne=_(y.image,ze,!1,i.maxTextureSize);ne=ge(y,ne);let Je=m(ne)||o,Ge=r.convert(y.format,y.colorSpace),Oe=r.convert(y.type),Re=A(y.internalFormat,Ge,Oe,y.colorSpace,y.isVideoTexture);W(ie,y,Je);let _e,R=y.mipmaps,ae=o&&y.isVideoTexture!==!0&&Re!==Cc,we=Se.__version===void 0||te===!0,be=D(y,ne,Je);if(y.isDepthTexture)Re=s.DEPTH_COMPONENT,o?y.type===In?Re=s.DEPTH_COMPONENT32F:y.type===Ln?Re=s.DEPTH_COMPONENT24:y.type===jn?Re=s.DEPTH24_STENCIL8:Re=s.DEPTH_COMPONENT16:y.type===In&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===Qn&&Re===s.DEPTH_COMPONENT&&y.type!==ba&&y.type!==Ln&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=Ln,Oe=r.convert(y.type)),y.format===Fi&&Re===s.DEPTH_COMPONENT&&(Re=s.DEPTH_STENCIL,y.type!==jn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=jn,Oe=r.convert(y.type))),we&&(ae?t.texStorage2D(s.TEXTURE_2D,1,Re,ne.width,ne.height):t.texImage2D(s.TEXTURE_2D,0,Re,ne.width,ne.height,0,Ge,Oe,null));else if(y.isDataTexture)if(R.length>0&&Je){ae&&we&&t.texStorage2D(s.TEXTURE_2D,be,Re,R[0].width,R[0].height);for(let se=0,I=R.length;se<I;se++)_e=R[se],ae?t.texSubImage2D(s.TEXTURE_2D,se,0,0,_e.width,_e.height,Ge,Oe,_e.data):t.texImage2D(s.TEXTURE_2D,se,Re,_e.width,_e.height,0,Ge,Oe,_e.data);y.generateMipmaps=!1}else ae?(we&&t.texStorage2D(s.TEXTURE_2D,be,Re,ne.width,ne.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,ne.width,ne.height,Ge,Oe,ne.data)):t.texImage2D(s.TEXTURE_2D,0,Re,ne.width,ne.height,0,Ge,Oe,ne.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){ae&&we&&t.texStorage3D(s.TEXTURE_2D_ARRAY,be,Re,R[0].width,R[0].height,ne.depth);for(let se=0,I=R.length;se<I;se++)_e=R[se],y.format!==Jt?Ge!==null?ae?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,0,_e.width,_e.height,ne.depth,Ge,_e.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,se,Re,_e.width,_e.height,ne.depth,0,_e.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?t.texSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,0,_e.width,_e.height,ne.depth,Ge,Oe,_e.data):t.texImage3D(s.TEXTURE_2D_ARRAY,se,Re,_e.width,_e.height,ne.depth,0,Ge,Oe,_e.data)}else{ae&&we&&t.texStorage2D(s.TEXTURE_2D,be,Re,R[0].width,R[0].height);for(let se=0,I=R.length;se<I;se++)_e=R[se],y.format!==Jt?Ge!==null?ae?t.compressedTexSubImage2D(s.TEXTURE_2D,se,0,0,_e.width,_e.height,Ge,_e.data):t.compressedTexImage2D(s.TEXTURE_2D,se,Re,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?t.texSubImage2D(s.TEXTURE_2D,se,0,0,_e.width,_e.height,Ge,Oe,_e.data):t.texImage2D(s.TEXTURE_2D,se,Re,_e.width,_e.height,0,Ge,Oe,_e.data)}else if(y.isDataArrayTexture)ae?(we&&t.texStorage3D(s.TEXTURE_2D_ARRAY,be,Re,ne.width,ne.height,ne.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,Ge,Oe,ne.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,Re,ne.width,ne.height,ne.depth,0,Ge,Oe,ne.data);else if(y.isData3DTexture)ae?(we&&t.texStorage3D(s.TEXTURE_3D,be,Re,ne.width,ne.height,ne.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,Ge,Oe,ne.data)):t.texImage3D(s.TEXTURE_3D,0,Re,ne.width,ne.height,ne.depth,0,Ge,Oe,ne.data);else if(y.isFramebufferTexture){if(we)if(ae)t.texStorage2D(s.TEXTURE_2D,be,Re,ne.width,ne.height);else{let se=ne.width,I=ne.height;for(let le=0;le<be;le++)t.texImage2D(s.TEXTURE_2D,le,Re,se,I,0,Ge,Oe,null),se>>=1,I>>=1}}else if(R.length>0&&Je){ae&&we&&t.texStorage2D(s.TEXTURE_2D,be,Re,R[0].width,R[0].height);for(let se=0,I=R.length;se<I;se++)_e=R[se],ae?t.texSubImage2D(s.TEXTURE_2D,se,0,0,Ge,Oe,_e):t.texImage2D(s.TEXTURE_2D,se,Re,Ge,Oe,_e);y.generateMipmaps=!1}else ae?(we&&t.texStorage2D(s.TEXTURE_2D,be,Re,ne.width,ne.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ge,Oe,ne)):t.texImage2D(s.TEXTURE_2D,0,Re,Ge,Oe,ne);M(y,Je)&&x(ie),Se.__version=ee.version,y.onUpdate&&y.onUpdate(y)}S.__version=y.version}function Me(S,y,O){if(y.image.length!==6)return;let ie=Q(S,y),te=y.source;t.bindTexture(s.TEXTURE_CUBE_MAP,S.__webglTexture,s.TEXTURE0+O);let ee=n.get(te);if(te.version!==ee.__version||ie===!0){t.activeTexture(s.TEXTURE0+O);let Se=je.getPrimaries(je.workingColorSpace),de=y.colorSpace===Ht?null:je.getPrimaries(y.colorSpace),xe=y.colorSpace===Ht||Se===de?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);let Ce=y.isCompressedTexture||y.image[0].isCompressedTexture,ze=y.image[0]&&y.image[0].isDataTexture,ne=[];for(let se=0;se<6;se++)!Ce&&!ze?ne[se]=_(y.image[se],!1,!0,i.maxCubemapSize):ne[se]=ze?y.image[se].image:y.image[se],ne[se]=ge(y,ne[se]);let Je=ne[0],Ge=m(Je)||o,Oe=r.convert(y.format,y.colorSpace),Re=r.convert(y.type),_e=A(y.internalFormat,Oe,Re,y.colorSpace),R=o&&y.isVideoTexture!==!0,ae=ee.__version===void 0||ie===!0,we=D(y,Je,Ge);W(s.TEXTURE_CUBE_MAP,y,Ge);let be;if(Ce){R&&ae&&t.texStorage2D(s.TEXTURE_CUBE_MAP,we,_e,Je.width,Je.height);for(let se=0;se<6;se++){be=ne[se].mipmaps;for(let I=0;I<be.length;I++){let le=be[I];y.format!==Jt?Oe!==null?R?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,I,0,0,le.width,le.height,Oe,le.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,I,_e,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):R?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,I,0,0,le.width,le.height,Oe,Re,le.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,I,_e,le.width,le.height,0,Oe,Re,le.data)}}}else{be=y.mipmaps,R&&ae&&(be.length>0&&we++,t.texStorage2D(s.TEXTURE_CUBE_MAP,we,_e,ne[0].width,ne[0].height));for(let se=0;se<6;se++)if(ze){R?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,ne[se].width,ne[se].height,Oe,Re,ne[se].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,_e,ne[se].width,ne[se].height,0,Oe,Re,ne[se].data);for(let I=0;I<be.length;I++){let pe=be[I].image[se].image;R?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,I+1,0,0,pe.width,pe.height,Oe,Re,pe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,I+1,_e,pe.width,pe.height,0,Oe,Re,pe.data)}}else{R?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Oe,Re,ne[se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,_e,Oe,Re,ne[se]);for(let I=0;I<be.length;I++){let le=be[I];R?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,I+1,0,0,Oe,Re,le.image[se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,I+1,_e,Oe,Re,le.image[se])}}}M(y,Ge)&&x(s.TEXTURE_CUBE_MAP),ee.__version=te.version,y.onUpdate&&y.onUpdate(y)}S.__version=y.version}function ye(S,y,O,ie,te,ee){let Se=r.convert(O.format,O.colorSpace),de=r.convert(O.type),xe=A(O.internalFormat,Se,de,O.colorSpace);if(!n.get(y).__hasExternalTextures){let ze=Math.max(1,y.width>>ee),ne=Math.max(1,y.height>>ee);te===s.TEXTURE_3D||te===s.TEXTURE_2D_ARRAY?t.texImage3D(te,ee,xe,ze,ne,y.depth,0,Se,de,null):t.texImage2D(te,ee,xe,ze,ne,0,Se,de,null)}t.bindFramebuffer(s.FRAMEBUFFER,S),$(y)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ie,te,n.get(O).__webglTexture,0,oe(y)):(te===s.TEXTURE_2D||te>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ie,te,n.get(O).__webglTexture,ee),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Le(S,y,O){if(s.bindRenderbuffer(s.RENDERBUFFER,S),y.depthBuffer&&!y.stencilBuffer){let ie=o===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(O||$(y)){let te=y.depthTexture;te&&te.isDepthTexture&&(te.type===In?ie=s.DEPTH_COMPONENT32F:te.type===Ln&&(ie=s.DEPTH_COMPONENT24));let ee=oe(y);$(y)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ee,ie,y.width,y.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,ee,ie,y.width,y.height)}else s.renderbufferStorage(s.RENDERBUFFER,ie,y.width,y.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,S)}else if(y.depthBuffer&&y.stencilBuffer){let ie=oe(y);O&&$(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ie,s.DEPTH24_STENCIL8,y.width,y.height):$(y)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ie,s.DEPTH24_STENCIL8,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,S)}else{let ie=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let te=0;te<ie.length;te++){let ee=ie[te],Se=r.convert(ee.format,ee.colorSpace),de=r.convert(ee.type),xe=A(ee.internalFormat,Se,de,ee.colorSpace),Ce=oe(y);O&&$(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ce,xe,y.width,y.height):$(y)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ce,xe,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,xe,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ue(S,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,S),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),B(y.depthTexture,0);let ie=n.get(y.depthTexture).__webglTexture,te=oe(y);if(y.depthTexture.format===Qn)$(y)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ie,0,te):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ie,0);else if(y.depthTexture.format===Fi)$(y)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ie,0,te):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Ee(S){let y=n.get(S),O=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!y.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Ue(y.__webglFramebuffer,S)}else if(O){y.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[ie]),y.__webglDepthbuffer[ie]=s.createRenderbuffer(),Le(y.__webglDepthbuffer[ie],S,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=s.createRenderbuffer(),Le(y.__webglDepthbuffer,S,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ne(S,y,O){let ie=n.get(S);y!==void 0&&ye(ie.__webglFramebuffer,S,S.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&Ee(S)}function P(S){let y=S.texture,O=n.get(S),ie=n.get(y);S.addEventListener("dispose",z),S.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=s.createTexture()),ie.__version=y.version,a.memory.textures++);let te=S.isWebGLCubeRenderTarget===!0,ee=S.isWebGLMultipleRenderTargets===!0,Se=m(S)||o;if(te){O.__webglFramebuffer=[];for(let de=0;de<6;de++)if(o&&y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer[de]=[];for(let xe=0;xe<y.mipmaps.length;xe++)O.__webglFramebuffer[de][xe]=s.createFramebuffer()}else O.__webglFramebuffer[de]=s.createFramebuffer()}else{if(o&&y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer=[];for(let de=0;de<y.mipmaps.length;de++)O.__webglFramebuffer[de]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(ee)if(i.drawBuffers){let de=S.texture;for(let xe=0,Ce=de.length;xe<Ce;xe++){let ze=n.get(de[xe]);ze.__webglTexture===void 0&&(ze.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&S.samples>0&&$(S)===!1){let de=ee?y:[y];O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let xe=0;xe<de.length;xe++){let Ce=de[xe];O.__webglColorRenderbuffer[xe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[xe]);let ze=r.convert(Ce.format,Ce.colorSpace),ne=r.convert(Ce.type),Je=A(Ce.internalFormat,ze,ne,Ce.colorSpace,S.isXRRenderTarget===!0),Ge=oe(S);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ge,Je,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.RENDERBUFFER,O.__webglColorRenderbuffer[xe])}s.bindRenderbuffer(s.RENDERBUFFER,null),S.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),Le(O.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(te){t.bindTexture(s.TEXTURE_CUBE_MAP,ie.__webglTexture),W(s.TEXTURE_CUBE_MAP,y,Se);for(let de=0;de<6;de++)if(o&&y.mipmaps&&y.mipmaps.length>0)for(let xe=0;xe<y.mipmaps.length;xe++)ye(O.__webglFramebuffer[de][xe],S,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+de,xe);else ye(O.__webglFramebuffer[de],S,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);M(y,Se)&&x(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ee){let de=S.texture;for(let xe=0,Ce=de.length;xe<Ce;xe++){let ze=de[xe],ne=n.get(ze);t.bindTexture(s.TEXTURE_2D,ne.__webglTexture),W(s.TEXTURE_2D,ze,Se),ye(O.__webglFramebuffer,S,ze,s.COLOR_ATTACHMENT0+xe,s.TEXTURE_2D,0),M(ze,Se)&&x(s.TEXTURE_2D)}t.unbindTexture()}else{let de=s.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(o?de=S.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(de,ie.__webglTexture),W(de,y,Se),o&&y.mipmaps&&y.mipmaps.length>0)for(let xe=0;xe<y.mipmaps.length;xe++)ye(O.__webglFramebuffer[xe],S,y,s.COLOR_ATTACHMENT0,de,xe);else ye(O.__webglFramebuffer,S,y,s.COLOR_ATTACHMENT0,de,0);M(y,Se)&&x(de),t.unbindTexture()}S.depthBuffer&&Ee(S)}function ce(S){let y=m(S)||o,O=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ie=0,te=O.length;ie<te;ie++){let ee=O[ie];if(M(ee,y)){let Se=S.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,de=n.get(ee).__webglTexture;t.bindTexture(Se,de),x(Se),t.unbindTexture()}}}function K(S){if(o&&S.samples>0&&$(S)===!1){let y=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],O=S.width,ie=S.height,te=s.COLOR_BUFFER_BIT,ee=[],Se=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,de=n.get(S),xe=S.isWebGLMultipleRenderTargets===!0;if(xe)for(let Ce=0;Ce<y.length;Ce++)t.bindFramebuffer(s.FRAMEBUFFER,de.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,de.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let Ce=0;Ce<y.length;Ce++){ee.push(s.COLOR_ATTACHMENT0+Ce),S.depthBuffer&&ee.push(Se);let ze=de.__ignoreDepthValues!==void 0?de.__ignoreDepthValues:!1;if(ze===!1&&(S.depthBuffer&&(te|=s.DEPTH_BUFFER_BIT),S.stencilBuffer&&(te|=s.STENCIL_BUFFER_BIT)),xe&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,de.__webglColorRenderbuffer[Ce]),ze===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Se]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Se])),xe){let ne=n.get(y[Ce]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ne,0)}s.blitFramebuffer(0,0,O,ie,0,0,O,ie,te,s.NEAREST),c&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ee)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),xe)for(let Ce=0;Ce<y.length;Ce++){t.bindFramebuffer(s.FRAMEBUFFER,de.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,de.__webglColorRenderbuffer[Ce]);let ze=n.get(y[Ce]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,de.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,ze,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}}function oe(S){return Math.min(i.maxSamples,S.samples)}function $(S){let y=n.get(S);return o&&S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Te(S){let y=a.render.frame;h.get(S)!==y&&(h.set(S,y),S.update())}function ge(S,y){let O=S.colorSpace,ie=S.format,te=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===Uo||O!==xn&&O!==Ht&&(je.getTransfer(O)===Qe?o===!1?e.has("EXT_sRGB")===!0&&ie===Jt?(S.format=Uo,S.minFilter=kt,S.generateMipmaps=!1):y=hr.sRGBToLinear(y):(ie!==Jt||te!==Un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),y}this.allocateTextureUnit=C,this.resetTextureUnits=k,this.setTexture2D=B,this.setTexture2DArray=Z,this.setTexture3D=q,this.setTextureCube=G,this.rebindTextures=Ne,this.setupRenderTarget=P,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=K,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=$}function vg(s,e,t){let n=t.isWebGL2;function i(r,a=Ht){let o,l=je.getTransfer(a);if(r===Un)return s.UNSIGNED_BYTE;if(r===Ec)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Tc)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Kh)return s.BYTE;if(r===jh)return s.SHORT;if(r===ba)return s.UNSIGNED_SHORT;if(r===Sc)return s.INT;if(r===Ln)return s.UNSIGNED_INT;if(r===In)return s.FLOAT;if(r===rs)return n?s.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Qh)return s.ALPHA;if(r===Jt)return s.RGBA;if(r===eu)return s.LUMINANCE;if(r===tu)return s.LUMINANCE_ALPHA;if(r===Qn)return s.DEPTH_COMPONENT;if(r===Fi)return s.DEPTH_STENCIL;if(r===Uo)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===nu)return s.RED;if(r===wc)return s.RED_INTEGER;if(r===iu)return s.RG;if(r===Ac)return s.RG_INTEGER;if(r===Rc)return s.RGBA_INTEGER;if(r===Zr||r===Jr||r===$r||r===Kr)if(l===Qe)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Zr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Jr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===$r)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Kr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Zr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Jr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===$r)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Kr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Za||r===Ja||r===$a||r===Ka)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Za)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ja)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===$a)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ka)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Cc)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===ja||r===Qa)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===ja)return l===Qe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Qa)return l===Qe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===el||r===tl||r===nl||r===il||r===sl||r===rl||r===ol||r===al||r===ll||r===cl||r===hl||r===ul||r===dl||r===fl)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===el)return l===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===tl)return l===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===nl)return l===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===il)return l===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===sl)return l===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===rl)return l===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ol)return l===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===al)return l===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ll)return l===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===cl)return l===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===hl)return l===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ul)return l===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===dl)return l===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===fl)return l===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===jr||r===pl||r===ml)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===jr)return l===Qe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===pl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ml)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===su||r===gl||r===_l||r===xl)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===jr)return o.COMPRESSED_RED_RGTC1_EXT;if(r===gl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===_l)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===xl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===jn?n?s.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}var Ko=class extends Pt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},_t=class extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}},yg={type:"move"},ts=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _t,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _t,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _t,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(yg)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new _t;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},jo=class extends an{constructor(e,t){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,_=t.getContextAttributes(),m=null,p=null,M=[],x=[],A=new re,D=null,b=new Pt;b.layers.enable(1),b.viewport=new Mt;let w=new Pt;w.layers.enable(2),w.viewport=new Mt;let z=[b,w],v=new Ko;v.layers.enable(1),v.layers.enable(2);let T=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let Q=M[W];return Q===void 0&&(Q=new ts,M[W]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(W){let Q=M[W];return Q===void 0&&(Q=new ts,M[W]=Q),Q.getGripSpace()},this.getHand=function(W){let Q=M[W];return Q===void 0&&(Q=new ts,M[W]=Q),Q.getHandSpace()};function Y(W){let Q=x.indexOf(W.inputSource);if(Q===-1)return;let fe=M[Q];fe!==void 0&&(fe.update(W.inputSource,W.frame,c||a),fe.dispatchEvent({type:W.type,data:W.inputSource}))}function k(){i.removeEventListener("select",Y),i.removeEventListener("selectstart",Y),i.removeEventListener("selectend",Y),i.removeEventListener("squeeze",Y),i.removeEventListener("squeezestart",Y),i.removeEventListener("squeezeend",Y),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",C);for(let W=0;W<M.length;W++){let Q=x[W];Q!==null&&(x[W]=null,M[W].disconnect(Q))}T=null,N=null,e.setRenderTarget(m),f=null,u=null,d=null,i=null,p=null,he.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(W){if(i=W,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",Y),i.addEventListener("selectstart",Y),i.addEventListener("selectend",Y),i.addEventListener("squeeze",Y),i.addEventListener("squeezestart",Y),i.addEventListener("squeezeend",Y),i.addEventListener("end",k),i.addEventListener("inputsourceschange",C),_.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(A),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let Q={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,Q),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new vn(f.framebufferWidth,f.framebufferHeight,{format:Jt,type:Un,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let Q=null,fe=null,Me=null;_.depth&&(Me=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=_.stencil?Fi:Qn,fe=_.stencil?jn:Ln);let ye={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:r};d=new XRWebGLBinding(i,t),u=d.createProjectionLayer(ye),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),p=new vn(u.textureWidth,u.textureHeight,{format:Jt,type:Un,depthTexture:new vr(u.textureWidth,u.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});let Le=e.properties.get(p);Le.__ignoreDepthValues=u.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),he.setContext(i),he.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function C(W){for(let Q=0;Q<W.removed.length;Q++){let fe=W.removed[Q],Me=x.indexOf(fe);Me>=0&&(x[Me]=null,M[Me].disconnect(fe))}for(let Q=0;Q<W.added.length;Q++){let fe=W.added[Q],Me=x.indexOf(fe);if(Me===-1){for(let Le=0;Le<M.length;Le++)if(Le>=x.length){x.push(fe),Me=Le;break}else if(x[Le]===null){x[Le]=fe,Me=Le;break}if(Me===-1)break}let ye=M[Me];ye&&ye.connect(fe)}}let U=new L,B=new L;function Z(W,Q,fe){U.setFromMatrixPosition(Q.matrixWorld),B.setFromMatrixPosition(fe.matrixWorld);let Me=U.distanceTo(B),ye=Q.projectionMatrix.elements,Le=fe.projectionMatrix.elements,Ue=ye[14]/(ye[10]-1),Ee=ye[14]/(ye[10]+1),Ne=(ye[9]+1)/ye[5],P=(ye[9]-1)/ye[5],ce=(ye[8]-1)/ye[0],K=(Le[8]+1)/Le[0],oe=Ue*ce,$=Ue*K,Te=Me/(-ce+K),ge=Te*-ce;Q.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(ge),W.translateZ(Te),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();let S=Ue+Te,y=Ee+Te,O=oe-ge,ie=$+(Me-ge),te=Ne*Ee/y*S,ee=P*Ee/y*S;W.projectionMatrix.makePerspective(O,ie,te,ee,S,y),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function q(W,Q){Q===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(Q.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(i===null)return;v.near=w.near=b.near=W.near,v.far=w.far=b.far=W.far,(T!==v.near||N!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),T=v.near,N=v.far);let Q=W.parent,fe=v.cameras;q(v,Q);for(let Me=0;Me<fe.length;Me++)q(fe[Me],Q);fe.length===2?Z(v,b,w):v.projectionMatrix.copy(b.projectionMatrix),G(W,v,Q)};function G(W,Q,fe){fe===null?W.matrix.copy(Q.matrixWorld):(W.matrix.copy(fe.matrixWorld),W.matrix.invert(),W.matrix.multiply(Q.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(Q.projectionMatrix),W.projectionMatrixInverse.copy(Q.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=os*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(W){l=W,u!==null&&(u.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)};let J=null;function j(W,Q){if(h=Q.getViewerPose(c||a),g=Q,h!==null){let fe=h.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let Me=!1;fe.length!==v.cameras.length&&(v.cameras.length=0,Me=!0);for(let ye=0;ye<fe.length;ye++){let Le=fe[ye],Ue=null;if(f!==null)Ue=f.getViewport(Le);else{let Ne=d.getViewSubImage(u,Le);Ue=Ne.viewport,ye===0&&(e.setRenderTargetTextures(p,Ne.colorTexture,u.ignoreDepthValues?void 0:Ne.depthStencilTexture),e.setRenderTarget(p))}let Ee=z[ye];Ee===void 0&&(Ee=new Pt,Ee.layers.enable(ye),Ee.viewport=new Mt,z[ye]=Ee),Ee.matrix.fromArray(Le.transform.matrix),Ee.matrix.decompose(Ee.position,Ee.quaternion,Ee.scale),Ee.projectionMatrix.fromArray(Le.projectionMatrix),Ee.projectionMatrixInverse.copy(Ee.projectionMatrix).invert(),Ee.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),ye===0&&(v.matrix.copy(Ee.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),Me===!0&&v.cameras.push(Ee)}}for(let fe=0;fe<M.length;fe++){let Me=x[fe],ye=M[fe];Me!==null&&ye!==void 0&&ye.update(Me,Q,c||a)}J&&J(W,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}let he=new Uc;he.setAnimationLoop(j),this.setAnimationLoop=function(W){J=W},this.dispose=function(){}}};function Mg(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Nc(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,M,x,A){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,A)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,M,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Tt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Tt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let M=e.get(p).envMap;if(M&&(m.envMap.value=M,m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let x=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*x,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Tt&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function bg(s,e,t,n){let i={},r={},a=[],o=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,x){let A=x.program;n.uniformBlockBinding(M,A)}function c(M,x){let A=i[M.id];A===void 0&&(g(M),A=h(M),i[M.id]=A,M.addEventListener("dispose",m));let D=x.program;n.updateUBOMapping(M,D);let b=e.render.frame;r[M.id]!==b&&(u(M),r[M.id]=b)}function h(M){let x=d();M.__bindingPointIndex=x;let A=s.createBuffer(),D=M.__size,b=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,A),s.bufferData(s.UNIFORM_BUFFER,D,b),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,A),A}function d(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){let x=i[M.id],A=M.uniforms,D=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let b=0,w=A.length;b<w;b++){let z=Array.isArray(A[b])?A[b]:[A[b]];for(let v=0,T=z.length;v<T;v++){let N=z[v];if(f(N,b,v,D)===!0){let Y=N.__offset,k=Array.isArray(N.value)?N.value:[N.value],C=0;for(let U=0;U<k.length;U++){let B=k[U],Z=_(B);typeof B=="number"||typeof B=="boolean"?(N.__data[0]=B,s.bufferSubData(s.UNIFORM_BUFFER,Y+C,N.__data)):B.isMatrix3?(N.__data[0]=B.elements[0],N.__data[1]=B.elements[1],N.__data[2]=B.elements[2],N.__data[3]=0,N.__data[4]=B.elements[3],N.__data[5]=B.elements[4],N.__data[6]=B.elements[5],N.__data[7]=0,N.__data[8]=B.elements[6],N.__data[9]=B.elements[7],N.__data[10]=B.elements[8],N.__data[11]=0):(B.toArray(N.__data,C),C+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,Y,N.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(M,x,A,D){let b=M.value,w=x+"_"+A;if(D[w]===void 0)return typeof b=="number"||typeof b=="boolean"?D[w]=b:D[w]=b.clone(),!0;{let z=D[w];if(typeof b=="number"||typeof b=="boolean"){if(z!==b)return D[w]=b,!0}else if(z.equals(b)===!1)return z.copy(b),!0}return!1}function g(M){let x=M.uniforms,A=0,D=16;for(let w=0,z=x.length;w<z;w++){let v=Array.isArray(x[w])?x[w]:[x[w]];for(let T=0,N=v.length;T<N;T++){let Y=v[T],k=Array.isArray(Y.value)?Y.value:[Y.value];for(let C=0,U=k.length;C<U;C++){let B=k[C],Z=_(B),q=A%D;q!==0&&D-q<Z.boundary&&(A+=D-q),Y.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=A,A+=Z.storage}}}let b=A%D;return b>0&&(A+=D-b),M.__size=A,M.__cache={},this}function _(M){let x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function m(M){let x=M.target;x.removeEventListener("dispose",m);let A=a.indexOf(x.__bindingPointIndex);a.splice(A,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function p(){for(let M in i)s.deleteBuffer(i[M]);a=[],i={},r={}}return{bind:l,update:c,dispose:p}}var cs=class{constructor(e={}){let{canvas:t=Pu(),context:n=null,depth:i=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let u;n!==null?u=n.getContextAttributes().alpha:u=a;let f=new Uint32Array(4),g=new Int32Array(4),_=null,m=null,p=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=yt,this._useLegacyLights=!1,this.toneMapping=Nn,this.toneMappingExposure=1;let x=this,A=!1,D=0,b=0,w=null,z=-1,v=null,T=new Mt,N=new Mt,Y=null,k=new Be(0),C=0,U=t.width,B=t.height,Z=1,q=null,G=null,J=new Mt(0,0,U,B),j=new Mt(0,0,U,B),he=!1,W=new ki,Q=!1,fe=!1,Me=null,ye=new lt,Le=new re,Ue=new L,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ne(){return w===null?Z:1}let P=n;function ce(E,F){for(let V=0;V<E.length;V++){let X=E[V],H=t.getContext(X,F);if(H!==null)return H}return null}try{let E={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ma}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",I,!1),t.addEventListener("webglcontextcreationerror",le,!1),P===null){let F=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&F.shift(),P=ce(F,E),P===null)throw ce(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&P instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),P.getShaderPrecisionFormat===void 0&&(P.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let K,oe,$,Te,ge,S,y,O,ie,te,ee,Se,de,xe,Ce,ze,ne,Je,Ge,Oe,Re,_e,R,ae;function we(){K=new Hp(P),oe=new Up(P,K,e),K.init(oe),_e=new vg(P,K,oe),$=new _g(P,K,oe),Te=new Wp(P),ge=new rg,S=new xg(P,K,$,ge,oe,_e,Te),y=new Fp(x),O=new kp(x),ie=new Ku(P,oe),R=new Dp(P,K,ie,oe),te=new Vp(P,ie,Te,R),ee=new Zp(P,te,ie,Te),Ge=new qp(P,oe,S),ze=new Op(ge),Se=new sg(x,y,O,K,oe,R,ze),de=new Mg(x,ge),xe=new ag,Ce=new fg(K,oe),Je=new Ip(x,y,O,$,ee,u,l),ne=new gg(x,ee,oe),ae=new bg(P,Te,oe,$),Oe=new Np(P,K,Te,oe),Re=new Gp(P,K,Te,oe),Te.programs=Se.programs,x.capabilities=oe,x.extensions=K,x.properties=ge,x.renderLists=xe,x.shadowMap=ne,x.state=$,x.info=Te}we();let be=new jo(x,P);this.xr=be,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let E=K.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=K.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(E){E!==void 0&&(Z=E,this.setSize(U,B,!1))},this.getSize=function(E){return E.set(U,B)},this.setSize=function(E,F,V=!0){if(be.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=E,B=F,t.width=Math.floor(E*Z),t.height=Math.floor(F*Z),V===!0&&(t.style.width=E+"px",t.style.height=F+"px"),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(U*Z,B*Z).floor()},this.setDrawingBufferSize=function(E,F,V){U=E,B=F,Z=V,t.width=Math.floor(E*V),t.height=Math.floor(F*V),this.setViewport(0,0,E,F)},this.getCurrentViewport=function(E){return E.copy(T)},this.getViewport=function(E){return E.copy(J)},this.setViewport=function(E,F,V,X){E.isVector4?J.set(E.x,E.y,E.z,E.w):J.set(E,F,V,X),$.viewport(T.copy(J).multiplyScalar(Z).floor())},this.getScissor=function(E){return E.copy(j)},this.setScissor=function(E,F,V,X){E.isVector4?j.set(E.x,E.y,E.z,E.w):j.set(E,F,V,X),$.scissor(N.copy(j).multiplyScalar(Z).floor())},this.getScissorTest=function(){return he},this.setScissorTest=function(E){$.setScissorTest(he=E)},this.setOpaqueSort=function(E){q=E},this.setTransparentSort=function(E){G=E},this.getClearColor=function(E){return E.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor.apply(Je,arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha.apply(Je,arguments)},this.clear=function(E=!0,F=!0,V=!0){let X=0;if(E){let H=!1;if(w!==null){let ve=w.texture.format;H=ve===Rc||ve===Ac||ve===wc}if(H){let ve=w.texture.type,Ae=ve===Un||ve===Ln||ve===ba||ve===jn||ve===Ec||ve===Tc,De=Je.getClearColor(),Fe=Je.getClearAlpha(),We=De.r,ke=De.g,He=De.b;Ae?(f[0]=We,f[1]=ke,f[2]=He,f[3]=Fe,P.clearBufferuiv(P.COLOR,0,f)):(g[0]=We,g[1]=ke,g[2]=He,g[3]=Fe,P.clearBufferiv(P.COLOR,0,g))}else X|=P.COLOR_BUFFER_BIT}F&&(X|=P.DEPTH_BUFFER_BIT),V&&(X|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",I,!1),t.removeEventListener("webglcontextcreationerror",le,!1),xe.dispose(),Ce.dispose(),ge.dispose(),y.dispose(),O.dispose(),ee.dispose(),R.dispose(),ae.dispose(),Se.dispose(),be.dispose(),be.removeEventListener("sessionstart",ot),be.removeEventListener("sessionend",$e),Me&&(Me.dispose(),Me=null),ct.stop()};function se(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let E=Te.autoReset,F=ne.enabled,V=ne.autoUpdate,X=ne.needsUpdate,H=ne.type;we(),Te.autoReset=E,ne.enabled=F,ne.autoUpdate=V,ne.needsUpdate=X,ne.type=H}function le(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function pe(E){let F=E.target;F.removeEventListener("dispose",pe),Ie(F)}function Ie(E){Pe(E),ge.remove(E)}function Pe(E){let F=ge.get(E).programs;F!==void 0&&(F.forEach(function(V){Se.releaseProgram(V)}),E.isShaderMaterial&&Se.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,V,X,H,ve){F===null&&(F=Ee);let Ae=H.isMesh&&H.matrixWorld.determinant()<0,De=rh(E,F,V,X,H);$.setMaterial(X,Ae);let Fe=V.index,We=1;if(X.wireframe===!0){if(Fe=te.getWireframeAttribute(V),Fe===void 0)return;We=2}let ke=V.drawRange,He=V.attributes.position,at=ke.start*We,Lt=(ke.start+ke.count)*We;ve!==null&&(at=Math.max(at,ve.start*We),Lt=Math.min(Lt,(ve.start+ve.count)*We)),Fe!==null?(at=Math.max(at,0),Lt=Math.min(Lt,Fe.count)):He!=null&&(at=Math.max(at,0),Lt=Math.min(Lt,He.count));let pt=Lt-at;if(pt<0||pt===1/0)return;R.setup(H,X,De,V,Fe);let hn,tt=Oe;if(Fe!==null&&(hn=ie.get(Fe),tt=Re,tt.setIndex(hn)),H.isMesh)X.wireframe===!0?($.setLineWidth(X.wireframeLinewidth*Ne()),tt.setMode(P.LINES)):tt.setMode(P.TRIANGLES);else if(H.isLine){let Xe=X.linewidth;Xe===void 0&&(Xe=1),$.setLineWidth(Xe*Ne()),H.isLineSegments?tt.setMode(P.LINES):H.isLineLoop?tt.setMode(P.LINE_LOOP):tt.setMode(P.LINE_STRIP)}else H.isPoints?tt.setMode(P.POINTS):H.isSprite&&tt.setMode(P.TRIANGLES);if(H.isBatchedMesh)tt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else if(H.isInstancedMesh)tt.renderInstances(at,pt,H.count);else if(V.isInstancedBufferGeometry){let Xe=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Gr=Math.min(V.instanceCount,Xe);tt.renderInstances(at,pt,Gr)}else tt.render(at,pt)};function qe(E,F,V){E.transparent===!0&&E.side===qt&&E.forceSinglePass===!1?(E.side=Tt,E.needsUpdate=!0,Ss(E,F,V),E.side=Fn,E.needsUpdate=!0,Ss(E,F,V),E.side=qt):Ss(E,F,V)}this.compile=function(E,F,V=null){V===null&&(V=E),m=Ce.get(V),m.init(),M.push(m),V.traverseVisible(function(H){H.isLight&&H.layers.test(F.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),E!==V&&E.traverseVisible(function(H){H.isLight&&H.layers.test(F.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights(x._useLegacyLights);let X=new Set;return E.traverse(function(H){let ve=H.material;if(ve)if(Array.isArray(ve))for(let Ae=0;Ae<ve.length;Ae++){let De=ve[Ae];qe(De,V,H),X.add(De)}else qe(ve,V,H),X.add(ve)}),M.pop(),m=null,X},this.compileAsync=function(E,F,V=null){let X=this.compile(E,F,V);return new Promise(H=>{function ve(){if(X.forEach(function(Ae){ge.get(Ae).currentProgram.isReady()&&X.delete(Ae)}),X.size===0){H(E);return}setTimeout(ve,10)}K.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let Ze=null;function st(E){Ze&&Ze(E)}function ot(){ct.stop()}function $e(){ct.start()}let ct=new Uc;ct.setAnimationLoop(st),typeof self<"u"&&ct.setContext(self),this.setAnimationLoop=function(E){Ze=E,be.setAnimationLoop(E),E===null?ct.stop():ct.start()},be.addEventListener("sessionstart",ot),be.addEventListener("sessionend",$e),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(be.cameraAutoUpdate===!0&&be.updateCamera(F),F=be.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,F,w),m=Ce.get(E,M.length),m.init(),M.push(m),ye.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),W.setFromProjectionMatrix(ye),fe=this.localClippingEnabled,Q=ze.init(this.clippingPlanes,fe),_=xe.get(E,p.length),_.init(),p.push(_),nn(E,F,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(q,G),this.info.render.frame++,Q===!0&&ze.beginShadows();let V=m.state.shadowsArray;if(ne.render(V,E,F),Q===!0&&ze.endShadows(),this.info.autoReset===!0&&this.info.reset(),Je.render(_,E),m.setupLights(x._useLegacyLights),F.isArrayCamera){let X=F.cameras;for(let H=0,ve=X.length;H<ve;H++){let Ae=X[H];Oa(_,E,Ae,Ae.viewport)}}else Oa(_,E,F);w!==null&&(S.updateMultisampleRenderTarget(w),S.updateRenderTargetMipmap(w)),E.isScene===!0&&E.onAfterRender(x,E,F),R.resetDefaultState(),z=-1,v=null,M.pop(),M.length>0?m=M[M.length-1]:m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function nn(E,F,V,X){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)V=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||W.intersectsSprite(E)){X&&Ue.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ye);let Ae=ee.update(E),De=E.material;De.visible&&_.push(E,Ae,De,V,Ue.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||W.intersectsObject(E))){let Ae=ee.update(E),De=E.material;if(X&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ue.copy(E.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),Ue.copy(Ae.boundingSphere.center)),Ue.applyMatrix4(E.matrixWorld).applyMatrix4(ye)),Array.isArray(De)){let Fe=Ae.groups;for(let We=0,ke=Fe.length;We<ke;We++){let He=Fe[We],at=De[He.materialIndex];at&&at.visible&&_.push(E,Ae,at,V,Ue.z,He)}}else De.visible&&_.push(E,Ae,De,V,Ue.z,null)}}let ve=E.children;for(let Ae=0,De=ve.length;Ae<De;Ae++)nn(ve[Ae],F,V,X)}function Oa(E,F,V,X){let H=E.opaque,ve=E.transmissive,Ae=E.transparent;m.setupLightsView(V),Q===!0&&ze.setGlobalState(x.clippingPlanes,V),ve.length>0&&sh(H,ve,F,V),X&&$.viewport(T.copy(X)),H.length>0&&bs(H,F,V),ve.length>0&&bs(ve,F,V),Ae.length>0&&bs(Ae,F,V),$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),$.setPolygonOffset(!1)}function sh(E,F,V,X){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;let ve=oe.isWebGL2;Me===null&&(Me=new vn(1,1,{generateMipmaps:!0,type:K.has("EXT_color_buffer_half_float")?rs:Un,minFilter:ss,samples:ve?4:0})),x.getDrawingBufferSize(Le),ve?Me.setSize(Le.x,Le.y):Me.setSize(lr(Le.x),lr(Le.y));let Ae=x.getRenderTarget();x.setRenderTarget(Me),x.getClearColor(k),C=x.getClearAlpha(),C<1&&x.setClearColor(16777215,.5),x.clear();let De=x.toneMapping;x.toneMapping=Nn,bs(E,V,X),S.updateMultisampleRenderTarget(Me),S.updateRenderTargetMipmap(Me);let Fe=!1;for(let We=0,ke=F.length;We<ke;We++){let He=F[We],at=He.object,Lt=He.geometry,pt=He.material,hn=He.group;if(pt.side===qt&&at.layers.test(X.layers)){let tt=pt.side;pt.side=Tt,pt.needsUpdate=!0,Fa(at,V,X,Lt,pt,hn),pt.side=tt,pt.needsUpdate=!0,Fe=!0}}Fe===!0&&(S.updateMultisampleRenderTarget(Me),S.updateRenderTargetMipmap(Me)),x.setRenderTarget(Ae),x.setClearColor(k,C),x.toneMapping=De}function bs(E,F,V){let X=F.isScene===!0?F.overrideMaterial:null;for(let H=0,ve=E.length;H<ve;H++){let Ae=E[H],De=Ae.object,Fe=Ae.geometry,We=X===null?Ae.material:X,ke=Ae.group;De.layers.test(V.layers)&&Fa(De,F,V,Fe,We,ke)}}function Fa(E,F,V,X,H,ve){E.onBeforeRender(x,F,V,X,H,ve),E.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),H.onBeforeRender(x,F,V,X,E,ve),H.transparent===!0&&H.side===qt&&H.forceSinglePass===!1?(H.side=Tt,H.needsUpdate=!0,x.renderBufferDirect(V,F,X,H,E,ve),H.side=Fn,H.needsUpdate=!0,x.renderBufferDirect(V,F,X,H,E,ve),H.side=qt):x.renderBufferDirect(V,F,X,H,E,ve),E.onAfterRender(x,F,V,X,H,ve)}function Ss(E,F,V){F.isScene!==!0&&(F=Ee);let X=ge.get(E),H=m.state.lights,ve=m.state.shadowsArray,Ae=H.state.version,De=Se.getParameters(E,H.state,ve,F,V),Fe=Se.getProgramCacheKey(De),We=X.programs;X.environment=E.isMeshStandardMaterial?F.environment:null,X.fog=F.fog,X.envMap=(E.isMeshStandardMaterial?O:y).get(E.envMap||X.environment),We===void 0&&(E.addEventListener("dispose",pe),We=new Map,X.programs=We);let ke=We.get(Fe);if(ke!==void 0){if(X.currentProgram===ke&&X.lightsStateVersion===Ae)return za(E,De),ke}else De.uniforms=Se.getUniforms(E),E.onBuild(V,De,x),E.onBeforeCompile(De,x),ke=Se.acquireProgram(De,Fe),We.set(Fe,ke),X.uniforms=De.uniforms;let He=X.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(He.clippingPlanes=ze.uniform),za(E,De),X.needsLights=ah(E),X.lightsStateVersion=Ae,X.needsLights&&(He.ambientLightColor.value=H.state.ambient,He.lightProbe.value=H.state.probe,He.directionalLights.value=H.state.directional,He.directionalLightShadows.value=H.state.directionalShadow,He.spotLights.value=H.state.spot,He.spotLightShadows.value=H.state.spotShadow,He.rectAreaLights.value=H.state.rectArea,He.ltc_1.value=H.state.rectAreaLTC1,He.ltc_2.value=H.state.rectAreaLTC2,He.pointLights.value=H.state.point,He.pointLightShadows.value=H.state.pointShadow,He.hemisphereLights.value=H.state.hemi,He.directionalShadowMap.value=H.state.directionalShadowMap,He.directionalShadowMatrix.value=H.state.directionalShadowMatrix,He.spotShadowMap.value=H.state.spotShadowMap,He.spotLightMatrix.value=H.state.spotLightMatrix,He.spotLightMap.value=H.state.spotLightMap,He.pointShadowMap.value=H.state.pointShadowMap,He.pointShadowMatrix.value=H.state.pointShadowMatrix),X.currentProgram=ke,X.uniformsList=null,ke}function Ba(E){if(E.uniformsList===null){let F=E.currentProgram.getUniforms();E.uniformsList=Ni.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function za(E,F){let V=ge.get(E);V.outputColorSpace=F.outputColorSpace,V.batching=F.batching,V.instancing=F.instancing,V.instancingColor=F.instancingColor,V.skinning=F.skinning,V.morphTargets=F.morphTargets,V.morphNormals=F.morphNormals,V.morphColors=F.morphColors,V.morphTargetsCount=F.morphTargetsCount,V.numClippingPlanes=F.numClippingPlanes,V.numIntersection=F.numClipIntersection,V.vertexAlphas=F.vertexAlphas,V.vertexTangents=F.vertexTangents,V.toneMapping=F.toneMapping}function rh(E,F,V,X,H){F.isScene!==!0&&(F=Ee),S.resetTextureUnits();let ve=F.fog,Ae=X.isMeshStandardMaterial?F.environment:null,De=w===null?x.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:xn,Fe=(X.isMeshStandardMaterial?O:y).get(X.envMap||Ae),We=X.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,ke=!!V.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),He=!!V.morphAttributes.position,at=!!V.morphAttributes.normal,Lt=!!V.morphAttributes.color,pt=Nn;X.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(pt=x.toneMapping);let hn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,tt=hn!==void 0?hn.length:0,Xe=ge.get(X),Gr=m.state.lights;if(Q===!0&&(fe===!0||E!==v)){let Bt=E===v&&X.id===z;ze.setState(X,E,Bt)}let rt=!1;X.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==Gr.state.version||Xe.outputColorSpace!==De||H.isBatchedMesh&&Xe.batching===!1||!H.isBatchedMesh&&Xe.batching===!0||H.isInstancedMesh&&Xe.instancing===!1||!H.isInstancedMesh&&Xe.instancing===!0||H.isSkinnedMesh&&Xe.skinning===!1||!H.isSkinnedMesh&&Xe.skinning===!0||H.isInstancedMesh&&Xe.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Xe.instancingColor===!1&&H.instanceColor!==null||Xe.envMap!==Fe||X.fog===!0&&Xe.fog!==ve||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==ze.numPlanes||Xe.numIntersection!==ze.numIntersection)||Xe.vertexAlphas!==We||Xe.vertexTangents!==ke||Xe.morphTargets!==He||Xe.morphNormals!==at||Xe.morphColors!==Lt||Xe.toneMapping!==pt||oe.isWebGL2===!0&&Xe.morphTargetsCount!==tt)&&(rt=!0):(rt=!0,Xe.__version=X.version);let Vn=Xe.currentProgram;rt===!0&&(Vn=Ss(X,F,H));let ka=!1,Wi=!1,Wr=!1,bt=Vn.getUniforms(),Gn=Xe.uniforms;if($.useProgram(Vn.program)&&(ka=!0,Wi=!0,Wr=!0),X.id!==z&&(z=X.id,Wi=!0),ka||v!==E){bt.setValue(P,"projectionMatrix",E.projectionMatrix),bt.setValue(P,"viewMatrix",E.matrixWorldInverse);let Bt=bt.map.cameraPosition;Bt!==void 0&&Bt.setValue(P,Ue.setFromMatrixPosition(E.matrixWorld)),oe.logarithmicDepthBuffer&&bt.setValue(P,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&bt.setValue(P,"isOrthographic",E.isOrthographicCamera===!0),v!==E&&(v=E,Wi=!0,Wr=!0)}if(H.isSkinnedMesh){bt.setOptional(P,H,"bindMatrix"),bt.setOptional(P,H,"bindMatrixInverse");let Bt=H.skeleton;Bt&&(oe.floatVertexTextures?(Bt.boneTexture===null&&Bt.computeBoneTexture(),bt.setValue(P,"boneTexture",Bt.boneTexture,S)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}H.isBatchedMesh&&(bt.setOptional(P,H,"batchingTexture"),bt.setValue(P,"batchingTexture",H._matricesTexture,S));let Xr=V.morphAttributes;if((Xr.position!==void 0||Xr.normal!==void 0||Xr.color!==void 0&&oe.isWebGL2===!0)&&Ge.update(H,V,Vn),(Wi||Xe.receiveShadow!==H.receiveShadow)&&(Xe.receiveShadow=H.receiveShadow,bt.setValue(P,"receiveShadow",H.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Gn.envMap.value=Fe,Gn.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),Wi&&(bt.setValue(P,"toneMappingExposure",x.toneMappingExposure),Xe.needsLights&&oh(Gn,Wr),ve&&X.fog===!0&&de.refreshFogUniforms(Gn,ve),de.refreshMaterialUniforms(Gn,X,Z,B,Me),Ni.upload(P,Ba(Xe),Gn,S)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Ni.upload(P,Ba(Xe),Gn,S),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&bt.setValue(P,"center",H.center),bt.setValue(P,"modelViewMatrix",H.modelViewMatrix),bt.setValue(P,"normalMatrix",H.normalMatrix),bt.setValue(P,"modelMatrix",H.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){let Bt=X.uniformsGroups;for(let Yr=0,lh=Bt.length;Yr<lh;Yr++)if(oe.isWebGL2){let Ha=Bt[Yr];ae.update(Ha,Vn),ae.bind(Ha,Vn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Vn}function oh(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function ah(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(E,F,V){ge.get(E.texture).__webglTexture=F,ge.get(E.depthTexture).__webglTexture=V;let X=ge.get(E);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=V===void 0,X.__autoAllocateDepthBuffer||K.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,F){let V=ge.get(E);V.__webglFramebuffer=F,V.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(E,F=0,V=0){w=E,D=F,b=V;let X=!0,H=null,ve=!1,Ae=!1;if(E){let Fe=ge.get(E);Fe.__useDefaultFramebuffer!==void 0?($.bindFramebuffer(P.FRAMEBUFFER,null),X=!1):Fe.__webglFramebuffer===void 0?S.setupRenderTarget(E):Fe.__hasExternalTextures&&S.rebindTextures(E,ge.get(E.texture).__webglTexture,ge.get(E.depthTexture).__webglTexture);let We=E.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Ae=!0);let ke=ge.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(ke[F])?H=ke[F][V]:H=ke[F],ve=!0):oe.isWebGL2&&E.samples>0&&S.useMultisampledRTT(E)===!1?H=ge.get(E).__webglMultisampledFramebuffer:Array.isArray(ke)?H=ke[V]:H=ke,T.copy(E.viewport),N.copy(E.scissor),Y=E.scissorTest}else T.copy(J).multiplyScalar(Z).floor(),N.copy(j).multiplyScalar(Z).floor(),Y=he;if($.bindFramebuffer(P.FRAMEBUFFER,H)&&oe.drawBuffers&&X&&$.drawBuffers(E,H),$.viewport(T),$.scissor(N),$.setScissorTest(Y),ve){let Fe=ge.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+F,Fe.__webglTexture,V)}else if(Ae){let Fe=ge.get(E.texture),We=F||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Fe.__webglTexture,V||0,We)}z=-1},this.readRenderTargetPixels=function(E,F,V,X,H,ve,Ae){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=ge.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ae!==void 0&&(De=De[Ae]),De){$.bindFramebuffer(P.FRAMEBUFFER,De);try{let Fe=E.texture,We=Fe.format,ke=Fe.type;if(We!==Jt&&_e.convert(We)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let He=ke===rs&&(K.has("EXT_color_buffer_half_float")||oe.isWebGL2&&K.has("EXT_color_buffer_float"));if(ke!==Un&&_e.convert(ke)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ke===In&&(oe.isWebGL2||K.has("OES_texture_float")||K.has("WEBGL_color_buffer_float")))&&!He){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-X&&V>=0&&V<=E.height-H&&P.readPixels(F,V,X,H,_e.convert(We),_e.convert(ke),ve)}finally{let Fe=w!==null?ge.get(w).__webglFramebuffer:null;$.bindFramebuffer(P.FRAMEBUFFER,Fe)}}},this.copyFramebufferToTexture=function(E,F,V=0){let X=Math.pow(2,-V),H=Math.floor(F.image.width*X),ve=Math.floor(F.image.height*X);S.setTexture2D(F,0),P.copyTexSubImage2D(P.TEXTURE_2D,V,0,0,E.x,E.y,H,ve),$.unbindTexture()},this.copyTextureToTexture=function(E,F,V,X=0){let H=F.image.width,ve=F.image.height,Ae=_e.convert(V.format),De=_e.convert(V.type);S.setTexture2D(V,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,V.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,V.unpackAlignment),F.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,X,E.x,E.y,H,ve,Ae,De,F.image.data):F.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,X,E.x,E.y,F.mipmaps[0].width,F.mipmaps[0].height,Ae,F.mipmaps[0].data):P.texSubImage2D(P.TEXTURE_2D,X,E.x,E.y,Ae,De,F.image),X===0&&V.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),$.unbindTexture()},this.copyTextureToTexture3D=function(E,F,V,X,H=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let ve=E.max.x-E.min.x+1,Ae=E.max.y-E.min.y+1,De=E.max.z-E.min.z+1,Fe=_e.convert(X.format),We=_e.convert(X.type),ke;if(X.isData3DTexture)S.setTexture3D(X,0),ke=P.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)S.setTexture2DArray(X,0),ke=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,X.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,X.unpackAlignment);let He=P.getParameter(P.UNPACK_ROW_LENGTH),at=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Lt=P.getParameter(P.UNPACK_SKIP_PIXELS),pt=P.getParameter(P.UNPACK_SKIP_ROWS),hn=P.getParameter(P.UNPACK_SKIP_IMAGES),tt=V.isCompressedTexture?V.mipmaps[H]:V.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,tt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,tt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,E.min.x),P.pixelStorei(P.UNPACK_SKIP_ROWS,E.min.y),P.pixelStorei(P.UNPACK_SKIP_IMAGES,E.min.z),V.isDataTexture||V.isData3DTexture?P.texSubImage3D(ke,H,F.x,F.y,F.z,ve,Ae,De,Fe,We,tt.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),P.compressedTexSubImage3D(ke,H,F.x,F.y,F.z,ve,Ae,De,Fe,tt.data)):P.texSubImage3D(ke,H,F.x,F.y,F.z,ve,Ae,De,Fe,We,tt),P.pixelStorei(P.UNPACK_ROW_LENGTH,He),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,at),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Lt),P.pixelStorei(P.UNPACK_SKIP_ROWS,pt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,hn),H===0&&X.generateMipmaps&&P.generateMipmap(ke),$.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?S.setTextureCube(E,0):E.isData3DTexture?S.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?S.setTexture2DArray(E,0):S.setTexture2D(E,0),$.unbindTexture()},this.resetState=function(){D=0,b=0,w=null,$.reset(),R.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Sa?"display-p3":"srgb",t.unpackColorSpace=je.workingColorSpace===Ir?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===yt?ei:Pc}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ei?yt:xn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Qo=class extends cs{};Qo.prototype.isWebGL1Renderer=!0;var yr=class s{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Be(e),this.near=t,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Mr=class extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},ea=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=No,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=on()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=on()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=on()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},At=new L,br=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}setX(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=rn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=rn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=rn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=rn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),i=Ke(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),i=Ke(i,this.array),r=Ke(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new xt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Kt=class extends zn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},wi,Ji=new L,Ai=new L,Ri=new L,Ci=new re,$i=new re,Hc=new lt,qs=new L,Ki=new L,Zs=new L,lc=new re,So=new re,cc=new re,Mn=class extends Ft{constructor(e=new Kt){if(super(),this.isSprite=!0,this.type="Sprite",wi===void 0){wi=new vt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ea(t,5);wi.setIndex([0,1,2,0,2,3]),wi.setAttribute("position",new br(n,3,0,!1)),wi.setAttribute("uv",new br(n,2,3,!1))}this.geometry=wi,this.material=e,this.center=new re(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ai.setFromMatrixScale(this.matrixWorld),Hc.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ri.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ai.multiplyScalar(-Ri.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let a=this.center;Js(qs.set(-.5,-.5,0),Ri,a,Ai,i,r),Js(Ki.set(.5,-.5,0),Ri,a,Ai,i,r),Js(Zs.set(.5,.5,0),Ri,a,Ai,i,r),lc.set(0,0),So.set(1,0),cc.set(1,1);let o=e.ray.intersectTriangle(qs,Ki,Zs,!1,Ji);if(o===null&&(Js(Ki.set(-.5,.5,0),Ri,a,Ai,i,r),So.set(0,1),o=e.ray.intersectTriangle(qs,Zs,Ki,!1,Ji),o===null))return;let l=e.ray.origin.distanceTo(Ji);l<e.near||l>e.far||t.push({distance:l,point:Ji.clone(),uv:Kn.getInterpolation(Ji,qs,Ki,Zs,lc,So,cc,new re),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Js(s,e,t,n,i,r){Ci.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?($i.x=r*Ci.x-i*Ci.y,$i.y=i*Ci.x+r*Ci.y):$i.copy(Ci),s.copy(e),s.x+=$i.x,s.y+=$i.y,s.applyMatrix4(Hc)}var ln=class extends zn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},hc=new L,uc=new L,dc=new lt,Eo=new ni,$s=new Bi,bn=class extends Ft{constructor(e=new vt,t=new ln){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)hc.fromBufferAttribute(t,i-1),uc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=hc.distanceTo(uc);e.setAttribute("lineDistance",new wt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$s.copy(n.boundingSphere),$s.applyMatrix4(i),$s.radius+=r,e.ray.intersectsSphere($s)===!1)return;dc.copy(i).invert(),Eo.copy(e.ray).applyMatrix4(dc);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new L,h=new L,d=new L,u=new L,f=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){let p=Math.max(0,a.start),M=Math.min(g.count,a.start+a.count);for(let x=p,A=M-1;x<A;x+=f){let D=g.getX(x),b=g.getX(x+1);if(c.fromBufferAttribute(m,D),h.fromBufferAttribute(m,b),Eo.distanceSqToSegment(c,h,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);let z=e.ray.origin.distanceTo(u);z<e.near||z>e.far||t.push({distance:z,point:d.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,a.start),M=Math.min(m.count,a.start+a.count);for(let x=p,A=M-1;x<A;x+=f){if(c.fromBufferAttribute(m,x),h.fromBufferAttribute(m,x+1),Eo.distanceSqToSegment(c,h,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);let b=e.ray.origin.distanceTo(u);b<e.near||b>e.far||t.push({distance:b,point:d.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}},fc=new L,pc=new L,Sr=class extends bn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)fc.fromBufferAttribute(t,i),pc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+fc.distanceTo(pc);e.setAttribute("lineDistance",new wt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Sn=class extends Vt{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Gt=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);let h=n[i],u=n[i+1]-h,f=(a-h)/u;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),o=this.getPoint(r),l=t||(a.isVector2?new re:new L);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new L,i=[],r=[],a=[],o=new L,l=new lt;for(let f=0;f<=e;f++){let g=f/e;i[f]=this.getTangentAt(g,new L)}r[0]=new L,a[0]=new L;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(gt(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(gt(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},hs=class extends Gt{constructor(e=0,t=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){let n=t||new re,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ta=class extends hs{constructor(e,t,n,i,r,a){super(e,t,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function wa(){let s=0,e=0,t=0,n=0;function i(r,a,o,l){s=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,i(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return s+e*r+t*a+n*o}}}var Ks=new L,To=new wa,wo=new wa,Ao=new wa,na=class extends Gt{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new L){let n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(Ks.subVectors(i[0],i[1]).add(i[0]),c=Ks);let d=i[o%r],u=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(Ks.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Ks),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),To.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,_,m),wo.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,_,m),Ao.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(To.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),wo.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Ao.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(To.calc(l),wo.calc(l),Ao.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new L().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function mc(s,e,t,n,i){let r=(n-e)*.5,a=(i-t)*.5,o=s*s,l=s*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*s+t}function Sg(s,e){let t=1-s;return t*t*e}function Eg(s,e){return 2*(1-s)*s*e}function Tg(s,e){return s*s*e}function ns(s,e,t,n){return Sg(s,e)+Eg(s,t)+Tg(s,n)}function wg(s,e){let t=1-s;return t*t*t*e}function Ag(s,e){let t=1-s;return 3*t*t*s*e}function Rg(s,e){return 3*(1-s)*s*s*e}function Cg(s,e){return s*s*s*e}function is(s,e,t,n,i){return wg(s,e)+Ag(s,t)+Rg(s,n)+Cg(s,i)}var Er=class extends Gt{constructor(e=new re,t=new re,n=new re,i=new re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new re){let n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(is(e,i.x,r.x,a.x,o.x),is(e,i.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ia=class extends Gt{constructor(e=new L,t=new L,n=new L,i=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new L){let n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(is(e,i.x,r.x,a.x,o.x),is(e,i.y,r.y,a.y,o.y),is(e,i.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Tr=class extends Gt{constructor(e=new re,t=new re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new re){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},sa=class extends Gt{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},wr=class extends Gt{constructor(e=new re,t=new re,n=new re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new re){let n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(ns(e,i.x,r.x,a.x),ns(e,i.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ra=class extends Gt{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){let n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(ns(e,i.x,r.x,a.x),ns(e,i.y,r.y,a.y),ns(e,i.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ar=class extends Gt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new re){let n=t,i=this.points,r=(i.length-1)*e,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],d=i[a>i.length-3?i.length-1:a+2];return n.set(mc(o,l.x,c.x,h.x,d.x),mc(o,l.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new re().fromArray(i))}return this}},oa=Object.freeze({__proto__:null,ArcCurve:ta,CatmullRomCurve3:na,CubicBezierCurve:Er,CubicBezierCurve3:ia,EllipseCurve:hs,LineCurve:Tr,LineCurve3:sa,QuadraticBezierCurve:wr,QuadraticBezierCurve3:ra,SplineCurve:Ar}),aa=class extends Gt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new oa[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,r=this.curves;i<r.length;i++){let a=r[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new oa[i.type]().fromJSON(i))}return this}},Rr=class extends aa{constructor(e){super(),this.type="Path",this.currentPoint=new re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Tr(this.currentPoint.clone(),new re(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let r=new wr(this.currentPoint.clone(),new re(e,t),new re(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,a){let o=new Er(this.currentPoint.clone(),new re(e,t),new re(n,i),new re(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Ar(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,r,a),this}absarc(e,t,n,i,r,a){return this.absellipse(e,t,n,n,i,r,a),this}ellipse(e,t,n,i,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,r,a,o,l),this}absellipse(e,t,n,i,r,a,o,l){let c=new hs(e,t,n,i,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var Hi=class extends Rr{constructor(e){super(e),this.uuid=on(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new Rr().fromJSON(i))}return this}},Pg={triangulate:function(s,e,t=2){let n=e&&e.length,i=n?e[0]*t:s.length,r=Vc(s,0,i,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,d,u,f;if(n&&(r=Ug(s,e,r,t)),s.length>80*t){o=c=s[0],l=h=s[1];for(let g=t;g<i;g+=t)d=s[g],u=s[g+1],d<o&&(o=d),u<l&&(l=u),d>c&&(c=d),u>h&&(h=u);f=Math.max(c-o,h-l),f=f!==0?32767/f:0}return us(r,a,t,o,l,f,0),a}};function Vc(s,e,t,n,i){let r,a;if(i===Yg(s,e,t,n)>0)for(r=e;r<t;r+=n)a=gc(r,s[r],s[r+1],a);else for(r=t-n;r>=e;r-=n)a=gc(r,s[r],s[r+1],a);return a&&Nr(a,a.next)&&(fs(a),a=a.next),a}function si(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Nr(t,t.next)||nt(t.prev,t,t.next)===0)){if(fs(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function us(s,e,t,n,i,r,a){if(!s)return;!a&&r&&kg(s,n,i,r);let o=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?Ig(s,n,i,r):Lg(s)){e.push(l.i/t|0),e.push(s.i/t|0),e.push(c.i/t|0),fs(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=Dg(si(s),e,t),us(s,e,t,n,i,r,2)):a===2&&Ng(s,e,t,n,i,r):us(si(s),e,t,n,i,r,1);break}}}function Lg(s){let e=s.prev,t=s,n=s.next;if(nt(e,t,n)>=0)return!1;let i=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=i<r?i<a?i:a:r<a?r:a,d=o<l?o<c?o:c:l<c?l:c,u=i>r?i>a?i:a:r>a?r:a,f=o>l?o>c?o:c:l>c?l:c,g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&Ii(i,o,r,l,a,c,g.x,g.y)&&nt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Ig(s,e,t,n){let i=s.prev,r=s,a=s.next;if(nt(i,r,a)>=0)return!1;let o=i.x,l=r.x,c=a.x,h=i.y,d=r.y,u=a.y,f=o<l?o<c?o:c:l<c?l:c,g=h<d?h<u?h:u:d<u?d:u,_=o>l?o>c?o:c:l>c?l:c,m=h>d?h>u?h:u:d>u?d:u,p=la(f,g,e,t,n),M=la(_,m,e,t,n),x=s.prevZ,A=s.nextZ;for(;x&&x.z>=p&&A&&A.z<=M;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==a&&Ii(o,h,l,d,c,u,x.x,x.y)&&nt(x.prev,x,x.next)>=0||(x=x.prevZ,A.x>=f&&A.x<=_&&A.y>=g&&A.y<=m&&A!==i&&A!==a&&Ii(o,h,l,d,c,u,A.x,A.y)&&nt(A.prev,A,A.next)>=0))return!1;A=A.nextZ}for(;x&&x.z>=p;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==a&&Ii(o,h,l,d,c,u,x.x,x.y)&&nt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;A&&A.z<=M;){if(A.x>=f&&A.x<=_&&A.y>=g&&A.y<=m&&A!==i&&A!==a&&Ii(o,h,l,d,c,u,A.x,A.y)&&nt(A.prev,A,A.next)>=0)return!1;A=A.nextZ}return!0}function Dg(s,e,t){let n=s;do{let i=n.prev,r=n.next.next;!Nr(i,r)&&Gc(i,n,n.next,r)&&ds(i,r)&&ds(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),fs(n),fs(n.next),n=s=r),n=n.next}while(n!==s);return si(n)}function Ng(s,e,t,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Gg(a,o)){let l=Wc(a,o);a=si(a,a.next),l=si(l,l.next),us(a,e,t,n,i,r,0),us(l,e,t,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function Ug(s,e,t,n){let i=[],r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:s.length,c=Vc(s,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(Vg(c));for(i.sort(Og),r=0;r<i.length;r++)t=Fg(i[r],t);return t}function Og(s,e){return s.x-e.x}function Fg(s,e){let t=Bg(s,e);if(!t)return e;let n=Wc(t,s);return si(n,n.next),si(t,t.next)}function Bg(s,e){let t=e,n=-1/0,i,r=s.x,a=s.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){let u=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=r&&u>n&&(n=u,i=t.x<t.next.x?t:t.next,u===r))return i}t=t.next}while(t!==e);if(!i)return null;let o=i,l=i.x,c=i.y,h=1/0,d;t=i;do r>=t.x&&t.x>=l&&r!==t.x&&Ii(a<c?r:n,a,l,c,a<c?n:r,a,t.x,t.y)&&(d=Math.abs(a-t.y)/(r-t.x),ds(t,s)&&(d<h||d===h&&(t.x>i.x||t.x===i.x&&zg(i,t)))&&(i=t,h=d)),t=t.next;while(t!==o);return i}function zg(s,e){return nt(s.prev,s,e.prev)<0&&nt(e.next,s,s.next)<0}function kg(s,e,t,n){let i=s;do i.z===0&&(i.z=la(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Hg(i)}function Hg(s){let e,t,n,i,r,a,o,l,c=1;do{for(t=s,s=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,o--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,c*=2}while(a>1);return s}function la(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function Vg(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Ii(s,e,t,n,i,r,a,o){return(i-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(i-a)*(n-o)}function Gg(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!Wg(s,e)&&(ds(s,e)&&ds(e,s)&&Xg(s,e)&&(nt(s.prev,s,e.prev)||nt(s,e.prev,e))||Nr(s,e)&&nt(s.prev,s,s.next)>0&&nt(e.prev,e,e.next)>0)}function nt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Nr(s,e){return s.x===e.x&&s.y===e.y}function Gc(s,e,t,n){let i=Qs(nt(s,e,t)),r=Qs(nt(s,e,n)),a=Qs(nt(t,n,s)),o=Qs(nt(t,n,e));return!!(i!==r&&a!==o||i===0&&js(s,t,e)||r===0&&js(s,n,e)||a===0&&js(t,s,n)||o===0&&js(t,e,n))}function js(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Qs(s){return s>0?1:s<0?-1:0}function Wg(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Gc(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function ds(s,e){return nt(s.prev,s,s.next)<0?nt(s,e,s.next)>=0&&nt(s,s.prev,e)>=0:nt(s,e,s.prev)<0||nt(s,s.next,e)<0}function Xg(s,e){let t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Wc(s,e){let t=new ca(s.i,s.x,s.y),n=new ca(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function gc(s,e,t,n){let i=new ca(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function fs(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function ca(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Yg(s,e,t,n){let i=0;for(let r=e,a=t-n;r<t;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}var On=class s{static area(e){let t=e.length,n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let n=[],i=[],r=[];_c(e),xc(n,e);let a=e.length;t.forEach(_c);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,xc(n,t[l]);let o=Pg.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function _c(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function xc(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var Cr=class s extends vt{constructor(e=new Hi([new re(.5,.5),new re(-.5,.5),new re(-.5,-.5),new re(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new wt(i,3)),this.setAttribute("uv",new wt(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:qg,x,A=!1,D,b,w,z;p&&(x=p.getSpacedPoints(h),A=!0,u=!1,D=p.computeFrenetFrames(h,!1),b=new L,w=new L,z=new L),u||(m=0,f=0,g=0,_=0);let v=o.extractPoints(c),T=v.shape,N=v.holes;if(!On.isClockWise(T)){T=T.reverse();for(let P=0,ce=N.length;P<ce;P++){let K=N[P];On.isClockWise(K)&&(N[P]=K.reverse())}}let k=On.triangulateShape(T,N),C=T;for(let P=0,ce=N.length;P<ce;P++){let K=N[P];T=T.concat(K)}function U(P,ce,K){return ce||console.error("THREE.ExtrudeGeometry: vec does not exist"),P.clone().addScaledVector(ce,K)}let B=T.length,Z=k.length;function q(P,ce,K){let oe,$,Te,ge=P.x-ce.x,S=P.y-ce.y,y=K.x-P.x,O=K.y-P.y,ie=ge*ge+S*S,te=ge*O-S*y;if(Math.abs(te)>Number.EPSILON){let ee=Math.sqrt(ie),Se=Math.sqrt(y*y+O*O),de=ce.x-S/ee,xe=ce.y+ge/ee,Ce=K.x-O/Se,ze=K.y+y/Se,ne=((Ce-de)*O-(ze-xe)*y)/(ge*O-S*y);oe=de+ge*ne-P.x,$=xe+S*ne-P.y;let Je=oe*oe+$*$;if(Je<=2)return new re(oe,$);Te=Math.sqrt(Je/2)}else{let ee=!1;ge>Number.EPSILON?y>Number.EPSILON&&(ee=!0):ge<-Number.EPSILON?y<-Number.EPSILON&&(ee=!0):Math.sign(S)===Math.sign(O)&&(ee=!0),ee?(oe=-S,$=ge,Te=Math.sqrt(ie)):(oe=ge,$=S,Te=Math.sqrt(ie/2))}return new re(oe/Te,$/Te)}let G=[];for(let P=0,ce=C.length,K=ce-1,oe=P+1;P<ce;P++,K++,oe++)K===ce&&(K=0),oe===ce&&(oe=0),G[P]=q(C[P],C[K],C[oe]);let J=[],j,he=G.concat();for(let P=0,ce=N.length;P<ce;P++){let K=N[P];j=[];for(let oe=0,$=K.length,Te=$-1,ge=oe+1;oe<$;oe++,Te++,ge++)Te===$&&(Te=0),ge===$&&(ge=0),j[oe]=q(K[oe],K[Te],K[ge]);J.push(j),he=he.concat(j)}for(let P=0;P<m;P++){let ce=P/m,K=f*Math.cos(ce*Math.PI/2),oe=g*Math.sin(ce*Math.PI/2)+_;for(let $=0,Te=C.length;$<Te;$++){let ge=U(C[$],G[$],oe);ye(ge.x,ge.y,-K)}for(let $=0,Te=N.length;$<Te;$++){let ge=N[$];j=J[$];for(let S=0,y=ge.length;S<y;S++){let O=U(ge[S],j[S],oe);ye(O.x,O.y,-K)}}}let W=g+_;for(let P=0;P<B;P++){let ce=u?U(T[P],he[P],W):T[P];A?(w.copy(D.normals[0]).multiplyScalar(ce.x),b.copy(D.binormals[0]).multiplyScalar(ce.y),z.copy(x[0]).add(w).add(b),ye(z.x,z.y,z.z)):ye(ce.x,ce.y,0)}for(let P=1;P<=h;P++)for(let ce=0;ce<B;ce++){let K=u?U(T[ce],he[ce],W):T[ce];A?(w.copy(D.normals[P]).multiplyScalar(K.x),b.copy(D.binormals[P]).multiplyScalar(K.y),z.copy(x[P]).add(w).add(b),ye(z.x,z.y,z.z)):ye(K.x,K.y,d/h*P)}for(let P=m-1;P>=0;P--){let ce=P/m,K=f*Math.cos(ce*Math.PI/2),oe=g*Math.sin(ce*Math.PI/2)+_;for(let $=0,Te=C.length;$<Te;$++){let ge=U(C[$],G[$],oe);ye(ge.x,ge.y,d+K)}for(let $=0,Te=N.length;$<Te;$++){let ge=N[$];j=J[$];for(let S=0,y=ge.length;S<y;S++){let O=U(ge[S],j[S],oe);A?ye(O.x,O.y+x[h-1].y,x[h-1].x+K):ye(O.x,O.y,d+K)}}}Q(),fe();function Q(){let P=i.length/3;if(u){let ce=0,K=B*ce;for(let oe=0;oe<Z;oe++){let $=k[oe];Le($[2]+K,$[1]+K,$[0]+K)}ce=h+m*2,K=B*ce;for(let oe=0;oe<Z;oe++){let $=k[oe];Le($[0]+K,$[1]+K,$[2]+K)}}else{for(let ce=0;ce<Z;ce++){let K=k[ce];Le(K[2],K[1],K[0])}for(let ce=0;ce<Z;ce++){let K=k[ce];Le(K[0]+B*h,K[1]+B*h,K[2]+B*h)}}n.addGroup(P,i.length/3-P,0)}function fe(){let P=i.length/3,ce=0;Me(C,ce),ce+=C.length;for(let K=0,oe=N.length;K<oe;K++){let $=N[K];Me($,ce),ce+=$.length}n.addGroup(P,i.length/3-P,1)}function Me(P,ce){let K=P.length;for(;--K>=0;){let oe=K,$=K-1;$<0&&($=P.length-1);for(let Te=0,ge=h+m*2;Te<ge;Te++){let S=B*Te,y=B*(Te+1),O=ce+oe+S,ie=ce+$+S,te=ce+$+y,ee=ce+oe+y;Ue(O,ie,te,ee)}}}function ye(P,ce,K){l.push(P),l.push(ce),l.push(K)}function Le(P,ce,K){Ee(P),Ee(ce),Ee(K);let oe=i.length/3,$=M.generateTopUV(n,i,oe-3,oe-2,oe-1);Ne($[0]),Ne($[1]),Ne($[2])}function Ue(P,ce,K,oe){Ee(P),Ee(ce),Ee(oe),Ee(ce),Ee(K),Ee(oe);let $=i.length/3,Te=M.generateSideWallUV(n,i,$-6,$-3,$-2,$-1);Ne(Te[0]),Ne(Te[1]),Ne(Te[3]),Ne(Te[1]),Ne(Te[2]),Ne(Te[3])}function Ee(P){i.push(l[P*3+0]),i.push(l[P*3+1]),i.push(l[P*3+2])}function Ne(P){r.push(P.x),r.push(P.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Zg(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new oa[i.type]().fromJSON(i)),new s(n,e.options)}},qg={generateTopUV:function(s,e,t,n,i){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new re(r,a),new re(o,l),new re(c,h)]},generateSideWallUV:function(s,e,t,n,i,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],d=e[n*3+2],u=e[i*3],f=e[i*3+1],g=e[i*3+2],_=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new re(a,1-l),new re(c,1-d),new re(u,1-g),new re(_,1-p)]:[new re(o,1-l),new re(h,1-d),new re(f,1-g),new re(m,1-p)]}};function Zg(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Pr=class s extends vt{constructor(e=new Hi([new re(0,.5),new re(-.5,-.5),new re(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new wt(i,3)),this.setAttribute("normal",new wt(r,3)),this.setAttribute("uv",new wt(a,2));function c(h){let d=i.length/3,u=h.extractPoints(t),f=u.shape,g=u.holes;On.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){let M=g[m];On.isClockWise(M)===!0&&(g[m]=M.reverse())}let _=On.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){let M=g[m];f=f.concat(M)}for(let m=0,p=f.length;m<p;m++){let M=f[m];i.push(M.x,M.y,0),r.push(0,0,1),a.push(M.x,M.y)}for(let m=0,p=_.length;m<p;m++){let M=_[m],x=M[0]+d,A=M[1]+d,D=M[2]+d;n.push(x,A,D),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Jg(t,e)}static fromJSON(e,t){let n=[];for(let i=0,r=e.shapes.length;i<r;i++){let a=t[e.shapes[i]];n.push(a)}return new s(n,e.curveSegments)}};function Jg(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){let i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}function er(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function $g(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var Vi=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ha=class extends Vi{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:vl,endingEnd:vl}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case yl:r=e,o=2*t-n;break;case Ml:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case yl:a=e,l=2*n-t;break;case Ml:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-u*m+2*u*_-u*g,M=(1+u)*m+(-1.5-2*u)*_+(-.5+u)*g+1,x=(-1-f)*m+(1.5+f)*_+.5*g,A=f*m-f*_;for(let D=0;D!==o;++D)r[D]=p*a[h+D]+M*a[c+D]+x*a[l+D]+A*a[d+D];return r}},ua=class extends Vi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},da=class extends Vi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},jt=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=er(t,this.TimeBufferType),this.values=er(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:er(e.times,Array),values:er(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new da(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ua(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ha(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case nr:t=this.InterpolantFactoryMethodDiscrete;break;case ir:t=this.InterpolantFactoryMethodLinear;break;case Qr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return nr;case this.InterpolantFactoryMethodLinear:return ir;case this.InterpolantFactoryMethodSmooth:return Qr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&$g(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Qr,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{let d=o*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){let _=t[d+g];if(_!==t[u+g]||_!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};jt.prototype.TimeBufferType=Float32Array;jt.prototype.ValueBufferType=Float32Array;jt.prototype.DefaultInterpolation=ir;var ri=class extends jt{};ri.prototype.ValueTypeName="bool";ri.prototype.ValueBufferType=Array;ri.prototype.DefaultInterpolation=nr;ri.prototype.InterpolantFactoryMethodLinear=void 0;ri.prototype.InterpolantFactoryMethodSmooth=void 0;var fa=class extends jt{};fa.prototype.ValueTypeName="color";var pa=class extends jt{};pa.prototype.ValueTypeName="number";var ma=class extends Vi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t),c=e*o;for(let h=c+o;c!==h;c+=4)$t.slerpFlat(r,0,a,c-o,a,c,l);return r}},ps=class extends jt{InterpolantFactoryMethodLinear(e){return new ma(this.times,this.values,this.getValueSize(),e)}};ps.prototype.ValueTypeName="quaternion";ps.prototype.DefaultInterpolation=ir;ps.prototype.InterpolantFactoryMethodSmooth=void 0;var oi=class extends jt{};oi.prototype.ValueTypeName="string";oi.prototype.ValueBufferType=Array;oi.prototype.DefaultInterpolation=nr;oi.prototype.InterpolantFactoryMethodLinear=void 0;oi.prototype.InterpolantFactoryMethodSmooth=void 0;var ga=class extends jt{};ga.prototype.ValueTypeName="vector";var _a=class{constructor(e,t,n){let i=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},Kg=new _a,xa=class{constructor(e){this.manager=e!==void 0?e:Kg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};xa.DEFAULT_MATERIAL_NAME="__DEFAULT";var Aa="\\[\\]\\.:\\/",jg=new RegExp("["+Aa+"]","g"),Ra="[^"+Aa+"]",Qg="[^"+Aa.replace("\\.","")+"]",e0=/((?:WC+[\/:])*)/.source.replace("WC",Ra),t0=/(WCOD+)?/.source.replace("WCOD",Qg),n0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ra),i0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ra),s0=new RegExp("^"+e0+t0+n0+i0+"$"),r0=["material","materials","bones","map"],va=class{constructor(e,t,n){let i=n||et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},et=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(jg,"")}static parseTrackName(e){let t=s0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);r0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[i];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};et.Composite=va;et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};et.prototype.GetterByBindingType=[et.prototype._getValue_direct,et.prototype._getValue_array,et.prototype._getValue_arrayElement,et.prototype._getValue_toArray];et.prototype.SetterByBindingTypeAndVersioning=[[et.prototype._setValue_direct,et.prototype._setValue_direct_setNeedsUpdate,et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[et.prototype._setValue_array,et.prototype._setValue_array_setNeedsUpdate,et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[et.prototype._setValue_arrayElement,et.prototype._setValue_arrayElement_setNeedsUpdate,et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[et.prototype._setValue_fromArray,et.prototype._setValue_fromArray_setNeedsUpdate,et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var x0=new Float32Array(1);var ms=class{constructor(e,t,n=0,i=1/0){this.ray=new ni(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new as,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return ya(e,this,n,t),n.sort(vc),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)ya(e[i],this,n,t);return n.sort(vc),n}};function vc(s,e){return s.distance-e.distance}function ya(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){let i=s.children;for(let r=0,a=i.length;r<a;r++)ya(i[r],e,t,!0)}}var gs=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(gt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ma}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ma);var Yc={type:"change"},Ca={type:"start"},qc={type:"end"},Ur=new ni,Zc=new Nt,o0=Math.cos(70*_s.DEG2RAD),Or=class extends an{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Qt.ROTATE,MIDDLE:Qt.DOLLY,RIGHT:Qt.PAN},this.touches={ONE:ai.ROTATE,TWO:ai.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(R){R.addEventListener("keydown",Ce),this._domElementKeyEvents=R},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ce),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Yc),n.update(),r=i.NONE},this.update=function(){let R=new L,ae=new $t().setFromUnitVectors(e.up,new L(0,1,0)),we=ae.clone().invert(),be=new L,se=new $t,I=new L,le=2*Math.PI;return function(Ie=null){let Pe=n.object.position;R.copy(Pe).sub(n.target),R.applyQuaternion(ae),o.setFromVector3(R),n.autoRotate&&r===i.NONE&&Y(T(Ie)),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let qe=n.minAzimuthAngle,Ze=n.maxAzimuthAngle;isFinite(qe)&&isFinite(Ze)&&(qe<-Math.PI?qe+=le:qe>Math.PI&&(qe-=le),Ze<-Math.PI?Ze+=le:Ze>Math.PI&&(Ze-=le),qe<=Ze?o.theta=Math.max(qe,Math.min(Ze,o.theta)):o.theta=o.theta>(qe+Ze)/2?Math.max(qe,o.theta):Math.min(Ze,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&b||n.object.isOrthographicCamera?o.radius=J(o.radius):o.radius=J(o.radius*c),R.setFromSpherical(o),R.applyQuaternion(we),Pe.copy(n.target).add(R),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let st=!1;if(n.zoomToCursor&&b){let ot=null;if(n.object.isPerspectiveCamera){let $e=R.length();ot=J($e*c);let ct=$e-ot;n.object.position.addScaledVector(A,ct),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){let $e=new L(D.x,D.y,0);$e.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),st=!0;let ct=new L(D.x,D.y,0);ct.unproject(n.object),n.object.position.sub(ct).add($e),n.object.updateMatrixWorld(),ot=R.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;ot!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(ot).add(n.object.position):(Ur.origin.copy(n.object.position),Ur.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Ur.direction))<o0?e.lookAt(n.target):(Zc.setFromNormalAndCoplanarPoint(n.object.up,n.target),Ur.intersectPlane(Zc,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),st=!0);return c=1,b=!1,st||be.distanceToSquared(n.object.position)>a||8*(1-se.dot(n.object.quaternion))>a||I.distanceToSquared(n.target)>0?(n.dispatchEvent(Yc),be.copy(n.object.position),se.copy(n.object.quaternion),I.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Je),n.domElement.removeEventListener("pointerdown",S),n.domElement.removeEventListener("pointercancel",O),n.domElement.removeEventListener("wheel",ee),n.domElement.removeEventListener("pointermove",y),n.domElement.removeEventListener("pointerup",O),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Ce),n._domElementKeyEvents=null)};let n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},r=i.NONE,a=1e-6,o=new gs,l=new gs,c=1,h=new L,d=new re,u=new re,f=new re,g=new re,_=new re,m=new re,p=new re,M=new re,x=new re,A=new L,D=new re,b=!1,w=[],z={},v=!1;function T(R){return R!==null?2*Math.PI/60*n.autoRotateSpeed*R:2*Math.PI/60/60*n.autoRotateSpeed}function N(R){let ae=Math.abs(R*.01);return Math.pow(.95,n.zoomSpeed*ae)}function Y(R){l.theta-=R}function k(R){l.phi-=R}let C=function(){let R=new L;return function(we,be){R.setFromMatrixColumn(be,0),R.multiplyScalar(-we),h.add(R)}}(),U=function(){let R=new L;return function(we,be){n.screenSpacePanning===!0?R.setFromMatrixColumn(be,1):(R.setFromMatrixColumn(be,0),R.crossVectors(n.object.up,R)),R.multiplyScalar(we),h.add(R)}}(),B=function(){let R=new L;return function(we,be){let se=n.domElement;if(n.object.isPerspectiveCamera){let I=n.object.position;R.copy(I).sub(n.target);let le=R.length();le*=Math.tan(n.object.fov/2*Math.PI/180),C(2*we*le/se.clientHeight,n.object.matrix),U(2*be*le/se.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(C(we*(n.object.right-n.object.left)/n.object.zoom/se.clientWidth,n.object.matrix),U(be*(n.object.top-n.object.bottom)/n.object.zoom/se.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function Z(R){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=R:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function q(R){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=R:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function G(R,ae){if(!n.zoomToCursor)return;b=!0;let we=n.domElement.getBoundingClientRect(),be=R-we.left,se=ae-we.top,I=we.width,le=we.height;D.x=be/I*2-1,D.y=-(se/le)*2+1,A.set(D.x,D.y,1).unproject(n.object).sub(n.object.position).normalize()}function J(R){return Math.max(n.minDistance,Math.min(n.maxDistance,R))}function j(R){d.set(R.clientX,R.clientY)}function he(R){G(R.clientX,R.clientX),p.set(R.clientX,R.clientY)}function W(R){g.set(R.clientX,R.clientY)}function Q(R){u.set(R.clientX,R.clientY),f.subVectors(u,d).multiplyScalar(n.rotateSpeed);let ae=n.domElement;Y(2*Math.PI*f.x/ae.clientHeight),k(2*Math.PI*f.y/ae.clientHeight),d.copy(u),n.update()}function fe(R){M.set(R.clientX,R.clientY),x.subVectors(M,p),x.y>0?Z(N(x.y)):x.y<0&&q(N(x.y)),p.copy(M),n.update()}function Me(R){_.set(R.clientX,R.clientY),m.subVectors(_,g).multiplyScalar(n.panSpeed),B(m.x,m.y),g.copy(_),n.update()}function ye(R){G(R.clientX,R.clientY),R.deltaY<0?q(N(R.deltaY)):R.deltaY>0&&Z(N(R.deltaY)),n.update()}function Le(R){let ae=!1;switch(R.code){case n.keys.UP:R.ctrlKey||R.metaKey||R.shiftKey?k(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(0,n.keyPanSpeed),ae=!0;break;case n.keys.BOTTOM:R.ctrlKey||R.metaKey||R.shiftKey?k(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(0,-n.keyPanSpeed),ae=!0;break;case n.keys.LEFT:R.ctrlKey||R.metaKey||R.shiftKey?Y(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(n.keyPanSpeed,0),ae=!0;break;case n.keys.RIGHT:R.ctrlKey||R.metaKey||R.shiftKey?Y(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(-n.keyPanSpeed,0),ae=!0;break}ae&&(R.preventDefault(),n.update())}function Ue(R){if(w.length===1)d.set(R.pageX,R.pageY);else{let ae=_e(R),we=.5*(R.pageX+ae.x),be=.5*(R.pageY+ae.y);d.set(we,be)}}function Ee(R){if(w.length===1)g.set(R.pageX,R.pageY);else{let ae=_e(R),we=.5*(R.pageX+ae.x),be=.5*(R.pageY+ae.y);g.set(we,be)}}function Ne(R){let ae=_e(R),we=R.pageX-ae.x,be=R.pageY-ae.y,se=Math.sqrt(we*we+be*be);p.set(0,se)}function P(R){n.enableZoom&&Ne(R),n.enablePan&&Ee(R)}function ce(R){n.enableZoom&&Ne(R),n.enableRotate&&Ue(R)}function K(R){if(w.length==1)u.set(R.pageX,R.pageY);else{let we=_e(R),be=.5*(R.pageX+we.x),se=.5*(R.pageY+we.y);u.set(be,se)}f.subVectors(u,d).multiplyScalar(n.rotateSpeed);let ae=n.domElement;Y(2*Math.PI*f.x/ae.clientHeight),k(2*Math.PI*f.y/ae.clientHeight),d.copy(u)}function oe(R){if(w.length===1)_.set(R.pageX,R.pageY);else{let ae=_e(R),we=.5*(R.pageX+ae.x),be=.5*(R.pageY+ae.y);_.set(we,be)}m.subVectors(_,g).multiplyScalar(n.panSpeed),B(m.x,m.y),g.copy(_)}function $(R){let ae=_e(R),we=R.pageX-ae.x,be=R.pageY-ae.y,se=Math.sqrt(we*we+be*be);M.set(0,se),x.set(0,Math.pow(M.y/p.y,n.zoomSpeed)),Z(x.y),p.copy(M);let I=(R.pageX+ae.x)*.5,le=(R.pageY+ae.y)*.5;G(I,le)}function Te(R){n.enableZoom&&$(R),n.enablePan&&oe(R)}function ge(R){n.enableZoom&&$(R),n.enableRotate&&K(R)}function S(R){n.enabled!==!1&&(w.length===0&&(n.domElement.setPointerCapture(R.pointerId),n.domElement.addEventListener("pointermove",y),n.domElement.addEventListener("pointerup",O)),Ge(R),R.pointerType==="touch"?ze(R):ie(R))}function y(R){n.enabled!==!1&&(R.pointerType==="touch"?ne(R):te(R))}function O(R){Oe(R),w.length===0&&(n.domElement.releasePointerCapture(R.pointerId),n.domElement.removeEventListener("pointermove",y),n.domElement.removeEventListener("pointerup",O)),n.dispatchEvent(qc),r=i.NONE}function ie(R){let ae;switch(R.button){case 0:ae=n.mouseButtons.LEFT;break;case 1:ae=n.mouseButtons.MIDDLE;break;case 2:ae=n.mouseButtons.RIGHT;break;default:ae=-1}switch(ae){case Qt.DOLLY:if(n.enableZoom===!1)return;he(R),r=i.DOLLY;break;case Qt.ROTATE:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enablePan===!1)return;W(R),r=i.PAN}else{if(n.enableRotate===!1)return;j(R),r=i.ROTATE}break;case Qt.PAN:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enableRotate===!1)return;j(R),r=i.ROTATE}else{if(n.enablePan===!1)return;W(R),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Ca)}function te(R){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;Q(R);break;case i.DOLLY:if(n.enableZoom===!1)return;fe(R);break;case i.PAN:if(n.enablePan===!1)return;Me(R);break}}function ee(R){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(R.preventDefault(),n.dispatchEvent(Ca),ye(Se(R)),n.dispatchEvent(qc))}function Se(R){let ae=R.deltaMode,we={clientX:R.clientX,clientY:R.clientY,deltaY:R.deltaY};switch(ae){case 1:we.deltaY*=16;break;case 2:we.deltaY*=100;break}return R.ctrlKey&&!v&&(we.deltaY*=10),we}function de(R){R.key==="Control"&&(v=!0,document.addEventListener("keyup",xe,{passive:!0,capture:!0}))}function xe(R){R.key==="Control"&&(v=!1,document.removeEventListener("keyup",xe,{passive:!0,capture:!0}))}function Ce(R){n.enabled===!1||n.enablePan===!1||Le(R)}function ze(R){switch(Re(R),w.length){case 1:switch(n.touches.ONE){case ai.ROTATE:if(n.enableRotate===!1)return;Ue(R),r=i.TOUCH_ROTATE;break;case ai.PAN:if(n.enablePan===!1)return;Ee(R),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case ai.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;P(R),r=i.TOUCH_DOLLY_PAN;break;case ai.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ce(R),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Ca)}function ne(R){switch(Re(R),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;K(R),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;oe(R),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Te(R),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ge(R),n.update();break;default:r=i.NONE}}function Je(R){n.enabled!==!1&&R.preventDefault()}function Ge(R){w.push(R.pointerId)}function Oe(R){delete z[R.pointerId];for(let ae=0;ae<w.length;ae++)if(w[ae]==R.pointerId){w.splice(ae,1);return}}function Re(R){let ae=z[R.pointerId];ae===void 0&&(ae=new re,z[R.pointerId]=ae),ae.set(R.pageX,R.pageY)}function _e(R){let ae=R.pointerId===w[0]?w[1]:w[0];return z[ae]}n.domElement.addEventListener("contextmenu",Je),n.domElement.addEventListener("pointerdown",S),n.domElement.addEventListener("pointercancel",O),n.domElement.addEventListener("wheel",ee,{passive:!1}),document.addEventListener("keydown",de,{passive:!0,capture:!0}),this.update()}};var Na=require("obsidian");var Pa=16250092,La=15196114,it=9,Tn=5.5,xs=1.6,en=.06,En=.1,a0=1.42,Fr=xs+.15,l0=s=>.3+.7*Math.min(1,s/it),Br=s=>xs+l0(s)*(Tn*a0-xs),Jc=2*Tn+5,$c=1.15,Kc=1.6,jc=.5,vs="#5d8a3e",li="#b07a3c",Ia={light:{bg:Pa,fog:La,linkMul:1},dark:{bg:658450,fog:1119262,linkMul:2}},ys=[{tint:"#5d7c8c",ring:"#3c5663"},{tint:"#b09161",ring:"#7d6334"},{tint:"#bb8079",ring:"#8a534b"},{tint:"#7d9b78",ring:"#516e4d"},{tint:"#8f87a0",ring:"#5f566f"},{tint:"#7e9aa6",ring:"#4d6b77"},{tint:"#c0936f",ring:"#8a5f3c"},{tint:"#9a9466",ring:"#65603a"}],ci={leaf:{tint:"#aeb9b6",ring:"#7c8a86",r:.21},trunk:{tint:"#8f87a0",ring:"#5f566f",r:.3},root:{tint:"#a98f5e",ring:"#6f5a32",r:.54},flower:{tint:"#cf8aa3",ring:"#9c5572",r:.4,glow:"#ff9ec2"},apple:{tint:"#d77f72",ring:"#a14b3f",r:.42,glow:"#ff8a76"}};function tn(s,e){return s*(Math.PI*2/Math.max(1,e))}function cn(s,e,t){return new L(e*Math.cos(s),t,-e*Math.sin(s))}function Qc(s,e){if(!s.length)return;let t=s.map(u=>u.time),n=Math.min(...t),i=Math.max(...t),r=i-n||1;for(let u of s)u.tNorm=(u.time-n)/r;let a=2.39996323,o=.52,l=(u,f,g)=>{let _=u.slice();for(let p=1;p<_.length;p++)_[p]<_[p-1]+o&&(_[p]=_[p-1]+o);let m=_[_.length-1]-f;if(_[_.length-1]>g&&m>1e-6){let p=(g-f)/m;for(let M=0;M<_.length;M++)_[M]=f+(_[M]-f)*p}return _},c=s.filter(u=>u.treeType==="root"),h=new Map;for(let u of s){if(u.treeType==="root"){if(c.length>1){let g=c.indexOf(u);u.pos=new L(Math.cos(g*a)*.15,-1.2,Math.sin(g*a)*.15)}else u.pos=new L(0,-1.2,0);continue}let f=u.treeType==="trunk"||u.field<0?"_axis":u.field;h.has(f)||h.set(f,[]),h.get(f).push(u)}let d=(h.get("_axis")||[]).sort((u,f)=>u.time-f.time||(u.id<f.id?-1:1));{let u=l(d.map(f=>.6+f.tNorm*(it-.8)),.6,it-.4);d.forEach((f,g)=>{f.pos=new L(Math.cos(g*a)*.22,u[g],Math.sin(g*a)*.22)})}for(let[u,f]of h){if(u==="_axis")continue;let g=u,_=tn(g,e)+en+En,m=tn(g+1,e)-en-En,p=m>_?m-_:Math.PI*2/e*.8;f.sort((x,A)=>x.time-A.time||(x.id<A.id?-1:1));let M=l(f.map(x=>.7+x.tNorm*(it-1.2)),.7,it-.5);f.forEach((x,A)=>{let D=M[A],b=.3+.7*(D/it),w=_+p*(.08+.84*(A*.6180339887%1)),z=xs+b*(Tn-xs)*(.4+.5*((A*.7548776662+.33)%1));x.pos=cn(w,z,D)})}}function eh(s,e,t){let n=s.filter(f=>f.treeType==="leaf"&&f.field>=0);if(n.length<3||n.length>500||e>=20)return;let i=new Map(n.map((f,g)=>[f.id,g])),r=n.map(()=>[]);for(let f of t){let g=i.get(f.from),_=i.get(f.to);g==null||_==null||g===_||n[g].field===n[_].field&&(r[g].push(_),r[_].push(g))}let a=.82,o=.013,l=1,c=.4,h=130,d=6.2831853,u=n.map(f=>({a0:tn(f.field,e)+en+En,a1:tn(f.field+1,e)-en-En,hlo:Math.max(.7,f.pos.y-2.2),hhi:Math.min(it*1.16,f.pos.y+2.2)}));for(let f=0;f<h;f++){let g=n.map(()=>[0,0,0]);for(let _=0;_<n.length;_++){let m=n[_];for(let p of r[_]){let M=n[p];g[_][0]+=(M.pos.x-m.pos.x)*o,g[_][1]+=(M.pos.y-m.pos.y)*o*.4,g[_][2]+=(M.pos.z-m.pos.z)*o}}for(let _=0;_<n.length;_++){let m=n[_];for(let p=_+1;p<n.length;p++){let M=n[p],x=m.pos.x-M.pos.x,A=m.pos.y-M.pos.y,D=m.pos.z-M.pos.z,b=Math.sqrt(x*x+A*A+D*D)||.001;if(b<a){let w=l*(a-b)/b;g[_][0]+=x*w,g[_][1]+=A*w*.4,g[_][2]+=D*w,g[p][0]-=x*w,g[p][1]-=A*w*.4,g[p][2]-=D*w}}}for(let _=0;_<n.length;_++){let m=n[_];if(m._pinned)continue;let p=g[_][0],M=g[_][1],x=g[_][2],A=Math.sqrt(p*p+M*M+x*x);if(A>c){let C=c/A;p*=C,M*=C,x*=C}let D=m.pos.x+p,b=m.pos.y+M,w=m.pos.z+x;b=Math.min(u[_].hhi,Math.max(u[_].hlo,b));let z=Math.atan2(-w,D);z<0&&(z+=d);let v=Math.hypot(D,w),T=u[_].a0,N=u[_].a1;T<0&&(T+=d),N<0&&(N+=d),N>=T&&(z<T?z=T:z>N&&(z=N));let Y=Br(b),k=Fr;v<k?v=k:v>Y&&(v=Y),m.pos.set(v*Math.cos(z),b,-v*Math.sin(z))}}}function th(s,e,t,n,i){if(s<0)return!1;let r=Math.PI*2,a=.001;if(n<.7-a||n>it*1.16+a)return!1;let o=Math.hypot(t,i);if(o<Fr-a||o>Br(n)+a)return!1;let l=tn(s,e)+en+En,c=tn(s+1,e)-en-En;if(l<0&&(l+=r),c<0&&(c+=r),c<l)return!0;let h=Math.atan2(-i,t);return h<0&&(h+=r),h>=l-a&&h<=c+a}function ut(s,e){let t=parseInt(s.slice(1),16);return`rgba(${t>>16&255},${t>>8&255},${t&255},${e})`}function Da(s,e){let t=parseInt(s.slice(1),16),n=t>>16&255,i=t>>8&255,r=t&255;return n=Math.round(n+(255-n)*e),i=Math.round(i+(255-i)*e),r=Math.round(r+(255-r)*e),n<<16|i<<8|r}function zr(s,e){return"#"+Da(s,e).toString(16).padStart(6,"0")}var c0=["root","trunk","leaf","flower","apple"];function h0(s){let e=String(s??"").toLowerCase().trim();return c0.includes(e)?e:"leaf"}function u0(s,e){if(s instanceof Date)return s.getTime()/864e5;if(typeof s=="number")return s;if(typeof s=="string"&&s.trim()){let t=Date.parse(s);if(!isNaN(t))return t/864e5;let n=parseFloat(s);if(!isNaN(n))return n}return e}function d0(s){let e=s;if(e.startsWith("---")){let t=e.indexOf(`
---`,3);t!==-1&&(e=e.slice(e.indexOf(`
`,t+1)+1))}for(let t of e.split(`
`)){let n=t.trim();if(!n||n.startsWith("#")||n.startsWith("---")||n.startsWith("<!--"))continue;let i=n.replace(/[*_`>#\[\]]/g,"").trim();if(i)return i.length>160?i.slice(0,157)+"\u2026":i}return""}function f0(s){if(!Array.isArray(s))return;let e=[];for(let t of s)if(t&&typeof t=="object"){let n=t,i=String(n.c??n.chair??"").trim(),r=String(n.t??n.take??"").trim();i&&e.push({c:i,t:r})}return e.length?e:void 0}function p0(s){let e=s.split(`
`),t=e.findIndex(i=>/^#{1,6}\s+stakeholder views\b/i.test(i.trim()));if(t<0)return;let n=[];for(t=t+1;t<e.length;t++){let i=e[t].trim();if(!i)continue;if(/^#{1,6}\s/.test(i))break;let r=i.match(/^[-*]\s*\*\*(.+?)\*\*\s*[:：]?\s*(.*)$/);if(r){let a=r[1].replace(/[:：]\s*$/,"").trim();a&&n.push({c:a,t:r[2].trim()})}}return n.length?n:void 0}async function nh(s,e){let t=s.vault.getMarkdownFiles(),n=e.forestByFolder!==!1,i=f=>{if(!n)return"(all)";let g=f.indexOf("/");return g<0?"(root)":f.slice(0,g)},r=[],a=new Map;for(let f of t){let _=s.metadataCache.getFileCache(f)?.frontmatter??{};if(_.bridge_from!=null&&_.bridge_to!=null){let M=typeof _.explain=="string"?_.explain:typeof _.description=="string"?_.description:"";r.push({id:f.path,from:String(_.bridge_from).trim(),to:String(_.bridge_to).trim(),fromNote:_.bridge_from_note!=null?String(_.bridge_from_note).trim():void 0,toNote:_.bridge_to_note!=null?String(_.bridge_to_note).trim():void 0,title:typeof _.title=="string"&&_.title||f.basename,explain:M,filePath:f.path});continue}let m=_.tree_type!=null||_.field!=null||_.time!=null||_.flower!=null;if(e.onlyTreeNotes&&!m)continue;let p=i(f.path);a.has(p)||a.set(p,[]),a.get(p).push(f)}let o=[...a.values()].reduce((f,g)=>f+g.length,0);o>1500&&new Na.Notice("Eve Apple Tree: large vault ("+o+" notes). Tip: turn on 'Only show notes with tree frontmatter' in settings for a cleaner, faster tree.",8e3);let l=s.metadataCache.resolvedLinks||{},c=[],h=[];for(let[f,g]of a){let _=[],m=new Map,p=k=>(m.has(k)||(m.set(k,_.length),_.push(k)),m.get(k)),M=[],x=new Map;for(let k of g){let C=s.metadataCache.getFileCache(k),U=C?.frontmatter??{},B=h0(U.tree_type??(U.flower?"flower":void 0)),Z=B==="root"||B==="trunk",q=U.field!=null?String(U.field).trim():"",G=Z?null:q||"Unfiled",J=G?p(G):-1,j=typeof U.description=="string"?U.description:"",he=f0(U.views),W=!he&&(C?.headings??[]).some(Me=>/^stakeholder views\b/i.test(Me.heading)),Q=o>2e3;if(!j&&!Q||W){let Me="";try{Me=await s.vault.cachedRead(k)}catch{Me=""}!j&&!Q&&(j=d0(Me)),W&&(he=p0(Me))}let fe={id:k.path,title:typeof U.title=="string"&&U.title||k.basename,description:j,treeType:B,field:J,fieldName:G,time:u0(U.time,k.stat.ctime/864e5),views:he,tNorm:0,pos:null};M.push(fe),x.set(k.path,fe)}let A=[],D=new Map;for(let k of g){let C=k.path,U=x.get(C);if(U)for(let B of Object.keys(l[C]||{})){let Z=x.get(B);if(!Z||U===Z)continue;let q=U.field<0,G=Z.field<0,J;q&&G?J="spine":q||G?J="branch":U.field===Z.field?J="intra":J="rhizome",A.push({from:C,to:B,kind:J}),D.has(B)||D.set(B,[]),D.get(B).push(C)}}let b=Math.max(1,_.length);Qc(M,b);let w=e.dotPositions||{};for(let k of M){let C=w[k.id];if(!(!C||typeof C.x!="number"||typeof C.y!="number"||typeof C.z!="number")){if(k.field<0||k.treeType==="root"||k.treeType==="trunk"||!th(k.field,b,C.x,C.y,C.z)){delete w[k.id];continue}k.pos.set(C.x,C.y,C.z),k._pinned=!0}}let z=M.filter(k=>k.treeType==="leaf"&&k.field>=0).length;e.clusterLinkedDots!==!1&&eh(M,b,A);let v=[...new Set(M.flatMap(k=>(k.views??[]).map(C=>C.c).filter(Boolean)))],T=s.vault.getName(),N=f==="(root)"||f==="(all)"?T:f;e.clusterLinkedDots!==!1&&z>500&&h.push(N);let Y={id:f,topic:N,origin:{x:0,z:0},nodes:M,edges:A,fields:_,byId:x,incoming:D,cast:v};for(let k of M)k.tree=Y;c.push(Y)}h.length&&new Na.Notice(`Eve Apple Tree: clustering skipped for ${h.join(", ")} (over 500 notes) to keep Obsidian fast.`),c.sort((f,g)=>f.id<g.id?-1:f.id>g.id?1:0),c.forEach((f,g)=>{f.origin={x:(g-(c.length-1)/2)*Jc,z:0};for(let _ of f.nodes)_.pos.x+=f.origin.x,_.pos.z+=f.origin.z});let d=new Set(c.map(f=>f.id)),u=r.filter(f=>d.has(f.from)&&d.has(f.to)&&f.from!==f.to);return{trees:c,bridges:u}}var Ms="eve-apple-tree-view",m0={root:1,trunk:.8,apple:.7,flower:.65,leaf:0},Hr=class Hr extends kn.ItemView{constructor(t,n,i){super(t);this.settings=n;this.persist=i;me(this,"root");me(this,"labelLayer");me(this,"renderer");me(this,"scene");me(this,"camera");me(this,"controls");me(this,"raf",0);me(this,"ro");me(this,"w",1);me(this,"h",1);me(this,"reduced",window.matchMedia("(prefers-reduced-motion: reduce)").matches);me(this,"forest",{trees:[],bridges:[]});me(this,"allNodes",[]);me(this,"byId",new Map);me(this,"bridges",[]);me(this,"G");me(this,"texCache",{});me(this,"fadeMats",[]);me(this,"glowMats",new Map);me(this,"glowAnim",[]);me(this,"glowDimMat");me(this,"themeDark",!1);me(this,"linkMul",1);me(this,"themeBtn");me(this,"themeManual",!1);me(this,"textScale",1);me(this,"shine",1);me(this,"silIcon","round");me(this,"uiCard");me(this,"pill");me(this,"noteCard");me(this,"sectorsOn",!0);me(this,"fieldLabelsOn",!0);me(this,"accentLabelsOn",!0);me(this,"bridgesOn",!0);me(this,"fieldMode","flat");me(this,"lodT",0);me(this,"lensChair",null);me(this,"lensCast",[]);me(this,"viewDots",[]);me(this,"mirrorEl");me(this,"lensSelect");me(this,"pool",[]);me(this,"active",new Map);me(this,"sEls",[]);me(this,"aEls",[]);me(this,"sectorAnchor",[]);me(this,"preset");me(this,"tween",null);me(this,"selected",null);me(this,"selRing");me(this,"D0",29);me(this,"edgeIndex",new Map);me(this,"press",null);me(this,"drag",null);me(this,"resetArmed",0);me(this,"resizeRenderer",()=>{if(!this.renderer)return;let t=this.root.getBoundingClientRect();this.w=Math.max(1,t.width),this.h=Math.max(1,t.height),this.camera.aspect=this.w/this.h,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.w,this.h)});me(this,"_v",new L);me(this,"_fr",new ki);me(this,"_m",new lt);me(this,"titleOn",!1);me(this,"descOn",!1);me(this,"easeInOutCubic",t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2);me(this,"resetView",()=>this.flyTo(this.preset.pos,this.preset.target));me(this,"onPointerDown",t=>{if(t.button!==0||!this.renderer||t.target!==this.renderer.domElement)return;let n=this.pick(t);if(this.press={x:t.clientX,y:t.clientY,t:performance.now(),node:n?.node??null,bridge:n?.bridge??null},n?.node&&n.node.sprite&&this.isDraggable(n.node)){t.stopPropagation();let i=n.node.sprite,r=new L;this.camera.getWorldDirection(r);let a=new Nt().setFromNormalAndCoplanarPoint(r,i.position.clone()),o=this.rayOnPlane(t,a),l=o?i.position.clone().sub(o):new L;this.drag={node:n.node,plane:a,offset:l,prevSpin:this.controls.autoRotate,moved:!1},this.controls.autoRotate=!1,this.renderer.domElement.setPointerCapture?.(t.pointerId)}});me(this,"onPointerMove",t=>{if(!this.drag||!this.press||!this.drag.moved&&Math.hypot(t.clientX-this.press.x,t.clientY-this.press.y)<5)return;this.drag.moved=!0;let n=this.rayOnPlane(t,this.drag.plane);n&&this.moveNode(this.drag.node,this.clampToWedge(this.drag.node,n.add(this.drag.offset)))});me(this,"onPointerUp",t=>{if(t.button!==0||!this.press)return;let n=Math.hypot(t.clientX-this.press.x,t.clientY-this.press.y),i=this.press,r=this.drag;if(this.press=null,this.drag=null,r&&(this.renderer?.domElement.releasePointerCapture?.(t.pointerId),this.controls.autoRotate=r.prevSpin,r.moved)){this.persistDot(r.node);return}n>5||(i.node?this.selectNode(i.node):i.bridge?this.showBridge(i.bridge):this.deselect())});me(this,"onContextMenu",t=>{t.preventDefault()})}getViewType(){return Ms}getDisplayText(){return"Eve's Apple Tree"}getIcon(){return"sprout"}async onOpen(){this.root=this.contentEl.createDiv({cls:"eve-tree-root"}),this.labelLayer=this.root.createDiv({cls:"eve-labels"}),this.registerEvent(this.app.workspace.on("css-change",()=>{this.themeManual||this.applyTheme(this.detectObsidianDark())})),this.registerDomEvent(document,"keydown",t=>{t.key==="Escape"&&this.noteCard?.classList.contains("show")&&(t.preventDefault(),this.deselect())}),this.app.workspace.onLayoutReady(()=>{this.reload()})}async onClose(){this.dispose()}get isForest(){return this.forest.trees.length>1}async reload(){if(this.dispose(!1),this.textScale=this.settings.textSize&&this.settings.textSize>0?this.settings.textSize:1,this.shine=this.settings.glowScale!=null&&this.settings.glowScale>=0?this.settings.glowScale:1,this.silIcon=this.settings.zoomOutIcon??"round",this.forest=await nh(this.app,this.settings),this.allNodes=this.forest.trees.flatMap(t=>t.nodes),this.byId=new Map(this.allNodes.map(t=>[t.id,t])),!this.allNodes.length){this.showEmpty();return}this.initThree(),this.buildScene(),this.buildControlsPanel(),this.applyTheme(this.themeManual?this.themeDark:this.detectObsidianDark()),this.applyTextScale(),this.fit(),this.startLoop()}applyTextScale(){this.root.style.setProperty("--eve-txt",String(this.textScale))}showEmpty(){let t=this.root.createDiv({cls:"eve-empty"});t.createEl("b",{text:"Your tree has no notes yet."}),t.createEl("br"),t.createEl("br"),t.appendText("Tag your first note by adding a frontmatter block at the very top of the file:"),t.createEl("pre",{cls:"eve-empty-code"}).createEl("code",{text:`---
tree_type: leaf
field: Researcher
time: 2026-06-26
---`}),t.appendText("Then click "),t.createEl("b",{text:"Rebuild from vault"}),t.appendText(". Links between notes become branches; cross-field links become rhizome. Put each topic in its own folder and the vault becomes a "),t.createEl("b",{text:"forest"}),t.appendText("."),t.createEl("br"),t.createEl("br"),t.appendText("Already have notes but see nothing? By default the tree shows only notes that carry this frontmatter. To render every note in the vault, turn off "),t.createEl("b",{text:"Settings \u2192 Eve's Apple Tree \u2192 \u201COnly show notes with tree frontmatter.\u201D"}),t.createEl("br"),t.createEl("br"),t.createEl("button",{cls:"eve-btn",text:"\u27F3 Rebuild from vault"}).addEventListener("click",()=>{this.reload()})}initThree(){let t=this.root.getBoundingClientRect();this.w=Math.max(1,t.width),this.h=Math.max(1,t.height),this.scene=new Mr,this.scene.background=new Be(Pa),this.scene.fog=new yr(La,20,54),this.camera=new Pt(50,this.w/this.h,.1,2e3),this.camera.position.set(20,12,20),this.renderer=new cs({antialias:!0,alpha:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(this.w,this.h);let n=this.renderer.domElement;n.classList.add("eve-canvas"),this.root.insertBefore(n,this.labelLayer),this.controls=new Or(this.camera,n),this.controls.enableDamping=!0,this.controls.minDistance=4,this.controls.maxDistance=400,this.controls.autoRotateSpeed=.7,this.controls.target.set(0,it*.46,0),this.controls.enablePan=!0,this.controls.screenSpacePanning=!0,this.controls.zoomToCursor=!0,this.controls.mouseButtons={LEFT:Qt.ROTATE,MIDDLE:Qt.DOLLY,RIGHT:Qt.PAN},this.preset={pos:this.camera.position.clone(),target:this.controls.target.clone()},this.D0=this.camera.position.distanceTo(this.controls.target),this.G={fieldFlat:new _t,fieldColumn:new _t,struct:new _t,rhizome:new _t,dots:new _t,glow:new _t,sil:new _t,bridge:new _t,select:new _t},Object.values(this.G).forEach(i=>this.scene.add(i)),this.ro=new ResizeObserver(()=>this.resizeRenderer()),this.ro.observe(this.root),this.root.addEventListener("pointerdown",this.onPointerDown,!0),this.root.addEventListener("pointermove",this.onPointerMove,!0),this.root.addEventListener("pointerup",this.onPointerUp,!0),n.addEventListener("contextmenu",this.onContextMenu)}dotTexture(t,n){let i=t+n;if(this.texCache[i])return this.texCache[i];let r=160,a=document.createElement("canvas");a.width=a.height=r;let o=a.getContext("2d"),l=r/2,c=r/2,h=o.createRadialGradient(l,c,8,l,c,78);h.addColorStop(0,ut(t,.22)),h.addColorStop(1,ut(t,0)),o.fillStyle=h,o.beginPath(),o.arc(l,c,78,0,7),o.fill(),o.fillStyle=ut(t,.96),o.beginPath(),o.arc(l,c,30,0,7),o.fill(),o.lineWidth=5,o.strokeStyle=ut(n,.95),o.beginPath(),o.arc(l,c,30,0,7),o.stroke(),o.fillStyle="#ffffff",o.beginPath(),o.arc(l,c,12,0,7),o.fill();let d=new Sn(a);return d.anisotropy=4,this.texCache[i]=d,d}diamondTexture(t){let n="dia"+t;if(this.texCache[n])return this.texCache[n];let i=160,r=document.createElement("canvas");r.width=r.height=i;let a=r.getContext("2d"),o=i/2,l=a.createRadialGradient(o,o,1,o,o,74);l.addColorStop(0,ut(t,.9)),l.addColorStop(.3,ut(t,.42)),l.addColorStop(1,ut(t,0)),a.fillStyle=l,a.beginPath(),a.arc(o,o,74,0,7),a.fill(),a.globalCompositeOperation="lighter";let c=(u,f)=>{let g=a.createLinearGradient(o-u,o,o+u,o);g.addColorStop(0,"rgba(255,255,255,0)"),g.addColorStop(.5,"rgba(255,255,255,.92)"),g.addColorStop(1,"rgba(255,255,255,0)"),a.fillStyle=g,a.fillRect(o-u,o-f/2,u*2,f)},h=(u,f,g)=>{a.save(),a.translate(o,o),a.rotate(u),a.translate(-o,-o),c(f,g),a.restore()};h(0,72,5),h(Math.PI/2,72,5),h(Math.PI/4,40,3),h(-Math.PI/4,40,3),l=a.createRadialGradient(o,o,0,o,o,16),l.addColorStop(0,"rgba(255,255,255,1)"),l.addColorStop(.5,ut(zr(t,.6),.95)),l.addColorStop(1,ut(t,0)),a.fillStyle=l,a.beginPath(),a.arc(o,o,16,0,7),a.fill(),a.globalCompositeOperation="source-over";let d=new Sn(r);return d.anisotropy=4,this.texCache[n]=d,d}haloTexture(){if(this.texCache.halo)return this.texCache.halo;let t=128,n=document.createElement("canvas");n.width=n.height=t;let i=n.getContext("2d"),r=t/2,a=i.createRadialGradient(r,r,0,r,r,r);a.addColorStop(0,"rgba(255,255,255,1)"),a.addColorStop(.22,"rgba(255,255,255,0.62)"),a.addColorStop(.45,"rgba(255,255,255,0.28)"),a.addColorStop(.7,"rgba(255,255,255,0.08)"),a.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=a,i.fillRect(0,0,t,t);let o=new Sn(n);return o.anisotropy=4,this.texCache.halo=o,o}glowMat(t,n){let i=t+(n?"|a":"|b"),r=this.glowMats.get(i);return r||(r=new Kt({map:this.haloTexture(),color:new Be(t),transparent:!0,depthWrite:!1,blending:this.themeDark?Bn:Ot,fog:!0,opacity:0}),this.glowMats.set(i,r),this.glowAnim.push({m:r,accent:n})),r}glowDim(){return this.glowDimMat||(this.glowDimMat=new Kt({map:this.haloTexture(),color:new Be("#c8d0da"),transparent:!0,depthWrite:!1,blending:this.themeDark?Bn:Ot,fog:!0,opacity:0})),this.glowDimMat}ringTexture(){if(this.texCache.ring)return this.texCache.ring;let t=128,n=document.createElement("canvas");n.width=n.height=t;let i=n.getContext("2d");i.lineWidth=7,i.strokeStyle="rgba(34,48,58,.9)",i.beginPath(),i.arc(t/2,t/2,t/2-8,0,7),i.stroke(),i.lineWidth=3,i.strokeStyle="rgba(255,255,255,.9)",i.beginPath(),i.arc(t/2,t/2,t/2-8,0,7),i.stroke();let r=new Sn(n);return this.texCache.ring=r,r}treeSilTexture(t="round"){let n="sil-"+t;if(this.texCache[n])return this.texCache[n];let i=256,r=document.createElement("canvas");r.width=r.height=i;let a=r.getContext("2d"),o=(h,d)=>{a.fillStyle=ut("#5b4632",.92),a.fillRect(i*(.5-d/2),i*h,i*d,i*(.97-h))},l=(h,d,u)=>{let f=i*h,g=i*d,_=i*u,m=a.createRadialGradient(f,g,_*.78,f,g,_);m.addColorStop(0,ut(vs,.96)),m.addColorStop(.86,ut(vs,.93)),m.addColorStop(1,ut(vs,0)),a.fillStyle=m,a.beginPath(),a.arc(f,g,_,0,7),a.fill()};if(t==="conifer"){o(.82,.07);let h=(d,u,f)=>{a.fillStyle=ut(vs,.94),a.beginPath(),a.moveTo(i*.5,i*(d-f)),a.lineTo(i*(.5+u),i*d),a.lineTo(i*(.5-u),i*d),a.closePath(),a.fill()};h(.82,.3,.26),h(.62,.25,.24),h(.44,.19,.22)}else if(t==="apple"){o(.56,.085),l(.5,.42,.25),l(.27,.46,.2),l(.73,.46,.2),l(.38,.36,.17),l(.62,.36,.17),l(.5,.34,.17);let h=(d,u,f)=>{let g=i*d,_=i*u,m=i*f,p=a.createRadialGradient(g,_,1,g,_,m);p.addColorStop(0,ut("#d23b2c",.98)),p.addColorStop(1,ut("#7a2018",.6)),a.fillStyle=p,a.beginPath(),a.arc(g,_,m,0,7),a.fill()};h(.4,.5,.03),h(.58,.47,.03),h(.5,.55,.028),h(.66,.52,.026),h(.33,.45,.026)}else o(.6,.075),l(.5,.37,.3),l(.31,.44,.2),l(.69,.44,.2),l(.38,.27,.17),l(.62,.27,.17),l(.5,.22,.17);let c=new Sn(r);return this.texCache[n]=c,c}bridgeTexture(){if(this.texCache.bridge)return this.texCache.bridge;let t=128,n=document.createElement("canvas");n.width=n.height=t;let i=n.getContext("2d"),r=i.createRadialGradient(64,64,4,64,64,60);r.addColorStop(0,ut(li,.95)),r.addColorStop(.55,ut(li,.5)),r.addColorStop(1,ut(li,0)),i.fillStyle=r,i.beginPath(),i.arc(64,64,60,0,7),i.fill(),i.fillStyle="#fff",i.font="bold 60px ui-monospace,Menlo,monospace",i.textAlign="center",i.textBaseline="middle",i.fillText("\u21C4",64,66);let a=new Sn(n);return this.texCache.bridge=a,a}secOf(t){return ys[(t%ys.length+ys.length)%ys.length]}buildScene(){for(let t of this.forest.trees)this.buildDots(t),this.buildLinks(t),this.buildFields(t),this.buildSilhouette(t);this.buildBridges(),this.applyFieldMode(),this.buildLabels(),this.selRing=new Mn(new Kt({map:this.ringTexture(),transparent:!0,depthWrite:!1,fog:!0,opacity:0})),this.selRing.visible=!1,this.G.select.add(this.selRing)}buildDots(t){for(let n of t.nodes){let i=ci[n.treeType],r=i.tint,a=i.ring;if(n.treeType==="leaf"&&n.field>=0){let g=this.secOf(n.field);r=g.tint,a=g.ring}let o=n.treeType==="trunk"?1-.4*n.tNorm:1,l=i.r*2*o,c=new Mn(new Kt({map:this.dotTexture(r,a),transparent:!0,depthWrite:!1,fog:!0}));c.position.copy(n.pos),c.scale.set(l,l,1),c.userData={node:n,baseScale:l,tint:r,ring:a},this.G.dots.add(c),n.sprite=c,n._lens=1;let h=!!i.glow,d=this.glowMat(h?i.glow:r,h),u=new Mn(d);u.position.copy(n.pos);let f=l*(h?3.2:2.6);u.scale.set(f,f,1),u.userData={litMat:d},this.G.glow.add(u),n.glowSprite=u}}buildLinks(t){let n={spine:"#6f6780",branch:"#8a8276",intra:"#7d7a86"},i=[],r=[],a=[],o=[],l=[],c=[],h=new Be;for(let u of t.edges){let f=t.byId.get(u.from),g=t.byId.get(u.to);if(!f||!g)continue;let _=!(u.kind in n);h.set(_?"#5f7382":n[u.kind]);let m=_?a:i,p=_?o:r,M=_?c:l;m.push(f.pos.x,f.pos.y,f.pos.z,g.pos.x,g.pos.y,g.pos.z),p.push(h.r,h.g,h.b,h.r,h.g,h.b),M.push([f,g])}let d=(u,f,g,_,m)=>{if(!u.length)return;let p=new vt,M=new xt(new Float32Array(u),3);p.setAttribute("position",M),p.setAttribute("color",new xt(new Float32Array(f),3));let x=new ln({vertexColors:!0,transparent:!0,opacity:_,fog:!0});m.add(new Sr(p,x)),this.fadeMats.push({m:x,b:_,link:!0}),g.forEach(([A,D],b)=>{this.indexEdgeVertex(A.id,M,b*2),this.indexEdgeVertex(D.id,M,b*2+1)})};d(i,r,l,.5,this.G.struct),d(a,o,c,.14,this.G.rhizome)}indexEdgeVertex(t,n,i){let r=this.edgeIndex.get(t);r||(r=[],this.edgeIndex.set(t,r)),r.push({attr:n,vi:i})}wedgeShape(t,n,i){let r=new Hi;return r.moveTo(0,0),r.lineTo(i*Math.cos(t),i*Math.sin(t)),r.absarc(0,0,i,t,n,!1),r.lineTo(0,0),r}edgeFade(t,n,i,r){let a=new vt().setFromPoints([t,n]),o=new Be(i);a.setAttribute("color",new xt(new Float32Array([o.r,o.g,o.b,.24,o.r,o.g,o.b,0]),4));let l=new ln({vertexColors:!0,transparent:!0,fog:!0}),c=new bn(a,l);c.renderOrder=-1,r.add(c),this.fadeMats.push({m:l,b:1})}buildFields(t){let n=Math.max(1,t.fields.length),i=Tn,r=it,a=t.origin.x,o=t.origin.z,l=new _t;l.position.set(a,0,o),this.G.fieldFlat.add(l);let c=new _t;c.position.set(a,0,o),this.G.fieldColumn.add(c);let h=6,d=28;for(let f=0;f<n;f++){let g=this.secOf(f),_=tn(f,n)+en,m=tn(f+1,n)-en,p=(_+m)/2,M=new Be(g.tint),x=new Be(g.ring).getHex(),A=new Pr(this.wedgeShape(_,m,i),28);A.rotateX(-Math.PI/2),A.translate(0,.01,0);let D=new ii({color:M,transparent:!0,opacity:.13,depthWrite:!1,side:qt,fog:!0});l.add(new Ut(A,D)),this.fadeMats.push({m:D,b:.13});let b=new ln({color:x,transparent:!0,opacity:.12,fog:!0});l.add(new bn(new vt().setFromPoints([cn(_,i,.01),cn(_,i,r*.92)]),b)),this.fadeMats.push({m:b,b:.12});let w=new Cr(this.wedgeShape(_,m,i),{depth:r,bevelEnabled:!1,steps:h,curveSegments:d});w.rotateX(-Math.PI/2),w.translate(0,.012,0);let z=w.attributes.position,v=new Float32Array(z.count*4),T=(B,Z,q)=>{let G=Math.min(1,Math.max(0,(q-B)/(Z-B)));return G*G*(3-2*G)};for(let B=0;B<z.count;B++){let Z=z.getX(B),q=z.getY(B),G=z.getZ(B),J=Math.min(1,Math.max(0,q/r)),j=1-T(.62,1,J),he=.45+.55*T(0,.22,J),W=.78+.22*(1-Math.min(1,Math.hypot(Z,G)/i));v[B*4]=1,v[B*4+1]=1,v[B*4+2]=1,v[B*4+3]=j*he*W}w.setAttribute("color",new xt(v,4));let N=new ii({color:new Be(Da(g.tint,.34)),vertexColors:!0,transparent:!0,opacity:.12,side:Tt,depthWrite:!1,blending:Ot,fog:!0}),Y=new Ut(w,N);Y.renderOrder=-2,c.add(Y),this.fadeMats.push({m:N,b:.12}),this.edgeFade(cn(_,i,.012),cn(_,i,r),g.ring,c),this.edgeFade(cn(m,i,.012),cn(m,i,r),g.ring,c);let k=[];for(let B=0;B<=d;B++)k.push(cn(_+(m-_)*B/d,i,.014));let C=new ln({color:new Be(g.ring),transparent:!0,opacity:.26,fog:!0}),U=new bn(new vt().setFromPoints(k),C);U.renderOrder=-1,c.add(U),this.fadeMats.push({m:C,b:.26}),this.sectorAnchor.push(cn(p,i+.7,r*.5).add(new L(a,0,o))),this.sEls.push(this.mkSectorLabel(t.fields[f],g.ring))}let u=f=>{let g=[];for(let m=0;m<=120;m++){let p=m/120*Math.PI*2;g.push(new L(Math.cos(p)*i,.006,Math.sin(p)*i))}let _=new ln({color:13287336,transparent:!0,opacity:.55,fog:!0});f.add(new bn(new vt().setFromPoints(g),_)),this.fadeMats.push({m:_,b:.55})};u(l),u(c)}mkSectorLabel(t,n){let i=this.labelLayer.createDiv({cls:"eve-slabel"});return i.setText(t),i.style.color=n,i}buildSilhouette(t){let n=new Mn(new Kt({map:this.treeSilTexture(this.silIcon),transparent:!0,depthWrite:!1,fog:!1,opacity:0}));n.position.set(t.origin.x,it*.5,t.origin.z),n.scale.set(2*Tn*.8,it*1.26,1),t.sil=n,this.G.sil.add(n),t.silMarks=[];let i=(r,a,o,l)=>{let c=new Mn(new Kt({map:this.dotTexture(a,o),transparent:!0,depthWrite:!1,fog:!1,opacity:0}));c.userData={tree:t,mark:r},c.scale.set(l,l,1),this.G.sil.add(c),t.silMarks.push(c),this.placeSilMark(c)};if(t.nodes.some(r=>r.treeType==="apple")&&i("apple","#e0564b","#7a2018",1.5),t.nodes.some(r=>r.treeType==="flower")&&i("flower","#e0489a","#8a2560",1.5),this.isForest){let r=this.labelLayer.createDiv({cls:"eve-tlabel"});r.setText(t.topic),t.nameLabelEl=r}}placeSilMark(t){let n=t.userData.tree,i=t.userData.mark,[r,a]=Hr.SIL_MARK_ANCHOR[this.silIcon][i];t.position.set(n.origin.x+(r-.5)*Tn*1.6,it*(1.13-1.26*a),n.origin.z)}resolveNote(t,n){if(!n)return null;if(t.byId.has(n))return t.byId.get(n);let i=n.replace(/\.md$/,"").toLowerCase();return t.nodes.find(r=>r.id.replace(/\.md$/,"").toLowerCase().endsWith("/"+i)||r.title.toLowerCase()===i)??null}repOf(t){return t.nodes.find(n=>n.treeType==="trunk")||t.nodes.find(n=>n.treeType==="root")||t.nodes[0]||null}buildBridges(){for(let t of this.forest.bridges){let n=this.forest.trees.find(f=>f.id===t.from),i=this.forest.trees.find(f=>f.id===t.to);if(!n||!i||n===i)continue;let r=this.resolveNote(n,t.fromNote),a=this.resolveNote(i,t.toNote),o=r?r.pos.clone():new L(n.origin.x,it*.5,n.origin.z),l=a?a.pos.clone():new L(i.origin.x,it*.5,i.origin.z),c=[];for(let f=0;f<=24;f++){let g=f/24,_=new L().lerpVectors(o,l,g);_.y+=Math.sin(g*Math.PI)*1.6,c.push(_)}let h=new ln({color:new Be(li),transparent:!0,opacity:.6,fog:!0});this.G.bridge.add(new bn(new vt().setFromPoints(c),h));let d=o.clone().add(l).multiplyScalar(.5);d.y=Math.max(o.y,l.y)+1.6;let u=new Mn(new Kt({map:this.bridgeTexture(),transparent:!0,depthWrite:!1,fog:!0}));u.position.copy(d),u.scale.set(.95,.95,1),u.userData={bridge:t},this.G.bridge.add(u),this.bridges.push({def:t,sprite:u})}}applyFieldMode(){this.G.fieldFlat.visible=this.sectorsOn&&this.fieldMode==="flat",this.G.fieldColumn.visible=this.sectorsOn&&this.fieldMode==="column"}buildLabels(){for(let n=0;n<28;n++){let i=this.labelLayer.createDiv({cls:"eve-lblnode"}),r=i.createSpan({cls:"nt"}),a=i.createSpan({cls:"nd"});this.pool.push({el:i,t:r,d:a,node:null,op:0,target:0,tier:1,curId:null,sx:0,sy:0,sel:!1})}this.aEls=this.allNodes.filter(n=>n.treeType==="flower"||n.treeType==="apple").map(n=>{let i=this.labelLayer.createDiv({cls:"eve-alabel"});i.style.color=ci[n.treeType].ring;let r=i.createSpan({cls:"ad"});return r.style.background=ci[n.treeType].glow||ci[n.treeType].tint,i.appendChild(document.createTextNode(n.treeType==="flower"?"AHA":"OUTPUT")),{el:i,node:n}})}clamp01(t){return t<0?0:t>1?1:t}ss(t,n,i){let r=Math.min(1,Math.max(0,(i-t)/(n-t)));return r*r*(3-2*r)}updateLabels(){let t=this.w,n=this.h,i=this.camera,r=this.controls;i.updateMatrixWorld();let a=1-this.lodT,o=i.position.distanceTo(r.target),l=.7*this.D0,c=.42*this.D0,h=.04*this.D0;this.titleOn=o<(this.titleOn?l+h:l-h),this.descOn=o<(this.descOn?c+h:c-h);let d=1.1*this.D0,u=.95*this.D0,f=.5*this.D0;this._m.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._fr.setFromProjectionMatrix(this._m);for(let b of this.forest.trees){if(!b.nameLabelEl)continue;this._v.set(b.origin.x,-2.8,b.origin.z).project(i);let w=this._v.x>=-1.05&&this._v.x<=1.05&&this._v.y>=-1.05&&this._v.y<=1.05&&this._v.z<1;b.nameLabelEl.style.opacity=w?this.lodT.toFixed(3):"0",b.nameLabelEl.style.transform=`translate3d(${Math.round((this._v.x*.5+.5)*t)}px,${Math.round((-this._v.y*.5+.5)*n)}px,0) translate(-50%,0)`}let g=this.clamp01((l-o)/(l-c));this.sEls.forEach((b,w)=>{let z=this.sectorAnchor[w];if(!z||!this.fieldLabelsOn||a<.05){b.style.opacity="0";return}if(this._v.copy(z).project(i),!(this._v.x>=-1.05&&this._v.x<=1.05&&this._v.y>=-1.05&&this._v.y<=1.05&&this._v.z<1)){b.style.opacity="0";return}b.style.opacity=((1-.9*g)*a).toFixed(3),b.style.transform=`translate3d(${Math.round((this._v.x*.5+.5)*t)}px,${Math.round((-this._v.y*.5+.5)*n)}px,0) translate(-50%,-50%)`}),this.aEls.forEach(b=>{if(!this.accentLabelsOn||a<.05){b.el.style.opacity="0";return}if(this._v.copy(b.node.pos).project(i),!(this._v.x>=-1&&this._v.x<=1&&this._v.y>=-1&&this._v.y<=1&&this._v.z<1)){b.el.style.opacity="0";return}b.el.style.opacity=(.92*a).toFixed(3),b.el.style.transform=`translate3d(${Math.round((this._v.x*.5+.5)*t)}px,${Math.round((-this._v.y*.5+.5)*n)}px,0) translate(-50%,-160%)`});let _=[];if(a>=.05)for(let b of this.allNodes){let w=b===this.selected;if(!w&&!this.titleOn||b.treeType==="root"&&!w||!this._fr.containsPoint(b.pos))continue;let z=i.position.distanceTo(b.pos);if(!w&&z>d)continue;let v=(w?1:this.ss(u,f,z))*a;if(!w&&v<.02)continue;this._v.copy(b.pos).project(i);let T=(this._v.x*.5+.5)*t,N=(-this._v.y*.5+.5)*n,Y=w||this.descOn?2:1,k=z-(m0[b.treeType]||0)*this.D0*.18-(w?1e6:0);_.push({n:b,sx:T,sy:N,op:v,tier:Y,score:k,sel:w})}_.sort((b,w)=>b.score-w.score);let m=[],p=0,M=0;for(let b of _){if(!b.sel){if(p>=18)break;let w=!1;for(let z of m){let v=z.sx-b.sx,T=z.sy-b.sy;if(v*v+T*T<900){w=!0;break}}if(w)continue}b.tier===2&&!b.sel&&(M>=8?b.tier=1:M++),m.push(b),b.sel||p++}let x=new Set,A=()=>this.pool.find(b=>b.node===null);for(let b of m){let w=this.active.get(b.n.id);if(!w){let z=A();if(!z)continue;w=z,w.node=b.n,w.op=0,w.curId=null,this.active.set(b.n.id,w)}if(x.add(b.n.id),w.curId!==b.n.id){w.t.empty();let z=w.t.createSpan({cls:"fd"});z.style.background=b.n.field>=0?this.secOf(b.n.field).tint:ci[b.n.treeType].ring,w.t.appendChild(document.createTextNode(b.n.title)),w.d.setText(b.n.description),w.curId=b.n.id}w.target=b.op,w.tier=b.tier,w.sel=b.sel,w.sx=Math.round(b.sx+10),w.sy=Math.round(b.sy-7)}for(let b of this.pool)b.node&&!x.has(b.node.id)&&(b.target=0);let D=this.reduced?1:.18;for(let b of this.pool)if(!(!b.node&&b.op<=.001)){if(b.op+=(b.target-b.op)*D,b.target===0&&b.op<.02){b.op=0,b.el.style.opacity="0",b.node&&(this.active.delete(b.node.id),b.node=null);continue}b.el.style.opacity=b.op.toFixed(3),b.el.style.transform=`translate3d(${b.sx}px,${b.sy}px,0)`,b.el.toggleClass("sel",!!b.sel),b.d.toggleClass("show",b.tier===2)}}flyTo(t,n,i=640){if(this.reduced){this.camera.position.copy(t),this.controls.target.copy(n),this.controls.update();return}this.controls.enabled=!1,this.tween={fromPos:this.camera.position.clone(),fromTgt:this.controls.target.clone(),toPos:t.clone(),toTarget:n.clone(),t0:performance.now(),dur:i}}fit(){let t=Tn,n=it,i=1/0,r=-1/0,a=1/0,o=-1/0;for(let A of this.forest.trees)i=Math.min(i,A.origin.x-t),r=Math.max(r,A.origin.x+t),a=Math.min(a,A.origin.z-t),o=Math.max(o,A.origin.z+t);let l=(i+r)/2,c=(a+o)/2,h=new L(l,n*.46,c),d=t;for(let A of this.forest.trees)d=Math.max(d,Math.hypot(A.origin.x-l,A.origin.z-c)+t);let u=Math.hypot(d,n*.52),f=_s.degToRad(this.camera.fov),g=this.camera.aspect||1,_=2*Math.atan(Math.tan(f/2)*g),m=1.7*Math.max(u/Math.sin(f/2),u/Math.sin(_/2)),p=new L(20,12-it*.46,20).normalize(),M=h.clone().addScaledVector(p,m);this.D0=m,this.preset={pos:M.clone(),target:h.clone()},this.controls.maxDistance=Math.max(400,m*2.8);let x=this.scene.fog;x.near=Math.max(1,m*.42),x.far=m*1.9+d,this.camera.position.copy(M),this.controls.target.copy(h),this.controls.update()}focusTree(t){let n=new L(t.origin.x,it*.46,t.origin.z),i=Math.hypot(Tn,it*.52),r=_s.degToRad(this.camera.fov),a=this.camera.aspect||1,o=2*Math.atan(Math.tan(r/2)*a),l=1.7*Math.max(i/Math.sin(r/2),i/Math.sin(o/2)),c=new L(20,12-it*.46,20).normalize();this.flyTo(n.clone().addScaledVector(c,l),n)}pick(t){if(!this.renderer)return null;let n=this.renderer.domElement.getBoundingClientRect(),i=new re((t.clientX-n.left)/n.width*2-1,-((t.clientY-n.top)/n.height)*2+1),r=new ms;r.setFromCamera(i,this.camera);let a=[...this.G.dots.children];if(this.G.bridge.visible)for(let c of this.bridges)a.push(c.sprite);let o=r.intersectObjects(a,!1)[0];if(!o)return null;let l=o.object.userData;return l.bridge?{bridge:l.bridge}:l.node?{node:l.node}:null}rayOnPlane(t,n){if(!this.renderer)return null;let i=this.renderer.domElement.getBoundingClientRect(),r=new re((t.clientX-i.left)/i.width*2-1,-((t.clientY-i.top)/i.height)*2+1),a=new ms;a.setFromCamera(r,this.camera);let o=new L;return a.ray.intersectPlane(n,o)?o:null}isDraggable(t){return t.field>=0&&t.treeType!=="root"&&t.treeType!=="trunk"}clampToWedge(t,n){let i=t.tree?.origin??{x:0,z:0},r=Math.max(1,t.tree?.fields.length??1),a=Math.PI*2,o=.05,l=n.x-i.x,c=n.z-i.z,h=n.y;h<.7?h=.7:h>it*1.16&&(h=it*1.16);let d=Math.hypot(l,c),u=Fr,f=Br(h);d<u?d=u:d>f&&(d=f);let g=tn(t.field,r)+en+En+o,_=tn(t.field+1,r)-en-En-o;_<g&&(g=_=(g+_)/2),g<0&&(g+=a),_<0&&(_+=a);let m=Math.atan2(-c,l);return m<0&&(m+=a),m<g?m=g:m>_&&(m=_),new L(i.x+d*Math.cos(m),h,i.z-d*Math.sin(m))}moveNode(t,n){t.pos.copy(n),t.sprite?.position.copy(n),t.glowSprite?.position.copy(n),t===this.selected&&this.selRing.position.copy(n);let i=this.edgeIndex.get(t.id);if(i){let r=new Set;for(let a of i)a.attr.setXYZ(a.vi,n.x,n.y,n.z),r.add(a.attr);r.forEach(a=>a.needsUpdate=!0)}}persistDot(t){var i;let n=t.tree?.origin??{x:0,z:0};((i=this.settings).dotPositions??(i.dotPositions={}))[t.id]={x:t.pos.x-n.x,y:t.pos.y,z:t.pos.z-n.z},t._pinned=!0,this.persist()}selectNode(t){this.selected=t,this.lensChair&&this.applyLens();let n=t.sprite;if(n){let i=n.userData.baseScale;this.selRing.position.copy(t.pos),this.selRing.scale.set(i*2.4,i*2.4,1),this.selRing.material.opacity=.95,this.selRing.visible=!0,this.G.dots.children.forEach(r=>r.scale.setScalar(r.userData.baseScale)),n.scale.setScalar(i*1.35)}this.showCard(t)}deselect(){let t=this.selected;this.selected=null,this.selRing.visible=!1,t&&this.lensChair&&this.applyLens(),this.G.dots.children.forEach(n=>n.scale.setScalar(n.userData.baseScale)),this.hideCard()}hideCard(){this.noteCard?.removeClass("show")}async openFileInTab(t){let n=this.app.vault.getAbstractFileByPath(t);n instanceof kn.TFile?await this.app.workspace.getLeaf("tab").openFile(n):new kn.Notice("Note not found: "+t)}showCard(t){let n=this.noteCard;if(!n)return;n.empty(),n.removeClass("bridge");let i=n.createSpan({cls:"eve-nclose",text:"\u2715"});i.setAttr("role","button"),i.setAttr("aria-label","Close"),i.addEventListener("click",()=>this.deselect());let r=t.tree,a=t.fieldName??(t.treeType==="root"?"Root":t.treeType==="trunk"?"Trunk":"Unfiled"),o=n.createDiv({cls:"eve-ntag",text:a+" \xB7 "+t.treeType+(this.isForest&&r?" \xB7 "+r.topic:"")}),l=t.field>=0?this.secOf(t.field).ring:ci[t.treeType].ring;if(o.style.color=this.themeDark?zr(l,.45):l,n.createEl("h3",{cls:"eve-ntitle",text:t.title}),t.description&&n.createDiv({cls:"eve-ndesc",text:t.description}),t.views&&t.views.length){n.createDiv({cls:"eve-nsec",text:"\u{1F441} Stakeholder views ("+t.views.length+")"});for(let h of t.views){if(!h.c&&!h.t)continue;let d=n.createDiv({cls:"eve-nview"});this.lensChair&&d.toggleClass("on",h.c===this.lensChair),d.createSpan({cls:"eve-vchair",text:h.c+": "}),d.appendText(h.t)}}if(r){let h=(u,f)=>{if(n.createDiv({cls:"eve-nsec",text:u}),!f.length){n.createSpan({cls:"eve-nnone",text:"\u2014 none \u2014"});return}for(let g of f){let _=r.byId.get(g)??null,m=n.createSpan({cls:"eve-chip",text:_?_.title:g});_&&m.addEventListener("click",()=>this.selectNode(_))}},d=[...new Set(r.edges.filter(u=>u.from===t.id).map(u=>u.to))];h("Links to \u2192",d),h("\u2190 Linked from",[...new Set(r.incoming.get(t.id)||[])])}n.createEl("button",{cls:"eve-btn eve-nopen",text:"Open note \u2197"}).addEventListener("click",()=>void this.openFileInTab(t.id)),n.addClass("show")}showBridge(t){this.deselect();let n=this.noteCard;if(!n)return;n.empty(),n.addClass("bridge");let i=n.createSpan({cls:"eve-nclose",text:"\u2715"});i.setAttr("role","button"),i.setAttr("aria-label","Close"),i.addEventListener("click",()=>this.hideCard());let r=n.createDiv({cls:"eve-ntag",text:"\u21C4 Bridge"});r.style.color=this.themeDark?zr(li,.45):li,n.createEl("h3",{cls:"eve-ntitle",text:t.title}),n.createDiv({cls:"eve-ndesc",text:t.explain||"A manual link between two trees."}),n.createDiv({cls:"eve-nsec",text:"Connects"});let a=this.forest.trees.find(l=>l.id===t.from),o=this.forest.trees.find(l=>l.id===t.to);for(let l of[a,o]){if(!l)continue;let c=n.createSpan({cls:"eve-chip",text:"\u{1F333} "+l.topic}),h=this.repOf(l);h&&c.addEventListener("click",()=>this.selectNode(h))}t.filePath&&n.createEl("button",{cls:"eve-btn eve-nopen",text:"Open note \u2197"}).addEventListener("click",()=>void this.openFileInTab(t.filePath)),n.addClass("show")}detectObsidianDark(){return document.body.classList.contains("theme-dark")}applyTheme(t){if(!this.renderer)return;this.themeDark=t;let n=t?Ia.dark:Ia.light;this.linkMul=n.linkMul,this.scene.background.set(n.bg),this.scene.fog.color.set(n.fog),this.root.classList.toggle("dark",t);for(let r of this.allNodes)if(r.sprite){let a=r.sprite.userData,o=r.sprite.material;o.map=t?this.diamondTexture(a.tint):this.dotTexture(a.tint,a.ring),o.blending=t?Bn:Ot,o.needsUpdate=!0}let i=t?Bn:Ot;for(let r of this.glowAnim)r.m.blending=i,r.m.needsUpdate=!0;this.glowDimMat&&(this.glowDimMat.blending=i,this.glowDimMat.needsUpdate=!0);for(let r of this.forest.trees)if(r.silMarks)for(let a of r.silMarks){let o=a.material;o.blending=t?Bn:Ot,o.needsUpdate=!0}this.themeBtn&&this.themeBtn.setText(t?"\u2600\uFE0F Light":"\u{1F319} Dark")}buildControlsPanel(){let t=this.root.createDiv({cls:"eve-card eve-ui"});this.uiCard=t,this.pill=this.root.createDiv({cls:"eve-card eve-pill",text:"\u{1F34E}"}),this.pill.setAttr("role","button"),this.pill.setAttr("aria-label","Show panel"),this.pill.setAttr("title","Show panel"),this.pill.addEventListener("click",()=>this.setPanelCollapsed(!1));let n=t.createDiv({cls:"eve-hd"}),i=n.createDiv({cls:"eve-hdtitle"});i.createDiv({cls:"eve-brand",text:"\u{1F34E} Eve's Apple Tree"}),i.createDiv({cls:"eve-slogan",text:"think how to think"});let r=n.createSpan({cls:"eve-min",text:"\u2013"});r.setAttr("role","button"),r.setAttr("aria-label","Minimize panel"),r.setAttr("title","Minimize"),r.addEventListener("click",()=>this.setPanelCollapsed(!0));let a=t.createDiv({cls:"eve-pitch"});a.appendText("Your notes become a living "),a.createEl("b",{text:"tree of light"}),a.appendText(" \u2014 so you can "),a.createEl("b",{text:"see the shape of your own thinking"}),a.appendText(": forgotten links resurface, related ideas cluster, and your breakthroughs glow."),this.isForest&&t.createDiv({cls:"eve-topic",text:`\u{1F332} Forest \xB7 ${this.forest.trees.length} trees`});let o=t.createDiv({cls:"eve-grp eve-guide"});o.createDiv({cls:"eve-lbl",text:"How to use it"});let l=o.createEl("ul",{cls:"eve-steps"}),c=(v,T)=>{let N=l.createEl("li");N.createEl("span",{cls:"k",text:v}),N.appendText(T)};c("Drag \xB7 scroll \xB7 two-finger-drag"," to fly through it, zoom, and pan."),c("Click a dot"," \u2192 see its card; drag a dot to reposition it (saved)."),c("Zoom sets the detail"," \u2192 far out: green tree icons (names beneath) \xB7 mid: constellation \xB7 closer: titles \xB7 closest: + descriptions."),c("Related ideas cluster","; your \u{1F338} ah-has & \u{1F34E} outputs glow.");let h=t.createDiv({cls:"eve-grp"});h.createDiv({cls:"eve-lbl",text:"Show / hide"});let d=(v,T,N)=>{let Y=h.createDiv({cls:"eve-row"}),k=Y.createEl("input",{type:"checkbox"});return k.checked=T,Y.createEl("label",{text:v}),k.addEventListener("change",()=>N(k.checked)),Y.addEventListener("click",C=>{C.target!==k&&(k.checked=!k.checked,N(k.checked))}),k};d("Field sectors",this.sectorsOn,v=>{this.sectorsOn=v,this.applyFieldMode()}),d("Trunk & branch links",!0,v=>{this.G.struct.visible=v}),d("Cross-field links",!0,v=>{this.G.rhizome.visible=v}),d("Field names",this.fieldLabelsOn,v=>{this.fieldLabelsOn=v}),d("Ah-ha \u{1F338} / Output \u{1F34E}",this.accentLabelsOn,v=>{this.accentLabelsOn=v}),this.bridges.length&&d("Cross-tree bridges",!0,v=>{this.bridgesOn=v,this.G.bridge.visible=v}),d("Auto-spin (rotate)",!1,v=>{this.controls.autoRotate=v});let u=t.createDiv({cls:"eve-grp"});u.createDiv({cls:"eve-lbl",text:"Field render mode"});let f=u.createDiv({cls:"eve-seg"}),g=(v,T,N)=>{let Y=f.createEl("label"),k=Y.createEl("input",{type:"radio"});k.name="eve-fmode",k.value=v,k.checked=N,Y.appendChild(document.createTextNode(T)),k.addEventListener("change",()=>{k.checked&&(this.fieldMode=v,this.applyFieldMode())})};g("flat","Flat wedge",this.fieldMode==="flat"),g("column","Column",this.fieldMode==="column");let _=t.createDiv({cls:"eve-grp"});_.createDiv({cls:"eve-lbl",text:"Appearance"});let m=(v,T,N,Y,k,C,U,B)=>{let Z=_.createDiv({cls:"eve-slider"}),q=Z.createDiv({cls:"eve-slrow"});q.createSpan({cls:"eve-slname",text:v});let G=q.createSpan({cls:"eve-slval",text:C(k)}),J=Z.createEl("input",{type:"range"});J.min=String(T),J.max=String(N),J.step=String(Y),J.value=String(k),J.addEventListener("input",()=>{let j=+J.value;G.setText(C(j)),U(j)}),J.addEventListener("change",()=>B(+J.value))},p=v=>v.toFixed(2)+"\xD7";m("Text size",.6,2,.05,this.textScale,p,v=>{this.textScale=v,this.applyTextScale()},v=>{this.settings.textSize=v,this.persist()}),m("Light shine",0,2,.05,this.shine,p,v=>{this.shine=v},v=>{this.settings.glowScale=v,this.persist()}),_.createDiv({cls:"eve-lbl eve-lbl2",text:"Zoom-out icon"});let M=_.createEl("select",{cls:"eve-lenssel"});[["round","\u25CF Round"],["conifer","\u25B2 Conifer"],["apple","\u{1F34E} Apple"]].forEach(([v,T])=>{let N=M.createEl("option",{text:T});N.value=v}),M.value=this.silIcon,M.addEventListener("change",()=>{this.silIcon=M.value,this.settings.zoomOutIcon=this.silIcon;for(let v of this.forest.trees){if(v.sil){let T=v.sil.material;T.map=this.treeSilTexture(this.silIcon),T.needsUpdate=!0}if(v.silMarks)for(let T of v.silMarks)this.placeSilMark(T)}this.persist()});let x=t.createDiv({cls:"eve-grp"});x.createDiv({cls:"eve-lbl",text:"View"});let A=x.createDiv({cls:"eve-btns"});if(A.createEl("button",{cls:"eve-btn",text:"\u21BA Reset",attr:{title:"Return to the opening view"}}).addEventListener("click",this.resetView),A.createEl("button",{cls:"eve-btn",text:"\u22B9 Fit",attr:{title:"Re-frame the whole tree / forest"}}).addEventListener("click",()=>{this.fit(),this.resetView()}),this.themeBtn=A.createEl("button",{cls:"eve-btn",text:this.themeDark?"\u2600\uFE0F Light":"\u{1F319} Dark",attr:{title:"Switch between light and diamond-dark"}}),this.themeBtn.addEventListener("click",()=>{this.themeManual=!0,this.applyTheme(!this.themeDark)}),t.createEl("button",{cls:"eve-btn",text:"\u27F3 Rebuild from vault"}).addEventListener("click",()=>this.reload()),t.createEl("button",{cls:"eve-btn",text:"\u233E Reset dot layout",attr:{title:"Clear every dot you've dragged and re-run the auto-layout"}}).addEventListener("click",()=>{let v=performance.now();if(v-this.resetArmed>3e3){this.resetArmed=v,new kn.Notice("Reset dot layout? Click again within 3s to clear every moved dot.");return}this.resetArmed=0,this.settings.dotPositions={},new kn.Notice("Dot layout reset."),this.persist().then(()=>this.reload())}),this.isForest){let v=t.createDiv({cls:"eve-grp"});v.createDiv({cls:"eve-lbl",text:"Focus tree"});let T=v.createEl("select",{cls:"eve-lenssel"}),N=T.createEl("option",{text:"\u{1F332} Whole forest"});N.value="-1",this.forest.trees.forEach((Y,k)=>{let C=T.createEl("option",{text:"\u{1F333} "+Y.topic});C.value=String(k)}),T.addEventListener("change",()=>{let Y=+T.value;Y<0?this.resetView():this.focusTree(this.forest.trees[Y])})}this.buildChairLens(t),this.noteCard=this.root.createDiv({cls:"eve-card eve-note"}),this.setPanelCollapsed(this.settings.panelCollapsed??!1,!1)}setPanelCollapsed(t,n=!0){this.uiCard?.toggleClass("hidden",t),this.pill?.toggleClass("show",t),n&&(this.settings.panelCollapsed=t,this.persist())}viewChairs(t){return(t.views??[]).map(n=>n.c).filter(Boolean)}buildChairLens(t){let n=[...new Set(this.forest.trees.flatMap(o=>o.cast||[]))];if(this.lensCast=[...new Set([...n,...this.allNodes.flatMap(o=>this.viewChairs(o))])],!this.lensCast.length)return;this.viewDots=this.allNodes.filter(o=>(o.views??[]).length>0);let i=t.createDiv({cls:"eve-grp"});i.createDiv({cls:"eve-lbl",text:"Stakeholder lens"}),i.createDiv({cls:"eve-lenshint",text:"Sit in one chair: ideas that chair has no view on dim away, so you sweep the tree through one perspective."});let r=i.createEl("select",{cls:"eve-lenssel"});this.lensSelect=r;let a=r.createEl("option",{text:"\u2014 off (all chairs) \u2014"});a.value="",this.lensCast.forEach(o=>{let l=r.createEl("option",{text:o});l.value=o}),r.addEventListener("change",()=>{this.lensChair=r.value||null,this.applyLens()}),this.mirrorEl=i.createDiv({cls:"eve-mirror"}),this.renderMirror()}renderMirror(){let t=this.mirrorEl;if(!t)return;t.empty();let n=this.viewDots.length,i=this.lensCast.map(a=>{let o=this.viewDots.filter(l=>this.viewChairs(l).includes(a)).length;return{c:a,k:o,pct:n?Math.round(100*o/n):0}}).sort((a,o)=>o.k-a.k||(a.c<o.c?-1:1)),r=t.createDiv({cls:"eve-mcap"});if(this.lensChair){let a=i.find(o=>o.c===this.lensChair);r.setText(`${this.lensChair} \xB7 ${a.k}/${n} dots (${a.pct}%)`)}else r.setText(`chair-mirror \xB7 ${n} dot${n===1?"":"s"} with views`);for(let a of i){let o=t.createDiv({cls:"eve-mrow"+(a.c===this.lensChair?" on":"")});o.setAttr("role","button"),o.tabIndex=0,o.setAttr("aria-label",`Stakeholder lens: ${a.c} (${a.pct}%)`),o.createSpan({cls:"eve-mname",text:a.c});let l=o.createSpan({cls:"eve-mbar"});l.createEl("i").style.width=a.pct+"%",o.createSpan({cls:"eve-mpct",text:a.pct+"%"});let c=()=>{this.lensChair=this.lensChair===a.c?null:a.c,this.lensSelect&&(this.lensSelect.value=this.lensChair??""),this.applyLens()};o.addEventListener("click",c),o.addEventListener("keydown",h=>{(h.key==="Enter"||h.key===" ")&&(h.preventDefault(),c())})}}applyLens(){for(let t of this.allNodes){let n=!this.lensChair||t===this.selected||this.viewChairs(t).includes(this.lensChair);t._lens=n?1:.1,t.glowSprite&&(t.glowSprite.material=n?t.glowSprite.userData.litMat:this.glowDim())}this.renderMirror()}startLoop(){let t=n=>{if(this.raf=requestAnimationFrame(t),this.tween){let c=Math.min(1,(n-this.tween.t0)/this.tween.dur),h=this.easeInOutCubic(c);this.camera.position.lerpVectors(this.tween.fromPos,this.tween.toPos,h),this.controls.target.lerpVectors(this.tween.fromTgt,this.tween.toTarget,h),c>=1&&(this.tween=null,this.controls.enabled=!0)}this.controls.update();let i=this.camera.position.distanceTo(this.controls.target);this.lodT=this.ss($c*this.D0,Kc*this.D0,i);let r=1-this.lodT;for(let c of this.allNodes){let h=(c._lens??1)<1?this.themeDark?.22:.1:c._lens??1;c.sprite&&(c.sprite.material.opacity=h*r)}let a=this.themeDark?.3:.13,o=this.themeDark?.55:.26,l=this.themeDark?.95:.52;for(let c of this.glowAnim)c.m.opacity=Math.min(l,(c.accent?o:a)*r*this.shine);this.glowDimMat&&(this.glowDimMat.opacity=Math.min(l,(this.themeDark?.12:.05)*r*this.shine));for(let c of this.forest.trees)if(c.sil&&(c.sil.material.opacity=this.lodT*jc),c.silMarks)for(let h of c.silMarks)h.material.opacity=this.lodT;for(let c of this.fadeMats)c.m.opacity=c.b*r*(c.link?this.linkMul:1);this.selected&&this.selected.sprite&&(this.selRing.position.copy(this.selected.pos),this.selRing.material.opacity=.95*r),this.updateLabels(),this.renderer.render(this.scene,this.camera)};this.raf=requestAnimationFrame(t)}dispose(t=!0){if(this.raf&&(cancelAnimationFrame(this.raf),this.raf=0),this.ro?.disconnect(),this.ro=void 0,this.root?.removeEventListener("pointerdown",this.onPointerDown,!0),this.root?.removeEventListener("pointermove",this.onPointerMove,!0),this.root?.removeEventListener("pointerup",this.onPointerUp,!0),this.renderer){let n=this.renderer.domElement;n.removeEventListener("contextmenu",this.onContextMenu),this.controls?.dispose(),this.scene?.traverse(i=>{if(i.geometry?.dispose?.(),i.material){let r=i.material;(Array.isArray(r)?r:[r]).forEach(a=>a.dispose?.())}}),Object.values(this.texCache).forEach(i=>i.dispose()),this.texCache={},this.renderer.dispose(),this.renderer.forceContextLoss(),n.remove(),this.renderer=void 0}this.fadeMats=[],this.bridges=[],this.glowMats.forEach(n=>n.dispose()),this.glowMats.clear(),this.glowDimMat?.dispose(),this.glowDimMat=void 0,this.glowAnim=[],this.pool=[],this.active.clear(),this.sEls=[],this.aEls=[],this.sectorAnchor=[],this.selected=null,this.tween=null,this.lodT=0,this.press=null,this.drag=null,this.edgeIndex.clear(),this.uiCard=void 0,this.pill=void 0,this.noteCard=void 0,this.lensChair=null,this.lensCast=[],this.viewDots=[],this.mirrorEl=void 0,this.lensSelect=void 0,t&&this.root?(this.root.empty(),this.labelLayer=this.root.createDiv({cls:"eve-labels"})):this.root&&(Array.from(this.root.children).forEach(n=>n.remove()),this.labelLayer=this.root.createDiv({cls:"eve-labels"}))}};me(Hr,"SIL_MARK_ANCHOR",{round:{apple:[.63,.3],flower:[.37,.3]},apple:{apple:[.62,.35],flower:[.38,.35]},conifer:{apple:[.6,.56],flower:[.4,.6]}});var kr=Hr;var ih={onlyTreeNotes:!0,forestByFolder:!0,clusterLinkedDots:!0},Vr=class extends Hn.Plugin{constructor(){super(...arguments);me(this,"settings",ih)}async onload(){await this.loadSettings(),this.registerView(Ms,t=>new kr(t,this.settings,()=>this.saveSettings())),this.addRibbonIcon("sprout","Open Eve's Apple Tree",()=>this.activateView()),this.addCommand({id:"open-eve-apple-tree",name:"Open the tree of light",callback:()=>this.activateView()}),this.addSettingTab(new Ua(this.app,this))}async activateView(){let{workspace:t}=this.app,n=t.getLeavesOfType(Ms)[0]??null;n||(n=t.getLeaf(!0),await n.setViewState({type:Ms,active:!0})),await t.revealLeaf(n)}async loadSettings(){this.settings=Object.assign({},ih,await this.loadData());let t=this.settings;t.treeScale!==void 0&&(delete t.treeScale,await this.saveSettings())}async saveSettings(){await this.saveData(this.settings)}},Ua=class extends Hn.PluginSettingTab{constructor(t,n){super(t,n);me(this,"plugin");this.plugin=n}display(){let{containerEl:t}=this;t.empty(),t.createEl("p",{text:"Your notes grow into a living 3D tree of light. Notes are placed by their frontmatter: tree_type (root/trunk/leaf/flower/apple), field (sector), and time (height). Links become branches; cross-field links become rhizome. Open the tree from the ribbon (sprout icon) or the command palette."}),new Hn.Setting(t).setName("Only show notes with tree frontmatter").setDesc("When on, the tree renders only notes that have tree_type / field / time / flower frontmatter \u2014 keeps the view clean in a mixed vault. Click 'Rebuild from vault' in the view after changing.").addToggle(n=>n.setValue(this.plugin.settings.onlyTreeNotes).onChange(async i=>{this.plugin.settings.onlyTreeNotes=i,await this.plugin.saveSettings()})),new Hn.Setting(t).setName("Forest mode \u2014 one folder = one tree").setDesc("When on (recommended), each top-level folder becomes its own independent tree, arranged side by side as a forest. When off, the whole vault is a single tree. Click 'Rebuild from vault' in the view after changing.").addToggle(n=>n.setValue(this.plugin.settings.forestByFolder).onChange(async i=>{this.plugin.settings.forestByFolder=i,await this.plugin.saveSettings()})),new Hn.Setting(t).setName("Cluster linked dots").setDesc("When on (recommended), dots in the same field that link to each other are pulled together into clusters, while unrelated dots sit further apart \u2014 keeping the field wedges but making related ideas group. Turn off for a purely even spread. Skipped automatically for trees over 500 notes to keep Obsidian responsive. Click 'Rebuild from vault' in the view after changing.").addToggle(n=>n.setValue(this.plugin.settings.clusterLinkedDots).onChange(async i=>{this.plugin.settings.clusterLinkedDots=i,await this.plugin.saveSettings()}))}};
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
