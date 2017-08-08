var video = document.getElementById('bgvid');
var muteButton = document.getElementById("mute");
var cont = document.getElementById("contact");

cont.innerHTML = cont.innerHTML.replace('#cocks', 'mailto:ppe@tuuba.moe');


muteButton.addEventListener("click", function() {
	if (video.muted == false) {
		video.muted = true;
	} else {
		video.muted = false;
	}
});