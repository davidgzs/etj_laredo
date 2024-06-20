let miImage = document.querySelector("img");
miImage.onclick = function () {
    let miSrc = miImage.getAttribute("src");
    if (miSrc === "images/firefox-icon.png") {
        miImage.setAttribute("src", "images/firefox2.PNG"); 
    } else {
        miImage.setAttribute("src","images/firefox-icon.png");
    }
};