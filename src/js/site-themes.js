const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

function checkTheme(tumbler) {
    const value = localStorage.getItem('theme');
    if (value === Theme.DARK) {
        switchToDark();
        tumbler.setAttribute('checked', true)
    }
    if (value === Theme.LIGHT) {
        switchToLight();
    } else {
        return;
    }
}

function switchTheme(event) {
    if (event.target.checked) {
        if (document.body.classList.contains(Theme.LIGHT)) {
            document.body.classList.remove(Theme.LIGHT);
        }
        switchToDark();
        saveThemePreference(Theme.DARK);
    } else {
        if (document.body.classList.contains(Theme.DARK)) {
            document.body.classList.remove(Theme.DARK);
        }
        switchToLight();
        saveThemePreference(Theme.LIGHT);
    }
}

function saveThemePreference(theme) {
    localStorage.setItem('theme', theme);
}

function switchToLight() {
    document.body.classList.add(Theme.LIGHT);
}
function switchToDark() {
    document.body.classList.add(Theme.DARK);
}

export { checkTheme, switchTheme };
