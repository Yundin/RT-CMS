$(document).ready(function() {
	var iconsCount = 0
	var desktop = $("#desktop")
	var dock = $("#dock")
	if (thereIsProfile) {
		var pos = countMargins(iconsCount++)
		var a = `<a class="abs icon" style="left:${pos[0]}px;top:${pos[1]}px;" href="#icon_dock_profile"> <img src="assets/images/icons/icon_32_network.png" />Profile</a>`
		desktop.append(a)
		$.get("assets/pages/profile.html", function(data) {
			desktop.append(data)
		})
		var li = '<li id="icon_dock_profile"><a href="#window_profile"><img src="assets/images/icons/icon_22_network.png" />Profile</a></li>'
		dock.append(li)
	}
});

function countMargins(iconsCount) {
	table = Math.floor(iconsCount / 9)
	row = iconsCount - table * 9
	return [20 + 100 * table, 20 + 80 * row]
}