// https://developers.google.com/maps/documentation/javascript/tutorial
// var map;
// function initMap() {
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: -34.397, lng: 150.644 },
//     zoom: 8
//   });
// }

// Custom initialization
// Initialize and add the map
// function initMap() {
//   // Your location
//   const loc = { lat: 30.267153, lng: -97.743057 };
//   // Centered map on location
//   const map = new google.maps.Map(document.querySelector(".map"), {
//     zoom: 14,
//     center: loc
//   });
//   // The marker, positioned at location
//   const marker = new google.maps.Marker({ position: loc, map: map });
// }

// Smooth Scrolling
$("#navbar a").on("click", function(event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 65
      },
      800
    );
  }
});

// Sticky menu background
window.addEventListener("scroll", function() {
  if (window.scrollY > 65) {
    document.querySelector("#navbar").style.opacity = 0.9;
  } else {
    document.querySelector("#navbar").style.opacity = 1;
  }
});
