import {getCookie} from "./Utils/utils.js";
import {checkPreferences, backToMainPage, configLinks} from "./Utils/elements.js";
import {data} from './Utils/langs.js';

const updateProjects = (lang) => {
    const projectDivs = document.querySelectorAll('.project-inner-div');
    projectDivs.forEach((el, i) => {
        el.querySelector('.project-link-div').children[0].innerText = data[lang].projects.project_link;
        const proj = `project_${i}`;
        if(el.querySelector(`#${proj}_title`) !== null) {
            el.querySelector(`#${proj}_title`).innerText = data[lang].projects[proj].title;
        }
        document.getElementById(`${proj}_tools`).innerText = data[lang].projects[proj].tools;
        document.getElementById(`${proj}_description`).innerText = data[lang].projects[proj].description;
    });
};

const updateLanguage = () => {
    const langSelected = getCookie('language-selected');
    // MAIN TITLE
    document.getElementById('main-title').innerText = data[langSelected].projects.main_title;
    // PROJECTS
    updateProjects(langSelected);
    // CONTACT
    document.getElementById('contact-title').innerText = data[langSelected].contact.title;
    document.getElementById('contact-linkedin').innerText = data[langSelected].contact.profile;
};

checkPreferences(updateLanguage);
configLinks(updateLanguage);
backToMainPage();
