document.addEventListener("DOMContentLoaded", function() {
  var openTabButton = document.querySelector(".open-tabs");
  var menuButton = document.querySelector(".menu");
  var locationBar = document.querySelector(".location-bar");
  var tabsContainer = document.querySelector(".tabs");
  var addTabButton = document.querySelector(".add-tab");
  var contentContainer = document.querySelector(".content");

  var tabs = document.querySelectorAll(".tab");

  var newTab = function() {
    var tab = document.createElement("div");
    tab.classList.add("tab");
    tab.classList.add("new-tab");
    tabsContainer.insertBefore(tab, tabsContainer.firstChild);

    // There should be tab slide animation, but it's not working.
    window.setTimeout(function() {
      contentContainer.classList.add("home");
      toggleTabs();
    }, 100);
  };

  var toggleTabs = function() {
    locationBar.classList.toggle("small");
    tabsContainer.classList.toggle("hidden");
    openTabButton.classList.toggle("hidden");
    menuButton.classList.toggle("hidden");
    addTabButton.classList.toggle("hidden");
  };

  // Event listeners

  openTabButton.addEventListener("click", toggleTabs);

  locationBar.addEventListener("click", function() {
    if(locationBar.classList.contains("small")) {
      toggleTabs();
    }
  });

  addTabButton.addEventListener("click", newTab);

  tabsContainer.addEventListener("click", function(event) {
    var classList =  event.target.classList;

    if(classList.contains("new-tab")) {
      contentContainer.classList.add("home");
      toggleTabs();
    }
    else if(classList.contains("tab")) {
      contentContainer.classList.remove("home");
      toggleTabs();
    }
    else if(classList.contains("tabs")) {
      toggleTabs();
    }
  });
});
