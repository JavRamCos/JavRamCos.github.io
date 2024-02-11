import {getCookie} from "./Utils/utils.js";
import {checkPreferences, backToMainPage, configLinks} from "./Utils/elements.js";
import {data} from './Utils/langs.js';

const updateCurrentCourses = (lang) => {
    const coursesDivs = document.getElementById('current-certs-div')
        .querySelectorAll('.cert-container');
    coursesDivs.forEach((el) => {
        el.querySelector('.cert-link').children[0].innerText = data[lang].certifications.course_link;
    });
};

const updateCompletedCourses = (lang) => {
    const coursesDivs = document.getElementById('completed-certs-div')
        .querySelectorAll('.cert-container');
    coursesDivs.forEach((el) => {
        el.querySelector('.cert-link').children[0].innerText = data[lang].certifications.cert_link;
    });
};

const updateLanguage = () => {
    const langSelected = getCookie('language-selected');
    // MAIN TITLE
    document.getElementById('main-title').innerText = data[langSelected].certifications.main_title;
    // CURRENT COURSES
    document.getElementById('current-certs-title').innerText = data[langSelected].certifications.curr_certs_title;
    updateCurrentCourses(langSelected);
    // COMPLETED COURSES
    document.getElementById('completed-certs-title').innerText = data[langSelected].certifications.comp_certs_title;
    updateCompletedCourses(langSelected);
    // CONTACT
    document.getElementById('contact-title').innerText = data[langSelected].contact.title;
    document.getElementById('contact-linkedin').innerText = data[langSelected].contact.profile;
};


checkPreferences(updateLanguage);
configLinks(updateLanguage);
backToMainPage();