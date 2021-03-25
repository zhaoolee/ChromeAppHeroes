HTMLDocument.prototype.on = HTMLDocument.prototype.addEventListener;
HTMLDocument.prototype.qq = HTMLDocument.prototype.querySelector;
HTMLDocument.prototype.qqq = function(selector){
	return Array.from(this.querySelectorAll(selector));
};
HTMLElement.prototype.on = HTMLElement.prototype.addEventListener;
HTMLElement.prototype.qq = HTMLElement.prototype.querySelector;
HTMLElement.prototype.qqq = function(selector){
	return Array.from(this.querySelectorAll(selector));
};

function qq(t){return document.qq(t);}

function qqq(t){return document.qqq(t);}

HTMLElement.prototype.top = function(){
	let el = this;
	let top = el.offsetTop;
	while(el.offsetParent) {
		el = el.offsetParent;
		top += el.offsetTop;
	}
	return top;
};
HTMLElement.prototype.left = function(){
	let el = this;
	let left = el.offsetLeft;
	while(el.offsetParent) {
		el = el.offsetParent;
		left += el.offsetLeft;
	}
	return left;
};

Array.prototype.rand = function(){
    if(this.length){
        return this[rand(0, this.length-1)];
    }
};

HTMLElement.prototype._fireEvent = function(eventType){
	let event = new Event(eventType, { bubbles: true });
	event.simulated = true;
	this.dispatchEvent(event);
};

HTMLElement.prototype.realClick = async function(){
	this._fireEvent('mousedown');
	await sleep(rand(40, 70));
	this._fireEvent('mouseup');
	try{
		this.click();
	}catch(e){}
};

HTMLElement.prototype.typeText = async function(text, delay = 200){
	text = ("" + text);
	
	await this.realClick();
	this.focus();
	this._fireEvent('focus');
	await sleep(rand(800, 1200));
	
	for(let i=0; i<=text.length; i++){
		this._fireEvent('keydown');
		this.value = text.substr(0, i);
		await sleep(rand(40, 70));
		this._fireEvent('keyup');
		this._fireEvent('keypress');
		this._fireEvent('input');
		
		if(text[i] == " " && prob(50)){
			await sleep(rand(800, 1200));
		}
		await sleep(delay * (rand(30, 250) / 100));
	}
};

function el(t, p = []){
	let el = document.createElement(t);
	for(let k in p){
		if(k == "innerText" || k == "innerHTML"){
			el[k] = p[k];
		}else if(k == "children"){
			p[k].forEach((c) => {
				el.appendChild(c);
			});
		}else{
			el.setAttribute(k, p[k]);
		}
	}
	return el;
}

function rand(mi, ma){return Math.floor(Math.random() * (ma - mi + 1) + mi);};

function uuid(){
	function n(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)};
	return n()+n()+"-"+n()+"-"+n()+"-"+n()+"-"+n()+n()+n()
}

function sleep(t){
	return new Promise((ok)=>{setTimeout(ok, t)});
}

const injectJs = type => src => {
	const target = document.head || document.documentElement;
	const script = document.createElement("script");
	if(type == "code"){
		script.innerHTML = src;
	}else{
		script.src = src + (src.includes("?") ? "&" : "?") + "_r=" + Math.random().toString().substr(2);
	}
	target.appendChild(script);
};

const injectCSS = type => src => {
	const target = document.head || document.documentElement;
	let element;
	if(type == "code"){
		element = document.createElement("style");
		element.innerHTML = src;
	}else{
		element = document.createElement("link");
		element.rel = "stylesheet";
		element.href = src + (src.includes("?") ? "&" : "?") + "_r=" + Math.random().toString().substr(2);
	}
	target.appendChild(element);
};
