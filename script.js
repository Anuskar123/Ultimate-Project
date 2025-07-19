// DOKO Grocery JS
// Product Filter Tabs
const filterTabs = document.querySelectorAll('.filter-tab');
const productCards = document.querySelectorAll('.product-card');

filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelector('.filter-tab.active').classList.remove('active');
        tab.classList.add('active');
        const filter = tab.getAttribute('data-filter');
        productCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Add to Cart Button
const cartCount = document.querySelector('.cart-count');
const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
let cartTotal = 0;
addToCartBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        cartTotal++;
        cartCount.textContent = cartTotal;
        btn.classList.add('added');
        setTimeout(() => btn.classList.remove('added'), 500);
    });
});

// Wishlist Icon Toggle
const wishlistIcons = document.querySelectorAll('.wishlist-icon');
wishlistIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        icon.classList.toggle('active');
        if (icon.classList.contains('active')) {
            icon.style.color = '#c0392b';
        } else {
            icon.style.color = '#e74c3c';
        }
    });
});

// Show More Products Button (Demo: just toggles visibility)
const showMoreBtn = document.querySelector('.show-more-btn');
showMoreBtn && showMoreBtn.addEventListener('click', () => {
    productCards.forEach(card => {
        card.style.display = 'block';
    });
    document.querySelector('.filter-tab.active').classList.remove('active');
    filterTabs[0].classList.add('active');
});

// Newsletter Form Submission
const newsletterForm = document.querySelector('.newsletter-form');
newsletterForm && newsletterForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const emailInput = newsletterForm.querySelector('.newsletter-input');
    if (emailInput.value) {
        alert('Thank you for subscribing!');
        emailInput.value = '';
    }
});

// Category Navigation Arrows (Demo: cycles through categories)
const categoryCards = document.querySelectorAll('.category-card');
let currentCategory = 0;
const prevCategoryBtn = document.getElementById('prevCategory');
const nextCategoryBtn = document.getElementById('nextCategory');
function showCategory(index) {
    categoryCards.forEach((card, i) => {
        card.style.display = i === index ? 'block' : 'none';
    });
}
if (categoryCards.length > 0) {
    showCategory(currentCategory);
    prevCategoryBtn && prevCategoryBtn.addEventListener('click', () => {
        currentCategory = (currentCategory - 1 + categoryCards.length) % categoryCards.length;
        showCategory(currentCategory);
    });
    nextCategoryBtn && nextCategoryBtn.addEventListener('click', () => {
        currentCategory = (currentCategory + 1) % categoryCards.length;
        showCategory(currentCategory);
    });
}

// Responsive Menu (if needed)
// Add your mobile menu JS here if you implement one
