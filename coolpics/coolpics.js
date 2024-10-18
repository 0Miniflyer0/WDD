
const toggleButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('nav ul');

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('nav ul');

    navLinks.classList.add('hide');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('hide');
    });

    function handleResize() {
        if (window.innerWidth > 1000) {
            navLinks.classList.remove('hide');
        } else {
            if (!menuToggle.classList.contains('active')) {
                navLinks.classList.add('hide');
            }
        }
    }

    window.addEventListener('resize', handleResize);
    handleResize();
});


function viewerTemplate(imagePath, altText) {
    return `
        <div class="viewer">
            <button class="close-viewer">X</button>
            <img src="${imagePath}" alt="${altText}">
        </div>
    `;
}


function viewHandler(event) {
    const clickedElement = event.target;
    if (clickedElement.tagName === 'IMG') {
        const imageSrc = clickedElement.getAttribute('src');
        const altText = clickedElement.getAttribute('alt');
        const baseImageName = imageSrc.split('-')[0];
        const fullImageSrc = `${baseImageName}-full.jpeg`;
        document.body.insertAdjacentHTML("afterbegin", viewerTemplate(fullImageSrc, altText));
        const viewer = document.querySelector('.viewer');
        viewer.classList.add('show');
        const closeButton = document.querySelector('.close-viewer');
        closeButton.addEventListener('click', closeViewer);
    }
}


function closeViewer() {
    const viewer = document.querySelector('.viewer');
    if (viewer) {
        viewer.classList.remove('show');
        viewer.remove();  
    }
}


const gallery = document.querySelector(".gallery");
gallery.addEventListener("click", viewHandler);
