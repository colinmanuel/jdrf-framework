(function(e){function n(){t.width()>=768&&e("#more").addClass("in")}e(document).ready(function(){e("[data-toggle=offcanvas]").click(function(){e("html").toggleClass("offcanvas-active")})});var t=e(window);n();e(window).resize(n);e('[data-toggle="tooltip"]').tooltip();(function(e,t,n){var r={boundAttr:"data-ajax-bound",interactionAttr:"data-interaction",makeReq:function(t,n,r){e.get(t,function(e,t,r){n.trigger("ajaxIncludeResponse",[e,r])})},plugins:{}};e.fn.ajaxInclude=function(n){function i(t){var n=t.data("url");f.proxy&&e.inArray(n,u)===-1?(u.push(n),a=a.add(t)):r.makeReq(n,t)}function s(){u.length&&(r.makeReq(f.proxy+u.join(","),a),a=e(),u=[])}function o(e,n){function r(){i(e),s(),o.removeListener(r)}var o=t.matchMedia(n);o.addListener&&o.addListener(r)}var u=[],a=e(),f={proxy:null};return typeof n=="string"?f.proxy=n:f=e.extend(f,n),this.not("["+r.boundAttr+"],["+r.interactionAttr+"]").each(function(n){var s=e(this),u=s.attr("data-media"),a=["append","replace","before","after"],l,c,h=!1,p=s.attr("data-target");for(var d=a.length,v=0;v<d;v++)s.is("[data-"+a[v]+"]")&&(l=a[v],c=s.attr("data-"+l));c||(c=s.attr("href")||s.attr("action"),h=!0),l==="replace"&&(l+="With"),s.data("method",l).data("url",c).data("target",p).attr(r.boundAttr,!0).each(function(){for(var e in r.plugins)r.plugins[e].call(this,f)}).bind("ajaxIncludeResponse",function(t,n,r){var i=n,o=p?e(p):s;if(f.proxy){var u=i.match(new RegExp("<entry url=[\"']?"+s.data("url")+"[\"']?>(?:(?!</entry>)(.|\n))*","gmi"));u&&(i=u[0])}var a=s.triggerHandler("ajaxIncludeFilter",[i]);a&&(i=a),l==="replaceWith"?(s.trigger("ajaxInclude",[i]),o[s.data("method")](i)):(o[s.data("method")](i),s.trigger("ajaxInclude",[i]))}),h?r.makeReq(c,s,!0):!u||t.matchMedia&&t.matchMedia(u).matches?i(s):u&&t.matchMedia&&o(s,u)}),s(),this},t.AjaxInclude=r})(jQuery,this);var t=e(window),r=e(".views"),i={deferOn:t.width()>=768,duration:250},s;r.on("slideViewDeferred slideViewOff",function(){e("a[data-pushview]").on("click",function(t){var n=e(this).attr("href"),r=e(n),i;if(r.length){t.preventDefault();r.addClass("is-active");i=e("#event-info-nav");i.find(".is-active").removeClass("is-active");i.find('[href="'+n+'"]').addClass("is-active");r.siblings().removeClass("is-active")}})}).on("slideViewBeforeOn",function(){e("a[data-pushview]").off("click")});s=r.simpleSlideView(i);t.on("resize",function(){s.toggle(t.width()<768)})})(jQuery);