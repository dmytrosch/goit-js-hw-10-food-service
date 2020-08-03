export default {
    preferences: {
        theme: null,
    },

    savePreferencesInLocalStorage() {
        const string = JSON.stringify(this.preferences);
        localStorage.setItem('userPreferences', string);
    },
    getPreferencesFromLocalStorage() {
        const string = localStorage.getItem('userPreferences');
        if (string) {
            this.preferences = JSON.parse(string);
        }
        return this.preferences;
    },
};
