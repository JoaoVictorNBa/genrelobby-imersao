document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        body.classList.add(currentTheme);
    }

    const toggleTheme = () => {
        body.classList.toggle('dark-mode');

        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark-mode');
        } else {
            localStorage.removeItem('theme');
        }
    };

    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
});
