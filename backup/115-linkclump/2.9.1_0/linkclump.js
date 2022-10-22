const END_KEYCODE = 35;
const HOME_KEYCODE = 36;
const Z_INDEX = 2147483647;
const OS_WIN = 1;
const OS_LINUX = 0;
const LEFT_BUTTON = 0;
const EXCLUDE_LINKS = 0;
const INCLUDE_LINKS = 1;

var settings = null;
var setting = -1;
var key_pressed = 0;
var mouse_button = null;
var stop_menu = false;
var box_on = false;
var smart_select = false;
var mouse_x = -1;
var mouse_y = -1;
var scroll_id = 0;
var links = [];
var box = null;
var count_label = null;
var overlay = null;
var scroll_bug_ignore = false;
var os = ((navigator.appVersion.indexOf("Win") === -1) ? OS_LINUX : OS_WIN);
var timer = 0;

chrome.extension.sendMessage({
	message: "init"
}, function(response) {
	if (response === null) {
		console.log("Unable to load linkclump due to null response");
	} else {
		if (response.hasOwnProperty("error")) {
			console.log("Unable to properly load linkclump, returning to default settings: " + JSON.stringify(response));
		}

		settings = response.actions;

		var allowed = true;
		for (var i in response.blocked) {
			if (response.blocked[i] == "") continue;
			var re = new RegExp(response.blocked[i], "i");

			if (re.test(window.location.href)) {
				allowed = false;
				console.log("Linkclump is blocked on this site: " + response.blocked[i] + "~" + window.location.href);
			}
		}

		if (allowed) {
			window.addEventListener("mousedown", this.mousedown, true);
			window.addEventListener("keydown", this.keydown, true);
			window.addEventListener("keyup", this.keyup, true);
			window.addEventListener("blur", this.blur, true);
			window.addEventListener("contextmenu", this.contextmenu, true);
		}
	}
});

chrome.extension.onMessage.addListener(function(request, sender, callback) {
	if (request.message === "update") {
		this.settings = request.settings.actions;
	}
});

function mousemove(event) {
	this.prevent_escalation(event);

	if (this.allow_selection() || this.scroll_bug_ignore) {
		this.scroll_bug_ignore = false;
		this.update_box(event.pageX, event.pageY);

		// while detect keeps on calling false then recall the method
		while (!this.detech(event.pageX, event.pageY, false)) {
			// empty
		}
	} else {
		// only stop if the mouseup timer is no longer set
		if (this.timer === 0) {
			this.stop();
		}
	}
}

function clean_up() {
	// remove the box
	box.style.visibility = "hidden";
	count_label.style.visibility = "hidden";
	box_on = false;

	// remove the link boxes
	for (var i = 0; i < this.links.length; i++) {
		if (this.links[i].box !== null) {
			document.body.removeChild(this.links[i].box);
			this.links[i].box = null;
		}
	}
	this.links = [];

	// wipe clean the smart select
	this.smart_select = false;
	this.mouse_button = -1;
	this.key_pressed = 0;
}

