document.addEventListener("DOMContentLoaded", function () {
    // Display current date in the footer in dd/mm/yyyy format
    const dateElement = document.getElementById("current-date");
    const currentDate = new Date();
    const formattedDate = 
        ("0" + currentDate.getDate()).slice(-2) + "/" + 
        ("0" + (currentDate.getMonth() + 1)).slice(-2) + "/" + 
        currentDate.getFullYear();
    dateElement.textContent = formattedDate;

    // Photo hover effect
    const photoFrame = document.querySelector(".photo-frame");
    const photos = document.querySelectorAll(".photo-frame img");

    photoFrame.addEventListener("mouseover", function () {
        photos[0].classList.add("hidden");
        photos[1].classList.remove("hidden");
    });

    photoFrame.addEventListener("mouseout", function () {
        photos[0].classList.remove("hidden");
        photos[1].classList.add("hidden");
    });
});

