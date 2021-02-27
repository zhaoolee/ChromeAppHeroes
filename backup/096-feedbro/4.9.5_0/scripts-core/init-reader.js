var feedbroengine = new feedbro.Engine();

document.addEventListener('DOMContentLoaded', function () { 
	window["feedbroengine"].engineInit();
});

window.onunload = function() {
	$('#navigator').tree('destroy');
	$("#feed").empty();
	$("#titles").empty();
	$(".feedSubscribe").empty();
	
	window.feedbro = undefined;
	window.feedbroengine = undefined;
	window.SimpleWidget = undefined;
	window.Tree = undefined;
	window.JqTreeWidget = undefined;
	window["MathJax"] = undefined;
};