function mousedown(event) {
	mouse_button = event.button;

	// turn on menu for windows
	if (os === OS_WIN) {
		stop_menu = false;
	}

	if (allow_selection()) {
		// don't prevent for windows right click as it breaks spell checker
		// do prevent for left as otherwise the page becomes highlighted
		if (os === OS_LINUX || (os === OS_WIN && mouse_button === LEFT_BUTTON)) {
			prevent_escalation(event);
		}

		// if mouse up timer is set then clear it as it was just caused by bounce
		if (timer !== 0) {
			//console.log("bounced!");
			clearTimeout(timer);
			timer = 0;

			// keep menu off for windows
			if (os === OS_WIN) {
				stop_menu = true;
			}
		} else {
			// clean up any mistakes
			if (box_on) {
				console.log("box wasn't removed from previous operation");
				clean_up();
			}

			// create the box
			if (this.box === null) {
				this.box = document.createElement("span");
				this.box.style.margin = "0px auto";
				this.box.style.border = "2px dotted" + this.settings[this.setting].color;
				this.box.style.position = "absolute";
				this.box.style.zIndex = Z_INDEX;
				this.box.style.visibility = "hidden";

				count_label = document.createElement("span");
				count_label.style.zIndex = Z_INDEX;
				count_label.style.position = "absolute";
				count_label.style.visibility = "hidden";
				count_label.style.left = "10px";
				count_label.style.width = "50px";
				count_label.style.top = "10px";
				count_label.style.height = "20px";
				count_label.style.fontSize = "10px";
				count_label.style.font = "Arial, sans-serif";
				count_label.style.color = "black";

				document.body.appendChild(box);
				document.body.appendChild(count_label);

			}

			// update position
			this.box.x = event.pageX;
			this.box.y = event.pageY;
			this.update_box(event.pageX, event.pageY);

			// setup mouse move and mouse up
			window.addEventListener("mousemove", mousemove, true);
			window.addEventListener("mouseup", mouseup, true);
			window.addEventListener("mousewheel", mousewheel, true);
			window.addEventListener("mouseout", mouseout, true);
		}
	}
}

function update_box(x, y) {
	var width = Math.max(document.documentElement["clientWidth"], document.body["scrollWidth"], document.documentElement["scrollWidth"], document.body["offsetWidth"], document.documentElement["offsetWidth"]); // taken from jquery
	var height = Math.max(document.documentElement["clientHeight"], document.body["scrollHeight"], document.documentElement["scrollHeight"], document.body["offsetHeight"], document.documentElement["offsetHeight"]); // taken from jquery
	x = Math.min(x, width - 7);
	y = Math.min(y, height - 7);

	if (x > this.box.x) {
		this.box.x1 = this.box.x;
		this.box.x2 = x;
	} else {
		this.box.x1 = x;
		this.box.x2 = this.box.x;
	}
	if (y > this.box.y) {
		this.box.y1 = this.box.y;
		this.box.y2 = y;
	} else {
		this.box.y1 = y;
		this.box.y2 = this.box.y;
	}

	this.box.style.left = this.box.x1 + "px";
	this.box.style.width = this.box.x2 - this.box.x1 + "px";
	this.box.style.top = this.box.y1 + "px";
	this.box.style.height = this.box.y2 - this.box.y1 + "px";

	count_label.style.left = x - 15 + "px";
	count_label.style.top = y - 15 + "px";
}

function mousewheel() {
	this.scroll_bug_ignore = true;
}

function mouseout(event) {
	this.mousemove(event);
	// the mouse wheel event might also call this event
	this.scroll_bug_ignore = true;
}

function prevent_escalation(event) {
	event.stopPropagation();
	event.preventDefault();
}

function mouseup(event) {
	this.prevent_escalation(event);

	if (this.box_on) {
		// all the detection of the mouse to bounce
		if (this.allow_selection() && this.timer === 0) {
			this.timer = setTimeout(function() {
				this.update_box(event.pageX, event.pageY);
				this.detech(event.pageX, event.pageY, true);

				this.stop();
				this.timer = 0;
			}, 100);
		}
	} else {
		// false alarm
		this.stop();
	}
}

function getXY(element) {
	var x = 0;
	var y = 0;

	var parent = element;
	var style;
	var matrix;
	do {
		style = window.getComputedStyle(parent);
		matrix = new WebKitCSSMatrix(style.webkitTransform);
		x += parent.offsetLeft + matrix.m41;
		y += parent.offsetTop + matrix.m42;
	} while (parent = parent.offsetParent);

	parent = element;
	while (parent && parent !== document.body) {
		if (parent.scrollleft) {
			x -= parent.scrollLeft;
		}
		if (parent.scrollTop) {
			y -= parent.scrollTop;
		}
		parent = parent.parentNode;
	}

	return {
		x: x,
		y: y
	};
}

