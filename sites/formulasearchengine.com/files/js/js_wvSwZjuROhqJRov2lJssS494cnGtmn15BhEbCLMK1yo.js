/*
 * jQuery FlexSlider v1.7
 * http://flex.madebymufffin.com
 * Copyright 2011, Tyler Smith
 * Free to use under the MIT license.
 */
(function(a){a.flexslider=function(c,b){var d=c;d.init=function(){d.vars=a.extend({},a.flexslider.defaults,b);d.data("flexslider",true);d.container=a(".slides",d);d.slides=a(".slides > li",d);d.count=d.slides.length;d.animating=false;d.currentSlide=d.vars.slideToStart;d.animatingTo=d.currentSlide;d.atEnd=(d.currentSlide==0)?true:false;d.eventType=("ontouchstart" in document.documentElement)?"touchstart":"click";d.cloneCount=0;d.cloneOffset=0;if(d.vars.controlsContainer!=""){d.controlsContainer=a(d.vars.controlsContainer).eq(a(".slides").index(d.container));d.containerExists=d.controlsContainer.length>0}if(d.vars.manualControls!=""){d.manualControls=a(d.vars.manualControls,((d.containerExists)?d.controlsContainer:d));d.manualExists=d.manualControls.length>0}if(d.vars.randomize){d.slides.sort(function(){return(Math.round(Math.random())-0.5)});d.container.empty().append(d.slides)}if(d.vars.animation.toLowerCase()=="slide"){d.css({overflow:"hidden"});if(d.vars.animationLoop){d.cloneCount=2;d.cloneOffset=1;d.container.append(d.slides.filter(":first").clone().addClass("clone")).prepend(d.slides.filter(":last").clone().addClass("clone"))}d.container.width(((d.count+d.cloneCount)*d.width())+2000);d.newSlides=a(".slides > li",d);setTimeout(function(){d.newSlides.width(d.width()).css({"float":"left"}).show()},100);d.container.css({marginLeft:(-1*(d.currentSlide+d.cloneOffset))*d.width()+"px"})}else{d.slides.css({width:"100%","float":"left",marginRight:"-100%"}).eq(d.currentSlide).fadeIn(400)}if(d.vars.controlNav){if(d.manualExists){d.controlNav=d.manualControls}else{var g=a('<ol class="flex-control-nav"></ol>');var k=1;for(var l=0;l<d.count;l++){g.append("<li><a>"+k+"</a></li>");k++}if(d.containerExists){a(d.controlsContainer).append(g);d.controlNav=a(".flex-control-nav li a",d.controlsContainer)}else{d.append(g);d.controlNav=a(".flex-control-nav li a",d)}}d.controlNav.eq(d.currentSlide).addClass("active");d.controlNav.bind(d.eventType,function(i){i.preventDefault();if(!a(this).hasClass("active")){d.flexAnimate(d.controlNav.index(a(this)),d.vars.pauseOnAction)}})}if(d.vars.directionNav){var f=a('<ul class="flex-direction-nav"><li><a class="prev" href="#">'+d.vars.prevText+'</a></li><li><a class="next" href="#">'+d.vars.nextText+"</a></li></ul>");if(d.containerExists){a(d.controlsContainer).append(f);d.directionNav=a(".flex-direction-nav li a",d.controlsContainer)}else{d.append(f);d.directionNav=a(".flex-direction-nav li a",d)}if(!d.vars.animationLoop){if(d.currentSlide==0){d.directionNav.filter(".prev").addClass("disabled")}else{if(d.currentSlide==d.count-1){d.directionNav.filter(".next").addClass("disabled")}}}d.directionNav.bind(d.eventType,function(i){i.preventDefault();var j=(a(this).hasClass("next"))?d.getTarget("next"):d.getTarget("prev");if(d.canAdvance(j)){d.flexAnimate(j,d.vars.pauseOnAction)}})}if(d.vars.keyboardNav&&a("ul.slides").length==1){a(document).keyup(function(i){if(d.animating){return}else{if(i.keyCode!=39&&i.keyCode!=37){return}else{if(i.keyCode==39){var j=d.getTarget("next")}else{if(i.keyCode==37){var j=d.getTarget("prev")}}if(d.canAdvance(j)){d.flexAnimate(j,d.vars.pauseOnAction)}}}})}if(d.vars.slideshow){if(d.vars.pauseOnHover&&d.vars.slideshow){d.hover(function(){d.pause()},function(){d.resume()})}d.animatedSlides=setInterval(d.animateSlides,d.vars.slideshowSpeed)}if(d.vars.pausePlay){var e=a('<div class="flex-pauseplay"><span></span></div>');if(d.containerExists){d.controlsContainer.append(e);d.pausePlay=a(".flex-pauseplay span",d.controlsContainer)}else{d.append(e);d.pausePlay=a(".flex-pauseplay span",d)}var h=(d.vars.slideshow)?"pause":"play";d.pausePlay.addClass(h).text((h=="pause")?d.vars.pauseText:d.vars.playText);d.pausePlay.click(function(i){i.preventDefault();(a(this).hasClass("pause"))?d.pause():d.resume()})}if(d.vars.touchSwipe&&"ontouchstart" in document.documentElement){d.each(function(){var i,j=20;isMoving=false;function o(){this.removeEventListener("touchmove",m);i=null;isMoving=false}function m(s){if(isMoving){var p=s.touches[0].pageX,q=i-p;if(Math.abs(q)>=j){o();var r=(q>0)?d.getTarget("next"):d.getTarget("prev");if(d.canAdvance(r)){d.flexAnimate(r,d.vars.pauseOnAction)}}}}function n(p){if(p.touches.length==1){i=p.touches[0].pageX;isMoving=true;this.addEventListener("touchmove",m,false)}}if("ontouchstart" in document.documentElement){this.addEventListener("touchstart",n,false)}})}if(d.vars.animation.toLowerCase()=="slide"){d.sliderTimer;a(window).resize(function(){d.newSlides.width(d.width());d.container.width(((d.count+d.cloneCount)*d.width())+2000);clearTimeout(d.sliderTimer);d.sliderTimer=setTimeout(function(){d.flexAnimate(d.currentSlide)},300)})}d.vars.start(d)};d.flexAnimate=function(f,e){if(!d.animating){d.animating=true;d.animatingTo=f;d.vars.before(d);if(e){d.pause()}if(d.vars.controlNav){d.controlNav.removeClass("active").eq(f).addClass("active")}d.atEnd=(f==0||f==d.count-1)?true:false;if(!d.vars.animationLoop&&d.vars.directionNav){if(f==0){d.directionNav.removeClass("disabled").filter(".prev").addClass("disabled")}else{if(f==d.count-1){d.directionNav.removeClass("disabled").filter(".next").addClass("disabled")}else{d.directionNav.removeClass("disabled")}}}if(!d.vars.animationLoop&&f==d.count-1){d.pause();d.vars.end(d)}if(d.vars.animation.toLowerCase()=="slide"){if(d.currentSlide==0&&f==d.count-1&&d.vars.animationLoop&&d.direction!="next"){d.slideString="0px"}else{if(d.currentSlide==d.count-1&&f==0&&d.vars.animationLoop&&d.direction!="prev"){d.slideString=(-1*(d.count+1))*d.slides.filter(":first").width()+"px"}else{d.slideString=(-1*(f+d.cloneOffset))*d.slides.filter(":first").width()+"px"}}d.container.animate({marginLeft:d.slideString},d.vars.animationDuration,function(){if(d.currentSlide==0&&f==d.count-1&&d.vars.animationLoop){d.container.css({marginLeft:(-1*d.count)*d.slides.filter(":first").width()+"px"})}else{if(d.currentSlide==d.count-1&&f==0&&d.vars.animationLoop){d.container.css({marginLeft:-1*d.slides.filter(":first").width()+"px"})}}d.animating=false;d.currentSlide=f;d.vars.after(d)})}else{d.slides.eq(d.currentSlide).fadeOut(d.vars.animationDuration);d.slides.eq(f).fadeIn(d.vars.animationDuration,function(){d.animating=false;d.currentSlide=f;d.vars.after(d)})}}};d.animateSlides=function(){if(!d.animating){var e=(d.currentSlide==d.count-1)?0:d.currentSlide+1;d.flexAnimate(e)}};d.pause=function(){clearInterval(d.animatedSlides);if(d.vars.pausePlay){d.pausePlay.removeClass("pause").addClass("play").text(d.vars.playText)}};d.resume=function(){d.animatedSlides=setInterval(d.animateSlides,d.vars.slideshowSpeed);if(d.vars.pausePlay){d.pausePlay.removeClass("play").addClass("pause").text(d.vars.pauseText)}};d.canAdvance=function(e){if(!d.vars.animationLoop&&d.atEnd){if(d.currentSlide==0&&e==d.count-1&&d.direction!="next"){return false}else{if(d.currentSlide==d.count-1&&e==0&&d.direction=="next"){return false}else{return true}}}else{return true}};d.getTarget=function(e){d.direction=e;if(e=="next"){return(d.currentSlide==d.count-1)?0:d.currentSlide+1}else{return(d.currentSlide==0)?d.count-1:d.currentSlide-1}};d.init()};a.flexslider.defaults={animation:"fade",slideshow:true,slideshowSpeed:7000,animationDuration:600,directionNav:true,controlNav:true,keyboardNav:true,touchSwipe:true,prevText:"Previous",nextText:"Next",pausePlay:false,pauseText:"Pause",playText:"Play",randomize:false,slideToStart:0,animationLoop:true,pauseOnAction:true,pauseOnHover:false,controlsContainer:"",manualControls:"",start:function(){},before:function(){},after:function(){},end:function(){}};a.fn.flexslider=function(b){return this.each(function(){if(a(this).find(".slides li").length==1){a(this).find(".slides li").fadeIn(400)}else{if(a(this).data("flexslider")!=true){new a.flexslider(a(this),b)}}})}})(jQuery);;
(function ($) {
  $(document).ready(function() {
    /**
     * FlexSlider options, see: http://flex.madebymufffin.com/
     *
     * animation: "fade",        // Select your animation type (fade/slide)
     * slideshow: true,          // Should the slider animate automatically by default? (true/false)
     * slideshowSpeed: 7000,     // Set the speed of the slideshow cycling, in milliseconds
     * animationDuration: 600,   // Set the speed of animations, in milliseconds
     * directionNav: true,       // Create navigation for previous/next navigation? (true/false)
     * controlNav: true,         // Create navigation for paging control of each clide? (true/false)
     * keyboardNav: true,        // Allow for keyboard navigation using left/right keys (true/false)
     * touchSwipe: true,         // Touch swipe gestures for left/right slide navigation (true/false)
     * prevText: "Previous",     // Set the text for the "previous" directionNav item
     * nextText: "Next",         // Set the text for the "next" directionNav item
     * pausePlay: false,         // Create pause/play dynamic element (true/false)
     * pauseText: 'Pause',       // Set the text for the "pause" pausePlay item
     * playText: 'Play',         // Set the text for the "play" pausePlay item
     * randomize: false,         // Randomize slide order on page load? (true/false)
     * slideToStart: 0,          // The slide that the slider should start on. Array notation (0 = first slide)
     * animationLoop: true,      // Should the animation loop? If false, directionNav will received disabled classes when at either end (true/false)
     * pauseOnAction: true,      // Pause the slideshow when interacting with control elements, highly recommended. (true/false)
     * pauseOnHover: false,      // Pause the slideshow when hovering over slider, then resume when no longer hovering (true/false)
     * controlsContainer: "",    // Advanced property: Can declare which container the navigation elements should be appended too. Default container is the flexSlider element. Example use would be ".flexslider-container", "#container", etc. If the given element is not found, the default action will be taken.
     * manualControls: "",       // Advanced property: Can declare custom control navigation. Example would be ".flex-control-nav" or "#tabs-nav", etc. The number of elements in your controlNav should match the number of slides/tabs (obviously).
     * start: function(){},      // Callback: function(slider) - Fires when the slider loads the first slide
     * before: function(){},     // Callback: function(slider) - Fires asynchronously with each slider animation
     * after: function(){},      // Callback: function(slider) - Fires after each slider animation completes
     * end: function(){}         // Callback: function(slider) - Fires when the slider reaches the last slide (asynchronous)
     */
    $('article.flexible-slideshow .flexslider').flexslider({
      animation: "slide",
      slideshowSpeed: 6000,
    });
  });
}(jQuery));;
(function ($) {
  Drupal.behaviors.ContentDisplayToggleDraw = {
    attach: function(context) {
    // Get a reference to the container.
      var draw = $( "#draw" );
      // Bind the link to toggle the slide.
      $( "#toggle-wrapper a" ).click(
      function( event ){
        // Prevent the default event.
        event.preventDefault();
        // Toggle the slide based on its current
        // visibility.
        if (draw.is( ":visible" )){ 
          // Hide - slide up.
          draw.slideUp(600);
          } else {
            // Show - slide down.
            draw.slideDown(600);
          }
        }
      );
    }
  }
})(jQuery);;
/**
* hoverIntent r6 // 2011.02.26 // jQuery 1.5.1+
* <http://cherne.net/brian/resources/jquery.hoverIntent.html>
* 
* @param  f  onMouseOver function || An object with configuration options
* @param  g  onMouseOut function  || Nothing (use configuration options object)
* @author    Brian Cherne brian(at)cherne(dot)net
*/
(function($){$.fn.hoverIntent=function(f,g){var cfg={sensitivity:7,interval:100,timeout:0};cfg=$.extend(cfg,g?{over:f,out:g}:f);var cX,cY,pX,pY;var track=function(ev){cX=ev.pageX;cY=ev.pageY};var compare=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);if((Math.abs(pX-cX)+Math.abs(pY-cY))<cfg.sensitivity){$(ob).unbind("mousemove",track);ob.hoverIntent_s=1;return cfg.over.apply(ob,[ev])}else{pX=cX;pY=cY;ob.hoverIntent_t=setTimeout(function(){compare(ev,ob)},cfg.interval)}};var delay=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);ob.hoverIntent_s=0;return cfg.out.apply(ob,[ev])};var handleHover=function(e){var ev=jQuery.extend({},e);var ob=this;if(ob.hoverIntent_t){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t)}if(e.type=="mouseenter"){pX=ev.pageX;pY=ev.pageY;$(ob).bind("mousemove",track);if(ob.hoverIntent_s!=1){ob.hoverIntent_t=setTimeout(function(){compare(ev,ob)},cfg.interval)}}else{$(ob).unbind("mousemove",track);if(ob.hoverIntent_s==1){ob.hoverIntent_t=setTimeout(function(){delay(ev,ob)},cfg.timeout)}}};return this.bind('mouseenter',handleHover).bind('mouseleave',handleHover)}})(jQuery);;
/*
 * sf-Smallscreen v1.0b - Provides small-screen compatibility for the jQuery Superfish plugin.
 *
 * Developer's note:
 * Built as a part of the Superfish project for Drupal (http://drupal.org/project/superfish)
 * Found any bug? have any cool ideas? contact me right away! http://drupal.org/user/619294/contact
 *
 * jQuery version: 1.3.x or higher.
 *
 * Dual licensed under the MIT and GPL licenses:
 *  http://www.opensource.org/licenses/mit-license.php
 *  http://www.gnu.org/licenses/gpl.html
 */

