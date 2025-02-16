import { speakinputword } from  "./speakinputword.js";
export const fetchWordData = async (baseurl, result) => {
    let inpWord = document.getElementById("input-word").value;
    console.log("input word: ", inpWord);
    
    try {
        const response = await axios.get(`${baseurl}${inpWord}`);
        console.log(response);
        const data = response.data;
        console.log(data);

        result.innerHTML = `
            <div class="flex justify-between items-center">
                <h1 id="word" class="text-xl">${inpWord}</h1>
                <button id="audioBtn">
                    <i id="audio-icon" class="fa-solid fa-play text-2xl cursor-pointer"></i>
                </button>
            </div>
            <div class="flex font-light gap-4 text-indigo-600 mt-4">
                <p id="pos">${data[0].meanings[0].partOfSpeech}</p>
                <p id="phonetic">/${data[0].phonetic || 'N/A'}/</p>
            </div>
            <p id="meaning" class="mt-4">${data[0].meanings[0].definitions[0].definition}</p>
            <p id="example" class="ml-8 mt-3 border-l-4 border-l-sky-500 pl-4">
                Synonyms: ${data[0].meanings[0].synonyms?.join(", ") || "No Synonyms available."}
            </p>
        `;

       
            const audiobtn = document.getElementById("audioBtn");
            audiobtn.addEventListener("click",()=>{
                speakinputword(inpWord)

            })
          
          
    } catch (error) {
        console.log("Error fetching data: ", error);
        result.innerHTML = "No such word found!";
    }
};
