const faders = document.querySelectorAll(".col-fade-in"); //Henter/tilkalder alle elementer, som har class'en '.col-fade-in'.

const appearOptions = {
  threshold: 0.5,
  rootMargin: "0px 0px -25px 0px"
};//Fortæller hvornår effekten skal begynde at virke. Det vil sige, hvor meget skal kunne ses på siden, før den begynder at køre funktionen/effekten.

const appearOnScroll = new IntersectionObserver(function(
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
}, // Denne funktion styrer hvad 'appearOnScroll' skal gøre. Den får funktionen at når noget bliver observed på skærmen skal det fade ind og vise sig.
appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
//Her bestemmer vi at det er elementerne med class'en som skal benytte sig af effekten 'appearOnScroll'. Her begynder effekten at virke med funktionen som er bestemt. 

// Javascript for videoer på proces side:

let erPaaPause = true;

let observer = new IntersectionObserver((entries) => { 
    for (const videosted of entries){ 
        if (videosted.isIntersecting && erPaaPause===true) {  //Hvis videoen er i synsfelt og er på pause...
            video1.play();
            video1.loop = true; // Videoen skal køre i loop
            erPaaPause = false;
        } else { // Hvis ikke... så skal videoen pause
            video1.pause();
            erPaaPause = true;
        }
    }

}, {threshold:0.5}); //1 = artikel skal være 50% synlig for at tælle med

// Hovedprogram
const video1 = document.getElementById("video1"); //Observer kun på sted med id = video1
observer.observe(video1);

// Her starter video 2 med samme funktioner

let erPaaPause2 = true;

let observer2 = new IntersectionObserver((entries) => {
    for (const videosted of entries){ 
        if (videosted.isIntersecting && erPaaPause2===true) { //Hvis videoen er i synsfelt og er på pause...
            video2.play();
            video2.loop = true;
            erPaaPause2 = false;
        } else { // Hvis ikke... så skal videoen pause
            video2.pause();
            erPaaPause2 = true;
        }
    }

}, {threshold:0.5}); //1 = artikel skal være 50% synlig for at tælle med

// Hovedprogram
const video2 = document.getElementById("video2"); //Observer kun på sted med id = video2
observer2.observe(video2);

// Her starter video 3 med samme funktioner

let erPaaPause3 = true;

let observer3 = new IntersectionObserver((entries) => {
    for (const entry of entries){ 
        if (entry.isIntersecting && erPaaPause3===true) { //Hvis videoen er i synsfelt og er på pause...
            video3.play();
            erPaaPause3 = false;
            video3.loop = true;
        } else { // Hvis ikke... så skal videoen pause
            video3.pause();
            erPaaPause3 = true;
        }
    }

}, {threshold:0.5}); //1 = artikel skal være 50% synlig for at tælle med

// Hovedprogram
const video3 = document.getElementById("video3"); //Observer kun på sted med id = video3
observer3.observe(video3);

// Her starter video 4 med samme funktioner

let erPaaPause4 = true;

let observer4 = new IntersectionObserver((entries) => {
    for (const videostart of entries){ 
        if (videostart.isIntersecting && erPaaPause4===true) { //Hvis videoen er i synsfelt og er på pause...
            video4.play();
            erPaaPause4 = false;
            video4.loop = true;
        } else { // Hvis ikke... så skal videoen pause
            video4.pause();
            erPaaPause3 = true;
        }
    }

}, {threshold:0.5}); //1 = artikel skal være 50% synlig for at tælle med

// Hovedprogram
const video4 = document.getElementById("video4"); //Observer kun på sted med id = video4
observer4.observe(video4);