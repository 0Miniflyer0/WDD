
const sectionsData = [
    {
        category: "keto",
        title: "Keto & High Intensity Training",
        content: "High Intensity Interval Training is all about pushing your physical limits, and Keto is a low-carb diet, which helps you enter ketosis.",
        link: "personal-site-child-1.html"
    },
    {
        category: "fasting",
        title: "Intermittent Fasting & Strength Training",
        content: "Intermittent fasting limits your eating for the day, and strength training helps with general muscle development.",
        link: "personal-site-child-2.html"
    },
    {
        category: "mediterranean",
        title: "Mediterranean Diet & Cardio",
        content: "A diet based on the foods eaten in Mediterranean countries, paired with good old cardio exercises!",
        link: "personal-site-child-3.html"
    }
];

function createSection(sectionData) {
    const section = document.createElement("section");
    section.className = `${sectionData.category}-section`;

    const title = document.createElement("h2");
    title.textContent = sectionData.title;

    const paragraph = document.createElement("p");
    paragraph.textContent = sectionData.content;

    const button = document.createElement("button");
    button.textContent = `Learn More about ${sectionData.title}`;
    button.addEventListener("click", () => {
        window.location.href = sectionData.link;
    });

    section.appendChild(title);
    section.appendChild(paragraph);
    section.appendChild(button);

    return section;
}

function renderSections(category) {
    const container = document.querySelector("body"); 


    document.querySelectorAll("section").forEach(section => {
        section.remove();
    });

    if (category === "all") {
        sectionsData.forEach(data => {
            const section = createSection(data);
            container.appendChild(section);
        });
    } else {
        const data = sectionsData.find(data => data.category === category);
        if (data) {
            const section = createSection(data);
            container.appendChild(section);
        }
    }
}

const filterButtons = document.querySelectorAll(".filter-btn");
filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const category = button.getAttribute("onclick").match(/\'(.*?)\'/)[1];
        renderSections(category);
    });
});

renderSections("all");
