// =====  setCookie FUNCTION  =====
// Functionality: Sets cookie with name = value
// Arguments: name: string = name of the cookie
//            value: string = value of the cookie
// Returns: void
export const setCookie = (name, value) => {
    name = name.toLowerCase();
    value = value.toLowerCase();
    // Set cookie to expire in 30 days
    const date = new Date();
    date.setDate(date.getDate() + 30);
    document.cookie = `${name}=${encodeURIComponent(value) || ''}; expires=${date.toUTCString()}; path=/`;
};

// =====  getCookie FUNCTION  =====
// Functionality: Returns the cookie's value
// Arguments: name: string = name of the cookie
// Returns: Value of the cookie (string) if it exists, null otherwise
export const getCookie = (name) => {
    const nameEquals = name + '=';
    const cookies = document.cookie.split(";");
    for(let cookie of cookies) {
        cookie = cookie.trim();
        if(cookie.indexOf(nameEquals) === 0) {
            return decodeURIComponent(cookie.slice(nameEquals.length, cookie.length));
        }
    }
    return null;
};