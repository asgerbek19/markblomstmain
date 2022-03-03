const faders = document.querySelectorAll('.fade'); //Henter/tilkalder alle elementer, som har class'en '.fade'.

const appearOptions = {
    threshold:0.5,
    rootMargin: "0px 0px -25px 0px"
}; //Fortæller hvornår effekten skal begynde at virke. Det vil sige, hvor meget skal kunne ses på siden, før den begynder at køre funktionen/effekten. 

const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("appear"); //
            appearOnScroll.unobserve(entry.target);
        }
    });
},  // Denne funktion styrer hvad 'appearOnScroll' skal gøre. Den får funktionen at når noget bliver observed på skærmen skal det fade ind og vise sig.  
appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);

}); //Her bestemmer vi at det er elementerne med class'en som skal benytte sig af effekten 'appearOnScroll'. Her begynder effekten at virke med funktionen som er bestemt. 