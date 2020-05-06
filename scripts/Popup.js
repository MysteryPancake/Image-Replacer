"use strict";

function save() {
	chrome.storage.sync.set({
		enabled: document.getElementById("enabled").checked,
		url: document.getElementById("url").value
	}, function() {
		document.getElementById("submit").value = "Saved";
	});
}

function restore() {
	chrome.storage.sync.get({
		enabled: false,
		url: ""
	}, function(items) {
		document.getElementById("enabled").checked = items.enabled;
		document.getElementById("url").value = items.url;
	});
}

function changed() {
	document.getElementById("submit").value = "Save";
}

function enter(e) {
	if (e.keyCode === 13) {
		e.preventDefault();
		save();
	}
}

document.addEventListener("DOMContentLoaded", restore);
document.getElementById("submit").addEventListener("click", save);
document.getElementById("enabled").addEventListener("click", changed);
document.getElementById("url").addEventListener("input", changed);
document.getElementById("url").addEventListener("keydown", enter);