(function($){
  $.fn.sfsmallscreen = function(options){
    options = $.extend({
      mode: 'inactive',
      breakpoint: 768,
      useragent: '',
      title: '',
      addSelected: true,
      menuClasses: true,
      hyperlinkClasses: true,
      excludeClass_menu: '',
      excludeClass_hyperlink: '',
      includeClass_menu: '',
      includeClass_hyperlink: ''
    }, options);

    // We need to clean up the menu from anything unnecessary.
    function refine(menu){
      if ($('.sf-megamenu', menu).length > 0){
        var refined = menu.clone();
        refined.find('div.sf-megamenu-column > ol').each(function(){
          $(this).replaceWith('<ul>' + $(this).html() + '</ul>');
        });
        refined.find('div.sf-megamenu-column').each(function(){
          $(this).replaceWith($(this).html());
        }).end().find('.sf-megamenu-wrapper > ol').each(function(){
          $(this).replaceWith($(this).html());
        }).end().find('li.sf-megamenu-wrapper').each(function(){
          $(this).replaceWith($(this).html());
        });
      } else {
        var refined = menu.clone();
      }
      refined.find('.sf-smallscreen-remove').each(function(){
        $(this).replaceWith($(this).html());
      }).end().find('.sf-sub-indicator, .sf-description').each(function(){
        $(this).remove();
      });
      return refined;
    }

    // Currently the only available reaction is converting the menu into a <select> element;
    // In the next version there will be another reaction that will create a "compact" version of
    // the menu, using <ul> element hence easy to style with CSS and so on and so forth.
    function toSelect(menu, level){
      var items = '';
      $(menu).children('li').each(function(){
        var list = $(this);
        list.children('a, span').each(function(){
          var item = $(this),
          path = item.is('a') ? item.attr('href') : '',
          itemClone = item.clone(),
          classes = (options.hyperlinkClasses) ? ((options.excludeClass_hyperlink && itemClone.hasClass(options.excludeClass_hyperlink)) ? itemClone.removeClass(options.excludeClass_hyperlink).attr('class') : itemClone.attr('class')) : '',
          classes = (options.includeClass_hyperlink && !itemClone.hasClass(options.includeClass_hyperlink)) ? ((options.hyperlinkClasses) ? itemClone.addClass(options.includeClass_hyperlink).attr('class') : options.includeClass_hyperlink) : classes,
          classes = (classes) ? ' class="' + classes + '"' : '',
          disable = item.is('span') ? ' disabled="disabled"' : '',
          subIndicator = 1 < level ? Array(level).join('-') + ' ' : '';
          items += '<option value="' + path + '"' + classes + disable + '>' + subIndicator + $.trim(item.text()) +'</option>';
          list.find('> ul').each(function(){
            items += toSelect(this, level + 1);
          });
        });
      });
      return items;
    }

    // Create the new version, hide the original.
    function convert(menu){
      var menuClone = menu.clone(), classes = (options.menuClasses) ? ((options.excludeClass_menu && menuClone.hasClass(options.excludeClass_menu)) ? menuClone.removeClass(options.excludeClass_menu).attr('class') : menuClone.attr('class')) : '',
      classes = (options.includeClass_menu && !menuClone.hasClass(options.includeClass_menu)) ? ((options.menuClasses) ? menuClone.addClass(options.includeClass_menu).attr('class') : options.includeClass_menu) : classes,
      classes = (classes) ? ' class="' + classes + '"' : '';
      if ($('#' + menu.attr('id') + '-select').length == 0){
        var selectList = $('<select' + classes + ' id="' + menu.attr('id') + '-select"/>'),
        refinedMenu = refine(menu);
        newMenu = toSelect(refinedMenu, 1);
        selectList.append('<option>' + options.title + '</option>').append(newMenu).change(function(){
          window.location = selectList.val();
        });
        if (options.addSelected) {
          selectList.find('.active').attr("selected", !0);
        }
        menu.before(selectList).hide();
      }
    }

    // Turn everything back to normal.
    function turnBack(menu){
      var id = '#' + menu.attr('id');
      $(id + '-select').remove();
      $(id).show();
    }

    // Return original object to support chaining.
    return this.each(function(){
      var menu = $(this),
      mode = options.mode;
      // The rest is crystal clear, isn't it? :)
      switch (mode){
        case 'always_active' :
          convert(menu);
        break;
        case 'window_width' :
          if ($(window).width() < options.breakpoint){
            convert(menu);
          }
          var timer;
          $(window).resize(function(){
            clearTimeout(timer);
            timer = setTimeout(function(){
              if ($(window).width() < options.breakpoint){
                convert(menu);
              }
              else {
                turnBack(menu);
              }
            }, 100);
          });
        break;
        case 'useragent_custom' :
          if (options.useragent != ''){
            var ua = RegExp(options.useragent, 'i');
            if (navigator.userAgent.match(ua)){
              convert(menu);
            }
          }
        break;
        case 'useragent_predefined' :
          if (navigator.userAgent.match(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i)){
            convert(menu);
          }
        break;
      }
    });
  };
})(jQuery);;
/*
 * Superfish v1.4.8 - jQuery menu widget
 * Copyright (c) 2008 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 *  http://www.opensource.org/licenses/mit-license.php
 *  http://www.gnu.org/licenses/gpl.html
 *
 * CHANGELOG: http://users.tpg.com.au/j_birch/plugins/superfish/changelog.txt
 */
