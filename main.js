document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Toggle
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }

  // Active Link State based on current URL
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    // Basic exact match or index match
    if (link.getAttribute('href') === currentPath.split('/').pop() || 
        (currentPath.endsWith('/') && link.getAttribute('href') === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Filter functionality for case studies
  const filterSelects = document.querySelectorAll('.filter-select');
  if (filterSelects.length > 0) {
    filterSelects.forEach(select => {
      select.addEventListener('change', () => {
        // Mock filtering purely for interaction demonstration
        console.log('Filtering by:', select.value);
        const cards = document.querySelectorAll('.case-study-card');
        // Simple animation to show it's "doing" something
        cards.forEach(card => card.style.opacity = '0.5');
        setTimeout(() => {
          cards.forEach(card => card.style.opacity = '1');
        }, 300);
      });
    });
  }
});