function start() {
	// stop user from selecting text/elements
	document.body.style.khtmlUserSelect = "none";

	// turn on the box
	this.box.style.visibility = "visible";
	this.count_label.style.visibility = "visible";

	// find all links (find them each time as they could have moved)
	var page_links = document.links;

	// create RegExp once
	var re1 = new RegExp("^javascript:", "i");
	var re2 = new RegExp(this.settings[this.setting].options.ignore.slice(1).join("|"), "i");
	var re3 = new RegExp("^H\\d$");

	for (var i = 0; i < page_links.length; i++) {
		// reject javascript: links
		if (re1.test(page_links[i].href)) {
			continue;
		}

		// reject href="" or href="#"
		if (!page_links[i].getAttribute("href") || page_links[i].getAttribute("href") === "#") {
			continue;
		}

		// include/exclude links
		if (this.settings[this.setting].options.ignore.length > 1) {
			if (re2.test(page_links[i].href) || re2.test(page_links[i].innerHTML)) {
				if (this.settings[this.setting].options.ignore[0] == EXCLUDE_LINKS) {
					continue;
				}
			} else if (this.settings[this.setting].options.ignore[0] == INCLUDE_LINKS) {
				continue;
			}
		}

		// attempt to ignore invisible links (can't ignore overflow)
		var comp = window.getComputedStyle(page_links[i], null);
		if (comp.visibility == "hidden" || comp.display == "none") {
			continue;
		}

		var pos = this.getXY(page_links[i]);
		var width = page_links[i].offsetWidth;
		var height = page_links[i].offsetHeight;

		// attempt to get the actual size of the link
		for (var k = 0; k < page_links[i].childNodes.length; k++) {
			if (page_links[i].childNodes[k].nodeName == "IMG") {
				const pos2 = this.getXY(page_links[i].childNodes[k]);
				if (pos.y >= pos2.y) {
					pos.y = pos2.y;

					width = Math.max(width, page_links[i].childNodes[k].offsetWidth);
					height = Math.max(height, page_links[i].childNodes[k].offsetHeight);
				}
			}
		}

		page_links[i].x1 = pos.x;
		page_links[i].y1 = pos.y;
		page_links[i].x2 = pos.x + width;
		page_links[i].y2 = pos.y + height;
		page_links[i].height = height;
		page_links[i].width = width;
		page_links[i].box = null;
		page_links[i].important = this.settings[this.setting].options.smart == 0 && page_links[i].parentNode != null && re3.test(page_links[i].parentNode.nodeName);

		this.links.push(page_links[i]);
	}

	this.box_on = true;

	// turn off menu for windows so mouse up doesn't trigger context menu
	if (os === OS_WIN) {
		this.stop_menu = true;
	}
}

function stop() {
	// allow user to select text/elements
	document.body.style.khtmlUserSelect = "";

	// turn off mouse move and mouse up
	window.removeEventListener("mousemove", this.mousemove, true);
	window.removeEventListener("mouseup", this.mouseup, true);
	window.removeEventListener("mousewheel", this.mousewheel, true);
	window.removeEventListener("mouseout", this.mouseout, true);

	if (this.box_on) {
		this.clean_up();
	}

	// turn on menu for linux
	if (os === OS_LINUX && this.settings[this.setting].key != this.key_pressed) {
		this.stop_menu == false;
	}
}

function scroll() {
	if (this.allow_selection()) {
		var y = this.mouse_y - window.scrollY;
		var win_height = window.innerHeight;

		if (y > win_height - 20) { //down
			let speed = win_height - y;
			if (speed < 2) {
				speed = 60;
			} else if (speed < 10) {
				speed = 30;
			} else {
				speed = 10;
			}
			window.scrollBy(0, speed);
			this.mouse_y += speed;
			this.update_box(this.mouse_x, this.mouse_y);
			this.detech(this.mouse_x, this.mouse_y, false);

			this.scroll_bug_ignore = true;
			return;
		} else if (window.scrollY > 0 && y < 20) { //up
			let speed = y;
			if (speed < 2) {
				speed = 60;
			} else if (speed < 10) {
				speed = 30;
			} else {
				speed = 10;
			}
			window.scrollBy(0, -speed);
			this.mouse_y -= speed;
			this.update_box(this.mouse_x, this.mouse_y);
			this.detech(this.mouse_x, this.mouse_y, false);

			this.scroll_bug_ignore = true;
			return;
		}
	}

	clearInterval(this.scroll_id);
	this.scroll_id = 0;
}