/*
 * This is not the original jQuery Supersubs plugin.
 * Please refer to the README for more information.
 */

(function($){
  $.fn.superfish = function(op){
    var sf = $.fn.superfish,
      c = sf.c,
      $arrow = $(['<span class="',c.arrowClass,'"> &#187;</span>'].join('')),
      over = function(){
        var $$ = $(this), menu = getMenu($$);
        clearTimeout(menu.sfTimer);
        $$.showSuperfishUl().siblings().hideSuperfishUl();
      },
      out = function(){
        var $$ = $(this), menu = getMenu($$), o = sf.op;
        clearTimeout(menu.sfTimer);
        menu.sfTimer=setTimeout(function(){
          o.retainPath=($.inArray($$[0],o.$path)>-1);
          $$.hideSuperfishUl();
          if (o.$path.length && $$.parents(['li.',o.hoverClass].join('')).length<1){over.call(o.$path);}
        },o.delay);
      },
      getMenu = function($menu){
        var menu = $menu.parents(['ul.',c.menuClass,':first'].join(''))[0];
        sf.op = sf.o[menu.serial];
        return menu;
      },
      addArrow = function($a){ $a.addClass(c.anchorClass).append($arrow.clone()); };

    return this.each(function() {
      var s = this.serial = sf.o.length;
      var o = $.extend({},sf.defaults,op);
      o.$path = $('li.'+o.pathClass,this).slice(0,o.pathLevels).each(function(){
        $(this).addClass([o.hoverClass,c.bcClass].join(' '))
          .filter('li:has(ul)').removeClass(o.pathClass);
      });
      sf.o[s] = sf.op = o;

      $('li:has(ul)',this)[($.fn.hoverIntent && !o.disableHI) ? 'hoverIntent' : 'hover'](over,out).each(function() {
        if (o.autoArrows) addArrow( $('>a:first-child',this) );
      })
      .not('.'+c.bcClass)
        .hideSuperfishUl();

      var $a = $('a',this);
      $a.each(function(i){
        var $li = $a.eq(i).parents('li');
        $a.eq(i).focus(function(){over.call($li);}).blur(function(){out.call($li);});
      });
      o.onInit.call(this);

    }).each(function() {
      var menuClasses = [c.menuClass];
      if (sf.op.dropShadows  && !($.browser.msie && $.browser.version < 7)) menuClasses.push(c.shadowClass);
      $(this).addClass(menuClasses.join(' '));
    });
  };

  var sf = $.fn.superfish;
  sf.o = [];
  sf.op = {};
  sf.IE7fix = function(){
    var o = sf.op;
    if ($.browser.msie && $.browser.version > 6 && o.dropShadows && o.animation.opacity!=undefined)
      this.toggleClass(sf.c.shadowClass+'-off');
    };
  sf.c = {
    bcClass: 'sf-breadcrumb',
    menuClass: 'sf-js-enabled',
    anchorClass: 'sf-with-ul',
    arrowClass: 'sf-sub-indicator',
    shadowClass: 'sf-shadow'
  };
  sf.defaults = {
    hoverClass: 'sfHover',
    pathClass: 'overideThisToUse',
    pathLevels: 1,
    delay: 800,
    animation: {opacity:'show'},
    speed: 'normal',
    autoArrows: true,
    dropShadows: true,
    disableHI: false, // true disables hoverIntent detection
    onInit: function(){}, // callback functions
    onBeforeShow: function(){},
    onShow: function(){},
    onHide: function(){}
  };
  $.fn.extend({
    hideSuperfishUl : function(){
      var o = sf.op,
        not = (o.retainPath===true) ? o.$path : '';
      o.retainPath = false;
      var $ul = $(['li.',o.hoverClass].join(''),this).add(this).not(not).removeClass(o.hoverClass)
          .find('>ul').addClass('sf-hidden');
      o.onHide.call($ul);
      return this;
    },
    showSuperfishUl : function(){
      var o = sf.op,
        sh = sf.c.shadowClass+'-off',
        $ul = this.addClass(o.hoverClass)
          .find('>ul.sf-hidden').hide().removeClass('sf-hidden');
      sf.IE7fix.call($ul);
      o.onBeforeShow.call($ul);
      $ul.animate(o.animation,o.speed,function(){ sf.IE7fix.call($ul); o.onShow.call($ul); });
      return this;
    }
  });
})(jQuery);;
/*
 * Supersubs v0.2b - jQuery plugin
 * Copyright (c) 2008 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 *  http://www.opensource.org/licenses/mit-license.php
 *  http://www.gnu.org/licenses/gpl.html
 *
 * This plugin automatically adjusts submenu widths of suckerfish-style menus to that of
 * their longest list item children. If you use this, please expect bugs and report them
 * to the jQuery Google Group with the word 'Superfish' in the subject line.
 *
 */
