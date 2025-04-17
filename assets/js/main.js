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
  