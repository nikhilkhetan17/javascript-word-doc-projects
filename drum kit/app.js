let drumSounds = ["sound1", "sound2", "sound3", "sound4", "sound5", "sound6"];

drumSounds.forEach(function (sound) {
  const btn = document.createElement("button");
  btn.classList.add("btn-class");

  btn.innerText = sound;
  // console.log(btn);
  document.body.appendChild(btn);

  btn.addEventListener("click", function () {
    songPause();
    document.getElementById(sound).play();
  });
});
function songPause() {
  drumSounds.forEach(function (sound) {
    let drumSound = document.getElementById(sound);

    drumSound.pause();
    drumSound.currentTime = 0;
  });
}
