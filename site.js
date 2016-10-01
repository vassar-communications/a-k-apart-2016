/*Cached 9/1/16 1:11am*/			
    var 
        searchBox = document.querySelectorAll('.Srh_fld'),
        searchButton = document.querySelectorAll('.Srh_sbmt');
    
    for (x = searchBox.length; x--;) {
        var box = searchBox[x];
        searchBox[x].onfocus = function() {
            toggleClass ('field-focus', box);
        }
        searchBox[x].onblur = function() {
            toggleClass ('field-focus', box);
        }
    }

    for (x = searchButton.length; x--;) {
        var button = searchButton[x];
        searchButton[x].onfocus = function() {
            toggleClass ('submit-focus', button);
        }
        searchButton[x].onblur = function() {
            toggleClass ('submit-focus', button);
        }	
    }
    
    // toggle className [toggleClass] on element [el]   
    function toggleClass(toggleClass, el) {
        var
            current = el.className;//.split(/\s+/),
            exists = current.indexOf(toggleClass);
        el.className = (exists == -1)
            ? current + ' ' + toggleClass
            : current.replace(toggleClass,'').replace(/^\s+|\s+$/,'');
    }			
    
    document.getElementById('skipToNav').onclick = function () {
        var target = document.getElementById('nav');
        //target.href = '#navigation';
        //target.innerText = 'Start of Navigation';
        target.setAttribute('tabindex', '-1');
        //target.focus();
    };
