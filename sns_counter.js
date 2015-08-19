
(function(d) {
	
	var defaultContainerName = "im_sns_counter_js_container";
	var url = getQueryVar("url");
	var docTitle = d.title;
	
	function getQueryVar(str) {
		var s = d.getElementById("im_sns_counter_js").src.split("?")[1];
		var q = {};
		var queries = s.split("&");
		var i = 0;
		if (!s) {
			return null;
		}
		for (i; i < queries.length; i++) {
			var t = queries[i].split("=");
			q[t[0]] = t[1];
		}
		return q[str]
	}
	
	function addScript(tar, src) {
		var t = typeof tar === "string" ? d.getElementById(tar) : tar;
		var e = d.createElement("script");
		e.src = src;
		e.charset = "utf-8";
		e.async = "async";
		e.defer = "defer";
		t.appendChild(e);
	}
	
	(function (url) {
		
		var id = defaultContainerName;
		var body = d.getElementsByTagName("body")[0];
		var container;
		var close;
		
		container = d.createElement("div")
		container.id = id;
		container.style.position = "fixed";
		container.style.top = "20px";
		container.style.right = "20px";
		container.style.zIndex = "10000";
		container.style.width = "110px";
		container.style.padding = "45px 30px 30px";
		container.style.textAlign = "left";
		container.style.boxShadow = "0 2px 5px rgba(0,0,0,0.2)";
		container.style.boxSizing = "content-box";
		container.style.background = "rgba(255,255,255,0.9)";
		container.style.borderRadius = "5px";
		
		close = d.createElement("div");
		close.innerHTML = "&#x2715;";
		close.style.width = "24px";
		close.style.height = "24px";
		close.style.borderRadius = "50%";
		close.style.position = "absolute";
		close.style.top = "10px";
		close.style.right = "10px";
		close.style.color = "#555";
		close.style.fontSize = "20px";
		close.style.fontFamily = "helvetica";
		close.style.fontWeight = "normal";
		close.style.lineHeight = "20px";
		close.style.textAlign = "center";
		close.style.cursor = "pointer";
		close.addEventListener("click", function() {
			d.getElementById(defaultContainerName).style.display = "none";
		});
		
		body.appendChild(container);
		
		var hatena    = '<div style="display: inline-block; margin-bottom: 15px;"><a href="http://b.hatena.ne.jp/entry/' + url + '" class="hatena-bookmark-button" data-hatena-bookmark-title="' + docTitle + '" data-hatena-bookmark-layout="standard-balloon" data-hatena-bookmark-lang="ja" title="このエントリーをはてなブックマークに追加"><img src="https://b.st-hatena.com/images/entry-button/button-only@2x.png" alt="このエントリーをはてなブックマークに追加" width="20" height="20" style="border: none;" /></a></div>';
		var twitter   = '<div style="display: inline-block; margin-bottom: 15px;"><a href="https://twitter.com/share" class="twitter-share-button" data-via="">Tweet</a></div>';
		var facebook  = '<div style="display: inline-block; margin-bottom: 15px; line-height: 0.5;"><div id="fb-root"></div><div class="fb-like" data-layout="button_count" data-action="like" data-show-faces="false" data-share="false"></div></div>';
		var plusone   = '<div style="display: inline-block; margin-bottom: 15px;"><div class="g-plusone"></div></div>';
		var pocket    = '<div style="display: inline-block; margin-bottom: 15px;"><a data-pocket-label="pocket" data-pocket-count="horizontal" class="pocket-btn" data-lang="en"></a></div>';
		var pinterest = '<div style="display: inline-block; margin-bottom: 15px;"><a href="//www.pinterest.com/pin/create/button/" data-pin-do="buttonBookmark" data-pin-config="beside" data-pin-color="red"><img src="//assets.pinterest.com/images/pidgets/pinit_fg_en_rect_red_20.png" /></a></div>';
		var tumblr    = '<div style="display: inline-block; margin-bottom: 15px;"><a class="tumblr-share-button" data-color="blue" data-notes="right" href="https://embed.tumblr.com/share"></a></div>';
		var linkedin  = '<div style="display: inline-block; margin-bottom: 0;" id="im-sns-counter-js-linkedin"></div>';
		
		container.innerHTML = hatena + twitter + facebook + plusone + pocket + pinterest + tumblr + linkedin;
		container.appendChild(close);
		
		addScript(container, "//b.st-hatena.com/js/bookmark_button.js");
		addScript(container, "//apis.google.com/js/platform.js");
		addScript(container, "//assets.pinterest.com/js/pinit.js");
		addScript("im-sns-counter-js-linkedin", "//platform.linkedin.com/in.js");
		
		// Twitter
		(function(d, s, id) {
			var js
			var fjs = d.getElementsByTagName(s)[0]
			var p = /^http:/.test(d.location) ? 'http' : 'https';
			if (!d.getElementById(id)) {
				js = d.createElement(s);
				js.id = id;
				js.src = p + '://platform.twitter.com/widgets.js';
				fjs.parentNode.insertBefore(js,fjs);
			}
		})(d, 'script', 'twitter-wjs');
		
		// Facebook
		(function(d, s, id) {
			var js;
			var fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) return;
			js = d.createElement(s); js.id = id;
			js.src = "//connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v2.0";
			fjs.parentNode.insertBefore(js, fjs);
			
		})(d, 'script', 'facebook-jssdk');
		
		// Pocket
		(function (d, i) {
			if (!d.getElementById(i)) {
				var j = d.createElement("script");
				j.id = i;
				j.src = "https://widgets.getpocket.com/v1/j/btn.js?v=1";
				var w = d.getElementById(i);
				d.body.appendChild(j);
			}
		})(d, "pocket-btn-js");
		
		// Tumblr
		(function(d, s, id){
			var js;
			var ajs = d.getElementsByTagName(s)[0];
			if (!d.getElementById(id)) {
				js = d.createElement(s);
				js.id = id;
				js.src = "https://secure.assets.tumblr.com/share-button.js";
				ajs.parentNode.insertBefore(js,ajs);
			}
		})(d, "script", "tumblr-js");
		
		
		// Linkedin
		(function(d, s, id, c){
			var js;
			if (!d.getElementById(id)) {
				s = d.createElement(s);
				s.id = id;
				s.type = "IN/Share";
				s.setAttribute("data-url", url);
				s.setAttribute("data-counter", "right");
				c.appendChild(s);
			}
		})(d, "script", "im-sns-counter-linkedin-elm", container);
		
	})(url);
	
})(document);
