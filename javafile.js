var mysong = document.getElementById("mySong"); // 2 variables
var icon = document.getElementById("icon");

icon.onclick = function () {
    // mysong.play();
    if (mySong.paused) {
        mySong.play();
        icon.src = "media/pause.png";
    } else {
        mySong.pause();
        icon.src = "media/play.png";
    }
}