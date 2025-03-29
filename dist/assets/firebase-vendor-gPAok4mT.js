var ur={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gr=function(i){const e=[];let n=0;for(let r=0;r<i.length;r++){let a=i.charCodeAt(r);a<128?e[n++]=a:a<2048?(e[n++]=a>>6|192,e[n++]=a&63|128):(a&64512)===55296&&r+1<i.length&&(i.charCodeAt(r+1)&64512)===56320?(a=65536+((a&1023)<<10)+(i.charCodeAt(++r)&1023),e[n++]=a>>18|240,e[n++]=a>>12&63|128,e[n++]=a>>6&63|128,e[n++]=a&63|128):(e[n++]=a>>12|224,e[n++]=a>>6&63|128,e[n++]=a&63|128)}return e},Ao=function(i){const e=[];let n=0,r=0;for(;n<i.length;){const a=i[n++];if(a<128)e[r++]=String.fromCharCode(a);else if(a>191&&a<224){const h=i[n++];e[r++]=String.fromCharCode((a&31)<<6|h&63)}else if(a>239&&a<365){const h=i[n++],l=i[n++],y=i[n++],w=((a&7)<<18|(h&63)<<12|(l&63)<<6|y&63)-65536;e[r++]=String.fromCharCode(55296+(w>>10)),e[r++]=String.fromCharCode(56320+(w&1023))}else{const h=i[n++],l=i[n++];e[r++]=String.fromCharCode((a&15)<<12|(h&63)<<6|l&63)}}return e.join("")},Kr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let a=0;a<i.length;a+=3){const h=i[a],l=a+1<i.length,y=l?i[a+1]:0,w=a+2<i.length,E=w?i[a+2]:0,S=h>>2,C=(h&3)<<4|y>>4;let k=(y&15)<<2|E>>6,x=E&63;w||(x=64,l||(k=64)),r.push(n[S],n[C],n[k],n[x])}return r.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(Gr(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):Ao(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let a=0;a<i.length;){const h=n[i.charAt(a++)],y=a<i.length?n[i.charAt(a)]:0;++a;const E=a<i.length?n[i.charAt(a)]:64;++a;const C=a<i.length?n[i.charAt(a)]:64;if(++a,h==null||y==null||E==null||C==null)throw new So;const k=h<<2|y>>4;if(r.push(k),E!==64){const x=y<<4&240|E>>2;if(r.push(x),C!==64){const R=E<<6&192|C;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class So extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const bo=function(i){const e=Gr(i);return Kr.encodeByteArray(e,!0)},qt=function(i){return bo(i).replace(/\./g,"")},qr=function(i){try{return Kr.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ro(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ko=()=>Ro().__FIREBASE_DEFAULTS__,Po=()=>{if(typeof process>"u"||typeof ur>"u")return;const i=ur.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},Co=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&qr(i[1]);return e&&JSON.parse(e)},Jn=()=>{try{return ko()||Po()||Co()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},Jr=i=>{var e,n;return(n=(e=Jn())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[i]},Oo=i=>{const e=Jr(i);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Xr=()=>{var i;return(i=Jn())===null||i===void 0?void 0:i.config},Yr=i=>{var e;return(e=Jn())===null||e===void 0?void 0:e[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function No(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",a=i.iat||0,h=i.sub||i.user_id;if(!h)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:a,exp:a+3600,auth_time:a,sub:h,user_id:h,firebase:{sign_in_provider:"custom",identities:{}}},i);return[qt(JSON.stringify(n)),qt(JSON.stringify(l)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Lo(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(K())}function Mo(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Uo(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function xo(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Fo(){const i=K();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function jo(){try{return typeof indexedDB=="object"}catch{return!1}}function Bo(){return new Promise((i,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(r);a.onsuccess=()=>{a.result.close(),n||self.indexedDB.deleteDatabase(r),i(!0)},a.onupgradeneeded=()=>{n=!1},a.onerror=()=>{var h;e(((h=a.error)===null||h===void 0?void 0:h.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vo="FirebaseError";class ge extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Vo,Object.setPrototypeOf(this,ge.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_t.prototype.create)}}class _t{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},a=`${this.service}/${e}`,h=this.errors[e],l=h?Ho(h,r):"Error",y=`${this.serviceName}: ${l} (${a}).`;return new ge(a,y,r)}}function Ho(i,e){return i.replace($o,(n,r)=>{const a=e[r];return a!=null?String(a):`<${r}?>`})}const $o=/\{\$([^}]+)}/g;function zo(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function Jt(i,e){if(i===e)return!0;const n=Object.keys(i),r=Object.keys(e);for(const a of n){if(!r.includes(a))return!1;const h=i[a],l=e[a];if(dr(h)&&dr(l)){if(!Jt(h,l))return!1}else if(h!==l)return!1}for(const a of r)if(!n.includes(a))return!1;return!0}function dr(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(i){const e=[];for(const[n,r]of Object.entries(i))Array.isArray(r)?r.forEach(a=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Wo(i,e){const n=new Go(i,e);return n.subscribe.bind(n)}class Go{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let a;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Ko(e,["next","error","complete"])?a=e:a={next:e,error:n,complete:r},a.next===void 0&&(a.next=Nn),a.error===void 0&&(a.error=Nn),a.complete===void 0&&(a.complete=Nn);const h=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),h}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ko(i,e){if(typeof i!="object"||i===null)return!1;for(const n of e)if(n in i&&typeof i[n]=="function")return!0;return!1}function Nn(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(i){return i&&i._delegate?i._delegate:i}class Me{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ne="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Do;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:n});a&&r.resolve(a)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),a=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(h){if(a)return null;throw h}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Xo(e))try{this.getOrInitializeService({instanceIdentifier:Ne})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(n);try{const h=this.getOrInitializeService({instanceIdentifier:a});r.resolve(h)}catch{}}}}clearInstance(e=Ne){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ne){return this.instances.has(e)}getOptions(e=Ne){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[h,l]of this.instancesDeferred.entries()){const y=this.normalizeInstanceIdentifier(h);r===y&&l.resolve(a)}return a}onInit(e,n){var r;const a=this.normalizeInstanceIdentifier(n),h=(r=this.onInitCallbacks.get(a))!==null&&r!==void 0?r:new Set;h.add(e),this.onInitCallbacks.set(a,h);const l=this.instances.get(a);return l&&e(l,a),()=>{h.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const a of r)try{a(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Jo(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ne){return this.component?this.component.multipleInstances?e:Ne:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Jo(i){return i===Ne?void 0:i}function Xo(i){return i.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new qo(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var O;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(O||(O={}));const Qo={debug:O.DEBUG,verbose:O.VERBOSE,info:O.INFO,warn:O.WARN,error:O.ERROR,silent:O.SILENT},Zo=O.INFO,ea={[O.DEBUG]:"log",[O.VERBOSE]:"log",[O.INFO]:"info",[O.WARN]:"warn",[O.ERROR]:"error"},ta=(i,e,...n)=>{if(e<i.logLevel)return;const r=new Date().toISOString(),a=ea[e];if(a)console[a](`[${r}]  ${i.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Xn{constructor(e){this.name=e,this._logLevel=Zo,this._logHandler=ta,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in O))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Qo[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,O.DEBUG,...e),this._logHandler(this,O.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,O.VERBOSE,...e),this._logHandler(this,O.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,O.INFO,...e),this._logHandler(this,O.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,O.WARN,...e),this._logHandler(this,O.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,O.ERROR,...e),this._logHandler(this,O.ERROR,...e)}}const na=(i,e)=>e.some(n=>i instanceof n);let fr,pr;function ia(){return fr||(fr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ra(){return pr||(pr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Qr=new WeakMap,Vn=new WeakMap,Zr=new WeakMap,Ln=new WeakMap,Yn=new WeakMap;function sa(i){const e=new Promise((n,r)=>{const a=()=>{i.removeEventListener("success",h),i.removeEventListener("error",l)},h=()=>{n(Se(i.result)),a()},l=()=>{r(i.error),a()};i.addEventListener("success",h),i.addEventListener("error",l)});return e.then(n=>{n instanceof IDBCursor&&Qr.set(n,i)}).catch(()=>{}),Yn.set(e,i),e}function oa(i){if(Vn.has(i))return;const e=new Promise((n,r)=>{const a=()=>{i.removeEventListener("complete",h),i.removeEventListener("error",l),i.removeEventListener("abort",l)},h=()=>{n(),a()},l=()=>{r(i.error||new DOMException("AbortError","AbortError")),a()};i.addEventListener("complete",h),i.addEventListener("error",l),i.addEventListener("abort",l)});Vn.set(i,e)}let Hn={get(i,e,n){if(i instanceof IDBTransaction){if(e==="done")return Vn.get(i);if(e==="objectStoreNames")return i.objectStoreNames||Zr.get(i);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Se(i[e])},set(i,e,n){return i[e]=n,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function aa(i){Hn=i(Hn)}function ha(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=i.call(Mn(this),e,...n);return Zr.set(r,e.sort?e.sort():[e]),Se(r)}:ra().includes(i)?function(...e){return i.apply(Mn(this),e),Se(Qr.get(this))}:function(...e){return Se(i.apply(Mn(this),e))}}function ca(i){return typeof i=="function"?ha(i):(i instanceof IDBTransaction&&oa(i),na(i,ia())?new Proxy(i,Hn):i)}function Se(i){if(i instanceof IDBRequest)return sa(i);if(Ln.has(i))return Ln.get(i);const e=ca(i);return e!==i&&(Ln.set(i,e),Yn.set(e,i)),e}const Mn=i=>Yn.get(i);function la(i,e,{blocked:n,upgrade:r,blocking:a,terminated:h}={}){const l=indexedDB.open(i,e),y=Se(l);return r&&l.addEventListener("upgradeneeded",w=>{r(Se(l.result),w.oldVersion,w.newVersion,Se(l.transaction),w)}),n&&l.addEventListener("blocked",w=>n(w.oldVersion,w.newVersion,w)),y.then(w=>{h&&w.addEventListener("close",()=>h()),a&&w.addEventListener("versionchange",E=>a(E.oldVersion,E.newVersion,E))}).catch(()=>{}),y}const ua=["get","getKey","getAll","getAllKeys","count"],da=["put","add","delete","clear"],Un=new Map;function gr(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(Un.get(e))return Un.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,a=da.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(a||ua.includes(n)))return;const h=async function(l,...y){const w=this.transaction(l,a?"readwrite":"readonly");let E=w.store;return r&&(E=E.index(y.shift())),(await Promise.all([E[n](...y),a&&w.done]))[0]};return Un.set(e,h),h}aa(i=>({...i,get:(e,n,r)=>gr(e,n)||i.get(e,n,r),has:(e,n)=>!!gr(e,n)||i.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(pa(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function pa(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const $n="@firebase/app",mr="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fe=new Xn("@firebase/app"),ga="@firebase/app-compat",ma="@firebase/analytics-compat",va="@firebase/analytics",ya="@firebase/app-check-compat",_a="@firebase/app-check",Ia="@firebase/auth",wa="@firebase/auth-compat",Ea="@firebase/database",Ta="@firebase/data-connect",Aa="@firebase/database-compat",Sa="@firebase/functions",ba="@firebase/functions-compat",Ra="@firebase/installations",ka="@firebase/installations-compat",Pa="@firebase/messaging",Ca="@firebase/messaging-compat",Oa="@firebase/performance",Da="@firebase/performance-compat",Na="@firebase/remote-config",La="@firebase/remote-config-compat",Ma="@firebase/storage",Ua="@firebase/storage-compat",xa="@firebase/firestore",Fa="@firebase/vertexai-preview",ja="@firebase/firestore-compat",Ba="firebase",Va="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn="[DEFAULT]",Ha={[$n]:"fire-core",[ga]:"fire-core-compat",[va]:"fire-analytics",[ma]:"fire-analytics-compat",[_a]:"fire-app-check",[ya]:"fire-app-check-compat",[Ia]:"fire-auth",[wa]:"fire-auth-compat",[Ea]:"fire-rtdb",[Ta]:"fire-data-connect",[Aa]:"fire-rtdb-compat",[Sa]:"fire-fn",[ba]:"fire-fn-compat",[Ra]:"fire-iid",[ka]:"fire-iid-compat",[Pa]:"fire-fcm",[Ca]:"fire-fcm-compat",[Oa]:"fire-perf",[Da]:"fire-perf-compat",[Na]:"fire-rc",[La]:"fire-rc-compat",[Ma]:"fire-gcs",[Ua]:"fire-gcs-compat",[xa]:"fire-fst",[ja]:"fire-fst-compat",[Fa]:"fire-vertex","fire-js":"fire-js",[Ba]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt=new Map,$a=new Map,Wn=new Map;function vr(i,e){try{i.container.addComponent(e)}catch(n){fe.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,n)}}function Ge(i){const e=i.name;if(Wn.has(e))return fe.debug(`There were multiple attempts to register component ${e}.`),!1;Wn.set(e,i);for(const n of Xt.values())vr(n,i);for(const n of $a.values())vr(n,i);return!0}function Qn(i,e){const n=i.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),i.container.getProvider(e)}function ie(i){return i.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const za={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},be=new _t("app","Firebase",za);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Me("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw be.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Je=Va;function Ga(i,e={}){let n=i;typeof e!="object"&&(e={name:e});const r=Object.assign({name:zn,automaticDataCollectionEnabled:!1},e),a=r.name;if(typeof a!="string"||!a)throw be.create("bad-app-name",{appName:String(a)});if(n||(n=Xr()),!n)throw be.create("no-options");const h=Xt.get(a);if(h){if(Jt(n,h.options)&&Jt(r,h.config))return h;throw be.create("duplicate-app",{appName:a})}const l=new Yo(a);for(const w of Wn.values())l.addComponent(w);const y=new Wa(n,r,l);return Xt.set(a,y),y}function es(i=zn){const e=Xt.get(i);if(!e&&i===zn&&Xr())return Ga();if(!e)throw be.create("no-app",{appName:i});return e}function Re(i,e,n){var r;let a=(r=Ha[i])!==null&&r!==void 0?r:i;n&&(a+=`-${n}`);const h=a.match(/\s|\//),l=e.match(/\s|\//);if(h||l){const y=[`Unable to register library "${a}" with version "${e}":`];h&&y.push(`library name "${a}" contains illegal characters (whitespace or "/")`),h&&l&&y.push("and"),l&&y.push(`version name "${e}" contains illegal characters (whitespace or "/")`),fe.warn(y.join(" "));return}Ge(new Me(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ka="firebase-heartbeat-database",qa=1,vt="firebase-heartbeat-store";let xn=null;function ts(){return xn||(xn=la(Ka,qa,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(vt)}catch(n){console.warn(n)}}}}).catch(i=>{throw be.create("idb-open",{originalErrorMessage:i.message})})),xn}async function Ja(i){try{const n=(await ts()).transaction(vt),r=await n.objectStore(vt).get(ns(i));return await n.done,r}catch(e){if(e instanceof ge)fe.warn(e.message);else{const n=be.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});fe.warn(n.message)}}}async function yr(i,e){try{const r=(await ts()).transaction(vt,"readwrite");await r.objectStore(vt).put(e,ns(i)),await r.done}catch(n){if(n instanceof ge)fe.warn(n.message);else{const r=be.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});fe.warn(r.message)}}}function ns(i){return`${i.name}!${i.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xa=1024,Ya=30*24*60*60*1e3;class Qa{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new eh(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),h=_r();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===h||this._heartbeatsCache.heartbeats.some(l=>l.date===h)?void 0:(this._heartbeatsCache.heartbeats.push({date:h,agent:a}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(l=>{const y=new Date(l.date).valueOf();return Date.now()-y<=Ya}),this._storage.overwrite(this._heartbeatsCache))}catch(r){fe.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=_r(),{heartbeatsToSend:r,unsentEntries:a}=Za(this._heartbeatsCache.heartbeats),h=qt(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),h}catch(n){return fe.warn(n),""}}}function _r(){return new Date().toISOString().substring(0,10)}function Za(i,e=Xa){const n=[];let r=i.slice();for(const a of i){const h=n.find(l=>l.agent===a.agent);if(h){if(h.dates.push(a.date),Ir(n)>e){h.dates.pop();break}}else if(n.push({agent:a.agent,dates:[a.date]}),Ir(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class eh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return jo()?Bo().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Ja(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const a=await this.read();return yr(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const a=await this.read();return yr(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function Ir(i){return qt(JSON.stringify({version:2,heartbeats:i})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function th(i){Ge(new Me("platform-logger",e=>new fa(e),"PRIVATE")),Ge(new Me("heartbeat",e=>new Qa(e),"PRIVATE")),Re($n,mr,i),Re($n,mr,"esm2017"),Re("fire-js","")}th("");function Zn(i,e){var n={};for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&e.indexOf(r)<0&&(n[r]=i[r]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(i);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(i,r[a])&&(n[r[a]]=i[r[a]]);return n}function is(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const nh=is,rs=new _t("auth","Firebase",is());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yt=new Xn("@firebase/auth");function ih(i,...e){Yt.logLevel<=O.WARN&&Yt.warn(`Auth (${Je}): ${i}`,...e)}function zt(i,...e){Yt.logLevel<=O.ERROR&&Yt.error(`Auth (${Je}): ${i}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(i,...e){throw ti(i,...e)}function ne(i,...e){return ti(i,...e)}function ei(i,e,n){const r=Object.assign(Object.assign({},nh()),{[e]:n});return new _t("auth","Firebase",r).create(e,{appName:i.name})}function ke(i){return ei(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ss(i,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&se(i,"argument-error"),ei(i,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ti(i,...e){if(typeof i!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=i.name),i._errorFactory.create(n,...r)}return rs.create(i,...e)}function A(i,e,...n){if(!i)throw ti(e,...n)}function le(i){const e="INTERNAL ASSERTION FAILED: "+i;throw zt(e),new Error(e)}function pe(i,e){i||le(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function rh(){return wr()==="http:"||wr()==="https:"}function wr(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sh(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(rh()||Uo()||"connection"in navigator)?navigator.onLine:!0}function oh(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e,n){this.shortDelay=e,this.longDelay=n,pe(n>e,"Short delay should be less than long delay!"),this.isMobile=Lo()||xo()}get(){return sh()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ni(i,e){pe(i.emulator,"Emulator should always be set here");const{url:n}=i.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;le("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;le("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;le("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ah={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hh=new wt(3e4,6e4);function ii(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function Xe(i,e,n,r,a={}){return as(i,a,async()=>{let h={},l={};r&&(e==="GET"?l=r:h={body:JSON.stringify(r)});const y=It(Object.assign({key:i.config.apiKey},l)).slice(1),w=await i._getAdditionalHeaders();w["Content-Type"]="application/json",i.languageCode&&(w["X-Firebase-Locale"]=i.languageCode);const E=Object.assign({method:e,headers:w},h);return Mo()||(E.referrerPolicy="no-referrer"),os.fetch()(hs(i,i.config.apiHost,n,y),E)})}async function as(i,e,n){i._canInitEmulator=!1;const r=Object.assign(Object.assign({},ah),e);try{const a=new lh(i),h=await Promise.race([n(),a.promise]);a.clearNetworkTimeout();const l=await h.json();if("needConfirmation"in l)throw Ht(i,"account-exists-with-different-credential",l);if(h.ok&&!("errorMessage"in l))return l;{const y=h.ok?l.errorMessage:l.error.message,[w,E]=y.split(" : ");if(w==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ht(i,"credential-already-in-use",l);if(w==="EMAIL_EXISTS")throw Ht(i,"email-already-in-use",l);if(w==="USER_DISABLED")throw Ht(i,"user-disabled",l);const S=r[w]||w.toLowerCase().replace(/[_\s]+/g,"-");if(E)throw ei(i,S,E);se(i,S)}}catch(a){if(a instanceof ge)throw a;se(i,"network-request-failed",{message:String(a)})}}async function ch(i,e,n,r,a={}){const h=await Xe(i,e,n,r,a);return"mfaPendingCredential"in h&&se(i,"multi-factor-auth-required",{_serverResponse:h}),h}function hs(i,e,n,r){const a=`${e}${n}?${r}`;return i.config.emulator?ni(i.config,a):`${i.config.apiScheme}://${a}`}class lh{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ne(this.auth,"network-request-failed")),hh.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ht(i,e,n){const r={appName:i.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const a=ne(i,e,r);return a.customData._tokenResponse=n,a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uh(i,e){return Xe(i,"POST","/v1/accounts:delete",e)}async function cs(i,e){return Xe(i,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function dh(i,e=!1){const n=xe(i),r=await n.getIdToken(e),a=ri(r);A(a&&a.exp&&a.auth_time&&a.iat,n.auth,"internal-error");const h=typeof a.firebase=="object"?a.firebase:void 0,l=h==null?void 0:h.sign_in_provider;return{claims:a,token:r,authTime:pt(Fn(a.auth_time)),issuedAtTime:pt(Fn(a.iat)),expirationTime:pt(Fn(a.exp)),signInProvider:l||null,signInSecondFactor:(h==null?void 0:h.sign_in_second_factor)||null}}function Fn(i){return Number(i)*1e3}function ri(i){const[e,n,r]=i.split(".");if(e===void 0||n===void 0||r===void 0)return zt("JWT malformed, contained fewer than 3 sections"),null;try{const a=qr(n);return a?JSON.parse(a):(zt("Failed to decode base64 JWT payload"),null)}catch(a){return zt("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function Er(i){const e=ri(i);return A(e,"internal-error"),A(typeof e.exp<"u","internal-error"),A(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yt(i,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof ge&&fh(r)&&i.auth.currentUser===i&&await i.auth.signOut(),r}}function fh({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const a=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,a)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=pt(this.lastLoginAt),this.creationTime=pt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qt(i){var e;const n=i.auth,r=await i.getIdToken(),a=await yt(i,cs(n,{idToken:r}));A(a==null?void 0:a.users.length,n,"internal-error");const h=a.users[0];i._notifyReloadListener(h);const l=!((e=h.providerUserInfo)===null||e===void 0)&&e.length?ls(h.providerUserInfo):[],y=mh(i.providerData,l),w=i.isAnonymous,E=!(i.email&&h.passwordHash)&&!(y!=null&&y.length),S=w?E:!1,C={uid:h.localId,displayName:h.displayName||null,photoURL:h.photoUrl||null,email:h.email||null,emailVerified:h.emailVerified||!1,phoneNumber:h.phoneNumber||null,tenantId:h.tenantId||null,providerData:y,metadata:new Kn(h.createdAt,h.lastLoginAt),isAnonymous:S};Object.assign(i,C)}async function gh(i){const e=xe(i);await Qt(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function mh(i,e){return[...i.filter(r=>!e.some(a=>a.providerId===r.providerId)),...e]}function ls(i){return i.map(e=>{var{providerId:n}=e,r=Zn(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vh(i,e){const n=await as(i,{},async()=>{const r=It({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:h}=i.config,l=hs(i,a,"/v1/token",`key=${h}`),y=await i._getAdditionalHeaders();return y["Content-Type"]="application/x-www-form-urlencoded",os.fetch()(l,{method:"POST",headers:y,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function yh(i,e){return Xe(i,"POST","/v2/accounts:revokeToken",ii(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){A(e.idToken,"internal-error"),A(typeof e.idToken<"u","internal-error"),A(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Er(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){A(e.length!==0,"internal-error");const n=Er(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(A(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:a,expiresIn:h}=await vh(e,n);this.updateTokensAndExpiration(r,a,Number(h))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:a,expirationTime:h}=n,l=new $e;return r&&(A(typeof r=="string","internal-error",{appName:e}),l.refreshToken=r),a&&(A(typeof a=="string","internal-error",{appName:e}),l.accessToken=a),h&&(A(typeof h=="number","internal-error",{appName:e}),l.expirationTime=h),l}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new $e,this.toJSON())}_performRefresh(){return le("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(i,e){A(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class ue{constructor(e){var{uid:n,auth:r,stsTokenManager:a}=e,h=Zn(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ph(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=h.displayName||null,this.email=h.email||null,this.emailVerified=h.emailVerified||!1,this.phoneNumber=h.phoneNumber||null,this.photoURL=h.photoURL||null,this.isAnonymous=h.isAnonymous||!1,this.tenantId=h.tenantId||null,this.providerData=h.providerData?[...h.providerData]:[],this.metadata=new Kn(h.createdAt||void 0,h.lastLoginAt||void 0)}async getIdToken(e){const n=await yt(this,this.stsTokenManager.getToken(this.auth,e));return A(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return dh(this,e)}reload(){return gh(this)}_assign(e){this!==e&&(A(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ue(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){A(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Qt(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ie(this.auth.app))return Promise.reject(ke(this.auth));const e=await this.getIdToken();return await yt(this,uh(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,a,h,l,y,w,E,S;const C=(r=n.displayName)!==null&&r!==void 0?r:void 0,k=(a=n.email)!==null&&a!==void 0?a:void 0,x=(h=n.phoneNumber)!==null&&h!==void 0?h:void 0,R=(l=n.photoURL)!==null&&l!==void 0?l:void 0,U=(y=n.tenantId)!==null&&y!==void 0?y:void 0,L=(w=n._redirectEventId)!==null&&w!==void 0?w:void 0,oe=(E=n.createdAt)!==null&&E!==void 0?E:void 0,Y=(S=n.lastLoginAt)!==null&&S!==void 0?S:void 0,{uid:j,emailVerified:Z,isAnonymous:Pe,providerData:q,stsTokenManager:m}=n;A(j&&m,e,"internal-error");const u=$e.fromJSON(this.name,m);A(typeof j=="string",e,"internal-error"),Ie(C,e.name),Ie(k,e.name),A(typeof Z=="boolean",e,"internal-error"),A(typeof Pe=="boolean",e,"internal-error"),Ie(x,e.name),Ie(R,e.name),Ie(U,e.name),Ie(L,e.name),Ie(oe,e.name),Ie(Y,e.name);const f=new ue({uid:j,auth:e,email:k,emailVerified:Z,displayName:C,isAnonymous:Pe,photoURL:R,phoneNumber:x,tenantId:U,stsTokenManager:u,createdAt:oe,lastLoginAt:Y});return q&&Array.isArray(q)&&(f.providerData=q.map(p=>Object.assign({},p))),L&&(f._redirectEventId=L),f}static async _fromIdTokenResponse(e,n,r=!1){const a=new $e;a.updateFromServerResponse(n);const h=new ue({uid:n.localId,auth:e,stsTokenManager:a,isAnonymous:r});return await Qt(h),h}static async _fromGetAccountInfoResponse(e,n,r){const a=n.users[0];A(a.localId!==void 0,"internal-error");const h=a.providerUserInfo!==void 0?ls(a.providerUserInfo):[],l=!(a.email&&a.passwordHash)&&!(h!=null&&h.length),y=new $e;y.updateFromIdToken(r);const w=new ue({uid:a.localId,auth:e,stsTokenManager:y,isAnonymous:l}),E={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:h,metadata:new Kn(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!(h!=null&&h.length)};return Object.assign(w,E),w}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr=new Map;function de(i){pe(i instanceof Function,"Expected a class definition");let e=Tr.get(i);return e?(pe(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,Tr.set(i,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}us.type="NONE";const Ar=us;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(i,e,n){return`firebase:${i}:${e}:${n}`}class ze{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:a,name:h}=this.auth;this.fullUserKey=Wt(this.userKey,a.apiKey,h),this.fullPersistenceKey=Wt("persistence",a.apiKey,h),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ue._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ze(de(Ar),e,r);const a=(await Promise.all(n.map(async E=>{if(await E._isAvailable())return E}))).filter(E=>E);let h=a[0]||de(Ar);const l=Wt(r,e.config.apiKey,e.name);let y=null;for(const E of n)try{const S=await E._get(l);if(S){const C=ue._fromJSON(e,S);E!==h&&(y=C),h=E;break}}catch{}const w=a.filter(E=>E._shouldAllowMigration);return!h._shouldAllowMigration||!w.length?new ze(h,e,r):(h=w[0],y&&await h._set(l,y.toJSON()),await Promise.all(n.map(async E=>{if(E!==h)try{await E._remove(l)}catch{}})),new ze(h,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sr(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(gs(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ds(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(vs(e))return"Blackberry";if(ys(e))return"Webos";if(fs(e))return"Safari";if((e.includes("chrome/")||ps(e))&&!e.includes("edge/"))return"Chrome";if(ms(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=i.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ds(i=K()){return/firefox\//i.test(i)}function fs(i=K()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ps(i=K()){return/crios\//i.test(i)}function gs(i=K()){return/iemobile/i.test(i)}function ms(i=K()){return/android/i.test(i)}function vs(i=K()){return/blackberry/i.test(i)}function ys(i=K()){return/webos/i.test(i)}function si(i=K()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function _h(i=K()){var e;return si(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Ih(){return Fo()&&document.documentMode===10}function _s(i=K()){return si(i)||ms(i)||ys(i)||vs(i)||/windows phone/i.test(i)||gs(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Is(i,e=[]){let n;switch(i){case"Browser":n=Sr(K());break;case"Worker":n=`${Sr(K())}-${i}`;break;default:n=i}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Je}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=h=>new Promise((l,y)=>{try{const w=e(h);l(w)}catch(w){y(w)}});r.onAbort=n,this.queue.push(r);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const a of n)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Eh(i,e={}){return Xe(i,"GET","/v2/passwordPolicy",ii(i,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Th=6;class Ah{constructor(e){var n,r,a,h;const l=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=l.minPasswordLength)!==null&&n!==void 0?n:Th,l.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=l.maxPasswordLength),l.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=l.containsLowercaseCharacter),l.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=l.containsUppercaseCharacter),l.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=l.containsNumericCharacter),l.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=l.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(a=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&a!==void 0?a:"",this.forceUpgradeOnSignin=(h=e.forceUpgradeOnSignin)!==null&&h!==void 0?h:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,a,h,l,y;const w={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,w),this.validatePasswordCharacterOptions(e,w),w.isValid&&(w.isValid=(n=w.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),w.isValid&&(w.isValid=(r=w.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),w.isValid&&(w.isValid=(a=w.containsLowercaseLetter)!==null&&a!==void 0?a:!0),w.isValid&&(w.isValid=(h=w.containsUppercaseLetter)!==null&&h!==void 0?h:!0),w.isValid&&(w.isValid=(l=w.containsNumericCharacter)!==null&&l!==void 0?l:!0),w.isValid&&(w.isValid=(y=w.containsNonAlphanumericCharacter)!==null&&y!==void 0?y:!0),w}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),a&&(n.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let a=0;a<e.length;a++)r=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,a,h){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=h))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(e,n,r,a){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new br(this),this.idTokenSubscription=new br(this),this.beforeStateQueue=new wh(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=rs,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=de(n)),this._initializationPromise=this.queue(async()=>{var r,a;if(!this._deleted&&(this.persistenceManager=await ze.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((a=this.currentUser)===null||a===void 0?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await cs(this,{idToken:e}),r=await ue._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(ie(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(y=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(y,y))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let a=r,h=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,y=a==null?void 0:a._redirectEventId,w=await this.tryRedirectSignIn(e);(!l||l===y)&&(w!=null&&w.user)&&(a=w.user,h=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(h)try{await this.beforeStateQueue.runMiddleware(a)}catch(l){a=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return A(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Qt(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=oh()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ie(this.app))return Promise.reject(ke(this));const n=e?xe(e):null;return n&&A(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&A(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ie(this.app)?Promise.reject(ke(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ie(this.app)?Promise.reject(ke(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(de(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Eh(this),n=new Ah(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new _t("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await yh(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&de(e)||this._popupRedirectResolver;A(n,this,"argument-error"),this.redirectPersistenceManager=await ze.create(this,[de(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,a){if(this._deleted)return()=>{};const h=typeof n=="function"?n:n.next.bind(n);let l=!1;const y=this._isInitialized?Promise.resolve():this._initializationPromise;if(A(y,this,"internal-error"),y.then(()=>{l||h(this.currentUser)}),typeof n=="function"){const w=e.addObserver(n,r,a);return()=>{l=!0,w()}}else{const w=e.addObserver(n);return()=>{l=!0,w()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return A(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Is(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const a=await this._getAppCheckToken();return a&&(n["X-Firebase-AppCheck"]=a),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&ih(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Et(i){return xe(i)}class br{constructor(e){this.auth=e,this.observer=null,this.addObserver=Wo(n=>this.observer=n)}get next(){return A(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function bh(i){oi=i}function Rh(i){return oi.loadJS(i)}function kh(){return oi.gapiScript}function Ph(i){return`__${i}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ch(i,e){const n=Qn(i,"auth");if(n.isInitialized()){const a=n.getImmediate(),h=n.getOptions();if(Jt(h,e??{}))return a;se(a,"already-initialized")}return n.initialize({options:e})}function Oh(i,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(de);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Dh(i,e,n){const r=Et(i);A(r._canInitEmulator,r,"emulator-config-failed"),A(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const a=!1,h=ws(e),{host:l,port:y}=Nh(e),w=y===null?"":`:${y}`;r.config.emulator={url:`${h}//${l}${w}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:l,port:y,protocol:h.replace(":",""),options:Object.freeze({disableWarnings:a})}),Lh()}function ws(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function Nh(i){const e=ws(i),n=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(r);if(a){const h=a[1];return{host:h,port:Rr(r.substr(h.length+1))}}else{const[h,l]=r.split(":");return{host:h,port:Rr(l)}}}function Rr(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function Lh(){function i(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return le("not implemented")}_getIdTokenResponse(e){return le("not implemented")}_linkToIdToken(e,n){return le("not implemented")}_getReauthenticationResolver(e){return le("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function We(i,e){return ch(i,"POST","/v1/accounts:signInWithIdp",ii(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mh="http://localhost";class Ue extends Es{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ue(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):se("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:a}=n,h=Zn(n,["providerId","signInMethod"]);if(!r||!a)return null;const l=new Ue(r,a);return l.idToken=h.idToken||void 0,l.accessToken=h.accessToken||void 0,l.secret=h.secret,l.nonce=h.nonce,l.pendingToken=h.pendingToken||null,l}_getIdTokenResponse(e){const n=this.buildRequest();return We(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,We(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,We(e,n)}buildRequest(){const e={requestUri:Mh,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=It(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt extends rn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we extends Tt{constructor(){super("facebook.com")}static credential(e){return Ue._fromParams({providerId:we.PROVIDER_ID,signInMethod:we.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return we.credentialFromTaggedObject(e)}static credentialFromError(e){return we.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return we.credential(e.oauthAccessToken)}catch{return null}}}we.FACEBOOK_SIGN_IN_METHOD="facebook.com";we.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee extends Tt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ue._fromParams({providerId:Ee.PROVIDER_ID,signInMethod:Ee.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ee.credentialFromTaggedObject(e)}static credentialFromError(e){return Ee.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ee.credential(n,r)}catch{return null}}}Ee.GOOGLE_SIGN_IN_METHOD="google.com";Ee.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te extends Tt{constructor(){super("github.com")}static credential(e){return Ue._fromParams({providerId:Te.PROVIDER_ID,signInMethod:Te.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Te.credentialFromTaggedObject(e)}static credentialFromError(e){return Te.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Te.credential(e.oauthAccessToken)}catch{return null}}}Te.GITHUB_SIGN_IN_METHOD="github.com";Te.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae extends Tt{constructor(){super("twitter.com")}static credential(e,n){return Ue._fromParams({providerId:Ae.PROVIDER_ID,signInMethod:Ae.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ae.credentialFromTaggedObject(e)}static credentialFromError(e){return Ae.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Ae.credential(n,r)}catch{return null}}}Ae.TWITTER_SIGN_IN_METHOD="twitter.com";Ae.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,a=!1){const h=await ue._fromIdTokenResponse(e,r,a),l=kr(r);return new Ke({user:h,providerId:l,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const a=kr(r);return new Ke({user:e,providerId:a,_tokenResponse:r,operationType:n})}}function kr(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt extends ge{constructor(e,n,r,a){var h;super(n.code,n.message),this.operationType=r,this.user=a,Object.setPrototypeOf(this,Zt.prototype),this.customData={appName:e.name,tenantId:(h=e.tenantId)!==null&&h!==void 0?h:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,a){return new Zt(e,n,r,a)}}function Ts(i,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(i):n._getIdTokenResponse(i)).catch(h=>{throw h.code==="auth/multi-factor-auth-required"?Zt._fromErrorAndOperation(i,h,e,r):h})}async function Uh(i,e,n=!1){const r=await yt(i,e._linkToIdToken(i.auth,await i.getIdToken()),n);return Ke._forOperation(i,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xh(i,e,n=!1){const{auth:r}=i;if(ie(r.app))return Promise.reject(ke(r));const a="reauthenticate";try{const h=await yt(i,Ts(r,a,e,i),n);A(h.idToken,r,"internal-error");const l=ri(h.idToken);A(l,r,"internal-error");const{sub:y}=l;return A(i.uid===y,r,"user-mismatch"),Ke._forOperation(i,a,h)}catch(h){throw(h==null?void 0:h.code)==="auth/user-not-found"&&se(r,"user-mismatch"),h}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fh(i,e,n=!1){if(ie(i.app))return Promise.reject(ke(i));const r="signIn",a=await Ts(i,r,e),h=await Ke._fromIdTokenResponse(i,r,a);return n||await i._updateCurrentUser(h.user),h}function jh(i,e,n,r){return xe(i).onIdTokenChanged(e,n,r)}function Bh(i,e,n){return xe(i).beforeAuthStateChanged(e,n)}function gl(i,e,n,r){return xe(i).onAuthStateChanged(e,n,r)}const en="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(en,"1"),this.storage.removeItem(en),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vh=1e3,Hh=10;class Ss extends As{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=_s(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),a=this.localCache[n];r!==a&&e(n,a,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((l,y,w)=>{this.notifyListeners(l,w)});return}const r=e.key;n?this.detachListener():this.stopPolling();const a=()=>{const l=this.storage.getItem(r);!n&&this.localCache[r]===l||this.notifyListeners(r,l)},h=this.storage.getItem(r);Ih()&&h!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,Hh):a()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const a of Array.from(r))a(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Vh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ss.type="LOCAL";const $h=Ss;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs extends As{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}bs.type="SESSION";const Rs=bs;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zh(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(a=>a.isListeningto(e));if(n)return n;const r=new sn(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:a,data:h}=n.data,l=this.handlersMap[a];if(!(l!=null&&l.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:a});const y=Array.from(l).map(async E=>E(n.origin,h)),w=await zh(y);n.ports[0].postMessage({status:"done",eventId:r,eventType:a,response:w})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}sn.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(i="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return i+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let h,l;return new Promise((y,w)=>{const E=ai("",20);a.port1.start();const S=setTimeout(()=>{w(new Error("unsupported_event"))},r);l={messageChannel:a,onMessage(C){const k=C;if(k.data.eventId===E)switch(k.data.status){case"ack":clearTimeout(S),h=setTimeout(()=>{w(new Error("timeout"))},3e3);break;case"done":clearTimeout(h),y(k.data.response);break;default:clearTimeout(S),clearTimeout(h),w(new Error("invalid_response"));break}}},this.handlers.add(l),a.port1.addEventListener("message",l.onMessage),this.target.postMessage({eventType:e,eventId:E,data:n},[a.port2])}).finally(()=>{l&&this.removeMessageHandler(l)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(){return window}function Gh(i){re().location.href=i}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ks(){return typeof re().WorkerGlobalScope<"u"&&typeof re().importScripts=="function"}async function Kh(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function qh(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function Jh(){return ks()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ps="firebaseLocalStorageDb",Xh=1,tn="firebaseLocalStorage",Cs="fbase_key";class At{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function on(i,e){return i.transaction([tn],e?"readwrite":"readonly").objectStore(tn)}function Yh(){const i=indexedDB.deleteDatabase(Ps);return new At(i).toPromise()}function qn(){const i=indexedDB.open(Ps,Xh);return new Promise((e,n)=>{i.addEventListener("error",()=>{n(i.error)}),i.addEventListener("upgradeneeded",()=>{const r=i.result;try{r.createObjectStore(tn,{keyPath:Cs})}catch(a){n(a)}}),i.addEventListener("success",async()=>{const r=i.result;r.objectStoreNames.contains(tn)?e(r):(r.close(),await Yh(),e(await qn()))})})}async function Pr(i,e,n){const r=on(i,!0).put({[Cs]:e,value:n});return new At(r).toPromise()}async function Qh(i,e){const n=on(i,!1).get(e),r=await new At(n).toPromise();return r===void 0?null:r.value}function Cr(i,e){const n=on(i,!0).delete(e);return new At(n).toPromise()}const Zh=800,ec=3;class Os{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await qn(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>ec)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ks()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=sn._getInstance(Jh()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Kh(),!this.activeServiceWorker)return;this.sender=new Wh(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||qh()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await qn();return await Pr(e,en,"1"),await Cr(e,en),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Pr(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Qh(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Cr(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const h=on(a,!1).getAll();return new At(h).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:a,value:h}of e)r.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(h)&&(this.notifyListeners(a,h),n.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!r.has(a)&&(this.notifyListeners(a,null),n.push(a));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const a of Array.from(r))a(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Zh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Os.type="LOCAL";const tc=Os;new wt(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hi(i,e){return e?de(e):(A(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci extends Es{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return We(e,this._buildIdpRequest())}_linkToIdToken(e,n){return We(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return We(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function nc(i){return Fh(i.auth,new ci(i),i.bypassAuthState)}function ic(i){const{auth:e,user:n}=i;return A(n,e,"internal-error"),xh(n,new ci(i),i.bypassAuthState)}async function rc(i){const{auth:e,user:n}=i;return A(n,e,"internal-error"),Uh(n,new ci(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e,n,r,a,h=!1){this.auth=e,this.resolver=r,this.user=a,this.bypassAuthState=h,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:a,tenantId:h,error:l,type:y}=e;if(l){this.reject(l);return}const w={auth:this.auth,requestUri:n,sessionId:r,tenantId:h||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(y)(w))}catch(E){this.reject(E)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return nc;case"linkViaPopup":case"linkViaRedirect":return rc;case"reauthViaPopup":case"reauthViaRedirect":return ic;default:se(this.auth,"internal-error")}}resolve(e){pe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){pe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sc=new wt(2e3,1e4);async function ml(i,e,n){if(ie(i.app))return Promise.reject(ne(i,"operation-not-supported-in-this-environment"));const r=Et(i);ss(i,e,rn);const a=hi(r,n);return new Le(r,"signInViaPopup",e,a).executeNotNull()}class Le extends Ds{constructor(e,n,r,a,h){super(e,n,a,h),this.provider=r,this.authWindow=null,this.pollId=null,Le.currentPopupAction&&Le.currentPopupAction.cancel(),Le.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return A(e,this.auth,"internal-error"),e}async onExecution(){pe(this.filter.length===1,"Popup operations only handle one event");const e=ai();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ne(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ne(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Le.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ne(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,sc.get())};e()}}Le.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oc="pendingRedirect",Gt=new Map;class ac extends Ds{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Gt.get(this.auth._key());if(!e){try{const r=await hc(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Gt.set(this.auth._key(),e)}return this.bypassAuthState||Gt.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function hc(i,e){const n=Ls(e),r=Ns(i);if(!await r._isAvailable())return!1;const a=await r._get(n)==="true";return await r._remove(n),a}async function cc(i,e){return Ns(i)._set(Ls(e),"true")}function lc(i,e){Gt.set(i._key(),e)}function Ns(i){return de(i._redirectPersistence)}function Ls(i){return Wt(oc,i.config.apiKey,i.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vl(i,e,n){return uc(i,e,n)}async function uc(i,e,n){if(ie(i.app))return Promise.reject(ke(i));const r=Et(i);ss(i,e,rn),await r._initializationPromise;const a=hi(r,n);return await cc(a,r),a._openRedirect(r,e,"signInViaRedirect")}async function dc(i,e,n=!1){if(ie(i.app))return Promise.reject(ke(i));const r=Et(i),a=hi(r,e),l=await new ac(r,a,n).execute();return l&&!n&&(delete l.user._redirectEventId,await r._persistUserIfCurrent(l.user),await r._setRedirectUser(null,e)),l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fc=10*60*1e3;class pc{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!gc(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Ms(e)){const a=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ne(this.auth,a))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=fc&&this.cachedEventUids.clear(),this.cachedEventUids.has(Or(e))}saveEventToCache(e){this.cachedEventUids.add(Or(e)),this.lastProcessedEventTime=Date.now()}}function Or(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function Ms({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function gc(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ms(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mc(i,e={}){return Xe(i,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vc=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,yc=/^https?/;async function _c(i){if(i.config.emulator)return;const{authorizedDomains:e}=await mc(i);for(const n of e)try{if(Ic(n))return}catch{}se(i,"unauthorized-domain")}function Ic(i){const e=Gn(),{protocol:n,hostname:r}=new URL(e);if(i.startsWith("chrome-extension://")){const l=new URL(i);return l.hostname===""&&r===""?n==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&l.hostname===r}if(!yc.test(n))return!1;if(vc.test(i))return r===i;const a=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wc=new wt(3e4,6e4);function Dr(){const i=re().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let n=0;n<i.CP.length;n++)i.CP[n]=null}}function Ec(i){return new Promise((e,n)=>{var r,a,h;function l(){Dr(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Dr(),n(ne(i,"network-request-failed"))},timeout:wc.get()})}if(!((a=(r=re().gapi)===null||r===void 0?void 0:r.iframes)===null||a===void 0)&&a.Iframe)e(gapi.iframes.getContext());else if(!((h=re().gapi)===null||h===void 0)&&h.load)l();else{const y=Ph("iframefcb");return re()[y]=()=>{gapi.load?l():n(ne(i,"network-request-failed"))},Rh(`${kh()}?onload=${y}`).catch(w=>n(w))}}).catch(e=>{throw Kt=null,e})}let Kt=null;function Tc(i){return Kt=Kt||Ec(i),Kt}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ac=new wt(5e3,15e3),Sc="__/auth/iframe",bc="emulator/auth/iframe",Rc={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},kc=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Pc(i){const e=i.config;A(e.authDomain,i,"auth-domain-config-required");const n=e.emulator?ni(e,bc):`https://${i.config.authDomain}/${Sc}`,r={apiKey:e.apiKey,appName:i.name,v:Je},a=kc.get(i.config.apiHost);a&&(r.eid=a);const h=i._getFrameworks();return h.length&&(r.fw=h.join(",")),`${n}?${It(r).slice(1)}`}async function Cc(i){const e=await Tc(i),n=re().gapi;return A(n,i,"internal-error"),e.open({where:document.body,url:Pc(i),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Rc,dontclear:!0},r=>new Promise(async(a,h)=>{await r.restyle({setHideOnLeave:!1});const l=ne(i,"network-request-failed"),y=re().setTimeout(()=>{h(l)},Ac.get());function w(){re().clearTimeout(y),a(r)}r.ping(w).then(w,()=>{h(l)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oc={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Dc=500,Nc=600,Lc="_blank",Mc="http://localhost";class Nr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Uc(i,e,n,r=Dc,a=Nc){const h=Math.max((window.screen.availHeight-a)/2,0).toString(),l=Math.max((window.screen.availWidth-r)/2,0).toString();let y="";const w=Object.assign(Object.assign({},Oc),{width:r.toString(),height:a.toString(),top:h,left:l}),E=K().toLowerCase();n&&(y=ps(E)?Lc:n),ds(E)&&(e=e||Mc,w.scrollbars="yes");const S=Object.entries(w).reduce((k,[x,R])=>`${k}${x}=${R},`,"");if(_h(E)&&y!=="_self")return xc(e||"",y),new Nr(null);const C=window.open(e||"",y,S);A(C,i,"popup-blocked");try{C.focus()}catch{}return new Nr(C)}function xc(i,e){const n=document.createElement("a");n.href=i,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fc="__/auth/handler",jc="emulator/auth/handler",Bc=encodeURIComponent("fac");async function Lr(i,e,n,r,a,h){A(i.config.authDomain,i,"auth-domain-config-required"),A(i.config.apiKey,i,"invalid-api-key");const l={apiKey:i.config.apiKey,appName:i.name,authType:n,redirectUrl:r,v:Je,eventId:a};if(e instanceof rn){e.setDefaultLanguage(i.languageCode),l.providerId=e.providerId||"",zo(e.getCustomParameters())||(l.customParameters=JSON.stringify(e.getCustomParameters()));for(const[S,C]of Object.entries({}))l[S]=C}if(e instanceof Tt){const S=e.getScopes().filter(C=>C!=="");S.length>0&&(l.scopes=S.join(","))}i.tenantId&&(l.tid=i.tenantId);const y=l;for(const S of Object.keys(y))y[S]===void 0&&delete y[S];const w=await i._getAppCheckToken(),E=w?`#${Bc}=${encodeURIComponent(w)}`:"";return`${Vc(i)}?${It(y).slice(1)}${E}`}function Vc({config:i}){return i.emulator?ni(i,jc):`https://${i.authDomain}/${Fc}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jn="webStorageSupport";class Hc{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Rs,this._completeRedirectFn=dc,this._overrideRedirectResult=lc}async _openPopup(e,n,r,a){var h;pe((h=this.eventManagers[e._key()])===null||h===void 0?void 0:h.manager,"_initialize() not called before _openPopup()");const l=await Lr(e,n,r,Gn(),a);return Uc(e,l,ai())}async _openRedirect(e,n,r,a){await this._originValidation(e);const h=await Lr(e,n,r,Gn(),a);return Gh(h),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:a,promise:h}=this.eventManagers[n];return a?Promise.resolve(a):(pe(h,"If manager is not set, promise should be"),h)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Cc(e),r=new pc(e);return n.register("authEvent",a=>(A(a==null?void 0:a.authEvent,e,"invalid-auth-event"),{status:r.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(jn,{type:jn},a=>{var h;const l=(h=a==null?void 0:a[0])===null||h===void 0?void 0:h[jn];l!==void 0&&n(!!l),se(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=_c(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return _s()||fs()||si()}}const $c=Hc;var Mr="@firebase/auth",Ur="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){A(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wc(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Gc(i){Ge(new Me("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),h=e.getProvider("app-check-internal"),{apiKey:l,authDomain:y}=r.options;A(l&&!l.includes(":"),"invalid-api-key",{appName:r.name});const w={apiKey:l,authDomain:y,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Is(i)},E=new Sh(r,a,h,w);return Oh(E,n),E},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ge(new Me("auth-internal",e=>{const n=Et(e.getProvider("auth").getImmediate());return(r=>new zc(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Re(Mr,Ur,Wc(i)),Re(Mr,Ur,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kc=5*60,qc=Yr("authIdTokenMaxAge")||Kc;let xr=null;const Jc=i=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>qc)return;const a=n==null?void 0:n.token;xr!==a&&(xr=a,await fetch(i,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function yl(i=es()){const e=Qn(i,"auth");if(e.isInitialized())return e.getImmediate();const n=Ch(i,{popupRedirectResolver:$c,persistence:[tc,$h,Rs]}),r=Yr("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const h=new URL(r,location.origin);if(location.origin===h.origin){const l=Jc(h.toString());Bh(n,l,()=>l(n.currentUser)),jh(n,y=>l(y))}}const a=Jr("auth");return a&&Dh(n,`http://${a}`),n}function Xc(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}bh({loadJS(i){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",i),r.onload=e,r.onerror=a=>{const h=ne("internal-error");h.customData=a,n(h)},r.type="text/javascript",r.charset="UTF-8",Xc().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Gc("Browser");var Yc="firebase",Qc="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Re(Yc,Qc,"app");var Fr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Us;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(m,u){function f(){}f.prototype=u.prototype,m.D=u.prototype,m.prototype=new f,m.prototype.constructor=m,m.C=function(p,g,_){for(var d=Array(arguments.length-2),ae=2;ae<arguments.length;ae++)d[ae-2]=arguments[ae];return u.prototype[g].apply(p,d)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(m,u,f){f||(f=0);var p=Array(16);if(typeof u=="string")for(var g=0;16>g;++g)p[g]=u.charCodeAt(f++)|u.charCodeAt(f++)<<8|u.charCodeAt(f++)<<16|u.charCodeAt(f++)<<24;else for(g=0;16>g;++g)p[g]=u[f++]|u[f++]<<8|u[f++]<<16|u[f++]<<24;u=m.g[0],f=m.g[1],g=m.g[2];var _=m.g[3],d=u+(_^f&(g^_))+p[0]+3614090360&4294967295;u=f+(d<<7&4294967295|d>>>25),d=_+(g^u&(f^g))+p[1]+3905402710&4294967295,_=u+(d<<12&4294967295|d>>>20),d=g+(f^_&(u^f))+p[2]+606105819&4294967295,g=_+(d<<17&4294967295|d>>>15),d=f+(u^g&(_^u))+p[3]+3250441966&4294967295,f=g+(d<<22&4294967295|d>>>10),d=u+(_^f&(g^_))+p[4]+4118548399&4294967295,u=f+(d<<7&4294967295|d>>>25),d=_+(g^u&(f^g))+p[5]+1200080426&4294967295,_=u+(d<<12&4294967295|d>>>20),d=g+(f^_&(u^f))+p[6]+2821735955&4294967295,g=_+(d<<17&4294967295|d>>>15),d=f+(u^g&(_^u))+p[7]+4249261313&4294967295,f=g+(d<<22&4294967295|d>>>10),d=u+(_^f&(g^_))+p[8]+1770035416&4294967295,u=f+(d<<7&4294967295|d>>>25),d=_+(g^u&(f^g))+p[9]+2336552879&4294967295,_=u+(d<<12&4294967295|d>>>20),d=g+(f^_&(u^f))+p[10]+4294925233&4294967295,g=_+(d<<17&4294967295|d>>>15),d=f+(u^g&(_^u))+p[11]+2304563134&4294967295,f=g+(d<<22&4294967295|d>>>10),d=u+(_^f&(g^_))+p[12]+1804603682&4294967295,u=f+(d<<7&4294967295|d>>>25),d=_+(g^u&(f^g))+p[13]+4254626195&4294967295,_=u+(d<<12&4294967295|d>>>20),d=g+(f^_&(u^f))+p[14]+2792965006&4294967295,g=_+(d<<17&4294967295|d>>>15),d=f+(u^g&(_^u))+p[15]+1236535329&4294967295,f=g+(d<<22&4294967295|d>>>10),d=u+(g^_&(f^g))+p[1]+4129170786&4294967295,u=f+(d<<5&4294967295|d>>>27),d=_+(f^g&(u^f))+p[6]+3225465664&4294967295,_=u+(d<<9&4294967295|d>>>23),d=g+(u^f&(_^u))+p[11]+643717713&4294967295,g=_+(d<<14&4294967295|d>>>18),d=f+(_^u&(g^_))+p[0]+3921069994&4294967295,f=g+(d<<20&4294967295|d>>>12),d=u+(g^_&(f^g))+p[5]+3593408605&4294967295,u=f+(d<<5&4294967295|d>>>27),d=_+(f^g&(u^f))+p[10]+38016083&4294967295,_=u+(d<<9&4294967295|d>>>23),d=g+(u^f&(_^u))+p[15]+3634488961&4294967295,g=_+(d<<14&4294967295|d>>>18),d=f+(_^u&(g^_))+p[4]+3889429448&4294967295,f=g+(d<<20&4294967295|d>>>12),d=u+(g^_&(f^g))+p[9]+568446438&4294967295,u=f+(d<<5&4294967295|d>>>27),d=_+(f^g&(u^f))+p[14]+3275163606&4294967295,_=u+(d<<9&4294967295|d>>>23),d=g+(u^f&(_^u))+p[3]+4107603335&4294967295,g=_+(d<<14&4294967295|d>>>18),d=f+(_^u&(g^_))+p[8]+1163531501&4294967295,f=g+(d<<20&4294967295|d>>>12),d=u+(g^_&(f^g))+p[13]+2850285829&4294967295,u=f+(d<<5&4294967295|d>>>27),d=_+(f^g&(u^f))+p[2]+4243563512&4294967295,_=u+(d<<9&4294967295|d>>>23),d=g+(u^f&(_^u))+p[7]+1735328473&4294967295,g=_+(d<<14&4294967295|d>>>18),d=f+(_^u&(g^_))+p[12]+2368359562&4294967295,f=g+(d<<20&4294967295|d>>>12),d=u+(f^g^_)+p[5]+4294588738&4294967295,u=f+(d<<4&4294967295|d>>>28),d=_+(u^f^g)+p[8]+2272392833&4294967295,_=u+(d<<11&4294967295|d>>>21),d=g+(_^u^f)+p[11]+1839030562&4294967295,g=_+(d<<16&4294967295|d>>>16),d=f+(g^_^u)+p[14]+4259657740&4294967295,f=g+(d<<23&4294967295|d>>>9),d=u+(f^g^_)+p[1]+2763975236&4294967295,u=f+(d<<4&4294967295|d>>>28),d=_+(u^f^g)+p[4]+1272893353&4294967295,_=u+(d<<11&4294967295|d>>>21),d=g+(_^u^f)+p[7]+4139469664&4294967295,g=_+(d<<16&4294967295|d>>>16),d=f+(g^_^u)+p[10]+3200236656&4294967295,f=g+(d<<23&4294967295|d>>>9),d=u+(f^g^_)+p[13]+681279174&4294967295,u=f+(d<<4&4294967295|d>>>28),d=_+(u^f^g)+p[0]+3936430074&4294967295,_=u+(d<<11&4294967295|d>>>21),d=g+(_^u^f)+p[3]+3572445317&4294967295,g=_+(d<<16&4294967295|d>>>16),d=f+(g^_^u)+p[6]+76029189&4294967295,f=g+(d<<23&4294967295|d>>>9),d=u+(f^g^_)+p[9]+3654602809&4294967295,u=f+(d<<4&4294967295|d>>>28),d=_+(u^f^g)+p[12]+3873151461&4294967295,_=u+(d<<11&4294967295|d>>>21),d=g+(_^u^f)+p[15]+530742520&4294967295,g=_+(d<<16&4294967295|d>>>16),d=f+(g^_^u)+p[2]+3299628645&4294967295,f=g+(d<<23&4294967295|d>>>9),d=u+(g^(f|~_))+p[0]+4096336452&4294967295,u=f+(d<<6&4294967295|d>>>26),d=_+(f^(u|~g))+p[7]+1126891415&4294967295,_=u+(d<<10&4294967295|d>>>22),d=g+(u^(_|~f))+p[14]+2878612391&4294967295,g=_+(d<<15&4294967295|d>>>17),d=f+(_^(g|~u))+p[5]+4237533241&4294967295,f=g+(d<<21&4294967295|d>>>11),d=u+(g^(f|~_))+p[12]+1700485571&4294967295,u=f+(d<<6&4294967295|d>>>26),d=_+(f^(u|~g))+p[3]+2399980690&4294967295,_=u+(d<<10&4294967295|d>>>22),d=g+(u^(_|~f))+p[10]+4293915773&4294967295,g=_+(d<<15&4294967295|d>>>17),d=f+(_^(g|~u))+p[1]+2240044497&4294967295,f=g+(d<<21&4294967295|d>>>11),d=u+(g^(f|~_))+p[8]+1873313359&4294967295,u=f+(d<<6&4294967295|d>>>26),d=_+(f^(u|~g))+p[15]+4264355552&4294967295,_=u+(d<<10&4294967295|d>>>22),d=g+(u^(_|~f))+p[6]+2734768916&4294967295,g=_+(d<<15&4294967295|d>>>17),d=f+(_^(g|~u))+p[13]+1309151649&4294967295,f=g+(d<<21&4294967295|d>>>11),d=u+(g^(f|~_))+p[4]+4149444226&4294967295,u=f+(d<<6&4294967295|d>>>26),d=_+(f^(u|~g))+p[11]+3174756917&4294967295,_=u+(d<<10&4294967295|d>>>22),d=g+(u^(_|~f))+p[2]+718787259&4294967295,g=_+(d<<15&4294967295|d>>>17),d=f+(_^(g|~u))+p[9]+3951481745&4294967295,m.g[0]=m.g[0]+u&4294967295,m.g[1]=m.g[1]+(g+(d<<21&4294967295|d>>>11))&4294967295,m.g[2]=m.g[2]+g&4294967295,m.g[3]=m.g[3]+_&4294967295}r.prototype.u=function(m,u){u===void 0&&(u=m.length);for(var f=u-this.blockSize,p=this.B,g=this.h,_=0;_<u;){if(g==0)for(;_<=f;)a(this,m,_),_+=this.blockSize;if(typeof m=="string"){for(;_<u;)if(p[g++]=m.charCodeAt(_++),g==this.blockSize){a(this,p),g=0;break}}else for(;_<u;)if(p[g++]=m[_++],g==this.blockSize){a(this,p),g=0;break}}this.h=g,this.o+=u},r.prototype.v=function(){var m=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);m[0]=128;for(var u=1;u<m.length-8;++u)m[u]=0;var f=8*this.o;for(u=m.length-8;u<m.length;++u)m[u]=f&255,f/=256;for(this.u(m),m=Array(16),u=f=0;4>u;++u)for(var p=0;32>p;p+=8)m[f++]=this.g[u]>>>p&255;return m};function h(m,u){var f=y;return Object.prototype.hasOwnProperty.call(f,m)?f[m]:f[m]=u(m)}function l(m,u){this.h=u;for(var f=[],p=!0,g=m.length-1;0<=g;g--){var _=m[g]|0;p&&_==u||(f[g]=_,p=!1)}this.g=f}var y={};function w(m){return-128<=m&&128>m?h(m,function(u){return new l([u|0],0>u?-1:0)}):new l([m|0],0>m?-1:0)}function E(m){if(isNaN(m)||!isFinite(m))return C;if(0>m)return L(E(-m));for(var u=[],f=1,p=0;m>=f;p++)u[p]=m/f|0,f*=4294967296;return new l(u,0)}function S(m,u){if(m.length==0)throw Error("number format error: empty string");if(u=u||10,2>u||36<u)throw Error("radix out of range: "+u);if(m.charAt(0)=="-")return L(S(m.substring(1),u));if(0<=m.indexOf("-"))throw Error('number format error: interior "-" character');for(var f=E(Math.pow(u,8)),p=C,g=0;g<m.length;g+=8){var _=Math.min(8,m.length-g),d=parseInt(m.substring(g,g+_),u);8>_?(_=E(Math.pow(u,_)),p=p.j(_).add(E(d))):(p=p.j(f),p=p.add(E(d)))}return p}var C=w(0),k=w(1),x=w(16777216);i=l.prototype,i.m=function(){if(U(this))return-L(this).m();for(var m=0,u=1,f=0;f<this.g.length;f++){var p=this.i(f);m+=(0<=p?p:4294967296+p)*u,u*=4294967296}return m},i.toString=function(m){if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(R(this))return"0";if(U(this))return"-"+L(this).toString(m);for(var u=E(Math.pow(m,6)),f=this,p="";;){var g=Z(f,u).g;f=oe(f,g.j(u));var _=((0<f.g.length?f.g[0]:f.h)>>>0).toString(m);if(f=g,R(f))return _+p;for(;6>_.length;)_="0"+_;p=_+p}},i.i=function(m){return 0>m?0:m<this.g.length?this.g[m]:this.h};function R(m){if(m.h!=0)return!1;for(var u=0;u<m.g.length;u++)if(m.g[u]!=0)return!1;return!0}function U(m){return m.h==-1}i.l=function(m){return m=oe(this,m),U(m)?-1:R(m)?0:1};function L(m){for(var u=m.g.length,f=[],p=0;p<u;p++)f[p]=~m.g[p];return new l(f,~m.h).add(k)}i.abs=function(){return U(this)?L(this):this},i.add=function(m){for(var u=Math.max(this.g.length,m.g.length),f=[],p=0,g=0;g<=u;g++){var _=p+(this.i(g)&65535)+(m.i(g)&65535),d=(_>>>16)+(this.i(g)>>>16)+(m.i(g)>>>16);p=d>>>16,_&=65535,d&=65535,f[g]=d<<16|_}return new l(f,f[f.length-1]&-2147483648?-1:0)};function oe(m,u){return m.add(L(u))}i.j=function(m){if(R(this)||R(m))return C;if(U(this))return U(m)?L(this).j(L(m)):L(L(this).j(m));if(U(m))return L(this.j(L(m)));if(0>this.l(x)&&0>m.l(x))return E(this.m()*m.m());for(var u=this.g.length+m.g.length,f=[],p=0;p<2*u;p++)f[p]=0;for(p=0;p<this.g.length;p++)for(var g=0;g<m.g.length;g++){var _=this.i(p)>>>16,d=this.i(p)&65535,ae=m.i(g)>>>16,Ye=m.i(g)&65535;f[2*p+2*g]+=d*Ye,Y(f,2*p+2*g),f[2*p+2*g+1]+=_*Ye,Y(f,2*p+2*g+1),f[2*p+2*g+1]+=d*ae,Y(f,2*p+2*g+1),f[2*p+2*g+2]+=_*ae,Y(f,2*p+2*g+2)}for(p=0;p<u;p++)f[p]=f[2*p+1]<<16|f[2*p];for(p=u;p<2*u;p++)f[p]=0;return new l(f,0)};function Y(m,u){for(;(m[u]&65535)!=m[u];)m[u+1]+=m[u]>>>16,m[u]&=65535,u++}function j(m,u){this.g=m,this.h=u}function Z(m,u){if(R(u))throw Error("division by zero");if(R(m))return new j(C,C);if(U(m))return u=Z(L(m),u),new j(L(u.g),L(u.h));if(U(u))return u=Z(m,L(u)),new j(L(u.g),u.h);if(30<m.g.length){if(U(m)||U(u))throw Error("slowDivide_ only works with positive integers.");for(var f=k,p=u;0>=p.l(m);)f=Pe(f),p=Pe(p);var g=q(f,1),_=q(p,1);for(p=q(p,2),f=q(f,2);!R(p);){var d=_.add(p);0>=d.l(m)&&(g=g.add(f),_=d),p=q(p,1),f=q(f,1)}return u=oe(m,g.j(u)),new j(g,u)}for(g=C;0<=m.l(u);){for(f=Math.max(1,Math.floor(m.m()/u.m())),p=Math.ceil(Math.log(f)/Math.LN2),p=48>=p?1:Math.pow(2,p-48),_=E(f),d=_.j(u);U(d)||0<d.l(m);)f-=p,_=E(f),d=_.j(u);R(_)&&(_=k),g=g.add(_),m=oe(m,d)}return new j(g,m)}i.A=function(m){return Z(this,m).h},i.and=function(m){for(var u=Math.max(this.g.length,m.g.length),f=[],p=0;p<u;p++)f[p]=this.i(p)&m.i(p);return new l(f,this.h&m.h)},i.or=function(m){for(var u=Math.max(this.g.length,m.g.length),f=[],p=0;p<u;p++)f[p]=this.i(p)|m.i(p);return new l(f,this.h|m.h)},i.xor=function(m){for(var u=Math.max(this.g.length,m.g.length),f=[],p=0;p<u;p++)f[p]=this.i(p)^m.i(p);return new l(f,this.h^m.h)};function Pe(m){for(var u=m.g.length+1,f=[],p=0;p<u;p++)f[p]=m.i(p)<<1|m.i(p-1)>>>31;return new l(f,m.h)}function q(m,u){var f=u>>5;u%=32;for(var p=m.g.length-f,g=[],_=0;_<p;_++)g[_]=0<u?m.i(_+f)>>>u|m.i(_+f+1)<<32-u:m.i(_+f);return new l(g,m.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=E,l.fromString=S,Us=l}).apply(typeof Fr<"u"?Fr:typeof self<"u"?self:typeof window<"u"?window:{});var $t=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(t,s,o){return t==Array.prototype||t==Object.prototype||(t[s]=o.value),t};function n(t){t=[typeof globalThis=="object"&&globalThis,t,typeof window=="object"&&window,typeof self=="object"&&self,typeof $t=="object"&&$t];for(var s=0;s<t.length;++s){var o=t[s];if(o&&o.Math==Math)return o}throw Error("Cannot find global object")}var r=n(this);function a(t,s){if(s)e:{var o=r;t=t.split(".");for(var c=0;c<t.length-1;c++){var v=t[c];if(!(v in o))break e;o=o[v]}t=t[t.length-1],c=o[t],s=s(c),s!=c&&s!=null&&e(o,t,{configurable:!0,writable:!0,value:s})}}function h(t,s){t instanceof String&&(t+="");var o=0,c=!1,v={next:function(){if(!c&&o<t.length){var I=o++;return{value:s(I,t[I]),done:!1}}return c=!0,{done:!0,value:void 0}}};return v[Symbol.iterator]=function(){return v},v}a("Array.prototype.values",function(t){return t||function(){return h(this,function(s,o){return o})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},y=this||self;function w(t){var s=typeof t;return s=s!="object"?s:t?Array.isArray(t)?"array":s:"null",s=="array"||s=="object"&&typeof t.length=="number"}function E(t){var s=typeof t;return s=="object"&&t!=null||s=="function"}function S(t,s,o){return t.call.apply(t.bind,arguments)}function C(t,s,o){if(!t)throw Error();if(2<arguments.length){var c=Array.prototype.slice.call(arguments,2);return function(){var v=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(v,c),t.apply(s,v)}}return function(){return t.apply(s,arguments)}}function k(t,s,o){return k=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?S:C,k.apply(null,arguments)}function x(t,s){var o=Array.prototype.slice.call(arguments,1);return function(){var c=o.slice();return c.push.apply(c,arguments),t.apply(this,c)}}function R(t,s){function o(){}o.prototype=s.prototype,t.aa=s.prototype,t.prototype=new o,t.prototype.constructor=t,t.Qb=function(c,v,I){for(var T=Array(arguments.length-2),D=2;D<arguments.length;D++)T[D-2]=arguments[D];return s.prototype[v].apply(c,T)}}function U(t){const s=t.length;if(0<s){const o=Array(s);for(let c=0;c<s;c++)o[c]=t[c];return o}return[]}function L(t,s){for(let o=1;o<arguments.length;o++){const c=arguments[o];if(w(c)){const v=t.length||0,I=c.length||0;t.length=v+I;for(let T=0;T<I;T++)t[v+T]=c[T]}else t.push(c)}}class oe{constructor(s,o){this.i=s,this.j=o,this.h=0,this.g=null}get(){let s;return 0<this.h?(this.h--,s=this.g,this.g=s.next,s.next=null):s=this.i(),s}}function Y(t){return/^[\s\xa0]*$/.test(t)}function j(){var t=y.navigator;return t&&(t=t.userAgent)?t:""}function Z(t){return Z[" "](t),t}Z[" "]=function(){};var Pe=j().indexOf("Gecko")!=-1&&!(j().toLowerCase().indexOf("webkit")!=-1&&j().indexOf("Edge")==-1)&&!(j().indexOf("Trident")!=-1||j().indexOf("MSIE")!=-1)&&j().indexOf("Edge")==-1;function q(t,s,o){for(const c in t)s.call(o,t[c],c,t)}function m(t,s){for(const o in t)s.call(void 0,t[o],o,t)}function u(t){const s={};for(const o in t)s[o]=t[o];return s}const f="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function p(t,s){let o,c;for(let v=1;v<arguments.length;v++){c=arguments[v];for(o in c)t[o]=c[o];for(let I=0;I<f.length;I++)o=f[I],Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o])}}function g(t){var s=1;t=t.split(":");const o=[];for(;0<s&&t.length;)o.push(t.shift()),s--;return t.length&&o.push(t.join(":")),o}function _(t){y.setTimeout(()=>{throw t},0)}function d(){var t=an;let s=null;return t.g&&(s=t.g,t.g=t.g.next,t.g||(t.h=null),s.next=null),s}class ae{constructor(){this.h=this.g=null}add(s,o){const c=Ye.get();c.set(s,o),this.h?this.h.next=c:this.g=c,this.h=c}}var Ye=new oe(()=>new Bs,t=>t.reset());class Bs{constructor(){this.next=this.g=this.h=null}set(s,o){this.h=s,this.g=o,this.next=null}reset(){this.next=this.g=this.h=null}}let Qe,Ze=!1,an=new ae,fi=()=>{const t=y.Promise.resolve(void 0);Qe=()=>{t.then(Vs)}};var Vs=()=>{for(var t;t=d();){try{t.h.call(t.g)}catch(o){_(o)}var s=Ye;s.j(t),100>s.h&&(s.h++,t.next=s.g,s.g=t)}Ze=!1};function me(){this.s=this.s,this.C=this.C}me.prototype.s=!1,me.prototype.ma=function(){this.s||(this.s=!0,this.N())},me.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function B(t,s){this.type=t,this.g=this.target=s,this.defaultPrevented=!1}B.prototype.h=function(){this.defaultPrevented=!0};var Hs=function(){if(!y.addEventListener||!Object.defineProperty)return!1;var t=!1,s=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const o=()=>{};y.addEventListener("test",o,s),y.removeEventListener("test",o,s)}catch{}return t}();function et(t,s){if(B.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var o=this.type=t.type,c=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=s,s=t.relatedTarget){if(Pe){e:{try{Z(s.nodeName);var v=!0;break e}catch{}v=!1}v||(s=null)}}else o=="mouseover"?s=t.fromElement:o=="mouseout"&&(s=t.toElement);this.relatedTarget=s,c?(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:$s[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&et.aa.h.call(this)}}R(et,B);var $s={2:"touch",3:"pen",4:"mouse"};et.prototype.h=function(){et.aa.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var bt="closure_listenable_"+(1e6*Math.random()|0),zs=0;function Ws(t,s,o,c,v){this.listener=t,this.proxy=null,this.src=s,this.type=o,this.capture=!!c,this.ha=v,this.key=++zs,this.da=this.fa=!1}function Rt(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function kt(t){this.src=t,this.g={},this.h=0}kt.prototype.add=function(t,s,o,c,v){var I=t.toString();t=this.g[I],t||(t=this.g[I]=[],this.h++);var T=cn(t,s,c,v);return-1<T?(s=t[T],o||(s.fa=!1)):(s=new Ws(s,this.src,I,!!c,v),s.fa=o,t.push(s)),s};function hn(t,s){var o=s.type;if(o in t.g){var c=t.g[o],v=Array.prototype.indexOf.call(c,s,void 0),I;(I=0<=v)&&Array.prototype.splice.call(c,v,1),I&&(Rt(s),t.g[o].length==0&&(delete t.g[o],t.h--))}}function cn(t,s,o,c){for(var v=0;v<t.length;++v){var I=t[v];if(!I.da&&I.listener==s&&I.capture==!!o&&I.ha==c)return v}return-1}var ln="closure_lm_"+(1e6*Math.random()|0),un={};function pi(t,s,o,c,v){if(Array.isArray(s)){for(var I=0;I<s.length;I++)pi(t,s[I],o,c,v);return null}return o=vi(o),t&&t[bt]?t.K(s,o,E(c)?!!c.capture:!1,v):Gs(t,s,o,!1,c,v)}function Gs(t,s,o,c,v,I){if(!s)throw Error("Invalid event type");var T=E(v)?!!v.capture:!!v,D=fn(t);if(D||(t[ln]=D=new kt(t)),o=D.add(s,o,c,T,I),o.proxy)return o;if(c=Ks(),o.proxy=c,c.src=t,c.listener=o,t.addEventListener)Hs||(v=T),v===void 0&&(v=!1),t.addEventListener(s.toString(),c,v);else if(t.attachEvent)t.attachEvent(mi(s.toString()),c);else if(t.addListener&&t.removeListener)t.addListener(c);else throw Error("addEventListener and attachEvent are unavailable.");return o}function Ks(){function t(o){return s.call(t.src,t.listener,o)}const s=qs;return t}function gi(t,s,o,c,v){if(Array.isArray(s))for(var I=0;I<s.length;I++)gi(t,s[I],o,c,v);else c=E(c)?!!c.capture:!!c,o=vi(o),t&&t[bt]?(t=t.i,s=String(s).toString(),s in t.g&&(I=t.g[s],o=cn(I,o,c,v),-1<o&&(Rt(I[o]),Array.prototype.splice.call(I,o,1),I.length==0&&(delete t.g[s],t.h--)))):t&&(t=fn(t))&&(s=t.g[s.toString()],t=-1,s&&(t=cn(s,o,c,v)),(o=-1<t?s[t]:null)&&dn(o))}function dn(t){if(typeof t!="number"&&t&&!t.da){var s=t.src;if(s&&s[bt])hn(s.i,t);else{var o=t.type,c=t.proxy;s.removeEventListener?s.removeEventListener(o,c,t.capture):s.detachEvent?s.detachEvent(mi(o),c):s.addListener&&s.removeListener&&s.removeListener(c),(o=fn(s))?(hn(o,t),o.h==0&&(o.src=null,s[ln]=null)):Rt(t)}}}function mi(t){return t in un?un[t]:un[t]="on"+t}function qs(t,s){if(t.da)t=!0;else{s=new et(s,this);var o=t.listener,c=t.ha||t.src;t.fa&&dn(t),t=o.call(c,s)}return t}function fn(t){return t=t[ln],t instanceof kt?t:null}var pn="__closure_events_fn_"+(1e9*Math.random()>>>0);function vi(t){return typeof t=="function"?t:(t[pn]||(t[pn]=function(s){return t.handleEvent(s)}),t[pn])}function V(){me.call(this),this.i=new kt(this),this.M=this,this.F=null}R(V,me),V.prototype[bt]=!0,V.prototype.removeEventListener=function(t,s,o,c){gi(this,t,s,o,c)};function z(t,s){var o,c=t.F;if(c)for(o=[];c;c=c.F)o.push(c);if(t=t.M,c=s.type||s,typeof s=="string")s=new B(s,t);else if(s instanceof B)s.target=s.target||t;else{var v=s;s=new B(c,t),p(s,v)}if(v=!0,o)for(var I=o.length-1;0<=I;I--){var T=s.g=o[I];v=Pt(T,c,!0,s)&&v}if(T=s.g=t,v=Pt(T,c,!0,s)&&v,v=Pt(T,c,!1,s)&&v,o)for(I=0;I<o.length;I++)T=s.g=o[I],v=Pt(T,c,!1,s)&&v}V.prototype.N=function(){if(V.aa.N.call(this),this.i){var t=this.i,s;for(s in t.g){for(var o=t.g[s],c=0;c<o.length;c++)Rt(o[c]);delete t.g[s],t.h--}}this.F=null},V.prototype.K=function(t,s,o,c){return this.i.add(String(t),s,!1,o,c)},V.prototype.L=function(t,s,o,c){return this.i.add(String(t),s,!0,o,c)};function Pt(t,s,o,c){if(s=t.i.g[String(s)],!s)return!0;s=s.concat();for(var v=!0,I=0;I<s.length;++I){var T=s[I];if(T&&!T.da&&T.capture==o){var D=T.listener,F=T.ha||T.src;T.fa&&hn(t.i,T),v=D.call(F,c)!==!1&&v}}return v&&!c.defaultPrevented}function yi(t,s,o){if(typeof t=="function")o&&(t=k(t,o));else if(t&&typeof t.handleEvent=="function")t=k(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(s)?-1:y.setTimeout(t,s||0)}function _i(t){t.g=yi(()=>{t.g=null,t.i&&(t.i=!1,_i(t))},t.l);const s=t.h;t.h=null,t.m.apply(null,s)}class Js extends me{constructor(s,o){super(),this.m=s,this.l=o,this.h=null,this.i=!1,this.g=null}j(s){this.h=arguments,this.g?this.i=!0:_i(this)}N(){super.N(),this.g&&(y.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function tt(t){me.call(this),this.h=t,this.g={}}R(tt,me);var Ii=[];function wi(t){q(t.g,function(s,o){this.g.hasOwnProperty(o)&&dn(s)},t),t.g={}}tt.prototype.N=function(){tt.aa.N.call(this),wi(this)},tt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var gn=y.JSON.stringify,Xs=y.JSON.parse,Ys=class{stringify(t){return y.JSON.stringify(t,void 0)}parse(t){return y.JSON.parse(t,void 0)}};function mn(){}mn.prototype.h=null;function Ei(t){return t.h||(t.h=t.i())}function Qs(){}var nt={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function vn(){B.call(this,"d")}R(vn,B);function yn(){B.call(this,"c")}R(yn,B);var Fe={},Ti=null;function _n(){return Ti=Ti||new V}Fe.La="serverreachability";function Ai(t){B.call(this,Fe.La,t)}R(Ai,B);function it(t){const s=_n();z(s,new Ai(s))}Fe.STAT_EVENT="statevent";function Si(t,s){B.call(this,Fe.STAT_EVENT,t),this.stat=s}R(Si,B);function W(t){const s=_n();z(s,new Si(s,t))}Fe.Ma="timingevent";function bi(t,s){B.call(this,Fe.Ma,t),this.size=s}R(bi,B);function rt(t,s){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return y.setTimeout(function(){t()},s)}function st(){this.g=!0}st.prototype.xa=function(){this.g=!1};function Zs(t,s,o,c,v,I){t.info(function(){if(t.g)if(I)for(var T="",D=I.split("&"),F=0;F<D.length;F++){var P=D[F].split("=");if(1<P.length){var H=P[0];P=P[1];var $=H.split("_");T=2<=$.length&&$[1]=="type"?T+(H+"="+P+"&"):T+(H+"=redacted&")}}else T=null;else T=I;return"XMLHTTP REQ ("+c+") [attempt "+v+"]: "+s+`
`+o+`
`+T})}function eo(t,s,o,c,v,I,T){t.info(function(){return"XMLHTTP RESP ("+c+") [ attempt "+v+"]: "+s+`
`+o+`
`+I+" "+T})}function je(t,s,o,c){t.info(function(){return"XMLHTTP TEXT ("+s+"): "+no(t,o)+(c?" "+c:"")})}function to(t,s){t.info(function(){return"TIMEOUT: "+s})}st.prototype.info=function(){};function no(t,s){if(!t.g)return s;if(!s)return null;try{var o=JSON.parse(s);if(o){for(t=0;t<o.length;t++)if(Array.isArray(o[t])){var c=o[t];if(!(2>c.length)){var v=c[1];if(Array.isArray(v)&&!(1>v.length)){var I=v[0];if(I!="noop"&&I!="stop"&&I!="close")for(var T=1;T<v.length;T++)v[T]=""}}}}return gn(o)}catch{return s}}var In={NO_ERROR:0,TIMEOUT:8},io={},wn;function Ct(){}R(Ct,mn),Ct.prototype.g=function(){return new XMLHttpRequest},Ct.prototype.i=function(){return{}},wn=new Ct;function ve(t,s,o,c){this.j=t,this.i=s,this.l=o,this.R=c||1,this.U=new tt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ri}function Ri(){this.i=null,this.g="",this.h=!1}var ki={},En={};function Tn(t,s,o){t.L=1,t.v=Lt(he(s)),t.m=o,t.P=!0,Pi(t,null)}function Pi(t,s){t.F=Date.now(),Ot(t),t.A=he(t.v);var o=t.A,c=t.R;Array.isArray(c)||(c=[String(c)]),$i(o.i,"t",c),t.C=0,o=t.j.J,t.h=new Ri,t.g=ar(t.j,o?s:null,!t.m),0<t.O&&(t.M=new Js(k(t.Y,t,t.g),t.O)),s=t.U,o=t.g,c=t.ca;var v="readystatechange";Array.isArray(v)||(v&&(Ii[0]=v.toString()),v=Ii);for(var I=0;I<v.length;I++){var T=pi(o,v[I],c||s.handleEvent,!1,s.h||s);if(!T)break;s.g[T.key]=T}s=t.H?u(t.H):{},t.m?(t.u||(t.u="POST"),s["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.m,s)):(t.u="GET",t.g.ea(t.A,t.u,null,s)),it(),Zs(t.i,t.u,t.A,t.l,t.R,t.m)}ve.prototype.ca=function(t){t=t.target;const s=this.M;s&&ce(t)==3?s.j():this.Y(t)},ve.prototype.Y=function(t){try{if(t==this.g)e:{const $=ce(this.g);var s=this.g.Ba();const He=this.g.Z();if(!(3>$)&&($!=3||this.g&&(this.h.h||this.g.oa()||Xi(this.g)))){this.J||$!=4||s==7||(s==8||0>=He?it(3):it(2)),An(this);var o=this.g.Z();this.X=o;t:if(Ci(this)){var c=Xi(this.g);t="";var v=c.length,I=ce(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ce(this),ot(this);var T="";break t}this.h.i=new y.TextDecoder}for(s=0;s<v;s++)this.h.h=!0,t+=this.h.i.decode(c[s],{stream:!(I&&s==v-1)});c.length=0,this.h.g+=t,this.C=0,T=this.h.g}else T=this.g.oa();if(this.o=o==200,eo(this.i,this.u,this.A,this.l,this.R,$,o),this.o){if(this.T&&!this.K){t:{if(this.g){var D,F=this.g;if((D=F.g?F.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Y(D)){var P=D;break t}}P=null}if(o=P)je(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Sn(this,o);else{this.o=!1,this.s=3,W(12),Ce(this),ot(this);break e}}if(this.P){o=!0;let ee;for(;!this.J&&this.C<T.length;)if(ee=ro(this,T),ee==En){$==4&&(this.s=4,W(14),o=!1),je(this.i,this.l,null,"[Incomplete Response]");break}else if(ee==ki){this.s=4,W(15),je(this.i,this.l,T,"[Invalid Chunk]"),o=!1;break}else je(this.i,this.l,ee,null),Sn(this,ee);if(Ci(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),$!=4||T.length!=0||this.h.h||(this.s=1,W(16),o=!1),this.o=this.o&&o,!o)je(this.i,this.l,T,"[Invalid Chunked Response]"),Ce(this),ot(this);else if(0<T.length&&!this.W){this.W=!0;var H=this.j;H.g==this&&H.ba&&!H.M&&(H.j.info("Great, no buffering proxy detected. Bytes received: "+T.length),On(H),H.M=!0,W(11))}}else je(this.i,this.l,T,null),Sn(this,T);$==4&&Ce(this),this.o&&!this.J&&($==4?ir(this.j,this):(this.o=!1,Ot(this)))}else Eo(this.g),o==400&&0<T.indexOf("Unknown SID")?(this.s=3,W(12)):(this.s=0,W(13)),Ce(this),ot(this)}}}catch{}finally{}};function Ci(t){return t.g?t.u=="GET"&&t.L!=2&&t.j.Ca:!1}function ro(t,s){var o=t.C,c=s.indexOf(`
`,o);return c==-1?En:(o=Number(s.substring(o,c)),isNaN(o)?ki:(c+=1,c+o>s.length?En:(s=s.slice(c,c+o),t.C=c+o,s)))}ve.prototype.cancel=function(){this.J=!0,Ce(this)};function Ot(t){t.S=Date.now()+t.I,Oi(t,t.I)}function Oi(t,s){if(t.B!=null)throw Error("WatchDog timer not null");t.B=rt(k(t.ba,t),s)}function An(t){t.B&&(y.clearTimeout(t.B),t.B=null)}ve.prototype.ba=function(){this.B=null;const t=Date.now();0<=t-this.S?(to(this.i,this.A),this.L!=2&&(it(),W(17)),Ce(this),this.s=2,ot(this)):Oi(this,this.S-t)};function ot(t){t.j.G==0||t.J||ir(t.j,t)}function Ce(t){An(t);var s=t.M;s&&typeof s.ma=="function"&&s.ma(),t.M=null,wi(t.U),t.g&&(s=t.g,t.g=null,s.abort(),s.ma())}function Sn(t,s){try{var o=t.j;if(o.G!=0&&(o.g==t||bn(o.h,t))){if(!t.K&&bn(o.h,t)&&o.G==3){try{var c=o.Da.g.parse(s)}catch{c=null}if(Array.isArray(c)&&c.length==3){var v=c;if(v[0]==0){e:if(!o.u){if(o.g)if(o.g.F+3e3<t.F)Bt(o),Ft(o);else break e;Cn(o),W(18)}}else o.za=v[1],0<o.za-o.T&&37500>v[2]&&o.F&&o.v==0&&!o.C&&(o.C=rt(k(o.Za,o),6e3));if(1>=Li(o.h)&&o.ca){try{o.ca()}catch{}o.ca=void 0}}else De(o,11)}else if((t.K||o.g==t)&&Bt(o),!Y(s))for(v=o.Da.g.parse(s),s=0;s<v.length;s++){let P=v[s];if(o.T=P[0],P=P[1],o.G==2)if(P[0]=="c"){o.K=P[1],o.ia=P[2];const H=P[3];H!=null&&(o.la=H,o.j.info("VER="+o.la));const $=P[4];$!=null&&(o.Aa=$,o.j.info("SVER="+o.Aa));const He=P[5];He!=null&&typeof He=="number"&&0<He&&(c=1.5*He,o.L=c,o.j.info("backChannelRequestTimeoutMs_="+c)),c=o;const ee=t.g;if(ee){const Vt=ee.g?ee.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Vt){var I=c.h;I.g||Vt.indexOf("spdy")==-1&&Vt.indexOf("quic")==-1&&Vt.indexOf("h2")==-1||(I.j=I.l,I.g=new Set,I.h&&(Rn(I,I.h),I.h=null))}if(c.D){const Dn=ee.g?ee.g.getResponseHeader("X-HTTP-Session-Id"):null;Dn&&(c.ya=Dn,N(c.I,c.D,Dn))}}o.G=3,o.l&&o.l.ua(),o.ba&&(o.R=Date.now()-t.F,o.j.info("Handshake RTT: "+o.R+"ms")),c=o;var T=t;if(c.qa=or(c,c.J?c.ia:null,c.W),T.K){Mi(c.h,T);var D=T,F=c.L;F&&(D.I=F),D.B&&(An(D),Ot(D)),c.g=T}else tr(c);0<o.i.length&&jt(o)}else P[0]!="stop"&&P[0]!="close"||De(o,7);else o.G==3&&(P[0]=="stop"||P[0]=="close"?P[0]=="stop"?De(o,7):Pn(o):P[0]!="noop"&&o.l&&o.l.ta(P),o.v=0)}}it(4)}catch{}}var so=class{constructor(t,s){this.g=t,this.map=s}};function Di(t){this.l=t||10,y.PerformanceNavigationTiming?(t=y.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(y.chrome&&y.chrome.loadTimes&&y.chrome.loadTimes()&&y.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ni(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Li(t){return t.h?1:t.g?t.g.size:0}function bn(t,s){return t.h?t.h==s:t.g?t.g.has(s):!1}function Rn(t,s){t.g?t.g.add(s):t.h=s}function Mi(t,s){t.h&&t.h==s?t.h=null:t.g&&t.g.has(s)&&t.g.delete(s)}Di.prototype.cancel=function(){if(this.i=Ui(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Ui(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let s=t.i;for(const o of t.g.values())s=s.concat(o.D);return s}return U(t.i)}function oo(t){if(t.V&&typeof t.V=="function")return t.V();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(w(t)){for(var s=[],o=t.length,c=0;c<o;c++)s.push(t[c]);return s}s=[],o=0;for(c in t)s[o++]=t[c];return s}function ao(t){if(t.na&&typeof t.na=="function")return t.na();if(!t.V||typeof t.V!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(w(t)||typeof t=="string"){var s=[];t=t.length;for(var o=0;o<t;o++)s.push(o);return s}s=[],o=0;for(const c in t)s[o++]=c;return s}}}function xi(t,s){if(t.forEach&&typeof t.forEach=="function")t.forEach(s,void 0);else if(w(t)||typeof t=="string")Array.prototype.forEach.call(t,s,void 0);else for(var o=ao(t),c=oo(t),v=c.length,I=0;I<v;I++)s.call(void 0,c[I],o&&o[I],t)}var Fi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ho(t,s){if(t){t=t.split("&");for(var o=0;o<t.length;o++){var c=t[o].indexOf("="),v=null;if(0<=c){var I=t[o].substring(0,c);v=t[o].substring(c+1)}else I=t[o];s(I,v?decodeURIComponent(v.replace(/\+/g," ")):"")}}}function Oe(t){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,t instanceof Oe){this.h=t.h,Dt(this,t.j),this.o=t.o,this.g=t.g,Nt(this,t.s),this.l=t.l;var s=t.i,o=new ct;o.i=s.i,s.g&&(o.g=new Map(s.g),o.h=s.h),ji(this,o),this.m=t.m}else t&&(s=String(t).match(Fi))?(this.h=!1,Dt(this,s[1]||"",!0),this.o=at(s[2]||""),this.g=at(s[3]||"",!0),Nt(this,s[4]),this.l=at(s[5]||"",!0),ji(this,s[6]||"",!0),this.m=at(s[7]||"")):(this.h=!1,this.i=new ct(null,this.h))}Oe.prototype.toString=function(){var t=[],s=this.j;s&&t.push(ht(s,Bi,!0),":");var o=this.g;return(o||s=="file")&&(t.push("//"),(s=this.o)&&t.push(ht(s,Bi,!0),"@"),t.push(encodeURIComponent(String(o)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o=this.s,o!=null&&t.push(":",String(o))),(o=this.l)&&(this.g&&o.charAt(0)!="/"&&t.push("/"),t.push(ht(o,o.charAt(0)=="/"?uo:lo,!0))),(o=this.i.toString())&&t.push("?",o),(o=this.m)&&t.push("#",ht(o,po)),t.join("")};function he(t){return new Oe(t)}function Dt(t,s,o){t.j=o?at(s,!0):s,t.j&&(t.j=t.j.replace(/:$/,""))}function Nt(t,s){if(s){if(s=Number(s),isNaN(s)||0>s)throw Error("Bad port number "+s);t.s=s}else t.s=null}function ji(t,s,o){s instanceof ct?(t.i=s,go(t.i,t.h)):(o||(s=ht(s,fo)),t.i=new ct(s,t.h))}function N(t,s,o){t.i.set(s,o)}function Lt(t){return N(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function at(t,s){return t?s?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ht(t,s,o){return typeof t=="string"?(t=encodeURI(t).replace(s,co),o&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function co(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Bi=/[#\/\?@]/g,lo=/[#\?:]/g,uo=/[#\?]/g,fo=/[#\?@]/g,po=/#/g;function ct(t,s){this.h=this.g=null,this.i=t||null,this.j=!!s}function ye(t){t.g||(t.g=new Map,t.h=0,t.i&&ho(t.i,function(s,o){t.add(decodeURIComponent(s.replace(/\+/g," ")),o)}))}i=ct.prototype,i.add=function(t,s){ye(this),this.i=null,t=Be(this,t);var o=this.g.get(t);return o||this.g.set(t,o=[]),o.push(s),this.h+=1,this};function Vi(t,s){ye(t),s=Be(t,s),t.g.has(s)&&(t.i=null,t.h-=t.g.get(s).length,t.g.delete(s))}function Hi(t,s){return ye(t),s=Be(t,s),t.g.has(s)}i.forEach=function(t,s){ye(this),this.g.forEach(function(o,c){o.forEach(function(v){t.call(s,v,c,this)},this)},this)},i.na=function(){ye(this);const t=Array.from(this.g.values()),s=Array.from(this.g.keys()),o=[];for(let c=0;c<s.length;c++){const v=t[c];for(let I=0;I<v.length;I++)o.push(s[c])}return o},i.V=function(t){ye(this);let s=[];if(typeof t=="string")Hi(this,t)&&(s=s.concat(this.g.get(Be(this,t))));else{t=Array.from(this.g.values());for(let o=0;o<t.length;o++)s=s.concat(t[o])}return s},i.set=function(t,s){return ye(this),this.i=null,t=Be(this,t),Hi(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[s]),this.h+=1,this},i.get=function(t,s){return t?(t=this.V(t),0<t.length?String(t[0]):s):s};function $i(t,s,o){Vi(t,s),0<o.length&&(t.i=null,t.g.set(Be(t,s),U(o)),t.h+=o.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],s=Array.from(this.g.keys());for(var o=0;o<s.length;o++){var c=s[o];const I=encodeURIComponent(String(c)),T=this.V(c);for(c=0;c<T.length;c++){var v=I;T[c]!==""&&(v+="="+encodeURIComponent(String(T[c]))),t.push(v)}}return this.i=t.join("&")};function Be(t,s){return s=String(s),t.j&&(s=s.toLowerCase()),s}function go(t,s){s&&!t.j&&(ye(t),t.i=null,t.g.forEach(function(o,c){var v=c.toLowerCase();c!=v&&(Vi(this,c),$i(this,v,o))},t)),t.j=s}function mo(t,s){const o=new st;if(y.Image){const c=new Image;c.onload=x(_e,o,"TestLoadImage: loaded",!0,s,c),c.onerror=x(_e,o,"TestLoadImage: error",!1,s,c),c.onabort=x(_e,o,"TestLoadImage: abort",!1,s,c),c.ontimeout=x(_e,o,"TestLoadImage: timeout",!1,s,c),y.setTimeout(function(){c.ontimeout&&c.ontimeout()},1e4),c.src=t}else s(!1)}function vo(t,s){const o=new st,c=new AbortController,v=setTimeout(()=>{c.abort(),_e(o,"TestPingServer: timeout",!1,s)},1e4);fetch(t,{signal:c.signal}).then(I=>{clearTimeout(v),I.ok?_e(o,"TestPingServer: ok",!0,s):_e(o,"TestPingServer: server error",!1,s)}).catch(()=>{clearTimeout(v),_e(o,"TestPingServer: error",!1,s)})}function _e(t,s,o,c,v){try{v&&(v.onload=null,v.onerror=null,v.onabort=null,v.ontimeout=null),c(o)}catch{}}function yo(){this.g=new Ys}function _o(t,s,o){const c=o||"";try{xi(t,function(v,I){let T=v;E(v)&&(T=gn(v)),s.push(c+I+"="+encodeURIComponent(T))})}catch(v){throw s.push(c+"type="+encodeURIComponent("_badmap")),v}}function Mt(t){this.l=t.Ub||null,this.j=t.eb||!1}R(Mt,mn),Mt.prototype.g=function(){return new Ut(this.l,this.j)},Mt.prototype.i=function(t){return function(){return t}}({});function Ut(t,s){V.call(this),this.D=t,this.o=s,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(Ut,V),i=Ut.prototype,i.open=function(t,s){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=t,this.A=s,this.readyState=1,ut(this)},i.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const s={headers:this.u,method:this.B,credentials:this.m,cache:void 0};t&&(s.body=t),(this.D||y).fetch(new Request(this.A,s)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,lt(this)),this.readyState=0},i.Sa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ut(this)),this.g&&(this.readyState=3,ut(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof y.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;zi(this)}else t.text().then(this.Ra.bind(this),this.ga.bind(this))};function zi(t){t.j.read().then(t.Pa.bind(t)).catch(t.ga.bind(t))}i.Pa=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var s=t.value?t.value:new Uint8Array(0);(s=this.v.decode(s,{stream:!t.done}))&&(this.response=this.responseText+=s)}t.done?lt(this):ut(this),this.readyState==3&&zi(this)}},i.Ra=function(t){this.g&&(this.response=this.responseText=t,lt(this))},i.Qa=function(t){this.g&&(this.response=t,lt(this))},i.ga=function(){this.g&&lt(this)};function lt(t){t.readyState=4,t.l=null,t.j=null,t.v=null,ut(t)}i.setRequestHeader=function(t,s){this.u.append(t,s)},i.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],s=this.h.entries();for(var o=s.next();!o.done;)o=o.value,t.push(o[0]+": "+o[1]),o=s.next();return t.join(`\r
`)};function ut(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ut.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});function Wi(t){let s="";return q(t,function(o,c){s+=c,s+=":",s+=o,s+=`\r
`}),s}function kn(t,s,o){e:{for(c in o){var c=!1;break e}c=!0}c||(o=Wi(o),typeof t=="string"?o!=null&&encodeURIComponent(String(o)):N(t,s,o))}function M(t){V.call(this),this.headers=new Map,this.o=t||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(M,V);var Io=/^https?$/i,wo=["POST","PUT"];i=M.prototype,i.Ha=function(t){this.J=t},i.ea=function(t,s,o,c){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);s=s?s.toUpperCase():"GET",this.D=t,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():wn.g(),this.v=this.o?Ei(this.o):Ei(wn),this.g.onreadystatechange=k(this.Ea,this);try{this.B=!0,this.g.open(s,String(t),!0),this.B=!1}catch(I){Gi(this,I);return}if(t=o||"",o=new Map(this.headers),c)if(Object.getPrototypeOf(c)===Object.prototype)for(var v in c)o.set(v,c[v]);else if(typeof c.keys=="function"&&typeof c.get=="function")for(const I of c.keys())o.set(I,c.get(I));else throw Error("Unknown input type for opt_headers: "+String(c));c=Array.from(o.keys()).find(I=>I.toLowerCase()=="content-type"),v=y.FormData&&t instanceof y.FormData,!(0<=Array.prototype.indexOf.call(wo,s,void 0))||c||v||o.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[I,T]of o)this.g.setRequestHeader(I,T);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ji(this),this.u=!0,this.g.send(t),this.u=!1}catch(I){Gi(this,I)}};function Gi(t,s){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=s,t.m=5,Ki(t),xt(t)}function Ki(t){t.A||(t.A=!0,z(t,"complete"),z(t,"error"))}i.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=t||7,z(this,"complete"),z(this,"abort"),xt(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),xt(this,!0)),M.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?qi(this):this.bb())},i.bb=function(){qi(this)};function qi(t){if(t.h&&typeof l<"u"&&(!t.v[1]||ce(t)!=4||t.Z()!=2)){if(t.u&&ce(t)==4)yi(t.Ea,0,t);else if(z(t,"readystatechange"),ce(t)==4){t.h=!1;try{const T=t.Z();e:switch(T){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var s=!0;break e;default:s=!1}var o;if(!(o=s)){var c;if(c=T===0){var v=String(t.D).match(Fi)[1]||null;!v&&y.self&&y.self.location&&(v=y.self.location.protocol.slice(0,-1)),c=!Io.test(v?v.toLowerCase():"")}o=c}if(o)z(t,"complete"),z(t,"success");else{t.m=6;try{var I=2<ce(t)?t.g.statusText:""}catch{I=""}t.l=I+" ["+t.Z()+"]",Ki(t)}}finally{xt(t)}}}}function xt(t,s){if(t.g){Ji(t);const o=t.g,c=t.v[0]?()=>{}:null;t.g=null,t.v=null,s||z(t,"ready");try{o.onreadystatechange=c}catch{}}}function Ji(t){t.I&&(y.clearTimeout(t.I),t.I=null)}i.isActive=function(){return!!this.g};function ce(t){return t.g?t.g.readyState:0}i.Z=function(){try{return 2<ce(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(t){if(this.g){var s=this.g.responseText;return t&&s.indexOf(t)==0&&(s=s.substring(t.length)),Xs(s)}};function Xi(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.H){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function Eo(t){const s={};t=(t.g&&2<=ce(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let c=0;c<t.length;c++){if(Y(t[c]))continue;var o=g(t[c]);const v=o[0];if(o=o[1],typeof o!="string")continue;o=o.trim();const I=s[v]||[];s[v]=I,I.push(o)}m(s,function(c){return c.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function dt(t,s,o){return o&&o.internalChannelParams&&o.internalChannelParams[t]||s}function Yi(t){this.Aa=0,this.i=[],this.j=new st,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=dt("failFast",!1,t),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=dt("baseRetryDelayMs",5e3,t),this.cb=dt("retryDelaySeedMs",1e4,t),this.Wa=dt("forwardChannelMaxRetries",2,t),this.wa=dt("forwardChannelRequestTimeoutMs",2e4,t),this.pa=t&&t.xmlHttpFactory||void 0,this.Xa=t&&t.Tb||void 0,this.Ca=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.h=new Di(t&&t.concurrentRequestLimit),this.Da=new yo,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=t&&t.Rb||!1,t&&t.xa&&this.j.xa(),t&&t.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&t&&t.detectBufferingProxy||!1,this.ja=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.ja=t.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=Yi.prototype,i.la=8,i.G=1,i.connect=function(t,s,o,c){W(0),this.W=t,this.H=s||{},o&&c!==void 0&&(this.H.OSID=o,this.H.OAID=c),this.F=this.X,this.I=or(this,null,this.W),jt(this)};function Pn(t){if(Qi(t),t.G==3){var s=t.U++,o=he(t.I);if(N(o,"SID",t.K),N(o,"RID",s),N(o,"TYPE","terminate"),ft(t,o),s=new ve(t,t.j,s),s.L=2,s.v=Lt(he(o)),o=!1,y.navigator&&y.navigator.sendBeacon)try{o=y.navigator.sendBeacon(s.v.toString(),"")}catch{}!o&&y.Image&&(new Image().src=s.v,o=!0),o||(s.g=ar(s.j,null),s.g.ea(s.v)),s.F=Date.now(),Ot(s)}sr(t)}function Ft(t){t.g&&(On(t),t.g.cancel(),t.g=null)}function Qi(t){Ft(t),t.u&&(y.clearTimeout(t.u),t.u=null),Bt(t),t.h.cancel(),t.s&&(typeof t.s=="number"&&y.clearTimeout(t.s),t.s=null)}function jt(t){if(!Ni(t.h)&&!t.s){t.s=!0;var s=t.Ga;Qe||fi(),Ze||(Qe(),Ze=!0),an.add(s,t),t.B=0}}function To(t,s){return Li(t.h)>=t.h.j-(t.s?1:0)?!1:t.s?(t.i=s.D.concat(t.i),!0):t.G==1||t.G==2||t.B>=(t.Va?0:t.Wa)?!1:(t.s=rt(k(t.Ga,t,s),rr(t,t.B)),t.B++,!0)}i.Ga=function(t){if(this.s)if(this.s=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const v=new ve(this,this.j,t);let I=this.o;if(this.S&&(I?(I=u(I),p(I,this.S)):I=this.S),this.m!==null||this.O||(v.H=I,I=null),this.P)e:{for(var s=0,o=0;o<this.i.length;o++){t:{var c=this.i[o];if("__data__"in c.map&&(c=c.map.__data__,typeof c=="string")){c=c.length;break t}c=void 0}if(c===void 0)break;if(s+=c,4096<s){s=o;break e}if(s===4096||o===this.i.length-1){s=o+1;break e}}s=1e3}else s=1e3;s=er(this,v,s),o=he(this.I),N(o,"RID",t),N(o,"CVER",22),this.D&&N(o,"X-HTTP-Session-Id",this.D),ft(this,o),I&&(this.O?s="headers="+encodeURIComponent(String(Wi(I)))+"&"+s:this.m&&kn(o,this.m,I)),Rn(this.h,v),this.Ua&&N(o,"TYPE","init"),this.P?(N(o,"$req",s),N(o,"SID","null"),v.T=!0,Tn(v,o,null)):Tn(v,o,s),this.G=2}}else this.G==3&&(t?Zi(this,t):this.i.length==0||Ni(this.h)||Zi(this))};function Zi(t,s){var o;s?o=s.l:o=t.U++;const c=he(t.I);N(c,"SID",t.K),N(c,"RID",o),N(c,"AID",t.T),ft(t,c),t.m&&t.o&&kn(c,t.m,t.o),o=new ve(t,t.j,o,t.B+1),t.m===null&&(o.H=t.o),s&&(t.i=s.D.concat(t.i)),s=er(t,o,1e3),o.I=Math.round(.5*t.wa)+Math.round(.5*t.wa*Math.random()),Rn(t.h,o),Tn(o,c,s)}function ft(t,s){t.H&&q(t.H,function(o,c){N(s,c,o)}),t.l&&xi({},function(o,c){N(s,c,o)})}function er(t,s,o){o=Math.min(t.i.length,o);var c=t.l?k(t.l.Na,t.l,t):null;e:{var v=t.i;let I=-1;for(;;){const T=["count="+o];I==-1?0<o?(I=v[0].g,T.push("ofs="+I)):I=0:T.push("ofs="+I);let D=!0;for(let F=0;F<o;F++){let P=v[F].g;const H=v[F].map;if(P-=I,0>P)I=Math.max(0,v[F].g-100),D=!1;else try{_o(H,T,"req"+P+"_")}catch{c&&c(H)}}if(D){c=T.join("&");break e}}}return t=t.i.splice(0,o),s.D=t,c}function tr(t){if(!t.g&&!t.u){t.Y=1;var s=t.Fa;Qe||fi(),Ze||(Qe(),Ze=!0),an.add(s,t),t.v=0}}function Cn(t){return t.g||t.u||3<=t.v?!1:(t.Y++,t.u=rt(k(t.Fa,t),rr(t,t.v)),t.v++,!0)}i.Fa=function(){if(this.u=null,nr(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var t=2*this.R;this.j.info("BP detection timer enabled: "+t),this.A=rt(k(this.ab,this),t)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,W(10),Ft(this),nr(this))};function On(t){t.A!=null&&(y.clearTimeout(t.A),t.A=null)}function nr(t){t.g=new ve(t,t.j,"rpc",t.Y),t.m===null&&(t.g.H=t.o),t.g.O=0;var s=he(t.qa);N(s,"RID","rpc"),N(s,"SID",t.K),N(s,"AID",t.T),N(s,"CI",t.F?"0":"1"),!t.F&&t.ja&&N(s,"TO",t.ja),N(s,"TYPE","xmlhttp"),ft(t,s),t.m&&t.o&&kn(s,t.m,t.o),t.L&&(t.g.I=t.L);var o=t.g;t=t.ia,o.L=1,o.v=Lt(he(s)),o.m=null,o.P=!0,Pi(o,t)}i.Za=function(){this.C!=null&&(this.C=null,Ft(this),Cn(this),W(19))};function Bt(t){t.C!=null&&(y.clearTimeout(t.C),t.C=null)}function ir(t,s){var o=null;if(t.g==s){Bt(t),On(t),t.g=null;var c=2}else if(bn(t.h,s))o=s.D,Mi(t.h,s),c=1;else return;if(t.G!=0){if(s.o)if(c==1){o=s.m?s.m.length:0,s=Date.now()-s.F;var v=t.B;c=_n(),z(c,new bi(c,o)),jt(t)}else tr(t);else if(v=s.s,v==3||v==0&&0<s.X||!(c==1&&To(t,s)||c==2&&Cn(t)))switch(o&&0<o.length&&(s=t.h,s.i=s.i.concat(o)),v){case 1:De(t,5);break;case 4:De(t,10);break;case 3:De(t,6);break;default:De(t,2)}}}function rr(t,s){let o=t.Ta+Math.floor(Math.random()*t.cb);return t.isActive()||(o*=2),o*s}function De(t,s){if(t.j.info("Error code "+s),s==2){var o=k(t.fb,t),c=t.Xa;const v=!c;c=new Oe(c||"//www.google.com/images/cleardot.gif"),y.location&&y.location.protocol=="http"||Dt(c,"https"),Lt(c),v?mo(c.toString(),o):vo(c.toString(),o)}else W(2);t.G=0,t.l&&t.l.sa(s),sr(t),Qi(t)}i.fb=function(t){t?(this.j.info("Successfully pinged google.com"),W(2)):(this.j.info("Failed to ping google.com"),W(1))};function sr(t){if(t.G=0,t.ka=[],t.l){const s=Ui(t.h);(s.length!=0||t.i.length!=0)&&(L(t.ka,s),L(t.ka,t.i),t.h.i.length=0,U(t.i),t.i.length=0),t.l.ra()}}function or(t,s,o){var c=o instanceof Oe?he(o):new Oe(o);if(c.g!="")s&&(c.g=s+"."+c.g),Nt(c,c.s);else{var v=y.location;c=v.protocol,s=s?s+"."+v.hostname:v.hostname,v=+v.port;var I=new Oe(null);c&&Dt(I,c),s&&(I.g=s),v&&Nt(I,v),o&&(I.l=o),c=I}return o=t.D,s=t.ya,o&&s&&N(c,o,s),N(c,"VER",t.la),ft(t,c),c}function ar(t,s,o){if(s&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return s=t.Ca&&!t.pa?new M(new Mt({eb:o})):new M(t.pa),s.Ha(t.J),s}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function hr(){}i=hr.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function Q(t,s){V.call(this),this.g=new Yi(s),this.l=t,this.h=s&&s.messageUrlParams||null,t=s&&s.messageHeaders||null,s&&s.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=s&&s.initMessageHeaders||null,s&&s.messageContentType&&(t?t["X-WebChannel-Content-Type"]=s.messageContentType:t={"X-WebChannel-Content-Type":s.messageContentType}),s&&s.va&&(t?t["X-WebChannel-Client-Profile"]=s.va:t={"X-WebChannel-Client-Profile":s.va}),this.g.S=t,(t=s&&s.Sb)&&!Y(t)&&(this.g.m=t),this.v=s&&s.supportsCrossDomainXhr||!1,this.u=s&&s.sendRawJson||!1,(s=s&&s.httpSessionIdParam)&&!Y(s)&&(this.g.D=s,t=this.h,t!==null&&s in t&&(t=this.h,s in t&&delete t[s])),this.j=new Ve(this)}R(Q,V),Q.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Q.prototype.close=function(){Pn(this.g)},Q.prototype.o=function(t){var s=this.g;if(typeof t=="string"){var o={};o.__data__=t,t=o}else this.u&&(o={},o.__data__=gn(t),t=o);s.i.push(new so(s.Ya++,t)),s.G==3&&jt(s)},Q.prototype.N=function(){this.g.l=null,delete this.j,Pn(this.g),delete this.g,Q.aa.N.call(this)};function cr(t){vn.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var s=t.__sm__;if(s){e:{for(const o in s){t=o;break e}t=void 0}(this.i=t)&&(t=this.i,s=s!==null&&t in s?s[t]:void 0),this.data=s}else this.data=t}R(cr,vn);function lr(){yn.call(this),this.status=1}R(lr,yn);function Ve(t){this.g=t}R(Ve,hr),Ve.prototype.ua=function(){z(this.g,"a")},Ve.prototype.ta=function(t){z(this.g,new cr(t))},Ve.prototype.sa=function(t){z(this.g,new lr)},Ve.prototype.ra=function(){z(this.g,"b")},Q.prototype.send=Q.prototype.o,Q.prototype.open=Q.prototype.m,Q.prototype.close=Q.prototype.close,In.NO_ERROR=0,In.TIMEOUT=8,In.HTTP_ERROR=6,io.COMPLETE="complete",Qs.EventType=nt,nt.OPEN="a",nt.CLOSE="b",nt.ERROR="c",nt.MESSAGE="d",V.prototype.listen=V.prototype.K,M.prototype.listenOnce=M.prototype.L,M.prototype.getLastError=M.prototype.Ka,M.prototype.getLastErrorCode=M.prototype.Ba,M.prototype.getStatus=M.prototype.Z,M.prototype.getResponseJson=M.prototype.Oa,M.prototype.getResponseText=M.prototype.oa,M.prototype.send=M.prototype.ea,M.prototype.setWithCredentials=M.prototype.Ha}).apply(typeof $t<"u"?$t:typeof self<"u"?self:typeof window<"u"?window:{});const jr="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}G.UNAUTHENTICATED=new G(null),G.GOOGLE_CREDENTIALS=new G("google-credentials-uid"),G.FIRST_PARTY=new G("first-party-uid"),G.MOCK_USER=new G("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let St="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qe=new Xn("@firebase/firestore");function te(i,...e){if(qe.logLevel<=O.DEBUG){const n=e.map(li);qe.debug(`Firestore (${St}): ${i}`,...n)}}function xs(i,...e){if(qe.logLevel<=O.ERROR){const n=e.map(li);qe.error(`Firestore (${St}): ${i}`,...n)}}function Zc(i,...e){if(qe.logLevel<=O.WARN){const n=e.map(li);qe.warn(`Firestore (${St}): ${i}`,...n)}}function li(i){if(typeof i=="string")return i;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(i)}catch{return i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(i="Unexpected state"){const e=`FIRESTORE (${St}) INTERNAL ASSERTION FAILED: `+i;throw xs(e),new Error(e)}function gt(i,e){i||ui()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class X extends ge{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class el{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(G.UNAUTHENTICATED))}shutdown(){}}class tl{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class nl{constructor(e){this.t=e,this.currentUser=G.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){gt(this.o===void 0);let r=this.i;const a=w=>this.i!==r?(r=this.i,n(w)):Promise.resolve();let h=new mt;this.o=()=>{this.i++,this.currentUser=this.u(),h.resolve(),h=new mt,e.enqueueRetryable(()=>a(this.currentUser))};const l=()=>{const w=h;e.enqueueRetryable(async()=>{await w.promise,await a(this.currentUser)})},y=w=>{te("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=w,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit(w=>y(w)),setTimeout(()=>{if(!this.auth){const w=this.t.getImmediate({optional:!0});w?y(w):(te("FirebaseAuthCredentialsProvider","Auth not yet detected"),h.resolve(),h=new mt)}},0),l()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(te("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(gt(typeof r.accessToken=="string"),new Fs(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return gt(e===null||typeof e=="string"),new G(e)}}class il{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=G.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class rl{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new il(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(G.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class sl{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ol{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){gt(this.o===void 0);const r=h=>{h.error!=null&&te("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${h.error.message}`);const l=h.token!==this.R;return this.R=h.token,te("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?n(h.token):Promise.resolve()};this.o=h=>{e.enqueueRetryable(()=>r(h))};const a=h=>{te("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=h,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(h=>a(h)),setTimeout(()=>{if(!this.appCheck){const h=this.A.getImmediate({optional:!0});h?a(h):te("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(gt(typeof n.token=="string"),this.R=n.token,new sl(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}function al(i){return i.name==="IndexedDbTransactionError"}class nn{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new nn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof nn&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Br,b;(b=Br||(Br={}))[b.OK=0]="OK",b[b.CANCELLED=1]="CANCELLED",b[b.UNKNOWN=2]="UNKNOWN",b[b.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",b[b.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",b[b.NOT_FOUND=5]="NOT_FOUND",b[b.ALREADY_EXISTS=6]="ALREADY_EXISTS",b[b.PERMISSION_DENIED=7]="PERMISSION_DENIED",b[b.UNAUTHENTICATED=16]="UNAUTHENTICATED",b[b.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",b[b.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",b[b.ABORTED=10]="ABORTED",b[b.OUT_OF_RANGE=11]="OUT_OF_RANGE",b[b.UNIMPLEMENTED=12]="UNIMPLEMENTED",b[b.INTERNAL=13]="INTERNAL",b[b.UNAVAILABLE=14]="UNAVAILABLE",b[b.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Us([4294967295,4294967295],0);function Bn(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e,n,r=1e3,a=1.5,h=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=a,this.Qo=h,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),a=Math.max(0,n-r);a>0&&te("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,a,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e,n,r,a,h){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=a,this.removalCallback=h,this.deferred=new mt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,a,h){const l=Date.now()+r,y=new di(e,n,l,a,h);return y.start(r),y}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new X(J.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var Vr,Hr;(Hr=Vr||(Vr={})).ea="default",Hr.Cache="cache";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cl(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r=new Map;function ll(i,e,n,r){if(e===!0&&r===!0)throw new X(J.INVALID_ARGUMENT,`${i} and ${n} cannot be used together.`)}function ul(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":ui()}function dl(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new X(J.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ul(i);throw new X(J.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new X(J.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new X(J.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ll("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=cl((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(h){if(h.timeoutSeconds!==void 0){if(isNaN(h.timeoutSeconds))throw new X(J.INVALID_ARGUMENT,`invalid long polling timeout: ${h.timeoutSeconds} (must not be NaN)`);if(h.timeoutSeconds<5)throw new X(J.INVALID_ARGUMENT,`invalid long polling timeout: ${h.timeoutSeconds} (minimum allowed value is 5)`);if(h.timeoutSeconds>30)throw new X(J.INVALID_ARGUMENT,`invalid long polling timeout: ${h.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,a){return r.timeoutSeconds===a.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class js{constructor(e,n,r,a){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new zr({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new X(J.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new X(J.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new zr(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new el;switch(r.type){case"firstParty":return new rl(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new X(J.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=$r.get(n);r&&(te("ComponentProvider","Removing Datastore"),$r.delete(n),r.terminate())}(this),Promise.resolve()}}function fl(i,e,n,r={}){var a;const h=(i=dl(i,js))._getSettings(),l=`${e}:${n}`;if(h.host!=="firestore.googleapis.com"&&h.host!==l&&Zc("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),i._setSettings(Object.assign(Object.assign({},h),{host:l,ssl:!1})),r.mockUserToken){let y,w;if(typeof r.mockUserToken=="string")y=r.mockUserToken,w=G.MOCK_USER;else{y=No(r.mockUserToken,(a=i._app)===null||a===void 0?void 0:a.options.projectId);const E=r.mockUserToken.sub||r.mockUserToken.user_id;if(!E)throw new X(J.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");w=new G(E)}i._authCredentials=new tl(new Fs(y,w))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new hl(this,"async_queue_retry"),this.Vu=()=>{const r=Bn();r&&te("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Bn();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Bn();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new mt;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!al(e))throw e;te("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const a=function(l){let y=l.message||"";return l.stack&&(y=l.stack.includes(l.message)?l.stack:l.message+`
`+l.stack),y}(r);throw xs("INTERNAL UNHANDLED ERROR: ",a),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const a=di.createAndSchedule(this,e,n,r,h=>this.yu(h));return this.Tu.push(a),a}fu(){this.Eu&&ui()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class pl extends js{constructor(e,n,r,a){super(e,n,r,a),this.type="firestore",this._queue=new Wr,this._persistenceKey=(a==null?void 0:a.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Wr(e),this._firestoreClient=void 0,await e}}}function _l(i,e){const n=typeof i=="object"?i:es(),r=typeof i=="string"?i:"(default)",a=Qn(n,"firestore").getImmediate({identifier:r});if(!a._initialized){const h=Oo("firestore");h&&fl(a,...h)}return a}(function(e,n=!0){(function(a){St=a})(Je),Ge(new Me("firestore",(r,{instanceIdentifier:a,options:h})=>{const l=r.getProvider("app").getImmediate(),y=new pl(new nl(r.getProvider("auth-internal")),new ol(r.getProvider("app-check-internal")),function(E,S){if(!Object.prototype.hasOwnProperty.apply(E.options,["projectId"]))throw new X(J.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new nn(E.options.projectId,S)}(l,a),l);return h=Object.assign({useFetchStreams:n},h),y._setSettings(h),y},"PUBLIC").setMultipleInstances(!0)),Re(jr,"4.7.3",e),Re(jr,"4.7.3","esm2017")})();export{Ee as G,_l as a,vl as b,yl as g,Ga as i,gl as o,ml as s};
//# sourceMappingURL=firebase-vendor-gPAok4mT.js.map
