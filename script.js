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
        speak("Good Afternoon mam")
    }
    else{
        speak("Good Evening mam")
    }
}

window.addEventListener('load' ,()=>{
wishMe()
})

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
   else if(message.includes("who are you")){
    speak("I am an AI virtual assistant running on this browser, designed to help with tasks and searches.")
   }
   else if(message.includes("how are you")){
    speak("I'm doing well, thank you for asking. And you?")
   }
   else if(message.includes("thank you")){
    speak( "You're welcome, Mam. I'm here to help.")
   }
   else if(message.includes("good bye")){
    speak( "Goodbye, Mam. Have a great day!")
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

    else if (message.includes("tell me a joke") || message.includes("say a joke")) {
        const jokes = [
            "Why don't scientists trust atoms? Because they make up everything!",
            "What do you call a fake noodle? An impasta.",
            "I told my wife she was drawing her eyebrows too high. She looked surprised."
           
        ];
        const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
        speak(randomJoke);
    }
    else if (message.includes("tell me a fact") || message.includes("say a fact")) {
        const facts = [
            "A group of flamingos is called a flamboyance.",
            "Honey never spoils.",
            "The total weight of all the ants on Earth is thought to be about the same as the total weight of all the humans on Earth."
        ];
        const randomFact = facts[Math.floor(Math.random() * facts.length)];
        speak(randomFact);
    }

    else if (message.includes("play")) {
        // Extract the song/video name after 'play'
        let query = message.replace("play", "").trim(); 
        if (query) {
             speak(`Searching for and playing ${query} on YouTube.`);
             // Searches and opens the first result on YouTube
             window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`, "_blank"); 
        } else {
            speak("What would you like me to play?");
        }
    }

    else if (message.includes("scroll down")) {
        speak("Scrolling down");
        // 500 पिक्सल नीचे स्क्रॉल करता है
        window.scrollBy(0, 500); 
    }
    else if (message.includes("scroll up")) {
        speak("Scrolling up");
        // 500 पिक्सल ऊपर स्क्रॉल करता है
        window.scrollBy(0, -500);
    }
    else if (message.includes("refresh") || message.includes("reload")) {
        speak("Refreshing the page");
        window.location.reload();
    }
    else if (message.includes("calculate") || (message.includes("plus") && message.includes("is")) || message.includes("minus") || message.includes("times")) {
        try {
            let calculation = message
                .replace("calculate", "")
                .replace("what is", "")
                .replace("times", "*")
                .replace("multiplied by", "*")
                .replace("plus", "+")
                .replace("minus", "-")
                .replace("divided by", "/")
                .trim();
            
            // eval() स्ट्रिंग को एक गणितीय एक्सप्रेशन की तरह प्रोसेस करता है
            let result = eval(calculation); 
            speak(`The answer is ${result}`);
        } catch (error) {
            speak("Sorry, I couldn't perform that calculation. Please say it clearly.");
        }
    }
   
   else {
    let query = message.replace("shipra", "").replace("shifra", "");
    let finalText = "this is what I found on internet regarding " + query;
    speak(finalText);
    window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, "_blank");
}
  
    
}