
var currentUrl = "";

chrome.tabs.getSelected(function(tab) {
	var currentUrl = tab.url;
	$("#domain").text(currentUrl);
});
/**
 * µã»÷ÊÂ¼þ
 */
document.addEventListener('DOMContentLoaded', function () {

});

