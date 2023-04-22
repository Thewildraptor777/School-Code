//Buttons and Function
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const repeatButton = document.getElementById("repeat");
const shuffleButton = document.getElementById("shuffle");
const audio = document.getElementById("audio");
const songImage = document.getElementById("song-image");
const pimg = document.getElementById("p-img");
const songName = document.getElementById("song-name");
const songName2 = document.getElementById("song-name2");
const songName2_2 = document.getElementById("song-name2-2");
const songtitle = document.getElementById("title");
const songArtist = document.getElementById("song-artist");
const pauseButton = document.getElementById("pause");
const playButton = document.getElementById("play");
const maxDuration = document.getElementById("max-duration");
const currentTimeRef = document.getElementById("current-time");
const progressBar = document.getElementById("progress-bar");
const currentProgress = document.getElementById("current-progress");
//playlist 1
const playlistButton = document.getElementById("playlist");
const playlistSongs = document.getElementById("playlist-songs");
const playlistContainer = document.getElementById("playlist-container");
const closeButton = document.getElementById("close-button");
//playlist 2
const playlistButton2 = document.getElementById("playlist2");
const playlistSongs2 = document.getElementById("playlist-songs2");
const playlistContainer2 = document.getElementById("playlist-container2");
const closeButton2 = document.getElementById("close-button2");
//playlist 3
const playlistButton3 = document.getElementById("playlist3");
const playlistSongs3 = document.getElementById("playlist-songs3");
const playlistContainer3 = document.getElementById("playlist-container3");
const closeButton3 = document.getElementById("close-button3");
//playlist 4
const playlistButton4 = document.getElementById("playlist4");
const playlistSongs4 = document.getElementById("playlist-songs4");
const playlistContainer4 = document.getElementById("playlist-container4");
const closeButton4 = document.getElementById("close-button4");
//intial playlist
var songsList1 = Best;
//set playlist to Best
function init() {
  index = 0;
  setSong(index);
  count();
  pauseButton.classList.add("hide");
  playButton.classList.remove("hide");
  playAudio();
}

function list1() {
  function setGlobal() {
    songsList1 = Best;
  }
  setGlobal();
  init();
}
//set playlist to custom
function list2() {
  function setGlobal() {
    songsList1 = Custom;
  }
  setGlobal();
  init();
}
function list3() {
  function setGlobal() {
    songsList1 = BestWLyrics;
  }
  setGlobal();
  init();
}
function list4() {
  function setGlobal() {
    songsList1 = lyrics;
  }
  setGlobal();
  init();
}
//
document.getElementById("song-image").onerror = function () {
  document.getElementById("song-image").src =
    "https://cdn.glitch.global/d1c18141-2e98-4fec-939a-0a4ab531cdee/icon-4399630_1280.png?v=1669907222341";
};
document.getElementById("p-img").onerror = function () {
  document.getElementById("p-img").src =
    "https://cdn.glitch.global/d1c18141-2e98-4fec-939a-0a4ab531cdee/icon-4399630_1280.png?v=1669907222341";
};

//index for songs
let index;

//initially loop=true
let loop = true;

//events object
let events = {
  mouse: {
    click: "click",
  },
  touch: {
    click: "touchstart",
  },
};

let deviceType = "";

//Detect touch device

const isTouchDevice = () => {
  try {
    //We try to create TouchEvent(it would fail for desktops and throw error)
    document.createEvent("TouchEvent");
    deviceType = "touch";
    return true;
  } catch (e) {
    deviceType = "mouse";
    return false;
  }
};

//Format time (convert ms to seconds, minutes and add 0 id less than 10)
const timeFormatter = (timeInput) => {
  let minute = Math.floor(timeInput / 60);
  minute = minute < 10 ? "0" + minute : minute;
  let second = Math.floor(timeInput % 60);
  second = second < 10 ? "0" + second : second;
  return `${minute}:${second}`;
};

