let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voicet=document.querySelector("#voice")
 
function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate = 1
    text_speak.pitch = 1
    text_speak.volume = 1
     text_speak.lang="hi-IN"
    window.speechSynthesis.speak(text_speak)
   
}
function wishMe(){
    let day= new Date()
    let hours=day.getHours()
    if(hours>=0 && hours < 12){
        speak("Good Morning Mam")
    }
    else if(hours>=12 && hours<17){
        speak("Good Afternoon Sir")
    }
    else{
        speak("Good Evening Sir")
    }
}

//window.addEventListener('load' ,()=>{
//wishMe()
//})

let speechRecognition = window.SpeechRecognition ||window.webkitSpeechRecognition
let recognition = new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex = event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript
   takeCommand(transcript.toLowerCase())
}
btn.addEventListener("click",()=>{
   recognition.start()
   btn.style.display = "none"
   voicet.style.display = "block"
})
function takeCommand(message){
   btn.style.display = "flex"
   voicet.style.display = "none"

   if (message.includes("hello")||message.includes("hey")){
    speak("hello mam,what can i help you?")
   }
   else if(message.includes("Who are you")){
    speak("I am virtual assistant , created by Sangam ")
   }
   else if(message.includes("open youtube")){
    speak("opening youtube....")
    window.open("https://www.youtube.com/","_blank")
   }
   else if(message.includes("open google")){
    speak("opening google....")
    window.open("https://www.google.com/","_blank")
   }
   else if(message.includes("open facebook")){
    speak("opening facebook....")
    window.open("https://www.facebook.com/","_blank")
   }
   else if(message.includes("open whatsapp")){
    speak("opening whatsapp....")
    window.open("https://www.whatsapp.com/","_blank")
   }
   else if(message.includes("open instagram")){
    speak("opening instagram....")
    window.open("https://www.instagram.com/","_blank")
   }
   else if(message.includes("open calculator")){
    speak("opening calculator....")
    window.open("calculator://")
   }
   else if(message.includes("open whatsapp")){
    speak("opening open whatsapp....")
    window.open("whatsapp://")
   }
   else if (message.includes("time")) {
    let time = new Date().toLocaleString(undefined, {
        hour: "numeric",
        minute: "numeric",
        hour12: true // optional: for AM/PM format
    });
    speak(time);
    }
    else if (message.includes("date")) {
    let date = new Date().toLocaleString(undefined, {
        day: "numeric",
        month: "short",
        date: true // optional: for AM/PM format
    });
    speak(date);
    }
   
   else {
    let query = message.replace("shipra", "").replace("shifra", "");
    let finalText = "this is what I found on internet regarding " + query;
    speak(finalText);
    window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, "_blank");
}

}