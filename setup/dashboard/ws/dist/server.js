/*!
 * QuickBox-ws d9d876e0c530ae391dba build at 2020-08-12T12:44:43.060Z (https://github.com/amefs/quickbox-lite)
 * Copyright 2020 TautCony
 * Licensed under GPL-3.0 (https://github.com/amefs/quickbox-lite/blob/master/LICENSE)
 */!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});class o{}t.default=o,o.EVENT_CONNECTION="connection",o.EVENT_DISCONNECT="disconnect",o.EVENT_MESSAGE="message",o.EVENT_EXEC="exec",o.TEMPLATE_OPERATION="$operation$",o.TEMPLATE_TARGET="$target$",o.TEMPLATE_USERNAME="$username$"},function(e,t){e.exports=require("fs")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.WatchedConfig=void 0;const o=n(1);t.WatchedConfig=class{constructor(e,t="utf-8"){this.path=e,this.encoding=t,this.loadConfig(),this.watch()}get Value(){return this.config}loadConfig(){this.config=JSON.parse(o.readFileSync(this.path).toString(this.encoding))}watch(){o.watchFile(this.path,(e,t)=>{e.mtime>t.mtime&&(this.timestamp=e.mtime,this.loadConfig(),console.log("Config reloaded at "+new Date))})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(4),r=n(5),i=n(6),s=n(7),a=n(8),c=n(11),u=o();u.set("trust proxy",!0);const d=r.createServer(u),l=i(d,{wsEngine:"ws"});l.use(s.default),l.use(a.default),l.use(c.default);const f="<html>\n    <head>\n        <title>QuickBox Websocket</title>\n    </head>\n    <body>\n    <pre>Request from $ip$</pre>\n    </body>\n</html>";u.get("/",(e,t)=>{t.send(f.replace("$ip$",e.ip))}),d.listen(8575,"127.0.0.1",()=>{console.log("quickbox-ws running...")})},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("http")},function(e,t){e.exports=require("socket.io")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0);t.default=(e,t)=>{const n=e.handshake.headers["x-forwarded-for"]||e.handshake.address;console.log(`${e.id} connect from ${n}`),e.on(o.default.EVENT_DISCONNECT,()=>{console.log(e.id+" disconnect")}),t&&t()}},function(e,t,n){"use strict";var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function s(e){try{c(o.next(e))}catch(e){i(e)}}function a(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}c((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const r=n(9),i=n(10),s=n(0),a=r.default.create({baseURL:"http://127.0.0.1",timeout:5e3,httpsAgent:new i.Agent({rejectUnauthorized:!1})}),c=(e,t)=>o(void 0,void 0,void 0,(function*(){const n={pathName:e,success:!0,message:"",response:""};try{const o=(e=>{let t;t=e.toLowerCase().startsWith("http")?new URL(e):new URL(e,"place://holder");const n=t.pathname,o={};return t.searchParams.forEach((e,t)=>{o[t]=e}),{pathName:n,args:o}})(e);n.response=(yield a.get(o.pathName,{params:o.args})).data}catch(e){n.message=e?e.toString():"Unknown error",n.success=!1}finally{t.send(n)}}));t.default=(e,t)=>{e.on(s.default.EVENT_MESSAGE,t=>c(t,e)),t&&t()}},function(e,t){e.exports=require("axios")},function(e,t){e.exports=require("https")},function(e,t,n){"use strict";var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function s(e){try{c(o.next(e))}catch(e){i(e)}}function a(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}c((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const r=n(12),i=n(1),s=n(13),a=n(0),c=n(2),u=n(14);let d=s.join(__dirname,"commands.json");i.existsSync(d)||(d=s.join(__dirname,"..","commands.json"));const l=new c.WatchedConfig(d),f=u.getFiles("/root/.qbuser/").map(e=>e.replace(".info",""))[0],E={env:Object.assign({TERM:"xterm"},process.env),timeout:684e4,maxBuffer:5242880};t.default=(e,t)=>{e.on(a.default.EVENT_EXEC,t=>((e,t)=>o(void 0,void 0,void 0,(function*(){const n={cmd:e,success:!0,message:"",stdout:"",stderr:""};let o;try{o=u.buildCommand(e,l,f)}catch(e){return n.success=!1,n.message="Invalid command",e instanceof Error&&(n.message=e.message),void t.emit(a.default.EVENT_EXEC,n)}r.exec(o,E,(e,o,r)=>{n.stdout=o,n.stderr=r,e&&(n.success=!1,n.message="Execute Failed",e.killed&&"SIGTERM"===e.signal&&(n.message="Execute Timeout")),t.emit(a.default.EVENT_EXEC,n)})})))(t,e)),t&&t()}},function(e,t){e.exports=require("child_process")},function(e,t){e.exports=require("path")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.buildCommand=t.getFiles=void 0;const o=n(1),r=n(0),i=n(2);t.getFiles=function(e){const t=[];return o.existsSync(e)?o.readdirSync(e,{withFileTypes:!0}).filter(e=>e.isFile()).map(e=>e.name):t},t.buildCommand=function(e,t,n){if(!e)throw new Error(`Invalid payload with type '${Object.prototype.toString.call(e)}'`);if(!t)throw new Error(`Invalid config with type '${Object.prototype.toString.call(t)}'`);let[o,s,a]=e.split(":");if(void 0===o||void 0===s||void 0===a)throw new Error(`Invalid payload '${e}'`);o=o.trim(),s=s.trim(),a=a.trim();const c=t instanceof i.WatchedConfig?t.Value[o]:t[o];if(void 0===c)throw new Error(`Command '${o}' not found`);let u=c.template;if(u.includes(r.default.TEMPLATE_OPERATION)){const e=c.operations.find(e=>e===s);if(!e)throw new Error(`Operation '${s}' not found`);u=u.replace(r.default.TEMPLATE_OPERATION,e)}else if(""!==s)throw new Error(`Unexpected operation '${s}' is provided`);if(u.includes(r.default.TEMPLATE_TARGET)){const e=c.targets.find(e=>e===a||e===a+"@"+r.default.TEMPLATE_USERNAME);if(!e)throw new Error(`Target '${a}' not found`);u=u.replace(r.default.TEMPLATE_TARGET,e)}else if(""!==a)throw new Error(`Unexpected target '${a}' is provided`);if(u.includes(r.default.TEMPLATE_USERNAME)){if(!n)throw new Error(`Invalid username with type '${Object.prototype.toString.call(n)}'`);u=u.replace(r.default.TEMPLATE_USERNAME,n)}if(u.includes(r.default.TEMPLATE_OPERATION)||u.includes(r.default.TEMPLATE_TARGET)||u.includes(r.default.TEMPLATE_USERNAME))throw new Error(`Invalid template '${u}'`);return u}}]);