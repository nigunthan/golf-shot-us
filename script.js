document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.documentElement; // Using HTML tag for CSS variable scope
    const icon = themeToggle.querySelector('i');

    // 1. Check local storage for existing theme preference
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    // 2. Apply current theme on page load
    body.setAttribute('data-theme', currentTheme);
    updateIcon(currentTheme);

    // 3. Listen for clicks on the toggle button
    themeToggle.addEventListener('click', () => {
        let theme = body.getAttribute('data-theme');
        let newTheme = theme === 'dark' ? 'light' : 'dark';
        
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateIcon(newTheme);
    });

    // Function to flip the moon to a sun
    function updateIcon(theme) {
        if (theme === 'dark') {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    }
});