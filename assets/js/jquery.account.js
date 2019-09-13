$(document).ready(function() {
	var iconsCount = 0
	var desktop = $("#desktop")
	var dock = $("#dock")
	if (isThereProfile) {
		var pos = countMargins(iconsCount++)
		var a = `<a class="abs icon" style="left:${pos[0]}px;top:${pos[1]}px;" href="#icon_dock_profile"> <img src="assets/images/icons/icon_32_network.png" />Profile</a>`
		desktop.append(a)
		$.get("assets/pages/profile.html", function(data) {
			desktop.append(data)
		})
		var li = '<li id="icon_dock_profile"><a href="#window_profile"><img src="assets/images/icons/icon_22_network.png" />Profile</a></li>'
		dock.append(li)
	}
	if (isThereChat) {
		var pos = countMargins(iconsCount++)
		var a = `<a class="abs icon" style="left:${pos[0]}px;top:${pos[1]}px;" href="#icon_dock_chat"> <img src="assets/images/icons/icon_32_network.png" />Chat</a>`
		desktop.append(a)
		$.get("assets/pages/chat.html", function(data) {
			desktop.append(data)
		})
		var li = '<li id="icon_dock_chat"><a href="#window_chat"><img src="assets/images/icons/icon_22_network.png" />Chat</a></li>'
		dock.append(li)
	}
	if (isThereNews) {
		var pos = countMargins(iconsCount++)
		var a = `<a class="abs icon" style="left:${pos[0]}px;top:${pos[1]}px;" href="#icon_dock_news"> <img src="assets/images/icons/icon_32_network.png" />News</a>`
		desktop.append(a)
		$.get("assets/pages/news.html", function(data) {
			desktop.append(data)
		})
		var li = '<li id="icon_dock_news"><a href="#window_news"><img src="assets/images/icons/icon_22_network.png" />News</a></li>'
		dock.append(li)
	}
});

function countMargins(iconsCount) {
	table = Math.floor(iconsCount / 9)
	row = iconsCount - table * 9
	return [20 + 100 * table, 20 + 80 * row]
}