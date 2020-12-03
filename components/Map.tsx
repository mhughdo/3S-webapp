import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Map = () => (
  <MapContainer
    className='map-container'
    center={[51.505, -0.09]}
    zoom={13}
    scrollWheelZoom={false}
    style={{ height: '100%' }}>
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    />
    <Marker position={[51.505, -0.09]}>
      <Popup>
        <b className='popup-text'>Awesome Hotel</b>
      </Popup>
    </Marker>
  </MapContainer>
)

export default Map
