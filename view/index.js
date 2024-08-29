document.addEventListener('DOMContentLoaded', function() {
    var deliveryBtn = document.getElementById('deliveryBtn');
    var locationModal = document.getElementById('locationModal');
    var saveLocationBtn = document.getElementById('saveLocationBtn');
    var closeModalBtn = document.getElementById('closeModalBtn');
    var locationSelect = document.getElementById('locationSelect');
    var selectedLocation = document.getElementById('selectedLocation');

    deliveryBtn.addEventListener('click', function() {
        locationModal.style.display = 'flex';
    });

    saveLocationBtn.addEventListener('click', function() {
        var location = locationSelect.value;
        if (location) {
            selectedLocation.textContent = ` ${location}`;
            locationModal.style.display = 'none';
            selectedLocation.style.alignItems='center';
        } else {
            alert('Please select a location.');
        }
    });

    closeModalBtn.addEventListener('click', function() {
        locationModal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == locationModal) {
            locationModal.style.display = 'none';
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const searchBtn = document.querySelector('.search-btn');
    const searchInput = document.querySelector('.search-input');

    searchBtn.addEventListener('click', function() {
        const query = searchInput.value;
        console.log('Search query:', query);
       
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const cardContainer = document.getElementById('cardContainer');
    const productName = document.querySelector('.product-name h4');

    const categoryData = {
        cars: [
            { name: 'Car 1', price: '$29.99', image: '/images/car1.jpg' },
            { name: 'Car 2', price: '$39.99', image: '/images/car2.jpg' },
            { name: 'Car 3', price: '$49.99', image: '/images/car3.jpg' }
        ],
        food: [
            { name: 'Burger', price: '$5.99', image: '/images/food1.jpg' },
            { name: 'Pizza', price: '$9.99', image: '/images/food2.jpg' },
            { name: 'Sushi', price: '$14.99', image: '/images/food3.jpg' }
        ],
        travel: [
            { name: 'Destination 1', price: '$199.99', image: '/images/travel1.jpg' },
            { name: 'Destination 2', price: '$299.99', image: '/images/travel2.jpg' },
            { name: 'Destination 3', price: '$399.99', image: '/images/travel3.jpg' }
        ],
        tech: [
            { name: 'Gadget 1', price: '$99.99', image: '/images/tech1.jpg' },
            { name: 'Gadget 2', price: '$199.99', image: '/images/tech2.jpg' },
            { name: 'Gadget 3', price: '$299.99', image: '/images/tech3.jpg' }
        ]
    };

    function renderCards(category) {
        cardContainer.innerHTML = ''; 
        const products = categoryData[category];

        productName.textContent = category.charAt(0).toUpperCase() + category.slice(1);

        products.forEach(product => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <div class="card-content">
                    <h2 class="card-title">${product.name}</h2>
                    <p class="card-price">${product.price} <i class="fas fa-plus"></i></p>
                </div>
                <div class="card-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
            `;
            cardContainer.appendChild(card);
        });
    }

    function setActiveLink(activeLink) {
        navLinks.forEach(link => {
            link.classList.remove('active'); 
        });
        activeLink.classList.add('active'); 
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = e.target.getAttribute('data-category');
            renderCards(category);
            setActiveLink(e.target); 
        });
    });

    renderCards('cars');
});
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
  slideIndex = index;
  if (slideIndex < 0) {
    slideIndex = totalSlides - 1;
  } else if (slideIndex >= totalSlides) {
    slideIndex = 0;
  }
  document.querySelector('.slider').style.transform = `translateX(-${slideIndex * 100}%)`;
}

document.querySelector('.prev').addEventListener('click', () => {
  showSlide(slideIndex - 1);
});

document.querySelector('.next').addEventListener('click', () => {
  showSlide(slideIndex + 1);
});

showSlide(slideIndex);
