import { projects } from './data.js'

const Render = (_ => {

// cache the DOM //
const $portfolio = document.querySelector(".portfolio");
const $hamburger = document.querySelector(".header__mobile-hamburger");
const $mobileMenu = document.querySelector(".header__mobile-menu");
const $aboutBttn = document.querySelector(".header__menu-sobre-mim");
const $about = document.querySelector(".about");
const $projects = document.querySelector(".header__menu-projetos");
const $footer = document.querySelector(".footer");

// toggle mobile menu

$hamburger.addEventListener("click", _ => {
            $mobileMenu.classList.toggle('header__mobile-menu-open');
        })

// about

$aboutBttn.addEventListener("click", _ => {
        $portfolio.classList.remove("portfolio-hide");
        $portfolio.classList.add("portfolio-hide");
        $about.style.display = 'flex';
        $aboutBttn.style.fontWeight = '600';
        $projects.style.fontWeight = '400';
        $footer.style.position = 'absolute';
});

$projects.addEventListener("click", _ => {
        $portfolio.classList.add("portfolio-hide");
        $portfolio.classList.remove("portfolio-hide");
        $about.style.display = 'none';
        $aboutBttn.style.fontWeight = '400';
        $projects.style.fontWeight = '600';
        $footer.style.position = 'relative';
});


// create project
    let markup = "";

    projects.forEach((projectObj) => {
        markup += `
        <div class="portfolio__project">
            <img class="portfolio__project-image" src="${projectObj.image}" alt=""/>
            <div class="portfolio__text-container">
            <h2>${projectObj.title}</h2>
            <p>${projectObj.description}</p>
            <a href="${projectObj.link}" target="_blank">Ver projeto</a>
            </div>
        </div>
        `
    })

    $portfolio.innerHTML = markup;

})();