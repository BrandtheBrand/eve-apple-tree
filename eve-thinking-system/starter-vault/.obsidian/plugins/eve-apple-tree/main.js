var Ls=Object.defineProperty;var zh=Object.getOwnPropertyDescriptor;var kh=Object.getOwnPropertyNames;var Hh=Object.prototype.hasOwnProperty;var Vh=(s,e,t)=>e in s?Ls(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var Gh=(s,e)=>{for(var t in e)Ls(s,t,{get:e[t],enumerable:!0})},Wh=(s,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of kh(e))!Hh.call(s,i)&&i!==t&&Ls(s,i,{get:()=>e[i],enumerable:!(n=zh(e,i))||n.enumerable});return s};var Xh=s=>Wh(Ls({},"__esModule",{value:!0}),s);var ue=(s,e,t)=>(Vh(s,typeof e!="symbol"?e+"":e,t),t);var t_={};Gh(t_,{default:()=>qr});module.exports=Xh(t_);var Rn=require("obsidian");var rn=require("obsidian");var Ta="160",tn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},li={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Yh=0,ja=1,qh=2;var Pc=1,Zh=2,yn=3,kn=0,Tt=1,Zt=2;var On=0,Vt=1,ni=2,Qa=3,el=4,Jh=5,$n=100,$h=101,Kh=102,tl=103,nl=104,jh=200,Qh=201,eu=202,tu=203,Do=204,No=205,nu=206,iu=207,su=208,ru=209,ou=210,au=211,lu=212,cu=213,hu=214,uu=0,du=1,fu=2,lr=3,pu=4,mu=5,gu=6,_u=7,Lc=0,xu=1,vu=2,Fn=0,yu=1,Mu=2,bu=3,Eu=4,Su=5,Tu=6;var Ic=300,Fi=301,Bi=302,Uo=303,Oo=304,Br=306,Fo=1e3,Jt=1001,Bo=1002,Ct=1003,il=1004;var jr=1005;var kt=1006,wu=1007;var ls=1008;var Bn=1009,Au=1010,Ru=1011,wa=1012,Dc=1013,Nn=1014,Un=1015,cs=1016,Nc=1017,Uc=1018,Qn=1020,Cu=1021,$t=1023,Pu=1024,Lu=1025,ei=1026,zi=1027,Iu=1028,Oc=1029,Du=1030,Fc=1031,Bc=1033,Qr=33776,eo=33777,to=33778,no=33779,sl=35840,rl=35841,ol=35842,al=35843,zc=36196,ll=37492,cl=37496,hl=37808,ul=37809,dl=37810,fl=37811,pl=37812,ml=37813,gl=37814,_l=37815,xl=37816,vl=37817,yl=37818,Ml=37819,bl=37820,El=37821,io=36492,Sl=36494,Tl=36495,Nu=36283,wl=36284,Al=36285,Rl=36286;var cr=2300,hr=2301,so=2302,Cl=2400,Pl=2401,Ll=2402;var kc=3e3,ti=3001,Uu=3200,Ou=3201,Fu=0,Bu=1,Ht="",yt="srgb",bn="srgb-linear",Aa="display-p3",zr="display-p3-linear",ur="linear",et="srgb",dr="rec709",fr="p3";var di=7680;var Il=519,zu=512,ku=513,Hu=514,Hc=515,Vu=516,Gu=517,Wu=518,Xu=519,zo=35044;var Dl="300 es",ko=1035,Mn=2e3,pr=2001,hn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},Et=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nl=1234567,ns=Math.PI/180,hs=180/Math.PI;function cn(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Et[s&255]+Et[s>>8&255]+Et[s>>16&255]+Et[s>>24&255]+"-"+Et[e&255]+Et[e>>8&255]+"-"+Et[e>>16&15|64]+Et[e>>24&255]+"-"+Et[t&63|128]+Et[t>>8&255]+"-"+Et[t>>16&255]+Et[t>>24&255]+Et[n&255]+Et[n>>8&255]+Et[n>>16&255]+Et[n>>24&255]).toLowerCase()}function _t(s,e,t){return Math.max(e,Math.min(t,s))}function Ra(s,e){return(s%e+e)%e}function Yu(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function qu(s,e,t){return s!==e?(t-s)/(e-s):0}function is(s,e,t){return(1-t)*s+t*e}function Zu(s,e,t,n){return is(s,e,1-Math.exp(-t*n))}function Ju(s,e=1){return e-Math.abs(Ra(s,e*2)-e)}function $u(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Ku(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function ju(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Qu(s,e){return s+Math.random()*(e-s)}function ed(s){return s*(.5-Math.random())}function td(s){s!==void 0&&(Nl=s);let e=Nl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function nd(s){return s*ns}function id(s){return s*hs}function Ho(s){return(s&s-1)===0&&s!==0}function sd(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function mr(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function rd(s,e,t,n,i){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),m=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*h,l*u,l*d,a*c);break;case"YZY":s.set(l*d,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*d,a*h,a*c);break;case"XZX":s.set(a*h,l*g,l*m,a*c);break;case"YXY":s.set(l*m,a*h,l*g,a*c);break;case"ZYZ":s.set(l*g,l*m,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ln(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ke(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Ms={DEG2RAD:ns,RAD2DEG:hs,generateUUID:cn,clamp:_t,euclideanModulo:Ra,mapLinear:Yu,inverseLerp:qu,lerp:is,damp:Zu,pingpong:Ju,smoothstep:$u,smootherstep:Ku,randInt:ju,randFloat:Qu,randFloatSpread:ed,seededRandom:td,degToRad:nd,radToDeg:id,isPowerOfTwo:Ho,ceilPowerOfTwo:sd,floorPowerOfTwo:mr,setQuaternionFromProperEuler:rd,normalize:Ke,denormalize:ln},oe=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(_t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ye=class s{constructor(e,t,n,i,r,o,a,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],m=n[5],g=n[8],_=i[0],f=i[3],p=i[6],y=i[1],x=i[4],v=i[7],A=i[2],R=i[5],w=i[8];return r[0]=o*_+a*y+l*A,r[3]=o*f+a*x+l*R,r[6]=o*p+a*v+l*w,r[1]=c*_+h*y+u*A,r[4]=c*f+h*x+u*R,r[7]=c*p+h*v+u*w,r[2]=d*_+m*y+g*A,r[5]=d*f+m*x+g*R,r[8]=d*p+m*v+g*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,m=c*r-o*l,g=t*u+n*d+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=u*_,e[1]=(i*c-h*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(h*t-i*l)*_,e[5]=(i*r-a*t)*_,e[6]=m*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ro.makeScale(e,t)),this}rotate(e){return this.premultiply(ro.makeRotation(-e)),this}translate(e,t){return this.premultiply(ro.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ro=new Ye;function Vc(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function gr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function od(){let s=gr("canvas");return s.style.display="block",s}var Ul={};function ss(s){s in Ul||(Ul[s]=!0,console.warn(s))}var Ol=new Ye().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Fl=new Ye().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Is={[bn]:{transfer:ur,primaries:dr,toReference:s=>s,fromReference:s=>s},[yt]:{transfer:et,primaries:dr,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[zr]:{transfer:ur,primaries:fr,toReference:s=>s.applyMatrix3(Fl),fromReference:s=>s.applyMatrix3(Ol)},[Aa]:{transfer:et,primaries:fr,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Fl),fromReference:s=>s.applyMatrix3(Ol).convertLinearToSRGB()}},ad=new Set([bn,zr]),je={enabled:!0,_workingColorSpace:bn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!ad.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;let n=Is[e].toReference,i=Is[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Is[s].primaries},getTransfer:function(s){return s===Ht?ur:Is[s].transfer}};function Ui(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function oo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var fi,_r=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{fi===void 0&&(fi=gr("canvas")),fi.width=e.width,fi.height=e.height;let n=fi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=fi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=gr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Ui(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ui(t[n]/255)*255):t[n]=Ui(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},ld=0,xr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ld++}),this.uuid=cn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(ao(i[o].image)):r.push(ao(i[o]))}else r=ao(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function ao(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?_r.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var cd=0,Gt=class s extends hn{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=Jt,i=Jt,r=kt,o=ls,a=$t,l=Bn,c=s.DEFAULT_ANISOTROPY,h=Ht){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cd++}),this.uuid=cn(),this.name="",this.source=new xr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(ss("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===ti?yt:Ht),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ic)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fo:e.x=e.x-Math.floor(e.x);break;case Jt:e.x=e.x<0?0:1;break;case Bo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fo:e.y=e.y-Math.floor(e.y);break;case Jt:e.y=e.y<0?0:1;break;case Bo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ss("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===yt?ti:kc}set encoding(e){ss("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ti?yt:Ht}};Gt.DEFAULT_IMAGE=null;Gt.DEFAULT_MAPPING=Ic;Gt.DEFAULT_ANISOTROPY=1;var Mt=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],m=l[5],g=l[9],_=l[2],f=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+f)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(c+1)/2,v=(m+1)/2,A=(p+1)/2,R=(h+d)/4,w=(u+_)/4,k=(g+f)/4;return x>v&&x>A?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=R/n,r=w/n):v>A?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=R/i,r=k/i):A<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(A),n=w/r,i=k/r),this.set(n,i,r,t),this}let y=Math.sqrt((f-g)*(f-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(f-g)/y,this.y=(u-_)/y,this.z=(d-h)/y,this.w=Math.acos((c+m+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Vo=class extends hn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t);let i={width:e,height:t,depth:1};n.encoding!==void 0&&(ss("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ti?yt:Ht),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Gt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new xr(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},En=class extends Vo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},vr=class extends Gt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Go=class extends Gt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Kt=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=r[o+0],m=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==d||c!==m||h!==g){let f=1-a,p=l*d+c*m+h*g+u*_,y=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){let A=Math.sqrt(x),R=Math.atan2(A,p*y);f=Math.sin(f*R)/A,a=Math.sin(a*R)/A}let v=a*y;if(l=l*f+d*v,c=c*f+m*v,h=h*f+g*v,u=u*f+_*v,f===1-a){let A=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=A,c*=A,h*=A,u*=A}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],d=r[o+1],m=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*m-c*d,e[t+1]=l*g+h*d+c*u-a*m,e[t+2]=c*g+h*m+a*d-l*u,e[t+3]=h*g-a*u-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),d=l(n/2),m=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u-d*m*g;break;case"YXZ":this._x=d*h*u+c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u+d*m*g;break;case"ZXY":this._x=d*h*u-c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u-d*m*g;break;case"ZYX":this._x=d*h*u-c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u+d*m*g;break;case"YZX":this._x=d*h*u+c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u-d*m*g;break;case"XZY":this._x=d*h*u-c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-i)*m}else if(n>a&&n>u){let m=2*Math.sqrt(1+n-a-u);this._w=(h-l)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(r+c)/m}else if(a>u){let m=2*Math.sqrt(1+a-n-u);this._w=(r-c)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+u-n-a);this._w=(o-i)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bl.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return lo.copy(this).projectOnVector(e),this.sub(lo)}reflect(e){return this.sub(lo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(_t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},lo=new L,Bl=new Kt,ii=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Xt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Xt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Xt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Xt):Xt.fromBufferAttribute(r,o),Xt.applyMatrix4(e.matrixWorld),this.expandByPoint(Xt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ds.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ds.copy(n.boundingBox)),Ds.applyMatrix4(e.matrixWorld),this.union(Ds)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Xt),Xt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ji),Ns.subVectors(this.max,Ji),pi.subVectors(e.a,Ji),mi.subVectors(e.b,Ji),gi.subVectors(e.c,Ji),Cn.subVectors(mi,pi),Pn.subVectors(gi,mi),Xn.subVectors(pi,gi);let t=[0,-Cn.z,Cn.y,0,-Pn.z,Pn.y,0,-Xn.z,Xn.y,Cn.z,0,-Cn.x,Pn.z,0,-Pn.x,Xn.z,0,-Xn.x,-Cn.y,Cn.x,0,-Pn.y,Pn.x,0,-Xn.y,Xn.x,0];return!co(t,pi,mi,gi,Ns)||(t=[1,0,0,0,1,0,0,0,1],!co(t,pi,mi,gi,Ns))?!1:(Us.crossVectors(Cn,Pn),t=[Us.x,Us.y,Us.z],co(t,pi,mi,gi,Ns))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},mn=[new L,new L,new L,new L,new L,new L,new L,new L],Xt=new L,Ds=new ii,pi=new L,mi=new L,gi=new L,Cn=new L,Pn=new L,Xn=new L,Ji=new L,Ns=new L,Us=new L,Yn=new L;function co(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Yn.fromArray(s,r);let a=i.x*Math.abs(Yn.x)+i.y*Math.abs(Yn.y)+i.z*Math.abs(Yn.z),l=e.dot(Yn),c=t.dot(Yn),h=n.dot(Yn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var hd=new ii,$i=new L,ho=new L,ki=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):hd.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$i.subVectors(e,this.center);let t=$i.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector($i,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ho.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($i.copy(e.center).add(ho)),this.expandByPoint($i.copy(e.center).sub(ho))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},gn=new L,uo=new L,Os=new L,Ln=new L,fo=new L,Fs=new L,po=new L,si=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=gn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gn.copy(this.origin).addScaledVector(this.direction,t),gn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){uo.copy(e).add(t).multiplyScalar(.5),Os.copy(t).sub(e).normalize(),Ln.copy(this.origin).sub(uo);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Os),a=Ln.dot(this.direction),l=-Ln.dot(Os),c=Ln.lengthSq(),h=Math.abs(1-o*o),u,d,m,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let _=1/h;u*=_,d*=_,m=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),m=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(uo).addScaledVector(Os,d),m}intersectSphere(e,t){gn.subVectors(e.center,this.origin);let n=gn.dot(this.direction),i=gn.dot(gn)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,gn)!==null}intersectTriangle(e,t,n,i,r){fo.subVectors(t,e),Fs.subVectors(n,e),po.crossVectors(fo,Fs);let o=this.direction.dot(po),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ln.subVectors(this.origin,e);let l=a*this.direction.dot(Fs.crossVectors(Ln,Fs));if(l<0)return null;let c=a*this.direction.dot(fo.cross(Ln));if(c<0||l+c>o)return null;let h=-a*Ln.dot(po);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ct=class s{constructor(e,t,n,i,r,o,a,l,c,h,u,d,m,g,_,f){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,h,u,d,m,g,_,f)}set(e,t,n,i,r,o,a,l,c,h,u,d,m,g,_,f){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=m,p[7]=g,p[11]=_,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/_i.setFromMatrixColumn(e,0).length(),r=1/_i.setFromMatrixColumn(e,1).length(),o=1/_i.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,m=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=m+g*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,m=l*u,g=c*h,_=c*u;t[0]=d+_*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=m*a-g,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,m=l*u,g=c*h,_=c*u;t[0]=d-_*a,t[4]=-o*u,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,m=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=g*c-m,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,m=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=_-d*u,t[8]=g*u+m,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=m*u+g,t[10]=d-_*u}else if(e.order==="XZY"){let d=o*l,m=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=o*h,t[9]=m*u-g,t[2]=g*u-m,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ud,e,dd)}lookAt(e,t,n){let i=this.elements;return Ut.subVectors(e,t),Ut.lengthSq()===0&&(Ut.z=1),Ut.normalize(),In.crossVectors(n,Ut),In.lengthSq()===0&&(Math.abs(n.z)===1?Ut.x+=1e-4:Ut.z+=1e-4,Ut.normalize(),In.crossVectors(n,Ut)),In.normalize(),Bs.crossVectors(Ut,In),i[0]=In.x,i[4]=Bs.x,i[8]=Ut.x,i[1]=In.y,i[5]=Bs.y,i[9]=Ut.y,i[2]=In.z,i[6]=Bs.z,i[10]=Ut.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],m=n[13],g=n[2],_=n[6],f=n[10],p=n[14],y=n[3],x=n[7],v=n[11],A=n[15],R=i[0],w=i[4],k=i[8],M=i[12],T=i[1],N=i[5],q=i[9],j=i[13],D=i[2],F=i[6],B=i[10],$=i[14],J=i[3],X=i[7],z=i[11],Y=i[15];return r[0]=o*R+a*T+l*D+c*J,r[4]=o*w+a*N+l*F+c*X,r[8]=o*k+a*q+l*B+c*z,r[12]=o*M+a*j+l*$+c*Y,r[1]=h*R+u*T+d*D+m*J,r[5]=h*w+u*N+d*F+m*X,r[9]=h*k+u*q+d*B+m*z,r[13]=h*M+u*j+d*$+m*Y,r[2]=g*R+_*T+f*D+p*J,r[6]=g*w+_*N+f*F+p*X,r[10]=g*k+_*q+f*B+p*z,r[14]=g*M+_*j+f*$+p*Y,r[3]=y*R+x*T+v*D+A*J,r[7]=y*w+x*N+v*F+A*X,r[11]=y*k+x*q+v*B+A*z,r[15]=y*M+x*j+v*$+A*Y,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],m=e[14],g=e[3],_=e[7],f=e[11],p=e[15];return g*(+r*l*u-i*c*u-r*a*d+n*c*d+i*a*m-n*l*m)+_*(+t*l*m-t*c*d+r*o*d-i*o*m+i*c*h-r*l*h)+f*(+t*c*u-t*a*m-r*o*u+n*o*m+r*a*h-n*c*h)+p*(-i*a*h-t*l*u+t*a*d+i*o*u-n*o*d+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],m=e[11],g=e[12],_=e[13],f=e[14],p=e[15],y=u*f*c-_*d*c+_*l*m-a*f*m-u*l*p+a*d*p,x=g*d*c-h*f*c-g*l*m+o*f*m+h*l*p-o*d*p,v=h*_*c-g*u*c+g*a*m-o*_*m-h*a*p+o*u*p,A=g*u*l-h*_*l-g*a*d+o*_*d+h*a*f-o*u*f,R=t*y+n*x+i*v+r*A;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/R;return e[0]=y*w,e[1]=(_*d*r-u*f*r-_*i*m+n*f*m+u*i*p-n*d*p)*w,e[2]=(a*f*r-_*l*r+_*i*c-n*f*c-a*i*p+n*l*p)*w,e[3]=(u*l*r-a*d*r-u*i*c+n*d*c+a*i*m-n*l*m)*w,e[4]=x*w,e[5]=(h*f*r-g*d*r+g*i*m-t*f*m-h*i*p+t*d*p)*w,e[6]=(g*l*r-o*f*r-g*i*c+t*f*c+o*i*p-t*l*p)*w,e[7]=(o*d*r-h*l*r+h*i*c-t*d*c-o*i*m+t*l*m)*w,e[8]=v*w,e[9]=(g*u*r-h*_*r-g*n*m+t*_*m+h*n*p-t*u*p)*w,e[10]=(o*_*r-g*a*r+g*n*c-t*_*c-o*n*p+t*a*p)*w,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*m-t*a*m)*w,e[12]=A*w,e[13]=(h*_*i-g*u*i+g*n*d-t*_*d-h*n*f+t*u*f)*w,e[14]=(g*a*i-o*_*i-g*n*l+t*_*l+o*n*f-t*a*f)*w,e[15]=(o*u*i-h*a*i+h*n*l-t*u*l-o*n*d+t*a*d)*w,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,m=r*h,g=r*u,_=o*h,f=o*u,p=a*u,y=l*c,x=l*h,v=l*u,A=n.x,R=n.y,w=n.z;return i[0]=(1-(_+p))*A,i[1]=(m+v)*A,i[2]=(g-x)*A,i[3]=0,i[4]=(m-v)*R,i[5]=(1-(d+p))*R,i[6]=(f+y)*R,i[7]=0,i[8]=(g+x)*w,i[9]=(f-y)*w,i[10]=(1-(d+_))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=_i.set(i[0],i[1],i[2]).length(),o=_i.set(i[4],i[5],i[6]).length(),a=_i.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Yt.copy(this);let c=1/r,h=1/o,u=1/a;return Yt.elements[0]*=c,Yt.elements[1]*=c,Yt.elements[2]*=c,Yt.elements[4]*=h,Yt.elements[5]*=h,Yt.elements[6]*=h,Yt.elements[8]*=u,Yt.elements[9]*=u,Yt.elements[10]*=u,t.setFromRotationMatrix(Yt),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=Mn){let l=this.elements,c=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i),m,g;if(a===Mn)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===pr)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Mn){let l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(o-r),d=(t+e)*c,m=(n+i)*h,g,_;if(a===Mn)g=(o+r)*u,_=-2*u;else if(a===pr)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},_i=new L,Yt=new ct,ud=new L(0,0,0),dd=new L(1,1,1),In=new L,Bs=new L,Ut=new L,zl=new ct,kl=new Kt,yr=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(_t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(_t(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-_t(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(_t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-_t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return zl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return kl.setFromEuler(this),this.setFromQuaternion(kl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};yr.DEFAULT_ORDER="XYZ";var us=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},fd=0,Hl=new L,xi=new Kt,_n=new ct,zs=new L,Ki=new L,pd=new L,md=new Kt,Vl=new L(1,0,0),Gl=new L(0,1,0),Wl=new L(0,0,1),gd={type:"added"},_d={type:"removed"},Ft=class s extends hn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fd++}),this.uuid=cn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new L,t=new yr,n=new Kt,i=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ct},normalMatrix:{value:new Ye}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new us,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xi.setFromAxisAngle(e,t),this.quaternion.multiply(xi),this}rotateOnWorldAxis(e,t){return xi.setFromAxisAngle(e,t),this.quaternion.premultiply(xi),this}rotateX(e){return this.rotateOnAxis(Vl,e)}rotateY(e){return this.rotateOnAxis(Gl,e)}rotateZ(e){return this.rotateOnAxis(Wl,e)}translateOnAxis(e,t){return Hl.copy(e).applyQuaternion(this.quaternion),this.position.add(Hl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Vl,e)}translateY(e){return this.translateOnAxis(Gl,e)}translateZ(e){return this.translateOnAxis(Wl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_n.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?zs.copy(e):zs.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Ki.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_n.lookAt(Ki,zs,this.up):_n.lookAt(zs,Ki,this.up),this.quaternion.setFromRotationMatrix(_n),i&&(_n.extractRotation(i.matrixWorld),xi.setFromRotationMatrix(_n),this.quaternion.premultiply(xi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(gd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_d)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_n.multiply(e.parent.matrixWorld)),e.applyMatrix4(_n),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ki,e,pd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ki,md,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++){let a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};Ft.DEFAULT_UP=new L(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var qt=new L,xn=new L,mo=new L,vn=new L,vi=new L,yi=new L,Xl=new L,go=new L,_o=new L,xo=new L,ks=!1,jn=class s{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),qt.subVectors(e,t),i.cross(qt);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){qt.subVectors(i,t),xn.subVectors(n,t),mo.subVectors(e,t);let o=qt.dot(qt),a=qt.dot(xn),l=qt.dot(mo),c=xn.dot(xn),h=xn.dot(mo),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,m=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,vn)===null?!1:vn.x>=0&&vn.y>=0&&vn.x+vn.y<=1}static getUV(e,t,n,i,r,o,a,l){return ks===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ks=!0),this.getInterpolation(e,t,n,i,r,o,a,l)}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,vn.x),l.addScaledVector(o,vn.y),l.addScaledVector(a,vn.z),l)}static isFrontFacing(e,t,n,i){return qt.subVectors(n,t),xn.subVectors(e,t),qt.cross(xn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qt.subVectors(this.c,this.b),xn.subVectors(this.a,this.b),qt.cross(xn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return ks===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ks=!0),s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;vi.subVectors(i,n),yi.subVectors(r,n),go.subVectors(e,n);let l=vi.dot(go),c=yi.dot(go);if(l<=0&&c<=0)return t.copy(n);_o.subVectors(e,i);let h=vi.dot(_o),u=yi.dot(_o);if(h>=0&&u<=h)return t.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(vi,o);xo.subVectors(e,r);let m=vi.dot(xo),g=yi.dot(xo);if(g>=0&&m<=g)return t.copy(r);let _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(yi,a);let f=h*g-m*u;if(f<=0&&u-h>=0&&m-g>=0)return Xl.subVectors(r,i),a=(u-h)/(u-h+(m-g)),t.copy(i).addScaledVector(Xl,a);let p=1/(f+_+d);return o=_*p,a=d*p,t.copy(n).addScaledVector(vi,o).addScaledVector(yi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Gc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dn={h:0,s:0,l:0},Hs={h:0,s:0,l:0};function vo(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Be=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=je.workingColorSpace){return this.r=e,this.g=t,this.b=n,je.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=je.workingColorSpace){if(e=Ra(e,1),t=_t(t,0,1),n=_t(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=vo(o,r,e+1/3),this.g=vo(o,r,e),this.b=vo(o,r,e-1/3)}return je.toWorkingColorSpace(this,i),this}setStyle(e,t=yt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yt){let n=Gc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ui(e.r),this.g=Ui(e.g),this.b=Ui(e.b),this}copyLinearToSRGB(e){return this.r=oo(e.r),this.g=oo(e.g),this.b=oo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yt){return je.fromWorkingColorSpace(St.copy(this),e),Math.round(_t(St.r*255,0,255))*65536+Math.round(_t(St.g*255,0,255))*256+Math.round(_t(St.b*255,0,255))}getHexString(e=yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.fromWorkingColorSpace(St.copy(this),t);let n=St.r,i=St.g,r=St.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=je.workingColorSpace){return je.fromWorkingColorSpace(St.copy(this),t),e.r=St.r,e.g=St.g,e.b=St.b,e}getStyle(e=yt){je.fromWorkingColorSpace(St.copy(this),e);let t=St.r,n=St.g,i=St.b;return e!==yt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Dn),this.setHSL(Dn.h+e,Dn.s+t,Dn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Dn),e.getHSL(Hs);let n=is(Dn.h,Hs.h,t),i=is(Dn.s,Hs.s,t),r=is(Dn.l,Hs.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},St=new Be;Be.NAMES=Gc;var xd=0,Hn=class extends hn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=cn(),this.name="",this.type="Material",this.blending=Vt,this.side=kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Do,this.blendDst=No,this.blendEquation=$n,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=lr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Il,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=di,this.stencilZFail=di,this.stencilZPass=di,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Vt&&(n.blending=this.blending),this.side!==kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Do&&(n.blendSrc=this.blendSrc),this.blendDst!==No&&(n.blendDst=this.blendDst),this.blendEquation!==$n&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==lr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Il&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==di&&(n.stencilFail=this.stencilFail),this.stencilZFail!==di&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==di&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Vn=class extends Hn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Lc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var ut=new L,Vs=new oe,xt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=zo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Un,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Vs.fromBufferAttribute(this,t),Vs.applyMatrix3(e),this.setXY(t,Vs.x,Vs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix3(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix4(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyNormalMatrix(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.transformDirection(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ln(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ke(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ln(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ln(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ln(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ln(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),i=Ke(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),i=Ke(i,this.array),r=Ke(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==zo&&(e.usage=this.usage),e}};var Mr=class extends xt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var br=class extends xt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var wt=class extends xt{constructor(e,t,n){super(new Float32Array(e),t,n)}};var vd=0,zt=new ct,yo=new Ft,Mi=new L,Ot=new ii,ji=new ii,gt=new L,vt=class s extends hn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vd++}),this.uuid=cn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vc(e)?br:Mr)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ye().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zt.makeRotationFromQuaternion(e),this.applyMatrix4(zt),this}rotateX(e){return zt.makeRotationX(e),this.applyMatrix4(zt),this}rotateY(e){return zt.makeRotationY(e),this.applyMatrix4(zt),this}rotateZ(e){return zt.makeRotationZ(e),this.applyMatrix4(zt),this}translate(e,t,n){return zt.makeTranslation(e,t,n),this.applyMatrix4(zt),this}scale(e,t,n){return zt.makeScale(e,t,n),this.applyMatrix4(zt),this}lookAt(e){return yo.lookAt(e),yo.updateMatrix(),this.applyMatrix4(yo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mi).negate(),this.translate(Mi.x,Mi.y,Mi.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new wt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ii);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];Ot.setFromBufferAttribute(r),this.morphTargetsRelative?(gt.addVectors(this.boundingBox.min,Ot.min),this.boundingBox.expandByPoint(gt),gt.addVectors(this.boundingBox.max,Ot.max),this.boundingBox.expandByPoint(gt)):(this.boundingBox.expandByPoint(Ot.min),this.boundingBox.expandByPoint(Ot.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ki);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(Ot.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];ji.setFromBufferAttribute(a),this.morphTargetsRelative?(gt.addVectors(Ot.min,ji.min),Ot.expandByPoint(gt),gt.addVectors(Ot.max,ji.max),Ot.expandByPoint(gt)):(Ot.expandByPoint(ji.min),Ot.expandByPoint(ji.max))}Ot.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)gt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(gt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)gt.fromBufferAttribute(a,c),l&&(Mi.fromBufferAttribute(e,c),gt.add(Mi)),i=Math.max(i,n.distanceToSquared(gt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xt(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let T=0;T<a;T++)c[T]=new L,h[T]=new L;let u=new L,d=new L,m=new L,g=new oe,_=new oe,f=new oe,p=new L,y=new L;function x(T,N,q){u.fromArray(i,T*3),d.fromArray(i,N*3),m.fromArray(i,q*3),g.fromArray(o,T*2),_.fromArray(o,N*2),f.fromArray(o,q*2),d.sub(u),m.sub(u),_.sub(g),f.sub(g);let j=1/(_.x*f.y-f.x*_.y);isFinite(j)&&(p.copy(d).multiplyScalar(f.y).addScaledVector(m,-_.y).multiplyScalar(j),y.copy(m).multiplyScalar(_.x).addScaledVector(d,-f.x).multiplyScalar(j),c[T].add(p),c[N].add(p),c[q].add(p),h[T].add(y),h[N].add(y),h[q].add(y))}let v=this.groups;v.length===0&&(v=[{start:0,count:n.length}]);for(let T=0,N=v.length;T<N;++T){let q=v[T],j=q.start,D=q.count;for(let F=j,B=j+D;F<B;F+=3)x(n[F+0],n[F+1],n[F+2])}let A=new L,R=new L,w=new L,k=new L;function M(T){w.fromArray(r,T*3),k.copy(w);let N=c[T];A.copy(N),A.sub(w.multiplyScalar(w.dot(N))).normalize(),R.crossVectors(k,N);let j=R.dot(h[T])<0?-1:1;l[T*4]=A.x,l[T*4+1]=A.y,l[T*4+2]=A.z,l[T*4+3]=j}for(let T=0,N=v.length;T<N;++T){let q=v[T],j=q.start,D=q.count;for(let F=j,B=j+D;F<B;F+=3)M(n[F+0]),M(n[F+1]),M(n[F+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new xt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);let i=new L,r=new L,o=new L,a=new L,l=new L,c=new L,h=new L,u=new L;if(e)for(let d=0,m=e.count;d<m;d+=3){let g=e.getX(d+0),_=e.getX(d+1),f=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,f),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,f),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)gt.fromBufferAttribute(e,t),gt.normalize(),e.setXYZ(t,gt.x,gt.y,gt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),m=0,g=0;for(let _=0,f=l.length;_<f;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*h;for(let p=0;p<h;p++)d[g++]=c[m++]}return new xt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],m=e(d,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let m=c[u];h.push(m.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Yl=new ct,qn=new si,Gs=new ki,ql=new L,bi=new L,Ei=new L,Si=new L,Mo=new L,Ws=new L,Xs=new oe,Ys=new oe,qs=new oe,Zl=new L,Jl=new L,$l=new L,Zs=new L,Js=new L,It=class extends Ft{constructor(e=new vt,t=new Vn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){Ws.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Mo.fromBufferAttribute(u,e),o?Ws.addScaledVector(Mo,h):Ws.addScaledVector(Mo.sub(t),h))}t.add(Ws)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Gs.copy(n.boundingSphere),Gs.applyMatrix4(r),qn.copy(e.ray).recast(e.near),!(Gs.containsPoint(qn.origin)===!1&&(qn.intersectSphere(Gs,ql)===null||qn.origin.distanceToSquared(ql)>(e.far-e.near)**2))&&(Yl.copy(r).invert(),qn.copy(e.ray).applyMatrix4(Yl),!(n.boundingBox!==null&&qn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,qn)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let f=d[g],p=o[f.materialIndex],y=Math.max(f.start,m.start),x=Math.min(a.count,Math.min(f.start+f.count,m.start+m.count));for(let v=y,A=x;v<A;v+=3){let R=a.getX(v),w=a.getX(v+1),k=a.getX(v+2);i=$s(this,p,e,n,c,h,u,R,w,k),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=f.materialIndex,t.push(i))}}else{let g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let f=g,p=_;f<p;f+=3){let y=a.getX(f),x=a.getX(f+1),v=a.getX(f+2);i=$s(this,o,e,n,c,h,u,y,x,v),i&&(i.faceIndex=Math.floor(f/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let f=d[g],p=o[f.materialIndex],y=Math.max(f.start,m.start),x=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let v=y,A=x;v<A;v+=3){let R=v,w=v+1,k=v+2;i=$s(this,p,e,n,c,h,u,R,w,k),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=f.materialIndex,t.push(i))}}else{let g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let f=g,p=_;f<p;f+=3){let y=f,x=f+1,v=f+2;i=$s(this,o,e,n,c,h,u,y,x,v),i&&(i.faceIndex=Math.floor(f/3),t.push(i))}}}};function yd(s,e,t,n,i,r,o,a){let l;if(e.side===Tt?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===kn,a),l===null)return null;Js.copy(a),Js.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(Js);return c<t.near||c>t.far?null:{distance:c,point:Js.clone(),object:s}}function $s(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,bi),s.getVertexPosition(l,Ei),s.getVertexPosition(c,Si);let h=yd(s,e,t,n,bi,Ei,Si,Zs);if(h){i&&(Xs.fromBufferAttribute(i,a),Ys.fromBufferAttribute(i,l),qs.fromBufferAttribute(i,c),h.uv=jn.getInterpolation(Zs,bi,Ei,Si,Xs,Ys,qs,new oe)),r&&(Xs.fromBufferAttribute(r,a),Ys.fromBufferAttribute(r,l),qs.fromBufferAttribute(r,c),h.uv1=jn.getInterpolation(Zs,bi,Ei,Si,Xs,Ys,qs,new oe),h.uv2=h.uv1),o&&(Zl.fromBufferAttribute(o,a),Jl.fromBufferAttribute(o,l),$l.fromBufferAttribute(o,c),h.normal=jn.getInterpolation(Zs,bi,Ei,Si,Zl,Jl,$l,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new L,materialIndex:0};jn.getNormal(bi,Ei,Si,u.normal),h.face=u}return h}var ds=class s extends vt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,m=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new wt(c,3)),this.setAttribute("normal",new wt(h,3)),this.setAttribute("uv",new wt(u,2));function g(_,f,p,y,x,v,A,R,w,k,M){let T=v/w,N=A/k,q=v/2,j=A/2,D=R/2,F=w+1,B=k+1,$=0,J=0,X=new L;for(let z=0;z<B;z++){let Y=z*N-j;for(let se=0;se<F;se++){let H=se*T-q;X[_]=H*y,X[f]=Y*x,X[p]=D,c.push(X.x,X.y,X.z),X[_]=0,X[f]=0,X[p]=R>0?1:-1,h.push(X.x,X.y,X.z),u.push(se/w),u.push(1-z/k),$+=1}}for(let z=0;z<k;z++)for(let Y=0;Y<w;Y++){let se=d+Y+F*z,H=d+Y+F*(z+1),Q=d+(Y+1)+F*(z+1),de=d+(Y+1)+F*z;l.push(se,H,de),l.push(H,Q,de),J+=6}a.addGroup(m,J,M),m+=J,d+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Hi(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Rt(s){let e={};for(let t=0;t<s.length;t++){let n=Hi(s[t]);for(let i in n)e[i]=n[i]}return e}function Md(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Wc(s){return s.getRenderTarget()===null?s.outputColorSpace:je.workingColorSpace}var bd={clone:Hi,merge:Rt},Ed=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Sn=class extends Hn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ed,this.fragmentShader=Sd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hi(e.uniforms),this.uniformsGroups=Md(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Er=class extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=Mn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Pt=class extends Er{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=hs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ns*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hs*2*Math.atan(Math.tan(ns*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ns*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ti=-90,wi=1,Wo=class extends Ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Pt(Ti,wi,e,t);i.layers=this.layers,this.add(i);let r=new Pt(Ti,wi,e,t);r.layers=this.layers,this.add(r);let o=new Pt(Ti,wi,e,t);o.layers=this.layers,this.add(o);let a=new Pt(Ti,wi,e,t);a.layers=this.layers,this.add(a);let l=new Pt(Ti,wi,e,t);l.layers=this.layers,this.add(l);let c=new Pt(Ti,wi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Mn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===pr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Sr=class extends Gt{constructor(e,t,n,i,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Fi,super(e,t,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Xo=class extends En{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(ss("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ti?yt:Ht),this.texture=new Sr(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:kt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ds(5,5,5),r=new Sn({name:"CubemapFromEquirect",uniforms:Hi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Tt,blending:On});r.uniforms.tEquirect.value=t;let o=new It(i,r),a=t.minFilter;return t.minFilter===ls&&(t.minFilter=kt),new Wo(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}},bo=new L,Td=new L,wd=new Ye,Lt=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=bo.subVectors(n,t).cross(Td.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(bo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||wd.getNormalMatrix(e),i=this.coplanarPoint(bo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Zn=new ki,Ks=new L,Vi=class{constructor(e=new Lt,t=new Lt,n=new Lt,i=new Lt,r=new Lt,o=new Lt){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Mn){let n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],m=i[8],g=i[9],_=i[10],f=i[11],p=i[12],y=i[13],x=i[14],v=i[15];if(n[0].setComponents(l-r,d-c,f-m,v-p).normalize(),n[1].setComponents(l+r,d+c,f+m,v+p).normalize(),n[2].setComponents(l+o,d+h,f+g,v+y).normalize(),n[3].setComponents(l-o,d-h,f-g,v-y).normalize(),n[4].setComponents(l-a,d-u,f-_,v-x).normalize(),t===Mn)n[5].setComponents(l+a,d+u,f+_,v+x).normalize();else if(t===pr)n[5].setComponents(a,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Zn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zn)}intersectsSprite(e){return Zn.center.set(0,0,0),Zn.radius=.7071067811865476,Zn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zn)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Ks.x=i.normal.x>0?e.max.x:e.min.x,Ks.y=i.normal.y>0?e.max.y:e.min.y,Ks.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ks)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Xc(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Ad(s,e){let t=e.isWebGL2,n=new WeakMap;function i(c,h){let u=c.array,d=c.usage,m=u.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,u,d),c.onUploadCallback();let _;if(u instanceof Float32Array)_=s.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=s.SHORT;else if(u instanceof Uint32Array)_=s.UNSIGNED_INT;else if(u instanceof Int32Array)_=s.INT;else if(u instanceof Int8Array)_=s.BYTE;else if(u instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,h,u){let d=h.array,m=h._updateRange,g=h.updateRanges;if(s.bindBuffer(u,c),m.count===-1&&g.length===0&&s.bufferSubData(u,0,d),g.length!==0){for(let _=0,f=g.length;_<f;_++){let p=g[_];t?s.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):s.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}m.count!==-1&&(t?s.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):s.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(s.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);if(u===void 0)n.set(c,i(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}var fs=class s extends vt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,d=t/l,m=[],g=[],_=[],f=[];for(let p=0;p<h;p++){let y=p*d-o;for(let x=0;x<c;x++){let v=x*u-r;g.push(v,-y,0),_.push(0,0,1),f.push(x/a),f.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){let x=y+c*p,v=y+c*(p+1),A=y+1+c*(p+1),R=y+1+c*p;m.push(x,v,R),m.push(v,A,R)}this.setIndex(m),this.setAttribute("position",new wt(g,3)),this.setAttribute("normal",new wt(_,3)),this.setAttribute("uv",new wt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},Rd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cd=`#ifdef USE_ALPHAHASH
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
#endif`,Pd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ld=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Id=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Dd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Nd=`#ifdef USE_AOMAP
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
#endif`,Ud=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Od=`#ifdef USE_BATCHING
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
#endif`,Fd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Bd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Hd=`#ifdef USE_IRIDESCENCE
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
#endif`,Vd=`#ifdef USE_BUMPMAP
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
#endif`,Gd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Wd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Zd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Jd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,$d=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Kd=`#define PI 3.141592653589793
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
} // validated`,jd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Qd=`vec3 transformedNormal = objectNormal;
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
#endif`,ef=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rf="gl_FragColor = linearToOutputTexel( gl_FragColor );",of=`
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
}`,af=`#ifdef USE_ENVMAP
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
#endif`,lf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cf=`#ifdef USE_ENVMAP
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
#endif`,hf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,uf=`#ifdef USE_ENVMAP
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
#endif`,df=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ff=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gf=`#ifdef USE_GRADIENTMAP
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
}`,_f=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,xf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Mf=`uniform bool receiveShadow;
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
#endif`,bf=`#ifdef USE_ENVMAP
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
#endif`,Ef=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Af=`PhysicalMaterial material;
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
#endif`,Rf=`struct PhysicalMaterial {
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
}`,Cf=`
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
#endif`,Pf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Lf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,If=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Df=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Uf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Of=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ff=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,zf=`#if defined( USE_POINTS_UV )
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
#endif`,kf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vf=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gf=`#ifdef USE_MORPHNORMALS
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
#endif`,Wf=`#ifdef USE_MORPHTARGETS
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
#endif`,Xf=`#ifdef USE_MORPHTARGETS
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
#endif`,Yf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,qf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Zf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$f=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Kf=`#ifdef USE_NORMALMAP
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
#endif`,jf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ep=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,np=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ip=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,sp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,op=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ap=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,up=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,fp=`float getShadowMask() {
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
}`,pp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mp=`#ifdef USE_SKINNING
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
#endif`,gp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_p=`#ifdef USE_SKINNING
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
#endif`,xp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,bp=`#ifdef USE_TRANSMISSION
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
#endif`,Ep=`#ifdef USE_TRANSMISSION
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
#endif`,Sp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ap=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Rp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cp=`uniform sampler2D t2D;
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
}`,Pp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ip=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Np=`#include <common>
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
}`,Up=`#if DEPTH_PACKING == 3200
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
}`,Op=`#define DISTANCE
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
}`,Fp=`#define DISTANCE
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
}`,Bp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kp=`uniform float scale;
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
}`,Hp=`uniform vec3 diffuse;
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
}`,Vp=`#include <common>
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
}`,Gp=`uniform vec3 diffuse;
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
}`,Wp=`#define LAMBERT
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
}`,Xp=`#define LAMBERT
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
}`,Yp=`#define MATCAP
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
}`,qp=`#define MATCAP
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
}`,Zp=`#define NORMAL
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
}`,Jp=`#define NORMAL
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
}`,$p=`#define PHONG
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
}`,Kp=`#define PHONG
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
}`,jp=`#define STANDARD
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
}`,Qp=`#define STANDARD
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
}`,em=`#define TOON
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
}`,tm=`#define TOON
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
}`,nm=`uniform float size;
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
}`,im=`uniform vec3 diffuse;
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
}`,sm=`#include <common>
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
}`,rm=`uniform vec3 color;
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
}`,om=`uniform float rotation;
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
}`,am=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:Rd,alphahash_pars_fragment:Cd,alphamap_fragment:Pd,alphamap_pars_fragment:Ld,alphatest_fragment:Id,alphatest_pars_fragment:Dd,aomap_fragment:Nd,aomap_pars_fragment:Ud,batching_pars_vertex:Od,batching_vertex:Fd,begin_vertex:Bd,beginnormal_vertex:zd,bsdfs:kd,iridescence_fragment:Hd,bumpmap_pars_fragment:Vd,clipping_planes_fragment:Gd,clipping_planes_pars_fragment:Wd,clipping_planes_pars_vertex:Xd,clipping_planes_vertex:Yd,color_fragment:qd,color_pars_fragment:Zd,color_pars_vertex:Jd,color_vertex:$d,common:Kd,cube_uv_reflection_fragment:jd,defaultnormal_vertex:Qd,displacementmap_pars_vertex:ef,displacementmap_vertex:tf,emissivemap_fragment:nf,emissivemap_pars_fragment:sf,colorspace_fragment:rf,colorspace_pars_fragment:of,envmap_fragment:af,envmap_common_pars_fragment:lf,envmap_pars_fragment:cf,envmap_pars_vertex:hf,envmap_physical_pars_fragment:bf,envmap_vertex:uf,fog_vertex:df,fog_pars_vertex:ff,fog_fragment:pf,fog_pars_fragment:mf,gradientmap_pars_fragment:gf,lightmap_fragment:_f,lightmap_pars_fragment:xf,lights_lambert_fragment:vf,lights_lambert_pars_fragment:yf,lights_pars_begin:Mf,lights_toon_fragment:Ef,lights_toon_pars_fragment:Sf,lights_phong_fragment:Tf,lights_phong_pars_fragment:wf,lights_physical_fragment:Af,lights_physical_pars_fragment:Rf,lights_fragment_begin:Cf,lights_fragment_maps:Pf,lights_fragment_end:Lf,logdepthbuf_fragment:If,logdepthbuf_pars_fragment:Df,logdepthbuf_pars_vertex:Nf,logdepthbuf_vertex:Uf,map_fragment:Of,map_pars_fragment:Ff,map_particle_fragment:Bf,map_particle_pars_fragment:zf,metalnessmap_fragment:kf,metalnessmap_pars_fragment:Hf,morphcolor_vertex:Vf,morphnormal_vertex:Gf,morphtarget_pars_vertex:Wf,morphtarget_vertex:Xf,normal_fragment_begin:Yf,normal_fragment_maps:qf,normal_pars_fragment:Zf,normal_pars_vertex:Jf,normal_vertex:$f,normalmap_pars_fragment:Kf,clearcoat_normal_fragment_begin:jf,clearcoat_normal_fragment_maps:Qf,clearcoat_pars_fragment:ep,iridescence_pars_fragment:tp,opaque_fragment:np,packing:ip,premultiplied_alpha_fragment:sp,project_vertex:rp,dithering_fragment:op,dithering_pars_fragment:ap,roughnessmap_fragment:lp,roughnessmap_pars_fragment:cp,shadowmap_pars_fragment:hp,shadowmap_pars_vertex:up,shadowmap_vertex:dp,shadowmask_pars_fragment:fp,skinbase_vertex:pp,skinning_pars_vertex:mp,skinning_vertex:gp,skinnormal_vertex:_p,specularmap_fragment:xp,specularmap_pars_fragment:vp,tonemapping_fragment:yp,tonemapping_pars_fragment:Mp,transmission_fragment:bp,transmission_pars_fragment:Ep,uv_pars_fragment:Sp,uv_pars_vertex:Tp,uv_vertex:wp,worldpos_vertex:Ap,background_vert:Rp,background_frag:Cp,backgroundCube_vert:Pp,backgroundCube_frag:Lp,cube_vert:Ip,cube_frag:Dp,depth_vert:Np,depth_frag:Up,distanceRGBA_vert:Op,distanceRGBA_frag:Fp,equirect_vert:Bp,equirect_frag:zp,linedashed_vert:kp,linedashed_frag:Hp,meshbasic_vert:Vp,meshbasic_frag:Gp,meshlambert_vert:Wp,meshlambert_frag:Xp,meshmatcap_vert:Yp,meshmatcap_frag:qp,meshnormal_vert:Zp,meshnormal_frag:Jp,meshphong_vert:$p,meshphong_frag:Kp,meshphysical_vert:jp,meshphysical_frag:Qp,meshtoon_vert:em,meshtoon_frag:tm,points_vert:nm,points_frag:im,shadow_vert:sm,shadow_frag:rm,sprite_vert:om,sprite_frag:am},fe={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},an={basic:{uniforms:Rt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Rt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Be(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Rt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Rt([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Rt([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Be(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Rt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Rt([fe.points,fe.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Rt([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Rt([fe.common,fe.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Rt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Rt([fe.sprite,fe.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:Rt([fe.common,fe.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:Rt([fe.lights,fe.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};an.physical={uniforms:Rt([an.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};var js={r:0,b:0,g:0};function lm(s,e,t,n,i,r,o){let a=new Be(0),l=r===!0?0:1,c,h,u=null,d=0,m=null;function g(f,p){let y=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?t:e).get(x)),x===null?_(a,l):x&&x.isColor&&(_(x,1),y=!0);let v=s.xr.getEnvironmentBlendMode();v==="additive"?n.buffers.color.setClear(0,0,0,1,o):v==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||y)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Br)?(h===void 0&&(h=new It(new ds(1,1,1),new Sn({name:"BackgroundCubeMaterial",uniforms:Hi(an.backgroundCube.uniforms),vertexShader:an.backgroundCube.vertexShader,fragmentShader:an.backgroundCube.fragmentShader,side:Tt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,R,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=je.getTransfer(x.colorSpace)!==et,(u!==x||d!==x.version||m!==s.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,m=s.toneMapping),h.layers.enableAll(),f.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new It(new fs(2,2),new Sn({name:"BackgroundMaterial",uniforms:Hi(an.background.uniforms),vertexShader:an.background.vertexShader,fragmentShader:an.background.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=je.getTransfer(x.colorSpace)!==et,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||m!==s.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,m=s.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null))}function _(f,p){f.getRGB(js,Wc(s)),n.buffers.color.setClear(js.r,js.g,js.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(f,p=1){a.set(f),l=p,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(f){l=f,_(a,l)},render:g}}function cm(s,e,t,n){let i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=f(null),c=l,h=!1;function u(D,F,B,$,J){let X=!1;if(o){let z=_($,B,F);c!==z&&(c=z,m(c.object)),X=p(D,$,B,J),X&&y(D,$,B,J)}else{let z=F.wireframe===!0;(c.geometry!==$.id||c.program!==B.id||c.wireframe!==z)&&(c.geometry=$.id,c.program=B.id,c.wireframe=z,X=!0)}J!==null&&t.update(J,s.ELEMENT_ARRAY_BUFFER),(X||h)&&(h=!1,k(D,F,B,$),J!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function d(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function m(D){return n.isWebGL2?s.bindVertexArray(D):r.bindVertexArrayOES(D)}function g(D){return n.isWebGL2?s.deleteVertexArray(D):r.deleteVertexArrayOES(D)}function _(D,F,B){let $=B.wireframe===!0,J=a[D.id];J===void 0&&(J={},a[D.id]=J);let X=J[F.id];X===void 0&&(X={},J[F.id]=X);let z=X[$];return z===void 0&&(z=f(d()),X[$]=z),z}function f(D){let F=[],B=[],$=[];for(let J=0;J<i;J++)F[J]=0,B[J]=0,$[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:B,attributeDivisors:$,object:D,attributes:{},index:null}}function p(D,F,B,$){let J=c.attributes,X=F.attributes,z=0,Y=B.getAttributes();for(let se in Y)if(Y[se].location>=0){let Q=J[se],de=X[se];if(de===void 0&&(se==="instanceMatrix"&&D.instanceMatrix&&(de=D.instanceMatrix),se==="instanceColor"&&D.instanceColor&&(de=D.instanceColor)),Q===void 0||Q.attribute!==de||de&&Q.data!==de.data)return!0;z++}return c.attributesNum!==z||c.index!==$}function y(D,F,B,$){let J={},X=F.attributes,z=0,Y=B.getAttributes();for(let se in Y)if(Y[se].location>=0){let Q=X[se];Q===void 0&&(se==="instanceMatrix"&&D.instanceMatrix&&(Q=D.instanceMatrix),se==="instanceColor"&&D.instanceColor&&(Q=D.instanceColor));let de={};de.attribute=Q,Q&&Q.data&&(de.data=Q.data),J[se]=de,z++}c.attributes=J,c.attributesNum=z,c.index=$}function x(){let D=c.newAttributes;for(let F=0,B=D.length;F<B;F++)D[F]=0}function v(D){A(D,0)}function A(D,F){let B=c.newAttributes,$=c.enabledAttributes,J=c.attributeDivisors;B[D]=1,$[D]===0&&(s.enableVertexAttribArray(D),$[D]=1),J[D]!==F&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,F),J[D]=F)}function R(){let D=c.newAttributes,F=c.enabledAttributes;for(let B=0,$=F.length;B<$;B++)F[B]!==D[B]&&(s.disableVertexAttribArray(B),F[B]=0)}function w(D,F,B,$,J,X,z){z===!0?s.vertexAttribIPointer(D,F,B,J,X):s.vertexAttribPointer(D,F,B,$,J,X)}function k(D,F,B,$){if(n.isWebGL2===!1&&(D.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();let J=$.attributes,X=B.getAttributes(),z=F.defaultAttributeValues;for(let Y in X){let se=X[Y];if(se.location>=0){let H=J[Y];if(H===void 0&&(Y==="instanceMatrix"&&D.instanceMatrix&&(H=D.instanceMatrix),Y==="instanceColor"&&D.instanceColor&&(H=D.instanceColor)),H!==void 0){let Q=H.normalized,de=H.itemSize,be=t.get(H);if(be===void 0)continue;let pe=be.buffer,Le=be.type,Ie=be.bytesPerElement,Ee=n.isWebGL2===!0&&(Le===s.INT||Le===s.UNSIGNED_INT||H.gpuType===Dc);if(H.isInterleavedBufferAttribute){let De=H.data,P=De.stride,ce=H.offset;if(De.isInstancedInterleavedBuffer){for(let Z=0;Z<se.locationSize;Z++)A(se.location+Z,De.meshPerAttribute);D.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=De.meshPerAttribute*De.count)}else for(let Z=0;Z<se.locationSize;Z++)v(se.location+Z);s.bindBuffer(s.ARRAY_BUFFER,pe);for(let Z=0;Z<se.locationSize;Z++)w(se.location+Z,de/se.locationSize,Le,Q,P*Ie,(ce+de/se.locationSize*Z)*Ie,Ee)}else{if(H.isInstancedBufferAttribute){for(let De=0;De<se.locationSize;De++)A(se.location+De,H.meshPerAttribute);D.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let De=0;De<se.locationSize;De++)v(se.location+De);s.bindBuffer(s.ARRAY_BUFFER,pe);for(let De=0;De<se.locationSize;De++)w(se.location+De,de/se.locationSize,Le,Q,de*Ie,de/se.locationSize*De*Ie,Ee)}}else if(z!==void 0){let Q=z[Y];if(Q!==void 0)switch(Q.length){case 2:s.vertexAttrib2fv(se.location,Q);break;case 3:s.vertexAttrib3fv(se.location,Q);break;case 4:s.vertexAttrib4fv(se.location,Q);break;default:s.vertexAttrib1fv(se.location,Q)}}}}R()}function M(){q();for(let D in a){let F=a[D];for(let B in F){let $=F[B];for(let J in $)g($[J].object),delete $[J];delete F[B]}delete a[D]}}function T(D){if(a[D.id]===void 0)return;let F=a[D.id];for(let B in F){let $=F[B];for(let J in $)g($[J].object),delete $[J];delete F[B]}delete a[D.id]}function N(D){for(let F in a){let B=a[F];if(B[D.id]===void 0)continue;let $=B[D.id];for(let J in $)g($[J].object),delete $[J];delete B[D.id]}}function q(){j(),h=!0,c!==l&&(c=l,m(c.object))}function j(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:q,resetDefaultState:j,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfProgram:N,initAttributes:x,enableAttribute:v,disableUnusedAttributes:R}}function hm(s,e,t,n){let i=n.isWebGL2,r;function o(h){r=h}function a(h,u){s.drawArrays(r,h,u),t.update(u,r,1)}function l(h,u,d){if(d===0)return;let m,g;if(i)m=s,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,h,u,d),t.update(u,r,d)}function c(h,u,d){if(d===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{m.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function um(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),f=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,v=o||e.has("OES_texture_float"),A=x&&v,R=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:f,maxVaryings:p,maxFragmentUniforms:y,vertexTextures:x,floatFragmentTextures:v,floatVertexTextures:A,maxSamples:R}}function dm(s){let e=this,t=null,n=0,i=!1,r=!1,o=new Lt,a=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let m=u.length!==0||d||n!==0||i;return i=d,n=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,m){let g=u.clippingPlanes,_=u.clipIntersection,f=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!f)r?h(null):c();else{let y=r?0:n,x=y*4,v=p.clippingState||null;l.value=v,v=h(g,d,x,m);for(let A=0;A!==x;++A)v[A]=t[A];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,m,g){let _=u!==null?u.length:0,f=null;if(_!==0){if(f=l.value,g!==!0||f===null){let p=m+_*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(f===null||f.length<p)&&(f=new Float32Array(p));for(let x=0,v=m;x!==_;++x,v+=4)o.copy(u[x]).applyMatrix4(y,a),o.normal.toArray(f,v),f[v+3]=o.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,f}}function fm(s){let e=new WeakMap;function t(o,a){return a===Uo?o.mapping=Fi:a===Oo&&(o.mapping=Bi),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Uo||a===Oo)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Xo(l.height/2);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Yo=class extends Er{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ii=4,Kl=[.125,.215,.35,.446,.526,.582],Kn=20,Eo=new Yo,jl=new Be,So=null,To=0,wo=0,Jn=(1+Math.sqrt(5))/2,Ai=1/Jn,Ql=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,Jn,Ai),new L(0,Jn,-Ai),new L(Ai,0,Jn),new L(-Ai,0,Jn),new L(Jn,Ai,0),new L(-Jn,Ai,0)],Tr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){So=this._renderer.getRenderTarget(),To=this._renderer.getActiveCubeFace(),wo=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(So,To,wo),e.scissorTest=!1,Qs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Fi||e.mapping===Bi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),So=this._renderer.getRenderTarget(),To=this._renderer.getActiveCubeFace(),wo=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:kt,minFilter:kt,generateMipmaps:!1,type:cs,format:$t,colorSpace:bn,depthBuffer:!1},i=ec(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ec(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pm(r)),this._blurMaterial=mm(r,e,t)}return i}_compileMaterial(e){let t=new It(this._lodPlanes[0],e);this._renderer.compile(t,Eo)}_sceneToCubeUV(e,t,n,i){let a=new Pt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(jl),h.toneMapping=Fn,h.autoClear=!1;let m=new Vn({name:"PMREM.Background",side:Tt,depthWrite:!1,depthTest:!1}),g=new It(new ds,m),_=!1,f=e.background;f?f.isColor&&(m.color.copy(f),e.background=null,_=!0):(m.color.copy(jl),_=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):y===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let x=this._cubeSize;Qs(i,y*x,p>2?x:0,x,x),h.setRenderTarget(i),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=f}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Fi||e.mapping===Bi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=nc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tc());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new It(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Qs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Eo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Ql[(i-1)%Ql.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new It(this._lodPlanes[i],c),d=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Kn-1),_=r/g,f=isFinite(r)?1+Math.floor(h*_):Kn;f>Kn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Kn}`);let p=[],y=0;for(let w=0;w<Kn;++w){let k=w/_,M=Math.exp(-k*k/2);p.push(M),w===0?y+=M:w<f&&(y+=2*M)}for(let w=0;w<p.length;w++)p[w]=p[w]/y;d.envMap.value=e.texture,d.samples.value=f,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;let v=this._sizeLods[i],A=3*v*(i>x-Ii?i-x+Ii:0),R=4*(this._cubeSize-v);Qs(t,A,R,3*v,2*v),l.setRenderTarget(t),l.render(u,Eo)}};function pm(s){let e=[],t=[],n=[],i=s,r=s-Ii+1+Kl.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);t.push(a);let l=1/a;o>s-Ii?l=Kl[o-s+Ii-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,_=3,f=2,p=1,y=new Float32Array(_*g*m),x=new Float32Array(f*g*m),v=new Float32Array(p*g*m);for(let R=0;R<m;R++){let w=R%3*2/3-1,k=R>2?0:-1,M=[w,k,0,w+2/3,k,0,w+2/3,k+1,0,w,k,0,w+2/3,k+1,0,w,k+1,0];y.set(M,_*g*R),x.set(d,f*g*R);let T=[R,R,R,R,R,R];v.set(T,p*g*R)}let A=new vt;A.setAttribute("position",new xt(y,_)),A.setAttribute("uv",new xt(x,f)),A.setAttribute("faceIndex",new xt(v,p)),e.push(A),i>Ii&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ec(s,e,t){let n=new En(s,e,t);return n.texture.mapping=Br,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qs(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function mm(s,e,t){let n=new Float32Array(Kn),i=new L(0,1,0);return new Sn({name:"SphericalGaussianBlur",defines:{n:Kn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ca(),fragmentShader:`

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
		`,blending:On,depthTest:!1,depthWrite:!1})}function tc(){return new Sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ca(),fragmentShader:`

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
		`,blending:On,depthTest:!1,depthWrite:!1})}function nc(){return new Sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ca(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function Ca(){return`

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
	`}function gm(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Uo||l===Oo,h=l===Fi||l===Bi;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new Tr(s)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{let u=a.image;if(c&&u&&u.height>0||h&&u&&i(u)){t===null&&(t=new Tr(s));let d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function i(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function _m(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function xm(s,e,t,n){let i={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let _=d.morphAttributes[g];for(let f=0,p=_.length;f<p;f++)e.remove(_[f])}d.removeEventListener("dispose",o),delete i[d.id];let m=r.get(d);m&&(e.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)e.update(d[g],s.ARRAY_BUFFER);let m=u.morphAttributes;for(let g in m){let _=m[g];for(let f=0,p=_.length;f<p;f++)e.update(_[f],s.ARRAY_BUFFER)}}function c(u){let d=[],m=u.index,g=u.attributes.position,_=0;if(m!==null){let y=m.array;_=m.version;for(let x=0,v=y.length;x<v;x+=3){let A=y[x+0],R=y[x+1],w=y[x+2];d.push(A,R,R,w,w,A)}}else if(g!==void 0){let y=g.array;_=g.version;for(let x=0,v=y.length/3-1;x<v;x+=3){let A=x+0,R=x+1,w=x+2;d.push(A,R,R,w,w,A)}}else return;let f=new(Vc(d)?br:Mr)(d,1);f.version=_;let p=r.get(u);p&&e.remove(p),r.set(u,f)}function h(u){let d=r.get(u);if(d){let m=u.index;m!==null&&d.version<m.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function vm(s,e,t,n){let i=n.isWebGL2,r;function o(m){r=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function h(m,g){s.drawElements(r,g,a,m*l),t.update(g,r,1)}function u(m,g,_){if(_===0)return;let f,p;if(i)f=s,p="drawElementsInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](r,g,a,m*l,_),t.update(g,r,_)}function d(m,g,_){if(_===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<_;p++)this.render(m[p]/l,g[p]);else{f.multiDrawElementsWEBGL(r,g,0,a,m,0,_);let p=0;for(let y=0;y<_;y++)p+=g[y];t.update(p,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function ym(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Mm(s,e){return s[0]-e[0]}function bm(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Em(s,e,t){let n={},i=new Float32Array(8),r=new WeakMap,o=new Mt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){let d=c.morphTargetInfluences;if(e.isWebGL2===!0){let m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=m!==void 0?m.length:0,_=r.get(h);if(_===void 0||_.count!==g){let D=function(){q.dispose(),r.delete(h),h.removeEventListener("dispose",D)};_!==void 0&&_.texture.dispose();let y=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,v=h.morphAttributes.color!==void 0,A=h.morphAttributes.position||[],R=h.morphAttributes.normal||[],w=h.morphAttributes.color||[],k=0;y===!0&&(k=1),x===!0&&(k=2),v===!0&&(k=3);let M=h.attributes.position.count*k,T=1;M>e.maxTextureSize&&(T=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let N=new Float32Array(M*T*4*g),q=new vr(N,M,T,g);q.type=Un,q.needsUpdate=!0;let j=k*4;for(let F=0;F<g;F++){let B=A[F],$=R[F],J=w[F],X=M*T*4*F;for(let z=0;z<B.count;z++){let Y=z*j;y===!0&&(o.fromBufferAttribute(B,z),N[X+Y+0]=o.x,N[X+Y+1]=o.y,N[X+Y+2]=o.z,N[X+Y+3]=0),x===!0&&(o.fromBufferAttribute($,z),N[X+Y+4]=o.x,N[X+Y+5]=o.y,N[X+Y+6]=o.z,N[X+Y+7]=0),v===!0&&(o.fromBufferAttribute(J,z),N[X+Y+8]=o.x,N[X+Y+9]=o.y,N[X+Y+10]=o.z,N[X+Y+11]=J.itemSize===4?o.w:1)}}_={count:g,texture:q,size:new oe(M,T)},r.set(h,_),h.addEventListener("dispose",D)}let f=0;for(let y=0;y<d.length;y++)f+=d[y];let p=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(s,"morphTargetBaseInfluence",p),u.getUniforms().setValue(s,"morphTargetInfluences",d),u.getUniforms().setValue(s,"morphTargetsTexture",_.texture,t),u.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}else{let m=d===void 0?0:d.length,g=n[h.id];if(g===void 0||g.length!==m){g=[];for(let x=0;x<m;x++)g[x]=[x,0];n[h.id]=g}for(let x=0;x<m;x++){let v=g[x];v[0]=x,v[1]=d[x]}g.sort(bm);for(let x=0;x<8;x++)x<m&&g[x][1]?(a[x][0]=g[x][0],a[x][1]=g[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(Mm);let _=h.morphAttributes.position,f=h.morphAttributes.normal,p=0;for(let x=0;x<8;x++){let v=a[x],A=v[0],R=v[1];A!==Number.MAX_SAFE_INTEGER&&R?(_&&h.getAttribute("morphTarget"+x)!==_[A]&&h.setAttribute("morphTarget"+x,_[A]),f&&h.getAttribute("morphNormal"+x)!==f[A]&&h.setAttribute("morphNormal"+x,f[A]),i[x]=R,p+=R):(_&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),f&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),i[x]=0)}let y=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(s,"morphTargetBaseInfluence",y),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function Sm(s,e,t,n){let i=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var wr=class extends Gt{constructor(e,t,n,i,r,o,a,l,c,h){if(h=h!==void 0?h:ei,h!==ei&&h!==zi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ei&&(n=Nn),n===void 0&&h===zi&&(n=Qn),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ct,this.minFilter=l!==void 0?l:Ct,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Yc=new Gt,qc=new wr(1,1);qc.compareFunction=Hc;var Zc=new vr,Jc=new Go,$c=new Sr,ic=[],sc=[],rc=new Float32Array(16),oc=new Float32Array(9),ac=new Float32Array(4);function Yi(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=ic[i];if(r===void 0&&(r=new Float32Array(i),ic[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function ft(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function pt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function kr(s,e){let t=sc[e];t===void 0&&(t=new Int32Array(e),sc[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Tm(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function wm(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;s.uniform2fv(this.addr,e),pt(t,e)}}function Am(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ft(t,e))return;s.uniform3fv(this.addr,e),pt(t,e)}}function Rm(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;s.uniform4fv(this.addr,e),pt(t,e)}}function Cm(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),pt(t,e)}else{if(ft(t,n))return;ac.set(n),s.uniformMatrix2fv(this.addr,!1,ac),pt(t,n)}}function Pm(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),pt(t,e)}else{if(ft(t,n))return;oc.set(n),s.uniformMatrix3fv(this.addr,!1,oc),pt(t,n)}}function Lm(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),pt(t,e)}else{if(ft(t,n))return;rc.set(n),s.uniformMatrix4fv(this.addr,!1,rc),pt(t,n)}}function Im(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Dm(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;s.uniform2iv(this.addr,e),pt(t,e)}}function Nm(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;s.uniform3iv(this.addr,e),pt(t,e)}}function Um(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;s.uniform4iv(this.addr,e),pt(t,e)}}function Om(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Fm(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;s.uniform2uiv(this.addr,e),pt(t,e)}}function Bm(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;s.uniform3uiv(this.addr,e),pt(t,e)}}function zm(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;s.uniform4uiv(this.addr,e),pt(t,e)}}function km(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r=this.type===s.SAMPLER_2D_SHADOW?qc:Yc;t.setTexture2D(e||r,i)}function Hm(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Jc,i)}function Vm(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||$c,i)}function Gm(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Zc,i)}function Wm(s){switch(s){case 5126:return Tm;case 35664:return wm;case 35665:return Am;case 35666:return Rm;case 35674:return Cm;case 35675:return Pm;case 35676:return Lm;case 5124:case 35670:return Im;case 35667:case 35671:return Dm;case 35668:case 35672:return Nm;case 35669:case 35673:return Um;case 5125:return Om;case 36294:return Fm;case 36295:return Bm;case 36296:return zm;case 35678:case 36198:case 36298:case 36306:case 35682:return km;case 35679:case 36299:case 36307:return Hm;case 35680:case 36300:case 36308:case 36293:return Vm;case 36289:case 36303:case 36311:case 36292:return Gm}}function Xm(s,e){s.uniform1fv(this.addr,e)}function Ym(s,e){let t=Yi(e,this.size,2);s.uniform2fv(this.addr,t)}function qm(s,e){let t=Yi(e,this.size,3);s.uniform3fv(this.addr,t)}function Zm(s,e){let t=Yi(e,this.size,4);s.uniform4fv(this.addr,t)}function Jm(s,e){let t=Yi(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function $m(s,e){let t=Yi(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Km(s,e){let t=Yi(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function jm(s,e){s.uniform1iv(this.addr,e)}function Qm(s,e){s.uniform2iv(this.addr,e)}function eg(s,e){s.uniform3iv(this.addr,e)}function tg(s,e){s.uniform4iv(this.addr,e)}function ng(s,e){s.uniform1uiv(this.addr,e)}function ig(s,e){s.uniform2uiv(this.addr,e)}function sg(s,e){s.uniform3uiv(this.addr,e)}function rg(s,e){s.uniform4uiv(this.addr,e)}function og(s,e,t){let n=this.cache,i=e.length,r=kr(t,i);ft(n,r)||(s.uniform1iv(this.addr,r),pt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Yc,r[o])}function ag(s,e,t){let n=this.cache,i=e.length,r=kr(t,i);ft(n,r)||(s.uniform1iv(this.addr,r),pt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Jc,r[o])}function lg(s,e,t){let n=this.cache,i=e.length,r=kr(t,i);ft(n,r)||(s.uniform1iv(this.addr,r),pt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||$c,r[o])}function cg(s,e,t){let n=this.cache,i=e.length,r=kr(t,i);ft(n,r)||(s.uniform1iv(this.addr,r),pt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Zc,r[o])}function hg(s){switch(s){case 5126:return Xm;case 35664:return Ym;case 35665:return qm;case 35666:return Zm;case 35674:return Jm;case 35675:return $m;case 35676:return Km;case 5124:case 35670:return jm;case 35667:case 35671:return Qm;case 35668:case 35672:return eg;case 35669:case 35673:return tg;case 5125:return ng;case 36294:return ig;case 36295:return sg;case 36296:return rg;case 35678:case 36198:case 36298:case 36306:case 35682:return og;case 35679:case 36299:case 36307:return ag;case 35680:case 36300:case 36308:case 36293:return lg;case 36289:case 36303:case 36311:case 36292:return cg}}var qo=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Wm(t.type)}},Zo=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=hg(t.type)}},Jo=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(e,t[a.id],n)}}},Ao=/(\w+)(\])?(\[|\.)?/g;function lc(s,e){s.seq.push(e),s.map[e.id]=e}function ug(s,e,t){let n=s.name,i=n.length;for(Ao.lastIndex=0;;){let r=Ao.exec(n),o=Ao.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){lc(t,c===void 0?new qo(a,s,e):new Zo(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new Jo(a),lc(t,u)),t=u}}}var Oi=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);ug(r,o,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function cc(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var dg=37297,fg=0;function pg(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function mg(s){let e=je.getPrimaries(je.workingColorSpace),t=je.getPrimaries(s),n;switch(e===t?n="":e===fr&&t===dr?n="LinearDisplayP3ToLinearSRGB":e===dr&&t===fr&&(n="LinearSRGBToLinearDisplayP3"),s){case bn:case zr:return[n,"LinearTransferOETF"];case yt:case Aa:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function hc(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+pg(s.getShaderSource(e),o)}else return i}function gg(s,e){let t=mg(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function _g(s,e){let t;switch(e){case yu:t="Linear";break;case Mu:t="Reinhard";break;case bu:t="OptimizedCineon";break;case Eu:t="ACESFilmic";break;case Tu:t="AgX";break;case Su:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function xg(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Di).join(`
`)}function vg(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Di).join(`
`)}function yg(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Mg(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Di(s){return s!==""}function uc(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dc(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var bg=/^[ \t]*#include +<([\w\d./]+)>/gm;function $o(s){return s.replace(bg,Sg)}var Eg=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Sg(s,e){let t=Ve[e];if(t===void 0){let n=Eg.get(e);if(n!==void 0)t=Ve[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return $o(t)}var Tg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fc(s){return s.replace(Tg,wg)}function wg(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function pc(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ag(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Pc?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Zh?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===yn&&(e="SHADOWMAP_TYPE_VSM"),e}function Rg(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Fi:case Bi:e="ENVMAP_TYPE_CUBE";break;case Br:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Cg(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Bi:e="ENVMAP_MODE_REFRACTION";break}return e}function Pg(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Lc:e="ENVMAP_BLENDING_MULTIPLY";break;case xu:e="ENVMAP_BLENDING_MIX";break;case vu:e="ENVMAP_BLENDING_ADD";break}return e}function Lg(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Ig(s,e,t,n){let i=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Ag(t),c=Rg(t),h=Cg(t),u=Pg(t),d=Lg(t),m=t.isWebGL2?"":xg(t),g=vg(t),_=yg(r),f=i.createProgram(),p,y,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Di).join(`
`),p.length>0&&(p+=`
`),y=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Di).join(`
`),y.length>0&&(y+=`
`)):(p=[pc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Di).join(`
`),y=[m,pc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fn?"#define TONE_MAPPING":"",t.toneMapping!==Fn?Ve.tonemapping_pars_fragment:"",t.toneMapping!==Fn?_g("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,gg("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Di).join(`
`)),o=$o(o),o=uc(o,t),o=dc(o,t),a=$o(a),a=uc(a,t),a=dc(a,t),o=fc(o),a=fc(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,y=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Dl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Dl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let v=x+p+o,A=x+y+a,R=cc(i,i.VERTEX_SHADER,v),w=cc(i,i.FRAGMENT_SHADER,A);i.attachShader(f,R),i.attachShader(f,w),t.index0AttributeName!==void 0?i.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(f,0,"position"),i.linkProgram(f);function k(q){if(s.debug.checkShaderErrors){let j=i.getProgramInfoLog(f).trim(),D=i.getShaderInfoLog(R).trim(),F=i.getShaderInfoLog(w).trim(),B=!0,$=!0;if(i.getProgramParameter(f,i.LINK_STATUS)===!1)if(B=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,f,R,w);else{let J=hc(i,R,"vertex"),X=hc(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(f,i.VALIDATE_STATUS)+`

Program Info Log: `+j+`
`+J+`
`+X)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(D===""||F==="")&&($=!1);$&&(q.diagnostics={runnable:B,programLog:j,vertexShader:{log:D,prefix:p},fragmentShader:{log:F,prefix:y}})}i.deleteShader(R),i.deleteShader(w),M=new Oi(i,f),T=Mg(i,f)}let M;this.getUniforms=function(){return M===void 0&&k(this),M};let T;this.getAttributes=function(){return T===void 0&&k(this),T};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=i.getProgramParameter(f,dg)),N},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(f),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=fg++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=R,this.fragmentShader=w,this}var Dg=0,Ko=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new jo(e),t.set(e,n)),n}},jo=class{constructor(e){this.id=Dg++,this.code=e,this.usedTimes=0}};function Ng(s,e,t,n,i,r,o){let a=new us,l=new Ko,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.vertexTextures,m=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function f(M,T,N,q,j){let D=q.fog,F=j.geometry,B=M.isMeshStandardMaterial?q.environment:null,$=(M.isMeshStandardMaterial?t:e).get(M.envMap||B),J=$&&$.mapping===Br?$.image.height:null,X=g[M.type];M.precision!==null&&(m=i.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));let z=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Y=z!==void 0?z.length:0,se=0;F.morphAttributes.position!==void 0&&(se=1),F.morphAttributes.normal!==void 0&&(se=2),F.morphAttributes.color!==void 0&&(se=3);let H,Q,de,be;if(X){let at=an[X];H=at.vertexShader,Q=at.fragmentShader}else H=M.vertexShader,Q=M.fragmentShader,l.update(M),de=l.getVertexShaderID(M),be=l.getFragmentShaderID(M);let pe=s.getRenderTarget(),Le=j.isInstancedMesh===!0,Ie=j.isBatchedMesh===!0,Ee=!!M.map,De=!!M.matcap,P=!!$,ce=!!M.aoMap,Z=!!M.lightMap,ae=!!M.bumpMap,K=!!M.normalMap,Te=!!M.displacementMap,_e=!!M.emissiveMap,E=!!M.metalnessMap,b=!!M.roughnessMap,U=M.anisotropy>0,ie=M.clearcoat>0,te=M.iridescence>0,ee=M.sheen>0,Se=M.transmission>0,me=U&&!!M.anisotropyMap,ve=ie&&!!M.clearcoatMap,Ce=ie&&!!M.clearcoatNormalMap,ze=ie&&!!M.clearcoatRoughnessMap,ne=te&&!!M.iridescenceMap,Je=te&&!!M.iridescenceThicknessMap,Ge=ee&&!!M.sheenColorMap,Oe=ee&&!!M.sheenRoughnessMap,Re=!!M.specularMap,xe=!!M.specularColorMap,C=!!M.specularIntensityMap,le=Se&&!!M.transmissionMap,we=Se&&!!M.thicknessMap,Me=!!M.gradientMap,re=!!M.alphaMap,I=M.alphaTest>0,he=!!M.alphaHash,ge=!!M.extensions,Ne=!!F.attributes.uv1,Pe=!!F.attributes.uv2,qe=!!F.attributes.uv3,Ze=Fn;return M.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(Ze=s.toneMapping),{isWebGL2:h,shaderID:X,shaderType:M.type,shaderName:M.name,vertexShader:H,fragmentShader:Q,defines:M.defines,customVertexShaderID:de,customFragmentShaderID:be,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:Ie,instancing:Le,instancingColor:Le&&j.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:pe===null?s.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:bn,map:Ee,matcap:De,envMap:P,envMapMode:P&&$.mapping,envMapCubeUVHeight:J,aoMap:ce,lightMap:Z,bumpMap:ae,normalMap:K,displacementMap:d&&Te,emissiveMap:_e,normalMapObjectSpace:K&&M.normalMapType===Bu,normalMapTangentSpace:K&&M.normalMapType===Fu,metalnessMap:E,roughnessMap:b,anisotropy:U,anisotropyMap:me,clearcoat:ie,clearcoatMap:ve,clearcoatNormalMap:Ce,clearcoatRoughnessMap:ze,iridescence:te,iridescenceMap:ne,iridescenceThicknessMap:Je,sheen:ee,sheenColorMap:Ge,sheenRoughnessMap:Oe,specularMap:Re,specularColorMap:xe,specularIntensityMap:C,transmission:Se,transmissionMap:le,thicknessMap:we,gradientMap:Me,opaque:M.transparent===!1&&M.blending===Vt,alphaMap:re,alphaTest:I,alphaHash:he,combine:M.combine,mapUv:Ee&&_(M.map.channel),aoMapUv:ce&&_(M.aoMap.channel),lightMapUv:Z&&_(M.lightMap.channel),bumpMapUv:ae&&_(M.bumpMap.channel),normalMapUv:K&&_(M.normalMap.channel),displacementMapUv:Te&&_(M.displacementMap.channel),emissiveMapUv:_e&&_(M.emissiveMap.channel),metalnessMapUv:E&&_(M.metalnessMap.channel),roughnessMapUv:b&&_(M.roughnessMap.channel),anisotropyMapUv:me&&_(M.anisotropyMap.channel),clearcoatMapUv:ve&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ze&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Je&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ge&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&_(M.sheenRoughnessMap.channel),specularMapUv:Re&&_(M.specularMap.channel),specularColorMapUv:xe&&_(M.specularColorMap.channel),specularIntensityMapUv:C&&_(M.specularIntensityMap.channel),transmissionMapUv:le&&_(M.transmissionMap.channel),thicknessMapUv:we&&_(M.thicknessMap.channel),alphaMapUv:re&&_(M.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(K||U),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:Ne,vertexUv2s:Pe,vertexUv3s:qe,pointsUvs:j.isPoints===!0&&!!F.attributes.uv&&(Ee||re),fog:!!D,useFog:M.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:j.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:se,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&N.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ze,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Ee&&M.map.isVideoTexture===!0&&je.getTransfer(M.map.colorSpace)===et,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Zt,flipSided:M.side===Tt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ge&&M.extensions.derivatives===!0,extensionFragDepth:ge&&M.extensions.fragDepth===!0,extensionDrawBuffers:ge&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ge&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ge&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function p(M){let T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(let N in M.defines)T.push(N),T.push(M.defines[N]);return M.isRawShaderMaterial===!1&&(y(T,M),x(T,M),T.push(s.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function y(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function x(M,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),M.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function v(M){let T=g[M.type],N;if(T){let q=an[T];N=bd.clone(q.uniforms)}else N=M.uniforms;return N}function A(M,T){let N;for(let q=0,j=c.length;q<j;q++){let D=c[q];if(D.cacheKey===T){N=D,++N.usedTimes;break}}return N===void 0&&(N=new Ig(s,T,M,r),c.push(N)),N}function R(M){if(--M.usedTimes===0){let T=c.indexOf(M);c[T]=c[c.length-1],c.pop(),M.destroy()}}function w(M){l.remove(M)}function k(){l.dispose()}return{getParameters:f,getProgramCacheKey:p,getUniforms:v,acquireProgram:A,releaseProgram:R,releaseShaderCache:w,programs:c,dispose:k}}function Ug(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Og(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function mc(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function gc(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u,d,m,g,_,f){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:m,groupOrder:g,renderOrder:u.renderOrder,z:_,group:f},s[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=m,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=f),e++,p}function a(u,d,m,g,_,f){let p=o(u,d,m,g,_,f);m.transmission>0?n.push(p):m.transparent===!0?i.push(p):t.push(p)}function l(u,d,m,g,_,f){let p=o(u,d,m,g,_,f);m.transmission>0?n.unshift(p):m.transparent===!0?i.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||Og),n.length>1&&n.sort(d||mc),i.length>1&&i.sort(d||mc)}function h(){for(let u=e,d=s.length;u<d;u++){let m=s[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function Fg(){let s=new WeakMap;function e(n,i){let r=s.get(n),o;return r===void 0?(o=new gc,s.set(n,[o])):i>=r.length?(o=new gc,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function Bg(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Be};break;case"SpotLight":t={position:new L,direction:new L,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new L,halfWidth:new L,halfHeight:new L};break}return s[e.id]=t,t}}}function zg(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var kg=0;function Hg(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Vg(s,e){let t=new Bg,n=zg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new L);let r=new L,o=new ct,a=new ct;function l(h,u){let d=0,m=0,g=0;for(let q=0;q<9;q++)i.probe[q].set(0,0,0);let _=0,f=0,p=0,y=0,x=0,v=0,A=0,R=0,w=0,k=0,M=0;h.sort(Hg);let T=u===!0?Math.PI:1;for(let q=0,j=h.length;q<j;q++){let D=h[q],F=D.color,B=D.intensity,$=D.distance,J=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=F.r*B*T,m+=F.g*B*T,g+=F.b*B*T;else if(D.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(D.sh.coefficients[X],B);M++}else if(D.isDirectionalLight){let X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity*T),D.castShadow){let z=D.shadow,Y=n.get(D);Y.shadowBias=z.bias,Y.shadowNormalBias=z.normalBias,Y.shadowRadius=z.radius,Y.shadowMapSize=z.mapSize,i.directionalShadow[_]=Y,i.directionalShadowMap[_]=J,i.directionalShadowMatrix[_]=D.shadow.matrix,v++}i.directional[_]=X,_++}else if(D.isSpotLight){let X=t.get(D);X.position.setFromMatrixPosition(D.matrixWorld),X.color.copy(F).multiplyScalar(B*T),X.distance=$,X.coneCos=Math.cos(D.angle),X.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),X.decay=D.decay,i.spot[p]=X;let z=D.shadow;if(D.map&&(i.spotLightMap[w]=D.map,w++,z.updateMatrices(D),D.castShadow&&k++),i.spotLightMatrix[p]=z.matrix,D.castShadow){let Y=n.get(D);Y.shadowBias=z.bias,Y.shadowNormalBias=z.normalBias,Y.shadowRadius=z.radius,Y.shadowMapSize=z.mapSize,i.spotShadow[p]=Y,i.spotShadowMap[p]=J,R++}p++}else if(D.isRectAreaLight){let X=t.get(D);X.color.copy(F).multiplyScalar(B),X.halfWidth.set(D.width*.5,0,0),X.halfHeight.set(0,D.height*.5,0),i.rectArea[y]=X,y++}else if(D.isPointLight){let X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity*T),X.distance=D.distance,X.decay=D.decay,D.castShadow){let z=D.shadow,Y=n.get(D);Y.shadowBias=z.bias,Y.shadowNormalBias=z.normalBias,Y.shadowRadius=z.radius,Y.shadowMapSize=z.mapSize,Y.shadowCameraNear=z.camera.near,Y.shadowCameraFar=z.camera.far,i.pointShadow[f]=Y,i.pointShadowMap[f]=J,i.pointShadowMatrix[f]=D.shadow.matrix,A++}i.point[f]=X,f++}else if(D.isHemisphereLight){let X=t.get(D);X.skyColor.copy(D.color).multiplyScalar(B*T),X.groundColor.copy(D.groundColor).multiplyScalar(B*T),i.hemi[x]=X,x++}}y>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=m,i.ambient[2]=g;let N=i.hash;(N.directionalLength!==_||N.pointLength!==f||N.spotLength!==p||N.rectAreaLength!==y||N.hemiLength!==x||N.numDirectionalShadows!==v||N.numPointShadows!==A||N.numSpotShadows!==R||N.numSpotMaps!==w||N.numLightProbes!==M)&&(i.directional.length=_,i.spot.length=p,i.rectArea.length=y,i.point.length=f,i.hemi.length=x,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=R,i.spotShadowMap.length=R,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=R+w-k,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=k,i.numLightProbes=M,N.directionalLength=_,N.pointLength=f,N.spotLength=p,N.rectAreaLength=y,N.hemiLength=x,N.numDirectionalShadows=v,N.numPointShadows=A,N.numSpotShadows=R,N.numSpotMaps=w,N.numLightProbes=M,i.version=kg++)}function c(h,u){let d=0,m=0,g=0,_=0,f=0,p=u.matrixWorldInverse;for(let y=0,x=h.length;y<x;y++){let v=h[y];if(v.isDirectionalLight){let A=i.directional[d];A.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(p),d++}else if(v.isSpotLight){let A=i.spot[g];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(p),g++}else if(v.isRectAreaLight){let A=i.rectArea[_];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(p),a.identity(),o.copy(v.matrixWorld),o.premultiply(p),a.extractRotation(o),A.halfWidth.set(v.width*.5,0,0),A.halfHeight.set(0,v.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),_++}else if(v.isPointLight){let A=i.point[m];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(p),m++}else if(v.isHemisphereLight){let A=i.hemi[f];A.direction.setFromMatrixPosition(v.matrixWorld),A.direction.transformDirection(p),f++}}}return{setup:l,setupView:c,state:i}}function _c(s,e){let t=new Vg(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function l(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Gg(s,e){let t=new WeakMap;function n(r,o=0){let a=t.get(r),l;return a===void 0?(l=new _c(s,e),t.set(r,[l])):o>=a.length?(l=new _c(s,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}var Qo=class extends Hn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Uu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ea=class extends Hn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Wg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Xg=`uniform sampler2D shadow_pass;
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
}`;function Yg(s,e,t){let n=new Vi,i=new oe,r=new oe,o=new Mt,a=new Qo({depthPacking:Ou}),l=new ea,c={},h=t.maxTextureSize,u={[kn]:Tt,[Tt]:kn,[Zt]:Zt},d=new Sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:Wg,fragmentShader:Xg}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let g=new vt;g.setAttribute("position",new xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new It(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pc;let p=this.type;this.render=function(R,w,k){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||R.length===0)return;let M=s.getRenderTarget(),T=s.getActiveCubeFace(),N=s.getActiveMipmapLevel(),q=s.state;q.setBlending(On),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);let j=p!==yn&&this.type===yn,D=p===yn&&this.type!==yn;for(let F=0,B=R.length;F<B;F++){let $=R[F],J=$.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;i.copy(J.mapSize);let X=J.getFrameExtents();if(i.multiply(X),r.copy(J.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/X.x),i.x=r.x*X.x,J.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/X.y),i.y=r.y*X.y,J.mapSize.y=r.y)),J.map===null||j===!0||D===!0){let Y=this.type!==yn?{minFilter:Ct,magFilter:Ct}:{};J.map!==null&&J.map.dispose(),J.map=new En(i.x,i.y,Y),J.map.texture.name=$.name+".shadowMap",J.camera.updateProjectionMatrix()}s.setRenderTarget(J.map),s.clear();let z=J.getViewportCount();for(let Y=0;Y<z;Y++){let se=J.getViewport(Y);o.set(r.x*se.x,r.y*se.y,r.x*se.z,r.y*se.w),q.viewport(o),J.updateMatrices($,Y),n=J.getFrustum(),v(w,k,J.camera,$,this.type)}J.isPointLightShadow!==!0&&this.type===yn&&y(J,k),J.needsUpdate=!1}p=this.type,f.needsUpdate=!1,s.setRenderTarget(M,T,N)};function y(R,w){let k=e.update(_);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new En(i.x,i.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,s.setRenderTarget(R.mapPass),s.clear(),s.renderBufferDirect(w,null,k,d,_,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,s.setRenderTarget(R.map),s.clear(),s.renderBufferDirect(w,null,k,m,_,null)}function x(R,w,k,M){let T=null,N=k.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(N!==void 0)T=N;else if(T=k.isPointLight===!0?l:a,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let q=T.uuid,j=w.uuid,D=c[q];D===void 0&&(D={},c[q]=D);let F=D[j];F===void 0&&(F=T.clone(),D[j]=F,w.addEventListener("dispose",A)),T=F}if(T.visible=w.visible,T.wireframe=w.wireframe,M===yn?T.side=w.shadowSide!==null?w.shadowSide:w.side:T.side=w.shadowSide!==null?w.shadowSide:u[w.side],T.alphaMap=w.alphaMap,T.alphaTest=w.alphaTest,T.map=w.map,T.clipShadows=w.clipShadows,T.clippingPlanes=w.clippingPlanes,T.clipIntersection=w.clipIntersection,T.displacementMap=w.displacementMap,T.displacementScale=w.displacementScale,T.displacementBias=w.displacementBias,T.wireframeLinewidth=w.wireframeLinewidth,T.linewidth=w.linewidth,k.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let q=s.properties.get(T);q.light=k}return T}function v(R,w,k,M,T){if(R.visible===!1)return;if(R.layers.test(w.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&T===yn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,R.matrixWorld);let j=e.update(R),D=R.material;if(Array.isArray(D)){let F=j.groups;for(let B=0,$=F.length;B<$;B++){let J=F[B],X=D[J.materialIndex];if(X&&X.visible){let z=x(R,X,M,T);R.onBeforeShadow(s,R,w,k,j,z,J),s.renderBufferDirect(k,null,j,z,R,J),R.onAfterShadow(s,R,w,k,j,z,J)}}}else if(D.visible){let F=x(R,D,M,T);R.onBeforeShadow(s,R,w,k,j,F,null),s.renderBufferDirect(k,null,j,F,R,null),R.onAfterShadow(s,R,w,k,j,F,null)}}let q=R.children;for(let j=0,D=q.length;j<D;j++)v(q[j],w,k,M,T)}function A(R){R.target.removeEventListener("dispose",A);for(let k in c){let M=c[k],T=R.target.uuid;T in M&&(M[T].dispose(),delete M[T])}}}function qg(s,e,t){let n=t.isWebGL2;function i(){let I=!1,he=new Mt,ge=null,Ne=new Mt(0,0,0,0);return{setMask:function(Pe){ge!==Pe&&!I&&(s.colorMask(Pe,Pe,Pe,Pe),ge=Pe)},setLocked:function(Pe){I=Pe},setClear:function(Pe,qe,Ze,rt,at){at===!0&&(Pe*=rt,qe*=rt,Ze*=rt),he.set(Pe,qe,Ze,rt),Ne.equals(he)===!1&&(s.clearColor(Pe,qe,Ze,rt),Ne.copy(he))},reset:function(){I=!1,ge=null,Ne.set(-1,0,0,0)}}}function r(){let I=!1,he=null,ge=null,Ne=null;return{setTest:function(Pe){Pe?Ie(s.DEPTH_TEST):Ee(s.DEPTH_TEST)},setMask:function(Pe){he!==Pe&&!I&&(s.depthMask(Pe),he=Pe)},setFunc:function(Pe){if(ge!==Pe){switch(Pe){case uu:s.depthFunc(s.NEVER);break;case du:s.depthFunc(s.ALWAYS);break;case fu:s.depthFunc(s.LESS);break;case lr:s.depthFunc(s.LEQUAL);break;case pu:s.depthFunc(s.EQUAL);break;case mu:s.depthFunc(s.GEQUAL);break;case gu:s.depthFunc(s.GREATER);break;case _u:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ge=Pe}},setLocked:function(Pe){I=Pe},setClear:function(Pe){Ne!==Pe&&(s.clearDepth(Pe),Ne=Pe)},reset:function(){I=!1,he=null,ge=null,Ne=null}}}function o(){let I=!1,he=null,ge=null,Ne=null,Pe=null,qe=null,Ze=null,rt=null,at=null;return{setTest:function($e){I||($e?Ie(s.STENCIL_TEST):Ee(s.STENCIL_TEST))},setMask:function($e){he!==$e&&!I&&(s.stencilMask($e),he=$e)},setFunc:function($e,ht,on){(ge!==$e||Ne!==ht||Pe!==on)&&(s.stencilFunc($e,ht,on),ge=$e,Ne=ht,Pe=on)},setOp:function($e,ht,on){(qe!==$e||Ze!==ht||rt!==on)&&(s.stencilOp($e,ht,on),qe=$e,Ze=ht,rt=on)},setLocked:function($e){I=$e},setClear:function($e){at!==$e&&(s.clearStencil($e),at=$e)},reset:function(){I=!1,he=null,ge=null,Ne=null,Pe=null,qe=null,Ze=null,rt=null,at=null}}}let a=new i,l=new r,c=new o,h=new WeakMap,u=new WeakMap,d={},m={},g=new WeakMap,_=[],f=null,p=!1,y=null,x=null,v=null,A=null,R=null,w=null,k=null,M=new Be(0,0,0),T=0,N=!1,q=null,j=null,D=null,F=null,B=null,$=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,X=0,z=s.getParameter(s.VERSION);z.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(z)[1]),J=X>=1):z.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),J=X>=2);let Y=null,se={},H=s.getParameter(s.SCISSOR_BOX),Q=s.getParameter(s.VIEWPORT),de=new Mt().fromArray(H),be=new Mt().fromArray(Q);function pe(I,he,ge,Ne){let Pe=new Uint8Array(4),qe=s.createTexture();s.bindTexture(I,qe),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ze=0;Ze<ge;Ze++)n&&(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)?s.texImage3D(he,0,s.RGBA,1,1,Ne,0,s.RGBA,s.UNSIGNED_BYTE,Pe):s.texImage2D(he+Ze,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Pe);return qe}let Le={};Le[s.TEXTURE_2D]=pe(s.TEXTURE_2D,s.TEXTURE_2D,1),Le[s.TEXTURE_CUBE_MAP]=pe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Le[s.TEXTURE_2D_ARRAY]=pe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Le[s.TEXTURE_3D]=pe(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ie(s.DEPTH_TEST),l.setFunc(lr),_e(!1),E(ja),Ie(s.CULL_FACE),K(On);function Ie(I){d[I]!==!0&&(s.enable(I),d[I]=!0)}function Ee(I){d[I]!==!1&&(s.disable(I),d[I]=!1)}function De(I,he){return m[I]!==he?(s.bindFramebuffer(I,he),m[I]=he,n&&(I===s.DRAW_FRAMEBUFFER&&(m[s.FRAMEBUFFER]=he),I===s.FRAMEBUFFER&&(m[s.DRAW_FRAMEBUFFER]=he)),!0):!1}function P(I,he){let ge=_,Ne=!1;if(I)if(ge=g.get(he),ge===void 0&&(ge=[],g.set(he,ge)),I.isWebGLMultipleRenderTargets){let Pe=I.texture;if(ge.length!==Pe.length||ge[0]!==s.COLOR_ATTACHMENT0){for(let qe=0,Ze=Pe.length;qe<Ze;qe++)ge[qe]=s.COLOR_ATTACHMENT0+qe;ge.length=Pe.length,Ne=!0}}else ge[0]!==s.COLOR_ATTACHMENT0&&(ge[0]=s.COLOR_ATTACHMENT0,Ne=!0);else ge[0]!==s.BACK&&(ge[0]=s.BACK,Ne=!0);Ne&&(t.isWebGL2?s.drawBuffers(ge):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ge))}function ce(I){return f!==I?(s.useProgram(I),f=I,!0):!1}let Z={[$n]:s.FUNC_ADD,[$h]:s.FUNC_SUBTRACT,[Kh]:s.FUNC_REVERSE_SUBTRACT};if(n)Z[tl]=s.MIN,Z[nl]=s.MAX;else{let I=e.get("EXT_blend_minmax");I!==null&&(Z[tl]=I.MIN_EXT,Z[nl]=I.MAX_EXT)}let ae={[jh]:s.ZERO,[Qh]:s.ONE,[eu]:s.SRC_COLOR,[Do]:s.SRC_ALPHA,[ou]:s.SRC_ALPHA_SATURATE,[su]:s.DST_COLOR,[nu]:s.DST_ALPHA,[tu]:s.ONE_MINUS_SRC_COLOR,[No]:s.ONE_MINUS_SRC_ALPHA,[ru]:s.ONE_MINUS_DST_COLOR,[iu]:s.ONE_MINUS_DST_ALPHA,[au]:s.CONSTANT_COLOR,[lu]:s.ONE_MINUS_CONSTANT_COLOR,[cu]:s.CONSTANT_ALPHA,[hu]:s.ONE_MINUS_CONSTANT_ALPHA};function K(I,he,ge,Ne,Pe,qe,Ze,rt,at,$e){if(I===On){p===!0&&(Ee(s.BLEND),p=!1);return}if(p===!1&&(Ie(s.BLEND),p=!0),I!==Jh){if(I!==y||$e!==N){if((x!==$n||R!==$n)&&(s.blendEquation(s.FUNC_ADD),x=$n,R=$n),$e)switch(I){case Vt:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ni:s.blendFunc(s.ONE,s.ONE);break;case Qa:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case el:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Vt:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ni:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Qa:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case el:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}v=null,A=null,w=null,k=null,M.set(0,0,0),T=0,y=I,N=$e}return}Pe=Pe||he,qe=qe||ge,Ze=Ze||Ne,(he!==x||Pe!==R)&&(s.blendEquationSeparate(Z[he],Z[Pe]),x=he,R=Pe),(ge!==v||Ne!==A||qe!==w||Ze!==k)&&(s.blendFuncSeparate(ae[ge],ae[Ne],ae[qe],ae[Ze]),v=ge,A=Ne,w=qe,k=Ze),(rt.equals(M)===!1||at!==T)&&(s.blendColor(rt.r,rt.g,rt.b,at),M.copy(rt),T=at),y=I,N=!1}function Te(I,he){I.side===Zt?Ee(s.CULL_FACE):Ie(s.CULL_FACE);let ge=I.side===Tt;he&&(ge=!ge),_e(ge),I.blending===Vt&&I.transparent===!1?K(On):K(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),a.setMask(I.colorWrite);let Ne=I.stencilWrite;c.setTest(Ne),Ne&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),U(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Ie(s.SAMPLE_ALPHA_TO_COVERAGE):Ee(s.SAMPLE_ALPHA_TO_COVERAGE)}function _e(I){q!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),q=I)}function E(I){I!==Yh?(Ie(s.CULL_FACE),I!==j&&(I===ja?s.cullFace(s.BACK):I===qh?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ee(s.CULL_FACE),j=I}function b(I){I!==D&&(J&&s.lineWidth(I),D=I)}function U(I,he,ge){I?(Ie(s.POLYGON_OFFSET_FILL),(F!==he||B!==ge)&&(s.polygonOffset(he,ge),F=he,B=ge)):Ee(s.POLYGON_OFFSET_FILL)}function ie(I){I?Ie(s.SCISSOR_TEST):Ee(s.SCISSOR_TEST)}function te(I){I===void 0&&(I=s.TEXTURE0+$-1),Y!==I&&(s.activeTexture(I),Y=I)}function ee(I,he,ge){ge===void 0&&(Y===null?ge=s.TEXTURE0+$-1:ge=Y);let Ne=se[ge];Ne===void 0&&(Ne={type:void 0,texture:void 0},se[ge]=Ne),(Ne.type!==I||Ne.texture!==he)&&(Y!==ge&&(s.activeTexture(ge),Y=ge),s.bindTexture(I,he||Le[I]),Ne.type=I,Ne.texture=he)}function Se(){let I=se[Y];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function me(){try{s.compressedTexImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ve(){try{s.compressedTexImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ce(){try{s.texSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ze(){try{s.texSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ne(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Je(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ge(){try{s.texStorage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Oe(){try{s.texStorage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Re(){try{s.texImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xe(){try{s.texImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function C(I){de.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),de.copy(I))}function le(I){be.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),be.copy(I))}function we(I,he){let ge=u.get(he);ge===void 0&&(ge=new WeakMap,u.set(he,ge));let Ne=ge.get(I);Ne===void 0&&(Ne=s.getUniformBlockIndex(he,I.name),ge.set(I,Ne))}function Me(I,he){let Ne=u.get(he).get(I);h.get(he)!==Ne&&(s.uniformBlockBinding(he,Ne,I.__bindingPointIndex),h.set(he,Ne))}function re(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},Y=null,se={},m={},g=new WeakMap,_=[],f=null,p=!1,y=null,x=null,v=null,A=null,R=null,w=null,k=null,M=new Be(0,0,0),T=0,N=!1,q=null,j=null,D=null,F=null,B=null,de.set(0,0,s.canvas.width,s.canvas.height),be.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ie,disable:Ee,bindFramebuffer:De,drawBuffers:P,useProgram:ce,setBlending:K,setMaterial:Te,setFlipSided:_e,setCullFace:E,setLineWidth:b,setPolygonOffset:U,setScissorTest:ie,activeTexture:te,bindTexture:ee,unbindTexture:Se,compressedTexImage2D:me,compressedTexImage3D:ve,texImage2D:Re,texImage3D:xe,updateUBOMapping:we,uniformBlockBinding:Me,texStorage2D:Ge,texStorage3D:Oe,texSubImage2D:Ce,texSubImage3D:ze,compressedTexSubImage2D:ne,compressedTexSubImage3D:Je,scissor:C,viewport:le,reset:re}}function Zg(s,e,t,n,i,r,o){let a=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,b){return m?new OffscreenCanvas(E,b):gr("canvas")}function _(E,b,U,ie){let te=1;if((E.width>ie||E.height>ie)&&(te=ie/Math.max(E.width,E.height)),te<1||b===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){let ee=b?mr:Math.floor,Se=ee(te*E.width),me=ee(te*E.height);u===void 0&&(u=g(Se,me));let ve=U?g(Se,me):u;return ve.width=Se,ve.height=me,ve.getContext("2d").drawImage(E,0,0,Se,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+Se+"x"+me+")."),ve}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function f(E){return Ho(E.width)&&Ho(E.height)}function p(E){return a?!1:E.wrapS!==Jt||E.wrapT!==Jt||E.minFilter!==Ct&&E.minFilter!==kt}function y(E,b){return E.generateMipmaps&&b&&E.minFilter!==Ct&&E.minFilter!==kt}function x(E){s.generateMipmap(E)}function v(E,b,U,ie,te=!1){if(a===!1)return b;if(E!==null){if(s[E]!==void 0)return s[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ee=b;if(b===s.RED&&(U===s.FLOAT&&(ee=s.R32F),U===s.HALF_FLOAT&&(ee=s.R16F),U===s.UNSIGNED_BYTE&&(ee=s.R8)),b===s.RED_INTEGER&&(U===s.UNSIGNED_BYTE&&(ee=s.R8UI),U===s.UNSIGNED_SHORT&&(ee=s.R16UI),U===s.UNSIGNED_INT&&(ee=s.R32UI),U===s.BYTE&&(ee=s.R8I),U===s.SHORT&&(ee=s.R16I),U===s.INT&&(ee=s.R32I)),b===s.RG&&(U===s.FLOAT&&(ee=s.RG32F),U===s.HALF_FLOAT&&(ee=s.RG16F),U===s.UNSIGNED_BYTE&&(ee=s.RG8)),b===s.RGBA){let Se=te?ur:je.getTransfer(ie);U===s.FLOAT&&(ee=s.RGBA32F),U===s.HALF_FLOAT&&(ee=s.RGBA16F),U===s.UNSIGNED_BYTE&&(ee=Se===et?s.SRGB8_ALPHA8:s.RGBA8),U===s.UNSIGNED_SHORT_4_4_4_4&&(ee=s.RGBA4),U===s.UNSIGNED_SHORT_5_5_5_1&&(ee=s.RGB5_A1)}return(ee===s.R16F||ee===s.R32F||ee===s.RG16F||ee===s.RG32F||ee===s.RGBA16F||ee===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function A(E,b,U){return y(E,U)===!0||E.isFramebufferTexture&&E.minFilter!==Ct&&E.minFilter!==kt?Math.log2(Math.max(b.width,b.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?b.mipmaps.length:1}function R(E){return E===Ct||E===il||E===jr?s.NEAREST:s.LINEAR}function w(E){let b=E.target;b.removeEventListener("dispose",w),M(b),b.isVideoTexture&&h.delete(b)}function k(E){let b=E.target;b.removeEventListener("dispose",k),N(b)}function M(E){let b=n.get(E);if(b.__webglInit===void 0)return;let U=E.source,ie=d.get(U);if(ie){let te=ie[b.__cacheKey];te.usedTimes--,te.usedTimes===0&&T(E),Object.keys(ie).length===0&&d.delete(U)}n.remove(E)}function T(E){let b=n.get(E);s.deleteTexture(b.__webglTexture);let U=E.source,ie=d.get(U);delete ie[b.__cacheKey],o.memory.textures--}function N(E){let b=E.texture,U=n.get(E),ie=n.get(b);if(ie.__webglTexture!==void 0&&(s.deleteTexture(ie.__webglTexture),o.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(U.__webglFramebuffer[te]))for(let ee=0;ee<U.__webglFramebuffer[te].length;ee++)s.deleteFramebuffer(U.__webglFramebuffer[te][ee]);else s.deleteFramebuffer(U.__webglFramebuffer[te]);U.__webglDepthbuffer&&s.deleteRenderbuffer(U.__webglDepthbuffer[te])}else{if(Array.isArray(U.__webglFramebuffer))for(let te=0;te<U.__webglFramebuffer.length;te++)s.deleteFramebuffer(U.__webglFramebuffer[te]);else s.deleteFramebuffer(U.__webglFramebuffer);if(U.__webglDepthbuffer&&s.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&s.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let te=0;te<U.__webglColorRenderbuffer.length;te++)U.__webglColorRenderbuffer[te]&&s.deleteRenderbuffer(U.__webglColorRenderbuffer[te]);U.__webglDepthRenderbuffer&&s.deleteRenderbuffer(U.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let te=0,ee=b.length;te<ee;te++){let Se=n.get(b[te]);Se.__webglTexture&&(s.deleteTexture(Se.__webglTexture),o.memory.textures--),n.remove(b[te])}n.remove(b),n.remove(E)}let q=0;function j(){q=0}function D(){let E=q;return E>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+i.maxTextures),q+=1,E}function F(E){let b=[];return b.push(E.wrapS),b.push(E.wrapT),b.push(E.wrapR||0),b.push(E.magFilter),b.push(E.minFilter),b.push(E.anisotropy),b.push(E.internalFormat),b.push(E.format),b.push(E.type),b.push(E.generateMipmaps),b.push(E.premultiplyAlpha),b.push(E.flipY),b.push(E.unpackAlignment),b.push(E.colorSpace),b.join()}function B(E,b){let U=n.get(E);if(E.isVideoTexture&&Te(E),E.isRenderTargetTexture===!1&&E.version>0&&U.__version!==E.version){let ie=E.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{de(U,E,b);return}}t.bindTexture(s.TEXTURE_2D,U.__webglTexture,s.TEXTURE0+b)}function $(E,b){let U=n.get(E);if(E.version>0&&U.__version!==E.version){de(U,E,b);return}t.bindTexture(s.TEXTURE_2D_ARRAY,U.__webglTexture,s.TEXTURE0+b)}function J(E,b){let U=n.get(E);if(E.version>0&&U.__version!==E.version){de(U,E,b);return}t.bindTexture(s.TEXTURE_3D,U.__webglTexture,s.TEXTURE0+b)}function X(E,b){let U=n.get(E);if(E.version>0&&U.__version!==E.version){be(U,E,b);return}t.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+b)}let z={[Fo]:s.REPEAT,[Jt]:s.CLAMP_TO_EDGE,[Bo]:s.MIRRORED_REPEAT},Y={[Ct]:s.NEAREST,[il]:s.NEAREST_MIPMAP_NEAREST,[jr]:s.NEAREST_MIPMAP_LINEAR,[kt]:s.LINEAR,[wu]:s.LINEAR_MIPMAP_NEAREST,[ls]:s.LINEAR_MIPMAP_LINEAR},se={[zu]:s.NEVER,[Xu]:s.ALWAYS,[ku]:s.LESS,[Hc]:s.LEQUAL,[Hu]:s.EQUAL,[Wu]:s.GEQUAL,[Vu]:s.GREATER,[Gu]:s.NOTEQUAL};function H(E,b,U){if(U?(s.texParameteri(E,s.TEXTURE_WRAP_S,z[b.wrapS]),s.texParameteri(E,s.TEXTURE_WRAP_T,z[b.wrapT]),(E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY)&&s.texParameteri(E,s.TEXTURE_WRAP_R,z[b.wrapR]),s.texParameteri(E,s.TEXTURE_MAG_FILTER,Y[b.magFilter]),s.texParameteri(E,s.TEXTURE_MIN_FILTER,Y[b.minFilter])):(s.texParameteri(E,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(E,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY)&&s.texParameteri(E,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(b.wrapS!==Jt||b.wrapT!==Jt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(E,s.TEXTURE_MAG_FILTER,R(b.magFilter)),s.texParameteri(E,s.TEXTURE_MIN_FILTER,R(b.minFilter)),b.minFilter!==Ct&&b.minFilter!==kt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(s.texParameteri(E,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(E,s.TEXTURE_COMPARE_FUNC,se[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let ie=e.get("EXT_texture_filter_anisotropic");if(b.magFilter===Ct||b.minFilter!==jr&&b.minFilter!==ls||b.type===Un&&e.has("OES_texture_float_linear")===!1||a===!1&&b.type===cs&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||n.get(b).__currentAnisotropy)&&(s.texParameterf(E,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy)}}function Q(E,b){let U=!1;E.__webglInit===void 0&&(E.__webglInit=!0,b.addEventListener("dispose",w));let ie=b.source,te=d.get(ie);te===void 0&&(te={},d.set(ie,te));let ee=F(b);if(ee!==E.__cacheKey){te[ee]===void 0&&(te[ee]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,U=!0),te[ee].usedTimes++;let Se=te[E.__cacheKey];Se!==void 0&&(te[E.__cacheKey].usedTimes--,Se.usedTimes===0&&T(b)),E.__cacheKey=ee,E.__webglTexture=te[ee].texture}return U}function de(E,b,U){let ie=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ie=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ie=s.TEXTURE_3D);let te=Q(E,b),ee=b.source;t.bindTexture(ie,E.__webglTexture,s.TEXTURE0+U);let Se=n.get(ee);if(ee.version!==Se.__version||te===!0){t.activeTexture(s.TEXTURE0+U);let me=je.getPrimaries(je.workingColorSpace),ve=b.colorSpace===Ht?null:je.getPrimaries(b.colorSpace),Ce=b.colorSpace===Ht||me===ve?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let ze=p(b)&&f(b.image)===!1,ne=_(b.image,ze,!1,i.maxTextureSize);ne=_e(b,ne);let Je=f(ne)||a,Ge=r.convert(b.format,b.colorSpace),Oe=r.convert(b.type),Re=v(b.internalFormat,Ge,Oe,b.colorSpace,b.isVideoTexture);H(ie,b,Je);let xe,C=b.mipmaps,le=a&&b.isVideoTexture!==!0&&Re!==zc,we=Se.__version===void 0||te===!0,Me=A(b,ne,Je);if(b.isDepthTexture)Re=s.DEPTH_COMPONENT,a?b.type===Un?Re=s.DEPTH_COMPONENT32F:b.type===Nn?Re=s.DEPTH_COMPONENT24:b.type===Qn?Re=s.DEPTH24_STENCIL8:Re=s.DEPTH_COMPONENT16:b.type===Un&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===ei&&Re===s.DEPTH_COMPONENT&&b.type!==wa&&b.type!==Nn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=Nn,Oe=r.convert(b.type)),b.format===zi&&Re===s.DEPTH_COMPONENT&&(Re=s.DEPTH_STENCIL,b.type!==Qn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Qn,Oe=r.convert(b.type))),we&&(le?t.texStorage2D(s.TEXTURE_2D,1,Re,ne.width,ne.height):t.texImage2D(s.TEXTURE_2D,0,Re,ne.width,ne.height,0,Ge,Oe,null));else if(b.isDataTexture)if(C.length>0&&Je){le&&we&&t.texStorage2D(s.TEXTURE_2D,Me,Re,C[0].width,C[0].height);for(let re=0,I=C.length;re<I;re++)xe=C[re],le?t.texSubImage2D(s.TEXTURE_2D,re,0,0,xe.width,xe.height,Ge,Oe,xe.data):t.texImage2D(s.TEXTURE_2D,re,Re,xe.width,xe.height,0,Ge,Oe,xe.data);b.generateMipmaps=!1}else le?(we&&t.texStorage2D(s.TEXTURE_2D,Me,Re,ne.width,ne.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,ne.width,ne.height,Ge,Oe,ne.data)):t.texImage2D(s.TEXTURE_2D,0,Re,ne.width,ne.height,0,Ge,Oe,ne.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){le&&we&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Me,Re,C[0].width,C[0].height,ne.depth);for(let re=0,I=C.length;re<I;re++)xe=C[re],b.format!==$t?Ge!==null?le?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,re,0,0,0,xe.width,xe.height,ne.depth,Ge,xe.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,re,Re,xe.width,xe.height,ne.depth,0,xe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?t.texSubImage3D(s.TEXTURE_2D_ARRAY,re,0,0,0,xe.width,xe.height,ne.depth,Ge,Oe,xe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,re,Re,xe.width,xe.height,ne.depth,0,Ge,Oe,xe.data)}else{le&&we&&t.texStorage2D(s.TEXTURE_2D,Me,Re,C[0].width,C[0].height);for(let re=0,I=C.length;re<I;re++)xe=C[re],b.format!==$t?Ge!==null?le?t.compressedTexSubImage2D(s.TEXTURE_2D,re,0,0,xe.width,xe.height,Ge,xe.data):t.compressedTexImage2D(s.TEXTURE_2D,re,Re,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?t.texSubImage2D(s.TEXTURE_2D,re,0,0,xe.width,xe.height,Ge,Oe,xe.data):t.texImage2D(s.TEXTURE_2D,re,Re,xe.width,xe.height,0,Ge,Oe,xe.data)}else if(b.isDataArrayTexture)le?(we&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Me,Re,ne.width,ne.height,ne.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,Ge,Oe,ne.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,Re,ne.width,ne.height,ne.depth,0,Ge,Oe,ne.data);else if(b.isData3DTexture)le?(we&&t.texStorage3D(s.TEXTURE_3D,Me,Re,ne.width,ne.height,ne.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,Ge,Oe,ne.data)):t.texImage3D(s.TEXTURE_3D,0,Re,ne.width,ne.height,ne.depth,0,Ge,Oe,ne.data);else if(b.isFramebufferTexture){if(we)if(le)t.texStorage2D(s.TEXTURE_2D,Me,Re,ne.width,ne.height);else{let re=ne.width,I=ne.height;for(let he=0;he<Me;he++)t.texImage2D(s.TEXTURE_2D,he,Re,re,I,0,Ge,Oe,null),re>>=1,I>>=1}}else if(C.length>0&&Je){le&&we&&t.texStorage2D(s.TEXTURE_2D,Me,Re,C[0].width,C[0].height);for(let re=0,I=C.length;re<I;re++)xe=C[re],le?t.texSubImage2D(s.TEXTURE_2D,re,0,0,Ge,Oe,xe):t.texImage2D(s.TEXTURE_2D,re,Re,Ge,Oe,xe);b.generateMipmaps=!1}else le?(we&&t.texStorage2D(s.TEXTURE_2D,Me,Re,ne.width,ne.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ge,Oe,ne)):t.texImage2D(s.TEXTURE_2D,0,Re,Ge,Oe,ne);y(b,Je)&&x(ie),Se.__version=ee.version,b.onUpdate&&b.onUpdate(b)}E.__version=b.version}function be(E,b,U){if(b.image.length!==6)return;let ie=Q(E,b),te=b.source;t.bindTexture(s.TEXTURE_CUBE_MAP,E.__webglTexture,s.TEXTURE0+U);let ee=n.get(te);if(te.version!==ee.__version||ie===!0){t.activeTexture(s.TEXTURE0+U);let Se=je.getPrimaries(je.workingColorSpace),me=b.colorSpace===Ht?null:je.getPrimaries(b.colorSpace),ve=b.colorSpace===Ht||Se===me?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let Ce=b.isCompressedTexture||b.image[0].isCompressedTexture,ze=b.image[0]&&b.image[0].isDataTexture,ne=[];for(let re=0;re<6;re++)!Ce&&!ze?ne[re]=_(b.image[re],!1,!0,i.maxCubemapSize):ne[re]=ze?b.image[re].image:b.image[re],ne[re]=_e(b,ne[re]);let Je=ne[0],Ge=f(Je)||a,Oe=r.convert(b.format,b.colorSpace),Re=r.convert(b.type),xe=v(b.internalFormat,Oe,Re,b.colorSpace),C=a&&b.isVideoTexture!==!0,le=ee.__version===void 0||ie===!0,we=A(b,Je,Ge);H(s.TEXTURE_CUBE_MAP,b,Ge);let Me;if(Ce){C&&le&&t.texStorage2D(s.TEXTURE_CUBE_MAP,we,xe,Je.width,Je.height);for(let re=0;re<6;re++){Me=ne[re].mipmaps;for(let I=0;I<Me.length;I++){let he=Me[I];b.format!==$t?Oe!==null?C?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,I,0,0,he.width,he.height,Oe,he.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,I,xe,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):C?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,I,0,0,he.width,he.height,Oe,Re,he.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,I,xe,he.width,he.height,0,Oe,Re,he.data)}}}else{Me=b.mipmaps,C&&le&&(Me.length>0&&we++,t.texStorage2D(s.TEXTURE_CUBE_MAP,we,xe,ne[0].width,ne[0].height));for(let re=0;re<6;re++)if(ze){C?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,ne[re].width,ne[re].height,Oe,Re,ne[re].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,xe,ne[re].width,ne[re].height,0,Oe,Re,ne[re].data);for(let I=0;I<Me.length;I++){let ge=Me[I].image[re].image;C?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,I+1,0,0,ge.width,ge.height,Oe,Re,ge.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,I+1,xe,ge.width,ge.height,0,Oe,Re,ge.data)}}else{C?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Oe,Re,ne[re]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,xe,Oe,Re,ne[re]);for(let I=0;I<Me.length;I++){let he=Me[I];C?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,I+1,0,0,Oe,Re,he.image[re]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,I+1,xe,Oe,Re,he.image[re])}}}y(b,Ge)&&x(s.TEXTURE_CUBE_MAP),ee.__version=te.version,b.onUpdate&&b.onUpdate(b)}E.__version=b.version}function pe(E,b,U,ie,te,ee){let Se=r.convert(U.format,U.colorSpace),me=r.convert(U.type),ve=v(U.internalFormat,Se,me,U.colorSpace);if(!n.get(b).__hasExternalTextures){let ze=Math.max(1,b.width>>ee),ne=Math.max(1,b.height>>ee);te===s.TEXTURE_3D||te===s.TEXTURE_2D_ARRAY?t.texImage3D(te,ee,ve,ze,ne,b.depth,0,Se,me,null):t.texImage2D(te,ee,ve,ze,ne,0,Se,me,null)}t.bindFramebuffer(s.FRAMEBUFFER,E),K(b)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ie,te,n.get(U).__webglTexture,0,ae(b)):(te===s.TEXTURE_2D||te>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ie,te,n.get(U).__webglTexture,ee),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Le(E,b,U){if(s.bindRenderbuffer(s.RENDERBUFFER,E),b.depthBuffer&&!b.stencilBuffer){let ie=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(U||K(b)){let te=b.depthTexture;te&&te.isDepthTexture&&(te.type===Un?ie=s.DEPTH_COMPONENT32F:te.type===Nn&&(ie=s.DEPTH_COMPONENT24));let ee=ae(b);K(b)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ee,ie,b.width,b.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,ee,ie,b.width,b.height)}else s.renderbufferStorage(s.RENDERBUFFER,ie,b.width,b.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,E)}else if(b.depthBuffer&&b.stencilBuffer){let ie=ae(b);U&&K(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ie,s.DEPTH24_STENCIL8,b.width,b.height):K(b)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ie,s.DEPTH24_STENCIL8,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,E)}else{let ie=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let te=0;te<ie.length;te++){let ee=ie[te],Se=r.convert(ee.format,ee.colorSpace),me=r.convert(ee.type),ve=v(ee.internalFormat,Se,me,ee.colorSpace),Ce=ae(b);U&&K(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ce,ve,b.width,b.height):K(b)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ce,ve,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,ve,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ie(E,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,E),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),B(b.depthTexture,0);let ie=n.get(b.depthTexture).__webglTexture,te=ae(b);if(b.depthTexture.format===ei)K(b)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ie,0,te):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ie,0);else if(b.depthTexture.format===zi)K(b)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ie,0,te):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Ee(E){let b=n.get(E),U=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!b.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");Ie(b.__webglFramebuffer,E)}else if(U){b.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[ie]),b.__webglDepthbuffer[ie]=s.createRenderbuffer(),Le(b.__webglDepthbuffer[ie],E,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=s.createRenderbuffer(),Le(b.__webglDepthbuffer,E,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function De(E,b,U){let ie=n.get(E);b!==void 0&&pe(ie.__webglFramebuffer,E,E.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),U!==void 0&&Ee(E)}function P(E){let b=E.texture,U=n.get(E),ie=n.get(b);E.addEventListener("dispose",k),E.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=s.createTexture()),ie.__version=b.version,o.memory.textures++);let te=E.isWebGLCubeRenderTarget===!0,ee=E.isWebGLMultipleRenderTargets===!0,Se=f(E)||a;if(te){U.__webglFramebuffer=[];for(let me=0;me<6;me++)if(a&&b.mipmaps&&b.mipmaps.length>0){U.__webglFramebuffer[me]=[];for(let ve=0;ve<b.mipmaps.length;ve++)U.__webglFramebuffer[me][ve]=s.createFramebuffer()}else U.__webglFramebuffer[me]=s.createFramebuffer()}else{if(a&&b.mipmaps&&b.mipmaps.length>0){U.__webglFramebuffer=[];for(let me=0;me<b.mipmaps.length;me++)U.__webglFramebuffer[me]=s.createFramebuffer()}else U.__webglFramebuffer=s.createFramebuffer();if(ee)if(i.drawBuffers){let me=E.texture;for(let ve=0,Ce=me.length;ve<Ce;ve++){let ze=n.get(me[ve]);ze.__webglTexture===void 0&&(ze.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&E.samples>0&&K(E)===!1){let me=ee?b:[b];U.__webglMultisampledFramebuffer=s.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ve=0;ve<me.length;ve++){let Ce=me[ve];U.__webglColorRenderbuffer[ve]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,U.__webglColorRenderbuffer[ve]);let ze=r.convert(Ce.format,Ce.colorSpace),ne=r.convert(Ce.type),Je=v(Ce.internalFormat,ze,ne,Ce.colorSpace,E.isXRRenderTarget===!0),Ge=ae(E);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ge,Je,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.RENDERBUFFER,U.__webglColorRenderbuffer[ve])}s.bindRenderbuffer(s.RENDERBUFFER,null),E.depthBuffer&&(U.__webglDepthRenderbuffer=s.createRenderbuffer(),Le(U.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(te){t.bindTexture(s.TEXTURE_CUBE_MAP,ie.__webglTexture),H(s.TEXTURE_CUBE_MAP,b,Se);for(let me=0;me<6;me++)if(a&&b.mipmaps&&b.mipmaps.length>0)for(let ve=0;ve<b.mipmaps.length;ve++)pe(U.__webglFramebuffer[me][ve],E,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+me,ve);else pe(U.__webglFramebuffer[me],E,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);y(b,Se)&&x(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ee){let me=E.texture;for(let ve=0,Ce=me.length;ve<Ce;ve++){let ze=me[ve],ne=n.get(ze);t.bindTexture(s.TEXTURE_2D,ne.__webglTexture),H(s.TEXTURE_2D,ze,Se),pe(U.__webglFramebuffer,E,ze,s.COLOR_ATTACHMENT0+ve,s.TEXTURE_2D,0),y(ze,Se)&&x(s.TEXTURE_2D)}t.unbindTexture()}else{let me=s.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(a?me=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(me,ie.__webglTexture),H(me,b,Se),a&&b.mipmaps&&b.mipmaps.length>0)for(let ve=0;ve<b.mipmaps.length;ve++)pe(U.__webglFramebuffer[ve],E,b,s.COLOR_ATTACHMENT0,me,ve);else pe(U.__webglFramebuffer,E,b,s.COLOR_ATTACHMENT0,me,0);y(b,Se)&&x(me),t.unbindTexture()}E.depthBuffer&&Ee(E)}function ce(E){let b=f(E)||a,U=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ie=0,te=U.length;ie<te;ie++){let ee=U[ie];if(y(ee,b)){let Se=E.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,me=n.get(ee).__webglTexture;t.bindTexture(Se,me),x(Se),t.unbindTexture()}}}function Z(E){if(a&&E.samples>0&&K(E)===!1){let b=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],U=E.width,ie=E.height,te=s.COLOR_BUFFER_BIT,ee=[],Se=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,me=n.get(E),ve=E.isWebGLMultipleRenderTargets===!0;if(ve)for(let Ce=0;Ce<b.length;Ce++)t.bindFramebuffer(s.FRAMEBUFFER,me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let Ce=0;Ce<b.length;Ce++){ee.push(s.COLOR_ATTACHMENT0+Ce),E.depthBuffer&&ee.push(Se);let ze=me.__ignoreDepthValues!==void 0?me.__ignoreDepthValues:!1;if(ze===!1&&(E.depthBuffer&&(te|=s.DEPTH_BUFFER_BIT),E.stencilBuffer&&(te|=s.STENCIL_BUFFER_BIT)),ve&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,me.__webglColorRenderbuffer[Ce]),ze===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Se]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Se])),ve){let ne=n.get(b[Ce]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ne,0)}s.blitFramebuffer(0,0,U,ie,0,0,U,ie,te,s.NEAREST),c&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ee)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ve)for(let Ce=0;Ce<b.length;Ce++){t.bindFramebuffer(s.FRAMEBUFFER,me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,me.__webglColorRenderbuffer[Ce]);let ze=n.get(b[Ce]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,ze,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}}function ae(E){return Math.min(i.maxSamples,E.samples)}function K(E){let b=n.get(E);return a&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Te(E){let b=o.render.frame;h.get(E)!==b&&(h.set(E,b),E.update())}function _e(E,b){let U=E.colorSpace,ie=E.format,te=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===ko||U!==bn&&U!==Ht&&(je.getTransfer(U)===et?a===!1?e.has("EXT_sRGB")===!0&&ie===$t?(E.format=ko,E.minFilter=kt,E.generateMipmaps=!1):b=_r.sRGBToLinear(b):(ie!==$t||te!==Bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),b}this.allocateTextureUnit=D,this.resetTextureUnits=j,this.setTexture2D=B,this.setTexture2DArray=$,this.setTexture3D=J,this.setTextureCube=X,this.rebindTextures=De,this.setupRenderTarget=P,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=Z,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=K}function Jg(s,e,t){let n=t.isWebGL2;function i(r,o=Ht){let a,l=je.getTransfer(o);if(r===Bn)return s.UNSIGNED_BYTE;if(r===Nc)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Uc)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Au)return s.BYTE;if(r===Ru)return s.SHORT;if(r===wa)return s.UNSIGNED_SHORT;if(r===Dc)return s.INT;if(r===Nn)return s.UNSIGNED_INT;if(r===Un)return s.FLOAT;if(r===cs)return n?s.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Cu)return s.ALPHA;if(r===$t)return s.RGBA;if(r===Pu)return s.LUMINANCE;if(r===Lu)return s.LUMINANCE_ALPHA;if(r===ei)return s.DEPTH_COMPONENT;if(r===zi)return s.DEPTH_STENCIL;if(r===ko)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Iu)return s.RED;if(r===Oc)return s.RED_INTEGER;if(r===Du)return s.RG;if(r===Fc)return s.RG_INTEGER;if(r===Bc)return s.RGBA_INTEGER;if(r===Qr||r===eo||r===to||r===no)if(l===et)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Qr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===eo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===to)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===no)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Qr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===eo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===to)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===no)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===sl||r===rl||r===ol||r===al)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===sl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===rl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ol)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===al)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===zc)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===ll||r===cl)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===ll)return l===et?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===cl)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===hl||r===ul||r===dl||r===fl||r===pl||r===ml||r===gl||r===_l||r===xl||r===vl||r===yl||r===Ml||r===bl||r===El)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===hl)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ul)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===dl)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===fl)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===pl)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ml)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===gl)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===_l)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===xl)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===vl)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===yl)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ml)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===bl)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===El)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===io||r===Sl||r===Tl)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===io)return l===et?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Sl)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Tl)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Nu||r===wl||r===Al||r===Rl)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===io)return a.COMPRESSED_RED_RGTC1_EXT;if(r===wl)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Al)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Rl)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Qn?n?s.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}var ta=class extends Pt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},dt=class extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}},$g={type:"move"},rs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let f=t.getJointPose(_,n),p=this._getHandJoint(c,_);f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=f.radius),p.visible=f!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent($g)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new dt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},na=class extends hn{constructor(e,t){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,m=null,g=null,_=t.getContextAttributes(),f=null,p=null,y=[],x=[],v=new oe,A=null,R=new Pt;R.layers.enable(1),R.viewport=new Mt;let w=new Pt;w.layers.enable(2),w.viewport=new Mt;let k=[R,w],M=new ta;M.layers.enable(1),M.layers.enable(2);let T=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let Q=y[H];return Q===void 0&&(Q=new rs,y[H]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(H){let Q=y[H];return Q===void 0&&(Q=new rs,y[H]=Q),Q.getGripSpace()},this.getHand=function(H){let Q=y[H];return Q===void 0&&(Q=new rs,y[H]=Q),Q.getHandSpace()};function q(H){let Q=x.indexOf(H.inputSource);if(Q===-1)return;let de=y[Q];de!==void 0&&(de.update(H.inputSource,H.frame,c||o),de.dispatchEvent({type:H.type,data:H.inputSource}))}function j(){i.removeEventListener("select",q),i.removeEventListener("selectstart",q),i.removeEventListener("selectend",q),i.removeEventListener("squeeze",q),i.removeEventListener("squeezestart",q),i.removeEventListener("squeezeend",q),i.removeEventListener("end",j),i.removeEventListener("inputsourceschange",D);for(let H=0;H<y.length;H++){let Q=x[H];Q!==null&&(x[H]=null,y[H].disconnect(Q))}T=null,N=null,e.setRenderTarget(f),m=null,d=null,u=null,i=null,p=null,se.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(v.width,v.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(H){if(i=H,i!==null){if(f=e.getRenderTarget(),i.addEventListener("select",q),i.addEventListener("selectstart",q),i.addEventListener("selectend",q),i.addEventListener("squeeze",q),i.addEventListener("squeezestart",q),i.addEventListener("squeezeend",q),i.addEventListener("end",j),i.addEventListener("inputsourceschange",D),_.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(v),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let Q={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(i,t,Q),i.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),p=new En(m.framebufferWidth,m.framebufferHeight,{format:$t,type:Bn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let Q=null,de=null,be=null;_.depth&&(be=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=_.stencil?zi:ei,de=_.stencil?Qn:Nn);let pe={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:r};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(pe),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),p=new En(d.textureWidth,d.textureHeight,{format:$t,type:Bn,depthTexture:new wr(d.textureWidth,d.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});let Le=e.properties.get(p);Le.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),se.setContext(i),se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function D(H){for(let Q=0;Q<H.removed.length;Q++){let de=H.removed[Q],be=x.indexOf(de);be>=0&&(x[be]=null,y[be].disconnect(de))}for(let Q=0;Q<H.added.length;Q++){let de=H.added[Q],be=x.indexOf(de);if(be===-1){for(let Le=0;Le<y.length;Le++)if(Le>=x.length){x.push(de),be=Le;break}else if(x[Le]===null){x[Le]=de,be=Le;break}if(be===-1)break}let pe=y[be];pe&&pe.connect(de)}}let F=new L,B=new L;function $(H,Q,de){F.setFromMatrixPosition(Q.matrixWorld),B.setFromMatrixPosition(de.matrixWorld);let be=F.distanceTo(B),pe=Q.projectionMatrix.elements,Le=de.projectionMatrix.elements,Ie=pe[14]/(pe[10]-1),Ee=pe[14]/(pe[10]+1),De=(pe[9]+1)/pe[5],P=(pe[9]-1)/pe[5],ce=(pe[8]-1)/pe[0],Z=(Le[8]+1)/Le[0],ae=Ie*ce,K=Ie*Z,Te=be/(-ce+Z),_e=Te*-ce;Q.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(_e),H.translateZ(Te),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();let E=Ie+Te,b=Ee+Te,U=ae-_e,ie=K+(be-_e),te=De*Ee/b*E,ee=P*Ee/b*E;H.projectionMatrix.makePerspective(U,ie,te,ee,E,b),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function J(H,Q){Q===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(Q.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(i===null)return;M.near=w.near=R.near=H.near,M.far=w.far=R.far=H.far,(T!==M.near||N!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),T=M.near,N=M.far);let Q=H.parent,de=M.cameras;J(M,Q);for(let be=0;be<de.length;be++)J(de[be],Q);de.length===2?$(M,R,w):M.projectionMatrix.copy(R.projectionMatrix),X(H,M,Q)};function X(H,Q,de){de===null?H.matrix.copy(Q.matrixWorld):(H.matrix.copy(de.matrixWorld),H.matrix.invert(),H.matrix.multiply(Q.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(Q.projectionMatrix),H.projectionMatrixInverse.copy(Q.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=hs*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(H){l=H,d!==null&&(d.fixedFoveation=H),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=H)};let z=null;function Y(H,Q){if(h=Q.getViewerPose(c||o),g=Q,h!==null){let de=h.views;m!==null&&(e.setRenderTargetFramebuffer(p,m.framebuffer),e.setRenderTarget(p));let be=!1;de.length!==M.cameras.length&&(M.cameras.length=0,be=!0);for(let pe=0;pe<de.length;pe++){let Le=de[pe],Ie=null;if(m!==null)Ie=m.getViewport(Le);else{let De=u.getViewSubImage(d,Le);Ie=De.viewport,pe===0&&(e.setRenderTargetTextures(p,De.colorTexture,d.ignoreDepthValues?void 0:De.depthStencilTexture),e.setRenderTarget(p))}let Ee=k[pe];Ee===void 0&&(Ee=new Pt,Ee.layers.enable(pe),Ee.viewport=new Mt,k[pe]=Ee),Ee.matrix.fromArray(Le.transform.matrix),Ee.matrix.decompose(Ee.position,Ee.quaternion,Ee.scale),Ee.projectionMatrix.fromArray(Le.projectionMatrix),Ee.projectionMatrixInverse.copy(Ee.projectionMatrix).invert(),Ee.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),pe===0&&(M.matrix.copy(Ee.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),be===!0&&M.cameras.push(Ee)}}for(let de=0;de<y.length;de++){let be=x[de],pe=y[de];be!==null&&pe!==void 0&&pe.update(be,Q,c||o)}z&&z(H,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}let se=new Xc;se.setAnimationLoop(Y),this.setAnimationLoop=function(H){z=H},this.dispose=function(){}}};function Kg(s,e){function t(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function n(f,p){p.color.getRGB(f.fogColor.value,Wc(s)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function i(f,p,y,x,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(f,p):p.isMeshToonMaterial?(r(f,p),u(f,p)):p.isMeshPhongMaterial?(r(f,p),h(f,p)):p.isMeshStandardMaterial?(r(f,p),d(f,p),p.isMeshPhysicalMaterial&&m(f,p,v)):p.isMeshMatcapMaterial?(r(f,p),g(f,p)):p.isMeshDepthMaterial?r(f,p):p.isMeshDistanceMaterial?(r(f,p),_(f,p)):p.isMeshNormalMaterial?r(f,p):p.isLineBasicMaterial?(o(f,p),p.isLineDashedMaterial&&a(f,p)):p.isPointsMaterial?l(f,p,y,x):p.isSpriteMaterial?c(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,t(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===Tt&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,t(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===Tt&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,t(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,t(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let y=e.get(p).envMap;if(y&&(f.envMap.value=y,f.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap){f.lightMap.value=p.lightMap;let x=s._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=p.lightMapIntensity*x,t(p.lightMap,f.lightMapTransform)}p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,f.aoMapTransform))}function o(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform))}function a(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function l(f,p,y,x){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*y,f.scale.value=x*.5,p.map&&(f.map.value=p.map,t(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function c(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function h(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function u(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function d(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,f.roughnessMapTransform)),e.get(p).envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function m(f,p,y){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Tt&&f.clearcoatNormalScale.value.negate())),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=y.texture,f.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,p){p.matcap&&(f.matcap.value=p.matcap)}function _(f,p){let y=e.get(p).light;f.referencePosition.value.setFromMatrixPosition(y.matrixWorld),f.nearDistance.value=y.shadow.camera.near,f.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function jg(s,e,t,n){let i={},r={},o=[],a=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,x){let v=x.program;n.uniformBlockBinding(y,v)}function c(y,x){let v=i[y.id];v===void 0&&(g(y),v=h(y),i[y.id]=v,y.addEventListener("dispose",f));let A=x.program;n.updateUBOMapping(y,A);let R=e.render.frame;r[y.id]!==R&&(d(y),r[y.id]=R)}function h(y){let x=u();y.__bindingPointIndex=x;let v=s.createBuffer(),A=y.__size,R=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,A,R),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,v),v}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let x=i[y.id],v=y.uniforms,A=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let R=0,w=v.length;R<w;R++){let k=Array.isArray(v[R])?v[R]:[v[R]];for(let M=0,T=k.length;M<T;M++){let N=k[M];if(m(N,R,M,A)===!0){let q=N.__offset,j=Array.isArray(N.value)?N.value:[N.value],D=0;for(let F=0;F<j.length;F++){let B=j[F],$=_(B);typeof B=="number"||typeof B=="boolean"?(N.__data[0]=B,s.bufferSubData(s.UNIFORM_BUFFER,q+D,N.__data)):B.isMatrix3?(N.__data[0]=B.elements[0],N.__data[1]=B.elements[1],N.__data[2]=B.elements[2],N.__data[3]=0,N.__data[4]=B.elements[3],N.__data[5]=B.elements[4],N.__data[6]=B.elements[5],N.__data[7]=0,N.__data[8]=B.elements[6],N.__data[9]=B.elements[7],N.__data[10]=B.elements[8],N.__data[11]=0):(B.toArray(N.__data,D),D+=$.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,q,N.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(y,x,v,A){let R=y.value,w=x+"_"+v;if(A[w]===void 0)return typeof R=="number"||typeof R=="boolean"?A[w]=R:A[w]=R.clone(),!0;{let k=A[w];if(typeof R=="number"||typeof R=="boolean"){if(k!==R)return A[w]=R,!0}else if(k.equals(R)===!1)return k.copy(R),!0}return!1}function g(y){let x=y.uniforms,v=0,A=16;for(let w=0,k=x.length;w<k;w++){let M=Array.isArray(x[w])?x[w]:[x[w]];for(let T=0,N=M.length;T<N;T++){let q=M[T],j=Array.isArray(q.value)?q.value:[q.value];for(let D=0,F=j.length;D<F;D++){let B=j[D],$=_(B),J=v%A;J!==0&&A-J<$.boundary&&(v+=A-J),q.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=v,v+=$.storage}}}let R=v%A;return R>0&&(v+=A-R),y.__size=v,y.__cache={},this}function _(y){let x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function f(y){let x=y.target;x.removeEventListener("dispose",f);let v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function p(){for(let y in i)s.deleteBuffer(i[y]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}var ps=class{constructor(e={}){let{canvas:t=od(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;let m=new Uint32Array(4),g=new Int32Array(4),_=null,f=null,p=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=yt,this._useLegacyLights=!1,this.toneMapping=Fn,this.toneMappingExposure=1;let x=this,v=!1,A=0,R=0,w=null,k=-1,M=null,T=new Mt,N=new Mt,q=null,j=new Be(0),D=0,F=t.width,B=t.height,$=1,J=null,X=null,z=new Mt(0,0,F,B),Y=new Mt(0,0,F,B),se=!1,H=new Vi,Q=!1,de=!1,be=null,pe=new ct,Le=new oe,Ie=new L,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function De(){return w===null?$:1}let P=n;function ce(S,O){for(let G=0;G<S.length;G++){let W=S[G],V=t.getContext(W,O);if(V!==null)return V}return null}try{let S={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ta}`),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",I,!1),t.addEventListener("webglcontextcreationerror",he,!1),P===null){let O=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&O.shift(),P=ce(O,S),P===null)throw ce(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&P instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),P.getShaderPrecisionFormat===void 0&&(P.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Z,ae,K,Te,_e,E,b,U,ie,te,ee,Se,me,ve,Ce,ze,ne,Je,Ge,Oe,Re,xe,C,le;function we(){Z=new _m(P),ae=new um(P,Z,e),Z.init(ae),xe=new Jg(P,Z,ae),K=new qg(P,Z,ae),Te=new ym(P),_e=new Ug,E=new Zg(P,Z,K,_e,ae,xe,Te),b=new fm(x),U=new gm(x),ie=new Ad(P,ae),C=new cm(P,Z,ie,ae),te=new xm(P,ie,Te,C),ee=new Sm(P,te,ie,Te),Ge=new Em(P,ae,E),ze=new dm(_e),Se=new Ng(x,b,U,Z,ae,C,ze),me=new Kg(x,_e),ve=new Fg,Ce=new Gg(Z,ae),Je=new lm(x,b,U,K,ee,d,l),ne=new Yg(x,ee,ae),le=new jg(P,Te,ae,K),Oe=new hm(P,Z,Te,ae),Re=new vm(P,Z,Te,ae),Te.programs=Se.programs,x.capabilities=ae,x.extensions=Z,x.properties=_e,x.renderLists=ve,x.shadowMap=ne,x.state=K,x.info=Te}we();let Me=new na(x,P);this.xr=Me,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let S=Z.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=Z.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(S){S!==void 0&&($=S,this.setSize(F,B,!1))},this.getSize=function(S){return S.set(F,B)},this.setSize=function(S,O,G=!0){if(Me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=S,B=O,t.width=Math.floor(S*$),t.height=Math.floor(O*$),G===!0&&(t.style.width=S+"px",t.style.height=O+"px"),this.setViewport(0,0,S,O)},this.getDrawingBufferSize=function(S){return S.set(F*$,B*$).floor()},this.setDrawingBufferSize=function(S,O,G){F=S,B=O,$=G,t.width=Math.floor(S*G),t.height=Math.floor(O*G),this.setViewport(0,0,S,O)},this.getCurrentViewport=function(S){return S.copy(T)},this.getViewport=function(S){return S.copy(z)},this.setViewport=function(S,O,G,W){S.isVector4?z.set(S.x,S.y,S.z,S.w):z.set(S,O,G,W),K.viewport(T.copy(z).multiplyScalar($).floor())},this.getScissor=function(S){return S.copy(Y)},this.setScissor=function(S,O,G,W){S.isVector4?Y.set(S.x,S.y,S.z,S.w):Y.set(S,O,G,W),K.scissor(N.copy(Y).multiplyScalar($).floor())},this.getScissorTest=function(){return se},this.setScissorTest=function(S){K.setScissorTest(se=S)},this.setOpaqueSort=function(S){J=S},this.setTransparentSort=function(S){X=S},this.getClearColor=function(S){return S.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor.apply(Je,arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha.apply(Je,arguments)},this.clear=function(S=!0,O=!0,G=!0){let W=0;if(S){let V=!1;if(w!==null){let ye=w.texture.format;V=ye===Bc||ye===Fc||ye===Oc}if(V){let ye=w.texture.type,Ae=ye===Bn||ye===Nn||ye===wa||ye===Qn||ye===Nc||ye===Uc,Ue=Je.getClearColor(),Fe=Je.getClearAlpha(),We=Ue.r,ke=Ue.g,He=Ue.b;Ae?(m[0]=We,m[1]=ke,m[2]=He,m[3]=Fe,P.clearBufferuiv(P.COLOR,0,m)):(g[0]=We,g[1]=ke,g[2]=He,g[3]=Fe,P.clearBufferiv(P.COLOR,0,g))}else W|=P.COLOR_BUFFER_BIT}O&&(W|=P.DEPTH_BUFFER_BIT),G&&(W|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",I,!1),t.removeEventListener("webglcontextcreationerror",he,!1),ve.dispose(),Ce.dispose(),_e.dispose(),b.dispose(),U.dispose(),ee.dispose(),C.dispose(),le.dispose(),Se.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",at),Me.removeEventListener("sessionend",$e),be&&(be.dispose(),be=null),ht.stop()};function re(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;let S=Te.autoReset,O=ne.enabled,G=ne.autoUpdate,W=ne.needsUpdate,V=ne.type;we(),Te.autoReset=S,ne.enabled=O,ne.autoUpdate=G,ne.needsUpdate=W,ne.type=V}function he(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function ge(S){let O=S.target;O.removeEventListener("dispose",ge),Ne(O)}function Ne(S){Pe(S),_e.remove(S)}function Pe(S){let O=_e.get(S).programs;O!==void 0&&(O.forEach(function(G){Se.releaseProgram(G)}),S.isShaderMaterial&&Se.releaseShaderCache(S))}this.renderBufferDirect=function(S,O,G,W,V,ye){O===null&&(O=Ee);let Ae=V.isMesh&&V.matrixWorld.determinant()<0,Ue=Uh(S,O,G,W,V);K.setMaterial(W,Ae);let Fe=G.index,We=1;if(W.wireframe===!0){if(Fe=te.getWireframeAttribute(G),Fe===void 0)return;We=2}let ke=G.drawRange,He=G.attributes.position,lt=ke.start*We,Nt=(ke.start+ke.count)*We;ye!==null&&(lt=Math.max(lt,ye.start*We),Nt=Math.min(Nt,(ye.start+ye.count)*We)),Fe!==null?(lt=Math.max(lt,0),Nt=Math.min(Nt,Fe.count)):He!=null&&(lt=Math.max(lt,0),Nt=Math.min(Nt,He.count));let mt=Nt-lt;if(mt<0||mt===1/0)return;C.setup(V,W,Ue,G,Fe);let pn,it=Oe;if(Fe!==null&&(pn=ie.get(Fe),it=Re,it.setIndex(pn)),V.isMesh)W.wireframe===!0?(K.setLineWidth(W.wireframeLinewidth*De()),it.setMode(P.LINES)):it.setMode(P.TRIANGLES);else if(V.isLine){let Xe=W.linewidth;Xe===void 0&&(Xe=1),K.setLineWidth(Xe*De()),V.isLineSegments?it.setMode(P.LINES):V.isLineLoop?it.setMode(P.LINE_LOOP):it.setMode(P.LINE_STRIP)}else V.isPoints?it.setMode(P.POINTS):V.isSprite&&it.setMode(P.TRIANGLES);if(V.isBatchedMesh)it.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else if(V.isInstancedMesh)it.renderInstances(lt,mt,V.count);else if(G.isInstancedBufferGeometry){let Xe=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Zr=Math.min(G.instanceCount,Xe);it.renderInstances(lt,mt,Zr)}else it.render(lt,mt)};function qe(S,O,G){S.transparent===!0&&S.side===Zt&&S.forceSinglePass===!1?(S.side=Tt,S.needsUpdate=!0,Ps(S,O,G),S.side=kn,S.needsUpdate=!0,Ps(S,O,G),S.side=Zt):Ps(S,O,G)}this.compile=function(S,O,G=null){G===null&&(G=S),f=Ce.get(G),f.init(),y.push(f),G.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(f.pushLight(V),V.castShadow&&f.pushShadow(V))}),S!==G&&S.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(f.pushLight(V),V.castShadow&&f.pushShadow(V))}),f.setupLights(x._useLegacyLights);let W=new Set;return S.traverse(function(V){let ye=V.material;if(ye)if(Array.isArray(ye))for(let Ae=0;Ae<ye.length;Ae++){let Ue=ye[Ae];qe(Ue,G,V),W.add(Ue)}else qe(ye,G,V),W.add(ye)}),y.pop(),f=null,W},this.compileAsync=function(S,O,G=null){let W=this.compile(S,O,G);return new Promise(V=>{function ye(){if(W.forEach(function(Ae){_e.get(Ae).currentProgram.isReady()&&W.delete(Ae)}),W.size===0){V(S);return}setTimeout(ye,10)}Z.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let Ze=null;function rt(S){Ze&&Ze(S)}function at(){ht.stop()}function $e(){ht.start()}let ht=new Xc;ht.setAnimationLoop(rt),typeof self<"u"&&ht.setContext(self),this.setAnimationLoop=function(S){Ze=S,Me.setAnimationLoop(S),S===null?ht.stop():ht.start()},Me.addEventListener("sessionstart",at),Me.addEventListener("sessionend",$e),this.render=function(S,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(O),O=Me.getCamera()),S.isScene===!0&&S.onBeforeRender(x,S,O,w),f=Ce.get(S,y.length),f.init(),y.push(f),pe.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),H.setFromProjectionMatrix(pe),de=this.localClippingEnabled,Q=ze.init(this.clippingPlanes,de),_=ve.get(S,p.length),_.init(),p.push(_),on(S,O,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(J,X),this.info.render.frame++,Q===!0&&ze.beginShadows();let G=f.state.shadowsArray;if(ne.render(G,S,O),Q===!0&&ze.endShadows(),this.info.autoReset===!0&&this.info.reset(),Je.render(_,S),f.setupLights(x._useLegacyLights),O.isArrayCamera){let W=O.cameras;for(let V=0,ye=W.length;V<ye;V++){let Ae=W[V];Ya(_,S,Ae,Ae.viewport)}}else Ya(_,S,O);w!==null&&(E.updateMultisampleRenderTarget(w),E.updateRenderTargetMipmap(w)),S.isScene===!0&&S.onAfterRender(x,S,O),C.resetDefaultState(),k=-1,M=null,y.pop(),y.length>0?f=y[y.length-1]:f=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function on(S,O,G,W){if(S.visible===!1)return;if(S.layers.test(O.layers)){if(S.isGroup)G=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(O);else if(S.isLight)f.pushLight(S),S.castShadow&&f.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||H.intersectsSprite(S)){W&&Ie.setFromMatrixPosition(S.matrixWorld).applyMatrix4(pe);let Ae=ee.update(S),Ue=S.material;Ue.visible&&_.push(S,Ae,Ue,G,Ie.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||H.intersectsObject(S))){let Ae=ee.update(S),Ue=S.material;if(W&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ie.copy(S.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),Ie.copy(Ae.boundingSphere.center)),Ie.applyMatrix4(S.matrixWorld).applyMatrix4(pe)),Array.isArray(Ue)){let Fe=Ae.groups;for(let We=0,ke=Fe.length;We<ke;We++){let He=Fe[We],lt=Ue[He.materialIndex];lt&&lt.visible&&_.push(S,Ae,lt,G,Ie.z,He)}}else Ue.visible&&_.push(S,Ae,Ue,G,Ie.z,null)}}let ye=S.children;for(let Ae=0,Ue=ye.length;Ae<Ue;Ae++)on(ye[Ae],O,G,W)}function Ya(S,O,G,W){let V=S.opaque,ye=S.transmissive,Ae=S.transparent;f.setupLightsView(G),Q===!0&&ze.setGlobalState(x.clippingPlanes,G),ye.length>0&&Nh(V,ye,O,G),W&&K.viewport(T.copy(W)),V.length>0&&Cs(V,O,G),ye.length>0&&Cs(ye,O,G),Ae.length>0&&Cs(Ae,O,G),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function Nh(S,O,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;let ye=ae.isWebGL2;be===null&&(be=new En(1,1,{generateMipmaps:!0,type:Z.has("EXT_color_buffer_half_float")?cs:Bn,minFilter:ls,samples:ye?4:0})),x.getDrawingBufferSize(Le),ye?be.setSize(Le.x,Le.y):be.setSize(mr(Le.x),mr(Le.y));let Ae=x.getRenderTarget();x.setRenderTarget(be),x.getClearColor(j),D=x.getClearAlpha(),D<1&&x.setClearColor(16777215,.5),x.clear();let Ue=x.toneMapping;x.toneMapping=Fn,Cs(S,G,W),E.updateMultisampleRenderTarget(be),E.updateRenderTargetMipmap(be);let Fe=!1;for(let We=0,ke=O.length;We<ke;We++){let He=O[We],lt=He.object,Nt=He.geometry,mt=He.material,pn=He.group;if(mt.side===Zt&&lt.layers.test(W.layers)){let it=mt.side;mt.side=Tt,mt.needsUpdate=!0,qa(lt,G,W,Nt,mt,pn),mt.side=it,mt.needsUpdate=!0,Fe=!0}}Fe===!0&&(E.updateMultisampleRenderTarget(be),E.updateRenderTargetMipmap(be)),x.setRenderTarget(Ae),x.setClearColor(j,D),x.toneMapping=Ue}function Cs(S,O,G){let W=O.isScene===!0?O.overrideMaterial:null;for(let V=0,ye=S.length;V<ye;V++){let Ae=S[V],Ue=Ae.object,Fe=Ae.geometry,We=W===null?Ae.material:W,ke=Ae.group;Ue.layers.test(G.layers)&&qa(Ue,O,G,Fe,We,ke)}}function qa(S,O,G,W,V,ye){S.onBeforeRender(x,O,G,W,V,ye),S.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),V.onBeforeRender(x,O,G,W,S,ye),V.transparent===!0&&V.side===Zt&&V.forceSinglePass===!1?(V.side=Tt,V.needsUpdate=!0,x.renderBufferDirect(G,O,W,V,S,ye),V.side=kn,V.needsUpdate=!0,x.renderBufferDirect(G,O,W,V,S,ye),V.side=Zt):x.renderBufferDirect(G,O,W,V,S,ye),S.onAfterRender(x,O,G,W,V,ye)}function Ps(S,O,G){O.isScene!==!0&&(O=Ee);let W=_e.get(S),V=f.state.lights,ye=f.state.shadowsArray,Ae=V.state.version,Ue=Se.getParameters(S,V.state,ye,O,G),Fe=Se.getProgramCacheKey(Ue),We=W.programs;W.environment=S.isMeshStandardMaterial?O.environment:null,W.fog=O.fog,W.envMap=(S.isMeshStandardMaterial?U:b).get(S.envMap||W.environment),We===void 0&&(S.addEventListener("dispose",ge),We=new Map,W.programs=We);let ke=We.get(Fe);if(ke!==void 0){if(W.currentProgram===ke&&W.lightsStateVersion===Ae)return Ja(S,Ue),ke}else Ue.uniforms=Se.getUniforms(S),S.onBuild(G,Ue,x),S.onBeforeCompile(Ue,x),ke=Se.acquireProgram(Ue,Fe),We.set(Fe,ke),W.uniforms=Ue.uniforms;let He=W.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(He.clippingPlanes=ze.uniform),Ja(S,Ue),W.needsLights=Fh(S),W.lightsStateVersion=Ae,W.needsLights&&(He.ambientLightColor.value=V.state.ambient,He.lightProbe.value=V.state.probe,He.directionalLights.value=V.state.directional,He.directionalLightShadows.value=V.state.directionalShadow,He.spotLights.value=V.state.spot,He.spotLightShadows.value=V.state.spotShadow,He.rectAreaLights.value=V.state.rectArea,He.ltc_1.value=V.state.rectAreaLTC1,He.ltc_2.value=V.state.rectAreaLTC2,He.pointLights.value=V.state.point,He.pointLightShadows.value=V.state.pointShadow,He.hemisphereLights.value=V.state.hemi,He.directionalShadowMap.value=V.state.directionalShadowMap,He.directionalShadowMatrix.value=V.state.directionalShadowMatrix,He.spotShadowMap.value=V.state.spotShadowMap,He.spotLightMatrix.value=V.state.spotLightMatrix,He.spotLightMap.value=V.state.spotLightMap,He.pointShadowMap.value=V.state.pointShadowMap,He.pointShadowMatrix.value=V.state.pointShadowMatrix),W.currentProgram=ke,W.uniformsList=null,ke}function Za(S){if(S.uniformsList===null){let O=S.currentProgram.getUniforms();S.uniformsList=Oi.seqWithValue(O.seq,S.uniforms)}return S.uniformsList}function Ja(S,O){let G=_e.get(S);G.outputColorSpace=O.outputColorSpace,G.batching=O.batching,G.instancing=O.instancing,G.instancingColor=O.instancingColor,G.skinning=O.skinning,G.morphTargets=O.morphTargets,G.morphNormals=O.morphNormals,G.morphColors=O.morphColors,G.morphTargetsCount=O.morphTargetsCount,G.numClippingPlanes=O.numClippingPlanes,G.numIntersection=O.numClipIntersection,G.vertexAlphas=O.vertexAlphas,G.vertexTangents=O.vertexTangents,G.toneMapping=O.toneMapping}function Uh(S,O,G,W,V){O.isScene!==!0&&(O=Ee),E.resetTextureUnits();let ye=O.fog,Ae=W.isMeshStandardMaterial?O.environment:null,Ue=w===null?x.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:bn,Fe=(W.isMeshStandardMaterial?U:b).get(W.envMap||Ae),We=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,ke=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),He=!!G.morphAttributes.position,lt=!!G.morphAttributes.normal,Nt=!!G.morphAttributes.color,mt=Fn;W.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(mt=x.toneMapping);let pn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,it=pn!==void 0?pn.length:0,Xe=_e.get(W),Zr=f.state.lights;if(Q===!0&&(de===!0||S!==M)){let Bt=S===M&&W.id===k;ze.setState(W,S,Bt)}let ot=!1;W.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==Zr.state.version||Xe.outputColorSpace!==Ue||V.isBatchedMesh&&Xe.batching===!1||!V.isBatchedMesh&&Xe.batching===!0||V.isInstancedMesh&&Xe.instancing===!1||!V.isInstancedMesh&&Xe.instancing===!0||V.isSkinnedMesh&&Xe.skinning===!1||!V.isSkinnedMesh&&Xe.skinning===!0||V.isInstancedMesh&&Xe.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Xe.instancingColor===!1&&V.instanceColor!==null||Xe.envMap!==Fe||W.fog===!0&&Xe.fog!==ye||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==ze.numPlanes||Xe.numIntersection!==ze.numIntersection)||Xe.vertexAlphas!==We||Xe.vertexTangents!==ke||Xe.morphTargets!==He||Xe.morphNormals!==lt||Xe.morphColors!==Nt||Xe.toneMapping!==mt||ae.isWebGL2===!0&&Xe.morphTargetsCount!==it)&&(ot=!0):(ot=!0,Xe.__version=W.version);let Gn=Xe.currentProgram;ot===!0&&(Gn=Ps(W,O,V));let $a=!1,Zi=!1,Jr=!1,bt=Gn.getUniforms(),Wn=Xe.uniforms;if(K.useProgram(Gn.program)&&($a=!0,Zi=!0,Jr=!0),W.id!==k&&(k=W.id,Zi=!0),$a||M!==S){bt.setValue(P,"projectionMatrix",S.projectionMatrix),bt.setValue(P,"viewMatrix",S.matrixWorldInverse);let Bt=bt.map.cameraPosition;Bt!==void 0&&Bt.setValue(P,Ie.setFromMatrixPosition(S.matrixWorld)),ae.logarithmicDepthBuffer&&bt.setValue(P,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&bt.setValue(P,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,Zi=!0,Jr=!0)}if(V.isSkinnedMesh){bt.setOptional(P,V,"bindMatrix"),bt.setOptional(P,V,"bindMatrixInverse");let Bt=V.skeleton;Bt&&(ae.floatVertexTextures?(Bt.boneTexture===null&&Bt.computeBoneTexture(),bt.setValue(P,"boneTexture",Bt.boneTexture,E)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}V.isBatchedMesh&&(bt.setOptional(P,V,"batchingTexture"),bt.setValue(P,"batchingTexture",V._matricesTexture,E));let $r=G.morphAttributes;if(($r.position!==void 0||$r.normal!==void 0||$r.color!==void 0&&ae.isWebGL2===!0)&&Ge.update(V,G,Gn),(Zi||Xe.receiveShadow!==V.receiveShadow)&&(Xe.receiveShadow=V.receiveShadow,bt.setValue(P,"receiveShadow",V.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Wn.envMap.value=Fe,Wn.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),Zi&&(bt.setValue(P,"toneMappingExposure",x.toneMappingExposure),Xe.needsLights&&Oh(Wn,Jr),ye&&W.fog===!0&&me.refreshFogUniforms(Wn,ye),me.refreshMaterialUniforms(Wn,W,$,B,be),Oi.upload(P,Za(Xe),Wn,E)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Oi.upload(P,Za(Xe),Wn,E),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&bt.setValue(P,"center",V.center),bt.setValue(P,"modelViewMatrix",V.modelViewMatrix),bt.setValue(P,"normalMatrix",V.normalMatrix),bt.setValue(P,"modelMatrix",V.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let Bt=W.uniformsGroups;for(let Kr=0,Bh=Bt.length;Kr<Bh;Kr++)if(ae.isWebGL2){let Ka=Bt[Kr];le.update(Ka,Gn),le.bind(Ka,Gn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Gn}function Oh(S,O){S.ambientLightColor.needsUpdate=O,S.lightProbe.needsUpdate=O,S.directionalLights.needsUpdate=O,S.directionalLightShadows.needsUpdate=O,S.pointLights.needsUpdate=O,S.pointLightShadows.needsUpdate=O,S.spotLights.needsUpdate=O,S.spotLightShadows.needsUpdate=O,S.rectAreaLights.needsUpdate=O,S.hemisphereLights.needsUpdate=O}function Fh(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(S,O,G){_e.get(S.texture).__webglTexture=O,_e.get(S.depthTexture).__webglTexture=G;let W=_e.get(S);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||Z.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,O){let G=_e.get(S);G.__webglFramebuffer=O,G.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(S,O=0,G=0){w=S,A=O,R=G;let W=!0,V=null,ye=!1,Ae=!1;if(S){let Fe=_e.get(S);Fe.__useDefaultFramebuffer!==void 0?(K.bindFramebuffer(P.FRAMEBUFFER,null),W=!1):Fe.__webglFramebuffer===void 0?E.setupRenderTarget(S):Fe.__hasExternalTextures&&E.rebindTextures(S,_e.get(S.texture).__webglTexture,_e.get(S.depthTexture).__webglTexture);let We=S.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Ae=!0);let ke=_e.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(ke[O])?V=ke[O][G]:V=ke[O],ye=!0):ae.isWebGL2&&S.samples>0&&E.useMultisampledRTT(S)===!1?V=_e.get(S).__webglMultisampledFramebuffer:Array.isArray(ke)?V=ke[G]:V=ke,T.copy(S.viewport),N.copy(S.scissor),q=S.scissorTest}else T.copy(z).multiplyScalar($).floor(),N.copy(Y).multiplyScalar($).floor(),q=se;if(K.bindFramebuffer(P.FRAMEBUFFER,V)&&ae.drawBuffers&&W&&K.drawBuffers(S,V),K.viewport(T),K.scissor(N),K.setScissorTest(q),ye){let Fe=_e.get(S.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+O,Fe.__webglTexture,G)}else if(Ae){let Fe=_e.get(S.texture),We=O||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Fe.__webglTexture,G||0,We)}k=-1},this.readRenderTargetPixels=function(S,O,G,W,V,ye,Ae){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=_e.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ae!==void 0&&(Ue=Ue[Ae]),Ue){K.bindFramebuffer(P.FRAMEBUFFER,Ue);try{let Fe=S.texture,We=Fe.format,ke=Fe.type;if(We!==$t&&xe.convert(We)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let He=ke===cs&&(Z.has("EXT_color_buffer_half_float")||ae.isWebGL2&&Z.has("EXT_color_buffer_float"));if(ke!==Bn&&xe.convert(ke)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ke===Un&&(ae.isWebGL2||Z.has("OES_texture_float")||Z.has("WEBGL_color_buffer_float")))&&!He){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=S.width-W&&G>=0&&G<=S.height-V&&P.readPixels(O,G,W,V,xe.convert(We),xe.convert(ke),ye)}finally{let Fe=w!==null?_e.get(w).__webglFramebuffer:null;K.bindFramebuffer(P.FRAMEBUFFER,Fe)}}},this.copyFramebufferToTexture=function(S,O,G=0){let W=Math.pow(2,-G),V=Math.floor(O.image.width*W),ye=Math.floor(O.image.height*W);E.setTexture2D(O,0),P.copyTexSubImage2D(P.TEXTURE_2D,G,0,0,S.x,S.y,V,ye),K.unbindTexture()},this.copyTextureToTexture=function(S,O,G,W=0){let V=O.image.width,ye=O.image.height,Ae=xe.convert(G.format),Ue=xe.convert(G.type);E.setTexture2D(G,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,G.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,G.unpackAlignment),O.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,W,S.x,S.y,V,ye,Ae,Ue,O.image.data):O.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,W,S.x,S.y,O.mipmaps[0].width,O.mipmaps[0].height,Ae,O.mipmaps[0].data):P.texSubImage2D(P.TEXTURE_2D,W,S.x,S.y,Ae,Ue,O.image),W===0&&G.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),K.unbindTexture()},this.copyTextureToTexture3D=function(S,O,G,W,V=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let ye=S.max.x-S.min.x+1,Ae=S.max.y-S.min.y+1,Ue=S.max.z-S.min.z+1,Fe=xe.convert(W.format),We=xe.convert(W.type),ke;if(W.isData3DTexture)E.setTexture3D(W,0),ke=P.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)E.setTexture2DArray(W,0),ke=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,W.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,W.unpackAlignment);let He=P.getParameter(P.UNPACK_ROW_LENGTH),lt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Nt=P.getParameter(P.UNPACK_SKIP_PIXELS),mt=P.getParameter(P.UNPACK_SKIP_ROWS),pn=P.getParameter(P.UNPACK_SKIP_IMAGES),it=G.isCompressedTexture?G.mipmaps[V]:G.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,it.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,it.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,S.min.x),P.pixelStorei(P.UNPACK_SKIP_ROWS,S.min.y),P.pixelStorei(P.UNPACK_SKIP_IMAGES,S.min.z),G.isDataTexture||G.isData3DTexture?P.texSubImage3D(ke,V,O.x,O.y,O.z,ye,Ae,Ue,Fe,We,it.data):G.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),P.compressedTexSubImage3D(ke,V,O.x,O.y,O.z,ye,Ae,Ue,Fe,it.data)):P.texSubImage3D(ke,V,O.x,O.y,O.z,ye,Ae,Ue,Fe,We,it),P.pixelStorei(P.UNPACK_ROW_LENGTH,He),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,lt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Nt),P.pixelStorei(P.UNPACK_SKIP_ROWS,mt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,pn),V===0&&W.generateMipmaps&&P.generateMipmap(ke),K.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?E.setTextureCube(S,0):S.isData3DTexture?E.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?E.setTexture2DArray(S,0):E.setTexture2D(S,0),K.unbindTexture()},this.resetState=function(){A=0,R=0,w=null,K.reset(),C.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Aa?"display-p3":"srgb",t.unpackColorSpace=je.workingColorSpace===zr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===yt?ti:kc}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ti?yt:bn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},ia=class extends ps{};ia.prototype.isWebGL1Renderer=!0;var Ar=class s{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Be(e),this.near=t,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Rr=class extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},sa=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=zo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=cn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=cn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=cn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},At=new L,Cr=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}setX(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ln(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ln(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ln(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ln(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),i=Ke(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),i=Ke(i,this.array),r=Ke(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new xt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},jt=class extends Hn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ri,Qi=new L,Ci=new L,Pi=new L,Li=new oe,es=new oe,Kc=new ct,er=new L,ts=new L,tr=new L,xc=new oe,Ro=new oe,vc=new oe,un=class extends Ft{constructor(e=new jt){if(super(),this.isSprite=!0,this.type="Sprite",Ri===void 0){Ri=new vt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new sa(t,5);Ri.setIndex([0,1,2,0,2,3]),Ri.setAttribute("position",new Cr(n,3,0,!1)),Ri.setAttribute("uv",new Cr(n,2,3,!1))}this.geometry=Ri,this.material=e,this.center=new oe(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ci.setFromMatrixScale(this.matrixWorld),Kc.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Pi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ci.multiplyScalar(-Pi.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let o=this.center;nr(er.set(-.5,-.5,0),Pi,o,Ci,i,r),nr(ts.set(.5,-.5,0),Pi,o,Ci,i,r),nr(tr.set(.5,.5,0),Pi,o,Ci,i,r),xc.set(0,0),Ro.set(1,0),vc.set(1,1);let a=e.ray.intersectTriangle(er,ts,tr,!1,Qi);if(a===null&&(nr(ts.set(-.5,.5,0),Pi,o,Ci,i,r),Ro.set(0,1),a=e.ray.intersectTriangle(er,tr,ts,!1,Qi),a===null))return;let l=e.ray.origin.distanceTo(Qi);l<e.near||l>e.far||t.push({distance:l,point:Qi.clone(),uv:jn.getInterpolation(Qi,er,ts,tr,xc,Ro,vc,new oe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function nr(s,e,t,n,i,r){Li.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(es.x=r*Li.x-i*Li.y,es.y=i*Li.x+r*Li.y):es.copy(Li),s.copy(e),s.x+=es.x,s.y+=es.y,s.applyMatrix4(Kc)}var dn=class extends Hn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},yc=new L,Mc=new L,bc=new ct,Co=new si,ir=new ki,Tn=class extends Ft{constructor(e=new vt,t=new dn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)yc.fromBufferAttribute(t,i-1),Mc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=yc.distanceTo(Mc);e.setAttribute("lineDistance",new wt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ir.copy(n.boundingSphere),ir.applyMatrix4(i),ir.radius+=r,e.ray.intersectsSphere(ir)===!1)return;bc.copy(i).invert(),Co.copy(e.ray).applyMatrix4(bc);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new L,h=new L,u=new L,d=new L,m=this.isLineSegments?2:1,g=n.index,f=n.attributes.position;if(g!==null){let p=Math.max(0,o.start),y=Math.min(g.count,o.start+o.count);for(let x=p,v=y-1;x<v;x+=m){let A=g.getX(x),R=g.getX(x+1);if(c.fromBufferAttribute(f,A),h.fromBufferAttribute(f,R),Co.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let k=e.ray.origin.distanceTo(d);k<e.near||k>e.far||t.push({distance:k,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,o.start),y=Math.min(f.count,o.start+o.count);for(let x=p,v=y-1;x<v;x+=m){if(c.fromBufferAttribute(f,x),h.fromBufferAttribute(f,x+1),Co.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let R=e.ray.origin.distanceTo(d);R<e.near||R>e.far||t.push({distance:R,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},Ec=new L,Sc=new L,Pr=class extends Tn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Ec.fromBufferAttribute(t,i),Sc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Ec.distanceTo(Sc);e.setAttribute("lineDistance",new wt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Qt=class extends Gt{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Wt=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let h=n[i],d=n[i+1]-h,m=(o-h)/d;return(i+m)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new oe:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new L,i=[],r=[],o=[],a=new L,l=new ct;for(let m=0;m<=e;m++){let g=m/e;i[m]=this.getTangentAt(g,new L)}r[0]=new L,o[0]=new L;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let m=1;m<=e;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(i[m-1],i[m]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(_t(i[m-1].dot(i[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(a,g))}o[m].crossVectors(i[m],r[m])}if(t===!0){let m=Math.acos(_t(r[0].dot(r[e]),-1,1));m/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(m=-m);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],m*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ms=class extends Wt{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){let n=t||new oe,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,m=c-this.aY;l=d*h-m*u+this.aX,c=d*u+m*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ra=class extends ms{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Pa(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,m=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,m*=h,i(o,a,d,m)},calc:function(r){let o=r*r,a=o*r;return s+e*r+t*o+n*a}}}var sr=new L,Po=new Pa,Lo=new Pa,Io=new Pa,oa=class extends Wt{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new L){let n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(sr.subVectors(i[0],i[1]).add(i[0]),c=sr);let u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(sr.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=sr),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),m),_=Math.pow(u.distanceToSquared(d),m),f=Math.pow(d.distanceToSquared(h),m);_<1e-4&&(_=1),g<1e-4&&(g=_),f<1e-4&&(f=_),Po.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,f),Lo.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,f),Io.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,f)}else this.curveType==="catmullrom"&&(Po.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Lo.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Io.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Po.calc(l),Lo.calc(l),Io.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new L().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Tc(s,e,t,n,i){let r=(n-e)*.5,o=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*s+t}function Qg(s,e){let t=1-s;return t*t*e}function e0(s,e){return 2*(1-s)*s*e}function t0(s,e){return s*s*e}function os(s,e,t,n){return Qg(s,e)+e0(s,t)+t0(s,n)}function n0(s,e){let t=1-s;return t*t*t*e}function i0(s,e){let t=1-s;return 3*t*t*s*e}function s0(s,e){return 3*(1-s)*s*s*e}function r0(s,e){return s*s*s*e}function as(s,e,t,n,i){return n0(s,e)+i0(s,t)+s0(s,n)+r0(s,i)}var Lr=class extends Wt{constructor(e=new oe,t=new oe,n=new oe,i=new oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new oe){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(as(e,i.x,r.x,o.x,a.x),as(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},aa=class extends Wt{constructor(e=new L,t=new L,n=new L,i=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new L){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(as(e,i.x,r.x,o.x,a.x),as(e,i.y,r.y,o.y,a.y),as(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ir=class extends Wt{constructor(e=new oe,t=new oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new oe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new oe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},la=class extends Wt{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Dr=class extends Wt{constructor(e=new oe,t=new oe,n=new oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new oe){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(os(e,i.x,r.x,o.x),os(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ca=class extends Wt{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(os(e,i.x,r.x,o.x),os(e,i.y,r.y,o.y),os(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Nr=class extends Wt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new oe){let n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Tc(a,l.x,c.x,h.x,u.x),Tc(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new oe().fromArray(i))}return this}},ha=Object.freeze({__proto__:null,ArcCurve:ra,CatmullRomCurve3:oa,CubicBezierCurve:Lr,CubicBezierCurve3:aa,EllipseCurve:ms,LineCurve:Ir,LineCurve3:la,QuadraticBezierCurve:Dr,QuadraticBezierCurve3:ca,SplineCurve:Nr}),ua=class extends Wt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ha[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new ha[i.type]().fromJSON(i))}return this}},Ur=class extends ua{constructor(e){super(),this.type="Path",this.currentPoint=new oe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ir(this.currentPoint.clone(),new oe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let r=new Dr(this.currentPoint.clone(),new oe(e,t),new oe(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){let a=new Lr(this.currentPoint.clone(),new oe(e,t),new oe(n,i),new oe(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Nr(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,r,o,a,l),this}absellipse(e,t,n,i,r,o,a,l){let c=new ms(e,t,n,i,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var Gi=class extends Ur{constructor(e){super(e),this.uuid=cn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new Ur().fromJSON(i))}return this}},o0={triangulate:function(s,e,t=2){let n=e&&e.length,i=n?e[0]*t:s.length,r=jc(s,0,i,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,d,m;if(n&&(r=u0(s,e,r,t)),s.length>80*t){a=c=s[0],l=h=s[1];for(let g=t;g<i;g+=t)u=s[g],d=s[g+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);m=Math.max(c-a,h-l),m=m!==0?32767/m:0}return gs(r,o,t,a,l,m,0),o}};function jc(s,e,t,n,i){let r,o;if(i===b0(s,e,t,n)>0)for(r=e;r<t;r+=n)o=wc(r,s[r],s[r+1],o);else for(r=t-n;r>=e;r-=n)o=wc(r,s[r],s[r+1],o);return o&&Hr(o,o.next)&&(xs(o),o=o.next),o}function ri(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Hr(t,t.next)||st(t.prev,t,t.next)===0)){if(xs(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function gs(s,e,t,n,i,r,o){if(!s)return;!o&&r&&g0(s,n,i,r);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?l0(s,n,i,r):a0(s)){e.push(l.i/t|0),e.push(s.i/t|0),e.push(c.i/t|0),xs(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=c0(ri(s),e,t),gs(s,e,t,n,i,r,2)):o===2&&h0(s,e,t,n,i,r):gs(ri(s),e,t,n,i,r,1);break}}}function a0(s){let e=s.prev,t=s,n=s.next;if(st(e,t,n)>=0)return!1;let i=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=i<r?i<o?i:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,d=i>r?i>o?i:o:r>o?r:o,m=a>l?a>c?a:c:l>c?l:c,g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=m&&Ni(i,a,r,l,o,c,g.x,g.y)&&st(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function l0(s,e,t,n){let i=s.prev,r=s,o=s.next;if(st(i,r,o)>=0)return!1;let a=i.x,l=r.x,c=o.x,h=i.y,u=r.y,d=o.y,m=a<l?a<c?a:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,_=a>l?a>c?a:c:l>c?l:c,f=h>u?h>d?h:d:u>d?u:d,p=da(m,g,e,t,n),y=da(_,f,e,t,n),x=s.prevZ,v=s.nextZ;for(;x&&x.z>=p&&v&&v.z<=y;){if(x.x>=m&&x.x<=_&&x.y>=g&&x.y<=f&&x!==i&&x!==o&&Ni(a,h,l,u,c,d,x.x,x.y)&&st(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=m&&v.x<=_&&v.y>=g&&v.y<=f&&v!==i&&v!==o&&Ni(a,h,l,u,c,d,v.x,v.y)&&st(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=p;){if(x.x>=m&&x.x<=_&&x.y>=g&&x.y<=f&&x!==i&&x!==o&&Ni(a,h,l,u,c,d,x.x,x.y)&&st(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=y;){if(v.x>=m&&v.x<=_&&v.y>=g&&v.y<=f&&v!==i&&v!==o&&Ni(a,h,l,u,c,d,v.x,v.y)&&st(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function c0(s,e,t){let n=s;do{let i=n.prev,r=n.next.next;!Hr(i,r)&&Qc(i,n,n.next,r)&&_s(i,r)&&_s(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),xs(n),xs(n.next),n=s=r),n=n.next}while(n!==s);return ri(n)}function h0(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&v0(o,a)){let l=eh(o,a);o=ri(o,o.next),l=ri(l,l.next),gs(o,e,t,n,i,r,0),gs(l,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function u0(s,e,t,n){let i=[],r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:s.length,c=jc(s,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(x0(c));for(i.sort(d0),r=0;r<i.length;r++)t=f0(i[r],t);return t}function d0(s,e){return s.x-e.x}function f0(s,e){let t=p0(s,e);if(!t)return e;let n=eh(t,s);return ri(n,n.next),ri(t,t.next)}function p0(s,e){let t=e,n=-1/0,i,r=s.x,o=s.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,i=t.x<t.next.x?t:t.next,d===r))return i}t=t.next}while(t!==e);if(!i)return null;let a=i,l=i.x,c=i.y,h=1/0,u;t=i;do r>=t.x&&t.x>=l&&r!==t.x&&Ni(o<c?r:n,o,l,c,o<c?n:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),_s(t,s)&&(u<h||u===h&&(t.x>i.x||t.x===i.x&&m0(i,t)))&&(i=t,h=u)),t=t.next;while(t!==a);return i}function m0(s,e){return st(s.prev,s,e.prev)<0&&st(e.next,s,s.next)<0}function g0(s,e,t,n){let i=s;do i.z===0&&(i.z=da(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,_0(i)}function _0(s){let e,t,n,i,r,o,a,l,c=1;do{for(t=s,s=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,c*=2}while(o>1);return s}function da(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function x0(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Ni(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function v0(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!y0(s,e)&&(_s(s,e)&&_s(e,s)&&M0(s,e)&&(st(s.prev,s,e.prev)||st(s,e.prev,e))||Hr(s,e)&&st(s.prev,s,s.next)>0&&st(e.prev,e,e.next)>0)}function st(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Hr(s,e){return s.x===e.x&&s.y===e.y}function Qc(s,e,t,n){let i=or(st(s,e,t)),r=or(st(s,e,n)),o=or(st(t,n,s)),a=or(st(t,n,e));return!!(i!==r&&o!==a||i===0&&rr(s,t,e)||r===0&&rr(s,n,e)||o===0&&rr(t,s,n)||a===0&&rr(t,e,n))}function rr(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function or(s){return s>0?1:s<0?-1:0}function y0(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Qc(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function _s(s,e){return st(s.prev,s,s.next)<0?st(s,e,s.next)>=0&&st(s,s.prev,e)>=0:st(s,e,s.prev)<0||st(s,s.next,e)<0}function M0(s,e){let t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function eh(s,e){let t=new fa(s.i,s.x,s.y),n=new fa(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function wc(s,e,t,n){let i=new fa(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function xs(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function fa(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function b0(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var zn=class s{static area(e){let t=e.length,n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let n=[],i=[],r=[];Ac(e),Rc(n,e);let o=e.length;t.forEach(Ac);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,Rc(n,t[l]);let a=o0.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Ac(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Rc(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var Or=class s extends vt{constructor(e=new Gi([new oe(.5,.5),new oe(-.5,.5),new oe(-.5,-.5),new oe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new wt(i,3)),this.setAttribute("uv",new wt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,m=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:m-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,f=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:E0,x,v=!1,A,R,w,k;p&&(x=p.getSpacedPoints(h),v=!0,d=!1,A=p.computeFrenetFrames(h,!1),R=new L,w=new L,k=new L),d||(f=0,m=0,g=0,_=0);let M=a.extractPoints(c),T=M.shape,N=M.holes;if(!zn.isClockWise(T)){T=T.reverse();for(let P=0,ce=N.length;P<ce;P++){let Z=N[P];zn.isClockWise(Z)&&(N[P]=Z.reverse())}}let j=zn.triangulateShape(T,N),D=T;for(let P=0,ce=N.length;P<ce;P++){let Z=N[P];T=T.concat(Z)}function F(P,ce,Z){return ce||console.error("THREE.ExtrudeGeometry: vec does not exist"),P.clone().addScaledVector(ce,Z)}let B=T.length,$=j.length;function J(P,ce,Z){let ae,K,Te,_e=P.x-ce.x,E=P.y-ce.y,b=Z.x-P.x,U=Z.y-P.y,ie=_e*_e+E*E,te=_e*U-E*b;if(Math.abs(te)>Number.EPSILON){let ee=Math.sqrt(ie),Se=Math.sqrt(b*b+U*U),me=ce.x-E/ee,ve=ce.y+_e/ee,Ce=Z.x-U/Se,ze=Z.y+b/Se,ne=((Ce-me)*U-(ze-ve)*b)/(_e*U-E*b);ae=me+_e*ne-P.x,K=ve+E*ne-P.y;let Je=ae*ae+K*K;if(Je<=2)return new oe(ae,K);Te=Math.sqrt(Je/2)}else{let ee=!1;_e>Number.EPSILON?b>Number.EPSILON&&(ee=!0):_e<-Number.EPSILON?b<-Number.EPSILON&&(ee=!0):Math.sign(E)===Math.sign(U)&&(ee=!0),ee?(ae=-E,K=_e,Te=Math.sqrt(ie)):(ae=_e,K=E,Te=Math.sqrt(ie/2))}return new oe(ae/Te,K/Te)}let X=[];for(let P=0,ce=D.length,Z=ce-1,ae=P+1;P<ce;P++,Z++,ae++)Z===ce&&(Z=0),ae===ce&&(ae=0),X[P]=J(D[P],D[Z],D[ae]);let z=[],Y,se=X.concat();for(let P=0,ce=N.length;P<ce;P++){let Z=N[P];Y=[];for(let ae=0,K=Z.length,Te=K-1,_e=ae+1;ae<K;ae++,Te++,_e++)Te===K&&(Te=0),_e===K&&(_e=0),Y[ae]=J(Z[ae],Z[Te],Z[_e]);z.push(Y),se=se.concat(Y)}for(let P=0;P<f;P++){let ce=P/f,Z=m*Math.cos(ce*Math.PI/2),ae=g*Math.sin(ce*Math.PI/2)+_;for(let K=0,Te=D.length;K<Te;K++){let _e=F(D[K],X[K],ae);pe(_e.x,_e.y,-Z)}for(let K=0,Te=N.length;K<Te;K++){let _e=N[K];Y=z[K];for(let E=0,b=_e.length;E<b;E++){let U=F(_e[E],Y[E],ae);pe(U.x,U.y,-Z)}}}let H=g+_;for(let P=0;P<B;P++){let ce=d?F(T[P],se[P],H):T[P];v?(w.copy(A.normals[0]).multiplyScalar(ce.x),R.copy(A.binormals[0]).multiplyScalar(ce.y),k.copy(x[0]).add(w).add(R),pe(k.x,k.y,k.z)):pe(ce.x,ce.y,0)}for(let P=1;P<=h;P++)for(let ce=0;ce<B;ce++){let Z=d?F(T[ce],se[ce],H):T[ce];v?(w.copy(A.normals[P]).multiplyScalar(Z.x),R.copy(A.binormals[P]).multiplyScalar(Z.y),k.copy(x[P]).add(w).add(R),pe(k.x,k.y,k.z)):pe(Z.x,Z.y,u/h*P)}for(let P=f-1;P>=0;P--){let ce=P/f,Z=m*Math.cos(ce*Math.PI/2),ae=g*Math.sin(ce*Math.PI/2)+_;for(let K=0,Te=D.length;K<Te;K++){let _e=F(D[K],X[K],ae);pe(_e.x,_e.y,u+Z)}for(let K=0,Te=N.length;K<Te;K++){let _e=N[K];Y=z[K];for(let E=0,b=_e.length;E<b;E++){let U=F(_e[E],Y[E],ae);v?pe(U.x,U.y+x[h-1].y,x[h-1].x+Z):pe(U.x,U.y,u+Z)}}}Q(),de();function Q(){let P=i.length/3;if(d){let ce=0,Z=B*ce;for(let ae=0;ae<$;ae++){let K=j[ae];Le(K[2]+Z,K[1]+Z,K[0]+Z)}ce=h+f*2,Z=B*ce;for(let ae=0;ae<$;ae++){let K=j[ae];Le(K[0]+Z,K[1]+Z,K[2]+Z)}}else{for(let ce=0;ce<$;ce++){let Z=j[ce];Le(Z[2],Z[1],Z[0])}for(let ce=0;ce<$;ce++){let Z=j[ce];Le(Z[0]+B*h,Z[1]+B*h,Z[2]+B*h)}}n.addGroup(P,i.length/3-P,0)}function de(){let P=i.length/3,ce=0;be(D,ce),ce+=D.length;for(let Z=0,ae=N.length;Z<ae;Z++){let K=N[Z];be(K,ce),ce+=K.length}n.addGroup(P,i.length/3-P,1)}function be(P,ce){let Z=P.length;for(;--Z>=0;){let ae=Z,K=Z-1;K<0&&(K=P.length-1);for(let Te=0,_e=h+f*2;Te<_e;Te++){let E=B*Te,b=B*(Te+1),U=ce+ae+E,ie=ce+K+E,te=ce+K+b,ee=ce+ae+b;Ie(U,ie,te,ee)}}}function pe(P,ce,Z){l.push(P),l.push(ce),l.push(Z)}function Le(P,ce,Z){Ee(P),Ee(ce),Ee(Z);let ae=i.length/3,K=y.generateTopUV(n,i,ae-3,ae-2,ae-1);De(K[0]),De(K[1]),De(K[2])}function Ie(P,ce,Z,ae){Ee(P),Ee(ce),Ee(ae),Ee(ce),Ee(Z),Ee(ae);let K=i.length/3,Te=y.generateSideWallUV(n,i,K-6,K-3,K-2,K-1);De(Te[0]),De(Te[1]),De(Te[3]),De(Te[1]),De(Te[2]),De(Te[3])}function Ee(P){i.push(l[P*3+0]),i.push(l[P*3+1]),i.push(l[P*3+2])}function De(P){r.push(P.x),r.push(P.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return S0(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new ha[i.type]().fromJSON(i)),new s(n,e.options)}},E0={generateTopUV:function(s,e,t,n,i){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new oe(r,o),new oe(a,l),new oe(c,h)]},generateSideWallUV:function(s,e,t,n,i,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[i*3],m=e[i*3+1],g=e[i*3+2],_=e[r*3],f=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new oe(o,1-l),new oe(c,1-u),new oe(d,1-g),new oe(_,1-p)]:[new oe(a,1-l),new oe(h,1-u),new oe(m,1-g),new oe(f,1-p)]}};function S0(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Fr=class s extends vt{constructor(e=new Gi([new oe(0,.5),new oe(-.5,-.5),new oe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new wt(i,3)),this.setAttribute("normal",new wt(r,3)),this.setAttribute("uv",new wt(o,2));function c(h){let u=i.length/3,d=h.extractPoints(t),m=d.shape,g=d.holes;zn.isClockWise(m)===!1&&(m=m.reverse());for(let f=0,p=g.length;f<p;f++){let y=g[f];zn.isClockWise(y)===!0&&(g[f]=y.reverse())}let _=zn.triangulateShape(m,g);for(let f=0,p=g.length;f<p;f++){let y=g[f];m=m.concat(y)}for(let f=0,p=m.length;f<p;f++){let y=m[f];i.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let f=0,p=_.length;f<p;f++){let y=_[f],x=y[0]+u,v=y[1]+u,A=y[2]+u;n.push(x,v,A),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return T0(t,e)}static fromJSON(e,t){let n=[];for(let i=0,r=e.shapes.length;i<r;i++){let o=t[e.shapes[i]];n.push(o)}return new s(n,e.curveSegments)}};function T0(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){let i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}function ar(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function w0(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var Wi=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},pa=class extends Wi{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Cl,endingEnd:Cl}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Pl:r=e,a=2*t-n;break;case Ll:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Pl:o=e,l=2*n-t;break;case Ll:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,m=this._weightNext,g=(n-t)/(i-t),_=g*g,f=_*g,p=-d*f+2*d*_-d*g,y=(1+d)*f+(-1.5-2*d)*_+(-.5+d)*g+1,x=(-1-m)*f+(1.5+m)*_+.5*g,v=m*f-m*_;for(let A=0;A!==a;++A)r[A]=p*o[h+A]+y*o[c+A]+x*o[l+A]+v*o[u+A];return r}},ma=class extends Wi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},ga=class extends Wi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},en=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ar(t,this.TimeBufferType),this.values=ar(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ar(e.times,Array),values:ar(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ga(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ma(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new pa(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case cr:t=this.InterpolantFactoryMethodDiscrete;break;case hr:t=this.InterpolantFactoryMethodLinear;break;case so:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return cr;case this.InterpolantFactoryMethodLinear:return hr;case this.InterpolantFactoryMethodSmooth:return so}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&w0(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===so,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{let u=a*n,d=u-n,m=u+n;for(let g=0;g!==n;++g){let _=t[u+g];if(_!==t[d+g]||_!==t[m+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,d=o*n;for(let m=0;m!==n;++m)t[d+m]=t[u+m]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};en.prototype.TimeBufferType=Float32Array;en.prototype.ValueBufferType=Float32Array;en.prototype.DefaultInterpolation=hr;var oi=class extends en{};oi.prototype.ValueTypeName="bool";oi.prototype.ValueBufferType=Array;oi.prototype.DefaultInterpolation=cr;oi.prototype.InterpolantFactoryMethodLinear=void 0;oi.prototype.InterpolantFactoryMethodSmooth=void 0;var _a=class extends en{};_a.prototype.ValueTypeName="color";var xa=class extends en{};xa.prototype.ValueTypeName="number";var va=class extends Wi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let h=c+a;c!==h;c+=4)Kt.slerpFlat(r,0,o,c-a,o,c,l);return r}},vs=class extends en{InterpolantFactoryMethodLinear(e){return new va(this.times,this.values,this.getValueSize(),e)}};vs.prototype.ValueTypeName="quaternion";vs.prototype.DefaultInterpolation=hr;vs.prototype.InterpolantFactoryMethodSmooth=void 0;var ai=class extends en{};ai.prototype.ValueTypeName="string";ai.prototype.ValueBufferType=Array;ai.prototype.DefaultInterpolation=cr;ai.prototype.InterpolantFactoryMethodLinear=void 0;ai.prototype.InterpolantFactoryMethodSmooth=void 0;var ya=class extends en{};ya.prototype.ValueTypeName="vector";var Ma=class{constructor(e,t,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let m=c[u],g=c[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}},A0=new Ma,ba=class{constructor(e){this.manager=e!==void 0?e:A0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};ba.DEFAULT_MATERIAL_NAME="__DEFAULT";var La="\\[\\]\\.:\\/",R0=new RegExp("["+La+"]","g"),Ia="[^"+La+"]",C0="[^"+La.replace("\\.","")+"]",P0=/((?:WC+[\/:])*)/.source.replace("WC",Ia),L0=/(WCOD+)?/.source.replace("WCOD",C0),I0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ia),D0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ia),N0=new RegExp("^"+P0+L0+I0+D0+"$"),U0=["material","materials","bones","map"],Ea=class{constructor(e,t,n){let i=n||tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},tt=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(R0,"")}static parseTrackName(e){let t=N0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);U0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};tt.Composite=Ea;tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};tt.prototype.GetterByBindingType=[tt.prototype._getValue_direct,tt.prototype._getValue_array,tt.prototype._getValue_arrayElement,tt.prototype._getValue_toArray];tt.prototype.SetterByBindingTypeAndVersioning=[[tt.prototype._setValue_direct,tt.prototype._setValue_direct_setNeedsUpdate,tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_array,tt.prototype._setValue_array_setNeedsUpdate,tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_arrayElement,tt.prototype._setValue_arrayElement_setNeedsUpdate,tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_fromArray,tt.prototype._setValue_fromArray_setNeedsUpdate,tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var i_=new Float32Array(1);var Xi=class{constructor(e,t,n=0,i=1/0){this.ray=new si(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new us,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Sa(e,this,n,t),n.sort(Cc),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Sa(e[i],this,n,t);return n.sort(Cc),n}};function Cc(s,e){return s.distance-e.distance}function Sa(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){let i=s.children;for(let r=0,o=i.length;r<o;r++)Sa(i[r],e,t,!0)}}var ys=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(_t(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ta}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ta);var th={type:"change"},Na={type:"start"},nh={type:"end"},Vr=new si,ih=new Lt,O0=Math.cos(70*Ms.DEG2RAD),Gr=class extends hn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:tn.ROTATE,MIDDLE:tn.DOLLY,RIGHT:tn.PAN},this.touches={ONE:li.ROTATE,TWO:li.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(C){C.addEventListener("keydown",Ce),this._domElementKeyEvents=C},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ce),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(th),n.update(),r=i.NONE},this.update=function(){let C=new L,le=new Kt().setFromUnitVectors(e.up,new L(0,1,0)),we=le.clone().invert(),Me=new L,re=new Kt,I=new L,he=2*Math.PI;return function(Ne=null){let Pe=n.object.position;C.copy(Pe).sub(n.target),C.applyQuaternion(le),a.setFromVector3(C),n.autoRotate&&r===i.NONE&&q(T(Ne)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let qe=n.minAzimuthAngle,Ze=n.maxAzimuthAngle;isFinite(qe)&&isFinite(Ze)&&(qe<-Math.PI?qe+=he:qe>Math.PI&&(qe-=he),Ze<-Math.PI?Ze+=he:Ze>Math.PI&&(Ze-=he),qe<=Ze?a.theta=Math.max(qe,Math.min(Ze,a.theta)):a.theta=a.theta>(qe+Ze)/2?Math.max(qe,a.theta):Math.min(Ze,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&R||n.object.isOrthographicCamera?a.radius=z(a.radius):a.radius=z(a.radius*c),C.setFromSpherical(a),C.applyQuaternion(we),Pe.copy(n.target).add(C),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let rt=!1;if(n.zoomToCursor&&R){let at=null;if(n.object.isPerspectiveCamera){let $e=C.length();at=z($e*c);let ht=$e-at;n.object.position.addScaledVector(v,ht),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){let $e=new L(A.x,A.y,0);$e.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),rt=!0;let ht=new L(A.x,A.y,0);ht.unproject(n.object),n.object.position.sub(ht).add($e),n.object.updateMatrixWorld(),at=C.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;at!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(at).add(n.object.position):(Vr.origin.copy(n.object.position),Vr.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Vr.direction))<O0?e.lookAt(n.target):(ih.setFromNormalAndCoplanarPoint(n.object.up,n.target),Vr.intersectPlane(ih,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),rt=!0);return c=1,R=!1,rt||Me.distanceToSquared(n.object.position)>o||8*(1-re.dot(n.object.quaternion))>o||I.distanceToSquared(n.target)>0?(n.dispatchEvent(th),Me.copy(n.object.position),re.copy(n.object.quaternion),I.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Je),n.domElement.removeEventListener("pointerdown",E),n.domElement.removeEventListener("pointercancel",U),n.domElement.removeEventListener("wheel",ee),n.domElement.removeEventListener("pointermove",b),n.domElement.removeEventListener("pointerup",U),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Ce),n._domElementKeyEvents=null)};let n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},r=i.NONE,o=1e-6,a=new ys,l=new ys,c=1,h=new L,u=new oe,d=new oe,m=new oe,g=new oe,_=new oe,f=new oe,p=new oe,y=new oe,x=new oe,v=new L,A=new oe,R=!1,w=[],k={},M=!1;function T(C){return C!==null?2*Math.PI/60*n.autoRotateSpeed*C:2*Math.PI/60/60*n.autoRotateSpeed}function N(C){let le=Math.abs(C*.01);return Math.pow(.95,n.zoomSpeed*le)}function q(C){l.theta-=C}function j(C){l.phi-=C}let D=function(){let C=new L;return function(we,Me){C.setFromMatrixColumn(Me,0),C.multiplyScalar(-we),h.add(C)}}(),F=function(){let C=new L;return function(we,Me){n.screenSpacePanning===!0?C.setFromMatrixColumn(Me,1):(C.setFromMatrixColumn(Me,0),C.crossVectors(n.object.up,C)),C.multiplyScalar(we),h.add(C)}}(),B=function(){let C=new L;return function(we,Me){let re=n.domElement;if(n.object.isPerspectiveCamera){let I=n.object.position;C.copy(I).sub(n.target);let he=C.length();he*=Math.tan(n.object.fov/2*Math.PI/180),D(2*we*he/re.clientHeight,n.object.matrix),F(2*Me*he/re.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(D(we*(n.object.right-n.object.left)/n.object.zoom/re.clientWidth,n.object.matrix),F(Me*(n.object.top-n.object.bottom)/n.object.zoom/re.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function $(C){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function J(C){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function X(C,le){if(!n.zoomToCursor)return;R=!0;let we=n.domElement.getBoundingClientRect(),Me=C-we.left,re=le-we.top,I=we.width,he=we.height;A.x=Me/I*2-1,A.y=-(re/he)*2+1,v.set(A.x,A.y,1).unproject(n.object).sub(n.object.position).normalize()}function z(C){return Math.max(n.minDistance,Math.min(n.maxDistance,C))}function Y(C){u.set(C.clientX,C.clientY)}function se(C){X(C.clientX,C.clientX),p.set(C.clientX,C.clientY)}function H(C){g.set(C.clientX,C.clientY)}function Q(C){d.set(C.clientX,C.clientY),m.subVectors(d,u).multiplyScalar(n.rotateSpeed);let le=n.domElement;q(2*Math.PI*m.x/le.clientHeight),j(2*Math.PI*m.y/le.clientHeight),u.copy(d),n.update()}function de(C){y.set(C.clientX,C.clientY),x.subVectors(y,p),x.y>0?$(N(x.y)):x.y<0&&J(N(x.y)),p.copy(y),n.update()}function be(C){_.set(C.clientX,C.clientY),f.subVectors(_,g).multiplyScalar(n.panSpeed),B(f.x,f.y),g.copy(_),n.update()}function pe(C){X(C.clientX,C.clientY),C.deltaY<0?J(N(C.deltaY)):C.deltaY>0&&$(N(C.deltaY)),n.update()}function Le(C){let le=!1;switch(C.code){case n.keys.UP:C.ctrlKey||C.metaKey||C.shiftKey?j(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(0,n.keyPanSpeed),le=!0;break;case n.keys.BOTTOM:C.ctrlKey||C.metaKey||C.shiftKey?j(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(0,-n.keyPanSpeed),le=!0;break;case n.keys.LEFT:C.ctrlKey||C.metaKey||C.shiftKey?q(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(n.keyPanSpeed,0),le=!0;break;case n.keys.RIGHT:C.ctrlKey||C.metaKey||C.shiftKey?q(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(-n.keyPanSpeed,0),le=!0;break}le&&(C.preventDefault(),n.update())}function Ie(C){if(w.length===1)u.set(C.pageX,C.pageY);else{let le=xe(C),we=.5*(C.pageX+le.x),Me=.5*(C.pageY+le.y);u.set(we,Me)}}function Ee(C){if(w.length===1)g.set(C.pageX,C.pageY);else{let le=xe(C),we=.5*(C.pageX+le.x),Me=.5*(C.pageY+le.y);g.set(we,Me)}}function De(C){let le=xe(C),we=C.pageX-le.x,Me=C.pageY-le.y,re=Math.sqrt(we*we+Me*Me);p.set(0,re)}function P(C){n.enableZoom&&De(C),n.enablePan&&Ee(C)}function ce(C){n.enableZoom&&De(C),n.enableRotate&&Ie(C)}function Z(C){if(w.length==1)d.set(C.pageX,C.pageY);else{let we=xe(C),Me=.5*(C.pageX+we.x),re=.5*(C.pageY+we.y);d.set(Me,re)}m.subVectors(d,u).multiplyScalar(n.rotateSpeed);let le=n.domElement;q(2*Math.PI*m.x/le.clientHeight),j(2*Math.PI*m.y/le.clientHeight),u.copy(d)}function ae(C){if(w.length===1)_.set(C.pageX,C.pageY);else{let le=xe(C),we=.5*(C.pageX+le.x),Me=.5*(C.pageY+le.y);_.set(we,Me)}f.subVectors(_,g).multiplyScalar(n.panSpeed),B(f.x,f.y),g.copy(_)}function K(C){let le=xe(C),we=C.pageX-le.x,Me=C.pageY-le.y,re=Math.sqrt(we*we+Me*Me);y.set(0,re),x.set(0,Math.pow(y.y/p.y,n.zoomSpeed)),$(x.y),p.copy(y);let I=(C.pageX+le.x)*.5,he=(C.pageY+le.y)*.5;X(I,he)}function Te(C){n.enableZoom&&K(C),n.enablePan&&ae(C)}function _e(C){n.enableZoom&&K(C),n.enableRotate&&Z(C)}function E(C){n.enabled!==!1&&(w.length===0&&(n.domElement.setPointerCapture(C.pointerId),n.domElement.addEventListener("pointermove",b),n.domElement.addEventListener("pointerup",U)),Ge(C),C.pointerType==="touch"?ze(C):ie(C))}function b(C){n.enabled!==!1&&(C.pointerType==="touch"?ne(C):te(C))}function U(C){Oe(C),w.length===0&&(n.domElement.releasePointerCapture(C.pointerId),n.domElement.removeEventListener("pointermove",b),n.domElement.removeEventListener("pointerup",U)),n.dispatchEvent(nh),r=i.NONE}function ie(C){let le;switch(C.button){case 0:le=n.mouseButtons.LEFT;break;case 1:le=n.mouseButtons.MIDDLE;break;case 2:le=n.mouseButtons.RIGHT;break;default:le=-1}switch(le){case tn.DOLLY:if(n.enableZoom===!1)return;se(C),r=i.DOLLY;break;case tn.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enablePan===!1)return;H(C),r=i.PAN}else{if(n.enableRotate===!1)return;Y(C),r=i.ROTATE}break;case tn.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enableRotate===!1)return;Y(C),r=i.ROTATE}else{if(n.enablePan===!1)return;H(C),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Na)}function te(C){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;Q(C);break;case i.DOLLY:if(n.enableZoom===!1)return;de(C);break;case i.PAN:if(n.enablePan===!1)return;be(C);break}}function ee(C){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(C.preventDefault(),n.dispatchEvent(Na),pe(Se(C)),n.dispatchEvent(nh))}function Se(C){let le=C.deltaMode,we={clientX:C.clientX,clientY:C.clientY,deltaY:C.deltaY};switch(le){case 1:we.deltaY*=16;break;case 2:we.deltaY*=100;break}return C.ctrlKey&&!M&&(we.deltaY*=10),we}function me(C){C.key==="Control"&&(M=!0,document.addEventListener("keyup",ve,{passive:!0,capture:!0}))}function ve(C){C.key==="Control"&&(M=!1,document.removeEventListener("keyup",ve,{passive:!0,capture:!0}))}function Ce(C){n.enabled===!1||n.enablePan===!1||Le(C)}function ze(C){switch(Re(C),w.length){case 1:switch(n.touches.ONE){case li.ROTATE:if(n.enableRotate===!1)return;Ie(C),r=i.TOUCH_ROTATE;break;case li.PAN:if(n.enablePan===!1)return;Ee(C),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case li.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;P(C),r=i.TOUCH_DOLLY_PAN;break;case li.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ce(C),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Na)}function ne(C){switch(Re(C),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Z(C),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;ae(C),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Te(C),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;_e(C),n.update();break;default:r=i.NONE}}function Je(C){n.enabled!==!1&&C.preventDefault()}function Ge(C){w.push(C.pointerId)}function Oe(C){delete k[C.pointerId];for(let le=0;le<w.length;le++)if(w[le]==C.pointerId){w.splice(le,1);return}}function Re(C){let le=k[C.pointerId];le===void 0&&(le=new oe,k[C.pointerId]=le),le.set(C.pageX,C.pageY)}function xe(C){let le=C.pointerId===w[0]?w[1]:w[0];return k[le]}n.domElement.addEventListener("contextmenu",Je),n.domElement.addEventListener("pointerdown",E),n.domElement.addEventListener("pointercancel",U),n.domElement.addEventListener("wheel",ee,{passive:!1}),document.addEventListener("keydown",me,{passive:!0,capture:!0}),this.update()}};var Ga=require("obsidian");var Ua=16250092,Oa=15196114,nt=9,Dt=5.5,Es=1.6,nn=.06,wn=.1,F0=1.42,Wr=Es+.15,B0=s=>.3+.7*Math.min(1,s/nt),Ss=s=>Es+B0(s)*(Dt*F0-Es),ci=2*Dt+5,lh=1.15,ch=1.6,hh=.5,Ts="#5d8a3e",hi="#b07a3c",Fa={light:{bg:Ua,fog:Oa,linkMul:1},dark:{bg:658450,fog:1119262,linkMul:2}},ws=[{tint:"#5d7c8c",ring:"#3c5663"},{tint:"#b09161",ring:"#7d6334"},{tint:"#bb8079",ring:"#8a534b"},{tint:"#7d9b78",ring:"#516e4d"},{tint:"#8f87a0",ring:"#5f566f"},{tint:"#7e9aa6",ring:"#4d6b77"},{tint:"#c0936f",ring:"#8a5f3c"},{tint:"#9a9466",ring:"#65603a"}],An={leaf:{tint:"#aeb9b6",ring:"#7c8a86",r:.21},trunk:{tint:"#8f87a0",ring:"#5f566f",r:.3},root:{tint:"#a98f5e",ring:"#6f5a32",r:.54},flower:{tint:"#cf8aa3",ring:"#9c5572",r:.4,glow:"#ff9ec2"},apple:{tint:"#d77f72",ring:"#a14b3f",r:.42,glow:"#ff8a76"},seed:{tint:"#6fbf5a",ring:"#162f11",r:.46,glow:"#9dff84"}},z0=.92,sh=2.4,rh=.6,Ba=.06,k0=1.5,H0=3.2,uh=12,dh=30,fh=2.5,qi=Ss(.7),ui={light:"#b39169",dark:"#8a6f4e"},oh={light:{near:.34,far:.66},dark:{near:.4,far:.8}};function ph(s,e){let t=e?oh.dark:oh.light;return t.near+(t.far-t.near)*Math.min(1,Math.max(0,s))}function mh(s,e){return Math.max(e?.22:.11,(e?.55:.26)*s)}function za(s){return 1-.18*Math.min(1,Math.max(0,s))}function ka(s,e,t,n,i=1/0){let r=Math.min(t,i),o=ah(s,e,r,n);for(let a=0;a<60&&r<i&&G0(o)<z0;a++)r=Math.min(i,r*1.06),o=ah(s,e,r,n);return{slots:o,rIn:e,rOut:r}}function ah(s,e,t,n){let i=2.39996323,r=[];for(let o=0;o<s;o++){let a=s===1?.5:(o+.5)/s,l=Math.sqrt(e*e+a*(t*t-e*e)),c=o*i;r.push({x:l*Math.cos(c),y:n,z:-l*Math.sin(c)})}return r}var V0=[1,2,3,5,8,13,21,34,55,89,144,233,377];function G0(s){let e=1/0;for(let t=0;t<s.length;t++)for(let n of V0){let i=t+n;if(i>=s.length)break;let r=Math.hypot(s[t].x-s[i].x,s[t].z-s[i].z);r<e&&(e=r)}return e}function gh(s){return(s??"").split(/[\n,]/).map(e=>e.trim().replace(/\/+$/,"").toLowerCase()).filter(Boolean)}function _h(s,e){let t=s.toLowerCase();return e.some(n=>t===n||t.startsWith(n+"/"))}function xh(s,e){let t=s??[],n=new Set(t.map(i=>i.c).filter(Boolean));return{spoke:t,silent:e.filter(i=>i&&!n.has(i))}}function sn(s,e){return s*(Math.PI*2/Math.max(1,e))}function fn(s,e,t){return new L(e*Math.cos(s),t,-e*Math.sin(s))}function vh(s,e){let t=s.filter(g=>g.treeType!=="seed");if(!t.length)return;let n=t.map(g=>g.time).filter(Number.isFinite),i=n.length?Math.min(...n):0,o=(n.length?Math.max(...n):0)-i||1;for(let g of t)g.tNorm=Number.isFinite(g.time)?(g.time-i)/o:0;let a=2.39996323,l=.52,c=(g,_,f)=>{let p=g.slice();for(let x=1;x<p.length;x++)p[x]<p[x-1]+l&&(p[x]=p[x-1]+l);let y=p[p.length-1]-_;if(p[p.length-1]>f&&y>1e-6){let x=(f-_)/y;for(let v=0;v<p.length;v++)p[v]=_+(p[v]-_)*x}return p},h=t.filter(g=>g.treeType==="root"),u=new Map;for(let g of t){if(g.treeType==="root"){if(h.length>1){let f=h.indexOf(g);g.pos=new L(Math.cos(f*a)*.15,-1.2,Math.sin(f*a)*.15)}else g.pos=new L(0,-1.2,0);continue}let _=g.treeType==="trunk"||g.field<0?"_axis":g.field;u.has(_)||u.set(_,[]),u.get(_).push(g)}let d=(g,_)=>(Number.isFinite(g.time)?g.time:-1/0)-(Number.isFinite(_.time)?_.time:-1/0)||(g.id<_.id?-1:1),m=(u.get("_axis")||[]).sort(d);{let g=c(m.map(_=>.6+_.tNorm*(nt-.8)),.6,nt-.4);m.forEach((_,f)=>{_.pos=new L(Math.cos(f*a)*.22,g[f],Math.sin(f*a)*.22)})}for(let[g,_]of u){if(g==="_axis")continue;let f=g,p=sn(f,e)+nn+wn,y=sn(f+1,e)-nn-wn,x=y>p?y-p:Math.PI*2/e*.8;_.sort(d);let v=c(_.map(A=>.7+A.tNorm*(nt-1.2)),.7,nt-.5);_.forEach((A,R)=>{let w=v[R],k=.3+.7*(w/nt),M=p+x*(.08+.84*(R*.6180339887%1)),T=Es+k*(Dt-Es)*(.4+.5*((R*.7548776662+.33)%1));A.pos=fn(M,T,w)})}}function yh(s,e,t){let n=s.filter(m=>m.treeType==="leaf"&&m.field>=0);if(n.length<3||n.length>500||e>=20)return;let i=new Map(n.map((m,g)=>[m.id,g])),r=n.map(()=>[]);for(let m of t){let g=i.get(m.from),_=i.get(m.to);g==null||_==null||g===_||n[g].field===n[_].field&&(r[g].push(_),r[_].push(g))}let o=.82,a=.013,l=1,c=.4,h=130,u=6.2831853,d=n.map(m=>({a0:sn(m.field,e)+nn+wn,a1:sn(m.field+1,e)-nn-wn,hlo:Math.max(.7,m.pos.y-2.2),hhi:Math.min(nt*1.16,m.pos.y+2.2)}));for(let m=0;m<h;m++){let g=n.map(()=>[0,0,0]);for(let _=0;_<n.length;_++){let f=n[_];for(let p of r[_]){let y=n[p];g[_][0]+=(y.pos.x-f.pos.x)*a,g[_][1]+=(y.pos.y-f.pos.y)*a*.4,g[_][2]+=(y.pos.z-f.pos.z)*a}}for(let _=0;_<n.length;_++){let f=n[_];for(let p=_+1;p<n.length;p++){let y=n[p],x=f.pos.x-y.pos.x,v=f.pos.y-y.pos.y,A=f.pos.z-y.pos.z,R=Math.sqrt(x*x+v*v+A*A)||.001;if(R<o){let w=l*(o-R)/R;g[_][0]+=x*w,g[_][1]+=v*w*.4,g[_][2]+=A*w,g[p][0]-=x*w,g[p][1]-=v*w*.4,g[p][2]-=A*w}}}for(let _=0;_<n.length;_++){let f=n[_];if(f._pinned)continue;let p=g[_][0],y=g[_][1],x=g[_][2],v=Math.sqrt(p*p+y*y+x*x);if(v>c){let D=c/v;p*=D,y*=D,x*=D}let A=f.pos.x+p,R=f.pos.y+y,w=f.pos.z+x;R=Math.min(d[_].hhi,Math.max(d[_].hlo,R));let k=Math.atan2(-w,A);k<0&&(k+=u);let M=Math.hypot(A,w),T=d[_].a0,N=d[_].a1;T<0&&(T+=u),N<0&&(N+=u),N>=T&&(k<T?k=T:k>N&&(k=N));let q=Ss(R),j=Wr;M<j?M=j:M>q&&(M=q),f.pos.set(M*Math.cos(k),R,-M*Math.sin(k))}}}function Mh(s,e,t,n,i){if(s<0)return!1;let r=Math.PI*2,o=.001;if(n<.7-o||n>nt*1.16+o)return!1;let a=Math.hypot(t,i);if(a<Wr-o||a>Ss(n)+o)return!1;let l=sn(s,e)+nn+wn,c=sn(s+1,e)-nn-wn;if(l<0&&(l+=r),c<0&&(c+=r),c<l)return!0;let h=Math.atan2(-i,t);return h<0&&(h+=r),h>=l-o&&h<=c+o}function bh(s){return ka(s,k0,H0,Ba,ci/2-.5)}function Eh(s,e,t,n){let i=null,r=qi*1.6;for(let o of n){if(o.id===t)continue;let a=Math.hypot(o.origin.x-s,o.origin.z-e);a<r&&(r=a,i={id:o.id})}return i}function W0(s,e){let t=new Set(s),n=new Map(s.map(o=>[o,new Set]));for(let o of e)!t.has(o.from)||!t.has(o.to)||o.from===o.to||(n.get(o.from).add(o.to),n.get(o.to).add(o.from));let i=new Set,r=[];for(let o of s){if(i.has(o))continue;let a=[],l=[o];for(i.add(o);l.length;){let c=l.shift();a.push(c);for(let h of n.get(c))i.has(h)||(i.add(h),l.push(h))}r.push(a)}return r.sort((o,a)=>a.length-o.length)}function Sh(s,e,t,n){let i={},r=f=>!!e[f]&&Number.isFinite(e[f].x)&&Number.isFinite(e[f].z),o=[];for(let f of s)r(f)&&(i[f]={x:e[f].x,z:e[f].z},o.push(i[f]));let a=s.filter(f=>!r(f));if(!a.length)return i;let l=qi*2,c=wh(n)+qi,h=(f,p)=>Math.hypot(f,p)>=c&&o.every(y=>Math.hypot(y.x-f,y.z-p)>=l),u=f=>(o.push(f),f),d=(f,p)=>{if(h(f,p))return{x:f,z:p};for(let y=1;y<=40;y++){let x=[];for(let v=-y;v<=y;v++)for(let A=-y;A<=y;A++)Math.max(Math.abs(v),Math.abs(A))===y&&x.push({x:f+v*ci,z:p+A*ci});x.sort((v,A)=>Math.hypot(v.x-f,v.z-p)-Math.hypot(A.x-f,A.z-p));for(let v of x)if(h(v.x,v.z))return v}return null},m=X0(a.length+o.length+4,n),g=new Set(m.map((f,p)=>p)),_=(f,p)=>{let y=-1,x=1/0;for(let v of g){let A=m[v];if(!h(A.x,A.z)){g.delete(v);continue}let R=Math.hypot(A.x-f,A.z-p);R<x&&(x=R,y=v)}return y<0?null:(g.delete(y),m[y])};for(let f of W0(s,t)){let p=f.filter(R=>!r(R));if(!p.length)continue;let y=f.filter(r).map(R=>i[R]),x=y.reduce((R,w)=>R+w.x,0),v=y.reduce((R,w)=>R+w.z,0),A=y.length;for(let R of p){let w=A===0?0:x/A,k=A===0?0:v/A,M=(y.length?d(w,k):_(w,k))??d(w,k);if(!M)break;i[R]=u(M),x+=M.x,v+=M.z,A++}}for(let f of a)i[f]||(i[f]=u(d(0,0)??{x:0,z:0}));return i}function Th(s,e){let t=[];for(let n of[...s].sort((i,r)=>i.dist-r.dist))t.some(i=>Math.hypot(i.sx-n.sx,i.sy-n.sy)<e)||t.push(n);return t}function wh(s){let e=Math.min(dh,uh+1.05*Math.sqrt(s)),{rOut:t}=ka(s,0,e,Ba);return t+qi+fh}function X0(s,e){if(s<=0)return[];let n=(e>0?wh(e):0)+qi,i=Math.ceil((n+Math.ceil(Math.sqrt(s))*ci)/ci)*2+2,r=[];for(let l=0;l<i;l++)for(let c=0;c<i;c++){let h=(c-(i-1)/2)*ci,u=(l-(i-1)/2)*ci,d=Math.hypot(h,u);d>=n&&r.push({x:h,z:u,d})}r.sort((l,c)=>l.d-c.d||Math.atan2(l.z,l.x)-Math.atan2(c.z,c.x)||l.x-c.x);let o=[],a=new Set(r.map((l,c)=>c));for(let l=0;l<s&&a.size;l++){let c=-1,h=1/0;for(let u of a){let d=r[u],m=d.d;if(o.length){m=1/0;for(let _ of o)m=Math.min(m,Math.hypot(_.x-d.x,_.z-d.z))}let g=m*1e4+d.d;g<h&&(h=g,c=u)}a.delete(c),o.push({x:r[c].x,z:r[c].z})}return o}function Ah(s,e,t){let i=Math.min(dh,uh+1.05*Math.sqrt(s)),r=Math.min(i*rh,Math.max(sh,sh*Math.sqrt(s)*.55)),{slots:o}=ka(s,0,r,Ba,i*rh);if(!e.length)return{x:0,z:0,r:i,slots:o};let a=t?t.x:e.reduce((d,m)=>d+m.x,0)/e.length,l=t?t.z:e.reduce((d,m)=>d+m.z,0)/e.length,c=i+qi+fh,h=(d,m)=>e.every(g=>Math.hypot(g.x-d,g.z-m)>=c);if(h(a,l))return{x:a,z:l,r:i,slots:o};let u=c*.4;for(let d=1;d<=400;d++){let m=d*u,g=Math.max(8,Math.round(Math.PI*2*m/u));for(let _=0;_<g;_++){let f=_/g*Math.PI*2,p=a+m*Math.cos(f),y=l+m*Math.sin(f);if(h(p,y))return{x:p,z:y,r:i,slots:o}}}return{x:a,z:Math.max(...e.map(d=>d.z))+c,r:i,slots:o}}var Ha=["forest","three","tree","leaf"],Rh=.3,Y0=1.05;function Ch(s,e,t){let n={forest:s,three:e,tree:t,leaf:t*Rh},i=Ha.map(o=>({level:o,d:n[o],reachable:!1})),r=0;for(let o=i.length-1;o>=0;o--)(o===i.length-1||i[o].d>r*Y0)&&(i[o].reachable=!0,r=i[o].d);return i}function Ph(s,e){let t=e.filter(r=>r.reachable);if(!t.length)return"leaf";let n=t[t.length-1],i=1/0;for(let r of t){let o=Math.abs(Math.log(Math.max(s,1e-6)/r.d));o<i&&(i=o,n=r)}return n.level}var bs=(s,e,t)=>{if(!Number.isFinite(s)||!Number.isFinite(e)||!Number.isFinite(t))return 0;if(e===s)return t>=e?1:0;let n=Math.min(1,Math.max(0,(t-s)/(e-s)));return n*n*(3-2*n)};function Lh(s,e){let t=d=>e.find(m=>m.level===d),n=t("tree")?.d??1,i=t("leaf")?.d??n*Rh,r=t("forest"),o=r?.reachable?r.d:n*1.9,a=Math.min(n*4,o*.55),l=Math.min(o,a*2),c=bs(a,l,s),h=1-c,u=bs(n*1.15,n*1.8,s);return{sil:c,title:h*(1-bs(n*1.05,n*1.45,s)),desc:h*(1-bs(i*1.15,i*2.2,s)),fieldName:h*(1-u),treeName:u,accent:h*(1-bs(n*1.2,n*1.9,s))}}function Qe(s,e){let t=parseInt(s.slice(1),16);return`rgba(${t>>16&255},${t>>8&255},${t&255},${e})`}function Va(s,e){let t=parseInt(s.slice(1),16),n=t>>16&255,i=t>>8&255,r=t&255;return n=Math.round(n+(255-n)*e),i=Math.round(i+(255-i)*e),r=Math.round(r+(255-r)*e),n<<16|i<<8|r}function As(s,e){return"#"+Va(s,e).toString(16).padStart(6,"0")}var q0=["root","trunk","leaf","flower","apple","seed"];function Wa(s){return s==null?"":typeof s=="string"?s:typeof s=="number"||typeof s=="boolean"?String(s):""}function Z0(s){let e=Wa(s).toLowerCase().trim();return q0.includes(e)?e:"leaf"}function J0(s,e){if(s instanceof Date){let t=s.getTime()/864e5;return Number.isFinite(t)?t:e}if(typeof s=="number")return Number.isFinite(s)?s:e;if(typeof s=="string"&&s.trim()){let t=Date.parse(s);if(!isNaN(t))return t/864e5;let n=parseFloat(s);if(!isNaN(n))return n}return e}function $0(s){let e=s;if(e.startsWith("---")){let t=e.indexOf(`
---`,3);t!==-1&&(e=e.slice(e.indexOf(`
`,t+1)+1))}for(let t of e.split(`
`)){let n=t.trim();if(!n||n.startsWith("#")||n.startsWith("---")||n.startsWith("<!--"))continue;let i=n.replace(/[*_`>#[\]]/g,"").trim();if(i)return i.length>160?i.slice(0,157)+"\u2026":i}return""}function K0(s){if(!Array.isArray(s))return;let e=[];for(let t of s)if(t&&typeof t=="object"){let n=t,i=Wa(n.c??n.chair).trim(),r=Wa(n.t??n.take).trim();i&&e.push({c:i,t:r})}return e.length?e:void 0}function j0(s){let e=s.split(`
`),t=e.findIndex(i=>/^#{1,6}\s+stakeholder views\b/i.test(i.trim()));if(t<0)return;let n=[];for(t=t+1;t<e.length;t++){let i=e[t].trim();if(!i)continue;if(/^#{1,6}\s/.test(i))break;let r=i.match(/^[-*]\s*\*\*(.+?)\*\*\s*[:：]?\s*(.*)$/);if(r){let o=r[1].replace(/[:：]\s*$/,"").trim();o&&n.push({c:o,t:r[2].trim()})}}return n.length?n:void 0}async function Ih(s,e){let t=gh(e.ignoreFolders),n=s.vault.getMarkdownFiles().filter(y=>!_h(y.path,t)),i=e.forestByFolder!==!1,r=y=>{if(!i)return"(all)";let x=y.indexOf("/");return x<0?"(root)":y.slice(0,x)},o=[],a=new Map;for(let y of n){let v=s.metadataCache.getFileCache(y)?.frontmatter??{};if(v.bridge_from!=null&&v.bridge_to!=null){let w=typeof v.explain=="string"?v.explain:typeof v.description=="string"?v.description:"";o.push({id:y.path,from:String(v.bridge_from).trim(),to:String(v.bridge_to).trim(),fromNote:v.bridge_from_note!=null?String(v.bridge_from_note).trim():void 0,toNote:v.bridge_to_note!=null?String(v.bridge_to_note).trim():void 0,title:typeof v.title=="string"&&v.title||y.basename,explain:w,filePath:y.path});continue}let A=v.tree_type!=null||v.field!=null||v.time!=null||v.flower!=null;if(e.onlyTreeNotes&&!A)continue;let R=r(y.path);a.has(R)||a.set(R,[]),a.get(R).push(y)}let l=[...a.values()].reduce((y,x)=>y+x.length,0);l>1500&&new Ga.Notice("Eve Apple Tree: large vault ("+l+" notes). Tip: turn on 'Only show notes with tree frontmatter' in settings for a cleaner, faster tree.",8e3);let c=s.metadataCache.resolvedLinks||{},h=[],u=[];for(let[y,x]of a){let v=[],A=new Map,R=z=>(A.has(z)||(A.set(z,v.length),v.push(z)),A.get(z)),w=[],k=new Map;for(let z of x){let Y=s.metadataCache.getFileCache(z),se=Y?.frontmatter??{},H=Z0(se.tree_type??(se.flower?"flower":void 0)),Q=H==="root"||H==="trunk",de=H==="seed",be=se.field!=null?String(se.field).trim():"",pe=Q?null:de?be||null:be||"Unfiled",Le=pe&&!de?R(pe):-1,Ie=typeof se.description=="string"?se.description:"",Ee=K0(se.views),De=!Ee&&(Y?.headings??[]).some(Z=>/^stakeholder views\b/i.test(Z.heading)),P=l>2e3;if(!Ie&&!P||De){let Z="";try{Z=await s.vault.cachedRead(z)}catch{Z=""}!Ie&&!P&&(Ie=$0(Z)),De&&(Ee=j0(Z))}let ce={id:z.path,title:typeof se.title=="string"&&se.title||z.basename,description:Ie,treeType:H,field:Le,fieldName:pe,time:J0(se.time,z.stat.ctime/864e5),views:Ee,tNorm:0,pos:new L};de&&(ce._pool=pe?"tree":"forest"),w.push(ce),k.set(z.path,ce)}let M=[],T=new Map;for(let z of x){let Y=z.path,se=k.get(Y);if(se)for(let H of Object.keys(c[Y]||{})){let Q=k.get(H);if(!Q||se===Q)continue;let de=se.field<0,be=Q.field<0,pe;se.treeType==="seed"||Q.treeType==="seed"?pe="rhizome":de&&be?pe="spine":de||be?pe="branch":se.field===Q.field?pe="intra":pe="rhizome",M.push({from:Y,to:H,kind:pe}),T.has(H)||T.set(H,[]),T.get(H).push(Y)}}let N=Math.max(1,v.length);vh(w,N);let q=e.dotPositions||{};for(let z of w){let Y=q[z.id];if(!(!Y||!Number.isFinite(Y.x)||!Number.isFinite(Y.y)||!Number.isFinite(Y.z))){if(z.field<0||z.treeType==="root"||z.treeType==="trunk"||!Mh(z.field,N,Y.x,Y.y,Y.z)){delete q[z.id];continue}z.pos.set(Y.x,Y.y,Y.z),z._pinned=!0}}let j=w.filter(z=>z.treeType==="leaf"&&z.field>=0).length;e.clusterLinkedDots!==!1&&yh(w,N,M);let D=[...new Set(w.flatMap(z=>(z.views??[]).map(Y=>Y.c).filter(Boolean)))],F=s.vault.getName(),B=y==="(root)"||y==="(all)"?F:y;e.clusterLinkedDots!==!1&&j>500&&u.push(B);let $=w.filter(z=>z._pool==="tree"),J;if($.length){let z=bh($.length);$.forEach((Y,se)=>Y.pos.set(z.slots[se].x,z.slots[se].y,z.slots[se].z)),J={rIn:z.rIn,rOut:z.rOut}}let X={id:y,topic:B,origin:{x:0,z:0},nodes:w,edges:M,fields:v,byId:k,incoming:T,cast:D,pool:J};for(let z of w)z.tree=X;h.push(X)}u.length&&new Ga.Notice(`Eve Apple Tree: clustering skipped for ${u.join(", ")} (over 500 notes) to keep Obsidian fast.`),h.sort((y,x)=>y.id<x.id?-1:y.id>x.id?1:0);let d=h.reduce((y,x)=>y+x.nodes.filter(v=>v._pool==="forest").length,0),m=Sh(h.map(y=>y.id),e.treeOrigins??{},o,d);for(let y of h)y.origin={...m[y.id]};for(let y of h)for(let x of y.nodes)x._pool!=="forest"&&(x.pos.x+=y.origin.x,x.pos.z+=y.origin.z);let g=h.flatMap(y=>y.nodes.filter(x=>x._pool==="forest")),_;if(g.length){let y=Ah(g.length,h.map(x=>x.origin),{x:0,z:0});g.forEach((x,v)=>x.pos.set(y.x+y.slots[v].x,y.slots[v].y,y.z+y.slots[v].z)),_={x:y.x,z:y.z,r:y.r}}let f=new Set(h.map(y=>y.id)),p=o.filter(y=>f.has(y.from)&&f.has(y.to)&&y.from!==y.to);return{trees:h,bridges:p,seedPool:_}}var Rs="eve-apple-tree-view",Q0={root:1,trunk:.8,apple:.7,flower:.65,leaf:0,seed:0},e_="https://github.com/BrandtheBrand/eve-apple-tree/blob/main/MANUAL.md",Yr=class Yr extends rn.ItemView{constructor(t,n,i){super(t);this.settings=n;this.persist=i;ue(this,"root");ue(this,"labelLayer");ue(this,"renderer");ue(this,"scene");ue(this,"camera");ue(this,"controls");ue(this,"raf",0);ue(this,"ro");ue(this,"w",1);ue(this,"h",1);ue(this,"reduced",window.matchMedia("(prefers-reduced-motion: reduce)").matches);ue(this,"forest",{trees:[],bridges:[]});ue(this,"allNodes",[]);ue(this,"byId",new Map);ue(this,"bridges",[]);ue(this,"G");ue(this,"texCache",{});ue(this,"fadeMats",[]);ue(this,"glowMats",new Map);ue(this,"glowAnim",[]);ue(this,"themeDark",!1);ue(this,"linkMul",1);ue(this,"themeBtn");ue(this,"themeManual",!1);ue(this,"textScale",1);ue(this,"shine",1);ue(this,"silIcon","round");ue(this,"uiCard");ue(this,"pill");ue(this,"noteCard");ue(this,"sectorsOn",!0);ue(this,"fieldLabelsOn",!0);ue(this,"accentLabelsOn",!0);ue(this,"bridgesOn",!0);ue(this,"fieldMode","flat");ue(this,"lodT",0);ue(this,"pool",[]);ue(this,"active",new Map);ue(this,"sEls",[]);ue(this,"aEls",[]);ue(this,"sectorAnchor",[]);ue(this,"sectorTree",[]);ue(this,"preset");ue(this,"tween",null);ue(this,"selected",null);ue(this,"selRing");ue(this,"D0",29);ue(this,"edgeIndex",new Map);ue(this,"press",null);ue(this,"drag",null);ue(this,"resetArmed",0);ue(this,"treeDrag",null);ue(this,"groundPlane",new Lt(new L(0,1,0),0));ue(this,"seedSprites",[]);ue(this,"hoverEl");ue(this,"hoverPt",null);ue(this,"hoverNode",null);ue(this,"ray",new Xi);ue(this,"scaleStops",[]);ue(this,"scaleEls",[]);ue(this,"scaleLevel",null);ue(this,"lod",{sil:0,title:1,desc:1,fieldName:1,treeName:0,accent:1});ue(this,"poolMats",[]);ue(this,"poolIcons",[]);ue(this,"seedGlowMat");ue(this,"poolLabelEl");ue(this,"resetTreeArmed",0);ue(this,"resizeRenderer",()=>{if(!this.renderer)return;let t=this.root.getBoundingClientRect();this.w=Math.max(1,t.width),this.h=Math.max(1,t.height),this.camera.aspect=this.w/this.h,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.w,this.h),this.computeStops()});ue(this,"_v",new L);ue(this,"_fr",new Vi);ue(this,"_m",new ct);ue(this,"easeInOutCubic",t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2);ue(this,"resetView",()=>this.flyTo(this.preset.pos,this.preset.target));ue(this,"onPointerDown",t=>{if(t.button!==0||!this.renderer||t.target!==this.renderer.domElement)return;let n=this.pick(t);if(this.press={x:t.clientX,y:t.clientY,t:performance.now(),node:n?.node??null,bridge:n?.bridge??null},n?.node&&n.node.sprite&&this.isDraggable(n.node)){t.stopPropagation();let r=n.node.sprite,o=new L;this.camera.getWorldDirection(o);let a=new Lt().setFromNormalAndCoplanarPoint(o,r.position.clone()),l=this.rayOnPlane(t,a),c=l?r.position.clone().sub(l):new L;this.drag={node:n.node,plane:a,offset:c,prevSpin:this.controls.autoRotate,moved:!1},this.controls.autoRotate=!1,this.renderer.domElement.setPointerCapture?.(t.pointerId);return}let i=n?.tree??(n?.node&&this.isTreeAnchor(n.node)?n.node.tree:void 0);if(i){t.stopPropagation();let r=this.rayOnPlane(t,this.groundPlane),o=r?new L(i.origin.x-r.x,0,i.origin.z-r.z):new L;this.treeDrag={tree:i,offset:o,prevSpin:this.controls.autoRotate,moved:!1},this.controls.autoRotate=!1,this.renderer.domElement.setPointerCapture?.(t.pointerId)}});ue(this,"onPointerMove",t=>{if(this.hoverPt=this.renderer&&t.target===this.renderer.domElement?{x:t.clientX,y:t.clientY}:null,!!this.press){if(this.drag){if(!this.drag.moved&&Math.hypot(t.clientX-this.press.x,t.clientY-this.press.y)<5)return;this.drag.moved=!0;let n=this.rayOnPlane(t,this.drag.plane);if(!n)return;this.moveNode(this.drag.node,this.clampToWedge(this.drag.node,n.add(this.drag.offset)));return}if(this.treeDrag){if(!this.treeDrag.moved&&Math.hypot(t.clientX-this.press.x,t.clientY-this.press.y)<5)return;this.treeDrag.moved=!0;let n=this.rayOnPlane(t,this.groundPlane);if(!n)return;this.moveTree(this.treeDrag.tree,n.x+this.treeDrag.offset.x,n.z+this.treeDrag.offset.z)}}});ue(this,"onPointerUp",t=>{if(t.button!==0||!this.press)return;let n=Math.hypot(t.clientX-this.press.x,t.clientY-this.press.y),i=this.press,r=this.drag,o=this.treeDrag;if(this.press=null,this.drag=null,this.treeDrag=null,r&&(this.renderer?.domElement.releasePointerCapture?.(t.pointerId),this.controls.autoRotate=r.prevSpin,r.moved)){this.persistDot(r.node);return}if(o&&(this.renderer?.domElement.releasePointerCapture?.(t.pointerId),this.controls.autoRotate=o.prevSpin,o.moved)){this.persistTree(o.tree);return}n>5||(i.node?this.selectNode(i.node):i.bridge?this.showBridge(i.bridge):this.deselect())});ue(this,"onPointerLeave",()=>{this.hoverPt=null});ue(this,"onContextMenu",t=>{t.preventDefault()})}getViewType(){return Rs}getDisplayText(){return"Eve's Apple Tree"}getIcon(){return"sprout"}async onOpen(){this.root=this.contentEl.createDiv({cls:"eve-tree-root"}),this.labelLayer=this.root.createDiv({cls:"eve-labels"}),this.registerEvent(this.app.workspace.on("css-change",()=>{this.themeManual||this.applyTheme(this.detectObsidianDark())})),this.registerDomEvent(this.containerEl.ownerDocument,"keydown",t=>{t.key==="Escape"&&this.noteCard?.classList.contains("show")&&(t.preventDefault(),this.deselect())}),this.app.workspace.onLayoutReady(()=>{this.reload()})}async onClose(){this.dispose()}get isForest(){return this.forest.trees.length>1}async reload(){if(this.dispose(!1),this.textScale=this.settings.textSize&&this.settings.textSize>0?this.settings.textSize:1,this.shine=this.settings.glowScale!=null&&this.settings.glowScale>=0?this.settings.glowScale:1,this.silIcon=this.settings.zoomOutIcon??"round",this.forest=await Ih(this.app,this.settings),this.allNodes=this.forest.trees.flatMap(t=>t.nodes),this.byId=new Map(this.allNodes.map(t=>[t.id,t])),!this.allNodes.length){this.showEmpty();return}this.initThree(),this.buildScene(),this.buildControlsPanel(),this.buildScaleBar(),this.applyTheme(this.themeManual?this.themeDark:this.detectObsidianDark()),this.applyTextScale(),this.fit(),this.computeStops(),this.startLoop()}applyTextScale(){this.root.style.setProperty("--eve-txt",String(this.textScale))}showEmpty(){let t=this.root.createDiv({cls:"eve-empty"});t.createEl("b",{text:"Your tree has no notes yet."}),t.createEl("br"),t.createEl("br"),t.appendText("Tag your first note by adding a frontmatter block at the very top of the file:"),t.createEl("pre",{cls:"eve-empty-code"}).createEl("code",{text:`---
tree_type: leaf
field: Researcher
time: 2026-09-11
---`}),t.appendText("Then click "),t.createEl("b",{text:"Reload my notes"}),t.appendText(". Links between notes become branches; cross-field links become rhizome. Put each topic in its own folder and the vault becomes a "),t.createEl("b",{text:"forest"}),t.appendText("."),t.createEl("br"),t.createEl("br"),t.appendText("Already have notes but see nothing? By default the tree shows only notes that carry this frontmatter. To render every note in the vault, turn off "),t.createEl("b",{text:"Settings \u2192 Eve Apple Tree Thinking System \u2192 \u201COnly show notes with tree frontmatter.\u201D"}),t.createEl("br"),t.createEl("br"),t.createEl("button",{cls:"eve-btn",text:"\u27F3 Reload my notes"}).addEventListener("click",()=>{this.reload()})}initThree(){let t=this.root.getBoundingClientRect();this.w=Math.max(1,t.width),this.h=Math.max(1,t.height),this.scene=new Rr,this.scene.background=new Be(Ua),this.scene.fog=new Ar(Oa,20,54),this.camera=new Pt(50,this.w/this.h,.1,2e3),this.camera.position.set(20,12,20),this.renderer=new ps({antialias:!0,alpha:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(this.w,this.h);let n=this.renderer.domElement;n.classList.add("eve-canvas"),this.root.insertBefore(n,this.labelLayer),this.controls=new Gr(this.camera,n),this.controls.enableDamping=!0,this.controls.minDistance=4,this.controls.maxDistance=400,this.controls.autoRotateSpeed=.7,this.controls.target.set(0,nt*.46,0),this.controls.enablePan=!0,this.controls.screenSpacePanning=!0,this.controls.zoomToCursor=!0,this.controls.mouseButtons={LEFT:tn.ROTATE,MIDDLE:tn.DOLLY,RIGHT:tn.PAN},this.preset={pos:this.camera.position.clone(),target:this.controls.target.clone()},this.D0=this.camera.position.distanceTo(this.controls.target),this.G={fieldFlat:new dt,fieldColumn:new dt,struct:new dt,rhizome:new dt,dots:new dt,glow:new dt,sil:new dt,bridge:new dt,select:new dt,pools:new dt},Object.values(this.G).forEach(i=>this.scene.add(i)),this.ro=new ResizeObserver(()=>this.resizeRenderer()),this.ro.observe(this.root),this.root.addEventListener("pointerdown",this.onPointerDown,!0),this.root.addEventListener("pointermove",this.onPointerMove,!0),this.root.addEventListener("pointerup",this.onPointerUp,!0),n.addEventListener("contextmenu",this.onContextMenu),n.addEventListener("pointerleave",this.onPointerLeave)}poolTexture(){let t="pool";if(this.texCache[t])return this.texCache[t];let n=256,i=this.containerEl.ownerDocument.createElement("canvas");i.width=i.height=n;let r=i.getContext("2d"),o=r.createRadialGradient(n/2,n/2,0,n/2,n/2,n/2);o.addColorStop(0,"rgba(255,255,255,0.92)"),o.addColorStop(.7,"rgba(255,255,255,0.88)"),o.addColorStop(.9,"rgba(255,255,255,0.70)"),o.addColorStop(1,"rgba(255,255,255,0.00)"),r.fillStyle=o,r.fillRect(0,0,n,n);let a=new Qt(i);return this.texCache[t]=a,a}poolIconTexture(t){let n="poolicon"+(t?"d":"l");if(this.texCache[n])return this.texCache[n];let i=256,r=this.containerEl.ownerDocument.createElement("canvas");r.width=r.height=i;let o=r.getContext("2d"),a=t?ui.dark:ui.light,l=An.seed.tint,c=An.seed.glow,h=o.createRadialGradient(128,182,4,128,182,96);h.addColorStop(0,Qe(a,.95)),h.addColorStop(.74,Qe(a,.85)),h.addColorStop(1,Qe(a,0)),o.fillStyle=h,o.beginPath(),o.ellipse(128,182,96,34,0,0,7),o.fill();for(let[d,m,g]of[[96,150,19],[158,142,17],[127,104,15]]){let _=o.createRadialGradient(d,m,0,d,m,g*3.2);_.addColorStop(0,Qe(c,.85)),_.addColorStop(.3,Qe(c,.38)),_.addColorStop(1,Qe(c,0)),o.fillStyle=_,o.beginPath(),o.arc(d,m,g*3.2,0,7),o.fill(),o.fillStyle=Qe(l,1),o.beginPath(),o.arc(d,m,g,0,7),o.fill(),o.fillStyle=Qe(As(l,.55),.95),o.beginPath(),o.arc(d-g*.25,m-g*.3,g*.42,0,7),o.fill()}let u=new Qt(r);return this.texCache[n]=u,u}dotTexture(t,n){let i=t+n;if(this.texCache[i])return this.texCache[i];let r=160,o=this.containerEl.ownerDocument.createElement("canvas");o.width=o.height=r;let a=o.getContext("2d"),l=r/2,c=r/2,h=a.createRadialGradient(l,c,8,l,c,78);h.addColorStop(0,Qe(t,.22)),h.addColorStop(1,Qe(t,0)),a.fillStyle=h,a.beginPath(),a.arc(l,c,78,0,7),a.fill(),a.fillStyle=Qe(t,.96),a.beginPath(),a.arc(l,c,30,0,7),a.fill(),a.lineWidth=5,a.strokeStyle=Qe(n,.95),a.beginPath(),a.arc(l,c,30,0,7),a.stroke(),a.fillStyle="#ffffff",a.beginPath(),a.arc(l,c,12,0,7),a.fill();let u=new Qt(o);return u.anisotropy=4,this.texCache[i]=u,u}diamondTexture(t){let n="dia"+t;if(this.texCache[n])return this.texCache[n];let i=160,r=this.containerEl.ownerDocument.createElement("canvas");r.width=r.height=i;let o=r.getContext("2d"),a=i/2,l=o.createRadialGradient(a,a,1,a,a,74);l.addColorStop(0,Qe(t,.9)),l.addColorStop(.3,Qe(t,.42)),l.addColorStop(1,Qe(t,0)),o.fillStyle=l,o.beginPath(),o.arc(a,a,74,0,7),o.fill(),o.globalCompositeOperation="lighter";let c=(d,m)=>{let g=o.createLinearGradient(a-d,a,a+d,a);g.addColorStop(0,"rgba(255,255,255,0)"),g.addColorStop(.5,"rgba(255,255,255,.92)"),g.addColorStop(1,"rgba(255,255,255,0)"),o.fillStyle=g,o.fillRect(a-d,a-m/2,d*2,m)},h=(d,m,g)=>{o.save(),o.translate(a,a),o.rotate(d),o.translate(-a,-a),c(m,g),o.restore()};h(0,72,5),h(Math.PI/2,72,5),h(Math.PI/4,40,3),h(-Math.PI/4,40,3),l=o.createRadialGradient(a,a,0,a,a,16),l.addColorStop(0,"rgba(255,255,255,1)"),l.addColorStop(.5,Qe(As(t,.6),.95)),l.addColorStop(1,Qe(t,0)),o.fillStyle=l,o.beginPath(),o.arc(a,a,16,0,7),o.fill(),o.globalCompositeOperation="source-over";let u=new Qt(r);return u.anisotropy=4,this.texCache[n]=u,u}haloTexture(){if(this.texCache.halo)return this.texCache.halo;let t=128,n=this.containerEl.ownerDocument.createElement("canvas");n.width=n.height=t;let i=n.getContext("2d"),r=t/2,o=i.createRadialGradient(r,r,0,r,r,r);o.addColorStop(0,"rgba(255,255,255,1)"),o.addColorStop(.22,"rgba(255,255,255,0.62)"),o.addColorStop(.45,"rgba(255,255,255,0.28)"),o.addColorStop(.7,"rgba(255,255,255,0.08)"),o.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=o,i.fillRect(0,0,t,t);let a=new Qt(n);return a.anisotropy=4,this.texCache.halo=a,a}glowMat(t,n){let i=t+(n?"|a":"|b"),r=this.glowMats.get(i);return r||(r=new jt({map:this.haloTexture(),color:new Be(t),transparent:!0,depthWrite:!1,blending:this.themeDark?ni:Vt,fog:!0,opacity:0}),this.glowMats.set(i,r),this.glowAnim.push({m:r,accent:n})),r}ringTexture(){if(this.texCache.ring)return this.texCache.ring;let t=128,n=this.containerEl.ownerDocument.createElement("canvas");n.width=n.height=t;let i=n.getContext("2d");i.lineWidth=7,i.strokeStyle="rgba(34,48,58,.9)",i.beginPath(),i.arc(t/2,t/2,t/2-8,0,7),i.stroke(),i.lineWidth=3,i.strokeStyle="rgba(255,255,255,.9)",i.beginPath(),i.arc(t/2,t/2,t/2-8,0,7),i.stroke();let r=new Qt(n);return this.texCache.ring=r,r}treeSilTexture(t="round"){let n="sil-"+t;if(this.texCache[n])return this.texCache[n];let i=256,r=this.containerEl.ownerDocument.createElement("canvas");r.width=r.height=i;let o=r.getContext("2d"),a=(h,u)=>{o.fillStyle=Qe("#5b4632",.92),o.fillRect(i*(.5-u/2),i*h,i*u,i*(.97-h))},l=(h,u,d)=>{let m=i*h,g=i*u,_=i*d,f=o.createRadialGradient(m,g,_*.78,m,g,_);f.addColorStop(0,Qe(Ts,.96)),f.addColorStop(.86,Qe(Ts,.93)),f.addColorStop(1,Qe(Ts,0)),o.fillStyle=f,o.beginPath(),o.arc(m,g,_,0,7),o.fill()};if(t==="conifer"){a(.82,.07);let h=(u,d,m)=>{o.fillStyle=Qe(Ts,.94),o.beginPath(),o.moveTo(i*.5,i*(u-m)),o.lineTo(i*(.5+d),i*u),o.lineTo(i*(.5-d),i*u),o.closePath(),o.fill()};h(.82,.3,.26),h(.62,.25,.24),h(.44,.19,.22)}else if(t==="apple"){a(.56,.085),l(.5,.42,.25),l(.27,.46,.2),l(.73,.46,.2),l(.38,.36,.17),l(.62,.36,.17),l(.5,.34,.17);let h=(u,d,m)=>{let g=i*u,_=i*d,f=i*m,p=o.createRadialGradient(g,_,1,g,_,f);p.addColorStop(0,Qe("#d23b2c",.98)),p.addColorStop(1,Qe("#7a2018",.6)),o.fillStyle=p,o.beginPath(),o.arc(g,_,f,0,7),o.fill()};h(.4,.5,.03),h(.58,.47,.03),h(.5,.55,.028),h(.66,.52,.026),h(.33,.45,.026)}else a(.6,.075),l(.5,.37,.3),l(.31,.44,.2),l(.69,.44,.2),l(.38,.27,.17),l(.62,.27,.17),l(.5,.22,.17);let c=new Qt(r);return this.texCache[n]=c,c}bridgeTexture(){if(this.texCache.bridge)return this.texCache.bridge;let t=128,n=this.containerEl.ownerDocument.createElement("canvas");n.width=n.height=t;let i=n.getContext("2d"),r=i.createRadialGradient(64,64,4,64,64,60);r.addColorStop(0,Qe(hi,.95)),r.addColorStop(.55,Qe(hi,.5)),r.addColorStop(1,Qe(hi,0)),i.fillStyle=r,i.beginPath(),i.arc(64,64,60,0,7),i.fill(),i.fillStyle="#fff",i.font="bold 60px ui-monospace,Menlo,monospace",i.textAlign="center",i.textBaseline="middle",i.fillText("\u21C4",64,66);let o=new Qt(n);return this.texCache.bridge=o,o}secOf(t){return ws[(t%ws.length+ws.length)%ws.length]}buildScene(){for(let t of this.forest.trees)this.buildDots(t),this.buildLinks(t),this.buildFields(t),this.buildSilhouette(t);this.buildPools(),this.buildBridges(),this.applyFieldMode(),this.buildLabels(),this.selRing=new un(new jt({map:this.ringTexture(),transparent:!0,depthWrite:!1,fog:!0,opacity:0})),this.selRing.visible=!1,this.G.select.add(this.selRing)}buildPools(){let t,n=this.themeDark?ui.dark:ui.light,i=(o,a,l)=>{let c=new Vn({map:this.poolTexture(),color:new Be(n),transparent:!0,depthWrite:!1,fog:!0,opacity:0}),h=new It(t??(t=new fs(2,2)),c);h.rotation.x=-Math.PI/2,h.position.set(o,.01,a),h.scale.set(l,l,1),this.G.pools.add(h),this.poolMats.push(c);let u=new un(new jt({map:this.poolIconTexture(this.themeDark),transparent:!0,depthWrite:!1,fog:!1,opacity:0})),d=Math.max(4.2,l*.43);return u.position.set(o,d*.46,a),u.scale.set(d,d,1),this.G.pools.add(u),this.poolIcons.push(u),h};for(let o of this.forest.trees)o.pool&&(o.poolMesh=i(o.origin.x,o.origin.z,o.pool.rOut));let r=this.forest.seedPool;if(r){i(r.x,r.z,r.r);let o=this.allNodes.filter(a=>a._pool==="forest").length;this.poolLabelEl=this.labelLayer.createDiv({cls:"eve-tlabel eve-poollabel"}),this.poolLabelEl.setText(`\u{1F330} Seed pool \xB7 ${o}`)}}buildDots(t){for(let n of t.nodes){let i=An[n.treeType],r=i.tint,o=i.ring;if(n.treeType==="leaf"&&n.field>=0){let g=this.secOf(n.field);r=g.tint,o=g.ring}let a=n.treeType==="trunk"?1-.4*n.tNorm:1,l=i.r*2*a,c=new un(new jt({map:this.dotTexture(r,o),transparent:!0,depthWrite:!1,fog:!0}));c.position.copy(n.pos),c.scale.set(l,l,1),c.userData={node:n,baseScale:l,tint:r,ring:o},this.G.dots.add(c),n.sprite=c,n.treeType==="seed"&&this.seedSprites.push(c);let h=!!i.glow,u=this.glowMat(h?i.glow:r,h),d=new un(u);d.position.copy(n.pos);let m=l*(h?3.2:2.6);d.scale.set(m,m,1),d.userData={litMat:u},this.G.glow.add(d),n.glowSprite=d,n.treeType==="seed"&&(this.seedGlowMat=u)}}buildLinks(t){let n={spine:"#6f6780",branch:"#8a8276",intra:"#7d7a86"},i=[],r=[],o=[],a=[],l=[],c=[],h=new Be;for(let d of t.edges){let m=t.byId.get(d.from),g=t.byId.get(d.to);if(!m||!g)continue;let _=!(d.kind in n);h.set(_?"#5f7382":n[d.kind]);let f=_?o:i,p=_?a:r,y=_?c:l;f.push(m.pos.x,m.pos.y,m.pos.z,g.pos.x,g.pos.y,g.pos.z),p.push(h.r,h.g,h.b,h.r,h.g,h.b),y.push([m,g])}let u=(d,m,g,_,f)=>{if(!d.length)return;let p=new vt,y=new xt(new Float32Array(d),3);p.setAttribute("position",y),p.setAttribute("color",new xt(new Float32Array(m),3));let x=new dn({vertexColors:!0,transparent:!0,opacity:_,fog:!0});f.add(new Pr(p,x)),this.fadeMats.push({m:x,b:_,link:!0}),g.forEach(([v,A],R)=>{this.indexEdgeVertex(v.id,y,R*2),this.indexEdgeVertex(A.id,y,R*2+1)})};u(i,r,l,.5,this.G.struct),u(o,a,c,.14,this.G.rhizome)}indexEdgeVertex(t,n,i){let r=this.edgeIndex.get(t);r||(r=[],this.edgeIndex.set(t,r)),r.push({attr:n,vi:i})}wedgeShape(t,n,i){let r=new Gi;return r.moveTo(0,0),r.lineTo(i*Math.cos(t),i*Math.sin(t)),r.absarc(0,0,i,t,n,!1),r.lineTo(0,0),r}edgeFade(t,n,i,r){let o=new vt().setFromPoints([t,n]),a=new Be(i);o.setAttribute("color",new xt(new Float32Array([a.r,a.g,a.b,.24,a.r,a.g,a.b,0]),4));let l=new dn({vertexColors:!0,transparent:!0,fog:!0}),c=new Tn(o,l);c.renderOrder=-1,r.add(c),this.fadeMats.push({m:l,b:1})}buildFields(t){let n=Math.max(1,t.fields.length),i=Dt,r=nt,o=t.origin.x,a=t.origin.z,l=new dt;l.position.set(o,0,a),this.G.fieldFlat.add(l);let c=new dt;c.position.set(o,0,a),this.G.fieldColumn.add(c),t.fieldFlatG=l,t.fieldColumnG=c;let h=6,u=28;for(let m=0;m<n;m++){let g=this.secOf(m),_=sn(m,n)+nn,f=sn(m+1,n)-nn,p=(_+f)/2,y=new Be(g.tint),x=new Be(g.ring).getHex(),v=new Fr(this.wedgeShape(_,f,i),28);v.rotateX(-Math.PI/2),v.translate(0,.01,0);let A=new Vn({color:y,transparent:!0,opacity:.13,depthWrite:!1,side:Zt,fog:!0});l.add(new It(v,A)),this.fadeMats.push({m:A,b:.13});let R=new dn({color:x,transparent:!0,opacity:.12,fog:!0});l.add(new Tn(new vt().setFromPoints([fn(_,i,.01),fn(_,i,r*.92)]),R)),this.fadeMats.push({m:R,b:.12});let w=new Or(this.wedgeShape(_,f,i),{depth:r,bevelEnabled:!1,steps:h,curveSegments:u});w.rotateX(-Math.PI/2),w.translate(0,.012,0);let k=w.attributes.position,M=new Float32Array(k.count*4),T=(B,$,J)=>{let X=Math.min(1,Math.max(0,(J-B)/($-B)));return X*X*(3-2*X)};for(let B=0;B<k.count;B++){let $=k.getX(B),J=k.getY(B),X=k.getZ(B),z=Math.min(1,Math.max(0,J/r)),Y=1-T(.62,1,z),se=.45+.55*T(0,.22,z),H=.78+.22*(1-Math.min(1,Math.hypot($,X)/i));M[B*4]=1,M[B*4+1]=1,M[B*4+2]=1,M[B*4+3]=Y*se*H}w.setAttribute("color",new xt(M,4));let N=new Vn({color:new Be(Va(g.tint,.34)),vertexColors:!0,transparent:!0,opacity:.12,side:Tt,depthWrite:!1,blending:Vt,fog:!0}),q=new It(w,N);q.renderOrder=-2,c.add(q),this.fadeMats.push({m:N,b:.12}),this.edgeFade(fn(_,i,.012),fn(_,i,r),g.ring,c),this.edgeFade(fn(f,i,.012),fn(f,i,r),g.ring,c);let j=[];for(let B=0;B<=u;B++)j.push(fn(_+(f-_)*B/u,i,.014));let D=new dn({color:new Be(g.ring),transparent:!0,opacity:.26,fog:!0}),F=new Tn(new vt().setFromPoints(j),D);F.renderOrder=-1,c.add(F),this.fadeMats.push({m:D,b:.26}),this.sectorAnchor.push(fn(p,i+.7,r*.5)),this.sectorTree.push(t),this.sEls.push(this.mkSectorLabel(t.fields[m],g.ring))}let d=m=>{let g=[];for(let f=0;f<=120;f++){let p=f/120*Math.PI*2;g.push(new L(Math.cos(p)*i,.006,Math.sin(p)*i))}let _=new dn({color:13287336,transparent:!0,opacity:.55,fog:!0});m.add(new Tn(new vt().setFromPoints(g),_)),this.fadeMats.push({m:_,b:.55})};d(l),d(c)}mkSectorLabel(t,n){let i=this.labelLayer.createDiv({cls:"eve-slabel"});return i.setText(t),i.style.setProperty("--ring",n),i}buildSilhouette(t){let n=new un(new jt({map:this.treeSilTexture(this.silIcon),transparent:!0,depthWrite:!1,fog:!1,opacity:0}));n.position.set(t.origin.x,nt*.5,t.origin.z),n.scale.set(2*Dt*.8,nt*1.26,1),n.userData={tree:t},t.sil=n,this.G.sil.add(n),t.silMarks=[];let i=(r,o,a,l)=>{let c=new un(new jt({map:this.dotTexture(o,a),transparent:!0,depthWrite:!1,fog:!1,opacity:0}));c.userData={tree:t,mark:r},c.scale.set(l,l,1),this.G.sil.add(c),t.silMarks.push(c),this.placeSilMark(c)};if(t.nodes.some(r=>r.treeType==="apple")&&i("apple","#e0564b","#7a2018",1.5),t.nodes.some(r=>r.treeType==="flower")&&i("flower","#e0489a","#8a2560",1.5),this.isForest){let r=this.labelLayer.createDiv({cls:"eve-tlabel"});r.setText(t.topic),t.nameLabelEl=r}}placeSilMark(t){let n=t.userData.tree,i=t.userData.mark,[r,o]=Yr.SIL_MARK_ANCHOR[this.silIcon][i];t.position.set(n.origin.x+(r-.5)*Dt*1.6,nt*(1.13-1.26*o),n.origin.z)}resolveNote(t,n){if(!n)return null;if(t.byId.has(n))return t.byId.get(n);let i=n.replace(/\.md$/,"").toLowerCase();return t.nodes.find(r=>r.id.replace(/\.md$/,"").toLowerCase().endsWith("/"+i)||r.title.toLowerCase()===i)??null}repOf(t){return t.nodes.find(n=>n.treeType==="trunk")||t.nodes.find(n=>n.treeType==="root")||t.nodes[0]||null}buildBridges(){for(let t of this.forest.bridges){let n=this.forest.trees.find(m=>m.id===t.from),i=this.forest.trees.find(m=>m.id===t.to);if(!n||!i||n===i)continue;let r=this.resolveNote(n,t.fromNote),o=this.resolveNote(i,t.toNote),a=r?r.pos.clone():new L(n.origin.x,nt*.5,n.origin.z),l=o?o.pos.clone():new L(i.origin.x,nt*.5,i.origin.z),c=[];for(let m=0;m<=24;m++){let g=m/24,_=new L().lerpVectors(a,l,g);_.y+=Math.sin(g*Math.PI)*1.6,c.push(_)}let h=new dn({color:new Be(hi),transparent:!0,opacity:.6,fog:!0});this.G.bridge.add(new Tn(new vt().setFromPoints(c),h));let u=a.clone().add(l).multiplyScalar(.5);u.y=Math.max(a.y,l.y)+1.6;let d=new un(new jt({map:this.bridgeTexture(),transparent:!0,depthWrite:!1,fog:!0}));d.position.copy(u),d.scale.set(.95,.95,1),d.userData={bridge:t},this.G.bridge.add(d),this.bridges.push({def:t,sprite:d})}}applyFieldMode(){this.G.fieldFlat.visible=this.sectorsOn&&this.fieldMode==="flat",this.G.fieldColumn.visible=this.sectorsOn&&this.fieldMode==="column"}buildLabels(){for(let n=0;n<28;n++){let i=this.labelLayer.createDiv({cls:"eve-lblnode"}),r=i.createSpan({cls:"nt"}),o=i.createSpan({cls:"nd"});this.pool.push({el:i,t:r,d:o,node:null,op:0,target:0,tier:1,curId:null,sx:0,sy:0,sel:!1})}this.aEls=this.allNodes.filter(n=>n.treeType==="flower"||n.treeType==="apple").map(n=>{let i=this.labelLayer.createDiv({cls:"eve-alabel"});i.style.color=An[n.treeType].ring;let r=i.createSpan({cls:"ad"});return r.style.background=An[n.treeType].glow||An[n.treeType].tint,i.appendChild(this.containerEl.ownerDocument.createTextNode(n.treeType==="flower"?"AHA":"OUTPUT")),{el:i,node:n}})}clamp01(t){return t<0?0:t>1?1:t}ss(t,n,i){let r=Math.min(1,Math.max(0,(i-t)/(n-t)));return r*r*(3-2*r)}updateLabels(){let t=this.w,n=this.h,i=this.camera;i.updateMatrixWorld();let r=this.lod,o=this.scaleStops.find(v=>v.level==="tree")?.d??this.D0,a=2.2*o,l=1.9*o,c=1*o;this._m.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._fr.setFromProjectionMatrix(this._m);let h=[];for(let v of this.forest.trees){if(!v.nameLabelEl||(v.nameLabelEl.style.removeProperty("opacity"),r.treeName<.02)||(this._v.set(v.origin.x,-2.8,v.origin.z).project(i),!(this._v.x>=-1.05&&this._v.x<=1.05&&this._v.y>=-1.05&&this._v.y<=1.05&&this._v.z<1)))continue;let A=(this._v.x*.5+.5)*t,R=(-this._v.y*.5+.5)*n;h.push({tree:v,sx:A,sy:R,dist:i.position.distanceTo(new L(v.origin.x,0,v.origin.z))})}let u=130*this.textScale;for(let v of Th(h,u))v.tree.nameLabelEl.style.opacity=r.treeName.toFixed(3),v.tree.nameLabelEl.style.transform=`translate3d(${Math.round(v.sx)}px,${Math.round(v.sy)}px,0) translate(-50%,0)`;let d=this.forest.seedPool;if(this.poolLabelEl&&d){this._v.set(d.x,-1.1,d.z).project(i);let v=this._v.x>=-1.05&&this._v.x<=1.05&&this._v.y>=-1.05&&this._v.y<=1.05&&this._v.z<1;this.poolLabelEl.style.opacity=v?Math.max(r.treeName,.55*r.sil).toFixed(3):"0",this.poolLabelEl.style.transform=`translate3d(${Math.round((this._v.x*.5+.5)*t)}px,${Math.round((-this._v.y*.5+.5)*n)}px,0) translate(-50%,0)`}this.sEls.forEach((v,A)=>{let R=this.sectorAnchor[A],w=this.sectorTree[A];if(!R||!w||!this.fieldLabelsOn||r.fieldName<.05){v.style.removeProperty("opacity");return}if(this._v.set(R.x+w.origin.x,R.y,R.z+w.origin.z).project(i),!(this._v.x>=-1.05&&this._v.x<=1.05&&this._v.y>=-1.05&&this._v.y<=1.05&&this._v.z<1)){v.style.removeProperty("opacity");return}v.style.opacity=(r.fieldName*(1-.55*r.desc)).toFixed(3),v.style.transform=`translate3d(${Math.round((this._v.x*.5+.5)*t)}px,${Math.round((-this._v.y*.5+.5)*n)}px,0) translate(-50%,-50%)`}),this.aEls.forEach(v=>{if(!this.accentLabelsOn||r.accent<.05){v.el.style.removeProperty("opacity");return}if(this._v.copy(v.node.pos).project(i),!(this._v.x>=-1&&this._v.x<=1&&this._v.y>=-1&&this._v.y<=1&&this._v.z<1)){v.el.style.removeProperty("opacity");return}v.el.style.opacity=(.92*r.accent).toFixed(3),v.el.style.transform=`translate3d(${Math.round((this._v.x*.5+.5)*t)}px,${Math.round((-this._v.y*.5+.5)*n)}px,0) translate(-50%,-160%)`});let m=[];if(r.title>=.02)for(let v of this.allNodes){let A=v===this.selected;if(v.treeType==="root"&&!A||v.treeType==="seed"&&!A||!this._fr.containsPoint(v.pos))continue;let R=i.position.distanceTo(v.pos);if(!A&&R>a)continue;let w=(A?1:this.ss(l,c,R))*r.title;if(!A&&w<.02)continue;this._v.copy(v.pos).project(i);let k=(this._v.x*.5+.5)*t,M=(-this._v.y*.5+.5)*n,T=A||r.desc>.5?2:1,N=R-(Q0[v.treeType]||0)*o*.18-(A?1e6:0);m.push({n:v,sx:k,sy:M,op:w,tier:T,score:N,sel:A})}m.sort((v,A)=>v.score-A.score);let g=[],_=0,f=0;for(let v of m){if(!v.sel){if(_>=18)break;let A=!1;for(let R of g){let w=R.sx-v.sx,k=R.sy-v.sy;if(w*w+k*k<900){A=!0;break}}if(A)continue}v.tier===2&&!v.sel&&(f>=8?v.tier=1:f++),g.push(v),v.sel||_++}let p=new Set,y=()=>this.pool.find(v=>v.node===null);for(let v of g){let A=this.active.get(v.n.id);if(!A){let R=y();if(!R)continue;A=R,A.node=v.n,A.op=0,A.curId=null,this.active.set(v.n.id,A)}if(p.add(v.n.id),A.curId!==v.n.id){A.t.empty();let R=A.t.createSpan({cls:"fd"});R.style.background=v.n.field>=0?this.secOf(v.n.field).tint:An[v.n.treeType].ring,A.t.appendChild(this.containerEl.ownerDocument.createTextNode(v.n.title)),A.d.setText(v.n.description),A.curId=v.n.id}A.target=v.op,A.tier=v.tier,A.sel=v.sel,A.sx=Math.round(v.sx+10),A.sy=Math.round(v.sy-7)}for(let v of this.pool)v.node&&!p.has(v.node.id)&&(v.target=0);let x=this.reduced?1:.18;for(let v of this.pool)if(!(!v.node&&v.op<=.001)){if(v.op+=(v.target-v.op)*x,v.target===0&&v.op<.02){v.op=0,v.el.style.removeProperty("opacity"),v.node&&(this.active.delete(v.node.id),v.node=null);continue}v.el.style.opacity=v.op.toFixed(3),v.el.style.transform=`translate3d(${v.sx}px,${v.sy}px,0)`,v.el.toggleClass("sel",!!v.sel),v.d.toggleClass("show",v.tier===2)}}flyTo(t,n,i=640){if(this.reduced){this.camera.position.copy(t),this.controls.target.copy(n),this.controls.update();return}this.controls.enabled=!1,this.tween={fromPos:this.camera.position.clone(),fromTgt:this.controls.target.clone(),toPos:t.clone(),toTarget:n.clone(),t0:performance.now(),dur:i}}fit(){let t=Dt,n=nt,i=1/0,r=-1/0,o=1/0,a=-1/0;for(let v of this.forest.trees)i=Math.min(i,v.origin.x-t),r=Math.max(r,v.origin.x+t),o=Math.min(o,v.origin.z-t),a=Math.max(a,v.origin.z+t);let l=(i+r)/2,c=(o+a)/2,h=new L(l,n*.46,c),u=t;for(let v of this.forest.trees)u=Math.max(u,Math.hypot(v.origin.x-l,v.origin.z-c)+t);let d=Math.hypot(u,n*.52),m=Ms.degToRad(this.camera.fov),g=this.camera.aspect||1,_=2*Math.atan(Math.tan(m/2)*g),f=1.7*Math.max(d/Math.sin(m/2),d/Math.sin(_/2)),p=new L(20,12-nt*.46,20).normalize(),y=h.clone().addScaledVector(p,f);this.D0=f,this.preset={pos:y.clone(),target:h.clone()},this.controls.maxDistance=Math.max(400,f*2.8),this.camera.far=Math.max(2e3,this.controls.maxDistance+u+d),this.camera.updateProjectionMatrix();let x=this.scene.fog;x.near=Math.max(1,f*.42),x.far=f*1.9+u,this.camera.position.copy(y),this.controls.target.copy(h),this.controls.update()}frameOf(t){let n=1/0,i=-1/0,r=1/0,o=-1/0;for(let _ of t)n=Math.min(n,_.origin.x-Dt),i=Math.max(i,_.origin.x+Dt),r=Math.min(r,_.origin.z-Dt),o=Math.max(o,_.origin.z+Dt);let a=(n+i)/2,l=(r+o)/2,c=new L(a,nt*.46,l),h=Dt;for(let _ of t)h=Math.max(h,Math.hypot(_.origin.x-a,_.origin.z-l)+Dt);let u=Math.hypot(h,nt*.52),d=Ms.degToRad(this.camera.fov),m=this.camera.aspect||1,g=2*Math.atan(Math.tan(d/2)*m);return{C:c,dist:1.7*Math.max(u/Math.sin(d/2),u/Math.sin(g/2))}}get presetDir(){return new L(20,12-nt*.46,20).normalize()}focusTree(t){let n=this.frameOf([t]);this.flyTo(n.C.clone().addScaledVector(this.presetDir,n.dist),n.C)}updateHover(){if(!this.hoverEl||!this.renderer)return;let t=null;if(this.hoverPt&&!this.drag&&!this.treeDrag&&this.seedSprites.length&&this.lodT<.5){let n=this.renderer.domElement.getBoundingClientRect();this.ray.setFromCamera(new oe((this.hoverPt.x-n.left)/n.width*2-1,-((this.hoverPt.y-n.top)/n.height)*2+1),this.camera);let i=this.ray.intersectObjects(this.seedSprites,!1)[0];i&&(t=i.object.userData.node)}if(t!==this.hoverNode&&(this.hoverNode=t,t&&this.hoverEl.setText(t.title),this.hoverEl.toggleClass("show",!!t)),t&&this.hoverPt){let n=this.renderer.domElement.getBoundingClientRect();this.hoverEl.style.transform=`translate3d(${Math.round(this.hoverPt.x-n.left+14)}px,${Math.round(this.hoverPt.y-n.top-8)}px,0)`}}nearestTrees(t){return[...this.forest.trees].sort((n,i)=>this.treeDist(n)-this.treeDist(i)).slice(0,t)}computeStops(){if(!this.forest.trees.length){this.scaleStops=[];return}let n=this.nearestTrees(3),i=this.frameOf([n[0]]).dist,r=this.frameOf(n).dist,o=this.scaleStops;if(this.scaleStops=Ch(this.D0,r,i),this.scaleEls.length&&o.length!==this.scaleStops.length||this.scaleStops.some((a,l)=>a.reachable!==o[l]?.reachable))for(let{level:a,el:l}of this.scaleEls)l.toggleClass("off",!this.scaleStops.find(c=>c.level===a)?.reachable)}buildScaleBar(){let t={forest:"\u{1F332}",three:"\u{1F333}\u{1F333}\u{1F333}",tree:"\u{1F333}",leaf:"\u{1F343}"},n={forest:"Whole forest",three:"A few trees",tree:"One tree",leaf:"Close on a leaf"},i=this.root.createDiv({cls:"eve-scale"});i.setAttr("role","group"),i.setAttr("aria-label","Zoom");for(let r of Ha){let o=i.createDiv({cls:"eve-stop eve-stop-"+r,text:t[r]});o.setAttr("role","button"),o.setAttr("aria-label",n[r]),o.setAttr("title",n[r]),o.addEventListener("click",()=>this.flyToLevel(r)),this.scaleEls.push({level:r,el:o})}this.hoverEl=this.labelLayer.createDiv({cls:"eve-seedtip"})}treeDist(t){return Math.hypot(t.origin.x-this.controls.target.x,t.origin.z-this.controls.target.z)}flyToLevel(t){let n=this.scaleStops.find(r=>r.level===t);if(!n?.reachable||!this.forest.trees.length)return;if(t==="forest"){this.flyTo(this.preset.pos,this.preset.target);return}if(t==="leaf"){let r=this.selected?this.selected.pos.clone():this.controls.target.clone(),o=this.camera.position.clone().sub(this.controls.target).normalize();this.flyTo(r.clone().addScaledVector(o,n.d),r);return}let i=this.frameOf(this.nearestTrees(t==="tree"?1:3));this.flyTo(i.C.clone().addScaledVector(this.presetDir,i.dist),i.C)}updateScale(t){if(!this.scaleStops.length)return;let n=Ph(t,this.scaleStops);if(n!==this.scaleLevel){this.scaleLevel=n;for(let i of this.scaleEls)i.el.toggleClass("on",i.level===n)}}pick(t){if(!this.renderer)return null;let n=this.renderer.domElement.getBoundingClientRect(),i=new oe((t.clientX-n.left)/n.width*2-1,-((t.clientY-n.top)/n.height)*2+1),r=new Xi;r.setFromCamera(i,this.camera);let o=[...this.G.dots.children];if(this.G.bridge.visible)for(let c of this.bridges)o.push(c.sprite);if(this.lodT>.05)for(let c of this.forest.trees)c.sil&&o.push(c.sil);let a=r.intersectObjects(o,!1)[0];if(!a)return null;let l=a.object.userData;return l.bridge?{bridge:l.bridge}:l.tree?{tree:l.tree}:l.node?{node:l.node}:null}rayOnPlane(t,n){if(!this.renderer)return null;let i=this.renderer.domElement.getBoundingClientRect(),r=new oe((t.clientX-i.left)/i.width*2-1,-((t.clientY-i.top)/i.height)*2+1),o=new Xi;o.setFromCamera(r,this.camera);let a=new L;return o.ray.intersectPlane(n,a)?a:null}isDraggable(t){return t.field>=0&&t.treeType!=="root"&&t.treeType!=="trunk"}isTreeAnchor(t){return t.treeType==="root"||t.treeType==="trunk"}clampToWedge(t,n){let i=t.tree?.origin??{x:0,z:0},r=Math.max(1,t.tree?.fields.length??1),o=Math.PI*2,a=.05,l=n.x-i.x,c=n.z-i.z,h=n.y;h<.7?h=.7:h>nt*1.16&&(h=nt*1.16);let u=Math.hypot(l,c),d=Wr,m=Ss(h);u<d?u=d:u>m&&(u=m);let g=sn(t.field,r)+nn+wn+a,_=sn(t.field+1,r)-nn-wn-a;_<g&&(g=_=(g+_)/2),g<0&&(g+=o),_<0&&(_+=o);let f=Math.atan2(-c,l);return f<0&&(f+=o),f<g?f=g:f>_&&(f=_),new L(i.x+u*Math.cos(f),h,i.z-u*Math.sin(f))}moveNode(t,n){t.pos.copy(n),t.sprite?.position.copy(n),t.glowSprite?.position.copy(n),t===this.selected&&this.selRing.position.copy(n);let i=this.edgeIndex.get(t.id);if(i){let r=new Set;for(let o of i)o.attr.setXYZ(o.vi,n.x,n.y,n.z),r.add(o.attr);r.forEach(o=>o.needsUpdate=!0)}}persistDot(t){var i;let n=t.tree?.origin??{x:0,z:0};((i=this.settings).dotPositions??(i.dotPositions={}))[t.id]={x:t.pos.x-n.x,y:t.pos.y,z:t.pos.z-n.z},t._pinned=!0,this.persist()}moveTree(t,n,i){let r=n-t.origin.x,o=i-t.origin.z;if(!r&&!o)return;t.origin.x=n,t.origin.z=i;let a=new L;for(let l of t.nodes)l._pool!=="forest"&&(a.set(l.pos.x+r,l.pos.y,l.pos.z+o),this.moveNode(l,a));if(t.poolMesh?.position.set(n,.01,i),t.fieldFlatG?.position.set(n,0,i),t.fieldColumnG?.position.set(n,0,i),t.sil&&t.sil.position.set(n,nt*.5,i),t.silMarks)for(let l of t.silMarks)this.placeSilMark(l)}persistTree(t){var r;let n=Eh(t.origin.x,t.origin.z,t.id,this.forest.trees.map(o=>({id:o.id,origin:o.origin}))),i=(r=this.settings).treeOrigins??(r.treeOrigins={});if(n){let o=this.forest.trees.find(c=>c.id===n.id),a={x:o.origin.x,z:o.origin.z},l=i[t.id]??{x:t.origin.x,z:t.origin.z};this.moveTree(t,a.x,a.z),this.moveTree(o,l.x,l.z),i[t.id]={...a},i[o.id]={...l},new rn.Notice(`Swapped with ${o.topic}.`)}else i[t.id]={x:t.origin.x,z:t.origin.z};this.forest.bridges.length&&this.rebuildBridges(),this.persist()}disposeObject3D(t){let n=t;n.geometry?.dispose(),n.material&&(Array.isArray(n.material)?n.material:[n.material]).forEach(i=>i.dispose())}rebuildBridges(){this.G.bridge.traverse(t=>this.disposeObject3D(t)),this.G.bridge.clear(),this.bridges=[],this.buildBridges()}selectNode(t){this.selected=t;let n=t.sprite;if(n){let i=n.userData.baseScale;this.selRing.position.copy(t.pos),this.selRing.scale.set(i*2.4,i*2.4,1),this.selRing.material.opacity=.95,this.selRing.visible=!0,this.G.dots.children.forEach(r=>r.scale.setScalar(r.userData.baseScale)),n.scale.setScalar(i*1.35)}this.showCard(t)}deselect(){this.selected=null,this.selRing.visible=!1,this.G.dots.children.forEach(t=>t.scale.setScalar(t.userData.baseScale)),this.hideCard()}hideCard(){this.noteCard?.removeClass("show")}async openFileInTab(t){let n=this.app.vault.getAbstractFileByPath(t);n instanceof rn.TFile?await this.app.workspace.getLeaf("tab").openFile(n):new rn.Notice("Note not found: "+t)}showCard(t){let n=this.noteCard;if(!n)return;n.empty(),n.removeClass("bridge");let i=n.createSpan({cls:"eve-nclose",text:"\u2715"});i.setAttr("role","button"),i.setAttr("aria-label","Close"),i.addEventListener("click",()=>this.deselect());let r=t.tree,o=t.fieldName??(t.treeType==="root"?"Root":t.treeType==="trunk"?"Trunk":"Unfiled"),a=n.createDiv({cls:"eve-ntag",text:o+" \xB7 "+t.treeType+(this.isForest&&r?" \xB7 "+r.topic:"")}),l=t.field>=0?this.secOf(t.field).ring:An[t.treeType].ring;a.style.color=this.themeDark?As(l,.45):l,n.createEl("h3",{cls:"eve-ntitle",text:t.title}),t.description&&n.createDiv({cls:"eve-ndesc",text:t.description});let c=r?.cast??[];if(t.views&&t.views.length||c.length){let{spoke:u,silent:d}=xh(t.views,c),m=new Set([...u.map(g=>g.c).filter(Boolean),...d]).size;n.createDiv({cls:"eve-nsec",text:`\u{1F441} Stakeholder views (${u.length} of ${m})`});for(let g of u){if(!g.c&&!g.t)continue;let _=n.createDiv({cls:"eve-nview"});_.createSpan({cls:"eve-vchair",text:g.c+": "}),_.appendText(g.t)}if(d.length){let g=n.createDiv({cls:"eve-nsilent"});u.length?(g.createSpan({cls:"eve-slabel2",text:"Not yet sat in: "}),g.appendText(d.join(" \xB7 "))):(g.createSpan({cls:"eve-slabel2",text:"No chair sat with this yet"}),g.appendText(` \u2014 ${d.length} in this tree's cast.`))}}if(r){let u=(m,g)=>{if(n.createDiv({cls:"eve-nsec",text:m}),!g.length){n.createSpan({cls:"eve-nnone",text:"\u2014 none \u2014"});return}for(let _ of g){let f=r.byId.get(_)??null,p=n.createSpan({cls:"eve-chip",text:f?f.title:_});f&&p.addEventListener("click",()=>this.selectNode(f))}},d=[...new Set(r.edges.filter(m=>m.from===t.id).map(m=>m.to))];u("Links to \u2192",d),u("\u2190 Linked from",[...new Set(r.incoming.get(t.id)||[])])}n.createEl("button",{cls:"eve-btn eve-nopen",text:"Open note \u2197"}).addEventListener("click",()=>void this.openFileInTab(t.id)),n.addClass("show")}showBridge(t){this.deselect();let n=this.noteCard;if(!n)return;n.empty(),n.addClass("bridge");let i=n.createSpan({cls:"eve-nclose",text:"\u2715"});i.setAttr("role","button"),i.setAttr("aria-label","Close"),i.addEventListener("click",()=>this.hideCard());let r=n.createDiv({cls:"eve-ntag",text:"\u21C4 Bridge"});r.style.color=this.themeDark?As(hi,.45):hi,n.createEl("h3",{cls:"eve-ntitle",text:t.title}),n.createDiv({cls:"eve-ndesc",text:t.explain||"A manual link between two trees."}),n.createDiv({cls:"eve-nsec",text:"Connects"});let o=this.forest.trees.find(l=>l.id===t.from),a=this.forest.trees.find(l=>l.id===t.to);for(let l of[o,a]){if(!l)continue;let c=n.createSpan({cls:"eve-chip",text:"\u{1F333} "+l.topic}),h=this.repOf(l);h&&c.addEventListener("click",()=>this.selectNode(h))}t.filePath&&n.createEl("button",{cls:"eve-btn eve-nopen",text:"Open note \u2197"}).addEventListener("click",()=>void this.openFileInTab(t.filePath)),n.addClass("show")}detectObsidianDark(){return this.containerEl.ownerDocument.body.classList.contains("theme-dark")}applyTheme(t){if(!this.renderer)return;this.themeDark=t;let n=t?Fa.dark:Fa.light;this.linkMul=n.linkMul,this.scene.background.set(n.bg),this.scene.fog.color.set(n.fog),this.root.classList.toggle("dark",t);for(let o of this.allNodes)if(o.sprite){let a=o.sprite.userData,l=o.sprite.material;l.map=t?this.diamondTexture(a.tint):this.dotTexture(a.tint,a.ring),l.blending=t?ni:Vt,l.needsUpdate=!0}let i=t?ni:Vt;for(let o of this.glowAnim)o.m.blending=i,o.m.needsUpdate=!0;for(let o of this.forest.trees)if(o.silMarks)for(let a of o.silMarks){let l=a.material;l.blending=t?ni:Vt,l.needsUpdate=!0}let r=new Be(t?ui.dark:ui.light);for(let o of this.poolMats)o.color.copy(r),o.needsUpdate=!0;for(let o of this.poolIcons)o.material.map=this.poolIconTexture(t),o.material.needsUpdate=!0;this.themeBtn&&this.themeBtn.setText(t?"\u2600\uFE0F Light":"\u{1F319} Dark")}buildControlsPanel(){let t=this.root.createDiv({cls:"eve-card eve-ui"});this.uiCard=t,this.pill=this.root.createDiv({cls:"eve-card eve-pill",text:"\u{1F34E}"}),this.pill.setAttr("role","button"),this.pill.setAttr("aria-label","Show panel"),this.pill.setAttr("title","Show panel"),this.pill.addEventListener("click",()=>this.setPanelCollapsed(!1));let n=t.createDiv({cls:"eve-hd"}),i=n.createDiv({cls:"eve-hdtitle"});i.createDiv({cls:"eve-brand",text:"\u{1F34E} Eve's Apple Tree"}),i.createDiv({cls:"eve-slogan",text:"think how to think"});let r=n.createSpan({cls:"eve-min",text:"\u2013"});r.setAttr("role","button"),r.setAttr("aria-label","Minimize panel"),r.setAttr("title","Minimize"),r.addEventListener("click",()=>this.setPanelCollapsed(!0));let o=t.createDiv({cls:"eve-pitch"});o.appendText("Your notes become a living "),o.createEl("b",{text:"tree of light"}),o.appendText(" \u2014 so you can "),o.createEl("b",{text:"see the shape of your own thinking"}),o.appendText("."),this.isForest&&t.createDiv({cls:"eve-topic",text:`\u{1F332} Forest \xB7 ${this.forest.trees.length} trees`});let a=t.createDiv({cls:"eve-grp eve-guide"});a.createDiv({cls:"eve-lbl",text:"How to use it"});let l=a.createEl("ul",{cls:"eve-steps"}),c=(M,T)=>{let N=l.createEl("li");N.createSpan({cls:"k",text:M}),N.appendText(T)};c("Drag \xB7 scroll \xB7 two-finger-drag"," to fly through it, zoom, and pan."),c("Click a dot"," \u2192 see its card; drag a dot to reposition it."),c("Zoom sets the detail","."),c("Ideas you linked sit together"," \u2014 within a tree and across it: bridged trees share a patch of ground. \u{1F338} ah-has and \u{1F34E} outputs glow; \u{1F330} seeds wait in the pool."),c("Drag a tree"," to swap it with the tree in that spot.");let h=t.createDiv({cls:"eve-grp"});h.createDiv({cls:"eve-lbl",text:"Show / hide"});let u=(M,T,N)=>{let q=h.createDiv({cls:"eve-row"}),j=q.createEl("input",{type:"checkbox"});return j.checked=T,q.createEl("label",{text:M}),j.addEventListener("change",()=>N(j.checked)),q.addEventListener("click",D=>{D.target!==j&&(j.checked=!j.checked,N(j.checked))}),j};u("Field sectors",this.sectorsOn,M=>{this.sectorsOn=M,this.applyFieldMode()}),u("Trunk & branch links",!0,M=>{this.G.struct.visible=M}),u("Cross-field links",!0,M=>{this.G.rhizome.visible=M}),u("Field names",this.fieldLabelsOn,M=>{this.fieldLabelsOn=M}),u("Ah-ha \u{1F338} / Output \u{1F34E}",this.accentLabelsOn,M=>{this.accentLabelsOn=M}),this.bridges.length&&u("Cross-tree bridges",!0,M=>{this.bridgesOn=M,this.G.bridge.visible=M}),u("Auto-spin (rotate)",!1,M=>{this.controls.autoRotate=M});let d=t.createDiv({cls:"eve-grp"});d.createDiv({cls:"eve-lbl",text:"Field render mode"});let m=d.createDiv({cls:"eve-seg"}),g=(M,T,N)=>{let q=m.createEl("label");q.toggleClass("is-checked",N);let j=q.createEl("input",{type:"radio"});j.name="eve-fmode",j.value=M,j.checked=N,q.appendChild(this.containerEl.ownerDocument.createTextNode(T)),j.addEventListener("change",()=>{j.checked&&(this.fieldMode=M,this.applyFieldMode(),m.querySelectorAll("label").forEach(D=>D.toggleClass("is-checked",D===q)))})};g("flat","Flat wedge",this.fieldMode==="flat"),g("column","Column",this.fieldMode==="column");let _=t.createDiv({cls:"eve-grp"});_.createDiv({cls:"eve-lbl",text:"Appearance"});let f=(M,T,N,q,j,D,F,B)=>{let $=_.createDiv({cls:"eve-slider"}),J=$.createDiv({cls:"eve-slrow"});J.createSpan({cls:"eve-slname",text:M});let X=J.createSpan({cls:"eve-slval",text:D(j)}),z=$.createEl("input",{type:"range"});z.min=String(T),z.max=String(N),z.step=String(q),z.value=String(j),z.addEventListener("input",()=>{let Y=+z.value;X.setText(D(Y)),F(Y)}),z.addEventListener("change",()=>B(+z.value))},p=M=>M.toFixed(2)+"\xD7";f("Text size",.6,2,.05,this.textScale,p,M=>{this.textScale=M,this.applyTextScale()},M=>{this.settings.textSize=M,this.persist()}),f("Light shine",0,2,.05,this.shine,p,M=>{this.shine=M},M=>{this.settings.glowScale=M,this.persist()}),_.createDiv({cls:"eve-lbl eve-lbl2",text:"Zoom-out icon"});let y=_.createEl("select",{cls:"eve-lenssel"});[["round","\u25CF Round"],["conifer","\u25B2 Conifer"],["apple","\u{1F34E} Apple"]].forEach(([M,T])=>{let N=y.createEl("option",{text:T});N.value=M}),y.value=this.silIcon,y.addEventListener("change",()=>{this.silIcon=y.value,this.settings.zoomOutIcon=this.silIcon;for(let M of this.forest.trees){if(M.sil){let T=M.sil.material;T.map=this.treeSilTexture(this.silIcon),T.needsUpdate=!0}if(M.silMarks)for(let T of M.silMarks)this.placeSilMark(T)}this.persist()});let x=t.createDiv({cls:"eve-grp"});x.createDiv({cls:"eve-lbl",text:"View"});let v=x.createDiv({cls:"eve-btns"});if(this.themeBtn=v.createEl("button",{cls:"eve-btn",text:this.themeDark?"\u2600\uFE0F Light":"\u{1F319} Dark",attr:{title:"Switch between light and diamond-dark"}}),this.themeBtn.addEventListener("click",()=>{this.themeManual=!0,this.applyTheme(!this.themeDark)}),t.createEl("button",{cls:"eve-btn",text:"\u27F3 Reload my notes",attr:{title:"Re-read the vault and redraw \u2014 use it after editing notes outside this view"}}).addEventListener("click",()=>void this.reload()),t.createEl("button",{cls:"eve-btn",text:"\u21A9\uFE0E Undo my dot moves",attr:{title:"Put every dot you've dragged back where the layout would have placed it"}}).addEventListener("click",()=>{let M=performance.now();if(M-this.resetArmed>3e3){this.resetArmed=M,new rn.Notice("Undo every dot you've moved? Click again within 3s.");return}this.resetArmed=0,this.settings.dotPositions={},new rn.Notice("Dot moves undone."),this.persist().then(()=>this.reload())}),t.createEl("button",{cls:"eve-btn",text:"\u21A9\uFE0E Undo my tree moves",attr:{title:"Put every tree back in the grid spot the layout would have chosen"}}).addEventListener("click",()=>{let M=performance.now();if(M-this.resetTreeArmed>3e3){this.resetTreeArmed=M,new rn.Notice("Undo every tree you've moved? Click again within 3s.");return}this.resetTreeArmed=0,this.settings.treeOrigins={},new rn.Notice("Tree moves undone."),this.persist().then(()=>this.reload())}),this.isForest){let M=t.createDiv({cls:"eve-grp"});M.createDiv({cls:"eve-lbl",text:"Focus tree"});let T=M.createEl("select",{cls:"eve-lenssel"}),N=T.createEl("option",{text:"\u{1F332} Whole forest"});N.value="-1",this.forest.trees.forEach((q,j)=>{let D=T.createEl("option",{text:"\u{1F333} "+q.topic});D.value=String(j)}),T.addEventListener("change",()=>{let q=+T.value;q<0?this.resetView():this.focusTree(this.forest.trees[q])})}t.createEl("button",{cls:"eve-btn",text:"\u{1F4D6} Manual & help",attr:{title:"Open the full guide in your browser"}}).addEventListener("click",()=>{window.open(e_)}),this.noteCard=this.root.createDiv({cls:"eve-card eve-note"}),this.setPanelCollapsed(this.settings.panelCollapsed??!1,!1)}setPanelCollapsed(t,n=!0){this.uiCard?.toggleClass("hidden",t),this.pill?.toggleClass("show",t),n&&(this.settings.panelCollapsed=t,this.persist())}startLoop(){let t=n=>{if(this.raf=this.containerEl.win.requestAnimationFrame(t),this.tween){let h=Math.min(1,(n-this.tween.t0)/this.tween.dur),u=this.easeInOutCubic(h);this.camera.position.lerpVectors(this.tween.fromPos,this.tween.toPos,u),this.controls.target.lerpVectors(this.tween.fromTgt,this.tween.toTarget,u),h>=1&&(this.tween=null,this.controls.enabled=!0)}this.controls.update();let i=this.camera.position.distanceTo(this.controls.target);this.computeStops(),this.lod=this.scaleStops.length?Lh(i,this.scaleStops):{sil:this.ss(lh*this.D0,ch*this.D0,i),title:1,desc:1,fieldName:1,treeName:0,accent:1},this.lodT=this.lod.sil;let r=1-this.lodT;for(let h of this.allNodes)h.sprite&&(h.sprite.material.opacity=h.treeType==="seed"?za(this.lodT):r);let o=this.themeDark?.3:.13,a=this.themeDark?.55:.26,l=this.themeDark?.95:.52;for(let h of this.glowAnim)h.m.opacity=Math.min(l,(h.accent?a:o)*r*this.shine);this.seedGlowMat&&(this.seedGlowMat.opacity=Math.min(l,mh(this.shine,this.themeDark)*za(this.lodT)));for(let h of this.forest.trees)if(h.sil&&(h.sil.material.opacity=this.lodT*hh),h.silMarks)for(let u of h.silMarks)u.material.opacity=this.lodT;for(let h of this.fadeMats)h.m.opacity=h.b*r*(h.link?this.linkMul:1);let c=ph(this.lodT,this.themeDark);for(let h of this.poolMats)h.opacity=c;for(let h of this.poolIcons)h.material.opacity=this.lodT*(this.themeDark?.92:.8);this.selected&&this.selected.sprite&&(this.selRing.position.copy(this.selected.pos),this.selRing.material.opacity=.95*r),this.updateLabels(),this.updateHover(),this.updateScale(i),this.renderer.render(this.scene,this.camera)};this.raf=this.containerEl.win.requestAnimationFrame(t)}dispose(t=!0){if(this.raf&&(this.containerEl.win.cancelAnimationFrame(this.raf),this.raf=0),this.ro?.disconnect(),this.ro=void 0,this.root?.removeEventListener("pointerdown",this.onPointerDown,!0),this.root?.removeEventListener("pointermove",this.onPointerMove,!0),this.root?.removeEventListener("pointerup",this.onPointerUp,!0),this.renderer){let n=this.renderer.domElement;n.removeEventListener("contextmenu",this.onContextMenu),n.removeEventListener("pointerleave",this.onPointerLeave),this.controls?.dispose(),this.scene?.traverse(i=>this.disposeObject3D(i)),Object.values(this.texCache).forEach(i=>i.dispose()),this.texCache={},this.renderer.dispose(),this.renderer.forceContextLoss(),n.remove(),this.renderer=void 0}this.fadeMats=[],this.bridges=[],this.glowMats.forEach(n=>n.dispose()),this.glowMats.clear(),this.glowAnim=[],this.pool=[],this.active.clear(),this.sEls=[],this.aEls=[],this.sectorAnchor=[],this.sectorTree=[],this.selected=null,this.tween=null,this.lodT=0,this.press=null,this.drag=null,this.treeDrag=null,this.edgeIndex.clear(),this.uiCard=void 0,this.pill=void 0,this.noteCard=void 0,this.seedSprites=[],this.hoverEl=void 0,this.hoverPt=null,this.hoverNode=null,this.poolMats=[],this.poolIcons=[],this.seedGlowMat=void 0,this.poolLabelEl=void 0,this.scaleStops=[],this.scaleEls=[],this.scaleLevel=null,t&&this.root?(this.root.empty(),this.labelLayer=this.root.createDiv({cls:"eve-labels"})):this.root&&(Array.from(this.root.children).forEach(n=>n.remove()),this.labelLayer=this.root.createDiv({cls:"eve-labels"}))}};ue(Yr,"SIL_MARK_ANCHOR",{round:{apple:[.63,.3],flower:[.37,.3]},apple:{apple:[.62,.35],flower:[.38,.35]},conifer:{apple:[.6,.56],flower:[.4,.6]}});var Xr=Yr;var Dh={onlyTreeNotes:!0,forestByFolder:!0,clusterLinkedDots:!0,ignoreFolders:""},qr=class extends Rn.Plugin{constructor(){super(...arguments);ue(this,"settings",Dh)}async onload(){await this.loadSettings(),this.registerView(Rs,t=>new Xr(t,this.settings,()=>this.saveSettings())),this.addRibbonIcon("sprout","Open Eve's Apple Tree",()=>this.activateView()),this.addCommand({id:"open",name:"Open the tree of light",callback:()=>this.activateView()}),this.addSettingTab(new Xa(this.app,this))}async activateView(){let{workspace:t}=this.app,n=t.getLeavesOfType(Rs)[0]??null;n||(n=t.getLeaf(!0),await n.setViewState({type:Rs,active:!0})),await t.revealLeaf(n)}async loadSettings(){let t=await this.loadData();this.settings=Object.assign({},Dh,t??{});let n=this.settings;n.treeScale!==void 0&&(delete n.treeScale,await this.saveSettings())}async saveSettings(){await this.saveData(this.settings)}},Xa=class extends Rn.PluginSettingTab{constructor(t,n){super(t,n);ue(this,"plugin");this.plugin=n}display(){let{containerEl:t}=this;t.empty(),t.createEl("p",{text:"Your notes grow into a living 3D tree of light. Notes are placed by their frontmatter: tree_type (root/trunk/leaf/flower/apple/seed), field (sector), and time (height). Links become branches; seeds are topics you haven't opened yet \u2014 they float in a pool on the ground instead of on the tree. cross-field links become rhizome. Open the tree from the ribbon (sprout icon) or the command palette."}),new Rn.Setting(t).setName("Only show notes with tree frontmatter").setDesc("When on, the tree renders only notes that have tree_type / field / time / flower frontmatter \u2014 keeps the view clean in a mixed vault. Click 'Reload my notes' in the view after changing.").addToggle(n=>n.setValue(this.plugin.settings.onlyTreeNotes).onChange(async i=>{this.plugin.settings.onlyTreeNotes=i,await this.plugin.saveSettings()})),new Rn.Setting(t).setName("Forest mode \u2014 one folder = one tree").setDesc("When on (recommended), each top-level folder becomes its own independent tree, arranged side by side as a forest. When off, the whole vault is a single tree. Click 'Reload my notes' in the view after changing.").addToggle(n=>n.setValue(this.plugin.settings.forestByFolder).onChange(async i=>{this.plugin.settings.forestByFolder=i,await this.plugin.saveSettings()})),new Rn.Setting(t).setName("Folders to keep off the tree").setDesc("One folder per line (or comma separated). Those notes stay in your vault and stay editable \u2014 they just don't become dots, seeds, bridges, or a tree of their own. Use it for template packs, archives, or anything you keep nearby but aren't thinking about. Click 'Reload my notes' in the view after changing.").addTextArea(n=>{n.setPlaceholder(`Templates/
Archive/`).setValue(this.plugin.settings.ignoreFolders??"").onChange(async i=>{this.plugin.settings.ignoreFolders=i,await this.plugin.saveSettings()}),n.inputEl.rows=3}),new Rn.Setting(t).setName("Cluster linked dots").setDesc("When on (recommended), dots in the same field that link to each other are pulled together into clusters, while unrelated dots sit further apart \u2014 keeping the field wedges but making related ideas group. Turn off for a purely even spread. Skipped automatically for trees over 500 notes to keep Obsidian responsive. Click 'Reload my notes' in the view after changing.").addToggle(n=>n.setValue(this.plugin.settings.clusterLinkedDots).onChange(async i=>{this.plugin.settings.clusterLinkedDots=i,await this.plugin.saveSettings()}))}};
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
