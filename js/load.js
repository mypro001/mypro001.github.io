var App = {};
App.elementMainLeft = undefined;
App.elementLogoImage = undefined;
App.elementTitlePage = undefined;
App.elementFooterInfo = undefined;
App.elementFooterRSS = undefined;


function getMainLeftPage(hrefMainLeft) {
	var a = document.createElement("a");
	a.href = hrefMainLeft;
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);
}

function openURL(href) {
	var a = document.createElement("a");
	a.href = href;
	a.target = "_blank";
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);
}

function getmypro001TwitterPage() {
	openURL("https://twitter.com/mypro001");
}

function getmypro001Page() {
	openURL("https://goo.gl/vFftYE");
}

function getInfoPage() {
	openURL("http://telegra.ph");
}

function getRSSPage() {
	openURL("https://www.inoreader.com/feed/http://feeds.feedburner.com/mypro001");
}

function my_ga(a, b, c, d, e){
	ga(a, b, c, d, e);
}

$(document).ready(function () {

	var hrefMainLeft = $("#mainLeft").parent().attr("href");
	var textContent = $("#content").html();

	var textMain = '';
	textMain += '<header style="display:none;"></header>';
	textMain += '<div id="mainNavigation">';
	textMain += '<span id="mainLeft"></span>';
	textMain += '<span class="logoImage"></span>';
	textMain += '<span class="titlePage">mypro001 - Save big on top quality items on shopping</span>';
	textMain += '</div>';
	textMain += '<main style="top:42px;bottom:34px;">';
	textMain += '<article>';
	textMain += '<div id="content">' + textContent + '</div>';
	textMain += '</article>';
	textMain += '</main>';
	textMain += '<footer>';
	textMain += '<div id="footerPage">';
	textMain += '<span id="footerInfo">mypro001 &copy; 2017</span>';
	textMain += '<span id="footerRSS"></span>';
	textMain += '</div>';
	textMain += '</footer>';
	$("#main").html(textMain);

	App.elementMainLeft = $("#mainLeft");
	App.elementLogoImage = $(".logoImage");
	App.elementTitlePage = $(".titlePage");
	App.elementFooterInfo = $("#footerInfo");
	App.elementFooterRSS = $("#footerRSS");

	App.elementMainLeft.click(function () {
		getMainLeftPage(hrefMainLeft);
		my_ga('send', 'event', 'getMainLeftPage', 'click', 'elementMainLeft - ' + hrefMainLeft);
	});

	App.elementLogoImage.click(function () {
		getmypro001TwitterPage();
		my_ga('send', 'event', 'getmypro001TwitterPage', 'click', 'elementLogoImage');
	});

	App.elementTitlePage.click(function () {
		getmypro001Page();
		my_ga('send', 'event', 'getmypro001Page', 'click', 'elementTitlePage');
	});

	App.elementFooterInfo.click(function () {
		getInfoPage();
		my_ga('send', 'event', 'getInfoPage', 'click', 'elementFooterInfo');
	});

	App.elementFooterRSS.click(function () {
		getRSSPage();
		my_ga('send', 'event', 'getRSSPage', 'click', 'elementFooterRSS');
	});

});