const aboutUrl = "https://uwei.eu/kea/2_semester/eksamen/kristawerdelin/wordpress/wp-json/wp/v2/pages/7";

const aboutCitationUrl = "https://uwei.eu/kea/2_semester/eksamen/kristawerdelin/wordpress/wp-json/wp/v2/pages/305";

const aboutPt2Url = "https://uwei.eu/kea/2_semester/eksamen/kristawerdelin/wordpress/wp-json/wp/v2/pages/307";

window.addEventListener("DOMContentLoaded", sidenVises);

function sidenVises() {
    console.log(sidenVises);
    getAbout();
    getAboutCitation();
    hentFooter();
}

async function getAbout() {
    const about = await fetch(aboutUrl);
    parsedResult = await about.json();
    document.querySelector(".about").innerHTML = parsedResult.content.rendered;
}

async function getAboutCitation() {
    const aboutCitation = await fetch(aboutCitationUrl);
    parsedResult = await aboutCitation.json();
    document.querySelector(".aboutCitation").innerHTML = parsedResult.content.rendered;
}

async function hentFooter() {
    const footer = await fetch("inc/footer.html");
    const including = await footer.text();
    console.log(footer);
    document.querySelector("footer").innerHTML = including;
}
