import React, { useEffect, useState } from 'react';
import { SearchIcon, MapIcon, ListIcon } from 'lucide-react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import RestaurantCard from '../components/RestaurantCard/RestaurantCard';
const MapPlaceholder: React.FC = () => <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
    <div className="text-center">
      <MapIcon size={40} className="mx-auto text-gray-400 mb-2" />
      <p className="text-gray-500">Interactive Map</p>
      <p className="text-gray-500 text-sm">
        (Restaurants nearby will be shown here)
      </p>
    </div>
  </div>;
const Nearby: React.FC = () => {
  const [viewType, setViewType] = useState<'map' | 'list'>('map');
  const restaurants = [{
    id: 1,
    name: 'Burger Delight',
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    rating: 4.8,
    reviews: 234,
    cuisine: 'Burgers',
    distance: '0.3 mi',
    hasVideo: true,
    lat: 40.712776,
    // Example coordinates
    lng: -74.005974
  }, {
    id: 2,
    name: 'Pasta Paradise',
    image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    rating: 4.5,
    reviews: 187,
    cuisine: 'Italian',
    distance: '0.5 mi',
    hasVideo: true,
    lat: 40.713776,
    lng: -74.006974
  }, {
    id: 3,
    name: 'Sushi Spot',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    rating: 4.7,
    reviews: 342,
    cuisine: 'Japanese',
    distance: '0.8 mi',
    hasVideo: false,
    lat: 40.714776,
    lng: -74.007974
  }, {
    id: 4,
    name: 'Taco Time',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    rating: 4.3,
    reviews: 156,
    cuisine: 'Mexican',
    distance: '1.2 mi',
    hasVideo: true,
    lat: 40.715776,
    lng: -74.008974
  }];
  const center = {
    lat: 40.712776,
    // Set a default map center
    lng: -74.005974
  };
  return <div className="pb-20 pt-4 px-4">
      <h1 className="text-2xl font-bold mb-4">Nearby</h1>
      <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 mb-4">
        <SearchIcon size={20} className="text-gray-500 mr-2" />
        <input type="text" placeholder="Search nearby restaurants" className="bg-transparent w-full outline-none text-gray-700" />
      </div>
      <div className="flex bg-gray-100 rounded-lg p-1 mb-4">
        <button className={`flex-1 py-2 rounded-md flex items-center justify-center ${viewType === 'map' ? 'bg-white shadow' : ''}`} onClick={() => setViewType('map')}>
          <MapIcon size={18} className="mr-2" />
          <span>Map</span>
        </button>
        <button className={`flex-1 py-2 rounded-md flex items-center justify-center ${viewType === 'list' ? 'bg-white shadow' : ''}`} onClick={() => setViewType('list')}>
          <ListIcon size={18} className="mr-2" />
          <span>List</span>
        </button>
      </div>

      {viewType === 'map' && <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
          <GoogleMap mapContainerStyle={{
        width: '100%',
        height: '400px'
      }} center={center} zoom={14}>
            {restaurants.map(restaurant => <Marker key={restaurant.id} position={{
          lat: restaurant.lat,
          lng: restaurant.lng
        }} title={restaurant.name} />)}
          </GoogleMap>
        </LoadScript>}

      <div>
        <h2 className="text-lg font-semibold mb-3">Restaurants Near You</h2>
        <div className="space-y-4">
          {restaurants.map(restaurant => <RestaurantCard key={restaurant.id} name={restaurant.name} image={restaurant.image} rating={restaurant.rating} reviews={restaurant.reviews} cuisine={restaurant.cuisine} distance={restaurant.distance} hasVideo={restaurant.hasVideo} />)}
        </div>
      </div>
    </div>;
};
export default Nearby;