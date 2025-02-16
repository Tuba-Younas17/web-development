import {fetchWordData } from "../src/pages/utils/dictionaryfunctions/fetchworddata.js";
import { dictionaryApi } from "../src/services/dictionarApi.js";

// const dictionaryApi = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("word-info");
const sound = document.getElementById("sound");
const btn = document.getElementById("inputbtn");
btn.addEventListener("click", ()=>{
    fetchWordData(dictionaryApi,result,);
});

