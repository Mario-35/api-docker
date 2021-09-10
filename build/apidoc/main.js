require.config({paths:{bootstrap:"./vendor/bootstrap.min",diffMatchPatch:"./vendor/diff_match_patch.min",handlebars:"./vendor/handlebars.min",handlebarsExtended:"./utils/handlebars_helper",jquery:"./vendor/jquery.min",locales:"./locales/locale",lodash:"./vendor/lodash.min",pathToRegexp:"./vendor/path-to-regexp/index",prettify:"./vendor/prettify/prettify",semver:"./vendor/semver.min",utilsSampleRequest:"./utils/send_sample_request",webfontloader:"./vendor/webfontloader"},shim:{bootstrap:{deps:["jquery"]},diffMatchPatch:{exports:"diff_match_patch"},handlebars:{exports:"Handlebars"},handlebarsExtended:{deps:["jquery","handlebars"],exports:"Handlebars"},prettify:{exports:"prettyPrint"}},urlArgs:"v="+(new Date).getTime(),waitSeconds:15}),require(["jquery","lodash","locales","handlebarsExtended","./api_project.js","./api_data.js","prettify","utilsSampleRequest","semver","webfontloader","bootstrap","pathToRegexp"],(function(e,a,r,t,i,s,n,o,l,d){d.load({active:function(){e(window).scrollspy("refresh")},google:{families:["Source Code Pro","Source Sans Pro:n4,n6,n7"]}});var c=s.api,p=t.compile(e("#template-header").html()),h=t.compile(e("#template-footer").html()),u=t.compile(e("#template-article").html()),f=t.compile(e("#template-compare-article").html()),m=t.compile(e("#template-generator").html()),v=t.compile(e("#template-project").html()),g=t.compile(e("#template-sections").html()),y=t.compile(e("#template-sidenav").html());i.template||(i.template={}),null==i.template.withCompare&&(i.template.withCompare=!0),null==i.template.withGenerator&&(i.template.withGenerator=!0),i.template.forceLanguage&&r.setLanguage(i.template.forceLanguage),e.ajaxSetup(i.template.jQueryAjaxSetup);var w=a.groupBy(c,(function(e){return e.group})),b={};e.each(w,(function(e,r){b[e]=a.groupBy(r,(function(e){return e.name}))}));var _=[],x={"ä":"ae","ü":"ue","ö":"oe","ß":"ss"};e.each(b,(function(a,r){var t=[];e.each(r,(function(e,a){var r=a[0].title;void 0!==r&&(r.toLowerCase().replace(/[äöüß]/g,(function(e){return x[e]})),t.push(r+"#~#"+e))})),t.sort(),i.order&&(t=R(t,i.order,"#~#")),t.forEach((function(e){var a=e.split("#~#")[1];r[a].forEach((function(e){_.push(e)}))}))})),c=_;var T={},I={},C={};C[i.version]=1,e.each(c,(function(e,a){T[a.group]=1,I[a.group]=a.groupTitle||a.group,C[a.version]=1})),(T=Object.keys(T)).sort(),i.order&&(T=R(T,i.order)),(C=Object.keys(C)).sort(l.compare),C.reverse();var E=[];T.forEach((function(e){E.push({group:e,isHeader:!0,title:I[e]});var a="";c.forEach((function(r){r.group===e&&(a!==r.name?E.push({title:r.title.substring(r.title.indexOf("]")+2).trim(),group:e,name:r.name,type:r.type,version:r.version}):E.push({title:r.title.substring(r.title.indexOf("]")+2).trim(),group:e,hidden:!0,name:r.name,type:r.type,version:r.version}),a=r.name)}))})),i.header&&E.unshift({group:"_",isHeader:!0,title:null==i.header.title?r.__("General"):i.header.title,isFixed:!0}),i.footer&&null!=i.footer.title&&E.push({group:"_footer",isHeader:!0,title:i.footer.title,isFixed:!0});var F=i.title?i.title:"apiDoc: "+i.name+" - "+i.version;e(document).attr("title",F),e("#loader").remove();var j={nav:E};e("#sidenav").append(y(j)),e("#generator").append(m(i)),a.extend(i,{versions:C}),e("#project").append(v(i)),i.header&&e("#header").append(p(i.header)),i.footer&&e("#footer").append(h(i.footer));var P={},k="";if(T.forEach((function(e){var a=[],r="",t={},s=e,n="";P[e]={},c.forEach((function(o){if(e===o.group){r!==o.name?(c.forEach((function(a){e===a.group&&o.name===a.name&&(P[o.group].hasOwnProperty(o.name)||(P[o.group][o.name]=[]),P[o.group][o.name].push(a.version))})),t={article:o,versions:P[o.group][o.name]}):t={article:o,hidden:!0,versions:P[o.group][o.name]},i.url&&(t.article.url=i.url+t.article.url);const l=t.article.title.indexOf("]");l>0&&(t.article.title=t.article.title.substring(l+2).trim(),H(t,o)),o.groupTitle&&(s=o.groupTitle),o.groupDescription&&(n=o.groupDescription),a.push({article:u(t),group:o.group,name:o.name}),r=o.name}})),k+=g(t={group:e,title:s,description:n,articles:a})})),e("#sections").append(k),e(this).scrollspy({target:"#scrollingNav",offset:18}),e(".sidenav").find("a").on("click",(function(a){a.preventDefault();var r=e(this).attr("href"),t=e(this).parent().attr("data-group");e(this).addClass("active");var i=e("#version strong").html();e("#sidenav li[data-version='"+i+"']").each((function(){e(this).addClass("hide")})),e("#sidenav li[data-version='"+i+"'][data-group='"+t+"']").each((function(){e(this).removeClass("hide")})),e(r).length>0&&e("html,body").animate({scrollTop:parseInt(e(r).offset().top)},400),window.location.hash=e(this).attr("href")})),window.location.hash){var S=window.location.hash;e(S).length>0&&e("html,body").animate({scrollTop:parseInt(e(S).offset().top)},0)}function q(r){var t=!1;return e.each(r,(function(e){a.any(r[e],(function(e){return e.type}))&&(t=!0)})),t}function D(){e("a[data-toggle=popover]").popover().click((function(e){e.preventDefault()}));var a=e("#version strong").html();e("#sidenav li").removeClass("is-new"),i.template.withCompare&&e("#sidenav li[data-version='"+a+"']").each((function(){var a=e(this).data("group"),r=e(this).data("name"),t=e("#sidenav li[data-group='"+a+"'][data-name='"+r+"']").length,i=e("#sidenav li[data-group='"+a+"'][data-name='"+r+"']").index(e(this));1!==t&&i!==t-1||e(this).addClass("is-new"),e(this).addClass("hide")})),e(".nav-tabs-examples a").click((function(a){a.preventDefault(),e(this).tab("show")})),e(".nav-tabs-examples").find("a:first").tab("show"),e(".sample-request-switch").click(()=>{var a="."+e(this).attr("name")+"-fields";e(a).addClass("hide"),e(this).parent().next(a).removeClass("hide")}),e(window).scrollspy("refresh"),o.initDynamic()}if(D(),n(),e("#versions li.version a").on("click",(function(a){a.preventDefault();var r=e(this).html();e("#version strong").html(r),e("article").addClass("hide"),e("#sidenav li:not(.nav-fixed)").addClass("hide"),e("article[data-version]").each(()=>{var a=e(this).data("group"),t=e(this).data("name"),i=e(this).data("version");i<=r&&0===e("article[data-group='"+a+"'][data-name='"+t+"']:visible").length&&(e("article[data-group='"+a+"'][data-name='"+t+"'][data-version='"+i+"']").removeClass("hide"),e("#sidenav li[data-group='"+a+"'][data-name='"+t+"'][data-version='"+i+"']").removeClass("hide"),e("#sidenav li.nav-header[data-group='"+a+"']").removeClass("hide"))}),e("article[data-version]").each(()=>{var a=e(this).data("group");e("section#api-"+a).removeClass("hide"),0===e("section#api-"+a+" article:visible").length?e("section#api-"+a).addClass("hide"):e("section#api-"+a).removeClass("hide")}),D()})),e("#compareAllWithPredecessor").on("click",(function(a){a.preventDefault(),e("article:visible .versions").each((function(){var a=e(this).parents("article").data("version"),r=null;e(this).find("li.version a").each((function(){e(this).html()<a&&!r&&(r=e(this))})),r&&r.trigger("click")})),D()})),e("article .versions li.version a").on("click",O),e.urlParam=function(e){var a=new RegExp("[\\?&amp;]"+e+"=([^&amp;#]*)").exec(window.location.href);return a&&a[1]?a[1]:null},e.urlParam("compare")&&(e("#compareAllWithPredecessor").trigger("click"),window.location.hash)){S=window.location.hash;e("html,body").animate({scrollTop:parseInt(e(S).offset().top)-18},0)}function O(a){a.preventDefault();var r=e(this).parents("article"),t=e(this).html(),i=r.find(".version"),s=i.find("strong").html();i.find("strong").html(t);var n=r.data("group"),o=r.data("name"),l=r.data("version"),d=r.data("compare-version");if(d!==t&&(d||l!=t)){if(d&&P[n][o][0]===t||l===t)!function(a,r,t){var i=e("article[data-group='"+a+"'][data-name='"+r+"']:visible"),s=function(a,r,t){var i={};e.each(b[a][r],(function(e,a){a.version===t&&(i=a)}));var s={article:i,versions:P[a][r]};return H(s,i),u(s)}(a,r,t);i.after(s),i.next().find(".versions li.version a").on("click",O),e("#sidenav li[data-group='"+a+"'][data-name='"+r+"'][data-version='"+t+"']").removeClass("has-modifications"),i.remove()}(n,o,l);else{var c={},p={};e.each(b[n][o],(function(e,a){a.version===l&&(c=a),a.version===t&&(p=a)}));var h={article:c,compare:p,versions:P[n][o]};h.article.id=h.article.group+"-"+h.article.name+"-"+h.article.version,h.article.id=h.article.id.replace(/\./g,"_"),h.compare.id=h.compare.group+"-"+h.compare.name+"-"+h.compare.version,h.compare.id=h.compare.id.replace(/\./g,"_"),(m=c).parameter&&m.parameter.fields&&(h._hasTypeInParameterFields=q(m.parameter.fields)),m.error&&m.error.fields&&(h._hasTypeInErrorFields=q(m.error.fields)),m.success&&m.success.fields&&(h._hasTypeInSuccessFields=q(m.success.fields)),m.info&&m.info.fields&&(h._hasTypeInInfoFields=q(m.info.fields));var m=p;!0!==h._hasTypeInParameterFields&&m.parameter&&m.parameter.fields&&(h._hasTypeInParameterFields=q(m.parameter.fields)),!0!==h._hasTypeInErrorFields&&m.error&&m.error.fields&&(h._hasTypeInErrorFields=q(m.error.fields)),!0!==h._hasTypeInSuccessFields&&m.success&&m.success.fields&&(h._hasTypeInSuccessFields=q(m.success.fields)),!0!==h._hasTypeInInfoFields&&m.info&&m.info.fields&&(h._hasTypeInInfoFields=q(m.info.fields));var v=f(h);r.after(v),r.next().find(".versions li.version a").on("click",O),e("#sidenav li[data-group='"+n+"'][data-name='"+o+"'][data-version='"+s+"']").addClass("has-modifications"),r.remove()}D()}}function H(e,a){e.id=e.article.group+"-"+e.article.name+"-"+e.article.version,e.id=e.id.replace(/\./g,"_"),a.header&&a.header.fields&&(e._hasTypeInHeaderFields=q(a.header.fields)),a.parameter&&a.parameter.fields&&(e._hasTypeInParameterFields=q(a.parameter.fields)),a.error&&a.error.fields&&(e._hasTypeInErrorFields=q(a.error.fields)),a.success&&a.success.fields&&(e._hasTypeInSuccessFields=q(a.success.fields)),a.info&&a.info.fields&&(e._hasTypeInInfoFields=q(a.info.fields)),e.template=i.template}function R(e,a,r){var t=[];return a.forEach((function(a){r?e.forEach((function(e){e.split(r)[1]==a&&t.push(e)})):e.forEach((function(e){e==a&&t.push(a)}))})),e.forEach((function(e){-1===t.indexOf(e)&&t.push(e)})),t}}));