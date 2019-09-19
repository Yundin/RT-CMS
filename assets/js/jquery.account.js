var desktop
var dock
var iconsCount = 0
$(document).ready(function() {
	desktop = $("#desktop")
	dock = $("#dock")
	initWindows()
});

function countLabelMargins(iconsCount) {
	table = Math.floor(iconsCount / 9)
	row = iconsCount - table * 9
	return [20 + 100 * table, 20 + 80 * row]
}

function appendWindow(name, icon_name) {
	var pos = countLabelMargins(iconsCount++)
	var a = `<a class="abs icon" style="left:${pos[0]}px;top:${pos[1]}px;" href="#icon_dock_${name.toLowerCase()}"> <img src="assets/images/icons/icon_32_${icon_name.toLowerCase()}" />${name}</a>`
	desktop.append(a)
	$.get(`assets/pages/${name.toLowerCase()}.html`, function(data) {
			desktop.append(data)
	})
	var li = `<li id="icon_dock_${name.toLowerCase()}"><a href="#window_${name.toLowerCase()}"><img src="assets/images/icons/icon_22_${icon_name.toLowerCase()}" />${name}</a></li>`
	dock.append(li)
}

function initWindows() {
	if (isThereProfile) {
		appendWindow("Profile", "network.png")
	}
	if (isThereChat) {
		appendWindow("Chat", "network.png")
	}
	if (isThereNews) {
		appendWindow("News", "network.png")
	}
}

function redrawWindows() {
	desktop.empty()
	dock.empty()
	iconsCount = 0
	initWindows()
}