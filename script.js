const aboutUrl = "https://uwei.eu/kea/2_semester/eksamen/kristawerdelin/wordpress/wp-json/wp/v2/pages/7";

const aboutCitationUrl = "https://uwei.eu/kea/2_semester/eksamen/kristawerdelin/wordpress/wp-json/wp/v2/pages/305";

const aboutPt2Url = "https://uwei.eu/kea/2_semester/eksamen/kristawerdelin/wordpress/wp-json/wp/v2/pages/307";

const paperworksUrl = "https://uwei.eu/kea/2_semester/eksamen/kristawerdelin/wordpress/wp-json/wp/v2/pages/320";

const citylifeUrl = "https://uwei.eu/kea/2_semester/eksamen/kristawerdelin/wordpress/wp-json/wp/v2/pages/322";

const landscapesUrl = "https://uwei.eu/kea/2_semester/eksamen/kristawerdelin/wordpress/wp-json/wp/v2/pages/325";

const blackpoetryUrl = "https://uwei.eu/kea/2_semester/eksamen/kristawerdelin/wordpress/wp-json/wp/v2/pages/327"

window.addEventListener("DOMContentLoaded", sidenVises);

function sidenVises() {
    console.log(sidenVises);
    getAbout();
    getAboutCitation();
    getAboutPt2();
    getPaperworks();
    getCitylife();
    getLandscapes();
    getBlackpoetry();
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

async function getAboutPt2() {
    const aboutPt2 = await fetch(aboutPt2Url);
    parsedResult = await aboutPt2.json();
    document.querySelector(".aboutPt2").innerHTML = parsedResult.content.rendered;
}

async function getPaperworks() {
    const paperworks = await fetch(paperworksUrl);
    parsedResult = await paperworks.json();
    document.querySelector(".paperworks").innerHTML = parsedResult.content.rendered;
}

async function getCitylife() {
    const citylife = await fetch(citylifeUrl);
    parsedResult = await citylife.json();
    document.querySelector(".citylife").innerHTML = parsedResult.content.rendered;
}

async function getLandscapes() {
    const landscapes = await fetch(landscapesUrl);
    parsedResult = await landscapes.json();
    document.querySelector(".landscapes").innerHTML = parsedResult.content.rendered;
}

async function getBlackpoetry() {
    const blackpoetry = await fetch(blackpoetryUrl);
    parsedResult = await blackpoetry.json();
    document.querySelector(".blackpoetry").innerHTML = parsedResult.content.rendered;
}
