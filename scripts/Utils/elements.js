import {setCookie, getCookie} from "./utils.js";

// =====  backToMainPage FUNCTION  =====
// Functionality: Adds functionality to the Back Arrow element in <nav>, redirecting to 'index.html'
// Arguments: void
// Returns: void
export const backToMainPage = () => {
    const backIcon = document.getElementById("back-icon");
    backIcon.addEventListener('click', () => {
        location.assign("./index.html")
    });
}

// =====  setLanguagePreference FUNCTION  =====
// Functionality: Defines the 'active' class in <nav> elements
// Arguments: void
// Returns: void
export const setLanguagePreference = () => {
    const langSelected = getCookie('language-selected');
    switch(langSelected) {
        case 'spanish':
            document.getElementById('spanish-selected').classList.add('active');
            break;
        default:
            document.getElementById('english-selected').classList.add('active');
            break;
    }
};

// =====  checkPreferences FUNCTION  =====
// Functionality: Checks if user has accepted cookies, otherwise it displays message
// Arguments: updateLanguage: Function = Function that updates website's language
// Returns: void
export const checkPreferences = (updateLanguage) => {
    window.onload = () => {
        const preferencesContainer = document.getElementById("preferences-container");
        const acceptCookiesBtn = document.getElementById("accept-cookies-btn");
        const declineCookiesBtn = document.getElementById("decline-cookies-btn");
        if(!getCookie("accepted-cookies")) {
            preferencesContainer.style.display = "flex";
            preferencesContainer.style.flexDirection = "column";
            acceptCookiesBtn.addEventListener('click', () => {
                // Store cookies: accepted-cookies and language-selected (default 1)
                setCookie("accepted-cookies", "1");
                setCookie("language-selected", "english");
                preferencesContainer.style.display = "none";
                setLanguagePreference();
            });
            declineCookiesBtn.addEventListener('click', () => {
                location.assign("https://google.com");
            });
        } else {
            setLanguagePreference();
            updateLanguage();
        }
    };
    window.onunload = () => {};
};

// =====  configLinks  =====
// Functionality: Adds Event Listeners to Link in <nav>
// Arguments: updateLanguage: Function = Function that updates website's language
// Returns: void
export const configLinks = (updateLanguage) => {
    const navDiv = document.querySelector('nav');
    const links = navDiv.querySelectorAll('a');
    links.forEach((link) => {
        link.addEventListener('click', () => {
            document.querySelector('.active').classList.remove('active');
            link.classList.add('active');
            setCookie('language-selected', link.getAttribute('language').toLowerCase());
            updateLanguage();
        });
    });
}