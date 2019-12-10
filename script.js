window.addEventListener("DOMContentLoaded", sidenVises);

function sidenVises() {
    console.log(sidenVises);
    hentFooter();
}

async function hentFooter() {
    const footer = await fetch("inc/footer.html");
    const including = await footer.text();
    console.log(footer);
    document.querySelector("footer").innerHTML = including;
}
