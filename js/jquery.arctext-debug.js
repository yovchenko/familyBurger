!function(t,i){function s(i,s,n,a){var e,r=i.text().split(s),o="";r.length&&(t(r).each(function(t,i){e=""," "===i&&(e=" empty",i="&nbsp;"),o+='<span class="'+n+(t+1)+e+'">'+i+"</span>"+a}),i.empty().append(o))}t.fn.fitText=function(i,s){var n={minFontSize:Number.NEGATIVE_INFINITY,maxFontSize:Number.POSITIVE_INFINITY};return this.each(function(){var a=t(this),e=i||1;s&&t.extend(n,s);var r=function(){a.css("font-size",Math.max(Math.min(a.width()/(10*e),parseFloat(n.maxFontSize)),parseFloat(n.minFontSize)))};r(),t(window).resize(r)})};var n={init:function(){return this.each(function(){s(t(this),"","char","")})},words:function(){return this.each(function(){s(t(this)," ","word"," ")})},lines:function(){return this.each(function(){var i="eefec303079ad17405c889e092e105b0";s(t(this).children("br").replaceWith(i).end(),i,"line","")})}};t.fn.lettering=function(i){return i&&n[i]?n[i].apply(this,[].slice.call(arguments,1)):"letters"!==i&&i?(t.error("Method "+i+" does not exist on jQuery.lettering"),this):n.init.apply(this,[].slice.call(arguments,0))},t.Arctext=function(i,s){this.$el=t(s),this._init(i)},t.Arctext.defaults={radius:0,dir:1,rotate:!0,fitText:!1},t.Arctext.prototype={_init:function(i){this.options=t.extend(!0,{},t.Arctext.defaults,i),this._applyLettering(),this.$el.data("arctext",!0),this._calc(),this._rotateWord(),this._loadEvents()},_applyLettering:function(){this.$el.lettering(),this.options.fitText&&this.$el.fitText(),this.$letters=this.$el.find("span").css("display","inline-block")},_calc:function(){if(-1===this.options.radius)return!1;this._calcBase(),this._calcLetters()},_calcBase:function(){this.dtWord=0;var i=this;this.$letters.each(function(s){var n=t(this),a=n.outerWidth(!0);i.dtWord+=a,n.data("center",i.dtWord-a/2)});var s=this.dtWord/2;this.options.radius<s&&(this.options.radius=s),this.dtArcBase=this.dtWord;var n=2*Math.asin(this.dtArcBase/(2*this.options.radius));this.dtArc=this.options.radius*n},_calcLetters:function(){var i=this,s=0;this.$letters.each(function(n){var a=t(this),e=a.outerWidth(!0)/i.dtWord*i.dtArc/i.options.radius,r=i.options.radius*Math.cos(e/2),o=Math.acos((i.dtWord/2-s)/i.options.radius)+e/2,c=Math.cos(o)*r,h=Math.sin(o)*r,d=s+Math.abs(i.dtWord/2-c-s),u=0|d-a.data("center"),l=0|i.options.radius-h,f=i.options.rotate?0|-Math.asin(c/i.options.radius)*(180/Math.PI):0;s=2*d-s,a.data({x:u,y:1===i.options.dir?l:-l,a:1===i.options.dir?f:-f})})},_rotateWord:function(i){if(!this.$el.data("arctext"))return!1;var s=this;this.$letters.each(function(n){var a=t(this),e=-1===s.options.radius?"none":"translateX("+a.data("x")+"px) translateY("+a.data("y")+"px) rotate("+a.data("a")+"deg)",r=i?"all "+(i.speed||0)+"ms "+(i.easing||"linear"):"none";a.css({"-webkit-transition":r,"-moz-transition":r,"-o-transition":r,"-ms-transition":r,transition:r}).css({"-webkit-transform":e,"-moz-transform":e,"-o-transform":e,"-ms-transform":e,transform:e})})},_loadEvents:function(){if(this.options.fitText){var i=this;t(window).on("resize.arctext",function(){i._calc(),i._rotateWord()})}},set:function(t){if(!t.radius&&!t.dir&&"undefined"===t.rotate)return!1;this.options.radius=t.radius||this.options.radius,this.options.dir=t.dir||this.options.dir,void 0!==t.rotate&&(this.options.rotate=t.rotate),this._calc(),this._rotateWord(t.animation)},destroy:function(){this.options.radius=-1,this._rotateWord(),this.$letters.removeData("x y a center"),this.$el.removeData("arctext"),t(window).off(".arctext")}};var a=function(t){this.console&&console.error(t)};t.fn.arctext=function(i){if("string"==typeof i){var s=Array.prototype.slice.call(arguments,1);this.each(function(){var n=t.data(this,"arctext");n?t.isFunction(n[i])&&"_"!==i.charAt(0)?n[i].apply(n,s):a("no such method '"+i+"' for arctext instance"):a("cannot call methods on arctext prior to initialization; attempted to call method '"+i+"'")})}else this.each(function(){t.data(this,"arctext")||t.data(this,"arctext",new t.Arctext(i,this))});return this}}(jQuery);