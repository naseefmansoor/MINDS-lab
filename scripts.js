// Recent highlights
const highlights = [
    "Paper Accepted at IEEE CAI conference 2024"
];

const highlightsList = document.getElementById("highlights-list");

highlights.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    highlightsList.appendChild(li);
});

// Research topics
const researchTopics = [
    "CESMA: Cost Efficient Schema Aware Multi Agent NL2SQL Framework",
    "RIPLLES: An Automatic Embedding Generation Algorithm for Forward Forward Algorithm with CNNs",
    "SLED: Systemic Lupus Erythematosus Detection using Transformer Based Models"
];

document.getElementById("loadResearchBtn")
    .addEventListener("click", () => {
        const list = document.getElementById("research-list");
        list.innerHTML = "";
        researchTopics.forEach(topic => {
            const li = document.createElement("li");
            li.textContent = topic;
            list.appendChild(li);
        });
    });


/* ===============================
Activity Image Slideshow
=============================== */

const activityImages = [
    "assets/collage/collage1.jpg",
    "assets/collage/collage2.jpg",
    "assets/collage/collage3.jpg",
    "assets/collage/collage4.jpg",
    "assets/collage/collage5.jpg"
];

let currentActivityIndex = 0;
const activityImgElement = document.getElementById("activity-image");

setInterval(() => {
    // Fade out
    activityImgElement.classList.add("fade-out");

    setTimeout(() => {
        // Change image
        currentActivityIndex =
            (currentActivityIndex + 1) % activityImages.length;
        activityImgElement.src = activityImages[currentActivityIndex];

        // Fade in
        activityImgElement.classList.remove("fade-out");
    }, 1000); // match CSS transition time

}, 10); // total time per image
