const mapboxgl = require("mapbox-gl");
// const { buildMarker } = require("./marker");

mapboxgl.accessToken =
  "pk.eyJ1IjoiaWtuZXBwZXIiLCJhIjoiY2pnbzVrbDhqMDl4dzMzcXEzemlqb21reiJ9.-q-oaCGe1WKcPIG9vi48GQ";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705],
  zoom: 12,
  style: "mapbox://styles/mapbox/streets-v10"
});

const icons = {
  hotels: "http://i.imgur.com/D9574Cu.png",
  restaurants: "http://i.imgur.com/cqR6pUI.png",
  activities: "http://i.imgur.com/WbMOfMl.png"
};

const markerDomEl = document.createElement("div");
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
// make sure to fix url so it has "url ( ... )" added to it

const test = new mapboxgl.Marker(markerDomEl).setLngLat([-74.022, 40.705])
test.addTo(map);

// const buildMarker = (type, coords) => {
//   const markerDomEl = document.createElement("div");
//   markerDomEl.style.width = "32px";
//   markerDomEl.style.height = "39px";
//   markerDomEl.style.backgroundImage = icons[type];

//   return new mapboxgl.Marker(markerDomEl).setLngLat(coords);
// };



// const marker = buildMarker('hotels', [-74.009, 40.705]);
// console.log(marker);
// marker.addTo(map);