/*
 * This is not the original jQuery Supersubs plugin.
 * Please refer to the README for more information.
 */

(function($){ // $ will refer to jQuery within this closure
  $.fn.supersubs = function(options){
    var opts = $.extend({}, $.fn.supersubs.defaults, options);
    // return original object to support chaining
    return this.each(function() {
      // cache selections
      var $$ = $(this);
      // support metadata
      var o = $.meta ? $.extend({}, opts, $$.data()) : opts;
      // get the font size of menu.
      // .css('fontSize') returns various results cross-browser, so measure an em dash instead
      var fontsize = $('<li id="menu-fontsize">&#8212;</li>').css({
        'padding' : 0,
        'position' : 'absolute',
        'top' : '-99999em',
        'width' : 'auto'
      }).appendTo($$).width(); //clientWidth is faster, but was incorrect here
      // remove em dash
      $('#menu-fontsize').remove();

      // Jump on level if it's a "NavBar"
      if ($$.hasClass('sf-navbar')) {
        $$ = $('li > ul', $$);
      }
      // cache all ul elements 
      $ULs = $$.find('ul:not(.sf-megamenu)');
      // loop through each ul in menu
      $ULs.each(function(i) {
        // cache this ul
        var $ul = $ULs.eq(i);
        // get all (li) children of this ul
        var $LIs = $ul.children();
        // get all anchor grand-children
        var $As = $LIs.children('a');
        // force content to one line and save current float property
        var liFloat = $LIs.css('white-space','nowrap').css('float');
        // remove width restrictions and floats so elements remain vertically stacked
        var emWidth = $ul.add($LIs).add($As).css({
          'float' : 'none',
          'width'  : 'auto'
        })
        // this ul will now be shrink-wrapped to longest li due to position:absolute
        // so save its width as ems. Clientwidth is 2 times faster than .width() - thanks Dan Switzer
        .end().end()[0].clientWidth / fontsize;
        // add more width to ensure lines don't turn over at certain sizes in various browsers
        emWidth += o.extraWidth;
        // restrict to at least minWidth and at most maxWidth
        if (emWidth > o.maxWidth)    { emWidth = o.maxWidth; }
        else if (emWidth < o.minWidth)  { emWidth = o.minWidth; }
        emWidth += 'em';
        // set ul to width in ems
        $ul.css('width',emWidth);
        // restore li floats to avoid IE bugs
        // set li width to full width of this ul
        // revert white-space to normal
        $LIs.css({
          'float' : liFloat,
          'width' : '100%',
          'white-space' : 'normal'
        })
        // update offset position of descendant ul to reflect new width of parent
        .each(function(){
          var $childUl = $('>ul',this);
          var offsetDirection = $childUl.css('left')!==undefined ? 'left' : 'right';
          $childUl.css(offsetDirection,emWidth);
        });
      });
    });
  };
  // expose defaults
  $.fn.supersubs.defaults = {
    minWidth: 9, // requires em unit.
    maxWidth: 25, // requires em unit.
    extraWidth: 0 // extra width can ensure lines don't sometimes turn over due to slight browser differences in how they round-off values
  };
})(jQuery); // plugin code ends;
/*
 * Superfish v1.4.8 - jQuery menu widget
 * Copyright (c) 2008 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 *  http://www.opensource.org/licenses/mit-license.php
 *  http://www.gnu.org/licenses/gpl.html
 *
 * CHANGELOG: http://users.tpg.com.au/j_birch/plugins/superfish/changelog.txt
 */
