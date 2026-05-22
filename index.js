import { returnMatched } from "./demo.js";
import { getWordsToSearch } from "./initData.js";

// search bar
const searhBar = document.querySelector("#search");

// add input field
const wordsDiv = document.querySelector("#add-words input");

// add input field btn
const addWordsBtn = document.querySelector("#add-words button");

// tags
const tagContainer = document.querySelector(".tags");

// click add btn
addWordsBtn.addEventListener("click", () => {
  console.log("you clicked btn");

  const newWord = wordsDiv.value.trim();

  if (newWord === "") {
    alert("Plz insert a word");
    return;
  }

  const newTag = document.createElement("span");
  newTag.className = "tag";
  newTag.textContent = newWord;
  tagContainer.prepend(newTag);

  wordsDiv.value = "";

  wordsDiv.focus();
});

function renderMatches(container, matches) {
  const matchesList = document.querySelector(container);

  matchesList.innerHTML = ""; // Clear previous results

  matches.forEach((match) => {
    const row = document.createElement("div");
    row.className = "match-row";

    const wordSpan = document.createElement("span");
    wordSpan.className = "word";
    wordSpan.textContent = match;

    const badgeSpan = document.createElement("span");
    badgeSpan.className = "badge";
    badgeSpan.className = "Dist : ";

    row.appendChild(wordSpan);
    row.appendChild(badgeSpan);

    matchesList.appendChild(row);
  });
}

searhBar.addEventListener("input", (e) => {
  const arr = getWordsToSearch();

  const val = e.target.value;

  const matches = returnMatched(arr, 3, val);
  console.log(matches);

  renderMatches(".matches-list", matches);
});
