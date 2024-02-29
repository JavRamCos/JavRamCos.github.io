import {getCookie} from "./Utils/utils.js";
import {checkPreferences, backToMainPage, configLinks} from "./Utils/elements.js";
import {data} from './Utils/langs.js';

const handleSection = (id) => {
    switch(id) {
        case 1:
            document.getElementById('games-container').style.display = 'none';
            document.getElementById('coding-container').style.display = 'flex';
            break;
        default:
            document.getElementById('games-container').style.display = 'flex';
            document.getElementById('coding-container').style.display = 'none';
            break;
    }
};

const configSelectors = () => {
    const selectors = document.querySelectorAll('.selection-inner-div');
    selectors.forEach((el) => {
        el.addEventListener('click', () => {
            document.querySelector('.selected').classList.remove('selected');
            el.classList.add('selected');
            handleSection(parseFloat(el.id.split('_', 2)[1]));
        });
    });
};

const updateGamesSection = (lang) => {
    const projects = document.getElementById("games-container")
        .querySelectorAll('.project-inner-div');
    projects.forEach((el, i) => {
        el.querySelector('.project-link').children[0].innerText = data[lang].projects.game_link;
        const code = `game_${i}`;
        document.getElementById(`${code}_title`).innerText = data[lang].projects[code].title;
        document.getElementById(`${code}_body`).innerText = data[lang].projects[code].body;
    });
}

const updateCodingSection= (lang) => {
    const projects = document.getElementById("coding-container")
        .querySelectorAll('.project-inner-div');
    projects.forEach((el, i) => {
        el.querySelector('.project-link').children[0].innerText = data[lang].projects.repository_link;
        const code = `coding_${i}`;
        document.getElementById(`${code}_title`).innerText = data[lang].projects[code].title;
        document.getElementById(`${code}_body`).innerText = data[lang].projects[code].body;
    });
}

const updateLanguage = () => {
    const langSelected = getCookie('language-selected');
    // MAIN TITLE
    document.getElementById('main-title').innerText = data[langSelected].projects.main_title;
    // SELECTORS
    document.getElementById('selection_0').children[0].innerText = data[langSelected].projects.games_title;
    document.getElementById('selection_1').children[0].innerText = data[langSelected].projects.coding_title;
    // GAMES SECTION
    updateGamesSection(langSelected);
    // CODING SECTION
    updateCodingSection(langSelected);
    // CONTACT
    document.getElementById('contact-title').innerText = data[langSelected].contact.title;
    document.getElementById('contact-linkedin').innerText = data[langSelected].contact.profile;
};

checkPreferences(updateLanguage);
configLinks(updateLanguage);
backToMainPage();
configSelectors();
