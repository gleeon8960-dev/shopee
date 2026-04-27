document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Scroll Reveal Animation for Flash Sale Items
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const items = entry.target.querySelectorAll('.reveal-item');
                items.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('active');
                    }, index * 150);
                });
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const flashSaleSection = document.getElementById('flashSaleContainer');
    if (flashSaleSection) {
        observer.observe(flashSaleSection);
    }

    // 2. Account Modal Logic
    const accountBtn = document.getElementById('accountBtn');
    const authModal = document.getElementById('authModal');
    const closeModal = document.getElementById('closeModal');

    // Open Modal
    accountBtn.addEventListener('click', () => {
        authModal.classList.add('active');
    });

    // Close Modal via 'X' button
    closeModal.addEventListener('click', () => {
        authModal.classList.remove('active');
    });

    // Close Modal by clicking outside the content box
    window.addEventListener('click', (e) => {
        if (e.target === authModal) {
            authModal.classList.remove('active');
        }
    });
    
    // --- Search Suggestions Logic ---
    const searchInput = document.getElementById('searchInput');
    const searchSuggestions = document.getElementById('searchSuggestions');

    // Show suggestions when clicking inside the input
    searchInput.addEventListener('focus', () => {
        searchSuggestions.classList.add('active');
    });

    // Hide suggestions when clicking anywhere outside the search area
    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !searchSuggestions.contains(e.target)) {
            searchSuggestions.classList.remove('active');
        }
    });




});