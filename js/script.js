document.addEventListener("DOMContentLoaded", function () {
     const loadingPage = document.getElementById("loading-page");
     const mainContent = document.getElementById("main-content");

     setTimeout(function () {
          loadingPage.style.transition = "opacity 1s ease-in-out";
          loadingPage.style.opacity = 0;
     }, 4000);

     setTimeout(function () {
          loadingPage.style.display = "none";
          mainContent.style.display = "block";
     }, 5000);
});


function findNearbyHospitals() {
     if ("geolocation" in navigator) {
          navigator.geolocation.getCurrentPosition(function (position) {
               const latitude = position.coords.latitude;
               const longitude = position.coords.longitude;

               const mapsLink = `https://www.google.com/maps/search/hospitals/@${latitude},${longitude},12z`;

               window.open(mapsLink, "_blank");
          }, function (error) {
               console.error("Error getting location:", error.message);
          });
     } else {
          alert("Geolocation is not supported by your browser");
     }
}


function findNearbyPoliceStations() {
     if ("geolocation" in navigator) {
          navigator.geolocation.getCurrentPosition(function (position) {
               const latitude = position.coords.latitude;
               const longitude = position.coords.longitude;

               const mapsLink = `https://www.google.com/maps/search/police+stations/@${latitude},${longitude},12z`;

               window.open(mapsLink, "_blank");
          }, function (error) {
               console.error("Error getting location:", error.message);
          });
     } else {
          alert("Geolocation is not supported by your browser");
     }
}


function findNearbyFireStations() {
     if ("geolocation" in navigator) {
          navigator.geolocation.getCurrentPosition(function (position) {
               const latitude = position.coords.latitude;
               const longitude = position.coords.longitude;

               const mapsLink = `https://www.google.com/maps/search/fire+stations/@${latitude},${longitude},12z`;

               window.open(mapsLink, "_blank");
          }, function (error) {
               console.error("Error getting location:", error.message);
          });
     } else {
          alert("Geolocation is not supported by your browser");
     }
}