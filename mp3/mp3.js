const playListContainerTag = document.getElementsByClassName("playListContainer")[0];
const audioTag = document.getElementsByClassName("audioTag")[0];

const tracks = [
    {trackId: "audio/Alice_be (2).mp3", title: " Alice be"},
    {trackId: "audio/Colombus read_final.mp3", title: " Colombus read_final"},
    {trackId: "audio/like_be (2).mp3", title: " like_be (2)"},
    {trackId: "audio/question_be (2).mp3", title: "question_be (2)"},
];

for (let i = 0; i < tracks.length; i++) {
    const trackTag = document.createElement("div");
    trackTag.addEventListener("click", () => {
      const trackId = tracks[i].trackId;
      audioTag.src = trackId;
      audioTag.play();
    });
    trackTag.classList.add("trackItem");
    const title = (i + 1).toString() + ". " + tracks[i].title;
    trackTag.textContent = title;
    playListContainerTag.append(trackTag);
  }
  