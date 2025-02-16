export const speakinputword=(inpWord) => {
    console.log("audio btn got clicked");
    const textToSpeech = new SpeechSynthesisUtterance(inpWord);
    window.speechSynthesis.speak(textToSpeech);
}