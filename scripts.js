document.addEventListener("DOMContentLoaded", () => {

    /* ===============================
    Recent Highlights (Animated Top 5)
    =============================== */

    const highlights = [
        "[Dec 25] Pascaline defended her master's APP",
        "[Nov 25] Welcomes Dr. Mousumi Haque to join as an visiting researcher",
        "[Nov 25] Welcomes undergraduate student Zaina Nadeem to join as an undergraduate research assistant",
        "[Nov 25] Spencer defended his master's thesis",
        "[Nov 25] David defended his master's APP",
        "[Aug 25] Welcomes graduate student Pramudya Wicaksono to join as graduate research assistant",
        "[Aug 25] Welcomes graduate student Victor Emma Wele to join as graduate research assistant",
        "[July 25] Presented paper at Advances Machine Learning and Data Science conference 2025",
        "[May 25] Presented paper at IEEE CAI Conference 2025"
    ];

    const highlightsList = document.getElementById("highlights-list");

    if (highlightsList) {
        const topTen = highlights.slice(0, 10);

        // Duplicate list for seamless scroll
        [...topTen, ...topTen].forEach(item => {
            const li = document.createElement("li");
            li.textContent = item;
            highlightsList.appendChild(li);
        });
    }

    /* ===============================
    Recent Projects
    =============================== */

    const projects = [
        {
            title: "CESMA",
            image: "assets/projects/cesma.jpg",
            description:
                "A cost-efficient schema-aware multi-agent NL2SQL framework that improves accuracy and scalability for enterprise databases.",
            github: "https://github.com/your-org/cesma"
        },
        {
            title: "RIPPLES",
            image: "assets/projects/ripples.jpg",
            description:
                "An automatic embedding generation approach for Forward-Forward algorithms with convolutional neural networks.",
            github: "https://github.com/your-org/ripples"
        },
        {
            title: "SLED",
            image: "assets/projects/sled.jpg",
            description:
                "Transformer-based framework for early detection of Systemic Lupus Erythematosus from multimodal clinical data.",
            github: "https://github.com/your-org/sled"
        }
    ];

    const loadResearchBtn = document.getElementById("loadResearchBtn");
    const projectsContainer = document.getElementById("projects-container");

    if (loadResearchBtn && projectsContainer) {
        loadResearchBtn.addEventListener("click", () => {
        projectsContainer.innerHTML = "";

        projects.forEach(project => {
            const card = document.createElement("div");
            card.className = "project-card";

            card.innerHTML = `
                <img src="${project.image}"
                    alt="${project.title}"
                    onerror="this.onerror=null; this.src='assets/projects/default.jpg';">

                <div class="project-content">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>

                    ${
                        project.github
                            ? `<a href="${project.github}"
                                class="github-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub repository for ${project.title}">
                                ${githubIconSVG()}
                            </a>`
                            : ""
                    }
                </div>
            `;

            projectsContainer.appendChild(card);
        });
    });

    }

    function githubIconSVG() {
        return `
            <svg class="github-icon"
                viewBox="0 0 24 24"
                aria-hidden="true">
                <path fill="currentColor"
                    d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9
                    .6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.5-3.9-1.5
                    -.5-1.2-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7
                    1.1.1 1.7 1.1 1.7 1.1 1 .1.7-.8.7-.8
                    .4-.7.9-.9 1.4-.9-2.5-.3-5.1-1.3-5.1-5.7
                    0-1.3.5-2.3 1.2-3.2-.1-.3-.5-1.5.1-3.1
                    0 0 1-.3 3.2 1.2a11.3 11.3 0 0 1 5.8 0
                    c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1
                    .8.9 1.2 1.9 1.2 3.2 0 4.4-2.6 5.4-5.1 5.7
                    .4.3.8.9.8 1.8v2.7c0 .3.2.7.8.6
                    A11.5 11.5 0 0 0 23.5 12
                    C23.5 5.7 18.3.5 12 .5z"/>
            </svg>
        `;
    }

    /* ===============================
       Activity Image Slideshow
    =============================== */

    const activityImages = [
        "assets/collage/collage1.jpg",
        "assets/collage/collage2.jpg"
        // "assets/collage/collage3.jpg",
        // "assets/collage/collage4.jpg"
        // "assets/collage/collage5.jpg"
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
