import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "./Map.css";
import "mapbox-gl/dist/mapbox-gl.css";

const Map = (props) => {
  const mapRef = useRef(null); // Ensure correct initialization
  const { center, zoom, className, style } = props;

  useEffect(() => {
    const mapboxToken =
      "pk.eyJ1IjoibXJpbmFscHkyMCIsImEiOiJjbTUzd3A4MWYyY2hiMmtwN2pxOG9qeWxvIn0.K87kHw6mwQQZ_jMmUGuCvg";
    console.log("Mapbox Token:", mapboxToken);

    if (!mapboxToken) {
      console.error("Mapbox access token is missing!");
      return;
    }

    mapboxgl.accessToken = mapboxToken;

    if (mapRef.current) {
      const map = new mapboxgl.Map({
        container: mapRef.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [center.lng, center.lat],
        zoom: zoom,
      });

      new mapboxgl.Marker().setLngLat([center.lng, center.lat]).addTo(map);

      return () => {
        map.remove();
      };
    }
  }, [center, zoom]);

  return <div ref={mapRef} className={`map ${className}`} style={style}></div>;
};

export default Map;
