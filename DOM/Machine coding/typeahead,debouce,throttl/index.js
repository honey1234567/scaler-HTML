const inputBox=document.querySelector("#search-input");
import getCountries from "./fetchData.js"
import {sum} from "./fetchData.js"
inputBox.addEventListener("input",handleSuggestion);

async function handleSuggestion(e){
    let inputText=e.target.value;
    console.log(inputText);
    let data= await getCountries(inputText)
    console.log(data);
}

console.log(sum);
