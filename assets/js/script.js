import { projects } from './data.js'

const ChangeBook = (_ => {

// cache the DOM //
const $portfolio = document.querySelector(".portfolio");
const $project = document.querySelector(".portfolio__project");

// create project
    let markup = "";

    projects.forEach((projectObj) => {
        markup += `
        <div class="portfolio__project">
            <img class="portfolio__project-image" src="${projectObj.image}" alt=""/>
            <div class="portfolio__text-container">
            <h2>${projectObj.title}</h2>
            <p>${projectObj.description}</p>
            <a href="${projectObj.link}"><img src="./images/behance-icon.png" alt="behance-icon"></a>
            </div>
        </div>
        `
    })

    $portfolio.innerHTML = markup;

})();