let btn = document.querySelector("#btn")
let content = document.querySelector("#content")
let voice = document.querySelector("#voice")
function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.rate = 1
    text_speak.pitch = 1
    text_speak.volume = 1
    // text_speak.lang="hi-GN"
    window.speechSynthesis.speak(text_speak)
}
function wishMe() {
    let day = new Date()
    let hours = day.getHours()
    console.log(hours)
    if (hours >= 0 && hours < 12) {
        speak("Good Morning")
    }
    else if (hours >= 12 && hours < 16) {
        speak("Good Afternoon")
    }

    else {
        speak(" Good Evening")
    }
}
// window.addEventListener('load',()=>{
//     wishMe()
// })
let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new speechRecognition()
recognition.onresult = (event) => {
    let currentIndex = event.resultIndex
    let transcript = event.results[currentIndex][0].transcript
    content.innerText = transcript
    textCommond(transcript.toLowerCase())
}
btn.addEventListener("click", () => {
    recognition.start()
    btn.computedStyleMap.display = "none"
    voice.style.display = "block"
})
function textCommond(message) {

    message = message.replace(/hi john/gi, '').trim();
    message = message.replace(/show me/gi, '').trim();
    message = message.replace(/open /gi, '').trim();


    btn.computedStyleMap.display = "flex"
    voice.style.display = "none"

    if (message.includes("hello") || message.includes("hey")) {
        speak("hello,how can i help you")
    }
    else if (message.includes("who are you")) {
        speak(" I am virtual assistant,created by  dhanush")
    }
    else if (message.includes("hello john")) {
        speak("hi dhanush, how are you ")
    }
    else if (message.includes("open instagram")) {
        speak("okay")
        window.open("https://www.instagram.com/")
    }
    else if (message.includes("open youtube")) {
        speak("okay")
        window.open("https://www.youtube.com/")
    }

    else if (message.includes("how are you")) {
        speak("hi, I am doing fine and what about you")
    }
    else {
        let finaltext = "ok,this is what i found " + message

        speak(finaltext)
        window.open(`https://www.google.com/search?q=${message}`, "_blank");
    }
}
