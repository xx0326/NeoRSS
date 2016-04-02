//document.domain = "mydrivers.com";
var my_return_url = window.location.href;
var tjrightpage = 0;//右侧猜你喜欢
var WEATHER_COOKIE_CITY_KEY = "WEATHER_COOKIE_CITY_KEY",WEATHER_COOKIE_EXPIRES = .5;

(function (n) { typeof define == "function" && define.amd ? define(["jquery"], n) : typeof exports == "object" ? n(require("jquery")) : n(jQuery) })(function (n) { function i(n) { return t.raw ? n : encodeURIComponent(n) } function f(n) { return t.raw ? n : decodeURIComponent(n) } function e(n) { return i(t.json ? JSON.stringify(n) : String(n)) } function o(n) { n.indexOf('"') === 0 && (n = n.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")); try { return n = decodeURIComponent(n.replace(u, " ")), t.json ? JSON.parse(n) : n } catch (i) { } } function r(i, r) { var u = t.raw ? i : o(i); return n.isFunction(r) ? r(u) : u } var u = /\+/g, t = n.cookie = function (u, o, s) { var y, a, h, v, c, p; if (arguments.length > 1 && !n.isFunction(o)) return s = n.extend({}, t.defaults, s), typeof s.expires == "number" && (y = s.expires, a = s.expires = new Date, a.setTime(+a + y * 864e5)), document.cookie = [i(u), "=", e(o), s.expires ? "; expires=" + s.expires.toUTCString() : "", s.path ? "; path=" + s.path : "", s.domain ? "; domain=" + s.domain : "", s.secure ? "; secure" : ""].join(""); for (h = u ? undefined : {}, v = document.cookie ? document.cookie.split("; ") : [], c = 0, p = v.length; c < p; c++) { var w = v[c].split("="), b = f(w.shift()), l = w.join("="); if (u && u === b) { h = r(l, o); break } u || (l = r(l)) === undefined || (h[b] = l) } return h }; t.defaults = {}; n.removeCookie = function (t, i) { return n.cookie(t) === undefined ? !1 : (n.cookie(t, "", n.extend({}, i, { expires: -1 })), !n.cookie(t)) } });

function search() {
    var s_keywords = $("#q").val();
    if ((s_keywords == "" || s_keywords == "请输入关键字")) {
        alert("请输入查询关键字!");
        $("#q").focus();
        return false;
    }
    switch ($("#s_class").val()) {
        case "0":
            $("#myform").attr("action", "http://so.mydrivers.com/news.aspx?q=" + escape(s_keywords));
            break;
        case "1":
            $("#myform").attr("action", "http://so.mydrivers.com/drivers.aspx?q=" + escape(s_keywords));
            break;
        case "2":
            $("#q").attr("name", "word");
            $("#myform").attr("action", "http://www.baidu.com/baidu");
            break;
        case "3":
            $("#q").attr("name", "word");
            $("#myform").attr("action", "http://image.baidu.com/i?word=" + escape(s_keywords));
            break;
        case "4":
            $("#q").attr("name", "word");
            $("#myform").attr("action", "http://video.baidu.com/v?ch=14&ie=utf-8&word=" + escape(s_keywords));
            break;
        default:
            $("#myform").attr("action", "http://so.mydrivers.com/news.aspx?q=" + escape(s_keywords));
            break;
    }
    return true;
}
var randstr;
        function Inituploadify() {
            randstr = parseInt(99999 * Math.random());
            $('#txttime').val(randstr);
            $('#file_upload').uploadify({
                'buttonText': '上传截图(不超过3个)',
                'fileTypeDesc': 'gif png jpg jpeg',
                'fileTypeExts': '*.gif; *.png; *.jpg; *.jpeg',
                'swf': 'http://blog.mydrivers.com/uploadify.swf',
                'folder': 'UploadFile',
                'auto': true,
                'queueSizeLimit': 3,
                'uploadLimit': 3,
                'width': 150,
				'height': 20,
 				'removeCompleted':false,
                'uploader': 'http://blog.mydrivers.com/uploadmyfile.aspx?type=1&file=' + randstr,
                'onUploadComplete': function (file) {
                    $('#txtfile').val($('#txtfile').val() + '|' + file.name);
                }
            });
           
        }
        //Inituploadify();
function setSearchClass(id)
{
	$("#s_class").val(id);
	$("#sele_list ul").hide();
	$('#sele_list_'+id).show();
}
var Tab_Comments_i=1;
function Tab_Comments_Change() {
    if (Tab_Comments_i == 3) {
        Tab_Comments_i = 1;
    } else {
        Tab_Comments_i++;
    }
    $(".jcai_plun_left").hide();
    $("#comments_panal_" + Tab_Comments_i).show();
    try{
    var $el = $("#comments_panal_" + Tab_Comments_i).jScrollPane({
        verticalGutter: -16
    }),
	extensionPlugin = {

		extPluginOpts: {
			mouseLeaveFadeSpeed: 500,
			hovertimeout_t: 1000,
			useTimeout: true,
			deviceWidth: 980
		},
		hovertimeout: null, // timeout to hide the scrollbar
		isScrollbarHover: false,// true if the mouse is over the scrollbar
		elementtimeout: null,	// avoids showing the scrollbar when moving from inside the element to outside, passing over the scrollbar
		isScrolling: false,// true if scrolling
		addHoverFunc: function () {

			// run only if the window has a width bigger than deviceWidth
			if ($(window).width() <= this.extPluginOpts.deviceWidth) return false;

			var instance = this;

			// functions to show / hide the scrollbar
			$.fn.jspmouseenter = $.fn.show;
			$.fn.jspmouseleave = $.fn.fadeOut;

			// hide the jScrollPane vertical bar
			var $vBar = this.getContentPane().siblings('.jspVerticalBar').hide();

			/*
				* mouseenter / mouseleave events on the main element
				* also scrollstart / scrollstop - @James Padolsey : http://james.padolsey.com/javascript/special-scroll-events-for-jquery/
				*/
			$el.bind('mouseenter.jsp', function () {

				// show the scrollbar
				$vBar.stop(true, true).jspmouseenter();

				if (!instance.extPluginOpts.useTimeout) return false;

				// hide the scrollbar after hovertimeout_t ms
				clearTimeout(instance.hovertimeout);
				instance.hovertimeout = setTimeout(function () {
				    // if scrolling at the moment don't hide it
				    if (!instance.isScrolling)
				        $vBar.stop(true, true).jspmouseleave(instance.extPluginOpts.mouseLeaveFadeSpeed || 0);
				}, instance.extPluginOpts.hovertimeout_t);


			}).bind('mouseleave.jsp', function () {

				// hide the scrollbar
				if (!instance.extPluginOpts.useTimeout)
				    $vBar.stop(true, true).jspmouseleave(instance.extPluginOpts.mouseLeaveFadeSpeed || 0);
				else {
				    clearTimeout(instance.elementtimeout);
				    if (!instance.isScrolling)
				        $vBar.stop(true, true).jspmouseleave(instance.extPluginOpts.mouseLeaveFadeSpeed || 0);
				}

			});

			if (this.extPluginOpts.useTimeout) {

				$el.bind('scrollstart.jsp', function () {

				    // when scrolling show the scrollbar
				    clearTimeout(instance.hovertimeout);
				    instance.isScrolling = true;
				    $vBar.stop(true, true).jspmouseenter();

				}).bind('scrollstop.jsp', function () {

				    // when stop scrolling hide the scrollbar (if not hovering it at the moment)
				    clearTimeout(instance.hovertimeout);
				    instance.isScrolling = false;
				    instance.hovertimeout = setTimeout(function () {
				        if (!instance.isScrollbarHover)
				            $vBar.stop(true, true).jspmouseleave(instance.extPluginOpts.mouseLeaveFadeSpeed || 0);
				    }, instance.extPluginOpts.hovertimeout_t);

				});
				var $vBarWrapper = $('<div/>').css({
				    position: 'absolute',
				    left: $vBar.css('left'),
				    top: $vBar.css('top'),
				    right: $vBar.css('right'),
				    bottom: $vBar.css('bottom'),
				    width: $vBar.width(),
				    height: $vBar.height()
				}).bind('mouseenter.jsp', function () {

				    clearTimeout(instance.hovertimeout);
				    clearTimeout(instance.elementtimeout);

				    instance.isScrollbarHover = true;

				    // show the scrollbar after 100 ms.
				    // avoids showing the scrollbar when moving from inside the element to outside, passing over the scrollbar								
				    instance.elementtimeout = setTimeout(function () {
				        $vBar.stop(true, true).jspmouseenter();
				    }, 100);

				}).bind('mouseleave.jsp', function () {

				    // hide the scrollbar after hovertimeout_t
				    clearTimeout(instance.hovertimeout);
				    instance.isScrollbarHover = false;
				    instance.hovertimeout = setTimeout(function () {
				        // if scrolling at the moment don't hide it
				        if (!instance.isScrolling)
				            $vBar.stop(true, true).jspmouseleave(instance.extPluginOpts.mouseLeaveFadeSpeed || 0);
				    }, instance.extPluginOpts.hovertimeout_t);

				});

				$vBar.wrap($vBarWrapper);

			}
		}
	},jspapi = $el.data('jsp');
    // extend the jScollPane by merging	
    $.extend(true, jspapi, extensionPlugin);
    jspapi.addHoverFunc();
}
catch(e){}
}

function InitUser() {
    var username = get_cookie("mydrivers_userid");
    var userid = get_cookie("mydrivers_usernumid");
    if (username != null && username != "") {
	  $("#i_reg").html("");
      $("#i_reg").attr("class","");
      $("#i_login").attr("class","login");
      $("#i_login").html("<a href=\"http:\/\/passport.mydrivers.com\/myinfo.aspx\" target=\"_self\"><img src=\"http:\/\/passport.mydrivers.com\/comments\/getusertouxiang.aspx?uid=" + userid + "&size=small\" width=\"16\" height=\"16\"/>" + decodeURI(username) + "<\/a> <a href=\"http:\/\/passport.mydrivers.com\/logout.aspx?returnurl=" + my_return_url + "\" target=\"_self\">退出<\/a><div id=\"usercommentmessage\"></div>")    
    }
}
function logout()
{
	window.location = "http://passport.mydrivers.com/logout.aspx?ReturnUrl=" + my_return_url;
}
function ShowAjaxTip(divobj,ajaxReq,reqClass){
    $("#" + divobj).html('<div style="float: right"><img src="http://11.mydrivers.com/comments/images/v20130509/' + reqClass + '.gif" style="margin: 7px 7px;cursor:pointer;" onclick="HideAxajTip(this);"></div><div>' + ajaxReq + '<div>').removeAttr("class").addClass(reqClass).show();
}
function HideAxajTip(myobj){
	myobj.parentNode.parentNode.style.display='none';
}

function addFavorite(){
    var aUrls=document.URL.split("/");
    var vDomainName="http://"+aUrls[2]+"/";
    var description=document.title;
    try{//IE
        window.external.AddFavorite(vDomainName,description);
    }catch(e){//FF
        window.sidebar.addPanel(description,vDomainName,"");
		
		 try {
       window.sidebar.addPanel(description, vDomainName, "");
    }
     catch (e) {
         alert("抱歉，您所使用的浏览器无法完成此操作。\n\n加入收藏失败，请使用Ctrl+D进行添加");
     }
    }	
}
function check_login()
{ 
    if ($("#txtUserName").val() == "")
    {
        ShowAjaxTip("LoginTip", "请填写用户名！", "AjaxTipWarning")
		$("#txtUserName").focus();
		return false;
    }
    if ($("#txtPwd").val() == "") {
        ShowAjaxTip("LoginTip", "请填写密码！", "AjaxTipWarning")
        $("#txtPwd").focus();
        return false;
    }
    
    $("#mydrivers_Login").attr("action", "http://passport.mydrivers.com/comments/check_login.aspx?ReturnUrl=" + my_return_url).submit();
}
function check_fankui()
{ 
    if ($("#fankuicontent").val() == "")
    {
        ShowAjaxTip("FankuiTip", "请输入反馈内容！", "AjaxTipWarning")
		$("#fankuicontent").focus();
		return false;
    } 
    $("#mydrivers_Fankui").attr("action", "http://dt.mydrivers.com/userfankuiv2.aspx").submit();
}
function check_login_comments() {
    if ($("#txtUserNameComments").val() == "") {
        ShowAjaxTip("CommentsTip", "请填写用户名！", "AjaxTipWarning")
        $("#txtUserNameComments").focus();
        return false;
    }
    if ($("#txtPwdComments").val() == "") {
        ShowAjaxTip("CommentsTip", "请填写密码！", "AjaxTipWarning")
        $("#txtPwdComments").focus();
        return false;
    }

    $("#mydrivers_LoginComments").attr("action", "http://passport.mydrivers.com/comments/check_login.aspx?ReturnUrl=" + my_return_url).submit();
}
 function get_cookie(varname)
{
	var tmp_ary = new Array();
	if (varname)
	{
		var a = document.cookie.indexOf(varname+"=");
		if (a != -1)
		{
			var b = document.cookie.substring((a+varname.length+1),document.cookie.length);
			var c = b.split(";");
			var d = c[0];
			return d;
		}
	}
}
function ShowLogin() {
    $.dialog({
        title: "登录",
        padding: 0,
        lock: false,
        content: document.getElementById('div_login'),
        id: 'div_login_ididid'
    });
}
function ShowFankui() {
    $.dialog({
        title: "意见反馈",
        padding: 0,
        lock: false,
        content: document.getElementById('div_fankui'),
        id: 'div_fankui_ididid'
    });
}

$(function () {

    var top = $('#menu_m').offset().top;
    $(window).scroll(function () {
        var scrolls = $(this).scrollTop();
        if (top < scrolls && $(window).width() > 1024) {
            $('#menu_m').css({ 'position': 'fixed', 'top': 0, 'left': 0, 'z-index': 999 });
        } else $('#menu_m').css({ 'position': '', 'top': '', 'z-index': '' });
    });

    var $el = $('#comments_panal_1').jScrollPane({
        verticalGutter: -16
    }),
				extensionPlugin = {

				    extPluginOpts: {
				        mouseLeaveFadeSpeed: 500,
				        hovertimeout_t: 1000,
				        useTimeout: true,
				        deviceWidth: 980
				    },
				    hovertimeout: null, // timeout to hide the scrollbar
				    isScrollbarHover: false,// true if the mouse is over the scrollbar
				    elementtimeout: null,	// avoids showing the scrollbar when moving from inside the element to outside, passing over the scrollbar
				    isScrolling: false,// true if scrolling
				    addHoverFunc: function () {

				        // run only if the window has a width bigger than deviceWidth
				        if ($(window).width() <= this.extPluginOpts.deviceWidth) return false;

				        var instance = this;

				        // functions to show / hide the scrollbar
				        $.fn.jspmouseenter = $.fn.show;
				        $.fn.jspmouseleave = $.fn.fadeOut;

				        // hide the jScrollPane vertical bar
				        var $vBar = this.getContentPane().siblings('.jspVerticalBar').hide();

				        /*
						 * mouseenter / mouseleave events on the main element
						 * also scrollstart / scrollstop - @James Padolsey : http://james.padolsey.com/javascript/special-scroll-events-for-jquery/
						 */
				        $el.bind('mouseenter.jsp', function () {

				            // show the scrollbar
				            $vBar.stop(true, true).jspmouseenter();

				            if (!instance.extPluginOpts.useTimeout) return false;

				            // hide the scrollbar after hovertimeout_t ms
				            clearTimeout(instance.hovertimeout);
				            instance.hovertimeout = setTimeout(function () {
				                // if scrolling at the moment don't hide it
				                if (!instance.isScrolling)
				                    $vBar.stop(true, true).jspmouseleave(instance.extPluginOpts.mouseLeaveFadeSpeed || 0);
				            }, instance.extPluginOpts.hovertimeout_t);


				        }).bind('mouseleave.jsp', function () {

				            // hide the scrollbar
				            if (!instance.extPluginOpts.useTimeout)
				                $vBar.stop(true, true).jspmouseleave(instance.extPluginOpts.mouseLeaveFadeSpeed || 0);
				            else {
				                clearTimeout(instance.elementtimeout);
				                if (!instance.isScrolling)
				                    $vBar.stop(true, true).jspmouseleave(instance.extPluginOpts.mouseLeaveFadeSpeed || 0);
				            }

				        });

				        if (this.extPluginOpts.useTimeout) {

				            $el.bind('scrollstart.jsp', function () {

				                // when scrolling show the scrollbar
				                clearTimeout(instance.hovertimeout);
				                instance.isScrolling = true;
				                $vBar.stop(true, true).jspmouseenter();

				            }).bind('scrollstop.jsp', function () {

				                // when stop scrolling hide the scrollbar (if not hovering it at the moment)
				                clearTimeout(instance.hovertimeout);
				                instance.isScrolling = false;
				                instance.hovertimeout = setTimeout(function () {
				                    if (!instance.isScrollbarHover)
				                        $vBar.stop(true, true).jspmouseleave(instance.extPluginOpts.mouseLeaveFadeSpeed || 0);
				                }, instance.extPluginOpts.hovertimeout_t);

				            });
				            var $vBarWrapper = $('<div/>').css({
				                position: 'absolute',
				                left: $vBar.css('left'),
				                top: $vBar.css('top'),
				                right: $vBar.css('right'),
				                bottom: $vBar.css('bottom'),
				                width: $vBar.width(),
				                height: $vBar.height()
				            }).bind('mouseenter.jsp', function () {

				                clearTimeout(instance.hovertimeout);
				                clearTimeout(instance.elementtimeout);

				                instance.isScrollbarHover = true;

				                // show the scrollbar after 100 ms.
				                // avoids showing the scrollbar when moving from inside the element to outside, passing over the scrollbar								
				                instance.elementtimeout = setTimeout(function () {
				                    $vBar.stop(true, true).jspmouseenter();
				                }, 100);

				            }).bind('mouseleave.jsp', function () {

				                // hide the scrollbar after hovertimeout_t
				                clearTimeout(instance.hovertimeout);
				                instance.isScrollbarHover = false;
				                instance.hovertimeout = setTimeout(function () {
				                    // if scrolling at the moment don't hide it
				                    if (!instance.isScrolling)
				                        $vBar.stop(true, true).jspmouseleave(instance.extPluginOpts.mouseLeaveFadeSpeed || 0);
				                }, instance.extPluginOpts.hovertimeout_t);

				            });

				            $vBar.wrap($vBarWrapper);

				        }

				    }

				},
				jspapi = $el.data('jsp');
    // extend the jScollPane by merging	
    $.extend(true, jspapi, extensionPlugin);
    jspapi.addHoverFunc();


    var $el = $('#jp-container').jScrollPane({
        verticalGutter: -16
    }),
				extensionPlugin = {

				    extPluginOpts: {
				        mouseLeaveFadeSpeed: 500,
				        hovertimeout_t: 1000,
				        useTimeout: true,
				        deviceWidth: 980
				    },
				    hovertimeout: null, // timeout to hide the scrollbar
				    isScrollbarHover: false,// true if the mouse is over the scrollbar
				    elementtimeout: null,	// avoids showing the scrollbar when moving from inside the element to outside, passing over the scrollbar
				    isScrolling: false,// true if scrolling
				    addHoverFunc: function () {

				        // run only if the window has a width bigger than deviceWidth
				        if ($(window).width() <= this.extPluginOpts.deviceWidth) return false;

				        var instance = this;

				        // functions to show / hide the scrollbar
				        $.fn.jspmouseenter = $.fn.show;
				        $.fn.jspmouseleave = $.fn.fadeOut;

				        // hide the jScrollPane vertical bar
				        var $vBar = this.getContentPane().siblings('.jspVerticalBar').hide();

				        /*
						 * mouseenter / mouseleave events on the main element
						 * also scrollstart / scrollstop - @James Padolsey : http://james.padolsey.com/javascript/special-scroll-events-for-jquery/
						 */
				        $el.bind('mouseenter.jsp', function () {

				            // show the scrollbar
				            $vBar.stop(true, true).jspmouseenter();

				            if (!instance.extPluginOpts.useTimeout) return false;

				            // hide the scrollbar after hovertimeout_t ms
				            clearTimeout(instance.hovertimeout);
				            instance.hovertimeout = setTimeout(function () {
				                // if scrolling at the moment don't hide it
				                if (!instance.isScrolling)
				                    $vBar.stop(true, true).jspmouseleave(instance.extPluginOpts.mouseLeaveFadeSpeed || 0);
				            }, instance.extPluginOpts.hovertimeout_t);


				        }).bind('mouseleave.jsp', function () {

				            // hide the scrollbar
				            if (!instance.extPluginOpts.useTimeout)
				                $vBar.stop(true, true).jspmouseleave(instance.extPluginOpts.mouseLeaveFadeSpeed || 0);
				            else {
				                clearTimeout(instance.elementtimeout);
				                if (!instance.isScrolling)
				                    $vBar.stop(true, true).jspmouseleave(instance.extPluginOpts.mouseLeaveFadeSpeed || 0);
				            }

				        });

				        if (this.extPluginOpts.useTimeout) {

				            $el.bind('scrollstart.jsp', function () {

				                // when scrolling show the scrollbar
				                clearTimeout(instance.hovertimeout);
				                instance.isScrolling = true;
				                $vBar.stop(true, true).jspmouseenter();

				            }).bind('scrollstop.jsp', function () {

				                // when stop scrolling hide the scrollbar (if not hovering it at the moment)
				                clearTimeout(instance.hovertimeout);
				                instance.isScrolling = false;
				                instance.hovertimeout = setTimeout(function () {
				                    if (!instance.isScrollbarHover)
				                        $vBar.stop(true, true).jspmouseleave(instance.extPluginOpts.mouseLeaveFadeSpeed || 0);
				                }, instance.extPluginOpts.hovertimeout_t);

				            });
				            var $vBarWrapper = $('<div/>').css({
				                position: 'absolute',
				                left: $vBar.css('left'),
				                top: $vBar.css('top'),
				                right: $vBar.css('right'),
				                bottom: $vBar.css('bottom'),
				                width: $vBar.width(),
				                height: $vBar.height()
				            }).bind('mouseenter.jsp', function () {

				                clearTimeout(instance.hovertimeout);
				                clearTimeout(instance.elementtimeout);

				                instance.isScrollbarHover = true;

				                // show the scrollbar after 100 ms.
				                // avoids showing the scrollbar when moving from inside the element to outside, passing over the scrollbar								
				                instance.elementtimeout = setTimeout(function () {
				                    $vBar.stop(true, true).jspmouseenter();
				                }, 100);

				            }).bind('mouseleave.jsp', function () {

				                // hide the scrollbar after hovertimeout_t
				                clearTimeout(instance.hovertimeout);
				                instance.isScrollbarHover = false;
				                instance.hovertimeout = setTimeout(function () {
				                    // if scrolling at the moment don't hide it
				                    if (!instance.isScrolling)
				                        $vBar.stop(true, true).jspmouseleave(instance.extPluginOpts.mouseLeaveFadeSpeed || 0);
				                }, instance.extPluginOpts.hovertimeout_t);

				            });

				            $vBar.wrap($vBarWrapper);

				        }

				    }

				},
				jspapi = $el.data('jsp');
    // extend the jScollPane by merging	
    $.extend(true, jspapi, extensionPlugin);
    jspapi.addHoverFunc();

});

 
 var zlhtcurrentpageid=1;
function zlhttabcontent(n)
{
	if (n==1)
	{
		if(zlhtcurrentpageid<3)
		{zlhtcurrentpageid++;}
	}
	else
	{
		if(zlhtcurrentpageid>1)
		{zlhtcurrentpageid--;}
	}
	$("#zlht_page").html(zlhtcurrentpageid+"/3");
	zlhttabcontentcurrent(zlhtcurrentpageid)
}
function zlhttabcontentcurrent(n)
{
	for(var i=1;i<=3;i++)
	{	
		var tabi=$("#zlht_00"+i);

		if(n==i)
		{
			tabi.show();
		}
		else
		{
			tabi.hide();				
		}
	}
}
function redianxinwenph(n) {
    for (var i = 1; i <= 2; i++) {
        var tabi = GetObj("rediannews_" + i);
        var taby = GetObj("redian_a_" + i);
        if (n == i) {
            taby.className = "hover";
            tabi.style.display = "block";
        }
        else {
            taby.className = "";
            tabi.style.display = "none";
        }
    }
}

var yytjcurrentpageid=1;
function yytjtabcontent(n)
{
	if (n==1)
	{
		if(yytjcurrentpageid<3)
		{yytjcurrentpageid++;}
	}
	else
	{
		if(yytjcurrentpageid>1)
		{yytjcurrentpageid--;}
	}
	GetObj("yytj_page").innerHTML=yytjcurrentpageid+"/3";
	yytjtabcontentcurrent(yytjcurrentpageid)
}
function yytjtabcontentcurrent(n)
{
	for(var i=1;i<=3;i++)
	{	
		var tabi=GetObj("yytj_00"+i);

		if(n==i)
		{
			tabi.style.display="block";
		}
		else
		{
			tabi.style.display="none";				
		}
	}
}
currentbbstab=1;
function bbscontentset(n)
{
	if(currentbbstab==1)
	{
	    currentbbstab=2
	}else
	{
	    currentbbstab=1;
	}
	for (var i = 1; i <= 2; i++) {
	    var tabi = $("#div_bbs_" + i);
	    if (currentbbstab == i) {
	        tabi.show();
	    }
	    else {
	        tabi.hide();
	    }
	}
}
currenttab=1;
function shoujiyouxiset(n) {
    if (currenttab == 1) {
        currenttab = 2
    } else {
        currenttab = 1;
    }
    for (var i = 1; i <= 2; i++) {
        var tabi = GetObj("slide_0" + i);
        if (currenttab == i) {
            tabi.style.display = "block";
        }
        else {
            tabi.style.display = "none";
        }
    }
}
	
var currentpageid=1;
function newstabcontent(n)
{
	if (n==1)
	{
		if(currentpageid<5)
		{currentpageid++;}
	}
	else
	{
		if(currentpageid>1)
		{currentpageid--;}
	}
	$("#currentpagetab").html(currentpageid+"/5");
	newstabcontentcurrent(currentpageid,2)
}

//写cookie
function setCookieDig(cookieName,value){
	var time = new Date();
	time.setTime(time.getTime() + 30*60*1000);//30分钟
	document.cookie=cookieName+"="+escape(value)+";expires="+time.toGMTString()  + ";domain=mydrivers.com;path=/";
}
//读cookie
function getCookieDig(cookieName){
   var cookieString = document.cookie;
   var start = cookieString.indexOf(cookieName+"=");
	if (start ==-1) return null;
	start+=cookieName.length+1;
	var end = cookieString.indexOf(';', start);
	if (end == -1) return unescape(cookieString.substring(start));
	else return unescape(cookieString.substring(start, end));
}

 //改变当前的投票数
function change_vote(Tid, typeid) {
    var cookieName = "doc_" + Tid;
    if (!getCookieDig(cookieName)) {
        setCookieDig(cookieName, Tid);
        var url = "http://dt.mydrivers.com/CommentsVoteForJsonp.aspx";
        url += "?Tid=" + Tid + "&tag=1&type=" + typeid + "&callback=?";
        $.ajax({
            url: url,
            dataType: "jsonp",
            jsonpCallback: "NewsVote",
            success: function (data) {
                if (typeid == "0") {
                    $('#news_opp_' + Tid).html(parseInt($('#news_opp_' + Tid).text()) + 1)
                } else {
                    $('#news_support_' + Tid).html(parseInt($('#news_support_' + Tid).text()) + 1)

                }

            }
        });

    } else {//已经投过票
        alert('您已投过票！');
        return;
    }
}

function newstabcontentcurrent(n, z) {
    $("#tab6,#tab7,#tab8,#tab9,#tab1").attr("class", "title_hover");
    $("#tab" + n).attr("class", "title_cursor");
    if (n == 1 && z == 0) {
        currentpageid = 1;
    }
    for (var i = 1; i <= 9; i++) {
        if (n == i) {
            $("#news_content_" + i).show();
        }
        else {
            $("#news_content_" + i).hide();
        }
    }
    if (z == 1) {
        var sb_2 = "<div class=\"prev\" onmouseover=\"this.style.cursor=&#39;pointer&#39;\" ;onmouseout=\"this.style.cursor=&#39;default&#39;\">&lt; 上一页</div>";
        sb_2 = sb_2 + "            <div id=\"currentpagetab\" class=\"location\" onmouseover=\"this.style.cursor=&#39;pointer&#39;\" ;onmouseout=\"this.style.cursor=&#39;de\">1/1</div>";
        sb_2 = sb_2 + "            <div class=\"next\"  onmouseover=\"this.style.cursor=&#39;pointer&#39;\" ;onmouseout=\"this.style.cursor=&#39;default&#39;\">下一页 &gt;</div>";
        $("#news_content_page").html(sb_2);
    } else if (z == 0) {
        var sb_1 = "<div class=\"prev\" onmouseover=\"this.style.cursor=&#39;pointer&#39;\" ;onmouseout=\"this.style.cursor=&#39;default&#39;\" onclick=\"newstabcontent(-1)\">&lt; 上一页</div>";
        sb_1 = sb_1 + "            <div id=\"currentpagetab\" class=\"location\" onmouseover=\"this.style.cursor=&#39;pointer&#39;\" ;onmouseout=\"this.style.cursor=&#39;de\">1/5</div>";
        sb_1 = sb_1 + "            <div class=\"next\"  onmouseover=\"this.style.cursor=&#39;pointer&#39;\" ;onmouseout=\"this.style.cursor=&#39;default&#39;\" onclick=\"newstabcontent(1)\">下一页 &gt;</div>";
        $("#news_content_page").html(sb_1);
    } else { }
}
function listengine(){document.getElementById('engine_list').style.display='block';document.getElementById('engine_icon_arrow').className='icon_arrow_down';} 
function setengine(id) {
    document.getElementById('s_engine').value = id; document.getElementById('engine_list').style.display = 'none';
    document.getElementById('engine_icon_arrow').className = 'icon_arrow';
    if (id == '1') { document.getElementById('engine_logo').className = 'baidu'; }
    else {
        document.getElementById('engine_logo').className = 'google';
    }
}

function mouseoutengine() { var currid = document.getElementById('s_engine').value; if (currid == '1') { setengine(1); } else { setengine(2); } }

function setCookie_dc(name, value) {
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}
function getCookie_dc(name) {
    var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
    if (arr != null)
        return unescape(arr[2]);
    return null;
}

function tuijianrightchange() {

    if (tjrightpage > 5) {
        return;
    }
    var cids = $.cookie("readnewsids");

    if (typeof (cids) != "undefined") {//cookie存在
        $.ajax({
            dataType: "jsonp",
            jsonpCallback: "NewsList",
            url: "http://dt.mydrivers.com/tuijian/tj_www.ashx?cids=" + cids + "&callback=?",
            beforeSend: function (XMLHttpRequest) { },
            success: function (data, textStatus) {
                if (typeof (data) == "undefined") {
                    return;
                }
                if (data.length > 0) {
                    var cid = 0;
                    try {
                        cid = data[tjrightpage].cid;
                    } catch (e) {//循环调用
                        tjrightpage = 0;
                        tuijianrightchange();
                    }

                    if (cid == 0) {
                        return;
                    }

                    var date = new Date();
                    var year = date.getFullYear();
                    var month = date.getMonth() + 1;
                    var day = date.getDate();
                    var hour = date.getHours();
                    var minute = date.getMinutes();
                    
                    var strnow = year.toString() + month.toString() + day.toString() + hour.toString() + minute.toString();

                    $.ajax({
                        type: "get",
                        async: false,
                        url: "/json/tjwww/" + cid + "_like.txt?d=" + strnow,
                        beforeSend: function (XMLHttpRequest) {

                        },
                        success: function (data, textStatus) {

                            tuijianright(eval("(" + data + ")"));

                            tjrightpage++;
                        },
                        complete: function (XMLHttpRequest, textStatus) {

                        },
                        error: function () {
                            //请求出错处理
                        }
                    });

                }
            },
            complete: function (XMLHttpRequest, textStatus) { },
            error: function () { }
        });
    }
}

function tuijian() {
    var cids = $.cookie("readnewsids");

    if (typeof (cids) != "undefined") {//cookie存在
        $.ajax({
            dataType: "jsonp",
            jsonpCallback: "NewsList",
            url: "http://dt.mydrivers.com/tuijian/tj_www.ashx?cids=" + cids + "&callback=?",
            beforeSend: function (XMLHttpRequest) { },
            success: function (data, textStatus) {
                if (typeof (data) == "undefined") {
                    return;
                }
                if (data.length > 0) {

                    var date = new Date();
                    var year = date.getFullYear();
                    var month = date.getMonth() + 1;
                    var day = date.getDate();
                    var hour = date.getHours();
                    var minute = date.getMinutes();

                    var strnow = year.toString() + month.toString() + day.toString() + hour.toString() + minute.toString();

                    for (var i = 0; i < data.length; i++) {
                        var cid = data[i].cid;
                        var cname = data[i].cname;

                        $.ajax({
                            type: "get",
                            async: false,
                            url: "/json/tjwww/" + cid + ".txt?d=" + strnow,
                            beforeSend: function (XMLHttpRequest) {

                            },
                            success: function (data, textStatus) {
                                tuijianleft(cid, cname, i + 1, eval("(" + data + ")"));
                            },
                            complete: function (XMLHttpRequest, textStatus) {

                            },
                            error: function () {
                                //请求出错处理
                            }
                        });
                    }
                }

                tuijianrightchange();
            },
            complete: function (XMLHttpRequest, textStatus) { },
            error: function () { }
        });
    }
}

function tuijianleft(cid, tname, num, tjleft) {
    var str = "";
    for (var i = 0; i < tjleft.length; i++) {
        var url = tjleft[i].url;
        var picurl = tjleft[i].picurl;
        var simtitle = tjleft[i].simtitle;

        var postdate = tjleft[i].postdate;
        var simcontent = tjleft[i].simcontent;

        var date = new Date(postdate);
        var day = date.getDate() + "日";

        if (i == 0) {
            $("#tjleft" + num + "title").html(tname).attr("href", "http://news.mydrivers.com/class/" + cid + "/");
        }

        if (i == tjleft.length - 1) {//带图片的
            var imgnews = "            <div class=\"yjie_left photo\"><a title=\"" + simtitle + "\" href=\"http:\/\/news.mydrivers.com" + url + "\"><img alt=\"" + simtitle + "\" src=\"http:\/\/news.mydrivers.com\/" + picurl + "\" width=\"96\" height=\"70\" \/><\/a><\/div>";
            imgnews += "            <div class=\"yjie_right hui\">";
            imgnews += "              <h3><a title=\"" + simtitle + "\" href=\"http:\/\/news.mydrivers.com" + url + "\">" + simtitle + "<\/a><\/h3>";
            imgnews += "              <a href=\"http:\/\/news.mydrivers.com" + url + "\">" + simcontent + "<\/a><\/div>";
            $("#tjleft" + num + "imgnews").html(imgnews);
        }
        else {
            str += "<li><a title=\"" + simtitle + "\" href=\"http:\/\/news.mydrivers.com" + url + "\">" + simtitle + "<\/a><span  class=\"t1\">" + day + "<\/span><\/li>";
        }
    }
    $("#tjleft" + num + "news").html(str);
}

function tuijianright(tjright) {
    var str = "";
    for (var i = 0; i < tjright.length; i++) {
        var url = tjright[i].url;
        var picurl = tjright[i].picurl;
        var simtitle = tjright[i].simtitle;
        var postdate = tjright[i].postdate;
        var simcontent = tjright[i].simcontent;

        str += "<li>";
        str += "<div class=\"like_left\"><a href=\"http://news.mydrivers.com" + url + "\"><img src=\"http:\/\/news.mydrivers.com\/" + picurl + "\" alt=\"\" width=\"112\" height=\"80\" /></a><a title=\"" + simtitle + "\" href=\"http://news.mydrivers.com" + url + "\"></a></div>";
        str += "<div class=\"like_right\"><span><a title=\"" + simtitle + "\" href=\"http://news.mydrivers.com" + url + "\">" + simtitle + "</a></span><br/>";
        str += "<a href=\"http://news.mydrivers.com" + url + "\">" + simcontent + "</a></div>";
        str += "</li>";
    }
    if (str != "") {
        $("#tjright").html(str);
    }
}

function I_QiChe_Change(oid) {
    $('#sy_class_12,#sy_class_13,#sy_class_14').attr("class", "title_hover");
    $('#list_sy_class_7,#list_sy_class_12,#list_sy_class_13,#list_sy_class_14').hide();
    if ($(oid).attr("id") != "sy_class_7") {
        $(oid).attr("class", "title_cursor");
    }
    $('#list_' + $(oid).attr("id")).show();
}
function I_ShouJi_Change(oid) {
    $('#sy_class_8,#sy_class_9,#sy_class_10,#sy_class_11').attr("class", "title_hover");
    $('#list_sy_class_6,#list_sy_class_8,#list_sy_class_9,#list_sy_class_10,#list_sy_class_11').hide();
    if ($(oid).attr("id") != "sy_class_6") {
        $(oid).attr("class", "title_cursor");
    }
    $('#list_' + $(oid).attr("id")).show();
}
function I_PaiHang(oid, otherid) {
    $('#' + otherid).attr("class", "title_hover");
    $('#' + otherid + '_content').hide();
    $(oid).attr("class", "title_cursor");
    $('#' + $(oid).attr("id") + '_content').show();
}
function I_PingCe_Change(oid) {
    $('#sy_class_2,#sy_class_3,#sy_class_4,#sy_class_5').attr("class", "title_hover");
    $('#list_sy_class_1,#list_sy_class_2,#list_sy_class_3,#list_sy_class_4,#list_sy_class_5').hide();
    if ($(oid).attr("id") != "sy_class_1") {
        $(oid).attr("class", "title_cursor");
    }
    $('#list_' + $(oid).attr("id")).show();
}

function initWeatherInfo() {
    var a = $.cookie(WEATHER_COOKIE_CITY_KEY) || "101010100|北京";
    $("#currCityName").html(a.split("|")[1]), getWeatherInfo(!1)
}
function showSelCitys() {
    if (0 == $("#city_set_ifr").length) {
        var a = '';// DUBA.isHttps ? type = "?type=https&" + DUBA.curr_ver : "?" + DUBA.curr_ver;
        $(".weather").append('<iframe scrolling="no" frameborder="0" allowtransparency="true" id="city_set_ifr" src="city_set_new.html' + a + '" style="display:none;width: 350px;margin:0 auto;"></iframe>')
    }
    $("#city_set_ifr").css("display", "block"), $("#weatherDetailWarp .w-city, #weatherDetail,#weatherLoading").hide()
}
function hideSelCitys() {
    $("#weatherDetailWarp .w-city, #weatherDetail").show(), $("#city_set_ifr, #weatherLoading").hide(), $("#weather_7day").css("visibility", ""), 1 == $("#j-air").data("h") && ($("#j-air").show(), $("#j-air").data("h", null))
}
function getChangeExpires(a) {
    WEATHER_COOKIE_EXPIRES = a;
}
function getWeatherInfo(a) {
    a = void 0 == a ? !1 : a;
    var b = new Date,
		c = b.getFullYear() + "" + (b.getMonth() + 1) + b.getDate() + b.getHours(),
		d = "http://weather.123.duba.net",
		e = "";
    "https:" == location.protocol && (d = "https://" + location.host, e = "type=https");
    var f = $.cookie(WEATHER_COOKIE_CITY_KEY),
		g = f ? f.split("|")[0] : "",
		h = g ? d + "/static/weather_info/" + g + ".html?v=" + c : d + "/weatherinfo/";
    if ("" != e && (h = h.indexOf("?") > -1 ? h + "&" + e : h + "?" + e), $("#weatherDetail").hide(), $("#weatherLoading").show(), 0 == a && "undefined" != typeof w) changeWeatherHtml(w);
    else {
        var i = document.createElement("script");
        i.setAttribute("charset", "utf-8"), i.src = h, i.id = "js_weather", document.body.appendChild(i)
    }
}
function weather_callback(a) {
    if (a && a.weatherinfo) {
        a.t && (server_time = 1e3 * parseInt(a.t, 10));
        var b = a.weatherinfo;
        changeWeatherHtml(a);
        var c = $.cookie(WEATHER_COOKIE_CITY_KEY),
			d = c ? c.split("|")[0] : "";
        d != b.cityid && $.cookie(WEATHER_COOKIE_CITY_KEY, b.cityid + "|" + b.city, {
            expires: WEATHER_COOKIE_EXPIRES,
            path: "/",
            domain:'mydrivers.com'
        })
    }
}
function changeWeatherHtml(a) {
    var b = a.weatherinfo;
    $("#currCityName").html(b.city.substring(0, 4)), $("#weather_7day").attr("href", "http://www.duba.com/tianqiyubao.html?cityid=" + b.cityid), $("#weather_7day").css("visibility", "");
    for (var c = 1; 3 > c; c++) {
        var d = $("#w-day" + c);
        if (d.length) {
            d.attr("href", "http://www.duba.com/tianqiyubao.html?cityid=" + b.cityid);
            var e = 2 * c - 1,
				f = 99 == b["img" + e] ? b["img" + (e - 1)] : b["img" + e],
				g = "http://www.duba.com/static/v2/images/weather/a/a",
				h = "background:url(" + g + f + ".png) no-repeat center center;_background:none; _filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=" + g + f + ".png);";
            d.find("img").attr("style", h);
            var i = b["temp" + c];
            i = i.replace(/~/, "&nbsp;~&nbsp;"), i = i.replace(/℃/, ""), i = i.replace(/℃/, ""), d.attr({
                title: b["weather" + c],
                href: "http://www.duba.com/tianqiyubao.html?cityid=" + b.cityid
            });
            var j = b["weather" + c];
            if (1 == c && (1 == $.cookie("twflag") || null == $.cookie("tips_w"))) {
                1 == $.cookie("twflag") && $.cookie("tips_w", null);
                var k = "";
                if (f >= 3 && 9 >= f || 19 == f || 21 == f || 22 == f ? k = "<a href='/go.html?f=tianqitip1&url=http://t.cn/zYPfqgs'>今天有雨，记得带伞哦</a>" : f >= 10 && 12 >= f || f >= 23 && 25 >= f ? k = "<a href='/go.html?f=tianqitip2&url=http://t.cn/zYPfqgs'>暴雨天气，请注意安全</a>" : f >= 13 && 16 >= f || 26 == f || 27 == f ? k = "<a href='/go.html?f=tianqitip3&url=http://t.cn/zYPfgNq'>今天有雪，注意保暖哦</a>" : 17 == f || 28 == f ? k = "<a href='/go.html?f=tianqitip4&url=http://t.cn/zYPfgNq'>暴雪天气，请注意安全</a>" : (20 == f || 31 == f) && (k = "<a href='/go.html?f=tianqitip5&url=http://t.cn/zYPIvf4'>沙尘天气，记得戴口罩</a>"), b["pm-num"] && (b["pm-level"] = b["pm-num"]), b.pm && b["pm-level"]) {
                    var l = "air_bad",
						m = "",
						n = "";
                    1 == b["pm-level"] ? (l = "air_you", m = "优", n = "PM2.5空气污染指数：" + b.pm + "\n今天空气质量很好，大家可以到户外走走，呼吸一下新鲜空气，放松一下心情。") : 2 == b["pm-level"] ? (l = "air_liang", m = "良", n = "PM2.5空气污染指数：" + b.pm + "\n今天空气质量可以接受，除少数异常敏感体质的人群外，大家可在户外正常活动。") : 3 == b["pm-level"] ? (l = "air_qingdu", m = "轻度", n = "PM2.5空气污染指数：" + b.pm + "\n轻度污染的天气，易敏感人群在户外活动时间不宜过长，以免吸入过多大气污染物。") : 4 == b["pm-level"] ? (m = "中度", n = "PM2.5空气污染指数：" + b.pm + "\n中度污染的天气，外出应佩戴口罩，并及时将附着在身体上的霾清理掉。") : 5 == b["pm-level"] ? (m = "重度", n = "PM2.5空气污染指数：" + b.pm + "\n重度污染的天气，有害物质可能会吸入体内，大家应尽量减少户外活动，更不要剧烈运动。") : (m = "严重", n = "PM2.5空气污染指数：" + b.pm + "\n严重污染的天气，容易诱发呼吸道疾病，要尽量避免户外活动，留在室内并关好门窗。"), $("#top_weather").show(), "air_you" == l || "air_liang" == l ? $("#j-air").prev().html("空气质量:") : $("#j-air").prev().html("空气污染:"), $("#j-air").html(m).attr("href", "http://www.duba.com/tianqiyubao.html?cityid=" + b.cityid).attr("title", n).removeClass().addClass("air_bg " + l).show()
                } else b.wind1 && "" != b.wind1 && b.wd && (m = b.wind1.match(/(\d\-\d)|(\d)/g) ? b.wd + " : " + b.wind1.match(/(\d\-\d)|(\d)/g)[0] + "级" : b.wd + " : " + b.wind1, $("#j-air").html(m).attr("href", "http://www.duba.com/tianqiyubao.html?cityid=" + b.cityid).attr("title", n).removeClass().addClass("no").show(), $("#j-air").prev().html(""))
            }
            if (j.length >= 3) {
                var o = j.lastIndexOf("转");
                o > 0 && (j = j.substring(0, o))
            }
            j = j.replace("雷阵雨", "阵雨"), j = j.replace("中到", ""), j = j.replace("小到", ""), j = j.replace("大到", ""), j = j.replace("雨夹雪", "雨雪"), j.length >= 3 && (j = j.substring(0, 2)), d.find("b").eq(0).find("span").html(j), d.find("em").eq(0).html(i + "℃")
        }
    }
    $("#weatherLoading").hide(), $("#weatherDetail").show();
    var p = 0;
    $.cookie("twflag") && (p = 1, $.cookie("twflag", null))
}


(function () {

    //初始化天气
    var server_time = (new Date).getTime();
    $.cookie("cstd") && (server_time += parseInt($.cookie("cstd"), 10));
    try {
        initWeatherInfo(), $("#js_qh_tq,#currentCity").click(function (a) {
            $("#js-tips-weather").hide(), "block" == $("#j-air").css("display") && $("#j-air").data("h", 1).hide(), showSelCitys(), $("#weather_7day").css("visibility", "hidden"), a.preventDefault()
        })
    } catch (e) { }

    //初始化调查
    $("#ul_diaocha li").each(function () {
        var subid = $(this).parent().attr("data");
        var subname = $(this).parent().attr("dataname");
        var obj = $(this);
        var id = obj.attr("data");
        $(this).click(function () {
            var _getCookie = getCookie_dc("Vote_" + subid + "_" + id);
            if (_getCookie != null) {
                alert('您已经投过票！');
                return;
            }
            var num = obj.find("em").html();
            obj.find("em").html(parseInt(num) + 1);

            obj.css("position", "relative").append($("<div>", {
                css: {
                    font: "600 30px/34px '黑体'",
                    color: "#c00",
                    position: "absolute",
                    display: "none",
                    top: 0,
                    left: 10
                },
                text: "+1"
            })).find("> div").css("display", "block").animate({ top: [-50, "swing"] }, 300, function () { $(this).fadeOut(300) });
            $(window.frames["iframe1"].document).find("#SubjectId").val(subid);
            $(window.frames["iframe1"].document).find("#i_diaochakey").val(id);
            $(window.frames["iframe1"].document).find("#i_diaochakey").attr("name", subname);
            $(window.frames["iframe1"].document).find("#form2").submit();
            $.ajax({
                dataType: "jsonp",
                jsonpCallback: "GetDiaocCha",
                url: "http://dt.mydrivers.com/diaocha/getdiaocha.aspx?voteid=" + subid + "&callback=?",
                beforeSend: function (XMLHttpRequest) { },
                success: function (data, textStatus) {
                },
                complete: function (XMLHttpRequest, textStatus) { },
                error: function () {
                }
            });
            setCookie_dc("Vote_" + subid + "_" + id, "yes");
        });
    });
 
    $("#sele_list_0,#sele_list_1,#sele_list_2,#sele_list_3,#sele_list_4").click(function () { $("#sele_list_all").show(); });

    $("#i_down_android").mouseover(function () { $('#i_down_apk_menu_list').show(); });
    $("#i_down_android").mouseout(function () { $('#i_down_apk_menu_list').hide(); });


    $(".shidian_s_tu2 li").hover(function () {
        $(this).find("em").css('display', 'block');
    }, function () {
        $(this).find("em").css('display', 'none');
    });

    $(".news_tj_left1").hover(function () {
        $(this).find("em").css('display', 'block');
    }, function () {
        $(this).find("em").css('display', 'none');
    });

    $(".yytj1 li").hover(function () {
        $(this).find("em").css('display', 'block');
    }, function () {
        $(this).find("em").css('display', 'none');
    });

    $(".tel_yx_tu li").hover(function () {
        $(this).find("em").css('display', 'block');
    }, function () {
        $(this).find("em").css('display', 'none');
    });

    InitUser();
    //绑定悬浮登录框事件
    $("#a_login").click(function () {
        ShowLogin();
    });
    //绑定登录按钮事件,右上角
    $("#img_btnlogin").click(function () {
        check_login();
    });
    //绑定sina登录按钮事件
    $("#a_sina,#div_sina").click(function () {
        window.location.href = "http://passport.mydrivers.com/weibo/sinaweibo.aspx?reurl=" + my_return_url;
        return false;
    });
    //绑定qq登录按钮事件
    $("#a_qq,#div_qq").click(function () {
        window.location.href = "http://passport.mydrivers.com/qq/qqlogin.aspx?reurl=" + my_return_url;
        return false;
    });
	 $("#a_fankui").click(function () {
        ShowFankui();
    });
    //绑定登录按钮事件,右上角
    $("#img_btnfankui").click(function () {
        check_fankui();
    });

    tuijian();

})();
 function reload_loginyzm() 
 {
            $("#img_loginyzm").show().attr("src", "http://passport.mydrivers.com/modules/yanzhengma.aspx?" + Math.random());
 }
 function show_loginyzm() {
            $("#span_loginyzm").show();
            reload_loginyzm();
}
