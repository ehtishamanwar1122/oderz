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
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const category = this.getAttribute('data-category');
        const section = document.getElementById(category);
        
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
