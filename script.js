//Event handling related to play and pause

let audioElement = new Audio("songs/riptide.mp3");
let playElement = document.querySelector("#play");
let seekbarElement = document.querySelector(".seekbar");

if (playElement) {
  playElement.addEventListener("click", () => {
    if (audioElement.paused) {
      audioElement.play();
      playElement.classList.remove("fa-play");
      playElement.classList.add("fa-pause");
    } else {
      audioElement.pause();
      playElement.classList.remove("fa-pause");
      playElement.classList.add("fa-play");
    }
  });
}
console.log(seekbarElement);
//handle events related to progressbar

audioElement.addEventListener("timeupdate", () => {
  progress = (audioElement.currentTime / audioElement.duration) * 100;
  seekbarElement.value = progress;
});

seekbarElement.addEventListener("change", () => {
  audioElement.currentTime =
    (seekbarElement.value * audioElement.duration) / 100;
});