//set song
const setSong = (arrayIndex) => {
  //this extracts all the variables from the object
  let { name, link, artist, image } = songsList1[arrayIndex];
  audio.src = link;
  songName.innerHTML = name;
  songtitle.innerHTML = name;
  songArtist.innerHTML = artist;
  songImage.src = image;
  //display duration when metadata loads
  audio.onloadedmetadata = () => {
    maxDuration.innerText = timeFormatter(audio.duration);
  };
  pimg.src = songImage.src;
  songName2.innerHTML = songName.innerHTML + " -&nbsp;";
  songName2_2.innerHTML = songName.innerHTML + " -&nbsp;";
  //
  function isOverflown(element) {
    return (
      element.scrollHeight > element.clientHeight ||
      element.scrollWidth > element.clientWidth
    );
  }

  var els = document.getElementsByClassName("name");
  for (var i = 0; i < els.length; i++) {
    var el = els[i];
    el.style.borderColor = isOverflown(el) ? "red" : "green";
    if (el.style.borderColor == "red") {
      songName2.classList.remove("hide");
      namebox2.classList.remove("hide");
      namebox.classList.add("hide");
      songName.classList.add("hide");
    } else {
      songName2.classList.add("hide");
      namebox2.classList.add("hide");
      namebox.classList.remove("hide");
      songName.classList.remove("hide");
    }
  }
  navigator.mediaSession.metadata = new MediaMetadata({
    title: songName.innerHTML,
    artist: songArtist.innerHTML,
    album: "raptor",
    artwork: [
      { src: pimg.src, sizes: "96x96", type: "image/png" },
      { src: pimg.src, sizes: "128x128", type: "image/png" },
      { src: pimg.src, sizes: "192x192", type: "image/png" },
      { src: pimg.src, sizes: "256x256", type: "image/png" },
      { src: pimg.src, sizes: "384x384", type: "image/png" },
      { src: pimg.src, sizes: "512x512", type: "image/png" },
    ],
  });
};
let namebox = document.getElementById("bar2");
let namebox2 = document.getElementById("bar");
//play song
const playAudio = () => {
  audio.play();
  pauseButton.classList.remove("hide");
  playButton.classList.add("hide");
  document.title = "Good Music Player-" + songName.innerHTML;
  var on = true;
};
//repeat button
repeatButton.addEventListener("click", () => {
  if (repeatButton.classList.contains("active")) {
    repeatButton.classList.remove("active");
    audio.loop = false;
    console.log("repeat off");
    document.getElementById("repeat").style.color = "#949494";
  } else {
    repeatButton.classList.add("active");
    audio.loop = true;
    console.log("repeat on");
    document.getElementById("repeat").style.color = "#2887e3";
  }
});

//Next song
const nextSong = () => {
  //if loop is true then continue in normal order
  if (loop) {
    if (index == songsList1.length - 1) {
      //If last song is being played
      index = 0;
    } else {
      index += 1;
    }
    setSong(index);
    playAudio();
  } else {
    //else find a random index and play that song
    let randIndex = Math.floor(Math.random() * songsList1.length);

    if (prev[prev.length - 1]) {
      let randIndex = Math.floor(Math.random() * songsList1.length);
      setSong(randIndex);
      playAudio();
      prev.push(randIndex);
    } else {
      setSong(randIndex);
      playAudio();
      prev.push(randIndex);
    }
  }
};
const prev = [];
//pause song
const pauseAudio = () => {
  audio.pause();
  pauseButton.classList.add("hide");
  playButton.classList.remove("hide");
  var on = false;
};

//previous song ( you can't go back to a randomly played song)
const previousSong = () => {
  if (index > 0) {
    pauseAudio();
    index -= 1;
  } else {
    //if first song is being played
    index = songsList1.length - 1;
  }
  setSong(index);
  playAudio();
};

//next song when current song ends
audio.onended = () => {
  nextSong();
};