function detech(x, y, open) {
	this.mouse_x = x;
	this.mouse_y = y;

	if (!this.box_on) {
		if (this.box.x2 - this.box.x1 < 5 && this.box.y2 - this.box.y1 < 5) {
			return true;
		} else {
			this.start();
		}

	}

	if (!this.scroll_id) {
		this.scroll_id = setInterval(scroll, 100);
	}

	var count = 0;
	var count_tabs = new Set;
	var open_tabs = [];
	for (var i = 0; i < this.links.length; i++) {
		if ((!this.smart_select || this.links[i].important) && !(this.links[i].x1 > this.box.x2 || this.links[i].x2 < this.box.x1 || this.links[i].y1 > this.box.y2 || this.links[i].y2 < this.box.y1)) {
			if (open) {
				open_tabs.push({
					"url": this.links[i].href,
					"title": this.links[i].innerText
				});
			}

			// check if important links have been selected and possibly redo
			if (!this.smart_select) {
				if (this.links[i].important) {
					this.smart_select = true;
					return false;
				}
			} else {
				if (this.links[i].important) {
					count++;
				}
			}

			if (this.links[i].box === null) {
				var link_box = document.createElement("span");
				link_box.style.id = "linkclump-link";
				link_box.style.margin = "0px auto";
				link_box.style.border = "1px solid red";
				link_box.style.position = "absolute";
				link_box.style.width = this.links[i].width + "px";
				link_box.style.height = this.links[i].height + "px";
				link_box.style.top = this.links[i].y1 + "px";
				link_box.style.left = this.links[i].x1 + "px";
				link_box.style.zIndex = Z_INDEX;

				document.body.appendChild(link_box);
				this.links[i].box = link_box;
			} else {
				this.links[i].box.style.visibility = "visible";
			}

			count_tabs.add(this.links[i].href);
		} else {
			if (this.links[i].box !== null) {
				this.links[i].box.style.visibility = "hidden";
			}
		}
	}

	// important links were found, but not anymore so redo
	if (this.smart_select && count === 0) {
		this.smart_select = false;
		return false;
	}

	count_label.innerText = count_tabs.size;

	if (open_tabs.length > 0) {
		chrome.extension.sendMessage({
			message: "activate",
			urls: open_tabs,
			setting: this.settings[this.setting]
		});
	}

	return true;
}

function allow_key(keyCode) {
	for (var i in this.settings) {
		if (this.settings[i].key == keyCode) {
			return true;
		}
	}
	return false;
}


function keydown(event) {
	if (event.keyCode != END_KEYCODE && event.keyCode != HOME_KEYCODE) {
		this.key_pressed = event.keyCode;
		// turn menu off for linux
		if (os === OS_LINUX && this.allow_key(this.key_pressed)) {
			this.stop_menu = true;
		}
	} else {
		this.scroll_bug_ignore = true;
	}
}

function blur() {
	remove_key();
}

function keyup(event) {
	if (event.keyCode != END_KEYCODE && event.keyCode != HOME_KEYCODE) {
		remove_key();
	}
}

function remove_key() {
	// turn menu on for linux
	if (os === OS_LINUX) {
		this.stop_menu = false;
	}
	this.key_pressed = 0;
}


function allow_selection() {
	for (var i in this.settings) {
		// need to check if key is 0 as key_pressed might not be accurate
		if (this.settings[i].mouse == this.mouse_button && this.settings[i].key == this.key_pressed) {
			this.setting = i;
			if (this.box !== null) {
				this.box.style.border = "2px dotted " + this.settings[i].color;
			}
			return true;
		}
	}
	return false;
}

function contextmenu(event) {
	if (this.stop_menu) {
		event.preventDefault();
	}
}
