var video = document.getElementById('bgvid');
var muteButton = document.getElementById("mute");

muteButton.addEventListener("click", function() {
	if (video.muted == false) {
		video.muted = true;
	} else {
		video.muted = false;
	}
});