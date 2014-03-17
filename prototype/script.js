document.addEventListener("DOMContentLoaded", function() {
  var openTabButton = document.querySelector(".open-tabs");
  var menuButton = document.querySelector(".menu");
  var locationBar = document.querySelector(".location-bar");
  var tabsOverlay = document.querySelector(".tabs-overlay");
  var tabsContainer = document.querySelector(".tabs");
  var addTabButton = document.querySelector(".add-tab");
  var contentContainer = document.querySelector(".content");

  var tabs = document.querySelectorAll(".tab");

  var newTab = function() {
    var tab = document.createElement("div");
    tab.classList.add("tab");
    tab.classList.add("new-tab");
    tab.classList.add("tab-created");
    tabsContainer.insertBefore(tab, tabsContainer.firstChild);

    // There should be tab slide animation, but it's not working.
    window.setTimeout(function() {
      contentContainer.classList.add("home");
      toggleTabs();
    }, 250);

    tab.addEventListener("animationend", function() {
      tab.classList.remove("tab-created");
    });
  };

  var toggleTabs = function() {
    // startTabAnimation();

    locationBar.classList.toggle("small");
    tabsOverlay.classList.toggle("hidden");
    tabsContainer.classList.toggle("hidden");
    openTabButton.classList.toggle("hidden");
    menuButton.classList.toggle("hidden");
    addTabButton.classList.toggle("hidden");
  };

  var closeTab = function(tab) {
    tab.classList.add("tab-removed");
    tab.addEventListener("animationend", function() {
        // tabsContainer.removeChild(tab);
    }, false);
  };

  // Event listeners

  openTabButton.addEventListener("click", toggleTabs);

  locationBar.addEventListener("click", function() {
    if(locationBar.classList.contains("small")) {
      toggleTabs();
    }
  });

  addTabButton.addEventListener("click", newTab);

  tabsOverlay.addEventListener("click", function(event) {
    var classList =  event.target.classList;

    var clickedOnClose = function() {
      // Distances from top-left corner of tab
      var tabX = event.clientX - event.target.offsetLeft;
      var tabY = event.clientY - event.target.offsetTop;

      return tabX >= 120 && tabY <= 25;
    };

    var isNewTab = classList.contains("new-tab");
    var isTab = classList.contains("tab");

    if((isNewTab || isTab) && clickedOnClose()) {
      closeTab(event.target);
    }
    else if(isNewTab) {
      contentContainer.classList.add("home");
      toggleTabs();
    }
    else if(isTab) {
      contentContainer.classList.remove("home");
      toggleTabs();
    }
    else if(classList.contains("tabs")) {
      // Clicked somewhere where there is no tab.
      toggleTabs();
    }
  });
});
