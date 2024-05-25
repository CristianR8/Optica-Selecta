
// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.toggle-button').forEach(button => {
        button.addEventListener('click', () => {
            const ul = button.parentElement.nextElementSibling;
            ul.classList.toggle('active');
            button.textContent = ul.classList.contains('active') ? '▲' : '▼';
        });
    });
});

