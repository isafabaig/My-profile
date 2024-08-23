// Select the toggle switch and the body element
const modeToggle = document.getElementById('mode-toggle');
const body = document.body;

// Check if dark mode is enabled (in local storage)
if (localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('dark-mode');
    modeToggle.checked = true;
}

// Add an event listener to the switch
modeToggle.addEventListener('change', () => {
    body.classList.toggle('dark-mode');

    // Save the user's preference in local storage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        localStorage.setItem('dark-mode', 'disabled');
    }
});
