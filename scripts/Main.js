"use strict";

chrome.storage.sync.get({
	enabled: false,
	url: ""
}, function(items) {
	if (items.enabled) {
		var css = document.createElement("style");
		css.type = "text/css";
		css.innerHTML = "img { content: url(\"" + items.url + "\") !important; }";
		document.body.appendChild(css);
		var images = document.getElementsByTagName("img");
		for (var i = 0; i < images.length; i++) {
			images[i].src = items.url;
		}
	}
});