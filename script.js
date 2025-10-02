
//Hamburgar meny åker in från toppen när hamburgar knappen trycks
//Starta hamburgar ikon animation när knappen trycks
const btn = document.querySelector('.hamburger-btn');
const nav = document.querySelector('.hamburger-menu');

btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    nav.classList.toggle('open');
});

//Elemend med fade-in klassen tonar in nedifrån när man scrollar i viewporten*/
const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);
 const fadeElements = document.querySelectorAll('.fade-in');
        fadeElements.forEach(element => {
            observer.observe(element);
        });