//Shuffle songs
shuffleButton.addEventListener("click", () => {
  if (shuffleButton.classList.contains("active")) {
    shuffleButton.classList.remove("active");
    loop = true;
    console.log("shuffle off");
    document.getElementById("shuffle").style.color = "#949494";
  } else {
    shuffleButton.classList.add("active");
    loop = false;
    console.log("shuffle on");
    document.getElementById("shuffle").style.color = "#2887e3";
  }
});

//play button
playButton.addEventListener("click", playAudio);

//next button
nextButton.addEventListener("click", nextSong);

//pause button
pauseButton.addEventListener("click", pauseAudio);

//prev button
prevButton.addEventListener("click", previousSong);

//if user clicks on progress bar
isTouchDevice();
progressBar.addEventListener(events[deviceType].click, (event) => {
  //start of progressBar
  let coordStart = progressBar.getBoundingClientRect().left;
  //mouse click position
  let coordEnd = !isTouchDevice() ? event.clientX : event.touches[0].clientX;
  let progress = (coordEnd - coordStart) / progressBar.offsetWidth;

  //set width to progress
  currentProgress.style.width = progress * 100 + "%";

  //set time
  audio.currentTime = progress * audio.duration;

  //play
  audio.play();
  pauseButton.classList.remove("hide");
  playButton.classList.add("hide");
});

//update progress every second
setInterval(() => {
  currentTimeRef.innerHTML = timeFormatter(audio.currentTime);
  currentProgress.style.width =
    (audio.currentTime / audio.duration.toFixed(3)) * 100 + "%";
});

//update time
audio.addEventListener("timeupdate", () => {
  currentTimeRef.innerText = timeFormatter(audio.currentTime);
});

//Creates playlist1
const initializePlaylist1 = () => {
  for (let i in songsList1) {
    playlistSongs.innerHTML += `<li class='playlistSong' onclick='setSong(${i})'>
            <div class="playlist-image-container">
                <img class="playlist-image" src="${songsList1[i].image}" onerror="this.onerror=null;this.src='https://cdn.glitch.global/d1c18141-2e98-4fec-939a-0a4ab531cdee/icon-4399630_1280.png?v=1669907222341';"/>
            </div>
            <div class="playlist-song-details">
                <span id="playlist-song-name">
                    ${songsList1[i].name}
                </span>
                <span id="playlist-song-artist-album">
                    ${songsList1[i].artist}
                </span>
            </div>
        </li>`;
  }
};

//display playlist 1
playlistButton.addEventListener("click", () => {
  playlistContainer.classList.remove("hide");
  playlistContainer2.classList.add("hide");
  playlistContainer3.classList.add("hide");
  playlistContainer4.classList.add("hide");
});

//hide playlist 1
closeButton.addEventListener("click", () => {
  playlistContainer.classList.add("hide");
});

//Creates playlist2
const initializePlaylist2 = () => {
  for (let i in Custom) {
    playlistSongs2.innerHTML += `<li class='playlistSong2' onclick='setSong(${i})'>
            <div class="playlist-image-container2">
                <img class="playlist-image" src="${Custom[i].image}" onerror="this.onerror=null;this.src='https://cdn.glitch.global/d1c18141-2e98-4fec-939a-0a4ab531cdee/icon-4399630_1280.png?v=1669907222341';"/>
            </div>
            <div class="playlist-song-details">
                <span id="playlist-song-name">
                    ${Custom[i].name}
                </span>
                <span id="playlist-song-artist-album">
                    ${Custom[i].artist}
                </span>
            </div>
        </li>`;
  }
};
//display playlist 2
playlistButton2.addEventListener("click", () => {
  playlistContainer2.classList.remove("hide");
  playlistContainer.classList.add("hide");
  playlistContainer3.classList.add("hide");
  playlistContainer4.classList.add("hide");
});
//hide playlist 2
closeButton2.addEventListener("click", () => {
  playlistContainer2.classList.add("hide");
});

