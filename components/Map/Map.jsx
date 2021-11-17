import React, { useState } from "react";
import ReactMapGL from "react-map-gl";

const Map = () => {
  const [viewport, setViewport] = React.useState({
    latitude: 37.7577,
    longitude: -122.4376,
    width: "100%",
    height: "100%",
    zoom: 8,
  });
  return (
    <ReactMapGL
      mapStyle="mapbox://styles/mustapha97/ckw3eerd1183e14p4u7o8iavn"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
    ></ReactMapGL>
  );
};

export default Map;
