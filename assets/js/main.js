
// Search Overlay Functionality

function initializeSearchOverlay() {
    const searchIcon = document.querySelector(".search-icon");
    const searchOverlay = document.querySelector(".search-overlay");
    const closeSearch = document.querySelector(".close-search");
  
    // Show overlay
    searchIcon.addEventListener("click", function (e) {
      e.preventDefault();
      searchOverlay.style.display = "flex";
    });
  
    // Close on click of X
    closeSearch.addEventListener("click", function (e) {
      e.preventDefault();
      searchOverlay.style.display = "none";
    });
  
    // Optional: Click outside the form to close
    window.addEventListener("click", function (event) {
      if (event.target === searchOverlay) {
        searchOverlay.style.display = "none";
      }
    });
  }
  
  // Init after DOM loaded
  document.addEventListener("DOMContentLoaded", function () {
    initializeSearchOverlay();
  });
  


  // Off-canvas Menu Overlay Functionality
  function initializeOffcanvasMenu() {
    const openBtn = document.querySelector(".header-offcanvas-menu a");
    const offcanvas = document.querySelector(".offcanvas-menu");
    const overlay = document.querySelector(".offcanvas-overlay");
    const closeBtn = document.querySelector(".close-offcanvas");
  
    openBtn.addEventListener("click", function (e) {
      e.preventDefault();
      offcanvas.classList.add("open");
      overlay.classList.add("active");
    });
  
    closeBtn.addEventListener("click", function () {
      offcanvas.classList.remove("open");
      overlay.classList.remove("active");
    });
  
    overlay.addEventListener("click", function () {
      offcanvas.classList.remove("open");
      overlay.classList.remove("active");
    });
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    initializeOffcanvasMenu();
  });
  

//Off canvas menu
// Handle submenu toggle
document.querySelectorAll('.offcanvas-menu-wrapper .has-dropdown > a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();

    const submenu = this.nextElementSibling;
    const parentLi = this.parentElement;

    // Close all submenus except the one clicked
    document.querySelectorAll('.offcanvas-menu-wrapper .submenu').forEach(other => {
      if (other !== submenu) {
        other.classList.remove('open');
        const otherIcon = other.parentElement.querySelector('i');
        if (otherIcon) otherIcon.classList.remove('rotated');
      }
    });

    // Toggle current submenu
    submenu.classList.toggle('open');

    // Rotate current icon
    const icon = this.querySelector('i');
    if (icon) icon.classList.toggle('rotated');
  });
});

// Handle outside click
window.addEventListener('click', function (e) {
  const isClickInsideMenu = e.target.closest('.offcanvas-menu-wrapper');
  if (!isClickInsideMenu) {
    document.querySelectorAll('.offcanvas-menu-wrapper .submenu').forEach(menu => {
      menu.classList.remove('open');
    });

    document.querySelectorAll('.offcanvas-menu-wrapper .has-dropdown i').forEach(icon => {
      icon.classList.remove('rotated');
    });
  }
});