function runSiteJS(arType) {
/*
 * Lea Verouâ€™s Blissful JS
 * http://blissfuljs.com/
 */
!function(){"use strict";function t(e,r,n){return r=void 0===r?1:r,n=n||r+1,1>=n-r?function(){if("string"===$.type(arguments[r]))return e.apply(this,arguments);var t=arguments[r],n;for(var i in t){var s=Array.from(arguments);s.splice(r,1,i,t[i]),n=e.apply(this,s)}return n}:t(t(e,r+1,n),r,n-1)}function e(t,e,r){for(var n in e){if(r){var i=$.type(r);if("own"===r&&!e.hasOwnProperty(n)||"array"===i&&-1===r.indexOf(n)||"regexp"===i&&!r.test(n)||"function"===i&&!r.call(e,n))continue}var s=Object.getOwnPropertyDescriptor(e,n);!s||s.writable&&s.configurable&&s.enumerable&&!s.get&&!s.set?t[n]=e[n]:(delete t[n],Object.defineProperty(t,n,s))}return t}var $=self.Bliss=e(function(t,e){return"string"===$.type(t)?(e||document).querySelector(t):t||null},self.Bliss);e($,{extend:e,overload:t,property:$.property||"_",sources:{},noop:function(){},$:function(t,e){return t instanceof Node||t instanceof Window?[t]:Array.from("string"==typeof t?(e||document).querySelectorAll(t):t||[])},type:function(t){if(null===t)return"null";if(void 0===t)return"undefined";var e=(Object.prototype.toString.call(t).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase();return"number"==e&&isNaN(t)?"nan":e},defined:function(){for(var t=0;t<arguments.length;t++)if(void 0!==arguments[t])return arguments[t]},create:function(t,e){return 1===arguments.length&&("string"===$.type(t)?e={}:(e=t,t=e.tag,delete e.tag)),$.set(document.createElement(t||"div"),e)},each:function(t,e,r){r=r||{};for(var n in t)r[n]=e.call(t,n,t[n]);return r},ready:function(t){return t=t||document,new Promise(function(e,r){"loading"!==t.readyState?e():t.addEventListener("DOMContentLoaded",function(){e()})})},Class:function(t){var e=$.noop;t.hasOwnProperty("constructor")&&(e=t.constructor,delete t.constructor);var r=t["abstract"];delete t["abstract"];var n=function(){if(r&&this.constructor===n)throw new Error("Abstract classes cannot be directly instantiated.");return this.constructor["super"]&&this.constructor["super"]!=n&&this.constructor["super"].apply(this,arguments),e.apply(this,arguments)};n["super"]=t["extends"]||null,delete t["extends"],n.prototype=$.extend(Object.create(n["super"]?n["super"].prototype:Object),{constructor:n}),$.extend(n,t["static"]),delete t["static"];for(var i in t)i in $.classProps&&($.classProps[i].call(n,n.prototype,t[i]),delete t[i]);return $.extend(n.prototype,t),n.prototype["super"]=n["super"]?n["super"].prototype:null,n},classProps:{lazy:t(function(t,e,r){return Object.defineProperty(t,e,{get:function(){return delete this[e],this[e]=r.call(this)},configurable:!0,enumerable:!0}),t}),live:t(function(t,e,r){return"function"===$.type(r)&&(r={set:r}),Object.defineProperty(t,e,{get:function(){var t=this["_"+e],n=r.get&&r.get.call(this,t);return void 0!==n?n:t},set:function(t){var n=this["_"+e],i=r.set&&r.set.call(this,t,n);this["_"+e]=void 0!==i?i:t},configurable:r.configurable,enumerable:r.enumerable}),t})},include:function(){var t=arguments[arguments.length-1],e=2===arguments.length?arguments[0]:!1,r=document.createElement("script");return e?Promise.resolve():new Promise(function(e,n){$.set(r,{async:!0,onload:function(){e(),$.remove(r)},onerror:function(){n()},src:t,inside:document.head})})},fetch:function(t,r){if(!t)throw new TypeError("URL parameter is mandatory and cannot be "+t);var n=e({url:new URL(t,location),data:"",method:"GET",headers:{},xhr:new XMLHttpRequest},r);n.method=n.method.toUpperCase(),$.hooks.run("fetch-args",n),"GET"===n.method&&n.data&&(n.url.search+=n.data),document.body.setAttribute("data-loading",n.url),n.xhr.open(n.method,n.url.href,n.async!==!1,n.user,n.password);for(var i in r)if(i in n.xhr)try{n.xhr[i]=r[i]}catch(s){self.console&&console.error(s)}"GET"===n.method||n.headers["Content-type"]||n.headers["Content-Type"]||n.xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");for(var o in n.headers)n.xhr.setRequestHeader(o,n.headers[o]);return new Promise(function(t,e){n.xhr.onload=function(){document.body.removeAttribute("data-loading"),0===n.xhr.status||n.xhr.status>=200&&n.xhr.status<300||304===n.xhr.status?t(n.xhr):e(Error(n.xhr.statusText))},n.xhr.onerror=function(){document.body.removeAttribute("data-loading"),e(Error("Network Error"))},n.xhr.send("GET"===n.method?null:n.data)})},value:function(t){var e="string"!==$.type(t);return $$(arguments).slice(+e).reduce(function(t,e){return t&&t[e]},e?t:self)}}),$.Hooks=new $.Class({add:function(t,e){this[t]=this[t]||[],this[t].push(e)},run:function(t,e){(this[t]||[]).forEach(function(t){t(e)})}}),$.hooks=new $.Hooks;var r=$.property;$.Element=function(t){this.subject=t,this.data={},this.bliss={}},$.Element.prototype={set:t(function(t,e){t in $.setProps?$.setProps[t].call(this,e):t in this?this[t]=e:this.setAttribute(t,e)},0),transition:function(t,e){return e=+e||400,new Promise(function(r,n){if("transition"in this.style){var i=$.extend({},this.style,/^transition(Duration|Property)$/);$.style(this,{transitionDuration:(e||400)+"ms",transitionProperty:Object.keys(t).join(", ")}),$.once(this,"transitionend",function(){clearTimeout(s),$.style(this,i),r(this)});var s=setTimeout(r,e+50,this);$.style(this,t)}else $.style(this,t),r(this)}.bind(this))},fire:function(t,e){var r=document.createEvent("HTMLEvents");r.initEvent(t,!0,!0),this.dispatchEvent($.extend(r,e))}},$.setProps={style:function(t){$.extend(this.style,t)},attributes:function(t){for(var e in t)this.setAttribute(e,t[e])},properties:function(t){$.extend(this,t)},events:function(t){if(t&&t.addEventListener){var e=this;if(t[r]&&t[r].bliss){var n=t[r].bliss.listeners;for(var i in n)n[i].forEach(function(t){e.addEventListener(i,t.callback,t.capture)})}for(var s in t)0===s.indexOf("on")&&(this[s]=t[s])}else for(var o in t)o.split(/\s+/).forEach(function(e){this.addEventListener(e,t[o])},this)},once:t(function(t,e){t=t.split(/\s+/);var r=this,n=function(){return t.forEach(function(t){r.removeEventListener(t,n)}),e.apply(r,arguments)};t.forEach(function(t){r.addEventListener(t,n)})},0),delegate:t(function(t,e,r){this.addEventListener(t,function(t){t.target.closest(e)&&r.call(this,t)})},0,2),contents:function(t){(t||0===t)&&(Array.isArray(t)?t:[t]).forEach(function(t){var e=$.type(t);/^(string|number)$/.test(e)?t=document.createTextNode(t+""):"object"===e&&(t=$.create(t)),t instanceof Node&&this.appendChild(t)},this)},inside:function(t){t.appendChild(this)},before:function(t){t.parentNode.insertBefore(this,t)},after:function(t){t.parentNode.insertBefore(this,t.nextSibling)},start:function(t){t.insertBefore(this,t.firstChild)},around:function(t){t.parentNode&&$.before(this,t),(/^template$/i.test(this.nodeName)?this.content||this:this).appendChild(t)}},$.Array=function(t){this.subject=t},$.Array.prototype={all:function(t){var e=$$(arguments).slice(1);return this[t].apply(this,e)}},$.add=t(function(t,e,r,n){r=$.extend({$:!0,element:!0,array:!0},r),"function"==$.type(e)&&(!r.element||t in $.Element.prototype&&n||($.Element.prototype[t]=function(){return this.subject&&$.defined(e.apply(this.subject,arguments),this.subject)}),!r.array||t in $.Array.prototype&&n||($.Array.prototype[t]=function(){var t=arguments;return this.subject.map(function(r){return r&&$.defined(e.apply(r,t),r)})}),r.$&&($.sources[t]=$[t]=e,(r.array||r.element)&&($[t]=function(){var e=[].slice.apply(arguments),n=e.shift(),i=r.array&&Array.isArray(n)?"Array":"Element";return $[i].prototype[t].apply({subject:n},e)})))},0),$.add($.Array.prototype,{element:!1}),$.add($.Element.prototype),$.add($.setProps),$.add($.classProps,{element:!1,array:!1});var n=document.createElement("_");$.add($.extend({},HTMLElement.prototype,function(t){return"function"===$.type(n[t])}),null,!0)}(),function($){"use strict";if(Bliss&&!Bliss.shy){var t=Bliss.property;if($.add({clone:function(){var t=this.cloneNode(!0),e=$.$("*",t).concat(t);return $.$("*",this).concat(this).forEach(function(t,r,n){$.events(e[r],t)}),t}},{array:!1}),Object.defineProperty(Node.prototype,t,{get:function s(){return Object.defineProperty(Node.prototype,t,{get:void 0}),Object.defineProperty(this,t,{value:new $.Element(this)}),Object.defineProperty(Node.prototype,t,{get:s}),this[t]},configurable:!0}),Object.defineProperty(Array.prototype,t,{get:function(){return Object.defineProperty(this,t,{value:new $.Array(this)}),this[t]},configurable:!0}),self.EventTarget&&"addEventListener"in EventTarget.prototype){var e=EventTarget.prototype.addEventListener,r=EventTarget.prototype.removeEventListener,n=function(t,e,r){return r.callback===t&&r.capture==e},i=function(){return!n.apply(this,arguments)};EventTarget.prototype.addEventListener=function(r,i,s){if(this[t]&&i){var o=this[t].bliss.listeners=this[t].bliss.listeners||{};o[r]=o[r]||[],0===o[r].filter(n.bind(null,i,s)).length&&o[r].push({callback:i,capture:s})}return e.call(this,r,i,s)},EventTarget.prototype.removeEventListener=function(e,n,s){if(this[t]&&n){var o=this[t].bliss.listeners=this[t].bliss.listeners||{};o[e]&&(o[e]=o[e].filter(i.bind(null,n,s)))}return r.call(this,e,n,s)}}self.$=self.$||$,self.$$=self.$$||$.$}}(Bliss);

/*
 * ployfill for request animation frame 
 * http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
 */
window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e,n){window.setTimeout(e,1e3/60)}}(),window.requestInterval=function(e,n){function i(){var m=(new Date).getTime(),o=m-a;o>=n&&(e.call(),a=(new Date).getTime()),t.value=requestAnimFrame(i)}if(!(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame&&window.mozCancelRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame))return window.setInterval(e,n);var a=(new Date).getTime(),t=new Object;return t.value=requestAnimFrame(i),t},window.clearRequestInterval=function(e){window.cancelAnimationFrame?window.cancelAnimationFrame(e.value):window.webkitCancelRequestAnimationFrame?window.webkitCancelRequestAnimationFrame(e.value):window.mozCancelRequestAnimationFrame?window.mozCancelRequestAnimationFrame(e.value):window.oCancelRequestAnimationFrame?window.oCancelRequestAnimationFrame(e.value):window.msCancelRequestAnimationFrame?msCancelRequestAnimationFrame(e.value):clearInterval(e)},window.requestTimeout=function(e,n){function i(){var m=(new Date).getTime(),o=m-a;o>=n?e.call():t.value=requestAnimFrame(i)}if(!(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame&&window.mozCancelRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame))return window.setTimeout(e,n);var a=(new Date).getTime(),t=new Object;return t.value=requestAnimFrame(i),t},window.clearRequestTimeout=function(e){window.cancelAnimationFrame?window.cancelAnimationFrame(e.value):window.webkitCancelRequestAnimationFrame?window.webkitCancelRequestAnimationFrame(e.value):window.mozCancelRequestAnimationFrame?window.mozCancelRequestAnimationFrame(e.value):window.oCancelRequestAnimationFrame?window.oCancelRequestAnimationFrame(e.value):window.msCancelRequestAnimationFrame?msCancelRequestAnimationFrame(e.value):clearTimeout(e)};
    
/* 
 * cut the mustard
 * http://responsivenews.co.uk/post/18948466399/cutting-the-mustard
 */    
if('querySelector' in document
     && 'addEventListener' in window) {
     
    $.ready().then(function()
    {
        $$('.acNA-menu')._.addEventListener('click',function(event)
        {            
            $(this.attributes.href).focus;
        });
        
        $$(window)._.events({
            "unload": function(){
                $$('*')._.events({
                    "focus": function()
                    { this.blur(); }
                })
            }
        });
    
        var pauseLength = 4000,
            intItemCount = $$('.Nws_iC').length,
            intCurrentPosition = Math.floor(Math.random() * intItemCount)  + 1,
            objFirstLIA = $('.Nws_iC:first-child .Nws_i'),
            timerID,
            mq = (matchMedia)
                ? window.matchMedia("screen and (min-width:56em)")
                : false;

        if(mq.matches && intItemCount > 0){
            var clip = $.extend({},
                getComputedStyle($('.Nws_iC:last-child')),
                /^clip$/);

            // If CSS is on and has set clip
            if (clip.clip.indexOf('auto') === -1){    
                
                fncTimeOut('set');
        
                $$('.Nws')._.events({
                    "mouseover": function(evt) { fncTimeOut('clear'); },
                    "mouseout": function(evt) { fncTimeOut('set'); }
                });
        
                $$('.Nws_i, .Nws_header')._.events({
                    "focus": function() {
                        fncTimeOut('clear');
                        this.closest('div').classList.add('focus');
                    },
                    "blur": function(){
                        fncTimeOut('set');
                        this.closest('div').classList.remove('focus');
                    }
                });
            }
        }
        else {
            objFirstLIA._.style({
                "visibility": "visibile"
            });
        }

        modalBlur(window.location.hash, false);
        
        if (matchMedia) {
            mq.addListener(WidthChange);
            //WidthChange(mq);
        }
    
        $('html')._.addEventListener('click',function(event)
        {       
            var 
                eventPath = [],
                node = event.target,
                hash = '',
                myClass = '',
                thisClick = true;

            while(node != document.body) {
               eventPath.push(node);
               node = node.parentNode;
            }
                            
            // Propogate up from the clicked element
            for(x=0; x <= eventPath.length - 1; x++){
                var node = eventPath[x];
                if(node.attributes){
                    var attributes = node.attributes;
                    if(attributes.class){
                        var classes = attributes.class.value;
                        // if click comes from inside navigaiton or serach field, ignore it.
                        if (
                            classes.indexOf('Sch_fld') !== -1
                        ){
                            thisClick = 'ignore';
                        }
                    }
                    // Reading location.hash happens AFTER click so read it from the href.
                    if(attributes.href){
                        hash = attributes.href.value;
                    }
                }
            }
            modalBlur(hash, thisClick);
        });
        
        function modalBlur(hash, click)
        {
            // If this is a click we want to respond to
            if(click !== 'ignore'){
                // If this is naviagation or search, and the right media query
                if(
                    (hash === '#nav' ||
                    hash === '#Srh') &&
                    !mq.matches
                ){
                    // Blur everything except the target hash
                    CSSBlur('body>*:not(' + hash + ')', '3px');
                }
                // If there is no hash we care about or weâ€™re not at the right media query
                else{
                    // Make sure everything is not blured
                    CSSBlur('body>*', 0);
                    if (click){
                        window.location.hash = '';
                    }
                }
            }
        }
        
        function CSSBlur(selector, Blur)
        {
            var Grayscale = (Blur == 0)
                ? 0
                : '100%';

            $$(selector)._.style({
                'filter':'blur('+Blur+') grayscale(' + Grayscale + ')',
                '-webkit-filter': 'blur('+Blur+') grayscale(' + Grayscale + ')',
                '-moz-filter': 'blur('+Blur+') grayscale(' + Grayscale + ')',
                '-o-filter': 'blur('+Blur+') grayscale(' + Grayscale + ')',
                '-ms-filter': 'blur('+Blur+') grayscale(' + Grayscale + ')'
            });            
        }
    
        // media query change
        function WidthChange(mq)
        {
            modalBlur(window.location.hash, false);
            if (clip.clip.indexOf('auto') === -1){    
    
                if(mq.matches && intItemCount > 0){
                    fncTimeOut('set');
                }
                else{
                    fncTimeOut('clear');
                }
            }
        }
        
        function fncUpdateTicker()
        {
            intCurrentPosition = (intCurrentPosition < intItemCount) 
                ? intCurrentPosition + 1
                : 2;
            
            $.transition($(".Nws_iC:first-child a"), {opacity: 0}).then(function() {
                var 
                    objCurrentLIA = $(".Nws_iC:nth-of-type(" + intCurrentPosition + ") a"),
                    thisHREF = objCurrentLIA.href,
                    thisHTML = $(objCurrentLIA).innerHTML;                
                
                objCurrentLIA.href = $(objFirstLIA);
                objCurrentLIA.innerHTML = objFirstLIA.innerHTML;
                
                objFirstLIA.setAttribute("href", thisHREF);
                objFirstLIA.innerHTML = thisHTML;
                
                $.transition($(".Nws_iC:first-child a"), {opacity: 1}); 
            });
        }
        
        function fncTimeOut(strState)
        {
            if (strState === 'set'){
                timerID = requestInterval(function() {
                    fncUpdateTicker();
                }, pauseLength);
            }
            else{
                if(timerID){
                    clearRequestTimeout(timerID);
                }
            }
        }
    });
}
}
		