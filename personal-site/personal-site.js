function filterContent(category) {
    const allSections = document.querySelectorAll('section');
    allSections.forEach(section => {
        section.style.display = 'none';
    });
    if (category === 'all') {
        allSections.forEach(section => {
            section.style.display = 'block';
        });
    } else {
        const selectedSection = document.querySelector(`.${category}-section`);
        if (selectedSection) {
            selectedSection.style.display = 'block';
        }
    }
}
