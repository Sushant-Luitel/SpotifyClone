//Event handling related to play and pause
const songsList = [
  {
    name: "Riptide-Vance Joy",
    path: "songs/riptide.mp3",
    time: "3:18",
    coverImage:
      "https://assets-global.website-files.com/64175fb67dad692e700797da/64b91737215701f76909a3c2_riptide.labeled.178319296.jpeg",
  },
  {
    name: "Budi - 5:55",
    path: "songs/Budi.mp3",
    time: "3:27",
    coverImage: "https://i.ytimg.com/vi/0xwCqBxa56I/maxresdefault.jpg",
  },
  {
    name: "The Script",
    path: "songs/TheScript.mp3",
    time: "3:59",
    coverImage:
      "https://images.genius.com/79f02182908d92294cc34c464df67a4b.1000x1000x1.jpg",
  },
  {
    name: "Mirror-Chase Goehring",
    path: "songs/Mirror.mp3",
    time: "3:12",
    coverImage: "https://i.ytimg.com/vi/Jpd3JUwHszs/maxresdefault.jpg",
  },
  {
    name: "Ranga- The RockHeads ",
    path: "songs/Ranga.mp3",
    time: "4:05",
    coverImage:
      "https://noodlerex.com.np/media/albums/Single_Cover_-_Ranga_VGtEy3T.jpg",
  },
  {
    name: "Ram Sailee",
    path: "songs/RamSailee.mp3",
    time: "3:19",
    coverImage: "https://i.ytimg.com/vi/ENVW3uZ3a-4/maxresdefault.jpg",
  },
  {
    name: "Thunder- Imagine Dragons",
    path: "songs/Thunder.mp3",
    time: "3:03",
    coverImage: "https://i.ytimg.com/vi/GtEvysh1654/maxresdefault.jpg",
  },
];

let songsHTML = "";

songsList.forEach((song) => {
  songsHTML += ` <div class="song">
      <img
        src=${song.coverImage}
        alt=""
      />
      <div  class="songname">${song.name}</div>
      <div class="time_play">
      <span class="timestamp">${song.time}</span>
      <div class="playbutton"><i class="lol fa-solid fa-play" data-song-name='${song.path}'></i></div>
      </div>
    </div>
      `;
});

document.querySelector(".songlist").innerHTML = songsHTML;

let audioElement = new Audio("songs/riptide.mp3");
let playElement = document.querySelector("#play");
let seekbarElement = document.querySelector(".seekbar");

playElement.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime == 0) {
    audioElement.play();
    playElement.classList.remove("fa-play");
    playElement.classList.add("fa-pause");
  } else {
    audioElement.pause();
    playElement.classList.remove("fa-pause");
    playElement.classList.add("fa-play");
  }
});

//handle events related to progressbar

audioElement.addEventListener("timeupdate", () => {
  progress = (audioElement.currentTime / audioElement.duration) * 100;
  seekbarElement.value = progress;
});

seekbarElement.addEventListener("change", () => {
  audioElement.currentTime =
    (seekbarElement.value * audioElement.duration) / 100;
});

playButtons = document.querySelectorAll(".lol");

const makeAllPlay = () => {
  playButtons.forEach((button) => {
    button.classList.remove("fa-pause");
    button.classList.add("fa-play");
  });
};

playButtons.forEach((button) => {
  button.addEventListener("click", (element) => {
    makeAllPlay();

    element.target.classList.remove("fa-play");
    element.target.classList.add("fa-pause");

    audioElement.src = button.dataset.songName;
    audioElement.currentTime = 0;
    audioElement.play();

    playElement.classList.remove("fa-play");
    playElement.classList.add("fa-pause");
  });
});
