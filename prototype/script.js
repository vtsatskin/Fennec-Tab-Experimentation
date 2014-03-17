document.addEventListener("DOMContentLoaded", function() {
  var openTabButton = document.querySelector(".open-tabs");
  var menuButton = document.querySelector(".menu");
  var locationBar = document.querySelector(".location-bar");
  var tabs = document.querySelector(".tabs");
  var addTabButton = document.querySelector(".add-tab");

  var toggleTabs = function() {
    locationBar.classList.toggle("small");
    tabs.classList.toggle("hidden");
    openTabButton.classList.toggle("hidden");
    menuButton.classList.toggle("hidden");
    addTabButton.classList.toggle("hidden");
  };

  // Event listeners

  openTabButton.addEventListener("click", function() {
    toggleTabs();
  });

  locationBar.addEventListener("click", function() {
    if(locationBar.classList.contains("small")) {
      toggleTabs();
    }
  });
});
