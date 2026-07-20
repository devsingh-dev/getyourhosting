// Function to load external HTML
async function loadComponent(elementId, filePath) {
    try {
        const response = await fetch(filePath);
        if (response.ok) {
            const content = await response.text();
            document.getElementById(elementId).innerHTML = content;
            
            // Agar navbar load ho raha hai, toh dropdown logic re-initialize karein
            if (elementId === 'navbar-placeholder') {
                initNavbarLogic();
            }
        } else {
            console.error(`Error loading ${filePath}: ${response.statusText}`);
        }
    } catch (error) {
        console.error("Fetch error:", error);
    }
}

// Navbar ke liye hover ya mobile toggle logic (agar JS se handle kar rahe hain)
function initNavbarLogic() {
    // Yahan aap apna Mobile Menu toggle wala code likh sakte hain
    console.log("Navbar Loaded & Ready!");
}

// Files load karein
window.onload = () => {
    loadComponent('navbar-placeholder', 'navbar.html');
    loadComponent('footer-placeholder', 'footer.html');
};

// ==========================================
document.addEventListener("click", function(event) {
    const navMenu = document.getElementById('nav-menu');
    const hamburgerIcon = document.getElementById('hamburger-icon');

    // 1. Hamburger Icon click handle karein
    if (event.target && event.target.id === 'hamburger-icon') {
        navMenu.classList.toggle('active');
        hamburgerIcon.textContent = navMenu.classList.contains('active') ? "✖" : "☰";
    }

    // 2. Dropdown Titles (Hosting, Comparison etc.) click handle karein
    // Hum check kar rahe hain ki kya click hone wala link ek dropdown ke andar hai
    const dropdownToggle = event.target.closest('#nav-menu > li > a');
    
    if (dropdownToggle && window.innerWidth <= 768) {
        const parentLi = dropdownToggle.parentElement;
        const subMenu = parentLi.querySelector('ul');

        // Agar iske andar sub-menu (ul) hai, toh link ko follow mat karo aur menu kholo
        if (subMenu) {
            event.preventDefault(); // Page reload hone se rokne ke liye
            parentLi.classList.toggle('open');
        }
    }
    
    // 3. Agar menu khula hai aur user bahar click kare toh menu band ho jaye
    if (!event.target.closest('nav') && navMenu && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        hamburgerIcon.textContent = "☰";
    }
});