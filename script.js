// Fonction dark-mode
    document.addEventListener('DOMContentLoaded', (event) => {
        // Check if dark mode is enabled in localStorage
        if (localStorage.getItem('darkMode') === 'enabled') {
            document.body.classList.add('dark-mode');
        }

        const darkModeButton = document.getElementById('darkmode-button');

        darkModeButton.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');

            // Save the current state of dark mode in localStorage
            if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('darkMode', 'enabled');
            } else {
                localStorage.removeItem('darkMode');
            }
        });
    });


// Fonction du bouton copier
    function copyButton() {
        // Trouver l'élément pre (contenant le code) à partir du bouton de copie
        const codeBox = event.target.closest(".code-box");
        const codeContent = codeBox.querySelector("pre");

        // Extraire le texte à partir de l'élément pre
        const textToCopy = codeContent.innerText.trim();

        // Copier le texte dans le presse-papiers
        navigator.clipboard.writeText(textToCopy).then(function() {
            alert("Code copié dans le presse-papiers !");
        }).catch(function(err) {
            console.error('Erreur lors de la copie du texte : ', err);
        });
    }

    // script.js

// script.js

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('html-entry');
    const sections = document.querySelectorAll('main section');

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();

        sections.forEach(section => {
            const sectionId = section.id.toLowerCase();
            if (sectionId.includes(query)) {
                section.classList.remove('hidden');
            } else {
                section.classList.add('hidden');
            }
        });
    });
});



