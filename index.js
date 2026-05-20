import { returnMatched } from "./demo.js";
import { getWordsToSearch } from "./initData.js";

// search bar
const searhBar = document.querySelector('#search');

// add input field
const wordsDiv = document.querySelector('#add-words input');

// add input field btn
const addWordsBtn = document.querySelector('#add-words button');

// tags
const tagContainer = document.querySelector('.tags');

addWordsBtn.addEventListener('click', ()=>{
    console.log("you clicked btn");

    const newWord = wordsDiv.value.trim();

    if(newWord === ""){
        alert("Plz insert a word");
        return;
    }

    const newTag = document.createElement('span');
    newTag.className = 'tag';
    newTag.textContent = newWord;
    tagContainer.prepend(newTag);

    wordsDiv.value = "";

    wordsDiv.focus();

});


searhBar.addEventListener('input', (e)=>{

    const arr = getWordsToSearch();

    const val = e.target.value;

    console.log("your val = " + val);

    const vals = returnMatched(arr, 3, val);

    console.log(vals);
});



