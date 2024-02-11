import {getCookie} from "./Utils/utils.js";
import {checkPreferences, backToMainPage, configLinks} from "./Utils/elements.js";
import {data} from './Utils/langs.js';

const popEducation = (lang) => {
    const eduDivs = document.querySelectorAll('.education-div');
    eduDivs.forEach((el, i) => {
        const edu = `education_${i}`;
        document.getElementById(`${edu}_institution`).innerText = data[lang].education[edu].institution;
        document.getElementById(`${edu}_date`).innerText = data[lang].education[edu].date;
        const certDivs = el.querySelectorAll(".education-certificate-div");
        // CERTIFICATES
        certDivs.forEach((elem, x) => {
            const cert = `certificate_${x}`;
            document.getElementById(`${edu}_${cert}`).innerText = data[lang].education[edu][cert].title;
            elem.querySelector('.certificate-link').children[0].innerText = data[lang].education.link_text;
        });
    });
}

const updateLanguage = () => {
    const langSelected = getCookie('language-selected');
    // MAIN TITLE
    document.getElementById('main-title').innerText = data[langSelected].education.main_title;
    // EDUCATION
    popEducation(langSelected);
    // CONTACT
    document.getElementById('contact-title').innerText = data[langSelected].contact.title;
    document.getElementById('contact-linkedin').innerText = data[langSelected].contact.profile;
};


checkPreferences(updateLanguage);
configLinks(updateLanguage);
backToMainPage();

