document.addEventListener("DOMContentLoaded", () => {
    console.log("Website Loaded Successfully!");
});

// Toggle content visibility on click
function toggleContent(card) {
    const content = card.querySelector(".content");
    if(content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}