import {getCookie} from "./Utils/utils.js";
import {checkPreferences, backToMainPage, configLinks} from "./Utils/elements.js";
import {data} from './Utils/langs.js';

const popInternships = (lang) => {
    document.getElementById('internships-title').innerText = data[lang].experience.internship_title;
    const internshipsDivs = document.querySelectorAll(".internship");
    internshipsDivs.forEach((el, i) => {
        let exp = `internship_${i}`;
        document.getElementById(`${exp}_title`).innerText = data[lang].experience[exp].title;
        document.getElementById(`${exp}_company`).innerText = data[lang].experience[exp].company;
        document.getElementById(`${exp}_date`).innerText = data[lang].experience[exp].date;
        // TASKS
        const tasksDivs = el.querySelector('.experience-body-description')
            .querySelectorAll('p');
        tasksDivs.forEach((elem, x) => {
            let task = `task_${x}`;
            document.getElementById(`${exp}_${task}`).innerText = data[lang].experience[exp][task];
        });
    });
};

const popWorks = (lang) => {
    document.getElementById('works-title').innerText = data[lang].experience.work_title;
    const worksDivs = document.querySelectorAll('.work');
    worksDivs.forEach((el, i) => {
        let exp = `work_${i}`;
        document.getElementById(`${exp}_title`).innerText = data[lang].experience[exp].title;
        document.getElementById(`${exp}_company`).innerText = data[lang].experience[exp].company;
        document.getElementById(`${exp}_date`).innerText = data[lang].experience[exp].date;
        const tasksDivs = el.querySelector('.experience-body-description')
            .querySelectorAll('p');
        tasksDivs.forEach((elem, x) => {
            let task = `task_${x}`;
            document.getElementById(`${exp}_${task}`).innerText = data[lang].experience[exp][task];
        });
    })
}

const updateLanguage = () => {
    const langSelected = getCookie('language-selected');
    // MAIN TITLE
    document.getElementById('main-title').innerText = data[langSelected].experience.main_title;
    // INTERNSHIPS
    popInternships(langSelected);
    // WORK EXPERIENCES
    popWorks(langSelected);
    // FREELANCE WORKS
    // CONTACT
    document.getElementById('contact-title').innerText = data[langSelected].contact.title;
    document.getElementById('contact-linkedin').innerText = data[langSelected].contact.profile;
};


checkPreferences(updateLanguage);
configLinks(updateLanguage);
backToMainPage();