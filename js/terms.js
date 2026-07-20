document.addEventListener('DOMContentLoaded', () => {
    const accordionHeaders = document.querySelectorAll('.terms-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const parent = header.parentElement;
            
            // Close other open items (Optional)
            document.querySelectorAll('.terms-item').forEach(item => {
                if (item !== parent) item.classList.remove('active');
            });

            // Toggle current item
            parent.classList.toggle('active');
        });
    });
});
console.log("terms are seen")