/*
 * This is not the original jQuery Supersubs plugin.
 * Please refer to the README for more information.
 */

(function($){
  $.fn.superfish = function(op){
    var sf = $.fn.superfish,
      c = sf.c,
      $arrow = $(['<span class="',c.arrowClass,'"> &#187;</span>'].join('')),
      over = function(){
        var $$ = $(this), menu = getMenu($$);
        clearTimeout(menu.sfTimer);
        $$.showSuperfishUl().siblings().hideSuperfishUl();
      },
      out = function(){
        var $$ = $(this), menu = getMenu($$), o = sf.op;
        clearTimeout(menu.sfTimer);
        menu.sfTimer=setTimeout(function(){
          o.retainPath=($.inArray($$[0],o.$path)>-1);
          $$.hideSuperfishUl();
          if (o.$path.length && $$.parents(['li.',o.hoverClass].join('')).length<1){over.call(o.$path);}
        },o.delay);
      },
      getMenu = function($menu){
        var menu = $menu.parents(['ul.',c.menuClass,':first'].join(''))[0];
        sf.op = sf.o[menu.serial];
        return menu;
      },
      addArrow = function($a){ $a.addClass(c.anchorClass).append($arrow.clone()); };

    return this.each(function() {
      var s = this.serial = sf.o.length;
      var o = $.extend({},sf.defaults,op);
      o.$path = $('li.'+o.pathClass,this).slice(0,o.pathLevels).each(function(){
        $(this).addClass([o.hoverClass,c.bcClass].join(' '))
          .filter('li:has(ul)').removeClass(o.pathClass);
      });
      sf.o[s] = sf.op = o;

      $('li:has(ul)',this)[($.fn.hoverIntent && !o.disableHI) ? 'hoverIntent' : 'hover'](over,out).each(function() {
        if (o.autoArrows) addArrow( $('>a:first-child',this) );
      })
      .not('.'+c.bcClass)
        .hideSuperfishUl();

      var $a = $('a',this);
      $a.each(function(i){
        var $li = $a.eq(i).parents('li');
        $a.eq(i).focus(function(){over.call($li);}).blur(function(){out.call($li);});
      });
      o.onInit.call(this);

    }).each(function() {
      var menuClasses = [c.menuClass];
      if (sf.op.dropShadows  && !($.browser.msie && $.browser.version < 7)) menuClasses.push(c.shadowClass);
      $(this).addClass(menuClasses.join(' '));
    });
  };

  var sf = $.fn.superfish;
  sf.o = [];
  sf.op = {};
  sf.IE7fix = function(){
    var o = sf.op;
    if ($.browser.msie && $.browser.version > 6 && o.dropShadows && o.animation.opacity!=undefined)
      this.toggleClass(sf.c.shadowClass+'-off');
    };
  sf.c = {
    bcClass: 'sf-breadcrumb',
    menuClass: 'sf-js-enabled',
    anchorClass: 'sf-with-ul',
    arrowClass: 'sf-sub-indicator',
    shadowClass: 'sf-shadow'
  };
  sf.defaults = {
    hoverClass: 'sfHover',
    pathClass: 'overideThisToUse',
    pathLevels: 1,
    delay: 800,
    animation: {opacity:'show'},
    speed: 'normal',
    autoArrows: true,
    dropShadows: true,
    disableHI: false, // true disables hoverIntent detection
    onInit: function(){}, // callback functions
    onBeforeShow: function(){},
    onShow: function(){},
    onHide: function(){}
  };
  $.fn.extend({
    hideSuperfishUl : function(){
      var o = sf.op,
        not = (o.retainPath===true) ? o.$path : '';
      o.retainPath = false;
      var $ul = $(['li.',o.hoverClass].join(''),this).add(this).not(not).removeClass(o.hoverClass)
          .find('>ul').addClass('sf-hidden');
      o.onHide.call($ul);
      return this;
    },
    showSuperfishUl : function(){
      var o = sf.op,
        sh = sf.c.shadowClass+'-off',
        $ul = this.addClass(o.hoverClass)
          .find('>ul.sf-hidden').hide().removeClass('sf-hidden');
      sf.IE7fix.call($ul);
      o.onBeforeShow.call($ul);
      $ul.animate(o.animation,o.speed,function(){ sf.IE7fix.call($ul); o.onShow.call($ul); });
      return this;
    }
  });
})(jQuery);;