//Creates playlist3
const initializePlaylist3 = () => {
  for (let i in BestWLyrics) {
    playlistSongs3.innerHTML += `<li class='playlistSong3' onclick='setSong(${i})'>
            <div class="playlist-image-container3">
                <img class="playlist-image" src="${BestWLyrics[i].image}" onerror="this.onerror=null;this.src='https://cdn.glitch.global/d1c18141-2e98-4fec-939a-0a4ab531cdee/icon-4399630_1280.png?v=1669907222341';"/>
            </div>
            <div class="playlist-song-details">
                <span id="playlist-song-name">
                    ${BestWLyrics[i].name}
                </span>
                <span id="playlist-song-artist-album">
                    ${BestWLyrics[i].artist}
                </span>
            </div>
        </li>`;
  }
};
//display playlist 3
playlistButton3.addEventListener("click", () => {
  playlistContainer3.classList.remove("hide");
  playlistContainer.classList.add("hide");
  playlistContainer2.classList.add("hide");
  playlistContainer4.classList.add("hide");
});
//hide playlist 3
closeButton3.addEventListener("click", () => {
  playlistContainer3.classList.add("hide");
});

//Creates playlist4
const initializePlaylist4 = () => {
  for (let i in lyrics) {
    playlistSongs4.innerHTML += `<li class='playlistSong4' onclick='setSong(${i})'>
            <div class="playlist-image-container4">
                <img class="playlist-image" src="${lyrics[i].image}" onerror="this.onerror=null;this.src='https://cdn.glitch.global/d1c18141-2e98-4fec-939a-0a4ab531cdee/icon-4399630_1280.png?v=1669907222341';"/>
            </div>
            <div class="playlist-song-details">
                <span id="playlist-song-name">
                    ${lyrics[i].name}
                </span>
                <span id="playlist-song-artist-album">
                    ${lyrics[i].artist}
                </span>
            </div>
        </li>`;
  }
};
//display playlist 4
playlistButton4.addEventListener("click", () => {
  playlistContainer4.classList.remove("hide");
  playlistContainer.classList.add("hide");
  playlistContainer2.classList.add("hide");
  playlistContainer3.classList.add("hide");
});
//hide playlist 4
closeButton3.addEventListener("click", () => {
  playlistContainer4.classList.add("hide");
});
window.onload = () => {
  //initially first song
  index = 0;
  setSong(index);
  //create playlist
  initializePlaylist1();
  initializePlaylist2();
  initializePlaylist3();
  initializePlaylist4();
  //display playlist 1
  playlistContainer.classList.remove("hide");
};
count();
//Count the Amount of Songs
function count() {
  let count = 0;
  for (let key in songsList1) {
    // increase the count
    ++count;
  }
  let number = "Songs in Playlist: " + count;
  document.getElementById("total").innerHTML = number;
}

if ("mediaSession" in navigator) {
  navigator.mediaSession.metadata = new MediaMetadata({
    title: songName.innerHTML,
    artist: songArtist.innerHTML,
    album: "raptor",
    artwork: [
      { src: pimg.src, sizes: "96x96", type: "image/png" },
      { src: pimg.src, sizes: "128x128", type: "image/png" },
      { src: pimg.src, sizes: "192x192", type: "image/png" },
      { src: pimg.src, sizes: "256x256", type: "image/png" },
      { src: pimg.src, sizes: "384x384", type: "image/png" },
      { src: pimg.src, sizes: "512x512", type: "image/png" },
    ],
  });
  navigator.mediaSession.setActionHandler("previoustrack", () => {
    previousSong();
  });
  navigator.mediaSession.setActionHandler("nexttrack", () => {
    nextSong();
  });
  navigator.mediaSession.setActionHandler("play", () => {
    playAudio();
  });
  navigator.mediaSession.setActionHandler("pause", () => {
    pauseAudio();
  });
}