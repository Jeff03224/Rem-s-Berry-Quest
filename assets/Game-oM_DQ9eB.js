var au=Object.defineProperty;var ru=(s,t,e)=>t in s?au(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var _=(s,t,e)=>ru(s,typeof t!="symbol"?t+"":t,e);import{O as kt}from"./index-BqcqqNAW.js";/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ll="170",lu=0,Dl=1,cu=2,vh=1,hu=2,fi=3,ii=0,An=1,cn=2,Oi=0,Os=1,Ll=2,Il=3,Ul=4,uu=5,ji=100,du=101,pu=102,fu=103,mu=104,gu=200,xu=201,vu=202,_u=203,mr=204,gr=205,yu=206,Mu=207,bu=208,wu=209,Su=210,Tu=211,Eu=212,Cu=213,Au=214,xr=0,vr=1,_r=2,Bs=3,yr=4,Mr=5,br=6,wr=7,ya=0,Ru=1,Pu=2,xi=0,Du=1,Lu=2,Iu=3,Uu=4,Nu=5,Fu=6,Ou=7,_h=300,Gs=301,Hs=302,Sr=303,Tr=304,Ma=306,To=1e3,es=1001,Er=1002,Bn=1003,zu=1004,Uo=1005,ti=1006,Aa=1007,ns=1008,yi=1009,yh=1010,Mh=1011,Eo=1012,cl=1013,is=1014,mi=1015,Ro=1016,hl=1017,ul=1018,Vs=1020,bh=35902,wh=1021,Sh=1022,ei=1023,Th=1024,Eh=1025,zs=1026,Ws=1027,Ch=1028,dl=1029,Ah=1030,pl=1031,fl=1033,ha=33776,ua=33777,da=33778,pa=33779,Cr=35840,Ar=35841,Rr=35842,Pr=35843,Dr=36196,Lr=37492,Ir=37496,Ur=37808,Nr=37809,Fr=37810,Or=37811,zr=37812,kr=37813,Br=37814,Gr=37815,Hr=37816,Vr=37817,Wr=37818,Xr=37819,Yr=37820,Kr=37821,fa=36492,qr=36494,jr=36495,Rh=36283,Jr=36284,$r=36285,Zr=36286,ku=3200,Bu=3201,ml=0,Gu=1,Ni="",zn="srgb",Ys="srgb-linear",ba="linear",De="srgb",hs=7680,Nl=519,Hu=512,Vu=513,Wu=514,Ph=515,Xu=516,Yu=517,Ku=518,qu=519,Qr=35044,Fl="300 es",gi=2e3,ga=2001;class Ks{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const o=i.indexOf(e);o!==-1&&i.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let o=0,a=i.length;o<a;o++)i[o].call(this,t);t.target=null}}}const dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ol=1234567;const yo=Math.PI/180,Co=180/Math.PI;function vi(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(dn[s&255]+dn[s>>8&255]+dn[s>>16&255]+dn[s>>24&255]+"-"+dn[t&255]+dn[t>>8&255]+"-"+dn[t>>16&15|64]+dn[t>>24&255]+"-"+dn[e&63|128]+dn[e>>8&255]+"-"+dn[e>>16&255]+dn[e>>24&255]+dn[n&255]+dn[n>>8&255]+dn[n>>16&255]+dn[n>>24&255]).toLowerCase()}function ln(s,t,e){return Math.max(t,Math.min(e,s))}function gl(s,t){return(s%t+t)%t}function ju(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Ju(s,t,e){return s!==t?(e-s)/(t-s):0}function Mo(s,t,e){return(1-e)*s+e*t}function $u(s,t,e,n){return Mo(s,t,1-Math.exp(-e*n))}function Zu(s,t=1){return t-Math.abs(gl(s,t*2)-t)}function Qu(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function td(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function ed(s,t){return s+Math.floor(Math.random()*(t-s+1))}function nd(s,t){return s+Math.random()*(t-s)}function id(s){return s*(.5-Math.random())}function sd(s){s!==void 0&&(Ol=s);let t=Ol+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function od(s){return s*yo}function ad(s){return s*Co}function rd(s){return(s&s-1)===0&&s!==0}function ld(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function cd(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function hd(s,t,e,n,i){const o=Math.cos,a=Math.sin,r=o(e/2),l=a(e/2),c=o((t+n)/2),h=a((t+n)/2),d=o((t-n)/2),p=a((t-n)/2),f=o((n-t)/2),g=a((n-t)/2);switch(i){case"XYX":s.set(r*h,l*d,l*p,r*c);break;case"YZY":s.set(l*p,r*h,l*d,r*c);break;case"ZXZ":s.set(l*d,l*p,r*h,r*c);break;case"XZX":s.set(r*h,l*g,l*f,r*c);break;case"YXY":s.set(l*f,r*h,l*g,r*c);break;case"ZYZ":s.set(l*g,l*f,r*h,r*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Qn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ce(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const je={DEG2RAD:yo,RAD2DEG:Co,generateUUID:vi,clamp:ln,euclideanModulo:gl,mapLinear:ju,inverseLerp:Ju,lerp:Mo,damp:$u,pingpong:Zu,smoothstep:Qu,smootherstep:td,randInt:ed,randFloat:nd,randFloatSpread:id,seededRandom:sd,degToRad:od,radToDeg:ad,isPowerOfTwo:rd,ceilPowerOfTwo:ld,floorPowerOfTwo:cd,setQuaternionFromProperEuler:hd,normalize:Ce,denormalize:Qn};class St{constructor(t=0,e=0){St.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ln(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),o=this.x-t.x,a=this.y-t.y;return this.x=o*n-a*i+t.x,this.y=o*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class le{constructor(t,e,n,i,o,a,r,l,c){le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,o,a,r,l,c)}set(t,e,n,i,o,a,r,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=r,h[3]=e,h[4]=o,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,o=this.elements,a=n[0],r=n[3],l=n[6],c=n[1],h=n[4],d=n[7],p=n[2],f=n[5],g=n[8],v=i[0],x=i[3],m=i[6],E=i[1],M=i[4],y=i[7],I=i[2],w=i[5],R=i[8];return o[0]=a*v+r*E+l*I,o[3]=a*x+r*M+l*w,o[6]=a*m+r*y+l*R,o[1]=c*v+h*E+d*I,o[4]=c*x+h*M+d*w,o[7]=c*m+h*y+d*R,o[2]=p*v+f*E+g*I,o[5]=p*x+f*M+g*w,o[8]=p*m+f*y+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],a=t[4],r=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*r*c-n*o*h+n*r*l+i*o*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],a=t[4],r=t[5],l=t[6],c=t[7],h=t[8],d=h*a-r*c,p=r*l-h*o,f=c*o-a*l,g=e*d+n*p+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=d*v,t[1]=(i*c-h*n)*v,t[2]=(r*n-i*a)*v,t[3]=p*v,t[4]=(h*e-i*l)*v,t[5]=(i*o-r*e)*v,t[6]=f*v,t[7]=(n*l-c*e)*v,t[8]=(a*e-n*o)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,o,a,r){const l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*a+c*r)+a+t,-i*c,i*l,-i*(-c*a+l*r)+r+e,0,0,1),this}scale(t,e){return this.premultiply(Ra.makeScale(t,e)),this}rotate(t){return this.premultiply(Ra.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ra.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ra=new le;function Dh(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function xa(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function ud(){const s=xa("canvas");return s.style.display="block",s}const zl={};function go(s){s in zl||(zl[s]=!0,console.warn(s))}function dd(s,t,e){return new Promise(function(n,i){function o(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}function pd(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function fd(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ye={enabled:!0,workingColorSpace:Ys,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===De&&(s.r=_i(s.r),s.g=_i(s.g),s.b=_i(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===De&&(s.r=ks(s.r),s.g=ks(s.g),s.b=ks(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ni?ba:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function _i(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ks(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const kl=[.64,.33,.3,.6,.15,.06],Bl=[.2126,.7152,.0722],Gl=[.3127,.329],Hl=new le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vl=new le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ye.define({[Ys]:{primaries:kl,whitePoint:Gl,transfer:ba,toXYZ:Hl,fromXYZ:Vl,luminanceCoefficients:Bl,workingColorSpaceConfig:{unpackColorSpace:zn},outputColorSpaceConfig:{drawingBufferColorSpace:zn}},[zn]:{primaries:kl,whitePoint:Gl,transfer:De,toXYZ:Hl,fromXYZ:Vl,luminanceCoefficients:Bl,outputColorSpaceConfig:{drawingBufferColorSpace:zn}}});let us;class md{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{us===void 0&&(us=xa("canvas")),us.width=t.width,us.height=t.height;const n=us.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=us}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=xa("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),o=i.data;for(let a=0;a<o.length;a++)o[a]=_i(o[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(_i(e[n]/255)*255):e[n]=_i(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let gd=0;class Lh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gd++}),this.uuid=vi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let o;if(Array.isArray(i)){o=[];for(let a=0,r=i.length;a<r;a++)i[a].isDataTexture?o.push(Pa(i[a].image)):o.push(Pa(i[a]))}else o=Pa(i);n.url=o}return e||(t.images[this.uuid]=n),n}}function Pa(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?md.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let xd=0;class yn extends Ks{constructor(t=yn.DEFAULT_IMAGE,e=yn.DEFAULT_MAPPING,n=es,i=es,o=ti,a=ns,r=ei,l=yi,c=yn.DEFAULT_ANISOTROPY,h=Ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=vi(),this.name="",this.source=new Lh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=o,this.minFilter=a,this.anisotropy=c,this.format=r,this.internalFormat=null,this.type=l,this.offset=new St(0,0),this.repeat=new St(1,1),this.center=new St(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==_h)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case To:t.x=t.x-Math.floor(t.x);break;case es:t.x=t.x<0?0:1;break;case Er:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case To:t.y=t.y-Math.floor(t.y);break;case es:t.y=t.y<0?0:1;break;case Er:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=_h;yn.DEFAULT_ANISOTROPY=1;class Le{constructor(t=0,e=0,n=0,i=1){Le.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,o=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*o,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*o,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*o,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,o;const l=t.elements,c=l[0],h=l[4],d=l[8],p=l[1],f=l[5],g=l[9],v=l[2],x=l[6],m=l[10];if(Math.abs(h-p)<.01&&Math.abs(d-v)<.01&&Math.abs(g-x)<.01){if(Math.abs(h+p)<.1&&Math.abs(d+v)<.1&&Math.abs(g+x)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,y=(f+1)/2,I=(m+1)/2,w=(h+p)/4,R=(d+v)/4,L=(g+x)/4;return M>y&&M>I?M<.01?(n=0,i=.707106781,o=.707106781):(n=Math.sqrt(M),i=w/n,o=R/n):y>I?y<.01?(n=.707106781,i=0,o=.707106781):(i=Math.sqrt(y),n=w/i,o=L/i):I<.01?(n=.707106781,i=.707106781,o=0):(o=Math.sqrt(I),n=R/o,i=L/o),this.set(n,i,o,e),this}let E=Math.sqrt((x-g)*(x-g)+(d-v)*(d-v)+(p-h)*(p-h));return Math.abs(E)<.001&&(E=1),this.x=(x-g)/E,this.y=(d-v)/E,this.z=(p-h)/E,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vd extends Ks{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Le(0,0,t,e),this.scissorTest=!1,this.viewport=new Le(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ti,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new yn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let r=0;r<a;r++)this.textures[r]=o.clone(),this.textures[r].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,o=this.textures.length;i<o;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Lh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ss extends vd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Ih extends yn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class _d extends yn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qs{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,o,a,r){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3];const p=o[a+0],f=o[a+1],g=o[a+2],v=o[a+3];if(r===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(r===1){t[e+0]=p,t[e+1]=f,t[e+2]=g,t[e+3]=v;return}if(d!==v||l!==p||c!==f||h!==g){let x=1-r;const m=l*p+c*f+h*g+d*v,E=m>=0?1:-1,M=1-m*m;if(M>Number.EPSILON){const I=Math.sqrt(M),w=Math.atan2(I,m*E);x=Math.sin(x*w)/I,r=Math.sin(r*w)/I}const y=r*E;if(l=l*x+p*y,c=c*x+f*y,h=h*x+g*y,d=d*x+v*y,x===1-r){const I=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=I,c*=I,h*=I,d*=I}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,o,a){const r=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=o[a],p=o[a+1],f=o[a+2],g=o[a+3];return t[e]=r*g+h*d+l*f-c*p,t[e+1]=l*g+h*p+c*d-r*f,t[e+2]=c*g+h*f+r*p-l*d,t[e+3]=h*g-r*d-l*p-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,o=t._z,a=t._order,r=Math.cos,l=Math.sin,c=r(n/2),h=r(i/2),d=r(o/2),p=l(n/2),f=l(i/2),g=l(o/2);switch(a){case"XYZ":this._x=p*h*d+c*f*g,this._y=c*f*d-p*h*g,this._z=c*h*g+p*f*d,this._w=c*h*d-p*f*g;break;case"YXZ":this._x=p*h*d+c*f*g,this._y=c*f*d-p*h*g,this._z=c*h*g-p*f*d,this._w=c*h*d+p*f*g;break;case"ZXY":this._x=p*h*d-c*f*g,this._y=c*f*d+p*h*g,this._z=c*h*g+p*f*d,this._w=c*h*d-p*f*g;break;case"ZYX":this._x=p*h*d-c*f*g,this._y=c*f*d+p*h*g,this._z=c*h*g-p*f*d,this._w=c*h*d+p*f*g;break;case"YZX":this._x=p*h*d+c*f*g,this._y=c*f*d+p*h*g,this._z=c*h*g-p*f*d,this._w=c*h*d-p*f*g;break;case"XZY":this._x=p*h*d-c*f*g,this._y=c*f*d-p*h*g,this._z=c*h*g+p*f*d,this._w=c*h*d+p*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],o=e[8],a=e[1],r=e[5],l=e[9],c=e[2],h=e[6],d=e[10],p=n+r+d;if(p>0){const f=.5/Math.sqrt(p+1);this._w=.25/f,this._x=(h-l)*f,this._y=(o-c)*f,this._z=(a-i)*f}else if(n>r&&n>d){const f=2*Math.sqrt(1+n-r-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(o+c)/f}else if(r>d){const f=2*Math.sqrt(1+r-n-d);this._w=(o-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-r);this._w=(a-i)/f,this._x=(o+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ln(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,o=t._z,a=t._w,r=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*r+i*c-o*l,this._y=i*h+a*l+o*r-n*c,this._z=o*h+a*c+n*l-i*r,this._w=a*h-n*r-i*l-o*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,o=this._z,a=this._w;let r=a*t._w+n*t._x+i*t._y+o*t._z;if(r<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,r=-r):this.copy(t),r>=1)return this._w=a,this._x=n,this._y=i,this._z=o,this;const l=1-r*r;if(l<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*o+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,r),d=Math.sin((1-e)*h)/c,p=Math.sin(e*h)/c;return this._w=a*d+this._w*p,this._x=n*d+this._x*p,this._y=i*d+this._y*p,this._z=o*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class A{constructor(t=0,e=0,n=0){A.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Wl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Wl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*i,this.y=o[1]*e+o[4]*n+o[7]*i,this.z=o[2]*e+o[5]*n+o[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,o=t.elements,a=1/(o[3]*e+o[7]*n+o[11]*i+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*i+o[12])*a,this.y=(o[1]*e+o[5]*n+o[9]*i+o[13])*a,this.z=(o[2]*e+o[6]*n+o[10]*i+o[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,o=t.x,a=t.y,r=t.z,l=t.w,c=2*(a*i-r*n),h=2*(r*e-o*i),d=2*(o*n-a*e);return this.x=e+l*c+a*d-r*h,this.y=n+l*h+r*c-o*d,this.z=i+l*d+o*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i,this.y=o[1]*e+o[5]*n+o[9]*i,this.z=o[2]*e+o[6]*n+o[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,o=t.z,a=e.x,r=e.y,l=e.z;return this.x=i*l-o*r,this.y=o*a-n*l,this.z=n*r-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Da.copy(this).projectOnVector(t),this.sub(Da)}reflect(t){return this.sub(Da.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ln(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Da=new A,Wl=new qs;class Po{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(qn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(qn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=qn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let a=0,r=o.count;a<r;a++)t.isMesh===!0?t.getVertexPosition(a,qn):qn.fromBufferAttribute(o,a),qn.applyMatrix4(t.matrixWorld),this.expandByPoint(qn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),No.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),No.copy(n.boundingBox)),No.applyMatrix4(t.matrixWorld),this.union(No)}const i=t.children;for(let o=0,a=i.length;o<a;o++)this.expandByObject(i[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,qn),qn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(eo),Fo.subVectors(this.max,eo),ds.subVectors(t.a,eo),ps.subVectors(t.b,eo),fs.subVectors(t.c,eo),Si.subVectors(ps,ds),Ti.subVectors(fs,ps),ki.subVectors(ds,fs);let e=[0,-Si.z,Si.y,0,-Ti.z,Ti.y,0,-ki.z,ki.y,Si.z,0,-Si.x,Ti.z,0,-Ti.x,ki.z,0,-ki.x,-Si.y,Si.x,0,-Ti.y,Ti.x,0,-ki.y,ki.x,0];return!La(e,ds,ps,fs,Fo)||(e=[1,0,0,0,1,0,0,0,1],!La(e,ds,ps,fs,Fo))?!1:(Oo.crossVectors(Si,Ti),e=[Oo.x,Oo.y,Oo.z],La(e,ds,ps,fs,Fo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,qn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(qn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(li),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const li=[new A,new A,new A,new A,new A,new A,new A,new A],qn=new A,No=new Po,ds=new A,ps=new A,fs=new A,Si=new A,Ti=new A,ki=new A,eo=new A,Fo=new A,Oo=new A,Bi=new A;function La(s,t,e,n,i){for(let o=0,a=s.length-3;o<=a;o+=3){Bi.fromArray(s,o);const r=i.x*Math.abs(Bi.x)+i.y*Math.abs(Bi.y)+i.z*Math.abs(Bi.z),l=t.dot(Bi),c=e.dot(Bi),h=n.dot(Bi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>r)return!1}return!0}const yd=new Po,no=new A,Ia=new A;class xl{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):yd.setFromPoints(t).getCenter(n);let i=0;for(let o=0,a=t.length;o<a;o++)i=Math.max(i,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;no.subVectors(t,this.center);const e=no.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(no,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ia.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(no.copy(t.center).add(Ia)),this.expandByPoint(no.copy(t.center).sub(Ia))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ci=new A,Ua=new A,zo=new A,Ei=new A,Na=new A,ko=new A,Fa=new A;class Uh{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ci)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ci.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ci.copy(this.origin).addScaledVector(this.direction,e),ci.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Ua.copy(t).add(e).multiplyScalar(.5),zo.copy(e).sub(t).normalize(),Ei.copy(this.origin).sub(Ua);const o=t.distanceTo(e)*.5,a=-this.direction.dot(zo),r=Ei.dot(this.direction),l=-Ei.dot(zo),c=Ei.lengthSq(),h=Math.abs(1-a*a);let d,p,f,g;if(h>0)if(d=a*l-r,p=a*r-l,g=o*h,d>=0)if(p>=-g)if(p<=g){const v=1/h;d*=v,p*=v,f=d*(d+a*p+2*r)+p*(a*d+p+2*l)+c}else p=o,d=Math.max(0,-(a*p+r)),f=-d*d+p*(p+2*l)+c;else p=-o,d=Math.max(0,-(a*p+r)),f=-d*d+p*(p+2*l)+c;else p<=-g?(d=Math.max(0,-(-a*o+r)),p=d>0?-o:Math.min(Math.max(-o,-l),o),f=-d*d+p*(p+2*l)+c):p<=g?(d=0,p=Math.min(Math.max(-o,-l),o),f=p*(p+2*l)+c):(d=Math.max(0,-(a*o+r)),p=d>0?o:Math.min(Math.max(-o,-l),o),f=-d*d+p*(p+2*l)+c);else p=a>0?-o:o,d=Math.max(0,-(a*p+r)),f=-d*d+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Ua).addScaledVector(zo,p),f}intersectSphere(t,e){ci.subVectors(t.center,this.origin);const n=ci.dot(this.direction),i=ci.dot(ci)-n*n,o=t.radius*t.radius;if(i>o)return null;const a=Math.sqrt(o-i),r=n-a,l=n+a;return l<0?null:r<0?this.at(l,e):this.at(r,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,o,a,r,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,p=this.origin;return c>=0?(n=(t.min.x-p.x)*c,i=(t.max.x-p.x)*c):(n=(t.max.x-p.x)*c,i=(t.min.x-p.x)*c),h>=0?(o=(t.min.y-p.y)*h,a=(t.max.y-p.y)*h):(o=(t.max.y-p.y)*h,a=(t.min.y-p.y)*h),n>a||o>i||((o>n||isNaN(n))&&(n=o),(a<i||isNaN(i))&&(i=a),d>=0?(r=(t.min.z-p.z)*d,l=(t.max.z-p.z)*d):(r=(t.max.z-p.z)*d,l=(t.min.z-p.z)*d),n>l||r>i)||((r>n||n!==n)&&(n=r),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,ci)!==null}intersectTriangle(t,e,n,i,o){Na.subVectors(e,t),ko.subVectors(n,t),Fa.crossVectors(Na,ko);let a=this.direction.dot(Fa),r;if(a>0){if(i)return null;r=1}else if(a<0)r=-1,a=-a;else return null;Ei.subVectors(this.origin,t);const l=r*this.direction.dot(ko.crossVectors(Ei,ko));if(l<0)return null;const c=r*this.direction.dot(Na.cross(Ei));if(c<0||l+c>a)return null;const h=-r*Ei.dot(Fa);return h<0?null:this.at(h/a,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ze{constructor(t,e,n,i,o,a,r,l,c,h,d,p,f,g,v,x){ze.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,o,a,r,l,c,h,d,p,f,g,v,x)}set(t,e,n,i,o,a,r,l,c,h,d,p,f,g,v,x){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=o,m[5]=a,m[9]=r,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=p,m[3]=f,m[7]=g,m[11]=v,m[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ze().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ms.setFromMatrixColumn(t,0).length(),o=1/ms.setFromMatrixColumn(t,1).length(),a=1/ms.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,o=t.z,a=Math.cos(n),r=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(o),d=Math.sin(o);if(t.order==="XYZ"){const p=a*h,f=a*d,g=r*h,v=r*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=p-v*c,e[9]=-r*l,e[2]=v-p*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){const p=l*h,f=l*d,g=c*h,v=c*d;e[0]=p+v*r,e[4]=g*r-f,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-r,e[2]=f*r-g,e[6]=v+p*r,e[10]=a*l}else if(t.order==="ZXY"){const p=l*h,f=l*d,g=c*h,v=c*d;e[0]=p-v*r,e[4]=-a*d,e[8]=g+f*r,e[1]=f+g*r,e[5]=a*h,e[9]=v-p*r,e[2]=-a*c,e[6]=r,e[10]=a*l}else if(t.order==="ZYX"){const p=a*h,f=a*d,g=r*h,v=r*d;e[0]=l*h,e[4]=g*c-f,e[8]=p*c+v,e[1]=l*d,e[5]=v*c+p,e[9]=f*c-g,e[2]=-c,e[6]=r*l,e[10]=a*l}else if(t.order==="YZX"){const p=a*l,f=a*c,g=r*l,v=r*c;e[0]=l*h,e[4]=v-p*d,e[8]=g*d+f,e[1]=d,e[5]=a*h,e[9]=-r*h,e[2]=-c*h,e[6]=f*d+g,e[10]=p-v*d}else if(t.order==="XZY"){const p=a*l,f=a*c,g=r*l,v=r*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=p*d+v,e[5]=a*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=r*h,e[10]=v*d+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Md,t,bd)}lookAt(t,e,n){const i=this.elements;return In.subVectors(t,e),In.lengthSq()===0&&(In.z=1),In.normalize(),Ci.crossVectors(n,In),Ci.lengthSq()===0&&(Math.abs(n.z)===1?In.x+=1e-4:In.z+=1e-4,In.normalize(),Ci.crossVectors(n,In)),Ci.normalize(),Bo.crossVectors(In,Ci),i[0]=Ci.x,i[4]=Bo.x,i[8]=In.x,i[1]=Ci.y,i[5]=Bo.y,i[9]=In.y,i[2]=Ci.z,i[6]=Bo.z,i[10]=In.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,o=this.elements,a=n[0],r=n[4],l=n[8],c=n[12],h=n[1],d=n[5],p=n[9],f=n[13],g=n[2],v=n[6],x=n[10],m=n[14],E=n[3],M=n[7],y=n[11],I=n[15],w=i[0],R=i[4],L=i[8],C=i[12],b=i[1],U=i[5],G=i[9],H=i[13],Y=i[2],Q=i[6],k=i[10],j=i[14],X=i[3],ot=i[7],rt=i[11],ct=i[15];return o[0]=a*w+r*b+l*Y+c*X,o[4]=a*R+r*U+l*Q+c*ot,o[8]=a*L+r*G+l*k+c*rt,o[12]=a*C+r*H+l*j+c*ct,o[1]=h*w+d*b+p*Y+f*X,o[5]=h*R+d*U+p*Q+f*ot,o[9]=h*L+d*G+p*k+f*rt,o[13]=h*C+d*H+p*j+f*ct,o[2]=g*w+v*b+x*Y+m*X,o[6]=g*R+v*U+x*Q+m*ot,o[10]=g*L+v*G+x*k+m*rt,o[14]=g*C+v*H+x*j+m*ct,o[3]=E*w+M*b+y*Y+I*X,o[7]=E*R+M*U+y*Q+I*ot,o[11]=E*L+M*G+y*k+I*rt,o[15]=E*C+M*H+y*j+I*ct,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],o=t[12],a=t[1],r=t[5],l=t[9],c=t[13],h=t[2],d=t[6],p=t[10],f=t[14],g=t[3],v=t[7],x=t[11],m=t[15];return g*(+o*l*d-i*c*d-o*r*p+n*c*p+i*r*f-n*l*f)+v*(+e*l*f-e*c*p+o*a*p-i*a*f+i*c*h-o*l*h)+x*(+e*c*d-e*r*f-o*a*d+n*a*f+o*r*h-n*c*h)+m*(-i*r*h-e*l*d+e*r*p+i*a*d-n*a*p+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],a=t[4],r=t[5],l=t[6],c=t[7],h=t[8],d=t[9],p=t[10],f=t[11],g=t[12],v=t[13],x=t[14],m=t[15],E=d*x*c-v*p*c+v*l*f-r*x*f-d*l*m+r*p*m,M=g*p*c-h*x*c-g*l*f+a*x*f+h*l*m-a*p*m,y=h*v*c-g*d*c+g*r*f-a*v*f-h*r*m+a*d*m,I=g*d*l-h*v*l-g*r*p+a*v*p+h*r*x-a*d*x,w=e*E+n*M+i*y+o*I;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/w;return t[0]=E*R,t[1]=(v*p*o-d*x*o-v*i*f+n*x*f+d*i*m-n*p*m)*R,t[2]=(r*x*o-v*l*o+v*i*c-n*x*c-r*i*m+n*l*m)*R,t[3]=(d*l*o-r*p*o-d*i*c+n*p*c+r*i*f-n*l*f)*R,t[4]=M*R,t[5]=(h*x*o-g*p*o+g*i*f-e*x*f-h*i*m+e*p*m)*R,t[6]=(g*l*o-a*x*o-g*i*c+e*x*c+a*i*m-e*l*m)*R,t[7]=(a*p*o-h*l*o+h*i*c-e*p*c-a*i*f+e*l*f)*R,t[8]=y*R,t[9]=(g*d*o-h*v*o-g*n*f+e*v*f+h*n*m-e*d*m)*R,t[10]=(a*v*o-g*r*o+g*n*c-e*v*c-a*n*m+e*r*m)*R,t[11]=(h*r*o-a*d*o-h*n*c+e*d*c+a*n*f-e*r*f)*R,t[12]=I*R,t[13]=(h*v*i-g*d*i+g*n*p-e*v*p-h*n*x+e*d*x)*R,t[14]=(g*r*i-a*v*i-g*n*l+e*v*l+a*n*x-e*r*x)*R,t[15]=(a*d*i-h*r*i+h*n*l-e*d*l-a*n*p+e*r*p)*R,this}scale(t){const e=this.elements,n=t.x,i=t.y,o=t.z;return e[0]*=n,e[4]*=i,e[8]*=o,e[1]*=n,e[5]*=i,e[9]*=o,e[2]*=n,e[6]*=i,e[10]*=o,e[3]*=n,e[7]*=i,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),o=1-n,a=t.x,r=t.y,l=t.z,c=o*a,h=o*r;return this.set(c*a+n,c*r-i*l,c*l+i*r,0,c*r+i*l,h*r+n,h*l-i*a,0,c*l-i*r,h*l+i*a,o*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,o,a){return this.set(1,n,o,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,o=e._x,a=e._y,r=e._z,l=e._w,c=o+o,h=a+a,d=r+r,p=o*c,f=o*h,g=o*d,v=a*h,x=a*d,m=r*d,E=l*c,M=l*h,y=l*d,I=n.x,w=n.y,R=n.z;return i[0]=(1-(v+m))*I,i[1]=(f+y)*I,i[2]=(g-M)*I,i[3]=0,i[4]=(f-y)*w,i[5]=(1-(p+m))*w,i[6]=(x+E)*w,i[7]=0,i[8]=(g+M)*R,i[9]=(x-E)*R,i[10]=(1-(p+v))*R,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let o=ms.set(i[0],i[1],i[2]).length();const a=ms.set(i[4],i[5],i[6]).length(),r=ms.set(i[8],i[9],i[10]).length();this.determinant()<0&&(o=-o),t.x=i[12],t.y=i[13],t.z=i[14],jn.copy(this);const c=1/o,h=1/a,d=1/r;return jn.elements[0]*=c,jn.elements[1]*=c,jn.elements[2]*=c,jn.elements[4]*=h,jn.elements[5]*=h,jn.elements[6]*=h,jn.elements[8]*=d,jn.elements[9]*=d,jn.elements[10]*=d,e.setFromRotationMatrix(jn),n.x=o,n.y=a,n.z=r,this}makePerspective(t,e,n,i,o,a,r=gi){const l=this.elements,c=2*o/(e-t),h=2*o/(n-i),d=(e+t)/(e-t),p=(n+i)/(n-i);let f,g;if(r===gi)f=-(a+o)/(a-o),g=-2*a*o/(a-o);else if(r===ga)f=-a/(a-o),g=-a*o/(a-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+r);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,o,a,r=gi){const l=this.elements,c=1/(e-t),h=1/(n-i),d=1/(a-o),p=(e+t)*c,f=(n+i)*h;let g,v;if(r===gi)g=(a+o)*d,v=-2*d;else if(r===ga)g=o*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+r);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ms=new A,jn=new ze,Md=new A(0,0,0),bd=new A(1,1,1),Ci=new A,Bo=new A,In=new A,Xl=new ze,Yl=new qs;class Xn{constructor(t=0,e=0,n=0,i=Xn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,o=i[0],a=i[4],r=i[8],l=i[1],c=i[5],h=i[9],d=i[2],p=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(ln(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ln(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(r,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(ln(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-ln(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ln(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(r,f));break;case"XZY":this._z=Math.asin(-ln(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(r,o)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Xl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Xl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Yl.setFromEuler(this),this.setFromQuaternion(Yl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xn.DEFAULT_ORDER="XYZ";class vl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let wd=0;const Kl=new A,gs=new qs,hi=new ze,Go=new A,io=new A,Sd=new A,Td=new qs,ql=new A(1,0,0),jl=new A(0,1,0),Jl=new A(0,0,1),$l={type:"added"},Ed={type:"removed"},xs={type:"childadded",child:null},Oa={type:"childremoved",child:null};class on extends Ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wd++}),this.uuid=vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=on.DEFAULT_UP.clone();const t=new A,e=new Xn,n=new qs,i=new A(1,1,1);function o(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ze},normalMatrix:{value:new le}}),this.matrix=new ze,this.matrixWorld=new ze,this.matrixAutoUpdate=on.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return gs.setFromAxisAngle(t,e),this.quaternion.multiply(gs),this}rotateOnWorldAxis(t,e){return gs.setFromAxisAngle(t,e),this.quaternion.premultiply(gs),this}rotateX(t){return this.rotateOnAxis(ql,t)}rotateY(t){return this.rotateOnAxis(jl,t)}rotateZ(t){return this.rotateOnAxis(Jl,t)}translateOnAxis(t,e){return Kl.copy(t).applyQuaternion(this.quaternion),this.position.add(Kl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ql,t)}translateY(t){return this.translateOnAxis(jl,t)}translateZ(t){return this.translateOnAxis(Jl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(hi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Go.copy(t):Go.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hi.lookAt(io,Go,this.up):hi.lookAt(Go,io,this.up),this.quaternion.setFromRotationMatrix(hi),i&&(hi.extractRotation(i.matrixWorld),gs.setFromRotationMatrix(hi),this.quaternion.premultiply(gs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent($l),xs.child=t,this.dispatchEvent(xs),xs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ed),Oa.child=t,this.dispatchEvent(Oa),Oa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),hi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),hi.multiply(t.parent.matrixWorld)),t.applyMatrix4(hi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent($l),xs.child=t,this.dispatchEvent(xs),xs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let o=0,a=i.length;o<a;o++)i[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,t,Sd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,Td,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let o=0,a=i.length;o<a;o++)i[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(r=>({boxInitialized:r.boxInitialized,boxMin:r.box.min.toArray(),boxMax:r.box.max.toArray(),sphereInitialized:r.sphereInitialized,sphereRadius:r.sphere.radius,sphereCenter:r.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function o(r,l){return r[l.uuid]===void 0&&(r[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=o(t.geometries,this.geometry);const r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){const l=r.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];o(t.shapes,d)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const r=[];for(let l=0,c=this.material.length;l<c;l++)r.push(o(t.materials,this.material[l]));i.material=r}else i.material=o(t.materials,this.material);if(this.children.length>0){i.children=[];for(let r=0;r<this.children.length;r++)i.children.push(this.children[r].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let r=0;r<this.animations.length;r++){const l=this.animations[r];i.animations.push(o(t.animations,l))}}if(e){const r=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),p=a(t.skeletons),f=a(t.animations),g=a(t.nodes);r.length>0&&(n.geometries=r),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),p.length>0&&(n.skeletons=p),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(r){const l=[];for(const c in r){const h=r[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}on.DEFAULT_UP=new A(0,1,0);on.DEFAULT_MATRIX_AUTO_UPDATE=!0;on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Jn=new A,ui=new A,za=new A,di=new A,vs=new A,_s=new A,Zl=new A,ka=new A,Ba=new A,Ga=new A,Ha=new Le,Va=new Le,Wa=new Le;class Wn{constructor(t=new A,e=new A,n=new A){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Jn.subVectors(t,e),i.cross(Jn);const o=i.lengthSq();return o>0?i.multiplyScalar(1/Math.sqrt(o)):i.set(0,0,0)}static getBarycoord(t,e,n,i,o){Jn.subVectors(i,e),ui.subVectors(n,e),za.subVectors(t,e);const a=Jn.dot(Jn),r=Jn.dot(ui),l=Jn.dot(za),c=ui.dot(ui),h=ui.dot(za),d=a*c-r*r;if(d===0)return o.set(0,0,0),null;const p=1/d,f=(c*l-r*h)*p,g=(a*h-r*l)*p;return o.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,di)===null?!1:di.x>=0&&di.y>=0&&di.x+di.y<=1}static getInterpolation(t,e,n,i,o,a,r,l){return this.getBarycoord(t,e,n,i,di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,di.x),l.addScaledVector(a,di.y),l.addScaledVector(r,di.z),l)}static getInterpolatedAttribute(t,e,n,i,o,a){return Ha.setScalar(0),Va.setScalar(0),Wa.setScalar(0),Ha.fromBufferAttribute(t,e),Va.fromBufferAttribute(t,n),Wa.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(Ha,o.x),a.addScaledVector(Va,o.y),a.addScaledVector(Wa,o.z),a}static isFrontFacing(t,e,n,i){return Jn.subVectors(n,e),ui.subVectors(t,e),Jn.cross(ui).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Jn.subVectors(this.c,this.b),ui.subVectors(this.a,this.b),Jn.cross(ui).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Wn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Wn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,o){return Wn.getInterpolation(t,this.a,this.b,this.c,e,n,i,o)}containsPoint(t){return Wn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Wn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,o=this.c;let a,r;vs.subVectors(i,n),_s.subVectors(o,n),ka.subVectors(t,n);const l=vs.dot(ka),c=_s.dot(ka);if(l<=0&&c<=0)return e.copy(n);Ba.subVectors(t,i);const h=vs.dot(Ba),d=_s.dot(Ba);if(h>=0&&d<=h)return e.copy(i);const p=l*d-h*c;if(p<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(vs,a);Ga.subVectors(t,o);const f=vs.dot(Ga),g=_s.dot(Ga);if(g>=0&&f<=g)return e.copy(o);const v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return r=c/(c-g),e.copy(n).addScaledVector(_s,r);const x=h*g-f*d;if(x<=0&&d-h>=0&&f-g>=0)return Zl.subVectors(o,i),r=(d-h)/(d-h+(f-g)),e.copy(i).addScaledVector(Zl,r);const m=1/(x+v+p);return a=v*m,r=p*m,e.copy(n).addScaledVector(vs,a).addScaledVector(_s,r)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Nh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ai={h:0,s:0,l:0},Ho={h:0,s:0,l:0};function Xa(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class jt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=zn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ye.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ye.workingColorSpace){return this.r=t,this.g=e,this.b=n,ye.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ye.workingColorSpace){if(t=gl(t,1),e=ln(e,0,1),n=ln(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,a=2*n-o;this.r=Xa(a,o,t+1/3),this.g=Xa(a,o,t),this.b=Xa(a,o,t-1/3)}return ye.toWorkingColorSpace(this,i),this}setStyle(t,e=zn){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const a=i[1],r=i[2];switch(a){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=i[1],a=o.length;if(a===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=zn){const n=Nh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=_i(t.r),this.g=_i(t.g),this.b=_i(t.b),this}copyLinearToSRGB(t){return this.r=ks(t.r),this.g=ks(t.g),this.b=ks(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=zn){return ye.fromWorkingColorSpace(pn.copy(this),t),Math.round(ln(pn.r*255,0,255))*65536+Math.round(ln(pn.g*255,0,255))*256+Math.round(ln(pn.b*255,0,255))}getHexString(t=zn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ye.workingColorSpace){ye.fromWorkingColorSpace(pn.copy(this),e);const n=pn.r,i=pn.g,o=pn.b,a=Math.max(n,i,o),r=Math.min(n,i,o);let l,c;const h=(r+a)/2;if(r===a)l=0,c=0;else{const d=a-r;switch(c=h<=.5?d/(a+r):d/(2-a-r),a){case n:l=(i-o)/d+(i<o?6:0);break;case i:l=(o-n)/d+2;break;case o:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ye.workingColorSpace){return ye.fromWorkingColorSpace(pn.copy(this),e),t.r=pn.r,t.g=pn.g,t.b=pn.b,t}getStyle(t=zn){ye.fromWorkingColorSpace(pn.copy(this),t);const e=pn.r,n=pn.g,i=pn.b;return t!==zn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Ai),this.setHSL(Ai.h+t,Ai.s+e,Ai.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ai),t.getHSL(Ho);const n=Mo(Ai.h,Ho.h,e),i=Mo(Ai.s,Ho.s,e),o=Mo(Ai.l,Ho.l,e);return this.setHSL(n,i,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*i,this.g=o[1]*e+o[4]*n+o[7]*i,this.b=o[2]*e+o[5]*n+o[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pn=new jt;jt.NAMES=Nh;let Cd=0;class as extends Ks{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=vi(),this.name="",this.blending=Os,this.side=ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mr,this.blendDst=gr,this.blendEquation=ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new jt(0,0,0),this.blendAlpha=0,this.depthFunc=Bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hs,this.stencilZFail=hs,this.stencilZPass=hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Os&&(n.blending=this.blending),this.side!==ii&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==mr&&(n.blendSrc=this.blendSrc),this.blendDst!==gr&&(n.blendDst=this.blendDst),this.blendEquation!==ji&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Bs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Nl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==hs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==hs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(o){const a=[];for(const r in o){const l=o[r];delete l.metadata,a.push(l)}return a}if(e){const o=i(t.textures),a=i(t.images);o.length>0&&(n.textures=o),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let o=0;o!==i;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Et extends as{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=ya,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Je=new A,Vo=new St;class Mn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Qr,this.updateRanges=[],this.gpuType=mi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,o=this.itemSize;i<o;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Vo.fromBufferAttribute(this,e),Vo.applyMatrix3(t),this.setXY(e,Vo.x,Vo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyMatrix3(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyMatrix4(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyNormalMatrix(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.transformDirection(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Qn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ce(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Qn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Qn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Qn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Qn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array),i=Ce(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,o){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array),i=Ce(i,this.array),o=Ce(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Qr&&(t.usage=this.usage),t}}class Fh extends Mn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Oh extends Mn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ie extends Mn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Ad=0;const Hn=new ze,Ya=new on,ys=new A,Un=new Po,so=new Po,sn=new A;class bn extends Ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=vi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Dh(t)?Oh:Fh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new le().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Hn.makeRotationFromQuaternion(t),this.applyMatrix4(Hn),this}rotateX(t){return Hn.makeRotationX(t),this.applyMatrix4(Hn),this}rotateY(t){return Hn.makeRotationY(t),this.applyMatrix4(Hn),this}rotateZ(t){return Hn.makeRotationZ(t),this.applyMatrix4(Hn),this}translate(t,e,n){return Hn.makeTranslation(t,e,n),this.applyMatrix4(Hn),this}scale(t,e,n){return Hn.makeScale(t,e,n),this.applyMatrix4(Hn),this}lookAt(t){return Ya.lookAt(t),Ya.updateMatrix(),this.applyMatrix4(Ya.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ys).negate(),this.translate(ys.x,ys.y,ys.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,o=t.length;i<o;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ie(n,3))}else{for(let n=0,i=e.count;n<i;n++){const o=t[n];e.setXYZ(n,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Po);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const o=e[n];Un.setFromBufferAttribute(o),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,Un.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,Un.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(Un.min),this.boundingBox.expandByPoint(Un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xl);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(t){const n=this.boundingSphere.center;if(Un.setFromBufferAttribute(t),e)for(let o=0,a=e.length;o<a;o++){const r=e[o];so.setFromBufferAttribute(r),this.morphTargetsRelative?(sn.addVectors(Un.min,so.min),Un.expandByPoint(sn),sn.addVectors(Un.max,so.max),Un.expandByPoint(sn)):(Un.expandByPoint(so.min),Un.expandByPoint(so.max))}Un.getCenter(n);let i=0;for(let o=0,a=t.count;o<a;o++)sn.fromBufferAttribute(t,o),i=Math.max(i,n.distanceToSquared(sn));if(e)for(let o=0,a=e.length;o<a;o++){const r=e[o],l=this.morphTargetsRelative;for(let c=0,h=r.count;c<h;c++)sn.fromBufferAttribute(r,c),l&&(ys.fromBufferAttribute(t,c),sn.add(ys)),i=Math.max(i,n.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),r=[],l=[];for(let L=0;L<n.count;L++)r[L]=new A,l[L]=new A;const c=new A,h=new A,d=new A,p=new St,f=new St,g=new St,v=new A,x=new A;function m(L,C,b){c.fromBufferAttribute(n,L),h.fromBufferAttribute(n,C),d.fromBufferAttribute(n,b),p.fromBufferAttribute(o,L),f.fromBufferAttribute(o,C),g.fromBufferAttribute(o,b),h.sub(c),d.sub(c),f.sub(p),g.sub(p);const U=1/(f.x*g.y-g.x*f.y);isFinite(U)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(U),x.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(U),r[L].add(v),r[C].add(v),r[b].add(v),l[L].add(x),l[C].add(x),l[b].add(x))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let L=0,C=E.length;L<C;++L){const b=E[L],U=b.start,G=b.count;for(let H=U,Y=U+G;H<Y;H+=3)m(t.getX(H+0),t.getX(H+1),t.getX(H+2))}const M=new A,y=new A,I=new A,w=new A;function R(L){I.fromBufferAttribute(i,L),w.copy(I);const C=r[L];M.copy(C),M.sub(I.multiplyScalar(I.dot(C))).normalize(),y.crossVectors(w,C);const U=y.dot(l[L])<0?-1:1;a.setXYZW(L,M.x,M.y,M.z,U)}for(let L=0,C=E.length;L<C;++L){const b=E[L],U=b.start,G=b.count;for(let H=U,Y=U+G;H<Y;H+=3)R(t.getX(H+0)),R(t.getX(H+1)),R(t.getX(H+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Mn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,f=n.count;p<f;p++)n.setXYZ(p,0,0,0);const i=new A,o=new A,a=new A,r=new A,l=new A,c=new A,h=new A,d=new A;if(t)for(let p=0,f=t.count;p<f;p+=3){const g=t.getX(p+0),v=t.getX(p+1),x=t.getX(p+2);i.fromBufferAttribute(e,g),o.fromBufferAttribute(e,v),a.fromBufferAttribute(e,x),h.subVectors(a,o),d.subVectors(i,o),h.cross(d),r.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,x),r.add(h),l.add(h),c.add(h),n.setXYZ(g,r.x,r.y,r.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(x,c.x,c.y,c.z)}else for(let p=0,f=e.count;p<f;p+=3)i.fromBufferAttribute(e,p+0),o.fromBufferAttribute(e,p+1),a.fromBufferAttribute(e,p+2),h.subVectors(a,o),d.subVectors(i,o),h.cross(d),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)sn.fromBufferAttribute(t,e),sn.normalize(),t.setXYZ(e,sn.x,sn.y,sn.z)}toNonIndexed(){function t(r,l){const c=r.array,h=r.itemSize,d=r.normalized,p=new c.constructor(l.length*h);let f=0,g=0;for(let v=0,x=l.length;v<x;v++){r.isInterleavedBufferAttribute?f=l[v]*r.data.stride+r.offset:f=l[v]*h;for(let m=0;m<h;m++)p[g++]=c[f++]}return new Mn(p,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new bn,n=this.index.array,i=this.attributes;for(const r in i){const l=i[r],c=t(l,n);e.setAttribute(r,c)}const o=this.morphAttributes;for(const r in o){const l=[],c=o[r];for(let h=0,d=c.length;h<d;h++){const p=c[h],f=t(p,n);l.push(f)}e.morphAttributes[r]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let r=0,l=a.length;r<l;r++){const c=a[r];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,p=c.length;d<p;d++){const f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,o=!0)}o&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const r=this.boundingSphere;return r!==null&&(t.data.boundingSphere={center:r.center.toArray(),radius:r.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const o=t.morphAttributes;for(const c in o){const h=[],d=o[c];for(let p=0,f=d.length;p<f;p++)h.push(d[p].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const r=t.boundingBox;r!==null&&(this.boundingBox=r.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ql=new ze,Gi=new Uh,Wo=new xl,tc=new A,Xo=new A,Yo=new A,Ko=new A,Ka=new A,qo=new A,ec=new A,jo=new A;class D extends on{constructor(t=new bn,e=new Et){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=i.length;o<a;o++){const r=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=o}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,o=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const r=this.morphTargetInfluences;if(o&&r){qo.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const h=r[l],d=o[l];h!==0&&(Ka.fromBufferAttribute(d,t),a?qo.addScaledVector(Ka,h):qo.addScaledVector(Ka.sub(e),h))}e.add(qo)}return e}raycast(t,e){const n=this.geometry,i=this.material,o=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Wo.copy(n.boundingSphere),Wo.applyMatrix4(o),Gi.copy(t.ray).recast(t.near),!(Wo.containsPoint(Gi.origin)===!1&&(Gi.intersectSphere(Wo,tc)===null||Gi.origin.distanceToSquared(tc)>(t.far-t.near)**2))&&(Ql.copy(o).invert(),Gi.copy(t.ray).applyMatrix4(Ql),!(n.boundingBox!==null&&Gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Gi)))}_computeIntersections(t,e,n){let i;const o=this.geometry,a=this.material,r=o.index,l=o.attributes.position,c=o.attributes.uv,h=o.attributes.uv1,d=o.attributes.normal,p=o.groups,f=o.drawRange;if(r!==null)if(Array.isArray(a))for(let g=0,v=p.length;g<v;g++){const x=p[g],m=a[x.materialIndex],E=Math.max(x.start,f.start),M=Math.min(r.count,Math.min(x.start+x.count,f.start+f.count));for(let y=E,I=M;y<I;y+=3){const w=r.getX(y),R=r.getX(y+1),L=r.getX(y+2);i=Jo(this,m,t,n,c,h,d,w,R,L),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=x.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),v=Math.min(r.count,f.start+f.count);for(let x=g,m=v;x<m;x+=3){const E=r.getX(x),M=r.getX(x+1),y=r.getX(x+2);i=Jo(this,a,t,n,c,h,d,E,M,y),i&&(i.faceIndex=Math.floor(x/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=p.length;g<v;g++){const x=p[g],m=a[x.materialIndex],E=Math.max(x.start,f.start),M=Math.min(l.count,Math.min(x.start+x.count,f.start+f.count));for(let y=E,I=M;y<I;y+=3){const w=y,R=y+1,L=y+2;i=Jo(this,m,t,n,c,h,d,w,R,L),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=x.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let x=g,m=v;x<m;x+=3){const E=x,M=x+1,y=x+2;i=Jo(this,a,t,n,c,h,d,E,M,y),i&&(i.faceIndex=Math.floor(x/3),e.push(i))}}}}function Rd(s,t,e,n,i,o,a,r){let l;if(t.side===An?l=n.intersectTriangle(a,o,i,!0,r):l=n.intersectTriangle(i,o,a,t.side===ii,r),l===null)return null;jo.copy(r),jo.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(jo);return c<e.near||c>e.far?null:{distance:c,point:jo.clone(),object:s}}function Jo(s,t,e,n,i,o,a,r,l,c){s.getVertexPosition(r,Xo),s.getVertexPosition(l,Yo),s.getVertexPosition(c,Ko);const h=Rd(s,t,e,n,Xo,Yo,Ko,ec);if(h){const d=new A;Wn.getBarycoord(ec,Xo,Yo,Ko,d),i&&(h.uv=Wn.getInterpolatedAttribute(i,r,l,c,d,new St)),o&&(h.uv1=Wn.getInterpolatedAttribute(o,r,l,c,d,new St)),a&&(h.normal=Wn.getInterpolatedAttribute(a,r,l,c,d,new A),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const p={a:r,b:l,c,normal:new A,materialIndex:0};Wn.getNormal(Xo,Yo,Ko,p.normal),h.face=p,h.barycoord=d}return h}class dt extends bn{constructor(t=1,e=1,n=1,i=1,o=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:o,depthSegments:a};const r=this;i=Math.floor(i),o=Math.floor(o),a=Math.floor(a);const l=[],c=[],h=[],d=[];let p=0,f=0;g("z","y","x",-1,-1,n,e,t,a,o,0),g("z","y","x",1,-1,n,e,-t,a,o,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,o,4),g("x","y","z",-1,-1,t,e,-n,i,o,5),this.setIndex(l),this.setAttribute("position",new Ie(c,3)),this.setAttribute("normal",new Ie(h,3)),this.setAttribute("uv",new Ie(d,2));function g(v,x,m,E,M,y,I,w,R,L,C){const b=y/R,U=I/L,G=y/2,H=I/2,Y=w/2,Q=R+1,k=L+1;let j=0,X=0;const ot=new A;for(let rt=0;rt<k;rt++){const ct=rt*U-H;for(let Bt=0;Bt<Q;Bt++){const yt=Bt*b-G;ot[v]=yt*E,ot[x]=ct*M,ot[m]=Y,c.push(ot.x,ot.y,ot.z),ot[v]=0,ot[x]=0,ot[m]=w>0?1:-1,h.push(ot.x,ot.y,ot.z),d.push(Bt/R),d.push(1-rt/L),j+=1}}for(let rt=0;rt<L;rt++)for(let ct=0;ct<R;ct++){const Bt=p+ct+Q*rt,yt=p+ct+Q*(rt+1),q=p+(ct+1)+Q*(rt+1),$=p+(ct+1)+Q*rt;l.push(Bt,yt,$),l.push(yt,q,$),X+=6}r.addGroup(f,X,C),f+=X,p+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Xs(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function vn(s){const t={};for(let e=0;e<s.length;e++){const n=Xs(s[e]);for(const i in n)t[i]=n[i]}return t}function Pd(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function zh(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ye.workingColorSpace}const Dd={clone:Xs,merge:vn};var Ld=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Id=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zi extends as{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ld,this.fragmentShader=Id,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Xs(t.uniforms),this.uniformsGroups=Pd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class kh extends on{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ze,this.projectionMatrix=new ze,this.projectionMatrixInverse=new ze,this.coordinateSystem=gi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ri=new A,nc=new St,ic=new St;class kn extends kh{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Co*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(yo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Co*2*Math.atan(Math.tan(yo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ri.x,Ri.y).multiplyScalar(-t/Ri.z),Ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ri.x,Ri.y).multiplyScalar(-t/Ri.z)}getViewSize(t,e){return this.getViewBounds(t,nc,ic),e.subVectors(ic,nc)}setViewOffset(t,e,n,i,o,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(yo*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,o=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;o+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const r=this.filmOffset;r!==0&&(o+=t*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ms=-90,bs=1;class Ud extends on{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new kn(Ms,bs,t,e);i.layers=this.layers,this.add(i);const o=new kn(Ms,bs,t,e);o.layers=this.layers,this.add(o);const a=new kn(Ms,bs,t,e);a.layers=this.layers,this.add(a);const r=new kn(Ms,bs,t,e);r.layers=this.layers,this.add(r);const l=new kn(Ms,bs,t,e);l.layers=this.layers,this.add(l);const c=new kn(Ms,bs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,o,a,r,l]=e;for(const c of e)this.remove(c);if(t===gi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),r.up.set(0,1,0),r.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ga)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),r.up.set(0,-1,0),r.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,a,r,l,c,h]=this.children,d=t.getRenderTarget(),p=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,o),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,r),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(d,p,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Bh extends yn{constructor(t,e,n,i,o,a,r,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Gs,super(t,e,n,i,o,a,r,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Nd extends ss{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Bh(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ti}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new dt(5,5,5),o=new zi({name:"CubemapFromEquirect",uniforms:Xs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:An,blending:Oi});o.uniforms.tEquirect.value=e;const a=new D(i,o),r=e.minFilter;return e.minFilter===ns&&(e.minFilter=ti),new Ud(1,10,this).update(t,a),e.minFilter=r,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const o=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(o)}}const qa=new A,Fd=new A,Od=new le;class Ki{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=qa.subVectors(n,e).cross(Fd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(qa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/i;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Od.getNormalMatrix(t),i=this.coplanarPoint(qa).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hi=new xl,$o=new A;class _l{constructor(t=new Ki,e=new Ki,n=new Ki,i=new Ki,o=new Ki,a=new Ki){this.planes=[t,e,n,i,o,a]}set(t,e,n,i,o,a){const r=this.planes;return r[0].copy(t),r[1].copy(e),r[2].copy(n),r[3].copy(i),r[4].copy(o),r[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=gi){const n=this.planes,i=t.elements,o=i[0],a=i[1],r=i[2],l=i[3],c=i[4],h=i[5],d=i[6],p=i[7],f=i[8],g=i[9],v=i[10],x=i[11],m=i[12],E=i[13],M=i[14],y=i[15];if(n[0].setComponents(l-o,p-c,x-f,y-m).normalize(),n[1].setComponents(l+o,p+c,x+f,y+m).normalize(),n[2].setComponents(l+a,p+h,x+g,y+E).normalize(),n[3].setComponents(l-a,p-h,x-g,y-E).normalize(),n[4].setComponents(l-r,p-d,x-v,y-M).normalize(),e===gi)n[5].setComponents(l+r,p+d,x+v,y+M).normalize();else if(e===ga)n[5].setComponents(r,d,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Hi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Hi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Hi)}intersectsSprite(t){return Hi.center.set(0,0,0),Hi.radius=.7071067811865476,Hi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Hi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if($o.x=i.normal.x>0?t.max.x:t.min.x,$o.y=i.normal.y>0?t.max.y:t.min.y,$o.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint($o)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Gh(){let s=null,t=!1,e=null,n=null;function i(o,a){e(o,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){s=o}}}function zd(s){const t=new WeakMap;function e(r,l){const c=r.array,h=r.usage,d=c.byteLength,p=s.createBuffer();s.bindBuffer(l,p),s.bufferData(l,c,h),r.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)r.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:r.version,size:d}}function n(r,l,c){const h=l.array,d=l.updateRanges;if(s.bindBuffer(c,r),d.length===0)s.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let p=0;for(let f=1;f<d.length;f++){const g=d[p],v=d[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++p,d[p]=v)}d.length=p+1;for(let f=0,g=d.length;f<g;f++){const v=d[f];s.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(r){return r.isInterleavedBufferAttribute&&(r=r.data),t.get(r)}function o(r){r.isInterleavedBufferAttribute&&(r=r.data);const l=t.get(r);l&&(s.deleteBuffer(l.buffer),t.delete(r))}function a(r,l){if(r.isInterleavedBufferAttribute&&(r=r.data),r.isGLBufferAttribute){const h=t.get(r);(!h||h.version<r.version)&&t.set(r,{buffer:r.buffer,type:r.type,bytesPerElement:r.elementSize,version:r.version});return}const c=t.get(r);if(c===void 0)t.set(r,e(r,l));else if(c.version<r.version){if(c.size!==r.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,r,l),c.version=r.version}}return{get:i,remove:o,update:a}}class js extends bn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const o=t/2,a=e/2,r=Math.floor(n),l=Math.floor(i),c=r+1,h=l+1,d=t/r,p=e/l,f=[],g=[],v=[],x=[];for(let m=0;m<h;m++){const E=m*p-a;for(let M=0;M<c;M++){const y=M*d-o;g.push(y,-E,0),v.push(0,0,1),x.push(M/r),x.push(1-m/l)}}for(let m=0;m<l;m++)for(let E=0;E<r;E++){const M=E+c*m,y=E+c*(m+1),I=E+1+c*(m+1),w=E+1+c*m;f.push(M,y,w),f.push(y,I,w)}this.setIndex(f),this.setAttribute("position",new Ie(g,3)),this.setAttribute("normal",new Ie(v,3)),this.setAttribute("uv",new Ie(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new js(t.width,t.height,t.widthSegments,t.heightSegments)}}var kd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bd=`#ifdef USE_ALPHAHASH
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
#endif`,Gd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xd=`#ifdef USE_AOMAP
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
#endif`,Yd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,qd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$d=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Zd=`#ifdef USE_IRIDESCENCE
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
#endif`,Qd=`#ifdef USE_BUMPMAP
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
#endif`,tp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,ep=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,np=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ip=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,op=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ap=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,rp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,lp=`#define PI 3.141592653589793
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
} // validated`,cp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,hp=`vec3 transformedNormal = objectNormal;
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
#endif`,up=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mp="gl_FragColor = linearToOutputTexel( gl_FragColor );",gp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xp=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,vp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_p=`#ifdef USE_ENVMAP
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
#endif`,yp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mp=`#ifdef USE_ENVMAP
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
#endif`,bp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ep=`#ifdef USE_GRADIENTMAP
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
}`,Cp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ap=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pp=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,Dp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,Lp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ip=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Up=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Np=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fp=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,Op=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,zp=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,kp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Bp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Kp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,qp=`#if defined( USE_POINTS_UV )
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
#endif`,jp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$p=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Zp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ef=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,sf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,of=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,af=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lf=`#ifdef USE_NORMALMAP
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
#endif`,cf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,uf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,df=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ff=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,mf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_f=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Mf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,bf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,wf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Sf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Tf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ef=`#ifdef USE_SKINNING
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
#endif`,Cf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Af=`#ifdef USE_SKINNING
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
#endif`,Rf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Pf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Df=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Lf=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,If=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Uf=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Nf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ff=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Of=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bf=`uniform sampler2D t2D;
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
}`,Gf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xf=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,Yf=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Kf=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,qf=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,jf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$f=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Zf=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qf=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,tm=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,em=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,nm=`#define LAMBERT
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,im=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,sm=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,om=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,am=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,rm=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,lm=`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,cm=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,hm=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,um=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,dm=`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,pm=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,fm=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,mm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,gm=`uniform vec3 color;
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
}`,xm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,vm=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,ce={alphahash_fragment:kd,alphahash_pars_fragment:Bd,alphamap_fragment:Gd,alphamap_pars_fragment:Hd,alphatest_fragment:Vd,alphatest_pars_fragment:Wd,aomap_fragment:Xd,aomap_pars_fragment:Yd,batching_pars_vertex:Kd,batching_vertex:qd,begin_vertex:jd,beginnormal_vertex:Jd,bsdfs:$d,iridescence_fragment:Zd,bumpmap_pars_fragment:Qd,clipping_planes_fragment:tp,clipping_planes_pars_fragment:ep,clipping_planes_pars_vertex:np,clipping_planes_vertex:ip,color_fragment:sp,color_pars_fragment:op,color_pars_vertex:ap,color_vertex:rp,common:lp,cube_uv_reflection_fragment:cp,defaultnormal_vertex:hp,displacementmap_pars_vertex:up,displacementmap_vertex:dp,emissivemap_fragment:pp,emissivemap_pars_fragment:fp,colorspace_fragment:mp,colorspace_pars_fragment:gp,envmap_fragment:xp,envmap_common_pars_fragment:vp,envmap_pars_fragment:_p,envmap_pars_vertex:yp,envmap_physical_pars_fragment:Dp,envmap_vertex:Mp,fog_vertex:bp,fog_pars_vertex:wp,fog_fragment:Sp,fog_pars_fragment:Tp,gradientmap_pars_fragment:Ep,lightmap_pars_fragment:Cp,lights_lambert_fragment:Ap,lights_lambert_pars_fragment:Rp,lights_pars_begin:Pp,lights_toon_fragment:Lp,lights_toon_pars_fragment:Ip,lights_phong_fragment:Up,lights_phong_pars_fragment:Np,lights_physical_fragment:Fp,lights_physical_pars_fragment:Op,lights_fragment_begin:zp,lights_fragment_maps:kp,lights_fragment_end:Bp,logdepthbuf_fragment:Gp,logdepthbuf_pars_fragment:Hp,logdepthbuf_pars_vertex:Vp,logdepthbuf_vertex:Wp,map_fragment:Xp,map_pars_fragment:Yp,map_particle_fragment:Kp,map_particle_pars_fragment:qp,metalnessmap_fragment:jp,metalnessmap_pars_fragment:Jp,morphinstance_vertex:$p,morphcolor_vertex:Zp,morphnormal_vertex:Qp,morphtarget_pars_vertex:tf,morphtarget_vertex:ef,normal_fragment_begin:nf,normal_fragment_maps:sf,normal_pars_fragment:of,normal_pars_vertex:af,normal_vertex:rf,normalmap_pars_fragment:lf,clearcoat_normal_fragment_begin:cf,clearcoat_normal_fragment_maps:hf,clearcoat_pars_fragment:uf,iridescence_pars_fragment:df,opaque_fragment:pf,packing:ff,premultiplied_alpha_fragment:mf,project_vertex:gf,dithering_fragment:xf,dithering_pars_fragment:vf,roughnessmap_fragment:_f,roughnessmap_pars_fragment:yf,shadowmap_pars_fragment:Mf,shadowmap_pars_vertex:bf,shadowmap_vertex:wf,shadowmask_pars_fragment:Sf,skinbase_vertex:Tf,skinning_pars_vertex:Ef,skinning_vertex:Cf,skinnormal_vertex:Af,specularmap_fragment:Rf,specularmap_pars_fragment:Pf,tonemapping_fragment:Df,tonemapping_pars_fragment:Lf,transmission_fragment:If,transmission_pars_fragment:Uf,uv_pars_fragment:Nf,uv_pars_vertex:Ff,uv_vertex:Of,worldpos_vertex:zf,background_vert:kf,background_frag:Bf,backgroundCube_vert:Gf,backgroundCube_frag:Hf,cube_vert:Vf,cube_frag:Wf,depth_vert:Xf,depth_frag:Yf,distanceRGBA_vert:Kf,distanceRGBA_frag:qf,equirect_vert:jf,equirect_frag:Jf,linedashed_vert:$f,linedashed_frag:Zf,meshbasic_vert:Qf,meshbasic_frag:tm,meshlambert_vert:em,meshlambert_frag:nm,meshmatcap_vert:im,meshmatcap_frag:sm,meshnormal_vert:om,meshnormal_frag:am,meshphong_vert:rm,meshphong_frag:lm,meshphysical_vert:cm,meshphysical_frag:hm,meshtoon_vert:um,meshtoon_frag:dm,points_vert:pm,points_frag:fm,shadow_vert:mm,shadow_frag:gm,sprite_vert:xm,sprite_frag:vm},ut={common:{diffuse:{value:new jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new le}},envmap:{envMap:{value:null},envMapRotation:{value:new le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new le},normalScale:{value:new St(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0},uvTransform:{value:new le}},sprite:{diffuse:{value:new jt(16777215)},opacity:{value:1},center:{value:new St(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}}},ai={basic:{uniforms:vn([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:vn([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new jt(0)}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:vn([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new jt(0)},specular:{value:new jt(1118481)},shininess:{value:30}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:vn([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:vn([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new jt(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:vn([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:vn([ut.points,ut.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:vn([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:vn([ut.common,ut.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:vn([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:vn([ut.sprite,ut.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new le}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distanceRGBA:{uniforms:vn([ut.common,ut.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distanceRGBA_vert,fragmentShader:ce.distanceRGBA_frag},shadow:{uniforms:vn([ut.lights,ut.fog,{color:{value:new jt(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};ai.physical={uniforms:vn([ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new le},clearcoatNormalScale:{value:new St(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new le},sheen:{value:0},sheenColor:{value:new jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new le},transmissionSamplerSize:{value:new St},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new le},attenuationDistance:{value:0},attenuationColor:{value:new jt(0)},specularColor:{value:new jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new le},anisotropyVector:{value:new St},anisotropyMap:{value:null},anisotropyMapTransform:{value:new le}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};const Zo={r:0,b:0,g:0},Vi=new Xn,_m=new ze;function ym(s,t,e,n,i,o,a){const r=new jt(0);let l=o===!0?0:1,c,h,d=null,p=0,f=null;function g(E){let M=E.isScene===!0?E.background:null;return M&&M.isTexture&&(M=(E.backgroundBlurriness>0?e:t).get(M)),M}function v(E){let M=!1;const y=g(E);y===null?m(r,l):y&&y.isColor&&(m(y,1),M=!0);const I=s.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,a):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(E,M){const y=g(M);y&&(y.isCubeTexture||y.mapping===Ma)?(h===void 0&&(h=new D(new dt(1,1,1),new zi({name:"BackgroundCubeMaterial",uniforms:Xs(ai.backgroundCube.uniforms),vertexShader:ai.backgroundCube.vertexShader,fragmentShader:ai.backgroundCube.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Vi.copy(M.backgroundRotation),Vi.x*=-1,Vi.y*=-1,Vi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Vi.y*=-1,Vi.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(_m.makeRotationFromEuler(Vi)),h.material.toneMapped=ye.getTransfer(y.colorSpace)!==De,(d!==y||p!==y.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,d=y,p=y.version,f=s.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new D(new js(2,2),new zi({name:"BackgroundMaterial",uniforms:Xs(ai.background.uniforms),vertexShader:ai.background.vertexShader,fragmentShader:ai.background.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=ye.getTransfer(y.colorSpace)!==De,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||p!==y.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,d=y,p=y.version,f=s.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function m(E,M){E.getRGB(Zo,zh(s)),n.buffers.color.setClear(Zo.r,Zo.g,Zo.b,M,a)}return{getClearColor:function(){return r},setClearColor:function(E,M=1){r.set(E),l=M,m(r,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,m(r,l)},render:v,addToRenderList:x}}function Mm(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=p(null);let o=i,a=!1;function r(b,U,G,H,Y){let Q=!1;const k=d(H,G,U);o!==k&&(o=k,c(o.object)),Q=f(b,H,G,Y),Q&&g(b,H,G,Y),Y!==null&&t.update(Y,s.ELEMENT_ARRAY_BUFFER),(Q||a)&&(a=!1,y(b,U,G,H),Y!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function l(){return s.createVertexArray()}function c(b){return s.bindVertexArray(b)}function h(b){return s.deleteVertexArray(b)}function d(b,U,G){const H=G.wireframe===!0;let Y=n[b.id];Y===void 0&&(Y={},n[b.id]=Y);let Q=Y[U.id];Q===void 0&&(Q={},Y[U.id]=Q);let k=Q[H];return k===void 0&&(k=p(l()),Q[H]=k),k}function p(b){const U=[],G=[],H=[];for(let Y=0;Y<e;Y++)U[Y]=0,G[Y]=0,H[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:G,attributeDivisors:H,object:b,attributes:{},index:null}}function f(b,U,G,H){const Y=o.attributes,Q=U.attributes;let k=0;const j=G.getAttributes();for(const X in j)if(j[X].location>=0){const rt=Y[X];let ct=Q[X];if(ct===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&(ct=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&(ct=b.instanceColor)),rt===void 0||rt.attribute!==ct||ct&&rt.data!==ct.data)return!0;k++}return o.attributesNum!==k||o.index!==H}function g(b,U,G,H){const Y={},Q=U.attributes;let k=0;const j=G.getAttributes();for(const X in j)if(j[X].location>=0){let rt=Q[X];rt===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&(rt=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&(rt=b.instanceColor));const ct={};ct.attribute=rt,rt&&rt.data&&(ct.data=rt.data),Y[X]=ct,k++}o.attributes=Y,o.attributesNum=k,o.index=H}function v(){const b=o.newAttributes;for(let U=0,G=b.length;U<G;U++)b[U]=0}function x(b){m(b,0)}function m(b,U){const G=o.newAttributes,H=o.enabledAttributes,Y=o.attributeDivisors;G[b]=1,H[b]===0&&(s.enableVertexAttribArray(b),H[b]=1),Y[b]!==U&&(s.vertexAttribDivisor(b,U),Y[b]=U)}function E(){const b=o.newAttributes,U=o.enabledAttributes;for(let G=0,H=U.length;G<H;G++)U[G]!==b[G]&&(s.disableVertexAttribArray(G),U[G]=0)}function M(b,U,G,H,Y,Q,k){k===!0?s.vertexAttribIPointer(b,U,G,Y,Q):s.vertexAttribPointer(b,U,G,H,Y,Q)}function y(b,U,G,H){v();const Y=H.attributes,Q=G.getAttributes(),k=U.defaultAttributeValues;for(const j in Q){const X=Q[j];if(X.location>=0){let ot=Y[j];if(ot===void 0&&(j==="instanceMatrix"&&b.instanceMatrix&&(ot=b.instanceMatrix),j==="instanceColor"&&b.instanceColor&&(ot=b.instanceColor)),ot!==void 0){const rt=ot.normalized,ct=ot.itemSize,Bt=t.get(ot);if(Bt===void 0)continue;const yt=Bt.buffer,q=Bt.type,$=Bt.bytesPerElement,_t=q===s.INT||q===s.UNSIGNED_INT||ot.gpuType===cl;if(ot.isInterleavedBufferAttribute){const pt=ot.data,Gt=pt.stride,Lt=ot.offset;if(pt.isInstancedInterleavedBuffer){for(let ae=0;ae<X.locationSize;ae++)m(X.location+ae,pt.meshPerAttribute);b.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let ae=0;ae<X.locationSize;ae++)x(X.location+ae);s.bindBuffer(s.ARRAY_BUFFER,yt);for(let ae=0;ae<X.locationSize;ae++)M(X.location+ae,ct/X.locationSize,q,rt,Gt*$,(Lt+ct/X.locationSize*ae)*$,_t)}else{if(ot.isInstancedBufferAttribute){for(let pt=0;pt<X.locationSize;pt++)m(X.location+pt,ot.meshPerAttribute);b.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let pt=0;pt<X.locationSize;pt++)x(X.location+pt);s.bindBuffer(s.ARRAY_BUFFER,yt);for(let pt=0;pt<X.locationSize;pt++)M(X.location+pt,ct/X.locationSize,q,rt,ct*$,ct/X.locationSize*pt*$,_t)}}else if(k!==void 0){const rt=k[j];if(rt!==void 0)switch(rt.length){case 2:s.vertexAttrib2fv(X.location,rt);break;case 3:s.vertexAttrib3fv(X.location,rt);break;case 4:s.vertexAttrib4fv(X.location,rt);break;default:s.vertexAttrib1fv(X.location,rt)}}}}E()}function I(){L();for(const b in n){const U=n[b];for(const G in U){const H=U[G];for(const Y in H)h(H[Y].object),delete H[Y];delete U[G]}delete n[b]}}function w(b){if(n[b.id]===void 0)return;const U=n[b.id];for(const G in U){const H=U[G];for(const Y in H)h(H[Y].object),delete H[Y];delete U[G]}delete n[b.id]}function R(b){for(const U in n){const G=n[U];if(G[b.id]===void 0)continue;const H=G[b.id];for(const Y in H)h(H[Y].object),delete H[Y];delete G[b.id]}}function L(){C(),a=!0,o!==i&&(o=i,c(o.object))}function C(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:r,reset:L,resetDefaultState:C,dispose:I,releaseStatesOfGeometry:w,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:x,disableUnusedAttributes:E}}function bm(s,t,e){let n;function i(c){n=c}function o(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,d){d!==0&&(s.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function r(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];e.update(f,n,1)}function l(c,h,d,p){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],p[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,p,0,d);let g=0;for(let v=0;v<d;v++)g+=h[v]*p[v];e.update(g,n,1)}}this.setMode=i,this.render=o,this.renderInstances=a,this.renderMultiDraw=r,this.renderMultiDrawInstances=l}function wm(s,t,e,n){let i;function o(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(R){return!(R!==ei&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function r(R){const L=R===Ro&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==yi&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==mi&&!L)}function l(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,p=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),E=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,w=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:r,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:p,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:x,maxAttributes:m,maxVertexUniforms:E,maxVaryings:M,maxFragmentUniforms:y,vertexTextures:I,maxSamples:w}}function Sm(s){const t=this;let e=null,n=0,i=!1,o=!1;const a=new Ki,r=new le,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){const f=d.length!==0||p||n!==0||i;return i=p,n=d.length,f},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,p){e=h(d,p,0)},this.setState=function(d,p,f){const g=d.clippingPlanes,v=d.clipIntersection,x=d.clipShadows,m=s.get(d);if(!i||g===null||g.length===0||o&&!x)o?h(null):c();else{const E=o?0:n,M=E*4;let y=m.clippingState||null;l.value=y,y=h(g,p,M,f);for(let I=0;I!==M;++I)y[I]=e[I];m.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,p,f,g){const v=d!==null?d.length:0;let x=null;if(v!==0){if(x=l.value,g!==!0||x===null){const m=f+v*4,E=p.matrixWorldInverse;r.getNormalMatrix(E),(x===null||x.length<m)&&(x=new Float32Array(m));for(let M=0,y=f;M!==v;++M,y+=4)a.copy(d[M]).applyMatrix4(E,r),a.normal.toArray(x,y),x[y+3]=a.constant}l.value=x,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,x}}function Tm(s){let t=new WeakMap;function e(a,r){return r===Sr?a.mapping=Gs:r===Tr&&(a.mapping=Hs),a}function n(a){if(a&&a.isTexture){const r=a.mapping;if(r===Sr||r===Tr)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Nd(l.height);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const r=a.target;r.removeEventListener("dispose",i);const l=t.get(r);l!==void 0&&(t.delete(r),l.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}class Hh extends kh{constructor(t=-1,e=1,n=1,i=-1,o=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=o,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,o,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let o=n-t,a=n+t,r=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,a=o+c*this.view.width,r-=h*this.view.offsetY,l=r-h*this.view.height}this.projectionMatrix.makeOrthographic(o,a,r,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Fs=4,sc=[.125,.215,.35,.446,.526,.582],Ji=20,ja=new Hh,oc=new jt;let Ja=null,$a=0,Za=0,Qa=!1;const qi=(1+Math.sqrt(5))/2,ws=1/qi,ac=[new A(-qi,ws,0),new A(qi,ws,0),new A(-ws,0,qi),new A(ws,0,qi),new A(0,qi,-ws),new A(0,qi,ws),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)];class rc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Ja=this._renderer.getRenderTarget(),$a=this._renderer.getActiveCubeFace(),Za=this._renderer.getActiveMipmapLevel(),Qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,i,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ja,$a,Za),this._renderer.xr.enabled=Qa,t.scissorTest=!1,Qo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Gs||t.mapping===Hs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ja=this._renderer.getRenderTarget(),$a=this._renderer.getActiveCubeFace(),Za=this._renderer.getActiveMipmapLevel(),Qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ti,minFilter:ti,generateMipmaps:!1,type:Ro,format:ei,colorSpace:Ys,depthBuffer:!1},i=lc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lc(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Em(o)),this._blurMaterial=Cm(o,t,e)}return i}_compileMaterial(t){const e=new D(this._lodPlanes[0],t);this._renderer.compile(e,ja)}_sceneToCubeUV(t,e,n,i){const r=new kn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(oc),h.toneMapping=xi,h.autoClear=!1;const f=new Et({name:"PMREM.Background",side:An,depthWrite:!1,depthTest:!1}),g=new D(new dt,f);let v=!1;const x=t.background;x?x.isColor&&(f.color.copy(x),t.background=null,v=!0):(f.color.copy(oc),v=!0);for(let m=0;m<6;m++){const E=m%3;E===0?(r.up.set(0,l[m],0),r.lookAt(c[m],0,0)):E===1?(r.up.set(0,0,l[m]),r.lookAt(0,c[m],0)):(r.up.set(0,l[m],0),r.lookAt(0,0,c[m]));const M=this._cubeSize;Qo(i,E*M,m>2?M:0,M,M),h.setRenderTarget(i),v&&h.render(g,r),h.render(t,r)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=p,h.autoClear=d,t.background=x}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Gs||t.mapping===Hs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=hc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cc());const o=i?this._cubemapMaterial:this._equirectMaterial,a=new D(this._lodPlanes[0],o),r=o.uniforms;r.envMap.value=t;const l=this._cubeSize;Qo(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,ja)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let o=1;o<i;o++){const a=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),r=ac[(i-o-1)%ac.length];this._blur(t,o-1,o,a,r)}e.autoClear=n}_blur(t,e,n,i,o){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",o),this._halfBlur(a,t,n,n,i,"longitudinal",o)}_halfBlur(t,e,n,i,o,a,r){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new D(this._lodPlanes[i],c),p=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(o)?Math.PI/(2*f):2*Math.PI/(2*Ji-1),v=o/g,x=isFinite(o)?1+Math.floor(h*v):Ji;x>Ji&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Ji}`);const m=[];let E=0;for(let R=0;R<Ji;++R){const L=R/v,C=Math.exp(-L*L/2);m.push(C),R===0?E+=C:R<x&&(E+=2*C)}for(let R=0;R<m.length;R++)m[R]=m[R]/E;p.envMap.value=t.texture,p.samples.value=x,p.weights.value=m,p.latitudinal.value=a==="latitudinal",r&&(p.poleAxis.value=r);const{_lodMax:M}=this;p.dTheta.value=g,p.mipInt.value=M-n;const y=this._sizeLods[i],I=3*y*(i>M-Fs?i-M+Fs:0),w=4*(this._cubeSize-y);Qo(e,I,w,3*y,2*y),l.setRenderTarget(e),l.render(d,ja)}}function Em(s){const t=[],e=[],n=[];let i=s;const o=s-Fs+1+sc.length;for(let a=0;a<o;a++){const r=Math.pow(2,i);e.push(r);let l=1/r;a>s-Fs?l=sc[a-s+Fs-1]:a===0&&(l=0),n.push(l);const c=1/(r-2),h=-c,d=1+c,p=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,v=3,x=2,m=1,E=new Float32Array(v*g*f),M=new Float32Array(x*g*f),y=new Float32Array(m*g*f);for(let w=0;w<f;w++){const R=w%3*2/3-1,L=w>2?0:-1,C=[R,L,0,R+2/3,L,0,R+2/3,L+1,0,R,L,0,R+2/3,L+1,0,R,L+1,0];E.set(C,v*g*w),M.set(p,x*g*w);const b=[w,w,w,w,w,w];y.set(b,m*g*w)}const I=new bn;I.setAttribute("position",new Mn(E,v)),I.setAttribute("uv",new Mn(M,x)),I.setAttribute("faceIndex",new Mn(y,m)),t.push(I),i>Fs&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function lc(s,t,e){const n=new ss(s,t,e);return n.texture.mapping=Ma,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qo(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Cm(s,t,e){const n=new Float32Array(Ji),i=new A(0,1,0);return new zi({name:"SphericalGaussianBlur",defines:{n:Ji,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:yl(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function cc(){return new zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yl(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function hc(){return new zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function yl(){return`

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
	`}function Am(s){let t=new WeakMap,e=null;function n(r){if(r&&r.isTexture){const l=r.mapping,c=l===Sr||l===Tr,h=l===Gs||l===Hs;if(c||h){let d=t.get(r);const p=d!==void 0?d.texture.pmremVersion:0;if(r.isRenderTargetTexture&&r.pmremVersion!==p)return e===null&&(e=new rc(s)),d=c?e.fromEquirectangular(r,d):e.fromCubemap(r,d),d.texture.pmremVersion=r.pmremVersion,t.set(r,d),d.texture;if(d!==void 0)return d.texture;{const f=r.image;return c&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new rc(s)),d=c?e.fromEquirectangular(r):e.fromCubemap(r),d.texture.pmremVersion=r.pmremVersion,t.set(r,d),r.addEventListener("dispose",o),d.texture):null}}}return r}function i(r){let l=0;const c=6;for(let h=0;h<c;h++)r[h]!==void 0&&l++;return l===c}function o(r){const l=r.target;l.removeEventListener("dispose",o);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Rm(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&go("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Pm(s,t,e,n){const i={},o=new WeakMap;function a(d){const p=d.target;p.index!==null&&t.remove(p.index);for(const g in p.attributes)t.remove(p.attributes[g]);for(const g in p.morphAttributes){const v=p.morphAttributes[g];for(let x=0,m=v.length;x<m;x++)t.remove(v[x])}p.removeEventListener("dispose",a),delete i[p.id];const f=o.get(p);f&&(t.remove(f),o.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function r(d,p){return i[p.id]===!0||(p.addEventListener("dispose",a),i[p.id]=!0,e.memory.geometries++),p}function l(d){const p=d.attributes;for(const g in p)t.update(p[g],s.ARRAY_BUFFER);const f=d.morphAttributes;for(const g in f){const v=f[g];for(let x=0,m=v.length;x<m;x++)t.update(v[x],s.ARRAY_BUFFER)}}function c(d){const p=[],f=d.index,g=d.attributes.position;let v=0;if(f!==null){const E=f.array;v=f.version;for(let M=0,y=E.length;M<y;M+=3){const I=E[M+0],w=E[M+1],R=E[M+2];p.push(I,w,w,R,R,I)}}else if(g!==void 0){const E=g.array;v=g.version;for(let M=0,y=E.length/3-1;M<y;M+=3){const I=M+0,w=M+1,R=M+2;p.push(I,w,w,R,R,I)}}else return;const x=new(Dh(p)?Oh:Fh)(p,1);x.version=v;const m=o.get(d);m&&t.remove(m),o.set(d,x)}function h(d){const p=o.get(d);if(p){const f=d.index;f!==null&&p.version<f.version&&c(d)}else c(d);return o.get(d)}return{get:r,update:l,getWireframeAttribute:h}}function Dm(s,t,e){let n;function i(p){n=p}let o,a;function r(p){o=p.type,a=p.bytesPerElement}function l(p,f){s.drawElements(n,f,o,p*a),e.update(f,n,1)}function c(p,f,g){g!==0&&(s.drawElementsInstanced(n,f,o,p*a,g),e.update(f,n,g))}function h(p,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,o,p,0,g);let x=0;for(let m=0;m<g;m++)x+=f[m];e.update(x,n,1)}function d(p,f,g,v){if(g===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let m=0;m<p.length;m++)c(p[m]/a,f[m],v[m]);else{x.multiDrawElementsInstancedWEBGL(n,f,0,o,p,0,v,0,g);let m=0;for(let E=0;E<g;E++)m+=f[E]*v[E];e.update(m,n,1)}}this.setMode=i,this.setIndex=r,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Lm(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,a,r){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=r*(o/3);break;case s.LINES:e.lines+=r*(o/2);break;case s.LINE_STRIP:e.lines+=r*(o-1);break;case s.LINE_LOOP:e.lines+=r*o;break;case s.POINTS:e.points+=r*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Im(s,t,e){const n=new WeakMap,i=new Le;function o(a,r,l){const c=a.morphTargetInfluences,h=r.morphAttributes.position||r.morphAttributes.normal||r.morphAttributes.color,d=h!==void 0?h.length:0;let p=n.get(r);if(p===void 0||p.count!==d){let C=function(){R.dispose(),n.delete(r),r.removeEventListener("dispose",C)};p!==void 0&&p.texture.dispose();const f=r.morphAttributes.position!==void 0,g=r.morphAttributes.normal!==void 0,v=r.morphAttributes.color!==void 0,x=r.morphAttributes.position||[],m=r.morphAttributes.normal||[],E=r.morphAttributes.color||[];let M=0;f===!0&&(M=1),g===!0&&(M=2),v===!0&&(M=3);let y=r.attributes.position.count*M,I=1;y>t.maxTextureSize&&(I=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const w=new Float32Array(y*I*4*d),R=new Ih(w,y,I,d);R.type=mi,R.needsUpdate=!0;const L=M*4;for(let b=0;b<d;b++){const U=x[b],G=m[b],H=E[b],Y=y*I*4*b;for(let Q=0;Q<U.count;Q++){const k=Q*L;f===!0&&(i.fromBufferAttribute(U,Q),w[Y+k+0]=i.x,w[Y+k+1]=i.y,w[Y+k+2]=i.z,w[Y+k+3]=0),g===!0&&(i.fromBufferAttribute(G,Q),w[Y+k+4]=i.x,w[Y+k+5]=i.y,w[Y+k+6]=i.z,w[Y+k+7]=0),v===!0&&(i.fromBufferAttribute(H,Q),w[Y+k+8]=i.x,w[Y+k+9]=i.y,w[Y+k+10]=i.z,w[Y+k+11]=H.itemSize===4?i.w:1)}}p={count:d,texture:R,size:new St(y,I)},n.set(r,p),r.addEventListener("dispose",C)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];const g=r.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",p.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",p.size)}return{update:o}}function Um(s,t,e,n){let i=new WeakMap;function o(l){const c=n.render.frame,h=l.geometry,d=t.get(l,h);if(i.get(d)!==c&&(t.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",r)===!1&&l.addEventListener("dispose",r),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;i.get(p)!==c&&(p.update(),i.set(p,c))}return d}function a(){i=new WeakMap}function r(l){const c=l.target;c.removeEventListener("dispose",r),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:o,dispose:a}}class Vh extends yn{constructor(t,e,n,i,o,a,r,l,c,h=zs){if(h!==zs&&h!==Ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===zs&&(n=is),n===void 0&&h===Ws&&(n=Vs),super(null,i,o,a,r,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=r!==void 0?r:Bn,this.minFilter=l!==void 0?l:Bn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Wh=new yn,uc=new Vh(1,1),Xh=new Ih,Yh=new _d,Kh=new Bh,dc=[],pc=[],fc=new Float32Array(16),mc=new Float32Array(9),gc=new Float32Array(4);function Js(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let o=dc[i];if(o===void 0&&(o=new Float32Array(i),dc[i]=o),t!==0){n.toArray(o,0);for(let a=1,r=0;a!==t;++a)r+=e,s[a].toArray(o,r)}return o}function tn(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function en(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function wa(s,t){let e=pc[t];e===void 0&&(e=new Int32Array(t),pc[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Nm(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Fm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;s.uniform2fv(this.addr,t),en(e,t)}}function Om(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(tn(e,t))return;s.uniform3fv(this.addr,t),en(e,t)}}function zm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;s.uniform4fv(this.addr,t),en(e,t)}}function km(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(tn(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),en(e,t)}else{if(tn(e,n))return;gc.set(n),s.uniformMatrix2fv(this.addr,!1,gc),en(e,n)}}function Bm(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(tn(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),en(e,t)}else{if(tn(e,n))return;mc.set(n),s.uniformMatrix3fv(this.addr,!1,mc),en(e,n)}}function Gm(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(tn(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),en(e,t)}else{if(tn(e,n))return;fc.set(n),s.uniformMatrix4fv(this.addr,!1,fc),en(e,n)}}function Hm(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Vm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;s.uniform2iv(this.addr,t),en(e,t)}}function Wm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(tn(e,t))return;s.uniform3iv(this.addr,t),en(e,t)}}function Xm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;s.uniform4iv(this.addr,t),en(e,t)}}function Ym(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Km(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;s.uniform2uiv(this.addr,t),en(e,t)}}function qm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(tn(e,t))return;s.uniform3uiv(this.addr,t),en(e,t)}}function jm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;s.uniform4uiv(this.addr,t),en(e,t)}}function Jm(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let o;this.type===s.SAMPLER_2D_SHADOW?(uc.compareFunction=Ph,o=uc):o=Wh,e.setTexture2D(t||o,i)}function $m(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Yh,i)}function Zm(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Kh,i)}function Qm(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Xh,i)}function t0(s){switch(s){case 5126:return Nm;case 35664:return Fm;case 35665:return Om;case 35666:return zm;case 35674:return km;case 35675:return Bm;case 35676:return Gm;case 5124:case 35670:return Hm;case 35667:case 35671:return Vm;case 35668:case 35672:return Wm;case 35669:case 35673:return Xm;case 5125:return Ym;case 36294:return Km;case 36295:return qm;case 36296:return jm;case 35678:case 36198:case 36298:case 36306:case 35682:return Jm;case 35679:case 36299:case 36307:return $m;case 35680:case 36300:case 36308:case 36293:return Zm;case 36289:case 36303:case 36311:case 36292:return Qm}}function e0(s,t){s.uniform1fv(this.addr,t)}function n0(s,t){const e=Js(t,this.size,2);s.uniform2fv(this.addr,e)}function i0(s,t){const e=Js(t,this.size,3);s.uniform3fv(this.addr,e)}function s0(s,t){const e=Js(t,this.size,4);s.uniform4fv(this.addr,e)}function o0(s,t){const e=Js(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function a0(s,t){const e=Js(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function r0(s,t){const e=Js(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function l0(s,t){s.uniform1iv(this.addr,t)}function c0(s,t){s.uniform2iv(this.addr,t)}function h0(s,t){s.uniform3iv(this.addr,t)}function u0(s,t){s.uniform4iv(this.addr,t)}function d0(s,t){s.uniform1uiv(this.addr,t)}function p0(s,t){s.uniform2uiv(this.addr,t)}function f0(s,t){s.uniform3uiv(this.addr,t)}function m0(s,t){s.uniform4uiv(this.addr,t)}function g0(s,t,e){const n=this.cache,i=t.length,o=wa(e,i);tn(n,o)||(s.uniform1iv(this.addr,o),en(n,o));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||Wh,o[a])}function x0(s,t,e){const n=this.cache,i=t.length,o=wa(e,i);tn(n,o)||(s.uniform1iv(this.addr,o),en(n,o));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Yh,o[a])}function v0(s,t,e){const n=this.cache,i=t.length,o=wa(e,i);tn(n,o)||(s.uniform1iv(this.addr,o),en(n,o));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Kh,o[a])}function _0(s,t,e){const n=this.cache,i=t.length,o=wa(e,i);tn(n,o)||(s.uniform1iv(this.addr,o),en(n,o));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Xh,o[a])}function y0(s){switch(s){case 5126:return e0;case 35664:return n0;case 35665:return i0;case 35666:return s0;case 35674:return o0;case 35675:return a0;case 35676:return r0;case 5124:case 35670:return l0;case 35667:case 35671:return c0;case 35668:case 35672:return h0;case 35669:case 35673:return u0;case 5125:return d0;case 36294:return p0;case 36295:return f0;case 36296:return m0;case 35678:case 36198:case 36298:case 36306:case 35682:return g0;case 35679:case 36299:case 36307:return x0;case 35680:case 36300:case 36308:case 36293:return v0;case 36289:case 36303:case 36311:case 36292:return _0}}class M0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=t0(e.type)}}class b0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=y0(e.type)}}class w0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let o=0,a=i.length;o!==a;++o){const r=i[o];r.setValue(t,e[r.id],n)}}}const tr=/(\w+)(\])?(\[|\.)?/g;function xc(s,t){s.seq.push(t),s.map[t.id]=t}function S0(s,t,e){const n=s.name,i=n.length;for(tr.lastIndex=0;;){const o=tr.exec(n),a=tr.lastIndex;let r=o[1];const l=o[2]==="]",c=o[3];if(l&&(r=r|0),c===void 0||c==="["&&a+2===i){xc(e,c===void 0?new M0(r,s,t):new b0(r,s,t));break}else{let d=e.map[r];d===void 0&&(d=new w0(r),xc(e,d)),e=d}}}class ma{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const o=t.getActiveUniform(e,i),a=t.getUniformLocation(e,o.name);S0(o,a,this)}}setValue(t,e,n,i){const o=this.map[e];o!==void 0&&o.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let o=0,a=e.length;o!==a;++o){const r=e[o],l=n[r.id];l.needsUpdate!==!1&&r.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,o=t.length;i!==o;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function vc(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const T0=37297;let E0=0;function C0(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let a=i;a<o;a++){const r=a+1;n.push(`${r===t?">":" "} ${r}: ${e[a]}`)}return n.join(`
`)}const _c=new le;function A0(s){ye._getMatrix(_c,ye.workingColorSpace,s);const t=`mat3( ${_c.elements.map(e=>e.toFixed(4))} )`;switch(ye.getTransfer(s)){case ba:return[t,"LinearTransferOETF"];case De:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function yc(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const o=/ERROR: 0:(\d+)/.exec(i);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+i+`

`+C0(s.getShaderSource(t),a)}else return i}function R0(s,t){const e=A0(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function P0(s,t){let e;switch(t){case Du:e="Linear";break;case Lu:e="Reinhard";break;case Iu:e="Cineon";break;case Uu:e="ACESFilmic";break;case Fu:e="AgX";break;case Ou:e="Neutral";break;case Nu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ta=new A;function D0(){ye.getLuminanceCoefficients(ta);const s=ta.x.toFixed(4),t=ta.y.toFixed(4),e=ta.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function L0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xo).join(`
`)}function I0(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function U0(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const o=s.getActiveAttrib(t,i),a=o.name;let r=1;o.type===s.FLOAT_MAT2&&(r=2),o.type===s.FLOAT_MAT3&&(r=3),o.type===s.FLOAT_MAT4&&(r=4),e[a]={type:o.type,location:s.getAttribLocation(t,a),locationSize:r}}return e}function xo(s){return s!==""}function Mc(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function bc(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const N0=/^[ \t]*#include +<([\w\d./]+)>/gm;function tl(s){return s.replace(N0,O0)}const F0=new Map;function O0(s,t){let e=ce[t];if(e===void 0){const n=F0.get(t);if(n!==void 0)e=ce[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return tl(e)}const z0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wc(s){return s.replace(z0,k0)}function k0(s,t,e,n){let i="";for(let o=parseInt(t);o<parseInt(e);o++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return i}function Sc(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function B0(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===vh?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===hu?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===fi&&(t="SHADOWMAP_TYPE_VSM"),t}function G0(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Gs:case Hs:t="ENVMAP_TYPE_CUBE";break;case Ma:t="ENVMAP_TYPE_CUBE_UV";break}return t}function H0(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Hs:t="ENVMAP_MODE_REFRACTION";break}return t}function V0(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ya:t="ENVMAP_BLENDING_MULTIPLY";break;case Ru:t="ENVMAP_BLENDING_MIX";break;case Pu:t="ENVMAP_BLENDING_ADD";break}return t}function W0(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function X0(s,t,e,n){const i=s.getContext(),o=e.defines;let a=e.vertexShader,r=e.fragmentShader;const l=B0(e),c=G0(e),h=H0(e),d=V0(e),p=W0(e),f=L0(e),g=I0(o),v=i.createProgram();let x,m,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(xo).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(xo).join(`
`),m.length>0&&(m+=`
`)):(x=[Sc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xo).join(`
`),m=[Sc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==xi?"#define TONE_MAPPING":"",e.toneMapping!==xi?ce.tonemapping_pars_fragment:"",e.toneMapping!==xi?P0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,R0("linearToOutputTexel",e.outputColorSpace),D0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(xo).join(`
`)),a=tl(a),a=Mc(a,e),a=bc(a,e),r=tl(r),r=Mc(r,e),r=bc(r,e),a=wc(a),r=wc(r),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,x=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",e.glslVersion===Fl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Fl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const M=E+x+a,y=E+m+r,I=vc(i,i.VERTEX_SHADER,M),w=vc(i,i.FRAGMENT_SHADER,y);i.attachShader(v,I),i.attachShader(v,w),e.index0AttributeName!==void 0?i.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function R(U){if(s.debug.checkShaderErrors){const G=i.getProgramInfoLog(v).trim(),H=i.getShaderInfoLog(I).trim(),Y=i.getShaderInfoLog(w).trim();let Q=!0,k=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(Q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,I,w);else{const j=yc(i,I,"vertex"),X=yc(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+G+`
`+j+`
`+X)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(H===""||Y==="")&&(k=!1);k&&(U.diagnostics={runnable:Q,programLog:G,vertexShader:{log:H,prefix:x},fragmentShader:{log:Y,prefix:m}})}i.deleteShader(I),i.deleteShader(w),L=new ma(i,v),C=U0(i,v)}let L;this.getUniforms=function(){return L===void 0&&R(this),L};let C;this.getAttributes=function(){return C===void 0&&R(this),C};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=i.getProgramParameter(v,T0)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=E0++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=I,this.fragmentShader=w,this}let Y0=0;class K0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),o=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(o)===!1&&(a.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new q0(t),e.set(t,n)),n}}class q0{constructor(t){this.id=Y0++,this.code=t,this.usedTimes=0}}function j0(s,t,e,n,i,o,a){const r=new vl,l=new K0,c=new Set,h=[],d=i.logarithmicDepthBuffer,p=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(C){return c.add(C),C===0?"uv":`uv${C}`}function x(C,b,U,G,H){const Y=G.fog,Q=H.geometry,k=C.isMeshStandardMaterial?G.environment:null,j=(C.isMeshStandardMaterial?e:t).get(C.envMap||k),X=j&&j.mapping===Ma?j.image.height:null,ot=g[C.type];C.precision!==null&&(f=i.getMaxPrecision(C.precision),f!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",f,"instead."));const rt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,ct=rt!==void 0?rt.length:0;let Bt=0;Q.morphAttributes.position!==void 0&&(Bt=1),Q.morphAttributes.normal!==void 0&&(Bt=2),Q.morphAttributes.color!==void 0&&(Bt=3);let yt,q,$,_t;if(ot){const Me=ai[ot];yt=Me.vertexShader,q=Me.fragmentShader}else yt=C.vertexShader,q=C.fragmentShader,l.update(C),$=l.getVertexShaderID(C),_t=l.getFragmentShaderID(C);const pt=s.getRenderTarget(),Gt=s.state.buffers.depth.getReversed(),Lt=H.isInstancedMesh===!0,ae=H.isBatchedMesh===!0,Ae=!!C.map,Kt=!!C.matcap,ke=!!j,z=!!C.aoMap,Ke=!!C.lightMap,de=!!C.bumpMap,pe=!!C.normalMap,Ot=!!C.displacementMap,Re=!!C.emissiveMap,Dt=!!C.metalnessMap,P=!!C.roughnessMap,S=C.anisotropy>0,V=C.clearcoat>0,Z=C.dispersion>0,tt=C.iridescence>0,J=C.sheen>0,Ct=C.transmission>0,ft=S&&!!C.anisotropyMap,Mt=V&&!!C.clearcoatMap,ue=V&&!!C.clearcoatNormalMap,nt=V&&!!C.clearcoatRoughnessMap,wt=tt&&!!C.iridescenceMap,zt=tt&&!!C.iridescenceThicknessMap,Yt=J&&!!C.sheenColorMap,bt=J&&!!C.sheenRoughnessMap,he=!!C.specularMap,Jt=!!C.specularColorMap,me=!!C.specularIntensityMap,F=Ct&&!!C.transmissionMap,ht=Ct&&!!C.thicknessMap,K=!!C.gradientMap,et=!!C.alphaMap,xt=C.alphaTest>0,mt=!!C.alphaHash,$t=!!C.extensions;let ge=xi;C.toneMapped&&(pt===null||pt.isXRRenderTarget===!0)&&(ge=s.toneMapping);const $e={shaderID:ot,shaderType:C.type,shaderName:C.name,vertexShader:yt,fragmentShader:q,defines:C.defines,customVertexShaderID:$,customFragmentShaderID:_t,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:f,batching:ae,batchingColor:ae&&H._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&H.instanceColor!==null,instancingMorph:Lt&&H.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:pt===null?s.outputColorSpace:pt.isXRRenderTarget===!0?pt.texture.colorSpace:Ys,alphaToCoverage:!!C.alphaToCoverage,map:Ae,matcap:Kt,envMap:ke,envMapMode:ke&&j.mapping,envMapCubeUVHeight:X,aoMap:z,lightMap:Ke,bumpMap:de,normalMap:pe,displacementMap:p&&Ot,emissiveMap:Re,normalMapObjectSpace:pe&&C.normalMapType===Gu,normalMapTangentSpace:pe&&C.normalMapType===ml,metalnessMap:Dt,roughnessMap:P,anisotropy:S,anisotropyMap:ft,clearcoat:V,clearcoatMap:Mt,clearcoatNormalMap:ue,clearcoatRoughnessMap:nt,dispersion:Z,iridescence:tt,iridescenceMap:wt,iridescenceThicknessMap:zt,sheen:J,sheenColorMap:Yt,sheenRoughnessMap:bt,specularMap:he,specularColorMap:Jt,specularIntensityMap:me,transmission:Ct,transmissionMap:F,thicknessMap:ht,gradientMap:K,opaque:C.transparent===!1&&C.blending===Os&&C.alphaToCoverage===!1,alphaMap:et,alphaTest:xt,alphaHash:mt,combine:C.combine,mapUv:Ae&&v(C.map.channel),aoMapUv:z&&v(C.aoMap.channel),lightMapUv:Ke&&v(C.lightMap.channel),bumpMapUv:de&&v(C.bumpMap.channel),normalMapUv:pe&&v(C.normalMap.channel),displacementMapUv:Ot&&v(C.displacementMap.channel),emissiveMapUv:Re&&v(C.emissiveMap.channel),metalnessMapUv:Dt&&v(C.metalnessMap.channel),roughnessMapUv:P&&v(C.roughnessMap.channel),anisotropyMapUv:ft&&v(C.anisotropyMap.channel),clearcoatMapUv:Mt&&v(C.clearcoatMap.channel),clearcoatNormalMapUv:ue&&v(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&v(C.clearcoatRoughnessMap.channel),iridescenceMapUv:wt&&v(C.iridescenceMap.channel),iridescenceThicknessMapUv:zt&&v(C.iridescenceThicknessMap.channel),sheenColorMapUv:Yt&&v(C.sheenColorMap.channel),sheenRoughnessMapUv:bt&&v(C.sheenRoughnessMap.channel),specularMapUv:he&&v(C.specularMap.channel),specularColorMapUv:Jt&&v(C.specularColorMap.channel),specularIntensityMapUv:me&&v(C.specularIntensityMap.channel),transmissionMapUv:F&&v(C.transmissionMap.channel),thicknessMapUv:ht&&v(C.thicknessMap.channel),alphaMapUv:et&&v(C.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(pe||S),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!Q.attributes.uv&&(Ae||et),fog:!!Y,useFog:C.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Gt,skinning:H.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:ct,morphTextureStride:Bt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:C.dithering,shadowMapEnabled:s.shadowMap.enabled&&U.length>0,shadowMapType:s.shadowMap.type,toneMapping:ge,decodeVideoTexture:Ae&&C.map.isVideoTexture===!0&&ye.getTransfer(C.map.colorSpace)===De,decodeVideoTextureEmissive:Re&&C.emissiveMap.isVideoTexture===!0&&ye.getTransfer(C.emissiveMap.colorSpace)===De,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===cn,flipSided:C.side===An,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:$t&&C.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($t&&C.extensions.multiDraw===!0||ae)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return $e.vertexUv1s=c.has(1),$e.vertexUv2s=c.has(2),$e.vertexUv3s=c.has(3),c.clear(),$e}function m(C){const b=[];if(C.shaderID?b.push(C.shaderID):(b.push(C.customVertexShaderID),b.push(C.customFragmentShaderID)),C.defines!==void 0)for(const U in C.defines)b.push(U),b.push(C.defines[U]);return C.isRawShaderMaterial===!1&&(E(b,C),M(b,C),b.push(s.outputColorSpace)),b.push(C.customProgramCacheKey),b.join()}function E(C,b){C.push(b.precision),C.push(b.outputColorSpace),C.push(b.envMapMode),C.push(b.envMapCubeUVHeight),C.push(b.mapUv),C.push(b.alphaMapUv),C.push(b.lightMapUv),C.push(b.aoMapUv),C.push(b.bumpMapUv),C.push(b.normalMapUv),C.push(b.displacementMapUv),C.push(b.emissiveMapUv),C.push(b.metalnessMapUv),C.push(b.roughnessMapUv),C.push(b.anisotropyMapUv),C.push(b.clearcoatMapUv),C.push(b.clearcoatNormalMapUv),C.push(b.clearcoatRoughnessMapUv),C.push(b.iridescenceMapUv),C.push(b.iridescenceThicknessMapUv),C.push(b.sheenColorMapUv),C.push(b.sheenRoughnessMapUv),C.push(b.specularMapUv),C.push(b.specularColorMapUv),C.push(b.specularIntensityMapUv),C.push(b.transmissionMapUv),C.push(b.thicknessMapUv),C.push(b.combine),C.push(b.fogExp2),C.push(b.sizeAttenuation),C.push(b.morphTargetsCount),C.push(b.morphAttributeCount),C.push(b.numDirLights),C.push(b.numPointLights),C.push(b.numSpotLights),C.push(b.numSpotLightMaps),C.push(b.numHemiLights),C.push(b.numRectAreaLights),C.push(b.numDirLightShadows),C.push(b.numPointLightShadows),C.push(b.numSpotLightShadows),C.push(b.numSpotLightShadowsWithMaps),C.push(b.numLightProbes),C.push(b.shadowMapType),C.push(b.toneMapping),C.push(b.numClippingPlanes),C.push(b.numClipIntersection),C.push(b.depthPacking)}function M(C,b){r.disableAll(),b.supportsVertexTextures&&r.enable(0),b.instancing&&r.enable(1),b.instancingColor&&r.enable(2),b.instancingMorph&&r.enable(3),b.matcap&&r.enable(4),b.envMap&&r.enable(5),b.normalMapObjectSpace&&r.enable(6),b.normalMapTangentSpace&&r.enable(7),b.clearcoat&&r.enable(8),b.iridescence&&r.enable(9),b.alphaTest&&r.enable(10),b.vertexColors&&r.enable(11),b.vertexAlphas&&r.enable(12),b.vertexUv1s&&r.enable(13),b.vertexUv2s&&r.enable(14),b.vertexUv3s&&r.enable(15),b.vertexTangents&&r.enable(16),b.anisotropy&&r.enable(17),b.alphaHash&&r.enable(18),b.batching&&r.enable(19),b.dispersion&&r.enable(20),b.batchingColor&&r.enable(21),C.push(r.mask),r.disableAll(),b.fog&&r.enable(0),b.useFog&&r.enable(1),b.flatShading&&r.enable(2),b.logarithmicDepthBuffer&&r.enable(3),b.reverseDepthBuffer&&r.enable(4),b.skinning&&r.enable(5),b.morphTargets&&r.enable(6),b.morphNormals&&r.enable(7),b.morphColors&&r.enable(8),b.premultipliedAlpha&&r.enable(9),b.shadowMapEnabled&&r.enable(10),b.doubleSided&&r.enable(11),b.flipSided&&r.enable(12),b.useDepthPacking&&r.enable(13),b.dithering&&r.enable(14),b.transmission&&r.enable(15),b.sheen&&r.enable(16),b.opaque&&r.enable(17),b.pointsUvs&&r.enable(18),b.decodeVideoTexture&&r.enable(19),b.decodeVideoTextureEmissive&&r.enable(20),b.alphaToCoverage&&r.enable(21),C.push(r.mask)}function y(C){const b=g[C.type];let U;if(b){const G=ai[b];U=Dd.clone(G.uniforms)}else U=C.uniforms;return U}function I(C,b){let U;for(let G=0,H=h.length;G<H;G++){const Y=h[G];if(Y.cacheKey===b){U=Y,++U.usedTimes;break}}return U===void 0&&(U=new X0(s,b,C,o),h.push(U)),U}function w(C){if(--C.usedTimes===0){const b=h.indexOf(C);h[b]=h[h.length-1],h.pop(),C.destroy()}}function R(C){l.remove(C)}function L(){l.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:y,acquireProgram:I,releaseProgram:w,releaseShaderCache:R,programs:h,dispose:L}}function J0(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let r=s.get(a);return r===void 0&&(r={},s.set(a,r)),r}function n(a){s.delete(a)}function i(a,r,l){s.get(a)[r]=l}function o(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:o}}function $0(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Tc(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Ec(){const s=[];let t=0;const e=[],n=[],i=[];function o(){t=0,e.length=0,n.length=0,i.length=0}function a(d,p,f,g,v,x){let m=s[t];return m===void 0?(m={id:d.id,object:d,geometry:p,material:f,groupOrder:g,renderOrder:d.renderOrder,z:v,group:x},s[t]=m):(m.id=d.id,m.object=d,m.geometry=p,m.material=f,m.groupOrder=g,m.renderOrder=d.renderOrder,m.z=v,m.group=x),t++,m}function r(d,p,f,g,v,x){const m=a(d,p,f,g,v,x);f.transmission>0?n.push(m):f.transparent===!0?i.push(m):e.push(m)}function l(d,p,f,g,v,x){const m=a(d,p,f,g,v,x);f.transmission>0?n.unshift(m):f.transparent===!0?i.unshift(m):e.unshift(m)}function c(d,p){e.length>1&&e.sort(d||$0),n.length>1&&n.sort(p||Tc),i.length>1&&i.sort(p||Tc)}function h(){for(let d=t,p=s.length;d<p;d++){const f=s[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:o,push:r,unshift:l,finish:h,sort:c}}function Z0(){let s=new WeakMap;function t(n,i){const o=s.get(n);let a;return o===void 0?(a=new Ec,s.set(n,[a])):i>=o.length?(a=new Ec,o.push(a)):a=o[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function Q0(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new A,color:new jt};break;case"SpotLight":e={position:new A,direction:new A,color:new jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new jt,groundColor:new jt};break;case"RectAreaLight":e={color:new jt,position:new A,halfWidth:new A,halfHeight:new A};break}return s[t.id]=e,e}}}function tg(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let eg=0;function ng(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function ig(s){const t=new Q0,e=tg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new A);const i=new A,o=new ze,a=new ze;function r(c){let h=0,d=0,p=0;for(let C=0;C<9;C++)n.probe[C].set(0,0,0);let f=0,g=0,v=0,x=0,m=0,E=0,M=0,y=0,I=0,w=0,R=0;c.sort(ng);for(let C=0,b=c.length;C<b;C++){const U=c[C],G=U.color,H=U.intensity,Y=U.distance,Q=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=G.r*H,d+=G.g*H,p+=G.b*H;else if(U.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(U.sh.coefficients[k],H);R++}else if(U.isDirectionalLight){const k=t.get(U);if(k.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const j=U.shadow,X=e.get(U);X.shadowIntensity=j.intensity,X.shadowBias=j.bias,X.shadowNormalBias=j.normalBias,X.shadowRadius=j.radius,X.shadowMapSize=j.mapSize,n.directionalShadow[f]=X,n.directionalShadowMap[f]=Q,n.directionalShadowMatrix[f]=U.shadow.matrix,E++}n.directional[f]=k,f++}else if(U.isSpotLight){const k=t.get(U);k.position.setFromMatrixPosition(U.matrixWorld),k.color.copy(G).multiplyScalar(H),k.distance=Y,k.coneCos=Math.cos(U.angle),k.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),k.decay=U.decay,n.spot[v]=k;const j=U.shadow;if(U.map&&(n.spotLightMap[I]=U.map,I++,j.updateMatrices(U),U.castShadow&&w++),n.spotLightMatrix[v]=j.matrix,U.castShadow){const X=e.get(U);X.shadowIntensity=j.intensity,X.shadowBias=j.bias,X.shadowNormalBias=j.normalBias,X.shadowRadius=j.radius,X.shadowMapSize=j.mapSize,n.spotShadow[v]=X,n.spotShadowMap[v]=Q,y++}v++}else if(U.isRectAreaLight){const k=t.get(U);k.color.copy(G).multiplyScalar(H),k.halfWidth.set(U.width*.5,0,0),k.halfHeight.set(0,U.height*.5,0),n.rectArea[x]=k,x++}else if(U.isPointLight){const k=t.get(U);if(k.color.copy(U.color).multiplyScalar(U.intensity),k.distance=U.distance,k.decay=U.decay,U.castShadow){const j=U.shadow,X=e.get(U);X.shadowIntensity=j.intensity,X.shadowBias=j.bias,X.shadowNormalBias=j.normalBias,X.shadowRadius=j.radius,X.shadowMapSize=j.mapSize,X.shadowCameraNear=j.camera.near,X.shadowCameraFar=j.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=Q,n.pointShadowMatrix[g]=U.shadow.matrix,M++}n.point[g]=k,g++}else if(U.isHemisphereLight){const k=t.get(U);k.skyColor.copy(U.color).multiplyScalar(H),k.groundColor.copy(U.groundColor).multiplyScalar(H),n.hemi[m]=k,m++}}x>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ut.LTC_FLOAT_1,n.rectAreaLTC2=ut.LTC_FLOAT_2):(n.rectAreaLTC1=ut.LTC_HALF_1,n.rectAreaLTC2=ut.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=p;const L=n.hash;(L.directionalLength!==f||L.pointLength!==g||L.spotLength!==v||L.rectAreaLength!==x||L.hemiLength!==m||L.numDirectionalShadows!==E||L.numPointShadows!==M||L.numSpotShadows!==y||L.numSpotMaps!==I||L.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=x,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=y+I-w,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=R,L.directionalLength=f,L.pointLength=g,L.spotLength=v,L.rectAreaLength=x,L.hemiLength=m,L.numDirectionalShadows=E,L.numPointShadows=M,L.numSpotShadows=y,L.numSpotMaps=I,L.numLightProbes=R,n.version=eg++)}function l(c,h){let d=0,p=0,f=0,g=0,v=0;const x=h.matrixWorldInverse;for(let m=0,E=c.length;m<E;m++){const M=c[m];if(M.isDirectionalLight){const y=n.directional[d];y.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(x),d++}else if(M.isSpotLight){const y=n.spot[f];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(x),y.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(x),f++}else if(M.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(x),a.identity(),o.copy(M.matrixWorld),o.premultiply(x),a.extractRotation(o),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){const y=n.point[p];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(x),p++}else if(M.isHemisphereLight){const y=n.hemi[v];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(x),v++}}}return{setup:r,setupView:l,state:n}}function Cc(s){const t=new ig(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function o(h){e.push(h)}function a(h){n.push(h)}function r(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:r,setupLightsView:l,pushLight:o,pushShadow:a}}function sg(s){let t=new WeakMap;function e(i,o=0){const a=t.get(i);let r;return a===void 0?(r=new Cc(s),t.set(i,[r])):o>=a.length?(r=new Cc(s),a.push(r)):r=a[o],r}function n(){t=new WeakMap}return{get:e,dispose:n}}class og extends as{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=ku,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ag extends as{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const rg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lg=`uniform sampler2D shadow_pass;
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
}`;function cg(s,t,e){let n=new _l;const i=new St,o=new St,a=new Le,r=new og({depthPacking:Bu}),l=new ag,c={},h=e.maxTextureSize,d={[ii]:An,[An]:ii,[cn]:cn},p=new zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new St},radius:{value:4}},vertexShader:rg,fragmentShader:lg}),f=p.clone();f.defines.HORIZONTAL_PASS=1;const g=new bn;g.setAttribute("position",new Mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new D(g,p),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vh;let m=this.type;this.render=function(w,R,L){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||w.length===0)return;const C=s.getRenderTarget(),b=s.getActiveCubeFace(),U=s.getActiveMipmapLevel(),G=s.state;G.setBlending(Oi),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const H=m!==fi&&this.type===fi,Y=m===fi&&this.type!==fi;for(let Q=0,k=w.length;Q<k;Q++){const j=w[Q],X=j.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);const ot=X.getFrameExtents();if(i.multiply(ot),o.copy(X.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(o.x=Math.floor(h/ot.x),i.x=o.x*ot.x,X.mapSize.x=o.x),i.y>h&&(o.y=Math.floor(h/ot.y),i.y=o.y*ot.y,X.mapSize.y=o.y)),X.map===null||H===!0||Y===!0){const ct=this.type!==fi?{minFilter:Bn,magFilter:Bn}:{};X.map!==null&&X.map.dispose(),X.map=new ss(i.x,i.y,ct),X.map.texture.name=j.name+".shadowMap",X.camera.updateProjectionMatrix()}s.setRenderTarget(X.map),s.clear();const rt=X.getViewportCount();for(let ct=0;ct<rt;ct++){const Bt=X.getViewport(ct);a.set(o.x*Bt.x,o.y*Bt.y,o.x*Bt.z,o.y*Bt.w),G.viewport(a),X.updateMatrices(j,ct),n=X.getFrustum(),y(R,L,X.camera,j,this.type)}X.isPointLightShadow!==!0&&this.type===fi&&E(X,L),X.needsUpdate=!1}m=this.type,x.needsUpdate=!1,s.setRenderTarget(C,b,U)};function E(w,R){const L=t.update(v);p.defines.VSM_SAMPLES!==w.blurSamples&&(p.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ss(i.x,i.y)),p.uniforms.shadow_pass.value=w.map.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(R,null,L,p,v,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(R,null,L,f,v,null)}function M(w,R,L,C){let b=null;const U=L.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(U!==void 0)b=U;else if(b=L.isPointLight===!0?l:r,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const G=b.uuid,H=R.uuid;let Y=c[G];Y===void 0&&(Y={},c[G]=Y);let Q=Y[H];Q===void 0&&(Q=b.clone(),Y[H]=Q,R.addEventListener("dispose",I)),b=Q}if(b.visible=R.visible,b.wireframe=R.wireframe,C===fi?b.side=R.shadowSide!==null?R.shadowSide:R.side:b.side=R.shadowSide!==null?R.shadowSide:d[R.side],b.alphaMap=R.alphaMap,b.alphaTest=R.alphaTest,b.map=R.map,b.clipShadows=R.clipShadows,b.clippingPlanes=R.clippingPlanes,b.clipIntersection=R.clipIntersection,b.displacementMap=R.displacementMap,b.displacementScale=R.displacementScale,b.displacementBias=R.displacementBias,b.wireframeLinewidth=R.wireframeLinewidth,b.linewidth=R.linewidth,L.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const G=s.properties.get(b);G.light=L}return b}function y(w,R,L,C,b){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&b===fi)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,w.matrixWorld);const H=t.update(w),Y=w.material;if(Array.isArray(Y)){const Q=H.groups;for(let k=0,j=Q.length;k<j;k++){const X=Q[k],ot=Y[X.materialIndex];if(ot&&ot.visible){const rt=M(w,ot,C,b);w.onBeforeShadow(s,w,R,L,H,rt,X),s.renderBufferDirect(L,null,H,rt,w,X),w.onAfterShadow(s,w,R,L,H,rt,X)}}}else if(Y.visible){const Q=M(w,Y,C,b);w.onBeforeShadow(s,w,R,L,H,Q,null),s.renderBufferDirect(L,null,H,Q,w,null),w.onAfterShadow(s,w,R,L,H,Q,null)}}const G=w.children;for(let H=0,Y=G.length;H<Y;H++)y(G[H],R,L,C,b)}function I(w){w.target.removeEventListener("dispose",I);for(const L in c){const C=c[L],b=w.target.uuid;b in C&&(C[b].dispose(),delete C[b])}}}const hg={[xr]:vr,[_r]:br,[yr]:wr,[Bs]:Mr,[vr]:xr,[br]:_r,[wr]:yr,[Mr]:Bs};function ug(s,t){function e(){let F=!1;const ht=new Le;let K=null;const et=new Le(0,0,0,0);return{setMask:function(xt){K!==xt&&!F&&(s.colorMask(xt,xt,xt,xt),K=xt)},setLocked:function(xt){F=xt},setClear:function(xt,mt,$t,ge,$e){$e===!0&&(xt*=ge,mt*=ge,$t*=ge),ht.set(xt,mt,$t,ge),et.equals(ht)===!1&&(s.clearColor(xt,mt,$t,ge),et.copy(ht))},reset:function(){F=!1,K=null,et.set(-1,0,0,0)}}}function n(){let F=!1,ht=!1,K=null,et=null,xt=null;return{setReversed:function(mt){if(ht!==mt){const $t=t.get("EXT_clip_control");ht?$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.ZERO_TO_ONE_EXT):$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.NEGATIVE_ONE_TO_ONE_EXT);const ge=xt;xt=null,this.setClear(ge)}ht=mt},getReversed:function(){return ht},setTest:function(mt){mt?pt(s.DEPTH_TEST):Gt(s.DEPTH_TEST)},setMask:function(mt){K!==mt&&!F&&(s.depthMask(mt),K=mt)},setFunc:function(mt){if(ht&&(mt=hg[mt]),et!==mt){switch(mt){case xr:s.depthFunc(s.NEVER);break;case vr:s.depthFunc(s.ALWAYS);break;case _r:s.depthFunc(s.LESS);break;case Bs:s.depthFunc(s.LEQUAL);break;case yr:s.depthFunc(s.EQUAL);break;case Mr:s.depthFunc(s.GEQUAL);break;case br:s.depthFunc(s.GREATER);break;case wr:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}et=mt}},setLocked:function(mt){F=mt},setClear:function(mt){xt!==mt&&(ht&&(mt=1-mt),s.clearDepth(mt),xt=mt)},reset:function(){F=!1,K=null,et=null,xt=null,ht=!1}}}function i(){let F=!1,ht=null,K=null,et=null,xt=null,mt=null,$t=null,ge=null,$e=null;return{setTest:function(Me){F||(Me?pt(s.STENCIL_TEST):Gt(s.STENCIL_TEST))},setMask:function(Me){ht!==Me&&!F&&(s.stencilMask(Me),ht=Me)},setFunc:function(Me,nn,un){(K!==Me||et!==nn||xt!==un)&&(s.stencilFunc(Me,nn,un),K=Me,et=nn,xt=un)},setOp:function(Me,nn,un){(mt!==Me||$t!==nn||ge!==un)&&(s.stencilOp(Me,nn,un),mt=Me,$t=nn,ge=un)},setLocked:function(Me){F=Me},setClear:function(Me){$e!==Me&&(s.clearStencil(Me),$e=Me)},reset:function(){F=!1,ht=null,K=null,et=null,xt=null,mt=null,$t=null,ge=null,$e=null}}}const o=new e,a=new n,r=new i,l=new WeakMap,c=new WeakMap;let h={},d={},p=new WeakMap,f=[],g=null,v=!1,x=null,m=null,E=null,M=null,y=null,I=null,w=null,R=new jt(0,0,0),L=0,C=!1,b=null,U=null,G=null,H=null,Y=null;const Q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,j=0;const X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(X)[1]),k=j>=1):X.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),k=j>=2);let ot=null,rt={};const ct=s.getParameter(s.SCISSOR_BOX),Bt=s.getParameter(s.VIEWPORT),yt=new Le().fromArray(ct),q=new Le().fromArray(Bt);function $(F,ht,K,et){const xt=new Uint8Array(4),mt=s.createTexture();s.bindTexture(F,mt),s.texParameteri(F,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(F,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let $t=0;$t<K;$t++)F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY?s.texImage3D(ht,0,s.RGBA,1,1,et,0,s.RGBA,s.UNSIGNED_BYTE,xt):s.texImage2D(ht+$t,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,xt);return mt}const _t={};_t[s.TEXTURE_2D]=$(s.TEXTURE_2D,s.TEXTURE_2D,1),_t[s.TEXTURE_CUBE_MAP]=$(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),_t[s.TEXTURE_2D_ARRAY]=$(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),_t[s.TEXTURE_3D]=$(s.TEXTURE_3D,s.TEXTURE_3D,1,1),o.setClear(0,0,0,1),a.setClear(1),r.setClear(0),pt(s.DEPTH_TEST),a.setFunc(Bs),de(!1),pe(Dl),pt(s.CULL_FACE),z(Oi);function pt(F){h[F]!==!0&&(s.enable(F),h[F]=!0)}function Gt(F){h[F]!==!1&&(s.disable(F),h[F]=!1)}function Lt(F,ht){return d[F]!==ht?(s.bindFramebuffer(F,ht),d[F]=ht,F===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=ht),F===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=ht),!0):!1}function ae(F,ht){let K=f,et=!1;if(F){K=p.get(ht),K===void 0&&(K=[],p.set(ht,K));const xt=F.textures;if(K.length!==xt.length||K[0]!==s.COLOR_ATTACHMENT0){for(let mt=0,$t=xt.length;mt<$t;mt++)K[mt]=s.COLOR_ATTACHMENT0+mt;K.length=xt.length,et=!0}}else K[0]!==s.BACK&&(K[0]=s.BACK,et=!0);et&&s.drawBuffers(K)}function Ae(F){return g!==F?(s.useProgram(F),g=F,!0):!1}const Kt={[ji]:s.FUNC_ADD,[du]:s.FUNC_SUBTRACT,[pu]:s.FUNC_REVERSE_SUBTRACT};Kt[fu]=s.MIN,Kt[mu]=s.MAX;const ke={[gu]:s.ZERO,[xu]:s.ONE,[vu]:s.SRC_COLOR,[mr]:s.SRC_ALPHA,[Su]:s.SRC_ALPHA_SATURATE,[bu]:s.DST_COLOR,[yu]:s.DST_ALPHA,[_u]:s.ONE_MINUS_SRC_COLOR,[gr]:s.ONE_MINUS_SRC_ALPHA,[wu]:s.ONE_MINUS_DST_COLOR,[Mu]:s.ONE_MINUS_DST_ALPHA,[Tu]:s.CONSTANT_COLOR,[Eu]:s.ONE_MINUS_CONSTANT_COLOR,[Cu]:s.CONSTANT_ALPHA,[Au]:s.ONE_MINUS_CONSTANT_ALPHA};function z(F,ht,K,et,xt,mt,$t,ge,$e,Me){if(F===Oi){v===!0&&(Gt(s.BLEND),v=!1);return}if(v===!1&&(pt(s.BLEND),v=!0),F!==uu){if(F!==x||Me!==C){if((m!==ji||y!==ji)&&(s.blendEquation(s.FUNC_ADD),m=ji,y=ji),Me)switch(F){case Os:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ll:s.blendFunc(s.ONE,s.ONE);break;case Il:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ul:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Os:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ll:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Il:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ul:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}E=null,M=null,I=null,w=null,R.set(0,0,0),L=0,x=F,C=Me}return}xt=xt||ht,mt=mt||K,$t=$t||et,(ht!==m||xt!==y)&&(s.blendEquationSeparate(Kt[ht],Kt[xt]),m=ht,y=xt),(K!==E||et!==M||mt!==I||$t!==w)&&(s.blendFuncSeparate(ke[K],ke[et],ke[mt],ke[$t]),E=K,M=et,I=mt,w=$t),(ge.equals(R)===!1||$e!==L)&&(s.blendColor(ge.r,ge.g,ge.b,$e),R.copy(ge),L=$e),x=F,C=!1}function Ke(F,ht){F.side===cn?Gt(s.CULL_FACE):pt(s.CULL_FACE);let K=F.side===An;ht&&(K=!K),de(K),F.blending===Os&&F.transparent===!1?z(Oi):z(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),o.setMask(F.colorWrite);const et=F.stencilWrite;r.setTest(et),et&&(r.setMask(F.stencilWriteMask),r.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),r.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Re(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?pt(s.SAMPLE_ALPHA_TO_COVERAGE):Gt(s.SAMPLE_ALPHA_TO_COVERAGE)}function de(F){b!==F&&(F?s.frontFace(s.CW):s.frontFace(s.CCW),b=F)}function pe(F){F!==lu?(pt(s.CULL_FACE),F!==U&&(F===Dl?s.cullFace(s.BACK):F===cu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Gt(s.CULL_FACE),U=F}function Ot(F){F!==G&&(k&&s.lineWidth(F),G=F)}function Re(F,ht,K){F?(pt(s.POLYGON_OFFSET_FILL),(H!==ht||Y!==K)&&(s.polygonOffset(ht,K),H=ht,Y=K)):Gt(s.POLYGON_OFFSET_FILL)}function Dt(F){F?pt(s.SCISSOR_TEST):Gt(s.SCISSOR_TEST)}function P(F){F===void 0&&(F=s.TEXTURE0+Q-1),ot!==F&&(s.activeTexture(F),ot=F)}function S(F,ht,K){K===void 0&&(ot===null?K=s.TEXTURE0+Q-1:K=ot);let et=rt[K];et===void 0&&(et={type:void 0,texture:void 0},rt[K]=et),(et.type!==F||et.texture!==ht)&&(ot!==K&&(s.activeTexture(K),ot=K),s.bindTexture(F,ht||_t[F]),et.type=F,et.texture=ht)}function V(){const F=rt[ot];F!==void 0&&F.type!==void 0&&(s.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Z(){try{s.compressedTexImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function tt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function J(){try{s.texSubImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ct(){try{s.texSubImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ft(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Mt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ue(){try{s.texStorage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function nt(){try{s.texStorage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function wt(){try{s.texImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function zt(){try{s.texImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Yt(F){yt.equals(F)===!1&&(s.scissor(F.x,F.y,F.z,F.w),yt.copy(F))}function bt(F){q.equals(F)===!1&&(s.viewport(F.x,F.y,F.z,F.w),q.copy(F))}function he(F,ht){let K=c.get(ht);K===void 0&&(K=new WeakMap,c.set(ht,K));let et=K.get(F);et===void 0&&(et=s.getUniformBlockIndex(ht,F.name),K.set(F,et))}function Jt(F,ht){const et=c.get(ht).get(F);l.get(ht)!==et&&(s.uniformBlockBinding(ht,et,F.__bindingPointIndex),l.set(ht,et))}function me(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},ot=null,rt={},d={},p=new WeakMap,f=[],g=null,v=!1,x=null,m=null,E=null,M=null,y=null,I=null,w=null,R=new jt(0,0,0),L=0,C=!1,b=null,U=null,G=null,H=null,Y=null,yt.set(0,0,s.canvas.width,s.canvas.height),q.set(0,0,s.canvas.width,s.canvas.height),o.reset(),a.reset(),r.reset()}return{buffers:{color:o,depth:a,stencil:r},enable:pt,disable:Gt,bindFramebuffer:Lt,drawBuffers:ae,useProgram:Ae,setBlending:z,setMaterial:Ke,setFlipSided:de,setCullFace:pe,setLineWidth:Ot,setPolygonOffset:Re,setScissorTest:Dt,activeTexture:P,bindTexture:S,unbindTexture:V,compressedTexImage2D:Z,compressedTexImage3D:tt,texImage2D:wt,texImage3D:zt,updateUBOMapping:he,uniformBlockBinding:Jt,texStorage2D:ue,texStorage3D:nt,texSubImage2D:J,texSubImage3D:Ct,compressedTexSubImage2D:ft,compressedTexSubImage3D:Mt,scissor:Yt,viewport:bt,reset:me}}function Ac(s,t,e,n){const i=dg(n);switch(e){case wh:return s*t;case Th:return s*t;case Eh:return s*t*2;case Ch:return s*t/i.components*i.byteLength;case dl:return s*t/i.components*i.byteLength;case Ah:return s*t*2/i.components*i.byteLength;case pl:return s*t*2/i.components*i.byteLength;case Sh:return s*t*3/i.components*i.byteLength;case ei:return s*t*4/i.components*i.byteLength;case fl:return s*t*4/i.components*i.byteLength;case ha:case ua:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case da:case pa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ar:case Pr:return Math.max(s,16)*Math.max(t,8)/4;case Cr:case Rr:return Math.max(s,8)*Math.max(t,8)/2;case Dr:case Lr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ir:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ur:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Nr:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Fr:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Or:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case zr:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case kr:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Br:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Gr:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Hr:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Vr:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Wr:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Xr:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Yr:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Kr:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case fa:case qr:case jr:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Rh:case Jr:return Math.ceil(s/4)*Math.ceil(t/4)*8;case $r:case Zr:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function dg(s){switch(s){case yi:case yh:return{byteLength:1,components:1};case Eo:case Mh:case Ro:return{byteLength:2,components:1};case hl:case ul:return{byteLength:2,components:4};case is:case cl:case mi:return{byteLength:4,components:1};case bh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function pg(s,t,e,n,i,o,a){const r=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new St,h=new WeakMap;let d;const p=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,S){return f?new OffscreenCanvas(P,S):xa("canvas")}function v(P,S,V){let Z=1;const tt=Dt(P);if((tt.width>V||tt.height>V)&&(Z=V/Math.max(tt.width,tt.height)),Z<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const J=Math.floor(Z*tt.width),Ct=Math.floor(Z*tt.height);d===void 0&&(d=g(J,Ct));const ft=S?g(J,Ct):d;return ft.width=J,ft.height=Ct,ft.getContext("2d").drawImage(P,0,0,J,Ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+J+"x"+Ct+")."),ft}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),P;return P}function x(P){return P.generateMipmaps}function m(P){s.generateMipmap(P)}function E(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function M(P,S,V,Z,tt=!1){if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let J=S;if(S===s.RED&&(V===s.FLOAT&&(J=s.R32F),V===s.HALF_FLOAT&&(J=s.R16F),V===s.UNSIGNED_BYTE&&(J=s.R8)),S===s.RED_INTEGER&&(V===s.UNSIGNED_BYTE&&(J=s.R8UI),V===s.UNSIGNED_SHORT&&(J=s.R16UI),V===s.UNSIGNED_INT&&(J=s.R32UI),V===s.BYTE&&(J=s.R8I),V===s.SHORT&&(J=s.R16I),V===s.INT&&(J=s.R32I)),S===s.RG&&(V===s.FLOAT&&(J=s.RG32F),V===s.HALF_FLOAT&&(J=s.RG16F),V===s.UNSIGNED_BYTE&&(J=s.RG8)),S===s.RG_INTEGER&&(V===s.UNSIGNED_BYTE&&(J=s.RG8UI),V===s.UNSIGNED_SHORT&&(J=s.RG16UI),V===s.UNSIGNED_INT&&(J=s.RG32UI),V===s.BYTE&&(J=s.RG8I),V===s.SHORT&&(J=s.RG16I),V===s.INT&&(J=s.RG32I)),S===s.RGB_INTEGER&&(V===s.UNSIGNED_BYTE&&(J=s.RGB8UI),V===s.UNSIGNED_SHORT&&(J=s.RGB16UI),V===s.UNSIGNED_INT&&(J=s.RGB32UI),V===s.BYTE&&(J=s.RGB8I),V===s.SHORT&&(J=s.RGB16I),V===s.INT&&(J=s.RGB32I)),S===s.RGBA_INTEGER&&(V===s.UNSIGNED_BYTE&&(J=s.RGBA8UI),V===s.UNSIGNED_SHORT&&(J=s.RGBA16UI),V===s.UNSIGNED_INT&&(J=s.RGBA32UI),V===s.BYTE&&(J=s.RGBA8I),V===s.SHORT&&(J=s.RGBA16I),V===s.INT&&(J=s.RGBA32I)),S===s.RGB&&V===s.UNSIGNED_INT_5_9_9_9_REV&&(J=s.RGB9_E5),S===s.RGBA){const Ct=tt?ba:ye.getTransfer(Z);V===s.FLOAT&&(J=s.RGBA32F),V===s.HALF_FLOAT&&(J=s.RGBA16F),V===s.UNSIGNED_BYTE&&(J=Ct===De?s.SRGB8_ALPHA8:s.RGBA8),V===s.UNSIGNED_SHORT_4_4_4_4&&(J=s.RGBA4),V===s.UNSIGNED_SHORT_5_5_5_1&&(J=s.RGB5_A1)}return(J===s.R16F||J===s.R32F||J===s.RG16F||J===s.RG32F||J===s.RGBA16F||J===s.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function y(P,S){let V;return P?S===null||S===is||S===Vs?V=s.DEPTH24_STENCIL8:S===mi?V=s.DEPTH32F_STENCIL8:S===Eo&&(V=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===is||S===Vs?V=s.DEPTH_COMPONENT24:S===mi?V=s.DEPTH_COMPONENT32F:S===Eo&&(V=s.DEPTH_COMPONENT16),V}function I(P,S){return x(P)===!0||P.isFramebufferTexture&&P.minFilter!==Bn&&P.minFilter!==ti?Math.log2(Math.max(S.width,S.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?S.mipmaps.length:1}function w(P){const S=P.target;S.removeEventListener("dispose",w),L(S),S.isVideoTexture&&h.delete(S)}function R(P){const S=P.target;S.removeEventListener("dispose",R),b(S)}function L(P){const S=n.get(P);if(S.__webglInit===void 0)return;const V=P.source,Z=p.get(V);if(Z){const tt=Z[S.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&C(P),Object.keys(Z).length===0&&p.delete(V)}n.remove(P)}function C(P){const S=n.get(P);s.deleteTexture(S.__webglTexture);const V=P.source,Z=p.get(V);delete Z[S.__cacheKey],a.memory.textures--}function b(P){const S=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(S.__webglFramebuffer[Z]))for(let tt=0;tt<S.__webglFramebuffer[Z].length;tt++)s.deleteFramebuffer(S.__webglFramebuffer[Z][tt]);else s.deleteFramebuffer(S.__webglFramebuffer[Z]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[Z])}else{if(Array.isArray(S.__webglFramebuffer))for(let Z=0;Z<S.__webglFramebuffer.length;Z++)s.deleteFramebuffer(S.__webglFramebuffer[Z]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Z=0;Z<S.__webglColorRenderbuffer.length;Z++)S.__webglColorRenderbuffer[Z]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[Z]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const V=P.textures;for(let Z=0,tt=V.length;Z<tt;Z++){const J=n.get(V[Z]);J.__webglTexture&&(s.deleteTexture(J.__webglTexture),a.memory.textures--),n.remove(V[Z])}n.remove(P)}let U=0;function G(){U=0}function H(){const P=U;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),U+=1,P}function Y(P){const S=[];return S.push(P.wrapS),S.push(P.wrapT),S.push(P.wrapR||0),S.push(P.magFilter),S.push(P.minFilter),S.push(P.anisotropy),S.push(P.internalFormat),S.push(P.format),S.push(P.type),S.push(P.generateMipmaps),S.push(P.premultiplyAlpha),S.push(P.flipY),S.push(P.unpackAlignment),S.push(P.colorSpace),S.join()}function Q(P,S){const V=n.get(P);if(P.isVideoTexture&&Ot(P),P.isRenderTargetTexture===!1&&P.version>0&&V.__version!==P.version){const Z=P.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(V,P,S);return}}e.bindTexture(s.TEXTURE_2D,V.__webglTexture,s.TEXTURE0+S)}function k(P,S){const V=n.get(P);if(P.version>0&&V.__version!==P.version){q(V,P,S);return}e.bindTexture(s.TEXTURE_2D_ARRAY,V.__webglTexture,s.TEXTURE0+S)}function j(P,S){const V=n.get(P);if(P.version>0&&V.__version!==P.version){q(V,P,S);return}e.bindTexture(s.TEXTURE_3D,V.__webglTexture,s.TEXTURE0+S)}function X(P,S){const V=n.get(P);if(P.version>0&&V.__version!==P.version){$(V,P,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture,s.TEXTURE0+S)}const ot={[To]:s.REPEAT,[es]:s.CLAMP_TO_EDGE,[Er]:s.MIRRORED_REPEAT},rt={[Bn]:s.NEAREST,[zu]:s.NEAREST_MIPMAP_NEAREST,[Uo]:s.NEAREST_MIPMAP_LINEAR,[ti]:s.LINEAR,[Aa]:s.LINEAR_MIPMAP_NEAREST,[ns]:s.LINEAR_MIPMAP_LINEAR},ct={[Hu]:s.NEVER,[qu]:s.ALWAYS,[Vu]:s.LESS,[Ph]:s.LEQUAL,[Wu]:s.EQUAL,[Ku]:s.GEQUAL,[Xu]:s.GREATER,[Yu]:s.NOTEQUAL};function Bt(P,S){if(S.type===mi&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===ti||S.magFilter===Aa||S.magFilter===Uo||S.magFilter===ns||S.minFilter===ti||S.minFilter===Aa||S.minFilter===Uo||S.minFilter===ns)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,ot[S.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,ot[S.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,ot[S.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,rt[S.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,rt[S.minFilter]),S.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,ct[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Bn||S.minFilter!==Uo&&S.minFilter!==ns||S.type===mi&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");s.texParameterf(P,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function yt(P,S){let V=!1;P.__webglInit===void 0&&(P.__webglInit=!0,S.addEventListener("dispose",w));const Z=S.source;let tt=p.get(Z);tt===void 0&&(tt={},p.set(Z,tt));const J=Y(S);if(J!==P.__cacheKey){tt[J]===void 0&&(tt[J]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,V=!0),tt[J].usedTimes++;const Ct=tt[P.__cacheKey];Ct!==void 0&&(tt[P.__cacheKey].usedTimes--,Ct.usedTimes===0&&C(S)),P.__cacheKey=J,P.__webglTexture=tt[J].texture}return V}function q(P,S,V){let Z=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Z=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Z=s.TEXTURE_3D);const tt=yt(P,S),J=S.source;e.bindTexture(Z,P.__webglTexture,s.TEXTURE0+V);const Ct=n.get(J);if(J.version!==Ct.__version||tt===!0){e.activeTexture(s.TEXTURE0+V);const ft=ye.getPrimaries(ye.workingColorSpace),Mt=S.colorSpace===Ni?null:ye.getPrimaries(S.colorSpace),ue=S.colorSpace===Ni||ft===Mt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);let nt=v(S.image,!1,i.maxTextureSize);nt=Re(S,nt);const wt=o.convert(S.format,S.colorSpace),zt=o.convert(S.type);let Yt=M(S.internalFormat,wt,zt,S.colorSpace,S.isVideoTexture);Bt(Z,S);let bt;const he=S.mipmaps,Jt=S.isVideoTexture!==!0,me=Ct.__version===void 0||tt===!0,F=J.dataReady,ht=I(S,nt);if(S.isDepthTexture)Yt=y(S.format===Ws,S.type),me&&(Jt?e.texStorage2D(s.TEXTURE_2D,1,Yt,nt.width,nt.height):e.texImage2D(s.TEXTURE_2D,0,Yt,nt.width,nt.height,0,wt,zt,null));else if(S.isDataTexture)if(he.length>0){Jt&&me&&e.texStorage2D(s.TEXTURE_2D,ht,Yt,he[0].width,he[0].height);for(let K=0,et=he.length;K<et;K++)bt=he[K],Jt?F&&e.texSubImage2D(s.TEXTURE_2D,K,0,0,bt.width,bt.height,wt,zt,bt.data):e.texImage2D(s.TEXTURE_2D,K,Yt,bt.width,bt.height,0,wt,zt,bt.data);S.generateMipmaps=!1}else Jt?(me&&e.texStorage2D(s.TEXTURE_2D,ht,Yt,nt.width,nt.height),F&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,nt.width,nt.height,wt,zt,nt.data)):e.texImage2D(s.TEXTURE_2D,0,Yt,nt.width,nt.height,0,wt,zt,nt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Jt&&me&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ht,Yt,he[0].width,he[0].height,nt.depth);for(let K=0,et=he.length;K<et;K++)if(bt=he[K],S.format!==ei)if(wt!==null)if(Jt){if(F)if(S.layerUpdates.size>0){const xt=Ac(bt.width,bt.height,S.format,S.type);for(const mt of S.layerUpdates){const $t=bt.data.subarray(mt*xt/bt.data.BYTES_PER_ELEMENT,(mt+1)*xt/bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,mt,bt.width,bt.height,1,wt,$t)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,0,bt.width,bt.height,nt.depth,wt,bt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,K,Yt,bt.width,bt.height,nt.depth,0,bt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Jt?F&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,0,bt.width,bt.height,nt.depth,wt,zt,bt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,K,Yt,bt.width,bt.height,nt.depth,0,wt,zt,bt.data)}else{Jt&&me&&e.texStorage2D(s.TEXTURE_2D,ht,Yt,he[0].width,he[0].height);for(let K=0,et=he.length;K<et;K++)bt=he[K],S.format!==ei?wt!==null?Jt?F&&e.compressedTexSubImage2D(s.TEXTURE_2D,K,0,0,bt.width,bt.height,wt,bt.data):e.compressedTexImage2D(s.TEXTURE_2D,K,Yt,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Jt?F&&e.texSubImage2D(s.TEXTURE_2D,K,0,0,bt.width,bt.height,wt,zt,bt.data):e.texImage2D(s.TEXTURE_2D,K,Yt,bt.width,bt.height,0,wt,zt,bt.data)}else if(S.isDataArrayTexture)if(Jt){if(me&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ht,Yt,nt.width,nt.height,nt.depth),F)if(S.layerUpdates.size>0){const K=Ac(nt.width,nt.height,S.format,S.type);for(const et of S.layerUpdates){const xt=nt.data.subarray(et*K/nt.data.BYTES_PER_ELEMENT,(et+1)*K/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,et,nt.width,nt.height,1,wt,zt,xt)}S.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,wt,zt,nt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Yt,nt.width,nt.height,nt.depth,0,wt,zt,nt.data);else if(S.isData3DTexture)Jt?(me&&e.texStorage3D(s.TEXTURE_3D,ht,Yt,nt.width,nt.height,nt.depth),F&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,wt,zt,nt.data)):e.texImage3D(s.TEXTURE_3D,0,Yt,nt.width,nt.height,nt.depth,0,wt,zt,nt.data);else if(S.isFramebufferTexture){if(me)if(Jt)e.texStorage2D(s.TEXTURE_2D,ht,Yt,nt.width,nt.height);else{let K=nt.width,et=nt.height;for(let xt=0;xt<ht;xt++)e.texImage2D(s.TEXTURE_2D,xt,Yt,K,et,0,wt,zt,null),K>>=1,et>>=1}}else if(he.length>0){if(Jt&&me){const K=Dt(he[0]);e.texStorage2D(s.TEXTURE_2D,ht,Yt,K.width,K.height)}for(let K=0,et=he.length;K<et;K++)bt=he[K],Jt?F&&e.texSubImage2D(s.TEXTURE_2D,K,0,0,wt,zt,bt):e.texImage2D(s.TEXTURE_2D,K,Yt,wt,zt,bt);S.generateMipmaps=!1}else if(Jt){if(me){const K=Dt(nt);e.texStorage2D(s.TEXTURE_2D,ht,Yt,K.width,K.height)}F&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,wt,zt,nt)}else e.texImage2D(s.TEXTURE_2D,0,Yt,wt,zt,nt);x(S)&&m(Z),Ct.__version=J.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function $(P,S,V){if(S.image.length!==6)return;const Z=yt(P,S),tt=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+V);const J=n.get(tt);if(tt.version!==J.__version||Z===!0){e.activeTexture(s.TEXTURE0+V);const Ct=ye.getPrimaries(ye.workingColorSpace),ft=S.colorSpace===Ni?null:ye.getPrimaries(S.colorSpace),Mt=S.colorSpace===Ni||Ct===ft?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);const ue=S.isCompressedTexture||S.image[0].isCompressedTexture,nt=S.image[0]&&S.image[0].isDataTexture,wt=[];for(let et=0;et<6;et++)!ue&&!nt?wt[et]=v(S.image[et],!0,i.maxCubemapSize):wt[et]=nt?S.image[et].image:S.image[et],wt[et]=Re(S,wt[et]);const zt=wt[0],Yt=o.convert(S.format,S.colorSpace),bt=o.convert(S.type),he=M(S.internalFormat,Yt,bt,S.colorSpace),Jt=S.isVideoTexture!==!0,me=J.__version===void 0||Z===!0,F=tt.dataReady;let ht=I(S,zt);Bt(s.TEXTURE_CUBE_MAP,S);let K;if(ue){Jt&&me&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ht,he,zt.width,zt.height);for(let et=0;et<6;et++){K=wt[et].mipmaps;for(let xt=0;xt<K.length;xt++){const mt=K[xt];S.format!==ei?Yt!==null?Jt?F&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,xt,0,0,mt.width,mt.height,Yt,mt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,xt,he,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Jt?F&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,xt,0,0,mt.width,mt.height,Yt,bt,mt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,xt,he,mt.width,mt.height,0,Yt,bt,mt.data)}}}else{if(K=S.mipmaps,Jt&&me){K.length>0&&ht++;const et=Dt(wt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,ht,he,et.width,et.height)}for(let et=0;et<6;et++)if(nt){Jt?F&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,wt[et].width,wt[et].height,Yt,bt,wt[et].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,he,wt[et].width,wt[et].height,0,Yt,bt,wt[et].data);for(let xt=0;xt<K.length;xt++){const $t=K[xt].image[et].image;Jt?F&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,xt+1,0,0,$t.width,$t.height,Yt,bt,$t.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,xt+1,he,$t.width,$t.height,0,Yt,bt,$t.data)}}else{Jt?F&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Yt,bt,wt[et]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,he,Yt,bt,wt[et]);for(let xt=0;xt<K.length;xt++){const mt=K[xt];Jt?F&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,xt+1,0,0,Yt,bt,mt.image[et]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,xt+1,he,Yt,bt,mt.image[et])}}}x(S)&&m(s.TEXTURE_CUBE_MAP),J.__version=tt.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function _t(P,S,V,Z,tt,J){const Ct=o.convert(V.format,V.colorSpace),ft=o.convert(V.type),Mt=M(V.internalFormat,Ct,ft,V.colorSpace),ue=n.get(S),nt=n.get(V);if(nt.__renderTarget=S,!ue.__hasExternalTextures){const wt=Math.max(1,S.width>>J),zt=Math.max(1,S.height>>J);tt===s.TEXTURE_3D||tt===s.TEXTURE_2D_ARRAY?e.texImage3D(tt,J,Mt,wt,zt,S.depth,0,Ct,ft,null):e.texImage2D(tt,J,Mt,wt,zt,0,Ct,ft,null)}e.bindFramebuffer(s.FRAMEBUFFER,P),pe(S)?r.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Z,tt,nt.__webglTexture,0,de(S)):(tt===s.TEXTURE_2D||tt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Z,tt,nt.__webglTexture,J),e.bindFramebuffer(s.FRAMEBUFFER,null)}function pt(P,S,V){if(s.bindRenderbuffer(s.RENDERBUFFER,P),S.depthBuffer){const Z=S.depthTexture,tt=Z&&Z.isDepthTexture?Z.type:null,J=y(S.stencilBuffer,tt),Ct=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ft=de(S);pe(S)?r.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ft,J,S.width,S.height):V?s.renderbufferStorageMultisample(s.RENDERBUFFER,ft,J,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,J,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ct,s.RENDERBUFFER,P)}else{const Z=S.textures;for(let tt=0;tt<Z.length;tt++){const J=Z[tt],Ct=o.convert(J.format,J.colorSpace),ft=o.convert(J.type),Mt=M(J.internalFormat,Ct,ft,J.colorSpace),ue=de(S);V&&pe(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ue,Mt,S.width,S.height):pe(S)?r.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ue,Mt,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,Mt,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Gt(P,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,P),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(S.depthTexture);Z.__renderTarget=S,(!Z.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Q(S.depthTexture,0);const tt=Z.__webglTexture,J=de(S);if(S.depthTexture.format===zs)pe(S)?r.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,tt,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,tt,0);else if(S.depthTexture.format===Ws)pe(S)?r.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,tt,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function Lt(P){const S=n.get(P),V=P.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==P.depthTexture){const Z=P.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Z){const tt=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Z.removeEventListener("dispose",tt)};Z.addEventListener("dispose",tt),S.__depthDisposeCallback=tt}S.__boundDepthTexture=Z}if(P.depthTexture&&!S.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Gt(S.__webglFramebuffer,P)}else if(V){S.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[Z]),S.__webglDepthbuffer[Z]===void 0)S.__webglDepthbuffer[Z]=s.createRenderbuffer(),pt(S.__webglDepthbuffer[Z],P,!1);else{const tt=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,J=S.__webglDepthbuffer[Z];s.bindRenderbuffer(s.RENDERBUFFER,J),s.framebufferRenderbuffer(s.FRAMEBUFFER,tt,s.RENDERBUFFER,J)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),pt(S.__webglDepthbuffer,P,!1);else{const Z=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,tt=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,tt),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,tt)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function ae(P,S,V){const Z=n.get(P);S!==void 0&&_t(Z.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),V!==void 0&&Lt(P)}function Ae(P){const S=P.texture,V=n.get(P),Z=n.get(S);P.addEventListener("dispose",R);const tt=P.textures,J=P.isWebGLCubeRenderTarget===!0,Ct=tt.length>1;if(Ct||(Z.__webglTexture===void 0&&(Z.__webglTexture=s.createTexture()),Z.__version=S.version,a.memory.textures++),J){V.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer[ft]=[];for(let Mt=0;Mt<S.mipmaps.length;Mt++)V.__webglFramebuffer[ft][Mt]=s.createFramebuffer()}else V.__webglFramebuffer[ft]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer=[];for(let ft=0;ft<S.mipmaps.length;ft++)V.__webglFramebuffer[ft]=s.createFramebuffer()}else V.__webglFramebuffer=s.createFramebuffer();if(Ct)for(let ft=0,Mt=tt.length;ft<Mt;ft++){const ue=n.get(tt[ft]);ue.__webglTexture===void 0&&(ue.__webglTexture=s.createTexture(),a.memory.textures++)}if(P.samples>0&&pe(P)===!1){V.__webglMultisampledFramebuffer=s.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ft=0;ft<tt.length;ft++){const Mt=tt[ft];V.__webglColorRenderbuffer[ft]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,V.__webglColorRenderbuffer[ft]);const ue=o.convert(Mt.format,Mt.colorSpace),nt=o.convert(Mt.type),wt=M(Mt.internalFormat,ue,nt,Mt.colorSpace,P.isXRRenderTarget===!0),zt=de(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,zt,wt,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.RENDERBUFFER,V.__webglColorRenderbuffer[ft])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(V.__webglDepthRenderbuffer=s.createRenderbuffer(),pt(V.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(J){e.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),Bt(s.TEXTURE_CUBE_MAP,S);for(let ft=0;ft<6;ft++)if(S.mipmaps&&S.mipmaps.length>0)for(let Mt=0;Mt<S.mipmaps.length;Mt++)_t(V.__webglFramebuffer[ft][Mt],P,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Mt);else _t(V.__webglFramebuffer[ft],P,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);x(S)&&m(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ct){for(let ft=0,Mt=tt.length;ft<Mt;ft++){const ue=tt[ft],nt=n.get(ue);e.bindTexture(s.TEXTURE_2D,nt.__webglTexture),Bt(s.TEXTURE_2D,ue),_t(V.__webglFramebuffer,P,ue,s.COLOR_ATTACHMENT0+ft,s.TEXTURE_2D,0),x(ue)&&m(s.TEXTURE_2D)}e.unbindTexture()}else{let ft=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ft=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ft,Z.__webglTexture),Bt(ft,S),S.mipmaps&&S.mipmaps.length>0)for(let Mt=0;Mt<S.mipmaps.length;Mt++)_t(V.__webglFramebuffer[Mt],P,S,s.COLOR_ATTACHMENT0,ft,Mt);else _t(V.__webglFramebuffer,P,S,s.COLOR_ATTACHMENT0,ft,0);x(S)&&m(ft),e.unbindTexture()}P.depthBuffer&&Lt(P)}function Kt(P){const S=P.textures;for(let V=0,Z=S.length;V<Z;V++){const tt=S[V];if(x(tt)){const J=E(P),Ct=n.get(tt).__webglTexture;e.bindTexture(J,Ct),m(J),e.unbindTexture()}}}const ke=[],z=[];function Ke(P){if(P.samples>0){if(pe(P)===!1){const S=P.textures,V=P.width,Z=P.height;let tt=s.COLOR_BUFFER_BIT;const J=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ct=n.get(P),ft=S.length>1;if(ft)for(let Mt=0;Mt<S.length;Mt++)e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Mt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Mt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let Mt=0;Mt<S.length;Mt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(tt|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(tt|=s.STENCIL_BUFFER_BIT)),ft){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ct.__webglColorRenderbuffer[Mt]);const ue=n.get(S[Mt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ue,0)}s.blitFramebuffer(0,0,V,Z,0,0,V,Z,tt,s.NEAREST),l===!0&&(ke.length=0,z.length=0,ke.push(s.COLOR_ATTACHMENT0+Mt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(ke.push(J),z.push(J),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,z)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ke))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ft)for(let Mt=0;Mt<S.length;Mt++){e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Mt,s.RENDERBUFFER,Ct.__webglColorRenderbuffer[Mt]);const ue=n.get(S[Mt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Mt,s.TEXTURE_2D,ue,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const S=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function de(P){return Math.min(i.maxSamples,P.samples)}function pe(P){const S=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ot(P){const S=a.render.frame;h.get(P)!==S&&(h.set(P,S),P.update())}function Re(P,S){const V=P.colorSpace,Z=P.format,tt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||V!==Ys&&V!==Ni&&(ye.getTransfer(V)===De?(Z!==ei||tt!==yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),S}function Dt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=G,this.setTexture2D=Q,this.setTexture2DArray=k,this.setTexture3D=j,this.setTextureCube=X,this.rebindTextures=ae,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=Kt,this.updateMultisampleRenderTarget=Ke,this.setupDepthRenderbuffer=Lt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=pe}function fg(s,t){function e(n,i=Ni){let o;const a=ye.getTransfer(i);if(n===yi)return s.UNSIGNED_BYTE;if(n===hl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===ul)return s.UNSIGNED_SHORT_5_5_5_1;if(n===bh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===yh)return s.BYTE;if(n===Mh)return s.SHORT;if(n===Eo)return s.UNSIGNED_SHORT;if(n===cl)return s.INT;if(n===is)return s.UNSIGNED_INT;if(n===mi)return s.FLOAT;if(n===Ro)return s.HALF_FLOAT;if(n===wh)return s.ALPHA;if(n===Sh)return s.RGB;if(n===ei)return s.RGBA;if(n===Th)return s.LUMINANCE;if(n===Eh)return s.LUMINANCE_ALPHA;if(n===zs)return s.DEPTH_COMPONENT;if(n===Ws)return s.DEPTH_STENCIL;if(n===Ch)return s.RED;if(n===dl)return s.RED_INTEGER;if(n===Ah)return s.RG;if(n===pl)return s.RG_INTEGER;if(n===fl)return s.RGBA_INTEGER;if(n===ha||n===ua||n===da||n===pa)if(a===De)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===ha)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ua)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===da)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===pa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===ha)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ua)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===da)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===pa)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Cr||n===Ar||n===Rr||n===Pr)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Cr)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ar)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Rr)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Pr)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Dr||n===Lr||n===Ir)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Dr||n===Lr)return a===De?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Ir)return a===De?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ur||n===Nr||n===Fr||n===Or||n===zr||n===kr||n===Br||n===Gr||n===Hr||n===Vr||n===Wr||n===Xr||n===Yr||n===Kr)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Ur)return a===De?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Nr)return a===De?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Fr)return a===De?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Or)return a===De?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===zr)return a===De?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===kr)return a===De?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Br)return a===De?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Gr)return a===De?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Hr)return a===De?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Vr)return a===De?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Wr)return a===De?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Xr)return a===De?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Yr)return a===De?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Kr)return a===De?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===fa||n===qr||n===jr)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===fa)return a===De?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===qr)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===jr)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Rh||n===Jr||n===$r||n===Zr)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===fa)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Jr)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===$r)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Zr)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Vs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class mg extends kn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Tt extends on{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gg={type:"move"};class er{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,o=null,a=null;const r=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const v of t.hand.values()){const x=e.getJointPose(v,n),m=this._getHandJoint(c,v);x!==null&&(m.matrix.fromArray(x.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=x.radius),m.visible=x!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],p=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&p>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&p<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));r!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&o!==null&&(i=o),i!==null&&(r.matrix.fromArray(i.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),r.matrixWorldNeedsUpdate=!0,i.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(i.linearVelocity)):r.hasLinearVelocity=!1,i.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(i.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(gg)))}return r!==null&&(r.visible=i!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Tt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const xg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class _g{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new yn,o=t.properties.get(i);o.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new zi({vertexShader:xg,fragmentShader:vg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new D(new js(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class yg extends Ks{constructor(t,e){super();const n=this;let i=null,o=1,a=null,r="local-floor",l=1,c=null,h=null,d=null,p=null,f=null,g=null;const v=new _g,x=e.getContextAttributes();let m=null,E=null;const M=[],y=[],I=new St;let w=null;const R=new kn;R.viewport=new Le;const L=new kn;L.viewport=new Le;const C=[R,L],b=new mg;let U=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let $=M[q];return $===void 0&&($=new er,M[q]=$),$.getTargetRaySpace()},this.getControllerGrip=function(q){let $=M[q];return $===void 0&&($=new er,M[q]=$),$.getGripSpace()},this.getHand=function(q){let $=M[q];return $===void 0&&($=new er,M[q]=$),$.getHandSpace()};function H(q){const $=y.indexOf(q.inputSource);if($===-1)return;const _t=M[$];_t!==void 0&&(_t.update(q.inputSource,q.frame,c||a),_t.dispatchEvent({type:q.type,data:q.inputSource}))}function Y(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",Y),i.removeEventListener("inputsourceschange",Q);for(let q=0;q<M.length;q++){const $=y[q];$!==null&&(y[q]=null,M[q].disconnect($))}U=null,G=null,v.reset(),t.setRenderTarget(m),f=null,p=null,d=null,i=null,E=null,yt.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return p!==null?p:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",Y),i.addEventListener("inputsourceschange",Q),x.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(I),i.renderState.layers===void 0){const $={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:o};f=new XRWebGLLayer(i,e,$),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),E=new ss(f.framebufferWidth,f.framebufferHeight,{format:ei,type:yi,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let $=null,_t=null,pt=null;x.depth&&(pt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,$=x.stencil?Ws:zs,_t=x.stencil?Vs:is);const Gt={colorFormat:e.RGBA8,depthFormat:pt,scaleFactor:o};d=new XRWebGLBinding(i,e),p=d.createProjectionLayer(Gt),i.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),E=new ss(p.textureWidth,p.textureHeight,{format:ei,type:yi,depthTexture:new Vh(p.textureWidth,p.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(r),yt.setContext(i),yt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Q(q){for(let $=0;$<q.removed.length;$++){const _t=q.removed[$],pt=y.indexOf(_t);pt>=0&&(y[pt]=null,M[pt].disconnect(_t))}for(let $=0;$<q.added.length;$++){const _t=q.added[$];let pt=y.indexOf(_t);if(pt===-1){for(let Lt=0;Lt<M.length;Lt++)if(Lt>=y.length){y.push(_t),pt=Lt;break}else if(y[Lt]===null){y[Lt]=_t,pt=Lt;break}if(pt===-1)break}const Gt=M[pt];Gt&&Gt.connect(_t)}}const k=new A,j=new A;function X(q,$,_t){k.setFromMatrixPosition($.matrixWorld),j.setFromMatrixPosition(_t.matrixWorld);const pt=k.distanceTo(j),Gt=$.projectionMatrix.elements,Lt=_t.projectionMatrix.elements,ae=Gt[14]/(Gt[10]-1),Ae=Gt[14]/(Gt[10]+1),Kt=(Gt[9]+1)/Gt[5],ke=(Gt[9]-1)/Gt[5],z=(Gt[8]-1)/Gt[0],Ke=(Lt[8]+1)/Lt[0],de=ae*z,pe=ae*Ke,Ot=pt/(-z+Ke),Re=Ot*-z;if($.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Re),q.translateZ(Ot),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Gt[10]===-1)q.projectionMatrix.copy($.projectionMatrix),q.projectionMatrixInverse.copy($.projectionMatrixInverse);else{const Dt=ae+Ot,P=Ae+Ot,S=de-Re,V=pe+(pt-Re),Z=Kt*Ae/P*Dt,tt=ke*Ae/P*Dt;q.projectionMatrix.makePerspective(S,V,Z,tt,Dt,P),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ot(q,$){$===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices($.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let $=q.near,_t=q.far;v.texture!==null&&(v.depthNear>0&&($=v.depthNear),v.depthFar>0&&(_t=v.depthFar)),b.near=L.near=R.near=$,b.far=L.far=R.far=_t,(U!==b.near||G!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),U=b.near,G=b.far),R.layers.mask=q.layers.mask|2,L.layers.mask=q.layers.mask|4,b.layers.mask=R.layers.mask|L.layers.mask;const pt=q.parent,Gt=b.cameras;ot(b,pt);for(let Lt=0;Lt<Gt.length;Lt++)ot(Gt[Lt],pt);Gt.length===2?X(b,R,L):b.projectionMatrix.copy(R.projectionMatrix),rt(q,b,pt)};function rt(q,$,_t){_t===null?q.matrix.copy($.matrixWorld):(q.matrix.copy(_t.matrixWorld),q.matrix.invert(),q.matrix.multiply($.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy($.projectionMatrix),q.projectionMatrixInverse.copy($.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Co*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(p===null&&f===null))return l},this.setFoveation=function(q){l=q,p!==null&&(p.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(b)};let ct=null;function Bt(q,$){if(h=$.getViewerPose(c||a),g=$,h!==null){const _t=h.views;f!==null&&(t.setRenderTargetFramebuffer(E,f.framebuffer),t.setRenderTarget(E));let pt=!1;_t.length!==b.cameras.length&&(b.cameras.length=0,pt=!0);for(let Lt=0;Lt<_t.length;Lt++){const ae=_t[Lt];let Ae=null;if(f!==null)Ae=f.getViewport(ae);else{const ke=d.getViewSubImage(p,ae);Ae=ke.viewport,Lt===0&&(t.setRenderTargetTextures(E,ke.colorTexture,p.ignoreDepthValues?void 0:ke.depthStencilTexture),t.setRenderTarget(E))}let Kt=C[Lt];Kt===void 0&&(Kt=new kn,Kt.layers.enable(Lt),Kt.viewport=new Le,C[Lt]=Kt),Kt.matrix.fromArray(ae.transform.matrix),Kt.matrix.decompose(Kt.position,Kt.quaternion,Kt.scale),Kt.projectionMatrix.fromArray(ae.projectionMatrix),Kt.projectionMatrixInverse.copy(Kt.projectionMatrix).invert(),Kt.viewport.set(Ae.x,Ae.y,Ae.width,Ae.height),Lt===0&&(b.matrix.copy(Kt.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),pt===!0&&b.cameras.push(Kt)}const Gt=i.enabledFeatures;if(Gt&&Gt.includes("depth-sensing")){const Lt=d.getDepthInformation(_t[0]);Lt&&Lt.isValid&&Lt.texture&&v.init(t,Lt,i.renderState)}}for(let _t=0;_t<M.length;_t++){const pt=y[_t],Gt=M[_t];pt!==null&&Gt!==void 0&&Gt.update(pt,$,c||a)}ct&&ct(q,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),g=null}const yt=new Gh;yt.setAnimationLoop(Bt),this.setAnimationLoop=function(q){ct=q},this.dispose=function(){}}}const Wi=new Xn,Mg=new ze;function bg(s,t){function e(x,m){x.matrixAutoUpdate===!0&&x.updateMatrix(),m.value.copy(x.matrix)}function n(x,m){m.color.getRGB(x.fogColor.value,zh(s)),m.isFog?(x.fogNear.value=m.near,x.fogFar.value=m.far):m.isFogExp2&&(x.fogDensity.value=m.density)}function i(x,m,E,M,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?o(x,m):m.isMeshToonMaterial?(o(x,m),d(x,m)):m.isMeshPhongMaterial?(o(x,m),h(x,m)):m.isMeshStandardMaterial?(o(x,m),p(x,m),m.isMeshPhysicalMaterial&&f(x,m,y)):m.isMeshMatcapMaterial?(o(x,m),g(x,m)):m.isMeshDepthMaterial?o(x,m):m.isMeshDistanceMaterial?(o(x,m),v(x,m)):m.isMeshNormalMaterial?o(x,m):m.isLineBasicMaterial?(a(x,m),m.isLineDashedMaterial&&r(x,m)):m.isPointsMaterial?l(x,m,E,M):m.isSpriteMaterial?c(x,m):m.isShadowMaterial?(x.color.value.copy(m.color),x.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function o(x,m){x.opacity.value=m.opacity,m.color&&x.diffuse.value.copy(m.color),m.emissive&&x.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(x.map.value=m.map,e(m.map,x.mapTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,e(m.alphaMap,x.alphaMapTransform)),m.bumpMap&&(x.bumpMap.value=m.bumpMap,e(m.bumpMap,x.bumpMapTransform),x.bumpScale.value=m.bumpScale,m.side===An&&(x.bumpScale.value*=-1)),m.normalMap&&(x.normalMap.value=m.normalMap,e(m.normalMap,x.normalMapTransform),x.normalScale.value.copy(m.normalScale),m.side===An&&x.normalScale.value.negate()),m.displacementMap&&(x.displacementMap.value=m.displacementMap,e(m.displacementMap,x.displacementMapTransform),x.displacementScale.value=m.displacementScale,x.displacementBias.value=m.displacementBias),m.emissiveMap&&(x.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,x.emissiveMapTransform)),m.specularMap&&(x.specularMap.value=m.specularMap,e(m.specularMap,x.specularMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest);const E=t.get(m),M=E.envMap,y=E.envMapRotation;M&&(x.envMap.value=M,Wi.copy(y),Wi.x*=-1,Wi.y*=-1,Wi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Wi.y*=-1,Wi.z*=-1),x.envMapRotation.value.setFromMatrix4(Mg.makeRotationFromEuler(Wi)),x.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=m.reflectivity,x.ior.value=m.ior,x.refractionRatio.value=m.refractionRatio),m.lightMap&&(x.lightMap.value=m.lightMap,x.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,x.lightMapTransform)),m.aoMap&&(x.aoMap.value=m.aoMap,x.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,x.aoMapTransform))}function a(x,m){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,m.map&&(x.map.value=m.map,e(m.map,x.mapTransform))}function r(x,m){x.dashSize.value=m.dashSize,x.totalSize.value=m.dashSize+m.gapSize,x.scale.value=m.scale}function l(x,m,E,M){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,x.size.value=m.size*E,x.scale.value=M*.5,m.map&&(x.map.value=m.map,e(m.map,x.uvTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,e(m.alphaMap,x.alphaMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest)}function c(x,m){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,x.rotation.value=m.rotation,m.map&&(x.map.value=m.map,e(m.map,x.mapTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,e(m.alphaMap,x.alphaMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest)}function h(x,m){x.specular.value.copy(m.specular),x.shininess.value=Math.max(m.shininess,1e-4)}function d(x,m){m.gradientMap&&(x.gradientMap.value=m.gradientMap)}function p(x,m){x.metalness.value=m.metalness,m.metalnessMap&&(x.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,x.metalnessMapTransform)),x.roughness.value=m.roughness,m.roughnessMap&&(x.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,x.roughnessMapTransform)),m.envMap&&(x.envMapIntensity.value=m.envMapIntensity)}function f(x,m,E){x.ior.value=m.ior,m.sheen>0&&(x.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),x.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(x.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,x.sheenColorMapTransform)),m.sheenRoughnessMap&&(x.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,x.sheenRoughnessMapTransform))),m.clearcoat>0&&(x.clearcoat.value=m.clearcoat,x.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(x.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,x.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(x.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===An&&x.clearcoatNormalScale.value.negate())),m.dispersion>0&&(x.dispersion.value=m.dispersion),m.iridescence>0&&(x.iridescence.value=m.iridescence,x.iridescenceIOR.value=m.iridescenceIOR,x.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(x.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,x.iridescenceMapTransform)),m.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),m.transmission>0&&(x.transmission.value=m.transmission,x.transmissionSamplerMap.value=E.texture,x.transmissionSamplerSize.value.set(E.width,E.height),m.transmissionMap&&(x.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,x.transmissionMapTransform)),x.thickness.value=m.thickness,m.thicknessMap&&(x.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=m.attenuationDistance,x.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(x.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(x.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=m.specularIntensity,x.specularColor.value.copy(m.specularColor),m.specularColorMap&&(x.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,x.specularColorMapTransform)),m.specularIntensityMap&&(x.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,x.specularIntensityMapTransform))}function g(x,m){m.matcap&&(x.matcap.value=m.matcap)}function v(x,m){const E=t.get(m).light;x.referencePosition.value.setFromMatrixPosition(E.matrixWorld),x.nearDistance.value=E.shadow.camera.near,x.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function wg(s,t,e,n){let i={},o={},a=[];const r=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,M){const y=M.program;n.uniformBlockBinding(E,y)}function c(E,M){let y=i[E.id];y===void 0&&(g(E),y=h(E),i[E.id]=y,E.addEventListener("dispose",x));const I=M.program;n.updateUBOMapping(E,I);const w=t.render.frame;o[E.id]!==w&&(p(E),o[E.id]=w)}function h(E){const M=d();E.__bindingPointIndex=M;const y=s.createBuffer(),I=E.__size,w=E.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,I,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,y),y}function d(){for(let E=0;E<r;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(E){const M=i[E.id],y=E.uniforms,I=E.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let w=0,R=y.length;w<R;w++){const L=Array.isArray(y[w])?y[w]:[y[w]];for(let C=0,b=L.length;C<b;C++){const U=L[C];if(f(U,w,C,I)===!0){const G=U.__offset,H=Array.isArray(U.value)?U.value:[U.value];let Y=0;for(let Q=0;Q<H.length;Q++){const k=H[Q],j=v(k);typeof k=="number"||typeof k=="boolean"?(U.__data[0]=k,s.bufferSubData(s.UNIFORM_BUFFER,G+Y,U.__data)):k.isMatrix3?(U.__data[0]=k.elements[0],U.__data[1]=k.elements[1],U.__data[2]=k.elements[2],U.__data[3]=0,U.__data[4]=k.elements[3],U.__data[5]=k.elements[4],U.__data[6]=k.elements[5],U.__data[7]=0,U.__data[8]=k.elements[6],U.__data[9]=k.elements[7],U.__data[10]=k.elements[8],U.__data[11]=0):(k.toArray(U.__data,Y),Y+=j.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,G,U.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(E,M,y,I){const w=E.value,R=M+"_"+y;if(I[R]===void 0)return typeof w=="number"||typeof w=="boolean"?I[R]=w:I[R]=w.clone(),!0;{const L=I[R];if(typeof w=="number"||typeof w=="boolean"){if(L!==w)return I[R]=w,!0}else if(L.equals(w)===!1)return L.copy(w),!0}return!1}function g(E){const M=E.uniforms;let y=0;const I=16;for(let R=0,L=M.length;R<L;R++){const C=Array.isArray(M[R])?M[R]:[M[R]];for(let b=0,U=C.length;b<U;b++){const G=C[b],H=Array.isArray(G.value)?G.value:[G.value];for(let Y=0,Q=H.length;Y<Q;Y++){const k=H[Y],j=v(k),X=y%I,ot=X%j.boundary,rt=X+ot;y+=ot,rt!==0&&I-rt<j.storage&&(y+=I-rt),G.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=y,y+=j.storage}}}const w=y%I;return w>0&&(y+=I-w),E.__size=y,E.__cache={},this}function v(E){const M={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(M.boundary=4,M.storage=4):E.isVector2?(M.boundary=8,M.storage=8):E.isVector3||E.isColor?(M.boundary=16,M.storage=12):E.isVector4?(M.boundary=16,M.storage=16):E.isMatrix3?(M.boundary=48,M.storage=48):E.isMatrix4?(M.boundary=64,M.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),M}function x(E){const M=E.target;M.removeEventListener("dispose",x);const y=a.indexOf(M.__bindingPointIndex);a.splice(y,1),s.deleteBuffer(i[M.id]),delete i[M.id],delete o[M.id]}function m(){for(const E in i)s.deleteBuffer(i[E]);a=[],i={},o={}}return{bind:l,update:c,dispose:m}}class Sg{constructor(t={}){const{canvas:e=ud(),context:n=null,depth:i=!0,stencil:o=!1,alpha:a=!1,antialias:r=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),v=new Int32Array(4);let x=null,m=null;const E=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=zn,this.toneMapping=xi,this.toneMappingExposure=1;const y=this;let I=!1,w=0,R=0,L=null,C=-1,b=null;const U=new Le,G=new Le;let H=null;const Y=new jt(0);let Q=0,k=e.width,j=e.height,X=1,ot=null,rt=null;const ct=new Le(0,0,k,j),Bt=new Le(0,0,k,j);let yt=!1;const q=new _l;let $=!1,_t=!1;const pt=new ze,Gt=new ze,Lt=new A,ae=new Le,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Kt=!1;function ke(){return L===null?X:1}let z=n;function Ke(T,N){return e.getContext(T,N)}try{const T={alpha:!0,depth:i,stencil:o,antialias:r,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ll}`),e.addEventListener("webglcontextlost",et,!1),e.addEventListener("webglcontextrestored",xt,!1),e.addEventListener("webglcontextcreationerror",mt,!1),z===null){const N="webgl2";if(z=Ke(N,T),z===null)throw Ke(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let de,pe,Ot,Re,Dt,P,S,V,Z,tt,J,Ct,ft,Mt,ue,nt,wt,zt,Yt,bt,he,Jt,me,F;function ht(){de=new Rm(z),de.init(),Jt=new fg(z,de),pe=new wm(z,de,t,Jt),Ot=new ug(z,de),pe.reverseDepthBuffer&&p&&Ot.buffers.depth.setReversed(!0),Re=new Lm(z),Dt=new J0,P=new pg(z,de,Ot,Dt,pe,Jt,Re),S=new Tm(y),V=new Am(y),Z=new zd(z),me=new Mm(z,Z),tt=new Pm(z,Z,Re,me),J=new Um(z,tt,Z,Re),Yt=new Im(z,pe,P),nt=new Sm(Dt),Ct=new j0(y,S,V,de,pe,me,nt),ft=new bg(y,Dt),Mt=new Z0,ue=new sg(de),zt=new ym(y,S,V,Ot,J,f,l),wt=new cg(y,J,pe),F=new wg(z,Re,pe,Ot),bt=new bm(z,de,Re),he=new Dm(z,de,Re),Re.programs=Ct.programs,y.capabilities=pe,y.extensions=de,y.properties=Dt,y.renderLists=Mt,y.shadowMap=wt,y.state=Ot,y.info=Re}ht();const K=new yg(y,z);this.xr=K,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const T=de.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=de.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(T){T!==void 0&&(X=T,this.setSize(k,j,!1))},this.getSize=function(T){return T.set(k,j)},this.setSize=function(T,N,B=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=T,j=N,e.width=Math.floor(T*X),e.height=Math.floor(N*X),B===!0&&(e.style.width=T+"px",e.style.height=N+"px"),this.setViewport(0,0,T,N)},this.getDrawingBufferSize=function(T){return T.set(k*X,j*X).floor()},this.setDrawingBufferSize=function(T,N,B){k=T,j=N,X=B,e.width=Math.floor(T*B),e.height=Math.floor(N*B),this.setViewport(0,0,T,N)},this.getCurrentViewport=function(T){return T.copy(U)},this.getViewport=function(T){return T.copy(ct)},this.setViewport=function(T,N,B,W){T.isVector4?ct.set(T.x,T.y,T.z,T.w):ct.set(T,N,B,W),Ot.viewport(U.copy(ct).multiplyScalar(X).round())},this.getScissor=function(T){return T.copy(Bt)},this.setScissor=function(T,N,B,W){T.isVector4?Bt.set(T.x,T.y,T.z,T.w):Bt.set(T,N,B,W),Ot.scissor(G.copy(Bt).multiplyScalar(X).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(T){Ot.setScissorTest(yt=T)},this.setOpaqueSort=function(T){ot=T},this.setTransparentSort=function(T){rt=T},this.getClearColor=function(T){return T.copy(zt.getClearColor())},this.setClearColor=function(){zt.setClearColor.apply(zt,arguments)},this.getClearAlpha=function(){return zt.getClearAlpha()},this.setClearAlpha=function(){zt.setClearAlpha.apply(zt,arguments)},this.clear=function(T=!0,N=!0,B=!0){let W=0;if(T){let O=!1;if(L!==null){const st=L.texture.format;O=st===fl||st===pl||st===dl}if(O){const st=L.texture.type,vt=st===yi||st===is||st===Eo||st===Vs||st===hl||st===ul,At=zt.getClearColor(),Rt=zt.getClearAlpha(),Qt=At.r,re=At.g,Pt=At.b;vt?(g[0]=Qt,g[1]=re,g[2]=Pt,g[3]=Rt,z.clearBufferuiv(z.COLOR,0,g)):(v[0]=Qt,v[1]=re,v[2]=Pt,v[3]=Rt,z.clearBufferiv(z.COLOR,0,v))}else W|=z.COLOR_BUFFER_BIT}N&&(W|=z.DEPTH_BUFFER_BIT),B&&(W|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",xt,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),Mt.dispose(),ue.dispose(),Dt.dispose(),S.dispose(),V.dispose(),J.dispose(),me.dispose(),F.dispose(),Ct.dispose(),K.dispose(),K.removeEventListener("sessionstart",rs),K.removeEventListener("sessionend",$s),Rn.stop()};function et(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function xt(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const T=Re.autoReset,N=wt.enabled,B=wt.autoUpdate,W=wt.needsUpdate,O=wt.type;ht(),Re.autoReset=T,wt.enabled=N,wt.autoUpdate=B,wt.needsUpdate=W,wt.type=O}function mt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function $t(T){const N=T.target;N.removeEventListener("dispose",$t),ge(N)}function ge(T){$e(T),Dt.remove(T)}function $e(T){const N=Dt.get(T).programs;N!==void 0&&(N.forEach(function(B){Ct.releaseProgram(B)}),T.isShaderMaterial&&Ct.releaseShaderCache(T))}this.renderBufferDirect=function(T,N,B,W,O,st){N===null&&(N=Ae);const vt=O.isMesh&&O.matrixWorld.determinant()<0,At=Ht(T,N,B,W,O);Ot.setMaterial(W,vt);let Rt=B.index,Qt=1;if(W.wireframe===!0){if(Rt=tt.getWireframeAttribute(B),Rt===void 0)return;Qt=2}const re=B.drawRange,Pt=B.attributes.position;let be=re.start*Qt,Fe=(re.start+re.count)*Qt;st!==null&&(be=Math.max(be,st.start*Qt),Fe=Math.min(Fe,(st.start+st.count)*Qt)),Rt!==null?(be=Math.max(be,0),Fe=Math.min(Fe,Rt.count)):Pt!=null&&(be=Math.max(be,0),Fe=Math.min(Fe,Pt.count));const Be=Fe-be;if(Be<0||Be===1/0)return;me.setup(O,W,At,B,Rt);let Sn,Se=bt;if(Rt!==null&&(Sn=Z.get(Rt),Se=he,Se.setIndex(Sn)),O.isMesh)W.wireframe===!0?(Ot.setLineWidth(W.wireframeLinewidth*ke()),Se.setMode(z.LINES)):Se.setMode(z.TRIANGLES);else if(O.isLine){let It=W.linewidth;It===void 0&&(It=1),Ot.setLineWidth(It*ke()),O.isLineSegments?Se.setMode(z.LINES):O.isLineLoop?Se.setMode(z.LINE_LOOP):Se.setMode(z.LINE_STRIP)}else O.isPoints?Se.setMode(z.POINTS):O.isSprite&&Se.setMode(z.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Se.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(de.get("WEBGL_multi_draw"))Se.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const It=O._multiDrawStarts,ri=O._multiDrawCounts,Te=O._multiDrawCount,Kn=Rt?Z.get(Rt).bytesPerElement:1,cs=Dt.get(W).currentProgram.getUniforms();for(let Ln=0;Ln<Te;Ln++)cs.setValue(z,"_gl_DrawID",Ln),Se.render(It[Ln]/Kn,ri[Ln])}else if(O.isInstancedMesh)Se.renderInstances(be,Be,O.count);else if(B.isInstancedBufferGeometry){const It=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,ri=Math.min(B.instanceCount,It);Se.renderInstances(be,Be,ri)}else Se.render(be,Be)};function Me(T,N,B){T.transparent===!0&&T.side===cn&&T.forceSinglePass===!1?(T.side=An,T.needsUpdate=!0,wn(T,N,B),T.side=ii,T.needsUpdate=!0,wn(T,N,B),T.side=cn):wn(T,N,B)}this.compile=function(T,N,B=null){B===null&&(B=T),m=ue.get(B),m.init(N),M.push(m),B.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),T!==B&&T.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),m.setupLights();const W=new Set;return T.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const st=O.material;if(st)if(Array.isArray(st))for(let vt=0;vt<st.length;vt++){const At=st[vt];Me(At,B,O),W.add(At)}else Me(st,B,O),W.add(st)}),M.pop(),m=null,W},this.compileAsync=function(T,N,B=null){const W=this.compile(T,N,B);return new Promise(O=>{function st(){if(W.forEach(function(vt){Dt.get(vt).currentProgram.isReady()&&W.delete(vt)}),W.size===0){O(T);return}setTimeout(st,10)}de.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let nn=null;function un(T){nn&&nn(T)}function rs(){Rn.stop()}function $s(){Rn.start()}const Rn=new Gh;Rn.setAnimationLoop(un),typeof self<"u"&&Rn.setContext(self),this.setAnimationLoop=function(T){nn=T,K.setAnimationLoop(T),T===null?Rn.stop():Rn.start()},K.addEventListener("sessionstart",rs),K.addEventListener("sessionend",$s),this.render=function(T,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(N),N=K.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,N,L),m=ue.get(T,M.length),m.init(N),M.push(m),Gt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),q.setFromProjectionMatrix(Gt),_t=this.localClippingEnabled,$=nt.init(this.clippingPlanes,_t),x=Mt.get(T,E.length),x.init(),E.push(x),K.enabled===!0&&K.isPresenting===!0){const st=y.xr.getDepthSensingMesh();st!==null&&ls(st,N,-1/0,y.sortObjects)}ls(T,N,0,y.sortObjects),x.finish(),y.sortObjects===!0&&x.sort(ot,rt),Kt=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,Kt&&zt.addToRenderList(x,T),this.info.render.frame++,$===!0&&nt.beginShadows();const B=m.state.shadowsArray;wt.render(B,T,N),$===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=x.opaque,O=x.transmissive;if(m.setupLights(),N.isArrayCamera){const st=N.cameras;if(O.length>0)for(let vt=0,At=st.length;vt<At;vt++){const Rt=st[vt];Zs(W,O,T,Rt)}Kt&&zt.render(T);for(let vt=0,At=st.length;vt<At;vt++){const Rt=st[vt];Yn(x,T,Rt,Rt.viewport)}}else O.length>0&&Zs(W,O,T,N),Kt&&zt.render(T),Yn(x,T,N);L!==null&&(P.updateMultisampleRenderTarget(L),P.updateRenderTargetMipmap(L)),T.isScene===!0&&T.onAfterRender(y,T,N),me.resetDefaultState(),C=-1,b=null,M.pop(),M.length>0?(m=M[M.length-1],$===!0&&nt.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,E.pop(),E.length>0?x=E[E.length-1]:x=null};function ls(T,N,B,W){if(T.visible===!1)return;if(T.layers.test(N.layers)){if(T.isGroup)B=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(N);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||q.intersectsSprite(T)){W&&ae.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Gt);const vt=J.update(T),At=T.material;At.visible&&x.push(T,vt,At,B,ae.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||q.intersectsObject(T))){const vt=J.update(T),At=T.material;if(W&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ae.copy(T.boundingSphere.center)):(vt.boundingSphere===null&&vt.computeBoundingSphere(),ae.copy(vt.boundingSphere.center)),ae.applyMatrix4(T.matrixWorld).applyMatrix4(Gt)),Array.isArray(At)){const Rt=vt.groups;for(let Qt=0,re=Rt.length;Qt<re;Qt++){const Pt=Rt[Qt],be=At[Pt.materialIndex];be&&be.visible&&x.push(T,vt,be,B,ae.z,Pt)}}else At.visible&&x.push(T,vt,At,B,ae.z,null)}}const st=T.children;for(let vt=0,At=st.length;vt<At;vt++)ls(st[vt],N,B,W)}function Yn(T,N,B,W){const O=T.opaque,st=T.transmissive,vt=T.transparent;m.setupLightsView(B),$===!0&&nt.setGlobalState(y.clippingPlanes,B),W&&Ot.viewport(U.copy(W)),O.length>0&&Pn(O,N,B),st.length>0&&Pn(st,N,B),vt.length>0&&Pn(vt,N,B),Ot.buffers.depth.setTest(!0),Ot.buffers.depth.setMask(!0),Ot.buffers.color.setMask(!0),Ot.setPolygonOffset(!1)}function Zs(T,N,B,W){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[W.id]===void 0&&(m.state.transmissionRenderTarget[W.id]=new ss(1,1,{generateMipmaps:!0,type:de.has("EXT_color_buffer_half_float")||de.has("EXT_color_buffer_float")?Ro:yi,minFilter:ns,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ye.workingColorSpace}));const st=m.state.transmissionRenderTarget[W.id],vt=W.viewport||U;st.setSize(vt.z,vt.w);const At=y.getRenderTarget();y.setRenderTarget(st),y.getClearColor(Y),Q=y.getClearAlpha(),Q<1&&y.setClearColor(16777215,.5),y.clear(),Kt&&zt.render(B);const Rt=y.toneMapping;y.toneMapping=xi;const Qt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),m.setupLightsView(W),$===!0&&nt.setGlobalState(y.clippingPlanes,W),Pn(T,B,W),P.updateMultisampleRenderTarget(st),P.updateRenderTargetMipmap(st),de.has("WEBGL_multisampled_render_to_texture")===!1){let re=!1;for(let Pt=0,be=N.length;Pt<be;Pt++){const Fe=N[Pt],Be=Fe.object,Sn=Fe.geometry,Se=Fe.material,It=Fe.group;if(Se.side===cn&&Be.layers.test(W.layers)){const ri=Se.side;Se.side=An,Se.needsUpdate=!0,Dn(Be,B,W,Sn,Se,It),Se.side=ri,Se.needsUpdate=!0,re=!0}}re===!0&&(P.updateMultisampleRenderTarget(st),P.updateRenderTargetMipmap(st))}y.setRenderTarget(At),y.setClearColor(Y,Q),Qt!==void 0&&(W.viewport=Qt),y.toneMapping=Rt}function Pn(T,N,B){const W=N.isScene===!0?N.overrideMaterial:null;for(let O=0,st=T.length;O<st;O++){const vt=T[O],At=vt.object,Rt=vt.geometry,Qt=W===null?vt.material:W,re=vt.group;At.layers.test(B.layers)&&Dn(At,N,B,Rt,Qt,re)}}function Dn(T,N,B,W,O,st){T.onBeforeRender(y,N,B,W,O,st),T.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),O.onBeforeRender(y,N,B,W,T,st),O.transparent===!0&&O.side===cn&&O.forceSinglePass===!1?(O.side=An,O.needsUpdate=!0,y.renderBufferDirect(B,N,W,O,T,st),O.side=ii,O.needsUpdate=!0,y.renderBufferDirect(B,N,W,O,T,st),O.side=cn):y.renderBufferDirect(B,N,W,O,T,st),T.onAfterRender(y,N,B,W,O,st)}function wn(T,N,B){N.isScene!==!0&&(N=Ae);const W=Dt.get(T),O=m.state.lights,st=m.state.shadowsArray,vt=O.state.version,At=Ct.getParameters(T,O.state,st,N,B),Rt=Ct.getProgramCacheKey(At);let Qt=W.programs;W.environment=T.isMeshStandardMaterial?N.environment:null,W.fog=N.fog,W.envMap=(T.isMeshStandardMaterial?V:S).get(T.envMap||W.environment),W.envMapRotation=W.environment!==null&&T.envMap===null?N.environmentRotation:T.envMapRotation,Qt===void 0&&(T.addEventListener("dispose",$t),Qt=new Map,W.programs=Qt);let re=Qt.get(Rt);if(re!==void 0){if(W.currentProgram===re&&W.lightsStateVersion===vt)return at(T,At),re}else At.uniforms=Ct.getUniforms(T),T.onBeforeCompile(At,y),re=Ct.acquireProgram(At,Rt),Qt.set(Rt,re),W.uniforms=At.uniforms;const Pt=W.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Pt.clippingPlanes=nt.uniform),at(T,At),W.needsLights=xe(T),W.lightsStateVersion=vt,W.needsLights&&(Pt.ambientLightColor.value=O.state.ambient,Pt.lightProbe.value=O.state.probe,Pt.directionalLights.value=O.state.directional,Pt.directionalLightShadows.value=O.state.directionalShadow,Pt.spotLights.value=O.state.spot,Pt.spotLightShadows.value=O.state.spotShadow,Pt.rectAreaLights.value=O.state.rectArea,Pt.ltc_1.value=O.state.rectAreaLTC1,Pt.ltc_2.value=O.state.rectAreaLTC2,Pt.pointLights.value=O.state.point,Pt.pointLightShadows.value=O.state.pointShadow,Pt.hemisphereLights.value=O.state.hemi,Pt.directionalShadowMap.value=O.state.directionalShadowMap,Pt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Pt.spotShadowMap.value=O.state.spotShadowMap,Pt.spotLightMatrix.value=O.state.spotLightMatrix,Pt.spotLightMap.value=O.state.spotLightMap,Pt.pointShadowMap.value=O.state.pointShadowMap,Pt.pointShadowMatrix.value=O.state.pointShadowMatrix),W.currentProgram=re,W.uniformsList=null,re}function Io(T){if(T.uniformsList===null){const N=T.currentProgram.getUniforms();T.uniformsList=ma.seqWithValue(N.seq,T.uniforms)}return T.uniformsList}function at(T,N){const B=Dt.get(T);B.outputColorSpace=N.outputColorSpace,B.batching=N.batching,B.batchingColor=N.batchingColor,B.instancing=N.instancing,B.instancingColor=N.instancingColor,B.instancingMorph=N.instancingMorph,B.skinning=N.skinning,B.morphTargets=N.morphTargets,B.morphNormals=N.morphNormals,B.morphColors=N.morphColors,B.morphTargetsCount=N.morphTargetsCount,B.numClippingPlanes=N.numClippingPlanes,B.numIntersection=N.numClipIntersection,B.vertexAlphas=N.vertexAlphas,B.vertexTangents=N.vertexTangents,B.toneMapping=N.toneMapping}function Ht(T,N,B,W,O){N.isScene!==!0&&(N=Ae),P.resetTextureUnits();const st=N.fog,vt=W.isMeshStandardMaterial?N.environment:null,At=L===null?y.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Ys,Rt=(W.isMeshStandardMaterial?V:S).get(W.envMap||vt),Qt=W.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,re=!!B.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Pt=!!B.morphAttributes.position,be=!!B.morphAttributes.normal,Fe=!!B.morphAttributes.color;let Be=xi;W.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Be=y.toneMapping);const Sn=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Se=Sn!==void 0?Sn.length:0,It=Dt.get(W),ri=m.state.lights;if($===!0&&(_t===!0||T!==b)){const Gn=T===b&&W.id===C;nt.setState(W,T,Gn)}let Te=!1;W.version===It.__version?(It.needsLights&&It.lightsStateVersion!==ri.state.version||It.outputColorSpace!==At||O.isBatchedMesh&&It.batching===!1||!O.isBatchedMesh&&It.batching===!0||O.isBatchedMesh&&It.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&It.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&It.instancing===!1||!O.isInstancedMesh&&It.instancing===!0||O.isSkinnedMesh&&It.skinning===!1||!O.isSkinnedMesh&&It.skinning===!0||O.isInstancedMesh&&It.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&It.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&It.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&It.instancingMorph===!1&&O.morphTexture!==null||It.envMap!==Rt||W.fog===!0&&It.fog!==st||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==nt.numPlanes||It.numIntersection!==nt.numIntersection)||It.vertexAlphas!==Qt||It.vertexTangents!==re||It.morphTargets!==Pt||It.morphNormals!==be||It.morphColors!==Fe||It.toneMapping!==Be||It.morphTargetsCount!==Se)&&(Te=!0):(Te=!0,It.__version=W.version);let Kn=It.currentProgram;Te===!0&&(Kn=wn(W,N,O));let cs=!1,Ln=!1,Qs=!1;const Ge=Kn.getUniforms(),si=It.uniforms;if(Ot.useProgram(Kn.program)&&(cs=!0,Ln=!0,Qs=!0),W.id!==C&&(C=W.id,Ln=!0),cs||b!==T){Ot.buffers.depth.getReversed()?(pt.copy(T.projectionMatrix),pd(pt),fd(pt),Ge.setValue(z,"projectionMatrix",pt)):Ge.setValue(z,"projectionMatrix",T.projectionMatrix),Ge.setValue(z,"viewMatrix",T.matrixWorldInverse);const bi=Ge.map.cameraPosition;bi!==void 0&&bi.setValue(z,Lt.setFromMatrixPosition(T.matrixWorld)),pe.logarithmicDepthBuffer&&Ge.setValue(z,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Ge.setValue(z,"isOrthographic",T.isOrthographicCamera===!0),b!==T&&(b=T,Ln=!0,Qs=!0)}if(O.isSkinnedMesh){Ge.setOptional(z,O,"bindMatrix"),Ge.setOptional(z,O,"bindMatrixInverse");const Gn=O.skeleton;Gn&&(Gn.boneTexture===null&&Gn.computeBoneTexture(),Ge.setValue(z,"boneTexture",Gn.boneTexture,P))}O.isBatchedMesh&&(Ge.setOptional(z,O,"batchingTexture"),Ge.setValue(z,"batchingTexture",O._matricesTexture,P),Ge.setOptional(z,O,"batchingIdTexture"),Ge.setValue(z,"batchingIdTexture",O._indirectTexture,P),Ge.setOptional(z,O,"batchingColorTexture"),O._colorsTexture!==null&&Ge.setValue(z,"batchingColorTexture",O._colorsTexture,P));const to=B.morphAttributes;if((to.position!==void 0||to.normal!==void 0||to.color!==void 0)&&Yt.update(O,B,Kn),(Ln||It.receiveShadow!==O.receiveShadow)&&(It.receiveShadow=O.receiveShadow,Ge.setValue(z,"receiveShadow",O.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(si.envMap.value=Rt,si.flipEnvMap.value=Rt.isCubeTexture&&Rt.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&N.environment!==null&&(si.envMapIntensity.value=N.environmentIntensity),Ln&&(Ge.setValue(z,"toneMappingExposure",y.toneMappingExposure),It.needsLights&&we(si,Qs),st&&W.fog===!0&&ft.refreshFogUniforms(si,st),ft.refreshMaterialUniforms(si,W,X,j,m.state.transmissionRenderTarget[T.id]),ma.upload(z,Io(It),si,P)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(ma.upload(z,Io(It),si,P),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Ge.setValue(z,"center",O.center),Ge.setValue(z,"modelViewMatrix",O.modelViewMatrix),Ge.setValue(z,"normalMatrix",O.normalMatrix),Ge.setValue(z,"modelMatrix",O.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Gn=W.uniformsGroups;for(let bi=0,wi=Gn.length;bi<wi;bi++){const Pl=Gn[bi];F.update(Pl,Kn),F.bind(Pl,Kn)}}return Kn}function we(T,N){T.ambientLightColor.needsUpdate=N,T.lightProbe.needsUpdate=N,T.directionalLights.needsUpdate=N,T.directionalLightShadows.needsUpdate=N,T.pointLights.needsUpdate=N,T.pointLightShadows.needsUpdate=N,T.spotLights.needsUpdate=N,T.spotLightShadows.needsUpdate=N,T.rectAreaLights.needsUpdate=N,T.hemisphereLights.needsUpdate=N}function xe(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(T,N,B){Dt.get(T.texture).__webglTexture=N,Dt.get(T.depthTexture).__webglTexture=B;const W=Dt.get(T);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=B===void 0,W.__autoAllocateDepthBuffer||de.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,N){const B=Dt.get(T);B.__webglFramebuffer=N,B.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(T,N=0,B=0){L=T,w=N,R=B;let W=!0,O=null,st=!1,vt=!1;if(T){const Rt=Dt.get(T);if(Rt.__useDefaultFramebuffer!==void 0)Ot.bindFramebuffer(z.FRAMEBUFFER,null),W=!1;else if(Rt.__webglFramebuffer===void 0)P.setupRenderTarget(T);else if(Rt.__hasExternalTextures)P.rebindTextures(T,Dt.get(T.texture).__webglTexture,Dt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Pt=T.depthTexture;if(Rt.__boundDepthTexture!==Pt){if(Pt!==null&&Dt.has(Pt)&&(T.width!==Pt.image.width||T.height!==Pt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(T)}}const Qt=T.texture;(Qt.isData3DTexture||Qt.isDataArrayTexture||Qt.isCompressedArrayTexture)&&(vt=!0);const re=Dt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(re[N])?O=re[N][B]:O=re[N],st=!0):T.samples>0&&P.useMultisampledRTT(T)===!1?O=Dt.get(T).__webglMultisampledFramebuffer:Array.isArray(re)?O=re[B]:O=re,U.copy(T.viewport),G.copy(T.scissor),H=T.scissorTest}else U.copy(ct).multiplyScalar(X).floor(),G.copy(Bt).multiplyScalar(X).floor(),H=yt;if(Ot.bindFramebuffer(z.FRAMEBUFFER,O)&&W&&Ot.drawBuffers(T,O),Ot.viewport(U),Ot.scissor(G),Ot.setScissorTest(H),st){const Rt=Dt.get(T.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+N,Rt.__webglTexture,B)}else if(vt){const Rt=Dt.get(T.texture),Qt=N||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Rt.__webglTexture,B||0,Qt)}C=-1},this.readRenderTargetPixels=function(T,N,B,W,O,st,vt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=Dt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&vt!==void 0&&(At=At[vt]),At){Ot.bindFramebuffer(z.FRAMEBUFFER,At);try{const Rt=T.texture,Qt=Rt.format,re=Rt.type;if(!pe.textureFormatReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pe.textureTypeReadable(re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=T.width-W&&B>=0&&B<=T.height-O&&z.readPixels(N,B,W,O,Jt.convert(Qt),Jt.convert(re),st)}finally{const Rt=L!==null?Dt.get(L).__webglFramebuffer:null;Ot.bindFramebuffer(z.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(T,N,B,W,O,st,vt){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=Dt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&vt!==void 0&&(At=At[vt]),At){const Rt=T.texture,Qt=Rt.format,re=Rt.type;if(!pe.textureFormatReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pe.textureTypeReadable(re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=T.width-W&&B>=0&&B<=T.height-O){Ot.bindFramebuffer(z.FRAMEBUFFER,At);const Pt=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Pt),z.bufferData(z.PIXEL_PACK_BUFFER,st.byteLength,z.STREAM_READ),z.readPixels(N,B,W,O,Jt.convert(Qt),Jt.convert(re),0);const be=L!==null?Dt.get(L).__webglFramebuffer:null;Ot.bindFramebuffer(z.FRAMEBUFFER,be);const Fe=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await dd(z,Fe,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Pt),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,st),z.deleteBuffer(Pt),z.deleteSync(Fe),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,N=null,B=0){T.isTexture!==!0&&(go("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,T=arguments[1]);const W=Math.pow(2,-B),O=Math.floor(T.image.width*W),st=Math.floor(T.image.height*W),vt=N!==null?N.x:0,At=N!==null?N.y:0;P.setTexture2D(T,0),z.copyTexSubImage2D(z.TEXTURE_2D,B,0,0,vt,At,O,st),Ot.unbindTexture()},this.copyTextureToTexture=function(T,N,B=null,W=null,O=0){T.isTexture!==!0&&(go("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,T=arguments[1],N=arguments[2],O=arguments[3]||0,B=null);let st,vt,At,Rt,Qt,re,Pt,be,Fe;const Be=T.isCompressedTexture?T.mipmaps[O]:T.image;B!==null?(st=B.max.x-B.min.x,vt=B.max.y-B.min.y,At=B.isBox3?B.max.z-B.min.z:1,Rt=B.min.x,Qt=B.min.y,re=B.isBox3?B.min.z:0):(st=Be.width,vt=Be.height,At=Be.depth||1,Rt=0,Qt=0,re=0),W!==null?(Pt=W.x,be=W.y,Fe=W.z):(Pt=0,be=0,Fe=0);const Sn=Jt.convert(N.format),Se=Jt.convert(N.type);let It;N.isData3DTexture?(P.setTexture3D(N,0),It=z.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(P.setTexture2DArray(N,0),It=z.TEXTURE_2D_ARRAY):(P.setTexture2D(N,0),It=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,N.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,N.unpackAlignment);const ri=z.getParameter(z.UNPACK_ROW_LENGTH),Te=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Kn=z.getParameter(z.UNPACK_SKIP_PIXELS),cs=z.getParameter(z.UNPACK_SKIP_ROWS),Ln=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Be.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Be.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Rt),z.pixelStorei(z.UNPACK_SKIP_ROWS,Qt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,re);const Qs=T.isDataArrayTexture||T.isData3DTexture,Ge=N.isDataArrayTexture||N.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const si=Dt.get(T),to=Dt.get(N),Gn=Dt.get(si.__renderTarget),bi=Dt.get(to.__renderTarget);Ot.bindFramebuffer(z.READ_FRAMEBUFFER,Gn.__webglFramebuffer),Ot.bindFramebuffer(z.DRAW_FRAMEBUFFER,bi.__webglFramebuffer);for(let wi=0;wi<At;wi++)Qs&&z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Dt.get(T).__webglTexture,O,re+wi),T.isDepthTexture?(Ge&&z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Dt.get(N).__webglTexture,O,Fe+wi),z.blitFramebuffer(Rt,Qt,st,vt,Pt,be,st,vt,z.DEPTH_BUFFER_BIT,z.NEAREST)):Ge?z.copyTexSubImage3D(It,O,Pt,be,Fe+wi,Rt,Qt,st,vt):z.copyTexSubImage2D(It,O,Pt,be,Fe+wi,Rt,Qt,st,vt);Ot.bindFramebuffer(z.READ_FRAMEBUFFER,null),Ot.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Ge?T.isDataTexture||T.isData3DTexture?z.texSubImage3D(It,O,Pt,be,Fe,st,vt,At,Sn,Se,Be.data):N.isCompressedArrayTexture?z.compressedTexSubImage3D(It,O,Pt,be,Fe,st,vt,At,Sn,Be.data):z.texSubImage3D(It,O,Pt,be,Fe,st,vt,At,Sn,Se,Be):T.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,O,Pt,be,st,vt,Sn,Se,Be.data):T.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,O,Pt,be,Be.width,Be.height,Sn,Be.data):z.texSubImage2D(z.TEXTURE_2D,O,Pt,be,st,vt,Sn,Se,Be);z.pixelStorei(z.UNPACK_ROW_LENGTH,ri),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Te),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Kn),z.pixelStorei(z.UNPACK_SKIP_ROWS,cs),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Ln),O===0&&N.generateMipmaps&&z.generateMipmap(It),Ot.unbindTexture()},this.copyTextureToTexture3D=function(T,N,B=null,W=null,O=0){return T.isTexture!==!0&&(go("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,W=arguments[1]||null,T=arguments[2],N=arguments[3],O=arguments[4]||0),go('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,N,B,W,O)},this.initRenderTarget=function(T){Dt.get(T).__webglFramebuffer===void 0&&P.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?P.setTextureCube(T,0):T.isData3DTexture?P.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?P.setTexture2DArray(T,0):P.setTexture2D(T,0),Ot.unbindTexture()},this.resetState=function(){w=0,R=0,L=null,Ot.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ye._getDrawingBufferColorSpace(t),e.unpackColorSpace=ye._getUnpackColorSpace()}}class Ml{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new jt(t),this.density=e}clone(){return new Ml(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Tg extends on{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xn,this.environmentIntensity=1,this.environmentRotation=new Xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Eg{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Qr,this.updateRanges=[],this.version=0,this.uuid=vi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,o=this.stride;i<o;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const gn=new A;class va{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)gn.fromBufferAttribute(this,e),gn.applyMatrix4(t),this.setXYZ(e,gn.x,gn.y,gn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)gn.fromBufferAttribute(this,e),gn.applyNormalMatrix(t),this.setXYZ(e,gn.x,gn.y,gn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)gn.fromBufferAttribute(this,e),gn.transformDirection(t),this.setXYZ(e,gn.x,gn.y,gn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Qn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ce(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Ce(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Qn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Qn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Qn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Qn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array),i=Ce(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array),i=Ce(i,this.array),o=Ce(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=o,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[i+o])}return new Mn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new va(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[i+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class bl extends as{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new jt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ss;const oo=new A,Ts=new A,Es=new A,Cs=new St,ao=new St,qh=new ze,ea=new A,ro=new A,na=new A,Rc=new St,nr=new St,Pc=new St;class jh extends on{constructor(t=new bl){if(super(),this.isSprite=!0,this.type="Sprite",Ss===void 0){Ss=new bn;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Eg(e,5);Ss.setIndex([0,1,2,0,2,3]),Ss.setAttribute("position",new va(n,3,0,!1)),Ss.setAttribute("uv",new va(n,2,3,!1))}this.geometry=Ss,this.material=t,this.center=new St(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ts.setFromMatrixScale(this.matrixWorld),qh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Es.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ts.multiplyScalar(-Es.z);const n=this.material.rotation;let i,o;n!==0&&(o=Math.cos(n),i=Math.sin(n));const a=this.center;ia(ea.set(-.5,-.5,0),Es,a,Ts,i,o),ia(ro.set(.5,-.5,0),Es,a,Ts,i,o),ia(na.set(.5,.5,0),Es,a,Ts,i,o),Rc.set(0,0),nr.set(1,0),Pc.set(1,1);let r=t.ray.intersectTriangle(ea,ro,na,!1,oo);if(r===null&&(ia(ro.set(-.5,.5,0),Es,a,Ts,i,o),nr.set(0,1),r=t.ray.intersectTriangle(ea,na,ro,!1,oo),r===null))return;const l=t.ray.origin.distanceTo(oo);l<t.near||l>t.far||e.push({distance:l,point:oo.clone(),uv:Wn.getInterpolation(oo,ea,ro,na,Rc,nr,Pc,new St),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function ia(s,t,e,n,i,o){Cs.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(ao.x=o*Cs.x-i*Cs.y,ao.y=i*Cs.x+o*Cs.y):ao.copy(Cs),s.copy(t),s.x+=ao.x,s.y+=ao.y,s.applyMatrix4(qh)}class wl extends yn{constructor(t,e,n,i,o,a,r,l,c){super(t,e,n,i,o,a,r,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Mi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),o=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),o+=n.distanceTo(i),e.push(o),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const o=n.length;let a;e?a=e:a=t*n[o-1];let r=0,l=o-1,c;for(;r<=l;)if(i=Math.floor(r+(l-r)/2),c=n[i]-a,c<0)r=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(o-1);const h=n[i],p=n[i+1]-h,f=(a-h)/p;return(i+f)/(o-1)}getTangent(t,e){let i=t-1e-4,o=t+1e-4;i<0&&(i=0),o>1&&(o=1);const a=this.getPoint(i),r=this.getPoint(o),l=e||(a.isVector2?new St:new A);return l.copy(r).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new A,i=[],o=[],a=[],r=new A,l=new ze;for(let f=0;f<=t;f++){const g=f/t;i[f]=this.getTangentAt(g,new A)}o[0]=new A,a[0]=new A;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),d=Math.abs(i[0].y),p=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),p<=c&&n.set(0,0,1),r.crossVectors(i[0],n).normalize(),o[0].crossVectors(i[0],r),a[0].crossVectors(i[0],o[0]);for(let f=1;f<=t;f++){if(o[f]=o[f-1].clone(),a[f]=a[f-1].clone(),r.crossVectors(i[f-1],i[f]),r.length()>Number.EPSILON){r.normalize();const g=Math.acos(ln(i[f-1].dot(i[f]),-1,1));o[f].applyMatrix4(l.makeRotationAxis(r,g))}a[f].crossVectors(i[f],o[f])}if(e===!0){let f=Math.acos(ln(o[0].dot(o[t]),-1,1));f/=t,i[0].dot(r.crossVectors(o[0],o[t]))>0&&(f=-f);for(let g=1;g<=t;g++)o[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),a[g].crossVectors(i[g],o[g])}return{tangents:i,normals:o,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Jh extends Mi{constructor(t=0,e=0,n=1,i=1,o=0,a=Math.PI*2,r=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=o,this.aEndAngle=a,this.aClockwise=r,this.aRotation=l}getPoint(t,e=new St){const n=e,i=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const a=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=i;for(;o>i;)o-=i;o<Number.EPSILON&&(a?o=0:o=i),this.aClockwise===!0&&!a&&(o===i?o=-i:o=o-i);const r=this.aStartAngle+t*o;let l=this.aX+this.xRadius*Math.cos(r),c=this.aY+this.yRadius*Math.sin(r);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),p=l-this.aX,f=c-this.aY;l=p*h-f*d+this.aX,c=p*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Cg extends Jh{constructor(t,e,n,i,o,a){super(t,e,n,n,i,o,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Sl(){let s=0,t=0,e=0,n=0;function i(o,a,r,l){s=o,t=r,e=-3*o+3*a-2*r-l,n=2*o-2*a+r+l}return{initCatmullRom:function(o,a,r,l,c){i(a,r,c*(r-o),c*(l-a))},initNonuniformCatmullRom:function(o,a,r,l,c,h,d){let p=(a-o)/c-(r-o)/(c+h)+(r-a)/h,f=(r-a)/h-(l-a)/(h+d)+(l-r)/d;p*=h,f*=h,i(a,r,p,f)},calc:function(o){const a=o*o,r=a*o;return s+t*o+e*a+n*r}}}const sa=new A,ir=new Sl,sr=new Sl,or=new Sl;class el extends Mi{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new A){const n=e,i=this.points,o=i.length,a=(o-(this.closed?0:1))*t;let r=Math.floor(a),l=a-r;this.closed?r+=r>0?0:(Math.floor(Math.abs(r)/o)+1)*o:l===0&&r===o-1&&(r=o-2,l=1);let c,h;this.closed||r>0?c=i[(r-1)%o]:(sa.subVectors(i[0],i[1]).add(i[0]),c=sa);const d=i[r%o],p=i[(r+1)%o];if(this.closed||r+2<o?h=i[(r+2)%o]:(sa.subVectors(i[o-1],i[o-2]).add(i[o-1]),h=sa),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(p),f),x=Math.pow(p.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),x<1e-4&&(x=v),ir.initNonuniformCatmullRom(c.x,d.x,p.x,h.x,g,v,x),sr.initNonuniformCatmullRom(c.y,d.y,p.y,h.y,g,v,x),or.initNonuniformCatmullRom(c.z,d.z,p.z,h.z,g,v,x)}else this.curveType==="catmullrom"&&(ir.initCatmullRom(c.x,d.x,p.x,h.x,this.tension),sr.initCatmullRom(c.y,d.y,p.y,h.y,this.tension),or.initCatmullRom(c.z,d.z,p.z,h.z,this.tension));return n.set(ir.calc(l),sr.calc(l),or.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new A().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Dc(s,t,e,n,i){const o=(n-t)*.5,a=(i-e)*.5,r=s*s,l=s*r;return(2*e-2*n+o+a)*l+(-3*e+3*n-2*o-a)*r+o*s+e}function Ag(s,t){const e=1-s;return e*e*t}function Rg(s,t){return 2*(1-s)*s*t}function Pg(s,t){return s*s*t}function bo(s,t,e,n){return Ag(s,t)+Rg(s,e)+Pg(s,n)}function Dg(s,t){const e=1-s;return e*e*e*t}function Lg(s,t){const e=1-s;return 3*e*e*s*t}function Ig(s,t){return 3*(1-s)*s*s*t}function Ug(s,t){return s*s*s*t}function wo(s,t,e,n,i){return Dg(s,t)+Lg(s,e)+Ig(s,n)+Ug(s,i)}class Ng extends Mi{constructor(t=new St,e=new St,n=new St,i=new St){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new St){const n=e,i=this.v0,o=this.v1,a=this.v2,r=this.v3;return n.set(wo(t,i.x,o.x,a.x,r.x),wo(t,i.y,o.y,a.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Fg extends Mi{constructor(t=new A,e=new A,n=new A,i=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new A){const n=e,i=this.v0,o=this.v1,a=this.v2,r=this.v3;return n.set(wo(t,i.x,o.x,a.x,r.x),wo(t,i.y,o.y,a.y,r.y),wo(t,i.z,o.z,a.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Og extends Mi{constructor(t=new St,e=new St){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new St){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new St){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class zg extends Mi{constructor(t=new A,e=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new A){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new A){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class kg extends Mi{constructor(t=new St,e=new St,n=new St){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new St){const n=e,i=this.v0,o=this.v1,a=this.v2;return n.set(bo(t,i.x,o.x,a.x),bo(t,i.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class $h extends Mi{constructor(t=new A,e=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new A){const n=e,i=this.v0,o=this.v1,a=this.v2;return n.set(bo(t,i.x,o.x,a.x),bo(t,i.y,o.y,a.y),bo(t,i.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Bg extends Mi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new St){const n=e,i=this.points,o=(i.length-1)*t,a=Math.floor(o),r=o-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],d=i[a>i.length-3?i.length-1:a+2];return n.set(Dc(r,l.x,c.x,h.x,d.x),Dc(r,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new St().fromArray(i))}return this}}var Gg=Object.freeze({__proto__:null,ArcCurve:Cg,CatmullRomCurve3:el,CubicBezierCurve:Ng,CubicBezierCurve3:Fg,EllipseCurve:Jh,LineCurve:Og,LineCurve3:zg,QuadraticBezierCurve:kg,QuadraticBezierCurve3:$h,SplineCurve:Bg});class Sa extends bn{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const o=[],a=[],r=[],l=[],c=new A,h=new St;a.push(0,0,0),r.push(0,0,1),l.push(.5,.5);for(let d=0,p=3;d<=e;d++,p+=3){const f=n+d/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),r.push(0,0,1),h.x=(a[p]/t+1)/2,h.y=(a[p+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)o.push(d,d+1,0);this.setIndex(o),this.setAttribute("position",new Ie(a,3)),this.setAttribute("normal",new Ie(r,3)),this.setAttribute("uv",new Ie(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sa(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ut extends bn{constructor(t=1,e=1,n=1,i=32,o=1,a=!1,r=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:o,openEnded:a,thetaStart:r,thetaLength:l};const c=this;i=Math.floor(i),o=Math.floor(o);const h=[],d=[],p=[],f=[];let g=0;const v=[],x=n/2;let m=0;E(),a===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Ie(d,3)),this.setAttribute("normal",new Ie(p,3)),this.setAttribute("uv",new Ie(f,2));function E(){const y=new A,I=new A;let w=0;const R=(e-t)/n;for(let L=0;L<=o;L++){const C=[],b=L/o,U=b*(e-t)+t;for(let G=0;G<=i;G++){const H=G/i,Y=H*l+r,Q=Math.sin(Y),k=Math.cos(Y);I.x=U*Q,I.y=-b*n+x,I.z=U*k,d.push(I.x,I.y,I.z),y.set(Q,R,k).normalize(),p.push(y.x,y.y,y.z),f.push(H,1-b),C.push(g++)}v.push(C)}for(let L=0;L<i;L++)for(let C=0;C<o;C++){const b=v[C][L],U=v[C+1][L],G=v[C+1][L+1],H=v[C][L+1];(t>0||C!==0)&&(h.push(b,U,H),w+=3),(e>0||C!==o-1)&&(h.push(U,G,H),w+=3)}c.addGroup(m,w,0),m+=w}function M(y){const I=g,w=new St,R=new A;let L=0;const C=y===!0?t:e,b=y===!0?1:-1;for(let G=1;G<=i;G++)d.push(0,x*b,0),p.push(0,b,0),f.push(.5,.5),g++;const U=g;for(let G=0;G<=i;G++){const Y=G/i*l+r,Q=Math.cos(Y),k=Math.sin(Y);R.x=C*k,R.y=x*b,R.z=C*Q,d.push(R.x,R.y,R.z),p.push(0,b,0),w.x=Q*.5+.5,w.y=k*.5*b+.5,f.push(w.x,w.y),g++}for(let G=0;G<i;G++){const H=I+G,Y=U+G;y===!0?h.push(Y,Y+1,H):h.push(Y+1,Y,H),L+=3}c.addGroup(m,L,y===!0?1:2),m+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ut(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Oe extends Ut{constructor(t=1,e=1,n=32,i=1,o=!1,a=0,r=Math.PI*2){super(0,t,e,n,i,o,a,r),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:o,thetaStart:a,thetaLength:r}}static fromJSON(t){return new Oe(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Do extends bn{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const o=[],a=[];r(i),c(n),h(),this.setAttribute("position",new Ie(o,3)),this.setAttribute("normal",new Ie(o.slice(),3)),this.setAttribute("uv",new Ie(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function r(E){const M=new A,y=new A,I=new A;for(let w=0;w<e.length;w+=3)f(e[w+0],M),f(e[w+1],y),f(e[w+2],I),l(M,y,I,E)}function l(E,M,y,I){const w=I+1,R=[];for(let L=0;L<=w;L++){R[L]=[];const C=E.clone().lerp(y,L/w),b=M.clone().lerp(y,L/w),U=w-L;for(let G=0;G<=U;G++)G===0&&L===w?R[L][G]=C:R[L][G]=C.clone().lerp(b,G/U)}for(let L=0;L<w;L++)for(let C=0;C<2*(w-L)-1;C++){const b=Math.floor(C/2);C%2===0?(p(R[L][b+1]),p(R[L+1][b]),p(R[L][b])):(p(R[L][b+1]),p(R[L+1][b+1]),p(R[L+1][b]))}}function c(E){const M=new A;for(let y=0;y<o.length;y+=3)M.x=o[y+0],M.y=o[y+1],M.z=o[y+2],M.normalize().multiplyScalar(E),o[y+0]=M.x,o[y+1]=M.y,o[y+2]=M.z}function h(){const E=new A;for(let M=0;M<o.length;M+=3){E.x=o[M+0],E.y=o[M+1],E.z=o[M+2];const y=x(E)/2/Math.PI+.5,I=m(E)/Math.PI+.5;a.push(y,1-I)}g(),d()}function d(){for(let E=0;E<a.length;E+=6){const M=a[E+0],y=a[E+2],I=a[E+4],w=Math.max(M,y,I),R=Math.min(M,y,I);w>.9&&R<.1&&(M<.2&&(a[E+0]+=1),y<.2&&(a[E+2]+=1),I<.2&&(a[E+4]+=1))}}function p(E){o.push(E.x,E.y,E.z)}function f(E,M){const y=E*3;M.x=t[y+0],M.y=t[y+1],M.z=t[y+2]}function g(){const E=new A,M=new A,y=new A,I=new A,w=new St,R=new St,L=new St;for(let C=0,b=0;C<o.length;C+=9,b+=6){E.set(o[C+0],o[C+1],o[C+2]),M.set(o[C+3],o[C+4],o[C+5]),y.set(o[C+6],o[C+7],o[C+8]),w.set(a[b+0],a[b+1]),R.set(a[b+2],a[b+3]),L.set(a[b+4],a[b+5]),I.copy(E).add(M).add(y).divideScalar(3);const U=x(I);v(w,b+0,E,U),v(R,b+2,M,U),v(L,b+4,y,U)}}function v(E,M,y,I){I<0&&E.x===1&&(a[M]=E.x-1),y.x===0&&y.z===0&&(a[M]=I/2/Math.PI+.5)}function x(E){return Math.atan2(E.z,-E.x)}function m(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Do(t.vertices,t.indices,t.radius,t.details)}}class Ta extends Do{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,o=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(o,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ta(t.radius,t.detail)}}class Ea extends Do{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,o,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ea(t.radius,t.detail)}}class hn extends Do{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new hn(t.radius,t.detail)}}class Tl extends bn{constructor(t=.5,e=1,n=32,i=1,o=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:o,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const r=[],l=[],c=[],h=[];let d=t;const p=(e-t)/i,f=new A,g=new St;for(let v=0;v<=i;v++){for(let x=0;x<=n;x++){const m=o+x/n*a;f.x=d*Math.cos(m),f.y=d*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}d+=p}for(let v=0;v<i;v++){const x=v*(n+1);for(let m=0;m<n;m++){const E=m+x,M=E,y=E+n+1,I=E+n+2,w=E+1;r.push(M,y,w),r.push(y,I,w)}}this.setIndex(r),this.setAttribute("position",new Ie(l,3)),this.setAttribute("normal",new Ie(c,3)),this.setAttribute("uv",new Ie(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tl(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Xt extends bn{constructor(t=1,e=32,n=16,i=0,o=Math.PI*2,a=0,r=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:o,thetaStart:a,thetaLength:r},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+r,Math.PI);let c=0;const h=[],d=new A,p=new A,f=[],g=[],v=[],x=[];for(let m=0;m<=n;m++){const E=[],M=m/n;let y=0;m===0&&a===0?y=.5/e:m===n&&l===Math.PI&&(y=-.5/e);for(let I=0;I<=e;I++){const w=I/e;d.x=-t*Math.cos(i+w*o)*Math.sin(a+M*r),d.y=t*Math.cos(a+M*r),d.z=t*Math.sin(i+w*o)*Math.sin(a+M*r),g.push(d.x,d.y,d.z),p.copy(d).normalize(),v.push(p.x,p.y,p.z),x.push(w+y,1-M),E.push(c++)}h.push(E)}for(let m=0;m<n;m++)for(let E=0;E<e;E++){const M=h[m][E+1],y=h[m][E],I=h[m+1][E],w=h[m+1][E+1];(m!==0||a>0)&&f.push(M,y,w),(m!==n-1||l<Math.PI)&&f.push(y,I,w)}this.setIndex(f),this.setAttribute("position",new Ie(g,3)),this.setAttribute("normal",new Ie(v,3)),this.setAttribute("uv",new Ie(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xt(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class an extends bn{constructor(t=1,e=.4,n=12,i=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:o},n=Math.floor(n),i=Math.floor(i);const a=[],r=[],l=[],c=[],h=new A,d=new A,p=new A;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const v=g/i*o,x=f/n*Math.PI*2;d.x=(t+e*Math.cos(x))*Math.cos(v),d.y=(t+e*Math.cos(x))*Math.sin(v),d.z=e*Math.sin(x),r.push(d.x,d.y,d.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),p.subVectors(d,h).normalize(),l.push(p.x,p.y,p.z),c.push(g/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const v=(i+1)*f+g-1,x=(i+1)*(f-1)+g-1,m=(i+1)*(f-1)+g,E=(i+1)*f+g;a.push(v,x,E),a.push(x,m,E)}this.setIndex(a),this.setAttribute("position",new Ie(r,3)),this.setAttribute("normal",new Ie(l,3)),this.setAttribute("uv",new Ie(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new an(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class El extends bn{constructor(t=new $h(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),e=64,n=1,i=8,o=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:o};const a=t.computeFrenetFrames(e,o);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const r=new A,l=new A,c=new St;let h=new A;const d=[],p=[],f=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new Ie(d,3)),this.setAttribute("normal",new Ie(p,3)),this.setAttribute("uv",new Ie(f,2));function v(){for(let M=0;M<e;M++)x(M);x(o===!1?e:0),E(),m()}function x(M){h=t.getPointAt(M/e,h);const y=a.normals[M],I=a.binormals[M];for(let w=0;w<=i;w++){const R=w/i*Math.PI*2,L=Math.sin(R),C=-Math.cos(R);l.x=C*y.x+L*I.x,l.y=C*y.y+L*I.y,l.z=C*y.z+L*I.z,l.normalize(),p.push(l.x,l.y,l.z),r.x=h.x+n*l.x,r.y=h.y+n*l.y,r.z=h.z+n*l.z,d.push(r.x,r.y,r.z)}}function m(){for(let M=1;M<=e;M++)for(let y=1;y<=i;y++){const I=(i+1)*(M-1)+(y-1),w=(i+1)*M+(y-1),R=(i+1)*M+y,L=(i+1)*(M-1)+y;g.push(I,w,L),g.push(w,R,L)}}function E(){for(let M=0;M<=e;M++)for(let y=0;y<=i;y++)c.x=M/e,c.y=y/i,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new El(new Gg[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class lo extends as{static get type(){return"MeshPhongMaterial"}constructor(t){super(),this.isMeshPhongMaterial=!0,this.color=new jt(16777215),this.specular=new jt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ml,this.normalScale=new St(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=ya,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class it extends as{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ml,this.normalScale=new St(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=ya,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ca extends on{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new jt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Hg extends Ca{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.groundColor=new jt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ar=new ze,Lc=new A,Ic=new A;class Zh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new St(512,512),this.map=null,this.mapPass=null,this.matrix=new ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _l,this._frameExtents=new St(1,1),this._viewportCount=1,this._viewports=[new Le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Lc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Lc),Ic.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ic),e.updateMatrixWorld(),ar.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ar),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ar)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Uc=new ze,co=new A,rr=new A;class Vg extends Zh{constructor(){super(new kn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new St(4,2),this._viewportCount=6,this._viewports=[new Le(2,1,1,1),new Le(0,1,1,1),new Le(3,1,1,1),new Le(1,1,1,1),new Le(3,0,1,1),new Le(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,o=t.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),co.setFromMatrixPosition(t.matrixWorld),n.position.copy(co),rr.copy(n.position),rr.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(rr),n.updateMatrixWorld(),i.makeTranslation(-co.x,-co.y,-co.z),Uc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uc)}}class Wg extends Ca{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Vg}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Xg extends Zh{constructor(){super(new Hh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Yg extends Ca{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.target=new on,this.shadow=new Xg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Kg extends Ca{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class qg{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Nc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Nc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Nc(){return performance.now()}const Fc=new ze;class jg{constructor(t,e,n=0,i=1/0){this.ray=new Uh(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new vl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Fc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Fc),this}intersectObject(t,e=!0,n=[]){return nl(t,this,n,e),n.sort(Oc),n}intersectObjects(t,e=!0,n=[]){for(let i=0,o=t.length;i<o;i++)nl(t[i],this,n,e);return n.sort(Oc),n}}function Oc(s,t){return s.distance-t.distance}function nl(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const o=s.children;for(let a=0,r=o.length;a<r;a++)nl(o[a],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ll}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ll);const $i=class $i{constructor(){_(this,"codesDown",new Set);_(this,"codeToNormalizedKey",new Map);_(this,"mouseButtons",new Set);_(this,"mouseDeltaX",0);_(this,"mouseDeltaY",0);_(this,"accumulatedDeltaX",0);_(this,"accumulatedDeltaY",0);_(this,"_pointerLocked",!1);_(this,"onKeyDown",t=>{this.codesDown.add(t.code),t.key&&this.codeToNormalizedKey.set(t.code,this.normalizeKey(t.key)),["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(t.code)&&t.preventDefault()});_(this,"onKeyUp",t=>{this.codesDown.delete(t.code),this.codeToNormalizedKey.delete(t.code)});_(this,"onMouseDown",t=>{this.mouseButtons.add(t.button)});_(this,"onMouseUp",t=>{this.mouseButtons.delete(t.button)});_(this,"onMouseMove",t=>{(this._pointerLocked||this.mouseButtons.has(2))&&(this.accumulatedDeltaX+=t.movementX,this.accumulatedDeltaY+=t.movementY)});_(this,"onContextMenu",t=>{t.preventDefault()});_(this,"onPointerLockChange",()=>{this._pointerLocked=document.pointerLockElement!==null,this._pointerLocked||(this.accumulatedDeltaX=0,this.accumulatedDeltaY=0)});_(this,"onBlur",()=>{this.reset()});window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),window.addEventListener("mousedown",this.onMouseDown),window.addEventListener("mouseup",this.onMouseUp),window.addEventListener("mousemove",this.onMouseMove),window.addEventListener("contextmenu",this.onContextMenu),document.addEventListener("pointerlockchange",this.onPointerLockChange),window.addEventListener("blur",this.onBlur)}static getInstance(){return $i._instance||($i._instance=new $i),$i._instance}normalizeKey(t){if(t===" ")return"space";const e=t.toLowerCase();return e.startsWith("key")&&e.length===4?e.slice(3):e.startsWith("digit")&&e.length===6?e.slice(5):e==="shiftleft"||e==="shiftright"?"shift":e==="controlleft"||e==="controlright"||e==="ctrl"?"control":e==="altleft"||e==="altright"?"alt":e}isKeyDown(t){if(this.codesDown.has(t))return!0;const e=this.normalizeKey(t);for(const n of this.codesDown)if(this.normalizeKey(n)===e||this.codeToNormalizedKey.get(n)===e)return!0;return!1}getMouseDelta(){return{x:this.mouseDeltaX,y:this.mouseDeltaY}}isMouseDown(t){return this.mouseButtons.has(t)}get pointerLocked(){return this._pointerLocked}isPointerLocked(){return this._pointerLocked}requestPointerLock(t){const e=t??document.querySelector("canvas");if(!(!e||typeof e.requestPointerLock!="function"))try{const n=e.requestPointerLock();n&&typeof n.catch=="function"&&n.catch(()=>{})}catch{}}update(){this.mouseDeltaX=this.accumulatedDeltaX,this.mouseDeltaY=this.accumulatedDeltaY,this.accumulatedDeltaX=0,this.accumulatedDeltaY=0}reset(){this.codesDown.clear(),this.codeToNormalizedKey.clear(),this.mouseButtons.clear(),this.mouseDeltaX=0,this.mouseDeltaY=0,this.accumulatedDeltaX=0,this.accumulatedDeltaY=0}};_($i,"_instance",null);let il=$i;var Ee=(s=>(s.LOADING="LOADING",s.MENU="MENU",s.PLAYING="PLAYING",s.PAUSED="PAUSED",s.DIALOG="DIALOG",s.VICTORY="VICTORY",s.GAME_OVER="GAME_OVER",s))(Ee||{});const Zi=class Zi{constructor(){_(this,"_currentState","LOADING");_(this,"listeners",new Map)}static getInstance(){return Zi._instance||(Zi._instance=new Zi),Zi._instance}get currentState(){return this._currentState}getState(){return this._currentState}is(t){return this._currentState===t}setState(t){if(t===this._currentState)return;const e=this._currentState;this._currentState=t;const n={previous:e,current:t};this.emit("statechange",n)}on(t,e){let n=this.listeners.get(t);return n||(n=[],this.listeners.set(t,n)),n.push(e),()=>{this.off(t,e)}}once(t,e){const n=i=>{this.off(t,n),e(i)};return this.on(t,n)}off(t,e){const n=this.listeners.get(t);if(!n)return;const i=n.indexOf(e);i!==-1&&n.splice(i,1)}emit(t,e){const n=this.listeners.get(t);if(n)for(const i of[...n])i(e)}};_(Zi,"_instance",null);let sl=Zi;const oa="rems_berry_quest_save_v1";class qe{static createDefault(){return{unlockedWorld:1,unlockedLevels:["hub","1-1"],completedLevels:[],rescuedNeutralKoopas:[!1,!1,!1,!1,!1],defeatedBossTiers:[],pikachuDefeated:!1,lives:3,berries:0,blueBerries:0,berryPoints:0}}static hasSave(){try{return typeof localStorage>"u"?!1:localStorage.getItem(oa)!==null}catch{return!1}}static load(){const t=qe.createDefault();try{if(typeof localStorage>"u")return t;const e=localStorage.getItem(oa);if(!e)return t;const n=JSON.parse(e);return!n||typeof n!="object"?t:qe.sanitize(n)}catch{return t}}static save(t){try{if(typeof localStorage>"u")return;const e=qe.sanitize(t);localStorage.setItem(oa,JSON.stringify(e))}catch{}}static reset(){try{typeof localStorage<"u"&&localStorage.removeItem(oa)}catch{}return qe.createDefault()}static sanitize(t){const e=qe.createDefault(),n=typeof t.unlockedWorld=="number"&&Number.isFinite(t.unlockedWorld)?Math.min(7,Math.max(1,Math.floor(t.unlockedWorld))):e.unlockedWorld,i=new Set(["hub","1-1"]);if(Array.isArray(t.unlockedLevels))for(const c of t.unlockedLevels)typeof c=="string"&&c.length>0&&i.add(c);const o=new Set;if(Array.isArray(t.completedLevels))for(const c of t.completedLevels)typeof c=="string"&&c.length>0&&o.add(c);const a=[!1,!1,!1,!1,!1];if(Array.isArray(t.rescuedNeutralKoopas))for(let c=0;c<5;c++)a[c]=!!t.rescuedNeutralKoopas[c];const r=new Set;if(Array.isArray(t.defeatedBossTiers))for(const c of t.defeatedBossTiers)typeof c=="number"&&Number.isFinite(c)&&c>=1&&c<=6&&r.add(Math.floor(c));const l=(c,h)=>typeof c=="number"&&Number.isFinite(c)?Math.max(0,Math.floor(c)):h;return{unlockedWorld:n,unlockedLevels:Array.from(i),completedLevels:Array.from(o),rescuedNeutralKoopas:a,defeatedBossTiers:Array.from(r).sort((c,h)=>c-h),pikachuDefeated:!!t.pikachuDefeated,lives:l(t.lives,e.lives),berries:l(t.berries,e.berries),blueBerries:l(t.blueBerries,e.blueBerries),berryPoints:l(t.berryPoints,e.berryPoints)}}}const zc=.55,Jg=.34,$g=.65,Zg=25,Qg=.12;function aa(s){return 440*Math.pow(2,(s-69)/12)}const u=null,se=48,Nn=49,Nt=50,As=51,qt=52,Ue=53,Ze=54,Vt=55,Vn=56,ne=57,Xi=58,ve=59,He=60,Yi=61,Ne=62,Pi=63,te=64,Xe=65,_e=66,Ft=67,Fn=68,gt=69,fn=70,ie=71,oe=72,mn=73,fe=74,rn=75,ee=76,Ye=77,Pe=78,Zt=79,pi=80,Wt=81,$n=82,Ve=83,Tn=84,Rs=85,Qe=86,ra=88,kc=89,tx=91,ex={hub:{bpm:118,steps:64,leadPatch:"flute",harmonyPatch:"marimba",bassPatch:"woodbass",leadGain:.24,harmonyGain:.13,bassGain:.24,drumGain:.14,melody:[ee,u,Zt,u,Wt,u,Zt,u,ee,fe,oe,u,fe,ee,Zt,u,Wt,u,Tn,u,Wt,u,Zt,u,Ye,u,ee,fe,oe,u,u,u,Wt,u,Zt,ee,oe,u,ee,Zt,Ye,u,Wt,u,Zt,Ye,ee,u,fe,u,Zt,u,Ve,u,Wt,Zt,ee,u,fe,u,oe,u,u,u],harmony:[He,te,Ft,ie,He,te,Ft,te,He,te,Ft,ie,Ft,te,He,u,Xe,gt,oe,ee,Xe,gt,oe,gt,Xe,gt,oe,gt,Xe,He,gt,u,gt,oe,ee,Zt,gt,oe,ee,oe,Ne,Xe,gt,oe,Ne,Xe,gt,u,Ft,ie,fe,Ye,Ft,ie,fe,ie,He,te,Ft,te,He,u,u,u],bass:[se,u,u,u,Vt,u,u,u,se,u,Vt,u,se,u,qt,u,Ue,u,u,u,se,u,u,u,Ue,u,se,u,Ue,u,Vt,u,ne,u,u,u,qt,u,u,u,Nt,u,u,u,ne,u,Nt,u,Vt,u,u,u,Nt,u,u,u,se,u,Vt,u,se,u,u,u],drums:["K",u,"R",u,"H",u,"R",u,"K",u,"R","H","H",u,"R",u,"K",u,"R",u,"H",u,"R",u,"K",u,"R","H","H",u,"R","R","K",u,"R",u,"H",u,"R",u,"K",u,"R","H","H",u,"R",u,"K",u,"R",u,"H",u,"R","R","K",u,"R",u,"H",u,"R",u]},woods:{bpm:126,steps:64,leadPatch:"flute",harmonyPatch:"marimba",bassPatch:"woodbass",leadGain:.25,harmonyGain:.14,bassGain:.25,drumGain:.18,melody:[Zt,u,Ve,u,Qe,u,Ve,Zt,Wt,u,Ve,u,Qe,u,u,u,Ye,u,Wt,u,Tn,u,Wt,Ye,Zt,u,Wt,u,Tn,u,u,u,ee,u,Zt,u,Tn,u,Ve,Wt,Zt,u,ee,u,Zt,u,Tn,u,Qe,u,Tn,Ve,Wt,u,Pe,fe,Pe,u,Wt,u,Qe,u,u,u],harmony:[Ft,ie,fe,ie,Ft,ie,fe,ie,Ft,ie,fe,ie,Ft,fe,ie,u,Xe,gt,oe,gt,Xe,gt,oe,gt,Xe,gt,oe,gt,Xe,oe,gt,u,te,Ft,oe,Ft,te,Ft,oe,Ft,He,te,Ft,te,He,Ft,te,u,Ne,_e,gt,_e,Ne,_e,gt,_e,Ne,_e,gt,fe,gt,_e,Ne,u],bass:[Vt,u,Vt,u,Nt,u,Vt,u,Vt,u,Nt,u,Vt,ve,Nt,u,Ue,u,Ue,u,se,u,Ue,u,Ue,u,se,u,Ue,ne,se,u,se,u,se,u,Vt,u,se,u,qt,u,se,u,Vt,qt,se,u,Nt,u,Nt,u,ne,u,Nt,u,Nt,Ze,ne,u,Nt,u,u,u],drums:["K",u,"H",u,"S",u,"H","K","K",u,"H",u,"S",u,"H",u,"K",u,"H",u,"S",u,"H","K","K",u,"H",u,"S","H","R",u,"K",u,"H",u,"S",u,"H","K","K",u,"H",u,"S",u,"H",u,"K",u,"H","K","S",u,"H",u,"K","S","T",u,"S",u,"O",u]},desert:{bpm:112,steps:64,leadPatch:"reed",harmonyPatch:"pluck",bassPatch:"sub",leadGain:.22,harmonyGain:.14,bassGain:.26,drumGain:.2,melody:[fe,u,Pe,Zt,Wt,u,Zt,Pe,rn,u,Pe,u,fe,u,u,u,rn,u,Zt,$n,Wt,u,Zt,rn,Pe,u,rn,u,fe,u,u,u,oe,u,rn,Zt,$n,u,Wt,Zt,Pe,u,Zt,Wt,$n,u,u,u,Wt,u,$n,Wt,Zt,Pe,rn,fe,rn,u,Pe,u,fe,u,u,u],harmony:[Ne,gt,_e,gt,Ne,gt,_e,gt,Ne,gt,_e,gt,Ne,gt,_e,gt,Pi,fn,Ft,fn,Pi,fn,Ft,fn,Ne,gt,_e,gt,Ne,gt,_e,gt,He,Ft,Pi,Ft,He,Ft,Pi,Ft,Ne,gt,_e,gt,Pi,fn,Ft,fn,Ne,gt,_e,gt,Pi,fn,Ft,Pi,Ne,gt,_e,gt,Ne,u,u,u],bass:[Nt,u,u,Nt,ne,u,Nt,u,Nt,u,u,Nt,ne,u,Nt,u,As,u,u,As,Xi,u,As,u,Nt,u,u,Nt,ne,u,Nt,u,se,u,u,se,Vt,u,se,u,Nt,u,Ze,u,Vt,u,u,u,Nt,u,u,Nt,As,u,u,As,Nt,u,ne,u,Nt,u,u,u],drums:["K",u,"T","R","T",u,"K","R","K",u,"T",u,"R","T","K",u,"K",u,"T","R","T",u,"K","R","K",u,"T","T","R","T","K",u,"K",u,"T","R","T",u,"K","R","K",u,"T",u,"R","T","K","R","K","T","T","R","K","T","R","T","K",u,"T","R","K",u,"O",u]},volcano:{bpm:132,steps:64,leadPatch:"brass",harmonyPatch:"powerchord",bassPatch:"synthbass",leadGain:.24,harmonyGain:.14,bassGain:.27,drumGain:.25,melody:[te,u,u,te,Ft,u,ie,u,ee,u,u,rn,ee,u,ie,u,oe,u,u,ie,gt,u,Ft,u,te,u,Ft,gt,ie,u,u,u,gt,u,u,gt,oe,u,ee,u,rn,u,oe,ie,gt,u,Ft,u,_e,u,ie,u,rn,u,ie,_e,ie,u,rn,Pe,ie,u,u,u],harmony:[te,u,te,u,ie,u,te,u,te,u,Ft,u,ie,u,te,u,He,u,He,u,Ft,u,He,u,ne,u,te,u,ie,u,u,u,ne,u,ne,u,te,u,gt,u,He,u,gt,u,te,u,He,u,ve,u,_e,u,ie,u,_e,u,ve,_e,ie,_e,ve,u,u,u],bass:[qt,qt,u,qt,qt,u,ve,u,qt,qt,u,qt,Vt,u,ve,u,se,se,u,se,Vt,u,se,u,ne,ne,u,ne,ve,u,ve,u,ne,ne,u,ne,qt,u,ne,u,se,se,u,se,ne,u,Vt,u,ve,ve,u,ve,Ze,u,ve,u,ve,u,Ze,u,ve,u,u,u],drums:["K","K","H",u,"S",u,"T","K","K","K","H",u,"S",u,"T",u,"K","K","H",u,"S",u,"T","K","K","K","S","T","S","K","O",u,"K","K","H",u,"S",u,"T","K","K","K","H",u,"S",u,"T",u,"K","K","S","K","S","T","K","S","K","K","S","S","K",u,"O",u]},dungeon:{bpm:96,steps:64,leadPatch:"organ",harmonyPatch:"chime",bassPatch:"sub",leadGain:.21,harmonyGain:.11,bassGain:.25,drumGain:.16,echoSteps:3,melody:[mn,u,u,u,ee,u,pi,u,Pe,u,ee,u,rn,u,mn,u,gt,u,u,u,mn,u,ee,u,pi,u,ee,u,mn,u,u,u,Pe,u,u,u,Wt,u,Pe,u,ee,u,rn,u,mn,u,ie,u,Fn,u,oe,u,rn,u,pi,u,Pe,u,rn,u,oe,u,u,u],harmony:[Yi,u,Fn,u,te,u,u,u,Yi,u,Fn,u,u,u,u,u,ne,u,te,u,Yi,u,u,u,ne,u,te,u,u,u,u,u,_e,u,mn,u,gt,u,u,u,_e,u,mn,u,u,u,u,u,Vn,u,Pi,u,He,u,u,u,Fn,u,rn,u,u,u,u,u],bass:[Nn,u,u,u,u,u,Vn,u,Nn,u,u,u,u,u,u,u,ne,u,u,u,u,u,qt,u,ne,u,u,u,u,u,u,u,Ze,u,u,u,u,u,Nn,u,Ze,u,u,u,Vn,u,u,u,Vn,u,u,u,u,u,As,u,Vn,u,u,u,u,u,u,u],drums:["K",u,u,u,"R",u,u,u,"T",u,u,u,"R",u,"H",u,"K",u,u,u,"R",u,u,u,"T",u,"T",u,"R",u,u,u,"K",u,u,u,"R",u,u,u,"T",u,u,u,"R",u,"H",u,"K",u,u,"T","S",u,u,u,"T",u,"R",u,"O",u,u,u]},jungle:{bpm:134,steps:64,leadPatch:"steeldrum",harmonyPatch:"marimba",bassPatch:"woodbass",leadGain:.24,harmonyGain:.14,bassGain:.25,drumGain:.2,melody:[Ye,u,Wt,u,Tn,u,Wt,Ye,u,Zt,Wt,u,Ye,u,oe,u,$n,u,Qe,u,kc,u,Qe,$n,u,Tn,Qe,u,$n,u,Ye,u,Zt,u,$n,u,Qe,u,Tn,$n,Wt,u,Zt,u,$n,u,Qe,u,Tn,u,ra,u,tx,u,ra,Tn,$n,u,Zt,u,ee,u,oe,u],harmony:[u,Xe,gt,oe,u,Xe,gt,oe,u,Xe,gt,oe,Xe,gt,oe,u,u,fn,fe,Ye,u,fn,fe,Ye,u,fn,fe,Ye,fn,fe,Ye,u,u,Ft,fn,fe,u,Ft,fn,fe,u,Ft,fn,fe,Ft,fn,fe,u,u,He,te,Ft,u,He,te,Ft,u,He,te,fn,oe,Ft,te,u],bass:[Ue,u,u,Ue,se,u,Ue,u,Ue,u,u,Ue,se,u,Ue,u,Xi,u,u,Xi,Ue,u,Xi,u,Xi,u,u,Xi,Ue,u,Xi,u,Vt,u,u,Vt,Nt,u,Vt,u,Vt,u,u,Vt,Nt,u,Vt,u,se,u,u,se,Vt,u,se,u,se,u,qt,u,Vt,u,se,u],drums:["K","R","T","H","K","R","T","H","K","R","T","T","S","R","H","R","K","R","T","H","K","R","T","H","K","R","T","T","S","R","O","R","K","R","T","H","K","R","T","H","K","R","T","T","S","R","H","R","K","T","S","T","K","T","S","H","K","R","T","T","S","R","O",u]},plains:{bpm:140,steps:64,leadPatch:"synth",harmonyPatch:"synth",bassPatch:"synthbass",leadGain:.21,harmonyGain:.12,bassGain:.25,drumGain:.22,melody:[Wt,u,ee,Wt,Tn,u,Ve,Wt,ee,u,Wt,u,Tn,u,u,u,Ye,u,oe,Ye,Wt,u,Zt,Ye,oe,u,Ye,u,Wt,u,u,u,Zt,u,fe,Zt,Ve,u,Wt,Zt,fe,u,Zt,u,Ve,u,Qe,u,ra,u,Qe,Tn,Ve,u,Zt,ee,Zt,u,Ve,u,ee,u,u,u],harmony:[gt,oe,ee,Wt,gt,oe,ee,Wt,gt,oe,ee,Wt,ee,oe,gt,oe,Xe,gt,oe,Ye,Xe,gt,oe,Ye,Xe,gt,oe,Ye,oe,gt,Xe,gt,Ft,ie,fe,Zt,Ft,ie,fe,Zt,Ft,ie,fe,Zt,fe,ie,Ft,ie,te,Ft,ie,ee,te,Ft,ie,ee,te,Ft,ie,ee,ie,Ft,te,u],bass:[ne,ne,gt,ne,ne,ne,qt,ne,ne,ne,gt,ne,qt,u,Vt,u,Ue,Ue,Xe,Ue,Ue,Ue,se,Ue,Ue,Ue,Xe,Ue,se,u,qt,u,Vt,Vt,Ft,Vt,Vt,Vt,Nt,Vt,Vt,Vt,Ft,Vt,Nt,u,Ue,u,qt,qt,te,qt,ve,ve,qt,ve,qt,qt,ve,qt,qt,u,u,u],drums:["K","H","H","H","S","H","H","K","K","H","H","H","S","H","O","H","K","H","H","H","S","H","H","K","K","H","H","K","S","H","O","H","K","H","H","H","S","H","H","K","K","H","H","H","S","H","O","H","K","H","S","H","K","K","S","H","K","S","K","S","S","S","O",u]},fortress:{bpm:152,steps:64,leadPatch:"epicbrass",harmonyPatch:"synth",bassPatch:"rockbass",leadGain:.24,harmonyGain:.14,bassGain:.27,drumGain:.26,melody:[Pe,u,mn,Pe,Wt,u,pi,Pe,Rs,u,Ve,Wt,pi,u,Pe,u,fe,u,Pe,Wt,Qe,u,Rs,Ve,Wt,u,Pe,u,Wt,u,Qe,u,ee,u,pi,Ve,ra,u,Qe,Rs,Ve,u,pi,u,ee,u,Ve,u,Rs,u,Ve,Wt,pi,u,Pe,Ye,pi,u,Rs,u,kc,u,Rs,u],harmony:[_e,gt,mn,Pe,_e,gt,mn,Pe,_e,gt,mn,Pe,mn,gt,_e,gt,Ne,_e,gt,fe,Ne,_e,gt,fe,Ne,_e,gt,fe,gt,_e,Ne,_e,te,Fn,ie,ee,te,Fn,ie,ee,te,Fn,ie,ee,ie,Fn,te,Fn,Yi,Xe,Fn,mn,Yi,Xe,Fn,mn,Yi,Xe,Fn,mn,Ye,mn,Fn,u],bass:[Ze,Ze,Ze,Ze,Nn,Nn,Ze,Ze,Ze,Ze,ne,ne,Vn,Vn,Ze,Ze,Nt,Nt,Nt,Nt,ne,ne,Nt,Nt,Nt,Nt,Ze,Ze,ne,ne,Nt,Nt,qt,qt,qt,qt,ve,ve,qt,qt,qt,qt,Vn,Vn,ve,ve,qt,qt,Nn,Nn,Nn,Nn,Vn,Vn,Nn,Nn,Nn,Ue,Vn,Yi,Nn,u,u,u],drums:["K","H","K","H","S","H","K","H","K","K","H","H","S","H","O","H","K","H","K","H","S","H","K","H","K","K","H","K","S","T","S","H","K","H","K","H","S","H","K","H","K","K","H","H","S","H","O","H","K","K","S","K","K","K","S","S","K","S","K","S","S","S","O","K"]},boss:{bpm:158,steps:64,leadPatch:"rocklead",harmonyPatch:"powerchord",bassPatch:"rockbass",leadGain:.23,harmonyGain:.14,bassGain:.27,drumGain:.26,melody:[ee,ee,Zt,ee,Ve,u,Wt,Zt,ee,u,Zt,Wt,Ve,u,u,u,Qe,Qe,Ve,Zt,Qe,u,Ve,Wt,Zt,u,Wt,Ve,Qe,u,u,u,Wt,Wt,Ve,Wt,Pe,u,fe,Pe,Wt,u,Qe,u,Wt,u,u,u,Zt,u,ee,oe,Zt,u,ee,u,Pe,u,rn,ie,Pe,u,Ve,u],harmony:[te,u,u,te,te,u,te,u,te,u,Ft,u,ie,u,u,u,Ft,u,u,Ft,Ft,u,Ft,u,Ft,u,Ne,u,Ft,u,u,u,Ne,u,u,Ne,Ne,u,Ne,u,Ne,u,gt,u,Ne,u,u,u,He,u,He,u,He,u,He,u,ve,u,ve,u,ve,_e,ie,u],bass:[qt,qt,qt,qt,qt,qt,qt,qt,qt,qt,Vt,Vt,ve,ve,qt,qt,Vt,Vt,Vt,Vt,Vt,Vt,Vt,Vt,Vt,Vt,Nt,Nt,Vt,Vt,Nt,Nt,Nt,Nt,Nt,Nt,Nt,Nt,Nt,Nt,Nt,Nt,ne,ne,Nt,Nt,ne,ne,se,se,se,se,se,se,se,se,ve,ve,ve,ve,ve,Ze,ve,u],drums:["K","H","H","H","S","H","K","H","K","K","H","H","S","H","O","H","K","H","H","H","S","H","K","H","K","K","H","K","S","H","O","H","K","H","H","H","S","H","K","H","K","K","H","H","S","H","O","H","K","H","S","H","K","K","S","H","K","S","K","S","S","S","O","K"]}},Qi=class Qi{constructor(){_(this,"ctx",null);_(this,"masterGain",null);_(this,"musicGain",null);_(this,"sfxGain",null);_(this,"noiseBuffer",null);_(this,"_muted",!1);_(this,"currentTrackId",null);_(this,"isMusicActive",!1);_(this,"schedulerTimer",null);_(this,"currentStep",0);_(this,"nextStepTime",0);_(this,"gestureHooked",!1);_(this,"lastSfxTime",new Map)}static getInstance(){return Qi._instance||(Qi._instance=new Qi),Qi._instance}init(){if(!(typeof window>"u")){if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t;const e=this.ctx.createDynamicsCompressor();e.threshold.value=-10,e.knee.value=12,e.ratio.value=4,e.attack.value=.005,e.release.value=.15,this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=this._muted?0:zc,this.musicGain=this.ctx.createGain(),this.musicGain.gain.value=Jg,this.sfxGain=this.ctx.createGain(),this.sfxGain.gain.value=$g,this.musicGain.connect(e),this.sfxGain.connect(e),e.connect(this.masterGain),this.masterGain.connect(this.ctx.destination),this.noiseBuffer=this.createNoiseBuffer(this.ctx)}this.ctx.state==="suspended"?this.ctx.resume().then(()=>{this.isMusicActive&&this.currentTrackId&&this.ensureSchedulerRunning()}).catch(()=>{}):this.isMusicActive&&this.currentTrackId&&this.ensureSchedulerRunning()}}get muted(){return this._muted}toggleMute(){if(this._muted=!this._muted,this.ctx&&this.masterGain){const t=this.ctx.currentTime;this.masterGain.gain.cancelScheduledValues(t),this.masterGain.gain.setTargetAtTime(this._muted?0:zc,t,.015)}return this._muted}playMusic(t,e=!1){const n=t==="fortress"?"fortress":e?"boss":t;this.isMusicActive&&this.currentTrackId===n||(this.stopMusic(),this.currentTrackId=n,this.isMusicActive=!0,this.currentStep=0,this.ctx&&this.ctx.state==="running"?this.ensureSchedulerRunning():this.hookFirstGestureUnlock())}stopMusic(){this.isMusicActive=!1,this.currentTrackId=null,this.currentStep=0,this.schedulerTimer!==null&&(window.clearInterval(this.schedulerTimer),this.schedulerTimer=null)}hookFirstGestureUnlock(){if(this.gestureHooked||typeof window>"u")return;this.gestureHooked=!0;const t=()=>{this.init(),this.ctx&&this.ctx.state==="running"&&(window.removeEventListener("pointerdown",t),window.removeEventListener("keydown",t),window.removeEventListener("touchstart",t),this.gestureHooked=!1)};window.addEventListener("pointerdown",t,{passive:!0}),window.addEventListener("keydown",t,{passive:!0}),window.addEventListener("touchstart",t,{passive:!0})}ensureSchedulerRunning(){!this.ctx||!this.isMusicActive||!this.currentTrackId||this.schedulerTimer===null&&(this.nextStepTime=this.ctx.currentTime+.04,this.schedulerTimer=window.setInterval(()=>{this.scheduleTick()},Zg))}scheduleTick(){if(!this.ctx||!this.isMusicActive||!this.currentTrackId||this.ctx.state!=="running")return;const t=ex[this.currentTrackId],e=60/t.bpm/4;for(this.nextStepTime<this.ctx.currentTime-.3&&(this.nextStepTime=this.ctx.currentTime+.03);this.nextStepTime<this.ctx.currentTime+Qg;)this.scheduleStep(t,this.currentStep,this.nextStepTime,e),this.nextStepTime+=e,this.currentStep=(this.currentStep+1)%t.steps}scheduleStep(t,e,n,i){if(!this.ctx||!this.musicGain)return;const o=t.melody[e];if(o!=null){let c=1;for(;c<3&&t.melody[(e+c)%t.steps]===null;)c++;const h=i*c*.92;if(this.playLeadPatch(t.leadPatch,aa(o),n,h,t.leadGain),t.echoSteps){const d=n+t.echoSteps*i;this.playLeadPatch(t.leadPatch,aa(o),d,h*.85,t.leadGain*.35)}}const a=t.harmony[e];a!=null&&this.playHarmonyPatch(t.harmonyPatch,aa(a),n,i*1.15,t.harmonyGain);const r=t.bass[e];r!=null&&this.playBassPatch(t.bassPatch,aa(r),n,i*1.4,t.bassGain);const l=t.drums[e];l&&this.playDrum(l,n,t.drumGain,e)}playLeadPatch(t,e,n,i,o){if(!this.ctx||!this.musicGain)return;const a=this.ctx,r=this.musicGain;switch(t){case"flute":{const l=a.createOscillator(),c=a.createOscillator(),h=a.createOscillator(),d=a.createGain(),p=a.createGain();l.type="sine",l.frequency.setValueAtTime(e,n),c.type="triangle",c.frequency.setValueAtTime(e,n),h.type="sine",h.frequency.setValueAtTime(5.5,n),d.gain.setValueAtTime(e*.009,n),h.connect(d),d.connect(l.frequency),p.gain.setValueAtTime(1e-4,n),p.gain.linearRampToValueAtTime(o,n+.03),p.gain.setValueAtTime(o*.85,Math.max(n+.035,n+i-.04)),p.gain.exponentialRampToValueAtTime(1e-4,n+i+.03);const f=a.createGain();f.gain.value=.25,l.connect(p),c.connect(f),f.connect(p),p.connect(r),l.start(n),c.start(n),h.start(n);const g=n+i+.05;l.stop(g),c.stop(g),h.stop(g);break}case"steeldrum":{const l=a.createOscillator(),c=a.createOscillator(),h=a.createGain(),d=a.createGain();l.type="triangle",l.frequency.setValueAtTime(e*1.02,n),l.frequency.exponentialRampToValueAtTime(e,n+.025),c.type="sine",c.frequency.setValueAtTime(e*2,n),d.gain.setValueAtTime(.35,n),d.gain.exponentialRampToValueAtTime(.02,n+Math.min(i,.14)),h.gain.setValueAtTime(1e-4,n),h.gain.linearRampToValueAtTime(o*1.15,n+.008),h.gain.exponentialRampToValueAtTime(1e-4,n+Math.max(.14,i)),l.connect(h),c.connect(d),d.connect(h),h.connect(r),l.start(n),c.start(n);const p=n+Math.max(.16,i)+.03;l.stop(p),c.stop(p);break}case"reed":{const l=a.createOscillator(),c=a.createBiquadFilter(),h=a.createGain();l.type="sawtooth",l.frequency.setValueAtTime(e*.985,n),l.frequency.linearRampToValueAtTime(e,n+.04),c.type="bandpass",c.frequency.setValueAtTime(e*2.4,n),c.Q.value=3.2,h.gain.setValueAtTime(1e-4,n),h.gain.linearRampToValueAtTime(o*1.2,n+.025),h.gain.exponentialRampToValueAtTime(1e-4,n+i+.04),l.connect(c),c.connect(h),h.connect(r),l.start(n),l.stop(n+i+.06);break}case"brass":case"epicbrass":{const l=a.createOscillator(),c=a.createOscillator(),h=a.createBiquadFilter(),d=a.createGain();l.type="sawtooth",c.type=t==="epicbrass"?"square":"sawtooth",l.frequency.setValueAtTime(e,n),c.frequency.setValueAtTime(e*1.006,n),h.type="lowpass",h.frequency.setValueAtTime(e*1.4,n),h.frequency.linearRampToValueAtTime(e*4.5,n+.05),h.frequency.exponentialRampToValueAtTime(e*2.2,n+i),h.Q.value=1.6,d.gain.setValueAtTime(1e-4,n),d.gain.linearRampToValueAtTime(o*.7,n+.02),d.gain.setValueAtTime(o*.58,Math.max(n+.025,n+i-.03)),d.gain.exponentialRampToValueAtTime(1e-4,n+i+.03),l.connect(h),c.connect(h),h.connect(d),d.connect(r),l.start(n),c.start(n);const p=n+i+.05;l.stop(p),c.stop(p);break}case"organ":{const l=a.createOscillator(),c=a.createOscillator(),h=a.createOscillator(),d=a.createBiquadFilter(),p=a.createGain();l.type="sine",c.type="triangle",h.type="sine",l.frequency.setValueAtTime(e,n),c.frequency.setValueAtTime(e*2.004,n),h.frequency.setValueAtTime(e*3,n);const f=a.createGain();f.gain.value=.45;const g=a.createGain();g.gain.value=.18,d.type="lowpass",d.frequency.setValueAtTime(2200,n),p.gain.setValueAtTime(1e-4,n),p.gain.linearRampToValueAtTime(o,n+.04),p.gain.setValueAtTime(o*.85,Math.max(n+.045,n+i-.05)),p.gain.exponentialRampToValueAtTime(1e-4,n+i+.08),l.connect(d),c.connect(f),f.connect(d),h.connect(g),g.connect(d),d.connect(p),p.connect(r),l.start(n),c.start(n),h.start(n);const v=n+i+.1;l.stop(v),c.stop(v),h.stop(v);break}case"rocklead":case"synth":{const l=a.createOscillator(),c=a.createOscillator(),h=a.createBiquadFilter(),d=a.createGain();l.type="square",c.type="sawtooth",l.frequency.setValueAtTime(e,n),c.frequency.setValueAtTime(t==="rocklead"?e*.996:e*1.005,n),h.type="lowpass",h.frequency.setValueAtTime(t==="rocklead"?3200:2800,n),h.frequency.exponentialRampToValueAtTime(1100,n+i),h.Q.value=t==="rocklead"?2.5:3.5,d.gain.setValueAtTime(1e-4,n),d.gain.linearRampToValueAtTime(o*.65,n+.01),d.gain.exponentialRampToValueAtTime(1e-4,n+i+.03),l.connect(h),c.connect(h),h.connect(d),d.connect(r),l.start(n),c.start(n);const p=n+i+.05;l.stop(p),c.stop(p);break}case"marimba":default:{this.playHarmonyPatch("marimba",e,n,i,o);break}}}playHarmonyPatch(t,e,n,i,o){if(!this.ctx||!this.musicGain)return;const a=this.ctx,r=this.musicGain;if(t==="powerchord"){const h=a.createOscillator(),d=a.createOscillator(),p=a.createBiquadFilter(),f=a.createGain();h.type="sawtooth",d.type="sawtooth",h.frequency.setValueAtTime(e,n),d.frequency.setValueAtTime(e*1.498,n),p.type="lowpass",p.frequency.setValueAtTime(1800,n),f.gain.setValueAtTime(1e-4,n),f.gain.linearRampToValueAtTime(o*.65,n+.008),f.gain.exponentialRampToValueAtTime(1e-4,n+i+.04),h.connect(p),d.connect(p),p.connect(f),f.connect(r),h.start(n),d.start(n),h.stop(n+i+.05),d.stop(n+i+.05);return}const l=a.createOscillator(),c=a.createGain();t==="marimba"?(l.type="sine",l.frequency.setValueAtTime(e,n),c.gain.setValueAtTime(1e-4,n),c.gain.linearRampToValueAtTime(o,n+.005),c.gain.exponentialRampToValueAtTime(1e-4,n+Math.min(.18,i+.05))):t==="pluck"?(l.type="triangle",l.frequency.setValueAtTime(e,n),c.gain.setValueAtTime(1e-4,n),c.gain.linearRampToValueAtTime(o,n+.004),c.gain.exponentialRampToValueAtTime(1e-4,n+.14)):t==="chime"?(l.type="sine",l.frequency.setValueAtTime(e*2,n),c.gain.setValueAtTime(1e-4,n),c.gain.linearRampToValueAtTime(o*.75,n+.01),c.gain.exponentialRampToValueAtTime(1e-4,n+.35)):(l.type="triangle",l.frequency.setValueAtTime(e,n),c.gain.setValueAtTime(1e-4,n),c.gain.linearRampToValueAtTime(o*.75,n+.01),c.gain.exponentialRampToValueAtTime(1e-4,n+i+.03)),l.connect(c),c.connect(r),l.start(n),l.stop(n+Math.max(i,.36)+.03)}playBassPatch(t,e,n,i,o){if(!this.ctx||!this.musicGain)return;const a=this.ctx,r=a.createOscillator(),l=a.createBiquadFilter(),c=a.createGain();t==="woodbass"||t==="sub"?(r.type="triangle",l.type="lowpass",l.frequency.setValueAtTime(t==="woodbass"?650:420,n)):(r.type="sawtooth",l.type="lowpass",l.frequency.setValueAtTime(t==="rockbass"?950:1200,n),l.frequency.exponentialRampToValueAtTime(340,n+i)),r.frequency.setValueAtTime(e,n),c.gain.setValueAtTime(1e-4,n),c.gain.linearRampToValueAtTime(o,n+.008),c.gain.exponentialRampToValueAtTime(1e-4,n+i+.02),r.connect(l),l.connect(c),c.connect(this.musicGain),r.start(n),r.stop(n+i+.04)}playDrum(t,e,n,i){if(!this.ctx||!this.musicGain)return;const o=this.ctx,a=this.musicGain;switch(t){case"K":{const r=o.createOscillator(),l=o.createGain();r.type="sine",r.frequency.setValueAtTime(135,e),r.frequency.exponentialRampToValueAtTime(42,e+.1),l.gain.setValueAtTime(n*1.25,e),l.gain.exponentialRampToValueAtTime(1e-4,e+.13),r.connect(l),l.connect(a),r.start(e),r.stop(e+.14);break}case"S":{if(this.noiseBuffer){const c=o.createBufferSource();c.buffer=this.noiseBuffer;const h=o.createBiquadFilter();h.type="bandpass",h.frequency.setValueAtTime(1900,e),h.Q.value=.9;const d=o.createGain();d.gain.setValueAtTime(n*.9,e),d.gain.exponentialRampToValueAtTime(1e-4,e+.11),c.connect(h),h.connect(d),d.connect(a),c.start(e),c.stop(e+.12)}const r=o.createOscillator(),l=o.createGain();r.type="triangle",r.frequency.setValueAtTime(185,e),r.frequency.exponentialRampToValueAtTime(95,e+.06),l.gain.setValueAtTime(n*.65,e),l.gain.exponentialRampToValueAtTime(1e-4,e+.08),r.connect(l),l.connect(a),r.start(e),r.stop(e+.09);break}case"H":case"O":case"R":{if(!this.noiseBuffer)break;const r=o.createBufferSource();r.buffer=this.noiseBuffer;const l=o.createBiquadFilter();l.type="highpass",l.frequency.setValueAtTime(t==="R"?5200:7200,e);const c=o.createGain(),h=t==="O"?.16:.04,d=t==="O"?n*.55:n*.35;c.gain.setValueAtTime(d,e),c.gain.exponentialRampToValueAtTime(1e-4,e+h),r.connect(l),l.connect(c),c.connect(a),r.start(e),r.stop(e+h+.02);break}case"T":{const r=o.createOscillator(),l=o.createGain(),c=i%4===2?230:165;r.type="triangle",r.frequency.setValueAtTime(c,e),r.frequency.exponentialRampToValueAtTime(c*.68,e+.09),l.gain.setValueAtTime(n*.75,e),l.gain.exponentialRampToValueAtTime(1e-4,e+.1),r.connect(l),l.connect(a),r.start(e),r.stop(e+.11);break}}}playSFX(t){if(this._muted||!this.ctx||!this.sfxGain)return;if(this.ctx.state==="suspended"){this.ctx.resume().catch(()=>{});return}const e=performance.now(),n=t==="jetpack"?90:t==="dialog"?35:0;if(n>0){const o=this.lastSfxTime.get(t)??0;if(e-o<n)return}this.lastSfxTime.set(t,e);const i=this.ctx.currentTime;switch(t){case"jump":this.sfxSweep("triangle",250,560,i,.12,.28);break;case"doubleJump":this.sfxSweep("triangle",340,760,i,.12,.28),this.sfxTone("sine",988,i+.04,.09,.14);break;case"tripleJump":this.sfxTone("triangle",523.25,i,.07,.24),this.sfxTone("triangle",659.25,i+.05,.07,.24),this.sfxSweep("sine",784,1175,i+.1,.16,.26);break;case"wallKick":this.sfxSweep("sine",160,70,i,.05,.25),this.sfxSweep("square",280,680,i+.02,.1,.14);break;case"groundPound":this.sfxSweep("sine",190,42,i,.22,.42),this.sfxNoise(i,.18,600,"lowpass",.32);break;case"berry":this.sfxTone("triangle",987.77,i,.07,.24),this.sfxTone("sine",1318.51,i+.055,.13,.24);break;case"blueBerry":this.sfxTone("triangle",659.25,i,.07,.2),this.sfxTone("triangle",830.61,i+.05,.07,.2),this.sfxTone("triangle",987.77,i+.1,.07,.22),this.sfxTone("sine",1318.51,i+.15,.16,.24);break;case"oneUp":{[659.25,783.99,1318.51,1046.5,1174.66,1567.98].forEach((a,r)=>{this.sfxTone("square",a,i+r*.075,.09,.15),this.sfxTone("triangle",a,i+r*.075,.11,.18)});break}case"chest":{this.sfxSweep("sawtooth",180,260,i,.12,.09),[523.25,659.25,783.99,1046.5].forEach((a,r)=>{this.sfxTone("triangle",a,i+.12+r*.06,.26,.2)});break}case"powerUp":{[440,554.37,659.25,880,1108.73].forEach((a,r)=>{this.sfxTone("sawtooth",a,i+r*.065,.11,.11),this.sfxTone("triangle",a*2,i+r*.065,.12,.12)});break}case"sword":this.sfxNoise(i,.13,3400,"highpass",.24),this.sfxSweep("triangle",1400,480,i,.14,.2);break;case"fireball":this.sfxNoise(i,.18,1200,"bandpass",.28),this.sfxSweep("sawtooth",420,140,i,.16,.16);break;case"shredder":this.sfxSweep("sawtooth",320,920,i,.12,.16),this.sfxSweep("square",640,290,i+.1,.14,.14),this.sfxNoise(i,.22,2400,"bandpass",.22);break;case"punch":this.sfxSweep("sine",240,68,i,.09,.34),this.sfxNoise(i,.07,1500,"bandpass",.22);break;case"stomp":this.sfxSweep("triangle",440,180,i,.07,.26),this.sfxSweep("sine",220,520,i+.055,.09,.22);break;case"hurt":this.sfxSweep("sawtooth",310,110,i,.22,.22),this.sfxSweep("square",220,85,i+.03,.2,.14),this.sfxNoise(i,.14,900,"lowpass",.2);break;case"checkpoint":this.sfxTone("triangle",783.99,i,.1,.22),this.sfxTone("triangle",987.77,i+.075,.1,.22),this.sfxTone("sine",1174.66,i+.15,.12,.24),this.sfxTone("sine",1567.98,i+.22,.22,.24);break;case"portal":this.sfxSweep("sine",280,960,i,.38,.2),this.sfxSweep("triangle",420,1280,i+.05,.36,.16),this.sfxNoise(i,.32,1800,"bandpass",.14);break;case"jetpack":this.sfxNoise(i,.12,750,"lowpass",.18),this.sfxSweep("sawtooth",110,85,i,.1,.08);break;case"bossHit":this.sfxSweep("sawtooth",260,62,i,.24,.26),this.sfxSweep("square",520,140,i,.18,.16),this.sfxNoise(i,.2,1200,"lowpass",.32);break;case"victory":{const o=[{f:523.25,dt:0,d:.14},{f:659.25,dt:.12,d:.14},{f:783.99,dt:.24,d:.14},{f:1046.5,dt:.38,d:.2},{f:880,dt:.56,d:.16},{f:1046.5,dt:.72,d:.45}];for(const a of o)this.sfxTone("triangle",a.f,i+a.dt,a.d,.22),this.sfxTone("sawtooth",a.f*.5,i+a.dt,a.d,.09);break}case"dialog":this.sfxTone("triangle",680+Math.random()*110,i,.04,.12);break}}sfxTone(t,e,n,i,o){if(!this.ctx||!this.sfxGain)return;const a=this.ctx.createOscillator(),r=this.ctx.createGain();a.type=t,a.frequency.setValueAtTime(e,n),r.gain.setValueAtTime(1e-4,n),r.gain.linearRampToValueAtTime(o,n+.008),r.gain.exponentialRampToValueAtTime(1e-4,n+i),a.connect(r),r.connect(this.sfxGain),a.start(n),a.stop(n+i+.02)}sfxSweep(t,e,n,i,o,a){if(!this.ctx||!this.sfxGain)return;const r=this.ctx.createOscillator(),l=this.ctx.createGain();r.type=t,r.frequency.setValueAtTime(Math.max(20,e),i),r.frequency.exponentialRampToValueAtTime(Math.max(20,n),i+o),l.gain.setValueAtTime(1e-4,i),l.gain.linearRampToValueAtTime(a,i+.008),l.gain.exponentialRampToValueAtTime(1e-4,i+o),r.connect(l),l.connect(this.sfxGain),r.start(i),r.stop(i+o+.02)}sfxNoise(t,e,n,i,o){if(!this.ctx||!this.sfxGain||!this.noiseBuffer)return;const a=this.ctx.createBufferSource();a.buffer=this.noiseBuffer;const r=this.ctx.createBiquadFilter();r.type=i,r.frequency.setValueAtTime(n,t);const l=this.ctx.createGain();l.gain.setValueAtTime(o,t),l.gain.exponentialRampToValueAtTime(1e-4,t+e),a.connect(r),r.connect(l),l.connect(this.sfxGain),a.start(t),a.stop(t+e+.02)}createNoiseBuffer(t){const e=t.sampleRate,n=t.createBuffer(1,e,t.sampleRate),i=n.getChannelData(0);for(let o=0;o<e;o++)i[o]=Math.random()*2-1;return n}};_(Qi,"_instance",null);let ol=Qi;function nx(){const s=new Tt;s.name="RemCharacter",s.rotation.order="YXZ";const t=new it({color:16765348}),e=new it({color:1118481}),n=new it({color:14492194}),i=new it({color:14492194}),o=new it({color:2245802}),a=new it({color:2236962}),r=new lo({color:13621475,specular:16777215,shininess:70}),l=new lo({color:3884112,specular:10070715,shininess:50}),c=new it({color:1382946}),h=new lo({color:16765483,specular:16777215,shininess:90}),d=new lo({color:15660543,emissive:1713718,specular:16777215,shininess:100}),p=new it({color:7027230}),f=new Et({color:16772676}),g=new Et({color:16734720,transparent:!0,opacity:.85}),v=new it({color:16250871}),x=new it({color:13378082}),m=new lo({color:14213352,specular:16777215,shininess:85}),E=new it({color:14492194}),M=new it({color:16763938}),y=.87,I=.89,w=1.03,R=1.11,L=.53,C=.66,b=.36,U=new Xt(.17,10,8),G=new D(U,t);G.position.set(0,y,0),G.castShadow=!0,G.name="head",s.add(G);const H=new Xt(.028,6,6),Y=new D(H,e);Y.position.set(-.055,I,.145),Y.name="leftEye",s.add(Y);const Q=new D(H,e);Q.position.set(.055,I,.145),Q.name="rightEye",s.add(Q);const k=new Ut(.21,.21,.04,10),j=new D(k,n);j.position.set(0,w,0),j.castShadow=!0,j.name="hat",s.add(j);const X=new Ut(.15,.17,.12,10),ot=new D(X,n);ot.position.set(0,R,0),ot.castShadow=!0,ot.name="hatTop",s.add(ot);const rt=new dt(.3,.34,.2),ct=new D(rt,i);ct.position.set(0,L,0),ct.castShadow=!0,ct.name="torso",s.add(ct);const Bt=new Ut(.042,.038,.28,6),yt=new Tt;yt.position.set(-.21,C,0),yt.name="leftArmPivot";const q=new D(Bt,t);q.position.set(0,-.14,0),q.castShadow=!0,yt.add(q),s.add(yt);const $=new Tt;$.position.set(.21,C,0),$.name="rightArmPivot";const _t=new D(Bt,t);_t.position.set(0,-.14,0),_t.castShadow=!0,$.add(_t),s.add($);const pt=new Ut(.055,.05,.32,6),Gt=new dt(.09,.05,.15),Lt=new Tt;Lt.position.set(-.085,b,0),Lt.name="leftLegPivot";const ae=new D(pt,o);ae.position.set(0,-.16,0),ae.castShadow=!0,Lt.add(ae);const Ae=new D(Gt,a);Ae.position.set(0,-.335,.025),Ae.castShadow=!0,Ae.name="leftShoe",Lt.add(Ae),s.add(Lt);const Kt=new Tt;Kt.position.set(.085,b,0),Kt.name="rightLegPivot";const ke=new D(pt,o);ke.position.set(0,-.16,0),ke.castShadow=!0,Kt.add(ke);const z=new D(Gt,a);z.position.set(0,-.335,.025),z.castShadow=!0,z.name="rightShoe",Kt.add(z),s.add(Kt);const Ke=new Tt;Ke.name="armorHelmet",Ke.visible=!1,G.add(Ke);const de=new D(new Ut(.195,.2,.16,10),r);de.position.set(0,.05,0),Ke.add(de);const pe=new D(new dt(.28,.14,.09),r);pe.position.set(0,.01,.155),Ke.add(pe);const Ot=new D(new dt(.21,.036,.025),c);Ot.position.set(0,.02,.198),Ke.add(Ot);const Re=new D(new dt(.05,.09,.24),E);Re.position.set(0,.16,-.02),Ke.add(Re);const Dt=new Tt;Dt.name="armorChest",Dt.visible=!1,ct.add(Dt);const P=new D(new dt(.34,.35,.24),r);Dt.add(P);const S=new D(new dt(.12,.14,.025),h);S.position.set(0,.03,.125),Dt.add(S);const V=new D(new Xt(.095,8,6,0,Math.PI*2,0,Math.PI*.65),r);V.position.set(-.01,.01,0),V.rotation.z=.28,V.visible=!1,yt.add(V);const Z=new D(new Xt(.095,8,6,0,Math.PI*2,0,Math.PI*.65),r);Z.position.set(.01,.01,0),Z.rotation.z=-.28,Z.visible=!1,$.add(Z);const tt=new Tt;tt.name="swordInHand",tt.position.set(0,-.26,.03),tt.visible=!1,$.add(tt);const J=new D(new Ut(.022,.022,.13,6),h);J.position.set(0,0,0),tt.add(J);const Ct=new D(new Xt(.032,6,6),h);Ct.position.set(0,-.075,0),tt.add(Ct);const ft=new D(new dt(.17,.035,.05),h);ft.position.set(0,.01,.045),tt.add(ft);const Mt=new D(new dt(.048,.016,.56),d);Mt.position.set(0,.01,.34),tt.add(Mt);const ue=new D(new Oe(.034,.12,4),d);ue.rotation.x=Math.PI/2,ue.rotation.y=Math.PI/4,ue.position.set(0,.01,.68),tt.add(ue);const nt=new Tt;nt.name="swordScabbard",nt.position.set(.01,.02,-.125),nt.rotation.z=.52,nt.visible=!1,ct.add(nt);const wt=new D(new dt(.075,.46,.045),p);nt.add(wt);const zt=new D(new dt(.088,.055,.055),h);zt.position.set(0,.18,0),nt.add(zt);const Yt=new D(new dt(.082,.06,.052),h);Yt.position.set(0,-.22,0),nt.add(Yt);const bt=()=>{const at=new Tt;at.position.set(0,-.28,0),at.visible=!1;const Ht=new D(new Xt(.068,8,6),f);at.add(Ht);const we=new D(new hn(.105,0),g);return at.add(we),{group:at,core:Ht,outer:we}},he=bt();yt.add(he.group);const Jt=bt();$.add(Jt.group);const me=new Tt;me.name="butcherApron",me.visible=!1,ct.add(me);const F=new D(new dt(.27,.42,.03),v);F.position.set(0,-.04,.112),me.add(F);const ht=new D(new dt(.19,.13,.032),v);ht.position.set(0,.1,.112),me.add(ht);const K=new D(new dt(.24,.04,.034),x);K.position.set(0,-.14,.114),me.add(K);const et=new D(new dt(.32,.05,.22),v);et.position.set(0,-.04,0),me.add(et);const xt=at=>{const Ht=new Tt;Ht.position.set(0,-.24,0),Ht.visible=!1;const we=new D(new Ut(.062,.065,.11,8),l);Ht.add(we);const xe=new Tt;xe.position.set(at*.035,-.04,.05),Ht.add(xe);const T=new D(new Ut(.16,.16,.018,12),m);T.rotation.z=Math.PI/2,xe.add(T);const N=new D(new Ut(.045,.045,.032,8),l);N.rotation.z=Math.PI/2,xe.add(N);const B=new dt(.016,.05,.045);for(let W=0;W<8;W++){const O=W/8*Math.PI*2,st=new D(B,m);st.position.set(0,Math.cos(O)*.165,Math.sin(O)*.165),st.rotation.x=O+.35,xe.add(st)}return{group:Ht,blade:xe}},mt=xt(-1);yt.add(mt.group);const $t=xt(1);$.add($t.group);const ge=new Tt;ge.name="jetpackGroup",ge.position.set(0,.01,-.155),ge.visible=!1,ct.add(ge);const $e=new D(new dt(.24,.24,.06),E);$e.position.set(0,.02,.03),ge.add($e);const Me=at=>{const Ht=new D(new Ut(.058,.058,.3,8),r);Ht.position.set(at,.02,-.01),ge.add(Ht);const we=new D(new Xt(.058,8,6),E);we.position.set(at,.17,-.01),ge.add(we);const xe=new D(new Ut(.042,.062,.075,8),E);xe.position.set(at,-.15,-.01),ge.add(xe);const T=new D(new Ut(.058,.064,.02,8),M);T.position.set(at,-.185,-.01),ge.add(T);const N=new D(new Oe(.058,.28,7),g);N.rotation.x=Math.PI,N.position.set(at,-.32,-.01),N.visible=!1,ge.add(N);const B=new D(new Oe(.032,.18,6),f);return B.rotation.x=Math.PI,B.position.set(at,-.27,-.01),B.visible=!1,ge.add(B),{outerFlame:N,innerFlame:B}},nn=Me(-.075),un=Me(.075);let rs="none",$s=!1,Rn=!1;const ls=at=>{rs=at,at==="fireball"?(i.color.setHex(16737792),i.emissive.setHex(3346688)):(i.color.setHex(14492194),i.emissive.setHex(0));const Ht=at==="armor";Ke.visible=Ht,Dt.visible=Ht,V.visible=Ht,Z.visible=Ht;const we=at==="sword";tt.visible=we,nt.visible=we;const xe=at==="fireball";he.group.visible=xe,Jt.group.visible=xe;const T=at==="shredder";me.visible=T,mt.group.visible=T,$t.group.visible=T},Yn=(at,Ht,we)=>{const xe=$s&&(at||Ht);if(nn.outerFlame.visible=xe,nn.innerFlame.visible=xe,un.outerFlame.visible=xe,un.innerFlame.visible=xe,!xe)return;const T=.85+Math.sin(we*42)*.18+Math.cos(we*27)*.08,N=Ht?1.85*T:.95*T,B=Ht?1.35:.95;nn.outerFlame.scale.set(B,N,B),un.outerFlame.scale.set(B,N,B),nn.outerFlame.position.y=-.19-.13*N,un.outerFlame.position.y=-.19-.13*N,nn.innerFlame.scale.set(B,N*.9,B),un.innerFlame.scale.set(B,N*.9,B),nn.innerFlame.position.y=-.19-.085*N,un.innerFlame.position.y=-.19-.085*N},Zs=(at,Ht=!1)=>{$s=at,Rn=Ht,ge.visible=at,Yn(Ht,Ht,Dn.getElapsedTime())},Pn=at=>{ct.position.y=L+at,G.position.y=y+at,Y.position.y=I+at,Q.position.y=I+at,j.position.y=w+at,ot.position.y=R+at,yt.position.y=C+at,$.position.y=C+at},Dn=new qg;Dn.start();const wn=(at,Ht=1)=>{if(rs==="shredder"){const we=12*Ht;mt.blade.rotation.x=at*we,$t.blade.rotation.x=-at*we}if(rs==="fireball"){const we=.88+Math.sin(at*14)*.16;he.outer.scale.setScalar(we),Jt.outer.scale.setScalar(1+Math.cos(at*14)*.16),he.outer.rotation.y=at*5,Jt.outer.rotation.y=-at*5}},Io={idle(){const at=Dn.getElapsedTime(),Ht=Math.sin(at*2.5)*.008;Pn(Ht),yt.rotation.set(Math.sin(at*1.5)*.05,0,-.06),$.rotation.set(Math.sin(at*1.5+Math.PI)*.05,0,.06),Lt.rotation.set(0,0,0),Kt.rotation.set(0,0,0),Yn(!1,Rn,at),wn(at)},run(at){const Ht=Dn.getElapsedTime(),we=at>2.2?Math.min(at/8,1.8):Math.max(0,at),xe=9+we*5.2,T=.45+Math.min(we,1.6)*.36;yt.rotation.set(Math.sin(Ht*xe)*T,0,-.08),$.rotation.set(Math.sin(Ht*xe+Math.PI)*T,0,.08),Lt.rotation.set(Math.sin(Ht*xe+Math.PI)*T*.9,0,0),Kt.rotation.set(Math.sin(Ht*xe)*T*.9,0,0);const N=Math.abs(Math.sin(Ht*xe))*.032;Pn(N),Yn(!1,Rn,Ht),wn(Ht)},jump(){const at=Dn.getElapsedTime();Pn(0),yt.rotation.set(-.9,0,-.35+Math.sin(at*4)*.05),$.rotation.set(-.9,0,.35+Math.sin(at*4+Math.PI)*.05),Lt.rotation.set(.35,0,0),Kt.rotation.set(-.2,0,0),Yn(!1,Rn,at),wn(at)},fall(){const at=Dn.getElapsedTime();Pn(0),yt.rotation.set(-.25+Math.sin(at*7)*.3,0,-.55),$.rotation.set(-.25+Math.sin(at*7+Math.PI)*.3,0,.55),Lt.rotation.set(.15+Math.sin(at*5)*.15,0,0),Kt.rotation.set(.15+Math.sin(at*5+Math.PI)*.15,0,0),Yn(!1,Rn,at),wn(at)},groundPoundWindup(at){const Ht=Dn.getElapsedTime(),we=at!==void 0?je.clamp(at,0,1):Ht*5%1;Pn(.05*Math.sin(we*Math.PI)),yt.rotation.set(-.4,0,-1.15),$.rotation.set(-.4,0,1.15),Lt.rotation.set(-.45,0,0),Kt.rotation.set(-.45,0,0),Yn(!1,!1,Ht),wn(Ht,1.4)},groundPound(){const at=Dn.getElapsedTime();Pn(-.04),yt.rotation.set(.85,0,-.15),$.rotation.set(.85,0,.15),Lt.rotation.set(-.65,0,0),Kt.rotation.set(-.65,0,0),Yn(!1,!1,at),wn(at,1.8)},attack(at,Ht,we=!1){const xe=Dn.getElapsedTime(),T=Ht!==void 0?je.clamp(Ht,0,1):xe*4%1,N=Math.sin(T*Math.PI);if(we||(Pn(-.02*N),Lt.rotation.set(.2*N,0,0),Kt.rotation.set(-.25*N,0,0)),at==="sword"){const B=je.lerp(-2.35,.65,T),W=je.lerp(-.45,.45,T);$.rotation.set(B,.25*N,W),yt.rotation.set(.35*N,0,-.35)}else if(at==="shredder"){yt.rotation.set(-.75,0,-1.25),$.rotation.set(-.75,0,1.25),wn(xe,3.2);return}else at==="fireball"?($.rotation.set(-1.55*N,0,.12),yt.rotation.set(.45*N,0,-.25)):($.rotation.set(-1.6*N,0,.08),yt.rotation.set(.5*N,0,-.2));wn(xe,1.5)},fly(at){const Ht=Dn.getElapsedTime();Pn(Math.sin(Ht*6)*.015);const we=at?.55:.25;yt.rotation.set(we,0,-.55),$.rotation.set(we,0,.55);const xe=Math.sin(Ht*(at?14:8))*.12;Lt.rotation.set(.32+xe,0,0),Kt.rotation.set(.42-xe,0,0),Yn(!0,at,Ht),wn(Ht)},setSkin:ls,setJetpackVisible:Zs};return s.userData.animator=Io,s.userData.setSkin=ls,s.userData.setJetpackVisible=Zs,s}const On=8,Qh=12.5,tu=.3,ho=On/tu,Bc=Qh/tu,Gc=On/.22,ix=.4,sx=.12,os=25,Hc=Math.sqrt(2*os*3),Vc=Math.sqrt(2*os*3.8),ox=Math.sqrt(2*os*5.2),ax=Math.sqrt(2*os*1.45),Wc=1.5,rx=Math.sqrt(2*os*3),lr=.18,Xc=.12,lx=36,cx=10,hx=14,ux=13,dx=20,px=1.8,Yc=28,fx=16,mx=20,Kc=3,qc=3.5,al=je.degToRad(45),gx=Math.cos(al),xx=.1,vx=.15,jc=.12,cr=.35,vo=.4,rl=.5,la=rl+vo,Ps=.02,Jc=.1,_x=.22,yx=new A(0,2.3,0),$c=8,Mx=3,Di=new A,Zc=new A,oi=new A,bx=new A(0,1,0);function Qc(s,t,e,n,i){const o=e-s,a=n-t,r=o*o+a*a;if(r===0||r<=i*i)return[e,n];const l=Math.sqrt(r);return[s+o/l*i,t+a/l*i]}function th(s,t){let e=(t-s)%(Math.PI*2);return e>Math.PI&&(e-=Math.PI*2),e<-Math.PI&&(e+=Math.PI*2),e}class wx{constructor(t,e){_(this,"mesh");_(this,"velocity");_(this,"isGrounded",!1);_(this,"health",$c);_(this,"maxHealth",$c);_(this,"lives",Mx);_(this,"berries",0);_(this,"blueBerries",0);_(this,"powerUp","none");_(this,"armorHits",0);_(this,"invincibleTimer",0);_(this,"timeSinceDamage",0);_(this,"regenTimer",0);_(this,"isGroundPounding",!1);_(this,"groundPoundImpactThisFrame",!1);_(this,"jetpackEnabled",!1);_(this,"jetpackFuel",100);_(this,"jetpackMaxFuel",100);_(this,"onJumpEvent");_(this,"scene");_(this,"physicsWorld");_(this,"body");_(this,"collider");_(this,"characterController");_(this,"activeCamera",null);_(this,"spawnPos",yx.clone());_(this,"velX",0);_(this,"velZ",0);_(this,"verticalVel",0);_(this,"facingAngle",0);_(this,"flipAngle",0);_(this,"flyLeanPitch",0);_(this,"jumpPhase","none");_(this,"isLongJump",!1);_(this,"isSliding",!1);_(this,"wasGrounded",!1);_(this,"groundPoundPhase","none");_(this,"groundPoundTimer",0);_(this,"groundPoundBaseYaw",0);_(this,"isJetpackThrusting",!1);_(this,"isJetpackBoosting",!1);_(this,"coyoteTimer",0);_(this,"jumpBufferTimer",0);_(this,"wallCoyoteTimer",0);_(this,"timeSinceLanding",999);_(this,"groundNormal",new A(0,1,0));_(this,"touchingWallNormal",null);_(this,"lastWallNormal",new A);_(this,"prevSpaceDown",!1);_(this,"prevShiftDown",!1);_(this,"prevLeftMouseDown",!1);_(this,"attackCooldown",0);_(this,"attackAnimTimer",0);_(this,"attackAnimDuration",.22);_(this,"activeAttackType","none");_(this,"pendingAttackEvent",null);_(this,"pendingJumpSounds",[]);_(this,"animator");this.scene=t,this.physicsWorld=e,this.mesh=nx(),this.mesh.rotation.order="YXZ",t.add(this.mesh),this.animator=this.mesh.userData.animator;const n=this.mesh.getObjectByName("torso");n&&(n.onBeforeRender=(a,r,l)=>{this.activeCamera=l});const i=kt.RigidBodyDesc.kinematicPositionBased().setTranslation(this.spawnPos.x,this.feetToBodyY(this.spawnPos.y),this.spawnPos.z);this.body=e.createRigidBody(i);const o=kt.ColliderDesc.capsule(rl,vo);this.collider=e.createCollider(o,this.body),this.characterController=e.createCharacterController(Ps),this.characterController.setUp({x:0,y:1,z:0}),this.characterController.setMaxSlopeClimbAngle(al),this.characterController.setMinSlopeSlideAngle(al),this.characterController.enableAutostep(.25,.2,!1),this.characterController.setSlideEnabled(!0),this.physicsWorld.propagateModifiedBodyPositionsToColliders(),this.physicsWorld.updateSceneQueries(),this.velocity=new kt.Vector3(0,0,0),this.syncMeshToBody()}get position(){const t=this.body.translation();return new A(t.x,t.y-la-Ps,t.z)}get isRegenerating(){return this.health>0&&this.health<this.maxHealth&&this.timeSinceDamage>=Kc}get isJetpackActive(){return this.jetpackEnabled&&!this.isGrounded&&(this.isJetpackThrusting||this.isJetpackBoosting)}equipPowerUp(t){var e;this.powerUp=t,this.armorHits=t==="armor"?3:0,(e=this.animator)==null||e.setSkin(t),typeof this.mesh.userData.setSkin=="function"&&this.mesh.userData.setSkin(t)}takeDamage(t,e){if(this.invincibleTimer>0||t<=0||this.health<=0)return!1;if(this.timeSinceDamage=0,this.regenTimer=0,this.groundPoundPhase!=="none"&&(this.groundPoundPhase="none",this.isGroundPounding=!1,this.mesh.scale.set(1,1,1)),this.powerUp!=="none"){if(this.powerUp==="armor"&&this.armorHits>1)return this.armorHits-=1,this.invincibleTimer=1.2,this.applyKnockback(e,4.5,4),!0;const n=this.powerUp==="armor";return this.armorHits=0,this.equipPowerUp("none"),n||(this.health=Math.max(0,this.health-1)),this.invincibleTimer=1.5,this.applyKnockback(e,6,5.2),!0}return this.health=Math.max(0,this.health-t),this.invincibleTimer=1.5,this.applyKnockback(e,6.5,5.5),!0}consumeAttackEvent(){const t=this.pendingAttackEvent;return this.pendingAttackEvent=null,t}consumeJumpSound(){return this.pendingJumpSounds.shift()??null}setJetpackEnabled(t){var e;this.jetpackEnabled=t,this.jetpackFuel=this.jetpackMaxFuel,this.isJetpackThrusting=!1,this.isJetpackBoosting=!1,this.flyLeanPitch=0,(e=this.animator)==null||e.setJetpackVisible(t,!1),typeof this.mesh.userData.setJetpackVisible=="function"&&this.mesh.userData.setJetpackVisible(t,!1)}setSpawn(t){this.spawnPos.copy(t)}respawnAtCheckpoint(){this.velX=0,this.velZ=0,this.verticalVel=0,this.jumpPhase="none",this.groundPoundPhase="none",this.isGroundPounding=!1,this.isLongJump=!1,this.isSliding=!1,this.flipAngle=0,this.flyLeanPitch=0,this.coyoteTimer=0,this.jumpBufferTimer=0,this.wallCoyoteTimer=0,this.mesh.scale.set(1,1,1);const t=new kt.Vector3(this.spawnPos.x,this.feetToBodyY(this.spawnPos.y),this.spawnPos.z);this.body.setTranslation(t,!0),this.body.setNextKinematicTranslation(t),this.physicsWorld.propagateModifiedBodyPositionsToColliders(),this.physicsWorld.updateSceneQueries(),this.velocity.x=0,this.velocity.y=0,this.velocity.z=0,this.syncMeshToBody()}resetForLevel(t,e){this.setSpawn(t),this.health=this.maxHealth,this.invincibleTimer=0,this.timeSinceDamage=0,this.regenTimer=0,this.attackCooldown=0,this.attackAnimTimer=0,this.pendingAttackEvent=null,this.pendingJumpSounds.length=0,this.mesh.visible=!0,this.respawnAtCheckpoint(),this.setJetpackEnabled(e)}dispose(){this.scene.remove(this.mesh),this.physicsWorld.getCollider(this.collider.handle)&&this.physicsWorld.removeCollider(this.collider,!0),this.physicsWorld.getRigidBody(this.body.handle)&&this.physicsWorld.removeRigidBody(this.body)}update(t,e){if(this.groundPoundImpactThisFrame=!1,t<=0)return;if(t>.05&&(t=.05),this.invincibleTimer>0?(this.invincibleTimer=Math.max(0,this.invincibleTimer-t),this.mesh.visible=Math.floor(this.invincibleTimer*16)%2===0):this.mesh.visible=!0,this.timeSinceDamage+=t,this.health>0&&this.health<this.maxHealth)if(this.timeSinceDamage>=Kc)for(this.regenTimer+=t;this.regenTimer>=qc&&this.health<this.maxHealth;)this.regenTimer-=qc,this.health=Math.min(this.maxHealth,this.health+1);else this.regenTimer=0;else this.regenTimer=0;if(this.attackCooldown>0&&(this.attackCooldown=Math.max(0,this.attackCooldown-t)),this.attackAnimTimer>0&&(this.attackAnimTimer=Math.max(0,this.attackAnimTimer-t)),this.health<=0){this.velX=0,this.velZ=0,this.velocity.x=0,this.velocity.y=0,this.velocity.z=0;return}this.physicsWorld.propagateModifiedBodyPositionsToColliders(),this.physicsWorld.updateSceneQueries();const n=e.isKeyDown("KeyW")||e.isKeyDown("w")||e.isKeyDown("ArrowUp"),i=e.isKeyDown("KeyS")||e.isKeyDown("s")||e.isKeyDown("ArrowDown"),o=e.isKeyDown("KeyA")||e.isKeyDown("a")||e.isKeyDown("ArrowLeft"),a=e.isKeyDown("KeyD")||e.isKeyDown("d")||e.isKeyDown("ArrowRight"),r=e.isKeyDown("Space")||e.isKeyDown("space"),l=e.isKeyDown("ShiftLeft")||e.isKeyDown("ShiftRight")||e.isKeyDown("shift"),c=e.isMouseDown(0),h=r&&!this.prevSpaceDown,d=l&&!this.prevShiftDown,p=c&&!this.prevLeftMouseDown;this.detectGround(),this.detectWall(),this.isSliding=this.isGrounded&&this.groundNormal.y<gx&&this.groundNormal.y>.05,this.isGrounded&&!this.wasGrounded&&this.handleLanded(),this.isGrounded?(this.timeSinceLanding+=t,this.coyoteTimer=!this.isSliding&&this.verticalVel<=1?xx:0):this.coyoteTimer=Math.max(0,this.coyoteTimer-t),h?this.jumpBufferTimer=vx:this.jumpBufferTimer=Math.max(0,this.jumpBufferTimer-t),!this.isGrounded&&this.touchingWallNormal?(this.wallCoyoteTimer=jc,this.lastWallNormal.copy(this.touchingWallNormal)):this.wallCoyoteTimer=Math.max(0,this.wallCoyoteTimer-t);const f=(n?1:0)-(i?1:0),g=(a?1:0)-(o?1:0),v=f!==0||g!==0;if(v){const k=this.resolveCamera();k?(k.getWorldDirection(Di),Di.y=0,Di.lengthSq()>1e-6?Di.normalize():Di.set(0,0,-1)):Di.set(0,0,-1),Zc.crossVectors(Di,bx).normalize(),oi.set(0,0,0).addScaledVector(Di,f).addScaledVector(Zc,g).normalize()}else oi.set(0,0,0);p&&this.attackCooldown<=0&&this.groundPoundPhase==="none"&&this.triggerAttack();const x=this.jetpackEnabled&&r;if(d&&!this.isGrounded&&this.groundPoundPhase==="none"&&!x&&(this.isGroundPounding=!0,this.groundPoundPhase="windup",this.groundPoundTimer=lr,this.groundPoundBaseYaw=this.facingAngle,this.isLongJump=!1,this.flipAngle=0,this.velX=0,this.velZ=0,this.verticalVel=0,this.emitJumpEvent("groundPound")),this.groundPoundPhase==="windup"){this.groundPoundTimer-=t,this.velX=0,this.velZ=0,this.verticalVel=0;const k=1-Math.max(0,this.groundPoundTimer)/lr;this.facingAngle=this.groundPoundBaseYaw+k*Math.PI*2,this.groundPoundTimer<=0&&(this.groundPoundPhase="slam",this.facingAngle=this.groundPoundBaseYaw,this.verticalVel=-32)}else if(this.groundPoundPhase==="recover"){this.groundPoundTimer-=t,this.velX=0,this.velZ=0;const k=je.clamp(this.groundPoundTimer/Xc,0,1),j=Math.sin(k*Math.PI);this.mesh.scale.set(1+.28*j,1-.36*j,1+.28*j),this.groundPoundTimer<=0&&(this.groundPoundPhase="none",this.isGroundPounding=!1,this.mesh.scale.set(1,1,1))}if(this.isJetpackThrusting=!1,this.isJetpackBoosting=!1,this.jetpackEnabled)if(!this.isGrounded&&this.groundPoundPhase==="none"){const k=r&&this.jetpackFuel>0,j=l&&this.jetpackFuel>0&&(r||!d);if(this.isJetpackThrusting=k,this.isJetpackBoosting=j,k||j){const X=(k?fx:0)+(j?mx:0);this.jetpackFuel=Math.max(0,this.jetpackFuel-X*t)}else this.jetpackFuel=Math.min(this.jetpackMaxFuel,this.jetpackFuel+Yc*t)}else this.jetpackFuel=Math.min(this.jetpackMaxFuel,this.jetpackFuel+Yc*t);const m=Math.hypot(this.velX,this.velZ);if(this.groundPoundPhase!=="none")this.velX=0,this.velZ=0;else if(this.isSliding){const k=this.groundNormal.x*this.groundNormal.x+this.groundNormal.z*this.groundNormal.z;if(k>1e-5){const j=1/Math.sqrt(k),X=this.groundNormal.x*j,ot=this.groundNormal.z*j,rt=os*(1-this.groundNormal.y)*1.4;this.velX+=X*rt*t,this.velZ+=ot*rt*t,v&&(this.velX+=oi.x*ho*.25*t,this.velZ+=oi.z*ho*.25*t);const ct=Math.hypot(this.velX,this.velZ),Bt=On*1.6;ct>Bt&&(this.velX=this.velX/ct*Bt,this.velZ=this.velZ/ct*Bt)}}else if(v){let k=On,j=this.isGrounded?ho:ho*ix;this.isGrounded&&l?(k=Qh,j=Bc):this.isJetpackBoosting?(k=On*px,j=Bc*.85):this.isJetpackThrusting?(k=On*1.1,j=ho*.7):this.isLongJump&&(k=Math.max(m,On*Wc));const X=oi.x*k,ot=oi.z*k;[this.velX,this.velZ]=Qc(this.velX,this.velZ,X,ot,j*t)}else{const k=this.isGrounded?Gc:Gc*sx;[this.velX,this.velZ]=Qc(this.velX,this.velZ,0,0,k*t)}const E=this.coyoteTimer>0&&!this.isSliding&&this.groundPoundPhase==="none",M=Math.hypot(this.velX,this.velZ);if(this.jumpBufferTimer>0&&E){if(l&&M>On*.45){const k=v?oi.x:Math.sin(this.facingAngle),j=v?oi.z:Math.cos(this.facingAngle),X=Math.max(M,On*Wc);this.velX=k*X,this.velZ=j*X,this.facingAngle=Math.atan2(k,j),this.verticalVel=ax,this.isLongJump=!0,this.jumpPhase="single",this.emitJumpEvent("jump")}else this.jumpPhase==="double"&&this.timeSinceLanding<cr&&M>On*.35?(this.verticalVel=ox,this.jumpPhase="triple",this.flipAngle=0,this.isLongJump=!1,M>.1&&(this.velX*=1.1,this.velZ*=1.1),this.emitJumpEvent("tripleJump")):this.jumpPhase==="single"&&this.timeSinceLanding<cr?(this.verticalVel=Vc,this.jumpPhase="double",this.isLongJump=!1,this.emitJumpEvent("doubleJump")):(this.verticalVel=Hc,this.jumpPhase="single",this.isLongJump=!1,this.emitJumpEvent("jump"));this.isGrounded=!1,this.isGroundPounding=!1,this.groundPoundPhase="none",this.coyoteTimer=0,this.jumpBufferTimer=0}else if(this.jumpBufferTimer>0&&this.isGrounded&&this.isSliding&&this.groundPoundPhase==="none")this.verticalVel=Hc*.9,this.velX+=this.groundNormal.x*4,this.velZ+=this.groundNormal.z*4,this.jumpPhase="single",this.isGrounded=!1,this.isSliding=!1,this.coyoteTimer=0,this.jumpBufferTimer=0,this.emitJumpEvent("jump");else if(!this.isGrounded&&this.groundPoundPhase==="none"&&h&&(this.touchingWallNormal!==null||this.wallCoyoteTimer>0)){const k=this.touchingWallNormal??this.lastWallNormal;this.verticalVel=rx,this.velX=k.x*On*.95,this.velZ=k.z*On*.95,this.facingAngle=Math.atan2(this.velX,this.velZ),this.jumpPhase="single",this.isGroundPounding=!1,this.isLongJump=!1,this.flipAngle=0,this.jumpBufferTimer=0,this.wallCoyoteTimer=0,this.emitJumpEvent("wallKick")}else!this.isGrounded&&!this.jetpackEnabled&&this.groundPoundPhase==="none"&&this.jumpPhase==="single"&&h&&(this.verticalVel=Vc,this.jumpPhase="double",this.isGroundPounding=!1,this.isLongJump=!1,this.jumpBufferTimer=0,this.emitJumpEvent("doubleJump"));if(this.isGrounded&&this.timeSinceLanding>cr&&this.jumpPhase!=="none"&&(this.jumpPhase="none",this.isLongJump=!1),this.groundPoundPhase==="windup")this.verticalVel=0;else if(this.groundPoundPhase==="slam")this.verticalVel=-32;else if(this.isGrounded)this.verticalVel<0&&(this.verticalVel=-.5);else if(this.verticalVel-=os*t,this.jetpackEnabled&&this.groundPoundPhase==="none")if(this.isJetpackThrusting){const k=this.isJetpackBoosting?ux:cx,j=lx+(this.isJetpackBoosting?hx:0);this.verticalVel=Math.min(k,this.verticalVel+j*t)}else this.isJetpackBoosting&&(this.verticalVel=Math.min(4.5,this.verticalVel+dx*t));this.isGrounded&&this.verticalVel<=0&&!this.isSliding&&this.groundPoundPhase!=="slam"?(this.characterController.enableSnapToGround(.25),this.characterController.enableAutostep(.25,.2,!1)):(this.characterController.disableSnapToGround(),this.characterController.disableAutostep());const y=new kt.Vector3(this.velX*t,this.verticalVel*t,this.velZ*t);this.characterController.computeColliderMovement(this.collider,y,void 0,void 0,k=>k.handle!==this.collider.handle);const I=this.characterController.computedMovement(),w=this.characterController.numComputedCollisions();for(let k=0;k<w;k++){const j=this.characterController.computedCollision(k);if(!j)continue;const X=j.normal1;if(X.y<-.5&&this.verticalVel>0&&(this.verticalVel=0),Math.abs(X.y)<.35){const ot=Math.hypot(X.x,X.z);if(ot>1e-4){const rt=X.x/ot,ct=X.z/ot,Bt=this.velX*rt+this.velZ*ct;Bt<0&&(this.velX-=Bt*rt,this.velZ-=Bt*ct),this.isGrounded||(this.touchingWallNormal=new A(rt,0,ct),this.lastWallNormal.set(rt,0,ct),this.wallCoyoteTimer=jc)}}}this.characterController.computedGrounded()&&this.verticalVel<0&&(this.verticalVel=0,this.isGrounded||(this.isGrounded=!0,this.handleLanded()));const R=this.body.translation(),L=R.x+I.x,C=R.y+I.y,b=R.z+I.z,U=Math.min(-24,this.spawnPos.y-28);if(C<U){this.respawnAtCheckpoint(),this.takeDamage(1),this.wasGrounded=!1,this.prevSpaceDown=r,this.prevShiftDown=l,this.prevLeftMouseDown=c;return}const G=new kt.Vector3(L,C,b);this.body.setTranslation(G,!0),this.body.setNextKinematicTranslation(G),this.physicsWorld.propagateModifiedBodyPositionsToColliders(),this.physicsWorld.updateSceneQueries(),this.velocity.x=this.velX,this.velocity.y=this.isGrounded&&this.verticalVel<0?0:this.verticalVel,this.velocity.z=this.velZ;const H=Math.hypot(this.velX,this.velZ);if(this.groundPoundPhase==="none"){if(v&&!this.isSliding){const k=Math.atan2(oi.x,oi.z),j=this.isGrounded?14:8;this.facingAngle+=th(this.facingAngle,k)*Math.min(1,j*t)}else if(H>.3){const k=Math.atan2(this.velX,this.velZ);this.facingAngle+=th(this.facingAngle,k)*Math.min(1,10*t)}}this.jumpPhase==="triple"&&!this.isGrounded&&this.groundPoundPhase==="none"?(this.flipAngle+=t*Math.PI*3.4,this.flipAngle>Math.PI*2&&(this.flipAngle=Math.PI*2)):this.flipAngle=0;const Y=this.isJetpackActive&&H>.5?this.isJetpackBoosting?.32:.18:0;this.flyLeanPitch+=(Y-this.flyLeanPitch)*Math.min(1,10*t);let Q=0;if(this.attackAnimTimer>0&&this.activeAttackType==="shredder"&&(Q=(1-this.attackAnimTimer/this.attackAnimDuration)*Math.PI*2),this.syncMeshToBody(Q),this.animator){if(this.groundPoundPhase==="windup"){const k=1-Math.max(0,this.groundPoundTimer)/lr;this.animator.groundPoundWindup(k)}else if(this.groundPoundPhase==="slam"||this.groundPoundPhase==="recover")this.animator.groundPound();else if(this.isJetpackActive?this.animator.fly(this.isJetpackBoosting):!this.isGrounded&&this.verticalVel>.5?this.animator.jump():this.isGrounded?H>.4?this.animator.run(H/On):this.animator.idle():this.animator.fall(),this.attackAnimTimer>0){const k=1-this.attackAnimTimer/this.attackAnimDuration;this.animator.attack(this.activeAttackType,k,!0)}}this.wasGrounded=this.isGrounded,this.prevSpaceDown=r,this.prevShiftDown=l,this.prevLeftMouseDown=c}feetToBodyY(t){return t+la+Ps}handleLanded(){this.timeSinceLanding=0,this.isLongJump=!1,this.flipAngle=0,this.groundPoundPhase==="slam"&&(this.groundPoundImpactThisFrame=!0,this.groundPoundPhase="recover",this.groundPoundTimer=Xc,this.velX=0,this.velZ=0,this.verticalVel=0)}emitJumpEvent(t){this.onJumpEvent?this.onJumpEvent(t):this.pendingJumpSounds.push(t)}triggerAttack(){this.activeAttackType=this.powerUp,this.powerUp==="sword"?(this.attackCooldown=.32,this.attackAnimDuration=.26):this.powerUp==="fireball"?(this.attackCooldown=.35,this.attackAnimDuration=.22):this.powerUp==="shredder"?(this.attackCooldown=.38,this.attackAnimDuration=.3):(this.attackCooldown=.28,this.attackAnimDuration=.22),this.attackAnimTimer=this.attackAnimDuration;const t=this.position.add(new A(0,.65,0)),e=new A(Math.sin(this.facingAngle),0,Math.cos(this.facingAngle)).normalize();this.pendingAttackEvent={type:this.powerUp,origin:t,forward:e}}applyKnockback(t,e,n){if(!t)return;const i=t.x,o=t.z,a=Math.hypot(i,o);a>1e-4&&(this.velX=i/a*e,this.velZ=o/a*e),this.verticalVel=Math.max(this.verticalVel,n),this.isGrounded=!1}resolveCamera(){var n;if(this.activeCamera)return this.activeCamera;const t=(n=this.scene.userData)==null?void 0:n.camera;return t||(this.scene.getObjectByProperty("type","PerspectiveCamera")??null)}syncMeshToBody(t=0){const e=this.body.translation();this.mesh.position.set(e.x,e.y-la-Ps,e.z),this.mesh.rotation.y=this.facingAngle+t,this.mesh.rotation.x=this.flipAngle+this.flyLeanPitch}detectGround(){const t=this.body.translation(),e=la+Ps+Jc,n=new kt.Vector3(t.x,t.y,t.z),i=new kt.Vector3(0,-1,0),o=new kt.Ray(n,i);let a=this.physicsWorld.castRayAndGetNormal(o,e,!0,void 0,void 0,this.collider,this.body);if(a&&(a.timeOfImpact<=.001||a.normal.y<=.05)&&(a=null),!a){const l=t.y-.25,c=Math.sqrt(vo*vo-.26*.26),h=rl-.25+c+Ps+Jc,d=[[.26,0],[-.26,0],[0,.26],[0,-.26]];for(const[p,f]of d){const g=new kt.Ray(new kt.Vector3(t.x+p,l,t.z+f),i),v=this.physicsWorld.castRayAndGetNormal(g,h,!0,void 0,void 0,this.collider,this.body);v&&v.timeOfImpact>.001&&v.normal.y>.05&&(!a||v.timeOfImpact<a.timeOfImpact)&&(a=v)}}a&&this.verticalVel<=2?(this.isGrounded=!0,this.groundNormal.set(a.normal.x,a.normal.y,a.normal.z).normalize()):this.characterController.computedGrounded()&&this.verticalVel<=1?this.isGrounded=!0:(this.isGrounded=!1,this.groundNormal.set(0,1,0))}detectWall(){if(this.touchingWallNormal=null,this.isGrounded)return;const t=this.body.translation(),e=vo+_x,n=[t.y,t.y+.3];let i=1/0,o=null;for(const a of n){const r=new kt.Vector3(t.x,a,t.z);for(let l=0;l<8;l++){const c=l/8*Math.PI*2,h=new kt.Vector3(Math.cos(c),0,Math.sin(c)),d=new kt.Ray(r,h),p=this.physicsWorld.castRayAndGetNormal(d,e,!0,void 0,void 0,this.collider,this.body);p&&p.timeOfImpact>.001&&Math.abs(p.normal.y)<.35&&p.timeOfImpact<i&&(i=p.timeOfImpact,o=new A(p.normal.x,0,p.normal.z).normalize())}}o&&o.lengthSq()>.5&&(this.touchingWallNormal=o)}}const hr=[4,6,10],eh=.003,Sx=je.degToRad(-20),Tx=je.degToRad(70),Ex=.1,Cx=.45,Ax=.05,Rx=.12,Px=1,Dx=.4,Li=.35,Lx=.4,nh=[[0,0],[Li,Li],[-Li,Li],[Li,-Li],[-Li,-Li]];class Ix{constructor(t,e){_(this,"camera");_(this,"target");_(this,"yaw",0);_(this,"pitch",je.degToRad(20));_(this,"zoomIndex",1);_(this,"distance",hr[1]);_(this,"currentPosition",new A);_(this,"desiredPosition",new A);_(this,"finalPosition",new A);_(this,"lookAtTarget",new A);_(this,"lastTargetPosition",new A);_(this,"targetYaw",0);_(this,"raycaster",new jg);_(this,"rayDirection",new A);_(this,"worldUp",new A(0,1,0));_(this,"rayRight",new A);_(this,"rayUp",new A);_(this,"rayOrigin",new A);_(this,"rayTarget",new A);_(this,"offsetRayDir",new A);_(this,"collidables",[]);_(this,"onWheel",t=>{t.deltaY>0?this.zoomIndex=Math.min(this.zoomIndex+1,hr.length-1):t.deltaY<0&&(this.zoomIndex=Math.max(this.zoomIndex-1,0))});this.camera=t,this.target=e,this.currentPosition.copy(t.position),this.lastTargetPosition.copy(e.position),window.addEventListener("wheel",this.onWheel,{passive:!0})}update(t,e){const n=Math.min(Math.max(t,1e-4),.1),i=n*60,o=1-Math.pow(1-Ex,i),a=1-Math.pow(1-Cx,i),r=1-Math.pow(1-Ax,i),l=1-Math.pow(1-Rx,i),c=e.getMouseDelta(),h=Math.abs(c.x)>.5||Math.abs(c.y)>.5;h&&(this.yaw-=c.x*eh,this.pitch+=c.y*eh,this.pitch=je.clamp(this.pitch,Sx,Tx));const d=this.target.position,p=d.x-this.lastTargetPosition.x,f=d.z-this.lastTargetPosition.z;if((p*p+f*f)/(n*n)>.25&&!h){this.targetYaw=Math.atan2(-p,-f);let w=this.targetYaw-this.yaw;for(;w>Math.PI;)w-=Math.PI*2;for(;w<-Math.PI;)w+=Math.PI*2;Math.abs(w)<Math.PI*.78&&(this.yaw+=w*r)}this.lastTargetPosition.copy(d);const x=hr[this.zoomIndex];this.distance+=(x-this.distance)*l;const m=this.lookAtTarget;m.set(d.x,d.y+Px,d.z);const E=Math.cos(this.pitch);this.desiredPosition.set(m.x+this.distance*Math.sin(this.yaw)*E,m.y+this.distance*Math.sin(this.pitch),m.z+this.distance*Math.cos(this.yaw)*E),this.rayDirection.subVectors(this.desiredPosition,m);const M=this.rayDirection.length();this.finalPosition.copy(this.desiredPosition);let y=!1;if(M>1e-4){this.rayDirection.divideScalar(M),this.rayRight.crossVectors(this.worldUp,this.rayDirection),this.rayRight.lengthSq()<1e-6?this.rayRight.set(1,0,0):this.rayRight.normalize(),this.rayUp.crossVectors(this.rayDirection,this.rayRight).normalize(),this.collidables.length=0,this.target.parent&&this.collectCollidables(this.target.parent,this.collidables);let w=M;for(let R=0;R<nh.length;R++){const[L,C]=nh[R];this.rayOrigin.copy(m).addScaledVector(this.rayRight,L*.4).addScaledVector(this.rayUp,C*.4),this.rayTarget.copy(this.desiredPosition).addScaledVector(this.rayRight,L).addScaledVector(this.rayUp,C),this.offsetRayDir.subVectors(this.rayTarget,this.rayOrigin);const b=this.offsetRayDir.length();if(b<1e-4)continue;this.offsetRayDir.divideScalar(b),this.raycaster.set(this.rayOrigin,this.offsetRayDir),this.raycaster.near=.05,this.raycaster.far=b;const U=this.raycaster.intersectObjects(this.collidables,!1);if(U.length>0){const G=U[0].distance*(M/b);G<w&&(w=G,y=!0)}}if(y){const R=Math.max(Lx,w-Dx);this.finalPosition.copy(m).addScaledVector(this.rayDirection,R)}}const I=y&&this.currentPosition.distanceToSquared(m)>this.finalPosition.distanceToSquared(m)?a:o;this.currentPosition.lerp(this.finalPosition,I),this.camera.position.copy(this.currentPosition),this.camera.lookAt(m)}dispose(){window.removeEventListener("wheel",this.onWheel)}collectCollidables(t,e){var n;if(!(t===this.target||!t.visible||(n=t.userData)!=null&&n.noCameraCollision)){t.isMesh&&e.push(t);for(let i=0;i<t.children.length;i++)this.collectCollidables(t.children[i],e)}}}const Ux=new Xt(.22,10,8),Nx=new Xt(.33,10,8),ih=new hn(.14,0),Fx=new Et({color:16772676}),Ox=new Et({color:16729344,transparent:!0,opacity:.8}),ur=20,zx=22,kx=7.6,Bx=2.5,ca=.34,Gx=.025,sh=.22;class Hx{constructor(t,e,n,i,o){_(this,"mesh");_(this,"position");_(this,"isAlive",!0);_(this,"scene");_(this,"velX");_(this,"velY");_(this,"velZ");_(this,"lifetime",Bx);_(this,"trailTimer",0);_(this,"spinPhase",0);_(this,"particles",[]);_(this,"getGroundY");_(this,"physicsWorld");_(this,"disposed",!1);this.scene=t,this.getGroundY=i,this.physicsWorld=o;const a=new A(n.x,0,n.z);a.lengthSq()<1e-6?a.set(0,0,1):a.normalize(),this.velX=a.x*ur,this.velY=n.y!==0?je.clamp(n.y*ur*.4,-3,6):-1.2,this.velZ=a.z*ur,this.position=e.clone().addScaledVector(a,.55),this.mesh=new Tt,this.mesh.position.copy(this.position),this.mesh.userData.noCameraCollision=!0;const r=new D(Ux,Fx);r.userData.noCameraCollision=!0,this.mesh.add(r);const l=new D(Nx,Ox);l.userData.noCameraCollision=!0,this.mesh.add(l),this.scene.add(this.mesh)}get isDead(){return!this.isAlive}update(t,e){if(this.disposed)return!1;const n=Math.min(Math.max(t,0),.05);for(let c=this.particles.length-1;c>=0;c--){const h=this.particles[c];if(h.age+=n,h.age>=sh)this.scene.remove(h.mesh),h.mat.dispose(),this.particles.splice(c,1);else{const d=h.age/sh,p=1-d*.85;h.mesh.scale.setScalar(p),h.mesh.position.y+=n*1.1,h.mat.opacity=.75*(1-d)}}if(!this.isAlive)return!1;if(this.lifetime-=n,this.lifetime<=0)return this.expire(),!1;this.velY-=zx*n;const i=this.position.x+this.velX*n;let o=this.position.y+this.velY*n;const a=this.position.z+this.velZ*n;if(this.physicsWorld){const c=Math.hypot(i-this.position.x,a-this.position.z);if(c>1e-4){const h=new kt.Ray(new kt.Vector3(this.position.x,this.position.y,this.position.z),new kt.Vector3((i-this.position.x)/c,0,(a-this.position.z)/c)),d=this.physicsWorld.castRayAndGetNormal(h,c+ca*.8,!0,kt.QueryFilterFlags.EXCLUDE_SENSORS);if(d&&d.timeOfImpact>.02&&Math.abs(d.normal.y)<.45)return this.spawnBurst(),this.expire(),!1}}const r=this.sampleFloorY(i,o,a);o<=r+ca*.8&&this.velY<=0&&(o=r+ca*.8,this.velY=kx),this.position.set(i,o,a),this.mesh.position.copy(this.position),this.spinPhase+=n*16,this.mesh.rotation.y=this.spinPhase,this.mesh.rotation.x=this.spinPhase*.7;const l=.92+Math.sin(this.spinPhase*1.8)*.14;return this.mesh.scale.setScalar(l),this.trailTimer+=n,this.trailTimer>=Gx&&(this.trailTimer=0,this.spawnTrailPuff()),e&&e.length>0&&this.checkHits(e),this.isAlive}checkHits(t){if(!this.isAlive)return null;for(let e=0;e<t.length;e++){const n=t[e];if(!n||n.isDead)continue;const i=n.position.x-this.position.x,o=n.position.z-this.position.z,a=i*i+o*o,r=n.radius+ca+.15;if(a>r*r)continue;const l=n.position.y-Math.max(.55,n.radius*.65),c=n.position.y+Math.max(1.6,n.radius*1.45);if(!(this.position.y<l||this.position.y>c))return n.takeDamage(1,!1,!0),this.spawnBurst(),this.expire(),n}return null}checkCollision(t){return this.checkHits(t)}dispose(){if(!this.disposed){this.disposed=!0,this.isAlive=!1,this.scene.remove(this.mesh);for(const t of this.particles)this.scene.remove(t.mesh),t.mat.dispose();this.particles.length=0}}expire(){this.isAlive=!1,this.mesh.visible=!1}sampleFloorY(t,e,n){let i=this.getGroundY?this.getGroundY(t,n):0;if(this.physicsWorld){const o=new kt.Ray(new kt.Vector3(t,e+.4,n),new kt.Vector3(0,-1,0)),a=this.physicsWorld.castRayAndGetNormal(o,1.2,!0,kt.QueryFilterFlags.EXCLUDE_SENSORS);if(a&&a.timeOfImpact>.01&&a.normal.y>.5){const r=e+.4-a.timeOfImpact;r>i&&(i=r)}}return i}spawnTrailPuff(){const t=Math.random()>.45,e=new Et({color:t?16742161:16763938,transparent:!0,opacity:.75}),n=new D(ih,e);n.position.set(this.position.x+(Math.random()-.5)*.14,this.position.y+(Math.random()-.5)*.14,this.position.z+(Math.random()-.5)*.14),n.userData.noCameraCollision=!0,this.scene.add(n),this.particles.push({mesh:n,mat:e,age:0})}spawnBurst(){for(let t=0;t<4;t++){const e=new Et({color:t%2===0?16733440:16772659,transparent:!0,opacity:.9}),n=new D(ih,e);n.position.set(this.position.x+(Math.random()-.5)*.45,this.position.y+(Math.random()-.5)*.45,this.position.z+(Math.random()-.5)*.45),n.scale.setScalar(1.3),n.userData.noCameraCollision=!0,this.scene.add(n),this.particles.push({mesh:n,mat:e,age:0})}}}function Vx(s,t,e,n){let i=2,o=1,a=!1,r=!1,l=.15;s==="sword"?(i=3.2,o=2,a=!0,l=-.15):s==="shredder"?(i=3.5,o=2,a=!0,r=!0):s==="fireball"&&(i=2,o=1,a=!0);let c=e.x,h=e.z;const d=Math.hypot(c,h);d>1e-5?(c/=d,h/=d):(c=0,h=1);let p=0;for(let f=0;f<n.length;f++){const g=n[f];if(!g||g.isDead)continue;const v=g.position.x-t.x,x=g.position.z-t.z,m=Math.hypot(v,x),E=i+g.radius;if(m>E)continue;const M=t.y-1.65-g.radius,y=t.y+1.85+g.radius;if(!(g.position.y<M||g.position.y>y)){if(!r&&m>.8+g.radius*.5){const I=v/m,w=x/m;if(I*c+w*h<l)continue}g.takeDamage(o,!1,a)&&p++}}return p}class Wx{constructor(t){_(this,"shadowMesh");_(this,"maxShadowDistance",10);const e=new Sa(.6,16),n=new Et({color:0,opacity:.4,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1});this.shadowMesh=new D(e,n),this.shadowMesh.rotation.x=-Math.PI/2,this.shadowMesh.renderOrder=-1,this.shadowMesh.userData.noCameraCollision=!0,t.add(this.shadowMesh)}update(t,e){const n=t.y-e;if(n>this.maxShadowDistance||n<-.5){this.shadowMesh.visible=!1;return}const i=Math.max(0,n);this.shadowMesh.visible=!0,this.shadowMesh.position.set(t.x,e+.05,t.z);const o=1-i/this.maxShadowDistance,a=.3+o*.7;this.shadowMesh.scale.set(a,a,a),this.shadowMesh.material.opacity=.4*o}}function eu(s){s.userData.noCameraCollision=!0,s.traverse(t=>{t.userData.noCameraCollision=!0})}function nu(s){s.traverse(t=>{const e=t;e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(n=>n.dispose()):e.material.dispose())})}class Xx{constructor(t,e,n){_(this,"collected",!1);_(this,"type");_(this,"value");_(this,"mesh");_(this,"scene");_(this,"baseY");_(this,"elapsed",Math.random()*Math.PI*2);_(this,"sparkles",[]);this.scene=t,this.type=n,this.value=n==="strawberry"?1:5,this.baseY=e.y,this.mesh=new Tt,this.mesh.userData.noCameraCollision=!0,this.mesh.position.copy(e),n==="strawberry"?this._buildStrawberry():this._buildBlueberry(),eu(this.mesh),t.add(this.mesh)}update(t){this.collected||(this.elapsed+=t,this.mesh.position.y=this.baseY+Math.sin(this.elapsed*2)*.25,this.mesh.rotation.y+=t*1.5),this._updateSparkles(t)}checkCollection(t,e=1.5){if(this.collected)return!1;const n=this.mesh.position.x-t.x,i=this.mesh.position.y-t.y,o=this.mesh.position.z-t.z;return Math.sqrt(n*n+i*i+o*o)<e?(this._collect(),!0):!1}_buildStrawberry(){const t=new Xt(.35,12,12),e=new it({color:15216688}),n=new D(t,e);this.mesh.add(n);const i=new Oe(.22,.25,6),o=new it({color:3058222}),a=new D(i,o);a.position.y=.38,this.mesh.add(a)}_buildBlueberry(){const t=new Xt(.28,12,12),e=new it({color:4482781}),n=new D(t,e);this.mesh.add(n);const i=new Ut(.03,.03,.18,4),o=new it({color:3058222}),a=new D(i,o);a.position.y=.32,this.mesh.add(a)}_collect(){this.collected=!0;const t=this.mesh.position.clone();this.scene.remove(this.mesh);const e=8;for(let n=0;n<e;n++){const i=new Xt(.08,6,6),o=new Et({color:this.type==="strawberry"?16763972:8956671,transparent:!0,opacity:1}),a=new D(i,o);a.userData.noCameraCollision=!0,a.position.copy(t),this.scene.add(a);const r=Math.PI*2*n/e,l=1.5+Math.random();this.sparkles.push({mesh:a,velocity:new A(Math.cos(r)*l,1.5+Math.random()*1.5,Math.sin(r)*l),life:.5})}}_updateSparkles(t){for(let e=this.sparkles.length-1;e>=0;e--){const n=this.sparkles[e];if(n.life-=t,n.life<=0){this.scene.remove(n.mesh),n.mesh.geometry.dispose(),n.mesh.material.dispose(),this.sparkles.splice(e,1);continue}n.mesh.position.addScaledVector(n.velocity,t),n.velocity.y-=4*t;const i=n.life/.5;n.mesh.material.opacity=i,n.mesh.scale.setScalar(i)}}dispose(){this.scene.remove(this.mesh),nu(this.mesh);for(const t of this.sparkles)this.scene.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose();this.sparkles.length=0}}const Yx={armor:13162728,sword:16766720,fireball:16737826,shredder:16729190};class Kx{constructor(t,e){_(this,"opened",!1);_(this,"powerUp");_(this,"hidden");_(this,"mesh");_(this,"position");_(this,"scene");_(this,"lidPivot");_(this,"beaconGroup",null);_(this,"orbMesh");_(this,"orbMat");_(this,"sparkles",[]);_(this,"elapsed",Math.random()*Math.PI*2);_(this,"openAnimProgress",0);_(this,"orbTimer",0);_(this,"orbDuration",1.3);this.scene=t,this.powerUp=e.powerUp,this.hidden=!!e.hidden,this.position=new A(e.x,e.y,e.z),this.mesh=new Tt,this.mesh.position.copy(this.position);const n=this.hidden?4542024:8078105,i=this.hidden?7304036:16763938,o=this.hidden?3884094:9392160,a=new it({color:n,flatShading:!0}),r=new it({color:i,flatShading:!0}),l=new it({color:o,flatShading:!0}),c=new D(new dt(1.12,.56,.78),a);c.position.y=.28,this.mesh.add(c);const h=new dt(1.18,.08,.84),d=new D(h,r);d.position.y=.06,this.mesh.add(d);const p=new D(h,r);p.position.y=.53,this.mesh.add(p);const f=new dt(.1,.56,.82),g=new D(f,r);g.position.set(-.46,.28,0),this.mesh.add(g);const v=new D(f,r);if(v.position.set(.46,.28,0),this.mesh.add(v),this.hidden){const I=new it({color:3302958,flatShading:!0}),w=new D(new dt(.42,.14,.34),I);w.position.set(-.34,.12,.32),this.mesh.add(w);const R=new D(new dt(.36,.16,.3),I);R.position.set(.36,.48,-.26),this.mesh.add(R)}this.lidPivot=new Tt,this.lidPivot.position.set(0,.56,-.39);const x=new D(new dt(1.16,.24,.82),l);x.position.set(0,.12,.39),this.lidPivot.add(x);const m=new D(new Ut(.36,.36,1.12,8,1,!1,0,Math.PI),l);m.rotation.z=Math.PI/2,m.rotation.x=Math.PI/2,m.position.set(0,.23,.39),this.lidPivot.add(m);const E=new D(new dt(.1,.28,.85),r);E.position.set(-.46,.13,.39),this.lidPivot.add(E);const M=new D(new dt(.1,.28,.85),r);M.position.set(.46,.13,.39),this.lidPivot.add(M);const y=new D(new dt(.2,.22,.08),r);if(y.position.set(0,.02,.8),this.lidPivot.add(y),this.mesh.add(this.lidPivot),!this.hidden){this.beaconGroup=new Tt,this.beaconGroup.position.set(0,1.45,0);const I=new D(new hn(.24,0),new Et({color:16770133,transparent:!0,opacity:.92}));this.beaconGroup.add(I);const w=new D(new Xt(.44,10,10),new Et({color:16763938,transparent:!0,opacity:.25,depthWrite:!1}));this.beaconGroup.add(w),this.mesh.add(this.beaconGroup)}this.orbMat=new Et({color:Yx[this.powerUp]??16768324,transparent:!0,opacity:1}),this.orbMesh=new D(new hn(.28,1),this.orbMat),this.orbMesh.position.set(0,.55,0),this.orbMesh.visible=!1,this.mesh.add(this.orbMesh),eu(this.mesh),t.add(this.mesh)}update(t){if(this.elapsed+=t,!this.opened&&this.beaconGroup){this.beaconGroup.position.y=1.45+Math.sin(this.elapsed*2.8)*.18,this.beaconGroup.rotation.y+=t*1.8;const e=.92+Math.sin(this.elapsed*4.2)*.12;this.beaconGroup.scale.setScalar(e)}if(this.opened){if(this.openAnimProgress<1){this.openAnimProgress=Math.min(1,this.openAnimProgress+t*3);const e=1-Math.pow(1-this.openAnimProgress,3);this.lidPivot.rotation.x=-e*Math.PI*.58}if(this.orbMesh.visible){this.orbTimer+=t;const e=Math.min(1,this.orbTimer/this.orbDuration);this.orbMesh.position.y=.55+e*1.7,this.orbMesh.rotation.y+=t*4.5,this.orbMesh.scale.setScalar(1+e*.35),this.orbMat.opacity=e<.65?1:Math.max(0,1-(e-.65)/.35),e>=1&&(this.orbMesh.visible=!1)}}this._updateSparkles(t)}checkOpen(t,e=1.7){if(this.opened)return null;const n=t.x-this.mesh.position.x,i=(t.y-this.mesh.position.y)*.6,o=t.z-this.mesh.position.z;return Math.sqrt(n*n+i*i+o*o)<e?(this.opened=!0,this.beaconGroup&&(this.beaconGroup.visible=!1),this.orbMesh.visible=!0,this.orbTimer=0,this._spawnGoldenSparkles(),this.powerUp):null}_spawnGoldenSparkles(){const t=this.mesh.position.clone().add(new A(0,.75,0)),e=14;for(let n=0;n<e;n++){const i=new hn(.09,0),o=new Et({color:n%2===0?16768307:16774826,transparent:!0,opacity:1}),a=new D(i,o);a.userData.noCameraCollision=!0,a.position.copy(t),this.scene.add(a);const r=Math.PI*2*n/e+Math.random()*.3,l=1.8+Math.random()*1.8;this.sparkles.push({mesh:a,velocity:new A(Math.cos(r)*l,2.2+Math.random()*2.2,Math.sin(r)*l),life:.65})}}_updateSparkles(t){for(let e=this.sparkles.length-1;e>=0;e--){const n=this.sparkles[e];if(n.life-=t,n.life<=0){this.scene.remove(n.mesh),n.mesh.geometry.dispose(),n.mesh.material.dispose(),this.sparkles.splice(e,1);continue}n.mesh.position.addScaledVector(n.velocity,t),n.velocity.y-=5*t;const i=n.life/.65;n.mesh.material.opacity=i,n.mesh.scale.setScalar(i)}}dispose(){this.scene.remove(this.mesh),nu(this.mesh);for(const t of this.sparkles)this.scene.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose();this.sparkles.length=0}}function Cl(s){s.userData.noCameraCollision=!0,s.traverse(t=>{t.userData.noCameraCollision=!0})}function Al(s){s.traverse(t=>{const e=t;e.geometry&&e.geometry.dispose();const n=e.material;if(n){const i=Array.isArray(n)?n:[n];for(const o of i){const a=o;a.map&&a.map.dispose(),o.dispose()}}})}const oh={koopa:{shell:2537526,rim:16052176,belly:15650928,skin:7391320,shoe:2984510},spiked:{shell:7305349,rim:3488581,belly:12765394,skin:9347212,shoe:4541012,accent:14213356},desert:{shell:13935188,rim:10185512,belly:16178844,skin:12503402,shoe:10049570},lava:{shell:2364698,rim:14035480,belly:4858912,skin:12077104,shoe:2232336,accent:16730911},dungeon:{shell:7090096,rim:3351112,belly:11572940,skin:8027806,shoe:2891836},jungle:{shell:1483926,rim:14730616,belly:13168856,skin:6734968,shoe:1730654},storm:{shell:2054872,rim:16769572,belly:13165823,skin:7055072,shoe:1521546,accent:16770088}};function ah(s,t){let e=(t-s)%(Math.PI*2);return e>Math.PI&&(e-=Math.PI*2),e<-Math.PI&&(e+=Math.PI*2),e}class dr{constructor(t,e,n){_(this,"mesh");_(this,"isDead",!1);_(this,"position");_(this,"radius",.85);_(this,"variant");_(this,"scene");_(this,"getGroundY");_(this,"followTerrainY");_(this,"fixedY");_(this,"spawnPos");_(this,"patrolRadius");_(this,"patrolAngle",Math.random()*Math.PI*2);_(this,"patrolSpeed");_(this,"chaseSpeed");_(this,"yaw",0);_(this,"leftLegPivot");_(this,"rightLegPivot");_(this,"bodyGroup");_(this,"headGroup");_(this,"health",1);_(this,"hurtCooldown",0);_(this,"clangTimer",0);_(this,"walkAnimTime",Math.random()*Math.PI*2);_(this,"particles",[]);if(this.scene=t,this.variant=e.variant,this.getGroundY=n,this.spawnPos=new A(e.x,e.y,e.z),this.patrolRadius=e.patrolRadius??5,this.fixedY=e.y,n){const i=n(e.x,e.z);this.followTerrainY=Math.abs(e.y-i)<=.75}else this.followTerrainY=!1;this.patrolSpeed=e.variant==="storm"?2.6:e.variant==="lava"?2.3:2,this.chaseSpeed=e.variant==="storm"?4.4:e.variant==="lava"||e.variant==="spiked"?3.8:3.4,this.mesh=new Tt,this.mesh.position.set(e.x,e.y,e.z),this.position=new A(e.x,e.y+.55,e.z),this._buildModel(e.variant),Cl(this.mesh),t.add(this.mesh)}_buildModel(t){const e=oh[t],n=new it({color:e.shell,flatShading:!0}),i=new it({color:e.rim,flatShading:!0}),o=new it({color:e.belly,flatShading:!0}),a=new it({color:e.skin,flatShading:!0}),r=new it({color:e.shoe,flatShading:!0}),l=new Et({color:16777215}),c=new Et({color:1118481});this.bodyGroup=new Tt,this.mesh.add(this.bodyGroup);const h=new D(new Xt(.54,8,6),n);h.scale.set(.95,.78,1.1),h.position.set(0,.62,-.05),this.bodyGroup.add(h);const d=new D(new an(.5,.08,6,10),i);d.rotation.x=Math.PI/2-.15,d.scale.set(.96,1.08,1),d.position.set(0,.45,-.03),this.bodyGroup.add(d);const p=new D(new Ut(.4,.44,.16,8),o);if(p.position.set(0,.38,.02),this.bodyGroup.add(p),t==="spiked"){const M=new it({color:e.accent??14213356,flatShading:!0}),y=[[0,1.08,-.05,0,0],[-.3,.92,.14,.45,.45],[.3,.92,.14,.45,-.45],[-.34,.88,-.22,-.4,.5],[.34,.88,-.22,-.4,-.5],[0,.86,-.45,-.65,0]];for(const[I,w,R,L,C]of y){const b=new D(new Oe(.11,.34,5),M);b.position.set(I,w,R),b.rotation.set(L,0,C),this.bodyGroup.add(b)}}if(t==="lava"||t==="storm"){const M=new Et({color:e.accent??16768290});for(let y=0;y<3;y++){const I=new D(new hn(.12,0),M);I.position.set(0,1-y*.08,.14-y*.24),this.bodyGroup.add(I)}}this.headGroup=new Tt,this.headGroup.position.set(0,.68,.46);const f=new D(new Ut(.12,.15,.22,6),a);f.rotation.x=Math.PI*.28,f.position.set(0,-.05,-.06),this.headGroup.add(f);const g=new D(new Xt(.22,8,6),a);g.position.set(0,.08,.06),this.headGroup.add(g);const v=new D(new dt(.24,.14,.18),a);v.position.set(0,.02,.22),this.headGroup.add(v);const x=new Xt(.065,6,6),m=new Xt(.032,5,5);for(const M of[-1,1]){const y=new D(x,l);y.position.set(M*.095,.14,.22),this.headGroup.add(y);const I=new D(m,c);I.position.set(M*.1,.14,.27),this.headGroup.add(I);const w=new D(new dt(.11,.035,.05),n);w.position.set(M*.095,.21,.24),w.rotation.z=M*-.28,this.headGroup.add(w)}this.bodyGroup.add(this.headGroup);for(const M of[-1,1]){const y=new D(new Ut(.065,.055,.28,6),a);y.position.set(M*.46,.42,.18),y.rotation.z=M*.55,y.rotation.x=.35,this.bodyGroup.add(y)}const E=M=>{const y=new Tt;y.position.set(M,.3,0);const I=new D(new Ut(.08,.075,.22,6),a);I.position.y=-.11,y.add(I);const w=new D(new dt(.18,.12,.28),r);return w.position.set(0,-.24,.05),y.add(w),y};this.leftLegPivot=E(-.22),this.rightLegPivot=E(.22),this.mesh.add(this.leftLegPivot),this.mesh.add(this.rightLegPivot)}update(t,e){if(this._updateParticles(t),this.isDead)return;this.hurtCooldown>0&&(this.hurtCooldown=Math.max(0,this.hurtCooldown-t)),this.clangTimer>0?(this.clangTimer=Math.max(0,this.clangTimer-t),this.bodyGroup.position.x=Math.sin(this.clangTimer*50)*.08):this.bodyGroup.position.x=0;const n=e.x-this.mesh.position.x,i=e.z-this.mesh.position.z,o=Math.hypot(n,i),a=Math.abs(e.y-this.mesh.position.y);let r=0,l=0;if(o<10&&o>.25&&a<6){const d=n/o,p=i/o;r=d*this.chaseSpeed,l=p*this.chaseSpeed;const f=this.followTerrainY?Math.max(this.patrolRadius*2.5,14):Math.max(this.patrolRadius,1.5),g=this.mesh.position.x+r*t,v=this.mesh.position.z+l*t,x=Math.hypot(g-this.spawnPos.x,v-this.spawnPos.z);if(x<=f)this.mesh.position.x=g,this.mesh.position.z=v;else{const E=g-this.spawnPos.x,M=v-this.spawnPos.z;x>.001&&(this.mesh.position.x=this.spawnPos.x+E/x*f,this.mesh.position.z=this.spawnPos.z+M/x*f)}const m=Math.atan2(d,p);this.yaw+=ah(this.yaw,m)*Math.min(1,t*10)}else if(this.patrolRadius>.25){const d=this.patrolSpeed/Math.max(this.patrolRadius,1.5);this.patrolAngle+=d*t;const p=this.spawnPos.x+Math.cos(this.patrolAngle)*this.patrolRadius*.75,f=this.spawnPos.z+Math.sin(this.patrolAngle)*this.patrolRadius*.75,g=p-this.mesh.position.x,v=f-this.mesh.position.z,x=Math.hypot(g,v);if(x>.01){const m=Math.min(this.patrolSpeed,x/Math.max(t,.001));r=g/x*m,l=v/x*m,this.mesh.position.x+=r*t,this.mesh.position.z+=l*t;const E=Math.atan2(r,l);this.yaw+=ah(this.yaw,E)*Math.min(1,t*8)}}this.followTerrainY&&this.getGroundY?this.mesh.position.y=this.getGroundY(this.mesh.position.x,this.mesh.position.z):this.mesh.position.y=this.fixedY,this.mesh.rotation.y=this.yaw,this.position.set(this.mesh.position.x,this.mesh.position.y+.55,this.mesh.position.z);const c=Math.hypot(r,l);this.walkAnimTime+=t*(4+c*2.2);const h=c>.2?Math.sin(this.walkAnimTime)*.55:0;this.leftLegPivot.rotation.x=h,this.rightLegPivot.rotation.x=-h,this.bodyGroup.rotation.z=c>.2?Math.sin(this.walkAnimTime)*.08:0,this.headGroup.rotation.y=Math.sin(this.walkAnimTime*.5)*.12}checkPlayerContact(t,e,n){if(this.isDead||this.hurtCooldown>0)return"none";const i=t.x-this.mesh.position.x,o=t.z-this.mesh.position.z;if(Math.hypot(i,o)>1.08)return"none";const r=t.y-this.mesh.position.y;return r>1.35||r<-1.1?"none":n||e<-.5&&r>=.35?this.variant==="spiked"&&!n?(this.hurtCooldown=.6,"hurt_player"):(this.takeDamage(1,n,!1),"stomped"):(this.hurtCooldown=.6,"hurt_player")}takeDamage(t,e=!1,n){return this.isDead?!1:this.variant==="spiked"&&!e&&n===!1?(this.clangTimer=.25,!1):(this.health-=Math.max(1,t),this.health<=0&&(this.isDead=!0,this.scene.remove(this.mesh),this._spawnDefeatPoof()),!0)}_spawnDefeatPoof(){const t=oh[this.variant],e=this.mesh.position.clone().add(new A(0,.55,0)),n=12;for(let i=0;i<n;i++){const o=new Xt(.14+Math.random()*.08,6,6),a=new Et({color:i%2===0?16777215:t.shell,transparent:!0,opacity:.95}),r=new D(o,a);r.userData.noCameraCollision=!0,r.position.copy(e),this.scene.add(r);const l=Math.PI*2*i/n+Math.random()*.4,c=2+Math.random()*2.2;this.particles.push({mesh:r,velocity:new A(Math.cos(l)*c,1.8+Math.random()*2.4,Math.sin(l)*c),life:.55,maxLife:.55})}}_updateParticles(t){for(let e=this.particles.length-1;e>=0;e--){const n=this.particles[e];if(n.life-=t,n.life<=0){this.scene.remove(n.mesh),n.mesh.geometry.dispose(),n.mesh.material.dispose(),this.particles.splice(e,1);continue}n.mesh.position.addScaledVector(n.velocity,t),n.velocity.y-=5*t;const i=n.life/n.maxLife;n.mesh.material.opacity=i,n.mesh.scale.setScalar(.5+(1-i)*.8)}}dispose(){this.scene.remove(this.mesh),Al(this.mesh);for(const t of this.particles)this.scene.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose();this.particles.length=0}}class qx{constructor(t,e){_(this,"activated",!1);_(this,"position");_(this,"mesh");_(this,"scene");_(this,"poleGroup");_(this,"flagMat");_(this,"flagGeo");_(this,"flagBasePositions");_(this,"finialMat");_(this,"elapsed",Math.random()*Math.PI*2);_(this,"spinTimer",0);_(this,"particles",[]);this.scene=t,this.position=new A(e.x,e.y,e.z),this.mesh=new Tt,this.mesh.position.copy(this.position);const n=new it({color:8027782,flatShading:!0}),i=new D(new Ut(.45,.58,.24,8),n);i.position.y=.12,this.mesh.add(i),this.poleGroup=new Tt,this.mesh.add(this.poleGroup);const o=new it({color:14212838,flatShading:!0}),a=new D(new Ut(.055,.065,3.2,8),o);a.position.y=1.68,this.poleGroup.add(a),this.finialMat=new Et({color:16729156});const r=new D(new Xt(.15,8,8),this.finialMat);r.position.y=3.35,this.poleGroup.add(r),this.flagGeo=new js(1.15,.68,7,2),this.flagGeo.translate(.575,0,0);const l=this.flagGeo.getAttribute("position");this.flagBasePositions=new Float32Array(l.array.length),this.flagBasePositions.set(l.array),this.flagMat=new it({color:15085102,side:cn,flatShading:!0});const c=new D(this.flagGeo,this.flagMat);c.position.set(.04,2.82,0),this.poleGroup.add(c),Cl(this.mesh),t.add(this.mesh)}update(t){this.elapsed+=t;const e=this.flagGeo.getAttribute("position"),n=this.activated?8.5:5,i=this.activated?.18:.12;for(let o=0;o<e.count;o++){const a=this.flagBasePositions[o*3],r=this.flagBasePositions[o*3+1],l=Math.max(0,a/1.15),c=Math.sin(this.elapsed*n-a*4.2+r*1.5)*i*l;e.setZ(o,c)}e.needsUpdate=!0,this.spinTimer>0&&(this.spinTimer=Math.max(0,this.spinTimer-t),this.poleGroup.rotation.y+=t*14),this._updateParticles(t)}checkActivate(t,e=1.85){if(this.activated)return!1;const n=t.x-this.position.x,i=t.z-this.position.z,o=Math.hypot(n,i),a=Math.abs(t.y-this.position.y);return o<e&&a<3?(this.activated=!0,this.flagMat.color.setHex(2682442),this.finialMat.color.setHex(6750071),this.spinTimer=1,this._spawnActivationSparkles(),!0):!1}_spawnActivationSparkles(){const t=this.position.clone().add(new A(0,2,0)),e=14;for(let n=0;n<e;n++){const i=new hn(.09,0),o=new Et({color:n%2===0?3407718:16772676,transparent:!0,opacity:1}),a=new D(i,o);a.userData.noCameraCollision=!0,a.position.copy(t),this.scene.add(a);const r=Math.PI*2*n/e,l=2+Math.random()*1.6;this.particles.push({mesh:a,velocity:new A(Math.cos(r)*l,1.4+Math.random()*2,Math.sin(r)*l),life:.7,maxLife:.7})}}_updateParticles(t){for(let e=this.particles.length-1;e>=0;e--){const n=this.particles[e];if(n.life-=t,n.life<=0){this.scene.remove(n.mesh),n.mesh.geometry.dispose(),n.mesh.material.dispose(),this.particles.splice(e,1);continue}n.mesh.position.addScaledVector(n.velocity,t),n.velocity.y-=3.8*t;const i=n.life/n.maxLife;n.mesh.material.opacity=i,n.mesh.scale.setScalar(i)}}dispose(){this.scene.remove(this.mesh),Al(this.mesh);for(const t of this.particles)this.scene.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose();this.particles.length=0}}class pr{constructor(t,e,n,i=16763938,o){_(this,"mesh");_(this,"position");_(this,"isLocked");_(this,"label");_(this,"lockedText");_(this,"scene");_(this,"baseColor");_(this,"outerRingMat");_(this,"innerRing");_(this,"innerRingMat");_(this,"starCore");_(this,"starCoreMat");_(this,"vortexMesh");_(this,"vortexMat");_(this,"labelSprite");_(this,"labelTexture");_(this,"labelCanvas");_(this,"elapsed",Math.random()*Math.PI*2);this.scene=t,this.position=e.clone(),this.label=n,this.baseColor=i,this.lockedText=o??"",this.isLocked=!!(o&&o.length>0),this.mesh=new Tt,this.mesh.position.copy(this.position);const a=new it({color:6120562,flatShading:!0}),r=new D(new Ut(1.55,1.85,.26,12),a);r.position.y=.13,this.mesh.add(r),this.outerRingMat=new it({color:i,flatShading:!0});const l=new D(new an(1.48,.17,8,22),this.outerRingMat);l.position.y=1.75,this.mesh.add(l),this.innerRingMat=new Et({color:i}),this.innerRing=new D(new an(1.08,.08,6,6),this.innerRingMat),this.innerRing.position.y=1.75,this.mesh.add(this.innerRing),this.starCoreMat=new Et({color:16772710}),this.starCore=new D(new hn(.32,0),this.starCoreMat),this.starCore.position.y=1.75,this.mesh.add(this.starCore),this.vortexMat=new Et({color:i,transparent:!0,opacity:.38,side:cn,depthWrite:!1}),this.vortexMesh=new D(new Sa(1.32,20),this.vortexMat),this.vortexMesh.position.y=1.75,this.mesh.add(this.vortexMesh),this.labelCanvas=document.createElement("canvas"),this.labelCanvas.width=512,this.labelCanvas.height=160,this.labelTexture=new wl(this.labelCanvas),this.labelTexture.minFilter=ti;const c=new bl({map:this.labelTexture,transparent:!0,depthWrite:!1});this.labelSprite=new jh(c),this.labelSprite.position.set(0,3.85,0),this.labelSprite.scale.set(4.5,1.4,1),this.mesh.add(this.labelSprite),this._applyLockVisuals(),Cl(this.mesh),t.add(this.mesh)}setLocked(t,e){this.isLocked=t,e!==void 0&&(this.lockedText=e),this._applyLockVisuals()}_applyLockVisuals(){this.isLocked?(this.outerRingMat.color.setHex(5922410),this.innerRingMat.color.setHex(8926003),this.starCoreMat.color.setHex(10044484),this.vortexMat.color.setHex(2500659),this.vortexMat.opacity=.55):(this.outerRingMat.color.setHex(this.baseColor),this.innerRingMat.color.setHex(16777215),this.starCoreMat.color.setHex(16772710),this.vortexMat.color.setHex(this.baseColor),this.vortexMat.opacity=.4),this._redrawLabel()}_redrawLabel(){const t=this.labelCanvas.getContext("2d");if(!t)return;const e=this.labelCanvas.width,n=this.labelCanvas.height;t.clearRect(0,0,e,n),t.fillStyle=this.isLocked?"rgba(28, 16, 22, 0.85)":"rgba(14, 22, 42, 0.82)",t.strokeStyle=this.isLocked?"#ff5555":`#${new jt(this.baseColor).getHexString()}`,t.lineWidth=6;const i=10,o=24;t.beginPath(),t.moveTo(i+o,i),t.lineTo(e-i-o,i),t.quadraticCurveTo(e-i,i,e-i,i+o),t.lineTo(e-i,n-i-o),t.quadraticCurveTo(e-i,n-i,e-i-o,n-i),t.lineTo(i+o,n-i),t.quadraticCurveTo(i,n-i,i,n-i-o),t.lineTo(i,i+o),t.quadraticCurveTo(i,i,i+o,i),t.closePath(),t.fill(),t.stroke(),t.textAlign="center",t.textBaseline="middle",this.isLocked?(t.font='bold 34px "Trebuchet MS", sans-serif',t.fillStyle="#ffffff",t.fillText(this.label,e/2,n*.36,e-44),t.font='bold 26px "Trebuchet MS", sans-serif',t.fillStyle="#ff7766",t.fillText(`LOCKED: ${this.lockedText||"Locked"}`,e/2,n*.72,e-44)):(t.font='bold 40px "Trebuchet MS", sans-serif',t.fillStyle="#ffee66",t.fillText(this.label,e/2,n*.5,e-44)),this.labelTexture.needsUpdate=!0}update(t){this.elapsed+=t,this.isLocked?(this.innerRing.rotation.z+=t*.25,this.starCore.rotation.y+=t*.5,this.starCore.position.y=1.75):(this.innerRing.rotation.z+=t*1.4,this.starCore.rotation.y+=t*2.4,this.starCore.rotation.x=Math.sin(this.elapsed*2)*.3,this.starCore.position.y=1.75+Math.sin(this.elapsed*2.6)*.16,this.vortexMat.opacity=.32+Math.sin(this.elapsed*4)*.1),this.labelSprite.position.y=3.85+Math.sin(this.elapsed*2)*.1}isPlayerNear(t,e=2){const n=t.x-this.position.x,i=t.z-this.position.z,o=Math.hypot(n,i),a=t.y-this.position.y;return o<e&&a>-1&&a<3.2}checkEnter(t,e=2){return this.isLocked?!1:this.isPlayerNear(t,e)}dispose(){this.scene.remove(this.mesh),Al(this.mesh)}}function Rl(s){s.userData.noCameraCollision=!0,s.traverse(t=>{t.userData.noCameraCollision=!0})}function _a(s){s.traverse(t=>{const e=t;e.geometry&&e.geometry.dispose();const n=e.material;if(n){const i=Array.isArray(n)?n:[n];for(const o of i){const a=o;a.map&&a.map.dispose(),o.dispose()}}})}function jx(s,t){let e=(t-s)%(Math.PI*2);return e>Math.PI&&(e-=Math.PI*2),e<-Math.PI&&(e+=Math.PI*2),e}function iu(s=1.15,t=2.1){const e=new Tt,n=[],i=new it({color:2503236,flatShading:!0}),o=new Et({color:4517631,transparent:!0,opacity:.9}),a=new D(new an(s,.07,6,12),i);a.rotation.x=Math.PI/2,a.position.y=.06,e.add(a);const r=new D(new an(s*.96,.07,6,12),i);r.rotation.x=Math.PI/2,r.position.y=t,e.add(r);const l=new D(new Oe(s*.98,.35,8),new it({color:3359834,flatShading:!0}));l.position.y=t+.18,e.add(l);const c=8,h=new Ut(.035,.035,t-.08,6);for(let f=0;f<c;f++){const g=f/c*Math.PI*2,v=new D(h,o.clone());v.position.set(Math.cos(g)*s,t/2+.04,Math.sin(g)*s),e.add(v),n.push(v)}const d=new Et({color:16772659,transparent:!0,opacity:.16,side:cn,depthWrite:!1}),p=new D(new Ut(s*.95,s*.95,t-.1,10,1,!0),d);return p.position.y=t/2+.04,e.add(p),Rl(e),{cage:e,bars:n,barrierMat:d}}const rh=[15218744,16746530,16763938,3725464,14177768];class lh{constructor(t,e,n){_(this,"def");_(this,"rescued");_(this,"mesh");_(this,"cageMesh",null);_(this,"position");_(this,"scene");_(this,"koopaGroup");_(this,"leftArm");_(this,"rightArm");_(this,"cageBars",[]);_(this,"cageBarrierMat",null);_(this,"particles",[]);_(this,"elapsed",Math.random()*Math.PI*2);_(this,"hopTimer",0);_(this,"yaw",0);if(this.scene=t,this.def=e,this.rescued=n,this.position=new A(e.x,e.y,e.z),this.mesh=new Tt,this.mesh.position.copy(this.position),this.koopaGroup=new Tt,this._buildFriendlyKoopa(e.id),this.mesh.add(this.koopaGroup),!n){const i=iu(1.15,2.05);this.cageMesh=i.cage,this.cageBars=i.bars,this.cageBarrierMat=i.barrierMat,this.mesh.add(this.cageMesh)}Rl(this.mesh),t.add(this.mesh)}_buildFriendlyKoopa(t){const e=new it({color:2786034,flatShading:!0}),n=new it({color:16052440,flatShading:!0}),i=new it({color:16179868,flatShading:!0}),o=new it({color:8115304,flatShading:!0}),a=new it({color:3892920,flatShading:!0}),r=rh[t%rh.length],l=new it({color:r,flatShading:!0}),c=new Et({color:16777215}),h=new Et({color:1118481}),d=new D(new Xt(.5,8,6),e);d.scale.set(.95,.8,1.05),d.position.set(0,.62,-.06),this.koopaGroup.add(d);const p=new D(new an(.47,.075,6,10),n);p.rotation.x=Math.PI/2-.12,p.position.set(0,.46,-.04),this.koopaGroup.add(p);const f=new D(new Ut(.38,.42,.16,8),i);f.position.set(0,.39,.02),this.koopaGroup.add(f);const g=new D(new Xt(.23,8,6),o);g.position.set(0,.86,.36),this.koopaGroup.add(g);const v=new D(new dt(.24,.13,.16),o);v.position.set(0,.8,.54),this.koopaGroup.add(v);for(const y of[-1,1]){const I=new D(new Xt(.065,6,6),c);I.position.set(y*.095,.92,.53),this.koopaGroup.add(I);const w=new D(new Xt(.032,5,5),h);w.position.set(y*.1,.92,.585),this.koopaGroup.add(w)}const x=new D(new an(.22,.065,6,10),l);x.rotation.x=Math.PI/2,x.position.set(0,.68,.25),this.koopaGroup.add(x);const m=new D(new dt(.11,.26,.06),l);m.position.set(-.14,.6,.02),m.rotation.set(.5,.2,.3),this.koopaGroup.add(m);const E=new D(new dt(.1,.22,.06),l);E.position.set(.06,.62,-.02),E.rotation.set(.6,-.15,-.2),this.koopaGroup.add(E);const M=new Ut(.065,.055,.3,6);this.leftArm=new D(M,o),this.leftArm.position.set(-.44,.56,.18),this.leftArm.rotation.z=.7,this.koopaGroup.add(this.leftArm),this.rightArm=new D(M,o),this.rightArm.position.set(.44,.56,.18),this.rightArm.rotation.z=-.7,this.koopaGroup.add(this.rightArm);for(const y of[-1,1]){const I=new D(new Ut(.08,.075,.24,6),o);I.position.set(y*.21,.18,0),this.koopaGroup.add(I);const w=new D(new dt(.18,.11,.26),a);w.position.set(y*.21,.055,.05),this.koopaGroup.add(w)}}update(t,e){if(this.elapsed+=t,this._updateParticles(t),!this.rescued&&this.cageMesh){for(let n=0;n<this.cageBars.length;n++){const i=this.cageBars[n],o=.55+Math.abs(Math.sin(this.elapsed*18+n*1.7))*.45,a=i.material;a.opacity=o,a.color.setHex(Math.sin(this.elapsed*24+n)>0?4517631:16772659)}this.cageBarrierMat&&(this.cageBarrierMat.opacity=.1+Math.abs(Math.sin(this.elapsed*12))*.12),this.koopaGroup.position.x=Math.sin(this.elapsed*22)*.025,this.koopaGroup.position.y=0}else{if(this.koopaGroup.position.x=0,this.hopTimer>0){this.hopTimer=Math.max(0,this.hopTimer-t);const n=1-this.hopTimer/.8;this.koopaGroup.position.y=Math.abs(Math.sin(n*Math.PI*2))*.55}else this.koopaGroup.position.y=Math.abs(Math.sin(this.elapsed*3))*.08;if(this.leftArm.rotation.z=.8+Math.sin(this.elapsed*5)*.35,this.rightArm.rotation.z=-.8-Math.sin(this.elapsed*5+.5)*.35,e){const n=e.x-this.position.x,i=e.z-this.position.z;if(n*n+i*i<144){const o=Math.atan2(n,i);this.yaw+=jx(this.yaw,o)*Math.min(1,t*6),this.koopaGroup.rotation.y=this.yaw}}}}isNear(t,e=2.8){const n=t.x-this.position.x,i=t.z-this.position.z,o=Math.hypot(n,i),a=Math.abs(t.y-this.position.y);return o<=e&&a<3}checkRescue(t,e=2.8){return this.rescued?null:this.isNear(t,e)?(this.rescued=!0,this.hopTimer=.8,this.cageMesh&&(this.mesh.remove(this.cageMesh),_a(this.cageMesh),this.cageMesh=null,this.cageBars=[],this.cageBarrierMat=null),this._spawnShatterSparkles(this.position),this.def):null}_spawnShatterSparkles(t){const e=t.clone().add(new A(0,1,0)),n=20;for(let i=0;i<n;i++){const o=new hn(.1,0),a=new Et({color:i%3===0?16772659:i%3===1?4517631:16777215,transparent:!0,opacity:1}),r=new D(o,a);r.userData.noCameraCollision=!0,r.position.copy(e),this.scene.add(r);const l=Math.PI*2*i/n+Math.random()*.25,c=2.4+Math.random()*2.6;this.particles.push({mesh:r,velocity:new A(Math.cos(l)*c,2+Math.random()*3,Math.sin(l)*c),life:.75,maxLife:.75})}}_updateParticles(t){for(let e=this.particles.length-1;e>=0;e--){const n=this.particles[e];if(n.life-=t,n.life<=0){this.scene.remove(n.mesh),n.mesh.geometry.dispose(),n.mesh.material.dispose(),this.particles.splice(e,1);continue}n.mesh.position.addScaledVector(n.velocity,t),n.velocity.y-=5.5*t;const i=n.life/n.maxLife;n.mesh.material.opacity=i,n.mesh.scale.setScalar(i)}}dispose(){this.scene.remove(this.mesh),_a(this.mesh);for(const t of this.particles)this.scene.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose();this.particles.length=0}}class Jx{constructor(t,e=new A(0,0,-14)){_(this,"mesh");_(this,"cagesShattered",!1);_(this,"cageMeshes",[]);_(this,"scene");_(this,"friends",[]);_(this,"particles",[]);_(this,"elapsed",0);this.scene=t,this.mesh=new Tt,this.mesh.position.copy(e);const n=[{name:"Pete",xOffset:-4.8,zOffset:1,shirtColor:3368652,pantsColor:2241365,accentColor:16742932,kind:"pete"},{name:"Jib Jib",xOffset:-1.6,zOffset:-.4,shirtColor:7812027,pantsColor:2901026,accentColor:3398980,kind:"jibjib"},{name:"Susie",xOffset:1.6,zOffset:-.4,shirtColor:15623850,pantsColor:5583735,accentColor:16729241,kind:"susie"},{name:"Snow",xOffset:4.8,zOffset:1,shirtColor:4504552,pantsColor:2245734,accentColor:15661823,kind:"snow"}];for(const i of n){const o=new Tt;o.position.set(i.xOffset,0,i.zOffset),this.mesh.add(o);const a=this._buildFriendCharacter(i);o.add(a.charGroup);const r=iu(1.05,2);o.add(r.cage),this.cageMeshes.push(r.cage);const l=this._createNameSprite(i.name,i.accentColor);l.position.set(0,2.55,0),o.add(l),this.friends.push({name:i.name,root:o,charGroup:a.charGroup,leftArm:a.leftArm,rightArm:a.rightArm,cageBars:r.bars,barrierMat:r.barrierMat,worldPos:new A(e.x+i.xOffset,e.y,e.z+i.zOffset)})}Rl(this.mesh),t.add(this.mesh)}_buildFriendCharacter(t){const e=new Tt,n=new it({color:16765864,flatShading:!0}),i=new it({color:t.shirtColor,flatShading:!0}),o=new it({color:t.pantsColor,flatShading:!0}),a=new it({color:2236962,flatShading:!0}),r=new it({color:t.accentColor,flatShading:!0}),l=new Et({color:1118481});for(const g of[-1,1]){const v=new D(new Ut(.06,.055,.34,6),o);v.position.set(g*.09,.22,0),e.add(v);const x=new D(new dt(.11,.06,.17),a);x.position.set(g*.09,.03,.03),e.add(x)}const c=new D(new dt(.34,.38,.22),i);c.position.y=.56,e.add(c);const h=new Ut(.048,.042,.3,6),d=new D(h,n);d.position.set(-.24,.6,0),d.rotation.z=.35,e.add(d);const p=new D(h,n);p.position.set(.24,.6,0),p.rotation.z=-.35,e.add(p);const f=new D(new Xt(.19,10,8),n);f.position.y=.94,e.add(f);for(const g of[-1,1]){const v=new D(new Xt(.03,6,6),l);v.position.set(g*.06,.96,.165),e.add(v)}if(t.kind==="pete"){const g=new D(new Ut(.17,.2,.14,10),r);g.position.y=1.11,e.add(g);const v=new D(new dt(.24,.04,.16),r);v.position.set(0,1.05,.16),e.add(v)}else if(t.kind==="jibjib"){const g=new D(new Ut(.24,.24,.05,10),r);g.position.y=1.08,e.add(g);const v=new D(new Oe(.17,.48,8),r);v.position.set(.04,1.3,-.02),v.rotation.z=-.28,e.add(v);const x=new D(new Xt(.075,6,6),new Et({color:16769587}));x.position.set(.12,1.54,-.02),e.add(x)}else if(t.kind==="susie"){const g=new D(new Xt(.2,8,8,0,Math.PI*2,0,Math.PI*.55),new it({color:7027230,flatShading:!0}));g.position.y=.97,e.add(g);const v=new D(new Xt(.06,6,6),r);v.position.set(0,1.18,.04),e.add(v);const x=new D(new Oe(.1,.18,5),r);x.position.set(-.11,1.2,.04),x.rotation.z=Math.PI/2-.25,e.add(x);const m=new D(new Oe(.1,.18,5),r);m.position.set(.11,1.2,.04),m.rotation.z=-Math.PI/2+.25,e.add(m)}else{const g=new D(new Xt(.25,10,8),r);g.position.set(0,.96,-.03),e.add(g);const v=new D(new an(.2,.055,6,12),new it({color:8974079,flatShading:!0}));v.position.set(0,.95,.12),e.add(v)}return{charGroup:e,leftArm:d,rightArm:p}}_createNameSprite(t,e){const n=document.createElement("canvas");n.width=256,n.height=72;const i=n.getContext("2d");i&&(i.fillStyle="rgba(12, 16, 30, 0.78)",i.strokeStyle=`#${new jt(e).getHexString()}`,i.lineWidth=4,i.fillRect(8,8,240,56),i.strokeRect(8,8,240,56),i.font='bold 30px "Trebuchet MS", sans-serif',i.textAlign="center",i.textBaseline="middle",i.fillStyle="#ffffff",i.fillText(t,128,36));const o=new wl(n),a=new jh(new bl({map:o,transparent:!0,depthWrite:!1}));return a.scale.set(1.9,.54,1),a}shatterCages(){if(!this.cagesShattered){this.cagesShattered=!0;for(let t=0;t<this.cageMeshes.length;t++){const e=this.cageMeshes[t];e.parent&&e.parent.remove(e),_a(e)}this.cageMeshes.length=0;for(const t of this.friends)t.cageBars=[],this._spawnShatterBurst(t.worldPos)}}update(t){this.elapsed+=t,this._updateParticles(t);for(let e=0;e<this.friends.length;e++){const n=this.friends[e];if(this.cagesShattered)n.charGroup.position.x=0,n.charGroup.position.y=Math.abs(Math.sin(this.elapsed*5.2+e*.9))*.45,n.leftArm.rotation.z=2.4+Math.sin(this.elapsed*9+e)*.35,n.rightArm.rotation.z=-2.4-Math.sin(this.elapsed*9+e)*.35;else{for(let i=0;i<n.cageBars.length;i++){const a=n.cageBars[i].material;a.opacity=.55+Math.abs(Math.sin(this.elapsed*18+i+e))*.45,a.color.setHex(Math.sin(this.elapsed*22+i+e)>0?4517631:16772659)}n.barrierMat.opacity=.1+Math.abs(Math.sin(this.elapsed*10+e))*.12,n.charGroup.position.x=Math.sin(this.elapsed*20+e*2)*.02,n.charGroup.position.y=0}}}_spawnShatterBurst(t){const e=t.clone().add(new A(0,1,0)),n=16;for(let i=0;i<n;i++){const o=new hn(.11,0),a=new Et({color:i%2===0?16772659:4517631,transparent:!0,opacity:1}),r=new D(o,a);r.userData.noCameraCollision=!0,r.position.copy(e),this.scene.add(r);const l=Math.PI*2*i/n+Math.random()*.3,c=2.6+Math.random()*2.8;this.particles.push({mesh:r,velocity:new A(Math.cos(l)*c,2.2+Math.random()*3.2,Math.sin(l)*c),life:.85,maxLife:.85})}}_updateParticles(t){for(let e=this.particles.length-1;e>=0;e--){const n=this.particles[e];if(n.life-=t,n.life<=0){this.scene.remove(n.mesh),n.mesh.geometry.dispose(),n.mesh.material.dispose(),this.particles.splice(e,1);continue}n.mesh.position.addScaledVector(n.velocity,t),n.velocity.y-=5.5*t;const i=n.life/n.maxLife;n.mesh.material.opacity=i,n.mesh.scale.setScalar(i)}}dispose(){this.scene.remove(this.mesh),_a(this.mesh);for(const t of this.particles)this.scene.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose();this.particles.length=0}}function su(s){s.userData.noCameraCollision=!0,s.traverse(t=>{t.userData.noCameraCollision=!0})}function ou(s){s.traverse(t=>{const e=t;e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(n=>n.dispose()):e.material.dispose())})}function $x(s,t){let e=(t-s)%(Math.PI*2);return e>Math.PI&&(e-=Math.PI*2),e<-Math.PI&&(e+=Math.PI*2),e}class Zx{constructor(t,e,n,i,o=0){_(this,"mesh");_(this,"position");_(this,"alive",!0);_(this,"scene");_(this,"velocity");_(this,"speed");_(this,"homingStrength");_(this,"life",4.5);this.scene=t,this.position=e.clone(),this.speed=i,this.homingStrength=o,this.velocity=n.clone().normalize().multiplyScalar(i),this.mesh=new Tt,this.mesh.position.copy(this.position);const a=new it({color:16765482,flatShading:!0}),r=new D(new dt(.18,.72,.18),a);this.mesh.add(r);const l=new Et({color:16737826,transparent:!0,opacity:.55}),c=new D(new Xt(.32,6,6),l);this.mesh.add(c),su(this.mesh),t.add(this.mesh)}update(t,e){if(!this.alive)return!1;if(this.life-=t,this.life<=0)return this.destroy(),!1;if(this.homingStrength>0){const n=e.clone().sub(this.position);n.lengthSq()>.01&&(n.normalize().multiplyScalar(this.speed),this.velocity.lerp(n,Math.min(1,this.homingStrength*t)),this.velocity.normalize().multiplyScalar(this.speed))}return this.position.addScaledVector(this.velocity,t),this.mesh.position.copy(this.position),this.mesh.rotation.x+=t*9,this.mesh.rotation.z+=t*7,this.position.y<-4?(this.destroy(),!1):this.position.distanceTo(e)<.95?(this.destroy(),!0):!1}destroy(){this.alive&&(this.alive=!1,this.scene.remove(this.mesh),ou(this.mesh))}}const ch=["koopa","desert","lava","dungeon","jungle","storm"];class Qx{constructor(t,e){_(this,"name");_(this,"tier");_(this,"health");_(this,"maxHealth");_(this,"isDead",!1);_(this,"mesh");_(this,"position");_(this,"radius",2);_(this,"phase",1);_(this,"scene");_(this,"visualRoot");_(this,"leftWingPivot");_(this,"rightWingPivot");_(this,"fryBatPivot");_(this,"auraMesh");_(this,"auraMat");_(this,"eyeMat");_(this,"bodyMat");_(this,"wingMat");_(this,"projectiles",[]);_(this,"particles",[]);_(this,"koopaQueue",[]);_(this,"state","orbit");_(this,"stateTimer",1.8);_(this,"orbitAngle",0);_(this,"orbitRadius",9.5);_(this,"orbitHeight",7.4);_(this,"swoopStart",new A);_(this,"swoopTarget",new A);_(this,"swoopProgress",0);_(this,"swoopDuration",1.05);_(this,"attackCycleIndex",0);_(this,"contactCooldown",0);_(this,"hurtInvuln",0);_(this,"hitFlashTimer",0);_(this,"flapTime",0);_(this,"summonedPhase2",!1);_(this,"summonedPhase3",!1);_(this,"playerCenterTmp",new A);this.scene=t,this.tier=Math.max(1,Math.min(6,Math.round(e))),this.name=`McBat (World ${this.tier})`,this.maxHealth=9+(this.tier-1)*3,this.health=this.maxHealth,this.position=new A(0,this.orbitHeight,-this.orbitRadius),this.mesh=new Tt,this.mesh.position.copy(this.position),this.visualRoot=new Tt,this.mesh.add(this.visualRoot),this._buildModel(),su(this.mesh),t.add(this.mesh)}_buildModel(){this.bodyMat=new it({color:6035834,flatShading:!0});const t=new it({color:12065348,flatShading:!0});this.wingMat=new it({color:8002660,side:cn,flatShading:!0});const e=new it({color:3870030,flatShading:!0});this.eyeMat=new Et({color:16768290});const n=new Et({color:16777215}),i=new D(new Xt(1.15,10,8),this.bodyMat);i.scale.set(.95,1.15,.9),this.visualRoot.add(i);const o=new D(new Xt(.85,8,6),t);o.scale.set(.9,1,.65),o.position.set(0,-.08,.52),this.visualRoot.add(o);const a=new D(new Xt(.75,10,8),this.bodyMat);a.position.set(0,1.15,.28),this.visualRoot.add(a);for(const g of[-1,1]){const v=new D(new Oe(.28,.85,5),this.bodyMat);v.position.set(g*.45,1.92,.22),v.rotation.z=g*-.3,this.visualRoot.add(v);const x=new D(new Oe(.14,.55,5),t);x.position.set(g*.45,1.88,.3),x.rotation.z=g*-.3,this.visualRoot.add(x);const m=new D(new Xt(.15,6,6),this.eyeMat);m.position.set(g*.26,1.24,.86),this.visualRoot.add(m);const E=new D(new Oe(.07,.22,4),n);E.position.set(g*.16,.82,.92),E.rotation.x=Math.PI,this.visualRoot.add(E)}const r=g=>{const v=new Tt;v.position.set(g*.85,.35,-.05);const x=new D(new dt(1.5,.14,.14),e);x.position.set(g*.75,.25,0),x.rotation.z=g*.2,v.add(x);const m=new D(new dt(1.4,.12,.12),e);m.position.set(g*2.05,.18,0),m.rotation.z=g*-.25,v.add(m);const E=new D(new dt(1.5,1.25,.06),this.wingMat);E.position.set(g*.75,-.35,-.02),v.add(E);const M=new D(new Oe(.85,1.65,4),this.wingMat);return M.rotation.z=g*(Math.PI/2),M.scale.set(1,1,.15),M.position.set(g*2.1,-.22,-.02),v.add(M),v};this.leftWingPivot=r(-1),this.rightWingPivot=r(1),this.visualRoot.add(this.leftWingPivot),this.visualRoot.add(this.rightWingPivot),this.fryBatPivot=new Tt,this.fryBatPivot.position.set(.85,-.45,.75),this.fryBatPivot.rotation.set(.35,0,-.35);const l=new it({color:3876888,flatShading:!0}),c=new it({color:14489624,flatShading:!0}),h=new Et({color:16763904}),d=new it({color:16765480,flatShading:!0}),p=new D(new Ut(.1,.12,.9,6),l);p.position.y=.2,this.fryBatPivot.add(p);const f=new D(new dt(.85,.95,.5),c);f.position.y=1.02,this.fryBatPivot.add(f);for(const g of[-.26,.26]){const v=new D(new an(.14,.04,4,8,Math.PI),h);v.position.set(-.12,1,g),this.fryBatPivot.add(v);const x=new D(new an(.14,.04,4,8,Math.PI),h);x.position.set(.12,1,g),this.fryBatPivot.add(x)}for(let g=-3;g<=3;g++){const v=.7+Math.abs(g)%2*.22,x=new D(new dt(.1,v,.12),d);x.position.set(g*.105,1.55+g%2*.08,g%3*.08),x.rotation.z=-g*.05,this.fryBatPivot.add(x)}this.visualRoot.add(this.fryBatPivot),this.auraMat=new Et({color:16720401,transparent:!0,opacity:0,depthWrite:!1,side:cn}),this.auraMesh=new D(new Xt(2.35,12,10),this.auraMat),this.auraMesh.visible=!1,this.visualRoot.add(this.auraMesh)}update(t,e){this._updateParticles(t),this.playerCenterTmp.set(e.x,e.y+.65,e.z);let n=!1;for(let c=this.projectiles.length-1;c>=0;c--){const h=this.projectiles[c];h.update(t,this.playerCenterTmp)&&(n=!0),h.alive||this.projectiles.splice(c,1)}if(this.isDead)return{playerHit:n};if(this.hurtInvuln>0&&(this.hurtInvuln=Math.max(0,this.hurtInvuln-t)),this.contactCooldown>0&&(this.contactCooldown=Math.max(0,this.contactCooldown-t)),this.hitFlashTimer>0){this.hitFlashTimer=Math.max(0,this.hitFlashTimer-t);const c=Math.sin(this.hitFlashTimer*45)>0;this.bodyMat.color.setHex(c?16777215:6035834),this.wingMat.color.setHex(c?16755370:8002660)}else this.bodyMat.color.setHex(this.phase===3?8197202:6035834),this.wingMat.color.setHex(this.phase===3?11147844:8002660);const i=this.state==="swoop"||this.phase===3?13:8;this.flapTime+=t*i;const o=this.state==="telegraph"?.55:Math.sin(this.flapTime)*.68;if(this.leftWingPivot.rotation.y=-o*.35,this.leftWingPivot.rotation.z=o,this.rightWingPivot.rotation.y=o*.35,this.rightWingPivot.rotation.z=-o,this.phase===3){this.auraMesh.visible=!0,this.auraMat.opacity=.2+Math.abs(Math.sin(this.flapTime*.5))*.16;const c=1+Math.sin(this.flapTime*.6)*.08;this.auraMesh.scale.setScalar(c),this.eyeMat.color.setHex(16720401)}const a=1+(this.tier-1)*.11,r=this.phase===3?1.35:this.phase===2?1.15:1;if(this.stateTimer-=t,this.state==="orbit"){this.orbitAngle+=t*.95*a*r;const c=Math.cos(this.orbitAngle)*this.orbitRadius,h=Math.sin(this.orbitAngle)*this.orbitRadius,d=this.orbitHeight+Math.sin(this.orbitAngle*2.5)*1.1;this.position.lerp(new A(c,d,h),Math.min(1,t*3.2)),this._facePoint(e,t*5),this.fryBatPivot.rotation.x=.35+Math.sin(this.flapTime*.5)*.15,this.stateTimer<=0&&(this.attackCycleIndex++,this.phase>=2&&this.attackCycleIndex%2===0?(this.state="throw",this.stateTimer=.65,this.eyeMat.color.setHex(16750848)):(this.state="telegraph",this.stateTimer=this.phase===3?.48:.72,this.eyeMat.color.setHex(16720418)))}else if(this.state==="telegraph")this._facePoint(e,t*10),this.position.y+=Math.sin(this.flapTime*1.5)*.8*t,this.fryBatPivot.rotation.x=-.9,this.stateTimer<=0&&(this.state="swoop",this.swoopStart.copy(this.position),this.swoopTarget.set(e.x,Math.max(1.8,e.y+1.4),e.z),this.swoopProgress=0,this.swoopDuration=Math.max(.62,1.08/(a*r)));else if(this.state==="swoop"){this.swoopProgress+=t/this.swoopDuration;const c=Math.min(1,this.swoopProgress),h=c<.5?c*2:(c-.5)*2;if(c<.5)this.position.lerpVectors(this.swoopStart,this.swoopTarget,h),this.position.y-=Math.sin(h*Math.PI)*1;else{const d=new A(this.swoopTarget.x+(this.swoopTarget.x-this.swoopStart.x)*.45,this.orbitHeight,this.swoopTarget.z+(this.swoopTarget.z-this.swoopStart.z)*.45),p=Math.hypot(d.x,d.z);p>12&&(d.x=d.x/p*12,d.z=d.z/p*12),this.position.lerpVectors(this.swoopTarget,d,h)}this.fryBatPivot.rotation.x=-.8+c*2.4,this._facePoint(this.swoopTarget,t*10),this.contactCooldown<=0&&this.position.distanceTo(this.playerCenterTmp)<2.2&&(n=!0,this.contactCooldown=.85),c>=1&&(this.state="recover",this.stateTimer=.55,this.eyeMat.color.setHex(this.phase===3?16720401:16768290))}else this.state==="throw"?(this._facePoint(e,t*10),this.fryBatPivot.rotation.x=-.6+Math.sin(this.stateTimer*10)*.5,this.stateTimer<=0&&(this._fireFryVolley(this.playerCenterTmp),this.state="recover",this.stateTimer=this.phase===3?.65:.95,this.eyeMat.color.setHex(this.phase===3?16720401:16768290))):this.state==="recover"&&(this.fryBatPivot.rotation.x=.35,this.stateTimer<=0&&(this.state="orbit",this.stateTimer=this.phase===3?1.1:this.phase===2?1.55:2));this.contactCooldown<=0&&this.state!=="swoop"&&this.position.distanceTo(this.playerCenterTmp)<1.65&&(n=!0,this.contactCooldown=.85),this.mesh.position.copy(this.position);const l=this.koopaQueue.shift();return{playerHit:n,summonKoopa:l}}_facePoint(t,e){const n=t.x-this.position.x,i=t.z-this.position.z;if(n*n+i*i<.001)return;const o=Math.atan2(n,i);this.mesh.rotation.y+=$x(this.mesh.rotation.y,o)*Math.min(1,e)}_fireFryVolley(t){const e=t.clone().sub(this.position).normalize(),n=this.phase===3?3+Math.floor(this.tier/2):2+Math.floor((this.tier-1)/2),i=12+this.tier*1.1+(this.phase===3?2.5:0),o=.24;for(let a=0;a<n;a++){const r=a-(n-1)/2,l=e.clone().applyAxisAngle(new A(0,1,0),r*o),h=Math.abs(r)<.6||this.phase===3?this.phase===3?1.45:.85:0,d=this.position.clone().addScaledVector(l,1.4);this.projectiles.push(new Zx(this.scene,d,l,i,h))}}takeDamage(t,e,n){if(this.isDead||this.hurtInvuln>0)return!1;this.health=Math.max(0,this.health-Math.max(1,t)),this.hurtInvuln=.22,this.hitFlashTimer=.25;const i=this.health/this.maxHealth,o=ch[(this.tier-1)%ch.length];if(!this.summonedPhase2&&i<=.66&&this.health>0&&(this.phase=2,this.summonedPhase2=!0,this.koopaQueue.push({x:(Math.random()>.5?1:-1)*5.5,y:1,z:-4.5,variant:o,patrolRadius:2.8})),!this.summonedPhase3&&i<=.33&&this.health>0&&(this.phase=3,this.summonedPhase3=!0,this.koopaQueue.push({x:-5.5,y:1,z:4.5,variant:this.tier>=4?"spiked":o,patrolRadius:2.8}),this.koopaQueue.push({x:5.5,y:1,z:4.5,variant:o,patrolRadius:2.8})),this.health<=0){this.isDead=!0,this.scene.remove(this.mesh);for(const a of this.projectiles)a.destroy();this.projectiles.length=0,this._spawnDefeatExplosion()}return!0}_spawnDefeatExplosion(){const t=[16763904,14489624,8002660,16777215],e=28;for(let n=0;n<e;n++){const i=n%3===0?new dt(.16,.5,.16):new hn(.24,0),o=new Et({color:t[n%t.length],transparent:!0,opacity:1}),a=new D(i,o);a.userData.noCameraCollision=!0,a.position.copy(this.position),this.scene.add(a);const r=Math.random()*Math.PI*2,l=3.5+Math.random()*5;this.particles.push({mesh:a,velocity:new A(Math.cos(r)*l,2+Math.random()*5.5,Math.sin(r)*l),life:1.1,maxLife:1.1})}}_updateParticles(t){for(let e=this.particles.length-1;e>=0;e--){const n=this.particles[e];if(n.life-=t,n.life<=0){this.scene.remove(n.mesh),n.mesh.geometry.dispose(),n.mesh.material.dispose(),this.particles.splice(e,1);continue}n.mesh.position.addScaledVector(n.velocity,t),n.velocity.y-=7.5*t,n.mesh.rotation.x+=t*6,n.mesh.rotation.y+=t*5;const i=n.life/n.maxLife;n.mesh.material.opacity=i,n.mesh.scale.setScalar(.5+i*.7)}}dispose(){this.scene.remove(this.mesh),ou(this.mesh);for(const t of this.projectiles)t.destroy();this.projectiles.length=0;for(const t of this.particles)this.scene.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose();this.particles.length=0}}function hh(s){s.userData.noCameraCollision=!0,s.traverse(t=>{t.userData.noCameraCollision=!0})}function uo(s){s.traverse(t=>{const e=t;e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(n=>n.dispose()):e.material.dispose())})}function tv(s,t){let e=(t-s)%(Math.PI*2);return e>Math.PI&&(e-=Math.PI*2),e<-Math.PI&&(e+=Math.PI*2),e}class ev{constructor(t){_(this,"name","Big Bad Pikachu");_(this,"health",24);_(this,"maxHealth",24);_(this,"isDead",!1);_(this,"mesh");_(this,"position");_(this,"radius",2.1);_(this,"phase",1);_(this,"scene");_(this,"bodyGroup");_(this,"tailGroup");_(this,"capeMesh");_(this,"bodyMat");_(this,"cheekMat");_(this,"auraRing");_(this,"auraMat");_(this,"bolts",[]);_(this,"shockwaves",[]);_(this,"particles",[]);_(this,"koopaQueue",[]);_(this,"state","stalk");_(this,"stateTimer",1.4);_(this,"attackStep",0);_(this,"shockwavePendingCount",0);_(this,"basePos",new A(0,0,-6));_(this,"jumpVelY",0);_(this,"dashDir",new A(0,0,1));_(this,"dashSpeed",20);_(this,"contactCooldown",0);_(this,"hurtInvuln",0);_(this,"hitFlashTimer",0);_(this,"elapsed",0);_(this,"summonPhase2Done",!1);_(this,"summonPhase3Done",!1);_(this,"playerCenterTmp",new A);this.scene=t,this.mesh=new Tt,this.mesh.position.copy(this.basePos),this.position=new A(this.basePos.x,1.25,this.basePos.z),this.bodyGroup=new Tt,this.mesh.add(this.bodyGroup),this._buildModel(),hh(this.mesh),t.add(this.mesh)}_buildModel(){this.bodyMat=new it({color:16766489,flatShading:!0});const t=new it({color:1447452,flatShading:!0}),e=new it({color:7028504,flatShading:!0}),n=new it({color:2232372,side:cn,flatShading:!0}),i=new it({color:10033196,flatShading:!0});this.cheekMat=new Et({color:16720418});const o=new Et({color:16777215}),a=new Et({color:1118481}),r=new D(new Xt(.98,10,8),this.bodyMat);r.scale.set(1,1.15,.92),r.position.set(0,1.05,0),this.bodyGroup.add(r);for(let x=0;x<2;x++){const m=new D(new dt(.9,.18,.25),e);m.position.set(0,.85+x*.42,-.78),this.bodyGroup.add(m)}const l=new D(new Xt(.76,10,8),this.bodyMat);l.position.set(0,2.05,.12),this.bodyGroup.add(l);for(const x of[-1,1]){const m=new Tt;m.position.set(x*.48,2.65,.08),m.rotation.z=x*-.45,m.rotation.x=.12;const E=new D(new Ut(.14,.22,.72,6),this.bodyMat);E.position.y=.32,m.add(E);const M=new D(new Oe(.145,.45,6),t);M.position.y=.88,m.add(M),this.bodyGroup.add(m)}for(const x of[-1,1]){const m=new D(new Xt(.19,8,6),this.cheekMat);m.position.set(x*.56,1.88,.62),m.scale.set(1,.9,.6),this.bodyGroup.add(m);const E=new D(new Xt(.12,6,6),a);E.position.set(x*.27,2.15,.78),this.bodyGroup.add(E);const M=new D(new Xt(.045,5,5),o);M.position.set(x*.25,2.19,.88),this.bodyGroup.add(M);const y=new D(new dt(.24,.07,.08),t);y.position.set(x*.28,2.3,.82),y.rotation.z=x*-.35,this.bodyGroup.add(y)}const c=new D(new Oe(.06,.08,4),t);c.position.set(0,2.02,.89),c.rotation.x=Math.PI/2,this.bodyGroup.add(c);for(const x of[-1,1]){const m=new D(new Ut(.16,.12,.58,6),this.bodyMat);m.position.set(x*.92,1.25,.35),m.rotation.z=x*.65,m.rotation.x=.45,this.bodyGroup.add(m);const E=new D(new dt(.32,.18,.56),this.bodyMat);E.position.set(x*.45,.09,.22),this.bodyGroup.add(E)}this.tailGroup=new Tt,this.tailGroup.position.set(0,.72,-.82);const h=new D(new dt(.14,.48,.12),e);h.position.set(0,.22,-.15),h.rotation.x=-.5,h.rotation.z=-.35,this.tailGroup.add(h);const d=new D(new dt(.16,.56,.12),this.bodyMat);d.position.set(.24,.55,-.35),d.rotation.x=-.3,d.rotation.z=.55,this.tailGroup.add(d);const p=new D(new dt(.24,.65,.12),this.bodyMat);p.position.set(.05,1.02,-.52),p.rotation.x=-.25,p.rotation.z=-.45,this.tailGroup.add(p);const f=new D(new dt(.42,.8,.12),this.bodyMat);f.position.set(.36,1.62,-.7),f.rotation.x=-.18,f.rotation.z=-.15,this.tailGroup.add(f),this.bodyGroup.add(this.tailGroup);const g=new D(new an(.76,.13,6,12),i);g.rotation.x=Math.PI/2-.12,g.position.set(0,1.56,-.05),this.bodyGroup.add(g);const v=new Ut(.74,1.45,1.8,10,1,!0,Math.PI*.68,Math.PI*1.64);this.capeMesh=new D(v,n),this.capeMesh.position.set(0,.85,-.18),this.bodyGroup.add(this.capeMesh),this.auraMat=new Et({color:16770594,transparent:!0,opacity:.7}),this.auraRing=new D(new an(1.75,.08,6,18),this.auraMat),this.auraRing.rotation.x=Math.PI/2,this.auraRing.position.y=1.2,this.auraRing.visible=!1,this.bodyGroup.add(this.auraRing)}update(t,e){this._updateParticles(t),this.playerCenterTmp.set(e.x,e.y+.65,e.z);let n=!1;for(let a=this.bolts.length-1;a>=0;a--){const r=this.bolts[a];if(r.life-=t,r.position.addScaledVector(r.velocity,t),r.mesh.position.copy(r.position),r.mesh.rotation.z+=t*12,r.position.distanceTo(this.playerCenterTmp)<1){n=!0,this.scene.remove(r.mesh),uo(r.mesh),this.bolts.splice(a,1);continue}r.life<=0&&(this.scene.remove(r.mesh),uo(r.mesh),this.bolts.splice(a,1))}for(let a=this.shockwaves.length-1;a>=0;a--){const r=this.shockwaves[a];r.radius+=r.speed*t,r.mesh.scale.set(r.radius,r.radius,1);const l=Math.max(0,1-r.radius/r.maxRadius);if(r.material.opacity=.85*l,!r.hitPlayer){const c=Math.hypot(e.x-r.origin.x,e.z-r.origin.z);Math.abs(c-r.radius)<.95&&e.y<r.origin.y+1.15&&(r.hitPlayer=!0,n=!0)}r.radius>=r.maxRadius&&(this.scene.remove(r.mesh),r.mesh.geometry.dispose(),r.material.dispose(),this.shockwaves.splice(a,1))}if(this.isDead)return{playerHit:n};if(this.elapsed+=t,this.hurtInvuln>0&&(this.hurtInvuln=Math.max(0,this.hurtInvuln-t)),this.contactCooldown>0&&(this.contactCooldown=Math.max(0,this.contactCooldown-t)),this.hitFlashTimer>0){this.hitFlashTimer=Math.max(0,this.hitFlashTimer-t);const a=Math.sin(this.hitFlashTimer*50)>0;this.bodyMat.color.setHex(a?16777215:16766489)}else this.bodyMat.color.setHex(16766489);this.tailGroup.rotation.z=Math.sin(this.elapsed*5.5)*.2,this.capeMesh.rotation.x=.1+Math.sin(this.elapsed*6)*.08,this.phase===3&&(this.auraRing.visible=!0,this.auraRing.rotation.z+=t*5,this.auraRing.rotation.y+=t*3,this.auraMat.color.setHex(Math.sin(this.elapsed*20)>0?16770594:4517631));const i=this.phase===3?1.38:this.phase===2?1.18:1;if(this.stateTimer-=t,this.state==="stalk"){const a=e.x-this.basePos.x,r=e.z-this.basePos.z,l=Math.hypot(a,r);if(l>3.5){const c=3.2*i;this.basePos.x+=a/l*c*t,this.basePos.z+=r/l*c*t}this._clampArenaBounds(),this._facePoint(e,t*6),this.cheekMat.color.setHex(16720418),this.bodyGroup.position.y=Math.abs(Math.sin(this.elapsed*6))*.14,this.stateTimer<=0&&(this.attackStep=(this.attackStep+1)%3,this.attackStep===0?(this.state="bolt_charge",this.stateTimer=this.phase===3?.45:.65):this.attackStep===1?(this.state="shockwave_jump",this.jumpVelY=13.5,this.shockwavePendingCount=this.phase===3?2:1,this.stateTimer=2):(this.state="dash_charge",this.stateTimer=this.phase===3?.42:.58))}else if(this.state==="bolt_charge")this._facePoint(e,t*10),this.cheekMat.color.setHex(Math.sin(this.elapsed*30)>0?16772642:16720418),this.bodyGroup.position.x=Math.sin(this.elapsed*40)*.08,this.stateTimer<=0&&(this.bodyGroup.position.x=0,this._fireThunderbolts(this.playerCenterTmp),this.state="recover",this.stateTimer=this.phase===3?.55:.85);else if(this.state==="shockwave_jump")this._facePoint(e,t*6),this.cheekMat.color.setHex(16772642),this.jumpVelY-=32*t,this.basePos.y+=this.jumpVelY*t,this.basePos.y<=0&&(this.basePos.y=0,this.jumpVelY=0,this._spawnShockwaveRing(),this.shockwavePendingCount--,this.shockwavePendingCount>0?this.jumpVelY=10.5:(this.state="recover",this.stateTimer=this.phase===3?.65:.95));else if(this.state==="dash_charge"){if(this._facePoint(e,t*12),this.cheekMat.color.setHex(Math.sin(this.elapsed*36)>0?4517631:16772642),this.bodyGroup.scale.set(1.12,.86,1.12),this.stateTimer<=0){this.bodyGroup.scale.set(1,1,1);const a=e.x-this.basePos.x,r=e.z-this.basePos.z,l=Math.hypot(a,r)||1;this.dashDir.set(a/l,0,r/l),this.dashSpeed=this.phase===3?25:this.phase===2?21:18,this.state="dash",this.stateTimer=.62}}else this.state==="dash"?(this.basePos.addScaledVector(this.dashDir,this.dashSpeed*t),this._clampArenaBounds(),Math.random()<.75&&this._spawnDashSpark(),this.stateTimer<=0&&(this.state="recover",this.stateTimer=this.phase===3?.5:.8)):this.state==="recover"&&(this.bodyGroup.position.y=0,this.cheekMat.color.setHex(16720418),this.stateTimer<=0&&(this.state="stalk",this.stateTimer=this.phase===3?.85:this.phase===2?1.15:1.45));if(this.contactCooldown<=0){const a=this.state==="dash"?2.15:1.65;this.position.distanceTo(this.playerCenterTmp)<a&&(n=!0,this.contactCooldown=.85)}this.mesh.position.copy(this.basePos),this.position.set(this.basePos.x,this.basePos.y+1.25,this.basePos.z);const o=this.koopaQueue.shift();return{playerHit:n,summonKoopa:o}}_clampArenaBounds(){const t=Math.hypot(this.basePos.x,this.basePos.z),e=17.5;t>e&&(this.basePos.x=this.basePos.x/t*e,this.basePos.z=this.basePos.z/t*e)}_facePoint(t,e){const n=t.x-this.basePos.x,i=t.z-this.basePos.z;if(n*n+i*i<.001)return;const o=Math.atan2(n,i);this.mesh.rotation.y+=tv(this.mesh.rotation.y,o)*Math.min(1,e)}_fireThunderbolts(t){const e=new A(this.basePos.x,this.basePos.y+1.6,this.basePos.z),n=t.clone().sub(e).normalize(),i=this.phase===3?5:this.phase===2?3:2,o=this.phase===3?19:this.phase===2?16.5:14.5,a=.22;for(let r=0;r<i;r++){const l=r-(i-1)/2,c=n.clone().applyAxisAngle(new A(0,1,0),l*a),h=new Tt,d=new D(new hn(.32,0),new Et({color:16772642}));h.add(d);const p=new D(new Xt(.5,6,6),new Et({color:4517631,transparent:!0,opacity:.45}));h.add(p),h.position.copy(e),hh(h),this.scene.add(h),this.bolts.push({mesh:h,position:e.clone(),velocity:c.multiplyScalar(o),life:3.5})}}_spawnShockwaveRing(){const t=new Et({color:16770594,transparent:!0,opacity:.85,side:cn,depthWrite:!1}),e=new D(new Tl(.84,1,32),t);e.rotation.x=-Math.PI/2,e.position.set(this.basePos.x,.32,this.basePos.z),e.userData.noCameraCollision=!0,this.scene.add(e),this.shockwaves.push({mesh:e,material:t,origin:new A(this.basePos.x,.32,this.basePos.z),radius:1.5,speed:this.phase===3?14.5:this.phase===2?12.5:10.5,maxRadius:26,hitPlayer:!1})}_spawnDashSpark(){const t=new hn(.14,0),e=new Et({color:Math.random()>.4?16772642:4517631,transparent:!0,opacity:1}),n=new D(t,e);n.userData.noCameraCollision=!0,n.position.set(this.basePos.x+(Math.random()-.5)*1.2,this.basePos.y+.5+Math.random()*1.2,this.basePos.z+(Math.random()-.5)*1.2),this.scene.add(n),this.particles.push({mesh:n,velocity:new A((Math.random()-.5)*3,1.5+Math.random()*2,(Math.random()-.5)*3),life:.45,maxLife:.45})}takeDamage(t,e,n){if(this.isDead||this.hurtInvuln>0)return!1;if(this.health=Math.max(0,this.health-Math.max(1,t)),this.hurtInvuln=.2,this.hitFlashTimer=.24,!this.summonPhase2Done&&this.health<=16&&this.health>0&&(this.phase=2,this.summonPhase2Done=!0,this.koopaQueue.push({x:-9,y:.5,z:-4,variant:"storm",patrolRadius:5}),this.koopaQueue.push({x:9,y:.5,z:-4,variant:"storm",patrolRadius:5})),!this.summonPhase3Done&&this.health<=8&&this.health>0&&(this.phase=3,this.summonPhase3Done=!0,this.koopaQueue.push({x:-10,y:.5,z:6,variant:"spiked",patrolRadius:5}),this.koopaQueue.push({x:10,y:.5,z:6,variant:"storm",patrolRadius:5})),this.health<=0){this.isDead=!0,this.scene.remove(this.mesh);for(const i of this.bolts)this.scene.remove(i.mesh),uo(i.mesh);this.bolts.length=0;for(const i of this.shockwaves)this.scene.remove(i.mesh),i.mesh.geometry.dispose(),i.material.dispose();this.shockwaves.length=0,this._spawnVictoryBurst()}return!0}_spawnVictoryBurst(){const t=[16772642,4517631,16729122,16777215],e=36;for(let n=0;n<e;n++){const i=new hn(.24,0),o=new Et({color:t[n%t.length],transparent:!0,opacity:1}),a=new D(i,o);a.userData.noCameraCollision=!0,a.position.copy(this.position),this.scene.add(a);const r=Math.random()*Math.PI*2,l=3.5+Math.random()*6.5;this.particles.push({mesh:a,velocity:new A(Math.cos(r)*l,2.5+Math.random()*6.5,Math.sin(r)*l),life:1.3,maxLife:1.3})}}_updateParticles(t){for(let e=this.particles.length-1;e>=0;e--){const n=this.particles[e];if(n.life-=t,n.life<=0){this.scene.remove(n.mesh),n.mesh.geometry.dispose(),n.mesh.material.dispose(),this.particles.splice(e,1);continue}n.mesh.position.addScaledVector(n.velocity,t),n.velocity.y-=7*t;const i=n.life/n.maxLife;n.mesh.material.opacity=i,n.mesh.scale.setScalar(.4+i*.8)}}dispose(){this.scene.remove(this.mesh),uo(this.mesh);for(const t of this.bolts)this.scene.remove(t.mesh),uo(t.mesh);this.bolts.length=0;for(const t of this.shockwaves)this.scene.remove(t.mesh),t.mesh.geometry.dispose(),t.material.dispose();this.shockwaves.length=0;for(const t of this.particles)this.scene.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose();this.particles.length=0}}const Lo={1:{world:1,title:"Whispering Woods",biome:"woods",skyColor:8308963,fogColor:9484948,fogDensity:.0085,groundTex:"grass",groundColor:3902514,platTex:"wood",platColor:11566405,accentColor:5023296,enemyVariant:"koopa"},2:{world:2,title:"Sunscorch Desert",biome:"desert",skyColor:16041082,fogColor:15119734,fogDensity:.0075,groundTex:"sand",groundColor:14264398,platTex:"sand",platColor:14859371,accentColor:12748088,enemyVariant:"desert"},3:{world:3,title:"Magma Depths",biome:"volcano",skyColor:3871244,fogColor:6364175,fogDensity:.011,groundTex:"stone",groundColor:4010806,platTex:"stone",platColor:5194567,accentColor:16729368,enemyVariant:"lava"},4:{world:4,title:"Skull Dungeon",biome:"dungeon",skyColor:1446436,fogColor:2300984,fogDensity:.012,groundTex:"dungeon",groundColor:4604503,platTex:"dungeon",platColor:6051696,accentColor:9717984,enemyVariant:"dungeon"},5:{world:5,title:"Tropical Tidepool",biome:"jungle",skyColor:5167858,fogColor:7790806,fogDensity:.007,groundTex:"jungle",groundColor:3710048,platTex:"wood",platColor:12883288,accentColor:1100728,enemyVariant:"jungle"},6:{world:6,title:"Thunder Plains",biome:"plains",skyColor:2371670,fogColor:3688053,fogDensity:.0095,groundTex:"plains",groundColor:4810370,platTex:"plains",platColor:6061470,accentColor:3907327,enemyVariant:"storm"}};function Zn(s,t){return Math.sin(s*.1)*.5+Math.sin(t*.15)*.3+Math.sin((s+t)*.08)*.4}function lt(s,t,e,n,i,o=1.6,a){return{x:s,y:t-o/2,z:e,w:n,h:o,d:i,color:a==null?void 0:a.color,texture:a==null?void 0:a.texture,moving:a==null?void 0:a.moving,slope:a==null?void 0:a.slope}}function Cn(s,t,e,n,i,o,a,r=0,l=!1){const c=[];for(let h=0;h<a;h++){const d=a===1?.5:h/(a-1),p=Math.sin(d*Math.PI)*r;c.push({x:s+(n-s)*d,y:t+(i-t)*d+p+.85,z:e+(o-e)*d,type:l&&h===a-1?"blueberry":"strawberry"})}return c}function ni(s,t,e,n,i,o="strawberry"){const a=[];for(let r=0;r<i;r++){const l=r/i*Math.PI*2;a.push({x:s+Math.cos(l)*n,y:t+.85,z:e+Math.sin(l)*n,type:o})}return a}function uh(s,t,e,n,i,o,a,r){const c=i/2+1,h=t+n,d=[lt(s-c,h,e,2,o,n+1,{texture:a,color:r}),lt(s+c,h,e,2,o,n+1,{texture:a,color:r})],p=[],f=Math.max(3,Math.floor(n/2.2));for(let g=0;g<f;g++){const v=(g+.5)/f,x=g%2===0?-1:1;p.push({x:s+x*(i*.28),y:t+v*n+.6,z:e,type:g===f-1?"blueberry":"strawberry"})}return{platforms:d,berries:p}}const po={"1-4":{id:0,name:"Shelly",x:-18,y:3.5,z:-42,dialogLines:["Whew! Thank you for smashing that electric cage, Rem!","I'm Shelly! Pikachu locked us Neutral Koopas up across the worlds.","I'll head back to the campfire in Berry Grove — find my 4 friends!"]},"2-3":{id:1,name:"Sandy",x:18,y:3.8,z:-38,dialogLines:["Phew, it was roasting inside that cage! Thanks, Rem!","I'm Sandy! Our shells hold ancient starlight that can break Pikachu's barrier.","See you back by the Berry Grove campfire!"]},"3-3":{id:2,name:"Cinder",x:-19,y:4,z:-42,dialogLines:["Whoa, close call over the magma! You saved my shell, Rem!","I'm Cinder! Only two more of us Neutral Koopas left to rescue.","Meet you at Berry Grove — we're cheering you on!"]},"4-3":{id:3,name:"Boney",x:-19,y:4.5,z:-40,dialogLines:["Ack! Those skull spikes gave me the chills! Thanks a million, Rem!","I'm Boney! One last Neutral Koopa is trapped in Tropical Tidepool.","Once all 5 of us are free, we'll unlock Pikachu's Fortress!"]},"5-3":{id:4,name:"Splash",x:-18,y:4.2,z:-38,dialogLines:["Cowabunga! I'm free! Thanks for braving the tidepool, Rem!","I'm Splash — that makes all 5 Neutral Koopas rescued!","Our shell magic just unlocked Pikachu's Fortress portal in Berry Grove. Go save Pete, Jib Jib, Susie, and Snow!"]}};function nv(){const s=[{x:-18,y:Zn(-18,4)+.35,z:4,targetLevelId:"1-1",label:"1: Whispering Woods",color:3394628,worldIndex:1},{x:-16,y:Zn(-16,-8)+.35,z:-8,targetLevelId:"2-1",label:"2: Sunscorch Desert",color:15908405,worldIndex:2},{x:-9,y:Zn(-9,-17)+.35,z:-17,targetLevelId:"3-1",label:"3: Magma Depths",color:16729368,worldIndex:3},{x:0,y:2.6,z:-23,targetLevelId:"fortress",label:"Pikachu's Fortress",color:16772608,worldIndex:7},{x:9,y:Zn(9,-17)+.35,z:-17,targetLevelId:"4-1",label:"4: Skull Dungeon",color:10044654,worldIndex:4},{x:16,y:Zn(16,-8)+.35,z:-8,targetLevelId:"5-1",label:"5: Tropical Tidepool",color:1104068,worldIndex:5},{x:18,y:Zn(18,4)+.35,z:4,targetLevelId:"6-1",label:"6: Thunder Plains",color:3907327,worldIndex:6}],t=[lt(0,1,6.5,6,4.5,1.4,{texture:"wood",color:12093004}),lt(0,1.2,-16.5,7.5,3,2,{texture:"stone",color:6446960}),lt(0,1.9,-19,8,3,2.5,{texture:"stone",color:5657446}),lt(0,2.6,-23,9.5,6.5,3.2,{texture:"fortress",color:4538457}),{x:9,y:2.5,z:9,w:2.6,h:.45,d:2.6,texture:"wood",color:12093004,moving:{axis:"y",range:.25,speed:1.2,phase:0}},{x:-7,y:4.2,z:12,w:3,h:.45,d:3,texture:"wood",color:12093004,moving:{axis:"y",range:.25,speed:1.2,phase:1.5}},{x:14,y:3.6,z:-6,w:3.4,h:.45,d:3.4,texture:"wood",color:12093004,moving:{axis:"y",range:.25,speed:1.2,phase:3}},{x:-11,y:5.5,z:-3,w:2.6,h:.45,d:2.6,texture:"wood",color:12093004,moving:{axis:"y",range:.25,speed:1.2,phase:4.5}},{x:6,y:6.2,z:-15,w:3,h:.45,d:3,texture:"wood",color:12093004,moving:{axis:"y",range:.25,speed:1.2,phase:6}},{x:-18,y:3.2,z:10,w:3.4,h:.45,d:3.4,texture:"wood",color:12093004,moving:{axis:"y",range:.25,speed:1.2,phase:7.5}},{x:18,y:7.4,z:7,w:3,h:.45,d:3,texture:"wood",color:12093004,moving:{axis:"y",range:.25,speed:1.2,phase:9}}],e=-15,n=15,i=10,o=4.5,a=[];let r={x:e,y:18,z:n};for(let h=0;h<i;h++){const d=h/i*Math.PI*3,p=1.8+h*1.75,f=e+Math.cos(d)*o,g=n+Math.sin(d)*o;t.push({x:f,y:p,z:g,w:2.4,h:.4,d:2.4,texture:"wood",color:13933142}),h%2===1&&a.push({x:f,y:p+1,z:g,type:"strawberry"}),h===i-1&&(r={x:f,y:p+.2,z:g},a.push({x:f,y:p+1.15,z:g,type:"blueberry"}))}const l=[[-4,9,"strawberry"],[4,9,"strawberry"],[-8,6,"strawberry"],[11,2,"strawberry"],[-12,0,"strawberry"],[12,-1,"strawberry"],[-5,-10,"strawberry"],[5,-10,"strawberry"],[-21,-2,"blueberry"],[21,-2,"blueberry"],[0,14,"strawberry"],[-6,15,"strawberry"],[10,14,"blueberry"],[-12,-13,"blueberry"],[12,-13,"blueberry"]];for(const[h,d,p]of l)a.push({x:h,y:Zn(h,d)+.85,z:d,type:p});a.push({x:9,y:3.5,z:9,type:"strawberry"},{x:-7,y:5.2,z:12,type:"strawberry"},{x:14,y:4.6,z:-6,type:"strawberry"},{x:-11,y:6.5,z:-3,type:"blueberry"},{x:6,y:7.2,z:-15,type:"blueberry"},{x:-18,y:4.2,z:10,type:"strawberry"});const c=[{x:-4.2,y:Zn(-4.2,5.5),z:5.5,powerUp:"sword"},{x:r.x,y:r.y,z:r.z,powerUp:"armor",hidden:!0},{x:18,y:7.4+.225,z:7,powerUp:"fireball",hidden:!0}];return{id:"hub",world:0,stage:0,name:"Berry Grove (Hub)",biome:"hub",skyColor:8900331,fogColor:9287832,fogDensity:.008,spawn:{x:0,y:2.3,z:6.5},ground:{size:110,amplitude:1,texture:"grass",baseColor:3836466},platforms:t,hazards:[],enemies:[],chests:c,berries:a,checkpoints:[],portals:s,treeCount:38,pillarCount:6}}function Ds(s,t){const e=Lo[s],n=["armor","sword","fireball","shredder"],i=n[(s-1)%4],o=n[(s+1)%4],a=[lt(0,.5,0,10,10,2,{texture:e.platTex,color:e.platColor}),lt(0,1.4,-10,7,7,2,{texture:e.platTex,color:e.platColor}),lt(-4,2.4,-19,6,6,2,{texture:e.platTex,color:e.platColor}),lt(3,3.2,-27,6,6,2,{texture:e.platTex,color:e.platColor}),lt(0,3.2,-36,9,8,2.4,{texture:e.platTex,color:e.platColor}),lt(0,4.4,-46,5,8,1.2,{texture:e.platTex,color:e.platColor,slope:{rotX:.16}}),lt(0,5.2,-56,4.5,4.5,1,{texture:e.platTex,color:e.accentColor,moving:{axis:"x",range:4.5,speed:1.15+s*.1,phase:0}}),lt(0,5.4,-66,8,7,2.4,{texture:e.platTex,color:e.platColor}),lt(0,6.2,-77,9,9,2.4,{texture:e.platTex,color:e.platColor}),lt(9,4.8,-36,4.5,4.5,1.4,{texture:e.platTex,color:e.accentColor}),lt(15,6.4,-36,5.5,5.5,1.6,{texture:e.platTex,color:e.platColor})],r=s===1?"spikes":s===2?"quicksand":s===3?"lava":s===4?"spikes":s===5?"quicksand":"electric",l=s===3||s===5?[{x:0,y:-.8,z:-40,w:72,h:.7,d:108,kind:r,damage:s===3?2:1}]:[{x:0,y:.1,z:-23,w:18,h:.5,d:12,kind:r,damage:1},{x:0,y:.1,z:-56,w:22,h:.6,d:14,kind:r,damage:s>=3?2:1}];s===4&&(a.push(lt(0,-1.6,-40,48,106,1.2,{texture:"dungeon",color:4143698})),l[0].y=-1.35,l[1].y=-1.35);const c=[{x:0,y:1.4,z:-10,variant:e.enemyVariant,patrolRadius:2.2},{x:-4,y:2.4,z:-19,variant:e.enemyVariant,patrolRadius:1.8},{x:3,y:3.2,z:-27,variant:e.enemyVariant,patrolRadius:1.8},{x:0,y:5.4,z:-66,variant:s>=3?"spiked":e.enemyVariant,patrolRadius:2.4},{x:15,y:6.4,z:-36,variant:e.enemyVariant,patrolRadius:1.5}],h=[...Cn(0,.5,-2,0,1.4,-10,4,.8),...Cn(-1,1.4,-12,-4,2.4,-19,3,1),...Cn(-3,2.4,-21,3,3.2,-27,3,1),...Cn(0,3.2,-40,0,5.2,-50,4,.5),...Cn(0,5.4,-68,0,6.2,-75,4,1,!0),...ni(15,6.4,-36,1.8,5,"strawberry"),{x:15,y:7.5,z:-36,type:"blueberry"},{x:0,y:6.5,z:-56,type:"blueberry"},{x:0,y:4.3,z:-36,type:"blueberry"}],d=[{x:-3.2,y:3.2,z:-36,powerUp:i},{x:15,y:6.4,z:-36,powerUp:o,hidden:!0}];return{id:`${s}-1`,world:s,stage:1,name:`${s}-1: ${t}`,biome:e.biome,skyColor:e.skyColor,fogColor:e.fogColor,fogDensity:e.fogDensity,spawn:{x:0,y:2,z:0},goal:{x:0,y:6.2,z:-78},ground:s===3||s===4||s===5?void 0:{size:130,amplitude:s===2?.9:.55,texture:e.groundTex,baseColor:e.groundColor},platforms:a,hazards:l,enemies:c,chests:d,berries:h,checkpoints:[{x:0,y:3.2,z:-36}],portals:[],treeCount:s===1||s===5?24:0,pillarCount:s===2||s===3||s===4||s===6?10:0}}function Ls(s,t){const e=Lo[s],n=[lt(0,0,0,10,10,2,{texture:e.platTex,color:e.platColor})],i=[],o=[],a=[],r=[],l=[];let c={x:0,y:20,z:-26};if(s===4){n.push(lt(0,.5,-12,8,12,2,{texture:e.platTex,color:e.platColor}));const h=uh(0,.5,-15,9,4,6,e.platTex,e.platColor);n.push(...h.platforms),a.push(...h.berries),n.push(lt(0,9.5,-24,10,12,2,{texture:e.platTex,color:e.platColor}),lt(0,9.5,-39,7,12,1.8,{texture:e.platTex,color:e.platColor})),l.push({x:0,y:9.5,z:-24}),r.push({x:-3.5,y:9.5,z:-24,powerUp:"armor"}),i.push({x:0,y:9.6,z:-34,w:4.5,h:.4,d:2.2,kind:"spikes",damage:1});const d=uh(0,9.5,-42,9,4,6,e.platTex,e.platColor);n.push(...d.platforms),a.push(...d.berries),n.push(lt(-9,18.5,-42,6,6,1.6,{texture:e.platTex,color:e.accentColor})),r.push({x:-9,y:18.5,z:-42,powerUp:"shredder",hidden:!0}),a.push(...ni(-9,18.5,-42,1.8,5,"blueberry")),n.push(lt(0,18.5,-51,10,12,2,{texture:e.platTex,color:e.platColor})),o.push({x:0,y:.5,z:-10,variant:"dungeon",patrolRadius:2.2},{x:2,y:9.5,z:-24,variant:"spiked",patrolRadius:2},{x:0,y:18.5,z:-50,variant:"dungeon",patrolRadius:2.4}),c={x:0,y:18.5,z:-54}}else if(s===2){for(let d=0;d<5;d++){const p=24-d*4,f=(d+1)*2.3;n.push(lt(0,f,-24,p,p,2.4,{texture:"sand",color:d%2===0?14727525:13673035})),a.push(...ni(0,f,-24,p*.36,4,d===4?"blueberry":"strawberry"))}n.push(lt(0,1.4,-8,6,7,1.8,{texture:"sand",color:14264398}),lt(9,5,-14,4,8,1,{texture:"sand",color:12748088,slope:{rotX:.25}}),lt(0,10.5,-34,5.5,5.5,1.6,{texture:"sand",color:12748088})),l.push({x:-8,y:4.6,z:-24}),i.push({x:5,y:2.4,z:-16,w:3.5,h:.5,d:3.5,kind:"spikes",damage:1},{x:-5,y:7,z:-24,w:3,h:.5,d:3,kind:"spikes",damage:1}),o.push({x:0,y:2.3,z:-15,variant:"desert",patrolRadius:2.5},{x:6,y:6.9,z:-24,variant:"desert",patrolRadius:2},{x:0,y:9.2,z:-20,variant:"spiked",patrolRadius:1.8}),r.push({x:8,y:4.6,z:-24,powerUp:"fireball"},{x:0,y:10.5,z:-34,powerUp:"shredder",hidden:!0}),c={x:0,y:11.5,z:-24}}else{const f=s===3?"lava":s===6?"electric":s===5?"quicksand":"spikes";(s===3||s===5||s===6)&&i.push({x:0,y:-.4,z:-20,w:32,h:.6,d:32,kind:f,damage:s>=3?2:1}),n.push(lt(0,1.2,-9,6,7,1.6,{texture:e.platTex,color:e.platColor}));for(let w=0;w<9;w++){const R=Math.PI/2+w/9*Math.PI*2.2,L=Math.cos(R)*9.5,C=-20+Math.sin(R)*9.5,b=2.6+w*2.1,U=w===3||w===6;n.push(lt(L,b,C,5.2,5.2,1.4,{texture:e.platTex,color:U?e.accentColor:e.platColor,moving:U?{axis:"y",range:1.1,speed:1.3+s*.08,phase:w}:void 0})),a.push({x:L,y:b+.9,z:C,type:w%3===2?"blueberry":"strawberry"}),w===4&&(l.push({x:L,y:b,z:C}),r.push({x:L-1.5,y:b,z:C,powerUp:s===1?"sword":"armor"})),(w===2||w===5||w===7)&&o.push({x:L,y:b,z:C,variant:w===7?"spiked":e.enemyVariant,patrolRadius:1.5})}const g=Math.PI/2+5/9*Math.PI*2.2,v=Math.cos(g)*(9.5+6.5),x=-20+Math.sin(g)*(9.5+6.5),m=2.6+5*2.1+1;n.push(lt(v,m,x,5,5,1.4,{texture:e.platTex,color:e.accentColor})),r.push({x:v,y:m,z:x,powerUp:"fireball",hidden:!0}),a.push(...ni(v,m,x,1.6,5,"strawberry"));const E=Math.PI/2+8/9*Math.PI*2.2,M=Math.cos(E)*(9.5*.45),y=-20+Math.sin(E)*(9.5*.45),I=2.6+9*2.1;n.push(lt(M,I,y,8.5,8.5,2,{texture:e.platTex,color:e.platColor})),a.push(...ni(M,I,y,2.6,6,"blueberry")),c={x:M,y:I,z:y}}return{id:`${s}-2`,world:s,stage:2,name:`${s}-2: ${t}`,biome:e.biome,skyColor:e.skyColor,fogColor:e.fogColor,fogDensity:e.fogDensity,spawn:{x:0,y:1.6,z:0},goal:c,ground:s===1||s===2?{size:120,amplitude:.5,texture:e.groundTex,baseColor:e.groundColor}:void 0,platforms:n,hazards:i,enemies:o,chests:r,berries:a,checkpoints:l,portals:[],treeCount:s===1?22:s===5?16:0,pillarCount:s===2||s===3||s===4||s===6?12:0}}function Is(s,t,e,n){const i=Lo[s],o=s===6&&t===3,a=s===1?"spikes":s===2?"quicksand":s===3?"lava":s===4?"spikes":s===5?"quicksand":"electric",r=[lt(0,1,0,10,10,2,{texture:i.platTex,color:i.platColor})],l=[],c=[],h=[],d=[],p=[];let f={x:0,y:6,z:-86};if(o)r.push(lt(0,2,-13,6,12,1.6,{texture:i.platTex,color:i.platColor}),lt(0,3,-31,6,13,1.6,{texture:i.platTex,color:i.platColor}),lt(0,4.2,-45,5.5,10,1.6,{texture:i.platTex,color:i.platColor}),lt(0,5.2,-57,4.5,5,1.2,{texture:i.platTex,color:i.accentColor,moving:{axis:"x",range:4,speed:1.5,phase:0}}),lt(0,5.5,-70,7,14,1.8,{texture:i.platTex,color:i.platColor}),lt(10,7.2,-70,5,5,1.4,{texture:i.platTex,color:i.accentColor}),lt(0,6.5,-86,10,10,2.2,{texture:i.platTex,color:i.platColor})),l.push({x:0,y:3.1,z:-31,w:5.5,h:.4,d:1.8,kind:"electric",damage:1},{x:0,y:5.6,z:-70,w:6.5,h:.4,d:2,kind:"electric",damage:1},{x:0,y:-1.5,z:-45,w:30,h:.6,d:70,kind:"electric",damage:2}),p.push({x:0,y:3,z:-35},{x:0,y:5.5,z:-66}),d.push({x:-2.2,y:3,z:-35,powerUp:"fireball"},{x:2.2,y:5.5,z:-66,powerUp:"armor"},{x:10,y:7.2,z:-70,powerUp:"shredder",hidden:!0}),c.push({x:0,y:2,z:-13,variant:"storm",patrolRadius:2},{x:0,y:4.2,z:-45,variant:"spiked",patrolRadius:2},{x:0,y:5.5,z:-73,variant:"storm",patrolRadius:2.2},{x:0,y:6.5,z:-83,variant:"spiked",patrolRadius:2}),h.push(...Cn(0,2,-18,0,3,-25,4,1.8),...Cn(0,4.2,-40,0,4.2,-50,5,.8),...Cn(0,5.5,-76,0,6.5,-82,4,2,!0),...ni(10,7.2,-70,1.6,5,"blueberry"));else{r.push(lt(0,1.8,-11,7,7,1.8,{texture:i.platTex,color:i.platColor}),lt(0,2.5,-24,11,10,2,{texture:i.platTex,color:i.platColor}),lt(0,3.4,-38,6,7,1.8,{texture:i.platTex,color:i.platColor}),lt(0,4.2,-49,4.5,4.5,1.2,{texture:i.platTex,color:i.accentColor,moving:{axis:"z",range:3.5,speed:1.2+s*.08,phase:0}}),lt(0,4.8,-60,8,8,2,{texture:i.platTex,color:i.platColor}),lt(0,5.6,-74,10,10,2.4,{texture:i.platTex,color:i.platColor}));const g=n&&n.x>0?1:-1,v=n?n.x:g*18,x=n?n.y:4,m=n?n.z:-40;r.push(lt(g*9,2.8,-28,4.5,4.5,1.4,{texture:i.platTex,color:i.platColor}),lt(g*14,3.2,-34,4.2,4.2,1.2,{texture:i.platTex,color:i.accentColor,moving:{axis:"y",range:.7,speed:1.2,phase:1}}),lt(v,x,m,8.5,8.5,2.2,{texture:i.platTex,color:i.platColor}),lt(-g*9,3.4,-24,4.5,4.5,1.4,{texture:i.platTex,color:i.platColor}),lt(-g*15,4.8,-24,5.5,5.5,1.6,{texture:i.platTex,color:i.accentColor})),l.push({x:0,y:-.6,z:-38,w:54,h:.7,d:62,kind:a,damage:s>=3?2:1}),p.push({x:0,y:2.5,z:-24},{x:0,y:4.8,z:-60}),d.push({x:2.8,y:2.5,z:-24,powerUp:s%2===0?"sword":"armor"},{x:-g*15,y:4.8,z:-24,powerUp:s>=4?"shredder":"fireball",hidden:!0}),c.push({x:0,y:1.8,z:-11,variant:i.enemyVariant,patrolRadius:2},{x:-2,y:2.5,z:-24,variant:i.enemyVariant,patrolRadius:2.2},{x:0,y:3.4,z:-38,variant:"spiked",patrolRadius:1.6},{x:0,y:4.8,z:-60,variant:i.enemyVariant,patrolRadius:2.2},{x:-g*15,y:4.8,z:-24,variant:"spiked",patrolRadius:1.4}),h.push(...Cn(0,1,-3,0,1.8,-11,4,.8),...Cn(g*5,2.5,-25,g*14,3.2,-34,4,.9),...ni(v,x,m,2.6,6,"strawberry"),...ni(-g*15,4.8,-24,1.6,4,"blueberry"),...Cn(0,4.8,-64,0,5.6,-71,4,1.2,!0)),f={x:0,y:5.6,z:-76}}return{id:`${s}-${t}`,world:s,stage:t,name:`${s}-${t}: ${e}`,biome:i.biome,skyColor:i.skyColor,fogColor:i.fogColor,fogDensity:i.fogDensity,spawn:{x:0,y:2.6,z:0},goal:f,ground:void 0,platforms:r,hazards:l,enemies:c,chests:d,berries:h,checkpoints:p,portals:[],neutralKoopa:n,treeCount:s===1||s===5?12:0,pillarCount:s===2||s===3||s===4||s===6?10:0}}function Us(s,t,e){const n=Lo[s],i=s===1?"spikes":s===2?"quicksand":s===3?"lava":s===4?"spikes":s===5?"quicksand":"electric",o=1.05+s*.12,a=[lt(0,1.5,0,9,9,2,{texture:n.platTex,color:n.platColor}),lt(0,2.5,-11,4.5,9,1.2,{texture:n.platTex,color:n.platColor,slope:{rotX:.14}}),lt(-2,3.2,-22,4.6,4.6,1,{texture:n.platTex,color:n.accentColor,moving:{axis:"x",range:4,speed:o,phase:0}}),lt(2,3.8,-30,4.6,4.6,1,{texture:n.platTex,color:n.accentColor,moving:{axis:"x",range:4,speed:o,phase:Math.PI}}),lt(0,4.2,-40,10,9,2.4,{texture:n.platTex,color:n.platColor}),lt(0,4.2,-51,3.4,8,1.2,{texture:n.platTex,color:n.platColor}),lt(0,6.2,-61,4.8,4.8,1.2,{texture:n.platTex,color:n.accentColor,moving:{axis:"y",range:1.8,speed:o*.9,phase:.5}}),lt(0,7.6,-71,9,8,2.2,{texture:n.platTex,color:n.platColor}),lt(-11,6.8,-71,5.5,5.5,1.6,{texture:n.platTex,color:n.accentColor}),lt(0,8.2,-83,4.5,8,1.4,{texture:n.platTex,color:n.platColor}),lt(0,9,-95,10,10,2.4,{texture:n.platTex,color:n.platColor})],r=[{x:0,y:-.5,z:-48,w:36,h:.7,d:96,kind:i,damage:s>=3?2:1},{x:0,y:8.3,z:-83,w:4,h:.4,d:1.8,kind:i==="quicksand"?"spikes":i,damage:1}],l=[{x:-1.5,y:4.2,z:-40,variant:n.enemyVariant,patrolRadius:2},{x:2,y:4.2,z:-40,variant:"spiked",patrolRadius:1.8},{x:0,y:4.2,z:-51,variant:n.enemyVariant,patrolRadius:1.2},{x:0,y:7.6,z:-71,variant:"spiked",patrolRadius:2.2},{x:0,y:9,z:-93,variant:n.enemyVariant,patrolRadius:2.4}],c=[{x:3.5,y:4.2,z:-40,powerUp:s%2===1?"fireball":"armor"},{x:-11,y:6.8,z:-71,powerUp:"shredder",hidden:!0}],h=[...Cn(0,1.5,-2,0,2.5,-13,5,.4),{x:-2,y:4.4,z:-22,type:"strawberry"},{x:2,y:5,z:-30,type:"blueberry"},...Cn(0,4.2,-46,0,4.2,-55,5,.7),...ni(-11,6.8,-71,1.8,5,"blueberry"),...Cn(0,8.2,-80,0,9,-92,5,1.2,!0)];return{id:`${s}-${t}`,world:s,stage:t,name:`${s}-${t}: ${e}`,biome:n.biome,skyColor:n.skyColor,fogColor:n.fogColor,fogDensity:n.fogDensity,spawn:{x:0,y:3.1,z:0},goal:{x:0,y:9,z:-96},ground:void 0,platforms:a,hazards:r,enemies:l,chests:c,berries:h,checkpoints:[{x:0,y:4.2,z:-40},{x:0,y:7.6,z:-71}],portals:[],treeCount:s===1||s===5?10:0,pillarCount:s===2||s===3||s===4||s===6?12:0}}function Ns(s,t){const e=Lo[s],n=s===2?"quicksand":s===4?"spikes":s===5?"quicksand":s===6?"electric":"lava",i=[lt(0,.6,15,10,7,1.6,{texture:"mcdonalds",color:14233637}),lt(0,.8,10,6,4,1.6,{texture:"mcdonalds",color:16763904}),lt(0,1,0,18,16,2.2,{texture:"mcdonalds",color:15130836}),lt(-11,4.5,4,5.5,5.5,1.4,{texture:"mcdonalds",color:14720830}),lt(11,5.5,4,5.5,5.5,1.4,{texture:"mcdonalds",color:14720830}),lt(-10,6.5,-8,5.5,5.5,1.4,{texture:"mcdonalds",color:14720830}),lt(10,7.5,-8,5.5,5.5,1.4,{texture:"mcdonalds",color:14720830}),lt(0,8.2,-13,10,5.5,1.6,{texture:"mcdonalds",color:16762668})],o=[{x:0,y:-.6,z:0,w:46,h:.7,d:44,kind:"lava",damage:2},{x:-13,y:-.3,z:12,w:8,h:.7,d:8,kind:n,damage:1},{x:13,y:-.3,z:12,w:8,h:.7,d:8,kind:n,damage:1}],a=[{x:-7,y:1,z:6,powerUp:"armor"},{x:7,y:1,z:6,powerUp:"fireball"},{x:-10,y:6.5,z:-8,powerUp:"sword"},{x:0,y:8.2,z:-13,powerUp:"shredder",hidden:!0}],r=[{x:-5,y:1,z:-4,variant:e.enemyVariant,patrolRadius:2.2},{x:5,y:1,z:-4,variant:s>=3?"spiked":e.enemyVariant,patrolRadius:2.2}],l=[...ni(0,1,0,5.5,8,"strawberry"),{x:-11,y:5.4,z:4,type:"blueberry"},{x:11,y:6.4,z:4,type:"blueberry"},{x:-10,y:7.4,z:-8,type:"strawberry"},{x:10,y:8.4,z:-8,type:"blueberry"},{x:0,y:9.1,z:-13,type:"blueberry"}];return{id:`${s}-5`,world:s,stage:5,name:`${s}-5: ${t}`,biome:e.biome,skyColor:e.skyColor,fogColor:e.fogColor,fogDensity:e.fogDensity*.8,spawn:{x:0,y:2.2,z:15},goal:{x:0,y:1,z:-6},isBossLevel:!0,bossKind:"mcdonalds_bat",bossTier:s,hasJetpack:!0,ground:void 0,platforms:i,hazards:o,enemies:r,chests:a,berries:l,checkpoints:[{x:0,y:.6,z:15}],portals:[],pillarCount:6}}function iv(){const s=[lt(0,0,0,36,36,3,{texture:"fortress",color:3485263}),lt(0,0,22,10,9,2.6,{texture:"fortress",color:4537446}),lt(-14,2.5,14,6,6,2.5,{texture:"fortress",color:5391994}),lt(14,2.5,14,6,6,2.5,{texture:"fortress",color:5391994}),lt(-14,2.5,-14,6,6,2.5,{texture:"fortress",color:5391994}),lt(14,2.5,-14,6,6,2.5,{texture:"fortress",color:5391994})],t=[{x:-20,y:-.4,z:0,w:4,h:.7,d:40,kind:"electric",damage:2},{x:20,y:-.4,z:0,w:4,h:.7,d:40,kind:"electric",damage:2},{x:0,y:-.4,z:-20,w:44,h:.7,d:4,kind:"electric",damage:2},{x:-12,y:-.4,z:20,w:14,h:.7,d:4,kind:"electric",damage:2},{x:12,y:-.4,z:20,w:14,h:.7,d:4,kind:"electric",damage:2}],e=[{x:-14,y:2.5,z:14,powerUp:"armor"},{x:14,y:2.5,z:14,powerUp:"sword"},{x:-14,y:2.5,z:-14,powerUp:"fireball"},{x:14,y:2.5,z:-14,powerUp:"shredder"}],n=[...ni(0,0,0,8.5,10,"strawberry"),{x:-14,y:3.4,z:14,type:"blueberry"},{x:14,y:3.4,z:14,type:"blueberry"},{x:-14,y:3.4,z:-14,type:"blueberry"},{x:14,y:3.4,z:-14,type:"blueberry"}];return{id:"fortress",world:7,stage:0,name:"Pikachu's Fortress",biome:"fortress",skyColor:1050656,fogColor:2035768,fogDensity:.0085,spawn:{x:0,y:1.8,z:15},goal:{x:0,y:0,z:-14},isBossLevel:!0,bossKind:"pikachu",hasJetpack:!1,ground:void 0,platforms:s,hazards:t,enemies:[{x:-8,y:0,z:-5,variant:"storm",patrolRadius:2.5},{x:8,y:0,z:-5,variant:"spiked",patrolRadius:2.5}],chests:e,berries:n,checkpoints:[{x:0,y:0,z:20}],portals:[],pillarCount:8}}const So={hub:nv(),"1-1":Ds(1,"Whispering Trail"),"1-2":Ls(1,"Canopy Climb"),"1-3":Us(1,3,"Hollow Log Ravine"),"1-4":Is(1,4,"Elder Oak Sanctuary",po["1-4"]),"1-5":Ns(1,"McDonald's Woods Arena"),"2-1":Ds(2,"Sandstone Dunes"),"2-2":Ls(2,"Sun Pyramid Ascent"),"2-3":Is(2,3,"Mirage Oasis",po["2-3"]),"2-4":Us(2,4,"Scorpion Canyon"),"2-5":Ns(2,"McDonald's Desert Arena"),"3-1":Ds(3,"Obsidian Crossing"),"3-2":Ls(3,"Caldera Spiral"),"3-3":Is(3,3,"Ember Forge",po["3-3"]),"3-4":Us(3,4,"Magma Gauntlet"),"3-5":Ns(3,"McDonald's Volcano Arena"),"4-1":Ds(4,"Crypt Entrance"),"4-2":Ls(4,"Twin Wall-Kick Shafts"),"4-3":Is(4,3,"Catacomb Vault",po["4-3"]),"4-4":Us(4,4,"Bone Bridge Keep"),"4-5":Ns(4,"McDonald's Dungeon Arena"),"5-1":Ds(5,"Palm Lagoon"),"5-2":Ls(5,"Canopy Zip-Platforms"),"5-3":Is(5,3,"Hidden Cove",po["5-3"]),"5-4":Us(5,4,"Tiki Raft Rapids"),"5-5":Ns(5,"McDonald's Beach Arena"),"6-1":Ds(6,"Spark Meadow"),"6-2":Ls(6,"High-Voltage Towers"),"6-3":Is(6,3,"Wind-Gap Express"),"6-4":Us(6,4,"Storm Citadel"),"6-5":Ns(6,"McDonald's Storm Arena"),fortress:iv()},_o=["1-1","1-2","1-3","1-4","1-5","2-1","2-2","2-3","2-4","2-5","3-1","3-2","3-3","3-4","3-5","4-1","4-2","4-3","4-4","4-5","5-1","5-2","5-3","5-4","5-5","6-1","6-2","6-3","6-4","6-5","fortress"];function dh(s){return So[s]??So.hub}function sv(s){if(s==="hub")return _o[0]??null;const t=_o.indexOf(s);return t===-1||t+1>=_o.length?null:_o[t+1]}const _n=64,xn=Math.PI*2;function Fi(s){return(s%_n+_n)%_n}function fr(s){return s<0?0:s>255?255:s|0}function En(s,t,e){const n=Fi(s),i=Fi(t);let o=n*374761393+i*668265263+e*1442695041|0;return o=Math.imul(o^o>>>13,1274126177),o=o^o>>>16,(o>>>0)/4294967296}function Ii(s,t,e,n){const i=Math.max(1,Math.floor(_n/e)),o=Fi(s)/_n*i,a=Fi(t)/_n*i,r=Math.floor(o)%i,l=Math.floor(a)%i,c=(r+1)%i,h=(l+1)%i,d=o-Math.floor(o),p=a-Math.floor(a),f=d*d*(3-2*d),g=p*p*(3-2*p),v=En(r,l,n),x=En(c,l,n),m=En(r,h,n),E=En(c,h,n),M=v+(x-v)*f,y=m+(E-m)*f;return M+(y-M)*g}function We(s,t,e){const n=e<0?0:e>1?1:e;return[s[0]+(t[0]-s[0])*n,s[1]+(t[1]-s[1])*n,s[2]+(t[2]-s[2])*n]}const ts=class ts{constructor(){_(this,"vertexColorMat",null);_(this,"shadowMat",null);_(this,"unlitVertexColorMat",null);_(this,"wireframeMat",null);_(this,"canvasCache",new Map);_(this,"textureCache",new Map);_(this,"materialCache",new Map)}static getInstance(){return ts._instance||(ts._instance=new ts),ts._instance}getTexture(t,e=1,n=1){const i=Number.isFinite(e)&&e>0?e:1,o=Number.isFinite(n)&&n>0?n:1,a=`${t}:${i}:${o}`,r=this.textureCache.get(a);if(r)return r;const l=this.getOrCreateCanvas(t),c=new wl(l);return c.magFilter=Bn,c.minFilter=Bn,c.generateMipmaps=!1,c.wrapS=To,c.wrapT=To,c.repeat.set(i,o),c.colorSpace=zn,c.needsUpdate=!0,this.textureCache.set(a,c),c}getMaterial(t,e,n=!1,i=1,o=1){const a=Number.isFinite(i)&&i>0?i:1,r=Number.isFinite(o)&&o>0?o:1,l=e!==void 0?e.toString(16):"ffffff",c=`${t}:${l}:${n?1:0}:${a}:${r}`,h=this.materialCache.get(c);if(h)return h;const d=this.getTexture(t,a,r),p=new it({map:d,color:e??16777215,vertexColors:n,flatShading:!0,side:ii});return this.materialCache.set(c,p),p}getVertexColorMaterial(){return this.vertexColorMat||(this.vertexColorMat=new it({vertexColors:!0,flatShading:!0,side:ii})),this.vertexColorMat}getShadowMaterial(){return this.shadowMat||(this.shadowMat=new Et({color:0,transparent:!0,opacity:.4,depthWrite:!1,side:cn})),this.shadowMat}getUnlitVertexColorMaterial(){return this.unlitVertexColorMat||(this.unlitVertexColorMat=new Et({vertexColors:!0,side:ii})),this.unlitVertexColorMat}getWireframeMaterial(){return this.wireframeMat||(this.wireframeMat=new Et({color:65280,wireframe:!0})),this.wireframeMat}createFlatMaterial(t){return new it({color:t,flatShading:!0})}applyVertexColors(t,e,n=.08){const i=t.getAttribute("position");if(!i)return;const o=i.count,a=new Float32Array(o*3),r=new jt;for(let l=0;l<o;l++)r.copy(e),r.r=Math.max(0,Math.min(1,r.r+(Math.random()-.5)*n)),r.g=Math.max(0,Math.min(1,r.g+(Math.random()-.5)*n)),r.b=Math.max(0,Math.min(1,r.b+(Math.random()-.5)*n)),a[l*3]=r.r,a[l*3+1]=r.g,a[l*3+2]=r.b;t.setAttribute("color",new Mn(a,3))}dispose(){var t,e,n,i;(t=this.vertexColorMat)==null||t.dispose(),(e=this.shadowMat)==null||e.dispose(),(n=this.unlitVertexColorMat)==null||n.dispose(),(i=this.wireframeMat)==null||i.dispose(),this.vertexColorMat=null,this.shadowMat=null,this.unlitVertexColorMat=null,this.wireframeMat=null;for(const o of this.materialCache.values())o.dispose();this.materialCache.clear();for(const o of this.textureCache.values())o.dispose();this.textureCache.clear(),this.canvasCache.clear()}getOrCreateCanvas(t){const e=this.canvasCache.get(t);if(e)return e;const n=document.createElement("canvas");n.width=_n,n.height=_n;const i=n.getContext("2d");if(i){const o=i.createImageData(_n,_n),a=o.data;for(let r=0;r<_n;r++)for(let l=0;l<_n;l++){const[c,h,d]=this.samplePixel(t,l,r),p=(r*_n+l)*4;a[p]=fr(c),a[p+1]=fr(h),a[p+2]=fr(d),a[p+3]=255}i.putImageData(o,0,0)}return this.canvasCache.set(t,n),n}samplePixel(t,e,n){const i=e/_n,o=n/_n;switch(t){case"grass":{const a=Ii(e,n,8,11),r=En(e,n,17),l=En(e,n>>1,23);let c=We([56,134,42],[96,182,58],a);return l>.78&&(n&1)===0?c=We(c,[142,214,72],.6):r<.16&&(c=We(c,[38,98,28],.55)),En(e>>1,n>>1,31)>.985&&(c=(e&1)===(n&1)?[245,240,170]:[175,235,95]),c}case"dirt":{const a=Ii(e,n,8,41),r=En(e,n,43);let l=We([108,68,38],[148,98,56],a);return r>.88?l=[168,134,98]:r<.14&&(l=[78,46,26]),l}case"wood":{const a=Math.floor(n/16),r=n%16,l=a%2*32,c=Fi(e+l);if(r===0||r===15||(c===0||c===32))return[66,38,18];const p=Math.sin(i*xn*3+Math.sin(o*xn*4)*1.4)*.5+.5,f=Math.sin((r+p*2.2)*1.3)*.5+.5,g=En(a,Math.floor(c/32),53);let v=We([132,82,40],[176,118,62],f*.7+g*.3);return r===1&&(v=We(v,[210,152,92],.35)),v}case"stone":{const l=Math.floor(n/16),c=n%16,h=Fi(e+l%2*16)%32;if(c===0||h===0)return[74,78,86];const d=Ii(e,n,8,61),p=En(e,n,67),f=(En(Math.floor(Fi(e+l%2*16)/32),l,71)-.5)*.25;let g=We([118,124,134],[156,162,172],ph(d+f));return c===1||h===1?g=We(g,[202,208,218],.45):(c===15||h===31)&&(g=We(g,[82,86,94],.5)),p>.92&&(g=We(g,[215,218,222],.4)),g}case"sand":{const a=Math.sin((i*4+o*2)*xn+Math.sin(i*xn*2)*.9)*.5+.5,r=En(e,n,79);let l=We([212,174,96],[244,212,134],a);return r>.87?l=[252,234,176]:r<.1&&(l=[184,142,74]),l}case"lava":{const a=Math.sin(i*xn*2+Math.cos(o*xn*3))*.25+Math.cos(o*xn*2-Math.sin(i*xn*2))*.25+.5,r=Ii(e,n,8,89),l=ph(a*.45+r*.65);return l>.78?We([255,196,32],[255,250,160],(l-.78)/.22):l>.48?We([224,52,12],[255,164,24],(l-.48)/.3):l>.34?We([92,22,14],[210,42,10],(l-.34)/.14):We([42,16,18],[86,26,18],l/.34)}case"dungeon":{const l=Math.floor(n/16),c=n%16,h=Fi(e+l%2*16)%32;if(c<=1||h<=1)return[28,22,36];const d=Ii(e,n,8,101),p=En(e,n,107);let f=We([64,56,82],[96,86,118],d);return(c===2||h===2)&&(f=We(f,[126,118,152],.35)),p<.08?f=[36,30,46]:p>.96&&(f=[68,108,72]),f}case"jungle":{const a=Ii(e,n,8,113),r=Math.sin((i*6+o*6)*xn)*Math.cos((i*6-o*6)*xn),l=En(e,n,127);let c=We([28,126,78],[74,188,92],a);return r>.45&&(c=We(c,[132,222,82],.45)),a<.28&&(c=We([46,102,106],[76,144,138],l)),l>.96&&(c=[242,210,74]),c}case"plains":{const a=e%16,r=n%16,l=Ii(e,n,8,137);let c=We([46,56,84],[74,92,128],l);const h=Math.abs(e%32-n%32)===0;if(a===0||r===0){const d=Math.sin((i+o)*xn*2)*.5+.5;c=We([70,175,225],[250,228,86],d)}else h&&(e%32<12||e%32>20)&&(c=[96,216,255]);return c}case"mcdonalds":{const r=Math.floor(e/16),l=Math.floor(n/16),c=e%16,h=n%16;if(c===0||h===0)return[246,236,210];if((r+l)%2===0)return c===1||h===1?[242,84,64]:[218,41,28];const p=Math.abs(c-8),f=h-5;return f>=0&&f<=6&&(p===3||p===1&&f<=3||p===0&&f===2)?[255,245,168]:c===1||h===1?[255,224,98]:[255,199,44]}case"fortress":{const a=e%32,r=n%32;if(a===0||r===0)return[20,18,28];if(r>=1&&r<=4)return(e+n>>2&1)===0?[245,200,36]:[32,30,42];if((a===4||a===28)&&(r===8||r===28))return[148,156,184];if(a===16&&r>=8&&r<=26||r===17&&a>=8&&a<=24)return[176,92,255];const l=Ii(e,n,8,149);return We([44,46,62],[68,72,96],l)}case"water":{const a=Math.sin((i*3+Math.sin(o*xn*2)*.2)*xn),r=Math.cos((o*3-Math.cos(i*xn*2)*.2)*xn),l=(a+r)*.25+.5;return l>.84?[220,252,255]:l>.68?[96,224,242]:We([22,134,194],[48,184,218],l)}}}};_(ts,"_instance",null);let Ao=ts;function ph(s){return s<0?0:s>1?1:s}const Ui=new A(7.5,0,5.5);function ov(s,t=Zn){const e=Math.max(0,Math.min(4,s)),n=Math.PI*.75+(e-2)*.58,i=2.6,o=Ui.x+Math.cos(n)*i,a=Ui.z+Math.sin(n)*i;return new A(o,t(o,a),a)}function fo(s,t,e,n=.04){s.computeBoundingBox();const i=s.boundingBox,o=i?i.min.y:-1,a=i?Math.max(i.max.y-i.min.y,.001):2,r=new jt(t),l=new jt(e),c=new jt,h=s.getAttribute("position"),d=new Float32Array(h.count*3);for(let p=0;p<h.count;p++){const f=je.clamp((h.getY(p)-o)/a,0,1);c.copy(l).lerp(r,f);const g=(Math.random()-.5)*n;d[p*3]=je.clamp(c.r+g,0,1),d[p*3+1]=je.clamp(c.g+g,0,1),d[p*3+2]=je.clamp(c.b+g,0,1)}s.setAttribute("color",new Mn(d,3))}function av(s,t,e,n,i){const o=Ao.getInstance(),a=new Tt,r=new Ut(4.3,5.8,1.8,14);fo(r,4892732,2846244,.05);const l=new it({vertexColors:!0,flatShading:!0});i.push(l);const c=new D(r,l);c.position.set(0,-.1,-.8),a.add(c);const h=new Ut(3.4,3.9,1.8,12);fo(h,9134624,5059340,.05);const d=new it({vertexColors:!0,flatShading:!0});i.push(d);const p=new D(h,d);p.position.set(0,.75,-.8),a.add(p);const f=new Ut(3.4,3.4,.12,12);fo(f,13937234,11042350,.04);const g=new D(f,d);g.position.set(0,1.66,-.8),a.add(g);for(let yt=0;yt<3;yt++){const q=new an(.9+yt*.75,.035,4,16),$=new it({color:7228182,flatShading:!0});i.push($);const _t=new D(q,$);_t.rotation.x=-Math.PI/2,_t.position.set(0,1.73,-.8),a.add(_t)}const v=t.createRigidBody(kt.RigidBodyDesc.fixed().setTranslation(0,.85,-.8));t.createCollider(kt.ColliderDesc.cylinder(.85,3.4),v),n.push(v);const x=o.getMaterial("wood",16777215,!1,2,1),m=[{z:3.6,y:1.18,h:.36},{z:2.9,y:1.4,h:.45}];for(const yt of m){const q=new dt(2.6,yt.h,.9),$=new D(q,x);$.position.set(0,yt.y-yt.h/2,yt.z),a.add($);const _t=t.createRigidBody(kt.RigidBodyDesc.fixed().setTranslation(0,yt.y-yt.h/2,yt.z));t.createCollider(kt.ColliderDesc.cuboid(1.3,yt.h/2,.45),_t),n.push(_t)}const E=3.2,M=2.3,y=2.6,I=1.7+M/2,w=-1.7,R=new dt(E,M,y),L=new D(R,x);L.position.set(0,I,w),a.add(L);const C=t.createRigidBody(kt.RigidBodyDesc.fixed().setTranslation(0,I,w));t.createCollider(kt.ColliderDesc.cuboid(E/2,M/2,y/2),C),n.push(C);const b=new Oe(2.65,1.85,4);fo(b,15219515,10034461,.04);const U=new it({vertexColors:!0,flatShading:!0});i.push(U);const G=new D(b,U);G.rotation.y=Math.PI/4,G.position.set(0,1.7+M+.85,w),G.userData.noCameraCollision=!0,a.add(G);const H=o.getMaterial("stone",13421772,!1,1,1),Y=new D(new dt(.5,1.1,.5),H);Y.position.set(1,1.7+M+1,w-.3),Y.userData.noCameraCollision=!0,a.add(Y);const Q=new it({color:6042646,flatShading:!0});i.push(Q);const k=new D(new dt(.95,1.5,.08),Q);k.position.set(0,1.7+.75,w+y/2+.03),a.add(k);const j=new it({color:16766287,flatShading:!0});i.push(j);const X=new D(new Xt(.08,6,6),j);X.position.set(.32,1.7+.72,w+y/2+.09),a.add(X);const ot=new Et({color:16772744});i.push(ot);const rt=new D(new Xt(.24,8,8),U);rt.position.set(0,1.7+1.85,w+y/2+.08),a.add(rt);for(const yt of[-1,1]){const q=new D(new dt(.1,.7,.7),ot);q.position.set(yt*(E/2+.02),1.7+1.25,w),a.add(q)}const ct=new it({vertexColors:!0,flatShading:!0});i.push(ct);const Bt=[{x:-1.6,y:4.9,z:-3.1,r:1.7},{x:1.5,y:5.1,z:-3,r:1.6},{x:0,y:5.7,z:-3.2,r:2}];for(const yt of Bt){const q=new Ea(yt.r,1);fo(q,5162052,2520356,.05);const $=new D(q,ct);$.position.set(yt.x,yt.y,yt.z),$.userData.noCameraCollision=!0,a.add($)}s.add(a),e.push(a)}function rv(s,t,e,n,i,o){const a=new Tt;a.position.set(t,e,n);const r=new it({color:8093832,flatShading:!0});o.push(r);for(let v=0;v<8;v++){const x=v/8*Math.PI*2,m=new D(new Ta(.28,0),r);m.scale.set(1.1,.65,1),m.position.set(Math.cos(x)*.95,.14,Math.sin(x)*.95),m.userData.noCameraCollision=!0,a.add(m)}const l=new it({color:5846550,flatShading:!0});o.push(l);for(let v=0;v<3;v++){const x=new D(new Ut(.14,.16,1.4,6),l);x.rotation.z=Math.PI/2-.15,x.rotation.y=v/3*Math.PI,x.position.y=.22,x.userData.noCameraCollision=!0,a.add(x)}const c=new it({color:9132587,flatShading:!0});o.push(c);for(let v=0;v<5;v++){const x=Math.PI*.75+(v-2)*.58,m=new D(new Ut(.38,.42,.42,7),c);m.position.set(Math.cos(x)*2.6,.18,Math.sin(x)*2.6),m.userData.noCameraCollision=!0,a.add(m)}const h=new Et({color:16738836}),d=new Et({color:16769618});o.push(h,d);const p=new D(new Oe(.45,1.1,6),h);p.position.y=.72,p.userData.noCameraCollision=!0,a.add(p);const f=new D(new Oe(.26,.75,5),d);f.position.y=.62,f.userData.noCameraCollision=!0,a.add(f);const g=new Wg(16747574,1.5,14);return g.position.set(0,1.4,0),a.add(g),s.add(a),i.push(a),{flameMeshes:[p,f],light:g}}function lv(s,t,e,n,i,o){const r=Ao.getInstance().getMaterial("stone",14212320,!1,2,1);for(const l of e){const c=new Tt,h=.7,d=l.y-h/2,p=new D(new Ut(2.4,2.8,h,8),r);p.position.set(l.x,d,l.z),c.add(p);const f=new it({color:l.color,flatShading:!0});o.push(f);const g=new D(new an(2.35,.1,5,8),f);g.rotation.x=Math.PI/2,g.rotation.z=Math.PI/8,g.position.set(l.x,l.y-.04,l.z),g.userData.noCameraCollision=!0,c.add(g);for(let v=0;v<4;v++){const x=v/4*Math.PI*2+Math.PI/4,m=new D(new hn(.24,0),f);m.position.set(l.x+Math.cos(x)*2.35,l.y+.25,l.z+Math.sin(x)*2.35),m.userData.noCameraCollision=!0,c.add(m)}if(l.worldIndex!==7){const v=t.createRigidBody(kt.RigidBodyDesc.fixed().setTranslation(l.x,d,l.z));t.createCollider(kt.ColliderDesc.cylinder(h/2,2.6),v),i.push(v)}s.add(c),n.push(c)}}function cv(s){let t=2166136261;for(let e=0;e<s.length;e++)t^=s.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}function hv(s){let t=s>>>0;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function mo(s,t,e,n=.04,i=Math.random){s.computeBoundingBox();const o=s.boundingBox,a=o?o.min.y:-1,r=o?Math.max(o.max.y-o.min.y,.001):2,l=new jt(t),c=new jt(e),h=new jt,d=s.getAttribute("position"),p=new Float32Array(d.count*3);for(let f=0;f<d.count;f++){const g=je.clamp((d.getY(f)-a)/r,0,1);h.copy(c).lerp(l,g);const v=(i()-.5)*n;p[f*3]=je.clamp(h.r+v,0,1),p[f*3+1]=je.clamp(h.g+v,0,1),p[f*3+2]=je.clamp(h.b+v,0,1)}s.setAttribute("color",new Mn(p,3))}class uv{constructor(t,e){_(this,"scene");_(this,"physicsWorld");_(this,"assets");_(this,"currentConfig",null);_(this,"objects",[]);_(this,"localMaterials",[]);_(this,"bodies",[]);_(this,"movingPlatforms",[]);_(this,"hazards",[]);_(this,"pulsingMeshes",[]);_(this,"rotatingProps",[]);_(this,"campfireAnim",null);_(this,"time",0);this.scene=t,this.physicsWorld=e,this.assets=Ao.getInstance()}loadLevel(t){this.dispose(),this.currentConfig=t,this.time=0,this.hazards=[...t.hazards];const e=hv(cv(t.id));if(this.setupSkyAndFog(t,e),this.setupLighting(t),t.ground&&this.buildGround(t,e),this.buildPlatforms(t),this.buildHazards(t),t.id==="hub"||t.biome==="hub"){av(this.scene,this.physicsWorld,this.objects,this.bodies,this.localMaterials);const i=this.getGroundHeight(Ui.x,Ui.z);this.campfireAnim=rv(this.scene,Ui.x,i,Ui.z,this.objects,this.localMaterials),lv(this.scene,this.physicsWorld,t.portals,this.objects,this.bodies,this.localMaterials)}return this.buildBiomeProps(t,e),t.bossKind==="mcdonalds_bat"?this.buildMcDonaldsArenaProps(t):(t.bossKind==="pikachu"||t.biome==="fortress")&&this.buildFortressProps(),this.physicsWorld.propagateModifiedBodyPositionsToColliders(),this.physicsWorld.updateSceneQueries(),{portals:t.portals.map(i=>({def:i,pos:new A(i.x,i.y,i.z),color:i.color})),movingPlatforms:this.movingPlatforms}}update(t){this.time+=t;for(let e=0;e<this.movingPlatforms.length;e++){const n=this.movingPlatforms[e],i=Math.sin(this.time*n.speed+n.phase)*n.range,o=n.axis==="x"?n.baseX+i:n.baseX,a=n.axis==="y"?n.baseY+i:n.baseY,r=n.axis==="z"?n.baseZ+i:n.baseZ;n.currentX=o,n.currentY=a,n.currentZ=r,n.mesh.position.set(o,a,r),n.body.setNextKinematicTranslation({x:o,y:a,z:r})}for(let e=0;e<this.pulsingMeshes.length;e++){const n=this.pulsingMeshes[e];if(n.kind==="lava"){n.mesh.position.y=n.baseY+Math.sin(this.time*2.4+n.phase)*.04;const i=n.mesh.material;"opacity"in i&&i.transparent&&(i.opacity=.78+Math.sin(this.time*4+n.phase)*.16)}else if(n.kind==="electric"){const i=n.mesh.material;i.opacity=.52+Math.abs(Math.sin(this.time*9+n.phase))*.44}else if(n.kind==="water"||n.kind==="quicksand")n.mesh.position.y=n.baseY+Math.sin(this.time*1.8+n.phase)*.04;else if(n.kind==="tesla"){const i=.9+Math.sin(this.time*10+n.phase)*.18;n.mesh.scale.setScalar(i)}else if(n.kind==="flame"){const i=.85+Math.sin(this.time*12+n.phase)*.22;n.mesh.scale.set(1,i,1)}}if(this.campfireAnim){for(let e=0;e<this.campfireAnim.flameMeshes.length;e++){const n=this.campfireAnim.flameMeshes[e],i=.85+Math.sin(this.time*14+e*2.1)*.24;n.scale.set(.95+Math.cos(this.time*9+e)*.08,i,.95),n.rotation.y+=t*(e===0?1.5:-2.2)}this.campfireAnim.light.intensity=1.35+Math.sin(this.time*11)*.35}for(let e=0;e<this.rotatingProps.length;e++){const n=this.rotatingProps[e];n.obj.rotation.y+=n.speedY*t,n.bobAmp&&(n.obj.position.y=n.baseY+Math.sin(this.time*.9+n.phase)*n.bobAmp)}}getGroundHeight(t,e){return this.currentConfig?this.currentConfig.id==="hub"?Zn(t,e):this.currentConfig.ground?-1.2+Zn(t,e)*this.currentConfig.ground.amplitude:0:0}checkHazards(t){const e=t.x,n=t.y,i=t.z,o=.35,a=1.65;for(let r=0;r<this.hazards.length;r++){const l=this.hazards[r],c=l.w*.5+o,h=l.d*.5+o;if(Math.abs(e-l.x)>c||Math.abs(i-l.z)>h)continue;const d=l.y-l.h*.5,p=l.y+l.h*.5+.25;if(n<=p&&n+a>=d)return l}return null}dispose(){for(const t of this.objects)this.scene.remove(t),t.traverse(e=>{const n=e;n.geometry&&n.geometry.dispose()});this.objects.length=0;for(const t of this.localMaterials)t.dispose();this.localMaterials.length=0;for(const t of this.bodies)this.physicsWorld.getRigidBody(t.handle)&&this.physicsWorld.removeRigidBody(t);this.bodies.length=0,this.movingPlatforms=[],this.hazards=[],this.pulsingMeshes=[],this.rotatingProps=[],this.campfireAnim=null,this.scene.fog=null,this.currentConfig=null,this.physicsWorld.propagateModifiedBodyPositionsToColliders(),this.physicsWorld.updateSceneQueries()}setupSkyAndFog(t,e){this.scene.background=new jt(t.skyColor),this.scene.fog=new Ml(t.fogColor,t.fogDensity);const n=t.biome==="volcano"||t.biome==="dungeon"||t.biome==="plains"||t.biome==="fortress",i=n?3880278:16777215,o=new Et({color:i,transparent:!0,opacity:n?.45:.85});this.localMaterials.push(o);const a=new Tt,r=10;for(let l=0;l<r;l++){const c=l/r*Math.PI*2+e()*.4,h=42+e()*28,d=28+e()*12,p=new D(new dt(8+e()*6,1.8,5+e()*4),o);p.position.set(Math.cos(c)*h,d,Math.sin(c)*h),p.rotation.y=c,p.userData.noCameraCollision=!0,a.add(p)}if(t.biome==="desert"){const l=new Et({color:16773273});this.localMaterials.push(l);const c=new D(new Xt(5.5,10,10),l);c.position.set(30,42,-75),c.userData.noCameraCollision=!0,a.add(c)}this.scene.add(a),this.objects.push(a),this.rotatingProps.push({obj:a,speedY:.015,baseY:0,phase:0})}setupLighting(t){let e=10070715,n=.55,i=16773341,o=.85,a=8900331,r=3890731;switch(t.biome){case"desert":e=16768938,n=.65,i=16774860,o=1,a=16770713,r=11894066;break;case"volcano":e=11158579,n=.58,i=16750933,o=.9,a=16737843,r=3346700;break;case"dungeon":e=6972298,n=.62,i=13156607,o=.72,a=7825066,r=2235440;break;case"jungle":e=10083788,n=.6,i=16775388,o=.92,a=7859967,r=1866322;break;case"plains":e=6715289,n=.6,i=14544639,o=.82,a=6719692,r=2239556;break;case"fortress":e=7825049,n=.65,i=16772744,o=.85,a=5583769,r=1709094;break}const l=new Kg(e,n),c=new Yg(i,o);c.position.set(35,50,28);const h=new Hg(a,r,.38);this.scene.add(l,c,h),this.objects.push(l,c,h)}buildGround(t,e){const n=t.ground,i=64,o=new js(n.size,n.size,i,i);o.rotateX(-Math.PI/2);const a=o.getAttribute("position"),r=new Float32Array(a.count*3);for(let f=0;f<a.count;f++){const g=a.getX(f),v=a.getZ(f),x=this.getGroundHeight(g,v);a.setY(f,x);const E=.78+je.clamp((x+1.5)/3,0,1)*.22+(e()-.5)*.05,M=je.clamp(E,.65,1);r[f*3]=M,r[f*3+1]=M,r[f*3+2]=M}o.setAttribute("color",new Mn(r,3)),o.computeVertexNormals();const l=Math.max(4,Math.round(n.size/6)),c=this.assets.getMaterial(n.texture,16777215,!0,l,l),h=new D(o,c);this.scene.add(h),this.objects.push(h);const d=new Float32Array(a.array),p=o.getIndex();if(p){const f=new Uint32Array(p.array),g=this.physicsWorld.createRigidBody(kt.RigidBodyDesc.fixed()),v=kt.ColliderDesc.trimesh(d,f);this.physicsWorld.createCollider(v,g),this.bodies.push(g)}}resolvePlatformTint(t,e){return t.texture?t.texture==="mcdonalds"?t.color===14720830?16768944:16777215:t.texture==="fortress"?14472949:t.texture==="stone"&&e==="volcano"?t.moving?10713204:7759467:t.moving?16773314:16777215:t.color??13421772}buildPlatforms(t){var e,n;for(const i of t.platforms){const o=new dt(i.w,i.h,i.d),a=i.texture??"stone",r=Math.max(1,Math.round(Math.max(i.w,i.d)/4)),l=Math.max(1,Math.round(Math.min(i.w,i.d)/4)),c=this.resolvePlatformTint(i,t.biome),h=this.assets.getMaterial(a,c,!1,r,l),d=new D(o,h);d.position.set(i.x,i.y,i.z);const p=new Xn(((e=i.slope)==null?void 0:e.rotX)??0,0,((n=i.slope)==null?void 0:n.rotZ)??0,"XYZ");if(d.rotation.copy(p),i.moving){const m=new dt(i.w+.14,.14,i.d+.14),E=new Et({color:16766287});this.localMaterials.push(E);const M=new D(m,E);M.position.y=-i.h/2+.08,M.userData.noCameraCollision=!0,d.add(M)}this.scene.add(d),this.objects.push(d);const f=new qs().setFromEuler(p),g=i.moving?kt.RigidBodyDesc.kinematicPositionBased():kt.RigidBodyDesc.fixed();g.setTranslation(i.x,i.y,i.z),g.setRotation({x:f.x,y:f.y,z:f.z,w:f.w});const v=this.physicsWorld.createRigidBody(g),x=kt.ColliderDesc.cuboid(i.w/2,i.h/2,i.d/2);this.physicsWorld.createCollider(x,v),this.bodies.push(v),i.moving&&this.movingPlatforms.push({mesh:d,body:v,baseX:i.x,baseY:i.y,baseZ:i.z,axis:i.moving.axis,range:i.moving.range,speed:i.moving.speed,phase:i.moving.phase??0,currentX:i.x,currentY:i.y,currentZ:i.z})}}buildHazards(t){for(let e=0;e<t.hazards.length;e++){const n=t.hazards[e],i=Math.max(1,Math.round(n.w/4)),o=Math.max(1,Math.round(n.d/4));if(n.kind==="lava"){const a=new dt(n.w,n.h,n.d),r=this.assets.getMaterial("lava",16777215,!1,i,o),l=new D(a,r);l.position.set(n.x,n.y,n.z),l.userData.noCameraCollision=!0,this.scene.add(l),this.objects.push(l),this.pulsingMeshes.push({mesh:l,baseY:n.y,kind:"lava",phase:e*.8});const c=this.physicsWorld.createRigidBody(kt.RigidBodyDesc.fixed().setTranslation(n.x,n.y-.12,n.z));this.physicsWorld.createCollider(kt.ColliderDesc.cuboid(n.w/2,n.h/2,n.d/2),c),this.bodies.push(c)}else if(n.kind==="quicksand"){const a=t.biome==="jungle",r=a?"water":"sand",l=a?6746858:12880699,c=new dt(n.w,n.h,n.d),h=a?new it({map:this.assets.getTexture("water",i,o),color:8975854,transparent:!0,opacity:.86,flatShading:!0}):this.assets.getMaterial(r,l,!1,i,o);a&&this.localMaterials.push(h);const d=new D(c,h);d.position.set(n.x,n.y,n.z),d.userData.noCameraCollision=!0,this.scene.add(d),this.objects.push(d),this.pulsingMeshes.push({mesh:d,baseY:n.y,kind:a?"water":"quicksand",phase:e*.7});const p=this.physicsWorld.createRigidBody(kt.RigidBodyDesc.fixed().setTranslation(n.x,n.y-.18,n.z));this.physicsWorld.createCollider(kt.ColliderDesc.cuboid(n.w/2,n.h/2,n.d/2),p),this.bodies.push(p)}else if(n.kind==="spikes"){const a=new Tt;a.position.set(n.x,n.y,n.z);const r=new it({color:3881026,flatShading:!0}),l=new it({color:13686494,flatShading:!0});this.localMaterials.push(r,l);const c=new D(new dt(n.w,.14,n.d),r);c.position.y=-n.h*.35,c.userData.noCameraCollision=!0,a.add(c);const h=Math.max(2,Math.min(8,Math.floor(n.w/.85))),d=Math.max(2,Math.min(8,Math.floor(n.d/.85)));for(let p=0;p<h;p++)for(let f=0;f<d;f++){const g=-n.w*.4+(h===1?0:p/(h-1)*n.w*.8),v=-n.d*.4+(d===1?0:f/(d-1)*n.d*.8),x=new D(new Oe(.22,Math.max(.55,n.h),4),l);x.position.set(g,0,v),x.userData.noCameraCollision=!0,a.add(x)}this.scene.add(a),this.objects.push(a)}else if(n.kind==="electric"){const a=new dt(n.w,n.h,n.d),r=new Et({color:3403519,transparent:!0,opacity:.72});this.localMaterials.push(r);const l=new D(a,r);l.position.set(n.x,n.y,n.z),l.userData.noCameraCollision=!0;const c=new Et({color:16772642,wireframe:!0});this.localMaterials.push(c);const h=new D(new dt(n.w,n.h+.04,n.d),c);h.userData.noCameraCollision=!0,l.add(h),this.scene.add(l),this.objects.push(l),this.pulsingMeshes.push({mesh:l,baseY:n.y,kind:"electric",phase:e*1.1});const d=this.physicsWorld.createRigidBody(kt.RigidBodyDesc.fixed().setTranslation(n.x,n.y-.12,n.z));this.physicsWorld.createCollider(kt.ColliderDesc.cuboid(n.w/2,n.h/2,n.d/2),d),this.bodies.push(d)}}}isSpotClear(t,e,n,i=3.5){if(Math.hypot(e-t.spawn.x,n-t.spawn.z)<6||t.goal&&Math.hypot(e-t.goal.x,n-t.goal.z)<6)return!1;if(t.id==="hub"){if(e*e+n*n<64)return!1;const o=e-Ui.x,a=n-Ui.z;if(o*o+a*a<30)return!1;const r=e+15,l=n-15;if(r*r+l*l<64)return!1}for(const o of t.portals){const a=e-o.x,r=n-o.z;if(a*a+r*r<34)return!1}for(const o of t.platforms)if(Math.abs(e-o.x)<o.w*.5+i&&Math.abs(n-o.z)<o.d*.5+i)return!1;for(const o of t.hazards)if(Math.abs(e-o.x)<o.w*.5+1.5&&Math.abs(n-o.z)<o.d*.5+1.5)return!1;return!0}buildBiomeProps(t,e){const n=t.treeCount??0;if(n>0){const o=t.biome==="jungle",a=t.ground?t.ground.size-12:110;for(let r=0;r<n;r++){let l=!1;for(let c=0;c<35&&!l;c++){const h=(e()-.5)*a,d=(e()-.5)*a;if(!this.isSpotClear(t,h,d,3.2))continue;const p=t.ground?this.getGroundHeight(h,d):-.7;if(!t.ground){const f=this.assets.getMaterial(o?"sand":"grass",16777215,!1,1,1),g=new D(new Ut(1.5,2.1,.9,7),f);g.position.set(h,p-.35,d),g.userData.noCameraCollision=!0,this.scene.add(g),this.objects.push(g)}o?this.buildPalmTree(h,p,d,e):this.buildForestTree(h,p,d,e,!!t.ground),l=!0}}}if(t.id==="hub"){const o=[{x:11,z:16},{x:-10,z:12},{x:14,z:-13},{x:-23,z:9},{x:24,z:-3},{x:-22,z:-14}];for(let a=0;a<o.length;a++){const r=o[a],l=this.getGroundHeight(r.x,r.z);this.buildRockFormation(r.x,l,r.z,a%2===0,e)}}const i=t.pillarCount??0;t.biome==="desert"?this.buildDesertProps(t,i,e):t.biome==="volcano"?this.buildVolcanoProps(t,i,e):t.biome==="dungeon"?this.buildDungeonProps(t,e):t.biome==="plains"&&this.buildThunderPlainsProps(t,i,e)}buildForestTree(t,e,n,i,o){const a=new Tt,r=2.3+i()*2,l=.25+i()*.14,c=new Ut(l*.72,l,r+.4,6);mo(c,8410155,4533012,.04,i);const h=new it({vertexColors:!0,flatShading:!0});this.localMaterials.push(h);const d=new D(c,h);d.position.y=(r-.3)/2,a.add(d);const p=1.3+i()*.9,f=new it({vertexColors:!0,flatShading:!0});if(this.localMaterials.push(f),i()>.45){const g=new Oe(p,p*2.1,7);mo(g,4503611,1992226,.05,i);const v=new D(g,f);v.position.y=r+p*.75,v.userData.noCameraCollision=!0,a.add(v)}else{const g=new Ea(p,1);mo(g,5227585,2388004,.05,i);const v=new D(g,f);v.position.y=r+p*.55,v.userData.noCameraCollision=!0,a.add(v)}if(a.position.set(t,e,n),this.scene.add(a),this.objects.push(a),o){const g=this.physicsWorld.createRigidBody(kt.RigidBodyDesc.fixed().setTranslation(t,e+r/2,n));this.physicsWorld.createCollider(kt.ColliderDesc.cylinder(r/2,l),g),this.bodies.push(g)}}buildPalmTree(t,e,n,i){const o=new Tt,a=new it({color:10251067,flatShading:!0}),r=new it({color:3717192,flatShading:!0});this.localMaterials.push(a,r);const l=4.2+i()*1.8,c=(i()-.5)*.35,h=new D(new Ut(.18,.3,l,6),a);h.position.y=l/2,h.rotation.z=c,h.userData.noCameraCollision=!0,o.add(h);const d=-Math.sin(c)*(l*.5),p=l*.96;for(let f=0;f<6;f++){const g=f/6*Math.PI*2,v=new D(new Oe(.45,2.3,4),r);v.position.set(d+Math.cos(g)*1,p,Math.sin(g)*1),v.rotation.z=-Math.cos(g)*1.1,v.rotation.x=Math.sin(g)*1.1,v.userData.noCameraCollision=!0,o.add(v)}o.position.set(t,e,n),this.scene.add(o),this.objects.push(o)}buildRockFormation(t,e,n,i,o){const a=new Tt,r=new it({vertexColors:!0,flatShading:!0});if(this.localMaterials.push(r),i){const h=new Ut(.9900000000000001,1.2100000000000002,3.8,6,2);mo(h,9278361,4935766,.05,o);const d=new D(h,r);d.position.y=3.8/2-.2,a.add(d);const p=this.physicsWorld.createRigidBody(kt.RigidBodyDesc.fixed().setTranslation(t,e+3.8/2-.2,n));this.physicsWorld.createCollider(kt.ColliderDesc.cuboid(2.2*.48,3.8/2,2.2*.48),p),this.bodies.push(p)}else{const l=1.4+o()*.6,c=new Ta(l,0);mo(c,9475482,5132888,.05,o);const h=new D(c,r);h.position.y=l*.45,a.add(h);const d=this.physicsWorld.createRigidBody(kt.RigidBodyDesc.fixed().setTranslation(t,e+l*.45,n));this.physicsWorld.createCollider(kt.ColliderDesc.ball(l*.78),d),this.bodies.push(d)}a.position.set(t,e,n),this.scene.add(a),this.objects.push(a)}buildDesertProps(t,e,n){const i=this.assets.getMaterial("sand",14726490,!1,4,4),o=new it({color:3905085,flatShading:!0});this.localMaterials.push(o);const a=[{x:-38,z:-40,r:12,h:15},{x:42,z:-60,r:15,h:19},{x:-36,z:-88,r:14,h:17},{x:35,z:-18,r:10,h:12}];for(const r of a){const l=new D(new Oe(r.r,r.h,4),i);l.rotation.y=Math.PI/4,l.position.set(r.x,r.h/2-2,r.z),l.userData.noCameraCollision=!0,this.scene.add(l),this.objects.push(l)}for(let r=0;r<e;r++){const l=(n()-.5)*75,c=-n()*85;if(!this.isSpotClear(t,l,c,3))continue;const h=t.ground?this.getGroundHeight(l,c):-1,d=new Tt,p=2.6+n()*1.4,f=new D(new Ut(.32,.36,p,6),o);f.position.y=p/2,f.userData.noCameraCollision=!0,d.add(f);for(const g of[-1,1]){const v=new D(new Ut(.2,.22,1.1,5),o);v.position.set(g*.5,p*.62,0),v.rotation.z=g*-.45,v.userData.noCameraCollision=!0,d.add(v)}d.position.set(l,h,c),this.scene.add(d),this.objects.push(d)}}buildVolcanoProps(t,e,n){const i=new it({color:2892326,flatShading:!0}),o=new Et({color:16734751});this.localMaterials.push(i,o);for(let a=0;a<e+4;a++){const l=(a%2===0?-1:1)*(22+n()*18),c=10-n()*105,h=8+n()*14,d=2.4+n()*2.5,p=new D(new Oe(d,h,5),i);if(p.position.set(l,h/2-3,c),p.userData.noCameraCollision=!0,this.scene.add(p),this.objects.push(p),a%3===0){const f=new D(new Xt(d*.3,6,6),o);f.position.set(l,h-3,c),f.userData.noCameraCollision=!0,this.scene.add(f),this.objects.push(f)}}for(const a of t.checkpoints)this.spawnTorch(a.x-2.6,a.y,a.z),this.spawnTorch(a.x+2.6,a.y,a.z)}buildDungeonProps(t,e){const n=this.assets.getMaterial("dungeon",16777215,!1,1,3);for(let i=0;i<8;i++){const a=(i%2===0?-1:1)*(16+e()*10),r=-i*12,l=new D(new dt(2.4,16,2.4),n);l.position.set(a,6,r),l.userData.noCameraCollision=!0,this.scene.add(l),this.objects.push(l)}for(const i of t.checkpoints)this.spawnTorch(i.x-2.8,i.y,i.z),this.spawnTorch(i.x+2.8,i.y,i.z)}buildThunderPlainsProps(t,e,n){const i=new it({color:3885158,flatShading:!0}),o=new it({color:13927746,flatShading:!0}),a=new Et({color:5631743});this.localMaterials.push(i,o,a);for(let r=0;r<e;r++){const c=(r%2===0?-1:1)*(16+n()*14),h=-r*10,d=t.ground?this.getGroundHeight(c,h):-1.5,p=new Tt;p.position.set(c,d,h);const f=new D(new Ut(.4,.7,7.5,6),i);f.position.y=3.75,f.userData.noCameraCollision=!0,p.add(f);for(let v=0;v<3;v++){const x=new D(new an(.75,.14,5,10),o);x.rotation.x=Math.PI/2,x.position.y=5.2+v*.75,x.userData.noCameraCollision=!0,p.add(x)}const g=new D(new Xt(.65,8,8),a);g.position.y=7.7,g.userData.noCameraCollision=!0,p.add(g),this.pulsingMeshes.push({mesh:g,baseY:7.7,kind:"tesla",phase:r*.9}),this.scene.add(p),this.objects.push(p)}}spawnTorch(t,e,n){const i=new it({color:4930094,flatShading:!0}),o=new Et({color:16746530});this.localMaterials.push(i,o);const a=new Tt;a.position.set(t,e,n);const r=new D(new Ut(.12,.16,1.5,5),i);r.position.y=.75,r.userData.noCameraCollision=!0,a.add(r);const l=new D(new Oe(.28,.65,5),o);l.position.y=1.72,l.userData.noCameraCollision=!0,a.add(l),this.pulsingMeshes.push({mesh:l,baseY:1.72,kind:"flame",phase:t+n}),this.scene.add(a),this.objects.push(a)}buildMcDonaldsArenaProps(t){const e=new it({color:16762668,flatShading:!0}),n=new it({color:14297372,flatShading:!0}),i=new it({color:16183e3,flatShading:!0});this.localMaterials.push(e,n,i);const o=new Tt;o.position.set(0,8.2,-16.5);const a=new D(new dt(15,2.2,1.4),n);a.position.set(0,1.1,0),a.userData.noCameraCollision=!0,o.add(a);const r=new el([new A(-6.2,1.2,0),new A(-5,9.2,0),new A(-3,11.4,0),new A(-1,9,0),new A(0,4.4,0)]),l=new el([new A(0,4.4,0),new A(1,9,0),new A(3,11.4,0),new A(5,9.2,0),new A(6.2,1.2,0)]);for(const f of[r,l]){const g=new D(new El(f,20,.58,8,!1),e);g.userData.noCameraCollision=!0,o.add(g)}this.scene.add(o),this.objects.push(o);const c=new it({color:14851390,flatShading:!0}),h=new it({color:6041108,flatShading:!0}),d=new it({color:5162043,flatShading:!0});this.localMaterials.push(c,h,d);for(const f of t.platforms)if(f.color===14720830){const g=new Tt;g.position.set(f.x,f.y-f.h/2-.65,f.z);const v=new D(new Ut(2.5,2.5,.65,10),h);v.userData.noCameraCollision=!0,g.add(v);const x=new D(new Ut(2.7,2.7,.25,10),d);x.position.y=.42,x.userData.noCameraCollision=!0,g.add(x);const m=new D(new Ut(2.4,2.1,.5,10),c);m.position.y=-.52,m.userData.noCameraCollision=!0,g.add(m),this.scene.add(g),this.objects.push(g)}const p=[{x:-17,z:-15},{x:17,z:-15},{x:-17,z:14},{x:17,z:14}];for(const f of p){const g=new Tt;g.position.set(f.x,-.5,f.z);const v=new D(new Ut(1.6,1.1,3.4,4),n);v.rotation.y=Math.PI/4,v.position.y=1.7,v.userData.noCameraCollision=!0,g.add(v);for(let x=-2;x<=2;x++){const m=new D(new dt(.28,1.9,.28),e);m.position.set(x*.42,3.8+Math.abs(x)%2*.3,x%2*.2),m.rotation.z=x*.07,m.userData.noCameraCollision=!0,g.add(m)}this.scene.add(g),this.objects.push(g)}}buildFortressProps(){const t=new it({color:2761789,flatShading:!0}),e=new Et({color:16772642}),n=new Et({color:11158783});this.localMaterials.push(t,e,n);const i=[{x:-19,z:-19},{x:19,z:-19},{x:-19,z:19},{x:19,z:19}];for(let c=0;c<i.length;c++){const h=i[c],d=new Tt;d.position.set(h.x,0,h.z);const p=new D(new Ut(.8,1.6,14,6),t);p.position.y=6.5,p.userData.noCameraCollision=!0,d.add(p);const f=new D(new an(1.3,.22,6,12),e);f.rotation.x=Math.PI/2,f.position.y=12.2,f.userData.noCameraCollision=!0,d.add(f);const g=new D(new Xt(1.1,8,8),n);g.position.y=14.3,g.userData.noCameraCollision=!0,d.add(g),this.pulsingMeshes.push({mesh:g,baseY:14.3,kind:"tesla",phase:c*1.2}),this.scene.add(d),this.objects.push(d)}const o=new Tt;o.position.set(0,4.5,-18.2);const a=new D(new dt(16,9,1.2),t);a.userData.noCameraCollision=!0,o.add(a);const r=new D(new dt(1.1,4.5,1.5),e);r.position.set(-.5,1.5,0),r.rotation.z=-.35,r.userData.noCameraCollision=!0,o.add(r);const l=new D(new dt(1.1,4.5,1.5),e);l.position.set(.5,-1.3,0),l.rotation.z=-.35,l.userData.noCameraCollision=!0,o.add(l),this.scene.add(o),this.objects.push(o)}}const fh={none:{icon:"—",label:"Empty",border:"rgba(255,255,255,0.35)",bg:"rgba(0,0,0,0.4)"},armor:{icon:"🛡️",label:"Armor",border:"#c0d6ff",bg:"rgba(40,65,110,0.75)"},sword:{icon:"⚔️",label:"Sword",border:"#ffd84d",bg:"rgba(95,70,20,0.75)"},fireball:{icon:"🔥",label:"Fire Balls",border:"#ff7b29",bg:"rgba(110,38,10,0.75)"},shredder:{icon:"🥩",label:"Shredder",border:"#ff4d6d",bg:"rgba(105,22,42,0.75)"}};class dv{constructor(){_(this,"container");_(this,"styleEl");_(this,"healthWrap");_(this,"healthCanvas");_(this,"healthCtx");_(this,"livesLabel");_(this,"berryCount");_(this,"blueberryCount");_(this,"oneUpProgressLabel");_(this,"oneUpBarFill");_(this,"levelLabel");_(this,"koopaBadge");_(this,"koopaText");_(this,"muteBadge");_(this,"toastStack");_(this,"activeToasts",[]);_(this,"jetpackPanel");_(this,"jetpackFill");_(this,"jetpackPctLabel");_(this,"bossPanel");_(this,"bossNameLabel");_(this,"bossHpText");_(this,"bossBarFill");_(this,"powerUpBox");_(this,"powerUpIcon");_(this,"powerUpLabel");_(this,"prevHealth",-1);_(this,"healPulseUntil",0);this.styleEl=document.createElement("style"),this.styleEl.textContent=`
      @keyframes rbqHudToastIn {
        0% { opacity: 0; transform: translateY(-10px) scale(0.9); }
        15% { opacity: 1; transform: translateY(0) scale(1.04); }
        25% { transform: translateY(0) scale(1); }
        85% { opacity: 1; transform: translateY(0) scale(1); }
        100% { opacity: 0; transform: translateY(-8px) scale(0.96); }
      }
      @keyframes rbqHealPulse {
        0%, 100% { box-shadow: 0 0 8px 2px rgba(90, 255, 130, 0.55); }
        50% { box-shadow: 0 0 22px 8px rgba(130, 255, 160, 0.95); }
      }
      .rbq-heal-glow {
        animation: rbqHealPulse 0.45s ease-in-out infinite;
        border-radius: 50%;
      }
    `,this.container=document.createElement("div"),Object.assign(this.container.style,{position:"fixed",top:"0",left:"0",width:"100%",height:"100%",pointerEvents:"none",zIndex:"100",fontFamily:"'Courier New', monospace",color:"#fff",userSelect:"none"});const t=this._panel();Object.assign(t.style,{position:"absolute",top:"12px",left:"12px",display:"flex",alignItems:"center",gap:"10px",border:"2px solid rgba(255,255,255,0.25)"}),this.healthWrap=document.createElement("div"),Object.assign(this.healthWrap.style,{width:"64px",height:"64px",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"50%",flexShrink:"0"}),this.healthCanvas=document.createElement("canvas"),this.healthCanvas.width=64,this.healthCanvas.height=64,this.healthCanvas.style.width="64px",this.healthCanvas.style.height="64px",this.healthCtx=this.healthCanvas.getContext("2d"),this.healthWrap.appendChild(this.healthCanvas),t.appendChild(this.healthWrap);const e=document.createElement("div");e.style.display="flex",e.style.alignItems="center",e.style.gap="6px";const n=document.createElement("div");Object.assign(n.style,{width:"20px",height:"20px",borderRadius:"50%",background:"#e84040",border:"2px solid #fff",boxShadow:"0 2px 0 #000",flexShrink:"0"}),e.appendChild(n),this.livesLabel=document.createElement("span"),this._retroText(this.livesLabel,"18px","bold"),this.livesLabel.textContent="×3",e.appendChild(this.livesLabel),t.appendChild(e),this.container.appendChild(t);const i=this._panel();Object.assign(i.style,{position:"absolute",top:"12px",left:"50%",transform:"translateX(-50%)",display:"flex",flexDirection:"column",alignItems:"center",gap:"4px",border:"2px solid rgba(255,255,255,0.25)",minWidth:"210px"});const o=document.createElement("div");Object.assign(o.style,{display:"flex",alignItems:"center",gap:"18px"});const a=document.createElement("span");this._retroText(a,"18px","bold"),a.textContent="🍓 ",this.berryCount=document.createElement("span"),this.berryCount.textContent="0",a.appendChild(this.berryCount),o.appendChild(a);const r=document.createElement("span");this._retroText(r,"18px","bold"),r.textContent="🫐 ",this.blueberryCount=document.createElement("span"),this.blueberryCount.textContent="0",r.appendChild(this.blueberryCount),o.appendChild(r),i.appendChild(o);const l=document.createElement("div");Object.assign(l.style,{display:"flex",alignItems:"center",gap:"8px",width:"100%"});const c=document.createElement("div");Object.assign(c.style,{flex:"1",height:"6px",background:"rgba(0,0,0,0.65)",border:"1px solid rgba(255,255,255,0.35)",borderRadius:"3px",overflow:"hidden"}),this.oneUpBarFill=document.createElement("div"),Object.assign(this.oneUpBarFill.style,{width:"0%",height:"100%",background:"linear-gradient(90deg, #ff5f6d, #ffd84d)",transition:"width 0.15s ease-out"}),c.appendChild(this.oneUpBarFill),l.appendChild(c),this.oneUpProgressLabel=document.createElement("span"),this._retroText(this.oneUpProgressLabel,"11px","bold"),this.oneUpProgressLabel.style.color="#ffe270",this.oneUpProgressLabel.textContent="(00/100 to 1-UP)",l.appendChild(this.oneUpProgressLabel),i.appendChild(l),this.container.appendChild(i);const h=document.createElement("div");Object.assign(h.style,{position:"absolute",top:"12px",right:"12px",display:"flex",flexDirection:"column",alignItems:"flex-end",gap:"6px"});const d=this._panel();d.style.border="2px solid rgba(255,255,255,0.25)",this.levelLabel=document.createElement("span"),this._retroText(this.levelLabel,"15px","bold"),this.levelLabel.style.color="#fff8c8",this.levelLabel.textContent="Berry Grove",d.appendChild(this.levelLabel),h.appendChild(d);const p=document.createElement("div");Object.assign(p.style,{display:"flex",alignItems:"center",gap:"6px"}),this.koopaBadge=this._panel(),Object.assign(this.koopaBadge.style,{padding:"4px 9px",border:"2px solid rgba(110, 210, 255, 0.55)",display:"flex",alignItems:"center",gap:"5px"}),this.koopaText=document.createElement("span"),this._retroText(this.koopaText,"13px","bold"),this.koopaText.textContent="🐢 0/5",this.koopaBadge.appendChild(this.koopaText),p.appendChild(this.koopaBadge),this.muteBadge=this._panel(),Object.assign(this.muteBadge.style,{padding:"4px 9px",border:"2px solid rgba(255,255,255,0.35)"}),this._retroText(this.muteBadge,"13px","bold"),this.muteBadge.textContent="🔊 [M]",p.appendChild(this.muteBadge),h.appendChild(p),this.container.appendChild(h),this.toastStack=document.createElement("div"),Object.assign(this.toastStack.style,{position:"absolute",top:"84px",left:"50%",transform:"translateX(-50%)",display:"flex",flexDirection:"column",alignItems:"center",gap:"6px",zIndex:"120"}),this.container.appendChild(this.toastStack),this.jetpackPanel=this._panel(),Object.assign(this.jetpackPanel.style,{position:"absolute",bottom:"54px",left:"12px",display:"none",flexDirection:"column",gap:"4px",minWidth:"215px",border:"2px solid #5ee7ff",background:"rgba(10, 25, 45, 0.78)"});const f=document.createElement("div");Object.assign(f.style,{display:"flex",justifyContent:"space-between",alignItems:"center"});const g=document.createElement("span");this._retroText(g,"12px","bold"),g.style.color="#7ef9ff",g.textContent="🚀 JETPACK FUEL",f.appendChild(g),this.jetpackPctLabel=document.createElement("span"),this._retroText(this.jetpackPctLabel,"12px","bold"),this.jetpackPctLabel.textContent="100%",f.appendChild(this.jetpackPctLabel),this.jetpackPanel.appendChild(f);const v=document.createElement("div");Object.assign(v.style,{width:"100%",height:"10px",background:"rgba(0,0,0,0.75)",border:"1px solid rgba(255,255,255,0.45)",borderRadius:"4px",overflow:"hidden"}),this.jetpackFill=document.createElement("div"),Object.assign(this.jetpackFill.style,{width:"100%",height:"100%",background:"linear-gradient(90deg, #ff7b00, #ffd84d, #56f0ff)",transition:"width 0.06s linear"}),v.appendChild(this.jetpackFill),this.jetpackPanel.appendChild(v);const x=document.createElement("span");this._retroText(x,"10px"),x.style.color="#cceeff",x.textContent="Space: Fly | Shift: Turbo Boost",this.jetpackPanel.appendChild(x),this.container.appendChild(this.jetpackPanel),this.bossPanel=this._panel(),Object.assign(this.bossPanel.style,{position:"absolute",bottom:"56px",left:"50%",transform:"translateX(-50%)",width:"min(480px, calc(100% - 340px))",minWidth:"280px",display:"none",flexDirection:"column",gap:"5px",padding:"8px 14px",border:"3px solid #ffd84d",background:"rgba(28, 6, 12, 0.85)",boxShadow:"0 4px 16px rgba(0,0,0,0.7)"});const m=document.createElement("div");Object.assign(m.style,{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"10px"}),this.bossNameLabel=document.createElement("span"),this._retroText(this.bossNameLabel,"14px","bold"),this.bossNameLabel.style.color="#ffd84d",this.bossNameLabel.textContent="BOSS",m.appendChild(this.bossNameLabel),this.bossHpText=document.createElement("span"),this._retroText(this.bossHpText,"13px","bold"),this.bossHpText.style.color="#ffaaaa",this.bossHpText.textContent="9 / 9",m.appendChild(this.bossHpText),this.bossPanel.appendChild(m);const E=document.createElement("div");Object.assign(E.style,{width:"100%",height:"16px",background:"#1a0608",border:"2px solid #ffd84d",borderRadius:"4px",overflow:"hidden"}),this.bossBarFill=document.createElement("div"),Object.assign(this.bossBarFill.style,{width:"100%",height:"100%",background:"linear-gradient(90deg, #c9182b 0%, #ff3b30 55%, #ffb703 100%)",transition:"width 0.12s ease-out"}),E.appendChild(this.bossBarFill),this.bossPanel.appendChild(E),this.container.appendChild(this.bossPanel);const M=this._panel();Object.assign(M.style,{position:"absolute",bottom:"12px",left:"12px",padding:"5px 9px",background:"rgba(0,0,0,0.45)",maxWidth:"calc(100% - 175px)"});const y=document.createElement("span");this._retroText(y,"11px"),y.style.color="rgba(255,255,255,0.9)",y.textContent="Click: Lock Mouse (Right-Drag) | WASD: Move | Shift: Sprint / Air Ground-Pound | Space×3: Triple Jump | Left-Click: Attack | P/Esc: Pause",M.appendChild(y),this.container.appendChild(M),this.powerUpBox=document.createElement("div"),Object.assign(this.powerUpBox.style,{position:"absolute",bottom:"12px",right:"12px",minWidth:"132px",height:"58px",padding:"6px 12px",border:"2px solid rgba(255,255,255,0.4)",borderRadius:"8px",background:"rgba(0,0,0,0.55)",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",boxShadow:"0 3px 0 rgba(0,0,0,0.6)"}),this.powerUpIcon=document.createElement("span"),this.powerUpIcon.style.fontSize="24px",this.powerUpIcon.textContent="—",this.powerUpBox.appendChild(this.powerUpIcon);const I=document.createElement("div");Object.assign(I.style,{display:"flex",flexDirection:"column",alignItems:"flex-start",lineHeight:"1.15"});const w=document.createElement("span");this._retroText(w,"9px","bold"),w.style.color="#bbb",w.textContent="POWER-UP",I.appendChild(w),this.powerUpLabel=document.createElement("span"),this._retroText(this.powerUpLabel,"13px","bold"),this.powerUpLabel.textContent="Empty",I.appendChild(this.powerUpLabel),this.powerUpBox.appendChild(I),this.container.appendChild(this.powerUpBox)}mount(){this.styleEl.parentElement||document.head.appendChild(this.styleEl),this.container.parentElement||document.body.appendChild(this.container)}dispose(){for(const t of this.activeToasts)window.clearTimeout(t.timeoutId),t.el.remove();this.activeToasts=[],this.container.remove(),this.styleEl.remove()}setVisible(t){this.container.style.display=t?"block":"none"}showToast(t,e="#ffd84d"){const n=document.createElement("div");for(Object.assign(n.style,{padding:"7px 16px",background:"rgba(12, 10, 28, 0.88)",border:`2px solid ${e}`,borderRadius:"6px",boxShadow:`0 0 14px ${e}66, 0 3px 0 #000`,animation:"rbqHudToastIn 2.4s ease forwards",whiteSpace:"nowrap"}),this._retroText(n,"15px","bold"),n.style.color=e,n.textContent=t,this.toastStack.appendChild(n);this.toastStack.children.length>4&&this.activeToasts.length>0;){const o=this.activeToasts.shift();o&&(window.clearTimeout(o.timeoutId),o.el.remove())}const i=window.setTimeout(()=>{n.remove(),this.activeToasts=this.activeToasts.filter(o=>o.el!==n)},2400);this.activeToasts.push({el:n,timeoutId:i})}update(t){const e=performance.now();this.prevHealth>=0&&t.health>this.prevHealth&&(this.healPulseUntil=e+1100),this.prevHealth=t.health;const n=e<this.healPulseUntil;this.healthWrap.classList.toggle("rbq-heal-glow",n),this._drawHealthPie(t.health,t.maxHealth,n,e),this.livesLabel.textContent=`×${t.lives}`,this.berryCount.textContent=String(t.berries),this.blueberryCount.textContent=String(t.blueBerries);const i=Math.max(0,Math.min(99,Math.floor(t.berryPoints%100))),o=String(i).padStart(2,"0");this.oneUpProgressLabel.textContent=`(${o}/100 to 1-UP)`,this.oneUpBarFill.style.width=`${i}%`,this.levelLabel.textContent=t.levelName;const a=Math.max(0,Math.min(5,t.neutralKoopasSaved));this.koopaText.textContent=`🐢 ${a}/5`,a>=5?(this.koopaBadge.style.borderColor="#5dff7a",this.koopaText.style.color="#9effad"):(this.koopaBadge.style.borderColor="rgba(110, 210, 255, 0.55)",this.koopaText.style.color="#ffffff"),this.muteBadge.textContent=t.muted?"🔇 [M]":"🔊 [M]",this.muteBadge.style.borderColor=t.muted?"rgba(255, 100, 100, 0.7)":"rgba(255, 255, 255, 0.35)";const r=fh[t.powerUp]??fh.none;if(this.powerUpIcon.textContent=r.icon,this.powerUpLabel.textContent=t.powerUp==="armor"?`${r.label} ×${Math.max(1,t.armorHits)}`:r.label,this.powerUpBox.style.borderColor=r.border,this.powerUpBox.style.background=r.bg,t.jetpackActive){this.jetpackPanel.style.display="flex";const l=Math.max(1,t.jetpackMaxFuel),c=Math.max(0,Math.min(100,t.jetpackFuel/l*100));this.jetpackFill.style.width=`${c.toFixed(1)}%`,this.jetpackPctLabel.textContent=`${Math.round(c)}%`}else this.jetpackPanel.style.display="none";if(t.bossActive){this.bossPanel.style.display="flex";const l=Math.max(1,t.bossMaxHealth),c=Math.max(0,t.bossHealth),h=Math.max(0,Math.min(100,c/l*100));this.bossNameLabel.textContent=t.bossName||"BOSS",this.bossHpText.textContent=`${Math.ceil(c)} / ${l}`,this.bossBarFill.style.width=`${h.toFixed(1)}%`}else this.bossPanel.style.display="none"}_drawHealthPie(t,e,n,i){const o=this.healthCtx,a=32,r=32,l=27,c=Math.max(1,e),h=Math.max(0,Math.min(1,t/c)),d=c<=12&&Number.isInteger(c)?c:8,p=t<=0?0:Math.max(1,Math.round(h*d));if(o.clearRect(0,0,64,64),n){const x=.55+.45*Math.sin(i*.02);o.beginPath(),o.arc(a,r,l+4,0,Math.PI*2),o.fillStyle=`rgba(110, 255, 150, ${.35*x})`,o.fill()}const f=Math.PI*2/d,g=-Math.PI/2;let v="#44dd44";n?v="#80ff9f":h<=.25?v="#ff4444":h<=.5&&(v="#ffcc33");for(let x=0;x<d;x++){const m=g+x*f,E=m+f-.04;o.beginPath(),o.moveTo(a,r),o.arc(a,r,l,m,E),o.closePath(),o.fillStyle=x<p?v:"#1a1a1a",o.fill(),o.strokeStyle=n?"rgba(180,255,200,0.65)":"rgba(255,255,255,0.28)",o.lineWidth=1,o.stroke()}o.beginPath(),o.arc(a,r,l*.36,0,Math.PI*2),o.fillStyle="rgba(0,0,0,0.72)",o.fill(),o.fillStyle="#fff",o.font='bold 11px "Courier New", monospace',o.textAlign="center",o.textBaseline="middle",o.fillText(String(Math.max(0,Math.ceil(t))),a,r+.5)}_panel(){const t=document.createElement("div");return Object.assign(t.style,{background:"rgba(0,0,0,0.52)",borderRadius:"8px",padding:"6px 10px"}),t}_retroText(t,e,n="normal"){Object.assign(t.style,{fontFamily:"'Courier New', monospace",fontSize:e,fontWeight:n,color:"#fff",textShadow:"2px 2px 0 #000, -1px -1px 0 #000"})}}const pv={0:"🏡 Berry Grove Hub",1:"🌲 World 1: Whispering Woods",2:"🏜️ World 2: Sunscorch Desert",3:"🌋 World 3: Magma Depths",4:"💀 World 4: Skull Dungeon",5:"🌴 World 5: Tropical Tidepool",6:"⚡ World 6: Thunder Plains",7:"🏰 Finale: Pikachu's Fortress"},fv=[{id:"hub",world:0,stage:0,name:"Berry Grove"},...Array.from({length:6},(s,t)=>Array.from({length:5},(e,n)=>({id:`${t+1}-${n+1}`,world:t+1,stage:n+1,name:`${t+1}-${n+1}${n===4?": McDonald's Boss":""}`}))).flat(),{id:"fortress",world:7,stage:0,name:"Pikachu's Fortress"}];class mv{constructor(t){_(this,"overlay");_(this,"card");_(this,"styleEl");_(this,"callbacks");_(this,"muteButton",null);_(this,"resetArmed",!1);this.callbacks=t,this.styleEl=document.createElement("style"),this.styleEl.textContent=`
      @keyframes rbqSubtitlePulse {
        0%, 100% { transform: translateY(0px) scale(1); color: #ffe66d; }
        50% { transform: translateY(-3px) scale(1.03); color: #8cf5ff; }
      }
      @keyframes rbqTitleFloat {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-4px); }
      }
      .rbq-btn {
        font-family: 'Courier New', monospace;
        font-weight: bold;
        font-size: 15px;
        color: #fff;
        background: linear-gradient(180deg, #3c54b8 0%, #24337a 100%);
        border: 3px solid #ffd84d;
        border-radius: 8px;
        padding: 10px 18px;
        cursor: pointer;
        text-shadow: 2px 2px 0 #000;
        box-shadow: 0 4px 0 #10163b;
        transition: transform 0.08s ease, filter 0.1s ease;
      }
      .rbq-btn:hover:not(:disabled) {
        filter: brightness(1.16);
        transform: translateY(-1px);
      }
      .rbq-btn:active:not(:disabled) {
        transform: translateY(2px);
        box-shadow: 0 2px 0 #10163b;
      }
      .rbq-btn:disabled {
        opacity: 0.45;
        cursor: not-allowed;
        border-color: #777;
      }
      .rbq-btn-primary {
        background: linear-gradient(180deg, #e04646 0%, #a41d1d 100%);
        box-shadow: 0 4px 0 #4d0a0a;
      }
      .rbq-btn-green {
        background: linear-gradient(180deg, #2fb35c 0%, #1a7337 100%);
        box-shadow: 0 4px 0 #0a3618;
      }
      .rbq-btn-danger {
        background: linear-gradient(180deg, #8a2638 0%, #52111d 100%);
        border-color: #ff7a8a;
      }
      .rbq-level-btn {
        font-family: 'Courier New', monospace;
        font-size: 12px;
        font-weight: bold;
        color: #fff;
        background: rgba(26, 36, 86, 0.9);
        border: 2px solid #8cb2ff;
        border-radius: 6px;
        padding: 6px 8px;
        cursor: pointer;
        text-align: left;
        text-shadow: 1px 1px 0 #000;
      }
      .rbq-level-btn:hover:not(:disabled) {
        border-color: #ffd84d;
        background: rgba(52, 72, 152, 0.95);
      }
      .rbq-level-btn:disabled {
        opacity: 0.42;
        cursor: not-allowed;
        border-color: #555;
      }
    `,this.overlay=document.createElement("div"),Object.assign(this.overlay.style,{position:"fixed",inset:"0",display:"none",alignItems:"center",justifyContent:"center",padding:"16px",background:"radial-gradient(circle at center, rgba(24, 12, 52, 0.56) 0%, rgba(6, 5, 18, 0.84) 100%)",zIndex:"400",pointerEvents:"auto",fontFamily:"'Courier New', monospace",color:"#fff",userSelect:"none"}),this.overlay.addEventListener("click",e=>{e.stopPropagation()}),this.card=document.createElement("div"),Object.assign(this.card.style,{width:"min(620px, 100%)",maxHeight:"92vh",overflowY:"auto",background:"linear-gradient(180deg, rgba(22, 16, 56, 0.94) 0%, rgba(12, 10, 34, 0.96) 100%)",border:"4px solid #ffd84d",borderRadius:"14px",padding:"24px 26px",boxShadow:"0 12px 40px rgba(0,0,0,0.85), inset 0 0 0 2px rgba(255,255,255,0.14)",display:"flex",flexDirection:"column",alignItems:"center",gap:"14px",textAlign:"center"}),this.overlay.appendChild(this.card)}mount(){this.styleEl.parentElement||document.head.appendChild(this.styleEl),this.overlay.parentElement||document.body.appendChild(this.overlay)}dispose(){this.overlay.remove(),this.styleEl.remove()}hide(){this.overlay.style.display="none",this.muteButton=null,this.resetArmed=!1}updateMuteLabel(t){this.muteButton&&(this.muteButton.textContent=t?"🔇 Sound: OFF":"🔊 Sound: ON")}showTitle(t,e){this.resetView("min(600px, 100%)"),this.exitPointerLock();const n=document.createElement("h1");Object.assign(n.style,{margin:"0",fontSize:"clamp(28px, 4.5vw, 42px)",color:"#ff4f4f",textShadow:"4px 4px 0 #17217d, -2px -2px 0 #000",animation:"rbqTitleFloat 2.8s ease-in-out infinite"}),n.textContent="🍓 Rem's Berry Quest",this.card.appendChild(n);const i=document.createElement("div");Object.assign(i.style,{fontSize:"15px",fontWeight:"bold",textShadow:"2px 2px 0 #000",animation:"rbqSubtitlePulse 2.4s ease-in-out infinite"}),i.textContent="★ A Retro 3D N64 Platforming Adventure ★",this.card.appendChild(i);const o=document.createElement("div");Object.assign(o.style,{background:"rgba(0, 0, 0, 0.45)",border:"2px solid rgba(255, 216, 77, 0.45)",borderRadius:"10px",padding:"12px 14px",fontSize:"13px",lineHeight:"1.5",color:"#eef2ff",textAlign:"left",textShadow:"1px 1px 0 #000"}),o.innerHTML=`<strong style="color:#ffd84d;">STORY PROLOGUE:</strong><br>Big Bad <strong>Pikachu</strong> and his McDonald's Bat lieutenants raided Berry Grove and captured Rem's best friends — <span style="color:#ff9f43;font-weight:bold;">Pete</span>, <span style="color:#5ee870;font-weight:bold;">Jib Jib</span>, <span style="color:#ff85c0;font-weight:bold;">Susie</span>, and <span style="color:#7ef9ff;font-weight:bold;">Snow</span>!<br>Explore 6 vibrant worlds, defeat the McDonald's Bats with your Jetpack, rescue all <strong>5 Neutral Koopas</strong> to shatter Pikachu's Fortress seal, and bring everyone home!`,this.card.appendChild(o);const a=document.createElement("div");if(Object.assign(a.style,{display:"flex",flexDirection:"column",gap:"10px",width:"min(320px, 100%)",marginTop:"4px"}),e){const c=t.rescuedNeutralKoopas.filter(Boolean).length,h=this._button(`▶ Continue (World ${Math.min(7,t.unlockedWorld)} • 🐢 ${c}/5)`,"rbq-btn rbq-btn-green",()=>this.callbacks.onContinue());a.appendChild(h)}const r=this._button(e?"🌱 New Game":"▶ Start Adventure!","rbq-btn rbq-btn-primary",()=>this.callbacks.onNewGame());a.appendChild(r),this.card.appendChild(a);const l=document.createElement("div");Object.assign(l.style,{fontSize:"11px",color:"#b8c4ff",lineHeight:"1.4"}),l.textContent="WASD: Move | Shift: Sprint / Ground-Pound | Space×3: Triple Jump | Left-Click: Attack | M: Mute | P/Esc: Pause",this.card.appendChild(l)}showPause(t,e,n,i=fv){this.resetView("min(520px, 100%)"),this.exitPointerLock();const o=document.createElement("h2");Object.assign(o.style,{margin:"0",fontSize:"28px",color:"#ffd84d",textShadow:"3px 3px 0 #000"}),o.textContent="⏸ GAME PAUSED",this.card.appendChild(o);const a=t.rescuedNeutralKoopas.filter(Boolean).length,r=document.createElement("div");Object.assign(r.style,{fontSize:"13px",color:"#cfe3ff"}),r.textContent=`Lives: ×${t.lives}  |  🍓 ${t.berries}  🫐 ${t.blueBerries}  |  🐢 ${a}/5 Koopas`,this.card.appendChild(r);const l=document.createElement("div");Object.assign(l.style,{display:"flex",flexDirection:"column",gap:"9px",width:"min(320px, 100%)"}),l.appendChild(this._button("▶ Resume","rbq-btn rbq-btn-green",()=>this.callbacks.onResume())),l.appendChild(this._button("🗺️ Level Select","rbq-btn",()=>{this.showLevelSelect(t,e,n,i)})),e!=="hub"&&l.appendChild(this._button("🏡 Return to Berry Grove Hub","rbq-btn",()=>this.callbacks.onReturnToHub())),this.muteButton=this._button(n?"🔇 Sound: OFF":"🔊 Sound: ON","rbq-btn",()=>{const h=this.callbacks.onToggleMute();this.updateMuteLabel(h)}),l.appendChild(this.muteButton);const c=this._button("🗑️ Reset Save","rbq-btn rbq-btn-danger",()=>{if(!this.resetArmed){this.resetArmed=!0,c.textContent="⚠️ Click Again to Confirm Reset";return}this.resetArmed=!1,this.callbacks.onResetSave()});l.appendChild(c),this.card.appendChild(l)}showLevelSelect(t,e,n,i){this.resetView("min(780px, 100%)");const o=document.createElement("div");Object.assign(o.style,{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",gap:"12px"});const a=this._button("← Back","rbq-btn",()=>{this.showPause(t,e,n,i)});a.style.padding="6px 14px",a.style.fontSize="13px",o.appendChild(a);const r=document.createElement("h2");Object.assign(r.style,{margin:"0",fontSize:"22px",color:"#ffd84d",textShadow:"2px 2px 0 #000"}),r.textContent="🗺️ LEVEL SELECT",o.appendChild(r);const l=document.createElement("div");l.style.width="82px",o.appendChild(l),this.card.appendChild(o);const c=document.createElement("div");Object.assign(c.style,{width:"100%",display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(230px, 1fr))",gap:"10px",textAlign:"left"});const h=[0,1,2,3,4,5,6,7],d=new Set(t.unlockedLevels),p=new Set(t.completedLevels);for(const f of h){const g=i.filter(m=>m.world===f);if(g.length===0)continue;const v=document.createElement("div");Object.assign(v.style,{background:"rgba(0, 0, 0, 0.38)",border:"2px solid rgba(255, 216, 77, 0.35)",borderRadius:"8px",padding:"8px 10px",display:"flex",flexDirection:"column",gap:"5px"});const x=document.createElement("div");Object.assign(x.style,{fontSize:"12px",fontWeight:"bold",color:"#ffd84d",marginBottom:"2px"}),x.textContent=pv[f]??`World ${f}`,v.appendChild(x);for(const m of g){const E=m.id==="fortress",M=t.rescuedNeutralKoopas.filter(Boolean).length,y=m.id==="hub"||d.has(m.id)||E&&M>=5,I=p.has(m.id),w=m.id===e,R=document.createElement("button");R.className="rbq-level-btn",R.disabled=!y,w&&(R.style.borderColor="#5dff7a",R.style.background="rgba(30, 96, 56, 0.9)");const L=y?I?"✅ ":w?"▶ ":"• ":"🔒 ";R.textContent=`${L}${m.name}`,R.addEventListener("click",()=>{y&&this.callbacks.onSelectLevel(m.id)}),v.appendChild(R)}c.appendChild(v)}this.card.appendChild(c)}showGameOver(t){this.resetView("min(460px, 100%)"),this.exitPointerLock();const e=document.createElement("h2");Object.assign(e.style,{margin:"0",fontSize:"36px",color:"#ff4444",textShadow:"4px 4px 0 #000"}),e.textContent="💀 GAME OVER",this.card.appendChild(e);const n=document.createElement("p");Object.assign(n.style,{margin:"0",fontSize:"14px",color:"#ffccd5",lineHeight:"1.5"}),n.textContent=`Rem ran out of lives in ${t}! Don't give up — Pete, Jib Jib, Susie, and Snow are counting on you!`,this.card.appendChild(n);const i=document.createElement("div");Object.assign(i.style,{display:"flex",flexDirection:"column",gap:"10px",width:"min(280px, 100%)",marginTop:"6px"}),i.appendChild(this._button("↻ Retry Level","rbq-btn rbq-btn-primary",()=>this.callbacks.onRetryLevel())),i.appendChild(this._button("🏡 Return to Berry Grove Hub","rbq-btn",()=>this.callbacks.onReturnToHub())),this.card.appendChild(i)}showVictory(t){this.resetView("min(600px, 100%)"),this.exitPointerLock();const e=document.createElement("h1");Object.assign(e.style,{margin:"0",fontSize:"34px",color:"#ffd84d",textShadow:"4px 4px 0 #a32020",animation:"rbqTitleFloat 2.4s ease-in-out infinite"}),e.textContent="🏆 VICTORY! 🏆",this.card.appendChild(e);const n=document.createElement("p");Object.assign(n.style,{margin:"0",fontSize:"15px",lineHeight:"1.55",color:"#f2f7ff"}),n.textContent="Pikachu has been defeated! With the help of the 5 Neutral Koopas, the electric cages shattered — freeing Pete, Jib Jib, Susie, and Snow!",this.card.appendChild(n);const i=document.createElement("div");Object.assign(i.style,{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"8px"});const o=[["🍓 Rem","#e84040"],["🧢 Pete","#ff8c24"],["🎩 Jib Jib","#28b848"],["🎀 Susie","#ff69b4"],["❄️ Snow","#3dc7ff"],["🐢 5/5 Koopas","#4488ff"]];for(const[c,h]of o){const d=document.createElement("span");Object.assign(d.style,{background:h,border:"2px solid #fff",borderRadius:"16px",padding:"4px 12px",fontSize:"12px",fontWeight:"bold",color:"#fff",textShadow:"1px 1px 0 #000"}),d.textContent=c,i.appendChild(d)}this.card.appendChild(i);const a=document.createElement("div");Object.assign(a.style,{background:"rgba(0,0,0,0.4)",border:"2px solid rgba(255,255,255,0.25)",borderRadius:"8px",padding:"10px 16px",fontSize:"13px",color:"#ffe680"});const r=t.rescuedNeutralKoopas.filter(Boolean).length;a.textContent=`Stages Cleared: ${t.completedLevels.length}  |  🍓 ${t.berries}  🫐 ${t.blueBerries}  |  🐢 ${r}/5 Rescued`,this.card.appendChild(a);const l=document.createElement("div");Object.assign(l.style,{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"12px",marginTop:"4px"}),l.appendChild(this._button("🔁 Play Again","rbq-btn rbq-btn-primary",()=>this.callbacks.onPlayAgain())),l.appendChild(this._button("🏡 Explore Hub","rbq-btn rbq-btn-green",()=>this.callbacks.onReturnToHub())),this.card.appendChild(l)}resetView(t){this.resetArmed=!1,this.muteButton=null,this.card.innerHTML="",this.card.style.width=t,this.overlay.style.display="flex"}_button(t,e,n){const i=document.createElement("button");return i.className=e,i.textContent=t,i.addEventListener("click",o=>{o.stopPropagation(),n()}),i}exitPointerLock(){if(document.pointerLockElement)try{document.exitPointerLock()}catch{}}}class gv{constructor(t){_(this,"overlay");_(this,"box");_(this,"portraitBadge");_(this,"portraitInitial");_(this,"speakerLabel");_(this,"textEl");_(this,"promptEl");_(this,"messages",[]);_(this,"index",0);_(this,"revealedChars",0);_(this,"typeTimer",0);_(this,"openedAt",0);_(this,"visible",!1);_(this,"onCompleteCallback",null);_(this,"onTickSfx",null);_(this,"rafId",0);_(this,"lastTick",0);_(this,"sfxAccumulator",0);_(this,"onPointerAdvance",t=>{this.visible&&(t.stopPropagation(),t.preventDefault(),!(performance.now()-this.openedAt<100)&&this.advance())});_(this,"onKeyDown",t=>{if(this.visible&&(t.code==="Space"||t.code==="Enter")){if(t.preventDefault(),t.stopPropagation(),performance.now()-this.openedAt<100)return;this.advance()}});this.onTickSfx=t??null,this.overlay=document.createElement("div"),Object.assign(this.overlay.style,{position:"fixed",inset:"0",display:"none",alignItems:"flex-end",justifyContent:"center",paddingBottom:"36px",zIndex:"300",pointerEvents:"auto",userSelect:"none",fontFamily:"'Courier New', monospace"}),this.box=document.createElement("div"),Object.assign(this.box.style,{width:"min(720px, calc(100% - 32px))",background:"linear-gradient(180deg, rgba(16, 18, 52, 0.96) 0%, rgba(8, 10, 32, 0.98) 100%)",border:"3px solid #ffd84d",borderRadius:"12px",boxShadow:"0 8px 28px rgba(0,0,0,0.8), inset 0 0 0 2px rgba(255,255,255,0.14)",padding:"16px 20px",display:"flex",gap:"16px",alignItems:"flex-start",cursor:"pointer"}),this.portraitBadge=document.createElement("div"),Object.assign(this.portraitBadge.style,{width:"58px",height:"58px",borderRadius:"10px",border:"3px solid #ffffff",boxShadow:"0 3px 0 #000",flexShrink:"0",display:"flex",alignItems:"center",justifyContent:"center",background:"#e84040"}),this.portraitInitial=document.createElement("span"),Object.assign(this.portraitInitial.style,{fontSize:"26px",fontWeight:"bold",color:"#fff",textShadow:"2px 2px 0 #000"}),this.portraitBadge.appendChild(this.portraitInitial),this.box.appendChild(this.portraitBadge);const e=document.createElement("div");Object.assign(e.style,{flex:"1",display:"flex",flexDirection:"column",gap:"6px",minHeight:"78px"}),this.speakerLabel=document.createElement("span"),Object.assign(this.speakerLabel.style,{fontSize:"15px",fontWeight:"bold",color:"#ffd84d",textShadow:"2px 2px 0 #000",letterSpacing:"0.5px"}),e.appendChild(this.speakerLabel),this.textEl=document.createElement("p"),Object.assign(this.textEl.style,{margin:"0",fontSize:"16px",lineHeight:"1.45",color:"#f5f7ff",textShadow:"1px 1px 0 #000",minHeight:"46px"}),e.appendChild(this.textEl),this.promptEl=document.createElement("span"),Object.assign(this.promptEl.style,{alignSelf:"flex-end",fontSize:"12px",fontWeight:"bold",color:"#8cf5ff",textShadow:"1px 1px 0 #000",marginTop:"2px"}),this.promptEl.textContent="[Space / Click] Next ▶",e.appendChild(this.promptEl),this.box.appendChild(e),this.overlay.appendChild(this.box),this.overlay.addEventListener("click",this.onPointerAdvance),window.addEventListener("keydown",this.onKeyDown,!0)}mount(){this.overlay.parentElement||document.body.appendChild(this.overlay)}dispose(){this.stopLoop(),this.overlay.removeEventListener("click",this.onPointerAdvance),window.removeEventListener("keydown",this.onKeyDown,!0),this.overlay.remove()}setSoundCallback(t){this.onTickSfx=t}isOpen(){return this.visible}show(t,e){if(!t||t.length===0){e();return}if(document.pointerLockElement)try{document.exitPointerLock()}catch{}this.messages=t,this.index=0,this.onCompleteCallback=e,this.openedAt=performance.now(),this.visible=!0,this.overlay.style.display="flex",this.loadCurrentMessage(),this.startLoop()}hide(){this.visible=!1,this.overlay.style.display="none",this.stopLoop()}loadCurrentMessage(){const t=this.messages[this.index];this.speakerLabel.textContent=t.speaker,this.portraitBadge.style.background=t.portraitColor||"#e84040",this.portraitInitial.textContent=(t.speaker.trim().charAt(0)||"?").toUpperCase(),this.revealedChars=0,this.typeTimer=0,this.sfxAccumulator=0,this.textEl.textContent="",this.updatePromptText()}updatePromptText(){const t=this.messages[this.index];if(!t)return;this.revealedChars>=t.text.length?this.index>=this.messages.length-1?this.promptEl.textContent="[Space / Click] Close ✓":this.promptEl.textContent="[Space / Click] Next ▶":this.promptEl.textContent="[Space / Click] Skip"}advance(){var e;if(!this.visible)return;const t=this.messages[this.index];if(!t){this.finish();return}if(this.revealedChars<t.text.length){this.revealedChars=t.text.length,this.textEl.textContent=t.text,this.updatePromptText();return}this.index<this.messages.length-1?(this.index+=1,this.loadCurrentMessage(),(e=this.onTickSfx)==null||e.call(this)):this.finish()}finish(){const t=this.onCompleteCallback;this.onCompleteCallback=null,this.messages=[],this.hide(),t==null||t()}startLoop(){this.stopLoop(),this.lastTick=performance.now();const t=e=>{var o;if(!this.visible)return;const n=Math.min((e-this.lastTick)/1e3,.1);this.lastTick=e;const i=this.messages[this.index];if(i&&this.revealedChars<i.text.length){this.typeTimer+=n*52;const a=Math.min(i.text.length,Math.floor(this.typeTimer));a>this.revealedChars&&(this.revealedChars=a,this.textEl.textContent=i.text.slice(0,this.revealedChars),this.sfxAccumulator+=n,this.sfxAccumulator>=.08&&(this.sfxAccumulator=0,(o=this.onTickSfx)==null||o.call(this)),this.revealedChars>=i.text.length&&this.updatePromptText())}this.rafId=requestAnimationFrame(t)};this.rafId=requestAnimationFrame(t)}stopLoop(){this.rafId&&(cancelAnimationFrame(this.rafId),this.rafId=0)}}const mh=1/60,gh=5,xv=[{id:0,name:"Shelly"},{id:1,name:"Sandy"},{id:2,name:"Cinder"},{id:3,name:"Boney"},{id:4,name:"Splash"}],xh=[{speaker:"Rem",portraitColor:"#e84040",text:"Oh no! Big Bad Pikachu raided Berry Grove and kidnapped Pete, Jib Jib, Susie, and Snow!"},{speaker:"Rem",portraitColor:"#e84040",text:"His McDonald's Bat lieutenants have taken over all 6 worlds, and Pikachu locked 5 Neutral Koopas inside electric cages."},{speaker:"Rem",portraitColor:"#ffd84d",text:"Step into the World 1 portal to begin! Rescue all 5 Neutral Koopas to break the seal on Pikachu's Fortress!"}],vv=[{speaker:"Pete",portraitColor:"#ff7a14",text:"Whoa, Rem! You actually defeated Big Bad Pikachu and shattered our cages!"},{speaker:"Jib Jib",portraitColor:"#28b848",text:"Woohoo! Those McDonald's Bats didn't stand a chance against your Jetpack!"},{speaker:"Susie",portraitColor:"#ff69b4",text:"Thank you so much for saving us, Rem — and freeing all 5 Neutral Koopas too!"},{speaker:"Snow",portraitColor:"#3dc7ff",text:"Berry Grove is safe again! Let's head back home and celebrate with fresh berries!"}];class Mv{constructor(t){_(this,"renderer");_(this,"scene");_(this,"camera");_(this,"physicsWorld");_(this,"input");_(this,"state");_(this,"sound");_(this,"player");_(this,"cameraCtrl");_(this,"levelBuilder");_(this,"blobShadow");_(this,"hud");_(this,"menuScreen");_(this,"dialogBox");_(this,"saveData");_(this,"currentLevelConfig",So.hub);_(this,"currentLevelId","hub");_(this,"berryPoints",0);_(this,"collectibles",[]);_(this,"chests",[]);_(this,"enemies",[]);_(this,"checkpoints",[]);_(this,"hubPortals",[]);_(this,"goalPortal",null);_(this,"neutralKoopa",null);_(this,"hubRescuedKoopas",[]);_(this,"capturedFriends",null);_(this,"bossBat",null);_(this,"bossPikachu",null);_(this,"fireballs",[]);_(this,"playerColliderHandles",new Set);_(this,"playerCenterTmp",new A);_(this,"levelEntryGraceTimer",0);_(this,"goalSpawnGraceTimer",0);_(this,"lockedPortalToastCooldown",0);_(this,"bossDefeatHandled",!1);_(this,"wasRegenerating",!1);_(this,"menuOrbitAngle",0);_(this,"accumulator",0);_(this,"lastTime",0);_(this,"rafId",0);_(this,"unsubscribeState");_(this,"handleNewGame",()=>{this.sound.init(),this.menuScreen.hide(),this.saveData=qe.reset(),this.player.equipPowerUp("none"),this.syncPlayerCountersFromSave(),this.loadLevel("hub",!0),this.state.setState(Ee.DIALOG),this.pushHudState(),this.dialogBox.show(xh,()=>{this.state.setState(Ee.PLAYING),this.hud.showToast("🍓 Welcome to Berry Grove!","#ffd84d")})});_(this,"handleContinue",()=>{this.sound.init(),this.menuScreen.hide(),this.saveData=qe.load(),this.syncPlayerCountersFromSave(),this.loadLevel("hub",!0),this.saveData.completedLevels.length===0&&this.saveData.berries===0&&this.saveData.blueBerries===0&&!this.saveData.rescuedNeutralKoopas.some(Boolean)?(this.state.setState(Ee.DIALOG),this.pushHudState(),this.dialogBox.show(xh,()=>{this.state.setState(Ee.PLAYING)})):this.state.setState(Ee.PLAYING)});_(this,"handleResume",()=>{this.sound.init(),this.menuScreen.hide(),this.state.setState(Ee.PLAYING)});_(this,"handleSelectLevel",t=>{this.sound.init(),this.menuScreen.hide(),this.loadLevel(t,!0),this.state.setState(Ee.PLAYING)});_(this,"handleReturnToHub",()=>{this.sound.init(),this.menuScreen.hide(),this.player.lives<=0&&this.syncPlayerCountersFromSave(),this.loadLevel("hub",!0),this.state.setState(Ee.PLAYING)});_(this,"handleResetSave",()=>{this.sound.init(),this.saveData=qe.reset(),this.player.equipPowerUp("none"),this.syncPlayerCountersFromSave(),this.menuScreen.hide(),this.loadLevel("hub",!1),this.state.setState(Ee.MENU),this.menuScreen.showTitle(this.saveData,!1)});_(this,"handleRetryLevel",()=>{this.sound.init(),this.menuScreen.hide(),this.player.lives<=0&&this.syncPlayerCountersFromSave(),this.loadLevel(this.currentLevelId,!0),this.state.setState(Ee.PLAYING)});_(this,"handlePlayAgain",()=>{this.handleNewGame()});_(this,"loop",t=>{var i,o,a;this.rafId=requestAnimationFrame(this.loop);const e=Math.min((t-this.lastTime)/1e3,.25);this.lastTime=t,this.input.update();const n=this.state.currentState;if(n===Ee.MENU){this.menuOrbitAngle+=e*.16;const r=20;this.camera.position.set(Math.sin(this.menuOrbitAngle)*r,8.5+Math.sin(this.menuOrbitAngle*.7)*1.2,Math.cos(this.menuOrbitAngle)*r),this.camera.lookAt(0,2.2,-3),this.levelBuilder.update(e);for(const l of this.collectibles)l.update(e);for(const l of this.chests)l.update(e);for(const l of this.hubPortals)l.portal.update(e);for(const l of this.hubRescuedKoopas)l.update(e)}else n===Ee.DIALOG?(this.levelBuilder.update(e),(i=this.neutralKoopa)==null||i.update(e,this.player.position),(o=this.capturedFriends)==null||o.update(e)):n===Ee.VICTORY?(this.levelBuilder.update(e),(a=this.capturedFriends)==null||a.update(e)):n===Ee.PLAYING&&this.stepPlaying(e);this.renderer.render(this.scene,this.camera)});_(this,"onCanvasClick",()=>{this.sound.init(),this.state.currentState===Ee.PLAYING&&this.input.requestPointerLock(this.renderer.domElement)});_(this,"onKeyDown",t=>{if(!t.repeat){if(t.code==="KeyM"){this.sound.init();const e=this.sound.toggleMute();this.menuScreen.updateMuteLabel(e),this.state.currentState===Ee.PLAYING&&(this.hud.showToast(e?"🔇 SOUND MUTED":"🔊 SOUND ON","#8cf5ff"),this.pushHudState());return}(t.code==="KeyP"||t.code==="Escape")&&(this.state.currentState===Ee.PLAYING?(t.preventDefault(),this.state.setState(Ee.PAUSED),this.menuScreen.showPause(this.saveData,this.currentLevelId,this.sound.muted,this.buildMenuLevelList())):this.state.currentState===Ee.PAUSED&&(t.preventDefault(),this.handleResume()))}});_(this,"onResize",()=>{const t=window.innerWidth,e=window.innerHeight;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e)});this.physicsWorld=t??new kt.World(new kt.Vector3(0,-25,0)),this.renderer=new Sg({antialias:!1}),this.renderer.setPixelRatio(1),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.toneMapping=xi,this.renderer.shadowMap.enabled=!1,this.renderer.setClearColor(8900331),document.body.appendChild(this.renderer.domElement),this.scene=new Tg,this.camera=new kn(60,window.innerWidth/window.innerHeight,.1,300),this.camera.position.set(0,8,16),this.scene.add(this.camera),this.scene.userData.camera=this.camera,this.input=il.getInstance(),this.state=sl.getInstance(),this.sound=ol.getInstance(),this.saveData=qe.load(),this.levelBuilder=new uv(this.scene,this.physicsWorld);const e=new Set;this.physicsWorld.forEachCollider(n=>{e.add(n.handle)}),this.player=new wx(this.scene,this.physicsWorld),this.physicsWorld.forEachCollider(n=>{e.has(n.handle)||this.playerColliderHandles.add(n.handle)}),this.player.onJumpEvent=n=>{this.sound.playSFX(n)},this.syncPlayerCountersFromSave(),this.cameraCtrl=new Ix(this.camera,this.player.mesh),this.blobShadow=new Wx(this.scene),this.hud=new dv,this.hud.mount(),this.hud.setVisible(!1),this.dialogBox=new gv(()=>this.sound.playSFX("dialog")),this.dialogBox.mount(),this.menuScreen=new mv({onNewGame:this.handleNewGame,onContinue:this.handleContinue,onResume:this.handleResume,onSelectLevel:this.handleSelectLevel,onReturnToHub:this.handleReturnToHub,onToggleMute:()=>this.sound.toggleMute(),onResetSave:this.handleResetSave,onRetryLevel:this.handleRetryLevel,onPlayAgain:this.handlePlayAgain}),this.menuScreen.mount(),this.renderer.domElement.addEventListener("click",this.onCanvasClick),window.addEventListener("resize",this.onResize),window.addEventListener("keydown",this.onKeyDown),this.unsubscribeState=this.state.on("statechange",n=>{n.current!==Ee.PLAYING&&this.input.reset(),this.hud.setVisible(n.current===Ee.PLAYING||n.current===Ee.DIALOG)}),this.loadLevel("hub",!1),this.state.setState(Ee.MENU),this.menuScreen.showTitle(this.saveData,qe.hasSave())}start(){this.rafId||(this.lastTime=performance.now(),this.loop(this.lastTime))}stop(){this.rafId&&(cancelAnimationFrame(this.rafId),this.rafId=0)}dispose(){this.stop(),this.unsubscribeState(),this.renderer.domElement.removeEventListener("click",this.onCanvasClick),window.removeEventListener("resize",this.onResize),window.removeEventListener("keydown",this.onKeyDown),this.disposeCurrentEntities(),this.levelBuilder.dispose(),this.player.dispose(),this.cameraCtrl.dispose(),this.hud.dispose(),this.menuScreen.dispose(),this.dialogBox.dispose(),this.sound.stopMusic(),this.renderer.dispose(),this.renderer.domElement.remove()}loadLevel(t,e){this.disposeCurrentEntities();const n=dh(t);this.currentLevelConfig=n,this.currentLevelId=n.id,this.bossDefeatHandled=!1,this.levelEntryGraceTimer=.65,this.goalSpawnGraceTimer=0,this.lockedPortalToastCooldown=0,this.wasRegenerating=!1;const i=this.levelBuilder.loadLevel(n),o=new A(n.spawn.x,n.spawn.y,n.spawn.z);this.player.resetForLevel(o,!!n.hasJetpack),this.camera.position.set(o.x,o.y+4,o.z+8);for(const l of n.berries)this.collectibles.push(new Xx(this.scene,new A(l.x,l.y,l.z),l.type));for(const l of n.chests)this.chests.push(new Kx(this.scene,l));const a=(l,c)=>this.levelBuilder.getGroundHeight(l,c);for(const l of n.enemies)this.enemies.push(new dr(this.scene,l,a));for(const l of n.checkpoints)this.checkpoints.push(new qx(this.scene,l));if(n.neutralKoopa){const l=!!this.saveData.rescuedNeutralKoopas[n.neutralKoopa.id];this.neutralKoopa=new lh(this.scene,n.neutralKoopa,l)}const r=this.saveData.rescuedNeutralKoopas.filter(Boolean).length;for(const l of i.portals){const c=l.def;let h;c.worldIndex===7?r<5&&(h=`${r}/5 Neutral Koopas needed`):c.worldIndex&&c.worldIndex>this.saveData.unlockedWorld&&(h=`Clear World ${c.worldIndex-1}`);const d=new pr(this.scene,l.pos,c.label,c.color,h);this.hubPortals.push({portal:d,def:c})}if(n.id==="hub")for(const l of xv){if(!this.saveData.rescuedNeutralKoopas[l.id])continue;const c=ov(l.id,a),h=new lh(this.scene,{id:l.id,name:l.name,x:c.x,y:c.y,z:c.z,dialogLines:[]},!0);this.hubRescuedKoopas.push(h)}n.isBossLevel?n.bossKind==="mcdonalds_bat"?(this.bossBat=new Qx(this.scene,n.bossTier??n.world),e&&this.hud.showToast("🚀 Jetpack Active! Left-Click to defeat McBat!","#7ef9ff")):n.bossKind==="pikachu"&&(this.bossPikachu=new ev(this.scene),this.capturedFriends=new Jx(this.scene,new A(0,0,-14)),e&&this.hud.showToast("⚡ Big Bad Pikachu! Jump over shockwaves!","#ffee44")):n.goal&&(this.goalPortal=new pr(this.scene,new A(n.goal.x,n.goal.y,n.goal.z),"GOAL ★",16767053)),e&&this.sound.playMusic(n.biome,!!n.isBossLevel),this.pushHudState()}disposeCurrentEntities(){for(const t of this.collectibles)t.dispose();this.collectibles.length=0;for(const t of this.chests)t.dispose();this.chests.length=0;for(const t of this.enemies)t.dispose();this.enemies.length=0;for(const t of this.checkpoints)t.dispose();this.checkpoints.length=0;for(const t of this.hubPortals)t.portal.dispose();this.hubPortals.length=0,this.goalPortal&&(this.goalPortal.dispose(),this.goalPortal=null),this.neutralKoopa&&(this.neutralKoopa.dispose(),this.neutralKoopa=null);for(const t of this.hubRescuedKoopas)t.dispose();this.hubRescuedKoopas.length=0,this.capturedFriends&&(this.capturedFriends.dispose(),this.capturedFriends=null),this.bossBat&&(this.bossBat.dispose(),this.bossBat=null),this.bossPikachu&&(this.bossPikachu.dispose(),this.bossPikachu=null);for(const t of this.fireballs)t.proj.dispose();this.fireballs.length=0}stepPlaying(t){var p,f,g,v,x,m,E,M,y,I;this.levelEntryGraceTimer>0&&(this.levelEntryGraceTimer=Math.max(0,this.levelEntryGraceTimer-t)),this.goalSpawnGraceTimer>0&&(this.goalSpawnGraceTimer=Math.max(0,this.goalSpawnGraceTimer-t)),this.lockedPortalToastCooldown>0&&(this.lockedPortalToastCooldown=Math.max(0,this.lockedPortalToastCooldown-t)),this.accumulator+=t;let e=0;for(;this.accumulator>=mh&&e<gh;)this.physicsWorld.step(),this.accumulator-=mh,e++;e>=gh&&(this.accumulator=0);const n=this.player.health,i=this.player.armorHits,o=this.player.powerUp;this.player.update(t,this.input),(this.player.health<n||this.player.armorHits<i||o!=="none"&&this.player.powerUp==="none")&&this.sound.playSFX("hurt"),this.cameraCtrl.update(t,this.input),this.levelBuilder.update(t),this.player.isJetpackActive&&Math.random()<t*7&&this.sound.playSFX("jetpack"),this.player.isRegenerating&&!this.wasRegenerating&&this.hud.showToast("💚 Regenerating Health...","#66ff99"),this.wasRegenerating=this.player.isRegenerating;const a=this.player.position,r=this.playerCenterTmp.set(a.x,a.y+.65,a.z),l=[];for(const w of this.enemies)w.isDead||l.push(w);this.bossBat&&!this.bossBat.isDead&&l.push(this.bossBat),this.bossPikachu&&!this.bossPikachu.isDead&&l.push(this.bossPikachu);const c=this.player.consumeAttackEvent();if(c)if(c.type==="fireball"){this.sound.playSFX("fireball");const w=new Hx(this.scene,c.origin,c.forward,(R,L)=>this.levelBuilder.getGroundHeight(R,L),this.physicsWorld);this.fireballs.push({proj:w,decayTimer:.3})}else{this.sound.playSFX(c.type==="sword"?"sword":c.type==="shredder"?"shredder":"punch");const w=(((p=this.bossBat)==null?void 0:p.health)??0)+(((f=this.bossPikachu)==null?void 0:f.health)??0);if(Vx(c.type,c.origin,c.forward,l)>0){const L=(((g=this.bossBat)==null?void 0:g.health)??0)+(((v=this.bossPikachu)==null?void 0:v.health)??0);this.sound.playSFX(L<w?"bossHit":"stomp")}}if(this.player.groundPoundImpactThisFrame){let w=!1,R=!1;for(const L of l){if(L.isDead)continue;const C=L.position.x-a.x,b=L.position.z-a.z,U=Math.hypot(C,b),G=Math.abs(L.position.y-a.y);if(U<=3.1+L.radius&&G<=2.8){const H=L===this.bossBat||L===this.bossPikachu;L.takeDamage(2,!0,!1)&&(H?w=!0:R=!0)}}w?this.sound.playSFX("bossHit"):R&&this.sound.playSFX("stomp")}for(let w=this.fireballs.length-1;w>=0;w--){const R=this.fireballs[w];if(R.proj.isAlive){const L=(((x=this.bossBat)==null?void 0:x.health)??0)+(((m=this.bossPikachu)==null?void 0:m.health)??0);let C=0;for(const H of this.enemies)H.isDead||C++;const b=R.proj.update(t,l),U=(((E=this.bossBat)==null?void 0:E.health)??0)+(((M=this.bossPikachu)==null?void 0:M.health)??0);let G=0;for(const H of this.enemies)H.isDead||G++;b||(U<L?this.sound.playSFX("bossHit"):G<C&&this.sound.playSFX("stomp"))}else R.proj.update(t),R.decayTimer-=t,R.decayTimer<=0&&(R.proj.dispose(),this.fireballs.splice(w,1))}let h=!1;for(const w of this.collectibles)if(w.update(t),w.checkCollection(r,1.55))for(h=!0,w.type==="strawberry"?(this.player.berries+=1,this.sound.playSFX("berry")):(this.player.blueBerries+=1,this.sound.playSFX("blueBerry")),this.berryPoints+=w.value;this.berryPoints>=100;)this.berryPoints-=100,this.player.lives+=1,this.sound.playSFX("oneUp"),this.hud.showToast("🍓 1-UP! +1 LIFE!","#5dff7a");h&&(this.syncSaveCountersFromPlayer(),qe.save(this.saveData));for(const w of this.chests){w.update(t);const R=w.checkOpen(a,1.85);R&&(this.player.equipPowerUp(R),this.sound.playSFX("chest"),this.sound.playSFX("powerUp"),this.showPowerUpToast(R))}for(const w of this.checkpoints)w.update(t),w.checkActivate(a,1.95)&&(this.player.setSpawn(w.position.clone().add(new A(0,1,0))),this.sound.playSFX("checkpoint"),this.hud.showToast("🚩 CHECKPOINT!","#5dff7a"));for(const w of this.enemies){if(w.update(t,a),this.player.health<=0)continue;const R=w.checkPlayerContact(a,this.player.velocity.y,this.player.isGroundPounding);if(R==="stomped")this.sound.playSFX("stomp");else if(R==="hurt_player"){const L=a.clone().sub(w.position).setY(0).normalize();this.player.takeDamage(1,L)&&this.sound.playSFX("hurt")}}for(const w of this.hubRescuedKoopas)w.update(t,a);if(this.neutralKoopa){this.neutralKoopa.update(t,a);const w=this.neutralKoopa.checkRescue(a,2.8);if(w){this.saveData.rescuedNeutralKoopas[w.id]=!0;const R=this.saveData.rescuedNeutralKoopas.filter(Boolean).length;R>=5&&!this.saveData.unlockedLevels.includes("fortress")&&(this.saveData.unlockedLevels.push("fortress"),this.saveData.unlockedWorld=7),qe.save(this.saveData),this.sound.playSFX("powerUp"),this.hud.showToast(`🐢 NEUTRAL KOOPA RESCUED! (${R}/5)`,"#44eeff");const L=w.dialogLines.map(C=>({speaker:w.name,portraitColor:"#2a82f2",text:C}));this.state.setState(Ee.DIALOG),this.pushHudState(),this.dialogBox.show(L,()=>{this.state.setState(Ee.PLAYING)}),this.renderer.render(this.scene,this.camera);return}}if(this.bossBat){const w=this.bossBat.update(t,a);if(w.playerHit&&this.player.health>0){const R=a.clone().sub(this.bossBat.position).setY(0).normalize();this.player.takeDamage(1,R)&&this.sound.playSFX("hurt")}w.summonKoopa&&this.enemies.push(new dr(this.scene,w.summonKoopa,(R,L)=>this.levelBuilder.getGroundHeight(R,L))),this.bossBat.isDead&&!this.bossDefeatHandled&&(this.bossDefeatHandled=!0,this.sound.playSFX("victory"),this.currentLevelConfig.bossTier&&!this.saveData.defeatedBossTiers.includes(this.currentLevelConfig.bossTier)&&(this.saveData.defeatedBossTiers.push(this.currentLevelConfig.bossTier),qe.save(this.saveData)),this.currentLevelConfig.goal&&(this.goalPortal=new pr(this.scene,new A(this.currentLevelConfig.goal.x,this.currentLevelConfig.goal.y,this.currentLevelConfig.goal.z),"STAGE CLEAR ★",16767053),this.goalSpawnGraceTimer=.9),this.hud.showToast(`🏆 ${this.bossBat.name} Defeated! Enter the Goal Portal!`,"#ffd84d"))}if(this.bossPikachu){(y=this.capturedFriends)==null||y.update(t);const w=this.bossPikachu.update(t,a);if(w.playerHit&&this.player.health>0){const R=a.clone().sub(this.bossPikachu.position).setY(0).normalize();this.player.takeDamage(1,R)&&this.sound.playSFX("hurt")}if(w.summonKoopa&&this.enemies.push(new dr(this.scene,w.summonKoopa,(R,L)=>this.levelBuilder.getGroundHeight(R,L))),this.bossPikachu.isDead&&!this.bossDefeatHandled){this.bossDefeatHandled=!0,(I=this.capturedFriends)==null||I.shatterCages(),this.saveData.pikachuDefeated=!0,this.saveData.completedLevels.includes("fortress")||this.saveData.completedLevels.push("fortress"),this.syncSaveCountersFromPlayer(),qe.save(this.saveData),this.sound.playSFX("victory"),this.hud.showToast("⚡ PIKACHU DEFEATED! Friends Freed!","#ffd84d"),this.state.setState(Ee.DIALOG),this.pushHudState(),this.dialogBox.show(vv,()=>{this.state.setState(Ee.VICTORY),this.menuScreen.showVictory(this.saveData)});return}}if(this.player.health>0){const w=this.levelBuilder.checkHazards(a);if(w){const R=new A(-this.player.velocity.x,0,-this.player.velocity.z);R.lengthSq()<.05&&(R.set(this.currentLevelConfig.spawn.x-a.x,0,this.currentLevelConfig.spawn.z-a.z),R.lengthSq()<.05&&R.set(0,0,1)),R.normalize(),this.player.takeDamage(w.damage,R)&&this.sound.playSFX("hurt")}}if(this.player.health<=0){if(this.player.lives-=1,this.sound.playSFX("hurt"),this.player.lives<=0){this.player.lives=0,this.saveData.lives=3,this.syncSaveCountersFromPlayer(!1),qe.save(this.saveData),this.state.setState(Ee.GAME_OVER),this.menuScreen.showGameOver(this.currentLevelConfig.name);return}this.player.health=this.player.maxHealth,this.player.respawnAtCheckpoint(),this.player.invincibleTimer=1.6,this.syncSaveCountersFromPlayer(),qe.save(this.saveData),this.hud.showToast(`💔 Ouch! ${this.player.lives} Lives Left`,"#ff7a7a")}for(const w of this.hubPortals)if(w.portal.update(t),!(this.levelEntryGraceTimer>0)){if(w.portal.checkEnter(a,2.15)){this.sound.playSFX("portal");const R=this.resolveHubPortalTarget(w.def);this.loadLevel(R,!0);return}else if(w.portal.isLocked&&w.portal.isPlayerNear(a,2.3)&&this.lockedPortalToastCooldown<=0)if(this.lockedPortalToastCooldown=2.5,w.def.worldIndex===7){const R=this.saveData.rescuedNeutralKoopas.filter(Boolean).length;this.hud.showToast(`⚡ Pikachu's Fortress Sealed! (${R}/5 Neutral Koopas needed)`,"#ffee44")}else this.hud.showToast(`🔒 ${w.def.label}: ${w.portal.lockedText}`,"#ff8888")}if(this.goalPortal&&(this.goalPortal.update(t),this.levelEntryGraceTimer<=0&&this.goalSpawnGraceTimer<=0&&this.goalPortal.checkEnter(a,2.15))){this.handleStageClear();return}const d=this.sampleGroundHeight(a);this.blobShadow.update(a,d),this.pushHudState()}resolveHubPortalTarget(t){if(t.worldIndex===7)return"fortress";const e=t.worldIndex;if(!e)return t.targetLevelId;const n=new Set(this.saveData.unlockedLevels),i=new Set(this.saveData.completedLevels);for(let o=1;o<=5;o++){const a=`${e}-${o}`;if(n.has(a)&&!i.has(a))return a}return`${e}-1`}handleStageClear(){this.sound.playSFX("portal"),this.saveData.completedLevels.includes(this.currentLevelId)||this.saveData.completedLevels.push(this.currentLevelId);const t=sv(this.currentLevelId),e=this.saveData.rescuedNeutralKoopas.filter(Boolean).length;if(t==="fortress"){e>=5?(this.saveData.unlockedLevels.includes("fortress")||this.saveData.unlockedLevels.push("fortress"),this.saveData.unlockedWorld=7,this.syncSaveCountersFromPlayer(),qe.save(this.saveData),this.loadLevel("fortress",!0)):(this.syncSaveCountersFromPlayer(),qe.save(this.saveData),this.loadLevel("hub",!0),this.hud.showToast(`🐢 Rescue ${5-e} more Neutral Koopa(s) to unlock Pikachu's Fortress!`,"#44eeff"));return}if(t){this.saveData.unlockedLevels.includes(t)||this.saveData.unlockedLevels.push(t);const n=dh(t);n.world>this.saveData.unlockedWorld&&(this.saveData.unlockedWorld=Math.min(7,n.world)),this.syncSaveCountersFromPlayer(),qe.save(this.saveData),this.loadLevel(t,!0),this.hud.showToast(`⭐ Stage Clear! Welcome to ${n.name}`,"#ffd84d");return}this.syncSaveCountersFromPlayer(),qe.save(this.saveData),this.loadLevel("hub",!0)}showPowerUpToast(t){switch(t){case"armor":this.hud.showToast("🛡️ POWER-UP: Knight Armor (×3 Hits)!","#c0d6ff");break;case"sword":this.hud.showToast("⚔️ POWER-UP: Golden Sword!","#ffd84d");break;case"fireball":this.hud.showToast("🔥 POWER-UP: Fire Balls!","#ff8833");break;case"shredder":this.hud.showToast("🥩 POWER-UP: Meat Shredder Spin!","#ff5c7c");break}}syncPlayerCountersFromSave(){this.player.lives=Math.max(1,this.saveData.lives),this.player.berries=this.saveData.berries,this.player.blueBerries=this.saveData.blueBerries,this.berryPoints=this.saveData.berryPoints}syncSaveCountersFromPlayer(t=!0){t&&(this.saveData.lives=Math.max(1,this.player.lives)),this.saveData.berries=this.player.berries,this.saveData.blueBerries=this.player.blueBerries,this.saveData.berryPoints=this.berryPoints}pushHudState(){const t=this.bossBat&&!this.bossBat.isDead?this.bossBat:null,e=this.bossPikachu&&!this.bossPikachu.isDead?this.bossPikachu:null,n=!!(t||e),i=(t==null?void 0:t.name)??(e==null?void 0:e.name)??"",o=(t==null?void 0:t.health)??(e==null?void 0:e.health)??0,a=(t==null?void 0:t.maxHealth)??(e==null?void 0:e.maxHealth)??1;this.hud.update({health:this.player.health,maxHealth:this.player.maxHealth,lives:this.player.lives,berries:this.player.berries,blueBerries:this.player.blueBerries,berryPoints:this.berryPoints,levelName:this.currentLevelConfig.name,powerUp:this.player.powerUp,armorHits:this.player.armorHits,neutralKoopasSaved:this.saveData.rescuedNeutralKoopas.filter(Boolean).length,jetpackActive:this.player.jetpackEnabled,jetpackFuel:this.player.jetpackFuel,jetpackMaxFuel:this.player.jetpackMaxFuel,bossActive:n,bossName:i,bossHealth:o,bossMaxHealth:a,muted:this.sound.muted})}buildMenuLevelList(){const t=[],e=So.hub;e&&t.push({id:e.id,world:e.world,stage:e.stage,name:e.name});for(const n of _o){const i=So[n];i&&t.push({id:i.id,world:i.world,stage:i.stage,name:i.name})}return t}sampleGroundHeight(t){const e=new kt.Ray({x:t.x,y:t.y+.5,z:t.z},{x:0,y:-1,z:0}),n=this.physicsWorld.castRay(e,50,!0,kt.QueryFilterFlags.EXCLUDE_SENSORS,void 0,void 0,void 0,o=>!this.playerColliderHandles.has(o.handle));if(!n)return 0;const i=t.y+.5-n.timeOfImpact;return i>t.y&&i-t.y<.1?t.y:i}}export{Mv as Game};
//# sourceMappingURL=Game-oM_DQ9eB.js.map
