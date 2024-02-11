import {getCookie} from "./Utils/utils.js";
import {checkPreferences, backToMainPage, configLinks} from "./Utils/elements.js";
import {data} from './Utils/langs.js';

const updateLanguageSection = (lang) => {
    document.getElementById('languages-title').innerText = data[lang].skills.languages_title;
    document.getElementById('language_0').innerText = data[lang].skills.language_0;
    document.getElementById('language_1').innerText = data[lang].skills.language_1;
    document.getElementById('language_2').innerText = data[lang].skills.language_2;
}

const updateLanguage = () => {
    const langSelected = getCookie('language-selected');
    // MAIN TITLE
    document.getElementById('main-title').innerText = data[langSelected].skills.main_title;
    // LANGUAGE
    updateLanguageSection(langSelected);
    // PROGRAMMING
    document.getElementById('programming-title').innerText = data[langSelected].skills.programming_title;
    // CONTACT
    document.getElementById('contact-title').innerText = data[langSelected].contact.title;
    document.getElementById('contact-linkedin').innerText = data[langSelected].contact.profile;
};

const fillPercentages = () => {
    // LANGUAGES
    document.getElementById('spanish-percentage').style.width = "100%";
    document.getElementById('english-percentage').style.width = "80%";
    document.getElementById('french-percentage').style.width = "50%";
    // PROGRAMMING
    document.getElementById('python-percentage').style.width = "90%";
    document.getElementById('javascript-percentage').style.width = "80%";
    document.getElementById('c-percentage').style.width = "70%";
    document.getElementById('java-percentage').style.width = "70%";
    document.getElementById('sql-percentage').style.width = "50%";
};

checkPreferences(updateLanguage);
configLinks(updateLanguage);
backToMainPage();
fillPercentages();