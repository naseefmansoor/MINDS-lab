document.addEventListener("DOMContentLoaded", () => {

    /* ===============================
       Recent Highlights
    =============================== */

    const highlights = [
        "Paper Accepted at IEEE CAI Conference 2024"
    ];

    const highlightsList = document.getElementById("highlights-list");
    if (highlightsList) {
        highlights.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item;
            highlightsList.appendChild(li);
        });
    }

    /* ===============================
       Research Topics Button
    =============================== */

    const researchTopics = [
        "CESMA: Cost Efficient Schema Aware Multi Agent NL2SQL Framework",
        "RIPPLES: Automatic Embedding Generation for Forward-Forward CNNs",
        "SLED: Systemic Lupus Erythematosus Detection using Transformer Models"
    ];

    const loadResearchBtn = document.getElementById("loadResearchBtn");
    const researchList = document.getElementById("research-list");

    if (loadResearchBtn && researchList) {
        loadResearchBtn.addEventListener("click", () => {
            researchList.innerHTML = "";
            researchTopics.forEach(topic => {
                const li = document.createElement("li");
                li.textContent = topic;
                researchList.appendChild(li);
            });
        });
    }

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

    const activityImgElement = document.getElementById("activity-image");
    if (!activityImgElement || activityImages.length === 0) return;

    let currentActivityIndex = 0;
    const displayTime = 3000; // image stays visible
    const fadeTime = 1000;    // fade duration

    function runSlideshow() {
        setTimeout(() => {
            // Fade out
            activityImgElement.classList.add("fade-out");

            setTimeout(() => {
                // Change image
                currentActivityIndex =
                    (currentActivityIndex + 1) % activityImages.length;

                activityImgElement.src = activityImages[currentActivityIndex];

                // Fade in
                activityImgElement.classList.remove("fade-out");

                // Next cycle
                runSlideshow();
            }, fadeTime);

        }, displayTime);
    }

    // Start slideshow
    runSlideshow();

});
