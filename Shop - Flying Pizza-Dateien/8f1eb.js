//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){function n(n){function t(t,r,e,u,i,o){for(;i>=0&&o>i;i+=n){var a=u?u[i]:i;e=r(e,t[a],a,t)}return e}return function(r,e,u,i){e=b(e,i,4);var o=!k(r)&&m.keys(r),a=(o||r).length,c=n>0?0:a-1;return arguments.length<3&&(u=r[o?o[c]:c],c+=n),t(r,e,u,o,c,a)}}function t(n){return function(t,r,e){r=x(r,e);for(var u=O(t),i=n>0?0:u-1;i>=0&&u>i;i+=n)if(r(t[i],i,t))return i;return-1}}function r(n,t,r){return function(e,u,i){var o=0,a=O(e);if("number"==typeof i)n>0?o=i>=0?i:Math.max(i+a,o):a=i>=0?Math.min(i+1,a):i+a+1;else if(r&&i&&a)return i=r(e,u),e[i]===u?i:-1;if(u!==u)return i=t(l.call(e,o,a),m.isNaN),i>=0?i+o:-1;for(i=n>0?o:a-1;i>=0&&a>i;i+=n)if(e[i]===u)return i;return-1}}function e(n,t){var r=I.length,e=n.constructor,u=m.isFunction(e)&&e.prototype||a,i="constructor";for(m.has(n,i)&&!m.contains(t,i)&&t.push(i);r--;)i=I[r],i in n&&n[i]!==u[i]&&!m.contains(t,i)&&t.push(i)}var u=this,i=u._,o=Array.prototype,a=Object.prototype,c=Function.prototype,f=o.push,l=o.slice,s=a.toString,p=a.hasOwnProperty,h=Array.isArray,v=Object.keys,g=c.bind,y=Object.create,d=function(){},m=function(n){return n instanceof m?n:this instanceof m?void(this._wrapped=n):new m(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=m),exports._=m):u._=m,m.VERSION="1.8.3";var b=function(n,t,r){if(t===void 0)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 2:return function(r,e){return n.call(t,r,e)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}},x=function(n,t,r){return null==n?m.identity:m.isFunction(n)?b(n,t,r):m.isObject(n)?m.matcher(n):m.property(n)};m.iteratee=function(n,t){return x(n,t,1/0)};var _=function(n,t){return function(r){var e=arguments.length;if(2>e||null==r)return r;for(var u=1;e>u;u++)for(var i=arguments[u],o=n(i),a=o.length,c=0;a>c;c++){var f=o[c];t&&r[f]!==void 0||(r[f]=i[f])}return r}},j=function(n){if(!m.isObject(n))return{};if(y)return y(n);d.prototype=n;var t=new d;return d.prototype=null,t},w=function(n){return function(t){return null==t?void 0:t[n]}},A=Math.pow(2,53)-1,O=w("length"),k=function(n){var t=O(n);return"number"==typeof t&&t>=0&&A>=t};m.each=m.forEach=function(n,t,r){t=b(t,r);var e,u;if(k(n))for(e=0,u=n.length;u>e;e++)t(n[e],e,n);else{var i=m.keys(n);for(e=0,u=i.length;u>e;e++)t(n[i[e]],i[e],n)}return n},m.map=m.collect=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=Array(u),o=0;u>o;o++){var a=e?e[o]:o;i[o]=t(n[a],a,n)}return i},m.reduce=m.foldl=m.inject=n(1),m.reduceRight=m.foldr=n(-1),m.find=m.detect=function(n,t,r){var e;return e=k(n)?m.findIndex(n,t,r):m.findKey(n,t,r),e!==void 0&&e!==-1?n[e]:void 0},m.filter=m.select=function(n,t,r){var e=[];return t=x(t,r),m.each(n,function(n,r,u){t(n,r,u)&&e.push(n)}),e},m.reject=function(n,t,r){return m.filter(n,m.negate(x(t)),r)},m.every=m.all=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(!t(n[o],o,n))return!1}return!0},m.some=m.any=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(t(n[o],o,n))return!0}return!1},m.contains=m.includes=m.include=function(n,t,r,e){return k(n)||(n=m.values(n)),("number"!=typeof r||e)&&(r=0),m.indexOf(n,t,r)>=0},m.invoke=function(n,t){var r=l.call(arguments,2),e=m.isFunction(t);return m.map(n,function(n){var u=e?t:n[t];return null==u?u:u.apply(n,r)})},m.pluck=function(n,t){return m.map(n,m.property(t))},m.where=function(n,t){return m.filter(n,m.matcher(t))},m.findWhere=function(n,t){return m.find(n,m.matcher(t))},m.max=function(n,t,r){var e,u,i=-1/0,o=-1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],e>i&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(u>o||u===-1/0&&i===-1/0)&&(i=n,o=u)});return i},m.min=function(n,t,r){var e,u,i=1/0,o=1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],i>e&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(o>u||1/0===u&&1/0===i)&&(i=n,o=u)});return i},m.shuffle=function(n){for(var t,r=k(n)?n:m.values(n),e=r.length,u=Array(e),i=0;e>i;i++)t=m.random(0,i),t!==i&&(u[i]=u[t]),u[t]=r[i];return u},m.sample=function(n,t,r){return null==t||r?(k(n)||(n=m.values(n)),n[m.random(n.length-1)]):m.shuffle(n).slice(0,Math.max(0,t))},m.sortBy=function(n,t,r){return t=x(t,r),m.pluck(m.map(n,function(n,r,e){return{value:n,index:r,criteria:t(n,r,e)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={};return r=x(r,e),m.each(t,function(e,i){var o=r(e,i,t);n(u,e,o)}),u}};m.groupBy=F(function(n,t,r){m.has(n,r)?n[r].push(t):n[r]=[t]}),m.indexBy=F(function(n,t,r){n[r]=t}),m.countBy=F(function(n,t,r){m.has(n,r)?n[r]++:n[r]=1}),m.toArray=function(n){return n?m.isArray(n)?l.call(n):k(n)?m.map(n,m.identity):m.values(n):[]},m.size=function(n){return null==n?0:k(n)?n.length:m.keys(n).length},m.partition=function(n,t,r){t=x(t,r);var e=[],u=[];return m.each(n,function(n,r,i){(t(n,r,i)?e:u).push(n)}),[e,u]},m.first=m.head=m.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:m.initial(n,n.length-t)},m.initial=function(n,t,r){return l.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},m.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:m.rest(n,Math.max(0,n.length-t))},m.rest=m.tail=m.drop=function(n,t,r){return l.call(n,null==t||r?1:t)},m.compact=function(n){return m.filter(n,m.identity)};var S=function(n,t,r,e){for(var u=[],i=0,o=e||0,a=O(n);a>o;o++){var c=n[o];if(k(c)&&(m.isArray(c)||m.isArguments(c))){t||(c=S(c,t,r));var f=0,l=c.length;for(u.length+=l;l>f;)u[i++]=c[f++]}else r||(u[i++]=c)}return u};m.flatten=function(n,t){return S(n,t,!1)},m.without=function(n){return m.difference(n,l.call(arguments,1))},m.uniq=m.unique=function(n,t,r,e){m.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=x(r,e));for(var u=[],i=[],o=0,a=O(n);a>o;o++){var c=n[o],f=r?r(c,o,n):c;t?(o&&i===f||u.push(c),i=f):r?m.contains(i,f)||(i.push(f),u.push(c)):m.contains(u,c)||u.push(c)}return u},m.union=function(){return m.uniq(S(arguments,!0,!0))},m.intersection=function(n){for(var t=[],r=arguments.length,e=0,u=O(n);u>e;e++){var i=n[e];if(!m.contains(t,i)){for(var o=1;r>o&&m.contains(arguments[o],i);o++);o===r&&t.push(i)}}return t},m.difference=function(n){var t=S(arguments,!0,!0,1);return m.filter(n,function(n){return!m.contains(t,n)})},m.zip=function(){return m.unzip(arguments)},m.unzip=function(n){for(var t=n&&m.max(n,O).length||0,r=Array(t),e=0;t>e;e++)r[e]=m.pluck(n,e);return r},m.object=function(n,t){for(var r={},e=0,u=O(n);u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},m.findIndex=t(1),m.findLastIndex=t(-1),m.sortedIndex=function(n,t,r,e){r=x(r,e,1);for(var u=r(t),i=0,o=O(n);o>i;){var a=Math.floor((i+o)/2);r(n[a])<u?i=a+1:o=a}return i},m.indexOf=r(1,m.findIndex,m.sortedIndex),m.lastIndexOf=r(-1,m.findLastIndex),m.range=function(n,t,r){null==t&&(t=n||0,n=0),r=r||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;e>i;i++,n+=r)u[i]=n;return u};var E=function(n,t,r,e,u){if(!(e instanceof t))return n.apply(r,u);var i=j(n.prototype),o=n.apply(i,u);return m.isObject(o)?o:i};m.bind=function(n,t){if(g&&n.bind===g)return g.apply(n,l.call(arguments,1));if(!m.isFunction(n))throw new TypeError("Bind must be called on a function");var r=l.call(arguments,2),e=function(){return E(n,e,t,this,r.concat(l.call(arguments)))};return e},m.partial=function(n){var t=l.call(arguments,1),r=function(){for(var e=0,u=t.length,i=Array(u),o=0;u>o;o++)i[o]=t[o]===m?arguments[e++]:t[o];for(;e<arguments.length;)i.push(arguments[e++]);return E(n,r,this,this,i)};return r},m.bindAll=function(n){var t,r,e=arguments.length;if(1>=e)throw new Error("bindAll must be passed function names");for(t=1;e>t;t++)r=arguments[t],n[r]=m.bind(n[r],n);return n},m.memoize=function(n,t){var r=function(e){var u=r.cache,i=""+(t?t.apply(this,arguments):e);return m.has(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r},m.delay=function(n,t){var r=l.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},m.defer=m.partial(m.delay,m,1),m.throttle=function(n,t,r){var e,u,i,o=null,a=0;r||(r={});var c=function(){a=r.leading===!1?0:m.now(),o=null,i=n.apply(e,u),o||(e=u=null)};return function(){var f=m.now();a||r.leading!==!1||(a=f);var l=t-(f-a);return e=this,u=arguments,0>=l||l>t?(o&&(clearTimeout(o),o=null),a=f,i=n.apply(e,u),o||(e=u=null)):o||r.trailing===!1||(o=setTimeout(c,l)),i}},m.debounce=function(n,t,r){var e,u,i,o,a,c=function(){var f=m.now()-o;t>f&&f>=0?e=setTimeout(c,t-f):(e=null,r||(a=n.apply(i,u),e||(i=u=null)))};return function(){i=this,u=arguments,o=m.now();var f=r&&!e;return e||(e=setTimeout(c,t)),f&&(a=n.apply(i,u),i=u=null),a}},m.wrap=function(n,t){return m.partial(t,n)},m.negate=function(n){return function(){return!n.apply(this,arguments)}},m.compose=function(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}},m.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},m.before=function(n,t){var r;return function(){return--n>0&&(r=t.apply(this,arguments)),1>=n&&(t=null),r}},m.once=m.partial(m.before,2);var M=!{toString:null}.propertyIsEnumerable("toString"),I=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];m.keys=function(n){if(!m.isObject(n))return[];if(v)return v(n);var t=[];for(var r in n)m.has(n,r)&&t.push(r);return M&&e(n,t),t},m.allKeys=function(n){if(!m.isObject(n))return[];var t=[];for(var r in n)t.push(r);return M&&e(n,t),t},m.values=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},m.mapObject=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=u.length,o={},a=0;i>a;a++)e=u[a],o[e]=t(n[e],e,n);return o},m.pairs=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},m.invert=function(n){for(var t={},r=m.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},m.functions=m.methods=function(n){var t=[];for(var r in n)m.isFunction(n[r])&&t.push(r);return t.sort()},m.extend=_(m.allKeys),m.extendOwn=m.assign=_(m.keys),m.findKey=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=0,o=u.length;o>i;i++)if(e=u[i],t(n[e],e,n))return e},m.pick=function(n,t,r){var e,u,i={},o=n;if(null==o)return i;m.isFunction(t)?(u=m.allKeys(o),e=b(t,r)):(u=S(arguments,!1,!1,1),e=function(n,t,r){return t in r},o=Object(o));for(var a=0,c=u.length;c>a;a++){var f=u[a],l=o[f];e(l,f,o)&&(i[f]=l)}return i},m.omit=function(n,t,r){if(m.isFunction(t))t=m.negate(t);else{var e=m.map(S(arguments,!1,!1,1),String);t=function(n,t){return!m.contains(e,t)}}return m.pick(n,t,r)},m.defaults=_(m.allKeys,!0),m.create=function(n,t){var r=j(n);return t&&m.extendOwn(r,t),r},m.clone=function(n){return m.isObject(n)?m.isArray(n)?n.slice():m.extend({},n):n},m.tap=function(n,t){return t(n),n},m.isMatch=function(n,t){var r=m.keys(t),e=r.length;if(null==n)return!e;for(var u=Object(n),i=0;e>i;i++){var o=r[i];if(t[o]!==u[o]||!(o in u))return!1}return!0};var N=function(n,t,r,e){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return n===t;n instanceof m&&(n=n._wrapped),t instanceof m&&(t=t._wrapped);var u=s.call(n);if(u!==s.call(t))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t}var i="[object Array]"===u;if(!i){if("object"!=typeof n||"object"!=typeof t)return!1;var o=n.constructor,a=t.constructor;if(o!==a&&!(m.isFunction(o)&&o instanceof o&&m.isFunction(a)&&a instanceof a)&&"constructor"in n&&"constructor"in t)return!1}r=r||[],e=e||[];for(var c=r.length;c--;)if(r[c]===n)return e[c]===t;if(r.push(n),e.push(t),i){if(c=n.length,c!==t.length)return!1;for(;c--;)if(!N(n[c],t[c],r,e))return!1}else{var f,l=m.keys(n);if(c=l.length,m.keys(t).length!==c)return!1;for(;c--;)if(f=l[c],!m.has(t,f)||!N(n[f],t[f],r,e))return!1}return r.pop(),e.pop(),!0};m.isEqual=function(n,t){return N(n,t)},m.isEmpty=function(n){return null==n?!0:k(n)&&(m.isArray(n)||m.isString(n)||m.isArguments(n))?0===n.length:0===m.keys(n).length},m.isElement=function(n){return!(!n||1!==n.nodeType)},m.isArray=h||function(n){return"[object Array]"===s.call(n)},m.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},m.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(n){m["is"+n]=function(t){return s.call(t)==="[object "+n+"]"}}),m.isArguments(arguments)||(m.isArguments=function(n){return m.has(n,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(m.isFunction=function(n){return"function"==typeof n||!1}),m.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},m.isNaN=function(n){return m.isNumber(n)&&n!==+n},m.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===s.call(n)},m.isNull=function(n){return null===n},m.isUndefined=function(n){return n===void 0},m.has=function(n,t){return null!=n&&p.call(n,t)},m.noConflict=function(){return u._=i,this},m.identity=function(n){return n},m.constant=function(n){return function(){return n}},m.noop=function(){},m.property=w,m.propertyOf=function(n){return null==n?function(){}:function(t){return n[t]}},m.matcher=m.matches=function(n){return n=m.extendOwn({},n),function(t){return m.isMatch(t,n)}},m.times=function(n,t,r){var e=Array(Math.max(0,n));t=b(t,r,1);for(var u=0;n>u;u++)e[u]=t(u);return e},m.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},m.now=Date.now||function(){return(new Date).getTime()};var B={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},T=m.invert(B),R=function(n){var t=function(t){return n[t]},r="(?:"+m.keys(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};m.escape=R(B),m.unescape=R(T),m.result=function(n,t,r){var e=null==n?void 0:n[t];return e===void 0&&(e=r),m.isFunction(e)?e.call(n):e};var q=0;m.uniqueId=function(n){var t=++q+"";return n?n+t:t},m.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var K=/(.)^/,z={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\u2028|\u2029/g,L=function(n){return"\\"+z[n]};m.template=function(n,t,r){!t&&r&&(t=r),t=m.defaults({},t,m.templateSettings);var e=RegExp([(t.escape||K).source,(t.interpolate||K).source,(t.evaluate||K).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,o,a){return i+=n.slice(u,a).replace(D,L),u=a+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":o&&(i+="';\n"+o+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var o=new Function(t.variable||"obj","_",i)}catch(a){throw a.source=i,a}var c=function(n){return o.call(this,n,m)},f=t.variable||"obj";return c.source="function("+f+"){\n"+i+"}",c},m.chain=function(n){var t=m(n);return t._chain=!0,t};var P=function(n,t){return n._chain?m(t).chain():t};m.mixin=function(n){m.each(m.functions(n),function(t){var r=m[t]=n[t];m.prototype[t]=function(){var n=[this._wrapped];return f.apply(n,arguments),P(this,r.apply(m,n))}})},m.mixin(m),m.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=o[n];m.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0],P(this,r)}}),m.each(["concat","join","slice"],function(n){var t=o[n];m.prototype[n]=function(){return P(this,t.apply(this._wrapped,arguments))}}),m.prototype.value=function(){return this._wrapped},m.prototype.valueOf=m.prototype.toJSON=m.prototype.value,m.prototype.toString=function(){return""+this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return m})}).call(this);
;(function(t){var e=typeof self=="object"&&self.self===self&&self||typeof global=="object"&&global.global===global&&global;if(typeof define==="function"&&define.amd){define(["underscore","jquery","exports"],function(i,r,n){e.Backbone=t(e,n,i,r)})}else if(typeof exports!=="undefined"){var i=require("underscore"),r;try{r=require("jquery")}catch(n){}t(e,exports,i,r)}else{e.Backbone=t(e,{},e._,e.jQuery||e.Zepto||e.ender||e.$)}})(function(t,e,i,r){var n=t.Backbone;var s=Array.prototype.slice;e.VERSION="1.3.3";e.$=r;e.noConflict=function(){t.Backbone=n;return this};e.emulateHTTP=false;e.emulateJSON=false;var a=function(t,e,r){switch(t){case 1:return function(){return i[e](this[r])};case 2:return function(t){return i[e](this[r],t)};case 3:return function(t,n){return i[e](this[r],o(t,this),n)};case 4:return function(t,n,s){return i[e](this[r],o(t,this),n,s)};default:return function(){var t=s.call(arguments);t.unshift(this[r]);return i[e].apply(i,t)}}};var h=function(t,e,r){i.each(e,function(e,n){if(i[n])t.prototype[n]=a(e,n,r)})};var o=function(t,e){if(i.isFunction(t))return t;if(i.isObject(t)&&!e._isModel(t))return l(t);if(i.isString(t))return function(e){return e.get(t)};return t};var l=function(t){var e=i.matches(t);return function(t){return e(t.attributes)}};var u=e.Events={};var c=/\s+/;var f=function(t,e,r,n,s){var a=0,h;if(r&&typeof r==="object"){if(n!==void 0&&"context"in s&&s.context===void 0)s.context=n;for(h=i.keys(r);a<h.length;a++){e=f(t,e,h[a],r[h[a]],s)}}else if(r&&c.test(r)){for(h=r.split(c);a<h.length;a++){e=t(e,h[a],n,s)}}else{e=t(e,r,n,s)}return e};u.on=function(t,e,i){return d(this,t,e,i)};var d=function(t,e,i,r,n){t._events=f(v,t._events||{},e,i,{context:r,ctx:t,listening:n});if(n){var s=t._listeners||(t._listeners={});s[n.id]=n}return t};u.listenTo=function(t,e,r){if(!t)return this;var n=t._listenId||(t._listenId=i.uniqueId("l"));var s=this._listeningTo||(this._listeningTo={});var a=s[n];if(!a){var h=this._listenId||(this._listenId=i.uniqueId("l"));a=s[n]={obj:t,objId:n,id:h,listeningTo:s,count:0}}d(t,e,r,this,a);return this};var v=function(t,e,i,r){if(i){var n=t[e]||(t[e]=[]);var s=r.context,a=r.ctx,h=r.listening;if(h)h.count++;n.push({callback:i,context:s,ctx:s||a,listening:h})}return t};u.off=function(t,e,i){if(!this._events)return this;this._events=f(g,this._events,t,e,{context:i,listeners:this._listeners});return this};u.stopListening=function(t,e,r){var n=this._listeningTo;if(!n)return this;var s=t?[t._listenId]:i.keys(n);for(var a=0;a<s.length;a++){var h=n[s[a]];if(!h)break;h.obj.off(e,r,this)}return this};var g=function(t,e,r,n){if(!t)return;var s=0,a;var h=n.context,o=n.listeners;if(!e&&!r&&!h){var l=i.keys(o);for(;s<l.length;s++){a=o[l[s]];delete o[a.id];delete a.listeningTo[a.objId]}return}var u=e?[e]:i.keys(t);for(;s<u.length;s++){e=u[s];var c=t[e];if(!c)break;var f=[];for(var d=0;d<c.length;d++){var v=c[d];if(r&&r!==v.callback&&r!==v.callback._callback||h&&h!==v.context){f.push(v)}else{a=v.listening;if(a&&--a.count===0){delete o[a.id];delete a.listeningTo[a.objId]}}}if(f.length){t[e]=f}else{delete t[e]}}return t};u.once=function(t,e,r){var n=f(p,{},t,e,i.bind(this.off,this));if(typeof t==="string"&&r==null)e=void 0;return this.on(n,e,r)};u.listenToOnce=function(t,e,r){var n=f(p,{},e,r,i.bind(this.stopListening,this,t));return this.listenTo(t,n)};var p=function(t,e,r,n){if(r){var s=t[e]=i.once(function(){n(e,s);r.apply(this,arguments)});s._callback=r}return t};u.trigger=function(t){if(!this._events)return this;var e=Math.max(0,arguments.length-1);var i=Array(e);for(var r=0;r<e;r++)i[r]=arguments[r+1];f(m,this._events,t,void 0,i);return this};var m=function(t,e,i,r){if(t){var n=t[e];var s=t.all;if(n&&s)s=s.slice();if(n)_(n,r);if(s)_(s,[e].concat(r))}return t};var _=function(t,e){var i,r=-1,n=t.length,s=e[0],a=e[1],h=e[2];switch(e.length){case 0:while(++r<n)(i=t[r]).callback.call(i.ctx);return;case 1:while(++r<n)(i=t[r]).callback.call(i.ctx,s);return;case 2:while(++r<n)(i=t[r]).callback.call(i.ctx,s,a);return;case 3:while(++r<n)(i=t[r]).callback.call(i.ctx,s,a,h);return;default:while(++r<n)(i=t[r]).callback.apply(i.ctx,e);return}};u.bind=u.on;u.unbind=u.off;i.extend(e,u);var y=e.Model=function(t,e){var r=t||{};e||(e={});this.cid=i.uniqueId(this.cidPrefix);this.attributes={};if(e.collection)this.collection=e.collection;if(e.parse)r=this.parse(r,e)||{};var n=i.result(this,"defaults");r=i.defaults(i.extend({},n,r),n);this.set(r,e);this.changed={};this.initialize.apply(this,arguments)};i.extend(y.prototype,u,{changed:null,validationError:null,idAttribute:"id",cidPrefix:"c",initialize:function(){},toJSON:function(t){return i.clone(this.attributes)},sync:function(){return e.sync.apply(this,arguments)},get:function(t){return this.attributes[t]},escape:function(t){return i.escape(this.get(t))},has:function(t){return this.get(t)!=null},matches:function(t){return!!i.iteratee(t,this)(this.attributes)},set:function(t,e,r){if(t==null)return this;var n;if(typeof t==="object"){n=t;r=e}else{(n={})[t]=e}r||(r={});if(!this._validate(n,r))return false;var s=r.unset;var a=r.silent;var h=[];var o=this._changing;this._changing=true;if(!o){this._previousAttributes=i.clone(this.attributes);this.changed={}}var l=this.attributes;var u=this.changed;var c=this._previousAttributes;for(var f in n){e=n[f];if(!i.isEqual(l[f],e))h.push(f);if(!i.isEqual(c[f],e)){u[f]=e}else{delete u[f]}s?delete l[f]:l[f]=e}if(this.idAttribute in n)this.id=this.get(this.idAttribute);if(!a){if(h.length)this._pending=r;for(var d=0;d<h.length;d++){this.trigger("change:"+h[d],this,l[h[d]],r)}}if(o)return this;if(!a){while(this._pending){r=this._pending;this._pending=false;this.trigger("change",this,r)}}this._pending=false;this._changing=false;return this},unset:function(t,e){return this.set(t,void 0,i.extend({},e,{unset:true}))},clear:function(t){var e={};for(var r in this.attributes)e[r]=void 0;return this.set(e,i.extend({},t,{unset:true}))},hasChanged:function(t){if(t==null)return!i.isEmpty(this.changed);return i.has(this.changed,t)},changedAttributes:function(t){if(!t)return this.hasChanged()?i.clone(this.changed):false;var e=this._changing?this._previousAttributes:this.attributes;var r={};for(var n in t){var s=t[n];if(i.isEqual(e[n],s))continue;r[n]=s}return i.size(r)?r:false},previous:function(t){if(t==null||!this._previousAttributes)return null;return this._previousAttributes[t]},previousAttributes:function(){return i.clone(this._previousAttributes)},fetch:function(t){t=i.extend({parse:true},t);var e=this;var r=t.success;t.success=function(i){var n=t.parse?e.parse(i,t):i;if(!e.set(n,t))return false;if(r)r.call(t.context,e,i,t);e.trigger("sync",e,i,t)};B(this,t);return this.sync("read",this,t)},save:function(t,e,r){var n;if(t==null||typeof t==="object"){n=t;r=e}else{(n={})[t]=e}r=i.extend({validate:true,parse:true},r);var s=r.wait;if(n&&!s){if(!this.set(n,r))return false}else if(!this._validate(n,r)){return false}var a=this;var h=r.success;var o=this.attributes;r.success=function(t){a.attributes=o;var e=r.parse?a.parse(t,r):t;if(s)e=i.extend({},n,e);if(e&&!a.set(e,r))return false;if(h)h.call(r.context,a,t,r);a.trigger("sync",a,t,r)};B(this,r);if(n&&s)this.attributes=i.extend({},o,n);var l=this.isNew()?"create":r.patch?"patch":"update";if(l==="patch"&&!r.attrs)r.attrs=n;var u=this.sync(l,this,r);this.attributes=o;return u},destroy:function(t){t=t?i.clone(t):{};var e=this;var r=t.success;var n=t.wait;var s=function(){e.stopListening();e.trigger("destroy",e,e.collection,t)};t.success=function(i){if(n)s();if(r)r.call(t.context,e,i,t);if(!e.isNew())e.trigger("sync",e,i,t)};var a=false;if(this.isNew()){i.defer(t.success)}else{B(this,t);a=this.sync("delete",this,t)}if(!n)s();return a},url:function(){var t=i.result(this,"urlRoot")||i.result(this.collection,"url")||F();if(this.isNew())return t;var e=this.get(this.idAttribute);return t.replace(/[^\/]$/,"$&/")+encodeURIComponent(e)},parse:function(t,e){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return!this.has(this.idAttribute)},isValid:function(t){return this._validate({},i.extend({},t,{validate:true}))},_validate:function(t,e){if(!e.validate||!this.validate)return true;t=i.extend({},this.attributes,t);var r=this.validationError=this.validate(t,e)||null;if(!r)return true;this.trigger("invalid",this,r,i.extend(e,{validationError:r}));return false}});var b={keys:1,values:1,pairs:1,invert:1,pick:0,omit:0,chain:1,isEmpty:1};h(y,b,"attributes");var x=e.Collection=function(t,e){e||(e={});if(e.model)this.model=e.model;if(e.comparator!==void 0)this.comparator=e.comparator;this._reset();this.initialize.apply(this,arguments);if(t)this.reset(t,i.extend({silent:true},e))};var w={add:true,remove:true,merge:true};var E={add:true,remove:false};var I=function(t,e,i){i=Math.min(Math.max(i,0),t.length);var r=Array(t.length-i);var n=e.length;var s;for(s=0;s<r.length;s++)r[s]=t[s+i];for(s=0;s<n;s++)t[s+i]=e[s];for(s=0;s<r.length;s++)t[s+n+i]=r[s]};i.extend(x.prototype,u,{model:y,initialize:function(){},toJSON:function(t){return this.map(function(e){return e.toJSON(t)})},sync:function(){return e.sync.apply(this,arguments)},add:function(t,e){return this.set(t,i.extend({merge:false},e,E))},remove:function(t,e){e=i.extend({},e);var r=!i.isArray(t);t=r?[t]:t.slice();var n=this._removeModels(t,e);if(!e.silent&&n.length){e.changes={added:[],merged:[],removed:n};this.trigger("update",this,e)}return r?n[0]:n},set:function(t,e){if(t==null)return;e=i.extend({},w,e);if(e.parse&&!this._isModel(t)){t=this.parse(t,e)||[]}var r=!i.isArray(t);t=r?[t]:t.slice();var n=e.at;if(n!=null)n=+n;if(n>this.length)n=this.length;if(n<0)n+=this.length+1;var s=[];var a=[];var h=[];var o=[];var l={};var u=e.add;var c=e.merge;var f=e.remove;var d=false;var v=this.comparator&&n==null&&e.sort!==false;var g=i.isString(this.comparator)?this.comparator:null;var p,m;for(m=0;m<t.length;m++){p=t[m];var _=this.get(p);if(_){if(c&&p!==_){var y=this._isModel(p)?p.attributes:p;if(e.parse)y=_.parse(y,e);_.set(y,e);h.push(_);if(v&&!d)d=_.hasChanged(g)}if(!l[_.cid]){l[_.cid]=true;s.push(_)}t[m]=_}else if(u){p=t[m]=this._prepareModel(p,e);if(p){a.push(p);this._addReference(p,e);l[p.cid]=true;s.push(p)}}}if(f){for(m=0;m<this.length;m++){p=this.models[m];if(!l[p.cid])o.push(p)}if(o.length)this._removeModels(o,e)}var b=false;var x=!v&&u&&f;if(s.length&&x){b=this.length!==s.length||i.some(this.models,function(t,e){return t!==s[e]});this.models.length=0;I(this.models,s,0);this.length=this.models.length}else if(a.length){if(v)d=true;I(this.models,a,n==null?this.length:n);this.length=this.models.length}if(d)this.sort({silent:true});if(!e.silent){for(m=0;m<a.length;m++){if(n!=null)e.index=n+m;p=a[m];p.trigger("add",p,this,e)}if(d||b)this.trigger("sort",this,e);if(a.length||o.length||h.length){e.changes={added:a,removed:o,merged:h};this.trigger("update",this,e)}}return r?t[0]:t},reset:function(t,e){e=e?i.clone(e):{};for(var r=0;r<this.models.length;r++){this._removeReference(this.models[r],e)}e.previousModels=this.models;this._reset();t=this.add(t,i.extend({silent:true},e));if(!e.silent)this.trigger("reset",this,e);return t},push:function(t,e){return this.add(t,i.extend({at:this.length},e))},pop:function(t){var e=this.at(this.length-1);return this.remove(e,t)},unshift:function(t,e){return this.add(t,i.extend({at:0},e))},shift:function(t){var e=this.at(0);return this.remove(e,t)},slice:function(){return s.apply(this.models,arguments)},get:function(t){if(t==null)return void 0;return this._byId[t]||this._byId[this.modelId(t.attributes||t)]||t.cid&&this._byId[t.cid]},has:function(t){return this.get(t)!=null},at:function(t){if(t<0)t+=this.length;return this.models[t]},where:function(t,e){return this[e?"find":"filter"](t)},findWhere:function(t){return this.where(t,true)},sort:function(t){var e=this.comparator;if(!e)throw new Error("Cannot sort a set without a comparator");t||(t={});var r=e.length;if(i.isFunction(e))e=i.bind(e,this);if(r===1||i.isString(e)){this.models=this.sortBy(e)}else{this.models.sort(e)}if(!t.silent)this.trigger("sort",this,t);return this},pluck:function(t){return this.map(t+"")},fetch:function(t){t=i.extend({parse:true},t);var e=t.success;var r=this;t.success=function(i){var n=t.reset?"reset":"set";r[n](i,t);if(e)e.call(t.context,r,i,t);r.trigger("sync",r,i,t)};B(this,t);return this.sync("read",this,t)},create:function(t,e){e=e?i.clone(e):{};var r=e.wait;t=this._prepareModel(t,e);if(!t)return false;if(!r)this.add(t,e);var n=this;var s=e.success;e.success=function(t,e,i){if(r)n.add(t,i);if(s)s.call(i.context,t,e,i)};t.save(null,e);return t},parse:function(t,e){return t},clone:function(){return new this.constructor(this.models,{model:this.model,comparator:this.comparator})},modelId:function(t){return t[this.model.prototype.idAttribute||"id"]},_reset:function(){this.length=0;this.models=[];this._byId={}},_prepareModel:function(t,e){if(this._isModel(t)){if(!t.collection)t.collection=this;return t}e=e?i.clone(e):{};e.collection=this;var r=new this.model(t,e);if(!r.validationError)return r;this.trigger("invalid",this,r.validationError,e);return false},_removeModels:function(t,e){var i=[];for(var r=0;r<t.length;r++){var n=this.get(t[r]);if(!n)continue;var s=this.indexOf(n);this.models.splice(s,1);this.length--;delete this._byId[n.cid];var a=this.modelId(n.attributes);if(a!=null)delete this._byId[a];if(!e.silent){e.index=s;n.trigger("remove",n,this,e)}i.push(n);this._removeReference(n,e)}return i},_isModel:function(t){return t instanceof y},_addReference:function(t,e){this._byId[t.cid]=t;var i=this.modelId(t.attributes);if(i!=null)this._byId[i]=t;t.on("all",this._onModelEvent,this)},_removeReference:function(t,e){delete this._byId[t.cid];var i=this.modelId(t.attributes);if(i!=null)delete this._byId[i];if(this===t.collection)delete t.collection;t.off("all",this._onModelEvent,this)},_onModelEvent:function(t,e,i,r){if(e){if((t==="add"||t==="remove")&&i!==this)return;if(t==="destroy")this.remove(e,r);if(t==="change"){var n=this.modelId(e.previousAttributes());var s=this.modelId(e.attributes);if(n!==s){if(n!=null)delete this._byId[n];if(s!=null)this._byId[s]=e}}}this.trigger.apply(this,arguments)}});var S={forEach:3,each:3,map:3,collect:3,reduce:0,foldl:0,inject:0,reduceRight:0,foldr:0,find:3,detect:3,filter:3,select:3,reject:3,every:3,all:3,some:3,any:3,include:3,includes:3,contains:3,invoke:0,max:3,min:3,toArray:1,size:1,first:3,head:3,take:3,initial:3,rest:3,tail:3,drop:3,last:3,without:0,difference:0,indexOf:3,shuffle:1,lastIndexOf:3,isEmpty:1,chain:1,sample:3,partition:3,groupBy:3,countBy:3,sortBy:3,indexBy:3,findIndex:3,findLastIndex:3};h(x,S,"models");var k=e.View=function(t){this.cid=i.uniqueId("view");i.extend(this,i.pick(t,P));this._ensureElement();this.initialize.apply(this,arguments)};var T=/^(\S+)\s*(.*)$/;var P=["model","collection","el","id","attributes","className","tagName","events"];i.extend(k.prototype,u,{tagName:"div",$:function(t){return this.$el.find(t)},initialize:function(){},render:function(){return this},remove:function(){this._removeElement();this.stopListening();return this},_removeElement:function(){this.$el.remove()},setElement:function(t){this.undelegateEvents();this._setElement(t);this.delegateEvents();return this},_setElement:function(t){this.$el=t instanceof e.$?t:e.$(t);this.el=this.$el[0]},delegateEvents:function(t){t||(t=i.result(this,"events"));if(!t)return this;this.undelegateEvents();for(var e in t){var r=t[e];if(!i.isFunction(r))r=this[r];if(!r)continue;var n=e.match(T);this.delegate(n[1],n[2],i.bind(r,this))}return this},delegate:function(t,e,i){this.$el.on(t+".delegateEvents"+this.cid,e,i);return this},undelegateEvents:function(){if(this.$el)this.$el.off(".delegateEvents"+this.cid);return this},undelegate:function(t,e,i){this.$el.off(t+".delegateEvents"+this.cid,e,i);return this},_createElement:function(t){return document.createElement(t)},_ensureElement:function(){if(!this.el){var t=i.extend({},i.result(this,"attributes"));if(this.id)t.id=i.result(this,"id");if(this.className)t["class"]=i.result(this,"className");this.setElement(this._createElement(i.result(this,"tagName")));this._setAttributes(t)}else{this.setElement(i.result(this,"el"))}},_setAttributes:function(t){this.$el.attr(t)}});e.sync=function(t,r,n){var s=H[t];i.defaults(n||(n={}),{emulateHTTP:e.emulateHTTP,emulateJSON:e.emulateJSON});var a={type:s,dataType:"json"};if(!n.url){a.url=i.result(r,"url")||F()}if(n.data==null&&r&&(t==="create"||t==="update"||t==="patch")){a.contentType="application/json";a.data=JSON.stringify(n.attrs||r.toJSON(n))}if(n.emulateJSON){a.contentType="application/x-www-form-urlencoded";a.data=a.data?{model:a.data}:{}}if(n.emulateHTTP&&(s==="PUT"||s==="DELETE"||s==="PATCH")){a.type="POST";if(n.emulateJSON)a.data._method=s;var h=n.beforeSend;n.beforeSend=function(t){t.setRequestHeader("X-HTTP-Method-Override",s);if(h)return h.apply(this,arguments)}}if(a.type!=="GET"&&!n.emulateJSON){a.processData=false}var o=n.error;n.error=function(t,e,i){n.textStatus=e;n.errorThrown=i;if(o)o.call(n.context,t,e,i)};var l=n.xhr=e.ajax(i.extend(a,n));r.trigger("request",r,l,n);return l};var H={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};e.ajax=function(){return e.$.ajax.apply(e.$,arguments)};var $=e.Router=function(t){t||(t={});if(t.routes)this.routes=t.routes;this._bindRoutes();this.initialize.apply(this,arguments)};var A=/\((.*?)\)/g;var C=/(\(\?)?:\w+/g;var R=/\*\w+/g;var j=/[\-{}\[\]+?.,\\\^$|#\s]/g;i.extend($.prototype,u,{initialize:function(){},route:function(t,r,n){if(!i.isRegExp(t))t=this._routeToRegExp(t);if(i.isFunction(r)){n=r;r=""}if(!n)n=this[r];var s=this;e.history.route(t,function(i){var a=s._extractParameters(t,i);if(s.execute(n,a,r)!==false){s.trigger.apply(s,["route:"+r].concat(a));s.trigger("route",r,a);e.history.trigger("route",s,r,a)}});return this},execute:function(t,e,i){if(t)t.apply(this,e)},navigate:function(t,i){e.history.navigate(t,i);return this},_bindRoutes:function(){if(!this.routes)return;this.routes=i.result(this,"routes");var t,e=i.keys(this.routes);while((t=e.pop())!=null){this.route(t,this.routes[t])}},_routeToRegExp:function(t){t=t.replace(j,"\\$&").replace(A,"(?:$1)?").replace(C,function(t,e){return e?t:"([^/?]+)"}).replace(R,"([^?]*?)");return new RegExp("^"+t+"(?:\\?([\\s\\S]*))?$")},_extractParameters:function(t,e){var r=t.exec(e).slice(1);return i.map(r,function(t,e){if(e===r.length-1)return t||null;return t?decodeURIComponent(t):null})}});var N=e.History=function(){this.handlers=[];this.checkUrl=i.bind(this.checkUrl,this);if(typeof window!=="undefined"){this.location=window.location;this.history=window.history}};var M=/^[#\/]|\s+$/g;var O=/^\/+|\/+$/g;var U=/#.*$/;N.started=false;i.extend(N.prototype,u,{interval:50,atRoot:function(){var t=this.location.pathname.replace(/[^\/]$/,"$&/");return t===this.root&&!this.getSearch()},matchRoot:function(){var t=this.decodeFragment(this.location.pathname);var e=t.slice(0,this.root.length-1)+"/";return e===this.root},decodeFragment:function(t){return decodeURI(t.replace(/%25/g,"%2525"))},getSearch:function(){var t=this.location.href.replace(/#.*/,"").match(/\?.+/);return t?t[0]:""},getHash:function(t){var e=(t||this).location.href.match(/#(.*)$/);return e?e[1]:""},getPath:function(){var t=this.decodeFragment(this.location.pathname+this.getSearch()).slice(this.root.length-1);return t.charAt(0)==="/"?t.slice(1):t},getFragment:function(t){if(t==null){if(this._usePushState||!this._wantsHashChange){t=this.getPath()}else{t=this.getHash()}}return t.replace(M,"")},start:function(t){if(N.started)throw new Error("Backbone.history has already been started");N.started=true;this.options=i.extend({root:"/"},this.options,t);this.root=this.options.root;this._wantsHashChange=this.options.hashChange!==false;this._hasHashChange="onhashchange"in window&&(document.documentMode===void 0||document.documentMode>7);this._useHashChange=this._wantsHashChange&&this._hasHashChange;this._wantsPushState=!!this.options.pushState;this._hasPushState=!!(this.history&&this.history.pushState);this._usePushState=this._wantsPushState&&this._hasPushState;this.fragment=this.getFragment();this.root=("/"+this.root+"/").replace(O,"/");if(this._wantsHashChange&&this._wantsPushState){if(!this._hasPushState&&!this.atRoot()){var e=this.root.slice(0,-1)||"/";this.location.replace(e+"#"+this.getPath());return true}else if(this._hasPushState&&this.atRoot()){this.navigate(this.getHash(),{replace:true})}}if(!this._hasHashChange&&this._wantsHashChange&&!this._usePushState){this.iframe=document.createElement("iframe");this.iframe.src="javascript:0";this.iframe.style.display="none";this.iframe.tabIndex=-1;var r=document.body;var n=r.insertBefore(this.iframe,r.firstChild).contentWindow;n.document.open();n.document.close();n.location.hash="#"+this.fragment}var s=window.addEventListener||function(t,e){return attachEvent("on"+t,e)};if(this._usePushState){s("popstate",this.checkUrl,false)}else if(this._useHashChange&&!this.iframe){s("hashchange",this.checkUrl,false)}else if(this._wantsHashChange){this._checkUrlInterval=setInterval(this.checkUrl,this.interval)}if(!this.options.silent)return this.loadUrl()},stop:function(){var t=window.removeEventListener||function(t,e){return detachEvent("on"+t,e)};if(this._usePushState){t("popstate",this.checkUrl,false)}else if(this._useHashChange&&!this.iframe){t("hashchange",this.checkUrl,false)}if(this.iframe){document.body.removeChild(this.iframe);this.iframe=null}if(this._checkUrlInterval)clearInterval(this._checkUrlInterval);N.started=false},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(t){var e=this.getFragment();if(e===this.fragment&&this.iframe){e=this.getHash(this.iframe.contentWindow)}if(e===this.fragment)return false;if(this.iframe)this.navigate(e);this.loadUrl()},loadUrl:function(t){if(!this.matchRoot())return false;t=this.fragment=this.getFragment(t);return i.some(this.handlers,function(e){if(e.route.test(t)){e.callback(t);return true}})},navigate:function(t,e){if(!N.started)return false;if(!e||e===true)e={trigger:!!e};t=this.getFragment(t||"");var i=this.root;if(t===""||t.charAt(0)==="?"){i=i.slice(0,-1)||"/"}var r=i+t;t=this.decodeFragment(t.replace(U,""));if(this.fragment===t)return;this.fragment=t;if(this._usePushState){this.history[e.replace?"replaceState":"pushState"]({},document.title,r)}else if(this._wantsHashChange){this._updateHash(this.location,t,e.replace);if(this.iframe&&t!==this.getHash(this.iframe.contentWindow)){var n=this.iframe.contentWindow;if(!e.replace){n.document.open();n.document.close()}this._updateHash(n.location,t,e.replace)}}else{return this.location.assign(r)}if(e.trigger)return this.loadUrl(t)},_updateHash:function(t,e,i){if(i){var r=t.href.replace(/(javascript:|#).*$/,"");t.replace(r+"#"+e)}else{t.hash="#"+e}}});e.history=new N;var q=function(t,e){var r=this;var n;if(t&&i.has(t,"constructor")){n=t.constructor}else{n=function(){return r.apply(this,arguments)}}i.extend(n,r,e);n.prototype=i.create(r.prototype,t);n.prototype.constructor=n;n.__super__=r.prototype;return n};y.extend=x.extend=$.extend=k.extend=N.extend=q;var F=function(){throw new Error('A "url" property or function must be specified')};var B=function(t,e){var i=e.error;e.error=function(r){if(i)i.call(e.context,t,r,e);t.trigger("error",t,r,e)}};return e});
;!function(a){function b(a){return a=b.buildAjaxOptions(a),b.transport(a)}var c=window.wpApiSettings;b.buildAjaxOptions=function(b){var d,e,f,g,h,i,j=b.url,k=b.path;if("string"==typeof b.namespace&&"string"==typeof b.endpoint&&(d=b.namespace.replace(/^\/|\/$/g,""),e=b.endpoint.replace(/^\//,""),k=e?d+"/"+e:d),"string"==typeof k&&(f=c.root,k=k.replace(/^\//,""),"string"==typeof f&&-1!==f.indexOf("?")&&(k=k.replace("?","&")),j=f+k),h=!(b.data&&b.data._wpnonce),g=b.headers||{},h)for(i in g)if(g.hasOwnProperty(i)&&"x-wp-nonce"===i.toLowerCase()){h=!1;break}return h&&(g=a.extend({"X-WP-Nonce":c.nonce},g)),b=a.extend({},b,{headers:g,url:j}),delete b.path,delete b.namespace,delete b.endpoint,b},b.transport=a.ajax,window.wp=window.wp||{},window.wp.apiRequest=b}(jQuery);
;!function(a,b){"use strict";function c(){this.models={},this.collections={},this.views={}}a.wp=a.wp||{},wp.api=wp.api||new c,wp.api.versionString=wp.api.versionString||"wp/v2/",!_.isFunction(_.includes)&&_.isFunction(_.contains)&&(_.includes=_.contains)}(window),function(a,b){"use strict";var c,d;a.wp=a.wp||{},wp.api=wp.api||{},wp.api.utils=wp.api.utils||{},wp.api.getModelByRoute=function(a){return _.find(wp.api.models,function(b){return b.prototype.route&&a===b.prototype.route.index})},wp.api.getCollectionByRoute=function(a){return _.find(wp.api.collections,function(b){return b.prototype.route&&a===b.prototype.route.index})},Date.prototype.toISOString||(c=function(a){return d=String(a),1===d.length&&(d="0"+d),d},Date.prototype.toISOString=function(){return this.getUTCFullYear()+"-"+c(this.getUTCMonth()+1)+"-"+c(this.getUTCDate())+"T"+c(this.getUTCHours())+":"+c(this.getUTCMinutes())+":"+c(this.getUTCSeconds())+"."+String((this.getUTCMilliseconds()/1e3).toFixed(3)).slice(2,5)+"Z"}),wp.api.utils.parseISO8601=function(a){var c,d,e,f,g=0,h=[1,4,5,6,7,10,11];if(d=/^(\d{4}|[+\-]\d{6})(?:-(\d{2})(?:-(\d{2}))?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/.exec(a)){for(e=0;f=h[e];++e)d[f]=+d[f]||0;d[2]=(+d[2]||1)-1,d[3]=+d[3]||1,"Z"!==d[8]&&b!==d[9]&&(g=60*d[10]+d[11],"+"===d[9]&&(g=0-g)),c=Date.UTC(d[1],d[2],d[3],d[4],d[5]+g,d[6],d[7])}else c=Date.parse?Date.parse(a):NaN;return c},wp.api.utils.getRootUrl=function(){return a.location.origin?a.location.origin+"/":a.location.protocol+"//"+a.location.host+"/"},wp.api.utils.capitalize=function(a){return _.isUndefined(a)?a:a.charAt(0).toUpperCase()+a.slice(1)},wp.api.utils.capitalizeAndCamelCaseDashes=function(a){return _.isUndefined(a)?a:(a=wp.api.utils.capitalize(a),wp.api.utils.camelCaseDashes(a))},wp.api.utils.camelCaseDashes=function(a){return a.replace(/-([a-z])/g,function(a){return a[1].toUpperCase()})},wp.api.utils.extractRoutePart=function(a,b,c,d){var e;return b=b||1,c=c||wp.api.versionString,0===a.indexOf("/"+c)&&(a=a.substr(c.length+1)),e=a.split("/"),d&&(e=e.reverse()),_.isUndefined(e[--b])?"":e[b]},wp.api.utils.extractParentName=function(a){var b,c=a.lastIndexOf("_id>[\\d]+)/");return c<0?"":(b=a.substr(0,c-1),b=b.split("/"),b.pop(),b=b.pop())},wp.api.utils.decorateFromRoute=function(a,b){_.each(a,function(a){_.includes(a.methods,"POST")||_.includes(a.methods,"PUT")?_.isEmpty(a.args)||(_.isEmpty(b.prototype.args)?b.prototype.args=a.args:b.prototype.args=_.extend(b.prototype.args,a.args)):_.includes(a.methods,"GET")&&(_.isEmpty(a.args)||(_.isEmpty(b.prototype.options)?b.prototype.options=a.args:b.prototype.options=_.extend(b.prototype.options,a.args)))})},wp.api.utils.addMixinsAndHelpers=function(a,b,c){var d=!1,e=["date","modified","date_gmt","modified_gmt"],f={setDate:function(a,b){var c=b||"date";return!(_.indexOf(e,c)<0)&&void this.set(c,a.toISOString())},getDate:function(a){var b=a||"date",c=this.get(b);return!(_.indexOf(e,b)<0||_.isNull(c))&&new Date(wp.api.utils.parseISO8601(c))}},g=function(a,b,c,d,e){var f,g,h,i;return i=jQuery.Deferred(),g=a.get("_embedded")||{},_.isNumber(b)&&0!==b?(g[d]&&(h=_.findWhere(g[d],{id:b})),h||(h={id:b}),f=new wp.api.models[c](h),f.get(e)?i.resolve(f):f.fetch({success:function(a){i.resolve(a)},error:function(a,b){i.reject(b)}}),i.promise()):(i.reject(),i)},h=function(a,b,c,d){var e,f,g,h="",j="",k=jQuery.Deferred();return e=a.get("id"),f=a.get("_embedded")||{},_.isNumber(e)&&0!==e?(_.isUndefined(c)||_.isUndefined(f[c])?h={parent:e}:j=_.isUndefined(d)?f[c]:f[c][d],g=new wp.api.collections[b](j,h),_.isUndefined(g.models[0])?g.fetch({success:function(a){i(a,e),k.resolve(a)},error:function(a,b){k.reject(b)}}):(i(g,e),k.resolve(g)),k.promise()):(k.reject(),k)},i=function(a,b){_.each(a.models,function(a){a.set("parent_post",b)})},j={getMeta:function(a){var b=this.get("meta");return b[a]},getMetas:function(){return this.get("meta")},setMetas:function(a){var b=this.get("meta");_.extend(b,a),this.set("meta",b)},setMeta:function(a,b){var c=this.get("meta");c[a]=b,this.set("meta",c)}},k={getRevisions:function(){return h(this,"PostRevisions")}},l={getTags:function(){var a=this.get("tags"),b=new wp.api.collections.Tags;return _.isEmpty(a)?jQuery.Deferred().resolve([]):b.fetch({data:{include:a}})},setTags:function(a){var b,c,d=this,e=[];return!_.isString(a)&&void(_.isArray(a)?(b=new wp.api.collections.Tags,b.fetch({data:{per_page:100},success:function(b){_.each(a,function(a){c=new wp.api.models.Tag(b.findWhere({slug:a})),c.set("parent_post",d.get("id")),e.push(c)}),a=new wp.api.collections.Tags(e),d.setTagsWithCollection(a)}})):this.setTagsWithCollection(a))},setTagsWithCollection:function(a){return this.set("tags",a.pluck("id")),this.save()}},m={getCategories:function(){var a=this.get("categories"),b=new wp.api.collections.Categories;return _.isEmpty(a)?jQuery.Deferred().resolve([]):b.fetch({data:{include:a}})},setCategories:function(a){var b,c,d=this,e=[];return!_.isString(a)&&void(_.isArray(a)?(b=new wp.api.collections.Categories,b.fetch({data:{per_page:100},success:function(b){_.each(a,function(a){c=new wp.api.models.Category(b.findWhere({slug:a})),c.set("parent_post",d.get("id")),e.push(c)}),a=new wp.api.collections.Categories(e),d.setCategoriesWithCollection(a)}})):this.setCategoriesWithCollection(a))},setCategoriesWithCollection:function(a){return this.set("categories",a.pluck("id")),this.save()}},n={getAuthorUser:function(){return g(this,this.get("author"),"User","author","name")}},o={getFeaturedMedia:function(){return g(this,this.get("featured_media"),"Media","wp:featuredmedia","source_url")}};return _.isUndefined(a.prototype.args)?a:(_.each(e,function(b){_.isUndefined(a.prototype.args[b])||(d=!0)}),d&&(a=a.extend(f)),_.isUndefined(a.prototype.args.author)||(a=a.extend(n)),_.isUndefined(a.prototype.args.featured_media)||(a=a.extend(o)),_.isUndefined(a.prototype.args.categories)||(a=a.extend(m)),_.isUndefined(a.prototype.args.meta)||(a=a.extend(j)),_.isUndefined(a.prototype.args.tags)||(a=a.extend(l)),_.isUndefined(c.collections[b+"Revisions"])||(a=a.extend(k)),a)}}(window),function(){"use strict";var a=window.wpApiSettings||{},b=["Comment","Media","Comment","Post","Page","Status","Taxonomy","Type"];wp.api.WPApiBaseModel=Backbone.Model.extend({initialize:function(){-1===_.indexOf(b,this.name)&&(this.requireForceForDelete=!0)},sync:function(a,b,c){var d;return c=c||{},_.isNull(b.get("date_gmt"))&&b.unset("date_gmt"),_.isEmpty(b.get("slug"))&&b.unset("slug"),_.isFunction(b.nonce)&&!_.isEmpty(b.nonce())&&(d=c.beforeSend,c.beforeSend=function(a){if(a.setRequestHeader("X-WP-Nonce",b.nonce()),d)return d.apply(this,arguments)},c.complete=function(a){var c=a.getResponseHeader("X-WP-Nonce");c&&_.isFunction(b.nonce)&&b.nonce()!==c&&b.endpointModel.set("nonce",c)}),this.requireForceForDelete&&"delete"===a&&(b.url=b.url()+"?force=true"),Backbone.sync(a,b,c)},save:function(a,b){return!(!_.includes(this.methods,"PUT")&&!_.includes(this.methods,"POST"))&&Backbone.Model.prototype.save.call(this,a,b)},destroy:function(a){return!!_.includes(this.methods,"DELETE")&&Backbone.Model.prototype.destroy.call(this,a)}}),wp.api.models.Schema=wp.api.WPApiBaseModel.extend({defaults:{_links:{},namespace:null,routes:{}},initialize:function(b,c){var d=this;c=c||{},wp.api.WPApiBaseModel.prototype.initialize.call(d,b,c),d.apiRoot=c.apiRoot||a.root,d.versionString=c.versionString||a.versionString},url:function(){return this.apiRoot+this.versionString}})}(),function(){"use strict";window.wpApiSettings||{};wp.api.WPApiBaseCollection=Backbone.Collection.extend({initialize:function(a,b){this.state={data:{},currentPage:null,totalPages:null,totalObjects:null},_.isUndefined(b)?this.parent="":this.parent=b.parent},sync:function(a,b,c){var d,e,f=this;return c=c||{},_.isFunction(b.nonce)&&!_.isEmpty(b.nonce())&&(d=c.beforeSend,c.beforeSend=function(a){if(a.setRequestHeader("X-WP-Nonce",b.nonce()),d)return d.apply(f,arguments)},c.complete=function(a){var c=a.getResponseHeader("X-WP-Nonce");c&&_.isFunction(b.nonce)&&b.nonce()!==c&&b.endpointModel.set("nonce",c)}),"read"===a&&(c.data?(f.state.data=_.clone(c.data),delete f.state.data.page):f.state.data=c.data={},"undefined"==typeof c.data.page?(f.state.currentPage=null,f.state.totalPages=null,f.state.totalObjects=null):f.state.currentPage=c.data.page-1,e=c.success,c.success=function(a,b,c){if(_.isUndefined(c)||(f.state.totalPages=parseInt(c.getResponseHeader("x-wp-totalpages"),10),f.state.totalObjects=parseInt(c.getResponseHeader("x-wp-total"),10)),null===f.state.currentPage?f.state.currentPage=1:f.state.currentPage++,e)return e.apply(this,arguments)}),Backbone.sync(a,b,c)},more:function(a){if(a=a||{},a.data=a.data||{},_.extend(a.data,this.state.data),"undefined"==typeof a.data.page){if(!this.hasMore())return!1;null===this.state.currentPage||this.state.currentPage<=1?a.data.page=2:a.data.page=this.state.currentPage+1}return this.fetch(a)},hasMore:function(){return null===this.state.totalPages||null===this.state.totalObjects||null===this.state.currentPage?null:this.state.currentPage<this.state.totalPages}})}(),function(){"use strict";var a,b={},c=window.wpApiSettings||{};window.wp=window.wp||{},wp.api=wp.api||{},_.isEmpty(c)&&(c.root=window.location.origin+"/wp-json/"),a=Backbone.Model.extend({defaults:{apiRoot:c.root,versionString:wp.api.versionString,nonce:null,schema:null,models:{},collections:{}},initialize:function(){var a,b=this;Backbone.Model.prototype.initialize.apply(b,arguments),a=jQuery.Deferred(),b.schemaConstructed=a.promise(),b.schemaModel=new wp.api.models.Schema(null,{apiRoot:b.get("apiRoot"),versionString:b.get("versionString"),nonce:b.get("nonce")}),b.schemaModel.once("change",function(){b.constructFromSchema(),a.resolve(b)}),b.get("schema")?b.schemaModel.set(b.schemaModel.parse(b.get("schema"))):!_.isUndefined(sessionStorage)&&(_.isUndefined(c.cacheSchema)||c.cacheSchema)&&sessionStorage.getItem("wp-api-schema-model"+b.get("apiRoot")+b.get("versionString"))?b.schemaModel.set(b.schemaModel.parse(JSON.parse(sessionStorage.getItem("wp-api-schema-model"+b.get("apiRoot")+b.get("versionString"))))):b.schemaModel.fetch({success:function(a){if(!_.isUndefined(sessionStorage)&&(_.isUndefined(c.cacheSchema)||c.cacheSchema))try{sessionStorage.setItem("wp-api-schema-model"+b.get("apiRoot")+b.get("versionString"),JSON.stringify(a))}catch(d){}},error:function(a){window.console.log(a)}})},constructFromSchema:function(){var a,b,d,e,f=this,g=c.mapping||{models:{Categories:"Category",Comments:"Comment",Pages:"Page",PagesMeta:"PageMeta",PagesRevisions:"PageRevision",Posts:"Post",PostsCategories:"PostCategory",PostsRevisions:"PostRevision",PostsTags:"PostTag",Schema:"Schema",Statuses:"Status",Tags:"Tag",Taxonomies:"Taxonomy",Types:"Type",Users:"User"},collections:{PagesMeta:"PageMeta",PagesRevisions:"PageRevisions",PostsCategories:"PostCategories",PostsMeta:"PostMeta",PostsRevisions:"PostRevisions",PostsTags:"PostTags"}},h=f.get("modelEndpoints"),i=new RegExp("(?:.*[+)]|/("+h.join("|")+"))$");a=[],b=[],d=f.get("apiRoot").replace(wp.api.utils.getRootUrl(),""),e={},e.models={},e.collections={},_.each(f.schemaModel.get("routes"),function(c,e){e!==f.get(" versionString")&&e!==d&&e!=="/"+f.get("versionString").slice(0,-1)&&(i.test(e)?a.push({index:e,route:c}):b.push({index:e,route:c}))}),_.each(a,function(a){var b,c=wp.api.utils.extractRoutePart(a.index,2,f.get("versionString"),!0),d=wp.api.utils.extractRoutePart(a.index,1,f.get("versionString"),!1),h=wp.api.utils.extractRoutePart(a.index,1,f.get("versionString"),!0);d===f.get("versionString")&&(d=""),"me"===h&&(c="me"),""!==d&&d!==c?(b=wp.api.utils.capitalizeAndCamelCaseDashes(d)+wp.api.utils.capitalizeAndCamelCaseDashes(c),b=g.models[b]||b,e.models[b]=wp.api.WPApiBaseModel.extend({url:function(){var a=f.get("apiRoot")+f.get("versionString")+d+"/"+(_.isUndefined(this.get("parent"))||0===this.get("parent")?_.isUndefined(this.get("parent_post"))?"":this.get("parent_post")+"/":this.get("parent")+"/")+c;return _.isUndefined(this.get("id"))||(a+="/"+this.get("id")),a},nonce:function(){return f.get("nonce")},endpointModel:f,route:a,name:b,methods:a.route.methods,endpoints:a.route.endpoints})):(b=wp.api.utils.capitalizeAndCamelCaseDashes(c),b=g.models[b]||b,e.models[b]=wp.api.WPApiBaseModel.extend({url:function(){var a=f.get("apiRoot")+f.get("versionString")+("me"===c?"users/me":c);return _.isUndefined(this.get("id"))||(a+="/"+this.get("id")),a},nonce:function(){return f.get("nonce")},endpointModel:f,route:a,name:b,methods:a.route.methods,endpoints:a.route.endpoints})),wp.api.utils.decorateFromRoute(a.route.endpoints,e.models[b],f.get("versionString"))}),_.each(b,function(a){var b,c,d=a.index.slice(a.index.lastIndexOf("/")+1),h=wp.api.utils.extractRoutePart(a.index,1,f.get("versionString"),!1);""!==h&&h!==d&&f.get("versionString")!==h?(b=wp.api.utils.capitalizeAndCamelCaseDashes(h)+wp.api.utils.capitalizeAndCamelCaseDashes(d),c=g.models[b]||b,b=g.collections[b]||b,e.collections[b]=wp.api.WPApiBaseCollection.extend({url:function(){return f.get("apiRoot")+f.get("versionString")+h+"/"+this.parent+"/"+d},model:function(a,b){return new e.models[c](a,b)},nonce:function(){return f.get("nonce")},endpointModel:f,name:b,route:a,methods:a.route.methods})):(b=wp.api.utils.capitalizeAndCamelCaseDashes(d),c=g.models[b]||b,b=g.collections[b]||b,e.collections[b]=wp.api.WPApiBaseCollection.extend({url:function(){return f.get("apiRoot")+f.get("versionString")+d},model:function(a,b){return new e.models[c](a,b)},nonce:function(){return f.get("nonce")},endpointModel:f,name:b,route:a,methods:a.route.methods})),wp.api.utils.decorateFromRoute(a.route.endpoints,e.collections[b])}),_.each(e.models,function(a,b){e.models[b]=wp.api.utils.addMixinsAndHelpers(a,b,e)}),f.set("models",e.models),f.set("collections",e.collections)}}),wp.api.endpoints=new Backbone.Collection,wp.api.init=function(d){var e,f,g,h={};return d=d||{},h.nonce=_.isString(d.nonce)?d.nonce:c.nonce||"",h.apiRoot=d.apiRoot||c.root||"/wp-json",h.versionString=d.versionString||c.versionString||"wp/v2/",h.schema=d.schema||null,h.modelEndpoints=d.modelEndpoints||["me","settings"],h.schema||h.apiRoot!==c.root||h.versionString!==c.versionString||(h.schema=c.schema),b[h.apiRoot+h.versionString]||(e=wp.api.endpoints.findWhere({apiRoot:h.apiRoot,versionString:h.versionString}),e||(e=new a(h)),f=jQuery.Deferred(),g=f.promise(),e.schemaConstructed.done(function(a){wp.api.endpoints.add(a),wp.api.models=_.extend(wp.api.models,a.get("models")),wp.api.collections=_.extend(wp.api.collections,a.get("collections")),f.resolve(a)}),b[h.apiRoot+h.versionString]=g),b[h.apiRoot+h.versionString]},wp.api.loadPromise=wp.api.init()}();
;/*!
 * jQuery blockUI plugin
 * Version 2.70.0-2014.11.23
 * Requires jQuery v1.7 or later
 *
 * Examples at: http://malsup.com/jquery/block/
 * Copyright (c) 2007-2013 M. Alsup
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Thanks to Amir-Hossein Sobhi for some excellent contributions!
 */
!function(){"use strict";function e(e){function t(t,n){var s,h,k=t==window,y=n&&n.message!==undefined?n.message:undefined;if(!(n=e.extend({},e.blockUI.defaults,n||{})).ignoreIfBlocked||!e(t).data("blockUI.isBlocked")){if(n.overlayCSS=e.extend({},e.blockUI.defaults.overlayCSS,n.overlayCSS||{}),s=e.extend({},e.blockUI.defaults.css,n.css||{}),n.onOverlayClick&&(n.overlayCSS.cursor="pointer"),h=e.extend({},e.blockUI.defaults.themedCSS,n.themedCSS||{}),y=y===undefined?n.message:y,k&&p&&o(window,{fadeOut:0}),y&&"string"!=typeof y&&(y.parentNode||y.jquery)){var m=y.jquery?y[0]:y,g={};e(t).data("blockUI.history",g),g.el=m,g.parent=m.parentNode,g.display=m.style.display,g.position=m.style.position,g.parent&&g.parent.removeChild(m)}e(t).data("blockUI.onUnblock",n.onUnblock);var v,I,w,U,x=n.baseZ;v=e(r||n.forceIframe?'<iframe class="blockUI" style="z-index:'+x+++';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="'+n.iframeSrc+'"></iframe>':'<div class="blockUI" style="display:none"></div>'),I=e(n.theme?'<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:'+x+++';display:none"></div>':'<div class="blockUI blockOverlay" style="z-index:'+x+++';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>'),n.theme&&k?(U='<div class="blockUI '+n.blockMsgClass+' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:'+(x+10)+';display:none;position:fixed">',n.title&&(U+='<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(n.title||"&nbsp;")+"</div>"),U+='<div class="ui-widget-content ui-dialog-content"></div>',U+="</div>"):n.theme?(U='<div class="blockUI '+n.blockMsgClass+' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:'+(x+10)+';display:none;position:absolute">',n.title&&(U+='<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(n.title||"&nbsp;")+"</div>"),U+='<div class="ui-widget-content ui-dialog-content"></div>',U+="</div>"):U=k?'<div class="blockUI '+n.blockMsgClass+' blockPage" style="z-index:'+(x+10)+';display:none;position:fixed"></div>':'<div class="blockUI '+n.blockMsgClass+' blockElement" style="z-index:'+(x+10)+';display:none;position:absolute"></div>',w=e(U),y&&(n.theme?(w.css(h),w.addClass("ui-widget-content")):w.css(s)),n.theme||I.css(n.overlayCSS),I.css("position",k?"fixed":"absolute"),(r||n.forceIframe)&&v.css("opacity",0);var C=[v,I,w],S=e(k?"body":t);e.each(C,function(){this.appendTo(S)}),n.theme&&n.draggable&&e.fn.draggable&&w.draggable({handle:".ui-dialog-titlebar",cancel:"li"});var O=f&&(!e.support.boxModel||e("object,embed",k?null:t).length>0);if(u||O){if(k&&n.allowBodyStretch&&e.support.boxModel&&e("html,body").css("height","100%"),(u||!e.support.boxModel)&&!k)var E=a(t,"borderTopWidth"),T=a(t,"borderLeftWidth"),M=E?"(0 - "+E+")":0,B=T?"(0 - "+T+")":0;e.each(C,function(e,t){var o=t[0].style;if(o.position="absolute",e<2)k?o.setExpression("height","Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:"+n.quirksmodeOffsetHack+') + "px"'):o.setExpression("height",'this.parentNode.offsetHeight + "px"'),k?o.setExpression("width",'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"'):o.setExpression("width",'this.parentNode.offsetWidth + "px"'),B&&o.setExpression("left",B),M&&o.setExpression("top",M);else if(n.centerY)k&&o.setExpression("top",'(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'),o.marginTop=0;else if(!n.centerY&&k){var i="((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "+(n.css&&n.css.top?parseInt(n.css.top,10):0)+') + "px"';o.setExpression("top",i)}})}if(y&&(n.theme?w.find(".ui-widget-content").append(y):w.append(y),(y.jquery||y.nodeType)&&e(y).show()),(r||n.forceIframe)&&n.showOverlay&&v.show(),n.fadeIn){var j=n.onBlock?n.onBlock:c,H=n.showOverlay&&!y?j:c,z=y?j:c;n.showOverlay&&I._fadeIn(n.fadeIn,H),y&&w._fadeIn(n.fadeIn,z)}else n.showOverlay&&I.show(),y&&w.show(),n.onBlock&&n.onBlock.bind(w)();if(i(1,t,n),k?(p=w[0],b=e(n.focusableElements,p),n.focusInput&&setTimeout(l,20)):d(w[0],n.centerX,n.centerY),n.timeout){var W=setTimeout(function(){k?e.unblockUI(n):e(t).unblock(n)},n.timeout);e(t).data("blockUI.timeout",W)}}}function o(t,o){var s,l=t==window,d=e(t),a=d.data("blockUI.history"),c=d.data("blockUI.timeout");c&&(clearTimeout(c),d.removeData("blockUI.timeout")),o=e.extend({},e.blockUI.defaults,o||{}),i(0,t,o),null===o.onUnblock&&(o.onUnblock=d.data("blockUI.onUnblock"),d.removeData("blockUI.onUnblock"));var r;r=l?e(document.body).children().filter(".blockUI").add("body > .blockUI"):d.find(">.blockUI"),o.cursorReset&&(r.length>1&&(r[1].style.cursor=o.cursorReset),r.length>2&&(r[2].style.cursor=o.cursorReset)),l&&(p=b=null),o.fadeOut?(s=r.length,r.stop().fadeOut(o.fadeOut,function(){0==--s&&n(r,a,o,t)})):n(r,a,o,t)}function n(t,o,n,i){var s=e(i);if(!s.data("blockUI.isBlocked")){t.each(function(e,t){this.parentNode&&this.parentNode.removeChild(this)}),o&&o.el&&(o.el.style.display=o.display,o.el.style.position=o.position,o.el.style.cursor="default",o.parent&&o.parent.appendChild(o.el),s.removeData("blockUI.history")),s.data("blockUI.static")&&s.css("position","static"),"function"==typeof n.onUnblock&&n.onUnblock(i,n);var l=e(document.body),d=l.width(),a=l[0].style.width;l.width(d-1).width(d),l[0].style.width=a}}function i(t,o,n){var i=o==window,l=e(o);if((t||(!i||p)&&(i||l.data("blockUI.isBlocked")))&&(l.data("blockUI.isBlocked",t),i&&n.bindEvents&&(!t||n.showOverlay))){var d="mousedown mouseup keydown keypress keyup touchstart touchend touchmove";t?e(document).bind(d,n,s):e(document).unbind(d,s)}}function s(t){if("keydown"===t.type&&t.keyCode&&9==t.keyCode&&p&&t.data.constrainTabKey){var o=b,n=!t.shiftKey&&t.target===o[o.length-1],i=t.shiftKey&&t.target===o[0];if(n||i)return setTimeout(function(){l(i)},10),!1}var s=t.data,d=e(t.target);return d.hasClass("blockOverlay")&&s.onOverlayClick&&s.onOverlayClick(t),d.parents("div."+s.blockMsgClass).length>0||0===d.parents().children().filter("div.blockUI").length}function l(e){if(b){var t=b[!0===e?b.length-1:0];t&&t.focus()}}function d(e,t,o){var n=e.parentNode,i=e.style,s=(n.offsetWidth-e.offsetWidth)/2-a(n,"borderLeftWidth"),l=(n.offsetHeight-e.offsetHeight)/2-a(n,"borderTopWidth");t&&(i.left=s>0?s+"px":"0"),o&&(i.top=l>0?l+"px":"0")}function a(t,o){return parseInt(e.css(t,o),10)||0}e.fn._fadeIn=e.fn.fadeIn;var c=e.noop||function(){},r=/MSIE/.test(navigator.userAgent),u=/MSIE 6.0/.test(navigator.userAgent)&&!/MSIE 8.0/.test(navigator.userAgent),f=(document.documentMode,e.isFunction(document.createElement("div").style.setExpression));e.blockUI=function(e){t(window,e)},e.unblockUI=function(e){o(window,e)},e.growlUI=function(t,o,n,i){var s=e('<div class="growlUI"></div>');t&&s.append("<h1>"+t+"</h1>"),o&&s.append("<h2>"+o+"</h2>"),n===undefined&&(n=3e3);var l=function(t){t=t||{},e.blockUI({message:s,fadeIn:"undefined"!=typeof t.fadeIn?t.fadeIn:700,fadeOut:"undefined"!=typeof t.fadeOut?t.fadeOut:1e3,timeout:"undefined"!=typeof t.timeout?t.timeout:n,centerY:!1,showOverlay:!1,onUnblock:i,css:e.blockUI.defaults.growlCSS})};l();s.css("opacity");s.mouseover(function(){l({fadeIn:0,timeout:3e4});var t=e(".blockMsg");t.stop(),t.fadeTo(300,1)}).mouseout(function(){e(".blockMsg").fadeOut(1e3)})},e.fn.block=function(o){if(this[0]===window)return e.blockUI(o),this;var n=e.extend({},e.blockUI.defaults,o||{});return this.each(function(){var t=e(this);n.ignoreIfBlocked&&t.data("blockUI.isBlocked")||t.unblock({fadeOut:0})}),this.each(function(){"static"==e.css(this,"position")&&(this.style.position="relative",e(this).data("blockUI.static",!0)),this.style.zoom=1,t(this,o)})},e.fn.unblock=function(t){return this[0]===window?(e.unblockUI(t),this):this.each(function(){o(this,t)})},e.blockUI.version=2.7,e.blockUI.defaults={message:"<h1>Please wait...</h1>",title:null,draggable:!0,theme:!1,css:{padding:0,margin:0,width:"30%",top:"40%",left:"35%",textAlign:"center",color:"#000",border:"3px solid #aaa",backgroundColor:"#fff",cursor:"wait"},themedCSS:{width:"30%",top:"40%",left:"35%"},overlayCSS:{backgroundColor:"#000",opacity:.6,cursor:"wait"},cursorReset:"default",growlCSS:{width:"350px",top:"10px",left:"",right:"10px",border:"none",padding:"5px",opacity:.6,cursor:"default",color:"#fff",backgroundColor:"#000","-webkit-border-radius":"10px","-moz-border-radius":"10px","border-radius":"10px"},iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank",forceIframe:!1,baseZ:1e3,centerX:!0,centerY:!0,allowBodyStretch:!0,bindEvents:!0,constrainTabKey:!0,fadeIn:200,fadeOut:400,timeout:0,showOverlay:!0,focusInput:!0,focusableElements:":input:enabled:visible",onBlock:null,onUnblock:null,onOverlayClick:null,quirksmodeOffsetHack:4,blockMsgClass:"blockMsg",ignoreIfBlocked:!1};var p=null,b=[]}"function"==typeof define&&define.amd&&define.amd.jQuery?define(["jquery"],e):e(jQuery)}();
;jQuery(function(e){if("undefined"==typeof wc_add_to_cart_params)return!1;var t=function(){e(document.body).on("click",".add_to_cart_button",this.onAddToCart).on("click",".remove_from_cart_button",this.onRemoveFromCart).on("added_to_cart",this.updateButton).on("added_to_cart",this.updateCartPage).on("added_to_cart removed_from_cart",this.updateFragments)};t.prototype.onAddToCart=function(t){var a=e(this);if(a.is(".ajax_add_to_cart")){if(!a.attr("data-product_id"))return!0;t.preventDefault(),a.removeClass("added"),a.addClass("loading");var o={};e.each(a.data(),function(t,a){o[t]=a}),e(document.body).trigger("adding_to_cart",[a,o]),e.post(wc_add_to_cart_params.wc_ajax_url.toString().replace("%%endpoint%%","add_to_cart"),o,function(t){t&&(t.error&&t.product_url?window.location=t.product_url:"yes"!==wc_add_to_cart_params.cart_redirect_after_add?e(document.body).trigger("added_to_cart",[t.fragments,t.cart_hash,a]):window.location=wc_add_to_cart_params.cart_url)})}},t.prototype.onRemoveFromCart=function(t){var a=e(this),o=a.closest(".woocommerce-mini-cart-item");t.preventDefault(),o.block({message:null,overlayCSS:{opacity:.6}}),e.post(wc_add_to_cart_params.wc_ajax_url.toString().replace("%%endpoint%%","remove_from_cart"),{cart_item_key:a.data("cart_item_key")},function(t){t&&t.fragments?e(document.body).trigger("removed_from_cart",[t.fragments,t.cart_hash,a]):window.location=a.attr("href")}).fail(function(){window.location=a.attr("href")})},t.prototype.updateButton=function(t,a,o,r){(r=void 0!==r&&r)&&(r.removeClass("loading"),r.addClass("added"),wc_add_to_cart_params.is_cart||0!==r.parent().find(".added_to_cart").length||r.after(' <a href="'+wc_add_to_cart_params.cart_url+'" class="added_to_cart wc-forward" title="'+wc_add_to_cart_params.i18n_view_cart+'">'+wc_add_to_cart_params.i18n_view_cart+"</a>"),e(document.body).trigger("wc_cart_button_updated",[r]))},t.prototype.updateCartPage=function(){var t=window.location.toString().replace("add-to-cart","added-to-cart");e(".shop_table.cart").load(t+" .shop_table.cart:eq(0) > *",function(){e(".shop_table.cart").stop(!0).css("opacity","1").unblock(),e(document.body).trigger("cart_page_refreshed")}),e(".cart_totals").load(t+" .cart_totals:eq(0) > *",function(){e(".cart_totals").stop(!0).css("opacity","1").unblock(),e(document.body).trigger("cart_totals_refreshed")})},t.prototype.updateFragments=function(t,a){a&&(e.each(a,function(t){e(t).addClass("updating").fadeTo("400","0.6").block({message:null,overlayCSS:{opacity:.6}})}),e.each(a,function(t,a){e(t).replaceWith(a),e(t).stop(!0).css("opacity","1").unblock()}),e(document.body).trigger("wc_fragments_loaded"))},new t});
;/*!
 * JavaScript Cookie v2.1.4
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
!function(e){var n=!1;if("function"==typeof define&&define.amd&&(define(e),n=!0),"object"==typeof exports&&(module.exports=e(),n=!0),!n){var o=window.Cookies,t=window.Cookies=e();t.noConflict=function(){return window.Cookies=o,t}}}(function(){function e(){for(var e=0,n={};e<arguments.length;e++){var o=arguments[e];for(var t in o)n[t]=o[t]}return n}function n(o){function t(n,r,i){var c;if("undefined"!=typeof document){if(arguments.length>1){if("number"==typeof(i=e({path:"/"},t.defaults,i)).expires){var a=new Date;a.setMilliseconds(a.getMilliseconds()+864e5*i.expires),i.expires=a}i.expires=i.expires?i.expires.toUTCString():"";try{c=JSON.stringify(r),/^[\{\[]/.test(c)&&(r=c)}catch(m){}r=o.write?o.write(r,n):encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),n=(n=(n=encodeURIComponent(String(n))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape);var f="";for(var s in i)i[s]&&(f+="; "+s,!0!==i[s]&&(f+="="+i[s]));return document.cookie=n+"="+r+f}n||(c={});for(var p=document.cookie?document.cookie.split("; "):[],d=/(%[0-9A-Z]{2})+/g,u=0;u<p.length;u++){var l=p[u].split("="),C=l.slice(1).join("=");'"'===C.charAt(0)&&(C=C.slice(1,-1));try{var g=l[0].replace(d,decodeURIComponent);if(C=o.read?o.read(C,g):o(C,g)||C.replace(d,decodeURIComponent),this.json)try{C=JSON.parse(C)}catch(m){}if(n===g){c=C;break}n||(c[g]=C)}catch(m){}}return c}}return t.set=t,t.get=function(e){return t.call(t,e)},t.getJSON=function(){return t.apply({json:!0},[].slice.call(arguments))},t.defaults={},t.remove=function(n,o){t(n,"",e(o,{expires:-1}))},t.withConverter=n,t}return n(function(){})});
;jQuery(function(i){i(".woocommerce-ordering").on("change","select.orderby",function(){i(this).closest("form").submit()}),i("input.qty:not(.product-quantity input.qty)").each(function(){var o=parseFloat(i(this).attr("min"));0<=o&&parseFloat(i(this).val())<o&&i(this).val(o)}),i(".woocommerce-store-notice__dismiss-link").click(function(){Cookies.set("store_notice","hidden",{path:"/"}),i(".woocommerce-store-notice").hide()}),"hidden"===Cookies.get("store_notice")?i(".woocommerce-store-notice").hide():i(".woocommerce-store-notice").show(),i(document.body).on("click",function(){i(".woocommerce-input-wrapper span.description:visible").prop("aria-hidden",!0).slideUp(250)}),i(".woocommerce-input-wrapper").on("click",function(o){o.stopPropagation()}),i(".woocommerce-input-wrapper :input").on("keydown",function(o){var e=i(this).parent().find("span.description");if(27===o.which&&e.length&&e.is(":visible"))return e.prop("aria-hidden",!0).slideUp(250),o.preventDefault(),!1}).on("click focus",function(){var o=i(this).parent(),e=o.find("span.description");o.addClass("currentTarget"),i(".woocommerce-input-wrapper:not(.currentTarget) span.description:visible").prop("aria-hidden",!0).slideUp(250),e.length&&e.is(":hidden")&&e.prop("aria-hidden",!1).slideDown(250),o.removeClass("currentTarget")}),i.scroll_to_notices=function(o){o.length&&i("html, body").animate({scrollTop:o.offset().top-100},1e3)}});
;jQuery(function(n){if("undefined"==typeof wc_cart_fragments_params)return!1;var t=!0,o=wc_cart_fragments_params.cart_hash_key;try{t="sessionStorage"in window&&null!==window.sessionStorage,window.sessionStorage.setItem("wc","test"),window.sessionStorage.removeItem("wc"),window.localStorage.setItem("wc","test"),window.localStorage.removeItem("wc")}catch(w){t=!1}function a(){t&&sessionStorage.setItem("wc_cart_created",(new Date).getTime())}function s(e){t&&(localStorage.setItem(o,e),sessionStorage.setItem(o,e))}var e={url:wc_cart_fragments_params.wc_ajax_url.toString().replace("%%endpoint%%","get_refreshed_fragments"),type:"POST",success:function(e){e&&e.fragments&&(n.each(e.fragments,function(e,t){n(e).replaceWith(t)}),t&&(sessionStorage.setItem(wc_cart_fragments_params.fragment_name,JSON.stringify(e.fragments)),s(e.cart_hash),e.cart_hash&&a()),n(document.body).trigger("wc_fragments_refreshed"))}};function r(){n.ajax(e)}if(t){var i=null;n(document.body).on("wc_fragment_refresh updated_wc_div",function(){r()}),n(document.body).on("added_to_cart removed_from_cart",function(e,t,n){var r=sessionStorage.getItem(o);null!==r&&r!==undefined&&""!==r||a(),sessionStorage.setItem(wc_cart_fragments_params.fragment_name,JSON.stringify(t)),s(n)}),n(document.body).on("wc_fragments_refreshed",function(){clearTimeout(i),i=setTimeout(r,864e5)}),n(window).on("storage onstorage",function(e){o===e.originalEvent.key&&localStorage.getItem(o)!==sessionStorage.getItem(o)&&r()}),n(window).on("pageshow",function(e){e.originalEvent.persisted&&(n(".widget_shopping_cart_content").empty(),n(document.body).trigger("wc_fragment_refresh"))});try{var c=n.parseJSON(sessionStorage.getItem(wc_cart_fragments_params.fragment_name)),_=sessionStorage.getItem(o),g=Cookies.get("woocommerce_cart_hash"),m=sessionStorage.getItem("wc_cart_created");if(null!==_&&_!==undefined&&""!==_||(_=""),null!==g&&g!==undefined&&""!==g||(g=""),_&&(null===m||m===undefined||""===m))throw"No cart_created";if(m){var d=1*m+864e5,f=(new Date).getTime();if(d<f)throw"Fragment expired";i=setTimeout(r,d-f)}if(!c||!c["div.widget_shopping_cart_content"]||_!==g)throw"No fragment";n.each(c,function(e,t){n(e).replaceWith(t)}),n(document.body).trigger("wc_fragments_loaded")}catch(w){r()}}else r();0<Cookies.get("woocommerce_items_in_cart")?n(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").show():n(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").hide(),n(document.body).on("adding_to_cart",function(){n(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").show()})});
;var addComment={moveForm:function(a,b,c,d){var e,f,g,h,i=this,j=i.I(a),k=i.I(c),l=i.I("cancel-comment-reply-link"),m=i.I("comment_parent"),n=i.I("comment_post_ID"),o=k.getElementsByTagName("form")[0];if(j&&k&&l&&m&&o){i.respondId=c,d=d||!1,i.I("wp-temp-form-div")||(e=document.createElement("div"),e.id="wp-temp-form-div",e.style.display="none",k.parentNode.insertBefore(e,k)),j.parentNode.insertBefore(k,j.nextSibling),n&&d&&(n.value=d),m.value=b,l.style.display="",l.onclick=function(){var a=addComment,b=a.I("wp-temp-form-div"),c=a.I(a.respondId);if(b&&c)return a.I("comment_parent").value="0",b.parentNode.insertBefore(c,b),b.parentNode.removeChild(b),this.style.display="none",this.onclick=null,!1};try{for(var p=0;p<o.elements.length;p++)if(f=o.elements[p],h=!1,"getComputedStyle"in window?g=window.getComputedStyle(f):document.documentElement.currentStyle&&(g=f.currentStyle),(f.offsetWidth<=0&&f.offsetHeight<=0||"hidden"===g.visibility)&&(h=!0),"hidden"!==f.type&&!f.disabled&&!h){f.focus();break}}catch(q){}return!1}},I:function(a){return document.getElementById(a)}};
;/*!
 * jQuery UI Widget 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/jQuery.widget/
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){var b=0,c=Array.prototype.slice;return a.cleanData=function(b){return function(c){var d,e,f;for(f=0;null!=(e=c[f]);f++)try{d=a._data(e,"events"),d&&d.remove&&a(e).triggerHandler("remove")}catch(g){}b(c)}}(a.cleanData),a.widget=function(b,c,d){var e,f,g,h,i={},j=b.split(".")[0];return b=b.split(".")[1],e=j+"-"+b,d||(d=c,c=a.Widget),a.expr[":"][e.toLowerCase()]=function(b){return!!a.data(b,e)},a[j]=a[j]||{},f=a[j][b],g=a[j][b]=function(a,b){return this._createWidget?void(arguments.length&&this._createWidget(a,b)):new g(a,b)},a.extend(g,f,{version:d.version,_proto:a.extend({},d),_childConstructors:[]}),h=new c,h.options=a.widget.extend({},h.options),a.each(d,function(b,d){return a.isFunction(d)?void(i[b]=function(){var a=function(){return c.prototype[b].apply(this,arguments)},e=function(a){return c.prototype[b].apply(this,a)};return function(){var b,c=this._super,f=this._superApply;return this._super=a,this._superApply=e,b=d.apply(this,arguments),this._super=c,this._superApply=f,b}}()):void(i[b]=d)}),g.prototype=a.widget.extend(h,{widgetEventPrefix:f?h.widgetEventPrefix||b:b},i,{constructor:g,namespace:j,widgetName:b,widgetFullName:e}),f?(a.each(f._childConstructors,function(b,c){var d=c.prototype;a.widget(d.namespace+"."+d.widgetName,g,c._proto)}),delete f._childConstructors):c._childConstructors.push(g),a.widget.bridge(b,g),g},a.widget.extend=function(b){for(var d,e,f=c.call(arguments,1),g=0,h=f.length;g<h;g++)for(d in f[g])e=f[g][d],f[g].hasOwnProperty(d)&&void 0!==e&&(a.isPlainObject(e)?b[d]=a.isPlainObject(b[d])?a.widget.extend({},b[d],e):a.widget.extend({},e):b[d]=e);return b},a.widget.bridge=function(b,d){var e=d.prototype.widgetFullName||b;a.fn[b]=function(f){var g="string"==typeof f,h=c.call(arguments,1),i=this;return g?this.each(function(){var c,d=a.data(this,e);return"instance"===f?(i=d,!1):d?a.isFunction(d[f])&&"_"!==f.charAt(0)?(c=d[f].apply(d,h),c!==d&&void 0!==c?(i=c&&c.jquery?i.pushStack(c.get()):c,!1):void 0):a.error("no such method '"+f+"' for "+b+" widget instance"):a.error("cannot call methods on "+b+" prior to initialization; attempted to call method '"+f+"'")}):(h.length&&(f=a.widget.extend.apply(null,[f].concat(h))),this.each(function(){var b=a.data(this,e);b?(b.option(f||{}),b._init&&b._init()):a.data(this,e,new d(f,this))})),i}},a.Widget=function(){},a.Widget._childConstructors=[],a.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(c,d){d=a(d||this.defaultElement||this)[0],this.element=a(d),this.uuid=b++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=a(),this.hoverable=a(),this.focusable=a(),d!==this&&(a.data(d,this.widgetFullName,this),this._on(!0,this.element,{remove:function(a){a.target===d&&this.destroy()}}),this.document=a(d.style?d.ownerDocument:d.document||d),this.window=a(this.document[0].defaultView||this.document[0].parentWindow)),this.options=a.widget.extend({},this.options,this._getCreateOptions(),c),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:a.noop,_getCreateEventData:a.noop,_create:a.noop,_init:a.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(a.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:a.noop,widget:function(){return this.element},option:function(b,c){var d,e,f,g=b;if(0===arguments.length)return a.widget.extend({},this.options);if("string"==typeof b)if(g={},d=b.split("."),b=d.shift(),d.length){for(e=g[b]=a.widget.extend({},this.options[b]),f=0;f<d.length-1;f++)e[d[f]]=e[d[f]]||{},e=e[d[f]];if(b=d.pop(),1===arguments.length)return void 0===e[b]?null:e[b];e[b]=c}else{if(1===arguments.length)return void 0===this.options[b]?null:this.options[b];g[b]=c}return this._setOptions(g),this},_setOptions:function(a){var b;for(b in a)this._setOption(b,a[b]);return this},_setOption:function(a,b){return this.options[a]=b,"disabled"===a&&(this.widget().toggleClass(this.widgetFullName+"-disabled",!!b),b&&(this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus"))),this},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_on:function(b,c,d){var e,f=this;"boolean"!=typeof b&&(d=c,c=b,b=!1),d?(c=e=a(c),this.bindings=this.bindings.add(c)):(d=c,c=this.element,e=this.widget()),a.each(d,function(d,g){function h(){if(b||f.options.disabled!==!0&&!a(this).hasClass("ui-state-disabled"))return("string"==typeof g?f[g]:g).apply(f,arguments)}"string"!=typeof g&&(h.guid=g.guid=g.guid||h.guid||a.guid++);var i=d.match(/^([\w:-]*)\s*(.*)$/),j=i[1]+f.eventNamespace,k=i[2];k?e.delegate(k,j,h):c.bind(j,h)})},_off:function(b,c){c=(c||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,b.unbind(c).undelegate(c),this.bindings=a(this.bindings.not(b).get()),this.focusable=a(this.focusable.not(b).get()),this.hoverable=a(this.hoverable.not(b).get())},_delay:function(a,b){function c(){return("string"==typeof a?d[a]:a).apply(d,arguments)}var d=this;return setTimeout(c,b||0)},_hoverable:function(b){this.hoverable=this.hoverable.add(b),this._on(b,{mouseenter:function(b){a(b.currentTarget).addClass("ui-state-hover")},mouseleave:function(b){a(b.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(b){this.focusable=this.focusable.add(b),this._on(b,{focusin:function(b){a(b.currentTarget).addClass("ui-state-focus")},focusout:function(b){a(b.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(b,c,d){var e,f,g=this.options[b];if(d=d||{},c=a.Event(c),c.type=(b===this.widgetEventPrefix?b:this.widgetEventPrefix+b).toLowerCase(),c.target=this.element[0],f=c.originalEvent)for(e in f)e in c||(c[e]=f[e]);return this.element.trigger(c,d),!(a.isFunction(g)&&g.apply(this.element[0],[c].concat(d))===!1||c.isDefaultPrevented())}},a.each({show:"fadeIn",hide:"fadeOut"},function(b,c){a.Widget.prototype["_"+b]=function(d,e,f){"string"==typeof e&&(e={effect:e});var g,h=e?e===!0||"number"==typeof e?c:e.effect||c:b;e=e||{},"number"==typeof e&&(e={duration:e}),g=!a.isEmptyObject(e),e.complete=f,e.delay&&d.delay(e.delay),g&&a.effects&&a.effects.effect[h]?d[b](e):h!==b&&d[h]?d[h](e.duration,e.easing,f):d.queue(function(c){a(this)[b](),f&&f.call(d[0]),c()})}}),a.widget});
;!function(t){function e(o){if(i[o])return i[o].exports;var n=i[o]={exports:{},id:o,loaded:!1};return t[o].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}var i={};return e.m=t,e.c=i,e.p="",e(0)}({0:function(t,e,i){t.exports=i(672)},8:function(t,e){t.exports=jQuery},586:function(t,e,i){var o,n;/*!
	 * ScrollMagic v2.0.5 (2015-04-29)
	 * The javascript library for magical scroll interactions.
	 * (c) 2015 Jan Paepke (@janpaepke)
	 * Project Website: http://scrollmagic.io
	 * 
	 * @version 2.0.5
	 * @license Dual licensed under MIT license and GPL.
	 * @author Jan Paepke - e-mail@janpaepke.de
	 *
	 * @file ScrollMagic main library.
	 */
!function(r,s){o=s,n="function"==typeof o?o.call(e,i,e,t):o,!(void 0!==n&&(t.exports=n))}(this,function(){"use strict";var t=function(){n.log(2,"(COMPATIBILITY NOTICE) -> As of ScrollMagic 2.0.0 you need to use 'new ScrollMagic.Controller()' to create a new controller instance. Use 'new ScrollMagic.Scene()' to instance a scene.")};t.version="2.0.5",window.addEventListener("mousewheel",function(){});var e="data-scrollmagic-pin-spacer";t.Controller=function(o){var r,s,a="ScrollMagic.Controller",l="FORWARD",c="REVERSE",u="PAUSED",d=i.defaults,p=this,f=n.extend({},d,o),h=[],m=!1,g=0,v=u,y=!0,w=0,S=!0,b=function(){for(var e in f)d.hasOwnProperty(e)||(I(2,'WARNING: Unknown option "'+e+'"'),delete f[e]);if(f.container=n.get.elements(f.container)[0],!f.container)throw I(1,"ERROR creating object "+a+": No valid scroll container supplied"),a+" init failed.";y=f.container===window||f.container===document.body||!document.body.contains(f.container),y&&(f.container=window),w=T(),f.container.addEventListener("resize",O),f.container.addEventListener("scroll",O),f.refreshInterval=parseInt(f.refreshInterval)||d.refreshInterval,x(),I(3,"added new "+a+" controller (v"+t.version+")")},x=function(){f.refreshInterval>0&&(s=window.setTimeout(E,f.refreshInterval))},C=function(){return f.vertical?n.get.scrollTop(f.container):n.get.scrollLeft(f.container)},T=function(){return f.vertical?n.get.height(f.container):n.get.width(f.container)},k=this._setScrollPos=function(t){f.vertical?y?window.scrollTo(n.get.scrollLeft(),t):f.container.scrollTop=t:y?window.scrollTo(t,n.get.scrollTop()):f.container.scrollLeft=t},_=function(){if(S&&m){var t=n.type.Array(m)?m:h.slice(0);m=!1;var e=g;g=p.scrollPos();var i=g-e;0!==i&&(v=i>0?l:c),v===c&&t.reverse(),t.forEach(function(e,i){I(3,"updating Scene "+(i+1)+"/"+t.length+" ("+h.length+" total)"),e.update(!0)}),0===t.length&&f.loglevel>=3&&I(3,"updating 0 Scenes (nothing added to controller)")}},P=function(){r=n.rAF(_)},O=function(t){I(3,"event fired causing an update:",t.type),"resize"==t.type&&(w=T(),v=u),m!==!0&&(m=!0,P())},E=function(){if(!y&&w!=T()){var t;try{t=new Event("resize",{bubbles:!1,cancelable:!1})}catch(e){t=document.createEvent("Event"),t.initEvent("resize",!1,!1)}f.container.dispatchEvent(t)}h.forEach(function(t,e){t.refresh()}),x()},I=this._log=function(t,e){f.loglevel>=t&&(Array.prototype.splice.call(arguments,1,0,"("+a+") ->"),n.log.apply(window,arguments))};this._options=f;var L=function(t){if(t.length<=1)return t;var e=t.slice(0);return e.sort(function(t,e){return t.scrollOffset()>e.scrollOffset()?1:-1}),e};return this.addScene=function(e){if(n.type.Array(e))e.forEach(function(t,e){p.addScene(t)});else if(e instanceof t.Scene){if(e.controller()!==p)e.addTo(p);else if(h.indexOf(e)<0){h.push(e),h=L(h),e.on("shift.controller_sort",function(){h=L(h)});for(var i in f.globalSceneOptions)e[i]&&e[i].call(e,f.globalSceneOptions[i]);I(3,"adding Scene (now "+h.length+" total)")}}else I(1,"ERROR: invalid argument supplied for '.addScene()'");return p},this.removeScene=function(t){if(n.type.Array(t))t.forEach(function(t,e){p.removeScene(t)});else{var e=h.indexOf(t);e>-1&&(t.off("shift.controller_sort"),h.splice(e,1),I(3,"removing Scene (now "+h.length+" left)"),t.remove())}return p},this.updateScene=function(e,i){return n.type.Array(e)?e.forEach(function(t,e){p.updateScene(t,i)}):i?e.update(!0):m!==!0&&e instanceof t.Scene&&(m=m||[],m.indexOf(e)==-1&&m.push(e),m=L(m),P()),p},this.update=function(t){return O({type:"resize"}),t&&_(),p},this.scrollTo=function(i,o){if(n.type.Number(i))k.call(f.container,i,o);else if(i instanceof t.Scene)i.controller()===p?p.scrollTo(i.scrollOffset(),o):I(2,"scrollTo(): The supplied scene does not belong to this controller. Scroll cancelled.",i);else if(n.type.Function(i))k=i;else{var r=n.get.elements(i)[0];if(r){for(;r.parentNode.hasAttribute(e);)r=r.parentNode;var s=f.vertical?"top":"left",a=n.get.offset(f.container),l=n.get.offset(r);y||(a[s]-=p.scrollPos()),p.scrollTo(l[s]-a[s],o)}else I(2,"scrollTo(): The supplied argument is invalid. Scroll cancelled.",i)}return p},this.scrollPos=function(t){return arguments.length?(n.type.Function(t)?C=t:I(2,"Provided value for method 'scrollPos' is not a function. To change the current scroll position use 'scrollTo()'."),p):C.call(p)},this.info=function(t){var e={size:w,vertical:f.vertical,scrollPos:g,scrollDirection:v,container:f.container,isDocument:y};return arguments.length?void 0!==e[t]?e[t]:void I(1,'ERROR: option "'+t+'" is not available'):e},this.loglevel=function(t){return arguments.length?(f.loglevel!=t&&(f.loglevel=t),p):f.loglevel},this.enabled=function(t){return arguments.length?(S!=t&&(S=!!t,p.updateScene(h,!0)),p):S},this.destroy=function(t){window.clearTimeout(s);for(var e=h.length;e--;)h[e].destroy(t);return f.container.removeEventListener("resize",O),f.container.removeEventListener("scroll",O),n.cAF(r),I(3,"destroyed "+a+" (reset: "+(t?"true":"false")+")"),null},b(),p};var i={defaults:{container:window,vertical:!0,globalSceneOptions:{},loglevel:2,refreshInterval:100}};t.Controller.addOption=function(t,e){i.defaults[t]=e},t.Controller.extend=function(e){var i=this;t.Controller=function(){return i.apply(this,arguments),this.$super=n.extend({},this),e.apply(this,arguments)||this},n.extend(t.Controller,i),t.Controller.prototype=i.prototype,t.Controller.prototype.constructor=t.Controller},t.Scene=function(i){var r,s,a="ScrollMagic.Scene",l="BEFORE",c="DURING",u="AFTER",d=o.defaults,p=this,f=n.extend({},d,i),h=l,m=0,g={start:0,end:0},v=0,y=!0,w=function(){for(var t in f)d.hasOwnProperty(t)||(b(2,'WARNING: Unknown option "'+t+'"'),delete f[t]);for(var e in d)E(e);P()},S={};this.on=function(t,e){return n.type.Function(e)?(t=t.trim().split(" "),t.forEach(function(t){var i=t.split("."),o=i[0],n=i[1];"*"!=o&&(S[o]||(S[o]=[]),S[o].push({namespace:n||"",callback:e}))})):b(1,"ERROR when calling '.on()': Supplied callback for '"+t+"' is not a valid function!"),p},this.off=function(t,e){return t?(t=t.trim().split(" "),t.forEach(function(t,i){var o=t.split("."),n=o[0],r=o[1]||"",s="*"===n?Object.keys(S):[n];s.forEach(function(t){for(var i=S[t]||[],o=i.length;o--;){var n=i[o];!n||r!==n.namespace&&"*"!==r||e&&e!=n.callback||i.splice(o,1)}i.length||delete S[t]})}),p):(b(1,"ERROR: Invalid event name supplied."),p)},this.trigger=function(e,i){if(e){var o=e.trim().split("."),n=o[0],r=o[1],s=S[n];b(3,"event fired:",n,i?"->":"",i||""),s&&s.forEach(function(e,o){r&&r!==e.namespace||e.callback.call(p,new t.Event(n,e.namespace,p,i))})}else b(1,"ERROR: Invalid event name supplied.");return p},p.on("change.internal",function(t){"loglevel"!==t.what&&"tweenChanges"!==t.what&&("triggerElement"===t.what?T():"reverse"===t.what&&p.update())}).on("shift.internal",function(t){x(),p.update()});var b=this._log=function(t,e){f.loglevel>=t&&(Array.prototype.splice.call(arguments,1,0,"("+a+") ->"),n.log.apply(window,arguments))};this.addTo=function(e){return e instanceof t.Controller?s!=e&&(s&&s.removeScene(p),s=e,P(),C(!0),T(!0),x(),s.info("container").addEventListener("resize",k),e.addScene(p),p.trigger("add",{controller:s}),b(3,"added "+a+" to controller"),p.update()):b(1,"ERROR: supplied argument of 'addTo()' is not a valid ScrollMagic Controller"),p},this.enabled=function(t){return arguments.length?(y!=t&&(y=!!t,p.update(!0)),p):y},this.remove=function(){if(s){s.info("container").removeEventListener("resize",k);var t=s;s=void 0,t.removeScene(p),p.trigger("remove"),b(3,"removed "+a+" from controller")}return p},this.destroy=function(t){return p.trigger("destroy",{reset:t}),p.remove(),p.off("*.*"),b(3,"destroyed "+a+" (reset: "+(t?"true":"false")+")"),null},this.update=function(t){if(s)if(t)if(s.enabled()&&y){var e,i=s.info("scrollPos");e=f.duration>0?(i-g.start)/(g.end-g.start):i>=g.start?1:0,p.trigger("update",{startPos:g.start,endPos:g.end,scrollPos:i}),p.progress(e)}else I&&h===c&&A(!0);else s.updateScene(p,!1);return p},this.refresh=function(){return C(),T(),p},this.progress=function(t){if(arguments.length){var e=!1,i=h,o=s?s.info("scrollDirection"):"PAUSED",n=f.reverse||t>=m;if(0===f.duration?(e=m!=t,m=t<1&&n?0:1,h=0===m?l:c):t<0&&h!==l&&n?(m=0,h=l,e=!0):t>=0&&t<1&&n?(m=t,h=c,e=!0):t>=1&&h!==u?(m=1,h=u,e=!0):h!==c||n||A(),e){var r={progress:m,state:h,scrollDirection:o},a=h!=i,d=function(t){p.trigger(t,r)};a&&i!==c&&(d("enter"),d(i===l?"start":"end")),d("progress"),a&&h!==c&&(d(h===l?"start":"end"),d("leave"))}return p}return m};var x=function(){g={start:v+f.offset},s&&f.triggerElement&&(g.start-=s.info("size")*f.triggerHook),g.end=g.start+f.duration},C=function(t){if(r){var e="duration";O(e,r.call(p))&&!t&&(p.trigger("change",{what:e,newval:f[e]}),p.trigger("shift",{reason:e}))}},T=function(t){var i=0,o=f.triggerElement;if(s&&o){for(var r=s.info(),a=n.get.offset(r.container),l=r.vertical?"top":"left";o.parentNode.hasAttribute(e);)o=o.parentNode;var c=n.get.offset(o);r.isDocument||(a[l]-=s.scrollPos()),i=c[l]-a[l]}var u=i!=v;v=i,u&&!t&&p.trigger("shift",{reason:"triggerElementPosition"})},k=function(t){f.triggerHook>0&&p.trigger("shift",{reason:"containerResize"})},_=n.extend(o.validate,{duration:function(t){if(n.type.String(t)&&t.match(/^(\.|\d)*\d+%$/)){var e=parseFloat(t)/100;t=function(){return s?s.info("size")*e:0}}if(n.type.Function(t)){r=t;try{t=parseFloat(r())}catch(i){t=-1}}if(t=parseFloat(t),!n.type.Number(t)||t<0)throw r?(r=void 0,['Invalid return value of supplied function for option "duration":',t]):['Invalid value for option "duration":',t];return t}}),P=function(t){t=arguments.length?[t]:Object.keys(_),t.forEach(function(t,e){var i;if(_[t])try{i=_[t](f[t])}catch(o){i=d[t];var r=n.type.String(o)?[o]:o;n.type.Array(r)?(r[0]="ERROR: "+r[0],r.unshift(1),b.apply(this,r)):b(1,"ERROR: Problem executing validation callback for option '"+t+"':",o.message)}finally{f[t]=i}})},O=function(t,e){var i=!1,o=f[t];return f[t]!=e&&(f[t]=e,P(t),i=o!=f[t]),i},E=function(t){p[t]||(p[t]=function(e){return arguments.length?("duration"===t&&(r=void 0),O(t,e)&&(p.trigger("change",{what:t,newval:f[t]}),o.shifts.indexOf(t)>-1&&p.trigger("shift",{reason:t})),p):f[t]})};this.controller=function(){return s},this.state=function(){return h},this.scrollOffset=function(){return g.start},this.triggerPosition=function(){var t=f.offset;return s&&(t+=f.triggerElement?v:s.info("size")*p.triggerHook()),t};var I,L;p.on("shift.internal",function(t){var e="duration"===t.reason;(h===u&&e||h===c&&0===f.duration)&&A(),e&&z()}).on("progress.internal",function(t){A()}).on("add.internal",function(t){z()}).on("destroy.internal",function(t){p.removePin(t.reset)});var A=function(t){if(I&&s){var e=s.info(),i=L.spacer.firstChild;if(t||h!==c){var o={position:L.inFlow?"relative":"absolute",top:0,left:0},r=n.css(i,"position")!=o.position;L.pushFollowers?f.duration>0&&(h===u&&0===parseFloat(n.css(L.spacer,"padding-top"))?r=!0:h===l&&0===parseFloat(n.css(L.spacer,"padding-bottom"))&&(r=!0)):o[e.vertical?"top":"left"]=f.duration*m,n.css(i,o),r&&z()}else{"fixed"!=n.css(i,"position")&&(n.css(i,{position:"fixed"}),z());var a=n.get.offset(L.spacer,!0),d=f.reverse||0===f.duration?e.scrollPos-g.start:Math.round(m*f.duration*10)/10;a[e.vertical?"top":"left"]+=d,n.css(L.spacer.firstChild,{top:a.top,left:a.left})}}},z=function(){if(I&&s&&L.inFlow){var t=h===c,e=s.info("vertical"),i=L.spacer.firstChild,o=n.isMarginCollapseType(n.css(L.spacer,"display")),r={};L.relSize.width||L.relSize.autoFullWidth?t?n.css(I,{width:n.get.width(L.spacer)}):n.css(I,{width:"100%"}):(r["min-width"]=n.get.width(e?I:i,!0,!0),r.width=t?r["min-width"]:"auto"),L.relSize.height?t?n.css(I,{height:n.get.height(L.spacer)-(L.pushFollowers?f.duration:0)}):n.css(I,{height:"100%"}):(r["min-height"]=n.get.height(e?i:I,!0,!o),r.height=t?r["min-height"]:"auto"),L.pushFollowers&&(r["padding"+(e?"Top":"Left")]=f.duration*m,r["padding"+(e?"Bottom":"Right")]=f.duration*(1-m)),n.css(L.spacer,r)}},D=function(){s&&I&&h===c&&!s.info("isDocument")&&A()},R=function(){s&&I&&h===c&&((L.relSize.width||L.relSize.autoFullWidth)&&n.get.width(window)!=n.get.width(L.spacer.parentNode)||L.relSize.height&&n.get.height(window)!=n.get.height(L.spacer.parentNode))&&z()},$=function(t){s&&I&&h===c&&!s.info("isDocument")&&(t.preventDefault(),s._setScrollPos(s.info("scrollPos")-((t.wheelDelta||t[s.info("vertical")?"wheelDeltaY":"wheelDeltaX"])/3||30*-t.detail)))};this.setPin=function(t,i){var o={pushFollowers:!0,spacerClass:"scrollmagic-pin-spacer"};if(i=n.extend({},o,i),t=n.get.elements(t)[0],!t)return b(1,"ERROR calling method 'setPin()': Invalid pin element supplied."),p;if("fixed"===n.css(t,"position"))return b(1,"ERROR calling method 'setPin()': Pin does not work with elements that are positioned 'fixed'."),p;if(I){if(I===t)return p;p.removePin()}I=t;var r=I.parentNode.style.display,s=["top","left","bottom","right","margin","marginLeft","marginRight","marginTop","marginBottom"];I.parentNode.style.display="none";var a="absolute"!=n.css(I,"position"),l=n.css(I,s.concat(["display"])),c=n.css(I,["width","height"]);I.parentNode.style.display=r,!a&&i.pushFollowers&&(b(2,"WARNING: If the pinned element is positioned absolutely pushFollowers will be disabled."),i.pushFollowers=!1),window.setTimeout(function(){I&&0===f.duration&&i.pushFollowers&&b(2,"WARNING: pushFollowers =",!0,"has no effect, when scene duration is 0.")},0);var u=I.parentNode.insertBefore(document.createElement("div"),I),d=n.extend(l,{position:a?"relative":"absolute",boxSizing:"content-box",mozBoxSizing:"content-box",webkitBoxSizing:"content-box"});if(a||n.extend(d,n.css(I,["width","height"])),n.css(u,d),u.setAttribute(e,""),n.addClass(u,i.spacerClass),L={spacer:u,relSize:{width:"%"===c.width.slice(-1),height:"%"===c.height.slice(-1),autoFullWidth:"auto"===c.width&&a&&n.isMarginCollapseType(l.display)},pushFollowers:i.pushFollowers,inFlow:a},!I.___origStyle){I.___origStyle={};var h=I.style,m=s.concat(["width","height","position","boxSizing","mozBoxSizing","webkitBoxSizing"]);m.forEach(function(t){I.___origStyle[t]=h[t]||""})}return L.relSize.width&&n.css(u,{width:c.width}),L.relSize.height&&n.css(u,{height:c.height}),u.appendChild(I),n.css(I,{position:a?"relative":"absolute",margin:"auto",top:"auto",left:"auto",bottom:"auto",right:"auto"}),(L.relSize.width||L.relSize.autoFullWidth)&&n.css(I,{boxSizing:"border-box",mozBoxSizing:"border-box",webkitBoxSizing:"border-box"}),window.addEventListener("scroll",D),window.addEventListener("resize",D),window.addEventListener("resize",R),I.addEventListener("mousewheel",$),I.addEventListener("DOMMouseScroll",$),b(3,"added pin"),A(),p},this.removePin=function(t){if(I){if(h===c&&A(!0),t||!s){var i=L.spacer.firstChild;if(i.hasAttribute(e)){var o=L.spacer.style,r=["margin","marginLeft","marginRight","marginTop","marginBottom"];margins={},r.forEach(function(t){margins[t]=o[t]||""}),n.css(i,margins)}L.spacer.parentNode.insertBefore(i,L.spacer),L.spacer.parentNode.removeChild(L.spacer),I.parentNode.hasAttribute(e)||(n.css(I,I.___origStyle),delete I.___origStyle)}window.removeEventListener("scroll",D),window.removeEventListener("resize",D),window.removeEventListener("resize",R),I.removeEventListener("mousewheel",$),I.removeEventListener("DOMMouseScroll",$),I=void 0,b(3,"removed pin (reset: "+(t?"true":"false")+")")}return p};var M,B=[];return p.on("destroy.internal",function(t){p.removeClassToggle(t.reset)}),this.setClassToggle=function(t,e){var i=n.get.elements(t);return 0!==i.length&&n.type.String(e)?(B.length>0&&p.removeClassToggle(),M=e,B=i,p.on("enter.internal_class leave.internal_class",function(t){var e="enter"===t.type?n.addClass:n.removeClass;B.forEach(function(t,i){e(t,M)})}),p):(b(1,"ERROR calling method 'setClassToggle()': Invalid "+(0===i.length?"element":"classes")+" supplied."),p)},this.removeClassToggle=function(t){return t&&B.forEach(function(t,e){n.removeClass(t,M)}),p.off("start.internal_class end.internal_class"),M=void 0,B=[],p},w(),p};var o={defaults:{duration:0,offset:0,triggerElement:void 0,triggerHook:.5,reverse:!0,loglevel:2},validate:{offset:function(t){if(t=parseFloat(t),!n.type.Number(t))throw['Invalid value for option "offset":',t];return t},triggerElement:function(t){if(t=t||void 0){var e=n.get.elements(t)[0];if(!e)throw['Element defined in option "triggerElement" was not found:',t];t=e}return t},triggerHook:function(t){var e={onCenter:.5,onEnter:1,onLeave:0};if(n.type.Number(t))t=Math.max(0,Math.min(parseFloat(t),1));else{if(!(t in e))throw['Invalid value for option "triggerHook": ',t];t=e[t]}return t},reverse:function(t){return!!t},loglevel:function(t){if(t=parseInt(t),!n.type.Number(t)||t<0||t>3)throw['Invalid value for option "loglevel":',t];return t}},shifts:["duration","offset","triggerHook"]};t.Scene.addOption=function(e,i,n,r){e in o.defaults?t._util.log(1,"[static] ScrollMagic.Scene -> Cannot add Scene option '"+e+"', because it already exists."):(o.defaults[e]=i,o.validate[e]=n,r&&o.shifts.push(e))},t.Scene.extend=function(e){var i=this;t.Scene=function(){return i.apply(this,arguments),this.$super=n.extend({},this),e.apply(this,arguments)||this},n.extend(t.Scene,i),t.Scene.prototype=i.prototype,t.Scene.prototype.constructor=t.Scene},t.Event=function(t,e,i,o){o=o||{};for(var n in o)this[n]=o[n];return this.type=t,this.target=this.currentTarget=i,this.namespace=e||"",this.timeStamp=this.timestamp=Date.now(),this};var n=t._util=function(t){var e,i={},o=function(t){return parseFloat(t)||0},n=function(e){return e.currentStyle?e.currentStyle:t.getComputedStyle(e)},r=function(e,i,r,s){if(i=i===document?t:i,i===t)s=!1;else if(!h.DomElement(i))return 0;e=e.charAt(0).toUpperCase()+e.substr(1).toLowerCase();var a=(r?i["offset"+e]||i["outer"+e]:i["client"+e]||i["inner"+e])||0;if(r&&s){var l=n(i);a+="Height"===e?o(l.marginTop)+o(l.marginBottom):o(l.marginLeft)+o(l.marginRight)}return a},s=function(t){return t.replace(/^[^a-z]+([a-z])/g,"$1").replace(/-([a-z])/g,function(t){return t[1].toUpperCase()})};i.extend=function(t){for(t=t||{},e=1;e<arguments.length;e++)if(arguments[e])for(var i in arguments[e])arguments[e].hasOwnProperty(i)&&(t[i]=arguments[e][i]);return t},i.isMarginCollapseType=function(t){return["block","flex","list-item","table","-webkit-box"].indexOf(t)>-1};var a=0,l=["ms","moz","webkit","o"],c=t.requestAnimationFrame,u=t.cancelAnimationFrame;for(e=0;!c&&e<l.length;++e)c=t[l[e]+"RequestAnimationFrame"],u=t[l[e]+"CancelAnimationFrame"]||t[l[e]+"CancelRequestAnimationFrame"];c||(c=function(e){var i=(new Date).getTime(),o=Math.max(0,16-(i-a)),n=t.setTimeout(function(){e(i+o)},o);return a=i+o,n}),u||(u=function(e){t.clearTimeout(e)}),i.rAF=c.bind(t),i.cAF=u.bind(t);var d=["error","warn","log"],p=t.console||{};for(p.log=p.log||function(){},e=0;e<d.length;e++){var f=d[e];p[f]||(p[f]=p.log)}i.log=function(t){(t>d.length||t<=0)&&(t=d.length);var e=new Date,i=("0"+e.getHours()).slice(-2)+":"+("0"+e.getMinutes()).slice(-2)+":"+("0"+e.getSeconds()).slice(-2)+":"+("00"+e.getMilliseconds()).slice(-3),o=d[t-1],n=Array.prototype.splice.call(arguments,1),r=Function.prototype.bind.call(p[o],p);n.unshift(i),r.apply(p,n)};var h=i.type=function(t){return Object.prototype.toString.call(t).replace(/^\[object (.+)\]$/,"$1").toLowerCase()};h.String=function(t){return"string"===h(t)},h.Function=function(t){return"function"===h(t)},h.Array=function(t){return Array.isArray(t)},h.Number=function(t){return!h.Array(t)&&t-parseFloat(t)+1>=0},h.DomElement=function(t){return"object"==typeof HTMLElement?t instanceof HTMLElement:t&&"object"==typeof t&&null!==t&&1===t.nodeType&&"string"==typeof t.nodeName};var m=i.get={};return m.elements=function(e){var i=[];if(h.String(e))try{e=document.querySelectorAll(e)}catch(o){return i}if("nodelist"===h(e)||h.Array(e))for(var n=0,r=i.length=e.length;n<r;n++){var s=e[n];i[n]=h.DomElement(s)?s:m.elements(s)}else(h.DomElement(e)||e===document||e===t)&&(i=[e]);return i},m.scrollTop=function(e){return e&&"number"==typeof e.scrollTop?e.scrollTop:t.pageYOffset||0},m.scrollLeft=function(e){return e&&"number"==typeof e.scrollLeft?e.scrollLeft:t.pageXOffset||0},m.width=function(t,e,i){return r("width",t,e,i)},m.height=function(t,e,i){return r("height",t,e,i)},m.offset=function(t,e){var i={top:0,left:0};if(t&&t.getBoundingClientRect){var o=t.getBoundingClientRect();i.top=o.top,i.left=o.left,e||(i.top+=m.scrollTop(),i.left+=m.scrollLeft())}return i},i.addClass=function(t,e){e&&(t.classList?t.classList.add(e):t.className+=" "+e)},i.removeClass=function(t,e){e&&(t.classList?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," "))},i.css=function(t,e){if(h.String(e))return n(t)[s(e)];if(h.Array(e)){var i={},o=n(t);return e.forEach(function(t,e){i[t]=o[s(t)]}),i}for(var r in e){var a=e[r];a==parseFloat(a)&&(a+="px"),t.style[s(r)]=a}},i}(window||{});return t.Scene.prototype.addIndicators=function(){return t._util.log(1,"(ScrollMagic.Scene) -> ERROR calling addIndicators() due to missing Plugin 'debug.addIndicators'. Please make sure to include plugins/debug.addIndicators.js"),this},t.Scene.prototype.removeIndicators=function(){return t._util.log(1,"(ScrollMagic.Scene) -> ERROR calling removeIndicators() due to missing Plugin 'debug.addIndicators'. Please make sure to include plugins/debug.addIndicators.js"),this},t.Scene.prototype.setTween=function(){return t._util.log(1,"(ScrollMagic.Scene) -> ERROR calling setTween() due to missing Plugin 'animation.gsap'. Please make sure to include plugins/animation.gsap.js"),this},t.Scene.prototype.removeTween=function(){return t._util.log(1,"(ScrollMagic.Scene) -> ERROR calling removeTween() due to missing Plugin 'animation.gsap'. Please make sure to include plugins/animation.gsap.js"),this},t.Scene.prototype.setVelocity=function(){return t._util.log(1,"(ScrollMagic.Scene) -> ERROR calling setVelocity() due to missing Plugin 'animation.velocity'. Please make sure to include plugins/animation.velocity.js"),this},t.Scene.prototype.removeVelocity=function(){return t._util.log(1,"(ScrollMagic.Scene) -> ERROR calling removeVelocity() due to missing Plugin 'animation.velocity'. Please make sure to include plugins/animation.velocity.js"),this},t})},587:function(t,e,i){var o,n;!function(r){var s=!1;if(o=r,n="function"==typeof o?o.call(e,i,e,t):o,!(void 0!==n&&(t.exports=n)),s=!0,t.exports=r(),s=!0,!s){var a=window.Cookies,l=window.Cookies=r();l.noConflict=function(){return window.Cookies=a,l}}}(function(){function t(){for(var t=0,e={};t<arguments.length;t++){var i=arguments[t];for(var o in i)e[o]=i[o]}return e}function e(i){function o(e,n,r){var s;if("undefined"!=typeof document){if(arguments.length>1){if(r=t({path:"/"},o.defaults,r),"number"==typeof r.expires){var a=new Date;a.setMilliseconds(a.getMilliseconds()+864e5*r.expires),r.expires=a}r.expires=r.expires?r.expires.toUTCString():"";try{s=JSON.stringify(n),/^[\{\[]/.test(s)&&(n=s)}catch(l){}n=i.write?i.write(n,e):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),e=encodeURIComponent(String(e)),e=e.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent),e=e.replace(/[\(\)]/g,escape);var c="";for(var u in r)r[u]&&(c+="; "+u,r[u]!==!0&&(c+="="+r[u]));return document.cookie=e+"="+n+c}e||(s={});for(var d=document.cookie?document.cookie.split("; "):[],p=/(%[0-9A-Z]{2})+/g,f=0;f<d.length;f++){var h=d[f].split("="),m=h.slice(1).join("=");'"'===m.charAt(0)&&(m=m.slice(1,-1));try{var g=h[0].replace(p,decodeURIComponent);if(m=i.read?i.read(m,g):i(m,g)||m.replace(p,decodeURIComponent),this.json)try{m=JSON.parse(m)}catch(l){}if(e===g){s=m;break}e||(s[g]=m)}catch(l){}}return s}}return o.set=o,o.get=function(t){return o.call(o,t)},o.getJSON=function(){return o.apply({json:!0},[].slice.call(arguments))},o.defaults={},o.remove=function(e,i){o(e,"",t(i,{expires:-1}))},o.withConverter=e,o}return e(function(){})})},672:function(t,e,i){(function(t){"use strict";i(673),i(674),i(675),i(676),i(677),i(678),i(679),i(680),i(681),i(586),i(682),i(587),i(683)(t)}).call(e,i(8))},673:function(t,e,i){var o,n,r,s,o,a;/*!
	 * imagesLoaded PACKAGED v3.1.8
	 * JavaScript is all like "You images are done yet or what?"
	 * MIT License
	 */
/*!
	 * EventEmitter v4.2.6 - git.io/ee
	 * Oliver Caldwell
	 * MIT license
	 * @preserve
	 */
(function(){function t(){}function e(t,e){for(var i=t.length;i--;)if(t[i].listener===e)return i;return-1}function i(t){return function(){return this[t].apply(this,arguments)}}var r=t.prototype,s=this,a=s.EventEmitter;r.getListeners=function(t){var e,i,o=this._getEvents();if("object"==typeof t){e={};for(i in o)o.hasOwnProperty(i)&&t.test(i)&&(e[i]=o[i])}else e=o[t]||(o[t]=[]);return e},r.flattenListeners=function(t){var e,i=[];for(e=0;e<t.length;e+=1)i.push(t[e].listener);return i},r.getListenersAsObject=function(t){var e,i=this.getListeners(t);return i instanceof Array&&(e={},e[t]=i),e||i},r.addListener=function(t,i){var o,n=this.getListenersAsObject(t),r="object"==typeof i;for(o in n)n.hasOwnProperty(o)&&e(n[o],i)===-1&&n[o].push(r?i:{listener:i,once:!1});return this},r.on=i("addListener"),r.addOnceListener=function(t,e){return this.addListener(t,{listener:e,once:!0})},r.once=i("addOnceListener"),r.defineEvent=function(t){return this.getListeners(t),this},r.defineEvents=function(t){for(var e=0;e<t.length;e+=1)this.defineEvent(t[e]);return this},r.removeListener=function(t,i){var o,n,r=this.getListenersAsObject(t);for(n in r)r.hasOwnProperty(n)&&(o=e(r[n],i),o!==-1&&r[n].splice(o,1));return this},r.off=i("removeListener"),r.addListeners=function(t,e){return this.manipulateListeners(!1,t,e)},r.removeListeners=function(t,e){return this.manipulateListeners(!0,t,e)},r.manipulateListeners=function(t,e,i){var o,n,r=t?this.removeListener:this.addListener,s=t?this.removeListeners:this.addListeners;if("object"!=typeof e||e instanceof RegExp)for(o=i.length;o--;)r.call(this,e,i[o]);else for(o in e)e.hasOwnProperty(o)&&(n=e[o])&&("function"==typeof n?r.call(this,o,n):s.call(this,o,n));return this},r.removeEvent=function(t){var e,i=typeof t,o=this._getEvents();if("string"===i)delete o[t];else if("object"===i)for(e in o)o.hasOwnProperty(e)&&t.test(e)&&delete o[e];else delete this._events;return this},r.removeAllListeners=i("removeEvent"),r.emitEvent=function(t,e){var i,o,n,r,s=this.getListenersAsObject(t);for(n in s)if(s.hasOwnProperty(n))for(o=s[n].length;o--;)i=s[n][o],i.once===!0&&this.removeListener(t,i.listener),r=i.listener.apply(this,e||[]),r===this._getOnceReturnValue()&&this.removeListener(t,i.listener);return this},r.trigger=i("emitEvent"),r.emit=function(t){var e=Array.prototype.slice.call(arguments,1);return this.emitEvent(t,e)},r.setOnceReturnValue=function(t){return this._onceReturnValue=t,this},r._getOnceReturnValue=function(){return!this.hasOwnProperty("_onceReturnValue")||this._onceReturnValue},r._getEvents=function(){return this._events||(this._events={})},t.noConflict=function(){return s.EventEmitter=a,t},o=[],!(n=function(){return t}.apply(s,o))}).call(this),/*!
	 * eventie v1.0.4
	 * event binding helper
	 *   eventie.bind( elem, 'click', myFn )
	 *   eventie.unbind( elem, 'click', myFn )
	 */
function(o){function n(t){var e=o.event;return e.target=e.target||e.srcElement||t,e}var a=document.documentElement,l=function(){};a.addEventListener?l=function(t,e,i){t.addEventListener(e,i,!1)}:a.attachEvent&&(l=function(t,e,i){t[e+i]=i.handleEvent?function(){var e=n(t);i.handleEvent.call(i,e)}:function(){var e=n(t);i.call(t,e)},t.attachEvent("on"+e,t[e+i])});var c=function(){};a.removeEventListener?c=function(t,e,i){t.removeEventListener(e,i,!1)}:a.detachEvent&&(c=function(t,e,i){t.detachEvent("on"+e,t[e+i]);try{delete t[e+i]}catch(o){t[e+i]=void 0}});var u={bind:l,unbind:c};r=u,!(s="function"==typeof r?r.call(e,i,e,t):r)}(this),/*!
	 * imagesLoaded v3.1.8
	 * JavaScript is all like "You images are done yet or what?"
	 * MIT License
	 */
function(i,r){o=[n,s],a=function(t,e){return r(i,t,e)}.apply(e,o),!(void 0!==a&&(t.exports=a))}(window,function(t,e,i){function o(t,e){for(var i in e)t[i]=e[i];return t}function n(t){return"[object Array]"===p.call(t)}function r(t){var e=[];if(n(t))e=t;else if("number"==typeof t.length)for(var i=0,o=t.length;i<o;i++)e.push(t[i]);else e.push(t);return e}function s(t,e,i){if(!(this instanceof s))return new s(t,e);"string"==typeof t&&(t=document.querySelectorAll(t)),this.elements=r(t),this.options=o({},this.options),"function"==typeof e?i=e:o(this.options,e),i&&this.on("always",i),this.getImages(),c&&(this.jqDeferred=new c.Deferred);var n=this;setTimeout(function(){n.check()})}function a(t){this.img=t}function l(t){this.src=t,f[t]=this}var c=t.jQuery,u=t.console,d="undefined"!=typeof u,p=Object.prototype.toString;s.prototype=new e,s.prototype.options={},s.prototype.getImages=function(){this.images=[];for(var t=0,e=this.elements.length;t<e;t++){var i=this.elements[t];"IMG"===i.nodeName&&this.addImage(i);var o=i.nodeType;if(o&&(1===o||9===o||11===o))for(var n=i.querySelectorAll("img"),r=0,s=n.length;r<s;r++){var a=n[r];this.addImage(a)}}},s.prototype.addImage=function(t){var e=new a(t);this.images.push(e)},s.prototype.check=function(){function t(t,n){return e.options.debug&&d&&u.log("confirm",t,n),e.progress(t),i++,i===o&&e.complete(),!0}var e=this,i=0,o=this.images.length;if(this.hasAnyBroken=!1,!o)return void this.complete();for(var n=0;n<o;n++){var r=this.images[n];r.on("confirm",t),r.check()}},s.prototype.progress=function(t){this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded;var e=this;setTimeout(function(){e.emit("progress",e,t),e.jqDeferred&&e.jqDeferred.notify&&e.jqDeferred.notify(e,t)})},s.prototype.complete=function(){var t=this.hasAnyBroken?"fail":"done";this.isComplete=!0;var e=this;setTimeout(function(){if(e.emit(t,e),e.emit("always",e),e.jqDeferred){var i=e.hasAnyBroken?"reject":"resolve";e.jqDeferred[i](e)}})},c&&(c.fn.imagesLoaded=function(t,e){var i=new s(this,t,e);return i.jqDeferred.promise(c(this))}),a.prototype=new e,a.prototype.check=function(){var t=f[this.img.src]||new l(this.img.src);if(t.isConfirmed)return void this.confirm(t.isLoaded,"cached was confirmed");if(this.img.complete&&void 0!==this.img.naturalWidth)return void this.confirm(0!==this.img.naturalWidth,"naturalWidth");var e=this;t.on("confirm",function(t,i){return e.confirm(t.isLoaded,i),!0}),t.check()},a.prototype.confirm=function(t,e){this.isLoaded=t,this.emit("confirm",this,e)};var f={};return l.prototype=new e,l.prototype.check=function(){if(!this.isChecked){var t=new Image;i.bind(t,"load",this),i.bind(t,"error",this),t.src=this.src,this.isChecked=!0}},l.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},l.prototype.onload=function(t){this.confirm(!0,"onload"),this.unbindProxyEvents(t)},l.prototype.onerror=function(t){this.confirm(!1,"onerror"),this.unbindProxyEvents(t)},l.prototype.confirm=function(t,e){this.isConfirmed=!0,this.isLoaded=t,this.emit("confirm",this,e)},l.prototype.unbindProxyEvents=function(t){i.unbind(t.target,"load",this),i.unbind(t.target,"error",this)},s})},674:function(t,e,i){var o,n,r;/*!
	 * jQuery Mousewheel 3.1.13
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 */
!function(s){n=[i(8)],o=s,r="function"==typeof o?o.apply(e,n):o,!(void 0!==r&&(t.exports=r))}(function(t){function e(e){var s=e||window.event,a=l.call(arguments,1),c=0,d=0,p=0,f=0,h=0,m=0;if(e=t.event.fix(s),e.type="mousewheel","detail"in s&&(p=s.detail*-1),"wheelDelta"in s&&(p=s.wheelDelta),"wheelDeltaY"in s&&(p=s.wheelDeltaY),"wheelDeltaX"in s&&(d=s.wheelDeltaX*-1),"axis"in s&&s.axis===s.HORIZONTAL_AXIS&&(d=p*-1,p=0),c=0===p?d:p,"deltaY"in s&&(p=s.deltaY*-1,c=p),"deltaX"in s&&(d=s.deltaX,0===p&&(c=d*-1)),0!==p||0!==d){if(1===s.deltaMode){var g=t.data(this,"mousewheel-line-height");c*=g,p*=g,d*=g}else if(2===s.deltaMode){var v=t.data(this,"mousewheel-page-height");c*=v,p*=v,d*=v}if(f=Math.max(Math.abs(p),Math.abs(d)),(!r||f<r)&&(r=f,o(s,f)&&(r/=40)),o(s,f)&&(c/=40,d/=40,p/=40),c=Math[c>=1?"floor":"ceil"](c/r),d=Math[d>=1?"floor":"ceil"](d/r),p=Math[p>=1?"floor":"ceil"](p/r),u.settings.normalizeOffset&&this.getBoundingClientRect){var y=this.getBoundingClientRect();h=e.clientX-y.left,m=e.clientY-y.top}return e.deltaX=d,e.deltaY=p,e.deltaFactor=r,e.offsetX=h,e.offsetY=m,e.deltaMode=0,a.unshift(e,c,d,p),n&&clearTimeout(n),n=setTimeout(i,200),(t.event.dispatch||t.event.handle).apply(this,a)}}function i(){r=null}function o(t,e){return u.settings.adjustOldDeltas&&"mousewheel"===t.type&&e%120===0}var n,r,s=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],a="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],l=Array.prototype.slice;if(t.event.fixHooks)for(var c=s.length;c;)t.event.fixHooks[s[--c]]=t.event.mouseHooks;var u=t.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var i=a.length;i;)this.addEventListener(a[--i],e,!1);else this.onmousewheel=e;t.data(this,"mousewheel-line-height",u.getLineHeight(this)),t.data(this,"mousewheel-page-height",u.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var i=a.length;i;)this.removeEventListener(a[--i],e,!1);else this.onmousewheel=null;t.removeData(this,"mousewheel-line-height"),t.removeData(this,"mousewheel-page-height")},getLineHeight:function(e){var i=t(e),o=i["offsetParent"in t.fn?"offsetParent":"parent"]();return o.length||(o=t("body")),parseInt(o.css("fontSize"),10)||parseInt(i.css("fontSize"),10)||16},getPageHeight:function(e){return t(e).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};t.fn.extend({mousewheel:function(t){return t?this.bind("mousewheel",t):this.trigger("mousewheel")},unmousewheel:function(t){return this.unbind("mousewheel",t)}})})},675:function(t,e){!function(t,e){"use strict";var i=function(){var i={bcClass:"sf-breadcrumb",menuClass:"sf-js-enabled",anchorClass:"sf-with-ul",menuArrowClass:"sf-arrows"},o=function(){var e=/^(?![\w\W]*Windows Phone)[\w\W]*(iPhone|iPad|iPod)/i.test(navigator.userAgent);return e&&t("html").css("cursor","pointer").on("click",t.noop),e}(),n=function(){var t=document.documentElement.style;return"behavior"in t&&"fill"in t&&/iemobile/i.test(navigator.userAgent)}(),r=function(){return!!e.PointerEvent}(),s=function(t,e){var o=i.menuClass;e.cssArrows&&(o+=" "+i.menuArrowClass),t.toggleClass(o)},a=function(e,o){return e.find("li."+o.pathClass).slice(0,o.pathLevels).addClass(o.hoverClass+" "+i.bcClass).filter(function(){return t(this).children(o.popUpSelector).hide().show().length}).removeClass(o.pathClass)},l=function(t){t.children("a").toggleClass(i.anchorClass)},c=function(t){var e=t.css("ms-touch-action"),i=t.css("touch-action");i=i||e,i="pan-y"===i?"auto":"pan-y",t.css({"ms-touch-action":i,"touch-action":i})},u=function(t){return t.closest("."+i.menuClass)},d=function(t){return u(t).data("sf-options")},p=function(){var e=t(this),i=d(e);clearTimeout(i.sfTimer),e.siblings().superfish("hide").end().superfish("show")},f=function(e){e.retainPath=t.inArray(this[0],e.$path)>-1,this.superfish("hide"),this.parents("."+e.hoverClass).length||(e.onIdle.call(u(this)),e.$path.length&&t.proxy(p,e.$path)())},h=function(){var e=t(this),i=d(e);o?t.proxy(f,e,i)():(clearTimeout(i.sfTimer),i.sfTimer=setTimeout(t.proxy(f,e,i),i.delay))},m=function(e){var i=t(this),o=d(i),n=i.siblings(e.data.popUpSelector);return o.onHandleTouch.call(n)===!1?this:void(n.length>0&&n.is(":hidden")&&(i.one("click.superfish",!1),"MSPointerDown"===e.type||"pointerdown"===e.type?i.trigger("focus"):t.proxy(p,i.parent("li"))()))},g=function(e,i){var s="li:has("+i.popUpSelector+")";t.fn.hoverIntent&&!i.disableHI?e.hoverIntent(p,h,s):e.on("mouseenter.superfish",s,p).on("mouseleave.superfish",s,h);var a="MSPointerDown.superfish";r&&(a="pointerdown.superfish"),o||(a+=" touchend.superfish"),n&&(a+=" mousedown.superfish"),e.on("focusin.superfish","li",p).on("focusout.superfish","li",h).on(a,"a",i,m)};return{hide:function(e){if(this.length){var i=this,o=d(i);if(!o)return this;var n=o.retainPath===!0?o.$path:"",r=i.find("li."+o.hoverClass).add(this).not(n).removeClass(o.hoverClass).children(o.popUpSelector),s=o.speedOut;if(e&&(r.show(),s=0),o.retainPath=!1,o.onBeforeHide.call(r)===!1)return this;r.stop(!0,!0).animate(o.animationOut,s,function(){var e=t(this);o.onHide.call(e)})}return this},show:function(){var t=d(this);if(!t)return this;var e=this.addClass(t.hoverClass),i=e.children(t.popUpSelector);return t.onBeforeShow.call(i)===!1?this:(i.stop(!0,!0).animate(t.animation,t.speed,function(){t.onShow.call(i)}),this)},destroy:function(){return this.each(function(){var e,o=t(this),n=o.data("sf-options");return!!n&&(e=o.find(n.popUpSelector).parent("li"),clearTimeout(n.sfTimer),s(o,n),l(e),c(o),o.off(".superfish").off(".hoverIntent"),e.children(n.popUpSelector).attr("style",function(t,e){return e.replace(/display[^;]+;?/g,"")}),n.$path.removeClass(n.hoverClass+" "+i.bcClass).addClass(n.pathClass),o.find("."+n.hoverClass).removeClass(n.hoverClass),n.onDestroy.call(o),void o.removeData("sf-options"))})},init:function(e){return this.each(function(){var o=t(this);if(o.data("sf-options"))return!1;var n=t.extend({},t.fn.superfish.defaults,e),r=o.find(n.popUpSelector).parent("li");n.$path=a(o,n),o.data("sf-options",n),s(o,n),l(r),c(o),g(o,n),r.not("."+i.bcClass).superfish("hide",!0),n.onInit.call(this)})}}}();t.fn.superfish=function(e,o){return i[e]?i[e].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof e&&e?t.error("Method "+e+" does not exist on jQuery.fn.superfish"):i.init.apply(this,arguments)},t.fn.superfish.defaults={popUpSelector:"ul,.sf-mega",hoverClass:"sfHover",pathClass:"overrideThisToUse",pathLevels:1,delay:800,animation:{opacity:"show"},animationOut:{opacity:"hide"},speed:"normal",speedOut:"fast",cssArrows:!0,disableHI:!1,onInit:t.noop,onBeforeShow:t.noop,onShow:t.noop,onBeforeHide:t.noop,onHide:t.noop,onIdle:t.noop,onDestroy:t.noop,onHandleTouch:t.noop}}(jQuery,window)},676:function(t,e,i){var o,n;/**!
	 * easy-pie-chart
	 * Lightweight plugin to render simple, animated and retina optimized pie charts
	 *
	 * @license 
	 * @author Robert Fleischmann <rendro87@gmail.com> (http://robert-fleischmann.de)
	 * @version 2.1.7
	 **/
!function(r,s){o=[i(8)],n=function(t){return s(t)}.apply(e,o),!(void 0!==n&&(t.exports=n))}(this,function(t){var e=function(t,e){var i,o=document.createElement("canvas");t.appendChild(o),"object"==typeof G_vmlCanvasManager&&G_vmlCanvasManager.initElement(o);var n=o.getContext("2d");o.width=o.height=e.size;var r=1;window.devicePixelRatio>1&&(r=window.devicePixelRatio,o.style.width=o.style.height=[e.size,"px"].join(""),o.width=o.height=e.size*r,n.scale(r,r)),n.translate(e.size/2,e.size/2),n.rotate((-.5+e.rotate/180)*Math.PI);var s=(e.size-e.lineWidth)/2;e.scaleColor&&e.scaleLength&&(s-=e.scaleLength+2),Date.now=Date.now||function(){return+new Date};var a=function(t,e,i){i=Math.min(Math.max(-1,i||0),1);var o=i<=0;n.beginPath(),n.arc(0,0,s,0,2*Math.PI*i,o),n.strokeStyle=t,n.lineWidth=e,n.stroke()},l=function(){var t,i;n.lineWidth=1,n.fillStyle=e.scaleColor,n.save();for(var o=24;o>0;--o)o%6===0?(i=e.scaleLength,t=0):(i=.6*e.scaleLength,t=e.scaleLength-i),n.fillRect(-e.size/2+t,0,i,1),n.rotate(Math.PI/12);n.restore()},c=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}(),u=function(){e.scaleColor&&l(),e.trackColor&&a(e.trackColor,e.trackWidth||e.lineWidth,1)};this.getCanvas=function(){return o},this.getCtx=function(){return n},this.clear=function(){n.clearRect(e.size/-2,e.size/-2,e.size,e.size)},this.draw=function(t){e.scaleColor||e.trackColor?n.getImageData&&n.putImageData?i?n.putImageData(i,0,0):(u(),i=n.getImageData(0,0,e.size*r,e.size*r)):(this.clear(),u()):this.clear(),n.lineCap=e.lineCap;var o;o="function"==typeof e.barColor?e.barColor(t):e.barColor,a(o,e.lineWidth,t/100)}.bind(this),this.animate=function(t,i){var o=Date.now();e.onStart(t,i);var n=function(){var r=Math.min(Date.now()-o,e.animate.duration),s=e.easing(this,r,t,i-t,e.animate.duration);this.draw(s),e.onStep(t,i,s),r>=e.animate.duration?e.onStop(t,i):c(n)}.bind(this);c(n)}.bind(this)},i=function(t,i){var o={barColor:"#ef1e25",trackColor:"#f9f9f9",scaleColor:"#dfe0e0",scaleLength:5,lineCap:"round",lineWidth:3,trackWidth:void 0,size:110,rotate:0,animate:{duration:1e3,enabled:!0},easing:function(t,e,i,o,n){return e/=n/2,e<1?o/2*e*e+i:-o/2*(--e*(e-2)-1)+i},onStart:function(t,e){},onStep:function(t,e,i){},onStop:function(t,e){}};if("undefined"!=typeof e)o.renderer=e;else{if("undefined"==typeof SVGRenderer)throw new Error("Please load either the SVG- or the CanvasRenderer");o.renderer=SVGRenderer}var n={},r=0,s=function(){this.el=t,this.options=n;for(var e in o)o.hasOwnProperty(e)&&(n[e]=i&&"undefined"!=typeof i[e]?i[e]:o[e],"function"==typeof n[e]&&(n[e]=n[e].bind(this)));"string"==typeof n.easing&&"undefined"!=typeof jQuery&&jQuery.isFunction(jQuery.easing[n.easing])?n.easing=jQuery.easing[n.easing]:n.easing=o.easing,"number"==typeof n.animate&&(n.animate={duration:n.animate,enabled:!0}),"boolean"!=typeof n.animate||n.animate||(n.animate={duration:1e3,enabled:n.animate}),this.renderer=new n.renderer(t,n),this.renderer.draw(r),t.dataset&&t.dataset.percent?this.update(parseFloat(t.dataset.percent)):t.getAttribute&&t.getAttribute("data-percent")&&this.update(parseFloat(t.getAttribute("data-percent")))}.bind(this);this.update=function(t){return t=parseFloat(t),n.animate.enabled?this.renderer.animate(r,t):this.renderer.draw(t),r=t,this}.bind(this),this.disableAnimation=function(){return n.animate.enabled=!1,this},this.enableAnimation=function(){return n.animate.enabled=!0,this},s()};t.fn.easyPieChart=function(e){return this.each(function(){var o;t.data(this,"easyPieChart")||(o=t.extend({},e,t(this).data()),t.data(this,"easyPieChart",new i(this,o)))})}})},677:function(t,e,i){var o,n;!function(t){function e(t){var e=t.length,o=i.type(t);return"function"!==o&&!i.isWindow(t)&&(!(1!==t.nodeType||!e)||("array"===o||0===e||"number"==typeof e&&e>0&&e-1 in t))}if(!t.jQuery){var i=function(t,e){return new i.fn.init(t,e)};i.isWindow=function(t){return null!=t&&t==t.window},i.type=function(t){return null==t?t+"":"object"==typeof t||"function"==typeof t?n[s.call(t)]||"object":typeof t},i.isArray=Array.isArray||function(t){return"array"===i.type(t)},i.isPlainObject=function(t){var e;if(!t||"object"!==i.type(t)||t.nodeType||i.isWindow(t))return!1;try{if(t.constructor&&!r.call(t,"constructor")&&!r.call(t.constructor.prototype,"isPrototypeOf"))return!1}catch(o){return!1}for(e in t);return void 0===e||r.call(t,e)},i.each=function(t,i,o){var n,r=0,s=t.length,a=e(t);if(o){if(a)for(;r<s&&(n=i.apply(t[r],o),n!==!1);r++);else for(r in t)if(n=i.apply(t[r],o),n===!1)break}else if(a)for(;r<s&&(n=i.call(t[r],r,t[r]),n!==!1);r++);else for(r in t)if(n=i.call(t[r],r,t[r]),n===!1)break;return t},i.data=function(t,e,n){if(void 0===n){var r=t[i.expando],s=r&&o[r];if(void 0===e)return s;if(s&&e in s)return s[e]}else if(void 0!==e){var r=t[i.expando]||(t[i.expando]=++i.uuid);return o[r]=o[r]||{},o[r][e]=n,n}},i.removeData=function(t,e){var n=t[i.expando],r=n&&o[n];r&&i.each(e,function(t,e){delete r[e]})},i.extend=function(){var t,e,o,n,r,s,a=arguments[0]||{},l=1,c=arguments.length,u=!1;for("boolean"==typeof a&&(u=a,a=arguments[l]||{},l++),"object"!=typeof a&&"function"!==i.type(a)&&(a={}),l===c&&(a=this,l--);l<c;l++)if(null!=(r=arguments[l]))for(n in r)t=a[n],o=r[n],a!==o&&(u&&o&&(i.isPlainObject(o)||(e=i.isArray(o)))?(e?(e=!1,s=t&&i.isArray(t)?t:[]):s=t&&i.isPlainObject(t)?t:{},a[n]=i.extend(u,s,o)):void 0!==o&&(a[n]=o));return a},i.queue=function(t,o,n){function r(t,i){var o=i||[];return null!=t&&(e(Object(t))?!function(t,e){for(var i=+e.length,o=0,n=t.length;o<i;)t[n++]=e[o++];if(i!==i)for(;void 0!==e[o];)t[n++]=e[o++];return t.length=n,t}(o,"string"==typeof t?[t]:t):[].push.call(o,t)),o}if(t){o=(o||"fx")+"queue";var s=i.data(t,o);return n?(!s||i.isArray(n)?s=i.data(t,o,r(n)):s.push(n),s):s||[]}},i.dequeue=function(t,e){i.each(t.nodeType?[t]:t,function(t,o){e=e||"fx";var n=i.queue(o,e),r=n.shift();"inprogress"===r&&(r=n.shift()),r&&("fx"===e&&n.unshift("inprogress"),r.call(o,function(){i.dequeue(o,e)}))})},i.fn=i.prototype={init:function(t){if(t.nodeType)return this[0]=t,this;throw new Error("Not a DOM node.")},offset:function(){var e=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:e.top+(t.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:e.left+(t.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){function t(){for(var t=this.offsetParent||document;t&&"html"===!t.nodeType.toLowerCase&&"static"===t.style.position;)t=t.offsetParent;return t||document}var e=this[0],t=t.apply(e),o=this.offset(),n=/^(?:body|html)$/i.test(t.nodeName)?{top:0,left:0}:i(t).offset();return o.top-=parseFloat(e.style.marginTop)||0,o.left-=parseFloat(e.style.marginLeft)||0,t.style&&(n.top+=parseFloat(t.style.borderTopWidth)||0,n.left+=parseFloat(t.style.borderLeftWidth)||0),{top:o.top-n.top,left:o.left-n.left}}};var o={};i.expando="velocity"+(new Date).getTime(),i.uuid=0;for(var n={},r=n.hasOwnProperty,s=n.toString,a="Boolean Number String Function Array Date RegExp Object Error".split(" "),l=0;l<a.length;l++)n["[object "+a[l]+"]"]=a[l].toLowerCase();i.fn.init.prototype=i.fn,t.Velocity={Utilities:i}}}(window),function(r){"object"==typeof t&&"object"==typeof t.exports?t.exports=r():(o=r,n="function"==typeof o?o.call(e,i,e,t):o,!(void 0!==n&&(t.exports=n)))}(function(){return function(t,e,i,o){function n(t){for(var e=-1,i=t?t.length:0,o=[];++e<i;){var n=t[e];n&&o.push(n)}return o}function r(t){return m.isWrapped(t)?t=[].slice.call(t):m.isNode(t)&&(t=[t]),t}function s(t){var e=p.data(t,"velocity");return null===e?o:e}function a(t){return function(e){return Math.round(e*t)*(1/t)}}function l(t,i,o,n){function r(t,e){return 1-3*e+3*t}function s(t,e){return 3*e-6*t}function a(t){return 3*t}function l(t,e,i){return((r(e,i)*t+s(e,i))*t+a(e))*t}function c(t,e,i){return 3*r(e,i)*t*t+2*s(e,i)*t+a(e)}function u(e,i){for(var n=0;n<m;++n){var r=c(i,t,o);if(0===r)return i;var s=l(i,t,o)-e;i-=s/r}return i}function d(){for(var e=0;e<w;++e)C[e]=l(e*S,t,o)}function p(e,i,n){var r,s,a=0;do s=i+(n-i)/2,r=l(s,t,o)-e,r>0?n=s:i=s;while(Math.abs(r)>v&&++a<y);return s}function f(e){for(var i=0,n=1,r=w-1;n!=r&&C[n]<=e;++n)i+=S;--n;var s=(e-C[n])/(C[n+1]-C[n]),a=i+s*S,l=c(a,t,o);return l>=g?u(e,a):0==l?a:p(e,i,i+S)}function h(){T=!0,t==i&&o==n||d()}var m=4,g=.001,v=1e-7,y=10,w=11,S=1/(w-1),b="Float32Array"in e;if(4!==arguments.length)return!1;for(var x=0;x<4;++x)if("number"!=typeof arguments[x]||isNaN(arguments[x])||!isFinite(arguments[x]))return!1;t=Math.min(t,1),o=Math.min(o,1),t=Math.max(t,0),o=Math.max(o,0);var C=b?new Float32Array(w):new Array(w),T=!1,k=function(e){return T||h(),t===i&&o===n?e:0===e?0:1===e?1:l(f(e),i,n)};k.getControlPoints=function(){return[{x:t,y:i},{x:o,y:n}]};var _="generateBezier("+[t,i,o,n]+")";return k.toString=function(){return _},k}function c(t,e){var i=t;return m.isString(t)?w.Easings[t]||(i=!1):i=m.isArray(t)&&1===t.length?a.apply(null,t):m.isArray(t)&&2===t.length?S.apply(null,t.concat([e])):!(!m.isArray(t)||4!==t.length)&&l.apply(null,t),i===!1&&(i=w.Easings[w.defaults.easing]?w.defaults.easing:y),i}function u(t){if(t){var e=(new Date).getTime(),i=w.State.calls.length;i>1e4&&(w.State.calls=n(w.State.calls));for(var r=0;r<i;r++)if(w.State.calls[r]){var a=w.State.calls[r],l=a[0],c=a[2],f=a[3],h=!!f,g=null;f||(f=w.State.calls[r][3]=e-16);for(var v=Math.min((e-f)/c.duration,1),y=0,S=l.length;y<S;y++){var x=l[y],T=x.element;if(s(T)){var k=!1;if(c.display!==o&&null!==c.display&&"none"!==c.display){if("flex"===c.display){var _=["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"];p.each(_,function(t,e){b.setPropertyValue(T,"display",e)})}b.setPropertyValue(T,"display",c.display)}c.visibility!==o&&"hidden"!==c.visibility&&b.setPropertyValue(T,"visibility",c.visibility);for(var P in x)if("element"!==P){var O,E=x[P],I=m.isString(E.easing)?w.Easings[E.easing]:E.easing;if(1===v)O=E.endValue;else{var L=E.endValue-E.startValue;if(O=E.startValue+L*I(v,c,L),!h&&O===E.currentValue)continue}if(E.currentValue=O,"tween"===P)g=O;else{if(b.Hooks.registered[P]){var A=b.Hooks.getRoot(P),z=s(T).rootPropertyValueCache[A];z&&(E.rootPropertyValue=z)}var D=b.setPropertyValue(T,P,E.currentValue+(0===parseFloat(O)?"":E.unitType),E.rootPropertyValue,E.scrollData);b.Hooks.registered[P]&&(b.Normalizations.registered[A]?s(T).rootPropertyValueCache[A]=b.Normalizations.registered[A]("extract",null,D[1]):s(T).rootPropertyValueCache[A]=D[1]),"transform"===D[0]&&(k=!0)}}c.mobileHA&&s(T).transformCache.translate3d===o&&(s(T).transformCache.translate3d="(0px, 0px, 0px)",k=!0),k&&b.flushTransformCache(T)}}c.display!==o&&"none"!==c.display&&(w.State.calls[r][2].display=!1),c.visibility!==o&&"hidden"!==c.visibility&&(w.State.calls[r][2].visibility=!1),c.progress&&c.progress.call(a[1],a[1],v,Math.max(0,f+c.duration-e),f,g),1===v&&d(r)}}w.State.isTicking&&C(u)}function d(t,e){if(!w.State.calls[t])return!1;for(var i=w.State.calls[t][0],n=w.State.calls[t][1],r=w.State.calls[t][2],a=w.State.calls[t][4],l=!1,c=0,u=i.length;c<u;c++){var d=i[c].element;if(e||r.loop||("none"===r.display&&b.setPropertyValue(d,"display",r.display),"hidden"===r.visibility&&b.setPropertyValue(d,"visibility",r.visibility)),r.loop!==!0&&(p.queue(d)[1]===o||!/\.velocityQueueEntryFlag/i.test(p.queue(d)[1]))&&s(d)){s(d).isAnimating=!1,s(d).rootPropertyValueCache={};var f=!1;p.each(b.Lists.transforms3D,function(t,e){var i=/^scale/.test(e)?1:0,n=s(d).transformCache[e];s(d).transformCache[e]!==o&&new RegExp("^\\("+i+"[^.]").test(n)&&(f=!0,delete s(d).transformCache[e])}),r.mobileHA&&(f=!0,delete s(d).transformCache.translate3d),f&&b.flushTransformCache(d),b.Values.removeClass(d,"velocity-animating")}if(!e&&r.complete&&!r.loop&&c===u-1)try{r.complete.call(n,n)}catch(h){setTimeout(function(){throw h},1)}a&&r.loop!==!0&&a(n),s(d)&&r.loop===!0&&!e&&(p.each(s(d).tweensContainer,function(t,e){/^rotate/.test(t)&&360===parseFloat(e.endValue)&&(e.endValue=0,e.startValue=360),/^backgroundPosition/.test(t)&&100===parseFloat(e.endValue)&&"%"===e.unitType&&(e.endValue=0,e.startValue=100)}),w(d,"reverse",{loop:!0,delay:r.delay})),r.queue!==!1&&p.dequeue(d,r.queue)}w.State.calls[t]=!1;for(var m=0,g=w.State.calls.length;m<g;m++)if(w.State.calls[m]!==!1){l=!0;break}l===!1&&(w.State.isTicking=!1,delete w.State.calls,w.State.calls=[])}var p,f=function(){if(i.documentMode)return i.documentMode;for(var t=7;t>4;t--){var e=i.createElement("div");if(e.innerHTML="<!--[if IE "+t+"]><span></span><![endif]-->",e.getElementsByTagName("span").length)return e=null,t}return o}(),h=function(){var t=0;return e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||function(e){var i,o=(new Date).getTime();return i=Math.max(0,16-(o-t)),t=o+i,setTimeout(function(){e(o+i)},i)}}(),m={isString:function(t){return"string"==typeof t},isArray:Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)},isFunction:function(t){return"[object Function]"===Object.prototype.toString.call(t)},isNode:function(t){return t&&t.nodeType},isNodeList:function(t){return"object"==typeof t&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(t))&&t.length!==o&&(0===t.length||"object"==typeof t[0]&&t[0].nodeType>0)},isWrapped:function(t){return t&&(t.jquery||e.Zepto&&e.Zepto.zepto.isZ(t))},isSVG:function(t){return e.SVGElement&&t instanceof e.SVGElement},isEmptyObject:function(t){for(var e in t)return!1;return!0}},g=!1;if(t.fn&&t.fn.jquery?(p=t,g=!0):p=e.Velocity.Utilities,f<=8&&!g)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if(f<=7)return void(jQuery.fn.velocity=jQuery.fn.animate);var v=400,y="swing",w={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:e.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:i.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Utilities:p,Redirects:{},Easings:{},Promise:e.Promise,defaults:{queue:"",duration:v,easing:y,begin:o,complete:o,progress:o,display:o,visibility:o,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},init:function(t){p.data(t,"velocity",{isSVG:m.isSVG(t),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:!1,version:{major:1,minor:2,patch:2},debug:!1};e.pageYOffset!==o?(w.State.scrollAnchor=e,w.State.scrollPropertyLeft="pageXOffset",w.State.scrollPropertyTop="pageYOffset"):(w.State.scrollAnchor=i.documentElement||i.body.parentNode||i.body,w.State.scrollPropertyLeft="scrollLeft",w.State.scrollPropertyTop="scrollTop");var S=function(){function t(t){return-t.tension*t.x-t.friction*t.v}function e(e,i,o){var n={x:e.x+o.dx*i,v:e.v+o.dv*i,tension:e.tension,friction:e.friction};return{dx:n.v,dv:t(n)}}function i(i,o){var n={dx:i.v,dv:t(i)},r=e(i,.5*o,n),s=e(i,.5*o,r),a=e(i,o,s),l=1/6*(n.dx+2*(r.dx+s.dx)+a.dx),c=1/6*(n.dv+2*(r.dv+s.dv)+a.dv);return i.x=i.x+l*o,i.v=i.v+c*o,i}return function o(t,e,n){var r,s,a,l={x:-1,v:0,tension:null,friction:null},c=[0],u=0,d=1e-4,p=.016;for(t=parseFloat(t)||500,e=parseFloat(e)||20,n=n||null,l.tension=t,l.friction=e,r=null!==n,r?(u=o(t,e),s=u/n*p):s=p;;)if(a=i(a||l,s),c.push(1+a.x),u+=16,!(Math.abs(a.x)>d&&Math.abs(a.v)>d))break;return r?function(t){return c[t*(c.length-1)|0]}:u}}();w.Easings={linear:function(t){return t},swing:function(t){return.5-Math.cos(t*Math.PI)/2},spring:function(t){return 1-Math.cos(4.5*t*Math.PI)*Math.exp(6*-t)}},p.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],function(t,e){w.Easings[e[0]]=l.apply(null,e[1])});var b=w.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var t=0;t<b.Lists.colors.length;t++){var e="color"===b.Lists.colors[t]?"0 0 0 1":"255 255 255 1";b.Hooks.templates[b.Lists.colors[t]]=["Red Green Blue Alpha",e]}var i,o,n;if(f)for(i in b.Hooks.templates){o=b.Hooks.templates[i],n=o[0].split(" ");var r=o[1].match(b.RegEx.valueSplit);"Color"===n[0]&&(n.push(n.shift()),r.push(r.shift()),b.Hooks.templates[i]=[n.join(" "),r.join(" ")])}for(i in b.Hooks.templates){o=b.Hooks.templates[i],n=o[0].split(" ");for(var t in n){var s=i+n[t],a=t;b.Hooks.registered[s]=[i,a]}}},getRoot:function(t){var e=b.Hooks.registered[t];return e?e[0]:t},cleanRootPropertyValue:function(t,e){return b.RegEx.valueUnwrap.test(e)&&(e=e.match(b.RegEx.valueUnwrap)[1]),b.Values.isCSSNullValue(e)&&(e=b.Hooks.templates[t][1]),e},extractValue:function(t,e){var i=b.Hooks.registered[t];if(i){var o=i[0],n=i[1];return e=b.Hooks.cleanRootPropertyValue(o,e),e.toString().match(b.RegEx.valueSplit)[n]}return e},injectValue:function(t,e,i){var o=b.Hooks.registered[t];if(o){var n,r,s=o[0],a=o[1];return i=b.Hooks.cleanRootPropertyValue(s,i),n=i.toString().match(b.RegEx.valueSplit),n[a]=e,r=n.join(" ")}return i}},Normalizations:{registered:{clip:function(t,e,i){switch(t){case"name":return"clip";case"extract":var o;return b.RegEx.wrappedValueAlreadyExtracted.test(i)?o=i:(o=i.toString().match(b.RegEx.valueUnwrap),o=o?o[1].replace(/,(\s+)?/g," "):i),o;case"inject":return"rect("+i+")"}},blur:function(t,e,i){switch(t){case"name":return w.State.isFirefox?"filter":"-webkit-filter";case"extract":var o=parseFloat(i);if(!o&&0!==o){var n=i.toString().match(/blur\(([0-9]+[A-z]+)\)/i);o=n?n[1]:0}return o;case"inject":return parseFloat(i)?"blur("+i+")":"none"}},opacity:function(t,e,i){if(f<=8)switch(t){case"name":return"filter";case"extract":var o=i.toString().match(/alpha\(opacity=(.*)\)/i);return i=o?o[1]/100:1;case"inject":return e.style.zoom=1,parseFloat(i)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(i),10)+")"}else switch(t){case"name":return"opacity";case"extract":return i;case"inject":return i}}},register:function(){f<=9||w.State.isGingerbread||(b.Lists.transformsBase=b.Lists.transformsBase.concat(b.Lists.transforms3D));for(var t=0;t<b.Lists.transformsBase.length;t++)!function(){var e=b.Lists.transformsBase[t];b.Normalizations.registered[e]=function(t,i,n){switch(t){case"name":return"transform";case"extract":return s(i)===o||s(i).transformCache[e]===o?/^scale/i.test(e)?1:0:s(i).transformCache[e].replace(/[()]/g,"");case"inject":var r=!1;switch(e.substr(0,e.length-1)){case"translate":r=!/(%|px|em|rem|vw|vh|\d)$/i.test(n);break;case"scal":case"scale":w.State.isAndroid&&s(i).transformCache[e]===o&&n<1&&(n=1),r=!/(\d)$/i.test(n);break;case"skew":r=!/(deg|\d)$/i.test(n);break;case"rotate":r=!/(deg|\d)$/i.test(n)}return r||(s(i).transformCache[e]="("+n+")"),s(i).transformCache[e]}}}();for(var t=0;t<b.Lists.colors.length;t++)!function(){var e=b.Lists.colors[t];b.Normalizations.registered[e]=function(t,i,n){switch(t){case"name":return e;case"extract":var r;if(b.RegEx.wrappedValueAlreadyExtracted.test(n))r=n;else{var s,a={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(n)?s=a[n]!==o?a[n]:a.black:b.RegEx.isHex.test(n)?s="rgb("+b.Values.hexToRgb(n).join(" ")+")":/^rgba?\(/i.test(n)||(s=a.black),r=(s||n).toString().match(b.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return f<=8||3!==r.split(" ").length||(r+=" 1"),r;case"inject":return f<=8?4===n.split(" ").length&&(n=n.split(/\s+/).slice(0,3).join(" ")):3===n.split(" ").length&&(n+=" 1"),(f<=8?"rgb":"rgba")+"("+n.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}}()}},Names:{camelCase:function(t){return t.replace(/-(\w)/g,function(t,e){return e.toUpperCase()})},SVGAttribute:function(t){var e="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(f||w.State.isAndroid&&!w.State.isChrome)&&(e+="|transform"),new RegExp("^("+e+")$","i").test(t)},prefixCheck:function(t){if(w.State.prefixMatches[t])return[w.State.prefixMatches[t],!0];for(var e=["","Webkit","Moz","ms","O"],i=0,o=e.length;i<o;i++){var n;if(n=0===i?t:e[i]+t.replace(/^\w/,function(t){return t.toUpperCase()}),m.isString(w.State.prefixElement.style[n]))return w.State.prefixMatches[t]=n,[n,!0]}return[t,!1]}},Values:{hexToRgb:function(t){var e,i=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,o=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;return t=t.replace(i,function(t,e,i,o){return e+e+i+i+o+o}),e=o.exec(t),e?[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]:[0,0,0]},isCSSNullValue:function(t){return 0==t||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(t)},getUnitType:function(t){return/^(rotate|skew)/i.test(t)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(t)?"":"px"},getDisplayType:function(t){var e=t&&t.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(e)?"inline":/^(li)$/i.test(e)?"list-item":/^(tr)$/i.test(e)?"table-row":/^(table)$/i.test(e)?"table":/^(tbody)$/i.test(e)?"table-row-group":"block"},addClass:function(t,e){t.classList?t.classList.add(e):t.className+=(t.className.length?" ":"")+e},removeClass:function(t,e){t.classList?t.classList.remove(e):t.className=t.className.toString().replace(new RegExp("(^|\\s)"+e.split(" ").join("|")+"(\\s|$)","gi")," ")}},getPropertyValue:function(t,i,n,r){function a(t,i){function n(){c&&b.setPropertyValue(t,"display","none")}var l=0;if(f<=8)l=p.css(t,i);else{var c=!1;if(/^(width|height)$/.test(i)&&0===b.getPropertyValue(t,"display")&&(c=!0,b.setPropertyValue(t,"display",b.Values.getDisplayType(t))),!r){if("height"===i&&"border-box"!==b.getPropertyValue(t,"boxSizing").toString().toLowerCase()){var u=t.offsetHeight-(parseFloat(b.getPropertyValue(t,"borderTopWidth"))||0)-(parseFloat(b.getPropertyValue(t,"borderBottomWidth"))||0)-(parseFloat(b.getPropertyValue(t,"paddingTop"))||0)-(parseFloat(b.getPropertyValue(t,"paddingBottom"))||0);return n(),u}if("width"===i&&"border-box"!==b.getPropertyValue(t,"boxSizing").toString().toLowerCase()){var d=t.offsetWidth-(parseFloat(b.getPropertyValue(t,"borderLeftWidth"))||0)-(parseFloat(b.getPropertyValue(t,"borderRightWidth"))||0)-(parseFloat(b.getPropertyValue(t,"paddingLeft"))||0)-(parseFloat(b.getPropertyValue(t,"paddingRight"))||0);return n(),d}}var h;h=s(t)===o?e.getComputedStyle(t,null):s(t).computedStyle?s(t).computedStyle:s(t).computedStyle=e.getComputedStyle(t,null),"borderColor"===i&&(i="borderTopColor"),l=9===f&&"filter"===i?h.getPropertyValue(i):h[i],""!==l&&null!==l||(l=t.style[i]),n()}if("auto"===l&&/^(top|right|bottom|left)$/i.test(i)){var m=a(t,"position");("fixed"===m||"absolute"===m&&/top|left/i.test(i))&&(l=p(t).position()[i]+"px")}return l}var l;if(b.Hooks.registered[i]){var c=i,u=b.Hooks.getRoot(c);n===o&&(n=b.getPropertyValue(t,b.Names.prefixCheck(u)[0])),b.Normalizations.registered[u]&&(n=b.Normalizations.registered[u]("extract",t,n)),l=b.Hooks.extractValue(c,n)}else if(b.Normalizations.registered[i]){var d,h;d=b.Normalizations.registered[i]("name",t),"transform"!==d&&(h=a(t,b.Names.prefixCheck(d)[0]),b.Values.isCSSNullValue(h)&&b.Hooks.templates[i]&&(h=b.Hooks.templates[i][1])),l=b.Normalizations.registered[i]("extract",t,h)}if(!/^[\d-]/.test(l))if(s(t)&&s(t).isSVG&&b.Names.SVGAttribute(i))if(/^(height|width)$/i.test(i))try{l=t.getBBox()[i]}catch(m){l=0}else l=t.getAttribute(i);else l=a(t,b.Names.prefixCheck(i)[0]);return b.Values.isCSSNullValue(l)&&(l=0),w.debug>=2&&console.log("Get "+i+": "+l),l},setPropertyValue:function(t,i,o,n,r){var a=i;if("scroll"===i)r.container?r.container["scroll"+r.direction]=o:"Left"===r.direction?e.scrollTo(o,r.alternateValue):e.scrollTo(r.alternateValue,o);else if(b.Normalizations.registered[i]&&"transform"===b.Normalizations.registered[i]("name",t))b.Normalizations.registered[i]("inject",t,o),a="transform",o=s(t).transformCache[i];else{if(b.Hooks.registered[i]){var l=i,c=b.Hooks.getRoot(i);n=n||b.getPropertyValue(t,c),o=b.Hooks.injectValue(l,o,n),i=c}if(b.Normalizations.registered[i]&&(o=b.Normalizations.registered[i]("inject",t,o),i=b.Normalizations.registered[i]("name",t)),a=b.Names.prefixCheck(i)[0],f<=8)try{t.style[a]=o}catch(u){w.debug&&console.log("Browser does not support ["+o+"] for ["+a+"]")}else s(t)&&s(t).isSVG&&b.Names.SVGAttribute(i)?t.setAttribute(i,o):t.style[a]=o;w.debug>=2&&console.log("Set "+i+" ("+a+"): "+o)}return[a,o]},flushTransformCache:function(t){function e(e){return parseFloat(b.getPropertyValue(t,e))}var i="";if((f||w.State.isAndroid&&!w.State.isChrome)&&s(t).isSVG){var o={translate:[e("translateX"),e("translateY")],skewX:[e("skewX")],skewY:[e("skewY")],scale:1!==e("scale")?[e("scale"),e("scale")]:[e("scaleX"),e("scaleY")],rotate:[e("rotateZ"),0,0]};p.each(s(t).transformCache,function(t){/^translate/i.test(t)?t="translate":/^scale/i.test(t)?t="scale":/^rotate/i.test(t)&&(t="rotate"),o[t]&&(i+=t+"("+o[t].join(" ")+") ",delete o[t])})}else{var n,r;p.each(s(t).transformCache,function(e){return n=s(t).transformCache[e],"transformPerspective"===e?(r=n,!0):(9===f&&"rotateZ"===e&&(e="rotate"),void(i+=e+n+" "))}),r&&(i="perspective"+r+" "+i)}b.setPropertyValue(t,"transform",i)}};b.Hooks.register(),b.Normalizations.register(),w.hook=function(t,e,i){var n=o;return t=r(t),p.each(t,function(t,r){if(s(r)===o&&w.init(r),i===o)n===o&&(n=w.CSS.getPropertyValue(r,e));else{var a=w.CSS.setPropertyValue(r,e,i);"transform"===a[0]&&w.CSS.flushTransformCache(r),n=a}}),n};var x=function(){function t(){return a?P.promise||null:l}function n(){function t(t){function d(t,e){var i=o,n=o,s=o;return m.isArray(t)?(i=t[0],!m.isArray(t[1])&&/^[\d-]/.test(t[1])||m.isFunction(t[1])||b.RegEx.isHex.test(t[1])?s=t[1]:(m.isString(t[1])&&!b.RegEx.isHex.test(t[1])||m.isArray(t[1]))&&(n=e?t[1]:c(t[1],a.duration),t[2]!==o&&(s=t[2]))):i=t,e||(n=n||a.easing),m.isFunction(i)&&(i=i.call(r,T,C)),m.isFunction(s)&&(s=s.call(r,T,C)),[i||0,n,s]}function f(t,e){var i,o;return o=(e||"0").toString().toLowerCase().replace(/[%A-z]+$/,function(t){return i=t,""}),i||(i=b.Values.getUnitType(t)),[o,i]}function v(){var t={myParent:r.parentNode||i.body,position:b.getPropertyValue(r,"position"),fontSize:b.getPropertyValue(r,"fontSize")},o=t.position===D.lastPosition&&t.myParent===D.lastParent,n=t.fontSize===D.lastFontSize;D.lastParent=t.myParent,D.lastPosition=t.position,D.lastFontSize=t.fontSize;var a=100,l={};if(n&&o)l.emToPx=D.lastEmToPx,l.percentToPxWidth=D.lastPercentToPxWidth,l.percentToPxHeight=D.lastPercentToPxHeight;else{var c=s(r).isSVG?i.createElementNS("http://www.w3.org/2000/svg","rect"):i.createElement("div");w.init(c),t.myParent.appendChild(c),p.each(["overflow","overflowX","overflowY"],function(t,e){w.CSS.setPropertyValue(c,e,"hidden")}),w.CSS.setPropertyValue(c,"position",t.position),w.CSS.setPropertyValue(c,"fontSize",t.fontSize),w.CSS.setPropertyValue(c,"boxSizing","content-box"),p.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(t,e){w.CSS.setPropertyValue(c,e,a+"%")}),w.CSS.setPropertyValue(c,"paddingLeft",a+"em"),l.percentToPxWidth=D.lastPercentToPxWidth=(parseFloat(b.getPropertyValue(c,"width",null,!0))||1)/a,l.percentToPxHeight=D.lastPercentToPxHeight=(parseFloat(b.getPropertyValue(c,"height",null,!0))||1)/a,l.emToPx=D.lastEmToPx=(parseFloat(b.getPropertyValue(c,"paddingLeft"))||1)/a,t.myParent.removeChild(c)}return null===D.remToPx&&(D.remToPx=parseFloat(b.getPropertyValue(i.body,"fontSize"))||16),null===D.vwToPx&&(D.vwToPx=parseFloat(e.innerWidth)/100,D.vhToPx=parseFloat(e.innerHeight)/100),l.remToPx=D.remToPx,l.vwToPx=D.vwToPx,l.vhToPx=D.vhToPx,w.debug>=1&&console.log("Unit ratios: "+JSON.stringify(l),r),l}if(a.begin&&0===T)try{a.begin.call(h,h)}catch(S){setTimeout(function(){throw S},1)}if("scroll"===O){var x,k,_,E=/^x$/i.test(a.axis)?"Left":"Top",I=parseFloat(a.offset)||0;a.container?m.isWrapped(a.container)||m.isNode(a.container)?(a.container=a.container[0]||a.container,x=a.container["scroll"+E],_=x+p(r).position()[E.toLowerCase()]+I):a.container=null:(x=w.State.scrollAnchor[w.State["scrollProperty"+E]],k=w.State.scrollAnchor[w.State["scrollProperty"+("Left"===E?"Top":"Left")]],_=p(r).offset()[E.toLowerCase()]+I),l={scroll:{rootPropertyValue:!1,startValue:x,currentValue:x,endValue:_,unitType:"",easing:a.easing,scrollData:{container:a.container,direction:E,alternateValue:k}},element:r},w.debug&&console.log("tweensContainer (scroll): ",l.scroll,r)}else if("reverse"===O){if(!s(r).tweensContainer)return void p.dequeue(r,a.queue);"none"===s(r).opts.display&&(s(r).opts.display="auto"),"hidden"===s(r).opts.visibility&&(s(r).opts.visibility="visible"),s(r).opts.loop=!1,s(r).opts.begin=null,s(r).opts.complete=null,y.easing||delete a.easing,y.duration||delete a.duration,a=p.extend({},s(r).opts,a);var L=p.extend(!0,{},s(r).tweensContainer);for(var A in L)if("element"!==A){var z=L[A].startValue;L[A].startValue=L[A].currentValue=L[A].endValue,L[A].endValue=z,m.isEmptyObject(y)||(L[A].easing=a.easing),w.debug&&console.log("reverse tweensContainer ("+A+"): "+JSON.stringify(L[A]),r)}l=L}else if("start"===O){var L;s(r).tweensContainer&&s(r).isAnimating===!0&&(L=s(r).tweensContainer),p.each(g,function(t,e){if(RegExp("^"+b.Lists.colors.join("$|^")+"$").test(t)){var i=d(e,!0),n=i[0],r=i[1],s=i[2];if(b.RegEx.isHex.test(n)){for(var a=["Red","Green","Blue"],l=b.Values.hexToRgb(n),c=s?b.Values.hexToRgb(s):o,u=0;u<a.length;u++){var p=[l[u]];r&&p.push(r),c!==o&&p.push(c[u]),g[t+a[u]]=p}delete g[t]}}});for(var $ in g){var M=d(g[$]),B=M[0],H=M[1],F=M[2];$=b.Names.camelCase($);var W=b.Hooks.getRoot($),j=!1;if(s(r).isSVG||"tween"===W||b.Names.prefixCheck(W)[1]!==!1||b.Normalizations.registered[W]!==o){(a.display!==o&&null!==a.display&&"none"!==a.display||a.visibility!==o&&"hidden"!==a.visibility)&&/opacity|filter/.test($)&&!F&&0!==B&&(F=0),a._cacheValues&&L&&L[$]?(F===o&&(F=L[$].endValue+L[$].unitType),j=s(r).rootPropertyValueCache[W]):b.Hooks.registered[$]?F===o?(j=b.getPropertyValue(r,W),F=b.getPropertyValue(r,$,j)):j=b.Hooks.templates[W][1]:F===o&&(F=b.getPropertyValue(r,$));var V,Y,X,N=!1;if(V=f($,F),F=V[0],X=V[1],V=f($,B),B=V[0].replace(/^([+-\/*])=/,function(t,e){return N=e,""}),Y=V[1],F=parseFloat(F)||0,B=parseFloat(B)||0,"%"===Y&&(/^(fontSize|lineHeight)$/.test($)?(B/=100,Y="em"):/^scale/.test($)?(B/=100,Y=""):/(Red|Green|Blue)$/i.test($)&&(B=B/100*255,Y="")),/[\/*]/.test(N))Y=X;else if(X!==Y&&0!==F)if(0===B)Y=X;else{
n=n||v();var q=/margin|padding|left|right|width|text|word|letter/i.test($)||/X$/.test($)||"x"===$?"x":"y";switch(X){case"%":F*="x"===q?n.percentToPxWidth:n.percentToPxHeight;break;case"px":break;default:F*=n[X+"ToPx"]}switch(Y){case"%":F*=1/("x"===q?n.percentToPxWidth:n.percentToPxHeight);break;case"px":break;default:F*=1/n[Y+"ToPx"]}}switch(N){case"+":B=F+B;break;case"-":B=F-B;break;case"*":B=F*B;break;case"/":B=F/B}l[$]={rootPropertyValue:j,startValue:F,currentValue:F,endValue:B,unitType:Y,easing:H},w.debug&&console.log("tweensContainer ("+$+"): "+JSON.stringify(l[$]),r)}else w.debug&&console.log("Skipping ["+W+"] due to a lack of browser support.")}l.element=r}l.element&&(b.Values.addClass(r,"velocity-animating"),R.push(l),""===a.queue&&(s(r).tweensContainer=l,s(r).opts=a),s(r).isAnimating=!0,T===C-1?(w.State.calls.push([R,h,a,null,P.resolver]),w.State.isTicking===!1&&(w.State.isTicking=!0,u())):T++)}var n,r=this,a=p.extend({},w.defaults,y),l={};switch(s(r)===o&&w.init(r),parseFloat(a.delay)&&a.queue!==!1&&p.queue(r,a.queue,function(t){w.velocityQueueEntryFlag=!0,s(r).delayTimer={setTimeout:setTimeout(t,parseFloat(a.delay)),next:t}}),a.duration.toString().toLowerCase()){case"fast":a.duration=200;break;case"normal":a.duration=v;break;case"slow":a.duration=600;break;default:a.duration=parseFloat(a.duration)||1}w.mock!==!1&&(w.mock===!0?a.duration=a.delay=1:(a.duration*=parseFloat(w.mock)||1,a.delay*=parseFloat(w.mock)||1)),a.easing=c(a.easing,a.duration),a.begin&&!m.isFunction(a.begin)&&(a.begin=null),a.progress&&!m.isFunction(a.progress)&&(a.progress=null),a.complete&&!m.isFunction(a.complete)&&(a.complete=null),a.display!==o&&null!==a.display&&(a.display=a.display.toString().toLowerCase(),"auto"===a.display&&(a.display=w.CSS.Values.getDisplayType(r))),a.visibility!==o&&null!==a.visibility&&(a.visibility=a.visibility.toString().toLowerCase()),a.mobileHA=a.mobileHA&&w.State.isMobile&&!w.State.isGingerbread,a.queue===!1?a.delay?setTimeout(t,a.delay):t():p.queue(r,a.queue,function(e,i){return i===!0?(P.promise&&P.resolver(h),!0):(w.velocityQueueEntryFlag=!0,void t(e))}),""!==a.queue&&"fx"!==a.queue||"inprogress"===p.queue(r)[0]||p.dequeue(r)}var a,l,f,h,g,y,S=arguments[0]&&(arguments[0].p||p.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||m.isString(arguments[0].properties));if(m.isWrapped(this)?(a=!1,f=0,h=this,l=this):(a=!0,f=1,h=S?arguments[0].elements||arguments[0].e:arguments[0]),h=r(h)){S?(g=arguments[0].properties||arguments[0].p,y=arguments[0].options||arguments[0].o):(g=arguments[f],y=arguments[f+1]);var C=h.length,T=0;if(!/^(stop|finish)$/i.test(g)&&!p.isPlainObject(y)){var k=f+1;y={};for(var _=k;_<arguments.length;_++)m.isArray(arguments[_])||!/^(fast|normal|slow)$/i.test(arguments[_])&&!/^\d/.test(arguments[_])?m.isString(arguments[_])||m.isArray(arguments[_])?y.easing=arguments[_]:m.isFunction(arguments[_])&&(y.complete=arguments[_]):y.duration=arguments[_]}var P={promise:null,resolver:null,rejecter:null};a&&w.Promise&&(P.promise=new w.Promise(function(t,e){P.resolver=t,P.rejecter=e}));var O;switch(g){case"scroll":O="scroll";break;case"reverse":O="reverse";break;case"finish":case"stop":p.each(h,function(t,e){s(e)&&s(e).delayTimer&&(clearTimeout(s(e).delayTimer.setTimeout),s(e).delayTimer.next&&s(e).delayTimer.next(),delete s(e).delayTimer)});var E=[];return p.each(w.State.calls,function(t,e){e&&p.each(e[1],function(i,n){var r=y===o?"":y;return r!==!0&&e[2].queue!==r&&(y!==o||e[2].queue!==!1)||void p.each(h,function(i,o){o===n&&((y===!0||m.isString(y))&&(p.each(p.queue(o,m.isString(y)?y:""),function(t,e){m.isFunction(e)&&e(null,!0)}),p.queue(o,m.isString(y)?y:"",[])),"stop"===g?(s(o)&&s(o).tweensContainer&&r!==!1&&p.each(s(o).tweensContainer,function(t,e){e.endValue=e.currentValue}),E.push(t)):"finish"===g&&(e[2].duration=1))})})}),"stop"===g&&(p.each(E,function(t,e){d(e,!0)}),P.promise&&P.resolver(h)),t();default:if(!p.isPlainObject(g)||m.isEmptyObject(g)){if(m.isString(g)&&w.Redirects[g]){var I=p.extend({},y),L=I.duration,A=I.delay||0;return I.backwards===!0&&(h=p.extend(!0,[],h).reverse()),p.each(h,function(t,e){parseFloat(I.stagger)?I.delay=A+parseFloat(I.stagger)*t:m.isFunction(I.stagger)&&(I.delay=A+I.stagger.call(e,t,C)),I.drag&&(I.duration=parseFloat(L)||(/^(callout|transition)/.test(g)?1e3:v),I.duration=Math.max(I.duration*(I.backwards?1-t/C:(t+1)/C),.75*I.duration,200)),w.Redirects[g].call(e,e,I||{},t,C,h,P.promise?P:o)}),t()}var z="Velocity: First argument ("+g+") was not a property map, a known action, or a registered redirect. Aborting.";return P.promise?P.rejecter(new Error(z)):console.log(z),t()}O="start"}var D={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},R=[];p.each(h,function(t,e){m.isNode(e)&&n.call(e)});var $,I=p.extend({},w.defaults,y);if(I.loop=parseInt(I.loop),$=2*I.loop-1,I.loop)for(var M=0;M<$;M++){var B={delay:I.delay,progress:I.progress};M===$-1&&(B.display=I.display,B.visibility=I.visibility,B.complete=I.complete),x(h,"reverse",B)}return t()}};w=p.extend(x,w),w.animate=x;var C=e.requestAnimationFrame||h;return w.State.isMobile||i.hidden===o||i.addEventListener("visibilitychange",function(){i.hidden?(C=function(t){return setTimeout(function(){t(!0)},16)},u()):C=e.requestAnimationFrame||h}),t.Velocity=w,t!==e&&(t.fn.velocity=x,t.fn.velocity.defaults=w.defaults),p.each(["Down","Up"],function(t,e){w.Redirects["slide"+e]=function(t,i,n,r,s,a){var l=p.extend({},i),c=l.begin,u=l.complete,d={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""},f={};l.display===o&&(l.display="Down"===e?"inline"===w.CSS.Values.getDisplayType(t)?"inline-block":"block":"none"),l.begin=function(){c&&c.call(s,s);for(var i in d){f[i]=t.style[i];var o=w.CSS.getPropertyValue(t,i);d[i]="Down"===e?[o,0]:[0,o]}f.overflow=t.style.overflow,t.style.overflow="hidden"},l.complete=function(){for(var e in f)t.style[e]=f[e];u&&u.call(s,s),a&&a.resolver(s)},w(t,d,l)}}),p.each(["In","Out"],function(t,e){w.Redirects["fade"+e]=function(t,i,n,r,s,a){var l=p.extend({},i),c={opacity:"In"===e?1:0},u=l.complete;n!==r-1?l.complete=l.begin=null:l.complete=function(){u&&u.call(s,s),a&&a.resolver(s)},l.display===o&&(l.display="In"===e?"auto":"none"),w(this,c,l)}}),w}(window.jQuery||window.Zepto||window,window,document)})},678:function(t,e,i){!function(e){t.exports=e()}(function(){return function(t,e,i,o){function n(t,e){var i=[];return!(!t||!e)&&(s.each([t,e],function(t,e){var o=[];s.each(e,function(t,e){for(;e.toString().length<5;)e="0"+e;o.push(e)}),i.push(o.join(""))}),parseFloat(i[0])>parseFloat(i[1]))}if(!t.Velocity||!t.Velocity.Utilities)return void(e.console&&console.log("Velocity UI Pack: Velocity must be loaded first. Aborting."));var r=t.Velocity,s=r.Utilities,a=r.version,l={major:1,minor:1,patch:0};if(n(l,a)){var c="Velocity UI Pack: You need to update Velocity (jquery.velocity.js) to a newer version. Visit http://github.com/julianshapiro/velocity.";throw alert(c),new Error(c)}r.RegisterEffect=r.RegisterUI=function(t,e){function i(t,e,i,o){var n,a=0;s.each(t.nodeType?[t]:t,function(t,e){o&&(i+=t*o),n=e.parentNode,s.each(["height","paddingTop","paddingBottom","marginTop","marginBottom"],function(t,i){a+=parseFloat(r.CSS.getPropertyValue(e,i))})}),r.animate(n,{height:("In"===e?"+":"-")+"="+a},{queue:!1,easing:"ease-in-out",duration:i*("In"===e?.6:1)})}return r.Redirects[t]=function(n,a,l,c,u,d){function p(){a.display!==o&&"none"!==a.display||!/Out$/.test(t)||s.each(u.nodeType?[u]:u,function(t,e){r.CSS.setPropertyValue(e,"display","none")}),a.complete&&a.complete.call(u,u),d&&d.resolver(u||n)}var f=l===c-1;"function"==typeof e.defaultDuration?e.defaultDuration=e.defaultDuration.call(u,u):e.defaultDuration=parseFloat(e.defaultDuration);for(var h=0;h<e.calls.length;h++){var m=e.calls[h],g=m[0],v=a.duration||e.defaultDuration||1e3,y=m[1],w=m[2]||{},S={};if(S.duration=v*(y||1),S.queue=a.queue||"",S.easing=w.easing||"ease",S.delay=parseFloat(w.delay)||0,S._cacheValues=w._cacheValues||!0,0===h){if(S.delay+=parseFloat(a.delay)||0,0===l&&(S.begin=function(){a.begin&&a.begin.call(u,u);var e=t.match(/(In|Out)$/);e&&"In"===e[0]&&g.opacity!==o&&s.each(u.nodeType?[u]:u,function(t,e){r.CSS.setPropertyValue(e,"opacity",0)}),a.animateParentHeight&&e&&i(u,e[0],v+S.delay,a.stagger)}),null!==a.display)if(a.display!==o&&"none"!==a.display)S.display=a.display;else if(/In$/.test(t)){var b=r.CSS.Values.getDisplayType(n);S.display="inline"===b?"inline-block":b}a.visibility&&"hidden"!==a.visibility&&(S.visibility=a.visibility)}h===e.calls.length-1&&(S.complete=function(){if(e.reset){for(var t in e.reset){var i=e.reset[t];r.CSS.Hooks.registered[t]!==o||"string"!=typeof i&&"number"!=typeof i||(e.reset[t]=[e.reset[t],e.reset[t]])}var s={duration:0,queue:!1};f&&(s.complete=p),r.animate(n,e.reset,s)}else f&&p()},"hidden"===a.visibility&&(S.visibility=a.visibility)),r.animate(n,g,S)}},r},r.RegisterEffect.packagedEffects={"callout.bounce":{defaultDuration:550,calls:[[{translateY:-30},.25],[{translateY:0},.125],[{translateY:-15},.125],[{translateY:0},.25]]},"callout.shake":{defaultDuration:800,calls:[[{translateX:-11},.125],[{translateX:11},.125],[{translateX:-11},.125],[{translateX:11},.125],[{translateX:-11},.125],[{translateX:11},.125],[{translateX:-11},.125],[{translateX:0},.125]]},"callout.flash":{defaultDuration:1100,calls:[[{opacity:[0,"easeInOutQuad",1]},.25],[{opacity:[1,"easeInOutQuad"]},.25],[{opacity:[0,"easeInOutQuad"]},.25],[{opacity:[1,"easeInOutQuad"]},.25]]},"callout.pulse":{defaultDuration:825,calls:[[{scaleX:1.1,scaleY:1.1},.5,{easing:"easeInExpo"}],[{scaleX:1,scaleY:1},.5]]},"callout.swing":{defaultDuration:950,calls:[[{rotateZ:15},.2],[{rotateZ:-10},.2],[{rotateZ:5},.2],[{rotateZ:-5},.2],[{rotateZ:0},.2]]},"callout.tada":{defaultDuration:1e3,calls:[[{scaleX:.9,scaleY:.9,rotateZ:-3},.1],[{scaleX:1.1,scaleY:1.1,rotateZ:3},.1],[{scaleX:1.1,scaleY:1.1,rotateZ:-3},.1],["reverse",.125],["reverse",.125],["reverse",.125],["reverse",.125],["reverse",.125],[{scaleX:1,scaleY:1,rotateZ:0},.2]]},"transition.fadeIn":{defaultDuration:500,calls:[[{opacity:[1,0]}]]},"transition.fadeOut":{defaultDuration:500,calls:[[{opacity:[0,1]}]]},"transition.flipXIn":{defaultDuration:700,calls:[[{opacity:[1,0],transformPerspective:[800,800],rotateY:[0,-55]}]],reset:{transformPerspective:0}},"transition.flipXOut":{defaultDuration:700,calls:[[{opacity:[0,1],transformPerspective:[800,800],rotateY:55}]],reset:{transformPerspective:0,rotateY:0}},"transition.flipYIn":{defaultDuration:800,calls:[[{opacity:[1,0],transformPerspective:[800,800],rotateX:[0,-45]}]],reset:{transformPerspective:0}},"transition.flipYOut":{defaultDuration:800,calls:[[{opacity:[0,1],transformPerspective:[800,800],rotateX:25}]],reset:{transformPerspective:0,rotateX:0}},"transition.flipBounceXIn":{defaultDuration:900,calls:[[{opacity:[.725,0],transformPerspective:[400,400],rotateY:[-10,90]},.5],[{opacity:.8,rotateY:10},.25],[{opacity:1,rotateY:0},.25]],reset:{transformPerspective:0}},"transition.flipBounceXOut":{defaultDuration:800,calls:[[{opacity:[.9,1],transformPerspective:[400,400],rotateY:-10},.5],[{opacity:0,rotateY:90},.5]],reset:{transformPerspective:0,rotateY:0}},"transition.flipBounceYIn":{defaultDuration:850,calls:[[{opacity:[.725,0],transformPerspective:[400,400],rotateX:[-10,90]},.5],[{opacity:.8,rotateX:10},.25],[{opacity:1,rotateX:0},.25]],reset:{transformPerspective:0}},"transition.flipBounceYOut":{defaultDuration:800,calls:[[{opacity:[.9,1],transformPerspective:[400,400],rotateX:-15},.5],[{opacity:0,rotateX:90},.5]],reset:{transformPerspective:0,rotateX:0}},"transition.swoopIn":{defaultDuration:850,calls:[[{opacity:[1,0],transformOriginX:["100%","50%"],transformOriginY:["100%","100%"],scaleX:[1,0],scaleY:[1,0],translateX:[0,-700],translateZ:0}]],reset:{transformOriginX:"50%",transformOriginY:"50%"}},"transition.swoopOut":{defaultDuration:850,calls:[[{opacity:[0,1],transformOriginX:["50%","100%"],transformOriginY:["100%","100%"],scaleX:0,scaleY:0,translateX:-700,translateZ:0}]],reset:{transformOriginX:"50%",transformOriginY:"50%",scaleX:1,scaleY:1,translateX:0}},"transition.whirlIn":{defaultDuration:850,calls:[[{opacity:[1,0],transformOriginX:["50%","50%"],transformOriginY:["50%","50%"],scaleX:[1,0],scaleY:[1,0],rotateY:[0,160]},1,{easing:"easeInOutSine"}]]},"transition.whirlOut":{defaultDuration:750,calls:[[{opacity:[0,"easeInOutQuint",1],transformOriginX:["50%","50%"],transformOriginY:["50%","50%"],scaleX:0,scaleY:0,rotateY:160},1,{easing:"swing"}]],reset:{scaleX:1,scaleY:1,rotateY:0}},"transition.shrinkIn":{defaultDuration:750,calls:[[{opacity:[1,0],transformOriginX:["50%","50%"],transformOriginY:["50%","50%"],scaleX:[1,1.5],scaleY:[1,1.5],translateZ:0}]]},"transition.shrinkOut":{defaultDuration:600,calls:[[{opacity:[0,1],transformOriginX:["50%","50%"],transformOriginY:["50%","50%"],scaleX:1.3,scaleY:1.3,translateZ:0}]],reset:{scaleX:1,scaleY:1}},"transition.expandIn":{defaultDuration:700,calls:[[{opacity:[1,0],transformOriginX:["50%","50%"],transformOriginY:["50%","50%"],scaleX:[1,.625],scaleY:[1,.625],translateZ:0}]]},"transition.expandOut":{defaultDuration:700,calls:[[{opacity:[0,1],transformOriginX:["50%","50%"],transformOriginY:["50%","50%"],scaleX:.5,scaleY:.5,translateZ:0}]],reset:{scaleX:1,scaleY:1}},"transition.bounceIn":{defaultDuration:800,calls:[[{opacity:[1,0],scaleX:[1.05,.3],scaleY:[1.05,.3]},.4],[{scaleX:.9,scaleY:.9,translateZ:0},.2],[{scaleX:1,scaleY:1},.5]]},"transition.bounceOut":{defaultDuration:800,calls:[[{scaleX:.95,scaleY:.95},.35],[{scaleX:1.1,scaleY:1.1,translateZ:0},.35],[{opacity:[0,1],scaleX:.3,scaleY:.3},.3]],reset:{scaleX:1,scaleY:1}},"transition.bounceUpIn":{defaultDuration:800,calls:[[{opacity:[1,0],translateY:[-30,1e3]},.6,{easing:"easeOutCirc"}],[{translateY:10},.2],[{translateY:0},.2]]},"transition.bounceUpOut":{defaultDuration:1e3,calls:[[{translateY:20},.2],[{opacity:[0,"easeInCirc",1],translateY:-1e3},.8]],reset:{translateY:0}},"transition.bounceDownIn":{defaultDuration:800,calls:[[{opacity:[1,0],translateY:[30,-1e3]},.6,{easing:"easeOutCirc"}],[{translateY:-10},.2],[{translateY:0},.2]]},"transition.bounceDownOut":{defaultDuration:1e3,calls:[[{translateY:-20},.2],[{opacity:[0,"easeInCirc",1],translateY:1e3},.8]],reset:{translateY:0}},"transition.bounceLeftIn":{defaultDuration:750,calls:[[{opacity:[1,0],translateX:[30,-1250]},.6,{easing:"easeOutCirc"}],[{translateX:-10},.2],[{translateX:0},.2]]},"transition.bounceLeftOut":{defaultDuration:750,calls:[[{translateX:30},.2],[{opacity:[0,"easeInCirc",1],translateX:-1250},.8]],reset:{translateX:0}},"transition.bounceRightIn":{defaultDuration:750,calls:[[{opacity:[1,0],translateX:[-30,1250]},.6,{easing:"easeOutCirc"}],[{translateX:10},.2],[{translateX:0},.2]]},"transition.bounceRightOut":{defaultDuration:750,calls:[[{translateX:-30},.2],[{opacity:[0,"easeInCirc",1],translateX:1250},.8]],reset:{translateX:0}},"transition.slideUpIn":{defaultDuration:900,calls:[[{opacity:[1,0],translateY:[0,20],translateZ:0}]]},"transition.slideUpOut":{defaultDuration:900,calls:[[{opacity:[0,1],translateY:-20,translateZ:0}]],reset:{translateY:0}},"transition.slideDownIn":{defaultDuration:900,calls:[[{opacity:[1,0],translateY:[0,-20],translateZ:0}]]},"transition.slideDownOut":{defaultDuration:900,calls:[[{opacity:[0,1],translateY:20,translateZ:0}]],reset:{translateY:0}},"transition.slideLeftIn":{defaultDuration:1e3,calls:[[{opacity:[1,0],translateX:[0,-20],translateZ:0}]]},"transition.slideLeftOut":{defaultDuration:1050,calls:[[{opacity:[0,1],translateX:-20,translateZ:0}]],reset:{translateX:0}},"transition.slideRightIn":{defaultDuration:1e3,calls:[[{opacity:[1,0],translateX:[0,20],translateZ:0}]]},"transition.slideRightOut":{defaultDuration:1050,calls:[[{opacity:[0,1],translateX:20,translateZ:0}]],reset:{translateX:0}},"transition.slideUpBigIn":{defaultDuration:850,calls:[[{opacity:[1,0],translateY:[0,75],translateZ:0}]]},"transition.slideUpBigOut":{defaultDuration:800,calls:[[{opacity:[0,1],translateY:-75,translateZ:0}]],reset:{translateY:0}},"transition.slideDownBigIn":{defaultDuration:850,calls:[[{opacity:[1,0],translateY:[0,-75],translateZ:0}]]},"transition.slideDownBigOut":{defaultDuration:800,calls:[[{opacity:[0,1],translateY:75,translateZ:0}]],reset:{translateY:0}},"transition.slideLeftBigIn":{defaultDuration:800,calls:[[{opacity:[1,0],translateX:[0,-75],translateZ:0}]]},"transition.slideLeftBigOut":{defaultDuration:750,calls:[[{opacity:[0,1],translateX:-75,translateZ:0}]],reset:{translateX:0}},"transition.slideRightBigIn":{defaultDuration:800,calls:[[{opacity:[1,0],translateX:[0,75],translateZ:0}]]},"transition.slideRightBigOut":{defaultDuration:750,calls:[[{opacity:[0,1],translateX:75,translateZ:0}]],reset:{translateX:0}},"transition.perspectiveUpIn":{defaultDuration:800,calls:[[{opacity:[1,0],transformPerspective:[800,800],transformOriginX:[0,0],transformOriginY:["100%","100%"],rotateX:[0,-180]}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%"}},"transition.perspectiveUpOut":{defaultDuration:850,calls:[[{opacity:[0,1],transformPerspective:[800,800],transformOriginX:[0,0],transformOriginY:["100%","100%"],rotateX:-180}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%",rotateX:0}},"transition.perspectiveDownIn":{defaultDuration:800,calls:[[{opacity:[1,0],transformPerspective:[800,800],transformOriginX:[0,0],transformOriginY:[0,0],rotateX:[0,180]}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%"}},"transition.perspectiveDownOut":{defaultDuration:850,calls:[[{opacity:[0,1],transformPerspective:[800,800],transformOriginX:[0,0],transformOriginY:[0,0],rotateX:180}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%",rotateX:0}},"transition.perspectiveLeftIn":{defaultDuration:950,calls:[[{opacity:[1,0],transformPerspective:[2e3,2e3],transformOriginX:[0,0],transformOriginY:[0,0],rotateY:[0,-180]}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%"}},"transition.perspectiveLeftOut":{defaultDuration:950,calls:[[{opacity:[0,1],transformPerspective:[2e3,2e3],transformOriginX:[0,0],transformOriginY:[0,0],rotateY:-180}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%",rotateY:0}},"transition.perspectiveRightIn":{defaultDuration:950,calls:[[{opacity:[1,0],transformPerspective:[2e3,2e3],transformOriginX:["100%","100%"],transformOriginY:[0,0],rotateY:[0,180]}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%"}},"transition.perspectiveRightOut":{defaultDuration:950,calls:[[{opacity:[0,1],transformPerspective:[2e3,2e3],transformOriginX:["100%","100%"],transformOriginY:[0,0],rotateY:180}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%",rotateY:0}}};for(var u in r.RegisterEffect.packagedEffects)r.RegisterEffect(u,r.RegisterEffect.packagedEffects[u]);r.RunSequence=function(t){var e=s.extend(!0,[],t);e.length>1&&(s.each(e.reverse(),function(t,i){var o=e[t+1];if(o){var n=i.o||i.options,a=o.o||o.options,l=n&&n.sequenceQueue===!1?"begin":"complete",c=a&&a[l],u={};u[l]=function(){var t=o.e||o.elements,e=t.nodeType?[t]:t;c&&c.call(e,e),r(i)},o.o?o.o=s.extend({},a,u):o.options=s.extend({},a,u)}}),e.reverse()),r(e[0])}}(window.jQuery||window.Zepto||window,window,document)})},679:function(t,e,i){var o,n,r;!function(s){"use strict";n=[i(8)],o=s,r="function"==typeof o?o.apply(e,n):o,!(void 0!==r&&(t.exports=r))}(function(t){"use strict";var e=window.Slick||{};e=function(){function e(e,o){var n,r=this;r.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:t(e),appendDots:t(e),arrows:!0,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,i){return t('<button type="button" data-role="none" role="button" tabindex="0" />').text(i+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},r.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},t.extend(r,r.initials),r.activeBreakpoint=null,r.animType=null,r.animProp=null,r.breakpoints=[],r.breakpointSettings=[],r.cssTransitions=!1,r.focussed=!1,r.interrupted=!1,r.hidden="hidden",r.paused=!0,r.positionProp=null,r.respondTo=null,r.rowCount=1,r.shouldClick=!0,r.$slider=t(e),r.$slidesCache=null,r.transformType=null,r.transitionType=null,r.visibilityChange="visibilitychange",r.windowWidth=0,r.windowTimer=null,n=t(e).data("slick")||{},r.options=t.extend({},r.defaults,o,n),r.currentSlide=r.options.initialSlide,r.originalSettings=r.options,"undefined"!=typeof document.mozHidden?(r.hidden="mozHidden",r.visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(r.hidden="webkitHidden",r.visibilityChange="webkitvisibilitychange"),r.autoPlay=t.proxy(r.autoPlay,r),r.autoPlayClear=t.proxy(r.autoPlayClear,r),r.autoPlayIterator=t.proxy(r.autoPlayIterator,r),r.changeSlide=t.proxy(r.changeSlide,r),r.clickHandler=t.proxy(r.clickHandler,r),r.selectHandler=t.proxy(r.selectHandler,r),r.setPosition=t.proxy(r.setPosition,r),r.swipeHandler=t.proxy(r.swipeHandler,r),r.dragHandler=t.proxy(r.dragHandler,r),r.keyHandler=t.proxy(r.keyHandler,r),r.instanceUid=i++,r.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,r.registerBreakpoints(),r.init(!0)}var i=0;return e}(),e.prototype.activateADA=function(){var t=this;t.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,i,o){var n=this;if("boolean"==typeof i)o=i,i=null;else if(i<0||i>=n.slideCount)return!1;n.unload(),"number"==typeof i?0===i&&0===n.$slides.length?t(e).appendTo(n.$slideTrack):o?t(e).insertBefore(n.$slides.eq(i)):t(e).insertAfter(n.$slides.eq(i)):o===!0?t(e).prependTo(n.$slideTrack):t(e).appendTo(n.$slideTrack),n.$slides=n.$slideTrack.children(this.options.slide),n.$slideTrack.children(this.options.slide).detach(),n.$slideTrack.append(n.$slides),n.$slides.each(function(e,i){t(i).attr("data-slick-index",e)}),n.$slidesCache=n.$slides,n.reinit()},e.prototype.animateHeight=function(){var t=this;if(1===t.options.slidesToShow&&t.options.adaptiveHeight===!0&&t.options.vertical===!1){var e=t.$slides.eq(t.currentSlide).outerHeight(!0);t.$list.animate({height:e},t.options.speed)}},e.prototype.animateSlide=function(e,i){var o={},n=this;n.animateHeight(),n.options.rtl===!0&&n.options.vertical===!1&&(e=-e),n.transformsEnabled===!1?n.options.vertical===!1?n.$slideTrack.animate({left:e},n.options.speed,n.options.easing,i):n.$slideTrack.animate({top:e},n.options.speed,n.options.easing,i):n.cssTransitions===!1?(n.options.rtl===!0&&(n.currentLeft=-n.currentLeft),t({animStart:n.currentLeft}).animate({animStart:e},{duration:n.options.speed,easing:n.options.easing,step:function(t){t=Math.ceil(t),n.options.vertical===!1?(o[n.animType]="translate("+t+"px, 0px)",n.$slideTrack.css(o)):(o[n.animType]="translate(0px,"+t+"px)",n.$slideTrack.css(o))},complete:function(){i&&i.call()}})):(n.applyTransition(),e=Math.ceil(e),n.options.vertical===!1?o[n.animType]="translate3d("+e+"px, 0px, 0px)":o[n.animType]="translate3d(0px,"+e+"px, 0px)",n.$slideTrack.css(o),i&&setTimeout(function(){n.disableTransition(),i.call()},n.options.speed))},e.prototype.getNavTarget=function(){var e=this,i=e.options.asNavFor;return i&&null!==i&&(i=t(i).not(e.$slider)),i},e.prototype.asNavFor=function(e){var i=this,o=i.getNavTarget();null!==o&&"object"==typeof o&&o.each(function(){var i=t(this).slick("getSlick");i.unslicked||i.slideHandler(e,!0)})},e.prototype.applyTransition=function(t){var e=this,i={};e.options.fade===!1?i[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:i[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,e.options.fade===!1?e.$slideTrack.css(i):e.$slides.eq(t).css(i)},e.prototype.autoPlay=function(){var t=this;t.autoPlayClear(),t.slideCount>t.options.slidesToShow&&(t.autoPlayTimer=setInterval(t.autoPlayIterator,t.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var t=this;t.autoPlayTimer&&clearInterval(t.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var t=this,e=t.currentSlide+t.options.slidesToScroll;t.paused||t.interrupted||t.focussed||(t.options.infinite===!1&&(1===t.direction&&t.currentSlide+1===t.slideCount-1?t.direction=0:0===t.direction&&(e=t.currentSlide-t.options.slidesToScroll,t.currentSlide-1===0&&(t.direction=1))),t.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;e.options.arrows===!0&&(e.$prevArrow=t(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=t(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),e.options.infinite!==!0&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,i,o=this;if(o.options.dots===!0&&o.slideCount>o.options.slidesToShow){for(o.$slider.addClass("slick-dotted"),i=t("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)i.append(t("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=i.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active").attr("aria-hidden","false")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,i){t(i).attr("data-slick-index",e).data("originalStyling",t(i).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?t('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),e.options.centerMode!==!0&&e.options.swipeToSlide!==!0||(e.options.slidesToScroll=1),t("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.options.draggable===!0&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var t,e,i,o,n,r,s,a=this;if(o=document.createDocumentFragment(),r=a.$slider.children(),a.options.rows>1){for(s=a.options.slidesPerRow*a.options.rows,n=Math.ceil(r.length/s),t=0;t<n;t++){var l=document.createElement("div");for(e=0;e<a.options.rows;e++){var c=document.createElement("div");for(i=0;i<a.options.slidesPerRow;i++){var u=t*s+(e*a.options.slidesPerRow+i);r.get(u)&&c.appendChild(r.get(u))}l.appendChild(c)}o.appendChild(l)}a.$slider.empty().append(o),a.$slider.children().children().children().css({width:100/a.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,i){var o,n,r,s=this,a=!1,l=s.$slider.width(),c=window.innerWidth||t(window).width();if("window"===s.respondTo?r=c:"slider"===s.respondTo?r=l:"min"===s.respondTo&&(r=Math.min(c,l)),s.options.responsive&&s.options.responsive.length&&null!==s.options.responsive){n=null;for(o in s.breakpoints)s.breakpoints.hasOwnProperty(o)&&(s.originalSettings.mobileFirst===!1?r<s.breakpoints[o]&&(n=s.breakpoints[o]):r>s.breakpoints[o]&&(n=s.breakpoints[o]));null!==n?null!==s.activeBreakpoint?(n!==s.activeBreakpoint||i)&&(s.activeBreakpoint=n,"unslick"===s.breakpointSettings[n]?s.unslick(n):(s.options=t.extend({},s.originalSettings,s.breakpointSettings[n]),e===!0&&(s.currentSlide=s.options.initialSlide),s.refresh(e)),a=n):(s.activeBreakpoint=n,"unslick"===s.breakpointSettings[n]?s.unslick(n):(s.options=t.extend({},s.originalSettings,s.breakpointSettings[n]),e===!0&&(s.currentSlide=s.options.initialSlide),s.refresh(e)),a=n):null!==s.activeBreakpoint&&(s.activeBreakpoint=null,s.options=s.originalSettings,e===!0&&(s.currentSlide=s.options.initialSlide),s.refresh(e),a=n),e||a===!1||s.$slider.trigger("breakpoint",[s,a])}},e.prototype.changeSlide=function(e,i){var o,n,r,s=this,a=t(e.currentTarget);switch(a.is("a")&&e.preventDefault(),a.is("li")||(a=a.closest("li")),r=s.slideCount%s.options.slidesToScroll!==0,o=r?0:(s.slideCount-s.currentSlide)%s.options.slidesToScroll,e.data.message){case"previous":n=0===o?s.options.slidesToScroll:s.options.slidesToShow-o,s.slideCount>s.options.slidesToShow&&s.slideHandler(s.currentSlide-n,!1,i);break;case"next":n=0===o?s.options.slidesToScroll:o,s.slideCount>s.options.slidesToShow&&s.slideHandler(s.currentSlide+n,!1,i);break;case"index":var l=0===e.data.index?0:e.data.index||a.index()*s.options.slidesToScroll;s.slideHandler(s.checkNavigable(l),!1,i),a.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(t){var e,i,o=this;if(e=o.getNavigableIndexes(),i=0,t>e[e.length-1])t=e[e.length-1];else for(var n in e){if(t<e[n]){t=i;break}i=e[n]}return t},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&t("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",t.proxy(e.interrupt,e,!0)).off("mouseleave.slick",t.proxy(e.interrupt,e,!1)),e.$slider.off("focus.slick blur.slick"),e.options.arrows===!0&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide)),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),t(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),e.options.accessibility===!0&&e.$list.off("keydown.slick",e.keyHandler),e.options.focusOnSelect===!0&&t(e.$slideTrack).children().off("click.slick",e.selectHandler),t(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),t(window).off("resize.slick.slick-"+e.instanceUid,e.resize),t("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),t(window).off("load.slick.slick-"+e.instanceUid,e.setPosition),t(document).off("ready.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",t.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",t.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var t,e=this;e.options.rows>1&&(t=e.$slides.children().children(),t.removeAttr("style"),e.$slider.empty().append(t))},e.prototype.clickHandler=function(t){var e=this;e.shouldClick===!1&&(t.stopImmediatePropagation(),t.stopPropagation(),t.preventDefault())},e.prototype.destroy=function(e){
var i=this;i.autoPlayClear(),i.touchObject={},i.cleanUpEvents(),t(".slick-cloned",i.$slider).detach(),i.$dots&&i.$dots.remove(),i.$prevArrow&&i.$prevArrow.length&&(i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),i.htmlExpr.test(i.options.prevArrow)&&i.$prevArrow.remove()),i.$nextArrow&&i.$nextArrow.length&&(i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),i.htmlExpr.test(i.options.nextArrow)&&i.$nextArrow.remove()),i.$slides&&(i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){t(this).attr("style",t(this).data("originalStyling"))}),i.$slideTrack.children(this.options.slide).detach(),i.$slideTrack.detach(),i.$list.detach(),i.$slider.append(i.$slides)),i.cleanUpRows(),i.$slider.removeClass("slick-slider"),i.$slider.removeClass("slick-initialized"),i.$slider.removeClass("slick-dotted"),i.unslicked=!0,e||i.$slider.trigger("destroy",[i])},e.prototype.disableTransition=function(t){var e=this,i={};i[e.transitionType]="",e.options.fade===!1?e.$slideTrack.css(i):e.$slides.eq(t).css(i)},e.prototype.fadeSlide=function(t,e){var i=this;i.cssTransitions===!1?(i.$slides.eq(t).css({zIndex:i.options.zIndex}),i.$slides.eq(t).animate({opacity:1},i.options.speed,i.options.easing,e)):(i.applyTransition(t),i.$slides.eq(t).css({opacity:1,zIndex:i.options.zIndex}),e&&setTimeout(function(){i.disableTransition(t),e.call()},i.options.speed))},e.prototype.fadeSlideOut=function(t){var e=this;e.cssTransitions===!1?e.$slides.eq(t).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(t),e.$slides.eq(t).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(t){var e=this;null!==t&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(t).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*:not(.slick-arrow)",function(i){i.stopImmediatePropagation();var o=t(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=o.is(":focus"),e.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){var t=this;return t.currentSlide},e.prototype.getDotCount=function(){var t=this,e=0,i=0,o=0;if(t.options.infinite===!0)for(;e<t.slideCount;)++o,e=i+t.options.slidesToScroll,i+=t.options.slidesToScroll<=t.options.slidesToShow?t.options.slidesToScroll:t.options.slidesToShow;else if(t.options.centerMode===!0)o=t.slideCount;else if(t.options.asNavFor)for(;e<t.slideCount;)++o,e=i+t.options.slidesToScroll,i+=t.options.slidesToScroll<=t.options.slidesToShow?t.options.slidesToScroll:t.options.slidesToShow;else o=1+Math.ceil((t.slideCount-t.options.slidesToShow)/t.options.slidesToScroll);return o-1},e.prototype.getLeft=function(t){var e,i,o,n=this,r=0;return n.slideOffset=0,i=n.$slides.first().outerHeight(!0),n.options.infinite===!0?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,r=i*n.options.slidesToShow*-1),n.slideCount%n.options.slidesToScroll!==0&&t+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(t>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(t-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(t-n.slideCount))*i*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*i*-1))):t+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(t+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(t+n.options.slidesToShow-n.slideCount)*i),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),n.options.centerMode===!0&&n.options.infinite===!0?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:n.options.centerMode===!0&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=n.options.vertical===!1?t*n.slideWidth*-1+n.slideOffset:t*i*-1+r,n.options.variableWidth===!0&&(o=n.slideCount<=n.options.slidesToShow||n.options.infinite===!1?n.$slideTrack.children(".slick-slide").eq(t):n.$slideTrack.children(".slick-slide").eq(t+n.options.slidesToShow),e=n.options.rtl===!0?o[0]?(n.$slideTrack.width()-o[0].offsetLeft-o.width())*-1:0:o[0]?o[0].offsetLeft*-1:0,n.options.centerMode===!0&&(o=n.slideCount<=n.options.slidesToShow||n.options.infinite===!1?n.$slideTrack.children(".slick-slide").eq(t):n.$slideTrack.children(".slick-slide").eq(t+n.options.slidesToShow+1),e=n.options.rtl===!0?o[0]?(n.$slideTrack.width()-o[0].offsetLeft-o.width())*-1:0:o[0]?o[0].offsetLeft*-1:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(t){var e=this;return e.options[t]},e.prototype.getNavigableIndexes=function(){var t,e=this,i=0,o=0,n=[];for(e.options.infinite===!1?t=e.slideCount:(i=e.options.slidesToScroll*-1,o=e.options.slidesToScroll*-1,t=2*e.slideCount);i<t;)n.push(i),i=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return n},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,i,o,n=this;return o=n.options.centerMode===!0?n.slideWidth*Math.floor(n.options.slidesToShow/2):0,n.options.swipeToSlide===!0?(n.$slideTrack.find(".slick-slide").each(function(e,r){if(r.offsetLeft-o+t(r).outerWidth()/2>n.swipeLeft*-1)return i=r,!1}),e=Math.abs(t(i).attr("data-slick-index")-n.currentSlide)||1):n.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(t,e){var i=this;i.changeSlide({data:{message:"index",index:parseInt(t)}},e)},e.prototype.init=function(e){var i=this;t(i.$slider).hasClass("slick-initialized")||(t(i.$slider).addClass("slick-initialized"),i.buildRows(),i.buildOut(),i.setProps(),i.startLoad(),i.loadSlider(),i.initializeEvents(),i.updateArrows(),i.updateDots(),i.checkResponsive(!0),i.focusHandler()),e&&i.$slider.trigger("init",[i]),i.options.accessibility===!0&&i.initADA(),i.options.autoplay&&(i.paused=!1,i.autoPlay())},e.prototype.initADA=function(){var e=this;e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),e.$slideTrack.attr("role","listbox"),e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(i){t(this).attr({role:"option","aria-describedby":"slick-slide"+e.instanceUid+i})}),null!==e.$dots&&e.$dots.attr("role","tablist").find("li").each(function(i){t(this).attr({role:"presentation","aria-selected":"false","aria-controls":"navigation"+e.instanceUid+i,id:"slick-slide"+e.instanceUid+i})}).first().attr("aria-selected","true").end().find("button").attr("role","button").end().closest("div").attr("role","toolbar"),e.activateADA()},e.prototype.initArrowEvents=function(){var t=this;t.options.arrows===!0&&t.slideCount>t.options.slidesToShow&&(t.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},t.changeSlide),t.$nextArrow.off("click.slick").on("click.slick",{message:"next"},t.changeSlide))},e.prototype.initDotEvents=function(){var e=this;e.options.dots===!0&&e.slideCount>e.options.slidesToShow&&t("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),e.options.dots===!0&&e.options.pauseOnDotsHover===!0&&t("li",e.$dots).on("mouseenter.slick",t.proxy(e.interrupt,e,!0)).on("mouseleave.slick",t.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",t.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",t.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),t(document).on(e.visibilityChange,t.proxy(e.visibility,e)),e.options.accessibility===!0&&e.$list.on("keydown.slick",e.keyHandler),e.options.focusOnSelect===!0&&t(e.$slideTrack).children().on("click.slick",e.selectHandler),t(window).on("orientationchange.slick.slick-"+e.instanceUid,t.proxy(e.orientationChange,e)),t(window).on("resize.slick.slick-"+e.instanceUid,t.proxy(e.resize,e)),t("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),t(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),t(document).on("ready.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.initUI=function(){var t=this;t.options.arrows===!0&&t.slideCount>t.options.slidesToShow&&(t.$prevArrow.show(),t.$nextArrow.show()),t.options.dots===!0&&t.slideCount>t.options.slidesToShow&&t.$dots.show()},e.prototype.keyHandler=function(t){var e=this;t.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===t.keyCode&&e.options.accessibility===!0?e.changeSlide({data:{message:e.options.rtl===!0?"next":"previous"}}):39===t.keyCode&&e.options.accessibility===!0&&e.changeSlide({data:{message:e.options.rtl===!0?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){t("img[data-lazy]",e).each(function(){var e=t(this),i=t(this).attr("data-lazy"),o=document.createElement("img");o.onload=function(){e.animate({opacity:0},100,function(){e.attr("src",i).animate({opacity:1},200,function(){e.removeAttr("data-lazy").removeClass("slick-loading")}),s.$slider.trigger("lazyLoaded",[s,e,i])})},o.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),s.$slider.trigger("lazyLoadError",[s,e,i])},o.src=i})}var i,o,n,r,s=this;s.options.centerMode===!0?s.options.infinite===!0?(n=s.currentSlide+(s.options.slidesToShow/2+1),r=n+s.options.slidesToShow+2):(n=Math.max(0,s.currentSlide-(s.options.slidesToShow/2+1)),r=2+(s.options.slidesToShow/2+1)+s.currentSlide):(n=s.options.infinite?s.options.slidesToShow+s.currentSlide:s.currentSlide,r=Math.ceil(n+s.options.slidesToShow),s.options.fade===!0&&(n>0&&n--,r<=s.slideCount&&r++)),i=s.$slider.find(".slick-slide").slice(n,r),e(i),s.slideCount<=s.options.slidesToShow?(o=s.$slider.find(".slick-slide"),e(o)):s.currentSlide>=s.slideCount-s.options.slidesToShow?(o=s.$slider.find(".slick-cloned").slice(0,s.options.slidesToShow),e(o)):0===s.currentSlide&&(o=s.$slider.find(".slick-cloned").slice(s.options.slidesToShow*-1),e(o))},e.prototype.loadSlider=function(){var t=this;t.setPosition(),t.$slideTrack.css({opacity:1}),t.$slider.removeClass("slick-loading"),t.initUI(),"progressive"===t.options.lazyLoad&&t.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){var t=this;t.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var t=this;t.checkResponsive(),t.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var t=this;t.autoPlayClear(),t.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var t=this;t.autoPlay(),t.options.autoplay=!0,t.paused=!1,t.focussed=!1,t.interrupted=!1},e.prototype.postSlide=function(t){var e=this;e.unslicked||(e.$slider.trigger("afterChange",[e,t]),e.animating=!1,e.setPosition(),e.swipeLeft=null,e.options.autoplay&&e.autoPlay(),e.options.accessibility===!0&&e.initADA())},e.prototype.prev=e.prototype.slickPrev=function(){var t=this;t.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(t){t.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var i,o,n,r=this,s=t("img[data-lazy]",r.$slider);s.length?(i=s.first(),o=i.attr("data-lazy"),n=document.createElement("img"),n.onload=function(){i.attr("src",o).removeAttr("data-lazy").removeClass("slick-loading"),r.options.adaptiveHeight===!0&&r.setPosition(),r.$slider.trigger("lazyLoaded",[r,i,o]),r.progressiveLazyLoad()},n.onerror=function(){e<3?setTimeout(function(){r.progressiveLazyLoad(e+1)},500):(i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),r.$slider.trigger("lazyLoadError",[r,i,o]),r.progressiveLazyLoad())},n.src=o):r.$slider.trigger("allImagesLoaded",[r])},e.prototype.refresh=function(e){var i,o,n=this;o=n.slideCount-n.options.slidesToShow,!n.options.infinite&&n.currentSlide>o&&(n.currentSlide=o),n.slideCount<=n.options.slidesToShow&&(n.currentSlide=0),i=n.currentSlide,n.destroy(!0),t.extend(n,n.initials,{currentSlide:i}),n.init(),e||n.changeSlide({data:{message:"index",index:i}},!1)},e.prototype.registerBreakpoints=function(){var e,i,o,n=this,r=n.options.responsive||null;if("array"===t.type(r)&&r.length){n.respondTo=n.options.respondTo||"window";for(e in r)if(o=n.breakpoints.length-1,i=r[e].breakpoint,r.hasOwnProperty(e)){for(;o>=0;)n.breakpoints[o]&&n.breakpoints[o]===i&&n.breakpoints.splice(o,1),o--;n.breakpoints.push(i),n.breakpointSettings[i]=r[e].settings}n.breakpoints.sort(function(t,e){return n.options.mobileFirst?t-e:e-t})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),e.options.focusOnSelect===!0&&t(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;t(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=t(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(t,e,i){var o=this;return"boolean"==typeof t?(e=t,t=e===!0?0:o.slideCount-1):t=e===!0?--t:t,!(o.slideCount<1||t<0||t>o.slideCount-1)&&(o.unload(),i===!0?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(t).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,void o.reinit())},e.prototype.setCSS=function(t){var e,i,o=this,n={};o.options.rtl===!0&&(t=-t),e="left"==o.positionProp?Math.ceil(t)+"px":"0px",i="top"==o.positionProp?Math.ceil(t)+"px":"0px",n[o.positionProp]=t,o.transformsEnabled===!1?o.$slideTrack.css(n):(n={},o.cssTransitions===!1?(n[o.animType]="translate("+e+", "+i+")",o.$slideTrack.css(n)):(n[o.animType]="translate3d("+e+", "+i+", 0px)",o.$slideTrack.css(n)))},e.prototype.setDimensions=function(){var t=this;t.options.vertical===!1?t.options.centerMode===!0&&t.$list.css({padding:"0px "+t.options.centerPadding}):(t.$list.height(t.$slides.first().outerHeight(!0)*t.options.slidesToShow),t.options.centerMode===!0&&t.$list.css({padding:t.options.centerPadding+" 0px"})),t.listWidth=t.$list.width(),t.listHeight=t.$list.height(),t.options.vertical===!1&&t.options.variableWidth===!1?(t.slideWidth=Math.ceil(t.listWidth/t.options.slidesToShow),t.$slideTrack.width(Math.ceil(t.slideWidth*t.$slideTrack.children(".slick-slide").length))):t.options.variableWidth===!0?t.$slideTrack.width(5e3*t.slideCount):(t.slideWidth=Math.ceil(t.listWidth),t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0)*t.$slideTrack.children(".slick-slide").length)));var e=t.$slides.first().outerWidth(!0)-t.$slides.first().width();t.options.variableWidth===!1&&t.$slideTrack.children(".slick-slide").width(t.slideWidth-e)},e.prototype.setFade=function(){var e,i=this;i.$slides.each(function(o,n){e=i.slideWidth*o*-1,i.options.rtl===!0?t(n).css({position:"relative",right:e,top:0,zIndex:i.options.zIndex-2,opacity:0}):t(n).css({position:"relative",left:e,top:0,zIndex:i.options.zIndex-2,opacity:0})}),i.$slides.eq(i.currentSlide).css({zIndex:i.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var t=this;if(1===t.options.slidesToShow&&t.options.adaptiveHeight===!0&&t.options.vertical===!1){var e=t.$slides.eq(t.currentSlide).outerHeight(!0);t.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,i,o,n,r,s=this,a=!1;if("object"===t.type(arguments[0])?(o=arguments[0],a=arguments[1],r="multiple"):"string"===t.type(arguments[0])&&(o=arguments[0],n=arguments[1],a=arguments[2],"responsive"===arguments[0]&&"array"===t.type(arguments[1])?r="responsive":"undefined"!=typeof arguments[1]&&(r="single")),"single"===r)s.options[o]=n;else if("multiple"===r)t.each(o,function(t,e){s.options[t]=e});else if("responsive"===r)for(i in n)if("array"!==t.type(s.options.responsive))s.options.responsive=[n[i]];else{for(e=s.options.responsive.length-1;e>=0;)s.options.responsive[e].breakpoint===n[i].breakpoint&&s.options.responsive.splice(e,1),e--;s.options.responsive.push(n[i])}a&&(s.unload(),s.reinit())},e.prototype.setPosition=function(){var t=this;t.setDimensions(),t.setHeight(),t.options.fade===!1?t.setCSS(t.getLeft(t.currentSlide)):t.setFade(),t.$slider.trigger("setPosition",[t])},e.prototype.setProps=function(){var t=this,e=document.body.style;t.positionProp=t.options.vertical===!0?"top":"left","top"===t.positionProp?t.$slider.addClass("slick-vertical"):t.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||t.options.useCSS===!0&&(t.cssTransitions=!0),t.options.fade&&("number"==typeof t.options.zIndex?t.options.zIndex<3&&(t.options.zIndex=3):t.options.zIndex=t.defaults.zIndex),void 0!==e.OTransform&&(t.animType="OTransform",t.transformType="-o-transform",t.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(t.animType=!1)),void 0!==e.MozTransform&&(t.animType="MozTransform",t.transformType="-moz-transform",t.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(t.animType=!1)),void 0!==e.webkitTransform&&(t.animType="webkitTransform",t.transformType="-webkit-transform",t.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(t.animType=!1)),void 0!==e.msTransform&&(t.animType="msTransform",t.transformType="-ms-transform",t.transitionType="msTransition",void 0===e.msTransform&&(t.animType=!1)),void 0!==e.transform&&t.animType!==!1&&(t.animType="transform",t.transformType="transform",t.transitionType="transition"),t.transformsEnabled=t.options.useTransform&&null!==t.animType&&t.animType!==!1},e.prototype.setSlideClasses=function(t){var e,i,o,n,r=this;i=r.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),r.$slides.eq(t).addClass("slick-current"),r.options.centerMode===!0?(e=Math.floor(r.options.slidesToShow/2),r.options.infinite===!0&&(t>=e&&t<=r.slideCount-1-e?r.$slides.slice(t-e,t+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=r.options.slidesToShow+t,i.slice(o-e+1,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===t?i.eq(i.length-1-r.options.slidesToShow).addClass("slick-center"):t===r.slideCount-1&&i.eq(r.options.slidesToShow).addClass("slick-center")),r.$slides.eq(t).addClass("slick-center")):t>=0&&t<=r.slideCount-r.options.slidesToShow?r.$slides.slice(t,t+r.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):i.length<=r.options.slidesToShow?i.addClass("slick-active").attr("aria-hidden","false"):(n=r.slideCount%r.options.slidesToShow,o=r.options.infinite===!0?r.options.slidesToShow+t:t,r.options.slidesToShow==r.options.slidesToScroll&&r.slideCount-t<r.options.slidesToShow?i.slice(o-(r.options.slidesToShow-n),o+n).addClass("slick-active").attr("aria-hidden","false"):i.slice(o,o+r.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")),"ondemand"===r.options.lazyLoad&&r.lazyLoad()},e.prototype.setupInfinite=function(){var e,i,o,n=this;if(n.options.fade===!0&&(n.options.centerMode=!1),n.options.infinite===!0&&n.options.fade===!1&&(i=null,n.slideCount>n.options.slidesToShow)){for(o=n.options.centerMode===!0?n.options.slidesToShow+1:n.options.slidesToShow,e=n.slideCount;e>n.slideCount-o;e-=1)i=e-1,t(n.$slides[i]).clone(!0).attr("id","").attr("data-slick-index",i-n.slideCount).prependTo(n.$slideTrack).addClass("slick-cloned");for(e=0;e<o;e+=1)i=e,t(n.$slides[i]).clone(!0).attr("id","").attr("data-slick-index",i+n.slideCount).appendTo(n.$slideTrack).addClass("slick-cloned");n.$slideTrack.find(".slick-cloned").find("[id]").each(function(){t(this).attr("id","")})}},e.prototype.interrupt=function(t){var e=this;t||e.autoPlay(),e.interrupted=t},e.prototype.selectHandler=function(e){var i=this,o=t(e.target).is(".slick-slide")?t(e.target):t(e.target).parents(".slick-slide"),n=parseInt(o.attr("data-slick-index"));return n||(n=0),i.slideCount<=i.options.slidesToShow?(i.setSlideClasses(n),void i.asNavFor(n)):void i.slideHandler(n)},e.prototype.slideHandler=function(t,e,i){var o,n,r,s,a,l=null,c=this;if(e=e||!1,(c.animating!==!0||c.options.waitForAnimate!==!0)&&!(c.options.fade===!0&&c.currentSlide===t||c.slideCount<=c.options.slidesToShow))return e===!1&&c.asNavFor(t),o=t,l=c.getLeft(o),s=c.getLeft(c.currentSlide),c.currentLeft=null===c.swipeLeft?s:c.swipeLeft,c.options.infinite===!1&&c.options.centerMode===!1&&(t<0||t>c.getDotCount()*c.options.slidesToScroll)?void(c.options.fade===!1&&(o=c.currentSlide,i!==!0?c.animateSlide(s,function(){c.postSlide(o)}):c.postSlide(o))):c.options.infinite===!1&&c.options.centerMode===!0&&(t<0||t>c.slideCount-c.options.slidesToScroll)?void(c.options.fade===!1&&(o=c.currentSlide,i!==!0?c.animateSlide(s,function(){c.postSlide(o)}):c.postSlide(o))):(c.options.autoplay&&clearInterval(c.autoPlayTimer),n=o<0?c.slideCount%c.options.slidesToScroll!==0?c.slideCount-c.slideCount%c.options.slidesToScroll:c.slideCount+o:o>=c.slideCount?c.slideCount%c.options.slidesToScroll!==0?0:o-c.slideCount:o,c.animating=!0,c.$slider.trigger("beforeChange",[c,c.currentSlide,n]),r=c.currentSlide,c.currentSlide=n,c.setSlideClasses(c.currentSlide),c.options.asNavFor&&(a=c.getNavTarget(),a=a.slick("getSlick"),a.slideCount<=a.options.slidesToShow&&a.setSlideClasses(c.currentSlide)),c.updateDots(),c.updateArrows(),c.options.fade===!0?(i!==!0?(c.fadeSlideOut(r),c.fadeSlide(n,function(){c.postSlide(n)})):c.postSlide(n),void c.animateHeight()):void(i!==!0?c.animateSlide(l,function(){c.postSlide(n)}):c.postSlide(n)))},e.prototype.startLoad=function(){var t=this;t.options.arrows===!0&&t.slideCount>t.options.slidesToShow&&(t.$prevArrow.hide(),t.$nextArrow.hide()),t.options.dots===!0&&t.slideCount>t.options.slidesToShow&&t.$dots.hide(),t.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var t,e,i,o,n=this;return t=n.touchObject.startX-n.touchObject.curX,e=n.touchObject.startY-n.touchObject.curY,i=Math.atan2(e,t),o=Math.round(180*i/Math.PI),o<0&&(o=360-Math.abs(o)),o<=45&&o>=0?n.options.rtl===!1?"left":"right":o<=360&&o>=315?n.options.rtl===!1?"left":"right":o>=135&&o<=225?n.options.rtl===!1?"right":"left":n.options.verticalSwiping===!0?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(t){var e,i,o=this;if(o.dragging=!1,o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(o.touchObject.edgeHit===!0&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(i=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=i&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,i]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(t){var e=this;if(!(e.options.swipe===!1||"ontouchend"in document&&e.options.swipe===!1||e.options.draggable===!1&&t.type.indexOf("mouse")!==-1))switch(e.touchObject.fingerCount=t.originalEvent&&void 0!==t.originalEvent.touches?t.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,e.options.verticalSwiping===!0&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),t.data.action){case"start":e.swipeStart(t);break;case"move":e.swipeMove(t);break;case"end":e.swipeEnd(t)}},e.prototype.swipeMove=function(t){var e,i,o,n,r,s=this;return r=void 0!==t.originalEvent?t.originalEvent.touches:null,!(!s.dragging||r&&1!==r.length)&&(e=s.getLeft(s.currentSlide),s.touchObject.curX=void 0!==r?r[0].pageX:t.clientX,s.touchObject.curY=void 0!==r?r[0].pageY:t.clientY,s.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(s.touchObject.curX-s.touchObject.startX,2))),s.options.verticalSwiping===!0&&(s.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(s.touchObject.curY-s.touchObject.startY,2)))),i=s.swipeDirection(),"vertical"!==i?(void 0!==t.originalEvent&&s.touchObject.swipeLength>4&&t.preventDefault(),n=(s.options.rtl===!1?1:-1)*(s.touchObject.curX>s.touchObject.startX?1:-1),s.options.verticalSwiping===!0&&(n=s.touchObject.curY>s.touchObject.startY?1:-1),o=s.touchObject.swipeLength,s.touchObject.edgeHit=!1,s.options.infinite===!1&&(0===s.currentSlide&&"right"===i||s.currentSlide>=s.getDotCount()&&"left"===i)&&(o=s.touchObject.swipeLength*s.options.edgeFriction,s.touchObject.edgeHit=!0),s.options.vertical===!1?s.swipeLeft=e+o*n:s.swipeLeft=e+o*(s.$list.height()/s.listWidth)*n,s.options.verticalSwiping===!0&&(s.swipeLeft=e+o*n),s.options.fade!==!0&&s.options.touchMove!==!1&&(s.animating===!0?(s.swipeLeft=null,!1):void s.setCSS(s.swipeLeft))):void 0)},e.prototype.swipeStart=function(t){var e,i=this;return i.interrupted=!0,1!==i.touchObject.fingerCount||i.slideCount<=i.options.slidesToShow?(i.touchObject={},!1):(void 0!==t.originalEvent&&void 0!==t.originalEvent.touches&&(e=t.originalEvent.touches[0]),i.touchObject.startX=i.touchObject.curX=void 0!==e?e.pageX:t.clientX,i.touchObject.startY=i.touchObject.curY=void 0!==e?e.pageY:t.clientY,void(i.dragging=!0))},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var t=this;null!==t.$slidesCache&&(t.unload(),t.$slideTrack.children(this.options.slide).detach(),t.$slidesCache.appendTo(t.$slideTrack),t.reinit())},e.prototype.unload=function(){var e=this;t(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(t){var e=this;e.$slider.trigger("unslick",[e,t]),e.destroy()},e.prototype.updateArrows=function(){var t,e=this;t=Math.floor(e.options.slidesToShow/2),e.options.arrows===!0&&e.slideCount>e.options.slidesToShow&&!e.options.infinite&&(e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===e.currentSlide?(e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):e.currentSlide>=e.slideCount-e.options.slidesToShow&&e.options.centerMode===!1?(e.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):e.currentSlide>=e.slideCount-1&&e.options.centerMode===!0&&(e.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var t=this;null!==t.$dots&&(t.$dots.find("li").removeClass("slick-active").attr("aria-hidden","true"),t.$dots.find("li").eq(Math.floor(t.currentSlide/t.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden","false"))},e.prototype.visibility=function(){var t=this;t.options.autoplay&&(document[t.hidden]?t.interrupted=!0:t.interrupted=!1)},t.fn.slick=function(){var t,i,o=this,n=arguments[0],r=Array.prototype.slice.call(arguments,1),s=o.length;for(t=0;t<s;t++)if("object"==typeof n||"undefined"==typeof n?o[t].slick=new e(o[t],n):i=o[t].slick[n].apply(o[t].slick,r),"undefined"!=typeof i)return i;return o}})},680:function(t,e,i){var o,n,r,o,s,n,a,n,l,n,o,c,n,o,u,n,d,n,p,n,f,n,h,n,o,m,n,o,g,n,o,v,n,o,y,n,o,w,n,o,S,n,r;/*!
	 * Isotope PACKAGED v2.2.2
	 *
	 * Licensed GPLv3 for open source use
	 * or Isotope Commercial License for commercial use
	 *
	 * http://isotope.metafizzy.co
	 * Copyright 2015 Metafizzy
	 */
!function(s){function a(){}function l(t){function e(e){e.prototype.option||(e.prototype.option=function(e){t.isPlainObject(e)&&(this.options=t.extend(!0,this.options,e))})}function i(e,i){t.fn[e]=function(n){if("string"==typeof n){for(var r=c.call(arguments,1),s=0,a=this.length;s<a;s++){var l=this[s],u=t.data(l,e);if(u)if(t.isFunction(u[n])&&"_"!==n.charAt(0)){var d=u[n].apply(u,r);if(void 0!==d)return d}else o("no such method '"+n+"' for "+e+" instance");else o("cannot call methods on "+e+" prior to initialization; attempted to call '"+n+"'")}return this}return this.each(function(){var o=t.data(this,e);o?(o.option(n),o._init()):(o=new i(this,n),t.data(this,e,o))})}}if(t){var o="undefined"==typeof console?a:function(t){console.error(t)};return t.bridget=function(t,o){e(o),i(t,o)},t.bridget}}var c=Array.prototype.slice;n=[i(8)],o=l,r="function"==typeof o?o.apply(e,n):o,!(void 0!==r&&(t.exports=r))}(window),/*!
	 * eventie v1.0.6
	 * event binding helper
	 *   eventie.bind( elem, 'click', myFn )
	 *   eventie.unbind( elem, 'click', myFn )
	 * MIT license
	 */
function(n){function r(t){var e=n.event;return e.target=e.target||e.srcElement||t,e}var a=document.documentElement,l=function(){};a.addEventListener?l=function(t,e,i){t.addEventListener(e,i,!1)}:a.attachEvent&&(l=function(t,e,i){t[e+i]=i.handleEvent?function(){var e=r(t);i.handleEvent.call(i,e)}:function(){var e=r(t);i.call(t,e)},t.attachEvent("on"+e,t[e+i])});var c=function(){};a.removeEventListener?c=function(t,e,i){t.removeEventListener(e,i,!1)}:a.detachEvent&&(c=function(t,e,i){t.detachEvent("on"+e,t[e+i]);try{delete t[e+i]}catch(o){t[e+i]=void 0}});var u={bind:l,unbind:c};o=u,!(s="function"==typeof o?o.call(e,i,e,t):o)}(window),function(){"use strict";function t(){}function e(t,e){for(var i=t.length;i--;)if(t[i].listener===e)return i;return-1}function i(t){return function(){return this[t].apply(this,arguments)}}var o=t.prototype,r=this,s=r.EventEmitter;o.getListeners=function(t){var e,i,o=this._getEvents();if(t instanceof RegExp){e={};for(i in o)o.hasOwnProperty(i)&&t.test(i)&&(e[i]=o[i])}else e=o[t]||(o[t]=[]);return e},o.flattenListeners=function(t){var e,i=[];for(e=0;e<t.length;e+=1)i.push(t[e].listener);return i},o.getListenersAsObject=function(t){var e,i=this.getListeners(t);return i instanceof Array&&(e={},e[t]=i),e||i},o.addListener=function(t,i){var o,n=this.getListenersAsObject(t),r="object"==typeof i;for(o in n)n.hasOwnProperty(o)&&e(n[o],i)===-1&&n[o].push(r?i:{listener:i,once:!1});return this},o.on=i("addListener"),o.addOnceListener=function(t,e){return this.addListener(t,{listener:e,once:!0})},o.once=i("addOnceListener"),o.defineEvent=function(t){return this.getListeners(t),this},o.defineEvents=function(t){for(var e=0;e<t.length;e+=1)this.defineEvent(t[e]);return this},o.removeListener=function(t,i){var o,n,r=this.getListenersAsObject(t);for(n in r)r.hasOwnProperty(n)&&(o=e(r[n],i),o!==-1&&r[n].splice(o,1));return this},o.off=i("removeListener"),o.addListeners=function(t,e){return this.manipulateListeners(!1,t,e)},o.removeListeners=function(t,e){return this.manipulateListeners(!0,t,e)},o.manipulateListeners=function(t,e,i){var o,n,r=t?this.removeListener:this.addListener,s=t?this.removeListeners:this.addListeners;if("object"!=typeof e||e instanceof RegExp)for(o=i.length;o--;)r.call(this,e,i[o]);else for(o in e)e.hasOwnProperty(o)&&(n=e[o])&&("function"==typeof n?r.call(this,o,n):s.call(this,o,n));return this},o.removeEvent=function(t){var e,i=typeof t,o=this._getEvents();if("string"===i)delete o[t];else if(t instanceof RegExp)for(e in o)o.hasOwnProperty(e)&&t.test(e)&&delete o[e];else delete this._events;return this},o.removeAllListeners=i("removeEvent"),o.emitEvent=function(t,e){var i,o,n,r,s=this.getListenersAsObject(t);for(n in s)if(s.hasOwnProperty(n))for(o=s[n].length;o--;)i=s[n][o],i.once===!0&&this.removeListener(t,i.listener),r=i.listener.apply(this,e||[]),r===this._getOnceReturnValue()&&this.removeListener(t,i.listener);return this},o.trigger=i("emitEvent"),o.emit=function(t){var e=Array.prototype.slice.call(arguments,1);return this.emitEvent(t,e)},o.setOnceReturnValue=function(t){return this._onceReturnValue=t,this},o._getOnceReturnValue=function(){return!this.hasOwnProperty("_onceReturnValue")||this._onceReturnValue},o._getEvents=function(){return this._events||(this._events={})},t.noConflict=function(){return r.EventEmitter=s,t},n=[],!(a=function(){return t}.apply(r,n))}.call(this),/*!
	 * getStyleProperty v1.0.4
	 * original by kangax
	 * http://perfectionkills.com/feature-testing-css-properties/
	 * MIT license
	 */
function(t){function i(t){if(t){if("string"==typeof r[t])return t;t=t.charAt(0).toUpperCase()+t.slice(1);for(var e,i=0,n=o.length;i<n;i++)if(e=o[i]+t,"string"==typeof r[e])return e}}var o="Webkit Moz ms Ms O".split(" "),r=document.documentElement.style;n=[],!(l=function(){return i}.apply(e,n))}(window),/*!
	 * getSize v1.2.2
	 * measure size of elements
	 * MIT license
	 */
function(t,i){function r(t){var e=parseFloat(t),i=t.indexOf("%")===-1&&!isNaN(e);return i&&e}function s(){}function a(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0,i=p.length;e<i;e++){var o=p[e];t[o]=0}return t}function u(e){function i(){if(!u){u=!0;var i=t.getComputedStyle;if(s=function(){var t=i?function(t){return i(t,null)}:function(t){return t.currentStyle};return function(e){var i=t(e);return i||d("Style returned "+i+". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),i}}(),l=e("boxSizing")){var o=document.createElement("div");o.style.width="200px",o.style.padding="1px 2px 3px 4px",o.style.borderStyle="solid",o.style.borderWidth="1px 2px 3px 4px",o.style[l]="border-box";var n=document.body||document.documentElement;n.appendChild(o);var a=s(o);c=200===r(a.width),n.removeChild(o)}}}function o(t){if(i(),"string"==typeof t&&(t=document.querySelector(t)),t&&"object"==typeof t&&t.nodeType){var e=s(t);if("none"===e.display)return a();var o={};o.width=t.offsetWidth,o.height=t.offsetHeight;for(var u=o.isBorderBox=!(!l||!e[l]||"border-box"!==e[l]),d=0,f=p.length;d<f;d++){var h=p[d],m=e[h];m=n(t,m);var g=parseFloat(m);o[h]=isNaN(g)?0:g}var v=o.paddingLeft+o.paddingRight,y=o.paddingTop+o.paddingBottom,w=o.marginLeft+o.marginRight,S=o.marginTop+o.marginBottom,b=o.borderLeftWidth+o.borderRightWidth,x=o.borderTopWidth+o.borderBottomWidth,C=u&&c,T=r(e.width);T!==!1&&(o.width=T+(C?0:v+b));var k=r(e.height);return k!==!1&&(o.height=k+(C?0:y+x)),o.innerWidth=o.width-(v+b),o.innerHeight=o.height-(y+x),o.outerWidth=o.width+w,o.outerHeight=o.height+S,o}}function n(e,i){if(t.getComputedStyle||i.indexOf("%")===-1)return i;var o=e.style,n=o.left,r=e.runtimeStyle,s=r&&r.left;return s&&(r.left=e.currentStyle.left),o.left=i,i=o.pixelLeft,o.left=n,s&&(r.left=s),i}var s,l,c,u=!1;return o}var d="undefined"==typeof console?s:function(t){console.error(t)},p=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];n=[l],o=u,!(c="function"==typeof o?o.apply(e,n):o)}(window),/*!
	 * docReady v1.0.4
	 * Cross browser DOMContentLoaded event emitter
	 * MIT license
	 */
function(t){function i(t){"function"==typeof t&&(i.isReady?t():d.push(t))}function r(t){var e="readystatechange"===t.type&&"complete"!==c.readyState;i.isReady||e||a()}function a(){i.isReady=!0;for(var t=0,e=d.length;t<e;t++){var o=d[t];o()}}function l(e){return"complete"===c.readyState?a():(e.bind(c,"DOMContentLoaded",r),e.bind(c,"readystatechange",r),e.bind(t,"load",r)),i}var c=t.document,d=[];i.isReady=!1,n=[s],o=l,!(u="function"==typeof o?o.apply(e,n):o)}(window),function(t){"use strict";function i(t,e){return t[l](e)}function o(t){if(!t.parentNode){var e=document.createDocumentFragment();e.appendChild(t)}}function r(t,e){o(t);for(var i=t.parentNode.querySelectorAll(e),n=0,r=i.length;n<r;n++)if(i[n]===t)return!0;return!1}function s(t,e){return o(t),i(t,e)}var a,l=function(){if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0,o=e.length;i<o;i++){var n=e[i],r=n+"MatchesSelector";if(t[r])return r}}();if(l){var c=document.createElement("div"),u=i(c,"div");a=u?i:s}else a=r;n=[],!(d=function(){return a}.apply(e,n))}(Element.prototype),function(t,i){"use strict";n=[u,d],!(p=function(e,o){return i(t,e,o)}.apply(e,n))}(window,function(t,e,i){var o={};o.extend=function(t,e){for(var i in e)t[i]=e[i];return t},o.modulo=function(t,e){return(t%e+e)%e};var n=Object.prototype.toString;o.isArray=function(t){return"[object Array]"==n.call(t)},o.makeArray=function(t){var e=[];if(o.isArray(t))e=t;else if(t&&"number"==typeof t.length)for(var i=0,n=t.length;i<n;i++)e.push(t[i]);else e.push(t);return e},o.indexOf=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var i=0,o=t.length;i<o;i++)if(t[i]===e)return i;return-1},o.removeFrom=function(t,e){var i=o.indexOf(t,e);i!=-1&&t.splice(i,1)},o.isElement="function"==typeof HTMLElement||"object"==typeof HTMLElement?function(t){return t instanceof HTMLElement}:function(t){return t&&"object"==typeof t&&1==t.nodeType&&"string"==typeof t.nodeName},o.setText=function(){function t(t,i){e=e||(void 0!==document.documentElement.textContent?"textContent":"innerText"),t[e]=i}var e;return t}(),o.getParent=function(t,e){for(;t!=document.body;)if(t=t.parentNode,i(t,e))return t},o.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},o.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},o.filterFindElements=function(t,e){t=o.makeArray(t);for(var n=[],r=0,s=t.length;r<s;r++){var a=t[r];if(o.isElement(a))if(e){i(a,e)&&n.push(a);for(var l=a.querySelectorAll(e),c=0,u=l.length;c<u;c++)n.push(l[c])}else n.push(a)}return n},o.debounceMethod=function(t,e,i){var o=t.prototype[e],n=e+"Timeout";t.prototype[e]=function(){var t=this[n];t&&clearTimeout(t);var e=arguments,r=this;this[n]=setTimeout(function(){o.apply(r,e),delete r[n]},i||100)}},o.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var r=t.console;return o.htmlInit=function(i,n){e(function(){for(var e=o.toDashed(n),s=document.querySelectorAll(".js-"+e),a="data-"+e+"-options",l=0,c=s.length;l<c;l++){var u,d=s[l],p=d.getAttribute(a);try{u=p&&JSON.parse(p)}catch(f){r&&r.error("Error parsing "+a+" on "+d.nodeName.toLowerCase()+(d.id?"#"+d.id:"")+": "+f);continue}var h=new i(d,u),m=t.jQuery;m&&m.data(d,n,h)}})},o}),function(t,i){"use strict";n=[a,c,l,p],!(f=function(e,o,n,r){return i(t,e,o,n,r)}.apply(e,n))}(window,function(t,e,i,o,n){"use strict";function r(t){for(var e in t)return!1;return e=null,!0}function s(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}function a(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}var l=t.getComputedStyle,c=l?function(t){return l(t,null)}:function(t){return t.currentStyle},u=o("transition"),d=o("transform"),p=u&&d,f=!!o("perspective"),h={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"}[u],m=["transform","transition","transitionDuration","transitionProperty"],g=function(){for(var t={},e=0,i=m.length;e<i;e++){var n=m[e],r=o(n);r&&r!==n&&(t[n]=r)}return t}();n.extend(s.prototype,e.prototype),s.prototype._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},s.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},s.prototype.getSize=function(){this.size=i(this.element)},s.prototype.css=function(t){var e=this.element.style;for(var i in t){var o=g[i]||i;e[o]=t[i]}},s.prototype.getPosition=function(){var t=c(this.element),e=this.layout.options,i=e.isOriginLeft,o=e.isOriginTop,n=t[i?"left":"right"],r=t[o?"top":"bottom"],s=this.layout.size,a=n.indexOf("%")!=-1?parseFloat(n)/100*s.width:parseInt(n,10),l=r.indexOf("%")!=-1?parseFloat(r)/100*s.height:parseInt(r,10);a=isNaN(a)?0:a,l=isNaN(l)?0:l,a-=i?s.paddingLeft:s.paddingRight,l-=o?s.paddingTop:s.paddingBottom,this.position.x=a,this.position.y=l},s.prototype.layoutPosition=function(){var t=this.layout.size,e=this.layout.options,i={},o=e.isOriginLeft?"paddingLeft":"paddingRight",n=e.isOriginLeft?"left":"right",r=e.isOriginLeft?"right":"left",s=this.position.x+t[o];i[n]=this.getXValue(s),i[r]="";var a=e.isOriginTop?"paddingTop":"paddingBottom",l=e.isOriginTop?"top":"bottom",c=e.isOriginTop?"bottom":"top",u=this.position.y+t[a];i[l]=this.getYValue(u),i[c]="",this.css(i),this.emitEvent("layout",[this])},s.prototype.getXValue=function(t){var e=this.layout.options;return e.percentPosition&&!e.isHorizontal?t/this.layout.size.width*100+"%":t+"px"},s.prototype.getYValue=function(t){var e=this.layout.options;return e.percentPosition&&e.isHorizontal?t/this.layout.size.height*100+"%":t+"px"},s.prototype._transitionTo=function(t,e){this.getPosition();var i=this.position.x,o=this.position.y,n=parseInt(t,10),r=parseInt(e,10),s=n===this.position.x&&r===this.position.y;if(this.setPosition(t,e),s&&!this.isTransitioning)return void this.layoutPosition();var a=t-i,l=e-o,c={};c.transform=this.getTranslate(a,l),this.transition({to:c,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},s.prototype.getTranslate=function(t,e){var i=this.layout.options;return t=i.isOriginLeft?t:-t,e=i.isOriginTop?e:-e,f?"translate3d("+t+"px, "+e+"px, 0)":"translate("+t+"px, "+e+"px)"},s.prototype.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},s.prototype.moveTo=p?s.prototype._transitionTo:s.prototype.goTo,s.prototype.setPosition=function(t,e){this.position.x=parseInt(t,10),this.position.y=parseInt(e,10)},s.prototype._nonTransition=function(t){this.css(t.to),t.isCleaning&&this._removeStyles(t.to);for(var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)},s.prototype._transition=function(t){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(t);var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);if(t.from){this.css(t.from);var o=this.element.offsetHeight;o=null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0};var v="opacity,"+a(g.transform||"transform");s.prototype.enableTransition=function(){this.isTransitioning||(this.css({transitionProperty:v,transitionDuration:this.layout.options.transitionDuration}),this.element.addEventListener(h,this,!1))},s.prototype.transition=s.prototype[u?"_transition":"_nonTransition"],s.prototype.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},s.prototype.onotransitionend=function(t){this.ontransitionend(t)};var y={"-webkit-transform":"transform","-moz-transform":"transform","-o-transform":"transform"};s.prototype.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,i=y[t.propertyName]||t.propertyName;if(delete e.ingProperties[i],r(e.ingProperties)&&this.disableTransition(),i in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[i]),i in e.onEnd){var o=e.onEnd[i];o.call(this),delete e.onEnd[i]}this.emitEvent("transitionEnd",[this])}},s.prototype.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(h,this,!1),this.isTransitioning=!1},s.prototype._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var w={transitionProperty:"",transitionDuration:""};return s.prototype.removeTransitionStyles=function(){this.css(w)},s.prototype.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},s.prototype.remove=function(){if(!u||!parseFloat(this.layout.options.transitionDuration))return void this.removeElem();var t=this;this.once("transitionEnd",function(){t.removeElem()}),this.hide()},s.prototype.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("visibleStyle");e[i]=this.onRevealTransitionEnd,this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0,onTransitionEnd:e})},s.prototype.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},s.prototype.getHideRevealTransitionEndProperty=function(t){var e=this.layout.options[t];if(e.opacity)return"opacity";for(var i in e)return i},s.prototype.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("hiddenStyle");e[i]=this.onHideTransitionEnd,this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:e})},s.prototype.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},s.prototype.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},s}),/*!
	 * Outlayer v1.4.2
	 * the brains and guts of a layout library
	 * MIT license
	 */
function(t,i){"use strict";n=[s,a,c,p,f],!(h=function(e,o,n,r,s){return i(t,e,o,n,r,s)}.apply(e,n))}(window,function(t,e,i,o,n,r){"use strict";function s(t,e){var i=n.getQueryElement(t);if(!i)return void(a&&a.error("Bad element for "+this.constructor.namespace+": "+(i||t)));this.element=i,l&&(this.$element=l(this.element)),this.options=n.extend({},this.constructor.defaults),this.option(e);var o=++u;this.element.outlayerGUID=o,d[o]=this,this._create(),this.options.isInitLayout&&this.layout()}var a=t.console,l=t.jQuery,c=function(){},u=0,d={};return s.namespace="outlayer",s.Item=r,s.defaults={containerStyle:{position:"relative"},isInitLayout:!0,isOriginLeft:!0,isOriginTop:!0,isResizeBound:!0,isResizingContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}},n.extend(s.prototype,i.prototype),s.prototype.option=function(t){n.extend(this.options,t)},s.prototype._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),n.extend(this.element.style,this.options.containerStyle),this.options.isResizeBound&&this.bindResize()},s.prototype.reloadItems=function(){this.items=this._itemize(this.element.children)},s.prototype._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,o=[],n=0,r=e.length;n<r;n++){var s=e[n],a=new i(s,this);o.push(a)}return o},s.prototype._filterFindItemElements=function(t){return n.filterFindElements(t,this.options.itemSelector)},s.prototype.getItemElements=function(){for(var t=[],e=0,i=this.items.length;e<i;e++)t.push(this.items[e].element);return t},s.prototype.layout=function(){this._resetLayout(),this._manageStamps();var t=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;this.layoutItems(this.items,t),this._isLayoutInited=!0},s.prototype._init=s.prototype.layout,s.prototype._resetLayout=function(){this.getSize()},s.prototype.getSize=function(){this.size=o(this.element)},s.prototype._getMeasurement=function(t,e){var i,r=this.options[t];r?("string"==typeof r?i=this.element.querySelector(r):n.isElement(r)&&(i=r),this[t]=i?o(i)[e]:r):this[t]=0},s.prototype.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},s.prototype._getItemsForLayout=function(t){for(var e=[],i=0,o=t.length;i<o;i++){var n=t[i];n.isIgnored||e.push(n)}return e},s.prototype._layoutItems=function(t,e){if(this._emitCompleteOnItems("layout",t),t&&t.length){for(var i=[],o=0,n=t.length;o<n;o++){var r=t[o],s=this._getItemLayoutPosition(r);s.item=r,s.isInstant=e||r.isLayoutInstant,i.push(s)}this._processLayoutQueue(i)}},s.prototype._getItemLayoutPosition=function(){return{x:0,y:0}},s.prototype._processLayoutQueue=function(t){for(var e=0,i=t.length;e<i;e++){var o=t[e];this._positionItem(o.item,o.x,o.y,o.isInstant)}},s.prototype._positionItem=function(t,e,i,o){o?t.goTo(e,i):t.moveTo(e,i)},s.prototype._postLayout=function(){this.resizeContainer()},s.prototype.resizeContainer=function(){if(this.options.isResizingContainer){var t=this._getContainerSize();t&&(this._setContainerMeasure(t.width,!0),this._setContainerMeasure(t.height,!1))}},s.prototype._getContainerSize=c,s.prototype._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},s.prototype._emitCompleteOnItems=function(t,e){function i(){n.dispatchEvent(t+"Complete",null,[e])}function o(){s++,s===r&&i()}var n=this,r=e.length;if(!e||!r)return void i();for(var s=0,a=0,l=e.length;a<l;a++){var c=e[a];c.once(t,o)}},s.prototype.dispatchEvent=function(t,e,i){var o=e?[e].concat(i):i;if(this.emitEvent(t,o),l)if(this.$element=this.$element||l(this.element),e){var n=l.Event(e);n.type=t,this.$element.trigger(n,i)}else this.$element.trigger(t,i)},s.prototype.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},s.prototype.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},s.prototype.stamp=function(t){if(t=this._find(t)){this.stamps=this.stamps.concat(t);for(var e=0,i=t.length;e<i;e++){var o=t[e];this.ignore(o)}}},s.prototype.unstamp=function(t){if(t=this._find(t))for(var e=0,i=t.length;e<i;e++){var o=t[e];n.removeFrom(this.stamps,o),this.unignore(o)}},s.prototype._find=function(t){if(t)return"string"==typeof t&&(t=this.element.querySelectorAll(t)),t=n.makeArray(t)},s.prototype._manageStamps=function(){if(this.stamps&&this.stamps.length){this._getBoundingRect();for(var t=0,e=this.stamps.length;t<e;t++){var i=this.stamps[t];this._manageStamp(i)}}},s.prototype._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},s.prototype._manageStamp=c,s.prototype._getElementOffset=function(t){var e=t.getBoundingClientRect(),i=this._boundingRect,n=o(t),r={left:e.left-i.left-n.marginLeft,top:e.top-i.top-n.marginTop,right:i.right-e.right-n.marginRight,bottom:i.bottom-e.bottom-n.marginBottom};return r},s.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},s.prototype.bindResize=function(){this.isResizeBound||(e.bind(t,"resize",this),this.isResizeBound=!0)},s.prototype.unbindResize=function(){this.isResizeBound&&e.unbind(t,"resize",this),this.isResizeBound=!1},s.prototype.onresize=function(){function t(){e.resize(),delete e.resizeTimeout}this.resizeTimeout&&clearTimeout(this.resizeTimeout);var e=this;this.resizeTimeout=setTimeout(t,100)},s.prototype.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},s.prototype.needsResizeLayout=function(){var t=o(this.element),e=this.size&&t;return e&&t.innerWidth!==this.size.innerWidth},s.prototype.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},s.prototype.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},s.prototype.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},s.prototype.reveal=function(t){this._emitCompleteOnItems("reveal",t);for(var e=t&&t.length,i=0;e&&i<e;i++){var o=t[i];o.reveal()}},s.prototype.hide=function(t){this._emitCompleteOnItems("hide",t);for(var e=t&&t.length,i=0;e&&i<e;i++){var o=t[i];o.hide()}},s.prototype.revealItemElements=function(t){var e=this.getItems(t);this.reveal(e)},s.prototype.hideItemElements=function(t){var e=this.getItems(t);this.hide(e)},s.prototype.getItem=function(t){for(var e=0,i=this.items.length;e<i;e++){var o=this.items[e];if(o.element===t)return o}},s.prototype.getItems=function(t){t=n.makeArray(t);for(var e=[],i=0,o=t.length;i<o;i++){var r=t[i],s=this.getItem(r);s&&e.push(s)}return e},s.prototype.remove=function(t){var e=this.getItems(t);if(this._emitCompleteOnItems("remove",e),e&&e.length)for(var i=0,o=e.length;i<o;i++){var r=e[i];r.remove(),n.removeFrom(this.items,r)}},s.prototype.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="";for(var e=0,i=this.items.length;e<i;e++){var o=this.items[e];o.destroy()}this.unbindResize();var n=this.element.outlayerGUID;delete d[n],delete this.element.outlayerGUID,l&&l.removeData(this.element,this.constructor.namespace)},s.data=function(t){t=n.getQueryElement(t);var e=t&&t.outlayerGUID;return e&&d[e]},s.create=function(t,e){function i(){s.apply(this,arguments)}return Object.create?i.prototype=Object.create(s.prototype):n.extend(i.prototype,s.prototype),i.prototype.constructor=i,i.defaults=n.extend({},s.defaults),n.extend(i.defaults,e),i.prototype.settings={},i.namespace=t,i.data=s.data,i.Item=function(){r.apply(this,arguments)},i.Item.prototype=new r,n.htmlInit(i,t),l&&l.bridget&&l.bridget(t,i),i},s.Item=r,s}),function(t,i){"use strict";n=[h],o=i,!(m="function"==typeof o?o.apply(e,n):o)}(window,function(t){"use strict";function e(){t.Item.apply(this,arguments)}e.prototype=new t.Item,e.prototype._create=function(){this.id=this.layout.itemGUID++,t.Item.prototype._create.call(this),this.sortData={}},e.prototype.updateSortData=function(){if(!this.isIgnored){this.sortData.id=this.id,this.sortData["original-order"]=this.id,this.sortData.random=Math.random();var t=this.layout.options.getSortData,e=this.layout._sorters;for(var i in t){var o=e[i];this.sortData[i]=o(this.element,this)}}};var i=e.prototype.destroy;return e.prototype.destroy=function(){i.apply(this,arguments),this.css({display:""})},e}),function(t,i){"use strict";n=[c,h],o=i,!(g="function"==typeof o?o.apply(e,n):o)}(window,function(t,e){"use strict";function i(t){this.isotope=t,t&&(this.options=t.options[this.namespace],this.element=t.element,this.items=t.filteredItems,this.size=t.size)}return function(){function t(t){return function(){return e.prototype[t].apply(this.isotope,arguments)}}for(var o=["_resetLayout","_getItemLayoutPosition","_manageStamp","_getContainerSize","_getElementOffset","needsResizeLayout"],n=0,r=o.length;n<r;n++){var s=o[n];i.prototype[s]=t(s)}}(),i.prototype.needsVerticalResizeLayout=function(){var e=t(this.isotope.element),i=this.isotope.size&&e;return i&&e.innerHeight!=this.isotope.size.innerHeight},i.prototype._getMeasurement=function(){this.isotope._getMeasurement.apply(this,arguments)},i.prototype.getColumnWidth=function(){this.getSegmentSize("column","Width")},i.prototype.getRowHeight=function(){this.getSegmentSize("row","Height")},i.prototype.getSegmentSize=function(t,e){var i=t+e,o="outer"+e;if(this._getMeasurement(i,o),!this[i]){var n=this.getFirstItemSize();this[i]=n&&n[o]||this.isotope.size["inner"+e]}},i.prototype.getFirstItemSize=function(){var e=this.isotope.filteredItems[0];return e&&e.element&&t(e.element)},i.prototype.layout=function(){this.isotope.layout.apply(this.isotope,arguments)},i.prototype.getSize=function(){this.isotope.getSize(),this.size=this.isotope.size},i.modes={},i.create=function(t,e){function o(){i.apply(this,arguments)}return o.prototype=new i,e&&(o.options=e),o.prototype.namespace=t,i.modes[t]=o,o},i}),/*!
	 * Masonry v3.3.1
	 * Cascading grid layout library
	 * http://masonry.desandro.com
	 * MIT License
	 * by David DeSandro
	 */
function(t,i){"use strict";n=[h,c,p],o=i,!(v="function"==typeof o?o.apply(e,n):o)}(window,function(t,e,i){var o=t.create("masonry");return o.prototype._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns();var t=this.cols;for(this.colYs=[];t--;)this.colYs.push(0);this.maxY=0},o.prototype.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],i=t&&t.element;this.columnWidth=i&&e(i).outerWidth||this.containerWidth}var o=this.columnWidth+=this.gutter,n=this.containerWidth+this.gutter,r=n/o,s=o-n%o,a=s&&s<1?"round":"floor";r=Math[a](r),this.cols=Math.max(r,1)},o.prototype.getContainerWidth=function(){var t=this.options.isFitWidth?this.element.parentNode:this.element,i=e(t);this.containerWidth=i&&i.innerWidth},o.prototype._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,o=e&&e<1?"round":"ceil",n=Math[o](t.size.outerWidth/this.columnWidth);n=Math.min(n,this.cols);for(var r=this._getColGroup(n),s=Math.min.apply(Math,r),a=i.indexOf(r,s),l={x:this.columnWidth*a,y:s},c=s+t.size.outerHeight,u=this.cols+1-r.length,d=0;d<u;d++)this.colYs[a+d]=c;return l},o.prototype._getColGroup=function(t){if(t<2)return this.colYs;for(var e=[],i=this.cols+1-t,o=0;o<i;o++){var n=this.colYs.slice(o,o+t);e[o]=Math.max.apply(Math,n)}return e},o.prototype._manageStamp=function(t){var i=e(t),o=this._getElementOffset(t),n=this.options.isOriginLeft?o.left:o.right,r=n+i.outerWidth,s=Math.floor(n/this.columnWidth);s=Math.max(0,s);var a=Math.floor(r/this.columnWidth);a-=r%this.columnWidth?0:1,a=Math.min(this.cols-1,a);for(var l=(this.options.isOriginTop?o.top:o.bottom)+i.outerHeight,c=s;c<=a;c++)this.colYs[c]=Math.max(l,this.colYs[c])},o.prototype._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this.options.isFitWidth&&(t.width=this._getContainerFitWidth()),t},o.prototype._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},o.prototype.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!==this.containerWidth},o}),/*!
	 * Masonry layout mode
	 * sub-classes Masonry
	 * http://masonry.desandro.com
	 */
function(t,i){"use strict";n=[g,v],o=i,!(y="function"==typeof o?o.apply(e,n):o)}(window,function(t,e){"use strict";function i(t,e){for(var i in e)t[i]=e[i];return t}var o=t.create("masonry"),n=o.prototype._getElementOffset,r=o.prototype.layout,s=o.prototype._getMeasurement;i(o.prototype,e.prototype),o.prototype._getElementOffset=n,o.prototype.layout=r,o.prototype._getMeasurement=s;var a=o.prototype.measureColumns;o.prototype.measureColumns=function(){this.items=this.isotope.filteredItems,a.call(this)};var l=o.prototype._manageStamp;return o.prototype._manageStamp=function(){this.options.isOriginLeft=this.isotope.options.isOriginLeft,this.options.isOriginTop=this.isotope.options.isOriginTop,l.apply(this,arguments)},o}),function(t,i){"use strict";n=[g],o=i,!(w="function"==typeof o?o.apply(e,n):o)}(window,function(t){"use strict";var e=t.create("fitRows");return e.prototype._resetLayout=function(){this.x=0,this.y=0,this.maxY=0,this._getMeasurement("gutter","outerWidth")},e.prototype._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth+this.gutter,i=this.isotope.size.innerWidth+this.gutter;0!==this.x&&e+this.x>i&&(this.x=0,this.y=this.maxY);var o={x:this.x,y:this.y};return this.maxY=Math.max(this.maxY,this.y+t.size.outerHeight),this.x+=e,o},e.prototype._getContainerSize=function(){return{height:this.maxY}},e}),function(t,i){"use strict";n=[g],o=i,!(S="function"==typeof o?o.apply(e,n):o)}(window,function(t){"use strict";var e=t.create("vertical",{horizontalAlignment:0});return e.prototype._resetLayout=function(){this.y=0},e.prototype._getItemLayoutPosition=function(t){t.getSize();var e=(this.isotope.size.innerWidth-t.size.outerWidth)*this.options.horizontalAlignment,i=this.y;return this.y+=t.size.outerHeight,{x:e,y:i}},e.prototype._getContainerSize=function(){return{height:this.y}},e}),/*!
	 * Isotope v2.2.2
	 *
	 * Licensed GPLv3 for open source use
	 * or Isotope Commercial License for commercial use
	 *
	 * http://isotope.metafizzy.co
	 * Copyright 2015 Metafizzy
	 */
function(i,o){"use strict";n=[h,c,d,p,m,g,y,w,S],r=function(t,e,n,r,s,a){return o(i,t,e,n,r,s,a)}.apply(e,n),!(void 0!==r&&(t.exports=r))}(window,function(t,e,i,o,n,r,s){function a(t,e){return function(i,o){for(var n=0,r=t.length;n<r;n++){var s=t[n],a=i.sortData[s],l=o.sortData[s];if(a>l||a<l){var c=void 0!==e[s]?e[s]:e,u=c?1:-1;return(a>l?1:-1)*u}}return 0}}var l=t.jQuery,c=String.prototype.trim?function(t){return t.trim()}:function(t){return t.replace(/^\s+|\s+$/g,"")},u=document.documentElement,d=u.textContent?function(t){return t.textContent}:function(t){return t.innerText},p=e.create("isotope",{layoutMode:"masonry",isJQueryFiltering:!0,sortAscending:!0});p.Item=r,p.LayoutMode=s,p.prototype._create=function(){this.itemGUID=0,this._sorters={},this._getSorters(),e.prototype._create.call(this),this.modes={},this.filteredItems=this.items,this.sortHistory=["original-order"];for(var t in s.modes)this._initLayoutMode(t)},p.prototype.reloadItems=function(){this.itemGUID=0,e.prototype.reloadItems.call(this)},p.prototype._itemize=function(){for(var t=e.prototype._itemize.apply(this,arguments),i=0,o=t.length;i<o;i++){var n=t[i];n.id=this.itemGUID++}return this._updateItemsSortData(t),t},p.prototype._initLayoutMode=function(t){var e=s.modes[t],i=this.options[t]||{};this.options[t]=e.options?n.extend(e.options,i):i,this.modes[t]=new e(this)},p.prototype.layout=function(){return!this._isLayoutInited&&this.options.isInitLayout?void this.arrange():void this._layout()},p.prototype._layout=function(){var t=this._getIsInstant();this._resetLayout(),this._manageStamps(),this.layoutItems(this.filteredItems,t),this._isLayoutInited=!0},p.prototype.arrange=function(t){function e(){o.reveal(i.needReveal),o.hide(i.needHide)}this.option(t),this._getIsInstant();var i=this._filter(this.items);this.filteredItems=i.matches;var o=this;this._bindArrangeComplete(),this._isInstant?this._noTransition(e):e(),this._sort(),this._layout()},p.prototype._init=p.prototype.arrange,p.prototype._getIsInstant=function(){var t=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;return this._isInstant=t,t},p.prototype._bindArrangeComplete=function(){function t(){e&&i&&o&&n.dispatchEvent("arrangeComplete",null,[n.filteredItems])}var e,i,o,n=this;this.once("layoutComplete",function(){e=!0,t()}),this.once("hideComplete",function(){i=!0,t()}),this.once("revealComplete",function(){o=!0,t()})},p.prototype._filter=function(t){var e=this.options.filter;e=e||"*";for(var i=[],o=[],n=[],r=this._getFilterTest(e),s=0,a=t.length;s<a;s++){var l=t[s];if(!l.isIgnored){var c=r(l);c&&i.push(l),c&&l.isHidden?o.push(l):c||l.isHidden||n.push(l)}}return{matches:i,needReveal:o,needHide:n}},p.prototype._getFilterTest=function(t){return l&&this.options.isJQueryFiltering?function(e){return l(e.element).is(t)}:"function"==typeof t?function(e){return t(e.element)}:function(e){return o(e.element,t)}},p.prototype.updateSortData=function(t){var e;t?(t=n.makeArray(t),e=this.getItems(t)):e=this.items,this._getSorters(),this._updateItemsSortData(e)},p.prototype._getSorters=function(){var t=this.options.getSortData;for(var e in t){var i=t[e];this._sorters[e]=f(i)}},p.prototype._updateItemsSortData=function(t){for(var e=t&&t.length,i=0;e&&i<e;i++){var o=t[i];o.updateSortData()}};var f=function(){function t(t){if("string"!=typeof t)return t;var i=c(t).split(" "),o=i[0],n=o.match(/^\[(.+)\]$/),r=n&&n[1],s=e(r,o),a=p.sortDataParsers[i[1]];return t=a?function(t){return t&&a(s(t))}:function(t){return t&&s(t)}}function e(t,e){var i;return i=t?function(e){return e.getAttribute(t)}:function(t){var i=t.querySelector(e);return i&&d(i)}}return t}();p.sortDataParsers={parseInt:function(t){return parseInt(t,10)},parseFloat:function(t){return parseFloat(t)}},p.prototype._sort=function(){var t=this.options.sortBy;if(t){var e=[].concat.apply(t,this.sortHistory),i=a(e,this.options.sortAscending);this.filteredItems.sort(i),t!=this.sortHistory[0]&&this.sortHistory.unshift(t)}},p.prototype._mode=function(){var t=this.options.layoutMode,e=this.modes[t];if(!e)throw new Error("No layout mode: "+t);return e.options=this.options[t],e},p.prototype._resetLayout=function(){e.prototype._resetLayout.call(this),this._mode()._resetLayout()},p.prototype._getItemLayoutPosition=function(t){return this._mode()._getItemLayoutPosition(t)},p.prototype._manageStamp=function(t){this._mode()._manageStamp(t)},p.prototype._getContainerSize=function(){return this._mode()._getContainerSize()},p.prototype.needsResizeLayout=function(){return this._mode().needsResizeLayout()},p.prototype.appended=function(t){var e=this.addItems(t);if(e.length){var i=this._filterRevealAdded(e);this.filteredItems=this.filteredItems.concat(i)}},p.prototype.prepended=function(t){var e=this._itemize(t);if(e.length){this._resetLayout(),this._manageStamps();var i=this._filterRevealAdded(e);this.layoutItems(this.filteredItems),this.filteredItems=i.concat(this.filteredItems),this.items=e.concat(this.items)}},p.prototype._filterRevealAdded=function(t){var e=this._filter(t);return this.hide(e.needHide),this.reveal(e.matches),this.layoutItems(e.matches,!0),e.matches},p.prototype.insert=function(t){var e=this.addItems(t);if(e.length){var i,o,n=e.length;for(i=0;i<n;i++)o=e[i],this.element.appendChild(o.element);var r=this._filter(e).matches;for(i=0;i<n;i++)e[i].isLayoutInstant=!0;for(this.arrange(),i=0;i<n;i++)delete e[i].isLayoutInstant;this.reveal(r)}};var h=p.prototype.remove;return p.prototype.remove=function(t){t=n.makeArray(t);var e=this.getItems(t);h.call(this,t);var i=e&&e.length;if(i)for(var o=0;o<i;o++){var r=e[o];n.removeFrom(this.filteredItems,r)}},p.prototype.shuffle=function(){for(var t=0,e=this.items.length;t<e;t++){var i=this.items[t];i.sortData.random=Math.random()}this.options.sortBy="random",this._sort(),this._layout()},p.prototype._noTransition=function(t){var e=this.options.transitionDuration;this.options.transitionDuration=0;var i=t.call(this);return this.options.transitionDuration=e,i},p.prototype.getFilteredItemElements=function(){for(var t=[],e=0,i=this.filteredItems.length;e<i;e++)t.push(this.filteredItems[e].element);return t},p})},681:function(t,e){!function(t){"use strict";var e=function(e,i){this.el=t(e),this.options=t.extend({},t.fn.typed.defaults,i),this.isInput=this.el.is("input"),this.attr=this.options.attr,this.showCursor=!this.isInput&&this.options.showCursor,this.elContent=this.attr?this.el.attr(this.attr):this.el.text(),this.contentType=this.options.contentType,this.typeSpeed=this.options.typeSpeed,this.startDelay=this.options.startDelay,this.backSpeed=this.options.backSpeed,this.backDelay=this.options.backDelay,this.stringsElement=this.options.stringsElement,this.strings=this.options.strings,this.strPos=0,this.arrayPos=0,this.stopNum=0,this.loop=this.options.loop,this.loopCount=this.options.loopCount,this.curLoop=0,this.stop=!1,this.cursorChar=this.options.cursorChar,this.shuffle=this.options.shuffle,this.sequence=[],this.build()};e.prototype={constructor:e,init:function(){var t=this;t.timeout=setTimeout(function(){for(var e=0;e<t.strings.length;++e)t.sequence[e]=e;t.shuffle&&(t.sequence=t.shuffleArray(t.sequence)),t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos)},t.startDelay)},build:function(){var e=this;if(this.showCursor===!0&&(this.cursor=t('<span class="typed-cursor">'+this.cursorChar+"</span>"),this.el.after(this.cursor)),this.stringsElement){e.strings=[],this.stringsElement.hide();var i=this.stringsElement.find("p");t.each(i,function(i,o){e.strings.push(t(o).html())})}this.init()},typewrite:function(t,e){if(this.stop!==!0){var i=Math.round(70*Math.random())+this.typeSpeed,o=this;o.timeout=setTimeout(function(){var i=0,n=t.substr(e);if("^"===n.charAt(0)){var r=1;/^\^\d+/.test(n)&&(n=/\d+/.exec(n)[0],r+=n.length,i=parseInt(n)),t=t.substring(0,e)+t.substring(e+r)}if("html"===o.contentType){var s=t.substr(e).charAt(0);if("<"===s||"&"===s){var a="",l="";for(l="<"===s?">":";";t.substr(e).charAt(0)!==l;)a+=t.substr(e).charAt(0),e++;e++,a+=l}}o.timeout=setTimeout(function(){if(e===t.length){if(o.options.onStringTyped(o.arrayPos),o.arrayPos===o.strings.length-1&&(o.options.callback(),o.curLoop++,o.loop===!1||o.curLoop===o.loopCount))return;o.timeout=setTimeout(function(){o.backspace(t,e)},o.backDelay)}else{0===e&&o.options.preStringTyped(o.arrayPos);var i=t.substr(0,e+1);o.attr?o.el.attr(o.attr,i):o.isInput?o.el.val(i):"html"===o.contentType?o.el.html(i):o.el.text(i),e++,o.typewrite(t,e)}},i)},i)}},backspace:function(t,e){if(this.stop!==!0){var i=Math.round(70*Math.random())+this.backSpeed,o=this;o.timeout=setTimeout(function(){if("html"===o.contentType&&">"===t.substr(e).charAt(0)){for(var i="";"<"!==t.substr(e).charAt(0);)i-=t.substr(e).charAt(0),e--;e--,i+="<"}var n=t.substr(0,e);o.attr?o.el.attr(o.attr,n):o.isInput?o.el.val(n):"html"===o.contentType?o.el.html(n):o.el.text(n),e>o.stopNum?(e--,o.backspace(t,e)):e<=o.stopNum&&(o.arrayPos++,o.arrayPos===o.strings.length?(o.arrayPos=0,o.shuffle&&(o.sequence=o.shuffleArray(o.sequence)),o.init()):o.typewrite(o.strings[o.sequence[o.arrayPos]],e))},i)}},shuffleArray:function(t){var e,i,o=t.length;if(o)for(;--o;)i=Math.floor(Math.random()*(o+1)),e=t[i],t[i]=t[o],t[o]=e;return t},reset:function(){var t=this;clearInterval(t.timeout);var e=this.el.attr("id");this.el.after('<span id="'+e+'"/>'),this.el.remove(),"undefined"!=typeof this.cursor&&this.cursor.remove(),t.options.resetCallback()}},t.fn.typed=function(i){return this.each(function(){var o=t(this),n=o.data("typed"),r="object"==typeof i&&i;n||o.data("typed",n=new e(this,r)),"string"==typeof i&&n[i]()})},t.fn.typed.defaults={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,shuffle:!1,backDelay:500,loop:!1,loopCount:!1,showCursor:!0,cursorChar:"|",attr:null,contentType:"html",callback:function(){},preStringTyped:function(){},onStringTyped:function(){},resetCallback:function(){}}}(window.jQuery)},682:function(t,e,i){var o,n,r;/*!
	 * ScrollMagic v2.0.5 (2015-04-29)
	 * The javascript library for magical scroll interactions.
	 * (c) 2015 Jan Paepke (@janpaepke)
	 * Project Website: http://scrollmagic.io
	 * 
	 * @version 2.0.5
	 * @license Dual licensed under MIT license and GPL.
	 * @author Jan Paepke - e-mail@janpaepke.de
	 *
	 * @file ScrollMagic Velocity Animation Plugin.
	 *
	 * requires: velocity ~1.2
	 * Powered by VelocityJS: http://VelocityJS.org
	 * Velocity is published under MIT license.
	 */
!function(s,a){n=[i(586),i(677)],o=a,r="function"==typeof o?o.apply(e,n):o,!(void 0!==r&&(t.exports=r))}(this,function(t,e){"use strict";var i="animation.velocity",o=window.console||{},n=Function.prototype.bind.call(o.error||o.log||function(){},o);t||n("("+i+") -> ERROR: The ScrollMagic main module could not be found. Please make sure it's loaded before this plugin or use an asynchronous loader like requirejs."),e||n("("+i+") -> ERROR: Velocity could not be found. Please make sure it's loaded before ScrollMagic or use an asynchronous loader like requirejs.");var r=0;t.Scene.extend(function(){var o,n,s,a,l=this,c=t._util,u=0,d=function(){l._log&&(Array.prototype.splice.call(arguments,1,0,"("+i+")","->"),l._log.apply(this,arguments))};l.on("progress.plugin_velocity",function(){h()}),l.on("destroy.plugin_velocity",function(t){l.off("*.plugin_velocity"),l.removeVelocity(t.reset)});var p=function(t,i,o){c.type.Array(t)?t.forEach(function(t){p(t,i,o)}):(e.Utilities.data(t,a)||e.Utilities.data(t,a,{reverseProps:c.css(t,Object.keys(n))}),e(t,i,o),void 0!==o.queue&&e.Utilities.dequeue(t,o.queue))},f=function(t,i){if(c.type.Array(t))t.forEach(function(t){f(t,i)});else{var o=e.Utilities.data(t,a);o&&o.reverseProps&&(e(t,o.reverseProps,i),void 0!==i.queue&&e.Utilities.dequeue(t,i.queue))}},h=function(){if(o){var t=l.progress();t!=u&&(0===l.duration()&&(t>0?p(o,n,s):f(o,s)),u=t)}};l.setVelocity=function(t,e,u){o&&l.removeVelocity(),o=c.get.elements(t),n=e||{},s=u||{},a="ScrollMagic."+i+"["+r++ +"]",void 0!==s.queue&&(s.queue=a+"_queue");var p=function(){0!==l.duration()&&d(1,"ERROR: The Velocity animation plugin does not support scrollbound animations (scenes with duration) yet.")};return l.on("change.plugin_velocity",function(t){"duration"==t.what&&p()}),p(),d(3,"added animation"),h(),l},l.removeVelocity=function(t){return o&&(void 0!==s.queue&&e(o,"stop",s.queue),t&&f(o,{duration:0}),o.forEach(function(t){e.Utilities.removeData(t,a)}),o=n=s=a=void 0),l}})})},683:function(t,e,i){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(e){"undefined"!=typeof t&&t.exports?t.exports=e:e(jQuery,window,document)}(function(e){!function(o){var n=i(684),r="undefined"!=typeof t&&t.exports,s="https:"==document.location.protocol?"https:":"http:",a="cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js";n||(r?i(674)(e):e.event.special.mousewheel||e("head").append(decodeURI("%3Cscript src="+s+"//"+a+"%3E%3C/script%3E"))),o()}(function(){var t,i="mCustomScrollbar",n="mCS",r=".mCustomScrollbar",s={setTop:0,setLeft:0,axis:"y",scrollbarPosition:"inside",scrollInertia:950,autoDraggerLength:!0,alwaysShowScrollbar:0,snapOffset:0,mouseWheel:{enable:!0,scrollAmount:"auto",axis:"y",deltaFactor:"auto",disableOver:["select","option","keygen","datalist","textarea"]},scrollButtons:{scrollType:"stepless",scrollAmount:"auto"},keyboard:{enable:!0,scrollType:"stepless",scrollAmount:"auto"},contentTouchScroll:25,documentTouchScroll:!0,advanced:{autoScrollOnFocus:"input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",updateOnContentResize:!0,updateOnImageLoad:"auto",autoUpdateTimeout:60},theme:"light",callbacks:{onTotalScrollOffset:0,onTotalScrollBackOffset:0,alwaysTriggerOffsets:!0}},a=0,l={},c=window.attachEvent&&!window.addEventListener?1:0,u=!1,d=["mCSB_dragger_onDrag","mCSB_scrollTools_onDrag","mCS_img_loaded","mCS_disabled","mCS_destroyed","mCS_no_scrollbar","mCS-autoHide","mCS-dir-rtl","mCS_no_scrollbar_y","mCS_no_scrollbar_x","mCS_y_hidden","mCS_x_hidden","mCSB_draggerContainer","mCSB_buttonUp","mCSB_buttonDown","mCSB_buttonLeft","mCSB_buttonRight"],p={init:function(t){var t=e.extend(!0,{},s,t),i=f.call(this);if(t.live){var c=t.liveSelector||this.selector||r,u=e(c);if("off"===t.live)return void m(c);l[c]=setTimeout(function(){u.mCustomScrollbar(t),"once"===t.live&&u.length&&m(c)},500)}else m(c);return t.setWidth=t.set_width?t.set_width:t.setWidth,t.setHeight=t.set_height?t.set_height:t.setHeight,t.axis=t.horizontalScroll?"x":g(t.axis),t.scrollInertia=t.scrollInertia>0&&t.scrollInertia<17?17:t.scrollInertia,"object"!==o(t.mouseWheel)&&1==t.mouseWheel&&(t.mouseWheel={enable:!0,scrollAmount:"auto",axis:"y",preventDefault:!1,deltaFactor:"auto",normalizeDelta:!1,invert:!1}),t.mouseWheel.scrollAmount=t.mouseWheelPixels?t.mouseWheelPixels:t.mouseWheel.scrollAmount,t.mouseWheel.normalizeDelta=t.advanced.normalizeMouseWheelDelta?t.advanced.normalizeMouseWheelDelta:t.mouseWheel.normalizeDelta,t.scrollButtons.scrollType=v(t.scrollButtons.scrollType),h(t),e(i).each(function(){var i=e(this);if(!i.data(n)){i.data(n,{idx:++a,opt:t,scrollRatio:{y:null,x:null},overflowed:null,contentReset:{y:null,x:null},bindEvents:!1,tweenRunning:!1,sequential:{},langDir:i.css("direction"),cbOffsets:null,trigger:null,poll:{size:{o:0,n:0},img:{o:0,n:0},change:{o:0,n:0}}});var o=i.data(n),r=o.opt,s=i.data("mcs-axis"),l=i.data("mcs-scrollbar-position"),c=i.data("mcs-theme");s&&(r.axis=s),l&&(r.scrollbarPosition=l),c&&(r.theme=c,h(r)),y.call(this),o&&r.callbacks.onCreate&&"function"==typeof r.callbacks.onCreate&&r.callbacks.onCreate.call(this),e("#mCSB_"+o.idx+"_container img:not(."+d[2]+")").addClass(d[2]),p.update.call(null,i)}})},update:function(t,i){var o=t||f.call(this);return e(o).each(function(){var t=e(this);if(t.data(n)){var o=t.data(n),r=o.opt,s=e("#mCSB_"+o.idx+"_container"),a=e("#mCSB_"+o.idx),l=[e("#mCSB_"+o.idx+"_dragger_vertical"),e("#mCSB_"+o.idx+"_dragger_horizontal")];if(!s.length)return;o.tweenRunning&&q(t),i&&o&&r.callbacks.onBeforeUpdate&&"function"==typeof r.callbacks.onBeforeUpdate&&r.callbacks.onBeforeUpdate.call(this),t.hasClass(d[3])&&t.removeClass(d[3]),t.hasClass(d[4])&&t.removeClass(d[4]),a.css("max-height","none"),a.height()!==t.height()&&a.css("max-height",t.height()),S.call(this),"y"===r.axis||r.advanced.autoExpandHorizontalScroll||s.css("width",w(s)),o.overflowed=k.call(this),E.call(this),r.autoDraggerLength&&x.call(this),C.call(this),P.call(this);var c=[Math.abs(s[0].offsetTop),Math.abs(s[0].offsetLeft)];"x"!==r.axis&&(o.overflowed[0]?l[0].height()>l[0].parent().height()?_.call(this):(U(t,c[0].toString(),{dir:"y",dur:0,overwrite:"none"}),o.contentReset.y=null):(_.call(this),"y"===r.axis?O.call(this):"yx"===r.axis&&o.overflowed[1]&&U(t,c[1].toString(),{dir:"x",dur:0,overwrite:"none"}))),"y"!==r.axis&&(o.overflowed[1]?l[1].width()>l[1].parent().width()?_.call(this):(U(t,c[1].toString(),{dir:"x",dur:0,overwrite:"none"}),o.contentReset.x=null):(_.call(this),"x"===r.axis?O.call(this):"yx"===r.axis&&o.overflowed[0]&&U(t,c[0].toString(),{dir:"y",dur:0,overwrite:"none"}))),i&&o&&(2===i&&r.callbacks.onImageLoad&&"function"==typeof r.callbacks.onImageLoad?r.callbacks.onImageLoad.call(this):3===i&&r.callbacks.onSelectorChange&&"function"==typeof r.callbacks.onSelectorChange?r.callbacks.onSelectorChange.call(this):r.callbacks.onUpdate&&"function"==typeof r.callbacks.onUpdate&&r.callbacks.onUpdate.call(this)),X.call(this)}})},scrollTo:function(t,i){if("undefined"!=typeof t&&null!=t){var o=f.call(this);return e(o).each(function(){var o=e(this);if(o.data(n)){var r=o.data(n),s=r.opt,a={trigger:"external",scrollInertia:s.scrollInertia,scrollEasing:"mcsEaseInOut",moveDragger:!1,timeout:60,callbacks:!0,onStart:!0,onUpdate:!0,onComplete:!0},l=e.extend(!0,{},a,i),c=V.call(this,t),u=l.scrollInertia>0&&l.scrollInertia<17?17:l.scrollInertia;c[0]=Y.call(this,c[0],"y"),c[1]=Y.call(this,c[1],"x"),l.moveDragger&&(c[0]*=r.scrollRatio.y,c[1]*=r.scrollRatio.x),l.dur=ot()?0:u,setTimeout(function(){null!==c[0]&&"undefined"!=typeof c[0]&&"x"!==s.axis&&r.overflowed[0]&&(l.dir="y",l.overwrite="all",U(o,c[0].toString(),l)),null!==c[1]&&"undefined"!=typeof c[1]&&"y"!==s.axis&&r.overflowed[1]&&(l.dir="x",l.overwrite="none",U(o,c[1].toString(),l))},l.timeout)}})}},stop:function(){var t=f.call(this);return e(t).each(function(){var t=e(this);t.data(n)&&q(t)})},disable:function(t){var i=f.call(this);return e(i).each(function(){var i=e(this);if(i.data(n)){i.data(n);X.call(this,"remove"),O.call(this),t&&_.call(this),E.call(this,!0),i.addClass(d[3])}})},destroy:function(){var t=f.call(this);return e(t).each(function(){var o=e(this);if(o.data(n)){var r=o.data(n),s=r.opt,a=e("#mCSB_"+r.idx),l=e("#mCSB_"+r.idx+"_container"),c=e(".mCSB_"+r.idx+"_scrollbar");s.live&&m(s.liveSelector||e(t).selector),X.call(this,"remove"),O.call(this),_.call(this),o.removeData(n),J(this,"mcs"),c.remove(),l.find("img."+d[2]).removeClass(d[2]),a.replaceWith(l.contents()),o.removeClass(i+" _"+n+"_"+r.idx+" "+d[6]+" "+d[7]+" "+d[5]+" "+d[3]).addClass(d[4])}})}},f=function(){return"object"!==o(e(this))||e(this).length<1?r:this},h=function(t){var i=["rounded","rounded-dark","rounded-dots","rounded-dots-dark"],o=["rounded-dots","rounded-dots-dark","3d","3d-dark","3d-thick","3d-thick-dark","inset","inset-dark","inset-2","inset-2-dark","inset-3","inset-3-dark"],n=["minimal","minimal-dark"],r=["minimal","minimal-dark"],s=["minimal","minimal-dark"];t.autoDraggerLength=!(e.inArray(t.theme,i)>-1)&&t.autoDraggerLength,t.autoExpandScrollbar=!(e.inArray(t.theme,o)>-1)&&t.autoExpandScrollbar,t.scrollButtons.enable=!(e.inArray(t.theme,n)>-1)&&t.scrollButtons.enable,t.autoHideScrollbar=e.inArray(t.theme,r)>-1||t.autoHideScrollbar,t.scrollbarPosition=e.inArray(t.theme,s)>-1?"outside":t.scrollbarPosition},m=function(t){l[t]&&(clearTimeout(l[t]),J(l,t))},g=function(t){return"yx"===t||"xy"===t||"auto"===t?"yx":"x"===t||"horizontal"===t?"x":"y"},v=function(t){return"stepped"===t||"pixels"===t||"step"===t||"click"===t?"stepped":"stepless"},y=function(){var t=e(this),o=t.data(n),r=o.opt,s=r.autoExpandScrollbar?" "+d[1]+"_expand":"",a=["<div id='mCSB_"+o.idx+"_scrollbar_vertical' class='mCSB_scrollTools mCSB_"+o.idx+"_scrollbar mCS-"+r.theme+" mCSB_scrollTools_vertical"+s+"'><div class='"+d[12]+"'><div id='mCSB_"+o.idx+"_dragger_vertical' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>","<div id='mCSB_"+o.idx+"_scrollbar_horizontal' class='mCSB_scrollTools mCSB_"+o.idx+"_scrollbar mCS-"+r.theme+" mCSB_scrollTools_horizontal"+s+"'><div class='"+d[12]+"'><div id='mCSB_"+o.idx+"_dragger_horizontal' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],l="yx"===r.axis?"mCSB_vertical_horizontal":"x"===r.axis?"mCSB_horizontal":"mCSB_vertical",c="yx"===r.axis?a[0]+a[1]:"x"===r.axis?a[1]:a[0],u="yx"===r.axis?"<div id='mCSB_"+o.idx+"_container_wrapper' class='mCSB_container_wrapper' />":"",p=r.autoHideScrollbar?" "+d[6]:"",f="x"!==r.axis&&"rtl"===o.langDir?" "+d[7]:"";r.setWidth&&t.css("width",r.setWidth),r.setHeight&&t.css("height",r.setHeight),r.setLeft="y"!==r.axis&&"rtl"===o.langDir?"989999px":r.setLeft,t.addClass(i+" _"+n+"_"+o.idx+p+f).wrapInner("<div id='mCSB_"+o.idx+"' class='mCustomScrollBox mCS-"+r.theme+" "+l+"'><div id='mCSB_"+o.idx+"_container' class='mCSB_container' style='position:relative; top:"+r.setTop+"; left:"+r.setLeft+";' dir="+o.langDir+" /></div>");var h=e("#mCSB_"+o.idx),m=e("#mCSB_"+o.idx+"_container");"y"===r.axis||r.advanced.autoExpandHorizontalScroll||m.css("width",w(m)),"outside"===r.scrollbarPosition?("static"===t.css("position")&&t.css("position","relative"),t.css("overflow","visible"),h.addClass("mCSB_outside").after(c)):(h.addClass("mCSB_inside").append(c),m.wrap(u)),b.call(this);var g=[e("#mCSB_"+o.idx+"_dragger_vertical"),e("#mCSB_"+o.idx+"_dragger_horizontal")];g[0].css("min-height",g[0].height()),g[1].css("min-width",g[1].width())},w=function(t){var i=[t[0].scrollWidth,Math.max.apply(Math,t.children().map(function(){return e(this).outerWidth(!0)}).get())],o=t.parent().width();return i[0]>o?i[0]:i[1]>o?i[1]:"100%"},S=function(){var t=e(this),i=t.data(n),o=i.opt,r=e("#mCSB_"+i.idx+"_container");if(o.advanced.autoExpandHorizontalScroll&&"y"!==o.axis){r.css({width:"auto","min-width":0,"overflow-x":"scroll"});var s=Math.ceil(r[0].scrollWidth);3===o.advanced.autoExpandHorizontalScroll||2!==o.advanced.autoExpandHorizontalScroll&&s>r.parent().width()?r.css({width:s,"min-width":"100%","overflow-x":"inherit"}):r.css({"overflow-x":"inherit",position:"absolute"}).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({width:Math.ceil(r[0].getBoundingClientRect().right+.4)-Math.floor(r[0].getBoundingClientRect().left),"min-width":"100%",position:"relative"}).unwrap()}},b=function(){var t=e(this),i=t.data(n),o=i.opt,r=e(".mCSB_"+i.idx+"_scrollbar:first"),s=et(o.scrollButtons.tabindex)?"tabindex='"+o.scrollButtons.tabindex+"'":"",a=["<a href='#' class='"+d[13]+"' oncontextmenu='return false;' "+s+" />","<a href='#' class='"+d[14]+"' oncontextmenu='return false;' "+s+" />","<a href='#' class='"+d[15]+"' oncontextmenu='return false;' "+s+" />","<a href='#' class='"+d[16]+"' oncontextmenu='return false;' "+s+" />"],l=["x"===o.axis?a[2]:a[0],"x"===o.axis?a[3]:a[1],a[2],a[3]];o.scrollButtons.enable&&r.prepend(l[0]).append(l[1]).next(".mCSB_scrollTools").prepend(l[2]).append(l[3])},x=function(){var t=e(this),i=t.data(n),o=e("#mCSB_"+i.idx),r=e("#mCSB_"+i.idx+"_container"),s=[e("#mCSB_"+i.idx+"_dragger_vertical"),e("#mCSB_"+i.idx+"_dragger_horizontal")],a=[o.height()/r.outerHeight(!1),o.width()/r.outerWidth(!1)],l=[parseInt(s[0].css("min-height")),Math.round(a[0]*s[0].parent().height()),parseInt(s[1].css("min-width")),Math.round(a[1]*s[1].parent().width())],u=c&&l[1]<l[0]?l[0]:l[1],d=c&&l[3]<l[2]?l[2]:l[3];s[0].css({height:u,"max-height":s[0].parent().height()-10}).find(".mCSB_dragger_bar").css({"line-height":l[0]+"px"}),s[1].css({width:d,"max-width":s[1].parent().width()-10})},C=function(){var t=e(this),i=t.data(n),o=e("#mCSB_"+i.idx),r=e("#mCSB_"+i.idx+"_container"),s=[e("#mCSB_"+i.idx+"_dragger_vertical"),e("#mCSB_"+i.idx+"_dragger_horizontal")],a=[r.outerHeight(!1)-o.height(),r.outerWidth(!1)-o.width()],l=[a[0]/(s[0].parent().height()-s[0].height()),a[1]/(s[1].parent().width()-s[1].width())];i.scrollRatio={y:l[0],x:l[1]}},T=function(t,e,i){var o=i?d[0]+"_expanded":"",n=t.closest(".mCSB_scrollTools");"active"===e?(t.toggleClass(d[0]+" "+o),n.toggleClass(d[1]),t[0]._draggable=t[0]._draggable?0:1):t[0]._draggable||("hide"===e?(t.removeClass(d[0]),n.removeClass(d[1])):(t.addClass(d[0]),n.addClass(d[1])))},k=function(){var t=e(this),i=t.data(n),o=e("#mCSB_"+i.idx),r=e("#mCSB_"+i.idx+"_container"),s=null==i.overflowed?r.height():r.outerHeight(!1),a=null==i.overflowed?r.width():r.outerWidth(!1),l=r[0].scrollHeight,c=r[0].scrollWidth;return l>s&&(s=l),c>a&&(a=c),[s>o.height(),a>o.width()]},_=function(){var t=e(this),i=t.data(n),o=i.opt,r=e("#mCSB_"+i.idx),s=e("#mCSB_"+i.idx+"_container"),a=[e("#mCSB_"+i.idx+"_dragger_vertical"),e("#mCSB_"+i.idx+"_dragger_horizontal")];if(q(t),("x"!==o.axis&&!i.overflowed[0]||"y"===o.axis&&i.overflowed[0])&&(a[0].add(s).css("top",0),U(t,"_resetY")),"y"!==o.axis&&!i.overflowed[1]||"x"===o.axis&&i.overflowed[1]){var l=dx=0;"rtl"===i.langDir&&(l=r.width()-s.outerWidth(!1),dx=Math.abs(l/i.scrollRatio.x)),s.css("left",l),a[1].css("left",dx),U(t,"_resetX")}},P=function(){var t=e(this),i=t.data(n),o=i.opt;if(!i.bindEvents){if(L.call(this),o.contentTouchScroll&&A.call(this),z.call(this),o.mouseWheel.enable){var r,s=function a(){r=setTimeout(function(){e.event.special.mousewheel?(clearTimeout(r),D.call(t[0])):a()},100)};s()}M.call(this),H.call(this),o.advanced.autoScrollOnFocus&&B.call(this),o.scrollButtons.enable&&F.call(this),o.keyboard.enable&&W.call(this),i.bindEvents=!0}},O=function(){var t=e(this),i=t.data(n),o=i.opt,r=n+"_"+i.idx,s=".mCSB_"+i.idx+"_scrollbar",a=e("#mCSB_"+i.idx+",#mCSB_"+i.idx+"_container,#mCSB_"+i.idx+"_container_wrapper,"+s+" ."+d[12]+",#mCSB_"+i.idx+"_dragger_vertical,#mCSB_"+i.idx+"_dragger_horizontal,"+s+">a"),l=e("#mCSB_"+i.idx+"_container");o.advanced.releaseDraggableSelectors&&a.add(e(o.advanced.releaseDraggableSelectors)),o.advanced.extraDraggableSelectors&&a.add(e(o.advanced.extraDraggableSelectors)),i.bindEvents&&(e(document).add(e(!R()||top.document)).unbind("."+r),a.each(function(){e(this).unbind("."+r)}),clearTimeout(t[0]._focusTimeout),J(t[0],"_focusTimeout"),clearTimeout(i.sequential.step),J(i.sequential,"step"),clearTimeout(l[0].onCompleteTimeout),J(l[0],"onCompleteTimeout"),i.bindEvents=!1)},E=function(t){var i=e(this),o=i.data(n),r=o.opt,s=e("#mCSB_"+o.idx+"_container_wrapper"),a=s.length?s:e("#mCSB_"+o.idx+"_container"),l=[e("#mCSB_"+o.idx+"_scrollbar_vertical"),e("#mCSB_"+o.idx+"_scrollbar_horizontal")],c=[l[0].find(".mCSB_dragger"),l[1].find(".mCSB_dragger")];"x"!==r.axis&&(o.overflowed[0]&&!t?(l[0].add(c[0]).add(l[0].children("a")).css("display","block"),a.removeClass(d[8]+" "+d[10])):(r.alwaysShowScrollbar?(2!==r.alwaysShowScrollbar&&c[0].css("display","none"),a.removeClass(d[10])):(l[0].css("display","none"),a.addClass(d[10])),a.addClass(d[8]))),"y"!==r.axis&&(o.overflowed[1]&&!t?(l[1].add(c[1]).add(l[1].children("a")).css("display","block"),a.removeClass(d[9]+" "+d[11])):(r.alwaysShowScrollbar?(2!==r.alwaysShowScrollbar&&c[1].css("display","none"),a.removeClass(d[11])):(l[1].css("display","none"),a.addClass(d[11])),a.addClass(d[9]))),o.overflowed[0]||o.overflowed[1]?i.removeClass(d[5]):i.addClass(d[5])},I=function(t){var i=t.type,o=t.target.ownerDocument!==document?[e(frameElement).offset().top,e(frameElement).offset().left]:null,n=R()&&t.target.ownerDocument!==top.document?[e(t.view.frameElement).offset().top,e(t.view.frameElement).offset().left]:[0,0];switch(i){case"pointerdown":case"MSPointerDown":case"pointermove":case"MSPointerMove":case"pointerup":case"MSPointerUp":return o?[t.originalEvent.pageY-o[0]+n[0],t.originalEvent.pageX-o[1]+n[1],!1]:[t.originalEvent.pageY,t.originalEvent.pageX,!1];case"touchstart":case"touchmove":case"touchend":var r=t.originalEvent.touches[0]||t.originalEvent.changedTouches[0],s=t.originalEvent.touches.length||t.originalEvent.changedTouches.length;return t.target.ownerDocument!==document?[r.screenY,r.screenX,s>1]:[r.pageY,r.pageX,s>1];default:return o?[t.pageY-o[0]+n[0],t.pageX-o[1]+n[1],!1]:[t.pageY,t.pageX,!1]}},L=function(){function t(t){var e=h.find("iframe");if(e.length){var i=t?"auto":"none";e.css("pointer-events",i)}}function i(t,e,i,n){if(h[0].idleTimer=d.scrollInertia<233?250:0,o.attr("id")===f[1])var r="x",s=(o[0].offsetLeft-e+n)*l.scrollRatio.x;else var r="y",s=(o[0].offsetTop-t+i)*l.scrollRatio.y;U(a,s.toString(),{dir:r,drag:!0})}var o,r,s,a=e(this),l=a.data(n),d=l.opt,p=n+"_"+l.idx,f=["mCSB_"+l.idx+"_dragger_vertical","mCSB_"+l.idx+"_dragger_horizontal"],h=e("#mCSB_"+l.idx+"_container"),m=e("#"+f[0]+",#"+f[1]),g=d.advanced.releaseDraggableSelectors?m.add(e(d.advanced.releaseDraggableSelectors)):m,v=d.advanced.extraDraggableSelectors?e(!R()||top.document).add(e(d.advanced.extraDraggableSelectors)):e(!R()||top.document);m.bind("mousedown."+p+" touchstart."+p+" pointerdown."+p+" MSPointerDown."+p,function(i){if(i.stopImmediatePropagation(),i.preventDefault(),K(i)){u=!0,c&&(document.onselectstart=function(){return!1}),t(!1),q(a),o=e(this);var n=o.offset(),l=I(i)[0]-n.top,p=I(i)[1]-n.left,f=o.height()+n.top,h=o.width()+n.left;l<f&&l>0&&p<h&&p>0&&(r=l,s=p),T(o,"active",d.autoExpandScrollbar)}}).bind("touchmove."+p,function(t){t.stopImmediatePropagation(),t.preventDefault();var e=o.offset(),n=I(t)[0]-e.top,a=I(t)[1]-e.left;i(r,s,n,a)}),e(document).add(v).bind("mousemove."+p+" pointermove."+p+" MSPointerMove."+p,function(t){if(o){var e=o.offset(),n=I(t)[0]-e.top,a=I(t)[1]-e.left;if(r===n&&s===a)return;i(r,s,n,a)}}).add(g).bind("mouseup."+p+" touchend."+p+" pointerup."+p+" MSPointerUp."+p,function(e){o&&(T(o,"active",d.autoExpandScrollbar),o=null),u=!1,c&&(document.onselectstart=null),t(!0)})},A=function(){function i(e){if(!tt(e)||u||I(e)[2])return void(t=0);t=1,x=0,C=0,c=1,T.removeClass("mCS_touch_action");var i=E.offset();d=I(e)[0]-i.top,p=I(e)[1]-i.left,M=[I(e)[0],I(e)[1]]}function o(t){if(tt(t)&&!u&&!I(t)[2]&&(_.documentTouchScroll||t.preventDefault(),t.stopImmediatePropagation(),(!C||x)&&c)){g=G();var e=O.offset(),i=I(t)[0]-e.top,o=I(t)[1]-e.left,n="mcsLinearOut";if(A.push(i),z.push(o),M[2]=Math.abs(I(t)[0]-M[0]),M[3]=Math.abs(I(t)[1]-M[1]),k.overflowed[0])var r=L[0].parent().height()-L[0].height(),s=d-i>0&&i-d>-(r*k.scrollRatio.y)&&(2*M[3]<M[2]||"yx"===_.axis);if(k.overflowed[1])var a=L[1].parent().width()-L[1].width(),f=p-o>0&&o-p>-(a*k.scrollRatio.x)&&(2*M[2]<M[3]||"yx"===_.axis);s||f?(F||t.preventDefault(),x=1):(C=1,T.addClass("mCS_touch_action")),F&&t.preventDefault(),S="yx"===_.axis?[d-i,p-o]:"x"===_.axis?[null,p-o]:[d-i,null],E[0].idleTimer=250,k.overflowed[0]&&l(S[0],D,n,"y","all",!0),k.overflowed[1]&&l(S[1],D,n,"x",$,!0)}}function r(e){if(!tt(e)||u||I(e)[2])return void(t=0);t=1,e.stopImmediatePropagation(),q(T),m=G();var i=O.offset();f=I(e)[0]-i.top,h=I(e)[1]-i.left,A=[],z=[]}function s(t){if(tt(t)&&!u&&!I(t)[2]){c=0,t.stopImmediatePropagation(),x=0,C=0,v=G();var e=O.offset(),i=I(t)[0]-e.top,o=I(t)[1]-e.left;if(!(v-g>30)){w=1e3/(v-m);var n="mcsEaseOut",r=w<2.5,s=r?[A[A.length-2],z[z.length-2]]:[0,0];y=r?[i-s[0],o-s[1]]:[i-f,o-h];var d=[Math.abs(y[0]),Math.abs(y[1])];w=r?[Math.abs(y[0]/4),Math.abs(y[1]/4)]:[w,w];var p=[Math.abs(E[0].offsetTop)-y[0]*a(d[0]/w[0],w[0]),Math.abs(E[0].offsetLeft)-y[1]*a(d[1]/w[1],w[1])];S="yx"===_.axis?[p[0],p[1]]:"x"===_.axis?[null,p[1]]:[p[0],null],b=[4*d[0]+_.scrollInertia,4*d[1]+_.scrollInertia];var T=parseInt(_.contentTouchScroll)||0;S[0]=d[0]>T?S[0]:0,S[1]=d[1]>T?S[1]:0,k.overflowed[0]&&l(S[0],b[0],n,"y",$,!1),k.overflowed[1]&&l(S[1],b[1],n,"x",$,!1)}}}function a(t,e){var i=[1.5*e,2*e,e/1.5,e/2];return t>90?e>4?i[0]:i[3]:t>60?e>3?i[3]:i[2]:t>30?e>8?i[1]:e>6?i[0]:e>4?e:i[2]:e>8?e:i[3]}function l(t,e,i,o,n,r){t&&U(T,t.toString(),{dur:e,scrollEasing:i,dir:o,overwrite:n,drag:r})}var c,d,p,f,h,m,g,v,y,w,S,b,x,C,T=e(this),k=T.data(n),_=k.opt,P=n+"_"+k.idx,O=e("#mCSB_"+k.idx),E=e("#mCSB_"+k.idx+"_container"),L=[e("#mCSB_"+k.idx+"_dragger_vertical"),e("#mCSB_"+k.idx+"_dragger_horizontal")],A=[],z=[],D=0,$="yx"===_.axis?"none":"all",M=[],B=E.find("iframe"),H=["touchstart."+P+" pointerdown."+P+" MSPointerDown."+P,"touchmove."+P+" pointermove."+P+" MSPointerMove."+P,"touchend."+P+" pointerup."+P+" MSPointerUp."+P],F=void 0!==document.body.style.touchAction;E.bind(H[0],function(t){i(t)}).bind(H[1],function(t){o(t)}),O.bind(H[0],function(t){r(t)}).bind(H[2],function(t){s(t)}),B.length&&B.each(function(){e(this).load(function(){R(this)&&e(this.contentDocument||this.contentWindow.document).bind(H[0],function(t){i(t),r(t)}).bind(H[1],function(t){o(t)}).bind(H[2],function(t){s(t)})})})},z=function(){function i(){return window.getSelection?window.getSelection().toString():document.selection&&"Control"!=document.selection.type?document.selection.createRange().text:0}function o(t,e,i){c.type=i&&r?"stepped":"stepless",c.scrollAmount=10,j(s,t,e,"mcsLinearOut",i?60:null)}var r,s=e(this),a=s.data(n),l=a.opt,c=a.sequential,d=n+"_"+a.idx,p=e("#mCSB_"+a.idx+"_container"),f=p.parent();p.bind("mousedown."+d,function(e){t||r||(r=1,u=!0)}).add(document).bind("mousemove."+d,function(e){if(!t&&r&&i()){var n=p.offset(),s=I(e)[0]-n.top+p[0].offsetTop,u=I(e)[1]-n.left+p[0].offsetLeft;s>0&&s<f.height()&&u>0&&u<f.width()?c.step&&o("off",null,"stepped"):("x"!==l.axis&&a.overflowed[0]&&(s<0?o("on",38):s>f.height()&&o("on",40)),"y"!==l.axis&&a.overflowed[1]&&(u<0?o("on",37):u>f.width()&&o("on",39)))}}).bind("mouseup."+d+" dragend."+d,function(e){t||(r&&(r=0,o("off",null)),u=!1)})},D=function(){function t(t,n){if(q(i),!$(i,t.target)){var s="auto"!==r.mouseWheel.deltaFactor?parseInt(r.mouseWheel.deltaFactor):c&&t.deltaFactor<100?100:t.deltaFactor||100,u=r.scrollInertia;if("x"===r.axis||"x"===r.mouseWheel.axis)var d="x",p=[Math.round(s*o.scrollRatio.x),parseInt(r.mouseWheel.scrollAmount)],f="auto"!==r.mouseWheel.scrollAmount?p[1]:p[0]>=a.width()?.9*a.width():p[0],h=Math.abs(e("#mCSB_"+o.idx+"_container")[0].offsetLeft),m=l[1][0].offsetLeft,g=l[1].parent().width()-l[1].width(),v=t.deltaX||t.deltaY||n;else var d="y",p=[Math.round(s*o.scrollRatio.y),parseInt(r.mouseWheel.scrollAmount)],f="auto"!==r.mouseWheel.scrollAmount?p[1]:p[0]>=a.height()?.9*a.height():p[0],h=Math.abs(e("#mCSB_"+o.idx+"_container")[0].offsetTop),m=l[0][0].offsetTop,g=l[0].parent().height()-l[0].height(),v=t.deltaY||n;"y"===d&&!o.overflowed[0]||"x"===d&&!o.overflowed[1]||((r.mouseWheel.invert||t.webkitDirectionInvertedFromDevice)&&(v=-v),r.mouseWheel.normalizeDelta&&(v=v<0?-1:1),(v>0&&0!==m||v<0&&m!==g||r.mouseWheel.preventDefault)&&(t.stopImmediatePropagation(),t.preventDefault()),t.deltaFactor<2&&!r.mouseWheel.normalizeDelta&&(f=t.deltaFactor,u=17),U(i,(h-v*f).toString(),{dir:d,dur:u}))}}if(e(this).data(n)){var i=e(this),o=i.data(n),r=o.opt,s=n+"_"+o.idx,a=e("#mCSB_"+o.idx),l=[e("#mCSB_"+o.idx+"_dragger_vertical"),e("#mCSB_"+o.idx+"_dragger_horizontal")],u=e("#mCSB_"+o.idx+"_container").find("iframe");u.length&&u.each(function(){e(this).load(function(){R(this)&&e(this.contentDocument||this.contentWindow.document).bind("mousewheel."+s,function(e,i){t(e,i)})})}),a.bind("mousewheel."+s,function(e,i){0!=e.deltaX&&t(e,i)})}},R=function(t){var e=null;if(t){try{var i=t.contentDocument||t.contentWindow.document;e=i.body.innerHTML}catch(o){}return null!==e}try{var i=top.document;e=i.body.innerHTML}catch(o){}return null!==e},$=function(t,i){var o=i.nodeName.toLowerCase(),r=t.data(n).opt.mouseWheel.disableOver,s=["select","textarea"];return e.inArray(o,r)>-1&&!(e.inArray(o,s)>-1&&!e(i).is(":focus"))},M=function(){var t,i=e(this),o=i.data(n),r=n+"_"+o.idx,s=e("#mCSB_"+o.idx+"_container"),a=s.parent(),l=e(".mCSB_"+o.idx+"_scrollbar ."+d[12]);l.bind("mousedown."+r+" touchstart."+r+" pointerdown."+r+" MSPointerDown."+r,function(i){u=!0,e(i.target).hasClass("mCSB_dragger")||(t=1)}).bind("touchend."+r+" pointerup."+r+" MSPointerUp."+r,function(t){u=!1}).bind("click."+r,function(n){if(t&&(t=0,e(n.target).hasClass(d[12])||e(n.target).hasClass("mCSB_draggerRail"))){q(i);var r=e(this),l=r.find(".mCSB_dragger");if(r.parent(".mCSB_scrollTools_horizontal").length>0){if(!o.overflowed[1])return;var c="x",u=n.pageX>l.offset().left?-1:1,p=Math.abs(s[0].offsetLeft)-u*(.9*a.width())}else{if(!o.overflowed[0])return;var c="y",u=n.pageY>l.offset().top?-1:1,p=Math.abs(s[0].offsetTop)-u*(.9*a.height())}U(i,p.toString(),{dir:c,scrollEasing:"mcsEaseInOut"})}})},B=function(){var t=e(this),i=t.data(n),o=i.opt,r=n+"_"+i.idx,s=e("#mCSB_"+i.idx+"_container"),a=s.parent();s.bind("focusin."+r,function(i){var n=e(document.activeElement),r=s.find(".mCustomScrollBox").length,l=0;n.is(o.advanced.autoScrollOnFocus)&&(q(t),clearTimeout(t[0]._focusTimeout),t[0]._focusTimer=r?(l+17)*r:0,t[0]._focusTimeout=setTimeout(function(){var e=[it(n)[0],it(n)[1]],i=[s[0].offsetTop,s[0].offsetLeft],r=[i[0]+e[0]>=0&&i[0]+e[0]<a.height()-n.outerHeight(!1),i[1]+e[1]>=0&&i[0]+e[1]<a.width()-n.outerWidth(!1)],c="yx"!==o.axis||r[0]||r[1]?"all":"none";"x"===o.axis||r[0]||U(t,e[0].toString(),{dir:"y",scrollEasing:"mcsEaseInOut",overwrite:c,dur:l}),"y"===o.axis||r[1]||U(t,e[1].toString(),{dir:"x",scrollEasing:"mcsEaseInOut",overwrite:c,dur:l})},t[0]._focusTimer))})},H=function(){var t=e(this),i=t.data(n),o=n+"_"+i.idx,r=e("#mCSB_"+i.idx+"_container").parent();r.bind("scroll."+o,function(t){0===r.scrollTop()&&0===r.scrollLeft()||e(".mCSB_"+i.idx+"_scrollbar").css("visibility","hidden")})},F=function(){var t=e(this),i=t.data(n),o=i.opt,r=i.sequential,s=n+"_"+i.idx,a=".mCSB_"+i.idx+"_scrollbar",l=e(a+">a");l.bind("mousedown."+s+" touchstart."+s+" pointerdown."+s+" MSPointerDown."+s+" mouseup."+s+" touchend."+s+" pointerup."+s+" MSPointerUp."+s+" mouseout."+s+" pointerout."+s+" MSPointerOut."+s+" click."+s,function(n){function s(e,i){r.scrollAmount=o.scrollButtons.scrollAmount,j(t,e,i)}if(n.preventDefault(),K(n)){var a=e(this).attr("class");switch(r.type=o.scrollButtons.scrollType,n.type){case"mousedown":case"touchstart":case"pointerdown":case"MSPointerDown":if("stepped"===r.type)return;u=!0,i.tweenRunning=!1,s("on",a);break;case"mouseup":case"touchend":case"pointerup":case"MSPointerUp":case"mouseout":case"pointerout":case"MSPointerOut":if("stepped"===r.type)return;u=!1,r.dir&&s("off",a);break;case"click":if("stepped"!==r.type||i.tweenRunning)return;s("on",a)}}})},W=function(){function t(t){function n(t,e){s.type=r.keyboard.scrollType,s.scrollAmount=r.keyboard.scrollAmount,"stepped"===s.type&&o.tweenRunning||j(i,t,e)}switch(t.type){case"blur":o.tweenRunning&&s.dir&&n("off",null);break;case"keydown":case"keyup":var a=t.keyCode?t.keyCode:t.which,l="on";if("x"!==r.axis&&(38===a||40===a)||"y"!==r.axis&&(37===a||39===a)){if((38===a||40===a)&&!o.overflowed[0]||(37===a||39===a)&&!o.overflowed[1])return;"keyup"===t.type&&(l="off"),e(document.activeElement).is(d)||(t.preventDefault(),t.stopImmediatePropagation(),n(l,a))}else if(33===a||34===a){if((o.overflowed[0]||o.overflowed[1])&&(t.preventDefault(),t.stopImmediatePropagation()),"keyup"===t.type){q(i);var p=34===a?-1:1;if("x"===r.axis||"yx"===r.axis&&o.overflowed[1]&&!o.overflowed[0])var f="x",h=Math.abs(c[0].offsetLeft)-p*(.9*u.width());else var f="y",h=Math.abs(c[0].offsetTop)-p*(.9*u.height());U(i,h.toString(),{dir:f,scrollEasing:"mcsEaseInOut"})}}else if((35===a||36===a)&&!e(document.activeElement).is(d)&&((o.overflowed[0]||o.overflowed[1])&&(t.preventDefault(),t.stopImmediatePropagation()),"keyup"===t.type)){if("x"===r.axis||"yx"===r.axis&&o.overflowed[1]&&!o.overflowed[0])var f="x",h=35===a?Math.abs(u.width()-c.outerWidth(!1)):0;else var f="y",h=35===a?Math.abs(u.height()-c.outerHeight(!1)):0;U(i,h.toString(),{dir:f,scrollEasing:"mcsEaseInOut"})}}}var i=e(this),o=i.data(n),r=o.opt,s=o.sequential,a=n+"_"+o.idx,l=e("#mCSB_"+o.idx),c=e("#mCSB_"+o.idx+"_container"),u=c.parent(),d="input,textarea,select,datalist,keygen,[contenteditable='true']",p=c.find("iframe"),f=["blur."+a+" keydown."+a+" keyup."+a];p.length&&p.each(function(){e(this).load(function(){R(this)&&e(this.contentDocument||this.contentWindow.document).bind(f[0],function(e){t(e)})})}),l.attr("tabindex","0").bind(f[0],function(e){t(e)})},j=function(t,i,o,r,s){function a(e){u.snapAmount&&(p.scrollAmount=u.snapAmount instanceof Array?"x"===p.dir[0]?u.snapAmount[1]:u.snapAmount[0]:u.snapAmount);var i="stepped"!==p.type,o=s?s:e?i?m/1.5:g:1e3/60,n=e?i?7.5:40:2.5,l=[Math.abs(f[0].offsetTop),Math.abs(f[0].offsetLeft)],d=[c.scrollRatio.y>10?10:c.scrollRatio.y,c.scrollRatio.x>10?10:c.scrollRatio.x],h="x"===p.dir[0]?l[1]+p.dir[1]*(d[1]*n):l[0]+p.dir[1]*(d[0]*n),v="x"===p.dir[0]?l[1]+p.dir[1]*parseInt(p.scrollAmount):l[0]+p.dir[1]*parseInt(p.scrollAmount),y="auto"!==p.scrollAmount?v:h,w=r?r:e?i?"mcsLinearOut":"mcsEaseInOut":"mcsLinear",S=!!e;return e&&o<17&&(y="x"===p.dir[0]?l[1]:l[0]),U(t,y.toString(),{dir:p.dir[0],scrollEasing:w,dur:o,onComplete:S}),e?void(p.dir=!1):(clearTimeout(p.step),void(p.step=setTimeout(function(){a()},o)))}function l(){clearTimeout(p.step),J(p,"step"),q(t)}var c=t.data(n),u=c.opt,p=c.sequential,f=e("#mCSB_"+c.idx+"_container"),h="stepped"===p.type,m=u.scrollInertia<26?26:u.scrollInertia,g=u.scrollInertia<1?17:u.scrollInertia;switch(i){case"on":if(p.dir=[o===d[16]||o===d[15]||39===o||37===o?"x":"y",o===d[13]||o===d[15]||38===o||37===o?-1:1],q(t),et(o)&&"stepped"===p.type)return;a(h);break;case"off":l(),(h||c.tweenRunning&&p.dir)&&a(!0)}},V=function(t){var i=e(this).data(n).opt,o=[];return"function"==typeof t&&(t=t()),t instanceof Array?o=t.length>1?[t[0],t[1]]:"x"===i.axis?[null,t[0]]:[t[0],null]:(o[0]=t.y?t.y:t.x||"x"===i.axis?null:t,o[1]=t.x?t.x:t.y||"y"===i.axis?null:t),"function"==typeof o[0]&&(o[0]=o[0]()),"function"==typeof o[1]&&(o[1]=o[1]()),o},Y=function(t,i){if(null!=t&&"undefined"!=typeof t){var r=e(this),s=r.data(n),a=s.opt,l=e("#mCSB_"+s.idx+"_container"),c=l.parent(),u="undefined"==typeof t?"undefined":o(t);
i||(i="x"===a.axis?"x":"y");var d="x"===i?l.outerWidth(!1):l.outerHeight(!1),f="x"===i?l[0].offsetLeft:l[0].offsetTop,h="x"===i?"left":"top";switch(u){case"function":return t();case"object":var m=t.jquery?t:e(t);if(!m.length)return;return"x"===i?it(m)[1]:it(m)[0];case"string":case"number":if(et(t))return Math.abs(t);if(t.indexOf("%")!==-1)return Math.abs(d*parseInt(t)/100);if(t.indexOf("-=")!==-1)return Math.abs(f-parseInt(t.split("-=")[1]));if(t.indexOf("+=")!==-1){var g=f+parseInt(t.split("+=")[1]);return g>=0?0:Math.abs(g)}if(t.indexOf("px")!==-1&&et(t.split("px")[0]))return Math.abs(t.split("px")[0]);if("top"===t||"left"===t)return 0;if("bottom"===t)return Math.abs(c.height()-l.outerHeight(!1));if("right"===t)return Math.abs(c.width()-l.outerWidth(!1));if("first"===t||"last"===t){var m=l.find(":"+t);return"x"===i?it(m)[1]:it(m)[0]}return e(t).length?"x"===i?it(e(t))[1]:it(e(t))[0]:(l.css(h,t),void p.update.call(null,r[0]))}}},X=function(t){function i(){return clearTimeout(u[0].autoUpdate),0===a.parents("html").length?void(a=null):void(u[0].autoUpdate=setTimeout(function(){return c.advanced.updateOnSelectorChange&&(l.poll.change.n=r(),l.poll.change.n!==l.poll.change.o)?(l.poll.change.o=l.poll.change.n,void s(3)):c.advanced.updateOnContentResize&&(l.poll.size.n=a[0].scrollHeight+a[0].scrollWidth+u[0].offsetHeight+a[0].offsetHeight+a[0].offsetWidth,l.poll.size.n!==l.poll.size.o)?(l.poll.size.o=l.poll.size.n,void s(1)):!c.advanced.updateOnImageLoad||"auto"===c.advanced.updateOnImageLoad&&"y"===c.axis||(l.poll.img.n=u.find("img").length,l.poll.img.n===l.poll.img.o)?void((c.advanced.updateOnSelectorChange||c.advanced.updateOnContentResize||c.advanced.updateOnImageLoad)&&i()):(l.poll.img.o=l.poll.img.n,void u.find("img").each(function(){o(this)}))},c.advanced.autoUpdateTimeout))}function o(t){function i(t,e){return function(){return e.apply(t,arguments)}}function o(){this.onload=null,e(t).addClass(d[2]),s(2)}if(e(t).hasClass(d[2]))return void s();var n=new Image;n.onload=i(n,o),n.src=t.src}function r(){c.advanced.updateOnSelectorChange===!0&&(c.advanced.updateOnSelectorChange="*");var t=0,e=u.find(c.advanced.updateOnSelectorChange);return c.advanced.updateOnSelectorChange&&e.length>0&&e.each(function(){t+=this.offsetHeight+this.offsetWidth}),t}function s(t){clearTimeout(u[0].autoUpdate),p.update.call(null,a[0],t)}var a=e(this),l=a.data(n),c=l.opt,u=e("#mCSB_"+l.idx+"_container");return t?(clearTimeout(u[0].autoUpdate),void J(u[0],"autoUpdate")):void i()},N=function(t,e,i){return Math.round(t/e)*e-i},q=function(t){var i=t.data(n),o=e("#mCSB_"+i.idx+"_container,#mCSB_"+i.idx+"_container_wrapper,#mCSB_"+i.idx+"_dragger_vertical,#mCSB_"+i.idx+"_dragger_horizontal");o.each(function(){Q.call(this)})},U=function(t,i,o){function r(t){return l&&c.callbacks[t]&&"function"==typeof c.callbacks[t]}function s(){return[c.callbacks.alwaysTriggerOffsets||S>=b[0]+C,c.callbacks.alwaysTriggerOffsets||S<=-k]}function a(){var e=[f[0].offsetTop,f[0].offsetLeft],i=[y[0].offsetTop,y[0].offsetLeft],n=[f.outerHeight(!1),f.outerWidth(!1)],r=[p.height(),p.width()];t[0].mcs={content:f,top:e[0],left:e[1],draggerTop:i[0],draggerLeft:i[1],topPct:Math.round(100*Math.abs(e[0])/(Math.abs(n[0])-r[0])),leftPct:Math.round(100*Math.abs(e[1])/(Math.abs(n[1])-r[1])),direction:o.dir}}var l=t.data(n),c=l.opt,u={trigger:"internal",dir:"y",scrollEasing:"mcsEaseOut",drag:!1,dur:c.scrollInertia,overwrite:"all",callbacks:!0,onStart:!0,onUpdate:!0,onComplete:!0},o=e.extend(u,o),d=[o.dur,o.drag?0:o.dur],p=e("#mCSB_"+l.idx),f=e("#mCSB_"+l.idx+"_container"),h=f.parent(),m=c.callbacks.onTotalScrollOffset?V.call(t,c.callbacks.onTotalScrollOffset):[0,0],g=c.callbacks.onTotalScrollBackOffset?V.call(t,c.callbacks.onTotalScrollBackOffset):[0,0];if(l.trigger=o.trigger,0===h.scrollTop()&&0===h.scrollLeft()||(e(".mCSB_"+l.idx+"_scrollbar").css("visibility","visible"),h.scrollTop(0).scrollLeft(0)),"_resetY"!==i||l.contentReset.y||(r("onOverflowYNone")&&c.callbacks.onOverflowYNone.call(t[0]),l.contentReset.y=1),"_resetX"!==i||l.contentReset.x||(r("onOverflowXNone")&&c.callbacks.onOverflowXNone.call(t[0]),l.contentReset.x=1),"_resetY"!==i&&"_resetX"!==i){if(!l.contentReset.y&&t[0].mcs||!l.overflowed[0]||(r("onOverflowY")&&c.callbacks.onOverflowY.call(t[0]),l.contentReset.x=null),!l.contentReset.x&&t[0].mcs||!l.overflowed[1]||(r("onOverflowX")&&c.callbacks.onOverflowX.call(t[0]),l.contentReset.x=null),c.snapAmount){var v=c.snapAmount instanceof Array?"x"===o.dir?c.snapAmount[1]:c.snapAmount[0]:c.snapAmount;i=N(i,v,c.snapOffset)}switch(o.dir){case"x":var y=e("#mCSB_"+l.idx+"_dragger_horizontal"),w="left",S=f[0].offsetLeft,b=[p.width()-f.outerWidth(!1),y.parent().width()-y.width()],x=[i,0===i?0:i/l.scrollRatio.x],C=m[1],k=g[1],_=C>0?C/l.scrollRatio.x:0,P=k>0?k/l.scrollRatio.x:0;break;case"y":var y=e("#mCSB_"+l.idx+"_dragger_vertical"),w="top",S=f[0].offsetTop,b=[p.height()-f.outerHeight(!1),y.parent().height()-y.height()],x=[i,0===i?0:i/l.scrollRatio.y],C=m[0],k=g[0],_=C>0?C/l.scrollRatio.y:0,P=k>0?k/l.scrollRatio.y:0}x[1]<0||0===x[0]&&0===x[1]?x=[0,0]:x[1]>=b[1]?x=[b[0],b[1]]:x[0]=-x[0],t[0].mcs||(a(),r("onInit")&&c.callbacks.onInit.call(t[0])),clearTimeout(f[0].onCompleteTimeout),Z(y[0],w,Math.round(x[1]),d[1],o.scrollEasing),!l.tweenRunning&&(0===S&&x[0]>=0||S===b[0]&&x[0]<=b[0])||Z(f[0],w,Math.round(x[0]),d[0],o.scrollEasing,o.overwrite,{onStart:function(){o.callbacks&&o.onStart&&!l.tweenRunning&&(r("onScrollStart")&&(a(),c.callbacks.onScrollStart.call(t[0])),l.tweenRunning=!0,T(y),l.cbOffsets=s())},onUpdate:function(){o.callbacks&&o.onUpdate&&r("whileScrolling")&&(a(),c.callbacks.whileScrolling.call(t[0]))},onComplete:function(){if(o.callbacks&&o.onComplete){"yx"===c.axis&&clearTimeout(f[0].onCompleteTimeout);var e=f[0].idleTimer||0;f[0].onCompleteTimeout=setTimeout(function(){r("onScroll")&&(a(),c.callbacks.onScroll.call(t[0])),r("onTotalScroll")&&x[1]>=b[1]-_&&l.cbOffsets[0]&&(a(),c.callbacks.onTotalScroll.call(t[0])),r("onTotalScrollBack")&&x[1]<=P&&l.cbOffsets[1]&&(a(),c.callbacks.onTotalScrollBack.call(t[0])),l.tweenRunning=!1,f[0].idleTimer=0,T(y,"hide")},e)}}})}},Z=function(t,e,i,o,n,r,s){function a(){b.stop||(y||h.call(),y=G()-v,l(),y>=b.time&&(b.time=y>b.time?y+p-(y-b.time):y+p-1,b.time<y+1&&(b.time=y+1)),b.time<o?b.id=f(a):g.call())}function l(){o>0?(b.currVal=d(b.time,w,x,o,n),S[e]=Math.round(b.currVal)+"px"):S[e]=i+"px",m.call()}function c(){p=1e3/60,b.time=y+p,f=window.requestAnimationFrame?window.requestAnimationFrame:function(t){return l(),setTimeout(t,.01)},b.id=f(a)}function u(){null!=b.id&&(window.requestAnimationFrame?window.cancelAnimationFrame(b.id):clearTimeout(b.id),b.id=null)}function d(t,e,i,o,n){switch(n){case"linear":case"mcsLinear":return i*t/o+e;case"mcsLinearOut":return t/=o,t--,i*Math.sqrt(1-t*t)+e;case"easeInOutSmooth":return t/=o/2,t<1?i/2*t*t+e:(t--,-i/2*(t*(t-2)-1)+e);case"easeInOutStrong":return t/=o/2,t<1?i/2*Math.pow(2,10*(t-1))+e:(t--,i/2*(-Math.pow(2,-10*t)+2)+e);case"easeInOut":case"mcsEaseInOut":return t/=o/2,t<1?i/2*t*t*t+e:(t-=2,i/2*(t*t*t+2)+e);case"easeOutSmooth":return t/=o,t--,-i*(t*t*t*t-1)+e;case"easeOutStrong":return i*(-Math.pow(2,-10*t/o)+1)+e;case"easeOut":case"mcsEaseOut":default:var r=(t/=o)*t,s=r*t;return e+i*(.499999999999997*s*r+-2.5*r*r+5.5*s+-6.5*r+4*t)}}t._mTween||(t._mTween={top:{},left:{}});var p,f,s=s||{},h=s.onStart||function(){},m=s.onUpdate||function(){},g=s.onComplete||function(){},v=G(),y=0,w=t.offsetTop,S=t.style,b=t._mTween[e];"left"===e&&(w=t.offsetLeft);var x=i-w;b.stop=0,"none"!==r&&u(),c()},G=function(){return window.performance&&window.performance.now?window.performance.now():window.performance&&window.performance.webkitNow?window.performance.webkitNow():Date.now?Date.now():(new Date).getTime()},Q=function(){var t=this;t._mTween||(t._mTween={top:{},left:{}});for(var e=["top","left"],i=0;i<e.length;i++){var o=e[i];t._mTween[o].id&&(window.requestAnimationFrame?window.cancelAnimationFrame(t._mTween[o].id):clearTimeout(t._mTween[o].id),t._mTween[o].id=null,t._mTween[o].stop=1)}},J=function(t,e){try{delete t[e]}catch(i){t[e]=null}},K=function(t){return!(t.which&&1!==t.which)},tt=function(t){var e=t.originalEvent.pointerType;return!(e&&"touch"!==e&&2!==e)},et=function(t){return!isNaN(parseFloat(t))&&isFinite(t)},it=function(t){var e=t.parents(".mCSB_container");return[t.offset().top-e.offset().top,t.offset().left-e.offset().left]},ot=function(){function t(){var t=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var e=0;e<t.length;e++)if(t[e]+"Hidden"in document)return t[e]+"Hidden";return null}var e=t();return!!e&&document[e]};e.fn[i]=function(t){return p[t]?p[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!==("undefined"==typeof t?"undefined":o(t))&&t?void e.error("Method "+t+" does not exist"):p.init.apply(this,arguments)},e[i]=function(t){return p[t]?p[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!==("undefined"==typeof t?"undefined":o(t))&&t?void e.error("Method "+t+" does not exist"):p.init.apply(this,arguments)},e[i].defaults=s,window[i]=!0,e(window).load(function(){e(r)[i](),e.extend(e.expr[":"],{mcsInView:e.expr[":"].mcsInView||function(t){var i,o,n=e(t),r=n.parents(".mCSB_container");if(r.length)return i=r.parent(),o=[r[0].offsetTop,r[0].offsetLeft],o[0]+it(n)[0]>=0&&o[0]+it(n)[0]<i.height()-n.outerHeight(!1)&&o[1]+it(n)[1]>=0&&o[1]+it(n)[1]<i.width()-n.outerWidth(!1)},mcsOverflow:e.expr[":"].mcsOverflow||function(t){var i=e(t).data(n);if(i)return i.overflowed[0]||i.overflowed[1]}})})})})},684:function(t,e){(function(e){t.exports=e}).call(e,{})}});
;(function($) {
  setTimeout(checkContainer, 1000);

  function checkContainer(){
    jQuery('.product-type-variable .variations-radio input:checked').click();
  }

  $('.product-type-variable .variations-radio label').on('click', function(){
    if(!$(this).find('input:checked').length > 0){
      $('.tmhexcolorimage-li-nowh').removeClass('tc-active');
      $('.tmcp-checkbox').prop('checked', false);
    }

  })

  $('.gst-product-variation-box-inner .fa-close').on('click', function(){
    $('body').click();
  })


  function setCookieWooCommerceOpenClose(cname, hours) {

    var d = new Date();
    d.setTime(d.getTime() + (hours * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + true + ";" + expires + ";path=/";

  }

  function getCookieWooCommerceOpenClose(cname) {

    var name = cname + "=";
    var ca = document.cookie.split(';');

    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }

      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }


  function checkCookieWooCommerceOpenClose() {
    var cookie = getCookieWooCommerceOpenClose("WooCommerceOpenClose");
    if (cookie != "") {
    } else {
      setCookieWooCommerceOpenClose("WooCommerceOpenClose", 1);
    }
  }

  jQuery(document).ready(function ($) {

    if (getCookieWooCommerceOpenClose("WooCommerceOpenClose")) {
      $(".shop-status-bar").hide();
    }

    $(document).on('click', '.shop-status-bar .shop-status-bar-inline.close-bar', function () {
      checkCookieWooCommerceOpenClose();
    });
  });

})( jQuery )

!function (e) {
  function t(n) {
    if (i[n]) return i[n].exports;
    var s = i[n] = {exports: {}, id: n, loaded: !1};
    return e[n].call(s.exports, s, s.exports, t), s.loaded = !0, s.exports
  }

  var i = {};
  return t.m = e, t.c = i, t.p = "", t(0)
}({
  0: function (e, t, i) {
    e.exports = i(584)
  }, 8: function (e, t) {
    e.exports = jQuery
  }, 128: function (e, t) {/*!
	 * Legacy browser support
	 */
    [].map || (Array.prototype.map = function (e, t) {
      for (var i = this, n = i.length, s = new Array(n), o = 0; o < n; o++) o in i && (s[o] = e.call(t, i[o], o, i));
      return s
    }), [].filter || (Array.prototype.filter = function (e) {
      if (null == this) throw new TypeError;
      var t = Object(this), i = t.length >>> 0;
      if ("function" != typeof e) throw new TypeError;
      for (var n = [], s = arguments[1], o = 0; o < i; o++) if (o in t) {
        var r = t[o];
        e.call(s, r, o, t) && n.push(r)
      }
      return n
    }), [].indexOf || (Array.prototype.indexOf = function (e) {
      if (null == this) throw new TypeError;
      var t = Object(this), i = t.length >>> 0;
      if (0 === i) return -1;
      var n = 0;
      if (arguments.length > 1 && (n = Number(arguments[1]), n != n ? n = 0 : 0 !== n && n != 1 / 0 && n != -(1 / 0) && (n = (n > 0 || -1) * Math.floor(Math.abs(n)))), n >= i) return -1;
      for (var s = n >= 0 ? n : Math.max(i - Math.abs(n), 0); s < i; s++) if (s in t && t[s] === e) return s;
      return -1
    });/*!
	 * Cross-Browser Split 1.1.1
	 * Copyright 2007-2012 Steven Levithan <stevenlevithan.com>
	 * Available under the MIT License
	 * http://blog.stevenlevithan.com/archives/cross-browser-split
	 */
    var i = String.prototype.split, n = void 0 === /()??/.exec("")[1];
    String.prototype.split = function (e, t) {
      var s = this;
      if ("[object RegExp]" !== Object.prototype.toString.call(e)) return i.call(s, e, t);
      var o, r, a, l, c = [],
          d = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.extended ? "x" : "") + (e.sticky ? "y" : ""),
          u = 0;
      for (e = new RegExp(e.source, d + "g"), s += "", n || (o = new RegExp("^" + e.source + "$(?!\\s)", d)), t = void 0 === t ? -1 >>> 0 : t >>> 0; (r = e.exec(s)) && (a = r.index + r[0].length, !(a > u && (c.push(s.slice(u, r.index)), !n && r.length > 1 && r[0].replace(o, function () {
        for (var e = 1; e < arguments.length - 2; e++) void 0 === arguments[e] && (r[e] = void 0)
      }), r.length > 1 && r.index < s.length && Array.prototype.push.apply(c, r.slice(1)), l = r[0].length, u = a, c.length >= t)));) e.lastIndex === r.index && e.lastIndex++;
      return u === s.length ? !l && e.test("") || c.push("") : c.push(s.slice(u)), c.length > t ? c.slice(0, t) : c
    }
  }, 129: function (e, t, i) {
    var n, s, o;/*!
	 * pickadate.js v3.5.6, 2015/04/20
	 * By Amsul, http://amsul.ca
	 * Hosted on http://amsul.github.io/pickadate.js
	 * Licensed under MIT
	 */
    !function (r) {
      s = [i(8)], n = r, o = "function" == typeof n ? n.apply(t, s) : n, !(void 0 !== o && (e.exports = o))
    }(function (e) {
      function t(o, r, l, h) {
        function p() {
          return t._.node("div", t._.node("div", t._.node("div", t._.node("div", O.component.nodes(S.open), C.box), C.wrap), C.frame), C.holder, 'tabindex="-1"')
        }

        function f() {
          _.data(r, O).addClass(C.input).val(_.data("value") ? O.get("select", k.format) : o.value), k.editable || _.on("focus." + S.id + " click." + S.id, function (e) {
            e.preventDefault(), O.open()
          }).on("keydown." + S.id, y), s(o, {haspopup: !0, expanded: !1, readonly: !1, owns: o.id + "_root"})
        }

        function m() {
          s(O.$root[0], "hidden", !0)
        }

        function g() {
          O.$holder.on({
            keydown: y, "focus.toOpen": w, blur: function () {
              _.removeClass(C.target)
            }, focusin: function (e) {
              O.$root.removeClass(C.focused), e.stopPropagation()
            }, "mousedown click": function (t) {
              var i = t.target;
              i != O.$holder[0] && (t.stopPropagation(), "mousedown" != t.type || e(i).is("input, select, textarea, button, option") || (t.preventDefault(), O.$holder[0].focus()))
            }
          }).on("click", "[data-pick], [data-nav], [data-clear], [data-close]", function () {
            var t = e(this), i = t.data(), n = t.hasClass(C.navDisabled) || t.hasClass(C.disabled), s = a();
            s = s && (s.type || s.href), (n || s && !e.contains(O.$root[0], s)) && O.$holder[0].focus(), !n && i.nav ? O.set("highlight", O.component.item.highlight, {nav: i.nav}) : !n && "pick" in i ? (O.set("select", i.pick), k.closeOnSelect && O.close(!0)) : i.clear ? (O.clear(), k.closeOnClear && O.close(!0)) : i.close && O.close(!0)
          })
        }

        function v() {
          var t;
          k.hiddenName === !0 ? (t = o.name, o.name = "") : (t = ["string" == typeof k.hiddenPrefix ? k.hiddenPrefix : "", "string" == typeof k.hiddenSuffix ? k.hiddenSuffix : "_submit"], t = t[0] + o.name + t[1]), O._hidden = e('<input type=hidden name="' + t + '"' + (_.data("value") || o.value ? ' value="' + O.get("select", k.formatSubmit) + '"' : "") + ">")[0], _.on("change." + S.id, function () {
            O._hidden.value = o.value ? O.get("select", k.formatSubmit) : ""
          })
        }

        function b() {
          x && u ? O.$holder.find("." + C.frame).one("transitionend", function () {
            O.$holder[0].focus()
          }) : O.$holder[0].focus()
        }

        function w(e) {
          e.stopPropagation(), _.addClass(C.target), O.$root.addClass(C.focused), O.open()
        }

        function y(e) {
          var t = e.keyCode, i = /^(8|46)$/.test(t);
          return 27 == t ? (O.close(!0), !1) : void ((32 == t || i || !S.open && O.component.key[t]) && (e.preventDefault(), e.stopPropagation(), i ? O.clear().close() : O.open()))
        }

        if (!o) return t;
        var x = !1, S = {id: o.id || "P" + Math.abs(~~(Math.random() * new Date))},
            k = l ? e.extend(!0, {}, l.defaults, h) : h || {}, C = e.extend({}, t.klasses(), k.klass), _ = e(o),
            T = function () {
              return this.start()
            }, O = T.prototype = {
              constructor: T, $node: _, start: function () {
                return S && S.start ? O : (S.methods = {}, S.start = !0, S.open = !1, S.type = o.type, o.autofocus = o == a(), o.readOnly = !k.editable, o.id = o.id || S.id, "text" != o.type && (o.type = "text"), O.component = new l(O, k), O.$root = e('<div class="' + C.picker + '" id="' + o.id + '_root" />'), m(), O.$holder = e(p()).appendTo(O.$root), g(), k.formatSubmit && v(), f(), k.containerHidden ? e(k.containerHidden).append(O._hidden) : _.after(O._hidden), k.container ? e(k.container).append(O.$root) : _.after(O.$root), O.on({
                  start: O.component.onStart,
                  render: O.component.onRender,
                  stop: O.component.onStop,
                  open: O.component.onOpen,
                  close: O.component.onClose,
                  set: O.component.onSet
                }).on({
                  start: k.onStart,
                  render: k.onRender,
                  stop: k.onStop,
                  open: k.onOpen,
                  close: k.onClose,
                  set: k.onSet
                }), x = i(O.$holder[0]), o.autofocus && O.open(), O.trigger("start").trigger("render"))
              }, render: function (t) {
                return t ? (O.$holder = e(p()), g(), O.$root.html(O.$holder)) : O.$root.find("." + C.box).html(O.component.nodes(S.open)), O.trigger("render")
              }, stop: function () {
                return S.start ? (O.close(), O._hidden && O._hidden.parentNode.removeChild(O._hidden), O.$root.remove(), _.removeClass(C.input).removeData(r), setTimeout(function () {
                  _.off("." + S.id)
                }, 0), o.type = S.type, o.readOnly = !1, O.trigger("stop"), S.methods = {}, S.start = !1, O) : O
              }, open: function (i) {
                return S.open ? O : (_.addClass(C.active), s(o, "expanded", !0), setTimeout(function () {
                  O.$root.addClass(C.opened), s(O.$root[0], "hidden", !1)
                }, 0), i !== !1 && (S.open = !0, x && d.css("overflow", "hidden").css("padding-right", "+=" + n()), b(), c.on("click." + S.id + " focusin." + S.id, function (e) {
                  var t = e.target;
                  t != o && t != document && 3 != e.which && O.close(t === O.$holder[0])
                }).on("keydown." + S.id, function (i) {
                  var n = i.keyCode, s = O.component.key[n], o = i.target;
                  27 == n ? O.close(!0) : o != O.$holder[0] || !s && 13 != n ? e.contains(O.$root[0], o) && 13 == n && (i.preventDefault(), o.click()) : (i.preventDefault(), s ? t._.trigger(O.component.key.go, O, [t._.trigger(s)]) : O.$root.find("." + C.highlighted).hasClass(C.disabled) || (O.set("select", O.component.item.highlight), k.closeOnSelect && O.close(!0)))
                })), O.trigger("open"))
              }, close: function (e) {
                return e && (k.editable ? o.focus() : (O.$holder.off("focus.toOpen").focus(), setTimeout(function () {
                  O.$holder.on("focus.toOpen", w)
                }, 0))), _.removeClass(C.active), s(o, "expanded", !1), setTimeout(function () {
                  O.$root.removeClass(C.opened + " " + C.focused), s(O.$root[0], "hidden", !0)
                }, 0), S.open ? (S.open = !1, x && d.css("overflow", "").css("padding-right", "-=" + n()), c.off("." + S.id), O.trigger("close")) : O
              }, clear: function (e) {
                return O.set("clear", null, e)
              }, set: function (t, i, n) {
                var s, o, r = e.isPlainObject(t), a = r ? t : {};
                if (n = r && e.isPlainObject(i) ? i : n || {}, t) {
                  r || (a[t] = i);
                  for (s in a) o = a[s], s in O.component.item && (void 0 === o && (o = null), O.component.set(s, o, n)), "select" != s && "clear" != s || _.val("clear" == s ? "" : O.get(s, k.format)).trigger("change");
                  O.render()
                }
                return n.muted ? O : O.trigger("set", a)
              }, get: function (e, i) {
                if (e = e || "value", null != S[e]) return S[e];
                if ("valueSubmit" == e) {
                  if (O._hidden) return O._hidden.value;
                  e = "value"
                }
                if ("value" == e) return o.value;
                if (e in O.component.item) {
                  if ("string" == typeof i) {
                    var n = O.component.get(e);
                    return n ? t._.trigger(O.component.formats.toString, O.component, [i, n]) : ""
                  }
                  return O.component.get(e)
                }
              }, on: function (t, i, n) {
                var s, o, r = e.isPlainObject(t), a = r ? t : {};
                if (t) {
                  r || (a[t] = i);
                  for (s in a) o = a[s], n && (s = "_" + s), S.methods[s] = S.methods[s] || [], S.methods[s].push(o)
                }
                return O
              }, off: function () {
                var e, t, i = arguments;
                for (e = 0, namesCount = i.length; e < namesCount; e += 1) t = i[e], t in S.methods && delete S.methods[t];
                return O
              }, trigger: function (e, i) {
                var n = function (e) {
                  var n = S.methods[e];
                  n && n.map(function (e) {
                    t._.trigger(e, O, [i])
                  })
                };
                return n("_" + e), n(e), O
              }
            };
        return new T
      }

      function i(e) {
        var t, i = "position";
        return e.currentStyle ? t = e.currentStyle[i] : window.getComputedStyle && (t = getComputedStyle(e)[i]), "fixed" == t
      }

      function n() {
        if (d.height() <= l.height()) return 0;
        var t = e('<div style="visibility:hidden;width:100px" />').appendTo("body"), i = t[0].offsetWidth;
        t.css("overflow", "scroll");
        var n = e('<div style="width:100%" />').appendTo(t), s = n[0].offsetWidth;
        return t.remove(), i - s
      }

      function s(t, i, n) {
        if (e.isPlainObject(i)) for (var s in i) o(t, s, i[s]); else o(t, i, n)
      }

      function o(e, t, i) {
        e.setAttribute(("role" == t ? "" : "aria-") + t, i)
      }

      function r(t, i) {
        e.isPlainObject(t) || (t = {attribute: i}), i = "";
        for (var n in t) {
          var s = ("role" == n ? "" : "aria-") + n, o = t[n];
          i += null == o ? "" : s + '="' + t[n] + '"'
        }
        return i
      }

      function a() {
        try {
          return document.activeElement
        } catch (e) {
        }
      }

      var l = e(window), c = e(document), d = e(document.documentElement),
          u = null != document.documentElement.style.transition;
      return t.klasses = function (e) {
        return e = e || "picker", {
          picker: e,
          opened: e + "--opened",
          focused: e + "--focused",
          input: e + "__input",
          active: e + "__input--active",
          target: e + "__input--target",
          holder: e + "__holder",
          frame: e + "__frame",
          wrap: e + "__wrap",
          box: e + "__box"
        }
      }, t._ = {
        group: function (e) {
          for (var i, n = "", s = t._.trigger(e.min, e); s <= t._.trigger(e.max, e, [s]); s += e.i) i = t._.trigger(e.item, e, [s]), n += t._.node(e.node, i[0], i[1], i[2]);
          return n
        }, node: function (t, i, n, s) {
          return i ? (i = e.isArray(i) ? i.join("") : i, n = n ? ' class="' + n + '"' : "", s = s ? " " + s : "", "<" + t + n + s + ">" + i + "</" + t + ">") : ""
        }, lead: function (e) {
          return (e < 10 ? "0" : "") + e
        }, trigger: function (e, t, i) {
          return "function" == typeof e ? e.apply(t, i || []) : e
        }, digits: function (e) {
          return /\d/.test(e[1]) ? 2 : 1
        }, isDate: function (e) {
          return {}.toString.call(e).indexOf("Date") > -1 && this.isInteger(e.getDate())
        }, isInteger: function (e) {
          return {}.toString.call(e).indexOf("Number") > -1 && e % 1 === 0
        }, ariaAttr: r
      }, t.extend = function (i, n) {
        e.fn[i] = function (s, o) {
          var r = this.data(i);
          return "picker" == s ? r : r && "string" == typeof s ? t._.trigger(r[s], r, [o]) : this.each(function () {
            var o = e(this);
            o.data(i) || new t(this, i, n, s)
          })
        }, e.fn[i].defaults = n.defaults
      }, t
    })
  }, 130: function (e, t, i) {
    var n, s, o;/*!
	 * Date picker for pickadate.js v3.5.6
	 * http://amsul.github.io/pickadate.js/date.htm
	 */
    !function (r) {
      s = [i(129), i(8)], n = r, o = "function" == typeof n ? n.apply(t, s) : n, !(void 0 !== o && (e.exports = o))
    }(function (e, t) {
      function i(e, t) {
        var i = this, n = e.$node[0], s = n.value, o = e.$node.data("value"), r = o || s,
            a = o ? t.formatSubmit : t.format, l = function () {
              return n.currentStyle ? "rtl" == n.currentStyle.direction : "rtl" == getComputedStyle(e.$root[0]).direction
            };
        i.settings = t, i.$node = e.$node, i.queue = {
          min: "measure create",
          max: "measure create",
          now: "now create",
          select: "parse create validate",
          highlight: "parse navigate create validate",
          view: "parse create validate viewset",
          disable: "deactivate",
          enable: "activate"
        }, i.item = {}, i.item.clear = null, i.item.disable = (t.disable || []).slice(0), i.item.enable = -function (e) {
          return e[0] === !0 ? e.shift() : -1
        }(i.item.disable), i.set("min", t.min).set("max", t.max).set("now"), r ? i.set("select", r, {
          format: a,
          defaultValue: !0
        }) : i.set("select", null).set("highlight", i.item.now), i.key = {
          40: 7, 38: -7, 39: function () {
            return l() ? -1 : 1
          }, 37: function () {
            return l() ? 1 : -1
          }, go: function (e) {
            var t = i.item.highlight, n = new Date(t.year, t.month, t.date + e);
            i.set("highlight", n, {interval: e}), this.render()
          }
        }, e.on("render", function () {
          e.$root.find("." + t.klass.selectMonth).on("change", function () {
            var i = this.value;
            i && (e.set("highlight", [e.get("view").year, i, e.get("highlight").date]), e.$root.find("." + t.klass.selectMonth).trigger("focus"))
          }), e.$root.find("." + t.klass.selectYear).on("change", function () {
            var i = this.value;
            i && (e.set("highlight", [i, e.get("view").month, e.get("highlight").date]), e.$root.find("." + t.klass.selectYear).trigger("focus"))
          })
        }, 1).on("open", function () {
          var n = "";
          i.disabled(i.get("now")) && (n = ":not(." + t.klass.buttonToday + ")"), e.$root.find("button" + n + ", select").attr("disabled", !1)
        }, 1).on("close", function () {
          e.$root.find("button, select").attr("disabled", !0)
        }, 1)
      }

      var n = 7, s = 6, o = e._;
      i.prototype.set = function (e, t, i) {
        var n = this, s = n.item;
        return null === t ? ("clear" == e && (e = "select"), s[e] = t, n) : (s["enable" == e ? "disable" : "flip" == e ? "enable" : e] = n.queue[e].split(" ").map(function (s) {
          return t = n[s](e, t, i)
        }).pop(), "select" == e ? n.set("highlight", s.select, i) : "highlight" == e ? n.set("view", s.highlight, i) : e.match(/^(flip|min|max|disable|enable)$/) && (s.select && n.disabled(s.select) && n.set("select", s.select, i), s.highlight && n.disabled(s.highlight) && n.set("highlight", s.highlight, i)), n)
      }, i.prototype.get = function (e) {
        return this.item[e]
      }, i.prototype.create = function (e, i, n) {
        var s, r = this;
        return i = void 0 === i ? e : i, i == -(1 / 0) || i == 1 / 0 ? s = i : t.isPlainObject(i) && o.isInteger(i.pick) ? i = i.obj : t.isArray(i) ? (i = new Date(i[0], i[1], i[2]), i = o.isDate(i) ? i : r.create().obj) : i = o.isInteger(i) || o.isDate(i) ? r.normalize(new Date(i), n) : r.now(e, i, n), {
          year: s || i.getFullYear(),
          month: s || i.getMonth(),
          date: s || i.getDate(),
          day: s || i.getDay(),
          obj: s || i,
          pick: s || i.getTime()
        }
      }, i.prototype.createRange = function (e, i) {
        var n = this, s = function (e) {
          return e === !0 || t.isArray(e) || o.isDate(e) ? n.create(e) : e
        };
        return o.isInteger(e) || (e = s(e)), o.isInteger(i) || (i = s(i)), o.isInteger(e) && t.isPlainObject(i) ? e = [i.year, i.month, i.date + e] : o.isInteger(i) && t.isPlainObject(e) && (i = [e.year, e.month, e.date + i]), {
          from: s(e),
          to: s(i)
        }
      }, i.prototype.withinRange = function (e, t) {
        return e = this.createRange(e.from, e.to), t.pick >= e.from.pick && t.pick <= e.to.pick
      }, i.prototype.overlapRanges = function (e, t) {
        var i = this;
        return e = i.createRange(e.from, e.to), t = i.createRange(t.from, t.to), i.withinRange(e, t.from) || i.withinRange(e, t.to) || i.withinRange(t, e.from) || i.withinRange(t, e.to)
      }, i.prototype.now = function (e, t, i) {
        return t = new Date, i && i.rel && t.setDate(t.getDate() + i.rel), this.normalize(t, i)
      }, i.prototype.navigate = function (e, i, n) {
        var s, o, r, a, l = t.isArray(i), c = t.isPlainObject(i), d = this.item.view;
        if (l || c) {
          for (c ? (o = i.year, r = i.month, a = i.date) : (o = +i[0], r = +i[1], a = +i[2]), n && n.nav && d && d.month !== r && (o = d.year, r = d.month), s = new Date(o, r + (n && n.nav ? n.nav : 0), 1), o = s.getFullYear(), r = s.getMonth(); new Date(o, r, a).getMonth() !== r;) a -= 1;
          i = [o, r, a]
        }
        return i
      }, i.prototype.normalize = function (e) {
        return e.setHours(0, 0, 0, 0), e
      }, i.prototype.measure = function (e, t) {
        var i = this;
        return t ? "string" == typeof t ? t = i.parse(e, t) : o.isInteger(t) && (t = i.now(e, t, {rel: t})) : t = "min" == e ? -(1 / 0) : 1 / 0, t
      }, i.prototype.viewset = function (e, t) {
        return this.create([t.year, t.month, 1])
      }, i.prototype.validate = function (e, i, n) {
        var s, r, a, l, c = this, d = i, u = n && n.interval ? n.interval : 1, h = c.item.enable === -1, p = c.item.min,
            f = c.item.max, m = h && c.item.disable.filter(function (e) {
              if (t.isArray(e)) {
                var n = c.create(e).pick;
                n < i.pick ? s = !0 : n > i.pick && (r = !0)
              }
              return o.isInteger(e)
            }).length;
        if ((!n || !n.nav && !n.defaultValue) && (!h && c.disabled(i) || h && c.disabled(i) && (m || s || r) || !h && (i.pick <= p.pick || i.pick >= f.pick))) for (h && !m && (!r && u > 0 || !s && u < 0) && (u *= -1); c.disabled(i) && (Math.abs(u) > 1 && (i.month < d.month || i.month > d.month) && (i = d, u = u > 0 ? 1 : -1), i.pick <= p.pick ? (a = !0, u = 1, i = c.create([p.year, p.month, p.date + (i.pick === p.pick ? 0 : -1)])) : i.pick >= f.pick && (l = !0, u = -1, i = c.create([f.year, f.month, f.date + (i.pick === f.pick ? 0 : 1)])), !a || !l);) i = c.create([i.year, i.month, i.date + u]);
        return i
      }, i.prototype.disabled = function (e) {
        var i = this, n = i.item.disable.filter(function (n) {
          return o.isInteger(n) ? e.day === (i.settings.firstDay ? n : n - 1) % 7 : t.isArray(n) || o.isDate(n) ? e.pick === i.create(n).pick : t.isPlainObject(n) ? i.withinRange(n, e) : void 0
        });
        return n = n.length && !n.filter(function (e) {
          return t.isArray(e) && "inverted" == e[3] || t.isPlainObject(e) && e.inverted
        }).length, i.item.enable === -1 ? !n : n || e.pick < i.item.min.pick || e.pick > i.item.max.pick
      }, i.prototype.parse = function (e, t, i) {
        var n = this, s = {};
        return t && "string" == typeof t ? (i && i.format || (i = i || {}, i.format = n.settings.format), n.formats.toArray(i.format).map(function (e) {
          var i = n.formats[e], r = i ? o.trigger(i, n, [t, s]) : e.replace(/^!/, "").length;
          i && (s[e] = t.substr(0, r)), t = t.substr(r)
        }), [s.yyyy || s.yy, +(s.mm || s.m) - 1, s.dd || s.d]) : t
      }, i.prototype.formats = function () {
        function e(e, t, i) {
          var n = e.match(/[^\x00-\x7F]+|\w+/)[0];
          return i.mm || i.m || (i.m = t.indexOf(n) + 1), n.length
        }

        function t(e) {
          return e.match(/\w+/)[0].length
        }

        return {
          d: function (e, t) {
            return e ? o.digits(e) : t.date
          }, dd: function (e, t) {
            return e ? 2 : o.lead(t.date)
          }, ddd: function (e, i) {
            return e ? t(e) : this.settings.weekdaysShort[i.day]
          }, dddd: function (e, i) {
            return e ? t(e) : this.settings.weekdaysFull[i.day]
          }, m: function (e, t) {
            return e ? o.digits(e) : t.month + 1
          }, mm: function (e, t) {
            return e ? 2 : o.lead(t.month + 1)
          }, mmm: function (t, i) {
            var n = this.settings.monthsShort;
            return t ? e(t, n, i) : n[i.month]
          }, mmmm: function (t, i) {
            var n = this.settings.monthsFull;
            return t ? e(t, n, i) : n[i.month]
          }, yy: function (e, t) {
            return e ? 2 : ("" + t.year).slice(2)
          }, yyyy: function (e, t) {
            return e ? 4 : t.year
          }, toArray: function (e) {
            return e.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g)
          }, toString: function (e, t) {
            var i = this;
            return i.formats.toArray(e).map(function (e) {
              return o.trigger(i.formats[e], i, [0, t]) || e.replace(/^!/, "")
            }).join("")
          }
        }
      }(), i.prototype.isDateExact = function (e, i) {
        var n = this;
        return o.isInteger(e) && o.isInteger(i) || "boolean" == typeof e && "boolean" == typeof i ? e === i : (o.isDate(e) || t.isArray(e)) && (o.isDate(i) || t.isArray(i)) ? n.create(e).pick === n.create(i).pick : !(!t.isPlainObject(e) || !t.isPlainObject(i)) && (n.isDateExact(e.from, i.from) && n.isDateExact(e.to, i.to))
      }, i.prototype.isDateOverlap = function (e, i) {
        var n = this, s = n.settings.firstDay ? 1 : 0;
        return o.isInteger(e) && (o.isDate(i) || t.isArray(i)) ? (e = e % 7 + s, e === n.create(i).day + 1) : o.isInteger(i) && (o.isDate(e) || t.isArray(e)) ? (i = i % 7 + s, i === n.create(e).day + 1) : !(!t.isPlainObject(e) || !t.isPlainObject(i)) && n.overlapRanges(e, i)
      }, i.prototype.flipEnable = function (e) {
        var t = this.item;
        t.enable = e || (t.enable == -1 ? 1 : -1)
      }, i.prototype.deactivate = function (e, i) {
        var n = this, s = n.item.disable.slice(0);
        return "flip" == i ? n.flipEnable() : i === !1 ? (n.flipEnable(1), s = []) : i === !0 ? (n.flipEnable(-1), s = []) : i.map(function (e) {
          for (var i, r = 0; r < s.length; r += 1) if (n.isDateExact(e, s[r])) {
            i = !0;
            break
          }
          i || (o.isInteger(e) || o.isDate(e) || t.isArray(e) || t.isPlainObject(e) && e.from && e.to) && s.push(e)
        }), s
      }, i.prototype.activate = function (e, i) {
        var n = this, s = n.item.disable, r = s.length;
        return "flip" == i ? n.flipEnable() : i === !0 ? (n.flipEnable(1), s = []) : i === !1 ? (n.flipEnable(-1), s = []) : i.map(function (e) {
          var i, a, l, c;
          for (l = 0; l < r; l += 1) {
            if (a = s[l], n.isDateExact(a, e)) {
              i = s[l] = null, c = !0;
              break
            }
            if (n.isDateOverlap(a, e)) {
              t.isPlainObject(e) ? (e.inverted = !0, i = e) : t.isArray(e) ? (i = e, i[3] || i.push("inverted")) : o.isDate(e) && (i = [e.getFullYear(), e.getMonth(), e.getDate(), "inverted"]);
              break
            }
          }
          if (i) for (l = 0; l < r; l += 1) if (n.isDateExact(s[l], e)) {
            s[l] = null;
            break
          }
          if (c) for (l = 0; l < r; l += 1) if (n.isDateOverlap(s[l], e)) {
            s[l] = null;
            break
          }
          i && s.push(i)
        }), s.filter(function (e) {
          return null != e
        })
      }, i.prototype.nodes = function (e) {
        var t = this, i = t.settings, r = t.item, a = r.now, l = r.select, c = r.highlight, d = r.view, u = r.disable,
            h = r.min, p = r.max, f = function (e, t) {
              return i.firstDay && (e.push(e.shift()), t.push(t.shift())), o.node("thead", o.node("tr", o.group({
                min: 0,
                max: n - 1,
                i: 1,
                node: "th",
                item: function (n) {
                  return [e[n], i.klass.weekdays, 'scope=col title="' + t[n] + '"']
                }
              })))
            }((i.showWeekdaysFull ? i.weekdaysFull : i.weekdaysShort).slice(0), i.weekdaysFull.slice(0)), m = function (e) {
              return o.node("div", " ", i.klass["nav" + (e ? "Next" : "Prev")] + (e && d.year >= p.year && d.month >= p.month || !e && d.year <= h.year && d.month <= h.month ? " " + i.klass.navDisabled : ""), "data-nav=" + (e || -1) + " " + o.ariaAttr({
                role: "button",
                controls: t.$node[0].id + "_table"
              }) + ' title="' + (e ? i.labelMonthNext : i.labelMonthPrev) + '"')
            }, g = function () {
              var n = i.showMonthsShort ? i.monthsShort : i.monthsFull;
              return i.selectMonths ? o.node("select", o.group({
                min: 0, max: 11, i: 1, node: "option", item: function (e) {
                  return [n[e], 0, "value=" + e + (d.month == e ? " selected" : "") + (d.year == h.year && e < h.month || d.year == p.year && e > p.month ? " disabled" : "")]
                }
              }), i.klass.selectMonth, (e ? "" : "disabled") + " " + o.ariaAttr({controls: t.$node[0].id + "_table"}) + ' title="' + i.labelMonthSelect + '"') : o.node("div", n[d.month], i.klass.month)
            }, v = function () {
              var n = d.year, s = i.selectYears === !0 ? 5 : ~~(i.selectYears / 2);
              if (s) {
                var r = h.year, a = p.year, l = n - s, c = n + s;
                if (r > l && (c += r - l, l = r), a < c) {
                  var u = l - r, f = c - a;
                  l -= u > f ? f : u, c = a
                }
                return o.node("select", o.group({
                  min: l, max: c, i: 1, node: "option", item: function (e) {
                    return [e, 0, "value=" + e + (n == e ? " selected" : "")]
                  }
                }), i.klass.selectYear, (e ? "" : "disabled") + " " + o.ariaAttr({controls: t.$node[0].id + "_table"}) + ' title="' + i.labelYearSelect + '"')
              }
              return o.node("div", n, i.klass.year)
            };
        return o.node("div", (i.selectYears ? v() + g() : g() + v()) + m() + m(1), i.klass.header) + o.node("table", f + o.node("tbody", o.group({
          min: 0,
          max: s - 1,
          i: 1,
          node: "tr",
          item: function (e) {
            var s = i.firstDay && 0 === t.create([d.year, d.month, 1]).day ? -7 : 0;
            return [o.group({
              min: n * e - d.day + s + 1, max: function () {
                return this.min + n - 1
              }, i: 1, node: "td", item: function (e) {
                e = t.create([d.year, d.month, e + (i.firstDay ? 1 : 0)]);
                var n = l && l.pick == e.pick, s = c && c.pick == e.pick,
                    r = u && t.disabled(e) || e.pick < h.pick || e.pick > p.pick,
                    f = o.trigger(t.formats.toString, t, [i.format, e]);
                return [o.node("div", e.date, function (t) {
                  return t.push(d.month == e.month ? i.klass.infocus : i.klass.outfocus), a.pick == e.pick && t.push(i.klass.now), n && t.push(i.klass.selected), s && t.push(i.klass.highlighted), r && t.push(i.klass.disabled), t.join(" ")
                }([i.klass.day]), "data-pick=" + e.pick + " " + o.ariaAttr({
                  role: "gridcell",
                  label: f,
                  selected: !(!n || t.$node.val() !== f) || null,
                  activedescendant: !!s || null,
                  disabled: !!r || null
                })), "", o.ariaAttr({role: "presentation"})]
              }
            })]
          }
        })), i.klass.table, 'id="' + t.$node[0].id + '_table" ' + o.ariaAttr({
          role: "grid",
          controls: t.$node[0].id,
          readonly: !0
        })) + o.node("div", o.node("button", i.today, i.klass.buttonToday, "type=button data-pick=" + a.pick + (e && !t.disabled(a) ? "" : " disabled") + " " + o.ariaAttr({controls: t.$node[0].id})) + o.node("button", i.clear, i.klass.buttonClear, "type=button data-clear=1" + (e ? "" : " disabled") + " " + o.ariaAttr({controls: t.$node[0].id})) + o.node("button", i.close, i.klass.buttonClose, "type=button data-close=true " + (e ? "" : " disabled") + " " + o.ariaAttr({controls: t.$node[0].id})), i.klass.footer)
      }, i.defaults = function (e) {
        return {
          labelMonthNext: "Next month",
          labelMonthPrev: "Previous month",
          labelMonthSelect: "Select a month",
          labelYearSelect: "Select a year",
          monthsFull: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
          monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          weekdaysFull: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          today: "Today",
          clear: "Clear",
          close: "Close",
          closeOnSelect: !0,
          closeOnClear: !0,
          format: "d mmmm, yyyy",
          klass: {
            table: e + "table",
            header: e + "header",
            navPrev: e + "nav--prev",
            navNext: e + "nav--next",
            navDisabled: e + "nav--disabled",
            month: e + "month",
            year: e + "year",
            selectMonth: e + "select--month",
            selectYear: e + "select--year",
            weekdays: e + "weekday",
            day: e + "day",
            disabled: e + "day--disabled",
            selected: e + "day--selected",
            highlighted: e + "day--highlighted",
            now: e + "day--today",
            infocus: e + "day--infocus",
            outfocus: e + "day--outfocus",
            footer: e + "footer",
            buttonClear: e + "button--clear",
            buttonToday: e + "button--today",
            buttonClose: e + "button--close"
          }
        }
      }(e.klasses().picker + "__"), e.extend("pickadate", i)
    })
  }, 131: function (e, t, i) {
    var n, s, o;/*!
	 * Time picker for pickadate.js v3.5.6
	 * http://amsul.github.io/pickadate.js/time.htm
	 */
    !function (r) {
      s = [i(129), i(8)], n = r, o = "function" == typeof n ? n.apply(t, s) : n, !(void 0 !== o && (e.exports = o))
    }(function (e, t) {
      function i(e, t) {
        var i = this, n = e.$node[0].value, s = e.$node.data("value"), o = s || n, r = s ? t.formatSubmit : t.format;
        i.settings = t, i.$node = e.$node, i.queue = {
          interval: "i",
          min: "measure create",
          max: "measure create",
          now: "now create",
          select: "parse create validate",
          highlight: "parse create validate",
          view: "parse create validate",
          disable: "deactivate",
          enable: "activate"
        }, i.item = {}, i.item.clear = null, i.item.interval = t.interval || 30, i.item.disable = (t.disable || []).slice(0), i.item.enable = -function (e) {
          return e[0] === !0 ? e.shift() : -1
        }(i.item.disable), i.set("min", t.min).set("max", t.max).set("now"), o ? i.set("select", o, {format: r}) : i.set("select", null).set("highlight", i.item.now), i.key = {
          40: 1,
          38: -1,
          39: 1,
          37: -1,
          go: function (e) {
            i.set("highlight", i.item.highlight.pick + e * i.item.interval, {interval: e * i.item.interval}), this.render()
          }
        }, e.on("render", function () {
          var i = e.$root.children(), n = i.find("." + t.klass.viewset), s = function (e) {
            return ["webkit", "moz", "ms", "o", ""].map(function (t) {
              return (t ? "-" + t + "-" : "") + e
            })
          }, o = function (e, t) {
            s("transform").map(function (i) {
              e.css(i, t)
            }), s("transition").map(function (i) {
              e.css(i, t)
            })
          };
          n.length && (o(i, "none"), i[0].scrollTop = ~~n.position().top - 2 * n[0].clientHeight, o(i, ""))
        }, 1).on("open", function () {
          e.$root.find("button").attr("disabled", !1)
        }, 1).on("close", function () {
          e.$root.find("button").attr("disabled", !0)
        }, 1)
      }

      var n = 24, s = 60, o = 12, r = n * s, a = e._;
      i.prototype.set = function (e, t, i) {
        var n = this, s = n.item;
        return null === t ? ("clear" == e && (e = "select"), s[e] = t, n) : (s["enable" == e ? "disable" : "flip" == e ? "enable" : e] = n.queue[e].split(" ").map(function (s) {
          return t = n[s](e, t, i)
        }).pop(), "select" == e ? n.set("highlight", s.select, i) : "highlight" == e ? n.set("view", s.highlight, i) : "interval" == e ? n.set("min", s.min, i).set("max", s.max, i) : e.match(/^(flip|min|max|disable|enable)$/) && (s.select && n.disabled(s.select) && n.set("select", t, i), s.highlight && n.disabled(s.highlight) && n.set("highlight", t, i), "min" == e && n.set("max", s.max, i)), n)
      }, i.prototype.get = function (e) {
        return this.item[e]
      }, i.prototype.create = function (e, i, o) {
        var l = this;
        return i = void 0 === i ? e : i, a.isDate(i) && (i = [i.getHours(), i.getMinutes()]), t.isPlainObject(i) && a.isInteger(i.pick) ? i = i.pick : t.isArray(i) ? i = +i[0] * s + +i[1] : a.isInteger(i) || (i = l.now(e, i, o)), "max" == e && i < l.item.min.pick && (i += r), "min" != e && "max" != e && (i - l.item.min.pick) % l.item.interval !== 0 && (i += l.item.interval), i = l.normalize(e, i, o), {
          hour: ~~(n + i / s) % n,
          mins: (s + i % s) % s,
          time: (r + i) % r,
          pick: i % r
        }
      }, i.prototype.createRange = function (e, i) {
        var n = this, s = function (e) {
          return e === !0 || t.isArray(e) || a.isDate(e) ? n.create(e) : e
        };
        return a.isInteger(e) || (e = s(e)), a.isInteger(i) || (i = s(i)), a.isInteger(e) && t.isPlainObject(i) ? e = [i.hour, i.mins + e * n.settings.interval] : a.isInteger(i) && t.isPlainObject(e) && (i = [e.hour, e.mins + i * n.settings.interval]), {
          from: s(e),
          to: s(i)
        }
      }, i.prototype.withinRange = function (e, t) {
        return e = this.createRange(e.from, e.to), t.pick >= e.from.pick && t.pick <= e.to.pick
      }, i.prototype.overlapRanges = function (e, t) {
        var i = this;
        return e = i.createRange(e.from, e.to), t = i.createRange(t.from, t.to), i.withinRange(e, t.from) || i.withinRange(e, t.to) || i.withinRange(t, e.from) || i.withinRange(t, e.to)
      }, i.prototype.now = function (e, t) {
        var i, n = this.item.interval, o = new Date, r = o.getHours() * s + o.getMinutes(), l = a.isInteger(t);
        return r -= r % n, i = t < 0 && n * t + r <= -n, r += "min" == e && i ? 0 : n, l && (r += n * (i && "max" != e ? t + 1 : t)), r
      }, i.prototype.normalize = function (e, t) {
        var i = this.item.interval, n = this.item.min && this.item.min.pick || 0;
        return t -= "min" == e ? 0 : (t - n) % i
      }, i.prototype.measure = function (e, i, o) {
        var r = this;
        return i || (i = "min" == e ? [0, 0] : [n - 1, s - 1]), "string" == typeof i ? i = r.parse(e, i) : i === !0 || a.isInteger(i) ? i = r.now(e, i, o) : t.isPlainObject(i) && a.isInteger(i.pick) && (i = r.normalize(e, i.pick, o)), i
      }, i.prototype.validate = function (e, t, i) {
        var n = this, s = i && i.interval ? i.interval : n.item.interval;
        return n.disabled(t) && (t = n.shift(t, s)), t = n.scope(t), n.disabled(t) && (t = n.shift(t, s * -1)), t
      }, i.prototype.disabled = function (e) {
        var i = this, n = i.item.disable.filter(function (n) {
          return a.isInteger(n) ? e.hour == n : t.isArray(n) || a.isDate(n) ? e.pick == i.create(n).pick : t.isPlainObject(n) ? i.withinRange(n, e) : void 0
        });
        return n = n.length && !n.filter(function (e) {
          return t.isArray(e) && "inverted" == e[2] || t.isPlainObject(e) && e.inverted
        }).length, i.item.enable === -1 ? !n : n || e.pick < i.item.min.pick || e.pick > i.item.max.pick
      }, i.prototype.shift = function (e, t) {
        var i = this, n = i.item.min.pick, s = i.item.max.pick;
        for (t = t || i.item.interval; i.disabled(e) && (e = i.create(e.pick += t), !(e.pick <= n || e.pick >= s));) ;
        return e
      }, i.prototype.scope = function (e) {
        var t = this.item.min.pick, i = this.item.max.pick;
        return this.create(e.pick > i ? i : e.pick < t ? t : e)
      }, i.prototype.parse = function (e, t, i) {
        var n, o, r, l, c, d = this, u = {};
        if (!t || "string" != typeof t) return t;
        i && i.format || (i = i || {}, i.format = d.settings.format), d.formats.toArray(i.format).map(function (e) {
          var i, n = d.formats[e], s = n ? a.trigger(n, d, [t, u]) : e.replace(/^!/, "").length;
          n && (i = t.substr(0, s), u[e] = i.match(/^\d+$/) ? +i : i), t = t.substr(s)
        });
        for (l in u) c = u[l], a.isInteger(c) ? l.match(/^(h|hh)$/i) ? (n = c, "h" != l && "hh" != l || (n %= 12)) : "i" == l && (o = c) : l.match(/^a$/i) && c.match(/^p/i) && ("h" in u || "hh" in u) && (r = !0);
        return (r ? n + 12 : n) * s + o
      }, i.prototype.formats = {
        h: function (e, t) {
          return e ? a.digits(e) : t.hour % o || o
        }, hh: function (e, t) {
          return e ? 2 : a.lead(t.hour % o || o)
        }, H: function (e, t) {
          return e ? a.digits(e) : "" + t.hour % 24
        }, HH: function (e, t) {
          return e ? a.digits(e) : a.lead(t.hour % 24)
        }, i: function (e, t) {
          return e ? 2 : a.lead(t.mins)
        }, a: function (e, t) {
          return e ? 4 : r / 2 > t.time % r ? "a.m." : "p.m."
        }, A: function (e, t) {
          return e ? 2 : r / 2 > t.time % r ? "AM" : "PM"
        }, toArray: function (e) {
          return e.split(/(h{1,2}|H{1,2}|i|a|A|!.)/g)
        }, toString: function (e, t) {
          var i = this;
          return i.formats.toArray(e).map(function (e) {
            return a.trigger(i.formats[e], i, [0, t]) || e.replace(/^!/, "")
          }).join("")
        }
      }, i.prototype.isTimeExact = function (e, i) {
        var n = this;
        return a.isInteger(e) && a.isInteger(i) || "boolean" == typeof e && "boolean" == typeof i ? e === i : (a.isDate(e) || t.isArray(e)) && (a.isDate(i) || t.isArray(i)) ? n.create(e).pick === n.create(i).pick : !(!t.isPlainObject(e) || !t.isPlainObject(i)) && (n.isTimeExact(e.from, i.from) && n.isTimeExact(e.to, i.to))
      }, i.prototype.isTimeOverlap = function (e, i) {
        var n = this;
        return a.isInteger(e) && (a.isDate(i) || t.isArray(i)) ? e === n.create(i).hour : a.isInteger(i) && (a.isDate(e) || t.isArray(e)) ? i === n.create(e).hour : !(!t.isPlainObject(e) || !t.isPlainObject(i)) && n.overlapRanges(e, i)
      }, i.prototype.flipEnable = function (e) {
        var t = this.item;
        t.enable = e || (t.enable == -1 ? 1 : -1)
      }, i.prototype.deactivate = function (e, i) {
        var n = this, s = n.item.disable.slice(0);
        return "flip" == i ? n.flipEnable() : i === !1 ? (n.flipEnable(1), s = []) : i === !0 ? (n.flipEnable(-1), s = []) : i.map(function (e) {
          for (var i, o = 0; o < s.length; o += 1) if (n.isTimeExact(e, s[o])) {
            i = !0;
            break
          }
          i || (a.isInteger(e) || a.isDate(e) || t.isArray(e) || t.isPlainObject(e) && e.from && e.to) && s.push(e)
        }), s
      }, i.prototype.activate = function (e, i) {
        var n = this, s = n.item.disable, o = s.length;
        return "flip" == i ? n.flipEnable() : i === !0 ? (n.flipEnable(1), s = []) : i === !1 ? (n.flipEnable(-1), s = []) : i.map(function (e) {
          var i, r, l, c;
          for (l = 0; l < o; l += 1) {
            if (r = s[l], n.isTimeExact(r, e)) {
              i = s[l] = null, c = !0;
              break
            }
            if (n.isTimeOverlap(r, e)) {
              t.isPlainObject(e) ? (e.inverted = !0, i = e) : t.isArray(e) ? (i = e, i[2] || i.push("inverted")) : a.isDate(e) && (i = [e.getFullYear(), e.getMonth(), e.getDate(), "inverted"]);
              break
            }
          }
          if (i) for (l = 0; l < o; l += 1) if (n.isTimeExact(s[l], e)) {
            s[l] = null;
            break
          }
          if (c) for (l = 0; l < o; l += 1) if (n.isTimeOverlap(s[l], e)) {
            s[l] = null;
            break
          }
          i && s.push(i)
        }), s.filter(function (e) {
          return null != e
        })
      }, i.prototype.i = function (e, t) {
        return a.isInteger(t) && t > 0 ? t : this.item.interval
      }, i.prototype.nodes = function (e) {
        var t = this, i = t.settings, n = t.item.select, s = t.item.highlight, o = t.item.view, r = t.item.disable;
        return a.node("ul", a.group({
          min: t.item.min.pick,
          max: t.item.max.pick,
          i: t.item.interval,
          node: "li",
          item: function (e) {
            e = t.create(e);
            var l = e.pick, c = n && n.pick == l, d = s && s.pick == l, u = r && t.disabled(e),
                h = a.trigger(t.formats.toString, t, [i.format, e]);
            return [a.trigger(t.formats.toString, t, [a.trigger(i.formatLabel, t, [e]) || i.format, e]), function (e) {
              return c && e.push(i.klass.selected), d && e.push(i.klass.highlighted), o && o.pick == l && e.push(i.klass.viewset), u && e.push(i.klass.disabled), e.join(" ")
            }([i.klass.listItem]), "data-pick=" + e.pick + " " + a.ariaAttr({
              role: "option",
              label: h,
              selected: !(!c || t.$node.val() !== h) || null,
              activedescendant: !!d || null,
              disabled: !!u || null
            })]
          }
        }) + a.node("li", a.node("button", i.clear, i.klass.buttonClear, "type=button data-clear=1" + (e ? "" : " disabled") + " " + a.ariaAttr({controls: t.$node[0].id})), "", a.ariaAttr({role: "presentation"})), i.klass.list, a.ariaAttr({
          role: "listbox",
          controls: t.$node[0].id
        }))
      }, i.defaults = function (e) {
        return {
          clear: "Clear",
          format: "h:i A",
          interval: 30,
          closeOnSelect: !0,
          closeOnClear: !0,
          klass: {
            picker: e + " " + e + "--time",
            holder: e + "__holder",
            list: e + "__list",
            listItem: e + "__list-item",
            disabled: e + "__list-item--disabled",
            selected: e + "__list-item--selected",
            highlighted: e + "__list-item--highlighted",
            viewset: e + "__list-item--viewset",
            now: e + "__list-item--now",
            buttonClear: e + "__button--clear"
          }
        }
      }(e.klasses().picker), e.extend("pickatime", i)
    })
  }, 132: function (e, t) {
  }, 133: function (e, t) {
  }, 134: function (e, t) {
  }, 573: function (e, t, i) {
    (function (e) {
      "use strict";
      e.widget("gastro.pickerform", {
        options: {
          defaultPickerObject: {
            enableBranches: !1,
            branchSelector: ".js-picker-branch",
            dateSelector: ".js-picker-date",
            timeSelector: ".js-picker-time",
            dateFormat: "mmmm d, yyyy",
            timeFormat: "h:i A",
            scheduleOpen: [{
              weekdays: {
                monday: "1",
                tuesday: "1",
                wednesday: "1",
                thursday: "1",
                friday: "1",
                saturday: "1",
                sunday: "1"
              }
            }],
            scheduleClose: [],
            disableDates: [],
            earlyBooking: !0,
            lateBooking: "",
            timeInterval: "30",
            firstDay: "0",
            allowPast: !0
          }
        }, _create: function () {
          return this.init()
        }, init: function () {
          var t, i, n, s, o;
          return o = this, n = this.element.find(".js-picker-object"), n ? (s = n.val(), "undefined" != typeof s && "" !== s ? this.pickerObject = JSON.parse(s) : this.pickerObject = this.options.defaultPickerObject) : this.pickerObject = this.options.defaultPickerObject, this.pickerObject.enableBranches = "true" === this.pickerObject.enableBranches, this.pickerObject.allowPast = "true" === this.pickerObject.allowPast, this.pickerObject.enableBranches ? (t = this.element.find(this.pickerObject.branchSelector), t.length ? (i = t.val(), this.updateDatepickerRange(this.pickerObject.scheduleOpen[i], this.pickerObject.scheduleClose[i], this.pickerObject.disableDates[i]), t.on("change", function (t) {
            var i;
            return i = e(t.currentTarget).val(), o.updateDatepickerRange(o.pickerObject.scheduleOpen[i], o.pickerObject.scheduleClose[i], o.pickerObject.disableDates[i])
          })) : this.updateDatepickerRange(this.pickerObject.scheduleOpen, this.pickerObject.scheduleClose, this.pickerObject.disableDates)) : this.updateDatepickerRange(this.pickerObject.scheduleOpen, this.pickerObject.scheduleClose, this.pickerObject.disableDates)
        }, updateDatepickerRange: function (t, i, n) {
          var s, o, r, a, l;
          if (r = this, this.dateSelector = this.element.find(this.pickerObject.dateSelector), this.dateSelector.length && (a = new Date, o = parseInt(this.pickerObject.firstDay), "undefined" != typeof this.datepicker && (this.datepicker.set("enable", !1), this.datepicker.set("disable", !1)), this.datepicker = this.dateSelector.pickadate({
            min: !r.pickerObject.allowPast,
            firstDay: o,
            format: r.pickerObject.dateFormat,
            formatSubmit: "d.mm.yyyy",
            hiddenName: !0,
            container: "body",
            enable: !1,
            disable: !1,
            onStart: function () {
              var e;
              if ("" !== r.dateSelector.val() && (e = new Date(r.dateSelector.val()), "[object Date]" === Object.prototype.toString.call(e))) return this.set("select", e)
            }
          }).pickadate("picker"), this.pickerObject.earlyBooking && "true" !== this.pickerObject.earlyBooking ? this.datepicker.set("max", new Date(a.getTime() + 24 * parseInt(r.pickerObject.earlyBooking) * 60 * 60 * 1e3)) : this.datepicker.set("max", !1), "undefined" != typeof n && n.length && (s = e.extend(!0, [], n), l = 0, e.each(n.settings, function (e, t) {
            if ("number" == typeof t) return l = t - o, l < 1 && (l = 7), s[e] = l
          }), this.datepicker.set("disable", s)), this.pickerObject.lateBooking && ("sameday" === this.pickerObject.lateBooking ? this.datepicker.set("min", 1) : (this.pickerObject.lateBooking = parseInt(this.pickerObject.lateBooking, 10), this.pickerObject.lateBooking >= 1440 && this.datepicker.set("min", Math.floor(this.pickerObject.lateBooking / 1440)))), "" === this.dateSelector.val() && this.datepicker.set("select", new Date), this.timeSelector = this.element.find(this.pickerObject.timeSelector), this.timeSelector.length)) return this.timepicker = this.timeSelector.pickatime({
            interval: parseInt(r.pickerObject.timeInterval, 10),
            format: r.pickerObject.timeFormat,
            formatSubmit: "h:i A",
            hiddenName: !0,
            container: "body",
            onStart: function () {
              var e, t;
              if ("" !== r.timeSelector.val() && (a = new Date, t = a.getFullYear() + "/" + (a.getMonth() + 1) + "/" + a.getDate(), e = new Date(t + " " + r.timeSelector.val()), "[object Date]" === Object.prototype.toString.call(e))) return this.set("select", e)
            }
          }).pickatime("picker"), this.updateTimepickerRange(t, i, n), this.datepicker.on("close", function (s) {
            return e(document.activeElement).blur(), r.updateTimepickerRange(t, i, n)
          }), this.timepicker.on("close", function (t) {
            return e(document.activeElement).blur()
          })
        }, updateTimepickerRange: function (t, i, n) {
          var s, o, r, a, l, c, d, u, h, p, f, m, g, v, b, w, y;
          return w = this, this.timepicker.set("enable", !1), this.timepicker.set("disable", !1), "" === this.datepicker.get() ? void this.timepicker.set("disable", [!0]) : (s = new Date, f = new Date(this.datepicker.get("select", "d.mm.yyyy")), v = f.getFullYear(), g = f.getMonth(), m = f.getDate(), o = this.getDayEndTime(), l = [o], r = o.from, a = o.to, "undefined" != typeof i && (c = [], u = [], d = [], e.each(i, function (e, t) {
            var i, n, o;
            if (c = new Date(t.date), c.getFullYear() === v && c.getMonth() === g && c.getDate() === m) {
              if (u = r, d = a, o = !1, "undefined" == typeof t.time) {
                if (o = !0, u = w.getEarliestTime(u, f, s), u === r) return void w.timepicker.set("disable", [!0])
              } else "undefined" != typeof t.time.start && (u = w.convertTo24Hour(t.time.start), u = w.getEarliestTime(u, f, s)), "undefined" != typeof t.time.end && (d = w.convertTo24Hour(t.time.end));
              if (i = u[0] === r[0] && u[1] === r[1], n = d[0] === a[0] && d[1] === a[1], !(o || i && n)) return l.push({
                from: u,
                to: d,
                inverted: !0
              })
            }
          }), l.length > 1) ? void this.timepicker.set("disable", l) : "undefined" != typeof t && (b = f.getDay(), y = {
            sunday: 0,
            monday: 1,
            tuesday: 2,
            wednesday: 3,
            thursday: 4,
            friday: 5,
            saturday: 6
          }, p = [], h = [], e.each(t, function (t, i) {
            if ("undefined" != typeof i.weekdays) return e.each(i.weekdays, function (e, t) {
              var n, o, c;
              if (y[e] === b) {
                if (p = r, h = a, c = !1, "undefined" == typeof i.time) {
                  if (c = !0, p = w.getEarliestTime(p, f, s), p === r) return void w.timepicker.set("disable", [!0])
                } else "undefined" != typeof i.time.start && (p = w.convertTo24Hour(i.time.start), p = w.getEarliestTime(p, f, s)), "undefined" != typeof i.time.end && (h = w.convertTo24Hour(i.time.end));
                if (n = p[0] === r[0] && p[1] === r[1], o = h[0] === a[0] && h[1] === a[1], !(c || n && o)) return l.push({
                  from: p,
                  to: h,
                  inverted: !0
                })
              }
            })
          }), l.length > 1) ? void this.timepicker.set("disable", l) : (this.timepicker.set("enable", !0), this.timepicker.set("disable", !1)))
        }, getDayEndTime: function () {
          var e, t;
          for (t = this.pickerObject.timeInterval, e = 24; t >= 60;) e--, t -= 60;
          return t > 0 && (e--, t = 60 - t), {from: [0, 0], to: [e, t]}
        }, convertTo24Hour: function (e) {
          var t, i, n, s;
          return s = e.match(/(\d+):(\d+) (\w)/), t = Number(s[1]), n = Number(s[2]), i = s[3].toLowerCase(), "p" === i && t < 12 ? t += 12 : "a" === i && 12 === t && (t -= 12), [t, n]
        }, getEarliestTime: function (e, t, i) {
          var n, s, o;
          return t.getDate() !== i.getDate() || this.pickerObject.allowPast || (o = 60 * e[0] + e[1], n = 60 * i.getHours() + i.getMinutes(), o = o > n ? o : n, "number" == typeof this.pickerObject.lateBooking && this.pickerObject.lateBooking % 1 === 0 && (s = n + this.pickerObject.lateBooking, s > o && (o = s)), e = [Math.floor(o / 60), o % 60]), e
        }
      }), e.widget.bridge("gstPickerForm", e.gastro.pickerform)
    }).call(t, i(8))
  }, 584: function (e, t, i) {
    "use strict";
    window.GastroApp = i(585), jQuery(function () {
      return GastroApp.init(), GastroApp.main(), GastroApp.startItems(), GastroApp.afterItems()
    })
  }, 585: function (e, t, i) {
    "use strict";
    var n, s, o, r;
    r = i(586), s = i(587), i(588), i(128), i(129), i(130), i(131), i(132), i(133), i(134), i(589), i(590), i(591), i(592), i(593), i(594), i(595), i(596), i(597), i(598), i(599), i(600), i(601), i(602), i(603), i(604), i(605), i(606), i(607), i(608), i(609), i(610), i(611), i(612), i(613), i(614), i(615), i(616), i(573), i(620), i(621), i(622), i(623), i(624), i(625), i(626), i(627), i(628), i(629), i(630), i(631), i(632), i(633), i(634), n = jQuery, o = {}, o.init = function () {
      return this.mobileScreenWidth = 767, this.tabletScreenWidth = 960, this.smController = new r.Controller, this.ajaxUrl = GastroOptions.ajax_url, this.ajaxNonce = GastroOptions.ajax_nonce, this.isSafari = navigator.userAgent.indexOf("Safari") !== -1 && navigator.userAgent.indexOf("Chrome") === -1, this.body = n("body"), this.isResponsive = this.body.hasClass("gst-layout-responsive"), this.defaultScheme = this.body.data("scheme") ? this.body.data("scheme") : "light", this.layout = this.body.data("layout") ? this.body.data("layout") : "full", this.frameWidth = "frame" !== this.layout ? 0 : this.body.data("frame_width"), this.carouselArrowStyle = this.body.data("arrow_style") ? this.body.data("arrow_style") : "ln-arrow", this.carouselArrowBackground = this.body.data("arrow_background") ? this.body.data("arrow_background") : "square", this.pageLoad = n(".gst-page-load"), this.hasPageLoad = !!this.pageLoad.length, this.mainWrapper = n(".gst-main-wrapper"), this.isHorizontalScroll = this.mainWrapper.hasClass("gst-scrollpage--full--horizontal"), this.isVerticalScroll = this.mainWrapper.hasClass("gst-scrollpage--full--vertical"), this.isHalfPageScroll = this.mainWrapper.hasClass("gst-scrollpage--half"), this.content = n(".gst-content"), this.header = n(".gst-header"), this.navbar = n(".gst-navbar"), this.mainNavbar = this.navbar.filter("[data-role=navigation]"), this.navbarMobile = n(".gst-navbar--mobile"), this.mainNavbarMobile = this.navbarMobile.filter("[data-role=navigation]"), navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i) ? this.isMobileOrTablet = !0 : this.isMobileOrTablet = !1, this.pswpElement = n(".pswp")
    }, o.main = function () {
      var e;
      return o.navbars(), o.hasPageLoad && (o.body.addClass("gst-unscrollable"), setTimeout(function () {
        if (!o.pageLoad.hasClass("loaded")) return o.pageLoad.addClass("loaded"), o.body.removeClass("gst-unscrollable")
      }, 2e4), o.pageLoad.hasClass("loaded") || n(window).load(function () {
        return setTimeout(function () {
          return o.pageLoad.addClass("loaded"), o.body.removeClass("gst-unscrollable")
        }, 200)
      })), n("#wpadminbar").length && o.body.addClass("with-admin-toolbar"), o.isHorizontalScroll || o.isVerticalScroll || o.isHalfPageScroll ? o.mainWrapper.gstOnePageScroll() : n(".gst-section--fit-height").gstSetSize(), o.hasPageLoad ? n(window).load(function () {
        return o.body.gstAnimated()
      }) : o.body.gstAnimated(), n(".gst-audio").gstAudio(), n(".gst-page-hero--fit-height").gstSetSize({
        addLineHeight: !1,
        itemWrapper: ".gst-page-hero-wrapper"
      }), n(".js-menu-search").gstSearch(), n(".js-share:not(.gst-social-email)").on("click", function (e) {
        return this.link = n(this).attr("href"), window.open(this.link, "window", "left=20, top=20, width=600, height=700, toolbar=0, resizable=1"), !1
      }), e = n("iframe.gst-video-background-inner--youtube"), e.length > 0 && (o.body.append('<script type="text/javascript" src="https://www.youtube.com/iframe_api"></script>'), window.onYouTubeIframeAPIReady = function () {
        return e.each(function (e, t) {
          var i;
          return i = new YT.Player(t, {
            events: {
              onReady: function (e) {
                var i, s, o, r;
                return r = e.target, o = n(t), i = o.closest(".gst-background"), "muted" !== o.data("sound") && o.is(":visible") || r.mute(), r.playVideo(), o.addClass("loaded"), s = r.getDuration(), setInterval(function () {
                  if (s - r.getCurrentTime() <= 1) return r.seekTo(0, !0)
                }, 400), i.on("switchSlideBackgroundTo.gst", function () {
                  return r.playVideo()
                }), i.on("switchSlideBackgroundFrom.gst", function () {
                  return r.pauseVideo()
                })
              }
            }
          })
        })
      }), n(".woocommerce-ordering").gstShopDropdown(), n(".gst-entry.product-type-variable").gstVariableProduct(), n("#delivery_checkout_field").gstPickerForm(), n(".variations-radio").gstVariationRadio(), n(".gst-product-gallery").gstProductGallery(), n(".variations_form").gstVariableProductForm()
    }, o.navbars = function () {
      return o.navbar.gstNavbar(), n(".gst-side-navbar").gstSideNavbar(), o.navbarMobile.gstNavbar({mobile: !0})
    }, o.fetchItems = function () {
      return n(".gst-item")
    }, o.startItems = function () {
      var e;
      return e = o.fetchItems(), e.each(function (e, t) {
        var i;
        if (i = t.className.match(/js-item-(\S+)/)) return t.gstItem = i[1], o.initItem(t)
      })
    }, o.initItem = function (e) {
      var t;
      if (e.gstItem) switch (t = n(e), e.gstItem) {
        case"accordion":
          t.gstAccordion();
          break;
        case"blog":
          t.gstEntries();
          break;
        case"custompost":
          t.gstEntries();
          break;
        case"recipe":
          t.gstEntries();
          break;
        case"product":
          t.gstEntries();
          break;
        case"productcat":
          t.gstEntries();
          break;
        case"bannertext":
          t.gstBannerText();
          break;
        case"client":
          t.hasClass("gst-client--carousel") && t.find(".gst-client-content").gstCarousel();
          break;
        case"countdown":
          t.gstCountdown();
          break;
        case"testimonial":
          t.hasClass("gst-testimonial--carousel") && t.gstCarousel();
          break;
        case"featuredpost":
          t.gstFeaturedPost();
          break;
        case"featuredmenu":
          t.gstFeaturedMenu();
          break;
        case"gallery":
          t.gstGallery();
          break;
        case"milestone":
          t.gstMilestone();
          break;
        case"modal":
          t.gstModal();
          break;
        case"opentable":
          t.find("input[name=startDate]").pickadate({
            format: "mm/dd/yyyy",
            formatSubmit: "mm/dd/yyyy",
            onStart: function () {
              return this.set("select", new Date)
            }
          }), t.find("input[name=ResTime]").pickatime({
            format: "HH:i", formatSubmit: "HH:i", onStart: function () {
              return this.set("select", new Date)
            }
          });
          break;
        case"skill":
          t.gstSkill();
          break;
        case"slider":
          t.gstSlider();
          break;
        case"tab":
          t.gstTab();
          break;
        case"box":
          t.gstBox();
          break;
        case"reservation":
          return t.gstPickerForm();
        case"video":
          return t.gstVideo()
      }
    }, o.afterItems = function () {
      var e, t, i, o, r, a, l, c, d, u, h, p;
      return n(".image-lazy-load").gstImage(), p = n(".gst-sidebar-background"), p && n(window).load(function () {
        return setTimeout(function () {
          var e;
          return e = n(".gst-main").outerHeight(), p.css("height", e + "px")
        }, 500), setTimeout(function () {
          return p.css("height", "").addClass("gst-sidebar-background-container")
        }, 2e3)
      }), n(".gst-row--main").gstRow(), d = window.location, d.hash && (c = "", r = 1, a = d.hash, window.history.pushState ? window.history.pushState("", "/", d.pathname) : (h = document.body.scrollTop, u = document.body.scrollLeft, d.hash = "", document.body.scrollTop = h, document.body.scrollLeft = u), i = a.slice(1).split("-"), o = i.length, o > 1 && (c = i[0], o > 2 && ("tab" === c || "accordion" === c || "entries" === c || "slider" === c) && (r = i[o - 1], i.pop(), a = "#" + i.join("-"))), l = n(a), l.length && n(window).load(function () {
        return setTimeout(function () {
          return l.gstDeepLink({forceOpen: !0, targetType: c, targetIndex: r})
        }, 500)
      })), n(".js-back-to-top").gstBackToTop(), e = n(".js-cookies-notice"), e.length && (s.get("user-visit") ? e.remove() : (t = e.data("expire"), s.set("user-visit", "visited", {expires: t}), n(window).load(function () {
        return e.addClass("active")
      }))), n("a:not(.add_to_cart_button)").gstDeepLink(), n(".gst-sidebar--fixed .gst-widgets").gstPinned({
        referenceElement: ".gst-main",
        parentElement: ".gst-content",
        offset: -50
      }), n(".gst-post-share--side .gst-social-share").gstPinned({
        referenceElement: ".gst-post-content",
        parentElement: ".gst-main",
        offset: -50
      }), n(".gst-comment").gstComment(), n(window).load(function () {
        return n(".gst-wrapper--parallax-footer").gstFooterParallax(), n(".gst-background").gstBackground(), setTimeout(function () {
          return n(window).resize()
        }, 500)
      })
    }, e.exports = o
  }, 586: function (e, t, i) {
    var n, s;/*!
	 * ScrollMagic v2.0.5 (2015-04-29)
	 * The javascript library for magical scroll interactions.
	 * (c) 2015 Jan Paepke (@janpaepke)
	 * Project Website: http://scrollmagic.io
	 *
	 * @version 2.0.5
	 * @license Dual licensed under MIT license and GPL.
	 * @author Jan Paepke - e-mail@janpaepke.de
	 *
	 * @file ScrollMagic main library.
	 */
    !function (o, r) {
      n = r, s = "function" == typeof n ? n.call(t, i, t, e) : n, !(void 0 !== s && (e.exports = s))
    }(this, function () {
      "use strict";
      var e = function () {
        s.log(2, "(COMPATIBILITY NOTICE) -> As of ScrollMagic 2.0.0 you need to use 'new ScrollMagic.Controller()' to create a new controller instance. Use 'new ScrollMagic.Scene()' to instance a scene.")
      };
      e.version = "2.0.5", window.addEventListener("mousewheel", function () {
      });
      var t = "data-scrollmagic-pin-spacer";
      e.Controller = function (n) {
        var o, r, a = "ScrollMagic.Controller", l = "FORWARD", c = "REVERSE", d = "PAUSED", u = i.defaults, h = this,
            p = s.extend({}, u, n), f = [], m = !1, g = 0, v = d, b = !0, w = 0, y = !0, x = function () {
              for (var t in p) u.hasOwnProperty(t) || (P(2, 'WARNING: Unknown option "' + t + '"'), delete p[t]);
              if (p.container = s.get.elements(p.container)[0], !p.container) throw P(1, "ERROR creating object " + a + ": No valid scroll container supplied"), a + " init failed.";
              b = p.container === window || p.container === document.body || !document.body.contains(p.container), b && (p.container = window), w = C(), p.container.addEventListener("resize", A), p.container.addEventListener("scroll", A), p.refreshInterval = parseInt(p.refreshInterval) || u.refreshInterval, S(), P(3, "added new " + a + " controller (v" + e.version + ")")
            }, S = function () {
              p.refreshInterval > 0 && (r = window.setTimeout(I, p.refreshInterval))
            }, k = function () {
              return p.vertical ? s.get.scrollTop(p.container) : s.get.scrollLeft(p.container)
            }, C = function () {
              return p.vertical ? s.get.height(p.container) : s.get.width(p.container)
            }, _ = this._setScrollPos = function (e) {
              p.vertical ? b ? window.scrollTo(s.get.scrollLeft(), e) : p.container.scrollTop = e : b ? window.scrollTo(e, s.get.scrollTop()) : p.container.scrollLeft = e
            }, T = function () {
              if (y && m) {
                var e = s.type.Array(m) ? m : f.slice(0);
                m = !1;
                var t = g;
                g = h.scrollPos();
                var i = g - t;
                0 !== i && (v = i > 0 ? l : c), v === c && e.reverse(), e.forEach(function (t, i) {
                  P(3, "updating Scene " + (i + 1) + "/" + e.length + " (" + f.length + " total)"), t.update(!0)
                }), 0 === e.length && p.loglevel >= 3 && P(3, "updating 0 Scenes (nothing added to controller)")
              }
            }, O = function () {
              o = s.rAF(T)
            }, A = function (e) {
              P(3, "event fired causing an update:", e.type), "resize" == e.type && (w = C(), v = d), m !== !0 && (m = !0, O())
            }, I = function () {
              if (!b && w != C()) {
                var e;
                try {
                  e = new Event("resize", {bubbles: !1, cancelable: !1})
                } catch (t) {
                  e = document.createEvent("Event"), e.initEvent("resize", !1, !1)
                }
                p.container.dispatchEvent(e)
              }
              f.forEach(function (e, t) {
                e.refresh()
              }), S()
            }, P = this._log = function (e, t) {
              p.loglevel >= e && (Array.prototype.splice.call(arguments, 1, 0, "(" + a + ") ->"), s.log.apply(window, arguments))
            };
        this._options = p;
        var M = function (e) {
          if (e.length <= 1) return e;
          var t = e.slice(0);
          return t.sort(function (e, t) {
            return e.scrollOffset() > t.scrollOffset() ? 1 : -1
          }), t
        };
        return this.addScene = function (t) {
          if (s.type.Array(t)) t.forEach(function (e, t) {
            h.addScene(e)
          }); else if (t instanceof e.Scene) {
            if (t.controller() !== h) t.addTo(h); else if (f.indexOf(t) < 0) {
              f.push(t), f = M(f), t.on("shift.controller_sort", function () {
                f = M(f)
              });
              for (var i in p.globalSceneOptions) t[i] && t[i].call(t, p.globalSceneOptions[i]);
              P(3, "adding Scene (now " + f.length + " total)")
            }
          } else P(1, "ERROR: invalid argument supplied for '.addScene()'");
          return h
        }, this.removeScene = function (e) {
          if (s.type.Array(e)) e.forEach(function (e, t) {
            h.removeScene(e)
          }); else {
            var t = f.indexOf(e);
            t > -1 && (e.off("shift.controller_sort"), f.splice(t, 1), P(3, "removing Scene (now " + f.length + " left)"), e.remove())
          }
          return h
        }, this.updateScene = function (t, i) {
          return s.type.Array(t) ? t.forEach(function (e, t) {
            h.updateScene(e, i)
          }) : i ? t.update(!0) : m !== !0 && t instanceof e.Scene && (m = m || [], m.indexOf(t) == -1 && m.push(t), m = M(m), O()), h
        }, this.update = function (e) {
          return A({type: "resize"}), e && T(), h
        }, this.scrollTo = function (i, n) {
          if (s.type.Number(i)) _.call(p.container, i, n); else if (i instanceof e.Scene) i.controller() === h ? h.scrollTo(i.scrollOffset(), n) : P(2, "scrollTo(): The supplied scene does not belong to this controller. Scroll cancelled.", i); else if (s.type.Function(i)) _ = i; else {
            var o = s.get.elements(i)[0];
            if (o) {
              for (; o.parentNode.hasAttribute(t);) o = o.parentNode;
              var r = p.vertical ? "top" : "left", a = s.get.offset(p.container), l = s.get.offset(o);
              b || (a[r] -= h.scrollPos()), h.scrollTo(l[r] - a[r], n)
            } else P(2, "scrollTo(): The supplied argument is invalid. Scroll cancelled.", i)
          }
          return h
        }, this.scrollPos = function (e) {
          return arguments.length ? (s.type.Function(e) ? k = e : P(2, "Provided value for method 'scrollPos' is not a function. To change the current scroll position use 'scrollTo()'."), h) : k.call(h)
        }, this.info = function (e) {
          var t = {
            size: w,
            vertical: p.vertical,
            scrollPos: g,
            scrollDirection: v,
            container: p.container,
            isDocument: b
          };
          return arguments.length ? void 0 !== t[e] ? t[e] : void P(1, 'ERROR: option "' + e + '" is not available') : t
        }, this.loglevel = function (e) {
          return arguments.length ? (p.loglevel != e && (p.loglevel = e), h) : p.loglevel
        }, this.enabled = function (e) {
          return arguments.length ? (y != e && (y = !!e, h.updateScene(f, !0)), h) : y
        }, this.destroy = function (e) {
          window.clearTimeout(r);
          for (var t = f.length; t--;) f[t].destroy(e);
          return p.container.removeEventListener("resize", A), p.container.removeEventListener("scroll", A), s.cAF(o), P(3, "destroyed " + a + " (reset: " + (e ? "true" : "false") + ")"), null
        }, x(), h
      };
      var i = {defaults: {container: window, vertical: !0, globalSceneOptions: {}, loglevel: 2, refreshInterval: 100}};
      e.Controller.addOption = function (e, t) {
        i.defaults[e] = t
      }, e.Controller.extend = function (t) {
        var i = this;
        e.Controller = function () {
          return i.apply(this, arguments), this.$super = s.extend({}, this), t.apply(this, arguments) || this
        }, s.extend(e.Controller, i), e.Controller.prototype = i.prototype, e.Controller.prototype.constructor = e.Controller
      }, e.Scene = function (i) {
        var o, r, a = "ScrollMagic.Scene", l = "BEFORE", c = "DURING", d = "AFTER", u = n.defaults, h = this,
            p = s.extend({}, u, i), f = l, m = 0, g = {start: 0, end: 0}, v = 0, b = !0, w = function () {
              for (var e in p) u.hasOwnProperty(e) || (x(2, 'WARNING: Unknown option "' + e + '"'), delete p[e]);
              for (var t in u) I(t);
              O()
            }, y = {};
        this.on = function (e, t) {
          return s.type.Function(t) ? (e = e.trim().split(" "), e.forEach(function (e) {
            var i = e.split("."), n = i[0], s = i[1];
            "*" != n && (y[n] || (y[n] = []), y[n].push({namespace: s || "", callback: t}))
          })) : x(1, "ERROR when calling '.on()': Supplied callback for '" + e + "' is not a valid function!"), h
        }, this.off = function (e, t) {
          return e ? (e = e.trim().split(" "), e.forEach(function (e, i) {
            var n = e.split("."), s = n[0], o = n[1] || "", r = "*" === s ? Object.keys(y) : [s];
            r.forEach(function (e) {
              for (var i = y[e] || [], n = i.length; n--;) {
                var s = i[n];
                !s || o !== s.namespace && "*" !== o || t && t != s.callback || i.splice(n, 1)
              }
              i.length || delete y[e]
            })
          }), h) : (x(1, "ERROR: Invalid event name supplied."), h)
        }, this.trigger = function (t, i) {
          if (t) {
            var n = t.trim().split("."), s = n[0], o = n[1], r = y[s];
            x(3, "event fired:", s, i ? "->" : "", i || ""), r && r.forEach(function (t, n) {
              o && o !== t.namespace || t.callback.call(h, new e.Event(s, t.namespace, h, i))
            })
          } else x(1, "ERROR: Invalid event name supplied.");
          return h
        }, h.on("change.internal", function (e) {
          "loglevel" !== e.what && "tweenChanges" !== e.what && ("triggerElement" === e.what ? C() : "reverse" === e.what && h.update())
        }).on("shift.internal", function (e) {
          S(), h.update()
        });
        var x = this._log = function (e, t) {
          p.loglevel >= e && (Array.prototype.splice.call(arguments, 1, 0, "(" + a + ") ->"), s.log.apply(window, arguments))
        };
        this.addTo = function (t) {
          return t instanceof e.Controller ? r != t && (r && r.removeScene(h), r = t, O(), k(!0), C(!0), S(), r.info("container").addEventListener("resize", _), t.addScene(h), h.trigger("add", {controller: r}), x(3, "added " + a + " to controller"), h.update()) : x(1, "ERROR: supplied argument of 'addTo()' is not a valid ScrollMagic Controller"), h
        }, this.enabled = function (e) {
          return arguments.length ? (b != e && (b = !!e, h.update(!0)), h) : b
        }, this.remove = function () {
          if (r) {
            r.info("container").removeEventListener("resize", _);
            var e = r;
            r = void 0, e.removeScene(h), h.trigger("remove"), x(3, "removed " + a + " from controller")
          }
          return h
        }, this.destroy = function (e) {
          return h.trigger("destroy", {reset: e}), h.remove(), h.off("*.*"), x(3, "destroyed " + a + " (reset: " + (e ? "true" : "false") + ")"), null
        }, this.update = function (e) {
          if (r) if (e) if (r.enabled() && b) {
            var t, i = r.info("scrollPos");
            t = p.duration > 0 ? (i - g.start) / (g.end - g.start) : i >= g.start ? 1 : 0, h.trigger("update", {
              startPos: g.start,
              endPos: g.end,
              scrollPos: i
            }), h.progress(t)
          } else P && f === c && E(!0); else r.updateScene(h, !1);
          return h
        }, this.refresh = function () {
          return k(), C(), h
        }, this.progress = function (e) {
          if (arguments.length) {
            var t = !1, i = f, n = r ? r.info("scrollDirection") : "PAUSED", s = p.reverse || e >= m;
            if (0 === p.duration ? (t = m != e, m = e < 1 && s ? 0 : 1, f = 0 === m ? l : c) : e < 0 && f !== l && s ? (m = 0, f = l, t = !0) : e >= 0 && e < 1 && s ? (m = e, f = c, t = !0) : e >= 1 && f !== d ? (m = 1, f = d, t = !0) : f !== c || s || E(), t) {
              var o = {progress: m, state: f, scrollDirection: n}, a = f != i, u = function (e) {
                h.trigger(e, o)
              };
              a && i !== c && (u("enter"), u(i === l ? "start" : "end")), u("progress"), a && f !== c && (u(f === l ? "start" : "end"), u("leave"))
            }
            return h
          }
          return m
        };
        var S = function () {
          g = {start: v + p.offset}, r && p.triggerElement && (g.start -= r.info("size") * p.triggerHook), g.end = g.start + p.duration
        }, k = function (e) {
          if (o) {
            var t = "duration";
            A(t, o.call(h)) && !e && (h.trigger("change", {what: t, newval: p[t]}), h.trigger("shift", {reason: t}))
          }
        }, C = function (e) {
          var i = 0, n = p.triggerElement;
          if (r && n) {
            for (var o = r.info(), a = s.get.offset(o.container), l = o.vertical ? "top" : "left"; n.parentNode.hasAttribute(t);) n = n.parentNode;
            var c = s.get.offset(n);
            o.isDocument || (a[l] -= r.scrollPos()), i = c[l] - a[l]
          }
          var d = i != v;
          v = i, d && !e && h.trigger("shift", {reason: "triggerElementPosition"})
        }, _ = function (e) {
          p.triggerHook > 0 && h.trigger("shift", {reason: "containerResize"})
        }, T = s.extend(n.validate, {
          duration: function (e) {
            if (s.type.String(e) && e.match(/^(\.|\d)*\d+%$/)) {
              var t = parseFloat(e) / 100;
              e = function () {
                return r ? r.info("size") * t : 0
              }
            }
            if (s.type.Function(e)) {
              o = e;
              try {
                e = parseFloat(o())
              } catch (i) {
                e = -1
              }
            }
            if (e = parseFloat(e), !s.type.Number(e) || e < 0) throw o ? (o = void 0, ['Invalid return value of supplied function for option "duration":', e]) : ['Invalid value for option "duration":', e];
            return e
          }
        }), O = function (e) {
          e = arguments.length ? [e] : Object.keys(T), e.forEach(function (e, t) {
            var i;
            if (T[e]) try {
              i = T[e](p[e])
            } catch (n) {
              i = u[e];
              var o = s.type.String(n) ? [n] : n;
              s.type.Array(o) ? (o[0] = "ERROR: " + o[0], o.unshift(1), x.apply(this, o)) : x(1, "ERROR: Problem executing validation callback for option '" + e + "':", n.message)
            } finally {
              p[e] = i
            }
          })
        }, A = function (e, t) {
          var i = !1, n = p[e];
          return p[e] != t && (p[e] = t, O(e), i = n != p[e]), i
        }, I = function (e) {
          h[e] || (h[e] = function (t) {
            return arguments.length ? ("duration" === e && (o = void 0), A(e, t) && (h.trigger("change", {
              what: e,
              newval: p[e]
            }), n.shifts.indexOf(e) > -1 && h.trigger("shift", {reason: e})), h) : p[e]
          })
        };
        this.controller = function () {
          return r
        }, this.state = function () {
          return f
        }, this.scrollOffset = function () {
          return g.start
        }, this.triggerPosition = function () {
          var e = p.offset;
          return r && (e += p.triggerElement ? v : r.info("size") * h.triggerHook()), e
        };
        var P, M;
        h.on("shift.internal", function (e) {
          var t = "duration" === e.reason;
          (f === d && t || f === c && 0 === p.duration) && E(), t && D()
        }).on("progress.internal", function (e) {
          E()
        }).on("add.internal", function (e) {
          D()
        }).on("destroy.internal", function (e) {
          h.removePin(e.reset)
        });
        var E = function (e) {
          if (P && r) {
            var t = r.info(), i = M.spacer.firstChild;
            if (e || f !== c) {
              var n = {position: M.inFlow ? "relative" : "absolute", top: 0, left: 0},
                  o = s.css(i, "position") != n.position;
              M.pushFollowers ? p.duration > 0 && (f === d && 0 === parseFloat(s.css(M.spacer, "padding-top")) ? o = !0 : f === l && 0 === parseFloat(s.css(M.spacer, "padding-bottom")) && (o = !0)) : n[t.vertical ? "top" : "left"] = p.duration * m, s.css(i, n), o && D()
            } else {
              "fixed" != s.css(i, "position") && (s.css(i, {position: "fixed"}), D());
              var a = s.get.offset(M.spacer, !0),
                  u = p.reverse || 0 === p.duration ? t.scrollPos - g.start : Math.round(m * p.duration * 10) / 10;
              a[t.vertical ? "top" : "left"] += u, s.css(M.spacer.firstChild, {top: a.top, left: a.left})
            }
          }
        }, D = function () {
          if (P && r && M.inFlow) {
            var e = f === c, t = r.info("vertical"), i = M.spacer.firstChild,
                n = s.isMarginCollapseType(s.css(M.spacer, "display")), o = {};
            M.relSize.width || M.relSize.autoFullWidth ? e ? s.css(P, {width: s.get.width(M.spacer)}) : s.css(P, {width: "100%"}) : (o["min-width"] = s.get.width(t ? P : i, !0, !0), o.width = e ? o["min-width"] : "auto"), M.relSize.height ? e ? s.css(P, {height: s.get.height(M.spacer) - (M.pushFollowers ? p.duration : 0)}) : s.css(P, {height: "100%"}) : (o["min-height"] = s.get.height(t ? i : P, !0, !n), o.height = e ? o["min-height"] : "auto"), M.pushFollowers && (o["padding" + (t ? "Top" : "Left")] = p.duration * m, o["padding" + (t ? "Bottom" : "Right")] = p.duration * (1 - m)), s.css(M.spacer, o)
          }
        }, z = function () {
          r && P && f === c && !r.info("isDocument") && E()
        }, R = function () {
          r && P && f === c && ((M.relSize.width || M.relSize.autoFullWidth) && s.get.width(window) != s.get.width(M.spacer.parentNode) || M.relSize.height && s.get.height(window) != s.get.height(M.spacer.parentNode)) && D()
        }, F = function (e) {
          r && P && f === c && !r.info("isDocument") && (e.preventDefault(), r._setScrollPos(r.info("scrollPos") - ((e.wheelDelta || e[r.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) / 3 || 30 * -e.detail)))
        };
        this.setPin = function (e, i) {
          var n = {pushFollowers: !0, spacerClass: "scrollmagic-pin-spacer"};
          if (i = s.extend({}, n, i), e = s.get.elements(e)[0], !e) return x(1, "ERROR calling method 'setPin()': Invalid pin element supplied."), h;
          if ("fixed" === s.css(e, "position")) return x(1, "ERROR calling method 'setPin()': Pin does not work with elements that are positioned 'fixed'."), h;
          if (P) {
            if (P === e) return h;
            h.removePin()
          }
          P = e;
          var o = P.parentNode.style.display,
              r = ["top", "left", "bottom", "right", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
          P.parentNode.style.display = "none";
          var a = "absolute" != s.css(P, "position"), l = s.css(P, r.concat(["display"])),
              c = s.css(P, ["width", "height"]);
          P.parentNode.style.display = o, !a && i.pushFollowers && (x(2, "WARNING: If the pinned element is positioned absolutely pushFollowers will be disabled."), i.pushFollowers = !1), window.setTimeout(function () {
            P && 0 === p.duration && i.pushFollowers && x(2, "WARNING: pushFollowers =", !0, "has no effect, when scene duration is 0.")
          }, 0);
          var d = P.parentNode.insertBefore(document.createElement("div"), P), u = s.extend(l, {
            position: a ? "relative" : "absolute",
            boxSizing: "content-box",
            mozBoxSizing: "content-box",
            webkitBoxSizing: "content-box"
          });
          if (a || s.extend(u, s.css(P, ["width", "height"])), s.css(d, u), d.setAttribute(t, ""), s.addClass(d, i.spacerClass), M = {
            spacer: d,
            relSize: {
              width: "%" === c.width.slice(-1),
              height: "%" === c.height.slice(-1),
              autoFullWidth: "auto" === c.width && a && s.isMarginCollapseType(l.display)
            },
            pushFollowers: i.pushFollowers,
            inFlow: a
          }, !P.___origStyle) {
            P.___origStyle = {};
            var f = P.style,
                m = r.concat(["width", "height", "position", "boxSizing", "mozBoxSizing", "webkitBoxSizing"]);
            m.forEach(function (e) {
              P.___origStyle[e] = f[e] || ""
            })
          }
          return M.relSize.width && s.css(d, {width: c.width}), M.relSize.height && s.css(d, {height: c.height}), d.appendChild(P), s.css(P, {
            position: a ? "relative" : "absolute",
            margin: "auto",
            top: "auto",
            left: "auto",
            bottom: "auto",
            right: "auto"
          }), (M.relSize.width || M.relSize.autoFullWidth) && s.css(P, {
            boxSizing: "border-box",
            mozBoxSizing: "border-box",
            webkitBoxSizing: "border-box"
          }), window.addEventListener("scroll", z), window.addEventListener("resize", z), window.addEventListener("resize", R), P.addEventListener("mousewheel", F), P.addEventListener("DOMMouseScroll", F), x(3, "added pin"), E(), h
        }, this.removePin = function (e) {
          if (P) {
            if (f === c && E(!0), e || !r) {
              var i = M.spacer.firstChild;
              if (i.hasAttribute(t)) {
                var n = M.spacer.style, o = ["margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
                margins = {}, o.forEach(function (e) {
                  margins[e] = n[e] || ""
                }), s.css(i, margins)
              }
              M.spacer.parentNode.insertBefore(i, M.spacer), M.spacer.parentNode.removeChild(M.spacer), P.parentNode.hasAttribute(t) || (s.css(P, P.___origStyle), delete P.___origStyle)
            }
            window.removeEventListener("scroll", z), window.removeEventListener("resize", z), window.removeEventListener("resize", R), P.removeEventListener("mousewheel", F), P.removeEventListener("DOMMouseScroll", F), P = void 0, x(3, "removed pin (reset: " + (e ? "true" : "false") + ")")
          }
          return h
        };
        var H, W = [];
        return h.on("destroy.internal", function (e) {
          h.removeClassToggle(e.reset)
        }), this.setClassToggle = function (e, t) {
          var i = s.get.elements(e);
          return 0 !== i.length && s.type.String(t) ? (W.length > 0 && h.removeClassToggle(), H = t, W = i, h.on("enter.internal_class leave.internal_class", function (e) {
            var t = "enter" === e.type ? s.addClass : s.removeClass;
            W.forEach(function (e, i) {
              t(e, H)
            })
          }), h) : (x(1, "ERROR calling method 'setClassToggle()': Invalid " + (0 === i.length ? "element" : "classes") + " supplied."), h)
        }, this.removeClassToggle = function (e) {
          return e && W.forEach(function (e, t) {
            s.removeClass(e, H)
          }), h.off("start.internal_class end.internal_class"), H = void 0, W = [], h
        }, w(), h
      };
      var n = {
        defaults: {duration: 0, offset: 0, triggerElement: void 0, triggerHook: .5, reverse: !0, loglevel: 2},
        validate: {
          offset: function (e) {
            if (e = parseFloat(e), !s.type.Number(e)) throw['Invalid value for option "offset":', e];
            return e
          }, triggerElement: function (e) {
            if (e = e || void 0) {
              var t = s.get.elements(e)[0];
              if (!t) throw['Element defined in option "triggerElement" was not found:', e];
              e = t
            }
            return e
          }, triggerHook: function (e) {
            var t = {onCenter: .5, onEnter: 1, onLeave: 0};
            if (s.type.Number(e)) e = Math.max(0, Math.min(parseFloat(e), 1)); else {
              if (!(e in t)) throw['Invalid value for option "triggerHook": ', e];
              e = t[e]
            }
            return e
          }, reverse: function (e) {
            return !!e
          }, loglevel: function (e) {
            if (e = parseInt(e), !s.type.Number(e) || e < 0 || e > 3) throw['Invalid value for option "loglevel":', e];
            return e
          }
        },
        shifts: ["duration", "offset", "triggerHook"]
      };
      e.Scene.addOption = function (t, i, s, o) {
        t in n.defaults ? e._util.log(1, "[static] ScrollMagic.Scene -> Cannot add Scene option '" + t + "', because it already exists.") : (n.defaults[t] = i, n.validate[t] = s, o && n.shifts.push(t))
      }, e.Scene.extend = function (t) {
        var i = this;
        e.Scene = function () {
          return i.apply(this, arguments), this.$super = s.extend({}, this), t.apply(this, arguments) || this
        }, s.extend(e.Scene, i), e.Scene.prototype = i.prototype, e.Scene.prototype.constructor = e.Scene
      }, e.Event = function (e, t, i, n) {
        n = n || {};
        for (var s in n) this[s] = n[s];
        return this.type = e, this.target = this.currentTarget = i, this.namespace = t || "", this.timeStamp = this.timestamp = Date.now(), this
      };
      var s = e._util = function (e) {
        var t, i = {}, n = function (e) {
          return parseFloat(e) || 0
        }, s = function (t) {
          return t.currentStyle ? t.currentStyle : e.getComputedStyle(t)
        }, o = function (t, i, o, r) {
          if (i = i === document ? e : i, i === e) r = !1; else if (!f.DomElement(i)) return 0;
          t = t.charAt(0).toUpperCase() + t.substr(1).toLowerCase();
          var a = (o ? i["offset" + t] || i["outer" + t] : i["client" + t] || i["inner" + t]) || 0;
          if (o && r) {
            var l = s(i);
            a += "Height" === t ? n(l.marginTop) + n(l.marginBottom) : n(l.marginLeft) + n(l.marginRight)
          }
          return a
        }, r = function (e) {
          return e.replace(/^[^a-z]+([a-z])/g, "$1").replace(/-([a-z])/g, function (e) {
            return e[1].toUpperCase()
          })
        };
        i.extend = function (e) {
          for (e = e || {}, t = 1; t < arguments.length; t++) if (arguments[t]) for (var i in arguments[t]) arguments[t].hasOwnProperty(i) && (e[i] = arguments[t][i]);
          return e
        }, i.isMarginCollapseType = function (e) {
          return ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(e) > -1
        };
        var a = 0, l = ["ms", "moz", "webkit", "o"], c = e.requestAnimationFrame, d = e.cancelAnimationFrame;
        for (t = 0; !c && t < l.length; ++t) c = e[l[t] + "RequestAnimationFrame"], d = e[l[t] + "CancelAnimationFrame"] || e[l[t] + "CancelRequestAnimationFrame"];
        c || (c = function (t) {
          var i = (new Date).getTime(), n = Math.max(0, 16 - (i - a)), s = e.setTimeout(function () {
            t(i + n)
          }, n);
          return a = i + n, s
        }), d || (d = function (t) {
          e.clearTimeout(t)
        }), i.rAF = c.bind(e), i.cAF = d.bind(e);
        var u = ["error", "warn", "log"], h = e.console || {};
        for (h.log = h.log || function () {
        }, t = 0; t < u.length; t++) {
          var p = u[t];
          h[p] || (h[p] = h.log)
        }
        i.log = function (e) {
          (e > u.length || e <= 0) && (e = u.length);
          var t = new Date,
              i = ("0" + t.getHours()).slice(-2) + ":" + ("0" + t.getMinutes()).slice(-2) + ":" + ("0" + t.getSeconds()).slice(-2) + ":" + ("00" + t.getMilliseconds()).slice(-3),
              n = u[e - 1], s = Array.prototype.splice.call(arguments, 1), o = Function.prototype.bind.call(h[n], h);
          s.unshift(i), o.apply(h, s)
        };
        var f = i.type = function (e) {
          return Object.prototype.toString.call(e).replace(/^\[object (.+)\]$/, "$1").toLowerCase()
        };
        f.String = function (e) {
          return "string" === f(e)
        }, f.Function = function (e) {
          return "function" === f(e)
        }, f.Array = function (e) {
          return Array.isArray(e)
        }, f.Number = function (e) {
          return !f.Array(e) && e - parseFloat(e) + 1 >= 0
        }, f.DomElement = function (e) {
          return "object" == typeof HTMLElement ? e instanceof HTMLElement : e && "object" == typeof e && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName
        };
        var m = i.get = {};
        return m.elements = function (t) {
          var i = [];
          if (f.String(t)) try {
            t = document.querySelectorAll(t)
          } catch (n) {
            return i
          }
          if ("nodelist" === f(t) || f.Array(t)) for (var s = 0, o = i.length = t.length; s < o; s++) {
            var r = t[s];
            i[s] = f.DomElement(r) ? r : m.elements(r)
          } else (f.DomElement(t) || t === document || t === e) && (i = [t]);
          return i
        }, m.scrollTop = function (t) {
          return t && "number" == typeof t.scrollTop ? t.scrollTop : e.pageYOffset || 0
        }, m.scrollLeft = function (t) {
          return t && "number" == typeof t.scrollLeft ? t.scrollLeft : e.pageXOffset || 0
        }, m.width = function (e, t, i) {
          return o("width", e, t, i)
        }, m.height = function (e, t, i) {
          return o("height", e, t, i)
        }, m.offset = function (e, t) {
          var i = {top: 0, left: 0};
          if (e && e.getBoundingClientRect) {
            var n = e.getBoundingClientRect();
            i.top = n.top, i.left = n.left, t || (i.top += m.scrollTop(), i.left += m.scrollLeft())
          }
          return i
        }, i.addClass = function (e, t) {
          t && (e.classList ? e.classList.add(t) : e.className += " " + t)
        }, i.removeClass = function (e, t) {
          t && (e.classList ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " "))
        }, i.css = function (e, t) {
          if (f.String(t)) return s(e)[r(t)];
          if (f.Array(t)) {
            var i = {}, n = s(e);
            return t.forEach(function (e, t) {
              i[e] = n[r(e)]
            }), i
          }
          for (var o in t) {
            var a = t[o];
            a == parseFloat(a) && (a += "px"), e.style[r(o)] = a
          }
        }, i
      }(window || {});
      return e.Scene.prototype.addIndicators = function () {
        return e._util.log(1, "(ScrollMagic.Scene) -> ERROR calling addIndicators() due to missing Plugin 'debug.addIndicators'. Please make sure to include plugins/debug.addIndicators.js"), this
      }, e.Scene.prototype.removeIndicators = function () {
        return e._util.log(1, "(ScrollMagic.Scene) -> ERROR calling removeIndicators() due to missing Plugin 'debug.addIndicators'. Please make sure to include plugins/debug.addIndicators.js"), this
      }, e.Scene.prototype.setTween = function () {
        return e._util.log(1, "(ScrollMagic.Scene) -> ERROR calling setTween() due to missing Plugin 'animation.gsap'. Please make sure to include plugins/animation.gsap.js"), this
      }, e.Scene.prototype.removeTween = function () {
        return e._util.log(1, "(ScrollMagic.Scene) -> ERROR calling removeTween() due to missing Plugin 'animation.gsap'. Please make sure to include plugins/animation.gsap.js"), this
      }, e.Scene.prototype.setVelocity = function () {
        return e._util.log(1, "(ScrollMagic.Scene) -> ERROR calling setVelocity() due to missing Plugin 'animation.velocity'. Please make sure to include plugins/animation.velocity.js"), this
      }, e.Scene.prototype.removeVelocity = function () {
        return e._util.log(1, "(ScrollMagic.Scene) -> ERROR calling removeVelocity() due to missing Plugin 'animation.velocity'. Please make sure to include plugins/animation.velocity.js"), this
      }, e
    })
  }, 587: function (e, t, i) {
    var n, s;
    !function (o) {
      var r = !1;
      if (n = o, s = "function" == typeof n ? n.call(t, i, t, e) : n, !(void 0 !== s && (e.exports = s)), r = !0, e.exports = o(), r = !0, !r) {
        var a = window.Cookies, l = window.Cookies = o();
        l.noConflict = function () {
          return window.Cookies = a, l
        }
      }
    }(function () {
      function e() {
        for (var e = 0, t = {}; e < arguments.length; e++) {
          var i = arguments[e];
          for (var n in i) t[n] = i[n]
        }
        return t
      }

      function t(i) {
        function n(t, s, o) {
          var r;
          if ("undefined" != typeof document) {
            if (arguments.length > 1) {
              if (o = e({path: "/"}, n.defaults, o), "number" == typeof o.expires) {
                var a = new Date;
                a.setMilliseconds(a.getMilliseconds() + 864e5 * o.expires), o.expires = a
              }
              o.expires = o.expires ? o.expires.toUTCString() : "";
              try {
                r = JSON.stringify(s), /^[\{\[]/.test(r) && (s = r)
              } catch (l) {
              }
              s = i.write ? i.write(s, t) : encodeURIComponent(String(s)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = encodeURIComponent(String(t)), t = t.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent), t = t.replace(/[\(\)]/g, escape);
              var c = "";
              for (var d in o) o[d] && (c += "; " + d, o[d] !== !0 && (c += "=" + o[d]));
              return document.cookie = t + "=" + s + c
            }
            t || (r = {});
            for (var u = document.cookie ? document.cookie.split("; ") : [], h = /(%[0-9A-Z]{2})+/g, p = 0; p < u.length; p++) {
              var f = u[p].split("="), m = f.slice(1).join("=");
              '"' === m.charAt(0) && (m = m.slice(1, -1));
              try {
                var g = f[0].replace(h, decodeURIComponent);
                if (m = i.read ? i.read(m, g) : i(m, g) || m.replace(h, decodeURIComponent), this.json) try {
                  m = JSON.parse(m)
                } catch (l) {
                }
                if (t === g) {
                  r = m;
                  break
                }
                t || (r[g] = m)
              } catch (l) {
              }
            }
            return r
          }
        }

        return n.set = n, n.get = function (e) {
          return n.call(n, e)
        }, n.getJSON = function () {
          return n.apply({json: !0}, [].slice.call(arguments))
        }, n.defaults = {}, n.remove = function (t, i) {
          n(t, "", e(i, {expires: -1}))
        }, n.withConverter = t, n
      }

      return t(function () {
      })
    })
  }, 588: function (e, t) {
  }, 589: function (e, t, i) {
    (function (e) {
      "use strict";
      e.widget("gastro.accordion", {
        options: {multiple: !1}, _create: function () {
          var t;
          return t = this, this.element.children(".active").children(".gst-accordion-body").show(), this._on(this.element.children(".gst-accordion-panel").children(".gst-accordion-heading"), {click: e.proxy(this._panelClicked, this)}), this.element.on("accordionOpen.gst", function (e, i) {
            return t.panelOpen(i)
          })
        }, _panelClicked: function (t) {
          var i, n, s;
          return t.preventDefault(), i = e(t.currentTarget), n = i.data("index"), s = this.element.children(".active").data("index"), this.panelOpen(n, s)
        }, panelOpen: function (t, i) {
          var n, s, o, r, a;
          return r = this.element.data("multiple") || this.options.multiple, a = this.element.find(".gst-accordion-panel"), n = a.find(".gst-accordion-body"), o = a.filter("[data-index=" + t + "]"), s = n.filter("[data-index=" + t + "]"), o.hasClass("active") ? r && (o.toggleClass("active"), s.stop(!0, !0).slideToggle(300), s.find(".gst-item").trigger("hiddenClose.gst")) : (r ? (o.toggleClass("active"), s.stop(!0, !0).slideToggle(300)) : (n.stop(!0, !0).slideUp(300), a.removeClass("active"), s.stop(!0, !0).slideDown(300), o.addClass("active"), i && n.filter("[data-index=" + i + "]").find(".gst-item").trigger("hiddenClose.gst")), s.find(".gst-item").trigger("hiddenOpen.gst")), setTimeout(function () {
            return e(window).resize()
          }, 400)
        }
      }), e.widget.bridge("gstAccordion", e.gastro.accordion)
    }).call(t, i(8))
  }, 590: function (e, t, i) {
    (function (e) {
      "use strict";
      e.widget("gastro.animated", {
        options: {item: ".anmt-item", offset: .95, duration: 800, interval: 200}, _create: function () {
          var e, t;
          return t = this, this.isResponsive = GastroApp.isResponsive, this.isMobileOrTablet = GastroApp.isMobileOrTablet, this.isHorizontalScroll = GastroApp.isHorizontalScroll, this.isVerticalScroll = GastroApp.isVerticalScroll, this.isHalfPageScroll = GastroApp.isHalfPageScroll, this.tabletScreenWidth = GastroApp.tabletScreenWidth, e = this.element, setTimeout(function () {
            return t.isHorizontalScroll || t.isVerticalScroll || t.isHalfPageScroll ? t.initializeSlidePageAnimation(e) : t.initializeAnimation(e), e.addClass("container-animated")
          }, 400)
        }, initializeAnimation: function (t) {
          var i, n, s, o, r, a, l;
          return r = this, l = 0, s = [], o = t.find(this.options.item), n = this.options.offset, a = this.options.interval, o.each(function (t, i) {
            var o, a, c, d, u;
            if (o = e(i), !o.hasClass("animated")) return a = o.hasClass("stagger"), c = o.outerHeight(), d = o.offset().top, u = e(window).scrollTop(), a && d + c > u && l++, e(this).attr("data-animation-offset") && (n = parseFloat(e(this).attr("data-animation-offset"))), u + e(window).height() * n > d ? a && d + c > u ? s.push(o) : (r.doAnimate(o), r.removeAnimate(o)) : e(window).scroll(function (t) {
              if (c = o.outerHeight(), d = o.offset().top, u = e(window).scrollTop(), u + e(window).height() * n > d) return a && d + c > u ? s.push(o) : (r.doAnimate(o), r.removeAnimate(o)), e(window).unbind("scroll", t.handleObj.handler, t)
            })
          }), i = setInterval(function () {
            var e;
            if (s.length > 0 && (e = s.shift(), r.doAnimate(e), l--, r.removeAnimate(e)), l <= 0) return clearInterval(i)
          }, a)
        }, initializeSlidePageAnimation: function (t) {
          var i, n, s, o, r, a, l;
          return l = this, i = "", o = "", this.isMobileOrTablet && this.isResponsive ? this.initializeAnimation(t) : (this.windowWidth = e(window).width(), this.windowWidth <= this.tabletScreenWidth ? this.initializeAnimation(t) : (this.isHorizontalScroll || this.isVerticalScroll ? (s = GastroApp.mainWrapper.find(".gst-section.slick-active").find(this.options.item), this.setSlideAnimation(s)) : (a = GastroApp.mainWrapper.find(".gst-row").first().children(), n = a.first().find(".gst-box.slick-active").find(this.options.item), r = a.last().find(".gst-box.slick-active").find(this.options.item), this.setSlideAnimation(n), this.setSlideAnimation(r)), e(window).on("slidePageChanged.gst", function (e, t) {
            return l.setSlideAnimation(t.nextSlide.find(l.options.item)), setTimeout(function () {
              return t.prevSlide.find(l.options.item).removeClass("animated gst-opacity1")
            }, 300)
          })), e(window).on("resize", function () {
            return l._windowResize()
          }))
        }, _windowResize: function () {
          var t;
          return t = e(window).width(), t <= this.tabletScreenWidth && this.windowWidth > this.tabletScreenWidth && this.unsetSlideAnimation(), this.windowWidth = t
        }, setSlideAnimation: function (t) {
          var i, n, s, o, r;
          return s = this, r = 0, n = [], o = this.options.interval, t.each(function (t, i) {
            var o;
            return o = e(i), o.hasClass("stagger") ? (r++, n.push(o)) : (s.doAnimate(o), s.removeAnimate(o))
          }), i = setInterval(function () {
            var e;
            if (n.length > 0 && (e = n.shift(), s.doAnimate(e), r--, s.removeAnimate(e)), r <= 0) return clearInterval(i)
          }, o)
        }, unsetSlideAnimation: function () {
          var t, i;
          return i = this, t = this.element.find(this.options.item), t.each(function (t, n) {
            var s;
            if (s = e(n), !s.hasClass("animated")) return i.doAnimate(s)
          })
        }, doAnimate: function (e) {
          var t;
          return t = this.options.duration, e.attr("data-animation-duration") && (t = e.attr("data-animation-duration"), e.css({
            "animation-duration": t,
            "-webkit-animation-duration": t
          })), e.addClass("animated gst-opacity1"), e.trigger("gst.itemAnimated")
        }, removeAnimate: function (e) {
          var t;
          return t = this.options.duration, e.attr("data-animation-duration") && (t = e.attr("data-animation-duration")), setTimeout(function () {
            return e.css({"animation-duration": "", "-webkit-animation-duration": ""})
          }, parseInt(t))
        }
      }), e.widget.bridge("gstAnimated", e.gastro.animated)
    }).call(t, i(8))
  }, 591: function (e, t, i) {
    (function (e) {
      "use strict";
      e.widget("gastro.audio", {
        options: {duration: !1}, _create: function () {
          if (this.element.find(".gst-audio-player").length) return this.audio = this.element.find("audio"), this.audioPlayer = this.element.children(".gst-audio-player"), this.audioButton = this.element.find(".gst-audio-button"), this._on(this.element, {"click .gst-audio-player": "_playerClicked"}), this._on(this.audio, {
            ended: "_audioEnded",
            play: "_audioPlayed",
            pause: "_audioPaused"
          })
        }, _playerClicked: function (e) {
          return this.audioPlayer.hasClass("pause") ? this._audioPlayed() : this.audioPlayer.hasClass("play") ? this._audioPaused() : void 0
        }, _audioPlayed: function () {
          return this.audioPlayer.removeClass("pause").addClass("play"), this.audioButton.removeClass("twf-play").addClass("twf-pause"), this.audio[0].play()
        }, _audioPaused: function () {
          return this.audioPlayer.removeClass("play").addClass("pause"), this.audioButton.removeClass("twf-pause").addClass("twf-play"), this.audio[0].pause()
        }, _audioEnded: function () {
          return this.audioPlayer.removeClass("play").addClass("pause"), this.audioButton.removeClass("twf-pause").addClass("twf-play")
        }
      }), e.widget.bridge("gstAudio", e.gastro.audio)
    }).call(t, i(8))
  }, 592: function (e, t, i) {
    (function (e) {
      "use strict";
      var t;
      t = i(586), e.widget("gastro.background", {
        options: {
          enableMobileParallax: !1,
          contentfade: !1,
          speed: 0,
          type: "image",
          ratio: 16 / 9,
          offset: 10,
          delayTime: 200
        }, _create: function () {
          var t, i, n, s, o, r;
          return s = this, t = this.options.delayTime, i = this.element.data("mobileparallax") / 10 || this.options.enableMobileParallax, this.fadeItem = this.element.data("contentfade") || this.options.contentfade, this.parallaxSpeed = this.element.data("parallaxspeed") / 10 || this.options.speed, this.type = this.element.data("type") || this.options.type, this.wrapper = this.element.find(".gst-background-wrapper"), (this.element.hasClass("gst-background--zoom-in") || this.element.hasClass("gst-background--zoom-out")) && this._animatedBackground(), GastroApp.isMobileOrTablet ? (this.element.find(".gst-video-background-inner").remove(), i && 0 !== this.parallaxSpeed ? (this._setWrapperSize(), this._doParallax(), e(window).on("resize", function () {
            return clearTimeout(s.resizeTimer), s.resizeTimer = setTimeout(function () {
              return s._setWrapperSize(), s._doParallax()
            }, t)
          }), e(window).on("scroll", function () {
            return s._doParallax()
          })) : void 0) : "video" === this.type ? (o = this.element.find("video"), r = this.element.find(".gst-video-background-inner"), o.length > 0 ? (setTimeout(function () {
            if (o[0].paused) return o[0].play()
          }, 150), o.is(":visible") || o.prop("muted", !0), this.element.on("switchSlideBackgroundTo.gst", function () {
            return o[0].play()
          }), this.element.on("switchSlideBackgroundFrom.gst", function () {
            return o[0].pause()
          })) : r.length > 0 && r.hasClass("gst-video-background-inner--vimeo") && (n = $f(r[0]), n.addEvent("ready", function () {
            if (s.element.on("switchSlideBackgroundTo.gst", function () {
              return n.api("play")
            }), s.element.on("switchSlideBackgroundFrom.gst", function () {
              return n.api("pause")
            }), "muted" === r.data("sound") || !r.is(":visible")) return n.api("setVolume", 0)
          })), 0 === this.parallaxSpeed ? (setTimeout(function () {
            return s._setVideoBackgroundSize(r, !0)
          }, t), e(window).on("resize", function () {
            return clearTimeout(s.resizeTimer), s.resizeTimer = setTimeout(function () {
              return s._setVideoBackgroundSize(r)
            }, t)
          })) : (this.parent = this.element.parent(), this.fadeItem && this.parent.addClass("gst-fade-content"), setTimeout(function () {
            return s._setVideoBackgroundSize(r, !0)
          }, t), this._setWrapperSize(), this._doParallax(), e(window).on("resize", function () {
            return clearTimeout(s.resizeTimer), s.resizeTimer = setTimeout(function () {
              return s._setWrapperSize(), s._setVideoBackgroundSize(r), s._doParallax()
            }, t)
          }), e(window).on("scroll", function () {
            return s._doParallax()
          }))) : (0 !== this.parallaxSpeed && (this.parent = this.element.parent(), this.fadeItem && this.parent.addClass("gst-fade-content"), this._setWrapperSize(), this._doParallax(), e(window).on("resize", function () {
            return clearTimeout(s.resizeTimer), s.resizeTimer = setTimeout(function () {
              return s._setWrapperSize(), s._doParallax()
            }, t)
          }), e(window).on("scroll", function () {
            return s._doParallax()
          })), this.element.on("switchSlideBackgroundTo.gst", function () {
            if (s.element.hasClass("animated")) return s.element.removeClass("animated"), setTimeout(function () {
              return s.element.addClass("animated")
            }, 50)
          }))
        }, _animatedBackground: function () {
          var e, i, n;
          return e = this.element, i = e.closest(".gst-item"), i.hasClass("anmt-item") ? i.on("gst.itemAnimated", function () {
            return e.addClass("animated"), i.off("gst.itemAnimated")
          }) : (n = new t.Scene({
            triggerElement: e[0],
            triggerHook: "onEnter"
          }), n.addTo(GastroApp.smController), n.on("enter", function () {
            return e.addClass("animated"), n.destroy()
          }))
        }, _setWrapperSize: function () {
          var t;
          return t = this.element.outerHeight(), this.parallaxSpeed > 0 ? t += (e(window).height() - t) * this.parallaxSpeed : this.parallaxSpeed < 0 && (t += (e(window).height() + t) * Math.abs(this.parallaxSpeed)), this.wrapper.css("height", t + "px")
        }, _setVideoBackgroundSize: function (e, t) {
          var i, n, s, o, r, a, l, c, d;
          return d = this.wrapper.width(), c = this.wrapper.height(), t && e.addClass("loaded"), n = this.element.data("ratio"), n ? (n = n.toString(), a = n.split(":"), r = 2 === a.length ? parseInt(a[0]) / parseInt(a[1]) : this.options.ratio) : r = this.options.ratio, d / c > r ? (l = d, i = d / r, s = 0, o = (c - d / r) / 2) : (l = c * r, i = c, s = (d - c * r) / 2, o = 0), e.css("width", l + "px"), e.css("height", i + this.options.offset + "px"), e.css("margin-top", o - this.options.offset / 2 + "px"), e.css("margin-left", s + "px")
        }, _doParallax: function () {
          var t, i, n, s, o;
          if (o = e(window).height(), s = e(window).scrollTop(), t = this.element.outerHeight(), i = this.element.offset().top, !(s + o <= i || s >= i + t) && (this.parallaxSpeed > 0 ? n = (s - i) * this.parallaxSpeed : this.parallaxSpeed < 0 && (n = (s + o - i) * this.parallaxSpeed), this.wrapper.css({transform: "translateY(" + n + "px)"}), this.fadeItem)) {
            if (!(i + t - s < 2 * t / 3)) return this.parent.removeClass("faded");
            if (!this.parent.hasClass("faded")) return this.parent.addClass("faded")
          }
        }
      }), e.widget.bridge("gstBackground", e.gastro.background)
    }).call(t, i(8))
  }, 593: function (e, t, i) {
    (function (e) {
      "use strict";
      e.widget("gastro.backToTop", {
        options: {duration: 1e3, delayTime: 100}, _create: function () {
          var t, i, n;
          return i = this, this.scrollTop = e(window).scrollTop(), this.scrollingToTop = !1, n = e(window).height(), t = this.options.delayTime, this.scrollTop > n && this.element.addClass("active"), e(window).on("scroll", function () {
            return i._windowScroll()
          }), this.element.on("click", function (e) {
            return i._buttonClicked(e)
          })
        }, _windowScroll: function () {
          var t, i;
          return t = e(window).scrollTop(), i = e(window).height(), t > i && this.scrollTop <= i ? this._buttonActive() : t <= i && this.scrollTop > i && this._buttonInactive(), this.scrollTop = t
        }, _buttonActive: function () {
          if (!this.element.hasClass("active")) return this.element.addClass("active")
        }, _buttonInactive: function () {
          if (this.element.hasClass("active")) return this.element.removeClass("active")
        }, _buttonClicked: function (e) {
          var t, i;
          if (e.preventDefault(), i = this, t = this.options.duration, this.scrollTop > 0 && !this.scrollingToTop) return this.scrollingToTop = !0, GastroApp.body.velocity("scroll", {
            duration: t,
            easing: "easeOut",
            offset: -100
          }), setTimeout(function () {
            return i.scrollingToTop = !1
          }, t)
        }
      }), e.widget.bridge("gstBackToTop", e.gastro.backToTop)
    }).call(t, i(8))
  }, 594: function (e, t, i) {
    (function (e) {
      "use strict";
      e.widget("gastro.bannertext", {
        options: {loop: !1, duration: 3e3, cursor: "|", words: ["Text 1", "Text 2", "Text 3", "Text 4"]},
        _create: function () {
          var e, t, i, n, s;
          return i = this.element.attr("class").match(/gst-bannertext--(\S+)/), n = i ? i[1] : "flip", t = this.element.find(".gst-bannertext-dynamic-inner"), s = this.element.data("words").split(","), this.duration = this.element.data("duration"), this.element.data("loop") ? this.loop = !0 : this.loop = !1, "flip" === n ? this._flipAnimate(t, s) : (e = this.element.data("cursor"), t.typed({
            strings: s,
            typeSpeed: 40,
            backSpeed: 0,
            startDelay: 200,
            backDelay: this.duration,
            loop: this.loop,
            loopCount: !1,
            showCursor: !0,
            cursorChar: e,
            attr: null
          }))
        },
        _flipAnimate: function (e, t) {
          var i, n, s, o, r, a;
          if (o = t.length, a = this.loop, e.append('<span class="gst-bannertext-item">' + t[0] + "</span>"), o > 1) return e.append('<span class="gst-bannertext-item">' + t[1] + "</span>"), r = this, n = e.find(".gst-bannertext-item:first-child"), i = e.find(".gst-bannertext-item:last-child"), s = 0, setInterval(function () {
            if (a !== !1 || s !== o - 1) return e.toggleClass("flip"), o > 2 ? setTimeout(function () {
              var a;
              return a = r._wordIndexCalculate(s, o), e.hasClass("flip") ? n.text(t[a]) : i.text(t[a]), s++
            }, 500) : s++
          }, this.duration)
        },
        _wordIndexCalculate: function (e, t) {
          var i, n;
          return i = e % t + 2, n = i < t ? i : i - t
        }
      }), e.widget.bridge("gstBannerText", e.gastro.bannertext)
    }).call(t, i(8))
  }, 595: function (e, t, i) {
    (function (e) {
      "use strict";
      e.widget("gastro.box", {
        _create: function () {
          if (this.element.hasClass("gst-box--fit-height") && this.element.children(".gst-box-inner").gstSetSize(), this.element.hasClass("gst-box--pinned") && this.element.gstPinned(), this.element.hasClass("gst-box--parallax-content")) return this.element.gstParallaxContent({items: this.element.find(".gst-box-body").first().children()})
        }
      }), e.widget.bridge("gstBox", e.gastro.box)
    }).call(t, i(8))
  }, 596: function (e, t, i) {
    (function (e) {
      "use strict";
      e.widget("gastro.carousel", {
        options: {
          dots: !1,
          fade: !1,
          infinite: !0,
          arrows: !0,
          prevArrow: '<span class="slick-prev gst-carousel-arrow"><i class="twf twf-ln-arrow-left"></i></span>',
          nextArrow: '<span class="slick-next gst-carousel-arrow"><i class="twf twf-ln-arrow-right"></i></span>',
          slidesToScroll: 1,
          slidesToShow: 1,
          autoplay: !1,
          pauseOnHover: !0,
          autoplaySpeed: 5e3,
          vertical: !1,
          responsive: [],
          variableWidth: !1,
          centerMode: !1
        }, _create: function () {
          var t, i, n, s, o, r, a, l, c, d, u, h, p, f, m, g, v;
          return p = this, f = this.options, r = this.element.children(), f.responsive = [], n = this.options.carouselArrowStyle ? this.options.carouselArrowStyle : GastroApp.carouselArrowStyle, i = this.options.carouselArrowBackground ? this.options.carouselArrowBackground : GastroApp.carouselArrowBackground, f.prevArrow = '<span class="slick-prev gst-carousel-arrow ' + i + '"><i class="twf twf-' + n + '-left"></i></span>', f.nextArrow = '<span class="slick-next gst-carousel-arrow ' + i + '"><i class="twf twf-' + n + '-right"></i></span>', c = !!this.options.isFullSlide && this.options.isFullSlide, d = !!this.options.isHalfSlide && this.options.isHalfSlide, l = this.options.halfSlidePosition ? this.options.halfSlidePosition : "left", this.element.attr("data-display") && (f.slidesToShow = this.element.data("display")), h = this.element.attr("data-play_on_hover"), h && "true" === h && (f.pauseOnHover = !1), v = this.element.attr("data-variable_width"), v && "true" === v && (f.variableWidth = !0), s = this.element.attr("data-center_mode"), s && "true" === s && (f.centerMode = !0, o = this.element.attr("data-center_padding"), o && (f.centerPadding = o)), t = this.element.attr("data-adaptive_height"), t && "true" === t && (f.adaptiveHeight = !0), this.element.attr("data-scroll") ? f.slidesToScroll = this.element.data("scroll") : f.slidesToScroll = f.slidesToShow, GastroApp.isResponsive && (f.slidesToShow > 4 && (g = f.slidesToScroll <= 4 ? f.slidesToScroll : 4, f.responsive.push({
            breakpoint: 960,
            settings: {slidesToShow: 4, slidesToScroll: g}
          })), f.slidesToShow >= 3 && (u = f.slidesToScroll <= 2 ? f.slidesToScroll : 2, f.responsive.push({
            breakpoint: 768,
            settings: {slidesToShow: 2, slidesToScroll: u}
          })), f.slidesToShow > 1 && f.responsive.push({
            breakpoint: 480,
            settings: {slidesToShow: 1, slidesToScroll: 1, adaptiveHeight: !0, variableWidth: !1}
          })), this.element.attr("data-arrows") && (f.arrows = this.element.data("arrows")), this.element.attr("data-indicator") && (f.dots = this.element.data("indicator")), this.element.attr("data-loop") && (f.infinite = this.element.data("loop")), this.element.attr("data-fade") && (f.slidesToScroll = 1) && (f.fade = !0, f.cssEase = "linear"), this.element.attr("data-duration") && (m = this.element.data("duration"), e.isNumeric(m) && (f.autoplay = !0, f.autoplaySpeed = m)), this.options.vertical === !0 && (f.prevArrow = '<span class="slick-prev slick-prev--vertical"> <i class="twf twf-ln-arrow-up"></i> </span>', f.nextArrow = '<span class="slick-next slick-next--vertical"> <i class="twf twf-ln-arrow-down"></i> </span>'), this.initializeCarousel(f), a = this.element, (c || d) && this.element.on("beforeChange", function (t, i, n, s) {
            var o, r, c, u, h;
            if (a.is(i.$slider)) return o = e(i.$slides.get(s)), c = e(i.$slides.get(n)), r = o.children(".gst-background"), u = c.children(".gst-background"), r.trigger("switchSlideBackgroundTo.gst"), u.trigger("switchSlideBackgroundFrom.gst"), h = d ? l : "full", e(window).trigger("slidePageChanged.gst", {
              position: h,
              prevIndex: n,
              nextIndex: s,
              prevSlide: c,
              nextSlide: o
            })
          }), this.element.closest(".gst-item").on("hiddenOpen.gst", function () {
            return a.slick("setPosition")
          }), this.element.on("resetScrollPage.gst", function () {
            return a.slick("reinit")
          })
        }, reposition: function () {
          return this.element.hasClass("slider-ready") ? this.element.slick("setPosition") : this.element.slick("setPosition").addClass("slider-ready")
        }, initializeCarousel: function (e) {
          return this.element.hasClass("slider-ready") ? this.element.slick(e) : this.element.slick(e).addClass("slider-ready")
        }
      }), e.widget.bridge("gstCarousel", e.gastro.carousel)
    }).call(t, i(8))
  }, 597: function (e, t, i) {
    (function (e) {
      "use strict";
      e.widget("gastro.collapsedMenu", {
        options: {
          sidenavWidth: 280,
          collapsedDelayTime: 50,
          transitionDelayTime: 40,
          transitionDuration: 800,
          transitionEasing: [20, 10],
          isParallaxFooter: !1,
          mobile: !1
        }, _create: function () {
          var t;
          if (this.button = this.element.find(".gst-collapsed-button"), this.button.length) return t = this, this.body = this.options.body ? this.options.body : e("body"), this.collapsedMenuStyle = !!this.element.data("collapsed_style") && this.element.data("collapsed_style"), "offcanvas" !== this.collapsedMenuStyle ? (this.collapsedMenu = this.element.find(".gst-collapsed-menu"), this.transformElement = this.element) : (this.collapsedMenu = this.element.siblings(".gst-collapsed-menu"), this.transformElement = this.collapsedMenu, this.offCanvasOverlay = this.element.siblings(".gst-offcanvas-overlay"), this._on(this.offCanvasOverlay, {click: "_collapsedButtonClicked"})), this.collapsedDelayTime = this.element.data("fixed") && "full" === this.collapsedMenuStyle ? 400 : this.options.collapsedDelayTime, this._on(this.button, {click: "_collapsedButtonClicked"}), "full" === this.collapsedMenuStyle || "classic" === this.collapsedMenuStyle ? this.element.on("closeCollapsedMenu.gst", function (e) {
            return t._closeCollapsedMenu()
          }) : void 0
        }, _collapsedButtonClicked: function (e) {
          return e.preventDefault(), this.button.hasClass("gst-closed") ? this._closeCollapsedMenu() : this._openCollapsedMenu()
        }, _closeCollapsedMenu: function () {
          var e;
          return e = this, this.collapsedMenu.removeClass("active"), this.button.removeClass("gst-closed"), this.button.children().removeClass("gst-p-bg-contrast-bg"), "classic" === this.collapsedMenuStyle ? this.collapsedMenu.slideUp(500) : "full" === this.collapsedMenuStyle ? this.body.removeClass("gst-unscrollable") : "minimal" !== this.collapsedMenuStyle && "offcanvas" !== this.collapsedMenuStyle || (this.body.removeClass("nav-opened gst-unscrollable--horizontal"), this.offCanvasOverlay && this.offCanvasOverlay.removeClass("active")), setTimeout(function () {
            return e.element.removeClass("opened"), e.transformElement.removeClass("gst-no-transform")
          }, this.collapsedDelayTime)
        }, _openCollapsedMenu: function () {
          var e, t, i, n;
          return n = this, e = this.body, t = this.collapsedMenu, i = this.collapsedMenuStyle, this.button.hasClass("gst-closed") || (this.button.addClass("gst-closed"), this.button.children().addClass("gst-p-bg-contrast-bg")), this.element.hasClass("opened") || this.element.addClass("opened"), this.transformElement.hasClass("gst-no-transform") || this.transformElement.addClass("gst-no-transform"), setTimeout(function () {
            if (!t.hasClass("active")) {
              if (t.addClass("active"), "classic" === i) return t.slideDown(500);
              if ("full" === i) {
                if (!e.hasClass("gst-unscrollable")) return e.addClass("gst-unscrollable")
              } else if (("minimal" === i || "offcanvas" === i) && (e.hasClass("gst-unscrollable--horizontal") || e.addClass("gst-unscrollable--horizontal"), e.hasClass("sidenav-opened") || e.addClass("nav-opened"), n.offCanvasOverlay && !n.offCanvasOverlay.hasClass("active"))) return n.offCanvasOverlay.addClass("active")
            }
          }, this.collapsedDelayTime)
        }
      }), e.widget.bridge("gstCollapsedMenu", e.gastro.collapsedMenu)
    }).call(t, i(8))
  }, 598: function (e, t, i) {
    (function (e) {
      "use strict";
      e.widget("gastro.comment", {
        options: {
          likeDislikeWrapper: ".comment-like-dislike",
          likeDislikeButton: ".comment-like-dislike-button",
          likeDislikeCounter: ".comment-like-dislike-number"
        }, _create: function () {
          var t;
          return this.rating = this.element.find("#rating"), this._on(this.element, (t = {"click .js-comment-form-rating a": e.proxy(this._ratingClicked, this)}, t["click " + this.options.likeDislikeButton] = e.proxy(this._likeDislikeClicked, this), t))
        }, _ratingClicked: function (t) {
          var i;
          if (t.preventDefault(), i = e(t.currentTarget), i.siblings().removeClass("active"), !i.hasClass("active")) return i.addClass("active"), this.rating.val(i.text())
        }, _likeDislikeClicked: function (t) {
          var i, n, s, o, r, a, l, c, d;
          if (t.preventDefault(), l = this, r = e(t.currentTarget), n = r.data("comment"), c = r.data("type"), d = r.data("user"), i = r.data("clicked"), o = r.siblings(this.options.likeDislikeCounter), s = o.html(), a = parseInt(s) + 1, !i) return e.ajax({
            type: "post",
            url: GastroApp.ajaxUrl,
            data: {comment: n, action: "comment_like_dislike", type: c, _wpnonce: GastroApp.ajaxNonce, user: d},
            beforeSend: function (e) {
              return o.html(a)
            },
            success: function (t) {
              var i;
              if (t = e.parseJSON(t), t.success) return l.buttonClicked = !0, r.closest(l.options.likeDislikeWrapper).find(l.options.likeDislikeButton).data("clicked", 1), i = t.latest_count, o.html(i)
            }
          })
        }
      }), e.widget.bridge("gstComment", e.gastro.comment)
    }).call(t, i(8))
  }, 599: function (e, t, i) {
    (function (e) {
      "use strict";
      e.widget("gastro.countdown", {
        options: {timestamp: 0}, _create: function () {
          var e, t, i;
          return t = this, e = this.element.attr("class").match(/gst-countdown--(\S+)/), i = e ? e[1] : "group", "group" === i ? this.digitClass = "digit" : this.digitClass = "digit gst-s-text-bg", this.timestamp = this.element.data("timestamp") || this.options.timestamp, setInterval(function () {
            return t._tick()
          }, 300)
        }, _tick: function () {
          var e, t, i, n, s;
          return s = 604800, e = 86400, t = 3600, n = 60, i = Math.floor((this.timestamp - Date.now()) / 1e3), i < 0 ? void (i = 0) : (this.element.find(".gst-countdown-item[data-label='week']").length && (this.week = Math.floor(i / s), i -= this.week * s, this._updateTimer("week", this.week)), this.element.find(".gst-countdown-item[data-label='day']").length && (this.day = Math.floor(i / e), i -= this.day * e, this._updateTimer("day", this.day)), this.hour = Math.floor(i / t), i -= this.hour * t, this._updateTimer("hour", this.hour), this.minute = Math.floor(i / n), i -= this.minute * n, this._updateTimer("minute", this.minute), this.second = i, this._updateTimer("second", this.second))
        }, _updateTimer: function (e, t) {
          var i;
          return i = String(t).split(""), i.length < 2 ? (i.unshift("0"), this._updateDigit(i, e)) : this._updateDigit(i, e)
        }, _updateDigit: function (t, i) {
          var n, s, o, r, a;
          if (a = this, s = this.element.find(".gst-countdown-item[data-label=" + i + "]"), r = s.find(".gst-countdown-number"), 0 === s.find(".digit").length ? (n = this.digitClass, e.each(t, function (t, i) {
            var s;
            return s = '<span class="digit-container">\n   <span class="' + n + '" data-digit="' + i + '">' + i + "</span>\n</span>", e(s).appendTo(r)
          })) : (o = t.length, s.find(".digit").length > t.length && s.find(".digit-container").eq(0).remove(), e.each(t, function (e, t) {
            var i;
            if (i = s.find(".digit-container").eq(e).find(".digit"), t = parseInt(t), t !== i.data("digit")) return i.data("digit", t), i.text(t)
          })), this.element.attr("data-background-color") && this.element.find(".digit").css("background-color", this.element.data("background-color")), this.element.attr("data-border-radius")) return this.element.find(".digit").css("border-radius", this.element.data("border-radius") + "px")
        }
      }), e.widget.bridge("gstCountdown", e.gastro.countdown)
    }).call(t, i(8))
  }, 600: function (e, t, i) {
    (function (e) {
      "use strict";
      e.widget("gastro.counter", {
        options: {startAt: 0, easing: "swing", duration: 2e3}, _create: function () {
          return this.startAt = this.element.data("start") || this.options.startAt, this._animate()
        }, _animate: function () {
          var e, t, i, n, s, o, r, a, l, c;
          if (a = this, i = this.element, n = i.text().toString(), n.indexOf(",") >= 0) {
            if (s = n.replace(/[^0-9,]/g, ""), r = parseInt(s.replace(/,/g, ""), 10), c = n.split(s), o = c[0] || "", l = c[1] || "", s.length && c.length > 1) return i.text(o + this.startAt + l), i.prop("counter", this.startAt), i.animate({counter: r}, {
              duration: this.options.duration,
              easing: this.options.easing,
              step: function () {
                return i.text(a._commaSeparateNumber(Math.round(this.counter), o, l))
              },
              complete: function () {
                return i.text(o + a._commaSeparateNumber(Math.round(r)) + l)
              }
            })
          } else if (s = n.replace(/[^0-9.]/g, ""), e = s.split(".")[1] ? s.split(".")[1] : 0, t = e ? e.toString().length : 0, r = parseFloat(s).toFixed(t), c = n.split(s), o = c[0] || "", l = c[1] || "", s.length) return i.prop("counter", this.startAt), i.animate({counter: r}, {
            duration: this.options.duration,
            easing: this.options.easing,
            step: function (e) {
              return i.text(o + parseFloat(e).toFixed(t) + l)
            },
            complete: function () {
              return i.text(o + r + l)
            }
          })
        }, _commaSeparateNumber: function (e, t, i) {
          for (var n; /(\d+)(\d{3})/.test(e.toString());) {
            if (n = e.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"), !t && !i) return n;
            if (t && i) return t + n + i;
            if (t) return t + n;
            if (i) return n + i
          }
        }
      }), e.widget.bridge("gstCounter", e.gastro.counter)
    }).call(t, i(8))
  }, 601: function (e, t, i) {
    (function (e) {
      "use strict";
      var t;
      t = i(586), e.widget("gastro.deepLink", {
        options: {target: "", targetType: "", targetIndex: 1, forceOpen: !1, duration: 800, offset: 0},
        _create: function () {
          var t, i, n, s, o, r, a, l, c, d;
          if (s = this, this.clicked = !1, this.mobileScreenWidth = GastroApp.mobileScreenWidth, this.tabletScreenWidth = GastroApp.tabletScreenWidth, this.isHorizontalScroll = GastroApp.isHorizontalScroll, this.isVerticalScroll = GastroApp.isVerticalScroll, this.isHalfPageScroll = GastroApp.isHalfPageScroll, this.isResponsive = GastroApp.isResponsive, this.isMobileOrTablet = GastroApp.isMobileOrTablet, this.options.forceOpen) "modal" === this.options.targetType ? this.initializeModal(this.element) : this.initializeDeepLink(this.element, this.options.targetType, this.options.targetIndex); else {
            if (o = this.element.attr("href"), !o) return;
            if (o.length <= 1) return;
            if ("#" === o.charAt(0)) if ("#js-close-all" === o) a = this.element.closest(".js-close-all"), this.element.on("click", function (e) {
              return e.preventDefault(), s.closeAll(a)
            }); else {
              if (n = o.match(/^#embed\((\S+)\)/)) return i = n[1], i.indexOf(".png") >= 0 || i.indexOf(".jpg") >= 0 || i.indexOf(".gif") >= 0 || i.indexOf(".tif") >= 0 || i.indexOf(".svg") >= 0 ? void this.imageModal(i) : void this.embedModal(i);
              d = "", l = this.options.targetIndex, r = o.slice(1).split("-"), c = r.length, c > 1 ? (d = r[0], c > 2 && ("tab" === d || "accordion" === d || "entries" === d || "slider" === d) ? (l = r[c - 1], r.pop(), a = e("#" + r.join("-"))) : a = e(o)) : a = e(o), a.length && ("modal" === d ? this.element.on("click", function (e) {
                return e.preventDefault(), s.initializeModal(a)
              }) : (t = this.element.closest("nav"), this.element.on("click", function (e) {
                if (e.preventDefault(), s.initializeDeepLink(a, d, l), t.length) return t.trigger("closeCollapsedMenu.gst")
              }), this.anchorLink(a)))
            }
          }
        },
        initializeModal: function (e) {
          return e.trigger("modalOpen.gst")
        },
        initializeDeepLink: function (e, t, i) {
          return this.scrolling || this.scrollTo(e, this.options.duration), "interactive" === t ? e.toggleClass("interactive-active") : "tab" === t ? e.trigger("tabOpen.gst", i) : "accordion" === t ? e.trigger("accordionOpen.gst", i) : "entries" === t ? e.trigger("filterClicked.gst", i) : "slider" === t ? e.slick("slickGoTo", i - 1) : void 0
        },
        scrollTo: function (t, i) {
          var n, s, o, r, a, l, c, d, u, h, p, f, m, g, v, b;
          if (g = this, this.scrolling = !0, setTimeout(function () {
            return g.scrolling = !1
          }, i), b = e(window).width(), this.isMobileOrTablet || !this.isHorizontalScroll && !this.isVerticalScroll || this.isResponsive && !(this.isResponsive && b > this.tabletScreenWidth)) {
            if (this.isMobileOrTablet || !this.isHalfPageScroll || this.isResponsive && !(this.isResponsive && b > this.tabletScreenWidth)) return i = i ? i : this.options.duration, h = GastroApp.mainNavbar, p = GastroApp.mainNavbarMobile, m = this.getScrollOffset(b), t.velocity("scroll", {
              duration: i,
              easing: "easeOut",
              offset: -m + 1
            }), setTimeout(function () {
              if (h.data("autohide") && (h.css("top", ""), h.css("transform", "")), p.data("autohide")) return p.css("top", ""), p.css("transform", "")
            }, i);
            if (c = e(".gst-main-wrapper").find(".gst-row").first(), f = c.children(), 2 !== f.length) return;
            if (a = f.first(), d = f.last(), v = d.find(".gst-box.slick-slide").length, o = t.hasClass("gst-box") && t.hasClass("slick-slide") ? t : t.closest(".gst-box.slick-slide"), s = o.closest("div[class^=gst-col-]").prevAll().length, n = o.prevAll().length, !o.hasClass("slick-active")) return 0 === s ? (l = n, u = v - n - 1) : (l = v - n - 1, u = n), setTimeout(function () {
              return a.slick("slickGoTo", l), d.slick("slickGoTo", u)
            }, 200)
          } else if (r = t.hasClass("gst-section") && t.hasClass("slick-slide") ? t : t.closest(".gst-section.slick-slide"), !r.hasClass("slick-active")) return setTimeout(function () {
            return e(".gst-main-wrapper").slick("slickGoTo", r.data("index"))
          }, 200)
        },
        anchorLink: function (i) {
          var n, s, o, r, a, l, c, d;
          if (this.menu = this.element.closest(".gst-menu"), this.menu.length) return c = this, s = !!this.menu.closest(".gst-navbar--mobile").length, d = e(window).width(), this.isMobileOrTablet || s || !(this.isHorizontalScroll || this.isVerticalScroll || this.isHalfPageScroll) || this.isResponsive && !(this.isResponsive && d > this.tabletScreenWidth) ? (a = this.getScrollOffset(d), l = new t.Scene({
            triggerElement: i[0],
            triggerHook: "onLeave",
            duration: i.outerHeight(),
            offset: -a
          }), l.setClassToggle(this.element.parent()[0], "current-menu-item").addTo(GastroApp.smController), e(window).on("resize", function (e) {
            return clearTimeout(c.resizeTimer), c.resizeTimer = setTimeout(function () {
              return c.updateScrollScene(i, l)
            }, 500)
          })) : (n = this.isHalfPageScroll ? i.closest(".gst-box.slick-slide") : i.closest(".gst-section.slick-slide"), o = this.element.parent(), r = o.parents(".menu-item"), n.hasClass("slick-active") && (o.addClass("current-menu-item"), r.length > 0 && r.addClass("current-menu-parent")), e(window).on("slidePageChanged.gst", function (e, t) {
            var i, n, s, a;
            if (s = t.nextSlide.attr("id"), s && (o.removeClass("current-menu-item"), r.length > 0 && r.removeClass("current-menu-parent"), a = c.menu.find("a[href='#" + s + "']"), a.length > 0 && (i = a.parent(), i.addClass("current-menu-item"), n = i.parents(".menu-item"), n.length > 0))) return n.addClass("current-menu-parent")
          }))
        },
        updateScrollScene: function (t, i) {
          var n, s;
          return n = t.outerHeight(), i.duration(n), s = this.getScrollOffset(e(window).width()), i.offset(-s)
        },
        getScrollOffset: function (e) {
          var t, i, n;
          return t = GastroApp.mainNavbar, i = GastroApp.mainNavbarMobile, n = 0, e > this.mobileScreenWidth && (n += GastroApp.frameWidth), e > this.tabletScreenWidth && t.data("fixed") ? n += "default" !== t.data("transition") && t.data("height_fixed") ? t.data("height_fixed") : t.attr("data-stacked_menu_height") ? t.data("stacked_menu_height") : t.outerHeight() : e <= this.tabletScreenWidth && i.data("fixed") && (n += i.outerHeight()), n
        },
        closeAll: function (t) {
          return t.fadeOut(function () {
            return e(this).remove()
          })
        },
        embedModal: function (e) {
          return this.element.gstPhotoSwipe({type: "iframe", target: e})
        },
        imageModal: function (e) {
          return this.element.gstPhotoSwipe({type: "image", target: e})
        }
      }), e.widget.bridge("gstDeepLink", e.gastro.deepLink)
    }).call(t, i(8))
  }, 602: function (e, t, i) {
    (function (e) {
      "use strict";
      var t;
      t = i(586), e.widget("gastro.dynamicMenuColor", {
        options: {mobile: !1, isSidenav: !1, refPosition: "left"}, _create: function () {
          var i, n, s, o, r, a, l, c, d, u, h, p, f;
          return o = this.element, l = this.options.isSidenav, a = this.options.mobile, s = GastroApp.defaultScheme, n = GastroApp.smController, r = GastroApp.frameWidth, i = [], c = "navbar-", !GastroApp.isHorizontalScroll && !GastroApp.isVerticalScroll || a ? GastroApp.isHalfPageScroll && !a ? (h = this.options.refPosition, e(window).on("doneSetHalfSlide.gst", function (t, n) {
            return "right" === h ? (p = n.rightBoxes, p.each(function (t, n) {
              var o;
              return o = e(n).data("scheme"), o ? i.push(o) : i.push(s)
            }), o.addClass("gst-" + c + "-" + i[i.length - 1])) : (p = n.leftBoxes, p.each(function (t, n) {
              var o;
              return o = e(n).data("scheme"), o ? i.push(o) : i.push(s)
            }), o.addClass("gst-" + c + "-" + i[0])), e(window).off("doneSetHalfSlide.gst")
          }), e(window).on("slidePageChanged.gst", function (e, t) {
            if (t.position === h) return o.removeClass("gst-" + c + "-dark gst-" + c + "-light").addClass("gst-" + c + "-" + i[t.nextIndex])
          })) : (p = e(".js-dynamic-navbar").filter(":visible"), a ? u = -30 : l ? u = -r - 40 : this.element.attr("data-fixed") ? (f = this.element.data("transition"), d = "default" === f ? this.element.outerHeight() : this.element.data("height_fixed"), u = -d / 2 - r) : u = -this.element.outerHeight() / 2 - r, p.each(function (r, a) {
            var l, d, h;
            return d = e(a), l = d.data("scheme"), l ? i.push(l) : i.push(s), h = new t.Scene({
              triggerElement: d[0],
              triggerHook: "onLeave",
              offset: u
            }), h.addTo(n), h.on("enter", function () {
              return o.removeClass("gst-" + c + "-dark gst-" + c + "-light").addClass("gst-" + c + "-" + i[r])
            }), h.on("leave", function () {
              return 0 !== r ? o.removeClass("gst-" + c + "-dark gst-" + c + "-light").addClass("gst-" + c + "-" + i[r - 1]) : o.removeClass("gst-" + c + "-dark gst-" + c + "-light")
            })
          })) : (p = e(".js-dynamic-navbar").filter(":visible"), p.each(function (t, n) {
            var o;
            return o = e(n).data("scheme"), o ? i.push(o) : i.push(s)
          }), o.addClass("gst-" + c + "-" + i[0]), e(window).on("slidePageChanged.gst", function (e, t) {
            return o.removeClass("gst-" + c + "-dark gst-" + c + "-light").addClass("gst-" + c + "-" + i[t.nextIndex])
          }))
        }
      }), e.widget.bridge("gstDynamicMenuColor", e.gastro.dynamicMenuColor)
    }).call(t, i(8))
  }, 603: function (e, t, i) {
    (function (e) {
      "use strict";
      e.widget("gastro.entries", {
        options: {
          filter: null,
          entryClass: ".gst-entry",
          entryInnerClass: ".gst-entry-inner",
          isotopeOptions: {
            itemSelector: ".gst-entry",
            hiddenStyle: {opacity: 0, transform: "scale(0.1)"},
            visibleStyle: {opacity: 1, transform: "scale(1)"}
          }
        }, _create: function () {
          var t, i, n;
          return n = this, this.style = this.element.data("layout") ? this.element.data("layout") : "grid", this.filterBar = this.element.find(".gst-filter-bar"), this.hasFilter = !!this.filterBar.length, this.initial_entry = this.element.find(this.options.entryClass), this.isAnimatedItem = this.element.find(this.options.entryInnerClass).hasClass("anmt-item"), this.content = this.element.find(".gst-entries-content"), t = this.content.data("filter_sorting"), this.filterSorting = t ? t : "default", this.currentFilter = "all", "carousel" === this.style ? this.content.gstCarousel() : (this.isotopeOptions = this.options.isotopeOptions, this.pagination = this.element.find(".js-load-more"), this.paginationInput = this.pagination.find("input[type=hidden]"), this.hasFilter && (i = this.element.find(".js-filter-list.active"), "all" !== i.data("filter") && (this.filter = i.data("filter"))), this._runIsotope(), e(window).on("resize", function () {
            return "masonry" === n.style ? n._masonryIsotopeUpdate() : n.content.isotope()
          }), this.pagination.length ? (this.pagination.gstPaginate({action: "gastro_entries"}), this.hasFilter && (this.currentCat = [], this.filterBar.find(".js-filter-list").each(function (t, i) {
            return n.currentCat.push(e(this).data("filter"))
          })), this.initial_entry.addClass("loaded"), this.pagination.on("load.gstpagination", e.proxy(this._paginationLoaded, this))) : void 0)
        }, _paginationLoaded: function (t, i) {
          var n, s, o, r, a, l, c;
          return i.result ? (c = this, o = e(i.result.content), n = [], a = [], s = [], o.each(function (t, i) {
            if (1 === i.nodeType && (n.push(i), c.hasFilter)) return a.push(e(this).data("filter"))
          }), this.hasFilter && e.each(a, function (e, t) {
            var i;
            if (t) return i = t.indexOf(",") > -1 ? t.split(", ") : [t], s = s.concat(i)
          }), this.content.isotope("insert", n), this.content.isotope("layout"), setTimeout(function () {
            return c._animateItems()
          }, 200), this.hasFilter && this._addMoreFilters(e.unique(s)), l = this.element.find(".gst-entry:not(.loaded)"), l.addClass("loaded"), r = l.find(".image-lazy-load"), r.length > 0 && r.each(function (t, i) {
            return e(i).gstImage()
          }), e(window).resize()) : (this.pagination.find(".btnx-text").text("error"), this.pagination.addClass("error"))
        }, _animateItems: function () {
          if (this.isAnimatedItem) return this.element.hasClass("container-animated") ? this.element.gstAnimated("initializeAnimation", this.element) : this.element.gstAnimated({offset: .9})
        }, _addMoreFilters: function (t) {
          var i, n;
          if (n = this, i = e(t).not(this.currentCat).get(), i.length) return "default" === this.filterSorting ? (e.each(i, function (e, t) {
            var i;
            if ("" !== t) return i = "string" == typeof t ? t.toLowerCase() : t, n.filterBar.append('<li class="gst-filter-list">\n   <a href="#" class="js-filter-list gst-p-text-color" data-filter="' + i + '">' + t + "</a>\n</li>")
          }), this.currentCat = this.currentCat.concat(i)) : (this.currentCat = this.currentCat.concat(i).sort(), "char_desc" === this.filterSorting && (this.currentCat = this.currentCat.reverse()), this.filterBar.find(".gst-filter-list:not(.gst-filter-list--all)").remove(), e.each(this.currentCat, function (e, t) {
            var i;
            if ("" !== t && "all" !== t) return i = "string" == typeof t ? t.toLowerCase() : t, n.filterBar.append('<li class="gst-filter-list">\n   <a href="#" class="js-filter-list gst-p-text-color" data-filter="' + i + '">' + t + "</a>\n</li>")
          }), this.filterBar.find(".js-filter-list").removeClass("active").filter('[data-filter="' + this.currentFilter + '"]').addClass("active"))
        }, _runIsotope: function () {
          var t;
          return t = this, this.isotopeOptions.filter = e.proxy(this._isotopeFilter, this), "masonry" === this.style ? (this.isotopeOptions.layoutMode = "masonry", this.isotopeOptions.masonry = {columnWidth: this.content.width() / 60}, this._setSize()) : "grid" === this.style && (this.isotopeOptions.layoutMode = "fitRows"), this.content.isotope(t.isotopeOptions), this._on(this.element, {"click .js-filter-list": "_filterClicked"}), this.element.on("filterClicked.gst", function (e, i) {
            return t._filterClicked(e, i)
          })
        }, _masonryIsotopeUpdate: function () {
          var e;
          return e = this, this._clearSize(), clearTimeout(this.resizeTimer), this.resizeTimer = setTimeout(function () {
            return e._setSize(), e.content.isotope({masonry: {columnWidth: e.content.width() / 60}})
          }, 100)
        }, _setSize: function () {
          var t;
          return t = this.element.find(this.options.isotopeOptions.itemSelector), t.each(function (t, i) {
            return e(this).css("width", e(this).outerWidth() + "px"), e(this).css("height", e(this).outerHeight() + "px")
          })
        }, _clearSize: function () {
          return this.element.find(this.options.isotopeOptions.itemSelector).css({width: "", height: ""})
        }, _filterClicked: function (t, i) {
          var n;
          return t.preventDefault(), n = e(t.currentTarget), i = i ? i : n.data("filter"), this.filter = "all" !== i && i, this.filterBar.find(".js-filter-list").removeClass("active"), this.currentFilter = i, n.addClass("active"), "masonry" === this.style ? this._masonryIsotopeUpdate() : this.content.isotope()
        }, _isotopeFilter: function (t, i) {
          var n;
          return !this.filter || (n = e(i).attr("data-filter") ? e(i).data("filter").toString().split(", ") : "", e.inArray(this.filter, n) !== -1)
        }
      }), e.widget.bridge("gstEntries", e.gastro.entries)
    }).call(t, i(8))
  }, 604: function (e, t, i) {
    (function (e) {
      "use strict";
      e.widget("gastro.featuredPost", {
        options: {
          scrollbarOptions: {
            scrollInertia: 2e3,
            axis: "x",
            setHeight: !1,
            mouseWheel: {axis: "x", preventDefault: !1, invert: !0},
            advanced: {updateOnImageLoad: !0},
            scrollbarPosition: "outside",
            autoHideScrollbar: !0
          }
        }, _create: function () {
          var t, i, n;
          if (i = this.element.attr("class").match(/gst-featuredpost--(\S+)/), n = i ? i[1] : "default", "scroll" === n ? this._initializeScrollStyle() : "carousel" === n && this.element.find(".gst-featuredpost-content").gstCarousel({
            speed: 800,
            cssEase: "ease-in"
          }), this.element.hasClass("gst-featuredpost--fit-height")) return t = {itemWrapper: ".gst-entry-body"}, this.element.data("screen_percent") && (t.screenPercent = this.element.data("screen_percent")), this.element.data("screen_offset") && (t.screenOffset = this.element.data("screen_offset")), this.element.find(".gst-entry-inner").each(function (i, n) {
            return e(n).gstSetSize(t)
          })
        }, _initializeScrollStyle: function () {
          var t, i, n, s;
          return s = 0, i = this.element.data("height") || 500, n = this.options.scrollbarOptions, e.isNumeric(i) === !0 ? n.setHeight = i : n.setHeight = !1, t = this.element.find(".gst-entry-media"), t.each(function (t, n) {
            return s += parseInt(e(n).width() / e(n).height() * i)
          }), this.element.find(".gst-featuredpost-content").width(s), this.element.mCustomScrollbar(n)
        }
      }), e.widget.bridge("gstFeaturedPost", e.gastro.featuredPost);
    }).call(t, i(8))
  }, 605: function (e, t, i) {
    (function (e) {
      "use strict";
      e.widget("gastro.featuredMenu", {
        options: {speed: 6e3}, _create: function () {
          var t, i, n, s;
          if (s = this, t = 1, i = this.element.data("autoplay"), n = this.element.data("speed") ? this.element.data("speed") : this.options.speed, this.noOfSlides = this.element.find(".gst-featuredmenu-entry").length, this.standardList = this.element.find(".js-featuredmenu-list"), this.navigation = this.element.find(".js-featuredmenu-navigation"), this.element.find(".gst-featuredmenu-inner").each(function (t, i) {
            return e(i).gstSetSize()
          }), this.standardList.length && this.standardList.on("click", function (t) {
            var i;
            return t.preventDefault(), i = e(t.currentTarget).data("target"), s._changeBackground(i)
          }), this.navigation && this.navigation.on("click", function (t) {
            var i, n;
            return t.preventDefault(), i = e(t.currentTarget).data("target"), n = i > s.noOfSlides ? 1 : i, s._changeBackground(n)
          }), i) return setInterval(function () {
            return t !== s.noOfSlides ? (s._changeBackground(t + 1), t++) : (s._changeBackground(1), t = 1)
          }, n)
        }, _changeBackground: function (e) {
          return this.element.find(".gst-featuredmenu-entry[data-index='" + e + "']").addClass("active").siblings().removeClass("active"), this.element.find(".js-featuredmenu-image[data-index='" + e + "']").addClass("active").siblings().removeClass("active"), this.navigation.data("target", e + 1)
        }
      }), e.widget.bridge("gstFeaturedMenu", e.gastro.featuredMenu)
    }).call(t, i(8))
  }, 606: function (e, t, i) {
    (function (e) {
      "use strict";
      e.widget("gastro.footerParallax", {
        _create: function () {
          var t;
          return t = this, this.wrapper = this.element, this.footer = this.element.find(".gst-footer"), t._setFooterHeight(), this._on(e(window), {resize: e.proxy(this._setFooterHeight)})
        }, _setFooterHeight: function () {
          var t;
          return t = this, setTimeout(function () {
            return e(window).width() > GastroApp.mobileScreenWidth ? t.wrapper.css("padding-bottom", t.footer.outerHeight() + "px") : t.wrapper.css("padding-bottom", "")
          }, 100)
        }
      }), e.widget.bridge("gstFooterParallax", e.gastro.footerParallax)
    }).call(t, i(8))
  }, 607: function (e, t, i) {
    (function (e) {
      "use strict";
      e.widget("gastro.gallery", {
        options: {
          mediaClass: ".gst-gallery-media",
          isotopeOptions: {
            itemSelector: ".gst-gallery-item",
            hiddenStyle: {opacity: 0, transform: "scale(0.1)"},
            visibleStyle: {opacity: 1, transform: "scale(1)"}
          },
          scrollbarOptions: {
            scrollInertia: 2e3,
            axis: "x",
            setHeight: !1,
            mouseWheel: {axis: "x", preventDefault: !1, invert: !0},
            advanced: {updateOnImageLoad: !0},
            scrollbarPosition: "outside",
            autoHideScrollbar: !0
          }
        }, _create: function () {
          var t, i;
          if (i = this, t = this.element.attr("class").match(/gst-gallery--(\S+)/), this.style = t ? t[1] : "grid", this.popup = !!this.element.data("popup"), this.content = this.element.find(".gst-gallery-content"), this.isAnimatedItem = this.element.find(".gst-gallery-body").hasClass("anmt-item"), "scroll" === this.style ? this._initializeScrollStyle() : "carousel" === this.style ? this._initializeCarouselStyle() : (this.isotopeOptions = this.options.isotopeOptions, this._runIsotope(), e(window).on("resize", function () {
            return "masonry" === i.style ? i._masonryIsotopeUpdate() : i.content.isotope()
          }), this.pagination = this.element.find(".js-load-more"), this.paginationInput = this.pagination.find("input[type=hidden]"), this.pagination.length && (this.pagination.gstPaginate({action: "gastro_gallery_entries"}), this.pagination.on("load.gstpagination", e.proxy(this._paginationLoaded, this)))), this.popup) return this._createPopup()
        }, _createPopup: function () {
          return this.element.gstPhotoSwipe({gallery: !0, gallerySelector: this.options.mediaClass})
        }, _runIsotope: function () {
          var e;
          return e = this, "masonry" === this.style ? (this.isotopeOptions.layoutMode = "masonry", this.isotopeOptions.masonry = {columnWidth: this.content.width() / 60}, this._setSize()) : "grid" === this.style && (this.isotopeOptions.layoutMode = "fitRows"), this.content.isotope(e.isotopeOptions)
        }, _setSize: function () {
          var t;
          return t = this.element.find(this.options.isotopeOptions.itemSelector), t.each(function (t, i) {
            return e(this).css("width", e(this).outerWidth() + "px"), e(this).css("height", e(this).outerHeight() + "px")
          })
        }, _clearSize: function () {
          return this.element.find(this.options.isotopeOptions.itemSelector).css({width: "", height: ""})
        }, _masonryIsotopeUpdate: function () {
          var e;
          return e = this, this._clearSize(), clearTimeout(this.resizeTimer), this.resizeTimer = setTimeout(function () {
            return e._setSize(), e.content.isotope({masonry: {columnWidth: e.content.width() / 60}})
          }, 100)
        }, _initializeScrollStyle: function () {
          var t, i, n, s;
          return s = 0, i = this.element.data("height") || 500, n = this.options.scrollbarOptions, e.isNumeric(i) === !0 ? n.setHeight = i : n.setHeight = !1, t = this.element.find(this.options.mediaClass), t.find("img").each(function (t, n) {
            var o, r;
            return r = e(n).attr("width"), o = e(n).attr("height"), s += r / o * i
          }), this.element.find(".gst-gallery-content").width(s), this.element.mCustomScrollbar(n)
        }, _initializeCarouselStyle: function () {
          var e, t, i, n, s, o, r, a, l;
          return o = this.element.find(".gst-gallery-thumbnail"), i = Date.now().toString(), t = "js-gallery-carousel-" + i.substr(i.length - 3), this.element.addClass(t), o.length ? (n = o.attr("class").match(/gst-gallery-thumbnail--(\S+)/), r = n ? n[1] : "bottom", l = this.element.find(".gst-gallery-item").length, "bottom" !== r && (a = !0), this.content.gstCarousel({
            fade: !0,
            asNavFor: "." + t + " .gst-gallery-thumbnail"
          }), s = o.data("thumbnail"), e = !(s >= l), o.gstCarousel({
            slidesToShow: s,
            vertical: a,
            asNavFor: "." + t + " .gst-gallery-content",
            focusOnSelect: !0,
            centerMode: e,
            centerPadding: 0,
            arrows: !1
          }), s >= l ? this.content.on("beforeChange", function (e, t, i, n) {
            return o.find(".gst-gallery-thumbnail-item").removeClass("slick-current").eq(n).addClass("slick-current")
          }) : void 0) : this.element.find(".gst-gallery-content").gstCarousel()
        }, _paginationLoaded: function (t, i) {
          var n, s, o;
          return i.result ? (o = this, s = e(i.result.content), n = [], s.each(function (t, i) {
            var s;
            if (1 === i.nodeType && (n.push(i), o.popup)) return s = e(i).find(o.options.mediaClass), o.element.gstPhotoSwipe("pushPopupItem", s)
          }), this.content.isotope("insert", n), this.content.isotope("layout"), setTimeout(function () {
            return o._animateItems()
          }, 200), e(window).resize()) : (this.pagination.find(".btnx-text").text("error"), this.pagination.addClass("error"))
        }, _animateItems: function () {
          if (this.isAnimatedItem) return this.element.hasClass("container-animated") ? this.element.gstAnimated("initializeAnimation", this.element) : this.element.gstAnimated({offset: .9})
        }
      }), e.widget.bridge("gstGallery", e.gastro.gallery)
    }).call(t, i(8))
  }, 608: function (e, t, i) {
    (function (e) {
      "use strict";
      e.widget("gastro.image", {
        options: {offset: .8}, _create: function () {
          var t;
          if (t = this, this.loaded = !1, (GastroApp.isHorizontalScroll || GastroApp.isVerticalScroll || GastroApp.isHalfPageScroll) && GastroApp.isResponsive && e(window).width() > GastroApp.tabletScreenWidth) {
            if (!(this.element.closest(".slick-active").length > 0)) return e(window).on("slidePageChanged.gst", function (e, i) {
              i.nextSlide.has(t.element).length > 0 && t.addSource()
            });
            this.addSource()
          } else {
            if (!(this.element.is(":visible") && e(window).scrollTop() + e(window).height() * this.options.offset > this.element.offset().top)) return e(window).on("scroll", function () {
              !t.loaded && e(window).scrollTop() + e(window).height() * t.options.offset > t.element.offset().top && t.addSource()
            }), e(window).on("resize", function () {
              !t.loaded && e(window).scrollTop() + e(window).height() * t.options.offset > t.element.offset().top && (clearTimeout(t.resizeTimer), t.resizeTimer = setTimeout(function () {
                return t.addSource()
              }, 300))
            });
            this.addSource()
          }
        }, addSource: function () {
          var e, t, i, n, s, o;
          if (this.element.is(":visible")) return t = this, e = this.element, o = this.element.closest(".gst-media-wrapper"), this.loaded = !0, i = this.element.data("sizes"), n = this.element.data("src"), s = this.element.data("srcset"), this.element.imagesLoaded(function (t) {
            return function () {
              return i && (e.removeAttr("data-sizes"), e.attr("sizes", i)), s && (e.removeAttr("data-srcset"), e.attr("srcset", s)), n && (e.removeAttr("data-src"), e.attr("src", n)), o.addClass("loaded")
            }
          }(this))
        }
      }), e.widget.bridge("gstImage", e.gastro.image)
    }).call(t, i(8))
  }, 609: function (e, t, i) {
    (function (e) {
      "use strict";
      e.widget("gastro.menuMobile", {
        options: {submenuClass: ".sub-menu", megamenuClass: ".gst-mega-menu"}, _create: function () {
          var t, i;
          return i = this, t = this.element.find(this.options.submenuClass + ", " + this.options.megamenuClass), t.hide(), t.each(function (t, n) {
            return n = e(n), n.prev().on("click", function (t) {
              var s, o, r, a;
              if (s = e(t.currentTarget), s = s.is("a") ? s : s.find("a"), s && (o = parseInt(s.css("font-size")), a = parseInt(s.css("padding-right")), r = a > 0 ? a : o, t.offsetX > t.target.clientWidth - r - 10 || "#" === s.attr("href"))) return t.preventDefault(), i._menuClicked(s, n)
            })
          })
        }, _menuClicked: function (e, t) {
          var i;
          if (e.toggleClass("active"), t.toggleClass("toggle-active").slideToggle(300), i = t.hasClass("toggle-active") ? e.closest("li").siblings().find(".sub-menu, .gst-mega-menu") : t.find(".sub-menu, .gst-mega-menu"), i.length > 0) return this._closeChildrenMenu(i)
        }, _closeChildrenMenu: function (t) {
          return t.each(function (t, i) {
            var n, s;
            if (s = e(i), n = s.prev(), n = n.is("a") ? n : n.find("a"), n && s.hasClass("toggle-active")) return n.removeClass("active"), s.slideUp(300).removeClass("toggle-active")
          })
        }
      }), e.widget.bridge("gstMenuMobile", e.gastro.menuMobile)
    }).call(t, i(8))
  }, 610: function (e, t, i) {
    (function (e) {
      "use strict";
      var t;
      t = i(586), e.widget("gastro.milestone", {
        _create: function () {
          var t, i;
          if (i = this, t = this.element, t.attr("data-counter-animation")) return t.is(":visible") ? GastroApp.hasPageLoad ? e(window).load(function () {
            return i._animateNumber(t)
          }) : this._animateNumber(t) : t.on("hiddenOpen.gst", function () {
            return t.find(".gst-milestone-item").each(function (e, i) {
              return t.find(".gst-milestone-number").gstCounter()
            }), t.off("hiddenOpen.gst")
          })
        }, _animateNumber: function (i) {
          var n, s, o;
          return n = i.find(".gst-milestone-item"), s = i.find(".gst-milestone-number"), n.hasClass("anmt-item") ? n.each(function (t, i) {
            var n;
            return n = e(i), n.on("gst.itemAnimated", function () {
              return s.gstCounter(), n.off("gst.itemAnimated")
            })
          }) : (o = new t.Scene({
            triggerElement: i[0],
            triggerHook: "onEnter"
          }), o.addTo(GastroApp.smController), o.on("enter", function () {
            return s.gstCounter(), o.destroy()
          }))
        }
      }), e.widget.bridge("gstMilestone", e.gastro.milestone)
    }).call(t, i(8))
  }, 611: function (e, t, i) {
    (function (e) {
      "use strict";
      var t;
      t = i(587), e.widget("gastro.modal", {
        options: {visited: !1, expire: 3}, _create: function () {
          var i, n, s, o, r;
          return o = this, this.body = GastroApp.body, this.items = this.element.find(".gst-item"), this.screenContent = GastroApp.content, this.element.data("splash") && (s = this.element.attr("id"), s = s ? s : "splash-screen", t.get(s) ? r = t.get(s) : (r = !1, i = parseInt(this.element.data("delay")), n = parseInt(this.element.data("expire")) || this.options.expire, t.set(s, "viewed", {expires: n})), "viewed" !== r && e(window).load(function () {
            return setTimeout(function () {
              return o._modalOpen()
            }, i)
          })), this._on(this.element, {"click .js-close": "_modalClose"}), e(document).on("keyup", function (e) {
            if (27 === e.keyCode && o.element.hasClass("active")) return o._modalClose(e)
          }), this.element.on("modalOpen.gst", function (e) {
            return o._modalOpen()
          })
        }, _modalOpen: function () {
          var t;
          return t = this.element, this.element.insertBefore(GastroApp.pswpElement), t.show(), setTimeout(function () {
            return t.addClass("active")
          }, 300), this.body.addClass("gst-unscrollable"), this.items.trigger("hiddenOpen.gst"), e(window).resize()
        }, _modalClose: function (e) {
          var t;
          return e.preventDefault(), t = this.element, t.removeClass("active"), setTimeout(function () {
            return t.hide()
          }, 500), this.body.removeClass("gst-unscrollable"), this.items.trigger("hiddenClose.gst")
        }
      }), e.widget.bridge("gstModal", e.gastro.modal)
    }).call(t, i(8))
  }, 612: function (e, t, i) {
    (function (e) {
      "use strict";
      var t;
      t = i(586), e.widget("gastro.navbar", {
        options: {mobile: !1, autohide: !1, transition: "default", delta: 150, submenuRightSpacing: 25},
        _create: function () {
          var e, t;
          if (e = this, this.isItem = !1, this.isSafari = GastroApp.isSafari, this.autoHidePoint = 0, this.frameWidth = this.options.mobile ? 0 : GastroApp.frameWidth, this.header = this.element.parent(), this.topbar = this.element.siblings(".gst-topbar"), this.headerWidgetButton = this.element.find(".js-header-headerwidget-btn"), this.navbarStyle = this.element.data("style") ? this.element.data("style") : "standard", this.collapsedMenuStyle = !!this.element.data("collapsed_style") && this.element.data("collapsed_style"), this.options.mobile ? (this.element.gstCollapsedMenu(), this.element.find(".gst-menu").gstMenuMobile()) : ("minimal" !== this.navbarStyle && "split" !== this.navbarStyle || this.element.gstCollapsedMenu(), "full" === this.collapsedMenuStyle ? this.element.find(".gst-menu").gstMenuMobile() : "offcanvas" === this.collapsedMenuStyle ? this.element.siblings(".gst-collapsed-menu").find(".gst-menu").gstMenuMobile() : (t = this.element.find(".gst-menu").children(".menu-item").children(".sub-menu"), setTimeout(function () {
            return e.setSubmenuPosition(t)
          }, 500))), this.headerWidgetButton.length && (this.headerWidgets = this.element.find(".gst-header-widgets"), this.headerWidgetButton.on("click", function (t) {
            return t.preventDefault(), e.headerWidgets.toggleClass("active").slideToggle(500)
          })), (this.element.hasClass("transparent") || this.element.hasClass("fixed-transparent")) && this.element.gstDynamicMenuColor({mobile: e.options.mobile}), this.element.data("fixed")) return this.transitionStyle = this.element.data("transition") ? this.element.data("transition") : "default", this._initializeFixed()
        },
        setSubmenuPosition: function (t) {
          var i;
          return i = this.options.submenuRightSpacing, t.each(function (t, n) {
            var s, o;
            return s = e(this).find(".sub-menu"), s.length ? (o = s.eq(s.length - 1), e(this).css("display", "block").removeClass("sub-menu--left"), s.css("display", "block"), o.offset().left + o.width() + i > e(window).width() && e(this).addClass("sub-menu--left"), e(this).css("display", ""), s.css("display", "")) : (e(this).css("display", "block").removeClass("sub-menu--left"), e(this).offset().left + e(this).width() > e(window).width() && e(this).addClass("sub-menu--left"), e(this).css("display", ""))
          })
        },
        _initializeFixed: function () {
          var t, i, n, s, o, r, a, l, c, d;
          if (o = this, s = this.element.outerHeight(), d = !!this.element.data("transition_point") && this.element.data("transition_point"), c = this.options.mobile ? this.topbar.length && this.topbar.data("mobile") ? this.topbar.data("height") : 0 : this.topbar.length ? this.topbar.data("height") : 0, "custom-show" === this.transitionStyle ? (n = c - this.frameWidth + s, i = this.generateNavScene(n), this.navbarScroll(i, "gst-navbar--fixed gst-navbar--alternate", "gst-no-transition", "hide"), r = d && d > n ? d : n + 30, a = this.generateNavScene(r), this.navbarScroll(a, "show", !1, "show"), this.element.data("autohide") && (this.autoHidePoint = r + 300)) : "custom-change" === this.transitionStyle ? (n = c - this.frameWidth, "stacked" === this.navbarStyle && (n += this.element.find(".gst-navbar-header").outerHeight(!0)), d && d > n ? (i = this.generateNavScene(n), this.navbarScroll(i, "gst-navbar--fixed show"), t = this.generateNavScene(d), this.navbarScroll(t, "gst-navbar--alternate")) : (i = this.generateNavScene(n), this.navbarScroll(i, "gst-navbar--fixed gst-navbar--alternate show"))) : (this.autoHidePoint += s, n = c - this.frameWidth, "stacked" === this.navbarStyle && (n += this.element.find(".gst-navbar-header").outerHeight(!0)), i = this.generateNavScene(n), this.navbarScroll(i, "gst-navbar--fixed show")), this.element.data("autohide") && this._initializeAutoHide(), this.item = this.element.closest(".gst-item"), this.isItem = this.item.length, this.isItem) return this.fixedLeft = this.item.offset().left, this.fixedWidth = this.item.outerWidth(), this.item.data("stop") && (l = e(this.item.data("stop")), l.offset().top > this.element.offset().top && i.duration(l.offset().top - this.element.offset().top - s)), e(window).on("resize", function (e) {
            if (o.fixedLeft = o.item.offset().left, o.fixedWidth = o.item.outerWidth(), o.element.hasClass("gst-navbar--fixed") && o.element.css({
              left: o.fixedLeft + "px",
              width: o.fixedWidth + "px"
            }), l && l.offset().top > o.element.offset().top) return i.duration(l.offset().top - o.element.offset().top - s)
          })
        },
        _initializeAutoHide: function () {
          var t, i, n;
          return n = this, t = this.element, i = e(window).scrollTop(), e(window).on("scroll", function (s) {
            var o;
            if (o = e(window).scrollTop(), o > n.autoHidePoint) {
              if (Math.abs(i - o) < n.options.delta) return;
              o > i ? (t.removeClass("show"), n.isSafari ? t.css({transform: "translateY(-100%)"}) : t.css("top", n.frameWidth - t.outerHeight() + "px"), n.headerWidgets && n.headerWidgets.hasClass("active") && n.headerWidgets.removeClass("active").slideUp(300)) : t.hasClass("show") || (t.addClass("show"), t.css({
                top: "",
                transform: ""
              }))
            } else t.hasClass("show") || "default" !== n.transitionStyle || (t.addClass("show"), t.css({
              top: "",
              transform: ""
            }));
            return i = o
          })
        },
        generateNavScene: function (e) {
          var i;
          return i = new t.Scene({triggerElement: this.header[0], triggerHook: "onLeave", offset: e})
        },
        navbarScroll: function (e, t, i, n) {
          var s, o;
          return o = this, s = this.element, e.addTo(GastroApp.smController), e.on("enter", function () {
            if ("show" === n ? s.css({
              display: "",
              top: "",
              transform: ""
            }) : "hide" === n && (o.isSafari ? s.css({
              display: "none",
              transform: "translateY(-100%)"
            }) : s.css({display: "none", top: o.frameWidth - s.outerHeight() + "px"}), setTimeout(function () {
              return s.css("display", "")
            }, 5)), i ? s.addClass(i).addClass(t).removeClass(i) : s.addClass(t), o.isItem) return s.css({
              left: o.fixedLeft + "px",
              right: "auto",
              width: o.fixedWidth + "px"
            })
          }), e.on("leave", function () {
            return s.removeClass(t), o.isItem && s.css({
              left: "",
              right: "",
              width: ""
            }), "show" === n ? o.isSafari ? s.css({transform: "translateY(-100%)"}) : s.css("top", o.frameWidth - s.outerHeight() + "px") : "hide" === n ? s.css({
              top: "",
              transform: ""
            }) : void 0
          })
        }
      }), e.widget.bridge("gstNavbar", e.gastro.navbar)
    }).call(t, i(8))
  }, 613: function (e, t, i) {
    (function (e) {
      "use strict";
      e.widget("gastro.onePageScroll", {
        options: {
          slickOptions: {
            slidesToScroll: 1,
            slidesToShow: 1,
            vertical: !0,
            dots: !0,
            infinite: !1,
            arrows: !1,
            swipe: !1
          }
        }, _create: function () {
          var t, i, n, s;
          if (n = this, this.body = GastroApp.body, this.isResponsive = GastroApp.isResponsive, this.isMobileOrTablet = GastroApp.isMobileOrTablet, this.tabletScreenWidth = GastroApp.tabletScreenWidth, this.isHorizontalScroll = GastroApp.isHorizontalScroll, this.isVerticalScroll = GastroApp.isVerticalScroll, this.isHalfPageScroll = GastroApp.isHalfPageScroll, this.isMobileOrTablet && this.isResponsive) return this._initializeMobileDevice();
          if (this.lastAnimation = 0, s = e(window).height(), this.windowWidth = e(window).width(), this.slickOptions = this.options.slickOptions, this.isHorizontalScroll || this.isVerticalScroll) this.slickOptions.vertical = !!this.isVerticalScroll, this.element.find(".gst-section").each(function (t, i) {
            return e(i).gstSetSize({type: "header", fluid: !1})
          }); else if (this.isHalfPageScroll) {
            if (t = this.element.find(".gst-row").first(), i = t.children(), 2 !== i.length) return;
            if (this.firstContainer = i.first(), this.lastContainer = i.last(), this.firstContainerBoxes = this.firstContainer.children(".gst-box"), this.lastContainerBoxes = this.lastContainer.children(".gst-box"), this.firstContainerSlides = this.firstContainerBoxes.length, this.lastContainerSlides = this.lastContainerBoxes.length, this.firstContainerSlides !== this.lastContainerSlides) return;
            this.firstContainerBoxes.children(".gst-box-inner").each(function (t, i) {
              var s, o;
              return s = e(n.lastContainerBoxes.get(t)), o = 0 === t ? "header" : "full", e(i).gstSetSize({
                type: o,
                pair: s.children(".gst-box-inner"),
                fluid: !1
              })
            })
          }
          return this.isResponsive ? (this.windowWidth > this.tabletScreenWidth ? this._setSlide(!0) : this.init = !0, this._on(e(window), {resize: "_windowResize"})) : this._setSlide(!0)
        }, _windowResize: function () {
          var t;
          return t = e(window).width(), t > this.tabletScreenWidth && this.windowWidth <= this.tabletScreenWidth ? (this._setSlide(this.init), this.init = !1) : t <= this.tabletScreenWidth && this.windowWidth > this.tabletScreenWidth ? this._unsetSlide() : t > this.tabletScreenWidth && this._setSlide("resize"), this.windowWidth = t
        }, _initializeMobileDevice: function () {
          var t, i, n, s, o, r, a, l, c, d, u, h, p;
          if (u = this, this.isHorizontalScroll || this.isVerticalScroll) return this.element.find(".gst-section").each(function (t, i) {
            var n;
            return n = 0 === t ? "header" : "full", e(i).gstSetSize({type: n, fluid: !0})
          });
          if (this.isHalfPageScroll) {
            if (d = this.element.find(".gst-section").first().find(".gst-row--main").first(), 1 !== d.length) return !1;
            if (n = d.children(), 2 !== n.length) return !1;
            if (t = n.children(".gst-box"), i = t.length, !i || i % 2 !== 0) return !1;
            if (e(window).width() < GastroApp.mobileScreenWidth) return this._rearrangeSection(n, t), t.children(".gst-box-inner").each(function (t, i) {
              var n;
              return n = 0 === t ? "header" : "full", e(i).gstSetSize({type: n})
            });
            for (r = i / 2, c = [], s = o = 0, l = r; 0 <= l ? o < l : o > l; s = 0 <= l ? ++o : --o) h = e(t.get(s)), a = e(t.get(s + r)), p = 0 === s ? "header" : "full", c.push(h.children(".gst-box-inner").gstSetSize({
              type: p,
              pair: a.children(".gst-box-inner")
            }));
            return c
          }
        }, _rearrangeSection: function (t, i) {
          var n, s, o, r, a, l, c, d, u, h;
          for (h = e(t.get(0)), l = e(t.get(1)), s = 0, r = i.length / 2, i.detach(), d = [], n = o = 0, c = r; 0 <= c ? o < c : o > c; n = 0 <= c ? ++o : --o) u = e(i.get(n)), a = e(i.get(n + r)), u.data("halfcol", s++), a.data("halfcol", s++), h.length < r ? (h.append(u), d.push(h.append(a))) : (l.append(u), d.push(l.append(a)));
          return d
        }, _setSlide: function (t) {
          var i, n, s, o, r;
          return o = this, r = this.slickOptions, r.isFullSlide = !0, this.body.hasClass("pc-device-slide") || this.body.addClass("pc-device-slide"), this.isHorizontalScroll || this.isVerticalScroll ? t === !0 ? this.element.gstCarousel(r) : "resize" === t ? this.element.gstCarousel("reposition") : this.element.gstCarousel("initializeCarousel", r) : this.isHalfPageScroll && (this._sortElements(this.lastContainer), r.accessibility = !1, i = r, i.isHalfSlide = !0, i.halfSlidePosition = "left", n = {
            accessibility: !1,
            initialSlide: this.lastContainerSlides - 1,
            slidesToScroll: 1,
            slidesToShow: 1,
            vertical: !0,
            dots: !1,
            infinite: !1,
            arrows: !1,
            swipe: !1,
            isHalfSlide: !0,
            halfSlidePosition: "right"
          }, t === !0 ? (s = this.lastContainer.children(".gst-box"), this.firstContainer.gstCarousel(i), this.lastContainer.gstCarousel(n), e(window).trigger("doneSetHalfSlide.gst", {
            leftBoxes: this.firstContainerBoxes,
            rightBoxes: s
          })) : "resize" === t ? (this.firstContainer.gstCarousel("reposition"), this.lastContainer.gstCarousel("reposition")) : (this.firstContainer.gstCarousel("initializeCarousel", i), this.lastContainer.gstCarousel("initializeCarousel", n)), this.firstContainer.children(".slick-dots").find("li").click(function () {
            return o.lastContainer.slick("slickGoTo", o.lastContainerSlides - e(this).index() - 1)
          })), e(document).mousewheel(function (e) {
            return o._scroll(e)
          }), this._on(e(document), {keydown: "_keyboardPressed"})
        }, _unsetSlide: function () {
          return this.body.removeClass("pc-device-slide"), this.isHorizontalScroll || this.isVerticalScroll ? this.element.slick("unslick") : this.isHalfPageScroll && (this.firstContainer.slick("unslick"), this.lastContainer.slick("unslick"), this._sortElements(this.lastContainer)), e(document).off("mousewheel"), e(document).off("keydown"), this.element.find(".slick-slider").trigger("resetScrollPage.gst")
        }, _sortElements: function (e) {
          return e.children().each(function (t, i) {
            return e.prepend(i)
          })
        }, _scroll: function (t) {
          var i, n;
          if (e(t.target).closest(".js-item-modal").length < 1) {
            if (t.preventDefault(), i = this.isHorizontalScroll ? 0 === t.deltaX ? t.deltaY : -t.deltaX : t.deltaY, n = (new Date).getTime(), n - this.lastAnimation < 1500) return;
            return i < 0 ? this._moveDown() : i > 0 && this._moveUp(), this.lastAnimation = n
          }
        }, _keyboardPressed: function (t) {
          var i, n, s, o;
          switch (i = e(t.target), o = i.prop("tagName").toLowerCase(), this.isHorizontalScroll ? (s = 37, n = 39) : (s = 38, n = 40), t.which) {
            case s:
              if ("input" !== o && "textarea" !== o) return this._moveUp();
              break;
            case n:
              if ("input" !== o && "textarea" !== o) return this._moveDown();
              break;
            case 32:
              if ("input" !== o && "textarea" !== o) return this._moveDown();
              break;
            case 33:
              if ("input" !== o && "textarea" !== o) return this._moveUp();
              break;
            case 34:
              if ("input" !== o && "textarea" !== o) return this._moveDown()
          }
        }, _moveUp: function () {
          return this.isHorizontalScroll || this.isVerticalScroll ? this.element.slick("slickPrev") : this.isHalfPageScroll ? (this.firstContainer.slick("slickPrev"), this.lastContainer.slick("slickNext")) : void 0
        }, _moveDown: function () {
          return this.isHorizontalScroll || this.isVerticalScroll ? this.element.slick("slickNext") : this.isHalfPageScroll ? (this.firstContainer.slick("slickNext"), this.lastContainer.slick("slickPrev")) : void 0
        }
      }), e.widget.bridge("gstOnePageScroll", e.gastro.onePageScroll)
    }).call(t, i(8))
  }, 614: function (e, t, i) {
    (function (e) {
      "use strict";
      var t;
      t = i(586), e.widget("gastro.paginate", {
        options: {style: "click", action: "gastro_entries"}, _create: function () {
          var i, n;
          return i = this.element.attr("class").match(/gst-pagination--(\S+)/), this.style = i ? i[1] : "click", this.buttonText = this.element.find(".btnx-text"), this.loadMoreMessage = this.buttonText.data("label") ? this.buttonText.data("label") : "Load More", this.loadingMessage = this.buttonText.data("loading_label") ? this.buttonText.data("loading_label") : "Loading", this.optionInput = this.element.find("input[type=hidden]"), this.allPosts = this.optionInput.data("posts"), this.index = 1, this.paginateOptions = JSON.parse(this.optionInput.val()), this.postToFind = this.paginateOptions.query_args.posts_per_page || 10, this.windowLoaded = !1, this.scrollReached = !1, n = this, "click" === this.style ? n._on(n.element, {"click a": "_buttonClicked"}) : "scroll" === this.style && (this.scene = new t.Scene({
            triggerElement: this.element[0],
            triggerHook: "onEnter"
          }), this.scene.addTo(GastroApp.smController), this.scene.on("enter", function (e) {
            return n._scrollReached()
          })), e(window).load(function () {
            return n._windowLoaded()
          })
        }, _buttonClicked: function (e) {
          if (e.preventDefault(), this.windowLoaded) return this._loadMore()
        }, _scrollReached: function () {
          var e;
          return e = this, this.windowLoaded ? this._loadMore() : this.element.on("windowLoaded.gst", function () {
            return e._loadMore()
          })
        }, _windowLoaded: function () {
          return this.windowLoaded = !0, this.element.trigger("windowLoaded.gst")
        }, _loadMore: function () {
          var t, i, n, s, o, r;
          return o = this, s = this.scene, r = this.style, n = this.element, t = this.buttonText, this.element.off("windowLoaded.gst"), n.toggleClass("loading"), t.text(this.loadingMessage), i = e.extend({}, {
            action: this.options.action,
            pagination_index: this.index
          }, this.paginateOptions), this.index++, e.post(GastroApp.ajaxUrl, i).done(function (e) {
            if (n.trigger("load.gstpagination", e.data), setTimeout(function () {
              return n.toggleClass("loading"), t.text(o.loadMoreMessage)
            }, 500), o.postToFind * o.index >= o.allPosts && (n.remove(), "scroll" === r)) return s.destroy()
          }).fail(function (e) {
            return t.text("error"), n.addClass("error")
          })
        }
      }), e.widget.bridge("gstPaginate", e.gastro.paginate)
    }).call(t, i(8))
  }, 615: function (e, t, i) {
    (function (e) {
      "use strict";
      e.widget("gastro.parallaxContent", {
        options: {items: "", speed: .5, offset: 200}, _create: function () {
          var t, i, n, s;
          if (t = this.options.items.length, !(GastroApp.isMobileOrTablet || GastroApp.isHorizontalScroll || GastroApp.isVerticalScroll || GastroApp.isHalfPageScroll) && t) return n = this, this.tabletScreenWidth = GastroApp.tabletScreenWidth, this.windowWidth = e(window).width(), s = this.element.data("parallaxspeed"), this.parallaxSpeed = s ? .1 * parseInt(s) : this.options.speed, i = this.element.data("parallaxoffset"), this.parallaxOffset = i ? i : this.options.offset, this._doParallaxContent(), e(window).on("resize", function (e) {
            return clearTimeout(n.resizeTimer), n.resizeTimer = setTimeout(function () {
              return n._doParallaxContent()
            }, 200)
          }), e(window).on("scroll", function () {
            return n._doParallaxContent()
          })
        }, _doParallaxContent: function () {
          var t, i, n, s;
          return i = this.parallaxSpeed, t = this.parallaxOffset, s = e(window).height(), n = e(window).scrollTop(), this.options.items.each(function (o, r) {
            var a, l, c, d;
            if (l = e(r), a = l.outerHeight(), c = l.offset().top, d = c + a - n, !(n + s <= c || n >= c + a)) return d < t ? l.css({
              transform: "translateY(-" + (t - d) * i + "px)",
              opacity: 3 * d / t / 4
            }) : l.css({transform: "", opacity: ""})
          })
        }
      }), e.widget.bridge("gstParallaxContent", e.gastro.parallaxContent)
    }).call(t, i(8))
  }, 616: function (e, t, i) {
    (function (e) {
      "use strict";
      var t, n, s;
      t = i(617), n = i(618), s = i(619), e.widget("gastro.photoSwipe", {
        options: {type: "image", iframeType: "video", galley: !1, gallerySelector: "a", target: "", index: 0},
        _create: function () {
          var e;
          if (e = this, this.pswpEl = GastroApp.pswpElement, this.items = [], this.images = [], this.iframeType = this.options.iframeType, this.pswpEl.length) return this.pswpOptions = {
            history: !1,
            shareEl: !1,
            bgOpacity: .85
          }, this.options.gallery ? this._initializeGalleryPopup() : this._initializeImagePopup(this.options.type)
        },
        _initializeImagePopup: function (e) {
          var t;
          return t = this, this.pushPopupItem(this.element, e), this._addZoomInAnimation(), this.element.on("click", function (e) {
            return e.preventDefault(), t._openPhotoSwipe()
          })
        },
        _initializeGalleryPopup: function () {
          var t, i, n;
          if (n = this, t = this.element.find(this.options.gallerySelector), t.length > 0) return t.each(function (t, i) {
            var s;
            if (s = e(i), !s.closest(".slick-cloned").length) return n.pushPopupItem(s)
          }), this._addZoomInAnimation(), this._on(this.element, (i = {}, i["click " + this.options.gallerySelector] = "_galleryImageClicked", i)), this.element.on("imageLinkChanged.gst", function (e, t) {
            return n.updateImageSrc(t.index, t.src)
          })
        },
        _galleryImageClicked: function (t) {
          var i, n;
          return t.preventDefault(), i = e(t.currentTarget), n = i.data("index"), this._openPhotoSwipe(n)
        },
        _addZoomInAnimation: function () {
          var e;
          if (e = this.images, e.length > 0) return this.pswpOptions.getThumbBoundsFn = function (t) {
            var i, n, s, o;
            if (i = e[t], s = i.offset().left, o = i.offset().top, n = i.width(), !isNaN(s) && !isNaN(o) && !isNaN(n)) return {
              x: s,
              y: o,
              w: n
            }
          }
        },
        pushPopupItem: function (e, t) {
          var i, n, o, r, a, l, c, d;
          return c = this.options.target.length ? this.options.target : e.attr("href"), "iframe" === t ? (n = this.getEmbedSrc(c), i = "mp4" === this.iframeType ? '<video width="1280" height="720" src="' + n + '" controls autoplay="autoplay"></video>' : '<iframe src="' + n + '" width="1280" height="720"></iframe>', this.items.push({html: '<div class="gst-modal-embed">\n  <div class="gst-modal-embed-inner">\n    <div class="gst-modal-embed-placeholder"></div>\n    ' + i + "\n  </div>\n</div>"})) : (o = e.find("img"), l = o.attr("src"), l = l ? l : s, d = o.attr("title"), d = d ? d : this.element.data("title"), o.length > 0 && this.images.push(o), a = o.data("full-width"), r = o.data("full-height"), this.items.push({
            src: c,
            w: a ? a : 0,
            h: r ? r : 0,
            title: d,
            msrc: l
          }))
        },
        updateImageSrc: function (e, t) {
          return this.items[e].src = t
        },
        getEmbedSrc: function (t) {
          var i;
          return t.indexOf("youtube.com") >= 0 || t.indexOf("vimeo.com") >= 0 ? (this.iframeType = "video", i = {
            youtube: {
              index: "youtube.com",
              id: "v=",
              src: "//www.youtube.com/embed/%id%?autoplay=1"
            }, vimeo: {index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1"}
          }, e.each(i, function () {
            if (t.indexOf(this.index) > -1) return t = t.substr(t.lastIndexOf(this.id) + this.id.length, t.length), t = this.src.replace("%id%", t)
          })) : t.indexOf("maps.google") >= 0 || t.indexOf("google.com/maps") >= 0 ? (this.iframeType = "map", t.indexOf("//maps.google.") > -1 && (t = "%id%&output=embed".replace("%id%", t))) : t.indexOf("w.soundcloud.com") >= 0 || t.indexOf("mixcloud.com/widget/") >= 0 ? this.iframeType = "audio" : t.indexOf(".mp4") > -1 && (this.iframeType = "mp4"), t
        },
        _openPhotoSwipe: function (e) {
          var i, s;
          return s = this, this.pswpOptions.index = e, i = new t(this.pswpEl[0], n, this.items, this.pswpOptions), i.listen("gettingData", function (e, t) {
            var n;
            if ("undefined" != typeof t.src && (t.w < 1 || t.h < 1)) return n = new Image, n.onload = function () {
              return t.w = this.width, t.h = this.height, i.invalidateCurrItems(), i.updateSize(!0)
            }, n.src = t.src
          }), i.listen("close", function () {
            return s.pswpEl.find("iframe").attr("src", ""), s.pswpEl.find("video").attr("src", "")
          }), i.init()
        }
      }), e.widget.bridge("gstPhotoSwipe", e.gastro.photoSwipe)
    }).call(t, i(8))
  }, 617: function (e, t, i) {
    var n, s;/*! PhotoSwipe - v4.1.1 - 2015-12-24
	* http://photoswipe.com
	* Copyright (c) 2015 Dmitry Semenov; */
    !function (o, r) {
      n = r, s = "function" == typeof n ? n.call(t, i, t, e) : n, !(void 0 !== s && (e.exports = s))
    }(this, function () {
      "use strict";
      var e = function (e, t, i, n) {
        var s = {
          features: null, bind: function (e, t, i, n) {
            var s = (n ? "remove" : "add") + "EventListener";
            t = t.split(" ");
            for (var o = 0; o < t.length; o++) t[o] && e[s](t[o], i, !1)
          }, isArray: function (e) {
            return e instanceof Array
          }, createEl: function (e, t) {
            var i = document.createElement(t || "div");
            return e && (i.className = e), i
          }, getScrollY: function () {
            var e = window.pageYOffset;
            return void 0 !== e ? e : document.documentElement.scrollTop
          }, unbind: function (e, t, i) {
            s.bind(e, t, i, !0)
          }, removeClass: function (e, t) {
            var i = new RegExp("(\\s|^)" + t + "(\\s|$)");
            e.className = e.className.replace(i, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
          }, addClass: function (e, t) {
            s.hasClass(e, t) || (e.className += (e.className ? " " : "") + t)
          }, hasClass: function (e, t) {
            return e.className && new RegExp("(^|\\s)" + t + "(\\s|$)").test(e.className)
          }, getChildByClass: function (e, t) {
            for (var i = e.firstChild; i;) {
              if (s.hasClass(i, t)) return i;
              i = i.nextSibling
            }
          }, arraySearch: function (e, t, i) {
            for (var n = e.length; n--;) if (e[n][i] === t) return n;
            return -1
          }, extend: function (e, t, i) {
            for (var n in t) if (t.hasOwnProperty(n)) {
              if (i && e.hasOwnProperty(n)) continue;
              e[n] = t[n]
            }
          }, easing: {
            sine: {
              out: function (e) {
                return Math.sin(e * (Math.PI / 2))
              }, inOut: function (e) {
                return -(Math.cos(Math.PI * e) - 1) / 2
              }
            }, cubic: {
              out: function (e) {
                return --e * e * e + 1
              }
            }
          }, detectFeatures: function () {
            if (s.features) return s.features;
            var e = s.createEl(), t = e.style, i = "", n = {};
            if (n.oldIE = document.all && !document.addEventListener, n.touch = "ontouchstart" in window, window.requestAnimationFrame && (n.raf = window.requestAnimationFrame, n.caf = window.cancelAnimationFrame), n.pointerEvent = navigator.pointerEnabled || navigator.msPointerEnabled, !n.pointerEvent) {
              var o = navigator.userAgent;
              if (/iP(hone|od)/.test(navigator.platform)) {
                var r = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                r && r.length > 0 && (r = parseInt(r[1], 10), r >= 1 && r < 8 && (n.isOldIOSPhone = !0))
              }
              var a = o.match(/Android\s([0-9\.]*)/), l = a ? a[1] : 0;
              l = parseFloat(l), l >= 1 && (l < 4.4 && (n.isOldAndroid = !0), n.androidVersion = l), n.isMobileOpera = /opera mini|opera mobi/i.test(o)
            }
            for (var c, d, u = ["transform", "perspective", "animationName"], h = ["", "webkit", "Moz", "ms", "O"], p = 0; p < 4; p++) {
              i = h[p];
              for (var f = 0; f < 3; f++) c = u[f], d = i + (i ? c.charAt(0).toUpperCase() + c.slice(1) : c), !n[c] && d in t && (n[c] = d);
              i && !n.raf && (i = i.toLowerCase(), n.raf = window[i + "RequestAnimationFrame"], n.raf && (n.caf = window[i + "CancelAnimationFrame"] || window[i + "CancelRequestAnimationFrame"]))
            }
            if (!n.raf) {
              var m = 0;
              n.raf = function (e) {
                var t = (new Date).getTime(), i = Math.max(0, 16 - (t - m)), n = window.setTimeout(function () {
                  e(t + i)
                }, i);
                return m = t + i, n
              }, n.caf = function (e) {
                clearTimeout(e)
              }
            }
            return n.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, s.features = n, n
          }
        };
        s.detectFeatures(), s.features.oldIE && (s.bind = function (e, t, i, n) {
          t = t.split(" ");
          for (var s, o = (n ? "detach" : "attach") + "Event", r = function () {
            i.handleEvent.call(i)
          }, a = 0; a < t.length; a++) if (s = t[a]) if ("object" == typeof i && i.handleEvent) {
            if (n) {
              if (!i["oldIE" + s]) return !1
            } else i["oldIE" + s] = r;
            e[o]("on" + s, i["oldIE" + s])
          } else e[o]("on" + s, i)
        });
        var o = this, r = 25, a = 3, l = {
          allowPanToNext: !0,
          spacing: .12,
          bgOpacity: 1,
          mouseUsed: !1,
          loop: !0,
          pinchToClose: !0,
          closeOnScroll: !0,
          closeOnVerticalDrag: !0,
          verticalDragRange: .75,
          hideAnimationDuration: 333,
          showAnimationDuration: 333,
          showHideOpacity: !1,
          focus: !0,
          escKey: !0,
          arrowKeys: !0,
          mainScrollEndFriction: .35,
          panEndFriction: .35,
          isClickableElement: function (e) {
            return "A" === e.tagName
          },
          getDoubleTapZoom: function (e, t) {
            return e ? 1 : t.initialZoomLevel < .7 ? 1 : 1.33
          },
          maxSpreadZoom: 1.33,
          modal: !0,
          scaleMode: "fit"
        };
        s.extend(l, n);
        var c, d, u, h, p, f, m, g, v, b, w, y, x, S, k, C, _, T, O, A, I, P, M, E, D, z, R, F, H, W, L, j, N, B, G, $,
            Z, U, V, Y, q, K, X, J, Q, ee, te, ie, ne, se, oe, re, ae, le, ce, de, ue = function () {
              return {x: 0, y: 0}
            }, he = ue(), pe = ue(), fe = ue(), me = {}, ge = 0, ve = {}, be = ue(), we = 0, ye = !0, xe = [], Se = {},
            ke = !1, Ce = function (e, t) {
              s.extend(o, t.publicMethods), xe.push(e)
            }, _e = function (e) {
              var t = Qt();
              return e > t - 1 ? e - t : e < 0 ? t + e : e
            }, Te = {}, Oe = function (e, t) {
              return Te[e] || (Te[e] = []), Te[e].push(t)
            }, Ae = function (e) {
              var t = Te[e];
              if (t) {
                var i = Array.prototype.slice.call(arguments);
                i.shift();
                for (var n = 0; n < t.length; n++) t[n].apply(o, i)
              }
            }, Ie = function () {
              return (new Date).getTime()
            }, Pe = function (e) {
              le = e, o.bg.style.opacity = e * l.bgOpacity
            }, Me = function (e, t, i, n, s) {
              (!ke || s && s !== o.currItem) && (n /= s ? s.fitRatio : o.currItem.fitRatio), e[P] = y + t + "px, " + i + "px" + x + " scale(" + n + ")"
            }, Ee = function (e) {
              ne && (e && (b > o.currItem.fitRatio ? ke || (ui(o.currItem, !1, !0), ke = !0) : ke && (ui(o.currItem), ke = !1)), Me(ne, fe.x, fe.y, b))
            }, De = function (e) {
              e.container && Me(e.container.style, e.initialPosition.x, e.initialPosition.y, e.initialZoomLevel, e)
            }, ze = function (e, t) {
              t[P] = y + e + "px, 0px" + x
            }, Re = function (e, t) {
              if (!l.loop && t) {
                var i = h + (be.x * ge - e) / be.x, n = Math.round(e - bt.x);
                (i < 0 && n > 0 || i >= Qt() - 1 && n < 0) && (e = bt.x + n * l.mainScrollEndFriction)
              }
              bt.x = e, ze(e, p)
            }, Fe = function (e, t) {
              var i = wt[e] - ve[e];
              return pe[e] + he[e] + i - i * (t / w)
            }, He = function (e, t) {
              e.x = t.x, e.y = t.y, t.id && (e.id = t.id)
            }, We = function (e) {
              e.x = Math.round(e.x), e.y = Math.round(e.y)
            }, Le = null, je = function () {
              Le && (s.unbind(document, "mousemove", je), s.addClass(e, "pswp--has_mouse"), l.mouseUsed = !0, Ae("mouseUsed")), Le = setTimeout(function () {
                Le = null
              }, 100)
            }, Ne = function () {
              s.bind(document, "keydown", o), L.transform && s.bind(o.scrollWrap, "click", o), l.mouseUsed || s.bind(document, "mousemove", je), s.bind(window, "resize scroll", o), Ae("bindEvents")
            }, Be = function () {
              s.unbind(window, "resize", o), s.unbind(window, "scroll", v.scroll), s.unbind(document, "keydown", o), s.unbind(document, "mousemove", je), L.transform && s.unbind(o.scrollWrap, "click", o), U && s.unbind(window, m, o), Ae("unbindEvents")
            }, Ge = function (e, t) {
              var i = ai(o.currItem, me, e);
              return t && (ie = i), i
            }, $e = function (e) {
              return e || (e = o.currItem), e.initialZoomLevel
            }, Ze = function (e) {
              return e || (e = o.currItem), e.w > 0 ? l.maxSpreadZoom : 1
            }, Ue = function (e, t, i, n) {
              return n === o.currItem.initialZoomLevel ? (i[e] = o.currItem.initialPosition[e], !0) : (i[e] = Fe(e, n), i[e] > t.min[e] ? (i[e] = t.min[e], !0) : i[e] < t.max[e] && (i[e] = t.max[e], !0))
            }, Ve = function () {
              if (P) {
                var t = L.perspective && !E;
                return y = "translate" + (t ? "3d(" : "("), void (x = L.perspective ? ", 0px)" : ")")
              }
              P = "left", s.addClass(e, "pswp--ie"), ze = function (e, t) {
                t.left = e + "px"
              }, De = function (e) {
                var t = e.fitRatio > 1 ? 1 : e.fitRatio, i = e.container.style, n = t * e.w, s = t * e.h;
                i.width = n + "px", i.height = s + "px", i.left = e.initialPosition.x + "px", i.top = e.initialPosition.y + "px"
              }, Ee = function () {
                if (ne) {
                  var e = ne, t = o.currItem, i = t.fitRatio > 1 ? 1 : t.fitRatio, n = i * t.w, s = i * t.h;
                  e.width = n + "px", e.height = s + "px", e.left = fe.x + "px", e.top = fe.y + "px"
                }
              }
            }, Ye = function (e) {
              var t = "";
              l.escKey && 27 === e.keyCode ? t = "close" : l.arrowKeys && (37 === e.keyCode ? t = "prev" : 39 === e.keyCode && (t = "next")), t && (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || (e.preventDefault ? e.preventDefault() : e.returnValue = !1, o[t]()))
            }, qe = function (e) {
              e && (q || Y || se || $) && (e.preventDefault(), e.stopPropagation())
            }, Ke = function () {
              o.setScrollOffset(0, s.getScrollY())
            }, Xe = {}, Je = 0, Qe = function (e) {
              Xe[e] && (Xe[e].raf && z(Xe[e].raf), Je--, delete Xe[e])
            }, et = function (e) {
              Xe[e] && Qe(e), Xe[e] || (Je++, Xe[e] = {})
            }, tt = function () {
              for (var e in Xe) Xe.hasOwnProperty(e) && Qe(e)
            }, it = function (e, t, i, n, s, o, r) {
              var a, l = Ie();
              et(e);
              var c = function () {
                if (Xe[e]) {
                  if (a = Ie() - l, a >= n) return Qe(e), o(i), void (r && r());
                  o((i - t) * s(a / n) + t), Xe[e].raf = D(c)
                }
              };
              c()
            }, nt = {
              shout: Ae, listen: Oe, viewportSize: me, options: l, isMainScrollAnimating: function () {
                return se
              }, getZoomLevel: function () {
                return b
              }, getCurrentIndex: function () {
                return h
              }, isDragging: function () {
                return U
              }, isZooming: function () {
                return Q
              }, setScrollOffset: function (e, t) {
                ve.x = e, W = ve.y = t, Ae("updateScrollOffset", ve)
              }, applyZoomPan: function (e, t, i, n) {
                fe.x = t, fe.y = i, b = e, Ee(n)
              }, init: function () {
                if (!c && !d) {
                  var i;
                  o.framework = s, o.template = e, o.bg = s.getChildByClass(e, "pswp__bg"), R = e.className, c = !0, L = s.detectFeatures(), D = L.raf, z = L.caf, P = L.transform, H = L.oldIE, o.scrollWrap = s.getChildByClass(e, "pswp__scroll-wrap"), o.container = s.getChildByClass(o.scrollWrap, "pswp__container"), p = o.container.style, o.itemHolders = C = [{
                    el: o.container.children[0],
                    wrap: 0,
                    index: -1
                  }, {el: o.container.children[1], wrap: 0, index: -1}, {
                    el: o.container.children[2],
                    wrap: 0,
                    index: -1
                  }], C[0].el.style.display = C[2].el.style.display = "none", Ve(), v = {
                    resize: o.updateSize,
                    scroll: Ke,
                    keydown: Ye,
                    click: qe
                  };
                  var n = L.isOldIOSPhone || L.isOldAndroid || L.isMobileOpera;
                  for (L.animationName && L.transform && !n || (l.showAnimationDuration = l.hideAnimationDuration = 0), i = 0; i < xe.length; i++) o["init" + xe[i]]();
                  if (t) {
                    var r = o.ui = new t(o, s);
                    r.init()
                  }
                  Ae("firstUpdate"), h = h || l.index || 0, (isNaN(h) || h < 0 || h >= Qt()) && (h = 0), o.currItem = Jt(h), (L.isOldIOSPhone || L.isOldAndroid) && (ye = !1), e.setAttribute("aria-hidden", "false"), l.modal && (ye ? e.style.position = "fixed" : (e.style.position = "absolute", e.style.top = s.getScrollY() + "px")), void 0 === W && (Ae("initialLayout"), W = F = s.getScrollY());
                  var u = "pswp--open ";
                  for (l.mainClass && (u += l.mainClass + " "), l.showHideOpacity && (u += "pswp--animate_opacity "), u += E ? "pswp--touch" : "pswp--notouch", u += L.animationName ? " pswp--css_animation" : "", u += L.svg ? " pswp--svg" : "", s.addClass(e, u), o.updateSize(), f = -1, we = null, i = 0; i < a; i++) ze((i + f) * be.x, C[i].el.style);
                  H || s.bind(o.scrollWrap, g, o), Oe("initialZoomInEnd", function () {
                    o.setContent(C[0], h - 1), o.setContent(C[2], h + 1), C[0].el.style.display = C[2].el.style.display = "block", l.focus && e.focus(), Ne()
                  }), o.setContent(C[1], h), o.updateCurrItem(), Ae("afterInit"), ye || (S = setInterval(function () {
                    Je || U || Q || b !== o.currItem.initialZoomLevel || o.updateSize()
                  }, 1e3)), s.addClass(e, "pswp--visible")
                }
              }, close: function () {
                c && (c = !1, d = !0, Ae("close"), Be(), ti(o.currItem, null, !0, o.destroy))
              }, destroy: function () {
                Ae("destroy"), Yt && clearTimeout(Yt), e.setAttribute("aria-hidden", "true"), e.className = R, S && clearInterval(S), s.unbind(o.scrollWrap, g, o), s.unbind(window, "scroll", o), Ct(), tt(), Te = null
              }, panTo: function (e, t, i) {
                i || (e > ie.min.x ? e = ie.min.x : e < ie.max.x && (e = ie.max.x), t > ie.min.y ? t = ie.min.y : t < ie.max.y && (t = ie.max.y)), fe.x = e, fe.y = t, Ee()
              }, handleEvent: function (e) {
                e = e || window.event, v[e.type] && v[e.type](e)
              }, goTo: function (e) {
                e = _e(e);
                var t = e - h;
                we = t, h = e, o.currItem = Jt(h), ge -= t, Re(be.x * ge), tt(), se = !1, o.updateCurrItem()
              }, next: function () {
                o.goTo(h + 1)
              }, prev: function () {
                o.goTo(h - 1)
              }, updateCurrZoomItem: function (e) {
                if (e && Ae("beforeChange", 0), C[1].el.children.length) {
                  var t = C[1].el.children[0];
                  ne = s.hasClass(t, "pswp__zoom-wrap") ? t.style : null
                } else ne = null;
                ie = o.currItem.bounds, w = b = o.currItem.initialZoomLevel, fe.x = ie.center.x, fe.y = ie.center.y, e && Ae("afterChange")
              }, invalidateCurrItems: function () {
                k = !0;
                for (var e = 0; e < a; e++) C[e].item && (C[e].item.needsUpdate = !0)
              }, updateCurrItem: function (e) {
                if (0 !== we) {
                  var t, i = Math.abs(we);
                  if (!(e && i < 2)) {
                    o.currItem = Jt(h), ke = !1, Ae("beforeChange", we), i >= a && (f += we + (we > 0 ? -a : a), i = a);
                    for (var n = 0; n < i; n++) we > 0 ? (t = C.shift(), C[a - 1] = t, f++, ze((f + 2) * be.x, t.el.style), o.setContent(t, h - i + n + 1 + 1)) : (t = C.pop(), C.unshift(t), f--, ze(f * be.x, t.el.style), o.setContent(t, h + i - n - 1 - 1));
                    if (ne && 1 === Math.abs(we)) {
                      var s = Jt(_);
                      s.initialZoomLevel !== b && (ai(s, me), ui(s), De(s))
                    }
                    we = 0, o.updateCurrZoomItem(), _ = h, Ae("afterChange")
                  }
                }
              }, updateSize: function (t) {
                if (!ye && l.modal) {
                  var i = s.getScrollY();
                  if (W !== i && (e.style.top = i + "px", W = i), !t && Se.x === window.innerWidth && Se.y === window.innerHeight) return;
                  Se.x = window.innerWidth, Se.y = window.innerHeight, e.style.height = Se.y + "px"
                }
                if (me.x = o.scrollWrap.clientWidth, me.y = o.scrollWrap.clientHeight, Ke(), be.x = me.x + Math.round(me.x * l.spacing), be.y = me.y, Re(be.x * ge), Ae("beforeResize"), void 0 !== f) {
                  for (var n, r, c, d = 0; d < a; d++) n = C[d], ze((d + f) * be.x, n.el.style), c = h + d - 1, l.loop && Qt() > 2 && (c = _e(c)), r = Jt(c), r && (k || r.needsUpdate || !r.bounds) ? (o.cleanSlide(r), o.setContent(n, c), 1 === d && (o.currItem = r, o.updateCurrZoomItem(!0)), r.needsUpdate = !1) : n.index === -1 && c >= 0 && o.setContent(n, c), r && r.container && (ai(r, me), ui(r), De(r));
                  k = !1
                }
                w = b = o.currItem.initialZoomLevel, ie = o.currItem.bounds, ie && (fe.x = ie.center.x, fe.y = ie.center.y, Ee(!0)), Ae("resize")
              }, zoomTo: function (e, t, i, n, o) {
                t && (w = b, wt.x = Math.abs(t.x) - fe.x, wt.y = Math.abs(t.y) - fe.y, He(pe, fe));
                var r = Ge(e, !1), a = {};
                Ue("x", r, a, e), Ue("y", r, a, e);
                var l = b, c = {x: fe.x, y: fe.y};
                We(a);
                var d = function (t) {
                  1 === t ? (b = e, fe.x = a.x, fe.y = a.y) : (b = (e - l) * t + l, fe.x = (a.x - c.x) * t + c.x, fe.y = (a.y - c.y) * t + c.y), o && o(t), Ee(1 === t)
                };
                i ? it("customZoomTo", 0, 1, i, n || s.easing.sine.inOut, d) : d(1)
              }
            }, st = 30, ot = 10, rt = {}, at = {}, lt = {}, ct = {}, dt = {}, ut = [], ht = {}, pt = [], ft = {}, mt = 0,
            gt = ue(), vt = 0, bt = ue(), wt = ue(), yt = ue(), xt = function (e, t) {
              return e.x === t.x && e.y === t.y
            }, St = function (e, t) {
              return Math.abs(e.x - t.x) < r && Math.abs(e.y - t.y) < r
            }, kt = function (e, t) {
              return ft.x = Math.abs(e.x - t.x), ft.y = Math.abs(e.y - t.y), Math.sqrt(ft.x * ft.x + ft.y * ft.y)
            }, Ct = function () {
              K && (z(K), K = null)
            }, _t = function () {
              U && (K = D(_t), Nt())
            }, Tt = function () {
              return !("fit" === l.scaleMode && b === o.currItem.initialZoomLevel)
            }, Ot = function (e, t) {
              return !(!e || e === document) && (!(e.getAttribute("class") && e.getAttribute("class").indexOf("pswp__scroll-wrap") > -1) && (t(e) ? e : Ot(e.parentNode, t)))
            }, At = {}, It = function (e, t) {
              return At.prevent = !Ot(e.target, l.isClickableElement), Ae("preventDragEvent", e, t, At), At.prevent
            }, Pt = function (e, t) {
              return t.x = e.pageX, t.y = e.pageY, t.id = e.identifier, t
            }, Mt = function (e, t, i) {
              i.x = .5 * (e.x + t.x), i.y = .5 * (e.y + t.y)
            }, Et = function (e, t, i) {
              if (e - N > 50) {
                var n = pt.length > 2 ? pt.shift() : {};
                n.x = t, n.y = i, pt.push(n), N = e
              }
            }, Dt = function () {
              var e = fe.y - o.currItem.initialPosition.y;
              return 1 - Math.abs(e / (me.y / 2))
            }, zt = {}, Rt = {}, Ft = [], Ht = function (e) {
              for (; Ft.length > 0;) Ft.pop();
              return M ? (de = 0, ut.forEach(function (e) {
                0 === de ? Ft[0] = e : 1 === de && (Ft[1] = e), de++
              })) : e.type.indexOf("touch") > -1 ? e.touches && e.touches.length > 0 && (Ft[0] = Pt(e.touches[0], zt), e.touches.length > 1 && (Ft[1] = Pt(e.touches[1], Rt))) : (zt.x = e.pageX, zt.y = e.pageY, zt.id = "", Ft[0] = zt), Ft
            }, Wt = function (e, t) {
              var i, n, s, r, a = 0, c = fe[e] + t[e], d = t[e] > 0, u = bt.x + t.x, h = bt.x - ht.x;
              return i = c > ie.min[e] || c < ie.max[e] ? l.panEndFriction : 1, c = fe[e] + t[e] * i, !l.allowPanToNext && b !== o.currItem.initialZoomLevel || (ne ? "h" !== oe || "x" !== e || Y || (d ? (c > ie.min[e] && (i = l.panEndFriction, a = ie.min[e] - c, n = ie.min[e] - pe[e]), (n <= 0 || h < 0) && Qt() > 1 ? (r = u, h < 0 && u > ht.x && (r = ht.x)) : ie.min.x !== ie.max.x && (s = c)) : (c < ie.max[e] && (i = l.panEndFriction, a = c - ie.max[e], n = pe[e] - ie.max[e]), (n <= 0 || h > 0) && Qt() > 1 ? (r = u, h > 0 && u < ht.x && (r = ht.x)) : ie.min.x !== ie.max.x && (s = c))) : r = u, "x" !== e) ? void (se || X || b > o.currItem.fitRatio && (fe[e] += t[e] * i)) : (void 0 !== r && (Re(r, !0), X = r !== ht.x), ie.min.x !== ie.max.x && (void 0 !== s ? fe.x = s : X || (fe.x += t.x * i)), void 0 !== r)
            }, Lt = function (e) {
              if (!("mousedown" === e.type && e.button > 0)) {
                if (Xt) return void e.preventDefault();
                if (!Z || "mousedown" !== e.type) {
                  if (It(e, !0) && e.preventDefault(), Ae("pointerDown"), M) {
                    var t = s.arraySearch(ut, e.pointerId, "id");
                    t < 0 && (t = ut.length), ut[t] = {x: e.pageX, y: e.pageY, id: e.pointerId}
                  }
                  var i = Ht(e), n = i.length;
                  J = null, tt(), U && 1 !== n || (U = re = !0, s.bind(window, m, o), G = ce = ae = $ = X = q = V = Y = !1, oe = null, Ae("firstTouchStart", i), He(pe, fe), he.x = he.y = 0, He(ct, i[0]), He(dt, ct), ht.x = be.x * ge, pt = [{
                    x: ct.x,
                    y: ct.y
                  }], N = j = Ie(), Ge(b, !0), Ct(), _t()), !Q && n > 1 && !se && !X && (w = b, Y = !1, Q = V = !0, he.y = he.x = 0, He(pe, fe), He(rt, i[0]), He(at, i[1]), Mt(rt, at, yt), wt.x = Math.abs(yt.x) - fe.x, wt.y = Math.abs(yt.y) - fe.y, ee = te = kt(rt, at))
                }
              }
            }, jt = function (e) {
              if (e.preventDefault(), M) {
                var t = s.arraySearch(ut, e.pointerId, "id");
                if (t > -1) {
                  var i = ut[t];
                  i.x = e.pageX, i.y = e.pageY
                }
              }
              if (U) {
                var n = Ht(e);
                if (oe || q || Q) J = n; else if (bt.x !== be.x * ge) oe = "h"; else {
                  var o = Math.abs(n[0].x - ct.x) - Math.abs(n[0].y - ct.y);
                  Math.abs(o) >= ot && (oe = o > 0 ? "h" : "v", J = n)
                }
              }
            }, Nt = function () {
              if (J) {
                var e = J.length;
                if (0 !== e) if (He(rt, J[0]), lt.x = rt.x - ct.x, lt.y = rt.y - ct.y, Q && e > 1) {
                  if (ct.x = rt.x, ct.y = rt.y, !lt.x && !lt.y && xt(J[1], at)) return;
                  He(at, J[1]), Y || (Y = !0, Ae("zoomGestureStarted"));
                  var t = kt(rt, at), i = Ut(t);
                  i > o.currItem.initialZoomLevel + o.currItem.initialZoomLevel / 15 && (ce = !0);
                  var n = 1, s = $e(), r = Ze();
                  if (i < s) if (l.pinchToClose && !ce && w <= o.currItem.initialZoomLevel) {
                    var a = s - i, c = 1 - a / (s / 1.2);
                    Pe(c), Ae("onPinchClose", c), ae = !0
                  } else n = (s - i) / s, n > 1 && (n = 1), i = s - n * (s / 3); else i > r && (n = (i - r) / (6 * s), n > 1 && (n = 1), i = r + n * s);
                  n < 0 && (n = 0), ee = t, Mt(rt, at, gt), he.x += gt.x - yt.x, he.y += gt.y - yt.y, He(yt, gt), fe.x = Fe("x", i), fe.y = Fe("y", i), G = i > b, b = i, Ee()
                } else {
                  if (!oe) return;
                  if (re && (re = !1, Math.abs(lt.x) >= ot && (lt.x -= J[0].x - dt.x), Math.abs(lt.y) >= ot && (lt.y -= J[0].y - dt.y)), ct.x = rt.x, ct.y = rt.y, 0 === lt.x && 0 === lt.y) return;
                  if ("v" === oe && l.closeOnVerticalDrag && !Tt()) {
                    he.y += lt.y, fe.y += lt.y;
                    var d = Dt();
                    return $ = !0, Ae("onVerticalDrag", d), Pe(d), void Ee()
                  }
                  Et(Ie(), rt.x, rt.y), q = !0, ie = o.currItem.bounds;
                  var u = Wt("x", lt);
                  u || (Wt("y", lt), We(fe), Ee())
                }
              }
            }, Bt = function (e) {
              if (L.isOldAndroid) {
                if (Z && "mouseup" === e.type) return;
                e.type.indexOf("touch") > -1 && (clearTimeout(Z), Z = setTimeout(function () {
                  Z = 0
                }, 600))
              }
              Ae("pointerUp"), It(e, !1) && e.preventDefault();
              var t;
              if (M) {
                var i = s.arraySearch(ut, e.pointerId, "id");
                if (i > -1) if (t = ut.splice(i, 1)[0], navigator.pointerEnabled) t.type = e.pointerType || "mouse"; else {
                  var n = {4: "mouse", 2: "touch", 3: "pen"};
                  t.type = n[e.pointerType], t.type || (t.type = e.pointerType || "mouse")
                }
              }
              var r, a = Ht(e), c = a.length;
              if ("mouseup" === e.type && (c = 0), 2 === c) return J = null, !0;
              1 === c && He(dt, a[0]), 0 !== c || oe || se || (t || ("mouseup" === e.type ? t = {
                x: e.pageX,
                y: e.pageY,
                type: "mouse"
              } : e.changedTouches && e.changedTouches[0] && (t = {
                x: e.changedTouches[0].pageX,
                y: e.changedTouches[0].pageY,
                type: "touch"
              })), Ae("touchRelease", e, t));
              var d = -1;
              if (0 === c && (U = !1, s.unbind(window, m, o), Ct(), Q ? d = 0 : vt !== -1 && (d = Ie() - vt)), vt = 1 === c ? Ie() : -1, r = d !== -1 && d < 150 ? "zoom" : "swipe", Q && c < 2 && (Q = !1, 1 === c && (r = "zoomPointerUp"), Ae("zoomGestureEnded")), J = null, q || Y || se || $) if (tt(), B || (B = Gt()), B.calculateSwipeSpeed("x"), $) {
                var u = Dt();
                if (u < l.verticalDragRange) o.close(); else {
                  var h = fe.y, p = le;
                  it("verticalDrag", 0, 1, 300, s.easing.cubic.out, function (e) {
                    fe.y = (o.currItem.initialPosition.y - h) * e + h, Pe((1 - p) * e + p), Ee()
                  }), Ae("onVerticalDrag", 1)
                }
              } else {
                if ((X || se) && 0 === c) {
                  var f = Zt(r, B);
                  if (f) return;
                  r = "zoomPointerUp"
                }
                if (!se) return "swipe" !== r ? void Vt() : void (!X && b > o.currItem.fitRatio && $t(B))
              }
            }, Gt = function () {
              var e, t, i = {
                lastFlickOffset: {},
                lastFlickDist: {},
                lastFlickSpeed: {},
                slowDownRatio: {},
                slowDownRatioReverse: {},
                speedDecelerationRatio: {},
                speedDecelerationRatioAbs: {},
                distanceOffset: {},
                backAnimDestination: {},
                backAnimStarted: {},
                calculateSwipeSpeed: function (n) {
                  pt.length > 1 ? (e = Ie() - N + 50, t = pt[pt.length - 2][n]) : (e = Ie() - j, t = dt[n]), i.lastFlickOffset[n] = ct[n] - t, i.lastFlickDist[n] = Math.abs(i.lastFlickOffset[n]), i.lastFlickDist[n] > 20 ? i.lastFlickSpeed[n] = i.lastFlickOffset[n] / e : i.lastFlickSpeed[n] = 0, Math.abs(i.lastFlickSpeed[n]) < .1 && (i.lastFlickSpeed[n] = 0), i.slowDownRatio[n] = .95, i.slowDownRatioReverse[n] = 1 - i.slowDownRatio[n], i.speedDecelerationRatio[n] = 1
                },
                calculateOverBoundsAnimOffset: function (e, t) {
                  i.backAnimStarted[e] || (fe[e] > ie.min[e] ? i.backAnimDestination[e] = ie.min[e] : fe[e] < ie.max[e] && (i.backAnimDestination[e] = ie.max[e]), void 0 !== i.backAnimDestination[e] && (i.slowDownRatio[e] = .7, i.slowDownRatioReverse[e] = 1 - i.slowDownRatio[e], i.speedDecelerationRatioAbs[e] < .05 && (i.lastFlickSpeed[e] = 0, i.backAnimStarted[e] = !0, it("bounceZoomPan" + e, fe[e], i.backAnimDestination[e], t || 300, s.easing.sine.out, function (t) {
                    fe[e] = t, Ee()
                  }))))
                },
                calculateAnimOffset: function (e) {
                  i.backAnimStarted[e] || (i.speedDecelerationRatio[e] = i.speedDecelerationRatio[e] * (i.slowDownRatio[e] + i.slowDownRatioReverse[e] - i.slowDownRatioReverse[e] * i.timeDiff / 10), i.speedDecelerationRatioAbs[e] = Math.abs(i.lastFlickSpeed[e] * i.speedDecelerationRatio[e]), i.distanceOffset[e] = i.lastFlickSpeed[e] * i.speedDecelerationRatio[e] * i.timeDiff, fe[e] += i.distanceOffset[e])
                },
                panAnimLoop: function () {
                  if (Xe.zoomPan && (Xe.zoomPan.raf = D(i.panAnimLoop), i.now = Ie(), i.timeDiff = i.now - i.lastNow, i.lastNow = i.now, i.calculateAnimOffset("x"), i.calculateAnimOffset("y"), Ee(), i.calculateOverBoundsAnimOffset("x"), i.calculateOverBoundsAnimOffset("y"), i.speedDecelerationRatioAbs.x < .05 && i.speedDecelerationRatioAbs.y < .05)) return fe.x = Math.round(fe.x), fe.y = Math.round(fe.y), Ee(), void Qe("zoomPan")
                }
              };
              return i
            }, $t = function (e) {
              return e.calculateSwipeSpeed("y"), ie = o.currItem.bounds, e.backAnimDestination = {}, e.backAnimStarted = {}, Math.abs(e.lastFlickSpeed.x) <= .05 && Math.abs(e.lastFlickSpeed.y) <= .05 ? (e.speedDecelerationRatioAbs.x = e.speedDecelerationRatioAbs.y = 0, e.calculateOverBoundsAnimOffset("x"), e.calculateOverBoundsAnimOffset("y"), !0) : (et("zoomPan"), e.lastNow = Ie(), void e.panAnimLoop())
            }, Zt = function (e, t) {
              var i;
              se || (mt = h);
              var n;
              if ("swipe" === e) {
                var r = ct.x - dt.x, a = t.lastFlickDist.x < 10;
                r > st && (a || t.lastFlickOffset.x > 20) ? n = -1 : r < -st && (a || t.lastFlickOffset.x < -20) && (n = 1)
              }
              var c;
              n && (h += n, h < 0 ? (h = l.loop ? Qt() - 1 : 0, c = !0) : h >= Qt() && (h = l.loop ? 0 : Qt() - 1, c = !0), c && !l.loop || (we += n, ge -= n, i = !0));
              var d, u = be.x * ge, p = Math.abs(u - bt.x);
              return i || u > bt.x == t.lastFlickSpeed.x > 0 ? (d = Math.abs(t.lastFlickSpeed.x) > 0 ? p / Math.abs(t.lastFlickSpeed.x) : 333, d = Math.min(d, 400), d = Math.max(d, 250)) : d = 333, mt === h && (i = !1), se = !0, Ae("mainScrollAnimStart"), it("mainScroll", bt.x, u, d, s.easing.cubic.out, Re, function () {
                tt(), se = !1, mt = -1, (i || mt !== h) && o.updateCurrItem(), Ae("mainScrollAnimComplete")
              }), i && o.updateCurrItem(!0), i
            }, Ut = function (e) {
              return 1 / te * e * w
            }, Vt = function () {
              var e = b, t = $e(), i = Ze();
              b < t ? e = t : b > i && (e = i);
              var n, r = 1, a = le;
              return ae && !G && !ce && b < t ? (o.close(), !0) : (ae && (n = function (e) {
                Pe((r - a) * e + a)
              }), o.zoomTo(e, 0, 200, s.easing.cubic.out, n), !0)
            };
        Ce("Gestures", {
          publicMethods: {
            initGestures: function () {
              var e = function (e, t, i, n, s) {
                T = e + t, O = e + i, A = e + n, I = s ? e + s : ""
              };
              M = L.pointerEvent, M && L.touch && (L.touch = !1), M ? navigator.pointerEnabled ? e("pointer", "down", "move", "up", "cancel") : e("MSPointer", "Down", "Move", "Up", "Cancel") : L.touch ? (e("touch", "start", "move", "end", "cancel"), E = !0) : e("mouse", "down", "move", "up"), m = O + " " + A + " " + I, g = T, M && !E && (E = navigator.maxTouchPoints > 1 || navigator.msMaxTouchPoints > 1), o.likelyTouchDevice = E, v[T] = Lt, v[O] = jt, v[A] = Bt, I && (v[I] = v[A]), L.touch && (g += " mousedown", m += " mousemove mouseup", v.mousedown = v[T], v.mousemove = v[O], v.mouseup = v[A]), E || (l.allowPanToNext = !1)
            }
          }
        });
        var Yt, qt, Kt, Xt, Jt, Qt, ei, ti = function (t, i, n, r) {
          Yt && clearTimeout(Yt), Xt = !0, Kt = !0;
          var a;
          t.initialLayout ? (a = t.initialLayout, t.initialLayout = null) : a = l.getThumbBoundsFn && l.getThumbBoundsFn(h);
          var c = n ? l.hideAnimationDuration : l.showAnimationDuration, d = function () {
            Qe("initialZoom"), n ? (o.template.removeAttribute("style"), o.bg.removeAttribute("style")) : (Pe(1), i && (i.style.display = "block"), s.addClass(e, "pswp--animated-in"), Ae("initialZoom" + (n ? "OutEnd" : "InEnd"))), r && r(), Xt = !1
          };
          if (!c || !a || void 0 === a.x) return Ae("initialZoom" + (n ? "Out" : "In")), b = t.initialZoomLevel, He(fe, t.initialPosition), Ee(), e.style.opacity = n ? 0 : 1, Pe(1), void (c ? setTimeout(function () {
            d()
          }, c) : d());
          var p = function () {
            var i = u, r = !o.currItem.src || o.currItem.loadError || l.showHideOpacity;
            t.miniImg && (t.miniImg.style.webkitBackfaceVisibility = "hidden"), n || (b = a.w / t.w, fe.x = a.x, fe.y = a.y - F, o[r ? "template" : "bg"].style.opacity = .001, Ee()), et("initialZoom"), n && !i && s.removeClass(e, "pswp--animated-in"), r && (n ? s[(i ? "remove" : "add") + "Class"](e, "pswp--animate_opacity") : setTimeout(function () {
              s.addClass(e, "pswp--animate_opacity")
            }, 30)), Yt = setTimeout(function () {
              if (Ae("initialZoom" + (n ? "Out" : "In")), n) {
                var o = a.w / t.w, l = {x: fe.x, y: fe.y}, u = b, h = le, p = function (t) {
                  1 === t ? (b = o, fe.x = a.x, fe.y = a.y - W) : (b = (o - u) * t + u, fe.x = (a.x - l.x) * t + l.x, fe.y = (a.y - W - l.y) * t + l.y), Ee(), r ? e.style.opacity = 1 - t : Pe(h - t * h)
                };
                i ? it("initialZoom", 0, 1, c, s.easing.cubic.out, p, d) : (p(1), Yt = setTimeout(d, c + 20))
              } else b = t.initialZoomLevel, He(fe, t.initialPosition), Ee(), Pe(1), r ? e.style.opacity = 1 : Pe(1), Yt = setTimeout(d, c + 20)
            }, n ? 25 : 90)
          };
          p()
        }, ii = {}, ni = [], si = {
          index: 0,
          errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
          forceProgressiveLoading: !1,
          preload: [1, 1],
          getNumItemsFn: function () {
            return qt.length
          }
        }, oi = function () {
          return {center: {x: 0, y: 0}, max: {x: 0, y: 0}, min: {x: 0, y: 0}}
        }, ri = function (e, t, i) {
          var n = e.bounds;
          n.center.x = Math.round((ii.x - t) / 2), n.center.y = Math.round((ii.y - i) / 2) + e.vGap.top, n.max.x = t > ii.x ? Math.round(ii.x - t) : n.center.x, n.max.y = i > ii.y ? Math.round(ii.y - i) + e.vGap.top : n.center.y, n.min.x = t > ii.x ? 0 : n.center.x, n.min.y = i > ii.y ? e.vGap.top : n.center.y
        }, ai = function (e, t, i) {
          if (e.src && !e.loadError) {
            var n = !i;
            if (n && (e.vGap || (e.vGap = {
              top: 0,
              bottom: 0
            }), Ae("parseVerticalMargin", e)), ii.x = t.x, ii.y = t.y - e.vGap.top - e.vGap.bottom, n) {
              var s = ii.x / e.w, o = ii.y / e.h;
              e.fitRatio = s < o ? s : o;
              var r = l.scaleMode;
              "orig" === r ? i = 1 : "fit" === r && (i = e.fitRatio), i > 1 && (i = 1), e.initialZoomLevel = i, e.bounds || (e.bounds = oi())
            }
            if (!i) return;
            return ri(e, e.w * i, e.h * i), n && i === e.initialZoomLevel && (e.initialPosition = e.bounds.center), e.bounds
          }
          return e.w = e.h = 0, e.initialZoomLevel = e.fitRatio = 1, e.bounds = oi(), e.initialPosition = e.bounds.center, e.bounds
        }, li = function (e, t, i, n, s, r) {
          t.loadError || n && (t.imageAppended = !0, ui(t, n, t === o.currItem && ke), i.appendChild(n), r && setTimeout(function () {
            t && t.loaded && t.placeholder && (t.placeholder.style.display = "none", t.placeholder = null)
          }, 500))
        }, ci = function (e) {
          e.loading = !0, e.loaded = !1;
          var t = e.img = s.createEl("pswp__img", "img"), i = function () {
            e.loading = !1, e.loaded = !0, e.loadComplete ? e.loadComplete(e) : e.img = null, t.onload = t.onerror = null, t = null
          };
          return t.onload = i, t.onerror = function () {
            e.loadError = !0, i()
          }, t.src = e.src, t
        }, di = function (e, t) {
          if (e.src && e.loadError && e.container) return t && (e.container.innerHTML = ""), e.container.innerHTML = l.errorMsg.replace("%url%", e.src), !0
        }, ui = function (e, t, i) {
          if (e.src) {
            t || (t = e.container.lastChild);
            var n = i ? e.w : Math.round(e.w * e.fitRatio), s = i ? e.h : Math.round(e.h * e.fitRatio);
            e.placeholder && !e.loaded && (e.placeholder.style.width = n + "px", e.placeholder.style.height = s + "px"), t.style.width = n + "px", t.style.height = s + "px"
          }
        }, hi = function () {
          if (ni.length) {
            for (var e, t = 0; t < ni.length; t++) e = ni[t], e.holder.index === e.index && li(e.index, e.item, e.baseDiv, e.img, !1, e.clearPlaceholder);
            ni = []
          }
        };
        Ce("Controller", {
          publicMethods: {
            lazyLoadItem: function (e) {
              e = _e(e);
              var t = Jt(e);
              t && (!t.loaded && !t.loading || k) && (Ae("gettingData", e, t), t.src && ci(t))
            }, initController: function () {
              s.extend(l, si, !0), o.items = qt = i, Jt = o.getItemAt, Qt = l.getNumItemsFn, ei = l.loop, Qt() < 3 && (l.loop = !1), Oe("beforeChange", function (e) {
                var t, i = l.preload, n = null === e || e >= 0, s = Math.min(i[0], Qt()), r = Math.min(i[1], Qt());
                for (t = 1; t <= (n ? r : s); t++) o.lazyLoadItem(h + t);
                for (t = 1; t <= (n ? s : r); t++) o.lazyLoadItem(h - t)
              }), Oe("initialLayout", function () {
                o.currItem.initialLayout = l.getThumbBoundsFn && l.getThumbBoundsFn(h)
              }), Oe("mainScrollAnimComplete", hi), Oe("initialZoomInEnd", hi), Oe("destroy", function () {
                for (var e, t = 0; t < qt.length; t++) e = qt[t], e.container && (e.container = null), e.placeholder && (e.placeholder = null), e.img && (e.img = null), e.preloader && (e.preloader = null), e.loadError && (e.loaded = e.loadError = !1);
                ni = null
              })
            }, getItemAt: function (e) {
              return e >= 0 && (void 0 !== qt[e] && qt[e])
            }, allowProgressiveImg: function () {
              return l.forceProgressiveLoading || !E || l.mouseUsed || screen.width > 1200
            }, setContent: function (e, t) {
              l.loop && (t = _e(t));
              var i = o.getItemAt(e.index);
              i && (i.container = null);
              var n, r = o.getItemAt(t);
              if (!r) return void (e.el.innerHTML = "");
              Ae("gettingData", t, r), e.index = t, e.item = r;
              var a = r.container = s.createEl("pswp__zoom-wrap");
              if (!r.src && r.html && (r.html.tagName ? a.appendChild(r.html) : a.innerHTML = r.html), di(r), ai(r, me), !r.src || r.loadError || r.loaded) r.src && !r.loadError && (n = s.createEl("pswp__img", "img"), n.style.opacity = 1, n.src = r.src, ui(r, n), li(t, r, a, n, !0)); else {
                if (r.loadComplete = function (i) {
                  if (c) {
                    if (e && e.index === t) {
                      if (di(i, !0)) return i.loadComplete = i.img = null, ai(i, me), De(i), void (e.index === h && o.updateCurrZoomItem());
                      i.imageAppended ? !Xt && i.placeholder && (i.placeholder.style.display = "none", i.placeholder = null) : L.transform && (se || Xt) ? ni.push({
                        item: i,
                        baseDiv: a,
                        img: i.img,
                        index: t,
                        holder: e,
                        clearPlaceholder: !0
                      }) : li(t, i, a, i.img, se || Xt, !0)
                    }
                    i.loadComplete = null, i.img = null, Ae("imageLoadComplete", t, i)
                  }
                }, s.features.transform) {
                  var d = "pswp__img pswp__img--placeholder";
                  d += r.msrc ? "" : " pswp__img--placeholder--blank";
                  var u = s.createEl(d, r.msrc ? "img" : "");
                  r.msrc && (u.src = r.msrc), ui(r, u), a.appendChild(u), r.placeholder = u
                }
                r.loading || ci(r), o.allowProgressiveImg() && (!Kt && L.transform ? ni.push({
                  item: r,
                  baseDiv: a,
                  img: r.img,
                  index: t,
                  holder: e
                }) : li(t, r, a, r.img, !0, !0))
              }
              Kt || t !== h ? De(r) : (ne = a.style, ti(r, n || r.img)), e.el.innerHTML = "", e.el.appendChild(a)
            }, cleanSlide: function (e) {
              e.img && (e.img.onload = e.img.onerror = null), e.loaded = e.loading = e.img = e.imageAppended = !1
            }
          }
        });
        var pi, fi = {}, mi = function (e, t, i) {
          var n = document.createEvent("CustomEvent"),
              s = {origEvent: e, target: e.target, releasePoint: t, pointerType: i || "touch"};
          n.initCustomEvent("pswpTap", !0, !0, s), e.target.dispatchEvent(n)
        };
        Ce("Tap", {
          publicMethods: {
            initTap: function () {
              Oe("firstTouchStart", o.onTapStart), Oe("touchRelease", o.onTapRelease), Oe("destroy", function () {
                fi = {}, pi = null
              })
            }, onTapStart: function (e) {
              e.length > 1 && (clearTimeout(pi), pi = null)
            }, onTapRelease: function (e, t) {
              if (t && !q && !V && !Je) {
                var i = t;
                if (pi && (clearTimeout(pi), pi = null, St(i, fi))) return void Ae("doubleTap", i);
                if ("mouse" === t.type) return void mi(e, t, "mouse");
                var n = e.target.tagName.toUpperCase();
                if ("BUTTON" === n || s.hasClass(e.target, "pswp__single-tap")) return void mi(e, t);
                He(fi, i), pi = setTimeout(function () {
                  mi(e, t), pi = null
                }, 300)
              }
            }
          }
        });
        var gi;
        Ce("DesktopZoom", {
          publicMethods: {
            initDesktopZoom: function () {
              H || (E ? Oe("mouseUsed", function () {
                o.setupDesktopZoom()
              }) : o.setupDesktopZoom(!0))
            }, setupDesktopZoom: function (t) {
              gi = {};
              var i = "wheel mousewheel DOMMouseScroll";
              Oe("bindEvents", function () {
                s.bind(e, i, o.handleMouseWheel)
              }), Oe("unbindEvents", function () {
                gi && s.unbind(e, i, o.handleMouseWheel)
              }), o.mouseZoomedIn = !1;
              var n, r = function () {
                o.mouseZoomedIn && (s.removeClass(e, "pswp--zoomed-in"), o.mouseZoomedIn = !1), b < 1 ? s.addClass(e, "pswp--zoom-allowed") : s.removeClass(e, "pswp--zoom-allowed"), a()
              }, a = function () {
                n && (s.removeClass(e, "pswp--dragging"), n = !1)
              };
              Oe("resize", r), Oe("afterChange", r), Oe("pointerDown", function () {
                o.mouseZoomedIn && (n = !0, s.addClass(e, "pswp--dragging"))
              }), Oe("pointerUp", a), t || r()
            }, handleMouseWheel: function (e) {
              if (b <= o.currItem.fitRatio) return l.modal && (!l.closeOnScroll || Je || U ? e.preventDefault() : P && Math.abs(e.deltaY) > 2 && (u = !0, o.close())), !0;
              if (e.stopPropagation(), gi.x = 0, "deltaX" in e) 1 === e.deltaMode ? (gi.x = 18 * e.deltaX, gi.y = 18 * e.deltaY) : (gi.x = e.deltaX, gi.y = e.deltaY); else if ("wheelDelta" in e) e.wheelDeltaX && (gi.x = -.16 * e.wheelDeltaX), e.wheelDeltaY ? gi.y = -.16 * e.wheelDeltaY : gi.y = -.16 * e.wheelDelta; else {
                if (!("detail" in e)) return;
                gi.y = e.detail
              }
              Ge(b, !0);
              var t = fe.x - gi.x, i = fe.y - gi.y;
              (l.modal || t <= ie.min.x && t >= ie.max.x && i <= ie.min.y && i >= ie.max.y) && e.preventDefault(), o.panTo(t, i)
            }, toggleDesktopZoom: function (t) {
              t = t || {x: me.x / 2 + ve.x, y: me.y / 2 + ve.y};
              var i = l.getDoubleTapZoom(!0, o.currItem), n = b === i;
              o.mouseZoomedIn = !n, o.zoomTo(n ? o.currItem.initialZoomLevel : i, t, 333), s[(n ? "remove" : "add") + "Class"](e, "pswp--zoomed-in")
            }
          }
        });
        var vi, bi, wi, yi, xi, Si, ki, Ci, _i, Ti, Oi, Ai, Ii = {history: !0, galleryUID: 1}, Pi = function () {
          return Oi.hash.substring(1)
        }, Mi = function () {
          vi && clearTimeout(vi), wi && clearTimeout(wi)
        }, Ei = function () {
          var e = Pi(), t = {};
          if (e.length < 5) return t;
          var i, n = e.split("&");
          for (i = 0; i < n.length; i++) if (n[i]) {
            var s = n[i].split("=");
            s.length < 2 || (t[s[0]] = s[1])
          }
          if (l.galleryPIDs) {
            var o = t.pid;
            for (t.pid = 0, i = 0; i < qt.length; i++) if (qt[i].pid === o) {
              t.pid = i;
              break
            }
          } else t.pid = parseInt(t.pid, 10) - 1;
          return t.pid < 0 && (t.pid = 0), t
        }, Di = function () {
          if (wi && clearTimeout(wi), Je || U) return void (wi = setTimeout(Di, 500));
          yi ? clearTimeout(bi) : yi = !0;
          var e = h + 1, t = Jt(h);
          t.hasOwnProperty("pid") && (e = t.pid);
          var i = ki + "&gid=" + l.galleryUID + "&pid=" + e;
          Ci || Oi.hash.indexOf(i) === -1 && (Ti = !0);
          var n = Oi.href.split("#")[0] + "#" + i;
          Ai ? "#" + i !== window.location.hash && history[Ci ? "replaceState" : "pushState"]("", document.title, n) : Ci ? Oi.replace(n) : Oi.hash = i, Ci = !0, bi = setTimeout(function () {
            yi = !1
          }, 60)
        };
        Ce("History", {
          publicMethods: {
            initHistory: function () {
              if (s.extend(l, Ii, !0), l.history) {
                Oi = window.location, Ti = !1, _i = !1, Ci = !1, ki = Pi(), Ai = "pushState" in history, ki.indexOf("gid=") > -1 && (ki = ki.split("&gid=")[0], ki = ki.split("?gid=")[0]), Oe("afterChange", o.updateURL), Oe("unbindEvents", function () {
                  s.unbind(window, "hashchange", o.onHashChange)
                });
                var e = function () {
                  Si = !0, _i || (Ti ? history.back() : ki ? Oi.hash = ki : Ai ? history.pushState("", document.title, Oi.pathname + Oi.search) : Oi.hash = ""), Mi()
                };
                Oe("unbindEvents", function () {
                  u && e()
                }), Oe("destroy", function () {
                  Si || e()
                }), Oe("firstUpdate", function () {
                  h = Ei().pid
                });
                var t = ki.indexOf("pid=");
                t > -1 && (ki = ki.substring(0, t), "&" === ki.slice(-1) && (ki = ki.slice(0, -1))), setTimeout(function () {
                  c && s.bind(window, "hashchange", o.onHashChange)
                }, 40)
              }
            }, onHashChange: function () {
              return Pi() === ki ? (_i = !0, void o.close()) : void (yi || (xi = !0, o.goTo(Ei().pid), xi = !1))
            }, updateURL: function () {
              Mi(), xi || (Ci ? vi = setTimeout(Di, 800) : Di())
            }
          }
        }), s.extend(o, nt)
      };
      return e
    })
  }, 618: function (e, t, i) {
    var n, s;/*! PhotoSwipe Default UI - 4.1.1 - 2015-12-24
	* http://photoswipe.com
	* Copyright (c) 2015 Dmitry Semenov; */
    !function (o, r) {
      n = r, s = "function" == typeof n ? n.call(t, i, t, e) : n, !(void 0 !== s && (e.exports = s))
    }(this, function () {
      "use strict";
      var e = function (e, t) {
        var i, n, s, o, r, a, l, c, d, u, h, p, f, m, g, v, b, w, y, x = this, S = !1, k = !0, C = !0, _ = {
          barsSize: {top: 44, bottom: "auto"},
          closeElClasses: ["item", "caption", "zoom-wrap", "ui", "top-bar"],
          timeToIdle: 4e3,
          timeToIdleOutside: 1e3,
          loadingIndicatorDelay: 1e3,
          addCaptionHTMLFn: function (e, t) {
            return e.title ? (t.children[0].innerHTML = e.title, !0) : (t.children[0].innerHTML = "", !1)
          },
          closeEl: !0,
          captionEl: !0,
          fullscreenEl: !0,
          zoomEl: !0,
          shareEl: !0,
          counterEl: !0,
          arrowEl: !0,
          preloaderEl: !0,
          tapToClose: !1,
          tapToToggleControls: !0,
          clickToCloseNonZoomable: !0,
          shareButtons: [{
            id: "facebook",
            label: "Share on Facebook",
            url: "https://www.facebook.com/sharer/sharer.php?u={{url}}"
          }, {
            id: "twitter",
            label: "Tweet",
            url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}"
          }, {
            id: "pinterest",
            label: "Pin it",
            url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"
          }, {id: "download", label: "Download image", url: "{{raw_image_url}}", download: !0}],
          getImageURLForShare: function () {
            return e.currItem.src || ""
          },
          getPageURLForShare: function () {
            return window.location.href
          },
          getTextForShare: function () {
            return e.currItem.title || ""
          },
          indexIndicatorSep: " / ",
          fitControlsWidth: 1200
        }, T = function (e) {
          if (v) return !0;
          e = e || window.event, g.timeToIdle && g.mouseUsed && !d && F();
          for (var i, n, s = e.target || e.srcElement, o = s.getAttribute("class") || "", r = 0; r < $.length; r++) i = $[r], i.onTap && o.indexOf("pswp__" + i.name) > -1 && (i.onTap(), n = !0);
          if (n) {
            e.stopPropagation && e.stopPropagation(), v = !0;
            var a = t.features.isOldAndroid ? 600 : 30;
            b = setTimeout(function () {
              v = !1
            }, a)
          }
        }, O = function () {
          return !e.likelyTouchDevice || g.mouseUsed || screen.width > g.fitControlsWidth
        }, A = function (e, i, n) {
          t[(n ? "add" : "remove") + "Class"](e, "pswp__" + i)
        }, I = function () {
          var e = 1 === g.getNumItemsFn();
          e !== m && (A(n, "ui--one-slide", e), m = e)
        }, P = function () {
          A(l, "share-modal--hidden", C)
        }, M = function () {
          return C = !C, C ? (t.removeClass(l, "pswp__share-modal--fade-in"), setTimeout(function () {
            C && P()
          }, 300)) : (P(), setTimeout(function () {
            C || t.addClass(l, "pswp__share-modal--fade-in")
          }, 30)), C || D(), !1
        }, E = function (t) {
          t = t || window.event;
          var i = t.target || t.srcElement;
          return e.shout("shareLinkClick", t, i), !!i.href && (!!i.hasAttribute("download") || (window.open(i.href, "pswp_share", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" + (window.screen ? Math.round(screen.width / 2 - 275) : 100)), C || M(), !1))
        }, D = function () {
          for (var e, t, i, n, s, o = "", r = 0; r < g.shareButtons.length; r++) e = g.shareButtons[r], i = g.getImageURLForShare(e), n = g.getPageURLForShare(e), s = g.getTextForShare(e), t = e.url.replace("{{url}}", encodeURIComponent(n)).replace("{{image_url}}", encodeURIComponent(i)).replace("{{raw_image_url}}", i).replace("{{text}}", encodeURIComponent(s)), o += '<a href="' + t + '" target="_blank" class="pswp__share--' + e.id + '"' + (e.download ? "download" : "") + ">" + e.label + "</a>", g.parseShareButtonOut && (o = g.parseShareButtonOut(e, o));
          l.children[0].innerHTML = o, l.children[0].onclick = E
        }, z = function (e) {
          for (var i = 0; i < g.closeElClasses.length; i++) if (t.hasClass(e, "pswp__" + g.closeElClasses[i])) return !0
        }, R = 0, F = function () {
          clearTimeout(y), R = 0, d && x.setIdle(!1)
        }, H = function (e) {
          e = e ? e : window.event;
          var t = e.relatedTarget || e.toElement;
          t && "HTML" !== t.nodeName || (clearTimeout(y), y = setTimeout(function () {
            x.setIdle(!0)
          }, g.timeToIdleOutside))
        }, W = function () {
          g.fullscreenEl && !t.features.isOldAndroid && (i || (i = x.getFullscreenAPI()), i ? (t.bind(document, i.eventK, x.updateFullscreen), x.updateFullscreen(), t.addClass(e.template, "pswp--supports-fs")) : t.removeClass(e.template, "pswp--supports-fs"))
        }, L = function () {
          g.preloaderEl && (j(!0), u("beforeChange", function () {
            clearTimeout(f), f = setTimeout(function () {
              e.currItem && e.currItem.loading ? (!e.allowProgressiveImg() || e.currItem.img && !e.currItem.img.naturalWidth) && j(!1) : j(!0)
            }, g.loadingIndicatorDelay)
          }), u("imageLoadComplete", function (t, i) {
            e.currItem === i && j(!0)
          }))
        }, j = function (e) {
          p !== e && (A(h, "preloader--active", !e), p = e)
        }, N = function (e) {
          var i = e.vGap;
          if (O()) {
            var r = g.barsSize;
            if (g.captionEl && "auto" === r.bottom) if (o || (o = t.createEl("pswp__caption pswp__caption--fake"), o.appendChild(t.createEl("pswp__caption__center")), n.insertBefore(o, s), t.addClass(n, "pswp__ui--fit")), g.addCaptionHTMLFn(e, o, !0)) {
              var a = o.clientHeight;
              i.bottom = parseInt(a, 10) || 44
            } else i.bottom = r.top; else i.bottom = "auto" === r.bottom ? 0 : r.bottom;
            i.top = r.top
          } else i.top = i.bottom = 0
        }, B = function () {
          g.timeToIdle && u("mouseUsed", function () {
            t.bind(document, "mousemove", F), t.bind(document, "mouseout", H), w = setInterval(function () {
              R++, 2 === R && x.setIdle(!0)
            }, g.timeToIdle / 2)
          })
        }, G = function () {
          u("onVerticalDrag", function (e) {
            k && e < .95 ? x.hideControls() : !k && e >= .95 && x.showControls()
          });
          var e;
          u("onPinchClose", function (t) {
            k && t < .9 ? (x.hideControls(), e = !0) : e && !k && t > .9 && x.showControls()
          }), u("zoomGestureEnded", function () {
            e = !1, e && !k && x.showControls()
          })
        }, $ = [{
          name: "caption", option: "captionEl", onInit: function (e) {
            s = e
          }
        }, {
          name: "share-modal", option: "shareEl", onInit: function (e) {
            l = e
          }, onTap: function () {
            M()
          }
        }, {
          name: "button--share", option: "shareEl", onInit: function (e) {
            a = e
          }, onTap: function () {
            M()
          }
        }, {name: "button--zoom", option: "zoomEl", onTap: e.toggleDesktopZoom}, {
          name: "counter",
          option: "counterEl",
          onInit: function (e) {
            r = e
          }
        }, {name: "button--close", option: "closeEl", onTap: e.close}, {
          name: "button--arrow--left",
          option: "arrowEl",
          onTap: e.prev
        }, {name: "button--arrow--right", option: "arrowEl", onTap: e.next}, {
          name: "button--fs",
          option: "fullscreenEl",
          onTap: function () {
            i.isFullscreen() ? i.exit() : i.enter()
          }
        }, {
          name: "preloader", option: "preloaderEl", onInit: function (e) {
            h = e
          }
        }], Z = function () {
          var e, i, s, o = function (n) {
            if (n) for (var o = n.length, r = 0; r < o; r++) {
              e = n[r], i = e.className;
              for (var a = 0; a < $.length; a++) s = $[a], i.indexOf("pswp__" + s.name) > -1 && (g[s.option] ? (t.removeClass(e, "pswp__element--disabled"), s.onInit && s.onInit(e)) : t.addClass(e, "pswp__element--disabled"))
            }
          };
          o(n.children);
          var r = t.getChildByClass(n, "pswp__top-bar");
          r && o(r.children)
        };
        x.init = function () {
          t.extend(e.options, _, !0), g = e.options, n = t.getChildByClass(e.scrollWrap, "pswp__ui"), u = e.listen, G(), u("beforeChange", x.update), u("doubleTap", function (t) {
            var i = e.currItem.initialZoomLevel;
            e.getZoomLevel() !== i ? e.zoomTo(i, t, 333) : e.zoomTo(g.getDoubleTapZoom(!1, e.currItem), t, 333)
          }), u("preventDragEvent", function (e, t, i) {
            var n = e.target || e.srcElement;
            n && n.getAttribute("class") && e.type.indexOf("mouse") > -1 && (n.getAttribute("class").indexOf("__caption") > 0 || /(SMALL|STRONG|EM)/i.test(n.tagName)) && (i.prevent = !1)
          }), u("bindEvents", function () {
            t.bind(n, "pswpTap click", T), t.bind(e.scrollWrap, "pswpTap", x.onGlobalTap), e.likelyTouchDevice || t.bind(e.scrollWrap, "mouseover", x.onMouseOver)
          }), u("unbindEvents", function () {
            C || M(), w && clearInterval(w), t.unbind(document, "mouseout", H), t.unbind(document, "mousemove", F), t.unbind(n, "pswpTap click", T), t.unbind(e.scrollWrap, "pswpTap", x.onGlobalTap), t.unbind(e.scrollWrap, "mouseover", x.onMouseOver), i && (t.unbind(document, i.eventK, x.updateFullscreen), i.isFullscreen() && (g.hideAnimationDuration = 0, i.exit()), i = null)
          }), u("destroy", function () {
            g.captionEl && (o && n.removeChild(o), t.removeClass(s, "pswp__caption--empty")), l && (l.children[0].onclick = null), t.removeClass(n, "pswp__ui--over-close"), t.addClass(n, "pswp__ui--hidden"), x.setIdle(!1)
          }), g.showAnimationDuration || t.removeClass(n, "pswp__ui--hidden"), u("initialZoomIn", function () {
            g.showAnimationDuration && t.removeClass(n, "pswp__ui--hidden")
          }), u("initialZoomOut", function () {
            t.addClass(n, "pswp__ui--hidden")
          }), u("parseVerticalMargin", N), Z(), g.shareEl && a && l && (C = !0), I(), B(), W(), L()
        }, x.setIdle = function (e) {
          d = e, A(n, "ui--idle", e)
        }, x.update = function () {
          k && e.currItem ? (x.updateIndexIndicator(), g.captionEl && (g.addCaptionHTMLFn(e.currItem, s), A(s, "caption--empty", !e.currItem.title)), S = !0) : S = !1, C || M(), I()
        }, x.updateFullscreen = function (n) {
          n && setTimeout(function () {
            e.setScrollOffset(0, t.getScrollY())
          }, 50), t[(i.isFullscreen() ? "add" : "remove") + "Class"](e.template, "pswp--fs")
        }, x.updateIndexIndicator = function () {
          g.counterEl && (r.innerHTML = e.getCurrentIndex() + 1 + g.indexIndicatorSep + g.getNumItemsFn())
        }, x.onGlobalTap = function (i) {
          i = i || window.event;
          var n = i.target || i.srcElement;
          if (!v) if (i.detail && "mouse" === i.detail.pointerType) {
            if (z(n)) return void e.close();
            t.hasClass(n, "pswp__img") && (1 === e.getZoomLevel() && e.getZoomLevel() <= e.currItem.fitRatio ? g.clickToCloseNonZoomable && e.close() : e.toggleDesktopZoom(i.detail.releasePoint))
          } else if (g.tapToToggleControls && (k ? x.hideControls() : x.showControls()), g.tapToClose && (t.hasClass(n, "pswp__img") || z(n))) return void e.close()
        }, x.onMouseOver = function (e) {
          e = e || window.event;
          var t = e.target || e.srcElement;
          A(n, "ui--over-close", z(t))
        }, x.hideControls = function () {
          t.addClass(n, "pswp__ui--hidden"), k = !1
        }, x.showControls = function () {
          k = !0, S || x.update(), t.removeClass(n, "pswp__ui--hidden")
        }, x.supportsFullscreen = function () {
          var e = document;
          return !!(e.exitFullscreen || e.mozCancelFullScreen || e.webkitExitFullscreen || e.msExitFullscreen)
        }, x.getFullscreenAPI = function () {
          var t, i = document.documentElement, n = "fullscreenchange";
          return i.requestFullscreen ? t = {
            enterK: "requestFullscreen",
            exitK: "exitFullscreen",
            elementK: "fullscreenElement",
            eventK: n
          } : i.mozRequestFullScreen ? t = {
            enterK: "mozRequestFullScreen",
            exitK: "mozCancelFullScreen",
            elementK: "mozFullScreenElement",
            eventK: "moz" + n
          } : i.webkitRequestFullscreen ? t = {
            enterK: "webkitRequestFullscreen",
            exitK: "webkitExitFullscreen",
            elementK: "webkitFullscreenElement",
            eventK: "webkit" + n
          } : i.msRequestFullscreen && (t = {
            enterK: "msRequestFullscreen",
            exitK: "msExitFullscreen",
            elementK: "msFullscreenElement",
            eventK: "MSFullscreenChange"
          }), t && (t.enter = function () {
            return c = g.closeOnScroll, g.closeOnScroll = !1, "webkitRequestFullscreen" !== this.enterK ? e.template[this.enterK]() : void e.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)
          }, t.exit = function () {
            return g.closeOnScroll = c, document[this.exitK]()
          }, t.isFullscreen = function () {
            return document[this.elementK]
          }), t
        }
      };
      return e
    })
  }, 619: function (e, t, i) {
    e.exports = i.p + "images/gastro-placeholder.png"
  }, 620: function (e, t, i) {
    (function (e) {
      "use strict";
      var t;
      t = i(586), e.widget("gastro.pinned", {
        options: {
          initialOffset: -20,
          navbarStackHeight: 56,
          duration: 0,
          showIndicators: !0,
          parentElement: ".gst-row",
          referenceElement: ""
        }, _create: function () {
          var i, n, s, o, r, a;
          if (this.windowWidth = e(window).width(), this.isResponsive = GastroApp.isResponsive, this.mobileScreenWidth = GastroApp.mobileScreenWidth, GastroApp.isMobileOrTablet && this.isResponsive && this.windowWidth <= this.mobileScreenWidth) ; else if (this.duration = this.options.duration, this.pinned = !0, o = this, (this.element.attr("data-pinned") || this.options.referenceElement.length) && (s = this.options.referenceElement ? this.options.referenceElement : this.element.data("pinned"), this.relatedElement = this.element.closest(this.options.parentElement).find(s), this.relatedElement.length)) return r = this.element.data("pinned_offset"), r || 0 === r ? this.offset = -parseInt(r) : (this.offset = this.options.initialOffset, i = GastroApp.mainNavbar, i.attr("data-fixed") && (a = i.data("transition"), n = "default" === a ? i.hasClass("gst-navbar--stacked") ? i.attr("data-stacked_menu_height") ? i.data("stacked_menu_height") : this.options.navbarStackHeight : i.outerHeight() : i.data("height_fixed"), this.offset -= n)), this.scene = new t.Scene({
            triggerElement: this.element[0],
            triggerHook: "onLeave",
            duration: this.duration,
            offset: this.offset
          }), this.scene.addTo(GastroApp.smController), this.isResponsive ? this.windowWidth > this.mobileScreenWidth ? setTimeout(function () {
            return o._setPin()
          }, 1e3) : this.pinned = !1 : setTimeout(function () {
            return o._setPin()
          }, 1e3), e(window).on("resize", function (e) {
            return clearTimeout(o.resizeTimer), o.resizeTimer = setTimeout(function () {
              return o._windowResize()
            }, 500)
          })
        }, calculateHeight: function () {
          var e, t;
          return t = this.relatedElement.outerHeight(), e = this.element.outerHeight(), this.isResponsive && t < e ? this._removePin() : this.duration = t - e
        }, updateDuration: function () {
          var e;
          return this.calculateHeight(), this.scene.duration(this.duration), e = this.element.css("top")
        }, _windowResize: function () {
          var t;
          return t = e(window).width(), this.isResponsive ? t > this.mobileScreenWidth ? (this.updateDuration(), this.windowWidth <= this.mobileScreenWidth && !this.pinned && this._setPin()) : t <= this.mobileScreenWidth && this.windowWidth > this.mobileScreenWidth && this._removePin() : this.updateDuration(), this.windowWidth = t
        }, _setPin: function () {
          return this.scene.setPin(this.element[0]), this.updateDuration(), this.pinned = !0
        }, _removePin: function () {
          return this.scene.removePin(!0), this.pinned = !1
        }
      }), e.widget.bridge("gstPinned", e.gastro.pinned)
    }).call(t, i(8))
  }, 621: function (e, t, i) {
    (function (e) {
      "use strict";
      e.widget("gastro.productGallery", {
        _create: function () {
          var e;
          if (e = this.element.data("action"), this.element.gstGallery(), "zoom" === e) return this._on(this.element, {"mousemove .gst-gallery-item": "_mouseMoveZoom"})
        }, _mouseMoveZoom: function (t) {
          var i, n, s, o, r, a, l, c, d, u, h, p;
          if (s = e(t.currentTarget), u = s.find("img:last-child"), c = s.offset().left, d = s.offset().top, r = s.width(), o = s.height(), h = u.width(), p = u.height(), a = h / r - 1, l = p / o - 1, u.length > 0) return i = (t.pageX - c) * a, i < 0 && (i = 0), i > h && (i = h), n = (t.pageY - d) * l, n < 0 && (n = 0), n > p && (n = p), u.css({
            left: -i,
            top: -n
          })
        }
      }), e.widget.bridge("gstProductGallery", e.gastro.productGallery)
    }).call(t, i(8))
  }, 622: function (e, t, i) {
    (function (e) {
      "use strict";
      e.widget("gastro.row", {
        options: {isMobileOrTablet: !1, isResponsive: !0}, _create: function () {
          var t, i, n;
          if (this.windowWidth = e(window).width(), this.isResponsive = GastroApp.isResponsive, this.mobileScreenWidth = GastroApp.mobileScreenWidth, GastroApp.isMobileOrTablet && this.isResponsive && (this.windowWidth < this.mobileScreenWidth || this.windowWidth === this.mobileScreenWidth)) ; else if (t = this.element.children().children(".js-box-fitted"), t.length > 1) return n = this, i = {}, t.each(function (t, n) {
            var s, o;
            return s = e(n), o = s.data("group"), i.hasOwnProperty(o) ? i[o].push(s) : i[o] = [s]
          }), n._doEqualHeight(i), e(window).on("resize", function (e) {
            return n._windowResize(i)
          })
        }, _doEqualHeight: function (t, i) {
          var n;
          return n = this, e.each(t, function (e, t) {
            if (t.length <= 1) ; else {
              if ("unset" === i) return n._unsetEqualHeight(t);
              if (n.isResponsive && n.windowWidth > n.mobileScreenWidth || !n.isResponsive) return n._setEqualHeight(t)
            }
          })
        }, _windowResize: function (t) {
          var i, n;
          return i = this, n = e(window).width(), n <= this.mobileScreenWidth && this.windowWidth > this.mobileScreenWidth ? this._doEqualHeight(t, "unset") : (clearTimeout(i.resizeTimer), i.resizeTimer = setTimeout(function () {
            return i._doEqualHeight(t)
          }, 200)), this.windowWidth = n
        }, _setEqualHeight: function (t) {
          var i, n;
          return n = 0, i = [], e.each(t, function (e, t) {
            var s;
            return t.children(".gst-box-inner").css({
              height: "",
              "line-height": ""
            }), s = t.outerHeight(), i[e] = s - t.height(), n = s > n ? s : n
          }), e.each(t, function (e, t) {
            var s;
            return s = n - i[e], t.children(".gst-box-inner").css({height: s + "px", "line-height": s + "px"})
          })
        }, _unsetEqualHeight: function (t) {
          return e.each(t, function (t, i) {
            var n, s;
            return n = i.children(".gst-box-inner"), n.css({
              height: "",
              "line-height": ""
            }), s = n.data("height"), s = e.isNumeric(s) ? s + "px" : s, n.css({height: s, "line-height": s})
          })
        }
      }), e.widget.bridge("gstRow", e.gastro.row)
    }).call(t, i(8))
  }, 623: function (e, t, i) {
    (function (e) {
      "use strict";
      e.widget("gastro.search", {
        options: {delay: 0}, _create: function () {
          return this.body = GastroApp.body, this.main = this.element.siblings(".gst-navbar-search"), this.closeButton = this.main.find(".gst-close-button"), this.collapsedMenu = this.element.closest(".gst-collapsed-menu"), this.isFullMenu = this.collapsedMenu.hasClass("gst-collapsed-menu--full"), this.isClassicMenu = this.collapsedMenu.hasClass("gst-collapsed-menu--classic"), this.isMinimalMenu = this.collapsedMenu.hasClass("gst-collapsed-menu--minimal"), this.navbar = this.element.closest("nav"), this.isFixed = !(!this.navbar.hasClass("gst-side-navbar") && !this.navbar.data("fixed")), this._on(this.element, {click: "_searchClicked"}), this._on(this.closeButton, {click: "_closeClicked"})
        }, _searchClicked: function (e) {
          var t, i;
          return e.preventDefault(), t = this, i = this.isFixed || this.isClassicMenu ? 300 : this.options.delay, setTimeout(function () {
            return t.element.next().find('input[type="text"]').focus()
          }, 850), this.isClassicMenu && !this.collapsedMenu.hasClass("gst-no-transform") ? this.collapsedMenu.addClass("gst-no-transform") : this.isClassicMenu || this.body.hasClass("gst-unscrollable") || this.body.addClass("gst-unscrollable"), this.navbar.hasClass("gst-no-transform") || this.navbar.addClass("gst-no-transform"), setTimeout(function () {
            if (t.main.addClass("active"), t.closeButton.addClass("gst-closed"), !t.isClassicMenu) return t.collapsedMenu.css("z-index", 500), t.collapsedMenu.css("overflow", "visible")
          }, i)
        }, _closeClicked: function (e) {
          var t, i;
          return e.preventDefault(), t = this, this.main.removeClass("active"), this.closeButton.removeClass("gst-closed"), this.isClassicMenu || (this.collapsedMenu.css("z-index", ""), this.collapsedMenu.css("overflow", "")), i = this.isFixed || this.isClassicMenu ? 300 : this.options.delay, setTimeout(function () {
            return t.isClassicMenu ? t.collapsedMenu.removeClass("gst-no-transform") : t.isFullMenu ? void 0 : t.body.removeClass("gst-unscrollable")
          }, i)
        }
      }), e.widget.bridge("gstSearch", e.gastro.search)
    }).call(t, i(8))
  }, 624: function (e, t, i) {
    (function (e) {
      "use strict";
      e.widget("gastro.setSize", {
        options: {
          type: "full",
          itemWrapper: "",
          pair: "",
          addLineHeight: !0,
          mobileNavbarHeight: 60,
          screenPercent: 100,
          screenOffset: 0,
          fluid: !0
        }, _create: function () {
          var t, i;
          if (this.type = this.options.type, this.hasPair = this.options.pair.length, this.options.itemWrapper.length ? this.itemWrapper = this.element.find(this.options.itemWrapper) : this.itemWrapper = this.element, this.element.length) return t = GastroApp.header, this.tabletScreenWidth = GastroApp.tabletScreenWidth, this.mobileScreenWidth = GastroApp.mobileScreenWidth, t.length ? (this.hasHeader = !0, this.isNavbarTransparent = t.data("transparent"), this.headerHeight = this.isNavbarTransparent ? 0 : t.outerHeight()) : (this.hasHeader = !1, this.headerHeight = 0), this.screenPercent = this.element.data("screen_percent") ? this.element.data("screen_percent") / 100 : this.options.screenPercent / 100, i = this.element.data("screen_offset") ? this.element.data("screen_offset") : this.options.screenOffset, "header" === i ? (this.type = "header", this.offset = 0) : this.offset = parseInt(i), this._setFullHeight(), this._on(e(window), {resize: e.proxy(this._setFullHeight)})
        }, _setFullHeight: function () {
          var t, i, n, s, o, r, a;
          if (this.windowWidth = e(window).width(), t = this.windowWidth > this.tabletScreenWidth ? GastroApp.frameWidth : 0, i = (e(window).height() - 2 * t) * this.screenPercent - this.offset, "header" === this.type && (i -= this._calculateHeaderHeight()), !this.options.fluid && this.windowWidth > this.tabletScreenWidth ? a = i + "px" : (this.element.css({
            height: "auto",
            "line-height": "inherit"
          }), this.itemWrapper.css("display", "block"), this.hasPair ? (this.options.pair.css({
            height: "auto",
            "line-height": "inherit"
          }), r = this.options.itemWrapper.length ? this.options.pair.find(this.options.itemWrapper) : this.options.pair, r.css("display", "block"), s = this.options.pair.outerHeight(), n = this.windowWidth > this.mobileScreenWidth ? Math.max(this.element.outerHeight(), s) : this.element.outerHeight(), r.css("display", "")) : n = this.element.outerHeight(), this.itemWrapper.css("display", ""), a = Math.max(n, i) + "px"), this.element.css("height", a), this.options.addLineHeight ? this.element.css("line-height", a) : this.element.css("line-height", ""), this.hasPair) return o = this.windowWidth > this.mobileScreenWidth ? a : Math.max(s, i) + "px", this.options.pair.css("height", o), this.options.addLineHeight ? this.options.pair.css("line-height", o) : this.options.pair.css("line-height", "")
        }, _calculateHeaderHeight: function () {
          var e, t;
          return GastroApp.isResponsive && this.hasHeader ? (e = this.isNavbarTransparent ? 0 : this.options.mobileNavbarHeight, t = this.windowWidth > this.tabletScreenWidth ? this.headerHeight : e) : t = this.headerHeight, t
        }
      }), e.widget.bridge("gstSetSize", e.gastro.setSize)
    }).call(t, i(8))
  }, 625: function (e, t, i) {
    (function (e) {
      "use strict";
      e.widget("gastro.shopDropdown", {
        _create: function () {
          var t, i, n, s, o, r;
          return i = this.element, i.prepend('<div class="gst-dropdown"></div>'), t = i.find(".gst-dropdown"), o = i.find("option[selected]"), s = i.find("option"), r = '<button class="gst-dropdown-display gst-p-text-color gst-p-bg-bg gst-p-border-border">\n  <span>' + o.text() + '</span>\n  <i class="twf twf-caret-down"></i>\n</button>', n = '<ul class="gst-dropdown-menu gst-p-bg-bg gst-p-border-border"></ul>', t.append(r + n), s.each(function () {
            var t;
            return t = e(this).val() === o.val() ? ' class="active"' : "", i.find(".gst-dropdown-menu").append("<li" + t + '><a class="gst-p-text-color" href="#" data-value="' + e(this).val() + '">' + e(this).text() + "</a></li>")
          }), i.find(".gst-dropdown-menu").hide(), this._on(this.element, {
            "click button": "_buttonClicked",
            "click a": "_dropdownClicked"
          })
        }, _buttonClicked: function (e) {
          return e.preventDefault(), this.element.find(".gst-dropdown-menu").toggle()
        }, _dropdownClicked: function (t) {
          var i, n, s, o;
          if (t.preventDefault(), i = e(t.currentTarget), n = i.parent(), o = i.data("value"), !n.hasClass("active")) return n.addClass("active"), n.siblings().removeClass("active"), s = i.html(), this.element.find("button span").html(s), this.element.find(".gst-dropdown-menu").hide(), this.element.find("select").val(o), this.element.find("select").change()
        }
      }), e.widget.bridge("gstShopDropdown", e.gastro.shopDropdown)
    }).call(t, i(8))
  }, 626: function (e, t, i) {
    (function (e) {
      "use strict";
      e.widget("gastro.sideNavbar", {
        _create: function () {
          var e, t;
          if (t = this, this.element.gstCollapsedMenu(), this.element.find(".gst-menu").gstMenuMobile(), this.element.hasClass("gst-side-navbar--minimal")) return e = this.element.data("position"), this.element.gstDynamicMenuColor({
            isSidenav: !0,
            refPosition: e
          })
        }
      }), e.widget.bridge("gstSideNavbar", e.gastro.sideNavbar)
    }).call(t, i(8))
  }, 627: function (e, t, i) {
    (function (e) {
      "use strict";
      var t;
      t = i(586), e.widget("gastro.skill", {
        options: {
          axis: "horizontal",
          size: 110,
          color: "#363636",
          title: "",
          percent: 80,
          trackColor: "#f2f2f2",
          thickness: 4
        }, _create: function () {
          var i, n, s;
          return s = this.element.attr("class").match(/gst-skill--(\S+)/), this.style = s ? s[1] : "bar", i = this.element.find(".gst-skill-item"), this.length = i.length, n = this.options, i.each(function (i) {
            return function (s, o) {
              var r, a, l, c;
              return o = e(o), r = o.data(), a = {}, a.axis = r.axis || n.axis, a.size = r.size || n.size, a.color = r.color || n.color, a.percent = r.percent || n.percent, a.baseColor = r.base || n.trackColor, a.thickness = r.thickness || n.thickness, "circle" === i.style && i._circle(o, a), c = i, l = new t.Scene({
                triggerElement: o[0],
                triggerHook: "onEnter",
                offset: 30
              }), o.is(":visible") ? (l.addTo(GastroApp.smController), o.hasClass("updated") ? void 0 : l.on("enter", function () {
                return c._updateSkill(o, a, s, l)
              })) : i.element.on("hiddenOpen.gst", function () {
                return c._updateSkill(o, a, s, l), c.element.off("hiddenOpen.gst")
              })
            }
          }(this))
        }, _circle: function (e, t) {
          return e.find(".easyPieChart").easyPieChart({
            size: t.size,
            barColor: t.color,
            scaleColor: !1,
            lineCap: "square",
            lineWidth: parseInt(t.thickness),
            trackColor: t.baseColor
          })
        }, _updateSkill: function (e, t, i, n) {
          var s;
          if (s = this, e.addClass("updated"), "bar" === this.style ? "horizontal" === t.axis ? setTimeout(function () {
            return e.find(".gst-skill-progress").css("width", t.percent + "%")
          }, 100) : setTimeout(function () {
            return e.find(".gst-skill-progress").css("height", 100 - t.percent + "%")
          }, 100) : e.find(".easyPieChart").data("easyPieChart").update(t.percent), n.destroy(), i === this.length - 1) return this.element.off("hiddenOpen.gst")
        }
      }), e.widget.bridge("gstSkill", e.gastro.skill)
    }).call(t, i(8))
  }, 628: function (e, t, i) {
    (function (e) {
      "use strict";
      e.widget("gastro.slider", {
        _create: function () {
          var t, i;
          return this.element.gstCarousel({
            speed: 600,
            cssEase: "ease-in"
          }), this.element.hasClass("gst-slider--fit-height") && (t = {
            itemWrapper: ".gst-slider-content",
            addLineHeight: !1
          }, this.element.data("screen_percent") && (t.screenPercent = this.element.data("screen_percent")), this.element.data("screen_offset") && (t.screenOffset = this.element.data("screen_offset")), this.element.find(".gst-slider-item").each(function (i, n) {
            return e(n).gstSetSize(t)
          })), i = this, this.element.on("afterChange", function (e, t, n) {
            return i._setScheme(n)
          })
        }, _setScheme: function (e) {
          var t, i;
          return i = this.element.find(".slick-slide[data-slick-index='" + e + "']").attr("class").match(/gst-slider-(\S+)-scheme/), i ? (t = i[1], this.element.removeClass("gst-slider-light-scheme gst-slider-dark-scheme").addClass("gst-slider-" + t + "-scheme")) : this.element.removeClass("gst-slider-light-scheme gst-slider-dark-scheme")
        }
      }), e.widget.bridge("gstSlider", e.gastro.slider)
    }).call(t, i(8))
  }, 629: function (e, t, i) {
    (function (e) {
      "use strict";
      e.widget("gastro.tab", {
        _create: function () {
          var t;
          return t = this, this.body = this.element.children(".gst-tab-body").children(".gst-tab-wrapper"), this._on(this.element.children(".gst-tab-nav"), {"click li": e.proxy(this._tabClicked, this)}), this.element.on("tabOpen.gst", function (e, i) {
            return t.tabOpen(i)
          })
        }, _tabClicked: function (t) {
          var i, n;
          return t.preventDefault(), n = e(t.currentTarget), i = n.data("index"), this.tabOpen(i)
        }, tabOpen: function (t) {
          var i, n, s;
          if (i = this.body.children(".gst-tab-content[data-index=" + t + "]")) return s = this.body.children(".gst-tab-content.active"), i.hasClass("active") ? void 0 : (s.removeClass("active"), s.find(".gst-item").trigger("hiddenClose.gst"), i.addClass("active"), setTimeout(function () {
            return i.find(".gst-item").trigger("hiddenOpen.gst"), e(window).resize()
          }, 500), n = this.element.find(".gst-tab-nav-list"), n.removeClass("active").filter("[data-index=" + t + "]").addClass("active"))
        }
      }), e.widget.bridge("gstTab", e.gastro.tab)
    }).call(t, i(8))
  }, 630: function (e, t, i) {
    (function (e) {
      "use strict";
      e.widget("gastro.variableProduct", {
        options: {variationBox: ".gst-product-variation-box", variationBoxInner: "gst-product-variation-box-inner"},
        _create: function () {
          var t, i, n, s;
          if (i = this, n = this.element.find(this.options.variationBox), s = this.options.variationBoxInner, t = this.element.find(".variations_form"), "undefined" != typeof wc_add_to_cart_params) return this.element.find("a.button").on("click", function (t) {
            return t.preventDefault(), n.hasClass("active") ? n.removeClass("active") : n.addClass("active"), e(window).on("click", function (t) {
              var i;
              if (i = e(t.target), i.closest("." + s).length < 1) return n.removeClass("active")
            }), t.stopPropagation()
          }), this.element.find(".single_add_to_cart_button").on("click", function (n) {
            var s, o, r, a, l, c, d, q;
            if (n.preventDefault(), e(".ajaxerrors").remove(), l = e(n.currentTarget), q = t.find("input[name=quantity]").val(),  c = t.find("input[name=variation_id]").val(), r = t.find("input[name=product_id]").val(), o = {}, a = !0, d = t.find("select[name^=attribute]"), d.each(function (t, i) {
              var n, s, r, l;
              return i = e(i), i.removeClass("error"), s = i.attr("name"), l = i.val(), l.length ? o[s] = l : (n = s.lastIndexOf("_"), r = s.substring(n + 1), i.addClass("required error").before('<div class="ajaxerrors"><p>Please select ' + r + "</p></div>"), a = !1)
            }), a) return l.removeClass("added"), l.addClass("loading"), s = {
              action: "woocommerce_variable_add_to_cart",
              product_id: r,
              quantity: q ,
              variation_id: c,
              variation: o
            }, GastroApp.body.trigger("adding_to_cart", [l, s]), i.ajaxAddToCart(l, s)
          })
        },
        ajaxAddToCart: function (t, i) {
          return e.post(wc_add_to_cart_params.ajax_url, i).done(function (i) {
            var n, s, o;
            return s = window.location.toString(), s = s.replace("add-to-cart", "added-to-cart"), i.error && i.product_url ? void (window.location = i.product_url) : "yes" !== wc_add_to_cart_params.cart_redirect_after_add ? (t.removeClass("loading"), t.addClass("added"), o = i.fragments, n = i.cart_hash, o && e.each(o, function (t, i) {
              return e(t).addClass("updating"), e(t).replaceWith(i)
            }), e(".shop_table.cart, .updating, .cart_totals").fadeTo("400", "0.6").block({
              message: null,
              overlayCSS: {opacity: .6}
            }), e(".widget_shopping_cart, .updating").stop(!0).css("opacity", "1").unblock(), e(".shop_table.cart").load(s + " .shop_table.cart:eq(0) > *", function () {
              return e(".shop_table.cart").stop(!0).css("opacity", "1").unblock(), e(document.body).trigger("cart_page_refreshed")
            }), e(".cart_totals").load(s + " .cart_totals:eq(0) > *", function () {
              return e(".cart_totals").stop(!0).css("opacity", "1").unblock()
            }), e(document.body).trigger("added_to_cart", [o, n, t])) : void (window.location = wc_add_to_cart_params.cart_url)
          }).fail(function (e) {
            return t.html("Failed add to cart").removeClass("loading").addClass("error")
          })
        }
      }), e.widget.bridge("gstVariableProduct", e.gastro.variableProduct)
    }).call(t, i(8))
  }, 631: function (e, t, i) {
    (function (e) {
      "use strict";
      e.widget("gastro.variableProductForm", {
        _create: function () {
          var e, t, i, n, s, o, r, a, l, c, d, u, h;
          return e = this.element, a = e.parent(".summary").siblings(".gst-product-gallery"), i = a.find(".gst-gallery-item").length, d = a.find(".gst-gallery-content").find(".slick-slide").first(), c = d.find(".gst-gallery-media"), t = !!c.attr("href"), l = d.find("img"), n = l.attr("src"), s = l.attr("srcset"), s = s ? s : "", h = a.find(".gst-gallery-thumbnail").find(".slick-slide").filter("[data-slick-index=0],[data-slick-index=" + (0 - i) + "],[data-slick-index=" + (0 + i) + "]"), u = h.find("img"), o = u.attr("src"), r = u.attr("srcset"), r = r ? r : "", e.on("change", function (e) {
            if ("select-one" === e.target.type && !e.target.value.length && (l.attr({
              src: n,
              srcset: s
            }), u.attr({src: o, srcset: r}), t)) return a.trigger("imageLinkChanged.gst", {
              index: 0,
              src: n
            }), c.attr("href", n)
          }), e.find(".single_variation_wrap").on("show_variation", function (e, i) {
            var d, h, p, f, m;
            if (i.image && i.image.url ? (a.children().slick("slickGoTo", 0), d = i.image.url, h = i.image.src, p = i.image.srcset, f = i.image.thumb_src, m = p) : (d = n, h = n, p = s, f = o, m = r), p = p ? p : "", m = m ? m : "", l.attr({
              src: h,
              srcset: p
            }), u.attr({src: f, srcset: m}), t) return a.trigger("imageLinkChanged.gst", {
              index: 0,
              src: d
            }), c.attr("href", d)
          })
        }
      }), e.widget.bridge("gstVariableProductForm", e.gastro.variableProductForm)
    }).call(t, i(8))
  }, 632: function (e, t, i) {
    (function (e) {
      "use strict";
      e.widget("gastro.variationRadio", {
        _create: function () {
          var t;
          return t = this.element, this.element.find(".variations-radio-input").on("click", function (i) {
            var n, s;
            return n = e(i.currentTarget), s = n.attr("value"), t.siblings("select").find("option[value=" + s + "]").attr("selected", !0).parent().trigger("change")
          })
        }
      }), e.widget.bridge("gstVariationRadio", e.gastro.variationRadio)
    }).call(t, i(8))
  }, 633: function (e, t, i) {
    (function (e) {
      "use strict";
      e.widget("gastro.video", {
        options: {autoplay: !1}, _create: function () {
          var e, t, i;
          return t = this, this.video = this.element.find("video"), this.videoIframe = this.element.find("iframe"), e = this.element.data("autoplay"), this.isAutoPlay = e ? e : this.options.autoplay, this.video.length > 0 && this.video.is(":visible") && this.isAutoPlay ? setTimeout(function () {
            if (t.video[0].paused) return t.video[0].play()
          }, 150) : this.videoIframe.length > 0 && !this.videoIframe.is(":visible") && this.isAutoPlay && (i = this.videoIframe.prop("src").replace("&autoplay=1", ""), this.videoIframe.prop("src", ""), this.videoIframe.prop("src", i)), this.element.on("hiddenOpen.gst", function () {
            return setTimeout(function () {
              return t.startPlayingVideo()
            }, 500)
          }), this.element.on("hiddenClose.gst", function () {
            return t.stopPlayingVideo()
          })
        }, startPlayingVideo: function () {
          var e;
          if (this.isAutoPlay) {
            if (this.video.length) return this.video[0].play();
            if (this.videoIframe.length) return e = this.videoIframe.prop("src").replace("&autoplay=1", ""), e += "&autoplay=1", this.videoIframe.prop("src", e)
          }
        }, stopPlayingVideo: function () {
          var e;
          if (this.video.length && this.video[0].pause(), this.isAutoPlay && this.videoIframe.length) return e = this.videoIframe.prop("src").replace("&autoplay=1", ""), this.videoIframe.prop("src", ""), this.videoIframe.prop("src", e)
        }
      }), e.widget.bridge("gstVideo", e.gastro.video)
    }).call(t, i(8))
  }, 634: function (e, t, i) {
    e.exports = i.p + "images/gastro-admin.png"
  }
});
;(function(window,$,undefined){$(document).ready(function(){if($().select2){var wc_address_book_select_select2=function(){$('select#shipping_address:visible, select#address_book:visible').each(function(){$(this).select2();});};wc_address_book_select_select2();}
$('.address_book .wc-address-book-delete').click(function(e){e.preventDefault();$(this).closest('.wc-address-book-address').addClass('blockUI blockOverlay wc-updating');var name=$(this).attr('id');$.ajax({url:wc_address_book.ajax_url,type:'post',data:{action:'wc_address_book_delete',name:name},success:function(response){$('.wc-updating').remove();}});});$('.address_book .wc-address-book-make-primary').click(function(e){e.preventDefault();var name=$(this).attr('id');var primary_address=$('.woocommerce-Addresses .u-column2.woocommerce-Address address');var alt_address=$(this).parent().siblings('address');var pa_html=primary_address.html();var aa_html=alt_address.html();alt_address.html(pa_html);primary_address.html(aa_html);primary_address.addClass('blockUI blockOverlay wc-updating');alt_address.addClass('blockUI blockOverlay wc-updating');$.ajax({url:wc_address_book.ajax_url,type:'post',data:{action:'wc_address_book_make_primary',name:name},success:function(response){$('.wc-updating').removeClass('blockUI blockOverlay wc-updating');}});});function shipping_checkout_field_prepop(){var that=$('#address_book_field #address_book');var name=$(that).val();if(name!==undefined){if('add_new'==name){$('.shipping_address input').not($('#shipping_country')).each(function(){$(this).val('');});if(typeof $('#shipping_country').attr('readonly')=='undefined'){$('#shipping_country').val('').change();$("#shipping_country_chosen").find('span').html('');}
$('#shipping_state').val('').change();$("#shipping_state_chosen").find('span').html('');return;}
if(name.length>0){$(that).closest('.shipping_address').addClass('blockUI blockOverlay wc-updating');$.ajax({url:wc_address_book.ajax_url,type:'post',data:{action:'wc_address_book_checkout_update',name:name},dataType:'json',success:function(response){Object.keys(response).forEach(function(key){$('#'+key).val(response[key]).change();});$('#shipping_country').val(response.shipping_country).change();$("#shipping_country_chosen").find('span').html(response.shipping_country_text);$('#shipping_state').val(response.shipping_state);var stateName=$('#shipping_state option[value="'+response.shipping_state+'"]').text();$("#s2id_shipping_state").find('.select2-chosen').html(stateName).parent().removeClass('select2-default');$('.shipping_address').removeClass('blockUI blockOverlay wc-updating');}});}}}
shipping_checkout_field_prepop();$('#address_book_field #address_book').change(function(){shipping_checkout_field_prepop();});});})(window,jQuery);
;!function(a,b){"use strict";function c(){if(!e){e=!0;var a,c,d,f,g=-1!==navigator.appVersion.indexOf("MSIE 10"),h=!!navigator.userAgent.match(/Trident.*rv:11\./),i=b.querySelectorAll("iframe.wp-embedded-content");for(c=0;c<i.length;c++){if(d=i[c],!d.getAttribute("data-secret"))f=Math.random().toString(36).substr(2,10),d.src+="#?secret="+f,d.setAttribute("data-secret",f);if(g||h)a=d.cloneNode(!0),a.removeAttribute("security"),d.parentNode.replaceChild(a,d)}}}var d=!1,e=!1;if(b.querySelector)if(a.addEventListener)d=!0;if(a.wp=a.wp||{},!a.wp.receiveEmbedMessage)if(a.wp.receiveEmbedMessage=function(c){var d=c.data;if(d)if(d.secret||d.message||d.value)if(!/[^a-zA-Z0-9]/.test(d.secret)){var e,f,g,h,i,j=b.querySelectorAll('iframe[data-secret="'+d.secret+'"]'),k=b.querySelectorAll('blockquote[data-secret="'+d.secret+'"]');for(e=0;e<k.length;e++)k[e].style.display="none";for(e=0;e<j.length;e++)if(f=j[e],c.source===f.contentWindow){if(f.removeAttribute("style"),"height"===d.message){if(g=parseInt(d.value,10),g>1e3)g=1e3;else if(~~g<200)g=200;f.height=g}if("link"===d.message)if(h=b.createElement("a"),i=b.createElement("a"),h.href=f.getAttribute("src"),i.href=d.value,i.host===h.host)if(b.activeElement===f)a.top.location.href=d.value}else;}},d)a.addEventListener("message",a.wp.receiveEmbedMessage,!1),b.addEventListener("DOMContentLoaded",c,!1),a.addEventListener("load",c,!1)}(window,document);
;var lmp_update_state,load_next_page,lmp_ajax_instance=false,lmp_update_lazyload;(function($){$('body').append($('<div class="berocket_load_more_preload">'
+the_lmp_js_data.load_image
+the_lmp_js_data.br_lmp_button_settings_load_image
+the_lmp_js_data.br_lmp_button_settings_use_image
+the_lmp_js_data.br_lmp_prev_settings_load_image
+the_lmp_js_data.br_lmp_prev_settings_use_image
+'</div>'));$(document).ready(function(){$('.berocket_load_more_preload').remove();$(the_lmp_js_data.products).find(the_lmp_js_data.item).first().addClass('berocket_lmp_first_on_page').attr('data-url',location.href);var lmp_is_loading=false,lmp_loading_style;var lmp_count_start=0,lmp_count_end=0,lmp_count_laststart=0,lmp_count_lastend=0,lmp_count_text='';if($('.br_product_result_count').length){lmp_count_start=$('.br_product_result_count').data('start');lmp_count_end=$('.br_product_result_count').data('end');lmp_count_text=$('.br_product_result_count').data('text');lmp_count_laststart=lmp_count_start;lmp_count_lastend=lmp_count_end;}
if($(the_lmp_js_data.products).length>0){$(the_lmp_js_data.products).after($(the_lmp_js_data.load_more));if(the_lmp_js_data.use_prev_btn){$(the_lmp_js_data.products).before($(the_lmp_js_data.load_prev));}
current_style();if(lmp_loading_style!='none'){$(window).resize(function(){current_style();});$(window).on('popstate',function(){if(lmp_loading_style!=='pagination'){if(!lmp_is_loading){lmp_is_loading=true;if($('.berocket_lmp_first_on_page[data-url="'+location.href+'"]').length){$('html, body').animate({scrollTop:$('.berocket_lmp_first_on_page[data-url="'+location.href+'"]').offset().top},500,function(){lmp_is_loading=false;});}}}else{if(lmp_ajax_instance!=false){lmp_ajax_instance.abort();end_ajax_loading();}
load_next_page(true,location.href);}});function br_load_more_html5(){if(typeof the_lmp_js_data.update_url!="undefined"&&the_lmp_js_data.update_url==1){if(!lmp_is_loading){if(lmp_loading_style!=='pagination'){var next_page='';$('.berocket_lmp_first_on_page').each(function(i,o){if($(o).offset().top>$(window).scrollTop()+($(window).height()/2)){return false;}
next_page=$(o).attr('data-url');});if(!next_page){next_page=$('.berocket_lmp_first_on_page').first().attr('data-url');}
if(next_page&&location.href!=next_page){history.pushState('br_lmp_popstate',$('.woocommerce-breadcrumb').text(),next_page);}}}}}
$(document).on('berocket_ajax_filtering_start',function(){lmp_is_loading=true;});$(document).on('berocket_ajax_filtering_end',function(){lmp_is_loading=false;});$(window).scroll(function(){if(!lmp_is_loading){br_load_more_html5();if(lmp_loading_style=='infinity_scroll'){var products_bottom=$(the_lmp_js_data.products).offset().top+$(the_lmp_js_data.products).height()-the_lmp_js_data.buffer;var bottom_position=$(window).scrollTop()+$(window).height();if(products_bottom<bottom_position&&!lmp_is_loading){load_next_page();}}}});$(document).on('click','.br_lmp_button_settings .lmp_button',function(event){event.preventDefault();load_next_page();});$(document).on('click','.br_lmp_prev_settings .lmp_button',function(event){event.preventDefault();load_next_page(2,$(this).attr('href'));});if(!the_lmp_js_data.is_AAPF||typeof the_ajax_script=='undefined'){$(document).on('click',the_lmp_js_data.pagination+' a',function(event){event.preventDefault();var next_page=$(this).attr('href');if(typeof the_lmp_js_data.update_url!="undefined"&&the_lmp_js_data.update_url==1){history.pushState('br_lmp_popstate',$('.woocommerce-breadcrumb').text(),next_page);}
load_next_page(true,next_page);});}}}
load_next_page=function(replace,user_next_page){if(!lmp_is_loading){if(typeof(replace)=='undefined'){user_next_page=false;}
if(typeof(user_next_page)=='undefined'){user_next_page=false;}
var $next_page=jquery_get_next_page();if($next_page.length>0||user_next_page!==false){start_ajax_loading(replace);var next_page;if(user_next_page!==false){next_page=user_next_page;}else{next_page=$next_page.attr('href');}
lmp_ajax_instance=$.get(next_page,function(data){lmp_ajax_instance=false;var $data=$('<div>'+data+'</div>');if(the_lmp_js_data.lazy_load_m&&$(window).width()<=the_lmp_js_data.mobile_width||the_lmp_js_data.lazy_load&&$(window).width()>the_lmp_js_data.mobile_width){$data.find(the_lmp_js_data.products+' .lazy,'+the_lmp_js_data.item+', .berocket_lgv_additional_data').find('img').each(function(i,o){$(o).attr('data-src',$(o).attr('src')).removeAttr('src');$(o).attr('data-srcset',$(o).attr('srcset')).removeAttr('srcset');});$data.find(the_lmp_js_data.item+', .berocket_lgv_additional_data').addClass('lazy');}
$data.find(the_lmp_js_data.products).find(the_lmp_js_data.item).first().addClass('berocket_lmp_first_on_page').attr('data-url',next_page);var $products=$data.find(the_lmp_js_data.products).html();if(replace==1){$(the_lmp_js_data.products).html($products);}else if(replace==2){$products=$data.find(the_lmp_js_data.products);$products.find(the_lmp_js_data.item).addClass('berocket_lmp_hidden');var count_images=$products.find(the_lmp_js_data.item).find('img').length;$products=$products.html();$(the_lmp_js_data.products).prepend($products);berocket_show_berocket_lmp_hidden_executed=false;function berocket_show_berocket_lmp_hidden(){if(!berocket_show_berocket_lmp_hidden_executed){berocket_show_berocket_lmp_hidden_executed=true;var object=$(the_lmp_js_data.products).find(the_lmp_js_data.item+':not(".berocket_lmp_hidden")').first();var positionOld=object.offset().top;var scrollTop=$(window).scrollTop();$('.berocket_lmp_hidden').removeClass('berocket_lmp_hidden');end_ajax_loading();var positionNew=object.offset().top;$(window).scrollTop(positionNew-(positionOld-scrollTop));}}
$(the_lmp_js_data.products).find('.berocket_lmp_hidden').find('img').on('load error',function(){count_images--;if(count_images<=1){berocket_show_berocket_lmp_hidden();}});setTimeout(berocket_show_berocket_lmp_hidden,2500);}else{$(the_lmp_js_data.products).append($products);}
lmp_update_lazyload();if(lmp_loading_style!=='pagination')
{if($data.find('.br_product_result_count').length&&(lmp_count_start||lmp_count_end)){lmp_count_text=$data.find('.br_product_result_count').data('text');if(replace==2){lmp_count_start=$data.find('.br_product_result_count').data('start');}else{lmp_count_end=$data.find('.br_product_result_count').data('end');}
lmp_count_lastend=$data.find('.br_product_result_count').data('end');lmp_count_laststart=$data.find('.br_product_result_count').data('start');text_count=lmp_count_text;text_count=text_count.replace('-1',lmp_count_start);text_count=text_count.replace('-2',lmp_count_end);$('.woocommerce-result-count').text(text_count);}else{$('.woocommerce-result-count').text($data.find('.woocommerce-result-count:first').text());}}
else
{$('.woocommerce-result-count').text($data.find('.woocommerce-result-count:first').text());}
var $pagination=$data.find(the_lmp_js_data.pagination);if(replace==1){$(the_lmp_js_data.pagination).html($pagination.html());}else if(replace==2){var $prev_page=jquery_get_prev_page();var $new_prev_page=jquery_get_prev_page($data);if($new_prev_page.length){$prev_page.replaceWith($new_prev_page);}else{$prev_page.remove();}}else{var $next_page=jquery_get_next_page();var $new_next_page=jquery_get_next_page($data);if($new_next_page.length){$next_page.replaceWith($new_next_page);}else{$next_page.remove();}}
current_style();if(replace!=2){end_ajax_loading();}});}}}
function woocommerce_result_count_update(){if(lmp_loading_style!=='pagination'){if($('.br_product_result_count').length){lmp_count_start=$('.br_product_result_count').data('start');lmp_count_end=$('.br_product_result_count').data('end');lmp_count_text=$('.br_product_result_count').data('text');lmp_count_lastend=lmp_count_end;lmp_count_laststart=lmp_count_start;text_count=lmp_count_text;text_count=text_count.replace('-1',lmp_count_start);text_count=text_count.replace('-2',lmp_count_end);$('.woocommerce-result-count').text(text_count);}}}
function start_ajax_loading(replace){lmp_is_loading=true;jQuery('body').addClass('berocket_lmp_ajax_loading');lmp_execute_func(the_lmp_js_data.javascript.before_update);$(document).trigger('berocket_lmp_start');if(replace==2){$(the_lmp_js_data.products).before($(the_lmp_js_data.load_image));$(document).trigger('berocket_lmp_start_prev');}else{$(the_lmp_js_data.products).after($(the_lmp_js_data.load_image));$(document).trigger('berocket_lmp_start_next');}}
function end_ajax_loading(){if(typeof($(the_lmp_js_data.products).isotope)=='function'&&$(the_lmp_js_data.products).data('isotope')){$(the_lmp_js_data.products).isotope('reloadItems');$(the_lmp_js_data.products).isotope();}
$(the_lmp_js_data.load_img_class).remove();$(document).trigger('berocket_ajax_products_infinite_loaded');$(document).trigger('berocket_lmp_end');lmp_execute_func(the_lmp_js_data.javascript.after_update);jQuery('body').removeClass('berocket_lmp_ajax_loading');lmp_is_loading=false;var $next_page=jquery_get_next_page();if((lmp_loading_style=='infinity_scroll'||lmp_loading_style=='more_button')&&$next_page.length<=0){$(the_lmp_js_data.products).append($(the_lmp_js_data.end_text));}
br_load_more_html5();}
function current_style(){var $next_page=jquery_get_next_page();if($next_page.length>0){$('.br_lmp_button_settings .lmp_button').attr('href',$next_page.attr('href'));}
var $prev_page=jquery_get_prev_page();if($prev_page.length>0){$('.br_lmp_prev_settings .lmp_button').attr('href',$prev_page.attr('href'));}
if(the_lmp_js_data.use_mobile&&$(window).width()<=the_lmp_js_data.mobile_width){set_style(the_lmp_js_data.mobile_type);}else{set_style(the_lmp_js_data.type);}}
function set_style(style){$('.lmp_load_more_button').hide();if(style!='none'){var $next_page=jquery_get_next_page();$(the_lmp_js_data.pagination).hide();if(style=='more_button'){if($next_page.length>0){$('.lmp_load_more_button.br_lmp_button_settings').show();}else{setTimeout(test_next_page,4000);}}else if(style=='pagination'){$(the_lmp_js_data.pagination).show();}
var $prev_page=jquery_get_prev_page();if($prev_page.length>0){$('.lmp_load_more_button.br_lmp_prev_settings').show();}else{setTimeout(test_prev_page,4000);}}
lmp_loading_style=style;}
function test_next_page(){var $next_page=jquery_get_next_page();if($next_page.length>0){current_style();}else{setTimeout(test_next_page,4000);}}
function test_prev_page(){var $prev_page=jquery_get_prev_page();if($prev_page.length>0){current_style();}else{setTimeout(test_prev_page,4000);}}
function jquery_get_next_page($parent){if(typeof($parent)=='undefined'){$parent=$(document);}
var $pagination=$parent.find(the_lmp_js_data.pagination);if($pagination.find(the_lmp_js_data.next_page).length>0){$next_page=$pagination.find(the_lmp_js_data.next_page);}else{$next_page=$parent.find(the_lmp_js_data.next_page);}
return $next_page;}
function jquery_get_prev_page($parent){if(typeof($parent)=='undefined'){$parent=$(document);}
var $pagination=$parent.find(the_lmp_js_data.pagination);if($pagination.find(the_lmp_js_data.prev_page).length>0){$prev_page=$pagination.find(the_lmp_js_data.prev_page);}else{$prev_page=$parent.find(the_lmp_js_data.prev_page);}
return $prev_page;}
lmp_update_state=function(reset_count){if(typeof reset_count=='undefined'){reset_count=false;}
if(!$(the_lmp_js_data.products).find(the_lmp_js_data.item).first().is('.berocket_lmp_first_on_page')){$(the_lmp_js_data.products).find(the_lmp_js_data.item).first().addClass('berocket_lmp_first_on_page').attr('data-url',location.href);}
current_style();if(reset_count){woocommerce_result_count_update();}}
$(document).on('berocket_ajax_products_loaded',function(){lmp_update_state(true);if(typeof $(window).lazyLoadXT!='undefined'){if(the_lmp_js_data.lazy_load_m&&$(window).width()<=the_lmp_js_data.mobile_width||the_lmp_js_data.lazy_load&&$(window).width()>the_lmp_js_data.mobile_width){jQuery(the_lmp_js_data.item+', .berocket_lgv_additional_data').addClass('lazy').find('img').each(function(i,o){jQuery(o).attr('data-src',jQuery(o).attr('src')).removeAttr('src').attr('data-srcset',jQuery(o).attr('srcset')).removeAttr('srcset');}).lazyLoadXT();}}
lmp_update_lazyload();});lmp_update_lazyload=function(){if(typeof $(window).lazyLoadXT!='undefined'){if(the_lmp_js_data.lazy_load_m&&$(window).width()<=the_lmp_js_data.mobile_width||the_lmp_js_data.lazy_load&&$(window).width()>the_lmp_js_data.mobile_width){$(the_lmp_js_data.products+' .lazy').find('img').lazyLoadXT();$(the_lmp_js_data.products).find('.lazy').on('lazyshow',function(){$(this).removeClass('lazy').addClass('animated').addClass(the_lmp_js_data.LLanimation);if($(this).is('img')){$(this).attr('srcset',$(this).data('srcset'));}else{$(this).find('img').each(function(i,o){$(o).attr('srcset',$(o).data('srcset'));});}
if(!$(this).is('.berocket_lgv_additional_data')){$(this).next('.berocket_lgv_additional_data').removeClass('lazy').addClass('animated').addClass(the_lmp_js_data.LLanimation);}});}}}});})(jQuery);function lmp_execute_func(func){if(the_lmp_js_data.javascript!='undefined'&&the_lmp_js_data.javascript!=null&&typeof func!='undefined'&&func.length>0){try{eval(func);}catch(err){alert('You have some incorrect JavaScript code (Load More Products)');}}}
;/*!
 * jQuery UI Core 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){function b(b,d){var e,f,g,h=b.nodeName.toLowerCase();return"area"===h?(e=b.parentNode,f=e.name,!(!b.href||!f||"map"!==e.nodeName.toLowerCase())&&(g=a("img[usemap='#"+f+"']")[0],!!g&&c(g))):(/^(input|select|textarea|button|object)$/.test(h)?!b.disabled:"a"===h?b.href||d:d)&&c(b)}function c(b){return a.expr.filters.visible(b)&&!a(b).parents().addBack().filter(function(){return"hidden"===a.css(this,"visibility")}).length}a.ui=a.ui||{},a.extend(a.ui,{version:"1.11.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),a.fn.extend({scrollParent:function(b){var c=this.css("position"),d="absolute"===c,e=b?/(auto|scroll|hidden)/:/(auto|scroll)/,f=this.parents().filter(function(){var b=a(this);return(!d||"static"!==b.css("position"))&&e.test(b.css("overflow")+b.css("overflow-y")+b.css("overflow-x"))}).eq(0);return"fixed"!==c&&f.length?f:a(this[0].ownerDocument||document)},uniqueId:function(){var a=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++a)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&a(this).removeAttr("id")})}}),a.extend(a.expr[":"],{data:a.expr.createPseudo?a.expr.createPseudo(function(b){return function(c){return!!a.data(c,b)}}):function(b,c,d){return!!a.data(b,d[3])},focusable:function(c){return b(c,!isNaN(a.attr(c,"tabindex")))},tabbable:function(c){var d=a.attr(c,"tabindex"),e=isNaN(d);return(e||d>=0)&&b(c,!e)}}),a("<a>").outerWidth(1).jquery||a.each(["Width","Height"],function(b,c){function d(b,c,d,f){return a.each(e,function(){c-=parseFloat(a.css(b,"padding"+this))||0,d&&(c-=parseFloat(a.css(b,"border"+this+"Width"))||0),f&&(c-=parseFloat(a.css(b,"margin"+this))||0)}),c}var e="Width"===c?["Left","Right"]:["Top","Bottom"],f=c.toLowerCase(),g={innerWidth:a.fn.innerWidth,innerHeight:a.fn.innerHeight,outerWidth:a.fn.outerWidth,outerHeight:a.fn.outerHeight};a.fn["inner"+c]=function(b){return void 0===b?g["inner"+c].call(this):this.each(function(){a(this).css(f,d(this,b)+"px")})},a.fn["outer"+c]=function(b,e){return"number"!=typeof b?g["outer"+c].call(this,b):this.each(function(){a(this).css(f,d(this,b,!0,e)+"px")})}}),a.fn.addBack||(a.fn.addBack=function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}),a("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(a.fn.removeData=function(b){return function(c){return arguments.length?b.call(this,a.camelCase(c)):b.call(this)}}(a.fn.removeData)),a.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),a.fn.extend({focus:function(b){return function(c,d){return"number"==typeof c?this.each(function(){var b=this;setTimeout(function(){a(b).focus(),d&&d.call(b)},c)}):b.apply(this,arguments)}}(a.fn.focus),disableSelection:function(){var a="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.bind(a+".ui-disableSelection",function(a){a.preventDefault()})}}(),enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(b){if(void 0!==b)return this.css("zIndex",b);if(this.length)for(var c,d,e=a(this[0]);e.length&&e[0]!==document;){if(c=e.css("position"),("absolute"===c||"relative"===c||"fixed"===c)&&(d=parseInt(e.css("zIndex"),10),!isNaN(d)&&0!==d))return d;e=e.parent()}return 0}}),a.ui.plugin={add:function(b,c,d){var e,f=a.ui[b].prototype;for(e in d)f.plugins[e]=f.plugins[e]||[],f.plugins[e].push([c,d[e]])},call:function(a,b,c,d){var e,f=a.plugins[b];if(f&&(d||a.element[0].parentNode&&11!==a.element[0].parentNode.nodeType))for(e=0;e<f.length;e++)a.options[f[e][0]]&&f[e][1].apply(a.element,c)}}});
;/*!
 * jQuery UI Datepicker 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/datepicker/
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./core"],a):a(jQuery)}(function(a){function b(a){for(var b,c;a.length&&a[0]!==document;){if(b=a.css("position"),("absolute"===b||"relative"===b||"fixed"===b)&&(c=parseInt(a.css("zIndex"),10),!isNaN(c)&&0!==c))return c;a=a.parent()}return 0}function c(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},a.extend(this._defaults,this.regional[""]),this.regional.en=a.extend(!0,{},this.regional[""]),this.regional["en-US"]=a.extend(!0,{},this.regional.en),this.dpDiv=d(a("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}function d(b){var c="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return b.delegate(c,"mouseout",function(){a(this).removeClass("ui-state-hover"),this.className.indexOf("ui-datepicker-prev")!==-1&&a(this).removeClass("ui-datepicker-prev-hover"),this.className.indexOf("ui-datepicker-next")!==-1&&a(this).removeClass("ui-datepicker-next-hover")}).delegate(c,"mouseover",e)}function e(){a.datepicker._isDisabledDatepicker(g.inline?g.dpDiv.parent()[0]:g.input[0])||(a(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),a(this).addClass("ui-state-hover"),this.className.indexOf("ui-datepicker-prev")!==-1&&a(this).addClass("ui-datepicker-prev-hover"),this.className.indexOf("ui-datepicker-next")!==-1&&a(this).addClass("ui-datepicker-next-hover"))}function f(b,c){a.extend(b,c);for(var d in c)null==c[d]&&(b[d]=c[d]);return b}a.extend(a.ui,{datepicker:{version:"1.11.4"}});var g;return a.extend(c.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(a){return f(this._defaults,a||{}),this},_attachDatepicker:function(b,c){var d,e,f;d=b.nodeName.toLowerCase(),e="div"===d||"span"===d,b.id||(this.uuid+=1,b.id="dp"+this.uuid),f=this._newInst(a(b),e),f.settings=a.extend({},c||{}),"input"===d?this._connectDatepicker(b,f):e&&this._inlineDatepicker(b,f)},_newInst:function(b,c){var e=b[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");return{id:e,input:b,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:c,dpDiv:c?d(a("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}},_connectDatepicker:function(b,c){var d=a(b);c.append=a([]),c.trigger=a([]),d.hasClass(this.markerClassName)||(this._attachments(d,c),d.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp),this._autoSize(c),a.data(b,"datepicker",c),c.settings.disabled&&this._disableDatepicker(b))},_attachments:function(b,c){var d,e,f,g=this._get(c,"appendText"),h=this._get(c,"isRTL");c.append&&c.append.remove(),g&&(c.append=a("<span class='"+this._appendClass+"'>"+g+"</span>"),b[h?"before":"after"](c.append)),b.unbind("focus",this._showDatepicker),c.trigger&&c.trigger.remove(),d=this._get(c,"showOn"),"focus"!==d&&"both"!==d||b.focus(this._showDatepicker),"button"!==d&&"both"!==d||(e=this._get(c,"buttonText"),f=this._get(c,"buttonImage"),c.trigger=a(this._get(c,"buttonImageOnly")?a("<img/>").addClass(this._triggerClass).attr({src:f,alt:e,title:e}):a("<button type='button'></button>").addClass(this._triggerClass).html(f?a("<img/>").attr({src:f,alt:e,title:e}):e)),b[h?"before":"after"](c.trigger),c.trigger.click(function(){return a.datepicker._datepickerShowing&&a.datepicker._lastInput===b[0]?a.datepicker._hideDatepicker():a.datepicker._datepickerShowing&&a.datepicker._lastInput!==b[0]?(a.datepicker._hideDatepicker(),a.datepicker._showDatepicker(b[0])):a.datepicker._showDatepicker(b[0]),!1}))},_autoSize:function(a){if(this._get(a,"autoSize")&&!a.inline){var b,c,d,e,f=new Date(2009,11,20),g=this._get(a,"dateFormat");g.match(/[DM]/)&&(b=function(a){for(c=0,d=0,e=0;e<a.length;e++)a[e].length>c&&(c=a[e].length,d=e);return d},f.setMonth(b(this._get(a,g.match(/MM/)?"monthNames":"monthNamesShort"))),f.setDate(b(this._get(a,g.match(/DD/)?"dayNames":"dayNamesShort"))+20-f.getDay())),a.input.attr("size",this._formatDate(a,f).length)}},_inlineDatepicker:function(b,c){var d=a(b);d.hasClass(this.markerClassName)||(d.addClass(this.markerClassName).append(c.dpDiv),a.data(b,"datepicker",c),this._setDate(c,this._getDefaultDate(c),!0),this._updateDatepicker(c),this._updateAlternate(c),c.settings.disabled&&this._disableDatepicker(b),c.dpDiv.css("display","block"))},_dialogDatepicker:function(b,c,d,e,g){var h,i,j,k,l,m=this._dialogInst;return m||(this.uuid+=1,h="dp"+this.uuid,this._dialogInput=a("<input type='text' id='"+h+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.keydown(this._doKeyDown),a("body").append(this._dialogInput),m=this._dialogInst=this._newInst(this._dialogInput,!1),m.settings={},a.data(this._dialogInput[0],"datepicker",m)),f(m.settings,e||{}),c=c&&c.constructor===Date?this._formatDate(m,c):c,this._dialogInput.val(c),this._pos=g?g.length?g:[g.pageX,g.pageY]:null,this._pos||(i=document.documentElement.clientWidth,j=document.documentElement.clientHeight,k=document.documentElement.scrollLeft||document.body.scrollLeft,l=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[i/2-100+k,j/2-150+l]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),m.settings.onSelect=d,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),a.blockUI&&a.blockUI(this.dpDiv),a.data(this._dialogInput[0],"datepicker",m),this},_destroyDatepicker:function(b){var c,d=a(b),e=a.data(b,"datepicker");d.hasClass(this.markerClassName)&&(c=b.nodeName.toLowerCase(),a.removeData(b,"datepicker"),"input"===c?(e.append.remove(),e.trigger.remove(),d.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):"div"!==c&&"span"!==c||d.removeClass(this.markerClassName).empty(),g===e&&(g=null))},_enableDatepicker:function(b){var c,d,e=a(b),f=a.data(b,"datepicker");e.hasClass(this.markerClassName)&&(c=b.nodeName.toLowerCase(),"input"===c?(b.disabled=!1,f.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""})):"div"!==c&&"span"!==c||(d=e.children("."+this._inlineClass),d.children().removeClass("ui-state-disabled"),d.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=a.map(this._disabledInputs,function(a){return a===b?null:a}))},_disableDatepicker:function(b){var c,d,e=a(b),f=a.data(b,"datepicker");e.hasClass(this.markerClassName)&&(c=b.nodeName.toLowerCase(),"input"===c?(b.disabled=!0,f.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"})):"div"!==c&&"span"!==c||(d=e.children("."+this._inlineClass),d.children().addClass("ui-state-disabled"),d.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=a.map(this._disabledInputs,function(a){return a===b?null:a}),this._disabledInputs[this._disabledInputs.length]=b)},_isDisabledDatepicker:function(a){if(!a)return!1;for(var b=0;b<this._disabledInputs.length;b++)if(this._disabledInputs[b]===a)return!0;return!1},_getInst:function(b){try{return a.data(b,"datepicker")}catch(c){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(b,c,d){var e,g,h,i,j=this._getInst(b);return 2===arguments.length&&"string"==typeof c?"defaults"===c?a.extend({},a.datepicker._defaults):j?"all"===c?a.extend({},j.settings):this._get(j,c):null:(e=c||{},"string"==typeof c&&(e={},e[c]=d),void(j&&(this._curInst===j&&this._hideDatepicker(),g=this._getDateDatepicker(b,!0),h=this._getMinMaxDate(j,"min"),i=this._getMinMaxDate(j,"max"),f(j.settings,e),null!==h&&void 0!==e.dateFormat&&void 0===e.minDate&&(j.settings.minDate=this._formatDate(j,h)),null!==i&&void 0!==e.dateFormat&&void 0===e.maxDate&&(j.settings.maxDate=this._formatDate(j,i)),"disabled"in e&&(e.disabled?this._disableDatepicker(b):this._enableDatepicker(b)),this._attachments(a(b),j),this._autoSize(j),this._setDate(j,g),this._updateAlternate(j),this._updateDatepicker(j))))},_changeDatepicker:function(a,b,c){this._optionDatepicker(a,b,c)},_refreshDatepicker:function(a){var b=this._getInst(a);b&&this._updateDatepicker(b)},_setDateDatepicker:function(a,b){var c=this._getInst(a);c&&(this._setDate(c,b),this._updateDatepicker(c),this._updateAlternate(c))},_getDateDatepicker:function(a,b){var c=this._getInst(a);return c&&!c.inline&&this._setDateFromField(c,b),c?this._getDate(c):null},_doKeyDown:function(b){var c,d,e,f=a.datepicker._getInst(b.target),g=!0,h=f.dpDiv.is(".ui-datepicker-rtl");if(f._keyEvent=!0,a.datepicker._datepickerShowing)switch(b.keyCode){case 9:a.datepicker._hideDatepicker(),g=!1;break;case 13:return e=a("td."+a.datepicker._dayOverClass+":not(."+a.datepicker._currentClass+")",f.dpDiv),e[0]&&a.datepicker._selectDay(b.target,f.selectedMonth,f.selectedYear,e[0]),c=a.datepicker._get(f,"onSelect"),c?(d=a.datepicker._formatDate(f),c.apply(f.input?f.input[0]:null,[d,f])):a.datepicker._hideDatepicker(),!1;case 27:a.datepicker._hideDatepicker();break;case 33:a.datepicker._adjustDate(b.target,b.ctrlKey?-a.datepicker._get(f,"stepBigMonths"):-a.datepicker._get(f,"stepMonths"),"M");break;case 34:a.datepicker._adjustDate(b.target,b.ctrlKey?+a.datepicker._get(f,"stepBigMonths"):+a.datepicker._get(f,"stepMonths"),"M");break;case 35:(b.ctrlKey||b.metaKey)&&a.datepicker._clearDate(b.target),g=b.ctrlKey||b.metaKey;break;case 36:(b.ctrlKey||b.metaKey)&&a.datepicker._gotoToday(b.target),g=b.ctrlKey||b.metaKey;break;case 37:(b.ctrlKey||b.metaKey)&&a.datepicker._adjustDate(b.target,h?1:-1,"D"),g=b.ctrlKey||b.metaKey,b.originalEvent.altKey&&a.datepicker._adjustDate(b.target,b.ctrlKey?-a.datepicker._get(f,"stepBigMonths"):-a.datepicker._get(f,"stepMonths"),"M");break;case 38:(b.ctrlKey||b.metaKey)&&a.datepicker._adjustDate(b.target,-7,"D"),g=b.ctrlKey||b.metaKey;break;case 39:(b.ctrlKey||b.metaKey)&&a.datepicker._adjustDate(b.target,h?-1:1,"D"),g=b.ctrlKey||b.metaKey,b.originalEvent.altKey&&a.datepicker._adjustDate(b.target,b.ctrlKey?+a.datepicker._get(f,"stepBigMonths"):+a.datepicker._get(f,"stepMonths"),"M");break;case 40:(b.ctrlKey||b.metaKey)&&a.datepicker._adjustDate(b.target,7,"D"),g=b.ctrlKey||b.metaKey;break;default:g=!1}else 36===b.keyCode&&b.ctrlKey?a.datepicker._showDatepicker(this):g=!1;g&&(b.preventDefault(),b.stopPropagation())},_doKeyPress:function(b){var c,d,e=a.datepicker._getInst(b.target);if(a.datepicker._get(e,"constrainInput"))return c=a.datepicker._possibleChars(a.datepicker._get(e,"dateFormat")),d=String.fromCharCode(null==b.charCode?b.keyCode:b.charCode),b.ctrlKey||b.metaKey||d<" "||!c||c.indexOf(d)>-1},_doKeyUp:function(b){var c,d=a.datepicker._getInst(b.target);if(d.input.val()!==d.lastVal)try{c=a.datepicker.parseDate(a.datepicker._get(d,"dateFormat"),d.input?d.input.val():null,a.datepicker._getFormatConfig(d)),c&&(a.datepicker._setDateFromField(d),a.datepicker._updateAlternate(d),a.datepicker._updateDatepicker(d))}catch(e){}return!0},_showDatepicker:function(c){if(c=c.target||c,"input"!==c.nodeName.toLowerCase()&&(c=a("input",c.parentNode)[0]),!a.datepicker._isDisabledDatepicker(c)&&a.datepicker._lastInput!==c){var d,e,g,h,i,j,k;d=a.datepicker._getInst(c),a.datepicker._curInst&&a.datepicker._curInst!==d&&(a.datepicker._curInst.dpDiv.stop(!0,!0),d&&a.datepicker._datepickerShowing&&a.datepicker._hideDatepicker(a.datepicker._curInst.input[0])),e=a.datepicker._get(d,"beforeShow"),g=e?e.apply(c,[c,d]):{},g!==!1&&(f(d.settings,g),d.lastVal=null,a.datepicker._lastInput=c,a.datepicker._setDateFromField(d),a.datepicker._inDialog&&(c.value=""),a.datepicker._pos||(a.datepicker._pos=a.datepicker._findPos(c),a.datepicker._pos[1]+=c.offsetHeight),h=!1,a(c).parents().each(function(){return h|="fixed"===a(this).css("position"),!h}),i={left:a.datepicker._pos[0],top:a.datepicker._pos[1]},a.datepicker._pos=null,d.dpDiv.empty(),d.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),a.datepicker._updateDatepicker(d),i=a.datepicker._checkOffset(d,i,h),d.dpDiv.css({position:a.datepicker._inDialog&&a.blockUI?"static":h?"fixed":"absolute",display:"none",left:i.left+"px",top:i.top+"px"}),d.inline||(j=a.datepicker._get(d,"showAnim"),k=a.datepicker._get(d,"duration"),d.dpDiv.css("z-index",b(a(c))+1),a.datepicker._datepickerShowing=!0,a.effects&&a.effects.effect[j]?d.dpDiv.show(j,a.datepicker._get(d,"showOptions"),k):d.dpDiv[j||"show"](j?k:null),a.datepicker._shouldFocusInput(d)&&d.input.focus(),a.datepicker._curInst=d))}},_updateDatepicker:function(b){this.maxRows=4,g=b,b.dpDiv.empty().append(this._generateHTML(b)),this._attachHandlers(b);var c,d=this._getNumberOfMonths(b),f=d[1],h=17,i=b.dpDiv.find("."+this._dayOverClass+" a");i.length>0&&e.apply(i.get(0)),b.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),f>1&&b.dpDiv.addClass("ui-datepicker-multi-"+f).css("width",h*f+"em"),b.dpDiv[(1!==d[0]||1!==d[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),b.dpDiv[(this._get(b,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),b===a.datepicker._curInst&&a.datepicker._datepickerShowing&&a.datepicker._shouldFocusInput(b)&&b.input.focus(),b.yearshtml&&(c=b.yearshtml,setTimeout(function(){c===b.yearshtml&&b.yearshtml&&b.dpDiv.find("select.ui-datepicker-year:first").replaceWith(b.yearshtml),c=b.yearshtml=null},0))},_shouldFocusInput:function(a){return a.input&&a.input.is(":visible")&&!a.input.is(":disabled")&&!a.input.is(":focus")},_checkOffset:function(b,c,d){var e=b.dpDiv.outerWidth(),f=b.dpDiv.outerHeight(),g=b.input?b.input.outerWidth():0,h=b.input?b.input.outerHeight():0,i=document.documentElement.clientWidth+(d?0:a(document).scrollLeft()),j=document.documentElement.clientHeight+(d?0:a(document).scrollTop());return c.left-=this._get(b,"isRTL")?e-g:0,c.left-=d&&c.left===b.input.offset().left?a(document).scrollLeft():0,c.top-=d&&c.top===b.input.offset().top+h?a(document).scrollTop():0,c.left-=Math.min(c.left,c.left+e>i&&i>e?Math.abs(c.left+e-i):0),c.top-=Math.min(c.top,c.top+f>j&&j>f?Math.abs(f+h):0),c},_findPos:function(b){for(var c,d=this._getInst(b),e=this._get(d,"isRTL");b&&("hidden"===b.type||1!==b.nodeType||a.expr.filters.hidden(b));)b=b[e?"previousSibling":"nextSibling"];return c=a(b).offset(),[c.left,c.top]},_hideDatepicker:function(b){var c,d,e,f,g=this._curInst;!g||b&&g!==a.data(b,"datepicker")||this._datepickerShowing&&(c=this._get(g,"showAnim"),d=this._get(g,"duration"),e=function(){a.datepicker._tidyDialog(g)},a.effects&&(a.effects.effect[c]||a.effects[c])?g.dpDiv.hide(c,a.datepicker._get(g,"showOptions"),d,e):g.dpDiv["slideDown"===c?"slideUp":"fadeIn"===c?"fadeOut":"hide"](c?d:null,e),c||e(),this._datepickerShowing=!1,f=this._get(g,"onClose"),f&&f.apply(g.input?g.input[0]:null,[g.input?g.input.val():"",g]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),a.blockUI&&(a.unblockUI(),a("body").append(this.dpDiv))),this._inDialog=!1)},_tidyDialog:function(a){a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(b){if(a.datepicker._curInst){var c=a(b.target),d=a.datepicker._getInst(c[0]);(c[0].id===a.datepicker._mainDivId||0!==c.parents("#"+a.datepicker._mainDivId).length||c.hasClass(a.datepicker.markerClassName)||c.closest("."+a.datepicker._triggerClass).length||!a.datepicker._datepickerShowing||a.datepicker._inDialog&&a.blockUI)&&(!c.hasClass(a.datepicker.markerClassName)||a.datepicker._curInst===d)||a.datepicker._hideDatepicker()}},_adjustDate:function(b,c,d){var e=a(b),f=this._getInst(e[0]);this._isDisabledDatepicker(e[0])||(this._adjustInstDate(f,c+("M"===d?this._get(f,"showCurrentAtPos"):0),d),this._updateDatepicker(f))},_gotoToday:function(b){var c,d=a(b),e=this._getInst(d[0]);this._get(e,"gotoCurrent")&&e.currentDay?(e.selectedDay=e.currentDay,e.drawMonth=e.selectedMonth=e.currentMonth,e.drawYear=e.selectedYear=e.currentYear):(c=new Date,e.selectedDay=c.getDate(),e.drawMonth=e.selectedMonth=c.getMonth(),e.drawYear=e.selectedYear=c.getFullYear()),this._notifyChange(e),this._adjustDate(d)},_selectMonthYear:function(b,c,d){var e=a(b),f=this._getInst(e[0]);f["selected"+("M"===d?"Month":"Year")]=f["draw"+("M"===d?"Month":"Year")]=parseInt(c.options[c.selectedIndex].value,10),this._notifyChange(f),this._adjustDate(e)},_selectDay:function(b,c,d,e){var f,g=a(b);a(e).hasClass(this._unselectableClass)||this._isDisabledDatepicker(g[0])||(f=this._getInst(g[0]),f.selectedDay=f.currentDay=a("a",e).html(),f.selectedMonth=f.currentMonth=c,f.selectedYear=f.currentYear=d,this._selectDate(b,this._formatDate(f,f.currentDay,f.currentMonth,f.currentYear)))},_clearDate:function(b){var c=a(b);this._selectDate(c,"")},_selectDate:function(b,c){var d,e=a(b),f=this._getInst(e[0]);c=null!=c?c:this._formatDate(f),f.input&&f.input.val(c),this._updateAlternate(f),d=this._get(f,"onSelect"),d?d.apply(f.input?f.input[0]:null,[c,f]):f.input&&f.input.trigger("change"),f.inline?this._updateDatepicker(f):(this._hideDatepicker(),this._lastInput=f.input[0],"object"!=typeof f.input[0]&&f.input.focus(),this._lastInput=null)},_updateAlternate:function(b){var c,d,e,f=this._get(b,"altField");f&&(c=this._get(b,"altFormat")||this._get(b,"dateFormat"),d=this._getDate(b),e=this.formatDate(c,d,this._getFormatConfig(b)),a(f).each(function(){a(this).val(e)}))},noWeekends:function(a){var b=a.getDay();return[b>0&&b<6,""]},iso8601Week:function(a){var b,c=new Date(a.getTime());return c.setDate(c.getDate()+4-(c.getDay()||7)),b=c.getTime(),c.setMonth(0),c.setDate(1),Math.floor(Math.round((b-c)/864e5)/7)+1},parseDate:function(b,c,d){if(null==b||null==c)throw"Invalid arguments";if(c="object"==typeof c?c.toString():c+"",""===c)return null;var e,f,g,h,i=0,j=(d?d.shortYearCutoff:null)||this._defaults.shortYearCutoff,k="string"!=typeof j?j:(new Date).getFullYear()%100+parseInt(j,10),l=(d?d.dayNamesShort:null)||this._defaults.dayNamesShort,m=(d?d.dayNames:null)||this._defaults.dayNames,n=(d?d.monthNamesShort:null)||this._defaults.monthNamesShort,o=(d?d.monthNames:null)||this._defaults.monthNames,p=-1,q=-1,r=-1,s=-1,t=!1,u=function(a){var c=e+1<b.length&&b.charAt(e+1)===a;return c&&e++,c},v=function(a){var b=u(a),d="@"===a?14:"!"===a?20:"y"===a&&b?4:"o"===a?3:2,e="y"===a?d:1,f=new RegExp("^\\d{"+e+","+d+"}"),g=c.substring(i).match(f);if(!g)throw"Missing number at position "+i;return i+=g[0].length,parseInt(g[0],10)},w=function(b,d,e){var f=-1,g=a.map(u(b)?e:d,function(a,b){return[[b,a]]}).sort(function(a,b){return-(a[1].length-b[1].length)});if(a.each(g,function(a,b){var d=b[1];if(c.substr(i,d.length).toLowerCase()===d.toLowerCase())return f=b[0],i+=d.length,!1}),f!==-1)return f+1;throw"Unknown name at position "+i},x=function(){if(c.charAt(i)!==b.charAt(e))throw"Unexpected literal at position "+i;i++};for(e=0;e<b.length;e++)if(t)"'"!==b.charAt(e)||u("'")?x():t=!1;else switch(b.charAt(e)){case"d":r=v("d");break;case"D":w("D",l,m);break;case"o":s=v("o");break;case"m":q=v("m");break;case"M":q=w("M",n,o);break;case"y":p=v("y");break;case"@":h=new Date(v("@")),p=h.getFullYear(),q=h.getMonth()+1,r=h.getDate();break;case"!":h=new Date((v("!")-this._ticksTo1970)/1e4),p=h.getFullYear(),q=h.getMonth()+1,r=h.getDate();break;case"'":u("'")?x():t=!0;break;default:x()}if(i<c.length&&(g=c.substr(i),!/^\s+/.test(g)))throw"Extra/unparsed characters found in date: "+g;if(p===-1?p=(new Date).getFullYear():p<100&&(p+=(new Date).getFullYear()-(new Date).getFullYear()%100+(p<=k?0:-100)),s>-1)for(q=1,r=s;;){if(f=this._getDaysInMonth(p,q-1),r<=f)break;q++,r-=f}if(h=this._daylightSavingAdjust(new Date(p,q-1,r)),h.getFullYear()!==p||h.getMonth()+1!==q||h.getDate()!==r)throw"Invalid date";return h},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925))*60*60*1e7,formatDate:function(a,b,c){if(!b)return"";var d,e=(c?c.dayNamesShort:null)||this._defaults.dayNamesShort,f=(c?c.dayNames:null)||this._defaults.dayNames,g=(c?c.monthNamesShort:null)||this._defaults.monthNamesShort,h=(c?c.monthNames:null)||this._defaults.monthNames,i=function(b){var c=d+1<a.length&&a.charAt(d+1)===b;return c&&d++,c},j=function(a,b,c){var d=""+b;if(i(a))for(;d.length<c;)d="0"+d;return d},k=function(a,b,c,d){return i(a)?d[b]:c[b]},l="",m=!1;if(b)for(d=0;d<a.length;d++)if(m)"'"!==a.charAt(d)||i("'")?l+=a.charAt(d):m=!1;else switch(a.charAt(d)){case"d":l+=j("d",b.getDate(),2);break;case"D":l+=k("D",b.getDay(),e,f);break;case"o":l+=j("o",Math.round((new Date(b.getFullYear(),b.getMonth(),b.getDate()).getTime()-new Date(b.getFullYear(),0,0).getTime())/864e5),3);break;case"m":l+=j("m",b.getMonth()+1,2);break;case"M":l+=k("M",b.getMonth(),g,h);break;case"y":l+=i("y")?b.getFullYear():(b.getYear()%100<10?"0":"")+b.getYear()%100;break;case"@":l+=b.getTime();break;case"!":l+=1e4*b.getTime()+this._ticksTo1970;break;case"'":i("'")?l+="'":m=!0;break;default:l+=a.charAt(d)}return l},_possibleChars:function(a){var b,c="",d=!1,e=function(c){var d=b+1<a.length&&a.charAt(b+1)===c;return d&&b++,d};for(b=0;b<a.length;b++)if(d)"'"!==a.charAt(b)||e("'")?c+=a.charAt(b):d=!1;else switch(a.charAt(b)){case"d":case"m":case"y":case"@":c+="0123456789";break;case"D":case"M":return null;case"'":e("'")?c+="'":d=!0;break;default:c+=a.charAt(b)}return c},_get:function(a,b){return void 0!==a.settings[b]?a.settings[b]:this._defaults[b]},_setDateFromField:function(a,b){if(a.input.val()!==a.lastVal){var c=this._get(a,"dateFormat"),d=a.lastVal=a.input?a.input.val():null,e=this._getDefaultDate(a),f=e,g=this._getFormatConfig(a);try{f=this.parseDate(c,d,g)||e}catch(h){d=b?"":d}a.selectedDay=f.getDate(),a.drawMonth=a.selectedMonth=f.getMonth(),a.drawYear=a.selectedYear=f.getFullYear(),a.currentDay=d?f.getDate():0,a.currentMonth=d?f.getMonth():0,a.currentYear=d?f.getFullYear():0,this._adjustInstDate(a)}},_getDefaultDate:function(a){return this._restrictMinMax(a,this._determineDate(a,this._get(a,"defaultDate"),new Date))},_determineDate:function(b,c,d){var e=function(a){var b=new Date;return b.setDate(b.getDate()+a),b},f=function(c){try{return a.datepicker.parseDate(a.datepicker._get(b,"dateFormat"),c,a.datepicker._getFormatConfig(b))}catch(d){}for(var e=(c.toLowerCase().match(/^c/)?a.datepicker._getDate(b):null)||new Date,f=e.getFullYear(),g=e.getMonth(),h=e.getDate(),i=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,j=i.exec(c);j;){switch(j[2]||"d"){case"d":case"D":h+=parseInt(j[1],10);break;case"w":case"W":h+=7*parseInt(j[1],10);break;case"m":case"M":g+=parseInt(j[1],10),h=Math.min(h,a.datepicker._getDaysInMonth(f,g));break;case"y":case"Y":f+=parseInt(j[1],10),h=Math.min(h,a.datepicker._getDaysInMonth(f,g))}j=i.exec(c)}return new Date(f,g,h)},g=null==c||""===c?d:"string"==typeof c?f(c):"number"==typeof c?isNaN(c)?d:e(c):new Date(c.getTime());return g=g&&"Invalid Date"===g.toString()?d:g,g&&(g.setHours(0),g.setMinutes(0),g.setSeconds(0),g.setMilliseconds(0)),this._daylightSavingAdjust(g)},_daylightSavingAdjust:function(a){return a?(a.setHours(a.getHours()>12?a.getHours()+2:0),a):null},_setDate:function(a,b,c){var d=!b,e=a.selectedMonth,f=a.selectedYear,g=this._restrictMinMax(a,this._determineDate(a,b,new Date));a.selectedDay=a.currentDay=g.getDate(),a.drawMonth=a.selectedMonth=a.currentMonth=g.getMonth(),a.drawYear=a.selectedYear=a.currentYear=g.getFullYear(),e===a.selectedMonth&&f===a.selectedYear||c||this._notifyChange(a),this._adjustInstDate(a),a.input&&a.input.val(d?"":this._formatDate(a))},_getDate:function(a){var b=!a.currentYear||a.input&&""===a.input.val()?null:this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay));return b},_attachHandlers:function(b){var c=this._get(b,"stepMonths"),d="#"+b.id.replace(/\\\\/g,"\\");b.dpDiv.find("[data-handler]").map(function(){var b={prev:function(){a.datepicker._adjustDate(d,-c,"M")},next:function(){a.datepicker._adjustDate(d,+c,"M")},hide:function(){a.datepicker._hideDatepicker()},today:function(){a.datepicker._gotoToday(d)},selectDay:function(){return a.datepicker._selectDay(d,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return a.datepicker._selectMonthYear(d,this,"M"),!1},selectYear:function(){return a.datepicker._selectMonthYear(d,this,"Y"),!1}};a(this).bind(this.getAttribute("data-event"),b[this.getAttribute("data-handler")])})},_generateHTML:function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O=new Date,P=this._daylightSavingAdjust(new Date(O.getFullYear(),O.getMonth(),O.getDate())),Q=this._get(a,"isRTL"),R=this._get(a,"showButtonPanel"),S=this._get(a,"hideIfNoPrevNext"),T=this._get(a,"navigationAsDateFormat"),U=this._getNumberOfMonths(a),V=this._get(a,"showCurrentAtPos"),W=this._get(a,"stepMonths"),X=1!==U[0]||1!==U[1],Y=this._daylightSavingAdjust(a.currentDay?new Date(a.currentYear,a.currentMonth,a.currentDay):new Date(9999,9,9)),Z=this._getMinMaxDate(a,"min"),$=this._getMinMaxDate(a,"max"),_=a.drawMonth-V,aa=a.drawYear;if(_<0&&(_+=12,aa--),$)for(b=this._daylightSavingAdjust(new Date($.getFullYear(),$.getMonth()-U[0]*U[1]+1,$.getDate())),b=Z&&b<Z?Z:b;this._daylightSavingAdjust(new Date(aa,_,1))>b;)_--,_<0&&(_=11,aa--);for(a.drawMonth=_,a.drawYear=aa,c=this._get(a,"prevText"),c=T?this.formatDate(c,this._daylightSavingAdjust(new Date(aa,_-W,1)),this._getFormatConfig(a)):c,d=this._canAdjustMonth(a,-1,aa,_)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+c+"'><span class='ui-icon ui-icon-circle-triangle-"+(Q?"e":"w")+"'>"+c+"</span></a>":S?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+c+"'><span class='ui-icon ui-icon-circle-triangle-"+(Q?"e":"w")+"'>"+c+"</span></a>",e=this._get(a,"nextText"),e=T?this.formatDate(e,this._daylightSavingAdjust(new Date(aa,_+W,1)),this._getFormatConfig(a)):e,f=this._canAdjustMonth(a,1,aa,_)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+e+"'><span class='ui-icon ui-icon-circle-triangle-"+(Q?"w":"e")+"'>"+e+"</span></a>":S?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+e+"'><span class='ui-icon ui-icon-circle-triangle-"+(Q?"w":"e")+"'>"+e+"</span></a>",g=this._get(a,"currentText"),h=this._get(a,"gotoCurrent")&&a.currentDay?Y:P,g=T?this.formatDate(g,h,this._getFormatConfig(a)):g,i=a.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(a,"closeText")+"</button>",j=R?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(Q?i:"")+(this._isInRange(a,h)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+g+"</button>":"")+(Q?"":i)+"</div>":"",k=parseInt(this._get(a,"firstDay"),10),k=isNaN(k)?0:k,l=this._get(a,"showWeek"),m=this._get(a,"dayNames"),n=this._get(a,"dayNamesMin"),o=this._get(a,"monthNames"),p=this._get(a,"monthNamesShort"),q=this._get(a,"beforeShowDay"),r=this._get(a,"showOtherMonths"),s=this._get(a,"selectOtherMonths"),t=this._getDefaultDate(a),u="",w=0;w<U[0];w++){for(x="",this.maxRows=4,y=0;y<U[1];y++){if(z=this._daylightSavingAdjust(new Date(aa,_,a.selectedDay)),A=" ui-corner-all",B="",X){if(B+="<div class='ui-datepicker-group",U[1]>1)switch(y){case 0:B+=" ui-datepicker-group-first",A=" ui-corner-"+(Q?"right":"left");break;case U[1]-1:B+=" ui-datepicker-group-last",A=" ui-corner-"+(Q?"left":"right");break;default:B+=" ui-datepicker-group-middle",A=""}B+="'>"}for(B+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+A+"'>"+(/all|left/.test(A)&&0===w?Q?f:d:"")+(/all|right/.test(A)&&0===w?Q?d:f:"")+this._generateMonthYearHeader(a,_,aa,Z,$,w>0||y>0,o,p)+"</div><table class='ui-datepicker-calendar'><thead><tr>",C=l?"<th class='ui-datepicker-week-col'>"+this._get(a,"weekHeader")+"</th>":"",v=0;v<7;v++)D=(v+k)%7,C+="<th scope='col'"+((v+k+6)%7>=5?" class='ui-datepicker-week-end'":"")+"><span title='"+m[D]+"'>"+n[D]+"</span></th>";for(B+=C+"</tr></thead><tbody>",E=this._getDaysInMonth(aa,_),aa===a.selectedYear&&_===a.selectedMonth&&(a.selectedDay=Math.min(a.selectedDay,E)),F=(this._getFirstDayOfMonth(aa,_)-k+7)%7,G=Math.ceil((F+E)/7),H=X&&this.maxRows>G?this.maxRows:G,this.maxRows=H,I=this._daylightSavingAdjust(new Date(aa,_,1-F)),J=0;J<H;J++){for(B+="<tr>",K=l?"<td class='ui-datepicker-week-col'>"+this._get(a,"calculateWeek")(I)+"</td>":"",v=0;v<7;v++)L=q?q.apply(a.input?a.input[0]:null,[I]):[!0,""],M=I.getMonth()!==_,N=M&&!s||!L[0]||Z&&I<Z||$&&I>$,K+="<td class='"+((v+k+6)%7>=5?" ui-datepicker-week-end":"")+(M?" ui-datepicker-other-month":"")+(I.getTime()===z.getTime()&&_===a.selectedMonth&&a._keyEvent||t.getTime()===I.getTime()&&t.getTime()===z.getTime()?" "+this._dayOverClass:"")+(N?" "+this._unselectableClass+" ui-state-disabled":"")+(M&&!r?"":" "+L[1]+(I.getTime()===Y.getTime()?" "+this._currentClass:"")+(I.getTime()===P.getTime()?" ui-datepicker-today":""))+"'"+(M&&!r||!L[2]?"":" title='"+L[2].replace(/'/g,"&#39;")+"'")+(N?"":" data-handler='selectDay' data-event='click' data-month='"+I.getMonth()+"' data-year='"+I.getFullYear()+"'")+">"+(M&&!r?"&#xa0;":N?"<span class='ui-state-default'>"+I.getDate()+"</span>":"<a class='ui-state-default"+(I.getTime()===P.getTime()?" ui-state-highlight":"")+(I.getTime()===Y.getTime()?" ui-state-active":"")+(M?" ui-priority-secondary":"")+"' href='#'>"+I.getDate()+"</a>")+"</td>",I.setDate(I.getDate()+1),I=this._daylightSavingAdjust(I);B+=K+"</tr>"}_++,_>11&&(_=0,aa++),B+="</tbody></table>"+(X?"</div>"+(U[0]>0&&y===U[1]-1?"<div class='ui-datepicker-row-break'></div>":""):""),x+=B}u+=x}return u+=j,a._keyEvent=!1,u},_generateMonthYearHeader:function(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q=this._get(a,"changeMonth"),r=this._get(a,"changeYear"),s=this._get(a,"showMonthAfterYear"),t="<div class='ui-datepicker-title'>",u="";if(f||!q)u+="<span class='ui-datepicker-month'>"+g[b]+"</span>";else{
for(i=d&&d.getFullYear()===c,j=e&&e.getFullYear()===c,u+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",k=0;k<12;k++)(!i||k>=d.getMonth())&&(!j||k<=e.getMonth())&&(u+="<option value='"+k+"'"+(k===b?" selected='selected'":"")+">"+h[k]+"</option>");u+="</select>"}if(s||(t+=u+(!f&&q&&r?"":"&#xa0;")),!a.yearshtml)if(a.yearshtml="",f||!r)t+="<span class='ui-datepicker-year'>"+c+"</span>";else{for(l=this._get(a,"yearRange").split(":"),m=(new Date).getFullYear(),n=function(a){var b=a.match(/c[+\-].*/)?c+parseInt(a.substring(1),10):a.match(/[+\-].*/)?m+parseInt(a,10):parseInt(a,10);return isNaN(b)?m:b},o=n(l[0]),p=Math.max(o,n(l[1]||"")),o=d?Math.max(o,d.getFullYear()):o,p=e?Math.min(p,e.getFullYear()):p,a.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";o<=p;o++)a.yearshtml+="<option value='"+o+"'"+(o===c?" selected='selected'":"")+">"+o+"</option>";a.yearshtml+="</select>",t+=a.yearshtml,a.yearshtml=null}return t+=this._get(a,"yearSuffix"),s&&(t+=(!f&&q&&r?"":"&#xa0;")+u),t+="</div>"},_adjustInstDate:function(a,b,c){var d=a.drawYear+("Y"===c?b:0),e=a.drawMonth+("M"===c?b:0),f=Math.min(a.selectedDay,this._getDaysInMonth(d,e))+("D"===c?b:0),g=this._restrictMinMax(a,this._daylightSavingAdjust(new Date(d,e,f)));a.selectedDay=g.getDate(),a.drawMonth=a.selectedMonth=g.getMonth(),a.drawYear=a.selectedYear=g.getFullYear(),"M"!==c&&"Y"!==c||this._notifyChange(a)},_restrictMinMax:function(a,b){var c=this._getMinMaxDate(a,"min"),d=this._getMinMaxDate(a,"max"),e=c&&b<c?c:b;return d&&e>d?d:e},_notifyChange:function(a){var b=this._get(a,"onChangeMonthYear");b&&b.apply(a.input?a.input[0]:null,[a.selectedYear,a.selectedMonth+1,a])},_getNumberOfMonths:function(a){var b=this._get(a,"numberOfMonths");return null==b?[1,1]:"number"==typeof b?[1,b]:b},_getMinMaxDate:function(a,b){return this._determineDate(a,this._get(a,b+"Date"),null)},_getDaysInMonth:function(a,b){return 32-this._daylightSavingAdjust(new Date(a,b,32)).getDate()},_getFirstDayOfMonth:function(a,b){return new Date(a,b,1).getDay()},_canAdjustMonth:function(a,b,c,d){var e=this._getNumberOfMonths(a),f=this._daylightSavingAdjust(new Date(c,d+(b<0?b:e[0]*e[1]),1));return b<0&&f.setDate(this._getDaysInMonth(f.getFullYear(),f.getMonth())),this._isInRange(a,f)},_isInRange:function(a,b){var c,d,e=this._getMinMaxDate(a,"min"),f=this._getMinMaxDate(a,"max"),g=null,h=null,i=this._get(a,"yearRange");return i&&(c=i.split(":"),d=(new Date).getFullYear(),g=parseInt(c[0],10),h=parseInt(c[1],10),c[0].match(/[+\-].*/)&&(g+=d),c[1].match(/[+\-].*/)&&(h+=d)),(!e||b.getTime()>=e.getTime())&&(!f||b.getTime()<=f.getTime())&&(!g||b.getFullYear()>=g)&&(!h||b.getFullYear()<=h)},_getFormatConfig:function(a){var b=this._get(a,"shortYearCutoff");return b="string"!=typeof b?b:(new Date).getFullYear()%100+parseInt(b,10),{shortYearCutoff:b,dayNamesShort:this._get(a,"dayNamesShort"),dayNames:this._get(a,"dayNames"),monthNamesShort:this._get(a,"monthNamesShort"),monthNames:this._get(a,"monthNames")}},_formatDate:function(a,b,c,d){b||(a.currentDay=a.selectedDay,a.currentMonth=a.selectedMonth,a.currentYear=a.selectedYear);var e=b?"object"==typeof b?b:this._daylightSavingAdjust(new Date(d,c,b)):this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay));return this.formatDate(this._get(a,"dateFormat"),e,this._getFormatConfig(a))}}),a.fn.datepicker=function(b){if(!this.length)return this;a.datepicker.initialized||(a(document).mousedown(a.datepicker._checkExternalClick),a.datepicker.initialized=!0),0===a("#"+a.datepicker._mainDivId).length&&a("body").append(a.datepicker.dpDiv);var c=Array.prototype.slice.call(arguments,1);return"string"!=typeof b||"isDisabled"!==b&&"getDate"!==b&&"widget"!==b?"option"===b&&2===arguments.length&&"string"==typeof arguments[1]?a.datepicker["_"+b+"Datepicker"].apply(a.datepicker,[this[0]].concat(c)):this.each(function(){"string"==typeof b?a.datepicker["_"+b+"Datepicker"].apply(a.datepicker,[this].concat(c)):a.datepicker._attachDatepicker(this,b)}):a.datepicker["_"+b+"Datepicker"].apply(a.datepicker,[this[0]].concat(c))},a.datepicker=new c,a.datepicker.initialized=!1,a.datepicker.uuid=(new Date).getTime(),a.datepicker.version="1.11.4",a.datepicker});
;/*! jQuery UI - v1.11.1 - 2014-08-13
* http://jqueryui.com
* Includes: datepicker-af.js, datepicker-ar-DZ.js, datepicker-ar.js, datepicker-az.js, datepicker-be.js, datepicker-bg.js, datepicker-bs.js, datepicker-ca.js, datepicker-cs.js, datepicker-cy-GB.js, datepicker-da.js, datepicker-de.js, datepicker-el.js, datepicker-en-AU.js, datepicker-en-GB.js, datepicker-en-NZ.js, datepicker-eo.js, datepicker-es.js, datepicker-et.js, datepicker-eu.js, datepicker-fa.js, datepicker-fi.js, datepicker-fo.js, datepicker-fr-CA.js, datepicker-fr-CH.js, datepicker-fr.js, datepicker-gl.js, datepicker-he.js, datepicker-hi.js, datepicker-hr.js, datepicker-hu.js, datepicker-hy.js, datepicker-id.js, datepicker-is.js, datepicker-it-CH.js, datepicker-it.js, datepicker-ja.js, datepicker-ka.js, datepicker-kk.js, datepicker-km.js, datepicker-ko.js, datepicker-ky.js, datepicker-lb.js, datepicker-lt.js, datepicker-lv.js, datepicker-mk.js, datepicker-ml.js, datepicker-ms.js, datepicker-nb.js, datepicker-nl-BE.js, datepicker-nl.js, datepicker-nn.js, datepicker-no.js, datepicker-pl.js, datepicker-pt-BR.js, datepicker-pt.js, datepicker-rm.js, datepicker-ro.js, datepicker-ru.js, datepicker-sk.js, datepicker-sl.js, datepicker-sq.js, datepicker-sr-SR.js, datepicker-sr.js, datepicker-sv.js, datepicker-ta.js, datepicker-th.js, datepicker-tj.js, datepicker-tr.js, datepicker-uk.js, datepicker-vi.js, datepicker-zh-CN.js, datepicker-zh-HK.js, datepicker-zh-TW.js
* Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */

(function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)})(function(e){var t=e.datepicker;t.regional.af={closeText:"Selekteer",prevText:"Vorige",nextText:"Volgende",currentText:"Vandag",monthNames:["Januarie","Februarie","Maart","April","Mei","Junie","Julie","Augustus","September","Oktober","November","Desember"],monthNamesShort:["Jan","Feb","Mrt","Apr","Mei","Jun","Jul","Aug","Sep","Okt","Nov","Des"],dayNames:["Sondag","Maandag","Dinsdag","Woensdag","Donderdag","Vrydag","Saterdag"],dayNamesShort:["Son","Maa","Din","Woe","Don","Vry","Sat"],dayNamesMin:["So","Ma","Di","Wo","Do","Vr","Sa"],weekHeader:"Wk",dateFormat:"dd/mm/yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},t.setDefaults(t.regional.af),t.regional.af,t.regional["ar-DZ"]={closeText:"إغلاق",prevText:"&#x3C;السابق",nextText:"التالي&#x3E;",currentText:"اليوم",monthNames:["جانفي","فيفري","مارس","أفريل","ماي","جوان","جويلية","أوت","سبتمبر","أكتوبر","نوفمبر","ديسمبر"],monthNamesShort:["1","2","3","4","5","6","7","8","9","10","11","12"],dayNames:["الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],dayNamesShort:["الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],dayNamesMin:["الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],weekHeader:"أسبوع",dateFormat:"dd/mm/yy",firstDay:6,isRTL:!0,showMonthAfterYear:!1,yearSuffix:""},t.setDefaults(t.regional["ar-DZ"]),t.regional["ar-DZ"],t.regional.ar={closeText:"إغلاق",prevText:"&#x3C;السابق",nextText:"التالي&#x3E;",currentText:"اليوم",monthNames:["كانون الثاني","شباط","آذار","نيسان","مايو","حزيران","تموز","آب","أيلول","تشرين الأول","تشرين الثاني","كانون الأول"],monthNamesShort:["1","2","3","4","5","6","7","8","9","10","11","12"],dayNames:["الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],dayNamesShort:["الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],dayNamesMin:["ح","ن","ث","ر","خ","ج","س"],weekHeader:"أسبوع",dateFormat:"dd/mm/yy",firstDay:6,isRTL:!0,showMonthAfterYear:!1,yearSuffix:""},t.setDefaults(t.regional.ar),t.regional.ar,t.regional.az={closeText:"Bağla",prevText:"&#x3C;Geri",nextText:"İrəli&#x3E;",currentText:"Bugün",monthNames:["Yanvar","Fevral","Mart","Aprel","May","İyun","İyul","Avqust","Sentyabr","Oktyabr","Noyabr","Dekabr"],monthNamesShort:["Yan","Fev","Mar","Apr","May","İyun","İyul","Avq","Sen","Okt","Noy","Dek"],dayNames:["Bazar","Bazar ertəsi","Çərşənbə axşamı","Çərşənbə","Cümə axşamı","Cümə","Şənbə"],dayNamesShort:["B","Be","Ça","Ç","Ca","C","Ş"],dayNamesMin:["B","B","Ç","С","Ç","C","Ş"],weekHeader:"Hf",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},t.setDefaults(t.regional.az),t.regional.az,t.regional.be={closeText:"Зачыніць",prevText:"&larr;Папяр.",nextText:"Наст.&rarr;",currentText:"Сёньня",monthNames:["Студзень","Люты","Сакавік","Красавік","Травень","Чэрвень","Ліпень","Жнівень","Верасень","Кастрычнік","Лістапад","Сьнежань"],monthNamesShort:["Сту","Лют","Сак","Кра","Тра","Чэр","Ліп","Жні","Вер","Кас","Ліс","Сьн"],dayNames:["нядзеля","панядзелак","аўторак","серада","чацьвер","пятніца","субота"],dayNamesShort:["ндз","пнд","аўт","срд","чцв","птн","сбт"],dayNamesMin:["Нд","Пн","Аў","Ср","Чц","Пт","Сб"],weekHeader:"Тд",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},t.setDefaults(t.regional.be),t.regional.be,t.regional.bg={closeText:"затвори",prevText:"&#x3C;назад",nextText:"напред&#x3E;",nextBigText:"&#x3E;&#x3E;",currentText:"днес",monthNames:["Януари","Февруари","Март","Април","Май","Юни","Юли","Август","Септември","Октомври","Ноември","Декември"],monthNamesShort:["Яну","Фев","Мар","Апр","Май","Юни","Юли","Авг","Сеп","Окт","Нов","Дек"],dayNames:["Неделя","Понеделник","Вторник","Сряда","Четвъртък","Петък","Събота"],dayNamesShort:["Нед","Пон","Вто","Сря","Чет","Пет","Съб"],dayNamesMin:["Не","По","Вт","Ср","Че","Пе","Съ"],weekHeader:"Wk",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},t.setDefaults(t.regional.bg),t.regional.bg,t.regional.bs={closeText:"Zatvori",prevText:"&#x3C;",nextText:"&#x3E;",currentText:"Danas",monthNames:["Januar","Februar","Mart","April","Maj","Juni","Juli","August","Septembar","Oktobar","Novembar","Decembar"],monthNamesShort:["Jan","Feb","Mar","Apr","Maj","Jun","Jul","Aug","Sep","Okt","Nov","Dec"],dayNames:["Nedelja","Ponedeljak","Utorak","Srijeda","Četvrtak","Petak","Subota"],dayNamesShort:["Ned","Pon","Uto","Sri","Čet","Pet","Sub"],dayNamesMin:["Ne","Po","Ut","Sr","Če","Pe","Su"],weekHeader:"Wk",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},t.setDefaults(t.regional.bs),t.regional.bs,t.regional.ca={closeText:"Tanca",prevText:"Anterior",nextText:"Següent",currentText:"Avui",monthNames:["gener","febrer","març","abril","maig","juny","juliol","agost","setembre","octubre","novembre","desembre"],monthNamesShort:["gen","feb","març","abr","maig","juny","jul","ag","set","oct","nov","des"],dayNames:["diumenge","dilluns","dimarts","dimecres","dijous","divendres","dissabte"],dayNamesShort:["dg","dl","dt","dc","dj","dv","ds"],dayNamesMin:["dg","dl","dt","dc","dj","dv","ds"],weekHeader:"Set",dateFormat:"dd/mm/yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},t.setDefaults(t.regional.ca),t.regional.ca,t.regional.cs={closeText:"Zavřít",prevText:"&#x3C;Dříve",nextText:"Později&#x3E;",currentText:"Nyní",monthNames:["leden","únor","březen","duben","květen","červen","červenec","srpen","září","říjen","listopad","prosinec"],monthNamesShort:["led","úno","bře","dub","kvě","čer","čvc","srp","zář","říj","lis","pro"],dayNames:["neděle","pondělí","úterý","středa","čtvrtek","pátek","sobota"],dayNamesShort:["ne","po","út","st","čt","pá","so"],dayNamesMin:["ne","po","út","st","čt","pá","so"],weekHeader:"Týd",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},t.setDefaults(t.regional.cs),t.regional.cs,t.regional["cy-GB"]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["Ionawr","Chwefror","Mawrth","Ebrill","Mai","Mehefin","Gorffennaf","Awst","Medi","Hydref","Tachwedd","Rhagfyr"],monthNamesShort:["Ion","Chw","Maw","Ebr","Mai","Meh","Gor","Aws","Med","Hyd","Tac","Rha"],dayNames:["Dydd Sul","Dydd Llun","Dydd Mawrth","Dydd Mercher","Dydd Iau","Dydd Gwener","Dydd Sadwrn"],dayNamesShort:["Sul","Llu","Maw","Mer","Iau","Gwe","Sad"],dayNamesMin:["Su","Ll","Ma","Me","Ia","Gw","Sa"],weekHeader:"Wy",dateFormat:"dd/mm/yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},t.setDefaults(t.regional["cy-GB"]),t.regional["cy-GB"],t.regional.da={closeText:"Luk",prevText:"&#x3C;Forrige",nextText:"Næste&#x3E;",currentText:"Idag",monthNames:["Januar","Februar","Marts","April","Maj","Juni","Juli","August","September","Oktober","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","Maj","Jun","Jul","Aug","Sep","Okt","Nov","Dec"],dayNames:["Søndag","Mandag","Tirsdag","Onsdag","Torsdag","Fredag","Lørdag"],dayNamesShort:["Søn","Man","Tir","Ons","Tor","Fre","Lør"],dayNamesMin:["Sø","Ma","Ti","On","To","Fr","Lø"],weekHeader:"Uge",dateFormat:"dd-mm-yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},t.setDefaults(t.regional.da),t.regional.da,t.regional.de={closeText:"Schließen",prevText:"&#x3C;Zurück",nextText:"Vor&#x3E;",currentText:"Heute",monthNames:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],monthNamesShort:["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],dayNames:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],dayNamesShort:["So","Mo","Di","Mi","Do","Fr","Sa"],dayNamesMin:["So","Mo","Di","Mi","Do","Fr","Sa"],weekHeader:"KW",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},t.setDefaults(t.regional.de),t.regional.de,t.regional.el={closeText:"Κλείσιμο",prevText:"Προηγούμενος",nextText:"Επόμενος",currentText:"Τρέχων Μήνας",monthNames:["Ιανουάριος","Φεβρουάριος","Μάρτιος","Απρίλιος","Μάιος","Ιούνιος","Ιούλιος","Αύγουστος","Σεπτέμβριος","Οκτώβριος","Νοέμβριος","Δεκέμβριος"],monthNamesShort:["Ιαν","Φεβ","Μαρ","Απρ","Μαι","Ιουν","Ιουλ","Αυγ","Σεπ","Οκτ","Νοε","Δεκ"],dayNames:["Κυριακή","Δευτέρα","Τρίτη","Τετάρτη","Πέμπτη","Παρασκευή","Σάββατο"],dayNamesShort:["Κυρ","Δευ","Τρι","Τετ","Πεμ","Παρ","Σαβ"],dayNamesMin:["Κυ","Δε","Τρ","Τε","Πε","Πα","Σα"],weekHeader:"Εβδ",dateFormat:"dd/mm/yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},t.setDefaults(t.regional.el),t.regional.el,t.regional["en-AU"]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"dd/mm/yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},t.setDefaults(t.regional["en-AU"]),t.regional["en-AU"],t.regional["en-GB"]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"dd/mm/yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},t.setDefaults(t.regional["en-GB"]),t.regional["en-GB"],t.regional["en-NZ"]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"dd/mm/yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},t.setDefaults(t.regional["en-NZ"]),t.regional["en-NZ"],t.regional.eo={closeText:"Fermi",prevText:"&#x3C;Anta",nextText:"Sekv&#x3E;",currentText:"Nuna",monthNames:["Januaro","Februaro","Marto","Aprilo","Majo","Junio","Julio","Aŭgusto","Septembro","Oktobro","Novembro","Decembro"],monthNamesShort:["Jan","Feb","Mar","Apr","Maj","Jun","Jul","Aŭg","Sep","Okt","Nov","Dec"],dayNames:["Dimanĉo","Lundo","Mardo","Merkredo","Ĵaŭdo","Vendredo","Sabato"],dayNamesShort:["Dim","Lun","Mar","Mer","Ĵaŭ","Ven","Sab"],dayNamesMin:["Di","Lu","Ma","Me","Ĵa","Ve","Sa"],weekHeader:"Sb",dateFormat:"dd/mm/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},t.setDefaults(t.regional.eo),t.regional.eo,t.regional.es={closeText:"Cerrar",prevText:"&#x3C;Ant",nextText:"Sig&#x3E;",currentText:"Hoy",monthNames:["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"],monthNamesShort:["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"],dayNames:["domingo","lunes","martes","miércoles","jueves","viernes","sábado"],dayNamesShort:["dom","lun","mar","mié","jue","vie","sáb"],dayNamesMin:["D","L","M","X","J","V","S"],weekHeader:"Sm",dateFormat:"dd/mm/yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},t.setDefaults(t.regional.es),t.regional.es,t.regional.et={closeText:"Sulge",prevText:"Eelnev",nextText:"Järgnev",currentText:"Täna",monthNames:["Jaanuar","Veebruar","Märts","Aprill","Mai","Juuni","Juuli","August","September","Oktoober","November","Detsember"],monthNamesShort:["Jaan","Veebr","Märts","Apr","Mai","Juuni","Juuli","Aug","Sept","Okt","Nov","Dets"],dayNames:["Pühapäev","Esmaspäev","Teisipäev","Kolmapäev","Neljapäev","Reede","Laupäev"],dayNamesShort:["Pühap","Esmasp","Teisip","Kolmap","Neljap","Reede","Laup"],dayNamesMin:["P","E","T","K","N","R","L"],weekHeader:"näd",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},t.setDefaults(t.regional.et),t.regional.et,t.regional.eu={closeText:"Egina",prevText:"&#x3C;Aur",nextText:"Hur&#x3E;",currentText:"Gaur",monthNames:["urtarrila","otsaila","martxoa","apirila","maiatza","ekaina","uztaila","abuztua","iraila","urria","azaroa","abendua"],monthNamesShort:["urt.","ots.","mar.","api.","mai.","eka.","uzt.","abu.","ira.","urr.","aza.","abe."],dayNames:["igandea","astelehena","asteartea","asteazkena","osteguna","ostirala","larunbata"],dayNamesShort:["ig.","al.","ar.","az.","og.","ol.","lr."],dayNamesMin:["ig","al","ar","az","og","ol","lr"],weekHeader:"As",dateFormat:"yy-mm-dd",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},t.setDefaults(t.regional.eu),t.regional.eu,t.regional.fa={closeText:"بستن",prevText:"&#x3C;قبلی",nextText:"بعدی&#x3E;",currentText:"امروز",monthNames:["فروردين","ارديبهشت","خرداد","تير","مرداد","شهريور","مهر","آبان","آذر","دی","بهمن","اسفند"],monthNamesShort:["1","2","3","4","5","6","7","8","9","10","11","12"],dayNames:["يکشنبه","دوشنبه","سهشنبه","چهارشنبه","پنجشنبه","جمعه","شنبه"],dayNamesShort:["ی","د","س","چ","پ","ج","ش"],dayNamesMin:["ی","د","س","چ","پ","ج","ش"],weekHeader:"هف",dateFormat:"yy/mm/dd",firstDay:6,isRTL:!0,showMonthAfterYear:!1,yearSuffix:""},t.setDefaults(t.regional.fa),t.regional.fa,t.regional.fi={closeText:"Sulje",prevText:"&#xAB;Edellinen",nextText:"Seuraava&#xBB;",currentText:"Tänään",monthNames:["Tammikuu","Helmikuu","Maaliskuu","Huhtikuu","Toukokuu","Kesäkuu","Heinäkuu","Elokuu","Syyskuu","Lokakuu","Marraskuu","Joulukuu"],monthNamesShort:["Tammi","Helmi","Maalis","Huhti","Touko","Kesä","Heinä","Elo","Syys","Loka","Marras","Joulu"],dayNamesShort:["Su","Ma","Ti","Ke","To","Pe","La"],dayNames:["Sunnuntai","Maanantai","Tiistai","Keskiviikko","Torstai","Perjantai","Lauantai"],dayNamesMin:["Su","Ma","Ti","Ke","To","Pe","La"],weekHeader:"Vk",dateFormat:"d.m.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},t.setDefaults(t.regional.fi),t.regional.fi,t.regional.fo={closeText:"Lat aftur",prevText:"&#x3C;Fyrra",nextText:"Næsta&#x3E;",currentText:"Í dag",monthNames:["Januar","Februar","Mars","Apríl","Mei","Juni","Juli","August","September","Oktober","November","Desember"],monthNamesShort:["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Aug","Sep","Okt","Nov","Des"],dayNames:["Sunnudagur","Mánadagur","Týsdagur","Mikudagur","Hósdagur","Fríggjadagur","Leyardagur"],dayNamesShort:["Sun","Mán","Týs","Mik","Hós","Frí","Ley"],dayNamesMin:["Su","Má","Tý","Mi","Hó","Fr","Le"],weekHeader:"Vk",dateFormat:"dd-mm-yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},t.setDefaults(t.regional.fo),t.regional.fo,t.regional["fr-CA"]={closeText:"Fermer",prevText:"Précédent",nextText:"Suivant",currentText:"Aujourd'hui",monthNames:["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"],monthNamesShort:["janv.","févr.","mars","avril","mai","juin","juil.","août","sept.","oct.","nov.","déc."],dayNames:["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],dayNamesShort:["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],dayNamesMin:["D","L","M","M","J","V","S"],weekHeader:"Sem.",dateFormat:"yy-mm-dd",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},t.setDefaults(t.regional["fr-CA"]),t.regional["fr-CA"],t.regional["fr-CH"]={closeText:"Fermer",prevText:"&#x3C;Préc",nextText:"Suiv&#x3E;",currentText:"Courant",monthNames:["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"],monthNamesShort:["janv.","févr.","mars","avril","mai","juin","juil.","août","sept.","oct.","nov.","déc."],dayNames:["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],dayNamesShort:["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],dayNamesMin:["D","L","M","M","J","V","S"],weekHeader:"Sm",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},t.setDefaults(t.regional["fr-CH"]),t.regional["fr-CH"],t.regional.fr={closeText:"Fermer",prevText:"Précédent",nextText:"Suivant",currentText:"Aujourd'hui",monthNames:["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"],monthNamesShort:["janv.","févr.","mars","avril","mai","juin","juil.","août","sept.","oct.","nov.","déc."],dayNames:["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],dayNamesShort:["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],dayNamesMin:["D","L","M","M","J","V","S"],weekHeader:"Sem.",dateFormat:"dd/mm/yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},t.setDefaults(t.regional.fr),t.regional.fr,t.regional.gl={closeText:"Pechar",prevText:"&#x3C;Ant",nextText:"Seg&#x3E;",currentText:"Hoxe",monthNames:["Xaneiro","Febreiro","Marzo","Abril","Maio","Xuño","Xullo","Agosto","Setembro","Outubro","Novembro","Decembro"],monthNamesShort:["Xan","Feb","Mar","Abr","Mai","Xuñ","Xul","Ago","Set","Out","Nov","Dec"],dayNames:["Domingo","Luns","Martes","Mércores","Xoves","Venres","Sábado"],dayNamesShort:["Dom","Lun","Mar","Mér","Xov","Ven","Sáb"],dayNamesMin:["Do","Lu","Ma","Mé","Xo","Ve","Sá"],weekHeader:"Sm",dateFormat:"dd/mm/yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},t.setDefaults(t.regional.gl),t.regional.gl,t.regional.he={closeText:"סגור",prevText:"&#x3C;הקודם",nextText:"הבא&#x3E;",currentText:"היום",monthNames:["ינואר","פברואר","מרץ","אפריל","מאי","יוני","יולי","אוגוסט","ספטמבר","אוקטובר","נובמבר","דצמבר"],monthNamesShort:["ינו","פבר","מרץ","אפר","מאי","יוני","יולי","אוג","ספט","אוק","נוב","דצמ"],dayNames:["ראשון","שני","שלישי","רביעי","חמישי","שישי","שבת"],dayNamesShort:["א'","ב'","ג'","ד'","ה'","ו'","שבת"],dayNamesMin:["א'","ב'","ג'","ד'","ה'","ו'","שבת"],weekHeader:"Wk",dateFormat:"dd/mm/yy",firstDay:0,isRTL:!0,showMonthAfterYear:!1,yearSuffix:""},t.setDefaults(t.regional.he),t.regional.he,t.regional.hi={closeText:"बंद",prevText:"पिछला",nextText:"अगला",currentText:"आज",monthNames:["जनवरी ","फरवरी","मार्च","अप्रेल","मई","जून","जूलाई","अगस्त ","सितम्बर","अक्टूबर","नवम्बर","दिसम्बर"],monthNamesShort:["जन","फर","मार्च","अप्रेल","मई","जून","जूलाई","अग","सित","अक्ट","नव","दि"],dayNames:["रविवार","सोमवार","मंगलवार","बुधवार","गुरुवार","शुक्रवार","शनिवार"],dayNamesShort:["रवि","सोम","मंगल","बुध","गुरु","शुक्र","शनि"],dayNamesMin:["रवि","सोम","मंगल","बुध","गुरु","शुक्र","शनि"],weekHeader:"हफ्ता",dateFormat:"dd/mm/yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},t.setDefaults(t.regional.hi),t.regional.hi,t.regional.hr={closeText:"Zatvori",prevText:"&#x3C;",nextText:"&#x3E;",currentText:"Danas",monthNames:["Siječanj","Veljača","Ožujak","Travanj","Svibanj","Lipanj","Srpanj","Kolovoz","Rujan","Listopad","Studeni","Prosinac"],monthNamesShort:["Sij","Velj","Ožu","Tra","Svi","Lip","Srp","Kol","Ruj","Lis","Stu","Pro"],dayNames:["Nedjelja","Ponedjeljak","Utorak","Srijeda","Četvrtak","Petak","Subota"],dayNamesShort:["Ned","Pon","Uto","Sri","Čet","Pet","Sub"],dayNamesMin:["Ne","Po","Ut","Sr","Če","Pe","Su"],weekHeader:"Tje",dateFormat:"dd.mm.yy.",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},t.setDefaults(t.regional.hr),t.regional.hr,t.regional.hu={closeText:"bezár",prevText:"vissza",nextText:"előre",currentText:"ma",monthNames:["Január","Február","Március","Április","Május","Június","Július","Augusztus","Szeptember","Október","November","December"],monthNamesShort:["Jan","Feb","Már","Ápr","Máj","Jún","Júl","Aug","Szep","Okt","Nov","Dec"],dayNames:["Vasárnap","Hétfő","Kedd","Szerda","Csütörtök","Péntek","Szombat"],dayNamesShort:["Vas","Hét","Ked","Sze","Csü","Pén","Szo"],dayNamesMin:["V","H","K","Sze","Cs","P","Szo"],weekHeader:"Hét",dateFormat:"yy.mm.dd.",firstDay:1,isRTL:!1,showMonthAfterYear:!0,yearSuffix:""},t.setDefaults(t.regional.hu),t.regional.hu,t.regional.hy={closeText:"Փակել",prevText:"&#x3C;Նախ.",nextText:"Հաջ.&#x3E;",currentText:"Այսօր",monthNames:["Հունվար","Փետրվար","Մարտ","Ապրիլ","Մայիս","Հունիս","Հուլիս","Օգոստոս","Սեպտեմբեր","Հոկտեմբեր","Նոյեմբեր","Դեկտեմբեր"],monthNamesShort:["Հունվ","Փետր","Մարտ","Ապր","Մայիս","Հունիս","Հուլ","Օգս","Սեպ","Հոկ","Նոյ","Դեկ"],dayNames:["կիրակի","եկուշաբթի","երեքշաբթի","չորեքշաբթի","հինգշաբթի","ուրբաթ","շաբաթ"],dayNamesShort:["կիր","երկ","երք","չրք","հնգ","ուրբ","շբթ"],dayNamesMin:["կիր","երկ","երք","չրք","հնգ","ուրբ","շբթ"],weekHeader:"ՇԲՏ",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},t.setDefaults(t.regional.hy),t.regional.hy,t.regional.id={closeText:"Tutup",prevText:"&#x3C;mundur",nextText:"maju&#x3E;",currentText:"hari ini",monthNames:["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","Nopember","Desember"],monthNamesShort:["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agus","Sep","Okt","Nop","Des"],dayNames:["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"],dayNamesShort:["Min","Sen","Sel","Rab","kam","Jum","Sab"],dayNamesMin:["Mg","Sn","Sl","Rb","Km","jm","Sb"],weekHeader:"Mg",dateFormat:"dd/mm/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},t.setDefaults(t.regional.id),t.regional.id,t.regional.is={closeText:"Loka",prevText:"&#x3C; Fyrri",nextText:"Næsti &#x3E;",currentText:"Í dag",monthNames:["Janúar","Febrúar","Mars","Apríl","Maí","Júní","Júlí","Ágúst","September","Október","Nóvember","Desember"],monthNamesShort:["Jan","Feb","Mar","Apr","Maí","Jún","Júl","Ágú","Sep","Okt","Nóv","Des"],dayNames:["Sunnudagur","Mánudagur","Þriðjudagur","Miðvikudagur","Fimmtudagur","Föstudagur","Laugardagur"],dayNamesShort:["Sun","Mán","Þri","Mið","Fim","Fös","Lau"],dayNamesMin:["Su","Má","Þr","Mi","Fi","Fö","La"],weekHeader:"Vika",dateFormat:"dd.mm.yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},t.setDefaults(t.regional.is),t.regional.is,t.regional["it-CH"]={closeText:"Chiudi",prevText:"&#x3C;Prec",nextText:"Succ&#x3E;",currentText:"Oggi",monthNames:["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"],monthNamesShort:["Gen","Feb","Mar","Apr","Mag","Giu","Lug","Ago","Set","Ott","Nov","Dic"],dayNames:["Domenica","Lunedì","Martedì","Mercoledì","Giovedì","Venerdì","Sabato"],dayNamesShort:["Dom","Lun","Mar","Mer","Gio","Ven","Sab"],dayNamesMin:["Do","Lu","Ma","Me","Gi","Ve","Sa"],weekHeader:"Sm",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},t.setDefaults(t.regional["it-CH"]),t.regional["it-CH"],t.regional.it={closeText:"Chiudi",prevText:"&#x3C;Prec",nextText:"Succ&#x3E;",currentText:"Oggi",monthNames:["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"],monthNamesShort:["Gen","Feb","Mar","Apr","Mag","Giu","Lug","Ago","Set","Ott","Nov","Dic"],dayNames:["Domenica","Lunedì","Martedì","Mercoledì","Giovedì","Venerdì","Sabato"],dayNamesShort:["Dom","Lun","Mar","Mer","Gio","Ven","Sab"],dayNamesMin:["Do","Lu","Ma","Me","Gi","Ve","Sa"],weekHeader:"Sm",dateFormat:"dd/mm/yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},t.setDefaults(t.regional.it),t.regional.it,t.regional.ja={closeText:"閉じる",prevText:"&#x3C;前",nextText:"次&#x3E;",currentText:"今日",monthNames:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],monthNamesShort:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],dayNames:["日曜日","月曜日","火曜日","水曜日","木曜日","金曜日","土曜日"],dayNamesShort:["日","月","火","水","木","金","土"],dayNamesMin:["日","月","火","水","木","金","土"],weekHeader:"週",dateFormat:"yy/mm/dd",firstDay:0,isRTL:!1,showMonthAfterYear:!0,yearSuffix:"年"},t.setDefaults(t.regional.ja),t.regional.ja,t.regional.ka={closeText:"დახურვა",prevText:"&#x3c; წინა",nextText:"შემდეგი &#x3e;",currentText:"დღეს",monthNames:["იანვარი","თებერვალი","მარტი","აპრილი","მაისი","ივნისი","ივლისი","აგვისტო","სექტემბერი","ოქტომბერი","ნოემბერი","დეკემბერი"],monthNamesShort:["იან","თებ","მარ","აპრ","მაი","ივნ","ივლ","აგვ","სექ","ოქტ","ნოე","დეკ"],dayNames:["კვირა","ორშაბათი","სამშაბათი","ოთხშაბათი","ხუთშაბათი","პარასკევი","შაბათი"],dayNamesShort:["კვ","ორშ","სამ","ოთხ","ხუთ","პარ","შაბ"],dayNamesMin:["კვ","ორშ","სამ","ოთხ","ხუთ","პარ","შაბ"],weekHeader:"კვირა",dateFormat:"dd-mm-yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},t.setDefaults(t.regional.ka),t.regional.ka,t.regional.kk={closeText:"Жабу",prevText:"&#x3C;Алдыңғы",nextText:"Келесі&#x3E;",currentText:"Бүгін",monthNames:["Қаңтар","Ақпан","Наурыз","Сәуір","Мамыр","Маусым","Шілде","Тамыз","Қыркүйек","Қазан","Қараша","Желтоқсан"],monthNamesShort:["Қаң","Ақп","Нау","Сәу","Мам","Мау","Шіл","Там","Қыр","Қаз","Қар","Жел"],dayNames:["Жексенбі","Дүйсенбі","Сейсенбі","Сәрсенбі","Бейсенбі","Жұма","Сенбі"],dayNamesShort:["жкс","дсн","ссн","срс","бсн","жма","снб"],dayNamesMin:["Жк","Дс","Сс","Ср","Бс","Жм","Сн"],weekHeader:"Не",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},t.setDefaults(t.regional.kk),t.regional.kk,t.regional.km={closeText:"ធ្វើរួច",prevText:"មុន",nextText:"បន្ទាប់",currentText:"ថ្ងៃនេះ",monthNames:["មករា","កុម្ភៈ","មីនា","មេសា","ឧសភា","មិថុនា","កក្កដា","សីហា","កញ្ញា","តុលា","វិច្ឆិកា","ធ្នូ"],monthNamesShort:["មករា","កុម្ភៈ","មីនា","មេសា","ឧសភា","មិថុនា","កក្កដា","សីហា","កញ្ញា","តុលា","វិច្ឆិកា","ធ្នូ"],dayNames:["អាទិត្យ","ចន្ទ","អង្គារ","ពុធ","ព្រហស្បតិ៍","សុក្រ","សៅរ៍"],dayNamesShort:["អា","ច","អ","ពុ","ព្រហ","សុ","សៅ"],dayNamesMin:["អា","ច","អ","ពុ","ព្រហ","សុ","សៅ"],weekHeader:"សប្ដាហ៍",dateFormat:"dd-mm-yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},t.setDefaults(t.regional.km),t.regional.km,t.regional.ko={closeText:"닫기",prevText:"이전달",nextText:"다음달",currentText:"오늘",monthNames:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],monthNamesShort:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],dayNames:["일요일","월요일","화요일","수요일","목요일","금요일","토요일"],dayNamesShort:["일","월","화","수","목","금","토"],dayNamesMin:["일","월","화","수","목","금","토"],weekHeader:"Wk",dateFormat:"yy-mm-dd",firstDay:0,isRTL:!1,showMonthAfterYear:!0,yearSuffix:"년"},t.setDefaults(t.regional.ko),t.regional.ko,t.regional.ky={closeText:"Жабуу",prevText:"&#x3c;Мур",nextText:"Кий&#x3e;",currentText:"Бүгүн",monthNames:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],monthNamesShort:["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"],dayNames:["жекшемби","дүйшөмбү","шейшемби","шаршемби","бейшемби","жума","ишемби"],dayNamesShort:["жек","дүй","шей","шар","бей","жум","ише"],dayNamesMin:["Жк","Дш","Шш","Шр","Бш","Жм","Иш"],weekHeader:"Жум",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},t.setDefaults(t.regional.ky),t.regional.ky,t.regional.lb={closeText:"Fäerdeg",prevText:"Zréck",nextText:"Weider",currentText:"Haut",monthNames:["Januar","Februar","Mäerz","Abrëll","Mee","Juni","Juli","August","September","Oktober","November","Dezember"],monthNamesShort:["Jan","Feb","Mäe","Abr","Mee","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],dayNames:["Sonndeg","Méindeg","Dënschdeg","Mëttwoch","Donneschdeg","Freideg","Samschdeg"],dayNamesShort:["Son","Méi","Dën","Mët","Don","Fre","Sam"],dayNamesMin:["So","Mé","Dë","Më","Do","Fr","Sa"],weekHeader:"W",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},t.setDefaults(t.regional.lb),t.regional.lb,t.regional.lt={closeText:"Uždaryti",prevText:"&#x3C;Atgal",nextText:"Pirmyn&#x3E;",currentText:"Šiandien",monthNames:["Sausis","Vasaris","Kovas","Balandis","Gegužė","Birželis","Liepa","Rugpjūtis","Rugsėjis","Spalis","Lapkritis","Gruodis"],monthNamesShort:["Sau","Vas","Kov","Bal","Geg","Bir","Lie","Rugp","Rugs","Spa","Lap","Gru"],dayNames:["sekmadienis","pirmadienis","antradienis","trečiadienis","ketvirtadienis","penktadienis","šeštadienis"],dayNamesShort:["sek","pir","ant","tre","ket","pen","šeš"],dayNamesMin:["Se","Pr","An","Tr","Ke","Pe","Še"],weekHeader:"SAV",dateFormat:"yy-mm-dd",firstDay:1,isRTL:!1,showMonthAfterYear:!0,yearSuffix:""},t.setDefaults(t.regional.lt),t.regional.lt,t.regional.lv={closeText:"Aizvērt",prevText:"Iepr.",nextText:"Nāk.",currentText:"Šodien",monthNames:["Janvāris","Februāris","Marts","Aprīlis","Maijs","Jūnijs","Jūlijs","Augusts","Septembris","Oktobris","Novembris","Decembris"],monthNamesShort:["Jan","Feb","Mar","Apr","Mai","Jūn","Jūl","Aug","Sep","Okt","Nov","Dec"],dayNames:["svētdiena","pirmdiena","otrdiena","trešdiena","ceturtdiena","piektdiena","sestdiena"],dayNamesShort:["svt","prm","otr","tre","ctr","pkt","sst"],dayNamesMin:["Sv","Pr","Ot","Tr","Ct","Pk","Ss"],weekHeader:"Ned.",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},t.setDefaults(t.regional.lv),t.regional.lv,t.regional.mk={closeText:"Затвори",prevText:"&#x3C;",nextText:"&#x3E;",currentText:"Денес",monthNames:["Јануари","Февруари","Март","Април","Мај","Јуни","Јули","Август","Септември","Октомври","Ноември","Декември"],monthNamesShort:["Јан","Фев","Мар","Апр","Мај","Јун","Јул","Авг","Сеп","Окт","Ное","Дек"],dayNames:["Недела","Понеделник","Вторник","Среда","Четврток","Петок","Сабота"],dayNamesShort:["Нед","Пон","Вто","Сре","Чет","Пет","Саб"],dayNamesMin:["Не","По","Вт","Ср","Че","Пе","Са"],weekHeader:"Сед",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},t.setDefaults(t.regional.mk),t.regional.mk,t.regional.ml={closeText:"ശരി",prevText:"മുന്നത്തെ",nextText:"അടുത്തത് ",currentText:"ഇന്ന്",monthNames:["ജനുവരി","ഫെബ്രുവരി","മാര്ച്ച്","ഏപ്രില്","മേയ്","ജൂണ്","ജൂലൈ","ആഗസ്റ്റ്","സെപ്റ്റംബര്","ഒക്ടോബര്","നവംബര്","ഡിസംബര്"],monthNamesShort:["ജനു","ഫെബ്","മാര്","ഏപ്രി","മേയ്","ജൂണ്","ജൂലാ","ആഗ","സെപ്","ഒക്ടോ","നവം","ഡിസ"],dayNames:["ഞായര്","തിങ്കള്","ചൊവ്വ","ബുധന്","വ്യാഴം","വെള്ളി","ശനി"],dayNamesShort:["ഞായ","തിങ്ക","ചൊവ്വ","ബുധ","വ്യാഴം","വെള്ളി","ശനി"],dayNamesMin:["ഞാ","തി","ചൊ","ബു","വ്യാ","വെ","ശ"],weekHeader:"ആ",dateFormat:"dd/mm/yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},t.setDefaults(t.regional.ml),t.regional.ml,t.regional.ms={closeText:"Tutup",prevText:"&#x3C;Sebelum",nextText:"Selepas&#x3E;",currentText:"hari ini",monthNames:["Januari","Februari","Mac","April","Mei","Jun","Julai","Ogos","September","Oktober","November","Disember"],monthNamesShort:["Jan","Feb","Mac","Apr","Mei","Jun","Jul","Ogo","Sep","Okt","Nov","Dis"],dayNames:["Ahad","Isnin","Selasa","Rabu","Khamis","Jumaat","Sabtu"],dayNamesShort:["Aha","Isn","Sel","Rab","kha","Jum","Sab"],dayNamesMin:["Ah","Is","Se","Ra","Kh","Ju","Sa"],weekHeader:"Mg",dateFormat:"dd/mm/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},t.setDefaults(t.regional.ms),t.regional.ms,t.regional.nb={closeText:"Lukk",prevText:"&#xAB;Forrige",nextText:"Neste&#xBB;",currentText:"I dag",monthNames:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"],monthNamesShort:["jan","feb","mar","apr","mai","jun","jul","aug","sep","okt","nov","des"],dayNamesShort:["søn","man","tir","ons","tor","fre","lør"],dayNames:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"],dayNamesMin:["sø","ma","ti","on","to","fr","lø"],weekHeader:"Uke",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},t.setDefaults(t.regional.nb),t.regional.nb,t.regional["nl-BE"]={closeText:"Sluiten",prevText:"←",nextText:"→",currentText:"Vandaag",monthNames:["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"],monthNamesShort:["jan","feb","mrt","apr","mei","jun","jul","aug","sep","okt","nov","dec"],dayNames:["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"],dayNamesShort:["zon","maa","din","woe","don","vri","zat"],dayNamesMin:["zo","ma","di","wo","do","vr","za"],weekHeader:"Wk",dateFormat:"dd/mm/yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},t.setDefaults(t.regional["nl-BE"]),t.regional["nl-BE"],t.regional.nl={closeText:"Sluiten",prevText:"←",nextText:"→",currentText:"Vandaag",monthNames:["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"],monthNamesShort:["jan","feb","mrt","apr","mei","jun","jul","aug","sep","okt","nov","dec"],dayNames:["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"],dayNamesShort:["zon","maa","din","woe","don","vri","zat"],dayNamesMin:["zo","ma","di","wo","do","vr","za"],weekHeader:"Wk",dateFormat:"dd-mm-yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},t.setDefaults(t.regional.nl),t.regional.nl,t.regional.nn={closeText:"Lukk",prevText:"&#xAB;Førre",nextText:"Neste&#xBB;",currentText:"I dag",monthNames:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"],monthNamesShort:["jan","feb","mar","apr","mai","jun","jul","aug","sep","okt","nov","des"],dayNamesShort:["sun","mån","tys","ons","tor","fre","lau"],dayNames:["sundag","måndag","tysdag","onsdag","torsdag","fredag","laurdag"],dayNamesMin:["su","må","ty","on","to","fr","la"],weekHeader:"Veke",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},t.setDefaults(t.regional.nn),t.regional.nn,t.regional.no={closeText:"Lukk",prevText:"&#xAB;Forrige",nextText:"Neste&#xBB;",currentText:"I dag",monthNames:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"],monthNamesShort:["jan","feb","mar","apr","mai","jun","jul","aug","sep","okt","nov","des"],dayNamesShort:["søn","man","tir","ons","tor","fre","lør"],dayNames:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"],dayNamesMin:["sø","ma","ti","on","to","fr","lø"],weekHeader:"Uke",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},t.setDefaults(t.regional.no),t.regional.no,t.regional.pl={closeText:"Zamknij",prevText:"&#x3C;Poprzedni",nextText:"Następny&#x3E;",currentText:"Dziś",monthNames:["Styczeń","Luty","Marzec","Kwiecień","Maj","Czerwiec","Lipiec","Sierpień","Wrzesień","Październik","Listopad","Grudzień"],monthNamesShort:["Sty","Lu","Mar","Kw","Maj","Cze","Lip","Sie","Wrz","Pa","Lis","Gru"],dayNames:["Niedziela","Poniedziałek","Wtorek","Środa","Czwartek","Piątek","Sobota"],dayNamesShort:["Nie","Pn","Wt","Śr","Czw","Pt","So"],dayNamesMin:["N","Pn","Wt","Śr","Cz","Pt","So"],weekHeader:"Tydz",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},t.setDefaults(t.regional.pl),t.regional.pl,t.regional["pt-BR"]={closeText:"Fechar",prevText:"&#x3C;Anterior",nextText:"Próximo&#x3E;",currentText:"Hoje",monthNames:["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],monthNamesShort:["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"],dayNames:["Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado"],dayNamesShort:["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"],dayNamesMin:["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"],weekHeader:"Sm",dateFormat:"dd/mm/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},t.setDefaults(t.regional["pt-BR"]),t.regional["pt-BR"],t.regional.pt={closeText:"Fechar",prevText:"Anterior",nextText:"Seguinte",currentText:"Hoje",monthNames:["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],monthNamesShort:["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"],dayNames:["Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado"],dayNamesShort:["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"],dayNamesMin:["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"],weekHeader:"Sem",dateFormat:"dd/mm/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},t.setDefaults(t.regional.pt),t.regional.pt,t.regional.rm={closeText:"Serrar",prevText:"&#x3C;Suandant",nextText:"Precedent&#x3E;",currentText:"Actual",monthNames:["Schaner","Favrer","Mars","Avrigl","Matg","Zercladur","Fanadur","Avust","Settember","October","November","December"],monthNamesShort:["Scha","Fev","Mar","Avr","Matg","Zer","Fan","Avu","Sett","Oct","Nov","Dec"],dayNames:["Dumengia","Glindesdi","Mardi","Mesemna","Gievgia","Venderdi","Sonda"],dayNamesShort:["Dum","Gli","Mar","Mes","Gie","Ven","Som"],dayNamesMin:["Du","Gl","Ma","Me","Gi","Ve","So"],weekHeader:"emna",dateFormat:"dd/mm/yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},t.setDefaults(t.regional.rm),t.regional.rm,t.regional.ro={closeText:"Închide",prevText:"&#xAB; Luna precedentă",nextText:"Luna următoare &#xBB;",currentText:"Azi",monthNames:["Ianuarie","Februarie","Martie","Aprilie","Mai","Iunie","Iulie","August","Septembrie","Octombrie","Noiembrie","Decembrie"],monthNamesShort:["Ian","Feb","Mar","Apr","Mai","Iun","Iul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Duminică","Luni","Marţi","Miercuri","Joi","Vineri","Sâmbătă"],dayNamesShort:["Dum","Lun","Mar","Mie","Joi","Vin","Sâm"],dayNamesMin:["Du","Lu","Ma","Mi","Jo","Vi","Sâ"],weekHeader:"Săpt",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},t.setDefaults(t.regional.ro),t.regional.ro,t.regional.ru={closeText:"Закрыть",prevText:"&#x3C;Пред",nextText:"След&#x3E;",currentText:"Сегодня",monthNames:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],monthNamesShort:["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"],dayNames:["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"],dayNamesShort:["вск","пнд","втр","срд","чтв","птн","сбт"],dayNamesMin:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],weekHeader:"Нед",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},t.setDefaults(t.regional.ru),t.regional.ru,t.regional.sk={closeText:"Zavrieť",prevText:"&#x3C;Predchádzajúci",nextText:"Nasledujúci&#x3E;",currentText:"Dnes",monthNames:["január","február","marec","apríl","máj","jún","júl","august","september","október","november","december"],monthNamesShort:["Jan","Feb","Mar","Apr","Máj","Jún","Júl","Aug","Sep","Okt","Nov","Dec"],dayNames:["nedeľa","pondelok","utorok","streda","štvrtok","piatok","sobota"],dayNamesShort:["Ned","Pon","Uto","Str","Štv","Pia","Sob"],dayNamesMin:["Ne","Po","Ut","St","Št","Pia","So"],weekHeader:"Ty",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},t.setDefaults(t.regional.sk),t.regional.sk,t.regional.sl={closeText:"Zapri",prevText:"&#x3C;Prejšnji",nextText:"Naslednji&#x3E;",currentText:"Trenutni",monthNames:["Januar","Februar","Marec","April","Maj","Junij","Julij","Avgust","September","Oktober","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","Maj","Jun","Jul","Avg","Sep","Okt","Nov","Dec"],dayNames:["Nedelja","Ponedeljek","Torek","Sreda","Četrtek","Petek","Sobota"],dayNamesShort:["Ned","Pon","Tor","Sre","Čet","Pet","Sob"],dayNamesMin:["Ne","Po","To","Sr","Če","Pe","So"],weekHeader:"Teden",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},t.setDefaults(t.regional.sl),t.regional.sl,t.regional.sq={closeText:"mbylle",prevText:"&#x3C;mbrapa",nextText:"Përpara&#x3E;",currentText:"sot",monthNames:["Janar","Shkurt","Mars","Prill","Maj","Qershor","Korrik","Gusht","Shtator","Tetor","Nëntor","Dhjetor"],monthNamesShort:["Jan","Shk","Mar","Pri","Maj","Qer","Kor","Gus","Sht","Tet","Nën","Dhj"],dayNames:["E Diel","E Hënë","E Martë","E Mërkurë","E Enjte","E Premte","E Shtune"],dayNamesShort:["Di","Hë","Ma","Më","En","Pr","Sh"],dayNamesMin:["Di","Hë","Ma","Më","En","Pr","Sh"],weekHeader:"Ja",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},t.setDefaults(t.regional.sq),t.regional.sq,t.regional["sr-SR"]={closeText:"Zatvori",prevText:"&#x3C;",nextText:"&#x3E;",currentText:"Danas",monthNames:["Januar","Februar","Mart","April","Maj","Jun","Jul","Avgust","Septembar","Oktobar","Novembar","Decembar"],monthNamesShort:["Jan","Feb","Mar","Apr","Maj","Jun","Jul","Avg","Sep","Okt","Nov","Dec"],dayNames:["Nedelja","Ponedeljak","Utorak","Sreda","Četvrtak","Petak","Subota"],dayNamesShort:["Ned","Pon","Uto","Sre","Čet","Pet","Sub"],dayNamesMin:["Ne","Po","Ut","Sr","Če","Pe","Su"],weekHeader:"Sed",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},t.setDefaults(t.regional["sr-SR"]),t.regional["sr-SR"],t.regional.sr={closeText:"Затвори",prevText:"&#x3C;",nextText:"&#x3E;",currentText:"Данас",monthNames:["Јануар","Фебруар","Март","Април","Мај","Јун","Јул","Август","Септембар","Октобар","Новембар","Децембар"],monthNamesShort:["Јан","Феб","Мар","Апр","Мај","Јун","Јул","Авг","Сеп","Окт","Нов","Дец"],dayNames:["Недеља","Понедељак","Уторак","Среда","Четвртак","Петак","Субота"],dayNamesShort:["Нед","Пон","Уто","Сре","Чет","Пет","Суб"],dayNamesMin:["Не","По","Ут","Ср","Че","Пе","Су"],weekHeader:"Сед",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},t.setDefaults(t.regional.sr),t.regional.sr,t.regional.sv={closeText:"Stäng",prevText:"&#xAB;Förra",nextText:"Nästa&#xBB;",currentText:"Idag",monthNames:["Januari","Februari","Mars","April","Maj","Juni","Juli","Augusti","September","Oktober","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","Maj","Jun","Jul","Aug","Sep","Okt","Nov","Dec"],dayNamesShort:["Sön","Mån","Tis","Ons","Tor","Fre","Lör"],dayNames:["Söndag","Måndag","Tisdag","Onsdag","Torsdag","Fredag","Lördag"],dayNamesMin:["Sö","Må","Ti","On","To","Fr","Lö"],weekHeader:"Ve",dateFormat:"yy-mm-dd",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},t.setDefaults(t.regional.sv),t.regional.sv,t.regional.ta={closeText:"மூடு",prevText:"முன்னையது",nextText:"அடுத்தது",currentText:"இன்று",monthNames:["தை","மாசி","பங்குனி","சித்திரை","வைகாசி","ஆனி","ஆடி","ஆவணி","புரட்டாசி","ஐப்பசி","கார்த்திகை","மார்கழி"],monthNamesShort:["தை","மாசி","பங்","சித்","வைகா","ஆனி","ஆடி","ஆவ","புர","ஐப்","கார்","மார்"],dayNames:["ஞாயிற்றுக்கிழமை","திங்கட்கிழமை","செவ்வாய்க்கிழமை","புதன்கிழமை","வியாழக்கிழமை","வெள்ளிக்கிழமை","சனிக்கிழமை"],dayNamesShort:["ஞாயிறு","திங்கள்","செவ்வாய்","புதன்","வியாழன்","வெள்ளி","சனி"],dayNamesMin:["ஞா","தி","செ","பு","வி","வெ","ச"],weekHeader:"Не",dateFormat:"dd/mm/yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},t.setDefaults(t.regional.ta),t.regional.ta,t.regional.th={closeText:"ปิด",prevText:"&#xAB;&#xA0;ย้อน",nextText:"ถัดไป&#xA0;&#xBB;",currentText:"วันนี้",monthNames:["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"],monthNamesShort:["ม.ค.","ก.พ.","มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค."],dayNames:["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์"],dayNamesShort:["อา.","จ.","อ.","พ.","พฤ.","ศ.","ส."],dayNamesMin:["อา.","จ.","อ.","พ.","พฤ.","ศ.","ส."],weekHeader:"Wk",dateFormat:"dd/mm/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},t.setDefaults(t.regional.th),t.regional.th,t.regional.tj={closeText:"Идома",prevText:"&#x3c;Қафо",nextText:"Пеш&#x3e;",currentText:"Имрӯз",monthNames:["Январ","Феврал","Март","Апрел","Май","Июн","Июл","Август","Сентябр","Октябр","Ноябр","Декабр"],monthNamesShort:["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"],dayNames:["якшанбе","душанбе","сешанбе","чоршанбе","панҷшанбе","ҷумъа","шанбе"],dayNamesShort:["якш","душ","сеш","чор","пан","ҷум","шан"],dayNamesMin:["Як","Дш","Сш","Чш","Пш","Ҷм","Шн"],weekHeader:"Хф",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},t.setDefaults(t.regional.tj),t.regional.tj,t.regional.tr={closeText:"kapat",prevText:"&#x3C;geri",nextText:"ileri&#x3e",currentText:"bugün",monthNames:["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"],monthNamesShort:["Oca","Şub","Mar","Nis","May","Haz","Tem","Ağu","Eyl","Eki","Kas","Ara"],dayNames:["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"],dayNamesShort:["Pz","Pt","Sa","Ça","Pe","Cu","Ct"],dayNamesMin:["Pz","Pt","Sa","Ça","Pe","Cu","Ct"],weekHeader:"Hf",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},t.setDefaults(t.regional.tr),t.regional.tr,t.regional.uk={closeText:"Закрити",prevText:"&#x3C;",nextText:"&#x3E;",currentText:"Сьогодні",monthNames:["Січень","Лютий","Березень","Квітень","Травень","Червень","Липень","Серпень","Вересень","Жовтень","Листопад","Грудень"],monthNamesShort:["Січ","Лют","Бер","Кві","Тра","Чер","Лип","Сер","Вер","Жов","Лис","Гру"],dayNames:["неділя","понеділок","вівторок","середа","четвер","п’ятниця","субота"],dayNamesShort:["нед","пнд","вів","срд","чтв","птн","сбт"],dayNamesMin:["Нд","Пн","Вт","Ср","Чт","Пт","Сб"],weekHeader:"Тиж",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},t.setDefaults(t.regional.uk),t.regional.uk,t.regional.vi={closeText:"Đóng",prevText:"&#x3C;Trước",nextText:"Tiếp&#x3E;",currentText:"Hôm nay",monthNames:["Tháng Một","Tháng Hai","Tháng Ba","Tháng Tư","Tháng Năm","Tháng Sáu","Tháng Bảy","Tháng Tám","Tháng Chín","Tháng Mười","Tháng Mười Một","Tháng Mười Hai"],monthNamesShort:["Tháng 1","Tháng 2","Tháng 3","Tháng 4","Tháng 5","Tháng 6","Tháng 7","Tháng 8","Tháng 9","Tháng 10","Tháng 11","Tháng 12"],dayNames:["Chủ Nhật","Thứ Hai","Thứ Ba","Thứ Tư","Thứ Năm","Thứ Sáu","Thứ Bảy"],dayNamesShort:["CN","T2","T3","T4","T5","T6","T7"],dayNamesMin:["CN","T2","T3","T4","T5","T6","T7"],weekHeader:"Tu",dateFormat:"dd/mm/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},t.setDefaults(t.regional.vi),t.regional.vi,t.regional["zh-CN"]={closeText:"关闭",prevText:"&#x3C;上月",nextText:"下月&#x3E;",currentText:"今天",monthNames:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],monthNamesShort:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],dayNames:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],dayNamesShort:["周日","周一","周二","周三","周四","周五","周六"],dayNamesMin:["日","一","二","三","四","五","六"],weekHeader:"周",dateFormat:"yy-mm-dd",firstDay:1,isRTL:!1,showMonthAfterYear:!0,yearSuffix:"年"},t.setDefaults(t.regional["zh-CN"]),t.regional["zh-CN"],t.regional["zh-HK"]={closeText:"關閉",prevText:"&#x3C;上月",nextText:"下月&#x3E;",currentText:"今天",monthNames:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],monthNamesShort:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],dayNames:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],dayNamesShort:["周日","周一","周二","周三","周四","周五","周六"],dayNamesMin:["日","一","二","三","四","五","六"],weekHeader:"周",dateFormat:"dd-mm-yy",firstDay:0,isRTL:!1,showMonthAfterYear:!0,yearSuffix:"年"},t.setDefaults(t.regional["zh-HK"]),t.regional["zh-HK"],t.regional["zh-TW"]={closeText:"關閉",prevText:"&#x3C;上月",nextText:"下月&#x3E;",currentText:"今天",monthNames:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],monthNamesShort:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],dayNames:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],dayNamesShort:["周日","周一","周二","周三","周四","周五","周六"],dayNamesMin:["日","一","二","三","四","五","六"],weekHeader:"周",dateFormat:"yy/mm/dd",firstDay:1,isRTL:!1,showMonthAfterYear:!0,yearSuffix:"年"},t.setDefaults(t.regional["zh-TW"]),t.regional["zh-TW"]
});
;/*! jQuery Timepicker Addon - v1.6.1 - 2015-11-14
* http://trentrichardson.com/examples/timepicker
* Copyright (c) 2015 Trent Richardson; Licensed MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery","jquery-ui"],a):a(jQuery)}(function($){if($.ui.timepicker=$.ui.timepicker||{},!$.ui.timepicker.version){$.extend($.ui,{timepicker:{version:"1.6.1"}});var Timepicker=function(){this.regional=[],this.regional[""]={currentText:"Now",closeText:"Done",amNames:["AM","A"],pmNames:["PM","P"],timeFormat:"HH:mm",timeSuffix:"",timeOnlyTitle:"Choose Time",timeText:"Time",hourText:"Hour",minuteText:"Minute",secondText:"Second",millisecText:"Millisecond",microsecText:"Microsecond",timezoneText:"Time Zone",isRTL:!1},this._defaults={showButtonPanel:!0,timeOnly:!1,timeOnlyShowDate:!1,showHour:null,showMinute:null,showSecond:null,showMillisec:null,showMicrosec:null,showTimezone:null,showTime:!0,stepHour:1,stepMinute:1,stepSecond:1,stepMillisec:1,stepMicrosec:1,hour:0,minute:0,second:0,millisec:0,microsec:0,timezone:null,hourMin:0,minuteMin:0,secondMin:0,millisecMin:0,microsecMin:0,hourMax:23,minuteMax:59,secondMax:59,millisecMax:999,microsecMax:999,minDateTime:null,maxDateTime:null,maxTime:null,minTime:null,onSelect:null,hourGrid:0,minuteGrid:0,secondGrid:0,millisecGrid:0,microsecGrid:0,alwaysSetTime:!0,separator:" ",altFieldTimeOnly:!0,altTimeFormat:null,altSeparator:null,altTimeSuffix:null,altRedirectFocus:!0,pickerTimeFormat:null,pickerTimeSuffix:null,showTimepicker:!0,timezoneList:null,addSliderAccess:!1,sliderAccessArgs:null,controlType:"slider",oneLine:!1,defaultValue:null,parse:"strict",afterInject:null},$.extend(this._defaults,this.regional[""])};$.extend(Timepicker.prototype,{$input:null,$altInput:null,$timeObj:null,inst:null,hour_slider:null,minute_slider:null,second_slider:null,millisec_slider:null,microsec_slider:null,timezone_select:null,maxTime:null,minTime:null,hour:0,minute:0,second:0,millisec:0,microsec:0,timezone:null,hourMinOriginal:null,minuteMinOriginal:null,secondMinOriginal:null,millisecMinOriginal:null,microsecMinOriginal:null,hourMaxOriginal:null,minuteMaxOriginal:null,secondMaxOriginal:null,millisecMaxOriginal:null,microsecMaxOriginal:null,ampm:"",formattedDate:"",formattedTime:"",formattedDateTime:"",timezoneList:null,units:["hour","minute","second","millisec","microsec"],support:{},control:null,setDefaults:function(a){return extendRemove(this._defaults,a||{}),this},_newInst:function($input,opts){var tp_inst=new Timepicker,inlineSettings={},fns={},overrides,i;for(var attrName in this._defaults)if(this._defaults.hasOwnProperty(attrName)){var attrValue=$input.attr("time:"+attrName);if(attrValue)try{inlineSettings[attrName]=eval(attrValue)}catch(err){inlineSettings[attrName]=attrValue}}overrides={beforeShow:function(a,b){return $.isFunction(tp_inst._defaults.evnts.beforeShow)?tp_inst._defaults.evnts.beforeShow.call($input[0],a,b,tp_inst):void 0},onChangeMonthYear:function(a,b,c){$.isFunction(tp_inst._defaults.evnts.onChangeMonthYear)&&tp_inst._defaults.evnts.onChangeMonthYear.call($input[0],a,b,c,tp_inst)},onClose:function(a,b){tp_inst.timeDefined===!0&&""!==$input.val()&&tp_inst._updateDateTime(b),$.isFunction(tp_inst._defaults.evnts.onClose)&&tp_inst._defaults.evnts.onClose.call($input[0],a,b,tp_inst)}};for(i in overrides)overrides.hasOwnProperty(i)&&(fns[i]=opts[i]||this._defaults[i]||null);tp_inst._defaults=$.extend({},this._defaults,inlineSettings,opts,overrides,{evnts:fns,timepicker:tp_inst}),tp_inst.amNames=$.map(tp_inst._defaults.amNames,function(a){return a.toUpperCase()}),tp_inst.pmNames=$.map(tp_inst._defaults.pmNames,function(a){return a.toUpperCase()}),tp_inst.support=detectSupport(tp_inst._defaults.timeFormat+(tp_inst._defaults.pickerTimeFormat?tp_inst._defaults.pickerTimeFormat:"")+(tp_inst._defaults.altTimeFormat?tp_inst._defaults.altTimeFormat:"")),"string"==typeof tp_inst._defaults.controlType?("slider"===tp_inst._defaults.controlType&&"undefined"==typeof $.ui.slider&&(tp_inst._defaults.controlType="select"),tp_inst.control=tp_inst._controls[tp_inst._defaults.controlType]):tp_inst.control=tp_inst._defaults.controlType;var timezoneList=[-720,-660,-600,-570,-540,-480,-420,-360,-300,-270,-240,-210,-180,-120,-60,0,60,120,180,210,240,270,300,330,345,360,390,420,480,525,540,570,600,630,660,690,720,765,780,840];null!==tp_inst._defaults.timezoneList&&(timezoneList=tp_inst._defaults.timezoneList);var tzl=timezoneList.length,tzi=0,tzv=null;if(tzl>0&&"object"!=typeof timezoneList[0])for(;tzl>tzi;tzi++)tzv=timezoneList[tzi],timezoneList[tzi]={value:tzv,label:$.timepicker.timezoneOffsetString(tzv,tp_inst.support.iso8601)};return tp_inst._defaults.timezoneList=timezoneList,tp_inst.timezone=null!==tp_inst._defaults.timezone?$.timepicker.timezoneOffsetNumber(tp_inst._defaults.timezone):-1*(new Date).getTimezoneOffset(),tp_inst.hour=tp_inst._defaults.hour<tp_inst._defaults.hourMin?tp_inst._defaults.hourMin:tp_inst._defaults.hour>tp_inst._defaults.hourMax?tp_inst._defaults.hourMax:tp_inst._defaults.hour,tp_inst.minute=tp_inst._defaults.minute<tp_inst._defaults.minuteMin?tp_inst._defaults.minuteMin:tp_inst._defaults.minute>tp_inst._defaults.minuteMax?tp_inst._defaults.minuteMax:tp_inst._defaults.minute,tp_inst.second=tp_inst._defaults.second<tp_inst._defaults.secondMin?tp_inst._defaults.secondMin:tp_inst._defaults.second>tp_inst._defaults.secondMax?tp_inst._defaults.secondMax:tp_inst._defaults.second,tp_inst.millisec=tp_inst._defaults.millisec<tp_inst._defaults.millisecMin?tp_inst._defaults.millisecMin:tp_inst._defaults.millisec>tp_inst._defaults.millisecMax?tp_inst._defaults.millisecMax:tp_inst._defaults.millisec,tp_inst.microsec=tp_inst._defaults.microsec<tp_inst._defaults.microsecMin?tp_inst._defaults.microsecMin:tp_inst._defaults.microsec>tp_inst._defaults.microsecMax?tp_inst._defaults.microsecMax:tp_inst._defaults.microsec,tp_inst.ampm="",tp_inst.$input=$input,tp_inst._defaults.altField&&(tp_inst.$altInput=$(tp_inst._defaults.altField),tp_inst._defaults.altRedirectFocus===!0&&tp_inst.$altInput.css({cursor:"pointer"}).focus(function(){$input.trigger("focus")})),(0===tp_inst._defaults.minDate||0===tp_inst._defaults.minDateTime)&&(tp_inst._defaults.minDate=new Date),(0===tp_inst._defaults.maxDate||0===tp_inst._defaults.maxDateTime)&&(tp_inst._defaults.maxDate=new Date),void 0!==tp_inst._defaults.minDate&&tp_inst._defaults.minDate instanceof Date&&(tp_inst._defaults.minDateTime=new Date(tp_inst._defaults.minDate.getTime())),void 0!==tp_inst._defaults.minDateTime&&tp_inst._defaults.minDateTime instanceof Date&&(tp_inst._defaults.minDate=new Date(tp_inst._defaults.minDateTime.getTime())),void 0!==tp_inst._defaults.maxDate&&tp_inst._defaults.maxDate instanceof Date&&(tp_inst._defaults.maxDateTime=new Date(tp_inst._defaults.maxDate.getTime())),void 0!==tp_inst._defaults.maxDateTime&&tp_inst._defaults.maxDateTime instanceof Date&&(tp_inst._defaults.maxDate=new Date(tp_inst._defaults.maxDateTime.getTime())),tp_inst.$input.bind("focus",function(){tp_inst._onFocus()}),tp_inst},_addTimePicker:function(a){var b=$.trim(this.$altInput&&this._defaults.altFieldTimeOnly?this.$input.val()+" "+this.$altInput.val():this.$input.val());this.timeDefined=this._parseTime(b),this._limitMinMaxDateTime(a,!1),this._injectTimePicker(),this._afterInject()},_parseTime:function(a,b){if(this.inst||(this.inst=$.datepicker._getInst(this.$input[0])),b||!this._defaults.timeOnly){var c=$.datepicker._get(this.inst,"dateFormat");try{var d=parseDateTimeInternal(c,this._defaults.timeFormat,a,$.datepicker._getFormatConfig(this.inst),this._defaults);if(!d.timeObj)return!1;$.extend(this,d.timeObj)}catch(e){return $.timepicker.log("Error parsing the date/time string: "+e+"\ndate/time string = "+a+"\ntimeFormat = "+this._defaults.timeFormat+"\ndateFormat = "+c),!1}return!0}var f=$.datepicker.parseTime(this._defaults.timeFormat,a,this._defaults);return f?($.extend(this,f),!0):!1},_afterInject:function(){var a=this.inst.settings;$.isFunction(a.afterInject)&&a.afterInject.call(this)},_injectTimePicker:function(){var a=this.inst.dpDiv,b=this.inst.settings,c=this,d="",e="",f=null,g={},h={},i=null,j=0,k=0;if(0===a.find("div.ui-timepicker-div").length&&b.showTimepicker){var l=" ui_tpicker_unit_hide",m='<div class="ui-timepicker-div'+(b.isRTL?" ui-timepicker-rtl":"")+(b.oneLine&&"select"===b.controlType?" ui-timepicker-oneLine":"")+'"><dl><dt class="ui_tpicker_time_label'+(b.showTime?"":l)+'">'+b.timeText+'</dt><dd class="ui_tpicker_time '+(b.showTime?"":l)+'"><input class="ui_tpicker_time_input" '+(b.timeInput?"":"disabled")+"/></dd>";for(j=0,k=this.units.length;k>j;j++){if(d=this.units[j],e=d.substr(0,1).toUpperCase()+d.substr(1),f=null!==b["show"+e]?b["show"+e]:this.support[d],g[d]=parseInt(b[d+"Max"]-(b[d+"Max"]-b[d+"Min"])%b["step"+e],10),h[d]=0,m+='<dt class="ui_tpicker_'+d+"_label"+(f?"":l)+'">'+b[d+"Text"]+'</dt><dd class="ui_tpicker_'+d+(f?"":l)+'"><div class="ui_tpicker_'+d+"_slider"+(f?"":l)+'"></div>',f&&b[d+"Grid"]>0){if(m+='<div style="padding-left: 1px"><table class="ui-tpicker-grid-label"><tr>',"hour"===d)for(var n=b[d+"Min"];n<=g[d];n+=parseInt(b[d+"Grid"],10)){h[d]++;var o=$.datepicker.formatTime(this.support.ampm?"hht":"HH",{hour:n},b);m+='<td data-for="'+d+'">'+o+"</td>"}else for(var p=b[d+"Min"];p<=g[d];p+=parseInt(b[d+"Grid"],10))h[d]++,m+='<td data-for="'+d+'">'+(10>p?"0":"")+p+"</td>";m+="</tr></table></div>"}m+="</dd>"}var q=null!==b.showTimezone?b.showTimezone:this.support.timezone;m+='<dt class="ui_tpicker_timezone_label'+(q?"":l)+'">'+b.timezoneText+"</dt>",m+='<dd class="ui_tpicker_timezone'+(q?"":l)+'"></dd>',m+="</dl></div>";var r=$(m);for(b.timeOnly===!0&&(r.prepend('<div class="ui-widget-header ui-helper-clearfix ui-corner-all"><div class="ui-datepicker-title">'+b.timeOnlyTitle+"</div></div>"),a.find(".ui-datepicker-header, .ui-datepicker-calendar").hide()),j=0,k=c.units.length;k>j;j++)d=c.units[j],e=d.substr(0,1).toUpperCase()+d.substr(1),f=null!==b["show"+e]?b["show"+e]:this.support[d],c[d+"_slider"]=c.control.create(c,r.find(".ui_tpicker_"+d+"_slider"),d,c[d],b[d+"Min"],g[d],b["step"+e]),f&&b[d+"Grid"]>0&&(i=100*h[d]*b[d+"Grid"]/(g[d]-b[d+"Min"]),r.find(".ui_tpicker_"+d+" table").css({width:i+"%",marginLeft:b.isRTL?"0":i/(-2*h[d])+"%",marginRight:b.isRTL?i/(-2*h[d])+"%":"0",borderCollapse:"collapse"}).find("td").click(function(a){var b=$(this),e=b.html(),f=parseInt(e.replace(/[^0-9]/g),10),g=e.replace(/[^apm]/gi),h=b.data("for");"hour"===h&&(-1!==g.indexOf("p")&&12>f?f+=12:-1!==g.indexOf("a")&&12===f&&(f=0)),c.control.value(c,c[h+"_slider"],d,f),c._onTimeChange(),c._onSelectHandler()}).css({cursor:"pointer",width:100/h[d]+"%",textAlign:"center",overflow:"hidden"}));if(this.timezone_select=r.find(".ui_tpicker_timezone").append("<select></select>").find("select"),$.fn.append.apply(this.timezone_select,$.map(b.timezoneList,function(a,b){return $("<option />").val("object"==typeof a?a.value:a).text("object"==typeof a?a.label:a)})),"undefined"!=typeof this.timezone&&null!==this.timezone&&""!==this.timezone){var s=-1*new Date(this.inst.selectedYear,this.inst.selectedMonth,this.inst.selectedDay,12).getTimezoneOffset();s===this.timezone?selectLocalTimezone(c):this.timezone_select.val(this.timezone)}else"undefined"!=typeof this.hour&&null!==this.hour&&""!==this.hour?this.timezone_select.val(b.timezone):selectLocalTimezone(c);this.timezone_select.change(function(){c._onTimeChange(),c._onSelectHandler(),c._afterInject()});var t=a.find(".ui-datepicker-buttonpane");if(t.length?t.before(r):a.append(r),this.$timeObj=r.find(".ui_tpicker_time_input"),this.$timeObj.change(function(){var a=c.inst.settings.timeFormat,b=$.datepicker.parseTime(a,this.value),d=new Date;b?(d.setHours(b.hour),d.setMinutes(b.minute),d.setSeconds(b.second),$.datepicker._setTime(c.inst,d)):(this.value=c.formattedTime,this.blur())}),null!==this.inst){var u=this.timeDefined;this._onTimeChange(),this.timeDefined=u}if(this._defaults.addSliderAccess){var v=this._defaults.sliderAccessArgs,w=this._defaults.isRTL;v.isRTL=w,setTimeout(function(){if(0===r.find(".ui-slider-access").length){r.find(".ui-slider:visible").sliderAccess(v);var a=r.find(".ui-slider-access:eq(0)").outerWidth(!0);a&&r.find("table:visible").each(function(){var b=$(this),c=b.outerWidth(),d=b.css(w?"marginRight":"marginLeft").toString().replace("%",""),e=c-a,f=d*e/c+"%",g={width:e,marginRight:0,marginLeft:0};g[w?"marginRight":"marginLeft"]=f,b.css(g)})}},10)}c._limitMinMaxDateTime(this.inst,!0)}},_limitMinMaxDateTime:function(a,b){var c=this._defaults,d=new Date(a.selectedYear,a.selectedMonth,a.selectedDay);if(this._defaults.showTimepicker){if(null!==$.datepicker._get(a,"minDateTime")&&void 0!==$.datepicker._get(a,"minDateTime")&&d){var e=$.datepicker._get(a,"minDateTime"),f=new Date(e.getFullYear(),e.getMonth(),e.getDate(),0,0,0,0);(null===this.hourMinOriginal||null===this.minuteMinOriginal||null===this.secondMinOriginal||null===this.millisecMinOriginal||null===this.microsecMinOriginal)&&(this.hourMinOriginal=c.hourMin,this.minuteMinOriginal=c.minuteMin,this.secondMinOriginal=c.secondMin,this.millisecMinOriginal=c.millisecMin,this.microsecMinOriginal=c.microsecMin),a.settings.timeOnly||f.getTime()===d.getTime()?(this._defaults.hourMin=e.getHours(),this.hour<=this._defaults.hourMin?(this.hour=this._defaults.hourMin,this._defaults.minuteMin=e.getMinutes(),this.minute<=this._defaults.minuteMin?(this.minute=this._defaults.minuteMin,this._defaults.secondMin=e.getSeconds(),this.second<=this._defaults.secondMin?(this.second=this._defaults.secondMin,this._defaults.millisecMin=e.getMilliseconds(),this.millisec<=this._defaults.millisecMin?(this.millisec=this._defaults.millisecMin,this._defaults.microsecMin=e.getMicroseconds()):(this.microsec<this._defaults.microsecMin&&(this.microsec=this._defaults.microsecMin),this._defaults.microsecMin=this.microsecMinOriginal)):(this._defaults.millisecMin=this.millisecMinOriginal,this._defaults.microsecMin=this.microsecMinOriginal)):(this._defaults.secondMin=this.secondMinOriginal,this._defaults.millisecMin=this.millisecMinOriginal,this._defaults.microsecMin=this.microsecMinOriginal)):(this._defaults.minuteMin=this.minuteMinOriginal,this._defaults.secondMin=this.secondMinOriginal,this._defaults.millisecMin=this.millisecMinOriginal,this._defaults.microsecMin=this.microsecMinOriginal)):(this._defaults.hourMin=this.hourMinOriginal,this._defaults.minuteMin=this.minuteMinOriginal,this._defaults.secondMin=this.secondMinOriginal,this._defaults.millisecMin=this.millisecMinOriginal,this._defaults.microsecMin=this.microsecMinOriginal)}if(null!==$.datepicker._get(a,"maxDateTime")&&void 0!==$.datepicker._get(a,"maxDateTime")&&d){var g=$.datepicker._get(a,"maxDateTime"),h=new Date(g.getFullYear(),g.getMonth(),g.getDate(),0,0,0,0);(null===this.hourMaxOriginal||null===this.minuteMaxOriginal||null===this.secondMaxOriginal||null===this.millisecMaxOriginal)&&(this.hourMaxOriginal=c.hourMax,this.minuteMaxOriginal=c.minuteMax,this.secondMaxOriginal=c.secondMax,this.millisecMaxOriginal=c.millisecMax,this.microsecMaxOriginal=c.microsecMax),a.settings.timeOnly||h.getTime()===d.getTime()?(this._defaults.hourMax=g.getHours(),this.hour>=this._defaults.hourMax?(this.hour=this._defaults.hourMax,this._defaults.minuteMax=g.getMinutes(),this.minute>=this._defaults.minuteMax?(this.minute=this._defaults.minuteMax,this._defaults.secondMax=g.getSeconds(),this.second>=this._defaults.secondMax?(this.second=this._defaults.secondMax,this._defaults.millisecMax=g.getMilliseconds(),this.millisec>=this._defaults.millisecMax?(this.millisec=this._defaults.millisecMax,this._defaults.microsecMax=g.getMicroseconds()):(this.microsec>this._defaults.microsecMax&&(this.microsec=this._defaults.microsecMax),this._defaults.microsecMax=this.microsecMaxOriginal)):(this._defaults.millisecMax=this.millisecMaxOriginal,this._defaults.microsecMax=this.microsecMaxOriginal)):(this._defaults.secondMax=this.secondMaxOriginal,this._defaults.millisecMax=this.millisecMaxOriginal,this._defaults.microsecMax=this.microsecMaxOriginal)):(this._defaults.minuteMax=this.minuteMaxOriginal,this._defaults.secondMax=this.secondMaxOriginal,this._defaults.millisecMax=this.millisecMaxOriginal,this._defaults.microsecMax=this.microsecMaxOriginal)):(this._defaults.hourMax=this.hourMaxOriginal,this._defaults.minuteMax=this.minuteMaxOriginal,this._defaults.secondMax=this.secondMaxOriginal,this._defaults.millisecMax=this.millisecMaxOriginal,this._defaults.microsecMax=this.microsecMaxOriginal)}if(null!==a.settings.minTime){var i=new Date("01/01/1970 "+a.settings.minTime);this.hour<i.getHours()?(this.hour=this._defaults.hourMin=i.getHours(),this.minute=this._defaults.minuteMin=i.getMinutes()):this.hour===i.getHours()&&this.minute<i.getMinutes()?this.minute=this._defaults.minuteMin=i.getMinutes():this._defaults.hourMin<i.getHours()?(this._defaults.hourMin=i.getHours(),this._defaults.minuteMin=i.getMinutes()):this._defaults.hourMin===i.getHours()===this.hour&&this._defaults.minuteMin<i.getMinutes()?this._defaults.minuteMin=i.getMinutes():this._defaults.minuteMin=0}if(null!==a.settings.maxTime){var j=new Date("01/01/1970 "+a.settings.maxTime);this.hour>j.getHours()?(this.hour=this._defaults.hourMax=j.getHours(),this.minute=this._defaults.minuteMax=j.getMinutes()):this.hour===j.getHours()&&this.minute>j.getMinutes()?this.minute=this._defaults.minuteMax=j.getMinutes():this._defaults.hourMax>j.getHours()?(this._defaults.hourMax=j.getHours(),this._defaults.minuteMax=j.getMinutes()):this._defaults.hourMax===j.getHours()===this.hour&&this._defaults.minuteMax>j.getMinutes()?this._defaults.minuteMax=j.getMinutes():this._defaults.minuteMax=59}if(void 0!==b&&b===!0){var k=parseInt(this._defaults.hourMax-(this._defaults.hourMax-this._defaults.hourMin)%this._defaults.stepHour,10),l=parseInt(this._defaults.minuteMax-(this._defaults.minuteMax-this._defaults.minuteMin)%this._defaults.stepMinute,10),m=parseInt(this._defaults.secondMax-(this._defaults.secondMax-this._defaults.secondMin)%this._defaults.stepSecond,10),n=parseInt(this._defaults.millisecMax-(this._defaults.millisecMax-this._defaults.millisecMin)%this._defaults.stepMillisec,10),o=parseInt(this._defaults.microsecMax-(this._defaults.microsecMax-this._defaults.microsecMin)%this._defaults.stepMicrosec,10);this.hour_slider&&(this.control.options(this,this.hour_slider,"hour",{min:this._defaults.hourMin,max:k,step:this._defaults.stepHour}),this.control.value(this,this.hour_slider,"hour",this.hour-this.hour%this._defaults.stepHour)),this.minute_slider&&(this.control.options(this,this.minute_slider,"minute",{min:this._defaults.minuteMin,max:l,step:this._defaults.stepMinute}),this.control.value(this,this.minute_slider,"minute",this.minute-this.minute%this._defaults.stepMinute)),this.second_slider&&(this.control.options(this,this.second_slider,"second",{min:this._defaults.secondMin,max:m,step:this._defaults.stepSecond}),this.control.value(this,this.second_slider,"second",this.second-this.second%this._defaults.stepSecond)),this.millisec_slider&&(this.control.options(this,this.millisec_slider,"millisec",{min:this._defaults.millisecMin,max:n,step:this._defaults.stepMillisec}),this.control.value(this,this.millisec_slider,"millisec",this.millisec-this.millisec%this._defaults.stepMillisec)),this.microsec_slider&&(this.control.options(this,this.microsec_slider,"microsec",{min:this._defaults.microsecMin,max:o,step:this._defaults.stepMicrosec}),this.control.value(this,this.microsec_slider,"microsec",this.microsec-this.microsec%this._defaults.stepMicrosec))}}},_onTimeChange:function(){if(this._defaults.showTimepicker){var a=this.hour_slider?this.control.value(this,this.hour_slider,"hour"):!1,b=this.minute_slider?this.control.value(this,this.minute_slider,"minute"):!1,c=this.second_slider?this.control.value(this,this.second_slider,"second"):!1,d=this.millisec_slider?this.control.value(this,this.millisec_slider,"millisec"):!1,e=this.microsec_slider?this.control.value(this,this.microsec_slider,"microsec"):!1,f=this.timezone_select?this.timezone_select.val():!1,g=this._defaults,h=g.pickerTimeFormat||g.timeFormat,i=g.pickerTimeSuffix||g.timeSuffix;"object"==typeof a&&(a=!1),"object"==typeof b&&(b=!1),"object"==typeof c&&(c=!1),"object"==typeof d&&(d=!1),"object"==typeof e&&(e=!1),"object"==typeof f&&(f=!1),a!==!1&&(a=parseInt(a,10)),b!==!1&&(b=parseInt(b,10)),c!==!1&&(c=parseInt(c,10)),d!==!1&&(d=parseInt(d,10)),e!==!1&&(e=parseInt(e,10)),f!==!1&&(f=f.toString());var j=g[12>a?"amNames":"pmNames"][0],k=a!==parseInt(this.hour,10)||b!==parseInt(this.minute,10)||c!==parseInt(this.second,10)||d!==parseInt(this.millisec,10)||e!==parseInt(this.microsec,10)||this.ampm.length>0&&12>a!=(-1!==$.inArray(this.ampm.toUpperCase(),this.amNames))||null!==this.timezone&&f!==this.timezone.toString();if(k&&(a!==!1&&(this.hour=a),b!==!1&&(this.minute=b),c!==!1&&(this.second=c),d!==!1&&(this.millisec=d),e!==!1&&(this.microsec=e),f!==!1&&(this.timezone=f),this.inst||(this.inst=$.datepicker._getInst(this.$input[0])),this._limitMinMaxDateTime(this.inst,!0)),this.support.ampm&&(this.ampm=j),this.formattedTime=$.datepicker.formatTime(g.timeFormat,this,g),this.$timeObj){var l=this.$timeObj[0].selectionStart,m=this.$timeObj[0].selectionEnd;h===g.timeFormat?this.$timeObj.val(this.formattedTime+i):this.$timeObj.val($.datepicker.formatTime(h,this,g)+i),this.$timeObj[0].setSelectionRange(l,m)}this.timeDefined=!0,k&&this._updateDateTime()}},_onSelectHandler:function(){var a=this._defaults.onSelect||this.inst.settings.onSelect,b=this.$input?this.$input[0]:null;a&&b&&a.apply(b,[this.formattedDateTime,this])},_updateDateTime:function(a){a=this.inst||a;var b=a.currentYear>0?new Date(a.currentYear,a.currentMonth,a.currentDay):new Date(a.selectedYear,a.selectedMonth,a.selectedDay),c=$.datepicker._daylightSavingAdjust(b),d=$.datepicker._get(a,"dateFormat"),e=$.datepicker._getFormatConfig(a),f=null!==c&&this.timeDefined;this.formattedDate=$.datepicker.formatDate(d,null===c?new Date:c,e);var g=this.formattedDate;if(""===a.lastVal&&(a.currentYear=a.selectedYear,a.currentMonth=a.selectedMonth,a.currentDay=a.selectedDay),this._defaults.timeOnly===!0&&this._defaults.timeOnlyShowDate===!1?g=this.formattedTime:(this._defaults.timeOnly!==!0&&(this._defaults.alwaysSetTime||f)||this._defaults.timeOnly===!0&&this._defaults.timeOnlyShowDate===!0)&&(g+=this._defaults.separator+this.formattedTime+this._defaults.timeSuffix),this.formattedDateTime=g,this._defaults.showTimepicker)if(this.$altInput&&this._defaults.timeOnly===!1&&this._defaults.altFieldTimeOnly===!0)this.$altInput.val(this.formattedTime),this.$input.val(this.formattedDate);else if(this.$altInput){this.$input.val(g);var h="",i=null!==this._defaults.altSeparator?this._defaults.altSeparator:this._defaults.separator,j=null!==this._defaults.altTimeSuffix?this._defaults.altTimeSuffix:this._defaults.timeSuffix;this._defaults.timeOnly||(h=this._defaults.altFormat?$.datepicker.formatDate(this._defaults.altFormat,null===c?new Date:c,e):this.formattedDate,h&&(h+=i)),h+=null!==this._defaults.altTimeFormat?$.datepicker.formatTime(this._defaults.altTimeFormat,this,this._defaults)+j:this.formattedTime+j,this.$altInput.val(h)}else this.$input.val(g);else this.$input.val(this.formattedDate);this.$input.trigger("change")},_onFocus:function(){if(!this.$input.val()&&this._defaults.defaultValue){this.$input.val(this._defaults.defaultValue);var a=$.datepicker._getInst(this.$input.get(0)),b=$.datepicker._get(a,"timepicker");if(b&&b._defaults.timeOnly&&a.input.val()!==a.lastVal)try{$.datepicker._updateDatepicker(a)}catch(c){$.timepicker.log(c)}}},_controls:{slider:{create:function(a,b,c,d,e,f,g){var h=a._defaults.isRTL;return b.prop("slide",null).slider({orientation:"horizontal",value:h?-1*d:d,min:h?-1*f:e,max:h?-1*e:f,step:g,slide:function(b,d){a.control.value(a,$(this),c,h?-1*d.value:d.value),a._onTimeChange()},stop:function(b,c){a._onSelectHandler()}})},options:function(a,b,c,d,e){if(a._defaults.isRTL){if("string"==typeof d)return"min"===d||"max"===d?void 0!==e?b.slider(d,-1*e):Math.abs(b.slider(d)):b.slider(d);var f=d.min,g=d.max;return d.min=d.max=null,void 0!==f&&(d.max=-1*f),void 0!==g&&(d.min=-1*g),b.slider(d)}return"string"==typeof d&&void 0!==e?b.slider(d,e):b.slider(d)},value:function(a,b,c,d){return a._defaults.isRTL?void 0!==d?b.slider("value",-1*d):Math.abs(b.slider("value")):void 0!==d?b.slider("value",d):b.slider("value")}},select:{create:function(a,b,c,d,e,f,g){for(var h='<select class="ui-timepicker-select ui-state-default ui-corner-all" data-unit="'+c+'" data-min="'+e+'" data-max="'+f+'" data-step="'+g+'">',i=a._defaults.pickerTimeFormat||a._defaults.timeFormat,j=e;f>=j;j+=g)h+='<option value="'+j+'"'+(j===d?" selected":"")+">",h+="hour"===c?$.datepicker.formatTime($.trim(i.replace(/[^ht ]/gi,"")),{hour:j},a._defaults):"millisec"===c||"microsec"===c||j>=10?j:"0"+j.toString(),h+="</option>";return h+="</select>",b.children("select").remove(),$(h).appendTo(b).change(function(b){a._onTimeChange(),a._onSelectHandler(),a._afterInject()}),b},options:function(a,b,c,d,e){var f={},g=b.children("select");if("string"==typeof d){if(void 0===e)return g.data(d);f[d]=e}else f=d;return a.control.create(a,b,g.data("unit"),g.val(),f.min>=0?f.min:g.data("min"),f.max||g.data("max"),f.step||g.data("step"))},value:function(a,b,c,d){var e=b.children("select");return void 0!==d?e.val(d):e.val()}}}}),$.fn.extend({timepicker:function(a){a=a||{};var b=Array.prototype.slice.call(arguments);return"object"==typeof a&&(b[0]=$.extend(a,{timeOnly:!0})),$(this).each(function(){$.fn.datetimepicker.apply($(this),b)})},datetimepicker:function(a){a=a||{};var b=arguments;return"string"==typeof a?"getDate"===a||"option"===a&&2===b.length&&"string"==typeof b[1]?$.fn.datepicker.apply($(this[0]),b):this.each(function(){var a=$(this);a.datepicker.apply(a,b)}):this.each(function(){var b=$(this);b.datepicker($.timepicker._newInst(b,a)._defaults)})}}),$.datepicker.parseDateTime=function(a,b,c,d,e){var f=parseDateTimeInternal(a,b,c,d,e);if(f.timeObj){var g=f.timeObj;f.date.setHours(g.hour,g.minute,g.second,g.millisec),f.date.setMicroseconds(g.microsec)}return f.date},$.datepicker.parseTime=function(a,b,c){var d=extendRemove(extendRemove({},$.timepicker._defaults),c||{}),e=(-1!==a.replace(/\'.*?\'/g,"").indexOf("Z"),function(a,b,c){var d,e=function(a,b){var c=[];return a&&$.merge(c,a),b&&$.merge(c,b),c=$.map(c,function(a){return a.replace(/[.*+?|()\[\]{}\\]/g,"\\$&")}),"("+c.join("|")+")?"},f=function(a){var b=a.toLowerCase().match(/(h{1,2}|m{1,2}|s{1,2}|l{1}|c{1}|t{1,2}|z|'.*?')/g),c={h:-1,m:-1,s:-1,l:-1,c:-1,t:-1,z:-1};if(b)for(var d=0;d<b.length;d++)-1===c[b[d].toString().charAt(0)]&&(c[b[d].toString().charAt(0)]=d+1);return c},g="^"+a.toString().replace(/([hH]{1,2}|mm?|ss?|[tT]{1,2}|[zZ]|[lc]|'.*?')/g,function(a){var b=a.length;switch(a.charAt(0).toLowerCase()){case"h":return 1===b?"(\\d?\\d)":"(\\d{"+b+"})";case"m":return 1===b?"(\\d?\\d)":"(\\d{"+b+"})";case"s":return 1===b?"(\\d?\\d)":"(\\d{"+b+"})";case"l":return"(\\d?\\d?\\d)";case"c":return"(\\d?\\d?\\d)";case"z":return"(z|[-+]\\d\\d:?\\d\\d|\\S+)?";case"t":return e(c.amNames,c.pmNames);default:return"("+a.replace(/\'/g,"").replace(/(\.|\$|\^|\\|\/|\(|\)|\[|\]|\?|\+|\*)/g,function(a){return"\\"+a})+")?"}}).replace(/\s/g,"\\s?")+c.timeSuffix+"$",h=f(a),i="";d=b.match(new RegExp(g,"i"));var j={hour:0,minute:0,second:0,millisec:0,microsec:0};return d?(-1!==h.t&&(void 0===d[h.t]||0===d[h.t].length?(i="",j.ampm=""):(i=-1!==$.inArray(d[h.t].toUpperCase(),$.map(c.amNames,function(a,b){return a.toUpperCase()}))?"AM":"PM",j.ampm=c["AM"===i?"amNames":"pmNames"][0])),-1!==h.h&&("AM"===i&&"12"===d[h.h]?j.hour=0:"PM"===i&&"12"!==d[h.h]?j.hour=parseInt(d[h.h],10)+12:j.hour=Number(d[h.h])),-1!==h.m&&(j.minute=Number(d[h.m])),-1!==h.s&&(j.second=Number(d[h.s])),-1!==h.l&&(j.millisec=Number(d[h.l])),-1!==h.c&&(j.microsec=Number(d[h.c])),-1!==h.z&&void 0!==d[h.z]&&(j.timezone=$.timepicker.timezoneOffsetNumber(d[h.z])),j):!1}),f=function(a,b,c){try{var d=new Date("2012-01-01 "+b);if(isNaN(d.getTime())&&(d=new Date("2012-01-01T"+b),isNaN(d.getTime())&&(d=new Date("01/01/2012 "+b),isNaN(d.getTime()))))throw"Unable to parse time with native Date: "+b;return{hour:d.getHours(),minute:d.getMinutes(),second:d.getSeconds(),millisec:d.getMilliseconds(),microsec:d.getMicroseconds(),timezone:-1*d.getTimezoneOffset()}}catch(f){try{return e(a,b,c)}catch(g){$.timepicker.log("Unable to parse \ntimeString: "+b+"\ntimeFormat: "+a)}}return!1};return"function"==typeof d.parse?d.parse(a,b,d):"loose"===d.parse?f(a,b,d):e(a,b,d)},$.datepicker.formatTime=function(a,b,c){c=c||{},c=$.extend({},$.timepicker._defaults,c),b=$.extend({hour:0,minute:0,second:0,millisec:0,microsec:0,timezone:null},b);var d=a,e=c.amNames[0],f=parseInt(b.hour,10);return f>11&&(e=c.pmNames[0]),d=d.replace(/(?:HH?|hh?|mm?|ss?|[tT]{1,2}|[zZ]|[lc]|'.*?')/g,function(a){switch(a){case"HH":return("0"+f).slice(-2);case"H":return f;case"hh":return("0"+convert24to12(f)).slice(-2);case"h":return convert24to12(f);case"mm":return("0"+b.minute).slice(-2);case"m":return b.minute;case"ss":return("0"+b.second).slice(-2);case"s":return b.second;case"l":return("00"+b.millisec).slice(-3);case"c":return("00"+b.microsec).slice(-3);case"z":return $.timepicker.timezoneOffsetString(null===b.timezone?c.timezone:b.timezone,!1);case"Z":return $.timepicker.timezoneOffsetString(null===b.timezone?c.timezone:b.timezone,!0);case"T":return e.charAt(0).toUpperCase();case"TT":return e.toUpperCase();case"t":return e.charAt(0).toLowerCase();case"tt":return e.toLowerCase();default:return a.replace(/'/g,"")}})},$.datepicker._base_selectDate=$.datepicker._selectDate,$.datepicker._selectDate=function(a,b){var c,d=this._getInst($(a)[0]),e=this._get(d,"timepicker");e&&d.settings.showTimepicker?(e._limitMinMaxDateTime(d,!0),c=d.inline,d.inline=d.stay_open=!0,this._base_selectDate(a,b),d.inline=c,d.stay_open=!1,this._notifyChange(d),this._updateDatepicker(d)):this._base_selectDate(a,b)},$.datepicker._base_updateDatepicker=$.datepicker._updateDatepicker,$.datepicker._updateDatepicker=function(a){var b=a.input[0];if(!($.datepicker._curInst&&$.datepicker._curInst!==a&&$.datepicker._datepickerShowing&&$.datepicker._lastInput!==b||"boolean"==typeof a.stay_open&&a.stay_open!==!1)){this._base_updateDatepicker(a);var c=this._get(a,"timepicker");c&&c._addTimePicker(a)}},$.datepicker._base_doKeyPress=$.datepicker._doKeyPress,$.datepicker._doKeyPress=function(a){var b=$.datepicker._getInst(a.target),c=$.datepicker._get(b,"timepicker");if(c&&$.datepicker._get(b,"constrainInput")){var d=c.support.ampm,e=null!==c._defaults.showTimezone?c._defaults.showTimezone:c.support.timezone,f=$.datepicker._possibleChars($.datepicker._get(b,"dateFormat")),g=c._defaults.timeFormat.toString().replace(/[hms]/g,"").replace(/TT/g,d?"APM":"").replace(/Tt/g,d?"AaPpMm":"").replace(/tT/g,d?"AaPpMm":"").replace(/T/g,d?"AP":"").replace(/tt/g,d?"apm":"").replace(/t/g,d?"ap":"")+" "+c._defaults.separator+c._defaults.timeSuffix+(e?c._defaults.timezoneList.join(""):"")+c._defaults.amNames.join("")+c._defaults.pmNames.join("")+f,h=String.fromCharCode(void 0===a.charCode?a.keyCode:a.charCode);return a.ctrlKey||" ">h||!f||g.indexOf(h)>-1}return $.datepicker._base_doKeyPress(a)},$.datepicker._base_updateAlternate=$.datepicker._updateAlternate,$.datepicker._updateAlternate=function(a){var b=this._get(a,"timepicker");if(b){var c=b._defaults.altField;if(c){var d=(b._defaults.altFormat||b._defaults.dateFormat,this._getDate(a)),e=$.datepicker._getFormatConfig(a),f="",g=b._defaults.altSeparator?b._defaults.altSeparator:b._defaults.separator,h=b._defaults.altTimeSuffix?b._defaults.altTimeSuffix:b._defaults.timeSuffix,i=null!==b._defaults.altTimeFormat?b._defaults.altTimeFormat:b._defaults.timeFormat;f+=$.datepicker.formatTime(i,b,b._defaults)+h,b._defaults.timeOnly||b._defaults.altFieldTimeOnly||null===d||(f=b._defaults.altFormat?$.datepicker.formatDate(b._defaults.altFormat,d,e)+g+f:b.formattedDate+g+f),$(c).val(a.input.val()?f:"")}}else $.datepicker._base_updateAlternate(a)},$.datepicker._base_doKeyUp=$.datepicker._doKeyUp,$.datepicker._doKeyUp=function(a){var b=$.datepicker._getInst(a.target),c=$.datepicker._get(b,"timepicker");
if(c&&c._defaults.timeOnly&&b.input.val()!==b.lastVal)try{$.datepicker._updateDatepicker(b)}catch(d){$.timepicker.log(d)}return $.datepicker._base_doKeyUp(a)},$.datepicker._base_gotoToday=$.datepicker._gotoToday,$.datepicker._gotoToday=function(a){var b=this._getInst($(a)[0]);this._base_gotoToday(a);var c=this._get(b,"timepicker"),d=$.timepicker.timezoneOffsetNumber(c.timezone),e=new Date;e.setMinutes(e.getMinutes()+e.getTimezoneOffset()+d),this._setTime(b,e),this._setDate(b,e),c._onSelectHandler()},$.datepicker._disableTimepickerDatepicker=function(a){var b=this._getInst(a);if(b){var c=this._get(b,"timepicker");$(a).datepicker("getDate"),c&&(b.settings.showTimepicker=!1,c._defaults.showTimepicker=!1,c._updateDateTime(b))}},$.datepicker._enableTimepickerDatepicker=function(a){var b=this._getInst(a);if(b){var c=this._get(b,"timepicker");$(a).datepicker("getDate"),c&&(b.settings.showTimepicker=!0,c._defaults.showTimepicker=!0,c._addTimePicker(b),c._updateDateTime(b))}},$.datepicker._setTime=function(a,b){var c=this._get(a,"timepicker");if(c){var d=c._defaults;c.hour=b?b.getHours():d.hour,c.minute=b?b.getMinutes():d.minute,c.second=b?b.getSeconds():d.second,c.millisec=b?b.getMilliseconds():d.millisec,c.microsec=b?b.getMicroseconds():d.microsec,c._limitMinMaxDateTime(a,!0),c._onTimeChange(),c._updateDateTime(a)}},$.datepicker._setTimeDatepicker=function(a,b,c){var d=this._getInst(a);if(d){var e=this._get(d,"timepicker");if(e){this._setDateFromField(d);var f;b&&("string"==typeof b?(e._parseTime(b,c),f=new Date,f.setHours(e.hour,e.minute,e.second,e.millisec),f.setMicroseconds(e.microsec)):(f=new Date(b.getTime()),f.setMicroseconds(b.getMicroseconds())),"Invalid Date"===f.toString()&&(f=void 0),this._setTime(d,f))}}},$.datepicker._base_setDateDatepicker=$.datepicker._setDateDatepicker,$.datepicker._setDateDatepicker=function(a,b){var c=this._getInst(a),d=b;if(c){"string"==typeof b&&(d=new Date(b),d.getTime()||(this._base_setDateDatepicker.apply(this,arguments),d=$(a).datepicker("getDate")));var e,f=this._get(c,"timepicker");d instanceof Date?(e=new Date(d.getTime()),e.setMicroseconds(d.getMicroseconds())):e=d,f&&e&&(f.support.timezone||null!==f._defaults.timezone||(f.timezone=-1*e.getTimezoneOffset()),d=$.timepicker.timezoneAdjust(d,f.timezone),e=$.timepicker.timezoneAdjust(e,f.timezone)),this._updateDatepicker(c),this._base_setDateDatepicker.apply(this,arguments),this._setTimeDatepicker(a,e,!0)}},$.datepicker._base_getDateDatepicker=$.datepicker._getDateDatepicker,$.datepicker._getDateDatepicker=function(a,b){var c=this._getInst(a);if(c){var d=this._get(c,"timepicker");if(d){void 0===c.lastVal&&this._setDateFromField(c,b);var e=this._getDate(c),f=$.trim(d.$altInput&&d._defaults.altFieldTimeOnly?d.$input.val()+" "+d.$altInput.val():d.$input.val());return e&&d._parseTime(f,!c.settings.timeOnly)&&(e.setHours(d.hour,d.minute,d.second,d.millisec),e.setMicroseconds(d.microsec),null!=d.timezone&&(d.support.timezone||null!==d._defaults.timezone||(d.timezone=-1*e.getTimezoneOffset()),e=$.timepicker.timezoneAdjust(e,d.timezone))),e}return this._base_getDateDatepicker(a,b)}},$.datepicker._base_parseDate=$.datepicker.parseDate,$.datepicker.parseDate=function(a,b,c){var d;try{d=this._base_parseDate(a,b,c)}catch(e){if(!(e.indexOf(":")>=0))throw e;d=this._base_parseDate(a,b.substring(0,b.length-(e.length-e.indexOf(":")-2)),c),$.timepicker.log("Error parsing the date string: "+e+"\ndate string = "+b+"\ndate format = "+a)}return d},$.datepicker._base_formatDate=$.datepicker._formatDate,$.datepicker._formatDate=function(a,b,c,d){var e=this._get(a,"timepicker");return e?(e._updateDateTime(a),e.$input.val()):this._base_formatDate(a)},$.datepicker._base_optionDatepicker=$.datepicker._optionDatepicker,$.datepicker._optionDatepicker=function(a,b,c){var d,e=this._getInst(a);if(!e)return null;var f=this._get(e,"timepicker");if(f){var g,h,i,j,k=null,l=null,m=null,n=f._defaults.evnts,o={};if("string"==typeof b){if("minDate"===b||"minDateTime"===b)k=c;else if("maxDate"===b||"maxDateTime"===b)l=c;else if("onSelect"===b)m=c;else if(n.hasOwnProperty(b)){if("undefined"==typeof c)return n[b];o[b]=c,d={}}}else if("object"==typeof b){b.minDate?k=b.minDate:b.minDateTime?k=b.minDateTime:b.maxDate?l=b.maxDate:b.maxDateTime&&(l=b.maxDateTime);for(g in n)n.hasOwnProperty(g)&&b[g]&&(o[g]=b[g])}for(g in o)o.hasOwnProperty(g)&&(n[g]=o[g],d||(d=$.extend({},b)),delete d[g]);if(d&&isEmptyObject(d))return;if(k?(k=0===k?new Date:new Date(k),f._defaults.minDate=k,f._defaults.minDateTime=k):l?(l=0===l?new Date:new Date(l),f._defaults.maxDate=l,f._defaults.maxDateTime=l):m&&(f._defaults.onSelect=m),k||l)return j=$(a),i=j.datetimepicker("getDate"),h=this._base_optionDatepicker.call($.datepicker,a,d||b,c),j.datetimepicker("setDate",i),h}return void 0===c?this._base_optionDatepicker.call($.datepicker,a,b):this._base_optionDatepicker.call($.datepicker,a,d||b,c)};var isEmptyObject=function(a){var b;for(b in a)if(a.hasOwnProperty(b))return!1;return!0},extendRemove=function(a,b){$.extend(a,b);for(var c in b)(null===b[c]||void 0===b[c])&&(a[c]=b[c]);return a},detectSupport=function(a){var b=a.replace(/'.*?'/g,"").toLowerCase(),c=function(a,b){return-1!==a.indexOf(b)?!0:!1};return{hour:c(b,"h"),minute:c(b,"m"),second:c(b,"s"),millisec:c(b,"l"),microsec:c(b,"c"),timezone:c(b,"z"),ampm:c(b,"t")&&c(a,"h"),iso8601:c(a,"Z")}},convert24to12=function(a){return a%=12,0===a&&(a=12),String(a)},computeEffectiveSetting=function(a,b){return a&&a[b]?a[b]:$.timepicker._defaults[b]},splitDateTime=function(a,b){var c=computeEffectiveSetting(b,"separator"),d=computeEffectiveSetting(b,"timeFormat"),e=d.split(c),f=e.length,g=a.split(c),h=g.length;return h>1?{dateString:g.splice(0,h-f).join(c),timeString:g.splice(0,f).join(c)}:{dateString:a,timeString:""}},parseDateTimeInternal=function(a,b,c,d,e){var f,g,h;if(g=splitDateTime(c,e),f=$.datepicker._base_parseDate(a,g.dateString,d),""===g.timeString)return{date:f};if(h=$.datepicker.parseTime(b,g.timeString,e),!h)throw"Wrong time format";return{date:f,timeObj:h}},selectLocalTimezone=function(a,b){if(a&&a.timezone_select){var c=b||new Date;a.timezone_select.val(-c.getTimezoneOffset())}};$.timepicker=new Timepicker,$.timepicker.timezoneOffsetString=function(a,b){if(isNaN(a)||a>840||-720>a)return a;var c=a,d=c%60,e=(c-d)/60,f=b?":":"",g=(c>=0?"+":"-")+("0"+Math.abs(e)).slice(-2)+f+("0"+Math.abs(d)).slice(-2);return"+00:00"===g?"Z":g},$.timepicker.timezoneOffsetNumber=function(a){var b=a.toString().replace(":","");return"Z"===b.toUpperCase()?0:/^(\-|\+)\d{4}$/.test(b)?("-"===b.substr(0,1)?-1:1)*(60*parseInt(b.substr(1,2),10)+parseInt(b.substr(3,2),10)):a},$.timepicker.timezoneAdjust=function(a,b){var c=$.timepicker.timezoneOffsetNumber(b);return isNaN(c)||a.setMinutes(a.getMinutes()+-a.getTimezoneOffset()-c),a},$.timepicker.timeRange=function(a,b,c){return $.timepicker.handleRange("timepicker",a,b,c)},$.timepicker.datetimeRange=function(a,b,c){$.timepicker.handleRange("datetimepicker",a,b,c)},$.timepicker.dateRange=function(a,b,c){$.timepicker.handleRange("datepicker",a,b,c)},$.timepicker.handleRange=function(a,b,c,d){function e(e,f){var g=b[a]("getDate"),h=c[a]("getDate"),i=e[a]("getDate");if(null!==g){var j=new Date(g.getTime()),k=new Date(g.getTime());j.setMilliseconds(j.getMilliseconds()+d.minInterval),k.setMilliseconds(k.getMilliseconds()+d.maxInterval),d.minInterval>0&&j>h?c[a]("setDate",j):d.maxInterval>0&&h>k?c[a]("setDate",k):g>h&&f[a]("setDate",i)}}function f(b,c,e){if(b.val()){var f=b[a].call(b,"getDate");null!==f&&d.minInterval>0&&("minDate"===e&&f.setMilliseconds(f.getMilliseconds()+d.minInterval),"maxDate"===e&&f.setMilliseconds(f.getMilliseconds()-d.minInterval)),f.getTime&&c[a].call(c,"option",e,f)}}d=$.extend({},{minInterval:0,maxInterval:0,start:{},end:{}},d);var g=!1;return"timepicker"===a&&(g=!0,a="datetimepicker"),$.fn[a].call(b,$.extend({timeOnly:g,onClose:function(a,b){e($(this),c)},onSelect:function(a){f($(this),c,"minDate")}},d,d.start)),$.fn[a].call(c,$.extend({timeOnly:g,onClose:function(a,c){e($(this),b)},onSelect:function(a){f($(this),b,"maxDate")}},d,d.end)),e(b,c),f(b,c,"minDate"),f(c,b,"maxDate"),$([b.get(0),c.get(0)])},$.timepicker.log=function(){window.console&&window.console.log.apply(window.console,Array.prototype.slice.call(arguments))},$.timepicker._util={_extendRemove:extendRemove,_isEmptyObject:isEmptyObject,_convert24to12:convert24to12,_detectSupport:detectSupport,_selectLocalTimezone:selectLocalTimezone,_computeEffectiveSetting:computeEffectiveSetting,_splitDateTime:splitDateTime,_parseDateTimeInternal:parseDateTimeInternal},Date.prototype.getMicroseconds||(Date.prototype.microseconds=0,Date.prototype.getMicroseconds=function(){return this.microseconds},Date.prototype.setMicroseconds=function(a){return this.setMilliseconds(this.getMilliseconds()+Math.floor(a/1e3)),this.microseconds=a%1e3,this}),$.timepicker.version="1.6.1"}});
;(function(factory){"use strict";if(typeof define==='function'&&define.amd){define(['jquery'],factory);}
else if(typeof exports=="object"&&typeof module=="object"){module.exports=factory;}
else{factory(jQuery);}})(function($,undefined){"use strict";var defaultOpts={beforeShow:noop,move:noop,change:noop,show:noop,hide:noop,color:false,flat:false,showInput:false,allowEmpty:false,showButtons:true,clickoutFiresChange:true,showInitial:false,showPalette:false,showPaletteOnly:false,hideAfterPaletteSelect:false,togglePaletteOnly:false,showSelectionPalette:true,localStorageKey:false,appendTo:"body",maxSelectionSize:7,cancelText:"cancel",chooseText:"choose",togglePaletteMoreText:"more",togglePaletteLessText:"less",clearText:"Clear Color Selection",noColorSelectedText:"No Color Selected",preferredFormat:false,className:"",containerClassName:"",replacerClassName:"",showAlpha:false,theme:"sp-light",palette:[["#ffffff","#000000","#ff0000","#ff8000","#ffff00","#008000","#0000ff","#4b0082","#9400d3"]],selectionPalette:[],disabled:false,offset:null},spectrums=[],IE=!!/msie/i.exec(window.navigator.userAgent),rgbaSupport=(function(){function contains(str,substr){return!!~(''+str).indexOf(substr);}
var elem=document.createElement('div');var style=elem.style;style.cssText='background-color:rgba(0,0,0,.5)';return contains(style.backgroundColor,'rgba')||contains(style.backgroundColor,'hsla');})(),replaceInput=["<div class='sp-replacer'>","<div class='sp-preview'><div class='sp-preview-inner'></div></div>","<div class='sp-dd'>&#9660;</div>","</div>"].join(''),markup=(function(){var gradientFix="";if(IE){for(var i=1;i<=6;i++){gradientFix+="<div class='sp-"+i+"'></div>";}}
return["<div class='sp-container sp-hidden'>","<div class='sp-palette-container'>","<div class='sp-palette sp-thumb sp-cf'></div>","<div class='sp-palette-button-container sp-cf'>","<button type='button' class='sp-palette-toggle'></button>","</div>","</div>","<div class='sp-picker-container'>","<div class='sp-top sp-cf'>","<div class='sp-fill'></div>","<div class='sp-top-inner'>","<div class='sp-color'>","<div class='sp-sat'>","<div class='sp-val'>","<div class='sp-dragger'></div>","</div>","</div>","</div>","<div class='sp-clear sp-clear-display'>","</div>","<div class='sp-hue'>","<div class='sp-slider'></div>",gradientFix,"</div>","</div>","<div class='sp-alpha'><div class='sp-alpha-inner'><div class='sp-alpha-handle'></div></div></div>","</div>","<div class='sp-input-container sp-cf'>","<input class='sp-input' type='text' spellcheck='false'  />","</div>","<div class='sp-initial sp-thumb sp-cf'></div>","<div class='sp-button-container sp-cf'>","<a class='sp-cancel' href='#'></a>","<button type='button' class='sp-choose'></button>","</div>","</div>","</div>"].join("");})();function paletteTemplate(p,color,className,opts){var html=[];for(var i=0;i<p.length;i++){var current=p[i];if(current){var tiny=tinycolor(current);var c=tiny.toHsl().l<0.5?"sp-thumb-el sp-thumb-dark":"sp-thumb-el sp-thumb-light";c+=(tinycolor.equals(color,current))?" sp-thumb-active":"";var formattedString=tiny.toString(opts.preferredFormat||"rgb");var swatchStyle=rgbaSupport?("background-color:"+tiny.toRgbString()):"filter:"+tiny.toFilter();html.push('<span title="'+formattedString+'" data-color="'+tiny.toRgbString()+'" class="'+c+'"><span class="sp-thumb-inner" style="'+swatchStyle+';" /></span>');}else{var cls='sp-clear-display';html.push($('<div />').append($('<span data-color="" style="background-color:transparent;" class="'+cls+'"></span>').attr('title',opts.noColorSelectedText)).html());}}
return"<div class='sp-cf "+className+"'>"+html.join('')+"</div>";}
function hideAll(){for(var i=0;i<spectrums.length;i++){if(spectrums[i]){spectrums[i].hide();}}}
function instanceOptions(o,callbackContext){var opts=$.extend({},defaultOpts,o);opts.callbacks={'move':bind(opts.move,callbackContext),'change':bind(opts.change,callbackContext),'show':bind(opts.show,callbackContext),'hide':bind(opts.hide,callbackContext),'beforeShow':bind(opts.beforeShow,callbackContext)};return opts;}
function spectrum(element,o){var opts=instanceOptions(o,element),flat=opts.flat,showSelectionPalette=opts.showSelectionPalette,localStorageKey=opts.localStorageKey,theme=opts.theme,callbacks=opts.callbacks,resize=throttle(reflow,10),visible=false,isDragging=false,dragWidth=0,dragHeight=0,dragHelperHeight=0,slideHeight=0,slideWidth=0,alphaWidth=0,alphaSlideHelperWidth=0,slideHelperHeight=0,currentHue=0,currentSaturation=0,currentValue=0,currentAlpha=1,palette=[],paletteArray=[],paletteLookup={},selectionPalette=opts.selectionPalette.slice(0),maxSelectionSize=opts.maxSelectionSize,draggingClass="sp-dragging",shiftMovementDirection=null;var doc=element.ownerDocument,body=doc.body,boundElement=$(element),disabled=false,container=$(markup,doc).addClass(theme),pickerContainer=container.find(".sp-picker-container"),dragger=container.find(".sp-color"),dragHelper=container.find(".sp-dragger"),slider=container.find(".sp-hue"),slideHelper=container.find(".sp-slider"),alphaSliderInner=container.find(".sp-alpha-inner"),alphaSlider=container.find(".sp-alpha"),alphaSlideHelper=container.find(".sp-alpha-handle"),textInput=container.find(".sp-input"),paletteContainer=container.find(".sp-palette"),initialColorContainer=container.find(".sp-initial"),cancelButton=container.find(".sp-cancel"),clearButton=container.find(".sp-clear"),chooseButton=container.find(".sp-choose"),toggleButton=container.find(".sp-palette-toggle"),isInput=boundElement.is("input"),isInputTypeColor=isInput&&boundElement.attr("type")==="color"&&inputTypeColorSupport(),shouldReplace=isInput&&!flat,replacer=(shouldReplace)?$(replaceInput).addClass(theme).addClass(opts.className).addClass(opts.replacerClassName):$([]),offsetElement=(shouldReplace)?replacer:boundElement,previewElement=replacer.find(".sp-preview-inner"),initialColor=opts.color||(isInput&&boundElement.val()),colorOnShow=false,preferredFormat=opts.preferredFormat,currentPreferredFormat=preferredFormat,clickoutFiresChange=!opts.showButtons||opts.clickoutFiresChange,isEmpty=!initialColor,allowEmpty=opts.allowEmpty&&!isInputTypeColor;function applyOptions(){if(opts.showPaletteOnly){opts.showPalette=true;}
toggleButton.text(opts.showPaletteOnly?opts.togglePaletteMoreText:opts.togglePaletteLessText);if(opts.palette){palette=opts.palette.slice(0);paletteArray=$.isArray(palette[0])?palette:[palette];paletteLookup={};for(var i=0;i<paletteArray.length;i++){for(var j=0;j<paletteArray[i].length;j++){var rgb=tinycolor(paletteArray[i][j]).toRgbString();paletteLookup[rgb]=true;}}}
container.toggleClass("sp-flat",flat);container.toggleClass("sp-input-disabled",!opts.showInput);container.toggleClass("sp-alpha-enabled",opts.showAlpha);container.toggleClass("sp-clear-enabled",allowEmpty);container.toggleClass("sp-buttons-disabled",!opts.showButtons);container.toggleClass("sp-palette-buttons-disabled",!opts.togglePaletteOnly);container.toggleClass("sp-palette-disabled",!opts.showPalette);container.toggleClass("sp-palette-only",opts.showPaletteOnly);container.toggleClass("sp-initial-disabled",!opts.showInitial);container.addClass(opts.className).addClass(opts.containerClassName);reflow();}
function initialize(){if(IE){container.find("*:not(input)").attr("unselectable","on");}
applyOptions();if(shouldReplace){boundElement.after(replacer).hide();}
if(!allowEmpty){clearButton.hide();}
if(flat){boundElement.after(container).hide();}
else{var appendTo=opts.appendTo==="parent"?boundElement.parent():$(opts.appendTo);if(appendTo.length!==1){appendTo=$("body");}
appendTo.append(container);}
updateSelectionPaletteFromStorage();offsetElement.bind("click.spectrum touchstart.spectrum",function(e){if(!disabled){toggle();}
e.stopPropagation();if(!$(e.target).is("input")){e.preventDefault();}});if(boundElement.is(":disabled")||(opts.disabled===true)){disable();}
container.click(stopPropagation);textInput.change(setFromTextInput);textInput.bind("paste",function(){setTimeout(setFromTextInput,1);});textInput.keydown(function(e){if(e.keyCode==13){setFromTextInput();}});cancelButton.text(opts.cancelText);cancelButton.bind("click.spectrum",function(e){e.stopPropagation();e.preventDefault();revert();hide();});clearButton.attr("title",opts.clearText);clearButton.bind("click.spectrum",function(e){e.stopPropagation();e.preventDefault();isEmpty=true;move();if(flat){updateOriginalInput(true);}});chooseButton.text(opts.chooseText);chooseButton.bind("click.spectrum",function(e){e.stopPropagation();e.preventDefault();if(IE&&textInput.is(":focus")){textInput.trigger('change');}
if(isValid()){updateOriginalInput(true);hide();}});toggleButton.text(opts.showPaletteOnly?opts.togglePaletteMoreText:opts.togglePaletteLessText);toggleButton.bind("click.spectrum",function(e){e.stopPropagation();e.preventDefault();opts.showPaletteOnly=!opts.showPaletteOnly;if(!opts.showPaletteOnly&&!flat){container.css('left','-='+(pickerContainer.outerWidth(true)+5));}
applyOptions();});draggable(alphaSlider,function(dragX,dragY,e){currentAlpha=(dragX/alphaWidth);isEmpty=false;if(e.shiftKey){currentAlpha=Math.round(currentAlpha*10)/10;}
move();},dragStart,dragStop);draggable(slider,function(dragX,dragY){currentHue=parseFloat(dragY/slideHeight);isEmpty=false;if(!opts.showAlpha){currentAlpha=1;}
move();},dragStart,dragStop);draggable(dragger,function(dragX,dragY,e){if(!e.shiftKey){shiftMovementDirection=null;}
else if(!shiftMovementDirection){var oldDragX=currentSaturation*dragWidth;var oldDragY=dragHeight-(currentValue*dragHeight);var furtherFromX=Math.abs(dragX-oldDragX)>Math.abs(dragY-oldDragY);shiftMovementDirection=furtherFromX?"x":"y";}
var setSaturation=!shiftMovementDirection||shiftMovementDirection==="x";var setValue=!shiftMovementDirection||shiftMovementDirection==="y";if(setSaturation){currentSaturation=parseFloat(dragX/dragWidth);}
if(setValue){currentValue=parseFloat((dragHeight-dragY)/dragHeight);}
isEmpty=false;if(!opts.showAlpha){currentAlpha=1;}
move();},dragStart,dragStop);if(!!initialColor){set(initialColor);updateUI();currentPreferredFormat=preferredFormat||tinycolor(initialColor).format;addColorToSelectionPalette(initialColor);}
else{updateUI();}
if(flat){show();}
function paletteElementClick(e){if(e.data&&e.data.ignore){set($(e.target).closest(".sp-thumb-el").data("color"));move();}
else{set($(e.target).closest(".sp-thumb-el").data("color"));move();updateOriginalInput(true);if(opts.hideAfterPaletteSelect){hide();}}
return false;}
var paletteEvent=IE?"mousedown.spectrum":"click.spectrum touchstart.spectrum";paletteContainer.delegate(".sp-thumb-el",paletteEvent,paletteElementClick);initialColorContainer.delegate(".sp-thumb-el:nth-child(1)",paletteEvent,{ignore:true},paletteElementClick);}
function updateSelectionPaletteFromStorage(){if(localStorageKey&&window.localStorage){try{var oldPalette=window.localStorage[localStorageKey].split(",#");if(oldPalette.length>1){delete window.localStorage[localStorageKey];$.each(oldPalette,function(i,c){addColorToSelectionPalette(c);});}}
catch(e){}
try{selectionPalette=window.localStorage[localStorageKey].split(";");}
catch(e){}}}
function addColorToSelectionPalette(color){if(showSelectionPalette){var rgb=tinycolor(color).toRgbString();if(!paletteLookup[rgb]&&$.inArray(rgb,selectionPalette)===-1){selectionPalette.push(rgb);while(selectionPalette.length>maxSelectionSize){selectionPalette.shift();}}
if(localStorageKey&&window.localStorage){try{window.localStorage[localStorageKey]=selectionPalette.join(";");}
catch(e){}}}}
function getUniqueSelectionPalette(){var unique=[];if(opts.showPalette){for(var i=0;i<selectionPalette.length;i++){var rgb=tinycolor(selectionPalette[i]).toRgbString();if(!paletteLookup[rgb]){unique.push(selectionPalette[i]);}}}
return unique.reverse().slice(0,opts.maxSelectionSize);}
function drawPalette(){var currentColor=get();var html=$.map(paletteArray,function(palette,i){return paletteTemplate(palette,currentColor,"sp-palette-row sp-palette-row-"+i,opts);});updateSelectionPaletteFromStorage();if(selectionPalette){html.push(paletteTemplate(getUniqueSelectionPalette(),currentColor,"sp-palette-row sp-palette-row-selection",opts));}
paletteContainer.html(html.join(""));}
function drawInitial(){if(opts.showInitial){var initial=colorOnShow;var current=get();initialColorContainer.html(paletteTemplate([initial,current],current,"sp-palette-row-initial",opts));}}
function dragStart(){if(dragHeight<=0||dragWidth<=0||slideHeight<=0){reflow();}
isDragging=true;container.addClass(draggingClass);shiftMovementDirection=null;boundElement.trigger('dragstart.spectrum',[get()]);}
function dragStop(){isDragging=false;container.removeClass(draggingClass);boundElement.trigger('dragstop.spectrum',[get()]);}
function setFromTextInput(){var value=textInput.val();if((value===null||value==="")&&allowEmpty){set(null);updateOriginalInput(true);}
else{var tiny=tinycolor(value);if(tiny.isValid()){set(tiny);updateOriginalInput(true);}
else{textInput.addClass("sp-validation-error");}}}
function toggle(){if(visible){hide();}
else{show();}}
function show(){var event=$.Event('beforeShow.spectrum');if(visible){reflow();return;}
boundElement.trigger(event,[get()]);if(callbacks.beforeShow(get())===false||event.isDefaultPrevented()){return;}
hideAll();visible=true;$(doc).bind("keydown.spectrum",onkeydown);$(doc).bind("click.spectrum",clickout);$(window).bind("resize.spectrum",resize);replacer.addClass("sp-active");container.removeClass("sp-hidden");reflow();updateUI();colorOnShow=get();drawInitial();callbacks.show(colorOnShow);boundElement.trigger('show.spectrum',[colorOnShow]);}
function onkeydown(e){if(e.keyCode===27){hide();}}
function clickout(e){if(e.button==2){return;}
if(isDragging){return;}
if(clickoutFiresChange){updateOriginalInput(true);}
else{revert();}
hide();}
function hide(){if(!visible||flat){return;}
visible=false;$(doc).unbind("keydown.spectrum",onkeydown);$(doc).unbind("click.spectrum",clickout);$(window).unbind("resize.spectrum",resize);replacer.removeClass("sp-active");container.addClass("sp-hidden");callbacks.hide(get());boundElement.trigger('hide.spectrum',[get()]);}
function revert(){set(colorOnShow,true);}
function set(color,ignoreFormatChange){if(tinycolor.equals(color,get())){updateUI();return;}
var newColor,newHsv;if(!color&&allowEmpty){isEmpty=true;}else{isEmpty=false;newColor=tinycolor(color);newHsv=newColor.toHsv();currentHue=(newHsv.h%360)/360;currentSaturation=newHsv.s;currentValue=newHsv.v;currentAlpha=newHsv.a;}
updateUI();if(newColor&&newColor.isValid()&&!ignoreFormatChange){currentPreferredFormat=preferredFormat||newColor.getFormat();}}
function get(opts){opts=opts||{};if(allowEmpty&&isEmpty){return null;}
return tinycolor.fromRatio({h:currentHue,s:currentSaturation,v:currentValue,a:Math.round(currentAlpha*100)/100},{format:opts.format||currentPreferredFormat});}
function isValid(){return!textInput.hasClass("sp-validation-error");}
function move(){updateUI();callbacks.move(get());boundElement.trigger('move.spectrum',[get()]);}
function updateUI(){textInput.removeClass("sp-validation-error");updateHelperLocations();var flatColor=tinycolor.fromRatio({h:currentHue,s:1,v:1});dragger.css("background-color",flatColor.toHexString());var format=currentPreferredFormat;if(currentAlpha<1&&!(currentAlpha===0&&format==="name")){if(format==="hex"||format==="hex3"||format==="hex6"||format==="name"){format="rgb";}}
var realColor=get({format:format}),displayColor='';previewElement.removeClass("sp-clear-display");previewElement.css('background-color','transparent');if(!realColor&&allowEmpty){previewElement.addClass("sp-clear-display");}
else{var realHex=realColor.toHexString(),realRgb=realColor.toRgbString();if(rgbaSupport||realColor.alpha===1){previewElement.css("background-color",realRgb);}
else{previewElement.css("background-color","transparent");previewElement.css("filter",realColor.toFilter());}
if(opts.showAlpha){var rgb=realColor.toRgb();rgb.a=0;var realAlpha=tinycolor(rgb).toRgbString();var gradient="linear-gradient(left, "+realAlpha+", "+realHex+")";if(IE){alphaSliderInner.css("filter",tinycolor(realAlpha).toFilter({gradientType:1},realHex));}
else{alphaSliderInner.css("background","-webkit-"+gradient);alphaSliderInner.css("background","-moz-"+gradient);alphaSliderInner.css("background","-ms-"+gradient);alphaSliderInner.css("background","linear-gradient(to right, "+realAlpha+", "+realHex+")");}}
displayColor=realColor.toString(format);}
if(opts.showInput){textInput.val(displayColor);}
if(opts.showPalette){drawPalette();}
drawInitial();}
function updateHelperLocations(){var s=currentSaturation;var v=currentValue;if(allowEmpty&&isEmpty){alphaSlideHelper.hide();slideHelper.hide();dragHelper.hide();}
else{alphaSlideHelper.show();slideHelper.show();dragHelper.show();var dragX=s*dragWidth;var dragY=dragHeight-(v*dragHeight);dragX=Math.max(-dragHelperHeight,Math.min(dragWidth-dragHelperHeight,dragX-dragHelperHeight));dragY=Math.max(-dragHelperHeight,Math.min(dragHeight-dragHelperHeight,dragY-dragHelperHeight));dragHelper.css({"top":dragY+"px","left":dragX+"px"});var alphaX=currentAlpha*alphaWidth;alphaSlideHelper.css({"left":(alphaX-(alphaSlideHelperWidth/2))+"px"});var slideY=(currentHue)*slideHeight;slideHelper.css({"top":(slideY-slideHelperHeight)+"px"});}}
function updateOriginalInput(fireCallback){var color=get(),displayColor='',hasChanged=!tinycolor.equals(color,colorOnShow);if(color){displayColor=color.toString(currentPreferredFormat);addColorToSelectionPalette(color);}
if(isInput){boundElement.val(displayColor);}
if(fireCallback&&hasChanged){callbacks.change(color);boundElement.trigger('change',[color]);}}
function reflow(){dragWidth=dragger.width();dragHeight=dragger.height();dragHelperHeight=dragHelper.height();slideWidth=slider.width();slideHeight=slider.height();slideHelperHeight=slideHelper.height();alphaWidth=alphaSlider.width();alphaSlideHelperWidth=alphaSlideHelper.width();if(!flat){container.css("position","absolute");if(opts.offset){container.offset(opts.offset);}else{container.offset(getOffset(container,offsetElement));}}
updateHelperLocations();if(opts.showPalette){drawPalette();}
boundElement.trigger('reflow.spectrum');}
function destroy(){boundElement.show();offsetElement.unbind("click.spectrum touchstart.spectrum");container.remove();replacer.remove();spectrums[spect.id]=null;}
function option(optionName,optionValue){if(optionName===undefined){return $.extend({},opts);}
if(optionValue===undefined){return opts[optionName];}
opts[optionName]=optionValue;applyOptions();}
function enable(){disabled=false;boundElement.attr("disabled",false);offsetElement.removeClass("sp-disabled");}
function disable(){hide();disabled=true;boundElement.attr("disabled",true);offsetElement.addClass("sp-disabled");}
function setOffset(coord){opts.offset=coord;reflow();}
initialize();var spect={show:show,hide:hide,toggle:toggle,reflow:reflow,option:option,enable:enable,disable:disable,offset:setOffset,set:function(c){set(c);updateOriginalInput();},get:get,destroy:destroy,container:container};spect.id=spectrums.push(spect)-1;return spect;}
function getOffset(picker,input){var extraY=0;var dpWidth=picker.outerWidth();var dpHeight=picker.outerHeight();var inputHeight=input.outerHeight();var doc=picker[0].ownerDocument;var docElem=doc.documentElement;var viewWidth=docElem.clientWidth+$(doc).scrollLeft();var viewHeight=docElem.clientHeight+$(doc).scrollTop();var offset=input.offset();offset.top+=inputHeight;offset.left-=Math.min(offset.left,(offset.left+dpWidth>viewWidth&&viewWidth>dpWidth)?Math.abs(offset.left+dpWidth-viewWidth):0);offset.top-=Math.min(offset.top,((offset.top+dpHeight>viewHeight&&viewHeight>dpHeight)?Math.abs(dpHeight+inputHeight-extraY):extraY));return offset;}
function noop(){}
function stopPropagation(e){e.stopPropagation();}
function bind(func,obj){var slice=Array.prototype.slice;var args=slice.call(arguments,2);return function(){return func.apply(obj,args.concat(slice.call(arguments)));};}
function draggable(element,onmove,onstart,onstop){onmove=onmove||function(){};onstart=onstart||function(){};onstop=onstop||function(){};var doc=document;var dragging=false;var offset={};var maxHeight=0;var maxWidth=0;var hasTouch=('ontouchstart'in window);var duringDragEvents={};duringDragEvents["selectstart"]=prevent;duringDragEvents["dragstart"]=prevent;duringDragEvents["touchmove mousemove"]=move;duringDragEvents["touchend mouseup"]=stop;function prevent(e){if(e.stopPropagation){e.stopPropagation();}
if(e.preventDefault){e.preventDefault();}
e.returnValue=false;}
function move(e){if(dragging){if(IE&&doc.documentMode<9&&!e.button){return stop();}
var t0=e.originalEvent&&e.originalEvent.touches&&e.originalEvent.touches[0];var pageX=t0&&t0.pageX||e.pageX;var pageY=t0&&t0.pageY||e.pageY;var dragX=Math.max(0,Math.min(pageX-offset.left,maxWidth));var dragY=Math.max(0,Math.min(pageY-offset.top,maxHeight));if(hasTouch){prevent(e);}
onmove.apply(element,[dragX,dragY,e]);}}
function start(e){var rightclick=(e.which)?(e.which==3):(e.button==2);if(!rightclick&&!dragging){if(onstart.apply(element,arguments)!==false){dragging=true;maxHeight=$(element).height();maxWidth=$(element).width();offset=$(element).offset();$(doc).bind(duringDragEvents);$(doc.body).addClass("sp-dragging");move(e);prevent(e);}}}
function stop(){if(dragging){$(doc).unbind(duringDragEvents);$(doc.body).removeClass("sp-dragging");setTimeout(function(){onstop.apply(element,arguments);},0);}
dragging=false;}
$(element).bind("touchstart mousedown",start);}
function throttle(func,wait,debounce){var timeout;return function(){var context=this,args=arguments;var throttler=function(){timeout=null;func.apply(context,args);};if(debounce)clearTimeout(timeout);if(debounce||!timeout)timeout=setTimeout(throttler,wait);};}
function inputTypeColorSupport(){return $.fn.spectrum.inputTypeColorSupport();}
var dataID="spectrum.id";$.fn.spectrum=function(opts,extra){if(typeof opts=="string"){var returnValue=this;var args=Array.prototype.slice.call(arguments,1);this.each(function(){var spect=spectrums[$(this).data(dataID)];if(spect){var method=spect[opts];if(!method){throw new Error("Spectrum: no such method: '"+opts+"'");}
if(opts=="get"){returnValue=spect.get();}
else if(opts=="container"){returnValue=spect.container;}
else if(opts=="option"){returnValue=spect.option.apply(spect,args);}
else if(opts=="destroy"){spect.destroy();$(this).removeData(dataID);}
else{method.apply(spect,args);}}});return returnValue;}
return this.spectrum("destroy").each(function(){var options=$.extend({},opts,$(this).data());var spect=spectrum(this,options);$(this).data(dataID,spect.id);});};$.fn.spectrum.load=true;$.fn.spectrum.loadOpts={};$.fn.spectrum.draggable=draggable;$.fn.spectrum.defaults=defaultOpts;$.fn.spectrum.inputTypeColorSupport=function inputTypeColorSupport(){if(typeof inputTypeColorSupport._cachedResult==="undefined"){var colorInput=$("<input type='color'/>")[0];inputTypeColorSupport._cachedResult=colorInput.type==="color"&&colorInput.value!=="";}
return inputTypeColorSupport._cachedResult;};$.spectrum={};$.spectrum.localization={};$.spectrum.palettes={};$.fn.spectrum.processNativeColorInputs=function(){var colorInputs=$("input[type=color]");if(colorInputs.length&&!inputTypeColorSupport()){colorInputs.spectrum({preferredFormat:"hex6"});}};(function(){var trimLeft=/^[\s,#]+/,trimRight=/\s+$/,tinyCounter=0,math=Math,mathRound=math.round,mathMin=math.min,mathMax=math.max,mathRandom=math.random;var tinycolor=function(color,opts){color=(color)?color:'';opts=opts||{};if(color instanceof tinycolor){return color;}
if(!(this instanceof tinycolor)){return new tinycolor(color,opts);}
var rgb=inputToRGB(color);this._originalInput=color,this._r=rgb.r,this._g=rgb.g,this._b=rgb.b,this._a=rgb.a,this._roundA=mathRound(100*this._a)/100,this._format=opts.format||rgb.format;this._gradientType=opts.gradientType;if(this._r<1){this._r=mathRound(this._r);}
if(this._g<1){this._g=mathRound(this._g);}
if(this._b<1){this._b=mathRound(this._b);}
this._ok=rgb.ok;this._tc_id=tinyCounter++;};tinycolor.prototype={isDark:function(){return this.getBrightness()<128;},isLight:function(){return!this.isDark();},isValid:function(){return this._ok;},getOriginalInput:function(){return this._originalInput;},getFormat:function(){return this._format;},getAlpha:function(){return this._a;},getBrightness:function(){var rgb=this.toRgb();return(rgb.r*299+rgb.g*587+rgb.b*114)/1000;},setAlpha:function(value){this._a=boundAlpha(value);this._roundA=mathRound(100*this._a)/100;return this;},toHsv:function(){var hsv=rgbToHsv(this._r,this._g,this._b);return{h:hsv.h*360,s:hsv.s,v:hsv.v,a:this._a};},toHsvString:function(){var hsv=rgbToHsv(this._r,this._g,this._b);var h=mathRound(hsv.h*360),s=mathRound(hsv.s*100),v=mathRound(hsv.v*100);return(this._a==1)?"hsv("+h+", "+s+"%, "+v+"%)":"hsva("+h+", "+s+"%, "+v+"%, "+this._roundA+")";},toHsl:function(){var hsl=rgbToHsl(this._r,this._g,this._b);return{h:hsl.h*360,s:hsl.s,l:hsl.l,a:this._a};},toHslString:function(){var hsl=rgbToHsl(this._r,this._g,this._b);var h=mathRound(hsl.h*360),s=mathRound(hsl.s*100),l=mathRound(hsl.l*100);return(this._a==1)?"hsl("+h+", "+s+"%, "+l+"%)":"hsla("+h+", "+s+"%, "+l+"%, "+this._roundA+")";},toHex:function(allow3Char){return rgbToHex(this._r,this._g,this._b,allow3Char);},toHexString:function(allow3Char){return'#'+this.toHex(allow3Char);},toHex8:function(){return rgbaToHex(this._r,this._g,this._b,this._a);},toHex8String:function(){return'#'+this.toHex8();},toRgb:function(){return{r:mathRound(this._r),g:mathRound(this._g),b:mathRound(this._b),a:this._a};},toRgbString:function(){return(this._a==1)?"rgb("+mathRound(this._r)+", "+mathRound(this._g)+", "+mathRound(this._b)+")":"rgba("+mathRound(this._r)+", "+mathRound(this._g)+", "+mathRound(this._b)+", "+this._roundA+")";},toPercentageRgb:function(){return{r:mathRound(bound01(this._r,255)*100)+"%",g:mathRound(bound01(this._g,255)*100)+"%",b:mathRound(bound01(this._b,255)*100)+"%",a:this._a};},toPercentageRgbString:function(){return(this._a==1)?"rgb("+mathRound(bound01(this._r,255)*100)+"%, "+mathRound(bound01(this._g,255)*100)+"%, "+mathRound(bound01(this._b,255)*100)+"%)":"rgba("+mathRound(bound01(this._r,255)*100)+"%, "+mathRound(bound01(this._g,255)*100)+"%, "+mathRound(bound01(this._b,255)*100)+"%, "+this._roundA+")";},toName:function(){if(this._a===0){return"transparent";}
if(this._a<1){return false;}
return hexNames[rgbToHex(this._r,this._g,this._b,true)]||false;},toFilter:function(secondColor){var hex8String='#'+rgbaToHex(this._r,this._g,this._b,this._a);var secondHex8String=hex8String;var gradientType=this._gradientType?"GradientType = 1, ":"";if(secondColor){var s=tinycolor(secondColor);secondHex8String=s.toHex8String();}
return"progid:DXImageTransform.Microsoft.gradient("+gradientType+"startColorstr="+hex8String+",endColorstr="+secondHex8String+")";},toString:function(format){var formatSet=!!format;format=format||this._format;var formattedString=false;var hasAlpha=this._a<1&&this._a>=0;var needsAlphaFormat=!formatSet&&hasAlpha&&(format==="hex"||format==="hex6"||format==="hex3"||format==="name");if(needsAlphaFormat){if(format==="name"&&this._a===0){return this.toName();}
return this.toRgbString();}
if(format==="rgb"){formattedString=this.toRgbString();}
if(format==="prgb"){formattedString=this.toPercentageRgbString();}
if(format==="hex"||format==="hex6"){formattedString=this.toHexString();}
if(format==="hex3"){formattedString=this.toHexString(true);}
if(format==="hex8"){formattedString=this.toHex8String();}
if(format==="name"){formattedString=this.toName();}
if(format==="hsl"){formattedString=this.toHslString();}
if(format==="hsv"){formattedString=this.toHsvString();}
return formattedString||this.toHexString();},_applyModification:function(fn,args){var color=fn.apply(null,[this].concat([].slice.call(args)));this._r=color._r;this._g=color._g;this._b=color._b;this.setAlpha(color._a);return this;},lighten:function(){return this._applyModification(lighten,arguments);},brighten:function(){return this._applyModification(brighten,arguments);},darken:function(){return this._applyModification(darken,arguments);},desaturate:function(){return this._applyModification(desaturate,arguments);},saturate:function(){return this._applyModification(saturate,arguments);},greyscale:function(){return this._applyModification(greyscale,arguments);},spin:function(){return this._applyModification(spin,arguments);},_applyCombination:function(fn,args){return fn.apply(null,[this].concat([].slice.call(args)));},analogous:function(){return this._applyCombination(analogous,arguments);},complement:function(){return this._applyCombination(complement,arguments);},monochromatic:function(){return this._applyCombination(monochromatic,arguments);},splitcomplement:function(){return this._applyCombination(splitcomplement,arguments);},triad:function(){return this._applyCombination(triad,arguments);},tetrad:function(){return this._applyCombination(tetrad,arguments);}};tinycolor.fromRatio=function(color,opts){if(typeof color=="object"){var newColor={};for(var i in color){if(color.hasOwnProperty(i)){if(i==="a"){newColor[i]=color[i];}
else{newColor[i]=convertToPercentage(color[i]);}}}
color=newColor;}
return tinycolor(color,opts);};function inputToRGB(color){var rgb={r:0,g:0,b:0};var a=1;var ok=false;var format=false;if(typeof color=="string"){color=stringInputToObject(color);}
if(typeof color=="object"){if(color.hasOwnProperty("r")&&color.hasOwnProperty("g")&&color.hasOwnProperty("b")){rgb=rgbToRgb(color.r,color.g,color.b);ok=true;format=String(color.r).substr(-1)==="%"?"prgb":"rgb";}
else if(color.hasOwnProperty("h")&&color.hasOwnProperty("s")&&color.hasOwnProperty("v")){color.s=convertToPercentage(color.s);color.v=convertToPercentage(color.v);rgb=hsvToRgb(color.h,color.s,color.v);ok=true;format="hsv";}
else if(color.hasOwnProperty("h")&&color.hasOwnProperty("s")&&color.hasOwnProperty("l")){color.s=convertToPercentage(color.s);color.l=convertToPercentage(color.l);rgb=hslToRgb(color.h,color.s,color.l);ok=true;format="hsl";}
if(color.hasOwnProperty("a")){a=color.a;}}
a=boundAlpha(a);return{ok:ok,format:color.format||format,r:mathMin(255,mathMax(rgb.r,0)),g:mathMin(255,mathMax(rgb.g,0)),b:mathMin(255,mathMax(rgb.b,0)),a:a};}
function rgbToRgb(r,g,b){return{r:bound01(r,255)*255,g:bound01(g,255)*255,b:bound01(b,255)*255};}
function rgbToHsl(r,g,b){r=bound01(r,255);g=bound01(g,255);b=bound01(b,255);var max=mathMax(r,g,b),min=mathMin(r,g,b);var h,s,l=(max+min)/2;if(max==min){h=s=0;}
else{var d=max-min;s=l>0.5?d/(2-max-min):d/(max+min);switch(max){case r:h=(g-b)/d+(g<b?6:0);break;case g:h=(b-r)/d+2;break;case b:h=(r-g)/d+4;break;}
h/=6;}
return{h:h,s:s,l:l};}
function hslToRgb(h,s,l){var r,g,b;h=bound01(h,360);s=bound01(s,100);l=bound01(l,100);function hue2rgb(p,q,t){if(t<0)t+=1;if(t>1)t-=1;if(t<1/6)return p+(q-p)*6*t;if(t<1/2)return q;if(t<2/3)return p+(q-p)*(2/3-t)*6;return p;}
if(s===0){r=g=b=l;}
else{var q=l<0.5?l*(1+s):l+s-l*s;var p=2*l-q;r=hue2rgb(p,q,h+1/3);g=hue2rgb(p,q,h);b=hue2rgb(p,q,h-1/3);}
return{r:r*255,g:g*255,b:b*255};}
function rgbToHsv(r,g,b){r=bound01(r,255);g=bound01(g,255);b=bound01(b,255);var max=mathMax(r,g,b),min=mathMin(r,g,b);var h,s,v=max;var d=max-min;s=max===0?0:d/max;if(max==min){h=0;}
else{switch(max){case r:h=(g-b)/d+(g<b?6:0);break;case g:h=(b-r)/d+2;break;case b:h=(r-g)/d+4;break;}
h/=6;}
return{h:h,s:s,v:v};}
function hsvToRgb(h,s,v){h=bound01(h,360)*6;s=bound01(s,100);v=bound01(v,100);var i=math.floor(h),f=h-i,p=v*(1-s),q=v*(1-f*s),t=v*(1-(1-f)*s),mod=i%6,r=[v,q,p,p,t,v][mod],g=[t,v,v,q,p,p][mod],b=[p,p,t,v,v,q][mod];return{r:r*255,g:g*255,b:b*255};}
function rgbToHex(r,g,b,allow3Char){var hex=[pad2(mathRound(r).toString(16)),pad2(mathRound(g).toString(16)),pad2(mathRound(b).toString(16))];if(allow3Char&&hex[0].charAt(0)==hex[0].charAt(1)&&hex[1].charAt(0)==hex[1].charAt(1)&&hex[2].charAt(0)==hex[2].charAt(1)){return hex[0].charAt(0)+hex[1].charAt(0)+hex[2].charAt(0);}
return hex.join("");}
function rgbaToHex(r,g,b,a){var hex=[pad2(convertDecimalToHex(a)),pad2(mathRound(r).toString(16)),pad2(mathRound(g).toString(16)),pad2(mathRound(b).toString(16))];return hex.join("");}
tinycolor.equals=function(color1,color2){if(!color1||!color2){return false;}
return tinycolor(color1).toRgbString()==tinycolor(color2).toRgbString();};tinycolor.random=function(){return tinycolor.fromRatio({r:mathRandom(),g:mathRandom(),b:mathRandom()});};function desaturate(color,amount){amount=(amount===0)?0:(amount||10);var hsl=tinycolor(color).toHsl();hsl.s-=amount/100;hsl.s=clamp01(hsl.s);return tinycolor(hsl);}
function saturate(color,amount){amount=(amount===0)?0:(amount||10);var hsl=tinycolor(color).toHsl();hsl.s+=amount/100;hsl.s=clamp01(hsl.s);return tinycolor(hsl);}
function greyscale(color){return tinycolor(color).desaturate(100);}
function lighten(color,amount){amount=(amount===0)?0:(amount||10);var hsl=tinycolor(color).toHsl();hsl.l+=amount/100;hsl.l=clamp01(hsl.l);return tinycolor(hsl);}
function brighten(color,amount){amount=(amount===0)?0:(amount||10);var rgb=tinycolor(color).toRgb();rgb.r=mathMax(0,mathMin(255,rgb.r-mathRound(255*-(amount/100))));rgb.g=mathMax(0,mathMin(255,rgb.g-mathRound(255*-(amount/100))));rgb.b=mathMax(0,mathMin(255,rgb.b-mathRound(255*-(amount/100))));return tinycolor(rgb);}
function darken(color,amount){amount=(amount===0)?0:(amount||10);var hsl=tinycolor(color).toHsl();hsl.l-=amount/100;hsl.l=clamp01(hsl.l);return tinycolor(hsl);}
function spin(color,amount){var hsl=tinycolor(color).toHsl();var hue=(mathRound(hsl.h)+amount)%360;hsl.h=hue<0?360+hue:hue;return tinycolor(hsl);}
function complement(color){var hsl=tinycolor(color).toHsl();hsl.h=(hsl.h+180)%360;return tinycolor(hsl);}
function triad(color){var hsl=tinycolor(color).toHsl();var h=hsl.h;return[tinycolor(color),tinycolor({h:(h+120)%360,s:hsl.s,l:hsl.l}),tinycolor({h:(h+240)%360,s:hsl.s,l:hsl.l})];}
function tetrad(color){var hsl=tinycolor(color).toHsl();var h=hsl.h;return[tinycolor(color),tinycolor({h:(h+90)%360,s:hsl.s,l:hsl.l}),tinycolor({h:(h+180)%360,s:hsl.s,l:hsl.l}),tinycolor({h:(h+270)%360,s:hsl.s,l:hsl.l})];}
function splitcomplement(color){var hsl=tinycolor(color).toHsl();var h=hsl.h;return[tinycolor(color),tinycolor({h:(h+72)%360,s:hsl.s,l:hsl.l}),tinycolor({h:(h+216)%360,s:hsl.s,l:hsl.l})];}
function analogous(color,results,slices){results=results||6;slices=slices||30;var hsl=tinycolor(color).toHsl();var part=360/slices;var ret=[tinycolor(color)];for(hsl.h=((hsl.h-(part*results>>1))+720)%360;--results;){hsl.h=(hsl.h+part)%360;ret.push(tinycolor(hsl));}
return ret;}
function monochromatic(color,results){results=results||6;var hsv=tinycolor(color).toHsv();var h=hsv.h,s=hsv.s,v=hsv.v;var ret=[];var modification=1/results;while(results--){ret.push(tinycolor({h:h,s:s,v:v}));v=(v+modification)%1;}
return ret;}
tinycolor.mix=function(color1,color2,amount){amount=(amount===0)?0:(amount||50);var rgb1=tinycolor(color1).toRgb();var rgb2=tinycolor(color2).toRgb();var p=amount/100;var w=p*2-1;var a=rgb2.a-rgb1.a;var w1;if(w*a==-1){w1=w;}else{w1=(w+a)/(1+w*a);}
w1=(w1+1)/2;var w2=1-w1;var rgba={r:rgb2.r*w1+rgb1.r*w2,g:rgb2.g*w1+rgb1.g*w2,b:rgb2.b*w1+rgb1.b*w2,a:rgb2.a*p+rgb1.a*(1-p)};return tinycolor(rgba);};tinycolor.readability=function(color1,color2){var c1=tinycolor(color1);var c2=tinycolor(color2);var rgb1=c1.toRgb();var rgb2=c2.toRgb();var brightnessA=c1.getBrightness();var brightnessB=c2.getBrightness();var colorDiff=(Math.max(rgb1.r,rgb2.r)-Math.min(rgb1.r,rgb2.r)+
Math.max(rgb1.g,rgb2.g)-Math.min(rgb1.g,rgb2.g)+
Math.max(rgb1.b,rgb2.b)-Math.min(rgb1.b,rgb2.b));return{brightness:Math.abs(brightnessA-brightnessB),color:colorDiff};};tinycolor.isReadable=function(color1,color2){var readability=tinycolor.readability(color1,color2);return readability.brightness>125&&readability.color>500;};tinycolor.mostReadable=function(baseColor,colorList){var bestColor=null;var bestScore=0;var bestIsReadable=false;for(var i=0;i<colorList.length;i++){var readability=tinycolor.readability(baseColor,colorList[i]);var readable=readability.brightness>125&&readability.color>500;var score=3*(readability.brightness/125)+(readability.color/500);if((readable&&!bestIsReadable)||(readable&&bestIsReadable&&score>bestScore)||((!readable)&&(!bestIsReadable)&&score>bestScore)){bestIsReadable=readable;bestScore=score;bestColor=tinycolor(colorList[i]);}}
return bestColor;};var names=tinycolor.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};var hexNames=tinycolor.hexNames=flip(names);function flip(o){var flipped={};for(var i in o){if(o.hasOwnProperty(i)){flipped[o[i]]=i;}}
return flipped;}
function boundAlpha(a){a=parseFloat(a);if(isNaN(a)||a<0||a>1){a=1;}
return a;}
function bound01(n,max){if(isOnePointZero(n)){n="100%";}
var processPercent=isPercentage(n);n=mathMin(max,mathMax(0,parseFloat(n)));if(processPercent){n=parseInt(n*max,10)/100;}
if((math.abs(n-max)<0.000001)){return 1;}
return(n%max)/parseFloat(max);}
function clamp01(val){return mathMin(1,mathMax(0,val));}
function parseIntFromHex(val){return parseInt(val,16);}
function isOnePointZero(n){return typeof n=="string"&&n.indexOf('.')!=-1&&parseFloat(n)===1;}
function isPercentage(n){return typeof n==="string"&&n.indexOf('%')!=-1;}
function pad2(c){return c.length==1?'0'+c:''+c;}
function convertToPercentage(n){if(n<=1){n=(n*100)+"%";}
return n;}
function convertDecimalToHex(d){return Math.round(parseFloat(d)*255).toString(16);}
function convertHexToDecimal(h){return(parseIntFromHex(h)/255);}
var matchers=(function(){var CSS_INTEGER="[-\\+]?\\d+%?";var CSS_NUMBER="[-\\+]?\\d*\\.\\d+%?";var CSS_UNIT="(?:"+CSS_NUMBER+")|(?:"+CSS_INTEGER+")";var PERMISSIVE_MATCH3="[\\s|\\(]+("+CSS_UNIT+")[,|\\s]+("+CSS_UNIT+")[,|\\s]+("+CSS_UNIT+")\\s*\\)?";var PERMISSIVE_MATCH4="[\\s|\\(]+("+CSS_UNIT+")[,|\\s]+("+CSS_UNIT+")[,|\\s]+("+CSS_UNIT+")[,|\\s]+("+CSS_UNIT+")\\s*\\)?";return{rgb:new RegExp("rgb"+PERMISSIVE_MATCH3),rgba:new RegExp("rgba"+PERMISSIVE_MATCH4),hsl:new RegExp("hsl"+PERMISSIVE_MATCH3),hsla:new RegExp("hsla"+PERMISSIVE_MATCH4),hsv:new RegExp("hsv"+PERMISSIVE_MATCH3),hsva:new RegExp("hsva"+PERMISSIVE_MATCH4),hex3:/^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex8:/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};})();function stringInputToObject(color){color=color.replace(trimLeft,'').replace(trimRight,'').toLowerCase();var named=false;if(names[color]){color=names[color];named=true;}
else if(color=='transparent'){return{r:0,g:0,b:0,a:0,format:"name"};}
var match;if((match=matchers.rgb.exec(color))){return{r:match[1],g:match[2],b:match[3]};}
if((match=matchers.rgba.exec(color))){return{r:match[1],g:match[2],b:match[3],a:match[4]};}
if((match=matchers.hsl.exec(color))){return{h:match[1],s:match[2],l:match[3]};}
if((match=matchers.hsla.exec(color))){return{h:match[1],s:match[2],l:match[3],a:match[4]};}
if((match=matchers.hsv.exec(color))){return{h:match[1],s:match[2],v:match[3]};}
if((match=matchers.hsva.exec(color))){return{h:match[1],s:match[2],v:match[3],a:match[4]};}
if((match=matchers.hex8.exec(color))){return{a:convertHexToDecimal(match[1]),r:parseIntFromHex(match[2]),g:parseIntFromHex(match[3]),b:parseIntFromHex(match[4]),format:named?"name":"hex8"};}
if((match=matchers.hex6.exec(color))){return{r:parseIntFromHex(match[1]),g:parseIntFromHex(match[2]),b:parseIntFromHex(match[3]),format:named?"name":"hex"};}
if((match=matchers.hex3.exec(color))){return{r:parseIntFromHex(match[1]+''+match[1]),g:parseIntFromHex(match[2]+''+match[2]),b:parseIntFromHex(match[3]+''+match[3]),format:named?"name":"hex"};}
return false;}
window.tinycolor=tinycolor;})();$(function(){if($.fn.spectrum.load){$.fn.spectrum.processNativeColorInputs();}});});
;(function($){var wcff_cart_handler=function(){this.ajaxFlaQ=true;this.initialize=function(){this.registerEvent();};var self=this;this.registerEvent=function(){$(document).on("dblclick","li.wcff_cart_editor_field",this,function(e){if($("div.wccpf-cart-edit-wrapper").length>0){return;}
var target=$(this);target.closest("ul.wccpf-is-editable-yes").removeClass("wccpf-is-editable-yes");if(!target.find("input, select, textarea, label").length!=0&&target.is(".wcff_cart_editor_field")){e.data.getFieldForEdit(target);}});$(document).on("click",".wccpf-update-cart-field-btn",this,function(e){e.data.updateField($(this));e.preventDefault();});$(document).on("click","#wccpf-cart-editor-close-btn",function(e){var editor=$(this).parent();editor.closest("ul.wccpf-cart-editor-ul").addClass("wccpf-is-editable-yes");editor.prev().show();editor.remove();e.preventDefault();});$(window).on("keydown",function(e){var keyCode=(event.keyCode?event.keyCode:event.which);var editor=$("div.wccpf-cart-edit-wrapper");if(keyCode===27&&editor.length>0){editor.closest("ul.wccpf-cart-editor-ul").addClass("wccpf-is-editable-yes");editor.prev().show();editor.remove();}});$(document).on("change","[data-is_pricing_rules=yes]",function(e){self.update_negotiate_price($(this));});setTimeout(function(){$('[data-has_field_rules="yes"]').trigger("change");if(wccpf_opt["is_page"]!="archive"){self.update_negotiate_price();}},180);$(document).on("change","input[name=variation_id]",function(){var variation_id=$("input[name=variation_id]").val();if(variation_id.trim()!=""){self.get_variation_product_fields($("input[name=variation_id]").val());}else{$(".wcff-variation-field").html("");self.update_negotiate_price($(this));}});};this.getFieldForEdit=function(_target){var fieldValue=(_target.find(".wcff-color-picker-color-show").length!=0)?_target.find(".wcff-color-picker-color-show").css("background-color"):$.trim(_target.find("p").text());var payload={product_id:_target.attr("data-productid"),product_cart_id:_target.attr("data-itemkey"),data:{value:fieldValue,field:_target.attr("data-field"),name:_target.attr("data-fieldname")}};this.prepareRequest("wcff_render_field_on_cart_edit","GET",payload);this.dock("inflate_field_for_edit",_target);};this.update_negotiate_price=function(_target){var dataObj=wccpf_opt["is_page"]=="archive"?_target.closest("li.product").find("[data-is_pricing_rules=yes]"):$("[data-is_pricing_rules=yes]"),currentField=$(""),prod_id=wccpf_opt["is_page"]=="archive"?_target.closest("li.product").find("a.add_to_cart_button").attr("data-product_id"):$("input[name=add-to-cart]").length!=0?$("input[name=add-to-cart]").val():$("button[name=add-to-cart]").val(),data={"_product_id":prod_id,"_variation_id":$("input[name=variation_id]").val(),"_fields_data":[]},is_field_cloneable="no",is_globe_cloneable=wccpf_opt.cloning=="yes"?"yes":"no",variation_not_null=$("input[name=variation_id]").length!=0&&($("input[name=variation_id]").val().trim()==""||$("input[name=variation_id]").val().trim()=="0")?false:true;if(variation_not_null){for(var i=0;i<dataObj.length;i++){currentField=$(dataObj[i]);if(currentField.is(":visible")||(currentField.is(".wccpf-color")&&currentField.closest("table").is(":visible")&&!currentField.closest("table").is(".wcff_is_hidden_from_field_rule"))){is_field_cloneable=is_globe_cloneable=="yes"?currentField.is("[type=radio]")||currentField.is("[type=checkbox]")?currentField.closest("ul").data("cloneable"):currentField.data("cloneable"):is_globe_cloneable;var field_name=currentField.is("[type=checkbox]")?currentField.attr("name").replace("[","").replace("]",""):currentField.attr("name"),field_value=currentField.is("[type=checkbox]")?currentField.prop("checked")?[currentField.val()]:[]:currentField.is("[type=radio]")?currentField.is(":checked")?currentField.val():"":currentField.val();data._fields_data.push({"is_clonable":is_field_cloneable,"name":field_name,"value":field_value});}}
self.prepareRequest("wcff_ajax_get_negotiated_price","GET",data);self.dock("wcff_ajax_get_negotiated_price",_target);}}
this.get_variation_product_fields=function(variation_id){self.prepareRequest("wcff_variation_fields","GET",{"variation_id":variation_id});self.dock("wcff_variation_fields");};this.updateField=function(_btn){var payload,fvalue=null,validator=new wcffValidator(),field_key=_btn.closest("div.wccpf-cart-edit-wrapper").attr("data-field"),field_name=_btn.closest("div.wccpf-cart-edit-wrapper").attr("data-field_name"),field_type=_btn.closest("div.wccpf-cart-edit-wrapper").attr("data-field_type"),productId=_btn.closest("div.wccpf-cart-edit-wrapper").attr("data-product_id"),cartItemKey=_btn.closest("div.wccpf-cart-edit-wrapper").attr("data-item_key");if(field_type==="radio"){validator.doValidate(_btn.closest("div.wccpf-cart-edit-wrapper").find("input"));fvalue=_btn.closest("div.wccpf-cart-edit-wrapper").find("input:checked").val();}else if(field_type==="checkbox"){validator.doValidate(_btn.closest("div.wccpf-cart-edit-wrapper").find("input"));fvalue=_btn.closest("div.wccpf-cart-edit-wrapper").find("input:checked").map(function(){return this.value;}).get();}else{validator.doValidate(_btn.closest("div.wccpf-cart-edit-wrapper").find(".wccpf-field"));fvalue=_btn.closest("div.wccpf-cart-edit-wrapper").find(".wccpf-field").val();}
if(validator.isValid){payload={product_id:productId,cart_item_key:cartItemKey,data:{field:field_key,name:field_name,value:fvalue,field_type:field_type}}
this.prepareRequest("wcff_update_cart_field_data","PUT",payload);this.dock("update_cart_field_data",_btn);}};this.prepareRequest=function(_request,_method,_data){this.request={request:_method,context:_request,post:"",post_type:"wccpf",payload:_data,};};this.prepareResponse=function(_status,_msg,_data){this.response={status:_status,message:_msg,payload:_data};};this.dock=function(_action,_target,is_file){var me=this;if(!this.ajaxFlaQ){return;}
$.ajax({type:"POST",data:{action:"wcff_ajax",wcff_param:JSON.stringify(this.request)},dataType:"json",url:woocommerce_params.ajax_url,beforeSend:function(){me.ajaxFlaQ=false;me.beforeAjaxSend(_action);},success:function(data){me.ajaxFlaQ=true;me.prepareResponse(data.status,data.message,data.data);if(me.response.status){me.responseHandler(_action,_target);}else{}},error:function(jqXHR,textStatus,errorThrown){me.ajaxFlaQ=true;},complete:function(){}});};this.beforeAjaxSend=function(_action){if(_action=="wcff_ajax_get_negotiated_price"){$(".woocommerce-variation-add-to-cart .button, button[name=add-to-cart]").addClass("disabled");}};this.responseHandler=function(_action,_target){if(!this.response.status){return;}
if(_action==="inflate_field_for_edit"&&this.response.payload){var wrapper='';var dHeader=$("head");var editFieldHtml=$(this.response.payload.html).find("td:last");var updateBtn='<button data-color_show="'+this.response.payload.color_showin+'" class="button wccpf-update-cart-field-btn">Update</button>';if(this.response.payload.field_type!=="file"){wrapper='<div class="wccpf-cart-edit-wrapper wccpf-cart-edit-'+this.response.payload.field_type+'-wrapper" data-field_type="'+this.response.payload.field_type+'" data-field="'+_target.attr("data-field")+'" data-field_name="'+_target.attr("data-fieldname")+'" data-product_id="'+_target.attr("data-productid")+'" data-item_key="'+_target.attr("data-itemkey")+'">';wrapper+='<a href="#" id="wccpf-cart-editor-close-btn" title="Close Editor"></a>';wrapper+=(editFieldHtml.html()+updateBtn);wrapper+='<div>';wrapper=$(wrapper);_target.hide();_target.parent().append(wrapper);}
if(this.response.payload.field_type=="email"||this.response.payload.field_type=="text"||this.response.payload.field_type=="number"||this.response.payload.field_type=="textarea"){wrapper.find("input").trigger("focus");}else if(this.response.payload.field_type=="colorpicker"){dHeader.append(this.response.payload.script);}else if(this.response.payload.field_type=="datepicker"){_target.parent().find(".wccpf-field").val(this.request.payload.data.value);if(dHeader.find("script[data-type=wpff-datepicker-script]").length==0){dHeader.append(this.response.payload.script);}
dHeader.append($(this.response.payload.html)[2]);}}else if(_action=="update_cart_field_data"){if(this.response.payload.status){if(this.response.payload.field_type!=="colorpicker"){_target.closest("div.wccpf-cart-edit-wrapper").parent().find("li.wcff_cart_editor_field").show().html('<p>'+decodeURI(this.response.payload.value)+'</p>');}else{if(_target.closest("div.wccpf-cart-edit-wrapper").parent().find("li.wcff_cart_editor_field").attr("data-color-box")==="yes"){_target.closest("div.wccpf-cart-edit-wrapper").parent().find("li.wcff_cart_editor_field").show().html('<p><span class="wcff-color-picker-color-show" style="background: '+decodeURI(this.response.payload.value)+';"></span></p>');}else{_target.closest("div.wccpf-cart-edit-wrapper").parent().find("li.wcff_cart_editor_field").show().html('<p>'+decodeURI(this.response.payload.value)+'</p>');}}
_target.closest("ul.wccpf-cart-editor-ul").addClass("wccpf-is-editable-yes");_target.closest("div.wccpf-cart-edit-wrapper").remove();}else{_target.prev().html(this.response.payload.message).show();}}else if(_action=="wcff_ajax_get_negotiated_price"){var parent=typeof _target=="undefined"?$("div.product"):wccpf_opt.is_page=="single"?_target.closest("div.product"):_target.closest("li.product");if(this.response.payload.status){var wcff_p_title_container=parent.find(".wcff_pricing_rules_title_container"),p_title_html="";if(wccpf_opt.ajax_pricing_rules_title.trim()=="show"&&this.response.payload.data["data_title"].length!=0){p_title_html+='<h4 class="wcff_pricing_rules_title_container">'+wccpf_opt.ajax_pricing_rules_title_header.trim()+'</h4>';}
p_title_html+="<table><tbody>";for(var i=0;i<this.response.payload.data["data_title"].length;i++){p_title_html+="<tr><td>"+this.response.payload.data["data_title"][i]["title"]+"</td><td>"+this.response.payload.data["data_title"][i]["amount"]+"</td></tr>";}
p_title_html+="</table></tbody>";if(wccpf_opt.price_details){if(wcff_p_title_container.length!=0){wcff_p_title_container.html(p_title_html);if(this.response.payload.data.data_title.length==0){$(".wcff_pricing_rules_title_container").hide();}else{$(".wcff_pricing_rules_title_container").show();}}else{parent.find(".wccpf_fields_table:last").parent().after('<div class="wcff_pricing_rules_title_container">'+p_title_html+'</div>');}}
if(wccpf_opt["is_page"]=="archive"){parent.find("span.price span.amount:last").replaceWith(this.response.payload.data["amount"]);}else{if(wccpf_opt.ajax_pricing_rules_price_container_is=="default"||wccpf_opt.ajax_pricing_rules_price_container_is=="both"){if($(".summary.entry-summary .woocommerce-variation-price:visible").length!=0){$(".summary.entry-summary .woocommerce-variation-price").html(this.response.payload.data["amount"])}else{$(".summary.entry-summary .price .woocommerce-Price-amount").replaceWith(this.response.payload.data["amount"]);}
if(wccpf_opt.ajax_pricing_rules_price_container_is=="both"){$(wccpf_opt.ajax_price_replace_container).html(this.response.payload.data["amount"]);}}else{$(wccpf_opt.ajax_price_replace_container).html(this.response.payload.data["amount"]);}}}else{}
$(".woocommerce-variation-add-to-cart .button, button[name=add-to-cart]").removeClass("disabled");}else if(_action=="wcff_variation_fields"){var variation_container=$(".wcff-variation-field");variation_container.html("");if(variation_container.length!=0){var variation_fields=this.response.payload.data;for(var i=0;i<variation_fields.length;i++){if(variation_fields[i]["location"]=="color_picker_scripts"){$("body").append(variation_fields[i]["html"]);}else{$(".wcff-variation-field[data-area='"+variation_fields[i]["location"]+"']").append(variation_fields[i]["html"]);}}}
var variation_container=$(".wcff-variation-cloning-field-container");for(var i=0;i<variation_container.length;i++){var container=$(variation_container[i]);if(container.find(".wcff-variation-field").children().length==0){container.hide();}else{container.show();}}
$('[data-has_field_rules="yes"]').trigger("change");self.update_negotiate_price();}};};$(document).on("submit","form.cart",function(){if(typeof(wccpf_opt.location)!=="undefined"){var me=$(this);$(".wccpf_fields_table").each(function(){if($(this).closest("form.cart").length==0){var cloned=$(this).clone(true);cloned.css("display","none");if($(this).find(".wccpf-field ").attr("wccpf-type")==="select"){cloned.find("select.wccpf-field").val($(this).find("select.wccpf-field").val());}
me.append(cloned);}});}
$(".wcff_is_hidden_from_field_rule").remove();});var wcffCloner=function(){this.initialize=function(){$(document).on("change","input[name=quantity]",function(){var product_count=$(this).val();var fields_count=parseInt($("#wccpf_fields_clone_count").val());$("#wccpf_fields_clone_count").val(product_count);if(fields_count<product_count){for(var i=fields_count+1;i<=product_count;i++){var groups=$(".wccpf-fields-container");for(var j=0;j<groups.length;j++){var group=$(groups[j]);var cloned=group.find('.wccpf-fields-group:first').clone(true);cloned.find("script").remove();cloned.find("div.sp-replacer").remove();cloned.find("span.wccpf-fields-group-title-index").html(i);cloned.find(".hasDatepicker").attr("id","");cloned.find(".hasDatepicker").removeClass("hasDatepicker");cloned.find(".wccpf-field").each(function(){var cloneable=$(this).attr('data-cloneable');if($(this).attr("wccpf-type")==="checkbox"||$(this).attr("wccpf-type")==="radio"){cloneable=$(this).closest("ul").attr('data-cloneable');}
if(typeof cloneable!==typeof undefined&&cloneable!==false){var name_attr=$(this).attr("name");if(name_attr.indexOf("[]")!=-1){var temp_name=name_attr.substring(0,name_attr.lastIndexOf("_"));name_attr=temp_name+"_"+i+"[]";}else{name_attr=name_attr.slice(0,-1)+i;}
$(this).attr("name",name_attr);}else{$(this).closest("table.wccpf_fields_table").remove();}});cloned.find(".wcff-label").each(function(){var cloneable=$(this).attr('data-cloneable');var label_name_attr=$(this).find("input").attr("name").slice(0,-1)+i;$(this).find("input").attr("name",label_name_attr);if(typeof cloneable===typeof undefined||cloneable===false){$(this).remove();}});group.append(cloned);setTimeout(function(){if(typeof(wccpf_init_color_pickers)=='function'){wccpf_init_color_pickers();}
if(typeof(wccpf_init_color_pickers_variation)=='function'){wccpf_init_color_pickers_variation();}
var color_fields=$(".wccpf-color");for(var x=0;x<=wccpf_opt.color_picker_functions.length;x++){if(typeof window[wccpf_opt.color_picker_functions[x]]=='function'){window[wccpf_opt.color_picker_functions[x]]();}
if(typeof window[wccpf_opt.color_picker_functions[x]]=='function'){window[wccpf_opt.color_picker_functions[x]]();}}
group.find('[data-has_field_rules="yes"]').trigger("change");},500);}}}else{$("div.wccpf-fields-group:eq("+(product_count-1)+")").nextAll().remove();}
if($(this).val()==1){$(".wccpf-fields-group-title-index").hide();}else{$(".wccpf-fields-group-title-index").show();}
var variation_container=$(".wcff-variation-cloning-field-container");for(var i=0;i<variation_container.length;i++){var container=$(variation_container[i]);if(container.find(".wcff-variation-field").children().length==0){container.hide();}else{container.show();}}});setTimeout(function(){$("input[name=quantity]").trigger("change");},300);};};var wcffValidator=function(){this.isValid=true;this.initialize=function(){$(document).on("submit","form.cart",this,function(e){var me=e.data;e.data.isValid=true;$(".wccpf-field").each(function(){if($(this).attr("wccpf-mandatory")==="yes"){me.doValidate($(this));}});return e.data.isValid;});if(wccpf_opt.validation_type==="blur"){$(document).on("blur",".wccpf-field",this,function(e){if($(this).attr("wccpf-mandatory")==="yes"){e.data.doValidate($(this));}});}};this.doValidate=function(field){if(field.attr("wccpf-type")!=="radio"&&field.attr("wccpf-type")!=="checkbox"&&field.attr("wccpf-type")!=="file"){if(field.attr("wccpf-type")!=="select"){if(this.doPatterns(field.attr("wccpf-pattern"),field.val())){field.nextAll(".wccpf-validation-message").hide();}else{this.isValid=false;field.nextAll(".wccpf-validation-message").show();}}else{if(field.val()!==""&&field.val()!=="wccpf_none"){field.nextAll(".wccpf-validation-message").hide();}else{this.isValid=false;field.nextAll(".wccpf-validation-message").show();}}}else if(field.attr("wccpf-type")==="radio"){if(field.closest("ul").find("input[type=radio]").is(':checked')){field.closest("ul").next().hide();}else{field.closest("ul").next().show();this.isValid=false;}}else if(field.attr("wccpf-type")==="checkbox"){var values=field.closest("ul").find("input[type=checkbox]:checked").map(function(){return this.value;}).get();if(values.length===0){field.closest("ul").next().show();this.isValid=false;}else{field.closest("ul").next().hide();}}else if(field.attr("wccpf-type")==="file"){if(field.val()==""){field.next().show();this.isValid=false;}else{field.next().hide();}}}
this.doPatterns=function(patt,val){var pattern={mandatory:/\S/,number:/^-?\d+\.?\d*$/,email:/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,};return pattern[patt].test(val);};};$(document).ready(function(){$(document).on("change",".wccpf-field",function(e){var target=$(this),prevExt=['jpeg','jpg','png','gif','bmp'];if(target.is("input[type=file]")&&target.attr("data-preview")==="yes"){if($.inArray(target.val().split('.').pop().toLowerCase(),prevExt)!==-1){if(!target.next().is(".wcff_image_prev_shop_continer")){target.after('<div class="wcff_image_prev_shop_continer" style="width:'+target.attr("data-preview-width")+'"></div>');}
var html="";for(var i=0;i<target[0].files.length;i++){html+='<img class="wcff-prev-shop-image" src="'+URL.createObjectURL(target[0].files[i])+'">';target[0].files[i].name=target[0].files[i].name.replace(/'|$|,/g,'');target[0].files[i].name=target[0].files[i].name.replace('$','');}
target.next(".wcff_image_prev_shop_continer").html(html);}}});if(typeof wccpf_opt!="undefined"){if(typeof(wccpf_opt.cloning)!=="undefined"&&wccpf_opt.cloning==="yes"){var wcff_cloner_obj=new wcffCloner();wcff_cloner_obj.initialize();}
if(typeof(wccpf_opt.validation)!=="undefined"&&wccpf_opt.validation==="yes"){var wcff_validator_obj=new wcffValidator();wcff_validator_obj.initialize();}
if($(".single-product").length!=0||(typeof(wccpf_opt.editable)!=="undefined"&&wccpf_opt.editable==="yes")||$("[data-is_pricing_rules=yes]").length!=0){var editor_obj=new wcff_cart_handler();editor_obj.initialize();}else{var editors=$("li.wcff_cart_editor_field");editors.removeClass("wcff_cart_editor_field").removeAttr('title data-field data-fieldname data-productid data-itemkey');editors.closest(".wccpf-is-editable-yes").removeClass('wccpf-is-editable-yes');}
if(wccpf_opt.is_page==="archive"){function wcff_get_fields_value(product_fields,parent){var data={},single_field=$("");for(var i=0;i<product_fields.length;i++){single_field=$(product_fields[i]);if(single_field.closest(".wcff_is_hidden_from_field_rule").length==0){if(!single_field.is("[type=checkbox]")&&!single_field.is("[type=file]")){data[single_field.attr("name")]=parent.find('[name="'+single_field.attr("name")+'"]').val();}else if(single_field.is("[type=checkbox]")&&single_field.is(":checked")){var key=single_field.attr("name").replace("[]","");if(typeof data[key]=="undefined"){data[key]=[];}
data[key].push(single_field.val());}}}
return data;};$(document.body).on('adding_to_cart',function(e,_btn,_data){var parent=_btn.closest("li.product"),product_fields=parent.find(".wccpf_fields_table .wccpf-field"),data=wcff_get_fields_value(product_fields,parent);$.extend(_data,data);});if(wccpf_opt.is_ajax_add_to_cart=="no"){$(document).on('click',".add_to_cart_button:not(.product_type_variable)",function(e){var parent=$(this).closest("li.product"),product_fields=parent.find(".wccpf_fields_table:not(.wcff_is_hidden_from_field_rule) .wccpf-field"),data=wcff_get_fields_value(product_fields,parent),query_string="";for(var j in data){query_string+="&"+j+"="+data[j];}
if(query_string!=""){$(this).attr("href",$(this).attr("href")+query_string);}});}}}});})(jQuery);
;var woof_edit_view=false;var woof_current_conatiner_class='';var woof_current_containers_data={};jQuery(function(){jQuery('.woof_edit_view').click(function(){woof_edit_view=true;var sid=jQuery(this).data('sid');var sid_tmp=sid.substring(0,sid.indexOf(' '));if(sid_tmp){sid=sid_tmp;}
var css_class='woof_sid_'+sid;jQuery(this).next('div').html(css_class);jQuery("."+css_class+" .woof_container_overlay_item").show();jQuery("."+css_class+" .woof_container").addClass('woof_container_overlay');jQuery.each(jQuery("."+css_class+" .woof_container_overlay_item"),function(index,ul){jQuery(this).html(jQuery(this).parents('.woof_container').data('css-class'));});return false;});woof_init_masonry();});function woof_init_masonry(){return;}
;window.wp=window.wp||{},function(a){var b="undefined"==typeof _wpUtilSettings?{}:_wpUtilSettings;wp.template=_.memoize(function(b){var c,d={evaluate:/<#([\s\S]+?)#>/g,interpolate:/\{\{\{([\s\S]+?)\}\}\}/g,escape:/\{\{([^\}]+?)\}\}(?!\})/g,variable:"data"};return function(e){return(c=c||_.template(a("#tmpl-"+b).html(),d))(e)}}),wp.ajax={settings:b.ajax||{},post:function(a,b){return wp.ajax.send({data:_.isObject(a)?a:_.extend(b||{},{action:a})})},send:function(b,c){var d,e;return _.isObject(b)?c=b:(c=c||{},c.data=_.extend(c.data||{},{action:b})),c=_.defaults(c||{},{type:"POST",url:wp.ajax.settings.url,context:this}),e=a.Deferred(function(b){c.success&&b.done(c.success),c.error&&b.fail(c.error),delete c.success,delete c.error,b.jqXHR=a.ajax(c).done(function(a){"1"!==a&&1!==a||(a={success:!0}),_.isObject(a)&&!_.isUndefined(a.success)?b[a.success?"resolveWith":"rejectWith"](this,[a.data]):b.rejectWith(this,[a])}).fail(function(){b.rejectWith(this,arguments)})}),d=e.promise(),d.abort=function(){return e.jqXHR.abort(),this},d}}}(jQuery);
;!function(b,d,r,n){var t=function(t){var a=this;a.$form=t,a.$attributeFields=t.find(".variations select"),a.$singleVariation=t.find(".single_variation"),a.$singleVariationWrap=t.find(".single_variation_wrap"),a.$resetVariations=t.find(".reset_variations"),a.$product=t.closest(".product"),a.variationData=t.data("product_variations"),a.useAjax=!1===a.variationData,a.xhr=!1,a.loading=!0,a.$singleVariationWrap.show(),a.$form.off(".wc-variation-form"),a.getChosenAttributes=a.getChosenAttributes.bind(a),a.findMatchingVariations=a.findMatchingVariations.bind(a),a.isMatch=a.isMatch.bind(a),a.toggleResetLink=a.toggleResetLink.bind(a),t.on("click.wc-variation-form",".reset_variations",{variationForm:a},a.onReset),t.on("reload_product_variations",{variationForm:a},a.onReload),t.on("hide_variation",{variationForm:a},a.onHide),t.on("show_variation",{variationForm:a},a.onShow),t.on("click",".single_add_to_cart_button",{variationForm:a},a.onAddToCart),t.on("reset_data",{variationForm:a},a.onResetDisplayedVariation),t.on("reset_image",{variationForm:a},a.onResetImage),t.on("change.wc-variation-form",".variations select",{variationForm:a},a.onChange),t.on("found_variation.wc-variation-form",{variationForm:a},a.onFoundVariation),t.on("check_variations.wc-variation-form",{variationForm:a},a.onFindVariation),t.on("update_variation_values.wc-variation-form",{variationForm:a},a.onUpdateAttributes),setTimeout(function(){t.trigger("check_variations"),t.trigger("wc_variation_form"),a.loading=!1},100)};t.prototype.onReset=function(t){t.preventDefault(),t.data.variationForm.$attributeFields.val("").change(),t.data.variationForm.$form.trigger("reset_data")},t.prototype.onReload=function(t){var a=t.data.variationForm;a.variationData=a.$form.data("product_variations"),a.useAjax=!1===a.variationData,a.$form.trigger("check_variations")},t.prototype.onHide=function(t){t.preventDefault(),t.data.variationForm.$form.find(".single_add_to_cart_button").removeClass("wc-variation-is-unavailable").addClass("disabled wc-variation-selection-needed"),t.data.variationForm.$form.find(".woocommerce-variation-add-to-cart").removeClass("woocommerce-variation-add-to-cart-enabled").addClass("woocommerce-variation-add-to-cart-disabled")},t.prototype.onShow=function(t,a,i){t.preventDefault(),i?(t.data.variationForm.$form.find(".single_add_to_cart_button").removeClass("disabled wc-variation-selection-needed wc-variation-is-unavailable"),t.data.variationForm.$form.find(".woocommerce-variation-add-to-cart").removeClass("woocommerce-variation-add-to-cart-disabled").addClass("woocommerce-variation-add-to-cart-enabled")):(t.data.variationForm.$form.find(".single_add_to_cart_button").removeClass("wc-variation-selection-needed").addClass("disabled wc-variation-is-unavailable"),t.data.variationForm.$form.find(".woocommerce-variation-add-to-cart").removeClass("woocommerce-variation-add-to-cart-enabled").addClass("woocommerce-variation-add-to-cart-disabled"))},t.prototype.onAddToCart=function(t){b(this).is(".disabled")&&(t.preventDefault(),b(this).is(".wc-variation-is-unavailable")?d.alert(wc_add_to_cart_variation_params.i18n_unavailable_text):b(this).is(".wc-variation-selection-needed")&&d.alert(wc_add_to_cart_variation_params.i18n_make_a_selection_text))},t.prototype.onResetDisplayedVariation=function(t){var a=t.data.variationForm;a.$product.find(".product_meta").find(".sku").wc_reset_content(),a.$product.find(".product_weight").wc_reset_content(),a.$product.find(".product_dimensions").wc_reset_content(),a.$form.trigger("reset_image"),a.$singleVariation.slideUp(200).trigger("hide_variation")},t.prototype.onResetImage=function(t){t.data.variationForm.$form.wc_variations_image_update(!1)},t.prototype.onFindVariation=function(t){var a=t.data.variationForm,i=a.getChosenAttributes(),r=i.data;if(i.count===i.chosenCount)if(a.useAjax)a.xhr&&a.xhr.abort(),a.$form.block({message:null,overlayCSS:{background:"#fff",opacity:.6}}),r.product_id=parseInt(a.$form.data("product_id"),10),r.custom_data=a.$form.data("custom_data"),a.xhr=b.ajax({url:wc_add_to_cart_variation_params.wc_ajax_url.toString().replace("%%endpoint%%","get_variation"),type:"POST",data:r,success:function(t){t?a.$form.trigger("found_variation",[t]):(a.$form.trigger("reset_data"),i.chosenCount=0,a.loading||(a.$form.find(".single_variation").after('<p class="wc-no-matching-variations woocommerce-info">'+wc_add_to_cart_variation_params.i18n_no_matching_variations_text+"</p>"),a.$form.find(".wc-no-matching-variations").slideDown(200)))},complete:function(){a.$form.unblock()}});else{a.$form.trigger("update_variation_values");var e=a.findMatchingVariations(a.variationData,r).shift();e?a.$form.trigger("found_variation",[e]):(a.$form.trigger("reset_data"),i.chosenCount=0,a.loading||(a.$form.find(".single_variation").after('<p class="wc-no-matching-variations woocommerce-info">'+wc_add_to_cart_variation_params.i18n_no_matching_variations_text+"</p>"),a.$form.find(".wc-no-matching-variations").slideDown(200)))}else a.$form.trigger("update_variation_values"),a.$form.trigger("reset_data");a.toggleResetLink(0<i.chosenCount)},t.prototype.onFoundVariation=function(t,a){var i=t.data.variationForm,r=i.$product.find(".product_meta").find(".sku"),e=i.$product.find(".product_weight"),o=i.$product.find(".product_dimensions"),n=i.$singleVariationWrap.find(".quantity"),s=!0,_=!1,c="";a.sku?r.wc_set_content(a.sku):r.wc_reset_content(),a.weight?e.wc_set_content(a.weight_html):e.wc_reset_content(),a.dimensions?o.wc_set_content(b.parseHTML(a.dimensions_html)[0].data):o.wc_reset_content(),i.$form.wc_variations_image_update(a),a.variation_is_visible?(_=m("variation-template"),a.variation_id):_=m("unavailable-variation-template"),c=(c=(c=_({variation:a})).replace("/*<![CDATA[*/","")).replace("/*]]>*/",""),i.$singleVariation.html(c),i.$form.find('input[name="variation_id"], input.variation_id').val(a.variation_id).change(),"yes"===a.is_sold_individually?(n.find("input.qty").val("1").attr("min","1").attr("max",""),n.hide()):(n.find("input.qty").attr("min",a.min_qty).attr("max",a.max_qty),n.show()),a.is_purchasable&&a.is_in_stock&&a.variation_is_visible||(s=!1),b.trim(i.$singleVariation.text())?i.$singleVariation.slideDown(200).trigger("show_variation",[a,s]):i.$singleVariation.show().trigger("show_variation",[a,s])},t.prototype.onChange=function(t){var a=t.data.variationForm;a.$form.find('input[name="variation_id"], input.variation_id').val("").change(),a.$form.find(".wc-no-matching-variations").remove(),a.useAjax?a.$form.trigger("check_variations"):(a.$form.trigger("woocommerce_variation_select_change"),a.$form.trigger("check_variations"),b(this).blur()),a.$form.trigger("woocommerce_variation_has_changed")},t.prototype.addSlashes=function(t){return t=(t=t.replace(/'/g,"\\'")).replace(/"/g,'\\"')},t.prototype.onUpdateAttributes=function(t){var p=t.data.variationForm,w=p.getChosenAttributes().data;p.useAjax||(p.$attributeFields.each(function(t,a){var i,r=b(a),e=r.data("attribute_name")||r.attr("name"),o=b(a).data("show_option_none"),n=":gt(0)",s=b("<select/>"),_=r.val()||"",c=!0;if(!r.data("attribute_html")){var d=r.clone();d.find("option").removeAttr("disabled attached").removeAttr("selected"),r.data("attribute_options",d.find("option"+n).get()),r.data("attribute_html",d.html())}s.html(r.data("attribute_html"));var m=b.extend(!0,{},w);m[e]="";var v=p.findMatchingVariations(p.variationData,m);for(var l in v)if("undefined"!=typeof v[l]){var g=v[l].attributes;for(var f in g)if(g.hasOwnProperty(f)){var u=g[f],h="";f===e&&(v[l].variation_is_active&&(h="enabled"),u?(u=b("<div/>").html(u).text(),s.find('option[value="'+p.addSlashes(u)+'"]').addClass("attached "+h)):s.find("option:gt(0)").addClass("attached "+h))}}i=s.find("option.attached").length,!_||0!==i&&0!==s.find('option.attached.enabled[value="'+p.addSlashes(_)+'"]').length||(c=!1),0<i&&_&&c&&"no"===o&&(s.find("option:first").remove(),n=""),s.find("option"+n+":not(.attached)").remove(),r.html(s.html()),r.find("option"+n+":not(.enabled)").prop("disabled",!0),_?c?r.val(_):r.val("").change():r.val("")}),p.$form.trigger("woocommerce_update_variation_values"))},t.prototype.getChosenAttributes=function(){var i={},r=0,e=0;return this.$attributeFields.each(function(){var t=b(this).data("attribute_name")||b(this).attr("name"),a=b(this).val()||"";0<a.length&&e++,r++,i[t]=a}),{count:r,chosenCount:e,data:i}},t.prototype.findMatchingVariations=function(t,a){for(var i=[],r=0;r<t.length;r++){var e=t[r];this.isMatch(e.attributes,a)&&i.push(e)}return i},t.prototype.isMatch=function(t,a){var i=!0;for(var r in t)if(t.hasOwnProperty(r)){var e=t[r],o=a[r];e!==n&&o!==n&&0!==e.length&&0!==o.length&&e!==o&&(i=!1)}return i},t.prototype.toggleResetLink=function(t){t?"hidden"===this.$resetVariations.css("visibility")&&this.$resetVariations.css("visibility","visible").hide().fadeIn():this.$resetVariations.css("visibility","hidden")},b.fn.wc_variation_form=function(){return new t(this),this},b.fn.wc_set_content=function(t){n===this.attr("data-o_content")&&this.attr("data-o_content",this.text()),this.text(t)},b.fn.wc_reset_content=function(){n!==this.attr("data-o_content")&&this.text(this.attr("data-o_content"))},b.fn.wc_set_variation_attr=function(t,a){n===this.attr("data-o_"+t)&&this.attr("data-o_"+t,this.attr(t)?this.attr(t):""),!1===a?this.removeAttr(t):this.attr(t,a)},b.fn.wc_reset_variation_attr=function(t){n!==this.attr("data-o_"+t)&&this.attr(t,this.attr("data-o_"+t))},b.fn.wc_maybe_trigger_slide_position_reset=function(t){var a=b(this),i=a.closest(".product").find(".images"),r=!1,e=t&&t.image_id?t.image_id:"";a.attr("current-image")!==e&&(r=!0),a.attr("current-image",e),r&&i.trigger("woocommerce_gallery_reset_slide_position")},b.fn.wc_variations_image_update=function(t){var a=this,i=a.closest(".product"),r=i.find(".images"),e=i.find(".flex-control-nav"),o=e.find("li:eq(0) img"),n=r.find(".woocommerce-product-gallery__image, .woocommerce-product-gallery__image--placeholder").eq(0),s=n.find(".wp-post-image"),_=n.find("a").eq(0);if(t&&t.image&&t.image.src&&1<t.image.src.length){0<e.find('li img[data-o_src="'+t.image.gallery_thumbnail_src+'"]').length&&a.wc_variations_image_reset();var c=e.find('li img[src="'+t.image.gallery_thumbnail_src+'"]');if(0<c.length)return c.trigger("click"),a.attr("current-image",t.image_id),void d.setTimeout(function(){b(d).trigger("resize"),r.trigger("woocommerce_gallery_init_zoom")},20);s.wc_set_variation_attr("src",t.image.src),s.wc_set_variation_attr("height",t.image.src_h),s.wc_set_variation_attr("width",t.image.src_w),s.wc_set_variation_attr("srcset",t.image.srcset),s.wc_set_variation_attr("sizes",t.image.sizes),s.wc_set_variation_attr("title",t.image.title),s.wc_set_variation_attr("data-caption",t.image.caption),s.wc_set_variation_attr("alt",t.image.alt),s.wc_set_variation_attr("data-src",t.image.full_src),s.wc_set_variation_attr("data-large_image",t.image.full_src),s.wc_set_variation_attr("data-large_image_width",t.image.full_src_w),s.wc_set_variation_attr("data-large_image_height",t.image.full_src_h),n.wc_set_variation_attr("data-thumb",t.image.src),o.wc_set_variation_attr("src",t.image.gallery_thumbnail_src),_.wc_set_variation_attr("href",t.image.full_src)}else a.wc_variations_image_reset();d.setTimeout(function(){b(d).trigger("resize"),a.wc_maybe_trigger_slide_position_reset(t),r.trigger("woocommerce_gallery_init_zoom")},20)},b.fn.wc_variations_image_reset=function(){var t=this.closest(".product"),a=t.find(".images"),i=t.find(".flex-control-nav").find("li:eq(0) img"),r=a.find(".woocommerce-product-gallery__image, .woocommerce-product-gallery__image--placeholder").eq(0),e=r.find(".wp-post-image"),o=r.find("a").eq(0);e.wc_reset_variation_attr("src"),e.wc_reset_variation_attr("width"),e.wc_reset_variation_attr("height"),e.wc_reset_variation_attr("srcset"),e.wc_reset_variation_attr("sizes"),e.wc_reset_variation_attr("title"),e.wc_reset_variation_attr("data-caption"),e.wc_reset_variation_attr("alt"),e.wc_reset_variation_attr("data-src"),e.wc_reset_variation_attr("data-large_image"),e.wc_reset_variation_attr("data-large_image_width"),e.wc_reset_variation_attr("data-large_image_height"),r.wc_reset_variation_attr("data-thumb"),i.wc_reset_variation_attr("src"),o.wc_reset_variation_attr("href")},b(function(){"undefined"!=typeof wc_add_to_cart_variation_params&&b(".variations_form").each(function(){b(this).wc_variation_form()})});var m=function(t){var a=r.getElementById("tmpl-"+t).textContent,i=!1;return(i=(i=(i=i||/<#\s?data\./.test(a))||/{{{?\s?data\.(?!variation\.).+}}}?/.test(a))||/{{{?\s?data\.variation\.[\w-]*[^\s}]/.test(a))?wp.template(t):function(t){var o=t.variation||{};return a.replace(/({{{?)\s?data\.variation\.([\w-]*)\s?(}}}?)/g,function(t,a,i,r){if(a.length!==r.length)return"";var e=o[i]||"";return 2===a.length?d.escape(e):e})}}}(jQuery,window,document);
;function socializer_addbookmark(t){var e=navigator.userAgent.toLowerCase(),s=-1!=e.indexOf("mac"),r="";t.preventDefault(),r=(s?"Command/Cmd":"CTRL")+" + D",alert("Press "+r+" to bookmark this page")}function socializer_shortlink(t,e){t.preventDefault(),link=e.getAttribute("href"),"#"!=link&&prompt("Short link",link)}window.wpsr_helpers={addClass:function(t,e){t.classList?t.classList.add(e):t.className+=" "+e},removeClass:function(t,e){t.classList?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")},popup:function(t,e,s,r){var n=screen.width/2-s/2,o=screen.height/2-r/2;return window.open(t,e,"toolbar=no,location=no,menubar=no,scrollbars=yes,width="+s+",height="+r+",top="+o+",left="+n)},ajax:function(t,e,s,r,n){var o=new XMLHttpRequest;o.props=n,o.open(e,t,!0),"POST"==e&&o.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),o.onreadystatechange=function(){if(4==o.readyState&&200==o.status)return r(o)},o.send(s)},format_num:function(t){if(t<1e3)return t;for(var e=["k","m","b","t"],s=t,r=0;r<e.length;r++)if(!((t/=1e3)>1e3)){s=Math.round(100*t)/100+e[r];break}return s}},document.addEventListener("DOMContentLoaded",function(){for(scr_links=document.querySelectorAll(".socializer.sr-popup a"),u=0;u<scr_links.length;u++){var t=scr_links[u];t.addEventListener("click",function(t){var e=this.getAttribute("href");"#"==e||this.hasAttribute("onclick")||wpsr_helpers.popup(e,"_blank",800,500),t.preventDefault()})}var e=document.querySelector(".wpsr-sharebar");if(e){var s=function(){vlsb=document.querySelector(".wpsr-sb-vl-scontent"),vlsb&&(stick=vlsb.getAttribute("data-stickto"),stick_ele=document.querySelector(stick),stick_ele&&(vlsb.style.left=stick_ele.offsetLeft+"px")),e&&window.innerWidth<=800&&wpsr_helpers.addClass(e,"wpsr-mow")};s(),window.addEventListener("resize",s),sb_close_btn=e.querySelector(".wpsr-sb-close"),sb_close_btn.addEventListener("click",function(){e.classList.contains("wpsr-mow")?wpsr_helpers.removeClass(e,"wpsr-mow"):wpsr_helpers.addClass(e,"wpsr-mow")})}if(tsb=document.querySelector(".wpsr-text-sb"),tsb){window.wpsr_tsb={stext:"",startx:0,starty:0};var r={ptitle:tsb.getAttribute("data-title"),purl:tsb.getAttribute("data-url"),psurl:tsb.getAttribute("data-surl"),ptuname:tsb.getAttribute("data-tuname"),cnt_sel:tsb.getAttribute("data-content"),word_count:tsb.getAttribute("data-tcount")},n=function(){var t="";return window.getSelection?t=window.getSelection().toString():document.selection&&"Control"!=document.selection.type&&(t=document.selection.createRange().text),t},o=function(t,e){tsb.style.left=t+"px",tsb.style.top=e+"px",wpsr_helpers.addClass(tsb,"wpsr-tsb-active")},a=function(){wpsr_helpers.removeClass(tsb,"wpsr-tsb-active")},i=function(){var t=wpsr_tsb.stext,e=parseInt(r.word_count);return 0==e?t:t.split(" ").slice(0,e).join(" ")},l=function(t){var e={"{title}":r.ptitle,"{url}":r.purl,"{s-url}":r.psurl,"{twitter-username}":r.ptuname,"{excerpt}":i()};for(var s in e)e.hasOwnProperty(s)&&(t=t.replace(RegExp(s,"g"),e[s]));return t};if(""!=r.cnt_sel)for(var p=r.cnt_sel.replace(/[\[\]<>"'\/\\=&%]/g,""),c=document.querySelectorAll(p),u=0;u<c.length;u++){var d=c[u];d.addEventListener("mousedown",function(t){wpsr_tsb.startx=t.pageX,wpsr_tsb.starty=t.pageY}),d.addEventListener("mouseup",function(t){var e=n();""!=e?(tsb_x=(t.pageX+parseInt(wpsr_tsb.startx))/2,tsb_y=Math.min(wpsr_tsb.starty,t.pageY),e!=wpsr_tsb.stext?(o(tsb_x,tsb_y),wpsr_tsb.stext=e):a()):a()})}document.body.addEventListener("mousedown",function(t){a()}),tsb.addEventListener("mousedown",function(t){t.stopPropagation()});for(var w=tsb.querySelectorAll("a"),u=0;u<w.length;u++){var t=w[u];t.addEventListener("click",function(t){var e=this.getAttribute("data-link");"#"!=e&&(rep_link=l(e),wpsr_helpers.popup(rep_link,800,500)),t.preventDefault()})}}if(msb=document.querySelector(".wpsr-mobile-sb"),msb&&msb.classList.contains("wpsr-mobile-hos")){var b=0;window.addEventListener("scroll",function(){var t=window.pageYOffset||document.documentElement.scrollTop;t>b?wpsr_helpers.addClass(msb,"wpsr-msb-hide"):wpsr_helpers.removeClass(msb,"wpsr-msb-hide"),b=t},!1)}var m=document.querySelector(".wpsr-followbar");m&&(fb_close_btn=m.querySelector(".wpsr-fb-close"),fb_close_btn.addEventListener("click",function(){m.classList.contains("wpsr-mow")?wpsr_helpers.removeClass(m,"wpsr-mow"):wpsr_helpers.addClass(m,"wpsr-mow")})),mow=document.querySelectorAll("[data-minonwidth]");var f=function(t,e){var s=t.getAttribute("data-minonwidth");s>0&&(e<=s?wpsr_helpers.addClass(t,"wpsr-mow"):wpsr_helpers.removeClass(t,"wpsr-mow"))};if(mow.length>0&&["resize","load"].forEach(function(t){window.addEventListener(t,function(){for(u=0;u<mow.length;u++){var t=mow[u];f(t,window.innerWidth)}})}),wpsr_ajax_url){var v=document.querySelectorAll("[data-wpsrs]");if(v.length>0){var _={},h=wpsr_ajax_url+"?action=wpsr_share_count";for(u=0;u<v.length;u++){var g=v[u],y=g.getAttribute("data-wpsrs"),k=g.getAttribute("data-wpsrs-svcs").split(",");y in _||(_[y]=[]);for(j=0;j<k.length;j++)-1===_[y].indexOf(k[j])&&_[y].push(k[j])}var L=function(t){var e=JSON.parse(t.responseText),s=document.querySelectorAll('[data-wpsrs="'+t.props.forURL+'"]');for(u=0;u<s.length;u++){var r=s[u],n=r.getAttribute("data-wpsrs-svcs").split(","),o=0;for(j=0;j<n.length;j++){var a=n[j];a in e&&(o+=parseInt(e[a])||0)}r.innerHTML=wpsr_helpers.format_num(o)}};for(var y in _)_.hasOwnProperty(y)&&(send_data={url:y,services:_[y]},to_send="data="+JSON.stringify(send_data),wpsr_helpers.ajax(h,"POST",to_send,L,{forURL:y}))}}});
;/*! tooltipster v4.2.6 */!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(a){return b(a)}):"object"==typeof exports?module.exports=b(require("jquery")):b(jQuery)}(this,function(a){function b(a){this.$container,this.constraints=null,this.__$tooltip,this.__init(a)}function c(b,c){var d=!0;return a.each(b,function(a,e){return void 0===c[a]||b[a]!==c[a]?(d=!1,!1):void 0}),d}function d(b){var c=b.attr("id"),d=c?h.window.document.getElementById(c):null;return d?d===b[0]:a.contains(h.window.document.body,b[0])}function e(){if(!g)return!1;var a=g.document.body||g.document.documentElement,b=a.style,c="transition",d=["Moz","Webkit","Khtml","O","ms"];if("string"==typeof b[c])return!0;c=c.charAt(0).toUpperCase()+c.substr(1);for(var e=0;e<d.length;e++)if("string"==typeof b[d[e]+c])return!0;return!1}var f={animation:"fade",animationDuration:350,content:null,contentAsHTML:!1,contentCloning:!1,debug:!0,delay:300,delayTouch:[300,500],functionInit:null,functionBefore:null,functionReady:null,functionAfter:null,functionFormat:null,IEmin:6,interactive:!1,multiple:!1,parent:null,plugins:["sideTip"],repositionOnScroll:!1,restoration:"none",selfDestruction:!0,theme:[],timer:0,trackerInterval:500,trackOrigin:!1,trackTooltip:!1,trigger:"hover",triggerClose:{click:!1,mouseleave:!1,originClick:!1,scroll:!1,tap:!1,touchleave:!1},triggerOpen:{click:!1,mouseenter:!1,tap:!1,touchstart:!1},updateAnimation:"rotate",zIndex:9999999},g="undefined"!=typeof window?window:null,h={hasTouchCapability:!(!g||!("ontouchstart"in g||g.DocumentTouch&&g.document instanceof g.DocumentTouch||g.navigator.maxTouchPoints)),hasTransitions:e(),IE:!1,semVer:"4.2.6",window:g},i=function(){this.__$emitterPrivate=a({}),this.__$emitterPublic=a({}),this.__instancesLatestArr=[],this.__plugins={},this._env=h};i.prototype={__bridge:function(b,c,d){if(!c[d]){var e=function(){};e.prototype=b;var g=new e;g.__init&&g.__init(c),a.each(b,function(a,b){0!=a.indexOf("__")&&(c[a]?f.debug&&console.log("The "+a+" method of the "+d+" plugin conflicts with another plugin or native methods"):(c[a]=function(){return g[a].apply(g,Array.prototype.slice.apply(arguments))},c[a].bridged=g))}),c[d]=g}return this},__setWindow:function(a){return h.window=a,this},_getRuler:function(a){return new b(a)},_off:function(){return this.__$emitterPrivate.off.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments)),this},_on:function(){return this.__$emitterPrivate.on.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments)),this},_one:function(){return this.__$emitterPrivate.one.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments)),this},_plugin:function(b){var c=this;if("string"==typeof b){var d=b,e=null;return d.indexOf(".")>0?e=c.__plugins[d]:a.each(c.__plugins,function(a,b){return b.name.substring(b.name.length-d.length-1)=="."+d?(e=b,!1):void 0}),e}if(b.name.indexOf(".")<0)throw new Error("Plugins must be namespaced");return c.__plugins[b.name]=b,b.core&&c.__bridge(b.core,c,b.name),this},_trigger:function(){var a=Array.prototype.slice.apply(arguments);return"string"==typeof a[0]&&(a[0]={type:a[0]}),this.__$emitterPrivate.trigger.apply(this.__$emitterPrivate,a),this.__$emitterPublic.trigger.apply(this.__$emitterPublic,a),this},instances:function(b){var c=[],d=b||".tooltipstered";return a(d).each(function(){var b=a(this),d=b.data("tooltipster-ns");d&&a.each(d,function(a,d){c.push(b.data(d))})}),c},instancesLatest:function(){return this.__instancesLatestArr},off:function(){return this.__$emitterPublic.off.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this},on:function(){return this.__$emitterPublic.on.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this},one:function(){return this.__$emitterPublic.one.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this},origins:function(b){var c=b?b+" ":"";return a(c+".tooltipstered").toArray()},setDefaults:function(b){return a.extend(f,b),this},triggerHandler:function(){return this.__$emitterPublic.triggerHandler.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this}},a.tooltipster=new i,a.Tooltipster=function(b,c){this.__callbacks={close:[],open:[]},this.__closingTime,this.__Content,this.__contentBcr,this.__destroyed=!1,this.__$emitterPrivate=a({}),this.__$emitterPublic=a({}),this.__enabled=!0,this.__garbageCollector,this.__Geometry,this.__lastPosition,this.__namespace="tooltipster-"+Math.round(1e6*Math.random()),this.__options,this.__$originParents,this.__pointerIsOverOrigin=!1,this.__previousThemes=[],this.__state="closed",this.__timeouts={close:[],open:null},this.__touchEvents=[],this.__tracker=null,this._$origin,this._$tooltip,this.__init(b,c)},a.Tooltipster.prototype={__init:function(b,c){var d=this;if(d._$origin=a(b),d.__options=a.extend(!0,{},f,c),d.__optionsFormat(),!h.IE||h.IE>=d.__options.IEmin){var e=null;if(void 0===d._$origin.data("tooltipster-initialTitle")&&(e=d._$origin.attr("title"),void 0===e&&(e=null),d._$origin.data("tooltipster-initialTitle",e)),null!==d.__options.content)d.__contentSet(d.__options.content);else{var g,i=d._$origin.attr("data-tooltip-content");i&&(g=a(i)),g&&g[0]?d.__contentSet(g.first()):d.__contentSet(e)}d._$origin.removeAttr("title").addClass("tooltipstered"),d.__prepareOrigin(),d.__prepareGC(),a.each(d.__options.plugins,function(a,b){d._plug(b)}),h.hasTouchCapability&&a(h.window.document.body).on("touchmove."+d.__namespace+"-triggerOpen",function(a){d._touchRecordEvent(a)}),d._on("created",function(){d.__prepareTooltip()})._on("repositioned",function(a){d.__lastPosition=a.position})}else d.__options.disabled=!0},__contentInsert:function(){var a=this,b=a._$tooltip.find(".tooltipster-content"),c=a.__Content,d=function(a){c=a};return a._trigger({type:"format",content:a.__Content,format:d}),a.__options.functionFormat&&(c=a.__options.functionFormat.call(a,a,{origin:a._$origin[0]},a.__Content)),"string"!=typeof c||a.__options.contentAsHTML?b.empty().append(c):b.text(c),a},__contentSet:function(b){return b instanceof a&&this.__options.contentCloning&&(b=b.clone(!0)),this.__Content=b,this._trigger({type:"updated",content:b}),this},__destroyError:function(){throw new Error("This tooltip has been destroyed and cannot execute your method call.")},__geometry:function(){var b=this,c=b._$origin,d=b._$origin.is("area");if(d){var e=b._$origin.parent().attr("name");c=a('img[usemap="#'+e+'"]')}var f=c[0].getBoundingClientRect(),g=a(h.window.document),i=a(h.window),j=c,k={available:{document:null,window:null},document:{size:{height:g.height(),width:g.width()}},window:{scroll:{left:h.window.scrollX||h.window.document.documentElement.scrollLeft,top:h.window.scrollY||h.window.document.documentElement.scrollTop},size:{height:i.height(),width:i.width()}},origin:{fixedLineage:!1,offset:{},size:{height:f.bottom-f.top,width:f.right-f.left},usemapImage:d?c[0]:null,windowOffset:{bottom:f.bottom,left:f.left,right:f.right,top:f.top}}};if(d){var l=b._$origin.attr("shape"),m=b._$origin.attr("coords");if(m&&(m=m.split(","),a.map(m,function(a,b){m[b]=parseInt(a)})),"default"!=l)switch(l){case"circle":var n=m[0],o=m[1],p=m[2],q=o-p,r=n-p;k.origin.size.height=2*p,k.origin.size.width=k.origin.size.height,k.origin.windowOffset.left+=r,k.origin.windowOffset.top+=q;break;case"rect":var s=m[0],t=m[1],u=m[2],v=m[3];k.origin.size.height=v-t,k.origin.size.width=u-s,k.origin.windowOffset.left+=s,k.origin.windowOffset.top+=t;break;case"poly":for(var w=0,x=0,y=0,z=0,A="even",B=0;B<m.length;B++){var C=m[B];"even"==A?(C>y&&(y=C,0===B&&(w=y)),w>C&&(w=C),A="odd"):(C>z&&(z=C,1==B&&(x=z)),x>C&&(x=C),A="even")}k.origin.size.height=z-x,k.origin.size.width=y-w,k.origin.windowOffset.left+=w,k.origin.windowOffset.top+=x}}var D=function(a){k.origin.size.height=a.height,k.origin.windowOffset.left=a.left,k.origin.windowOffset.top=a.top,k.origin.size.width=a.width};for(b._trigger({type:"geometry",edit:D,geometry:{height:k.origin.size.height,left:k.origin.windowOffset.left,top:k.origin.windowOffset.top,width:k.origin.size.width}}),k.origin.windowOffset.right=k.origin.windowOffset.left+k.origin.size.width,k.origin.windowOffset.bottom=k.origin.windowOffset.top+k.origin.size.height,k.origin.offset.left=k.origin.windowOffset.left+k.window.scroll.left,k.origin.offset.top=k.origin.windowOffset.top+k.window.scroll.top,k.origin.offset.bottom=k.origin.offset.top+k.origin.size.height,k.origin.offset.right=k.origin.offset.left+k.origin.size.width,k.available.document={bottom:{height:k.document.size.height-k.origin.offset.bottom,width:k.document.size.width},left:{height:k.document.size.height,width:k.origin.offset.left},right:{height:k.document.size.height,width:k.document.size.width-k.origin.offset.right},top:{height:k.origin.offset.top,width:k.document.size.width}},k.available.window={bottom:{height:Math.max(k.window.size.height-Math.max(k.origin.windowOffset.bottom,0),0),width:k.window.size.width},left:{height:k.window.size.height,width:Math.max(k.origin.windowOffset.left,0)},right:{height:k.window.size.height,width:Math.max(k.window.size.width-Math.max(k.origin.windowOffset.right,0),0)},top:{height:Math.max(k.origin.windowOffset.top,0),width:k.window.size.width}};"html"!=j[0].tagName.toLowerCase();){if("fixed"==j.css("position")){k.origin.fixedLineage=!0;break}j=j.parent()}return k},__optionsFormat:function(){return"number"==typeof this.__options.animationDuration&&(this.__options.animationDuration=[this.__options.animationDuration,this.__options.animationDuration]),"number"==typeof this.__options.delay&&(this.__options.delay=[this.__options.delay,this.__options.delay]),"number"==typeof this.__options.delayTouch&&(this.__options.delayTouch=[this.__options.delayTouch,this.__options.delayTouch]),"string"==typeof this.__options.theme&&(this.__options.theme=[this.__options.theme]),null===this.__options.parent?this.__options.parent=a(h.window.document.body):"string"==typeof this.__options.parent&&(this.__options.parent=a(this.__options.parent)),"hover"==this.__options.trigger?(this.__options.triggerOpen={mouseenter:!0,touchstart:!0},this.__options.triggerClose={mouseleave:!0,originClick:!0,touchleave:!0}):"click"==this.__options.trigger&&(this.__options.triggerOpen={click:!0,tap:!0},this.__options.triggerClose={click:!0,tap:!0}),this._trigger("options"),this},__prepareGC:function(){var b=this;return b.__options.selfDestruction?b.__garbageCollector=setInterval(function(){var c=(new Date).getTime();b.__touchEvents=a.grep(b.__touchEvents,function(a,b){return c-a.time>6e4}),d(b._$origin)||b.close(function(){b.destroy()})},2e4):clearInterval(b.__garbageCollector),b},__prepareOrigin:function(){var a=this;if(a._$origin.off("."+a.__namespace+"-triggerOpen"),h.hasTouchCapability&&a._$origin.on("touchstart."+a.__namespace+"-triggerOpen touchend."+a.__namespace+"-triggerOpen touchcancel."+a.__namespace+"-triggerOpen",function(b){a._touchRecordEvent(b)}),a.__options.triggerOpen.click||a.__options.triggerOpen.tap&&h.hasTouchCapability){var b="";a.__options.triggerOpen.click&&(b+="click."+a.__namespace+"-triggerOpen "),a.__options.triggerOpen.tap&&h.hasTouchCapability&&(b+="touchend."+a.__namespace+"-triggerOpen"),a._$origin.on(b,function(b){a._touchIsMeaningfulEvent(b)&&a._open(b)})}if(a.__options.triggerOpen.mouseenter||a.__options.triggerOpen.touchstart&&h.hasTouchCapability){var b="";a.__options.triggerOpen.mouseenter&&(b+="mouseenter."+a.__namespace+"-triggerOpen "),a.__options.triggerOpen.touchstart&&h.hasTouchCapability&&(b+="touchstart."+a.__namespace+"-triggerOpen"),a._$origin.on(b,function(b){!a._touchIsTouchEvent(b)&&a._touchIsEmulatedEvent(b)||(a.__pointerIsOverOrigin=!0,a._openShortly(b))})}if(a.__options.triggerClose.mouseleave||a.__options.triggerClose.touchleave&&h.hasTouchCapability){var b="";a.__options.triggerClose.mouseleave&&(b+="mouseleave."+a.__namespace+"-triggerOpen "),a.__options.triggerClose.touchleave&&h.hasTouchCapability&&(b+="touchend."+a.__namespace+"-triggerOpen touchcancel."+a.__namespace+"-triggerOpen"),a._$origin.on(b,function(b){a._touchIsMeaningfulEvent(b)&&(a.__pointerIsOverOrigin=!1)})}return a},__prepareTooltip:function(){var b=this,c=b.__options.interactive?"auto":"";return b._$tooltip.attr("id",b.__namespace).css({"pointer-events":c,zIndex:b.__options.zIndex}),a.each(b.__previousThemes,function(a,c){b._$tooltip.removeClass(c)}),a.each(b.__options.theme,function(a,c){b._$tooltip.addClass(c)}),b.__previousThemes=a.merge([],b.__options.theme),b},__scrollHandler:function(b){var c=this;if(c.__options.triggerClose.scroll)c._close(b);else if(d(c._$origin)&&d(c._$tooltip)){var e=null;if(b.target===h.window.document)c.__Geometry.origin.fixedLineage||c.__options.repositionOnScroll&&c.reposition(b);else{e=c.__geometry();var f=!1;if("fixed"!=c._$origin.css("position")&&c.__$originParents.each(function(b,c){var d=a(c),g=d.css("overflow-x"),h=d.css("overflow-y");if("visible"!=g||"visible"!=h){var i=c.getBoundingClientRect();if("visible"!=g&&(e.origin.windowOffset.left<i.left||e.origin.windowOffset.right>i.right))return f=!0,!1;if("visible"!=h&&(e.origin.windowOffset.top<i.top||e.origin.windowOffset.bottom>i.bottom))return f=!0,!1}return"fixed"==d.css("position")?!1:void 0}),f)c._$tooltip.css("visibility","hidden");else if(c._$tooltip.css("visibility","visible"),c.__options.repositionOnScroll)c.reposition(b);else{var g=e.origin.offset.left-c.__Geometry.origin.offset.left,i=e.origin.offset.top-c.__Geometry.origin.offset.top;c._$tooltip.css({left:c.__lastPosition.coord.left+g,top:c.__lastPosition.coord.top+i})}}c._trigger({type:"scroll",event:b,geo:e})}return c},__stateSet:function(a){return this.__state=a,this._trigger({type:"state",state:a}),this},__timeoutsClear:function(){return clearTimeout(this.__timeouts.open),this.__timeouts.open=null,a.each(this.__timeouts.close,function(a,b){clearTimeout(b)}),this.__timeouts.close=[],this},__trackerStart:function(){var a=this,b=a._$tooltip.find(".tooltipster-content");return a.__options.trackTooltip&&(a.__contentBcr=b[0].getBoundingClientRect()),a.__tracker=setInterval(function(){if(d(a._$origin)&&d(a._$tooltip)){if(a.__options.trackOrigin){var e=a.__geometry(),f=!1;c(e.origin.size,a.__Geometry.origin.size)&&(a.__Geometry.origin.fixedLineage?c(e.origin.windowOffset,a.__Geometry.origin.windowOffset)&&(f=!0):c(e.origin.offset,a.__Geometry.origin.offset)&&(f=!0)),f||(a.__options.triggerClose.mouseleave?a._close():a.reposition())}if(a.__options.trackTooltip){var g=b[0].getBoundingClientRect();g.height===a.__contentBcr.height&&g.width===a.__contentBcr.width||(a.reposition(),a.__contentBcr=g)}}else a._close()},a.__options.trackerInterval),a},_close:function(b,c,d){var e=this,f=!0;if(e._trigger({type:"close",event:b,stop:function(){f=!1}}),f||d){c&&e.__callbacks.close.push(c),e.__callbacks.open=[],e.__timeoutsClear();var g=function(){a.each(e.__callbacks.close,function(a,c){c.call(e,e,{event:b,origin:e._$origin[0]})}),e.__callbacks.close=[]};if("closed"!=e.__state){var i=!0,j=new Date,k=j.getTime(),l=k+e.__options.animationDuration[1];if("disappearing"==e.__state&&l>e.__closingTime&&e.__options.animationDuration[1]>0&&(i=!1),i){e.__closingTime=l,"disappearing"!=e.__state&&e.__stateSet("disappearing");var m=function(){clearInterval(e.__tracker),e._trigger({type:"closing",event:b}),e._$tooltip.off("."+e.__namespace+"-triggerClose").removeClass("tooltipster-dying"),a(h.window).off("."+e.__namespace+"-triggerClose"),e.__$originParents.each(function(b,c){a(c).off("scroll."+e.__namespace+"-triggerClose")}),e.__$originParents=null,a(h.window.document.body).off("."+e.__namespace+"-triggerClose"),e._$origin.off("."+e.__namespace+"-triggerClose"),e._off("dismissable"),e.__stateSet("closed"),e._trigger({type:"after",event:b}),e.__options.functionAfter&&e.__options.functionAfter.call(e,e,{event:b,origin:e._$origin[0]}),g()};h.hasTransitions?(e._$tooltip.css({"-moz-animation-duration":e.__options.animationDuration[1]+"ms","-ms-animation-duration":e.__options.animationDuration[1]+"ms","-o-animation-duration":e.__options.animationDuration[1]+"ms","-webkit-animation-duration":e.__options.animationDuration[1]+"ms","animation-duration":e.__options.animationDuration[1]+"ms","transition-duration":e.__options.animationDuration[1]+"ms"}),e._$tooltip.clearQueue().removeClass("tooltipster-show").addClass("tooltipster-dying"),e.__options.animationDuration[1]>0&&e._$tooltip.delay(e.__options.animationDuration[1]),e._$tooltip.queue(m)):e._$tooltip.stop().fadeOut(e.__options.animationDuration[1],m)}}else g()}return e},_off:function(){return this.__$emitterPrivate.off.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments)),this},_on:function(){return this.__$emitterPrivate.on.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments)),this},_one:function(){return this.__$emitterPrivate.one.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments)),this},_open:function(b,c){var e=this;if(!e.__destroying&&d(e._$origin)&&e.__enabled){var f=!0;if("closed"==e.__state&&(e._trigger({type:"before",event:b,stop:function(){f=!1}}),f&&e.__options.functionBefore&&(f=e.__options.functionBefore.call(e,e,{event:b,origin:e._$origin[0]}))),f!==!1&&null!==e.__Content){c&&e.__callbacks.open.push(c),e.__callbacks.close=[],e.__timeoutsClear();var g,i=function(){"stable"!=e.__state&&e.__stateSet("stable"),a.each(e.__callbacks.open,function(a,b){b.call(e,e,{origin:e._$origin[0],tooltip:e._$tooltip[0]})}),e.__callbacks.open=[]};if("closed"!==e.__state)g=0,"disappearing"===e.__state?(e.__stateSet("appearing"),h.hasTransitions?(e._$tooltip.clearQueue().removeClass("tooltipster-dying").addClass("tooltipster-show"),e.__options.animationDuration[0]>0&&e._$tooltip.delay(e.__options.animationDuration[0]),e._$tooltip.queue(i)):e._$tooltip.stop().fadeIn(i)):"stable"==e.__state&&i();else{if(e.__stateSet("appearing"),g=e.__options.animationDuration[0],e.__contentInsert(),e.reposition(b,!0),h.hasTransitions?(e._$tooltip.addClass("tooltipster-"+e.__options.animation).addClass("tooltipster-initial").css({"-moz-animation-duration":e.__options.animationDuration[0]+"ms","-ms-animation-duration":e.__options.animationDuration[0]+"ms","-o-animation-duration":e.__options.animationDuration[0]+"ms","-webkit-animation-duration":e.__options.animationDuration[0]+"ms","animation-duration":e.__options.animationDuration[0]+"ms","transition-duration":e.__options.animationDuration[0]+"ms"}),setTimeout(function(){"closed"!=e.__state&&(e._$tooltip.addClass("tooltipster-show").removeClass("tooltipster-initial"),e.__options.animationDuration[0]>0&&e._$tooltip.delay(e.__options.animationDuration[0]),e._$tooltip.queue(i))},0)):e._$tooltip.css("display","none").fadeIn(e.__options.animationDuration[0],i),e.__trackerStart(),a(h.window).on("resize."+e.__namespace+"-triggerClose",function(b){var c=a(document.activeElement);(c.is("input")||c.is("textarea"))&&a.contains(e._$tooltip[0],c[0])||e.reposition(b)}).on("scroll."+e.__namespace+"-triggerClose",function(a){e.__scrollHandler(a)}),e.__$originParents=e._$origin.parents(),e.__$originParents.each(function(b,c){a(c).on("scroll."+e.__namespace+"-triggerClose",function(a){e.__scrollHandler(a)})}),e.__options.triggerClose.mouseleave||e.__options.triggerClose.touchleave&&h.hasTouchCapability){e._on("dismissable",function(a){a.dismissable?a.delay?(m=setTimeout(function(){e._close(a.event)},a.delay),e.__timeouts.close.push(m)):e._close(a):clearTimeout(m)});var j=e._$origin,k="",l="",m=null;e.__options.interactive&&(j=j.add(e._$tooltip)),e.__options.triggerClose.mouseleave&&(k+="mouseenter."+e.__namespace+"-triggerClose ",l+="mouseleave."+e.__namespace+"-triggerClose "),e.__options.triggerClose.touchleave&&h.hasTouchCapability&&(k+="touchstart."+e.__namespace+"-triggerClose",l+="touchend."+e.__namespace+"-triggerClose touchcancel."+e.__namespace+"-triggerClose"),j.on(l,function(a){if(e._touchIsTouchEvent(a)||!e._touchIsEmulatedEvent(a)){var b="mouseleave"==a.type?e.__options.delay:e.__options.delayTouch;e._trigger({delay:b[1],dismissable:!0,event:a,type:"dismissable"})}}).on(k,function(a){!e._touchIsTouchEvent(a)&&e._touchIsEmulatedEvent(a)||e._trigger({dismissable:!1,event:a,type:"dismissable"})})}e.__options.triggerClose.originClick&&e._$origin.on("click."+e.__namespace+"-triggerClose",function(a){e._touchIsTouchEvent(a)||e._touchIsEmulatedEvent(a)||e._close(a)}),(e.__options.triggerClose.click||e.__options.triggerClose.tap&&h.hasTouchCapability)&&setTimeout(function(){if("closed"!=e.__state){var b="",c=a(h.window.document.body);e.__options.triggerClose.click&&(b+="click."+e.__namespace+"-triggerClose "),e.__options.triggerClose.tap&&h.hasTouchCapability&&(b+="touchend."+e.__namespace+"-triggerClose"),c.on(b,function(b){e._touchIsMeaningfulEvent(b)&&(e._touchRecordEvent(b),e.__options.interactive&&a.contains(e._$tooltip[0],b.target)||e._close(b))}),e.__options.triggerClose.tap&&h.hasTouchCapability&&c.on("touchstart."+e.__namespace+"-triggerClose",function(a){e._touchRecordEvent(a)})}},0),e._trigger("ready"),e.__options.functionReady&&e.__options.functionReady.call(e,e,{origin:e._$origin[0],tooltip:e._$tooltip[0]})}if(e.__options.timer>0){var m=setTimeout(function(){e._close()},e.__options.timer+g);e.__timeouts.close.push(m)}}}return e},_openShortly:function(a){var b=this,c=!0;if("stable"!=b.__state&&"appearing"!=b.__state&&!b.__timeouts.open&&(b._trigger({type:"start",event:a,stop:function(){c=!1}}),c)){var d=0==a.type.indexOf("touch")?b.__options.delayTouch:b.__options.delay;d[0]?b.__timeouts.open=setTimeout(function(){b.__timeouts.open=null,b.__pointerIsOverOrigin&&b._touchIsMeaningfulEvent(a)?(b._trigger("startend"),b._open(a)):b._trigger("startcancel")},d[0]):(b._trigger("startend"),b._open(a))}return b},_optionsExtract:function(b,c){var d=this,e=a.extend(!0,{},c),f=d.__options[b];return f||(f={},a.each(c,function(a,b){var c=d.__options[a];void 0!==c&&(f[a]=c)})),a.each(e,function(b,c){void 0!==f[b]&&("object"!=typeof c||c instanceof Array||null==c||"object"!=typeof f[b]||f[b]instanceof Array||null==f[b]?e[b]=f[b]:a.extend(e[b],f[b]))}),e},_plug:function(b){var c=a.tooltipster._plugin(b);if(!c)throw new Error('The "'+b+'" plugin is not defined');return c.instance&&a.tooltipster.__bridge(c.instance,this,c.name),this},_touchIsEmulatedEvent:function(a){for(var b=!1,c=(new Date).getTime(),d=this.__touchEvents.length-1;d>=0;d--){var e=this.__touchEvents[d];if(!(c-e.time<500))break;e.target===a.target&&(b=!0)}return b},_touchIsMeaningfulEvent:function(a){return this._touchIsTouchEvent(a)&&!this._touchSwiped(a.target)||!this._touchIsTouchEvent(a)&&!this._touchIsEmulatedEvent(a)},_touchIsTouchEvent:function(a){return 0==a.type.indexOf("touch")},_touchRecordEvent:function(a){return this._touchIsTouchEvent(a)&&(a.time=(new Date).getTime(),this.__touchEvents.push(a)),this},_touchSwiped:function(a){for(var b=!1,c=this.__touchEvents.length-1;c>=0;c--){var d=this.__touchEvents[c];if("touchmove"==d.type){b=!0;break}if("touchstart"==d.type&&a===d.target)break}return b},_trigger:function(){var b=Array.prototype.slice.apply(arguments);return"string"==typeof b[0]&&(b[0]={type:b[0]}),b[0].instance=this,b[0].origin=this._$origin?this._$origin[0]:null,b[0].tooltip=this._$tooltip?this._$tooltip[0]:null,this.__$emitterPrivate.trigger.apply(this.__$emitterPrivate,b),a.tooltipster._trigger.apply(a.tooltipster,b),this.__$emitterPublic.trigger.apply(this.__$emitterPublic,b),this},_unplug:function(b){var c=this;if(c[b]){var d=a.tooltipster._plugin(b);d.instance&&a.each(d.instance,function(a,d){c[a]&&c[a].bridged===c[b]&&delete c[a]}),c[b].__destroy&&c[b].__destroy(),delete c[b]}return c},close:function(a){return this.__destroyed?this.__destroyError():this._close(null,a),this},content:function(a){var b=this;if(void 0===a)return b.__Content;if(b.__destroyed)b.__destroyError();else if(b.__contentSet(a),null!==b.__Content){if("closed"!==b.__state&&(b.__contentInsert(),b.reposition(),b.__options.updateAnimation))if(h.hasTransitions){var c=b.__options.updateAnimation;b._$tooltip.addClass("tooltipster-update-"+c),setTimeout(function(){"closed"!=b.__state&&b._$tooltip.removeClass("tooltipster-update-"+c)},1e3)}else b._$tooltip.fadeTo(200,.5,function(){"closed"!=b.__state&&b._$tooltip.fadeTo(200,1)})}else b._close();return b},destroy:function(){var b=this;if(b.__destroyed)b.__destroyError();else{"closed"!=b.__state?b.option("animationDuration",0)._close(null,null,!0):b.__timeoutsClear(),b._trigger("destroy"),b.__destroyed=!0,b._$origin.removeData(b.__namespace).off("."+b.__namespace+"-triggerOpen"),a(h.window.document.body).off("."+b.__namespace+"-triggerOpen");var c=b._$origin.data("tooltipster-ns");if(c)if(1===c.length){var d=null;"previous"==b.__options.restoration?d=b._$origin.data("tooltipster-initialTitle"):"current"==b.__options.restoration&&(d="string"==typeof b.__Content?b.__Content:a("<div></div>").append(b.__Content).html()),d&&b._$origin.attr("title",d),b._$origin.removeClass("tooltipstered"),b._$origin.removeData("tooltipster-ns").removeData("tooltipster-initialTitle")}else c=a.grep(c,function(a,c){return a!==b.__namespace}),b._$origin.data("tooltipster-ns",c);b._trigger("destroyed"),b._off(),b.off(),b.__Content=null,b.__$emitterPrivate=null,b.__$emitterPublic=null,b.__options.parent=null,b._$origin=null,b._$tooltip=null,a.tooltipster.__instancesLatestArr=a.grep(a.tooltipster.__instancesLatestArr,function(a,c){return b!==a}),clearInterval(b.__garbageCollector)}return b},disable:function(){return this.__destroyed?(this.__destroyError(),this):(this._close(),this.__enabled=!1,this)},elementOrigin:function(){return this.__destroyed?void this.__destroyError():this._$origin[0]},elementTooltip:function(){return this._$tooltip?this._$tooltip[0]:null},enable:function(){return this.__enabled=!0,this},hide:function(a){return this.close(a)},instance:function(){return this},off:function(){return this.__destroyed||this.__$emitterPublic.off.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this},on:function(){return this.__destroyed?this.__destroyError():this.__$emitterPublic.on.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this},one:function(){return this.__destroyed?this.__destroyError():this.__$emitterPublic.one.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this},open:function(a){return this.__destroyed?this.__destroyError():this._open(null,a),this},option:function(b,c){return void 0===c?this.__options[b]:(this.__destroyed?this.__destroyError():(this.__options[b]=c,this.__optionsFormat(),a.inArray(b,["trigger","triggerClose","triggerOpen"])>=0&&this.__prepareOrigin(),"selfDestruction"===b&&this.__prepareGC()),this)},reposition:function(a,b){var c=this;return c.__destroyed?c.__destroyError():"closed"!=c.__state&&d(c._$origin)&&(b||d(c._$tooltip))&&(b||c._$tooltip.detach(),c.__Geometry=c.__geometry(),c._trigger({type:"reposition",event:a,helper:{geo:c.__Geometry}})),c},show:function(a){return this.open(a)},status:function(){return{destroyed:this.__destroyed,enabled:this.__enabled,open:"closed"!==this.__state,state:this.__state}},triggerHandler:function(){return this.__destroyed?this.__destroyError():this.__$emitterPublic.triggerHandler.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this}},a.fn.tooltipster=function(){var b=Array.prototype.slice.apply(arguments),c="You are using a single HTML element as content for several tooltips. You probably want to set the contentCloning option to TRUE.";if(0===this.length)return this;if("string"==typeof b[0]){var d="#*$~&";return this.each(function(){var e=a(this).data("tooltipster-ns"),f=e?a(this).data(e[0]):null;if(!f)throw new Error("You called Tooltipster's \""+b[0]+'" method on an uninitialized element');if("function"!=typeof f[b[0]])throw new Error('Unknown method "'+b[0]+'"');this.length>1&&"content"==b[0]&&(b[1]instanceof a||"object"==typeof b[1]&&null!=b[1]&&b[1].tagName)&&!f.__options.contentCloning&&f.__options.debug&&console.log(c);var g=f[b[0]](b[1],b[2]);return g!==f||"instance"===b[0]?(d=g,!1):void 0}),"#*$~&"!==d?d:this}a.tooltipster.__instancesLatestArr=[];var e=b[0]&&void 0!==b[0].multiple,g=e&&b[0].multiple||!e&&f.multiple,h=b[0]&&void 0!==b[0].content,i=h&&b[0].content||!h&&f.content,j=b[0]&&void 0!==b[0].contentCloning,k=j&&b[0].contentCloning||!j&&f.contentCloning,l=b[0]&&void 0!==b[0].debug,m=l&&b[0].debug||!l&&f.debug;return this.length>1&&(i instanceof a||"object"==typeof i&&null!=i&&i.tagName)&&!k&&m&&console.log(c),this.each(function(){var c=!1,d=a(this),e=d.data("tooltipster-ns"),f=null;e?g?c=!0:m&&(console.log("Tooltipster: one or more tooltips are already attached to the element below. Ignoring."),console.log(this)):c=!0,c&&(f=new a.Tooltipster(this,b[0]),e||(e=[]),e.push(f.__namespace),d.data("tooltipster-ns",e),d.data(f.__namespace,f),f.__options.functionInit&&f.__options.functionInit.call(f,f,{origin:this}),f._trigger("init")),a.tooltipster.__instancesLatestArr.push(f)}),this},b.prototype={__init:function(b){this.__$tooltip=b,this.__$tooltip.css({left:0,overflow:"hidden",position:"absolute",top:0}).find(".tooltipster-content").css("overflow","auto"),this.$container=a('<div class="tooltipster-ruler"></div>').append(this.__$tooltip).appendTo(h.window.document.body)},__forceRedraw:function(){var a=this.__$tooltip.parent();this.__$tooltip.detach(),this.__$tooltip.appendTo(a)},constrain:function(a,b){return this.constraints={width:a,height:b},this.__$tooltip.css({display:"block",height:"",overflow:"auto",width:a}),this},destroy:function(){this.__$tooltip.detach().find(".tooltipster-content").css({display:"",overflow:""}),this.$container.remove()},free:function(){return this.constraints=null,this.__$tooltip.css({display:"",height:"",overflow:"visible",width:""}),this},measure:function(){this.__forceRedraw();var a=this.__$tooltip[0].getBoundingClientRect(),b={size:{height:a.height||a.bottom-a.top,width:a.width||a.right-a.left}};if(this.constraints){var c=this.__$tooltip.find(".tooltipster-content"),d=this.__$tooltip.outerHeight(),e=c[0].getBoundingClientRect(),f={height:d<=this.constraints.height,width:a.width<=this.constraints.width&&e.width>=c[0].scrollWidth-1};b.fits=f.height&&f.width}return h.IE&&h.IE<=11&&b.size.width!==h.window.document.documentElement.clientWidth&&(b.size.width=Math.ceil(b.size.width)+1),b}};var j=navigator.userAgent.toLowerCase();-1!=j.indexOf("msie")?h.IE=parseInt(j.split("msie")[1]):-1!==j.toLowerCase().indexOf("trident")&&-1!==j.indexOf(" rv:11")?h.IE=11:-1!=j.toLowerCase().indexOf("edge/")&&(h.IE=parseInt(j.toLowerCase().split("edge/")[1]));var k="tooltipster.sideTip";return a.tooltipster._plugin({name:k,instance:{__defaults:function(){return{arrow:!0,distance:6,functionPosition:null,maxWidth:null,minIntersection:16,minWidth:0,position:null,side:"top",viewportAware:!0}},__init:function(a){var b=this;b.__instance=a,b.__namespace="tooltipster-sideTip-"+Math.round(1e6*Math.random()),b.__previousState="closed",b.__options,b.__optionsFormat(),b.__instance._on("state."+b.__namespace,function(a){"closed"==a.state?b.__close():"appearing"==a.state&&"closed"==b.__previousState&&b.__create(),b.__previousState=a.state}),b.__instance._on("options."+b.__namespace,function(){b.__optionsFormat()}),b.__instance._on("reposition."+b.__namespace,function(a){b.__reposition(a.event,a.helper)})},__close:function(){this.__instance.content()instanceof a&&this.__instance.content().detach(),this.__instance._$tooltip.remove(),this.__instance._$tooltip=null},__create:function(){var b=a('<div class="tooltipster-base tooltipster-sidetip"><div class="tooltipster-box"><div class="tooltipster-content"></div></div><div class="tooltipster-arrow"><div class="tooltipster-arrow-uncropped"><div class="tooltipster-arrow-border"></div><div class="tooltipster-arrow-background"></div></div></div></div>');this.__options.arrow||b.find(".tooltipster-box").css("margin",0).end().find(".tooltipster-arrow").hide(),this.__options.minWidth&&b.css("min-width",this.__options.minWidth+"px"),this.__options.maxWidth&&b.css("max-width",this.__options.maxWidth+"px"),
this.__instance._$tooltip=b,this.__instance._trigger("created")},__destroy:function(){this.__instance._off("."+self.__namespace)},__optionsFormat:function(){var b=this;if(b.__options=b.__instance._optionsExtract(k,b.__defaults()),b.__options.position&&(b.__options.side=b.__options.position),"object"!=typeof b.__options.distance&&(b.__options.distance=[b.__options.distance]),b.__options.distance.length<4&&(void 0===b.__options.distance[1]&&(b.__options.distance[1]=b.__options.distance[0]),void 0===b.__options.distance[2]&&(b.__options.distance[2]=b.__options.distance[0]),void 0===b.__options.distance[3]&&(b.__options.distance[3]=b.__options.distance[1]),b.__options.distance={top:b.__options.distance[0],right:b.__options.distance[1],bottom:b.__options.distance[2],left:b.__options.distance[3]}),"string"==typeof b.__options.side){var c={top:"bottom",right:"left",bottom:"top",left:"right"};b.__options.side=[b.__options.side,c[b.__options.side]],"left"==b.__options.side[0]||"right"==b.__options.side[0]?b.__options.side.push("top","bottom"):b.__options.side.push("right","left")}6===a.tooltipster._env.IE&&b.__options.arrow!==!0&&(b.__options.arrow=!1)},__reposition:function(b,c){var d,e=this,f=e.__targetFind(c),g=[];e.__instance._$tooltip.detach();var h=e.__instance._$tooltip.clone(),i=a.tooltipster._getRuler(h),j=!1,k=e.__instance.option("animation");switch(k&&h.removeClass("tooltipster-"+k),a.each(["window","document"],function(d,k){var l=null;if(e.__instance._trigger({container:k,helper:c,satisfied:j,takeTest:function(a){l=a},results:g,type:"positionTest"}),1==l||0!=l&&0==j&&("window"!=k||e.__options.viewportAware))for(var d=0;d<e.__options.side.length;d++){var m={horizontal:0,vertical:0},n=e.__options.side[d];"top"==n||"bottom"==n?m.vertical=e.__options.distance[n]:m.horizontal=e.__options.distance[n],e.__sideChange(h,n),a.each(["natural","constrained"],function(a,d){if(l=null,e.__instance._trigger({container:k,event:b,helper:c,mode:d,results:g,satisfied:j,side:n,takeTest:function(a){l=a},type:"positionTest"}),1==l||0!=l&&0==j){var h={container:k,distance:m,fits:null,mode:d,outerSize:null,side:n,size:null,target:f[n],whole:null},o="natural"==d?i.free():i.constrain(c.geo.available[k][n].width-m.horizontal,c.geo.available[k][n].height-m.vertical),p=o.measure();if(h.size=p.size,h.outerSize={height:p.size.height+m.vertical,width:p.size.width+m.horizontal},"natural"==d?c.geo.available[k][n].width>=h.outerSize.width&&c.geo.available[k][n].height>=h.outerSize.height?h.fits=!0:h.fits=!1:h.fits=p.fits,"window"==k&&(h.fits?"top"==n||"bottom"==n?h.whole=c.geo.origin.windowOffset.right>=e.__options.minIntersection&&c.geo.window.size.width-c.geo.origin.windowOffset.left>=e.__options.minIntersection:h.whole=c.geo.origin.windowOffset.bottom>=e.__options.minIntersection&&c.geo.window.size.height-c.geo.origin.windowOffset.top>=e.__options.minIntersection:h.whole=!1),g.push(h),h.whole)j=!0;else if("natural"==h.mode&&(h.fits||h.size.width<=c.geo.available[k][n].width))return!1}})}}),e.__instance._trigger({edit:function(a){g=a},event:b,helper:c,results:g,type:"positionTested"}),g.sort(function(a,b){if(a.whole&&!b.whole)return-1;if(!a.whole&&b.whole)return 1;if(a.whole&&b.whole){var c=e.__options.side.indexOf(a.side),d=e.__options.side.indexOf(b.side);return d>c?-1:c>d?1:"natural"==a.mode?-1:1}if(a.fits&&!b.fits)return-1;if(!a.fits&&b.fits)return 1;if(a.fits&&b.fits){var c=e.__options.side.indexOf(a.side),d=e.__options.side.indexOf(b.side);return d>c?-1:c>d?1:"natural"==a.mode?-1:1}return"document"==a.container&&"bottom"==a.side&&"natural"==a.mode?-1:1}),d=g[0],d.coord={},d.side){case"left":case"right":d.coord.top=Math.floor(d.target-d.size.height/2);break;case"bottom":case"top":d.coord.left=Math.floor(d.target-d.size.width/2)}switch(d.side){case"left":d.coord.left=c.geo.origin.windowOffset.left-d.outerSize.width;break;case"right":d.coord.left=c.geo.origin.windowOffset.right+d.distance.horizontal;break;case"top":d.coord.top=c.geo.origin.windowOffset.top-d.outerSize.height;break;case"bottom":d.coord.top=c.geo.origin.windowOffset.bottom+d.distance.vertical}"window"==d.container?"top"==d.side||"bottom"==d.side?d.coord.left<0?c.geo.origin.windowOffset.right-this.__options.minIntersection>=0?d.coord.left=0:d.coord.left=c.geo.origin.windowOffset.right-this.__options.minIntersection-1:d.coord.left>c.geo.window.size.width-d.size.width&&(c.geo.origin.windowOffset.left+this.__options.minIntersection<=c.geo.window.size.width?d.coord.left=c.geo.window.size.width-d.size.width:d.coord.left=c.geo.origin.windowOffset.left+this.__options.minIntersection+1-d.size.width):d.coord.top<0?c.geo.origin.windowOffset.bottom-this.__options.minIntersection>=0?d.coord.top=0:d.coord.top=c.geo.origin.windowOffset.bottom-this.__options.minIntersection-1:d.coord.top>c.geo.window.size.height-d.size.height&&(c.geo.origin.windowOffset.top+this.__options.minIntersection<=c.geo.window.size.height?d.coord.top=c.geo.window.size.height-d.size.height:d.coord.top=c.geo.origin.windowOffset.top+this.__options.minIntersection+1-d.size.height):(d.coord.left>c.geo.window.size.width-d.size.width&&(d.coord.left=c.geo.window.size.width-d.size.width),d.coord.left<0&&(d.coord.left=0)),e.__sideChange(h,d.side),c.tooltipClone=h[0],c.tooltipParent=e.__instance.option("parent").parent[0],c.mode=d.mode,c.whole=d.whole,c.origin=e.__instance._$origin[0],c.tooltip=e.__instance._$tooltip[0],delete d.container,delete d.fits,delete d.mode,delete d.outerSize,delete d.whole,d.distance=d.distance.horizontal||d.distance.vertical;var l=a.extend(!0,{},d);if(e.__instance._trigger({edit:function(a){d=a},event:b,helper:c,position:l,type:"position"}),e.__options.functionPosition){var m=e.__options.functionPosition.call(e,e.__instance,c,l);m&&(d=m)}i.destroy();var n,o;"top"==d.side||"bottom"==d.side?(n={prop:"left",val:d.target-d.coord.left},o=d.size.width-this.__options.minIntersection):(n={prop:"top",val:d.target-d.coord.top},o=d.size.height-this.__options.minIntersection),n.val<this.__options.minIntersection?n.val=this.__options.minIntersection:n.val>o&&(n.val=o);var p;p=c.geo.origin.fixedLineage?c.geo.origin.windowOffset:{left:c.geo.origin.windowOffset.left+c.geo.window.scroll.left,top:c.geo.origin.windowOffset.top+c.geo.window.scroll.top},d.coord={left:p.left+(d.coord.left-c.geo.origin.windowOffset.left),top:p.top+(d.coord.top-c.geo.origin.windowOffset.top)},e.__sideChange(e.__instance._$tooltip,d.side),c.geo.origin.fixedLineage?e.__instance._$tooltip.css("position","fixed"):e.__instance._$tooltip.css("position",""),e.__instance._$tooltip.css({left:d.coord.left,top:d.coord.top,height:d.size.height,width:d.size.width}).find(".tooltipster-arrow").css({left:"",top:""}).css(n.prop,n.val),e.__instance._$tooltip.appendTo(e.__instance.option("parent")),e.__instance._trigger({type:"repositioned",event:b,position:d})},__sideChange:function(a,b){a.removeClass("tooltipster-bottom").removeClass("tooltipster-left").removeClass("tooltipster-right").removeClass("tooltipster-top").addClass("tooltipster-"+b)},__targetFind:function(a){var b={},c=this.__instance._$origin[0].getClientRects();if(c.length>1){var d=this.__instance._$origin.css("opacity");1==d&&(this.__instance._$origin.css("opacity",.99),c=this.__instance._$origin[0].getClientRects(),this.__instance._$origin.css("opacity",1))}if(c.length<2)b.top=Math.floor(a.geo.origin.windowOffset.left+a.geo.origin.size.width/2),b.bottom=b.top,b.left=Math.floor(a.geo.origin.windowOffset.top+a.geo.origin.size.height/2),b.right=b.left;else{var e=c[0];b.top=Math.floor(e.left+(e.right-e.left)/2),e=c.length>2?c[Math.ceil(c.length/2)-1]:c[0],b.right=Math.floor(e.top+(e.bottom-e.top)/2),e=c[c.length-1],b.bottom=Math.floor(e.left+(e.right-e.left)/2),e=c.length>2?c[Math.ceil((c.length+1)/2)-1]:c[c.length-1],b.left=Math.floor(e.top+(e.bottom-e.top)/2)}return b}}}),a});
;var woof_redirect="";function woof_redirect_init(){try{if(jQuery(".woof").length&&void 0!==jQuery(".woof").val())return 0<(woof_redirect=jQuery(".woof").eq(0).data("redirect")).length&&(woof_shop_page=woof_current_page_link=woof_redirect),woof_redirect}catch(e){console.log(e)}}function woof_init_orderby(){jQuery("form.woocommerce-ordering").life("submit",function(){if(!jQuery("#is_woo_shortcode").length)return!1}),jQuery("form.woocommerce-ordering select.orderby").life("change",function(){if(!jQuery("#is_woo_shortcode").length)return woof_current_values.orderby=jQuery(this).val(),woof_ajax_page_num=1,woof_submit_link(woof_get_submit_link()),!1})}function woof_init_reset_button(){jQuery(".woof_reset_search_form").life("click",function(){if(woof_ajax_page_num=1,woof_ajax_redraw=0,woof_is_permalink)woof_current_values={},woof_submit_link(woof_get_submit_link().split("page/")[0]);else{var e=woof_shop_page;woof_current_values.hasOwnProperty("page_id")&&(e=location.protocol+"//"+location.host+"/?page_id="+woof_current_values.page_id,woof_current_values={page_id:woof_current_values.page_id},woof_get_submit_link()),woof_submit_link(e),woof_is_ajax&&(history.pushState({},"",e),woof_current_values.hasOwnProperty("page_id")?woof_current_values={page_id:woof_current_values.page_id}:woof_current_values={})}return!1})}function woof_init_pagination(){1===woof_is_ajax&&jQuery("a.page-numbers").life("click",function(){var e,o,r=jQuery(this).attr("href");woof_ajax_first_done?(void 0!==(e=r.split("paged="))[1]?woof_ajax_page_num=parseInt(e[1]):woof_ajax_page_num=1,void 0!==(o=r.split("product-page="))[1]&&(woof_ajax_page_num=parseInt(o[1]))):(void 0!==(e=r.split("page/"))[1]?woof_ajax_page_num=parseInt(e[1]):woof_ajax_page_num=1,void 0!==(o=r.split("product-page="))[1]&&(woof_ajax_page_num=parseInt(o[1])));return woof_submit_link(woof_get_submit_link()),!1})}function woof_init_search_form(){woof_init_checkboxes(),woof_init_mselects(),woof_init_radios(),woof_price_filter_radio_init(),woof_init_selects(),null!==woof_ext_init_functions&&jQuery.each(woof_ext_init_functions,function(type,func){eval(func+"()")}),jQuery(".woof_submit_search_form").click(function(){return woof_ajax_redraw&&(woof_ajax_redraw=0,woof_is_ajax=0),woof_submit_link(woof_get_submit_link()),!1}),jQuery("ul.woof_childs_list").parent("li").addClass("woof_childs_list_li"),woof_remove_class_widget(),woof_checkboxes_slide()}jQuery(function(e){jQuery("body").append('<div id="woof_html_buffer" class="woof_info_popup" style="display: none;"></div>'),jQuery.fn.life=function(e,o,r){return jQuery(this.context).on(e,this.selector,o,r),this},jQuery.extend(jQuery.fn,{within:function(e){return this.filter(function(){return jQuery(this).closest(e).length})}}),0<jQuery("#woof_results_by_ajax").length&&(woof_is_ajax=1),woof_autosubmit=parseInt(jQuery(".woof").eq(0).data("autosubmit"),10),woof_ajax_redraw=parseInt(jQuery(".woof").eq(0).data("ajax-redraw"),10),woof_ext_init_functions=jQuery.parseJSON(woof_ext_init_functions),woof_init_native_woo_price_filter(),jQuery("body").bind("price_slider_change",function(e,o,r){if(woof_autosubmit&&!woof_show_price_search_button&&jQuery(".price_slider_wrapper").length<2)jQuery(".woof .widget_price_filter form").trigger("submit");else{var t=jQuery(this).find(".price_slider_amount #min_price").val(),_=jQuery(this).find(".price_slider_amount #max_price").val();woof_current_values.min_price=t,woof_current_values.max_price=_}}),jQuery(".woof_price_filter_dropdown").life("change",function(){var e=jQuery(this).val();if(-1==parseInt(e,10))delete woof_current_values.min_price,delete woof_current_values.max_price;else{e=e.split("-");woof_current_values.min_price=e[0],woof_current_values.max_price=e[1]}(woof_autosubmit||0==jQuery(this).within(".woof").length)&&woof_submit_link(woof_get_submit_link())}),woof_recount_text_price_filter(),jQuery(".woof_price_filter_txt").life("change",function(){var e=parseInt(jQuery(this).parent().find(".woof_price_filter_txt_from").val(),10),o=parseInt(jQuery(this).parent().find(".woof_price_filter_txt_to").val(),10);o<e||e<0?(delete woof_current_values.min_price,delete woof_current_values.max_price):("undefined"!=typeof woocs_current_currency&&(e=Math.ceil(e/parseFloat(woocs_current_currency.rate)),o=Math.ceil(o/parseFloat(woocs_current_currency.rate))),woof_current_values.min_price=e,woof_current_values.max_price=o),(woof_autosubmit||0==jQuery(this).within(".woof").length)&&woof_submit_link(woof_get_submit_link())}),jQuery(".woof_open_hidden_li_btn").life("click",function(){var e=jQuery(this).data("state"),o=jQuery(this).data("type");return"closed"==e?(jQuery(this).parents(".woof_list").find(".woof_hidden_term").addClass("woof_hidden_term2"),jQuery(this).parents(".woof_list").find(".woof_hidden_term").removeClass("woof_hidden_term"),"image"==o?jQuery(this).find("img").attr("src",jQuery(this).data("opened")):jQuery(this).html(jQuery(this).data("opened")),jQuery(this).data("state","opened")):(jQuery(this).parents(".woof_list").find(".woof_hidden_term2").addClass("woof_hidden_term"),jQuery(this).parents(".woof_list").find(".woof_hidden_term2").removeClass("woof_hidden_term2"),"image"==o?jQuery(this).find("img").attr("src",jQuery(this).data("closed")):jQuery(this).text(jQuery(this).data("closed")),jQuery(this).data("state","closed")),!1}),woof_open_hidden_li(),jQuery(".widget_rating_filter li.wc-layered-nav-rating a").click(function(){var e=jQuery(this).parent().hasClass("chosen"),o=woof_parse_url(jQuery(this).attr("href")),r=0;if(void 0!==o.query&&-1!==o.query.indexOf("min_rating")){var t=o.query.split("min_rating=");r=parseInt(t[1],10)}return jQuery(this).parents("ul").find("li").removeClass("chosen"),e?delete woof_current_values.min_rating:(woof_current_values.min_rating=r,jQuery(this).parent().addClass("chosen")),woof_submit_link(woof_get_submit_link()),!1}),jQuery(".woof_start_filtering_btn").life("click",function(){var e=jQuery(this).parents(".woof").data("shortcode");jQuery(this).html(woof_lang_loading),jQuery(this).addClass("woof_start_filtering_btn2"),jQuery(this).removeClass("woof_start_filtering_btn");var o={action:"woof_draw_products",page:1,shortcode:"woof_nothing",woof_shortcode:e};return console.log(o),jQuery.post(woof_ajaxurl,o,function(e){e=jQuery.parseJSON(e),jQuery("div.woof_redraw_zone").replaceWith(jQuery(e.form).find(".woof_redraw_zone")),woof_mass_reinit()}),!1});var i=window.location.href;window.onpopstate=function(e){try{if(console.log(woof_current_values),Object.keys(woof_current_values).length){var o=i.split("?"),r="";null!=o[1]&&(r=o[1].split("#"));var t=window.location.href.split("?");if(null==t[1])var _={0:"",1:""};else _=t[1].split("#");return _[0]!=r[0]&&(woof_show_info_popup(woof_lang_loading),window.location.reload()),!1}}catch(e){console.log(e)}},woof_init_ion_sliders(),woof_init_show_auto_form(),woof_init_hide_auto_form(),woof_remove_empty_elements(),woof_init_search_form(),woof_init_pagination(),woof_init_orderby(),woof_init_reset_button(),woof_init_beauty_scroll(),woof_draw_products_top_panel(),woof_shortcode_observer(),woof_init_tooltip(),woof_is_ajax||woof_redirect_init(),woof_init_toggles()});var woof_submit_link_locked=!1;function woof_submit_link(e){if(!woof_submit_link_locked)if(woof_submit_link_locked=!0,woof_show_info_popup(woof_lang_loading),1!==woof_is_ajax||woof_ajax_redraw)if(woof_ajax_redraw){o={action:"woof_draw_products",link:e,page:1,shortcode:"woof_nothing",woof_shortcode:jQuery("div.woof").eq(0).data("shortcode")};jQuery.post(woof_ajaxurl,o,function(e){e=jQuery.parseJSON(e),jQuery("div.woof_redraw_zone").replaceWith(jQuery(e.form).find(".woof_redraw_zone")),woof_mass_reinit(),woof_submit_link_locked=!1})}else window.location=e,woof_show_info_popup(woof_lang_loading);else{woof_ajax_first_done=!0;var o={action:"woof_draw_products",link:e,page:woof_ajax_page_num,shortcode:jQuery("#woof_results_by_ajax").data("shortcode"),woof_shortcode:jQuery("div.woof").data("shortcode")};jQuery.post(woof_ajaxurl,o,function(e){e=jQuery.parseJSON(e),jQuery(".woof_results_by_ajax_shortcode").length?jQuery("#woof_results_by_ajax").replaceWith(e.products):jQuery(".woof_shortcode_output").replaceWith(e.products),jQuery("div.woof_redraw_zone").replaceWith(jQuery(e.form).find(".woof_redraw_zone")),woof_draw_products_top_panel(),woof_mass_reinit(),woof_submit_link_locked=!1,jQuery.each(jQuery("#woof_results_by_ajax"),function(e,o){0!=e&&jQuery(o).removeAttr("id")}),woof_infinite(),woof_js_after_ajax_done(),woof_change_link_addtocart(),woof_init_tooltip()})}}function woof_remove_empty_elements(){jQuery.each(jQuery(".woof_container select"),function(e,o){0===jQuery(o).find("option").length&&jQuery(o).parents(".woof_container").remove()}),jQuery.each(jQuery("ul.woof_list"),function(e,o){0===jQuery(o).find("li").length&&jQuery(o).parents(".woof_container").remove()})}function woof_get_submit_link(){if(woof_is_ajax&&(woof_current_values.page=woof_ajax_page_num),0<Object.keys(woof_current_values).length&&jQuery.each(woof_current_values,function(e,o){e==swoof_search_slug&&delete woof_current_values[e],"s"==e&&delete woof_current_values[e],"product"==e&&delete woof_current_values[e],"really_curr_tax"==e&&delete woof_current_values[e]}),2===Object.keys(woof_current_values).length&&"min_price"in woof_current_values&&"max_price"in woof_current_values){var e=woof_current_page_link+"?min_price="+woof_current_values.min_price+"&max_price="+woof_current_values.max_price;return woof_is_ajax&&history.pushState({},"",e),e}if(0===Object.keys(woof_current_values).length)return woof_is_ajax&&history.pushState({},"",woof_current_page_link),woof_current_page_link;0<Object.keys(woof_really_curr_tax).length&&(woof_current_values.really_curr_tax=woof_really_curr_tax.term_id+"-"+woof_really_curr_tax.taxonomy);var r=woof_current_page_link+"?"+swoof_search_slug+"=1";woof_is_permalink||(0<woof_redirect.length?(r=woof_redirect+"?"+swoof_search_slug+"=1",woof_current_values.hasOwnProperty("page_id")&&delete woof_current_values.page_id):r=location.protocol+"//"+location.host+"?"+swoof_search_slug+"=1");var t=["path"];return 0<Object.keys(woof_current_values).length&&jQuery.each(woof_current_values,function(e,o){"page"==e&&woof_is_ajax&&(e="paged"),void 0!==o&&(0<o.length||"number"==typeof o)&&-1==jQuery.inArray(e,t)&&(r=r+"&"+e+"="+o)}),r=r.replace(new RegExp(/page\/(\d+)\//),""),woof_is_ajax&&history.pushState({},"",r),r}function woof_show_info_popup(e){if("default"==woof_overlay_skin)jQuery("#woof_html_buffer").text(e),jQuery("#woof_html_buffer").fadeTo(200,.9);else switch(woof_overlay_skin){case"loading-balls":case"loading-bars":case"loading-bubbles":case"loading-cubes":case"loading-cylon":case"loading-spin":case"loading-spinning-bubbles":case"loading-spokes":jQuery("body").plainOverlay("show",{progress:function(){return jQuery('<div id="woof_svg_load_container"><img style="height: 100%;width: 100%" src="'+woof_link+"img/loading-master/"+woof_overlay_skin+'.svg" alt=""></div>')}});break;default:jQuery("body").plainOverlay("show",{duration:-1})}}function woof_hide_info_popup(){"default"==woof_overlay_skin?window.setTimeout(function(){jQuery("#woof_html_buffer").fadeOut(400)},200):jQuery("body").plainOverlay("hide")}function woof_draw_products_top_panel(){woof_is_ajax&&jQuery("#woof_results_by_ajax").prev(".woof_products_top_panel").remove();var o=jQuery(".woof_products_top_panel");if(o.html(""),0<Object.keys(woof_current_values).length){o.show(),o.html("<ul></ul>");var r=!1;jQuery.each(woof_current_values,function(i,e){-1!=jQuery.inArray(i,woof_accept_array)&&("min_price"!=i&&"max_price"!=i||!r)&&("min_price"!=i&&"max_price"!=i||r||(r=!0,i="price",e=woof_lang_pricerange),(e=e.toString().trim()).search(",")&&(e=e.split(",")),jQuery.each(e,function(e,r){if("page"!=i&&"post_type"!=i){var t=r;if("orderby"==i)t=void 0!==woof_lang[r]?woof_lang.orderby+": "+woof_lang[r]:woof_lang.orderby+": "+r;else if("perpage"==i)t=woof_lang.perpage;else if("price"==i)t=woof_lang.pricerange;else{var _=!1;if(0<Object.keys(woof_lang_custom).length&&jQuery.each(woof_lang_custom,function(e,o){e==i&&(_=!0,t=o,"woof_sku"==i&&(t+=" "+r))}),!_){try{t=jQuery("input[data-anchor='woof_n_"+i+"_"+r+"']").val()}catch(e){console.log(e)}void 0===t&&(t=r)}}o.find("ul").append(jQuery("<li>").append(jQuery("<a>").attr("href",r).attr("data-tax",i).append(jQuery("<span>").attr("class","woof_remove_ppi").append(t))))}}))})}0!=jQuery(o).find("li").length&&jQuery(".woof_products_top_panel").length||o.hide(),jQuery(".woof_remove_ppi").parent().click(function(){var e=jQuery(this).data("tax"),r=jQuery(this).attr("href");if("price"!=e){values=woof_current_values[e],values=values.split(",");var t=[];jQuery.each(values,function(e,o){o!=r&&t.push(o)}),values=t,values.length?woof_current_values[e]=values.join(","):delete woof_current_values[e]}else delete woof_current_values.min_price,delete woof_current_values.max_price;return woof_ajax_page_num=1,woof_submit_link(woof_get_submit_link()),jQuery(".woof_products_top_panel").find("[data-tax='"+e+"'][href='"+r+"']").hide(333),!1})}function woof_shortcode_observer(){var e=!0;(jQuery(".woof_shortcode_output").length||jQuery(".woocommerce .products").length&&!jQuery(".single-product").length)&&(e=!1),jQuery(".woocommerce .woocommerce-info").length&&(e=!1),"undefined"!=typeof woof_not_redirect&&1==woof_not_redirect&&(e=!1),e||(woof_current_page_link=location.protocol+"//"+location.host+location.pathname),jQuery("#woof_results_by_ajax").length&&(woof_is_ajax=1)}function woof_init_beauty_scroll(){if(woof_use_beauty_scroll)try{var e=".woof_section_scrolled, .woof_sid_auto_shortcode .woof_container_radio .woof_block_html_items, .woof_sid_auto_shortcode .woof_container_checkbox .woof_block_html_items, .woof_sid_auto_shortcode .woof_container_label .woof_block_html_items";jQuery(""+e).mCustomScrollbar("destroy"),jQuery(""+e).mCustomScrollbar({scrollButtons:{enable:!0},advanced:{updateOnContentResize:!0,updateOnBrowserResize:!0},theme:"dark-2",horizontalScroll:!1,mouseWheel:!0,scrollType:"pixels",contentTouchScroll:!0})}catch(e){console.log(e)}}function woof_remove_class_widget(){jQuery(".woof_container_inner").find(".widget").removeClass("widget")}function woof_init_show_auto_form(){jQuery(".woof_show_auto_form").unbind("click"),jQuery(".woof_show_auto_form").click(function(){return jQuery(this).addClass("woof_hide_auto_form").removeClass("woof_show_auto_form"),jQuery(".woof_auto_show").show().animate({height:jQuery(".woof_auto_show_indent").height()+20+"px",opacity:1},377,function(){woof_init_hide_auto_form(),jQuery(".woof_auto_show").removeClass("woof_overflow_hidden"),jQuery(".woof_auto_show_indent").removeClass("woof_overflow_hidden"),jQuery(".woof_auto_show").height("auto")}),!1})}function woof_init_hide_auto_form(){jQuery(".woof_hide_auto_form").unbind("click"),jQuery(".woof_hide_auto_form").click(function(){return jQuery(this).addClass("woof_show_auto_form").removeClass("woof_hide_auto_form"),jQuery(".woof_auto_show").show().animate({height:"1px",opacity:0},377,function(){jQuery(".woof_auto_show").addClass("woof_overflow_hidden"),jQuery(".woof_auto_show_indent").addClass("woof_overflow_hidden"),woof_init_show_auto_form()}),!1})}function woof_checkboxes_slide(){if(1==woof_checkboxes_slide_flag){var e=jQuery("ul.woof_childs_list");e.length&&(jQuery.each(e,function(e,o){if(!jQuery(o).parents(".woof_no_close_childs").length){var r="woof_is_closed";if(woof_supports_html5_storage()){var t=localStorage.getItem(jQuery(o).closest("li").find("label").first().text());if(t&&"woof_is_opened"==t){r="woof_is_opened";jQuery(o).show()}jQuery(o).before('<a href="javascript:void(0);" class="woof_childs_list_opener"><span class="'+r+'"></span></a>')}else jQuery(o).find("input[type=checkbox],input[type=radio]").is(":checked")&&(jQuery(o).show(),r="woof_is_opened"),jQuery(o).before('<a href="javascript:void(0);" class="woof_childs_list_opener"><span class="'+r+'"></span></a>')}}),jQuery.each(jQuery("a.woof_childs_list_opener"),function(e,o){jQuery(o).click(function(){var e=jQuery(this).find("span");if(e.hasClass("woof_is_closed")?(jQuery(this).parent().find("ul.woof_childs_list").first().show(333),e.removeClass("woof_is_closed"),e.addClass("woof_is_opened")):(jQuery(this).parent().find("ul.woof_childs_list").first().hide(333),e.removeClass("woof_is_opened"),e.addClass("woof_is_closed")),woof_supports_html5_storage()){var o=jQuery(this).closest("li").find("label").first().text(),r=jQuery(this).children("span").attr("class");localStorage.setItem(o,r)}return!1})}))}}function woof_init_ion_sliders(){jQuery.each(jQuery(".woof_range_slider"),function(e,r){try{jQuery(r).ionRangeSlider({min:jQuery(r).data("min"),max:jQuery(r).data("max"),from:jQuery(r).data("min-now"),to:jQuery(r).data("max-now"),type:"double",prefix:jQuery(r).data("slider-prefix"),postfix:jQuery(r).data("slider-postfix"),prettify:!0,hideMinMax:!1,hideFromTo:!1,grid:!0,step:jQuery(r).data("step"),onFinish:function(e){var o=jQuery(r).data("taxes");return woof_current_values.min_price=parseInt(e.from,10)/o,woof_current_values.max_price=parseInt(e.to,10)/o,"undefined"!=typeof woocs_current_currency&&(woof_current_values.min_price=Math.ceil(woof_current_values.min_price/parseFloat(woocs_current_currency.rate)),woof_current_values.max_price=Math.ceil(woof_current_values.max_price/parseFloat(woocs_current_currency.rate))),woof_ajax_page_num=1,(woof_autosubmit||0==jQuery(r).within(".woof").length)&&woof_submit_link(woof_get_submit_link()),!1}})}catch(e){}})}function woof_init_native_woo_price_filter(){jQuery(".widget_price_filter form").unbind("submit"),jQuery(".widget_price_filter form").submit(function(){var e=jQuery(this).find(".price_slider_amount #min_price").val(),o=jQuery(this).find(".price_slider_amount #max_price").val();return woof_current_values.min_price=e,woof_current_values.max_price=o,woof_ajax_page_num=1,(woof_autosubmit||0==jQuery(input).within(".woof").length)&&woof_submit_link(woof_get_submit_link()),!1})}function woof_reinit_native_woo_price_filter(){if("undefined"==typeof woocommerce_price_slider_params)return!1;jQuery("input#min_price, input#max_price").hide(),jQuery(".price_slider, .price_label").show();var e=jQuery(".price_slider_amount #min_price").data("min"),o=jQuery(".price_slider_amount #max_price").data("max"),r=parseInt(e,10),t=parseInt(o,10);woof_current_values.hasOwnProperty("min_price")?(r=parseInt(woof_current_values.min_price,10),t=parseInt(woof_current_values.max_price,10)):(woocommerce_price_slider_params.min_price&&(r=parseInt(woocommerce_price_slider_params.min_price,10)),woocommerce_price_slider_params.max_price&&(t=parseInt(woocommerce_price_slider_params.max_price,10)));var i=woocommerce_price_slider_params.currency_symbol;null==typeof i&&(i=woocommerce_price_slider_params.currency_format_symbol),jQuery(document.body).bind("price_slider_create price_slider_slide",function(e,o,r){if("undefined"!=typeof woocs_current_currency){var t=o,_=r;1!==woocs_current_currency.rate&&(t=Math.ceil(t*parseFloat(woocs_current_currency.rate)),_=Math.ceil(_*parseFloat(woocs_current_currency.rate))),t=woof_front_number_format(t,2,".",","),_=woof_front_number_format(_,2,".",","),(jQuery.inArray(woocs_current_currency.name,woocs_array_no_cents)||1==woocs_current_currency.hide_cents)&&(t=t.replace(".00",""),_=_.replace(".00","")),"left"===woocs_current_currency.position?(jQuery(".price_slider_amount span.from").html(i+t),jQuery(".price_slider_amount span.to").html(i+_)):"left_space"===woocs_current_currency.position?(jQuery(".price_slider_amount span.from").html(i+" "+t),jQuery(".price_slider_amount span.to").html(i+" "+_)):"right"===woocs_current_currency.position?(jQuery(".price_slider_amount span.from").html(t+i),jQuery(".price_slider_amount span.to").html(_+i)):"right_space"===woocs_current_currency.position&&(jQuery(".price_slider_amount span.from").html(t+" "+i),jQuery(".price_slider_amount span.to").html(_+" "+i))}else"left"===woocommerce_price_slider_params.currency_pos?(jQuery(".price_slider_amount span.from").html(i+o),jQuery(".price_slider_amount span.to").html(i+r)):"left_space"===woocommerce_price_slider_params.currency_pos?(jQuery(".price_slider_amount span.from").html(i+" "+o),jQuery(".price_slider_amount span.to").html(i+" "+r)):"right"===woocommerce_price_slider_params.currency_pos?(jQuery(".price_slider_amount span.from").html(o+i),jQuery(".price_slider_amount span.to").html(r+i)):"right_space"===woocommerce_price_slider_params.currency_pos&&(jQuery(".price_slider_amount span.from").html(o+" "+i),jQuery(".price_slider_amount span.to").html(r+" "+i));jQuery(document.body).trigger("price_slider_updated",[o,r])}),jQuery(".price_slider").slider({range:!0,animate:!0,min:e,max:o,values:[r,t],create:function(){jQuery(".price_slider_amount #min_price").val(r),jQuery(".price_slider_amount #max_price").val(t),jQuery(document.body).trigger("price_slider_create",[r,t])},slide:function(e,o){jQuery("input#min_price").val(o.values[0]),jQuery("input#max_price").val(o.values[1]),jQuery(document.body).trigger("price_slider_slide",[o.values[0],o.values[1]])},change:function(e,o){jQuery(document.body).trigger("price_slider_change",[o.values[0],o.values[1]])}}),woof_init_native_woo_price_filter()}function woof_mass_reinit(){woof_remove_empty_elements(),woof_open_hidden_li(),woof_init_search_form(),woof_hide_info_popup(),woof_init_beauty_scroll(),woof_init_ion_sliders(),woof_reinit_native_woo_price_filter(),woof_recount_text_price_filter(),woof_draw_products_top_panel()}function woof_recount_text_price_filter(){"undefined"!=typeof woocs_current_currency&&jQuery.each(jQuery(".woof_price_filter_txt_from, .woof_price_filter_txt_to"),function(e,o){jQuery(this).val(Math.ceil(jQuery(this).data("value")))})}function woof_init_toggles(){jQuery(".woof_front_toggle").life("click",function(){return"opened"==jQuery(this).data("condition")?(jQuery(this).removeClass("woof_front_toggle_opened"),jQuery(this).addClass("woof_front_toggle_closed"),jQuery(this).data("condition","closed"),"text"==woof_toggle_type?jQuery(this).text(woof_toggle_closed_text):jQuery(this).find("img").prop("src",woof_toggle_closed_image)):(jQuery(this).addClass("woof_front_toggle_opened"),jQuery(this).removeClass("woof_front_toggle_closed"),jQuery(this).data("condition","opened"),"text"==woof_toggle_type?jQuery(this).text(woof_toggle_opened_text):jQuery(this).find("img").prop("src",woof_toggle_opened_image)),jQuery(this).parents(".woof_container_inner").find(".woof_block_html_items").toggle(500),!1})}function woof_open_hidden_li(){0<jQuery(".woof_open_hidden_li_btn").length&&jQuery.each(jQuery(".woof_open_hidden_li_btn"),function(e,o){jQuery(o).parents("ul").find("li.woof_hidden_term input[type=checkbox],li.woof_hidden_term input[type=radio]").is(":checked")&&jQuery(o).trigger("click")})}function $_woof_GET(e,o){o=o||window.location.search;var r=new RegExp("&"+e+"=([^&]*)","i");return o=(o=o.replace(/^\?/,"&").match(r))?o[1]:""}function woof_parse_url(e){var o=RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?"),r=e.match(o);return{scheme:r[2],authority:r[4],path:r[5],query:r[7],fragment:r[9]}}function woof_price_filter_radio_init(){"none"!=icheck_skin?(jQuery(".woof_price_filter_radio").iCheck("destroy"),jQuery(".woof_price_filter_radio").iCheck({radioClass:"iradio_"+icheck_skin.skin+"-"+icheck_skin.color}),jQuery(".woof_price_filter_radio").siblings("div").removeClass("checked"),jQuery(".woof_price_filter_radio").unbind("ifChecked"),jQuery(".woof_price_filter_radio").on("ifChecked",function(e){jQuery(this).attr("checked",!0),jQuery(".woof_radio_price_reset").removeClass("woof_radio_term_reset_visible"),jQuery(this).parents(".woof_list").find(".woof_radio_price_reset").removeClass("woof_radio_term_reset_visible"),jQuery(this).parents(".woof_list").find(".woof_radio_price_reset").hide(),jQuery(this).parents("li").eq(0).find(".woof_radio_price_reset").eq(0).addClass("woof_radio_term_reset_visible");var o=jQuery(this).val();if(-1==parseInt(o,10))delete woof_current_values.min_price,delete woof_current_values.max_price,jQuery(this).removeAttr("checked"),jQuery(this).siblings(".woof_radio_price_reset").removeClass("woof_radio_term_reset_visible");else{o=o.split("-");woof_current_values.min_price=o[0],woof_current_values.max_price=o[1],jQuery(this).siblings(".woof_radio_price_reset").addClass("woof_radio_term_reset_visible"),jQuery(this).attr("checked",!0)}(woof_autosubmit||0==jQuery(this).within(".woof").length)&&woof_submit_link(woof_get_submit_link())})):jQuery(".woof_price_filter_radio").life("change",function(){var e=jQuery(this).val();if(jQuery(".woof_radio_price_reset").removeClass("woof_radio_term_reset_visible"),-1==parseInt(e,10))delete woof_current_values.min_price,delete woof_current_values.max_price,jQuery(this).removeAttr("checked"),jQuery(this).siblings(".woof_radio_price_reset").removeClass("woof_radio_term_reset_visible");else{e=e.split("-");woof_current_values.min_price=e[0],woof_current_values.max_price=e[1],jQuery(this).siblings(".woof_radio_price_reset").addClass("woof_radio_term_reset_visible"),jQuery(this).attr("checked",!0)}(woof_autosubmit||0==jQuery(this).within(".woof").length)&&woof_submit_link(woof_get_submit_link())}),jQuery(".woof_radio_price_reset").click(function(){return delete woof_current_values.min_price,delete woof_current_values.max_price,jQuery(this).siblings("div").removeClass("checked"),jQuery(this).parents(".woof_list").find("input[type=radio]").removeAttr("checked"),jQuery(this).removeClass("woof_radio_term_reset_visible"),woof_autosubmit&&woof_submit_link(woof_get_submit_link()),!1})}function woof_serialize(e){for(var o,r,t=decodeURI(e).split("&"),_={},i=0,n=t.length;i<n;i++)if((r=(o=t[i].split("="))[0]).indexOf("[]")==r.length-2){var a=r.substring(0,r.length-2);void 0===_[a]&&(_[a]=[]),_[a].push(o[1])}else _[r]=o[1];return _}function woof_infinite(){if("undefined"!=typeof yith_infs){var e={nextSelector:".woocommerce-pagination li .next",navSelector:yith_infs.navSelector,itemSelector:yith_infs.itemSelector,contentSelector:yith_infs.contentSelector,loader:'<img src="'+yith_infs.loader+'">',is_shop:yith_infs.shop},o=window.location.href.split("?"),r="";if(null!=o[1]){var t=woof_serialize(o[1]);delete t.paged,r=decodeURIComponent(jQuery.param(t))}var _=jQuery(".woocommerce-pagination li .next").attr("href");null==_&&(_=o+"page/1/"),console.log(_);var i=_.split("?"),n="";if(null!=i[1]){var a=woof_serialize(i[1]);null!=a.paged&&(n="page/"+a.paged+"/")}_=o[0]+n+"?"+r,jQuery(".woocommerce-pagination li .next").attr("href",_),jQuery(window).unbind("yith_infs_start"),jQuery(yith_infs.contentSelector).yit_infinitescroll(e)}}function woof_change_link_addtocart(){woof_is_ajax&&jQuery(".add_to_cart_button").each(function(e,o){var r=jQuery(o).attr("href"),t=r.split("?"),_=window.location.href.split("?");null!=t[1]&&(r=_[0]+"?"+t[1],jQuery(o).attr("href",r))})}function woof_front_number_format(e,o,r,t){e=(e+"").replace(/[^0-9+\-Ee.]/g,"");var _,i,n,a=isFinite(+e)?+e:0,s=isFinite(+o)?Math.abs(o):0,c=void 0===t?",":t,u=void 0===r?".":r,f="";return 3<(f=(s?(_=a,i=s,n=Math.pow(10,i),""+(Math.round(_*n)/n).toFixed(i)):""+Math.round(a)).split("."))[0].length&&(f[0]=f[0].replace(/\B(?=(?:\d{3})+(?!\d))/g,c)),(f[1]||"").length<s&&(f[1]=f[1]||"",f[1]+=new Array(s-f[1].length+1).join("0")),f.join(u)}function woof_supports_html5_storage(){try{return"localStorage"in window&&null!==window.localStorage}catch(e){return!1}}function woof_init_tooltip(){jQuery(".woof_tooltip_header").tooltipster({theme:"tooltipster-noir",side:"right"})}function woof_init_checkboxes(){"none"!=icheck_skin?(jQuery(".woof_checkbox_term").iCheck("destroy"),jQuery(".woof_checkbox_term").iCheck({checkboxClass:"icheckbox_"+icheck_skin.skin+"-"+icheck_skin.color}),jQuery(".woof_checkbox_term").unbind("ifChecked"),jQuery(".woof_checkbox_term").on("ifChecked",function(e){jQuery(this).attr("checked",!0),jQuery(".woof_select_radio_check input").attr("disabled","disabled"),woof_checkbox_process_data(this,!0)}),jQuery(".woof_checkbox_term").unbind("ifUnchecked"),jQuery(".woof_checkbox_term").on("ifUnchecked",function(e){jQuery(this).attr("checked",!1),woof_checkbox_process_data(this,!1)}),jQuery(".woof_checkbox_label").unbind(),jQuery("label.woof_checkbox_label").click(function(){if(jQuery(this).prev().find(".woof_checkbox_term").is(":disabled"))return!1;jQuery(this).prev().find(".woof_checkbox_term").is(":checked")?(jQuery(this).prev().find(".woof_checkbox_term").trigger("ifUnchecked"),jQuery(this).prev().removeClass("checked")):(jQuery(this).prev().find(".woof_checkbox_term").trigger("ifChecked"),jQuery(this).prev().addClass("checked"))})):jQuery(".woof_checkbox_term").on("change",function(e){jQuery(this).is(":checked")?(jQuery(this).attr("checked",!0),woof_checkbox_process_data(this,!0)):(jQuery(this).attr("checked",!1),woof_checkbox_process_data(this,!1))})}function woof_checkbox_process_data(e,o){var r=jQuery(e).data("tax"),t=jQuery(e).attr("name");woof_checkbox_direct_search(jQuery(e).data("term-id"),t,r,o)}function woof_checkbox_direct_search(e,r,o,t){var _="",i=!0;if(t)o in woof_current_values?woof_current_values[o]=woof_current_values[o]+","+r:woof_current_values[o]=r,i=!0;else{_=(_=woof_current_values[o]).split(",");var n=[];jQuery.each(_,function(e,o){o!=r&&n.push(o)}),(_=n).length?woof_current_values[o]=_.join(","):delete woof_current_values[o],i=!1}jQuery(".woof_checkbox_term_"+e).attr("checked",i),woof_ajax_page_num=1,woof_autosubmit&&woof_submit_link(woof_get_submit_link())}function woof_init_mselects(){try{jQuery("select.woof_mselect").chosen()}catch(e){}jQuery(".woof_mselect").change(function(e){var o=jQuery(this).val(),r=jQuery(this).attr("name");if(is_woof_use_chosen){var t=jQuery(this).chosen().val();jQuery(".woof_mselect[name="+r+"] option:selected").removeAttr("selected"),jQuery(".woof_mselect[name="+r+"] option").each(function(e,o){var r=jQuery(this).val();-1!==jQuery.inArray(r,t)&&jQuery(this).prop("selected",!0)})}return woof_mselect_direct_search(r,o),!0})}function woof_mselect_direct_search(e,o){var r=[];jQuery(".woof_mselect[name="+e+"] option:selected").each(function(e,o){r.push(jQuery(this).val())}),(r=(r=r.filter(function(e,o){return r.indexOf(e)==o})).join(",")).length?woof_current_values[e]=r:delete woof_current_values[e],woof_ajax_page_num=1,woof_autosubmit&&woof_submit_link(woof_get_submit_link())}function woof_init_radios(){"none"!=icheck_skin?(jQuery(".woof_radio_term").iCheck("destroy"),jQuery(".woof_radio_term").iCheck({radioClass:"iradio_"+icheck_skin.skin+"-"+icheck_skin.color}),jQuery(".woof_radio_term").unbind("ifChecked"),jQuery(".woof_radio_term").on("ifChecked",function(e){jQuery(this).attr("checked",!0),jQuery(this).parents(".woof_list").find(".woof_radio_term_reset").removeClass("woof_radio_term_reset_visible"),jQuery(this).parents(".woof_list").find(".woof_radio_term_reset").hide(),jQuery(this).parents("li").eq(0).find(".woof_radio_term_reset").eq(0).addClass("woof_radio_term_reset_visible");var o=jQuery(this).data("slug"),r=jQuery(this).attr("name");woof_radio_direct_search(jQuery(this).data("term-id"),r,o)})):jQuery(".woof_radio_term").on("change",function(e){jQuery(this).attr("checked",!0);var o=jQuery(this).data("slug"),r=jQuery(this).attr("name");woof_radio_direct_search(jQuery(this).data("term-id"),r,o)}),jQuery(".woof_radio_term_reset").click(function(){return woof_radio_direct_search(jQuery(this).data("term-id"),jQuery(this).attr("data-name"),0),jQuery(this).parents(".woof_list").find(".checked").removeClass("checked"),jQuery(this).parents(".woof_list").find("input[type=radio]").removeAttr("checked"),jQuery(this).removeClass("woof_radio_term_reset_visible"),!1})}function woof_radio_direct_search(e,r,o){jQuery.each(woof_current_values,function(e,o){e!=r||delete woof_current_values[r]}),0!=o?(woof_current_values[r]=o,jQuery("a.woof_radio_term_reset_"+e).hide(),jQuery("woof_radio_term_"+e).filter(":checked").parents("li").find("a.woof_radio_term_reset").show(),jQuery("woof_radio_term_"+e).parents("ul.woof_list").find("label").css({fontWeight:"normal"}),jQuery("woof_radio_term_"+e).filter(":checked").parents("li").find("label.woof_radio_label_"+o).css({fontWeight:"bold"})):(jQuery("a.woof_radio_term_reset_"+e).hide(),jQuery("woof_radio_term_"+e).attr("checked",!1),jQuery("woof_radio_term_"+e).parent().removeClass("checked"),jQuery("woof_radio_term_"+e).parents("ul.woof_list").find("label").css({fontWeight:"normal"})),woof_ajax_page_num=1,woof_autosubmit&&woof_submit_link(woof_get_submit_link())}function woof_init_selects(){if(is_woof_use_chosen)try{jQuery("select.woof_select, select.woof_price_filter_dropdown").chosen()}catch(e){}jQuery(".woof_select").change(function(){var e=jQuery(this).val();woof_select_direct_search(this,jQuery(this).attr("name"),e)})}function woof_select_direct_search(e,r,o){jQuery.each(woof_current_values,function(e,o){e!=r||delete woof_current_values[r]}),0!=o&&(woof_current_values[r]=o),woof_ajax_page_num=1,(woof_autosubmit||0==jQuery(e).within(".woof").length)&&woof_submit_link(woof_get_submit_link())}
;var _extends=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(t,e){"object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.LazyLoad=e()}(this,function(){"use strict";var n={elements_selector:"img",container:document,threshold:300,thresholds:null,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",class_loading:"loading",class_loaded:"loaded",class_error:"error",load_delay:0,callback_load:null,callback_error:null,callback_set:null,callback_enter:null,callback_finish:null,to_webp:!1},s="data-",r="was-processed",o="ll-timeout",a="true",c=function(t,e){return t.getAttribute(s+e)},i=function(t,e,n){var o=s+e;null!==n?t.setAttribute(o,n):t.removeAttribute(o)},l=function(t){return c(t,r)===a},u=function(t,e){return i(t,o,e)},d=function(t){return c(t,o)},f=function(t,e){var n,o="LazyLoad::Initialized",s=new t(e);try{n=new CustomEvent(o,{detail:{instance:s}})}catch(t){(n=document.createEvent("CustomEvent")).initCustomEvent(o,!1,!1,{instance:s})}window.dispatchEvent(n)};var _=function(t,e){return e?t.replace(/\.(jpe?g|png)/gi,".webp"):t},t="undefined"!=typeof window,v=t&&!("onscroll"in window)||/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),e=t&&"IntersectionObserver"in window,h=t&&"classList"in document.createElement("p"),b=t&&!1,g=function(t,e,n,o){for(var s,r=0;s=t.children[r];r+=1)if("SOURCE"===s.tagName){var a=c(s,n);m(s,e,a,o)}},m=function(t,e,n,o){n&&t.setAttribute(e,_(n,o))},p={IMG:function(t,e){var n=b&&e.to_webp,o=e.data_srcset,s=t.parentNode;s&&"PICTURE"===s.tagName&&g(s,"srcset",o,n);var r=c(t,e.data_sizes);m(t,"sizes",r);var a=c(t,o);m(t,"srcset",a,n);var i=c(t,e.data_src);m(t,"src",i,n)},IFRAME:function(t,e){var n=c(t,e.data_src);m(t,"src",n)},VIDEO:function(t,e){var n=e.data_src,o=c(t,n);g(t,"src",n),m(t,"src",o),t.load()}},y=function(t,e){var n,o,s=e._settings,r=t.tagName,a=p[r];if(a)return a(t,s),e._updateLoadingCount(1),void(e._elements=(n=e._elements,o=t,n.filter(function(t){return t!==o})));!function(t,e){var n=b&&e.to_webp,o=c(t,e.data_src),s=c(t,e.data_bg);if(o){var r=_(o,n);t.style.backgroundImage='url("'+r+'")'}if(s){var a=_(s,n);t.style.backgroundImage=a}}(t,s)},w=function(t,e){h?t.classList.add(e):t.className+=(t.className?" ":"")+e},E=function(t,e){t&&t(e)},L="load",I="loadeddata",O="error",k=function(t,e,n){t.addEventListener(e,n)},A=function(t,e,n){t.removeEventListener(e,n)},C=function(t,e,n){A(t,L,e),A(t,I,e),A(t,O,n)},z=function(t,e,n){var o,s,r=n._settings,a=e?r.class_loaded:r.class_error,i=e?r.callback_load:r.callback_error,c=t.target;o=c,s=r.class_loading,h?o.classList.remove(s):o.className=o.className.replace(new RegExp("(^|\\s+)"+s+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,""),w(c,a),E(i,c),n._updateLoadingCount(-1)},N=function(n,o){var t,e,s,r=function t(e){z(e,!0,o),C(n,t,a)},a=function t(e){z(e,!1,o),C(n,r,t)};s=a,k(t=n,L,e=r),k(t,I,e),k(t,O,s)},x=["IMG","IFRAME","VIDEO"],M=function(t,e,n){R(t,n),e.unobserve(t)},S=function(t){var e=d(t);e&&(clearTimeout(e),u(t,null))};function R(t,e,n){var o=e._settings;!n&&l(t)||(E(o.callback_enter,t),-1<x.indexOf(t.tagName)&&(N(t,e),w(t,o.class_loading)),y(t,e),i(t,r,a),E(o.callback_set,t))}var j=function(t){return t.isIntersecting||0<t.intersectionRatio},T=function(t,e){this._settings=_extends({},n,t),this._setObserver(),this._loadingCount=0,this.update(e)};return T.prototype={_manageIntersection:function(t){var e,n,o,s,r,a=this._observer,i=this._settings.load_delay,c=t.target;i?j(t)?(e=c,n=a,s=(o=this)._settings.load_delay,(r=d(e))||(r=setTimeout(function(){M(e,n,o),S(e)},s),u(e,r))):S(c):j(t)&&M(c,a,this)},_onIntersection:function(t){t.forEach(this._manageIntersection.bind(this))},_setObserver:function(){var t;e&&(this._observer=new IntersectionObserver(this._onIntersection.bind(this),{root:(t=this._settings).container===document?null:t.container,rootMargin:t.thresholds||t.threshold+"px"}))},_updateLoadingCount:function(t){this._loadingCount+=t,0===this._elements.length&&0===this._loadingCount&&E(this._settings.callback_finish)},update:function(t){var e=this,n=this._settings,o=t||n.container.querySelectorAll(n.elements_selector);this._elements=Array.prototype.slice.call(o).filter(function(t){return!l(t)}),!v&&this._observer?this._elements.forEach(function(t){e._observer.observe(t)}):this.loadAll()},destroy:function(){var e=this;this._observer&&(this._elements.forEach(function(t){e._observer.unobserve(t)}),this._observer=null),this._elements=null,this._settings=null},load:function(t,e){R(t,this,e)},loadAll:function(){var e=this;this._elements.forEach(function(t){e.load(t)})}},t&&function(t,e){if(e)if(e.length)for(var n,o=0;n=e[o];o+=1)f(t,n);else f(t,e)}(T,window.lazyLoadOptions),T}),function(t,e){"use strict";var n,o,s=function(){n=new LazyLoad({elements_selector:"[data-lazyloaded]"}),o=function(){n.update()},t.MutationObserver&&new MutationObserver(o).observe(e.documentElement,{childList:!0,subtree:!0,attributes:!0})};t.addEventListener?t.addEventListener("load",s,!1):t.attachEvent("onload",s)}(window,document);