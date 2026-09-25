
function updateLiveClock() {
    const clockElement = document.getElementById('live-clock');
    const now = new Date();
   
    const timeString = now.toLocaleTimeString('en-US');
    clockElement.innerText = timeString;
}

updateLiveClock();
setInterval(updateLiveClock, 1000);


const launchDate = new Date("January 1, 2027 00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = launchDate - now;


    if (distance < 0) {
        document.getElementById("launch-banner").innerHTML = "<h3>We Are Officially Live!</h3>";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);


    document.getElementById("days").innerText = days.toString().padStart(2, '0');
    document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
    document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');
}


updateCountdown();
setInterval(updateCountdown, 1000);



const themeToggleBtn = document.getElementById('theme-toggle');
const bodyElement = document.body;

themeToggleBtn.addEventListener('click', function() {
   
    bodyElement.classList.toggle('dark-mode');
    

    if (bodyElement.classList.contains('dark-mode')) {
        themeToggleBtn.innerText = '☀️ Light Mode';
    } else {
        themeToggleBtn.innerText = '🌙 Dark Mode';
    }
});


let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    

    slideIndex++;
    
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }    
    
    slides[slideIndex-1].style.display = "block";  
    
    setTimeout(showSlides, 3500); 
}
