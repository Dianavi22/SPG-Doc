const games = document.querySelectorAll(".game");

games.forEach((game) => {
    const link = game.querySelector(".game-link");
    const description = game.querySelector(".game-description");

    link.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        description.classList.toggle("open");
    });

    description.addEventListener("click", (event) => {
        event.stopPropagation();
    });

    game.addEventListener("click", () => {
        description.classList.toggle("open");
    });
});

function test() {
    console.log("Le fichier JavaScript est bien chargé !");
}

const detailsElements = document.querySelectorAll("details");

detailsElements.forEach((details) => {
    details.addEventListener("toggle", function () {
        if (details.open) {
            this.setAttribute("open", "open");
            this.animate(
                {
                    maxHeight: "1000px",
                    opacity: 1,
                },
                {
                    duration: 500,
                    easing: "ease-in-out",
                }
            );
        } else {
            this.animate(
                {
                    maxHeight: "0",
                    opacity: 0,
                },
                {
                    duration: 500,
                    easing: "ease-in-out",
                }
            ).onfinish = () => this.removeAttribute("open");
        }
    });
});

// Récupérer tous les éléments "details"
const detailsList = document.querySelectorAll('details');

// Ajouter un événement "toggle" pour chaque "details"
detailsList.forEach(function (details) {
    details.addEventListener('toggle', function () {
        // Vérifier si le "details" est déplié
        if (details.open) {
            // Ajouter la classe "details-open" à l'élément parent pour ajouter l'animation
            details.parentElement.classList.add('details-open');
        } else {
            // Supprimer la classe "details-open" de l'élément parent pour supprimer l'animation
            details.parentElement.classList.remove('details-open');
        }
    });
});

var details = document.querySelectorAll('details');
details.forEach(function (detail) {
    detail.addEventListener('toggle', function () {
        var summary = detail.querySelector('summary');
        if (detail.open) {
            summary.classList.add('summary-open');
        } else {
            summary.classList.remove('summary-open');
        }
    });
});

// Sélectionner toutes les cartes
const cards = document.querySelectorAll('.card');
// Ajouter un gestionnaire d'événements à chaque carde
cards.forEach(function (card) {
    card.addEventListener('click', function () {
        // Ajouter ou supprimer la classe "active" de la card
        card.classList.toggle('active');
    });
});

const docCard = document.querySelectorAll('.card');
docCard.forEach((card) => {
    const summary = card.querySelector('summary');
    summary.addEventListener('click', () => {
        card.classList.toggle('active');
    });
});

// Ajoute les attributs aria aux éléments summary
const summaryElements = document.querySelectorAll(".card-header summary");
summaryElements.forEach(summary => {
    const cardContent = summary.nextElementSibling;
    summary.setAttribute("aria-expanded", "false");
    cardContent.setAttribute("aria-hidden", "true");
});

// Toggle l'état des éléments summary et card-content
function toggleAccordion() {
    const summary = this;
    const cardContent = this.nextElementSibling;
    const isExpanded = summary.getAttribute("aria-expanded") === "true";

    summary.setAttribute("aria-expanded", !isExpanded);
    cardContent.setAttribute("aria-hidden", isExpanded);
}

// Ajoute un écouteur d'événement à chaque élément summary
summaryElements.forEach(summary => {
    summary.addEventListener("click", toggleAccordion);
});

document.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM CONTENT LOADED", event);
    // Code à exécuter une fois que le DOM est chargé
    const cards = document.querySelectorAll('.card');
    cards.forEach(function (card) {
        card.addEventListener('click', function () {
            this.classList.toggle('active');
        });
    });
    nav();
});
const cardContent = document.querySelector('.card-content');

function nav() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    burger.addEventListener('click', () => {
        // Toggle nav
        nav.classList.toggle('nav-active');

        // Animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger animation
        burger.classList.toggle('active');
    });
}