document.addEventListener('DOMContentLoaded', () => {
    const dropdownBtns = document.querySelectorAll('.dropdown-btn');

    dropdownBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const dropdownContainer = btn.nextElementSibling;
            dropdownContainer.style.display = dropdownContainer.style.display === 'block' ? 'none' : 'block';
        });
    });
});

document.getElementById('addItemButton').addEventListener('click', function() {
    document.getElementById('itemPopup').style.display = 'flex';
  });
  
  document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('itemPopup').style.display = 'none';
  });
  
  document.getElementById('cancelButton').addEventListener('click', function() {
    document.getElementById('itemPopup').style.display = 'none';
  });
  
  document.getElementById('itemForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('itemPopup').style.display = 'none';
  });
  



document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const sidebar = document.querySelector('.sidebar');
    const ordersSection00 = document.querySelector('.orders_section00');
    const ordersSection = document.querySelector('.orders_section');

    navToggle.addEventListener('click', function() {
        
        sidebar.classList.toggle('sidebar-active');

        if (sidebar.classList.contains('sidebar-active')) {
            sidebar.style.transform = 'translateX(-550px)'; 
            ordersSection00.style.width = '100%';
            ordersSection.style.width = '100%';
            ordersSection00.style.marginLeft = '0';
            ordersSection.style.marginLeft = '0';
            ordersSection.style.padding = '0';
            ordersSection00.style.padding = '10px 0 10px 0';
            sidebar.style.transition = 'transform 0.3s ease';
        } else {
            sidebar.style.transform = 'translateX(0)'; 
            ordersSection00.style.width = '60%';
            ordersSection.style.width = '60%';
            ordersSection00.style.marginLeft = '35%';
            ordersSection.style.marginLeft = '35%';
            
            ordersSection00.style.padding = '10px 0 10px 0';
        }
    });
});
