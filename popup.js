
var currentUrl = "";

chrome.tabs.getSelected(function(tab) {
	var currentUrl = tab.url;
	$("#domain").text(currentUrl);
});
/**
 * ����¼�
 */
document.addEventListener('DOMContentLoaded', function () {

});

