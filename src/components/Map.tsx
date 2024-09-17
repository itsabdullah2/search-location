import "leaflet/dist/leaflet.css";
import type { Place } from "../api/Place";
import type { Map as LeafletMap } from "leaflet";
import { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import icon from "../data/icon.png";

interface MapProps {
  place: Place | null;
}

const Map = ({ place }: MapProps) => {
  const mapRef = useRef<LeafletMap | null>(null);

  const customIcon = L.icon({
    iconRetinaUrl: icon, // Replace with your high-resolution icon path
    iconUrl: icon, // Replace with your regular icon path
    iconSize: [40, 40], // Adjust the size as needed
    iconAnchor: [20, 41], // Adjust the anchor point if necessary
  });

  useEffect(() => {
    if (mapRef.current && place) {
      mapRef.current.flyTo([place.latitude, place.longitude]);
    }
  }, [place]); // Combined dependency array

  return (
    <MapContainer
      ref={mapRef}
      center={[40.7, -74]}
      zoom={12}
      scrollWheelZoom
      className="h-screen"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {place && (
        <Marker
          position={[place.latitude, place.longitude]}
          icon={customIcon}
        />
      )}
    </MapContainer>
  );
};

export default Map;
