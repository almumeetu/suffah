
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
  