import { projects } from './data.js'

const Render = (_ => {

// cache the DOM //
const $portfolio = document.querySelector(".portfolio");
const $hamburger = document.querySelector(".header__mobile-hamburger");
const $mobileMenu = document.querySelector(".header__mobile-menu");

// toggle mobile menu

$hamburger.addEventListener("click", _ => {
            $mobileMenu.classList.toggle('header__mobile-menu-open');
        })


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