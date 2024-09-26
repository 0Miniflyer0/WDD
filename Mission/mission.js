const themeSelector = document.querySelector('select');
themeSelector.addEventListener('change', changeTheme);
function changeTheme() {
    const selectedOption = themeSelector.value; 
    const body = document.body; 
    const logo = document.querySelector('.logo'); 
    if (selectedOption === "dark") {
        body.classList.add('dark'); 
        logo.src = "images/byui-logo_white.webp"; 
    } else {
        body.classList.remove('dark'); 
        logo.src = "images/byui-logo_blue.webp"; 
    }
}
