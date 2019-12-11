const aboutUrl = "https://uwei.eu/kea/2_semester/eksamen/kristawerdelin/wordpress/wp-json/wp/v2/pages/7";

const aboutCitationUrl = "https://uwei.eu/kea/2_semester/eksamen/kristawerdelin/wordpress/wp-json/wp/v2/pages/305";

const aboutPt2Url = "https://uwei.eu/kea/2_semester/eksamen/kristawerdelin/wordpress/wp-json/wp/v2/pages/307";

window.addEventListener("DOMContentLoaded", sidenVises);

function sidenVises() {
    console.log(sidenVises);
    getAbout();
    getAboutCitation();
<<<<<<< HEAD
=======
    getAboutPt2();
    hentFooter();
>>>>>>> origin/master
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

async function getAboutPt2() {
    const aboutPt2 = await fetch(aboutPt2Url);
    parsedResult = await aboutPt2.json();
    document.querySelector(".aboutPt2").innerHTML = parsedResult.content.rendered;
}


