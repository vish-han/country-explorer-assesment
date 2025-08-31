import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function CountryMap() {
    const position: [number, number] = [28.6139, 77.2090]; // Example: New Delhi, India

    return (
        <MapContainer center={position} zoom={4} style={{ height: "500px", width: "100%" }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>India</Popup>
            </Marker>
        </MapContainer>
    );
}
