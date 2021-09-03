const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navlinks = document.querySelectorAll('.nav-links li');

    //toggle nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        //animate links
        navlinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinksFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
            console.log(index / 7); //initial delay
        });

        //burger animation
        burger.classList.toggle('toggle');

    });

}

navSlide();
/*
//creating a function for invoking smaller function

const app = ()=>{
    navSlide();
}*/