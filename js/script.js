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