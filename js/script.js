const epicMix = [
  "Unfinished Sympathy",
  "Q.U.E.E.N.",
  "Gold Dust",
  "Fallin'",
  "One Day I'll Fly Away",
  "Iris",
  "Climbatize",
  "golden hour",
  "(Where Do I Begin) Love Story",
  "(Don't) Give Hate a Chance",
  "Kiss from a Rose",
  "Paper Planes",
  "***Flawless",
  "Take a Bow",
  "Fast Car",
  "Run the World (Girls)",
  "Stop Me",
  "The Garden",
  "Sleep Deprivation",
  "Transient"
];

const mixList = document.querySelector(".mix");
const button = document.querySelector(".show-list");
const total = document.querySelector(".total");

button.addEventListener("click", function () {
  mixInfo(epicMix);
  mixList.classList.remove("hide");
  button.classList.add("hide");
});

total.innerText = `${epicMix.length} great songs!`;

const mixInfo = function (mix) {
  mix.forEach(function(song, index) {
    let li = document.createElement("li");
    li.classList.add("song");
    li.innerHTML = `<span class="song-number">#${index + 1}</span> ${song}`;
    mixList.append(li);
  });
};