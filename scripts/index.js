import {getCookie} from "./Utils/utils.js";
import {checkPreferences, configLinks} from "./Utils/elements.js";
import {data} from "./Utils/langs.js";

/* =====  LANGUAGE UPDATE  ===== */
const updateLanguage = () => {
    const langSelected = getCookie('language-selected');
    // BIO
    document.getElementById('bio-title').innerText = data[langSelected].index.bio_title;
    document.getElementById('bio-body').innerText = data[langSelected].index.bio_body;
    // SECTIONS
    document.getElementById('sections-title').innerText = data[langSelected].index.sec_title;
    document.getElementById('experience-section').innerText = data[langSelected].index.sec_experience;
    document.getElementById('education-section').innerText = data[langSelected].index.sec_education;
    document.getElementById('certificates-item').innerText = data[langSelected].index.sec_certificates;
    document.getElementById('projects-section').innerText = data[langSelected].index.sec_projects;
    document.getElementById('skills-section').innerText = data[langSelected].index.sec_skills;
    // CONTACT
    document.getElementById('contact-title').innerText = data[langSelected].contact.title;
    document.getElementById('contact-linkedin').innerText = data[langSelected].contact.profile;
};

/* =====  SECTIONS  ===== */
const sectionDivs = document.querySelectorAll('.section-left, .section-right');
sectionDivs.forEach((sec) => {
    const link = sec.children[0].children[0];
    link.addEventListener('mouseover', () => {
        link.style.textDecoration = 'underline';
        link.style.color = 'rgb(255, 240, 0, 1.0)';
        sec.classList.replace('darker-bg', 'darkest-bg');
    });
    link.addEventListener('mouseout', () => {
        link.style.textDecoration = 'none';
        link.style.color = 'rgb(250, 250, 250, 1.0)';
        sec.classList.replace('darkest-bg', 'darker-bg');
    });
});

/* ===== CHANGE SECTION ANIMATION ===== */
const changeSectionAnimation = (mq) => {
    if(mq.matches) {
        const sections = document.querySelectorAll('.section-left, .section-right');
        sections.forEach((el) => {
            el.setAttribute('data-aos', 'zoom-in');
        });
    } else {
        const leftSections = document.querySelectorAll('.section-left');
        leftSections.forEach((el) => {
            el.setAttribute('data-aos', 'fade-right')
        });
        const rightSections = document.querySelectorAll('.section-right');
        rightSections.forEach((el) => {
            el.setAttribute('data-aos', 'fade-left')
        });
    }
};

const handleSectionAnimation = () => {
    const maxWidthQuery = window.matchMedia("(max-width: 820px)");
    changeSectionAnimation(maxWidthQuery);
    maxWidthQuery.addEventListener('change', () => {
        changeSectionAnimation(maxWidthQuery);
    });
};


/* =====  PREFERENCES & INIT  ===== */
checkPreferences(updateLanguage);
configLinks(updateLanguage);
handleSectionAnimation();