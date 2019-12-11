const aboutUrl = "https://uwei.eu/kea/2_semester/eksamen/kristawerdelin/wordpress/wp-json/wp/v2/pages/7";

window.addEventListener("DOMContentLoaded", sidenVises);

function sidenVises() {
    console.log(sidenVises);
    getAbout();
    hentFooter();
}

async function getAbout() {
    const about = await fetch(aboutUrl);
    parsedResult = await about.json();
    document.querySelector(".aboutJsonHer").innerHTML = parsedResult.content.rendered;
}

async function hentFooter() {
    const footer = await fetch("inc/footer.html");
    const including = await footer.text();
    console.log(footer);
    document.querySelector("footer").innerHTML = including;
}
