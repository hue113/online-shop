import React, { useState, useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";

import { stores } from "../../../data/stores";
import Finder from "./Finder.component";

mapboxgl.accessToken = "p.";

const Map = () => {
  const mapContainerRef = useRef(null);
  const [filteredStores, setFilteredStores] = useState(null);

  const [state] = useState({
    lng: -84.5638875,
    lat: 46.5318913,
    zoom: 3,
  });
  const coordinates = [];
  stores.forEach((i) => coordinates.push(i.coordinates));

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [state.lng, state.lat],
      zoom: state.zoom,
    });

    // add navigation control (zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), "bottom-right");

    stores.map((i) =>
      new mapboxgl.Marker()
        .setLngLat(i.coordinates)
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }).setHTML(
            `<strong>${i.name}</strong><h6 id='aabb'>${i.address1}</h6><h6>${i.address2}</h6><h6>${i.postalCode}</h6>`
          )
        )
        .addTo(map)
    );

    map.on("click", function (e) {
      const lng = e.lngLat.lng;
      const lat = e.lngLat.lat;

      let filteredStores = stores.filter(
        (i) =>
          Math.abs(i.coordinates[0] - lng) < 1.2 &&
          Math.abs(i.coordinates[1] - lat) < 2
      );
      setFilteredStores(filteredStores);
    });

    // clean up on unmount
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    var button = document.getElementsByClassName("mapboxgl-popup-close-button");
    // console.log(button[0]);
    if (button[0])
      button[0].addEventListener("click", () => {
        // console.log("click");
        setFilteredStores(null);
      });
    if (button[0] === undefined) setFilteredStores(null);
  }, [filteredStores]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3 order-lg-2">
          <Finder filteredStores={filteredStores} stores={stores} />
        </div>
        <div className="col-lg-9">
          <div className="section map">
            <div className="map-container" ref={mapContainerRef} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Map;
