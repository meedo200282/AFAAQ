// toggle icon navbar
let menu = document.querySelector('#bar')
let nav = document.querySelector('.links')

menu.onclick = () => {
    menu.classList.toggle('fa-xmark');
    nav.classList.toggle('active');
}
// scrool section active link
let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll(".header .links .link");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if(top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove("active");
                document.querySelector('.header .links .link[href*=' + id +']').classList.add('active');
            });
        };
    });

    // remove toogele when scroll
    menu.classList.remove('fa-xmark')
    nav.classList.remove('active')
}

// scroll reveal
ScrollReveal({ 
    // reset: true,
    distance:'80px',
    duration: 1900,
    delay:200
});

ScrollReveal().reveal('.header ,.about-text h1, .why-contant .cd-2, .serv h1, .why-contant h1', {origin: 'top'});
ScrollReveal().reveal('.homebt , .about-text p, .why-contant .cd-3, .serv .box .card', {origin: 'bottom'});
ScrollReveal().reveal('.home-text h1, .why-contant .cd-1, .con .con-contant', {origin: 'left'});
ScrollReveal().reveal('.home-text h3, .why-contant .cd-4, .con h1', {origin: 'right'});