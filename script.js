
"use strict";

document.addEventListener("DOMContentLoaded", () => {

    // Menu mobile
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    menuToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("active");

        menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Fermer le menu après sélection
    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });

    // Année automatique dans le footer
    const currentYear = document.getElementById("currentYear");

    currentYear.textContent = new Date().getFullYear();

});

.project-gallery {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 18px;
}

.project-gallery figure {
    overflow: hidden;
    border: 1px solid var(--border);
    border-radius: 10px;
    background: #0a1220;
}

.project-gallery figure:last-child {
    grid-column: 1 / -1;
}

.project-gallery img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;
    transition: transform 0.4s ease;
}

.project-gallery figure:hover img {
    transform: scale(1.035);
}

.project-gallery figcaption {
    padding: 12px;
    color: var(--muted);
    font-size: 13px;
}

@media (max-width: 650px) {
    .project-gallery {
        grid-template-columns: 1fr;
    }

    .project-gallery figure:last-child {
        grid-column: auto;
    }
}
