import React from 'react';
import { ChevronRightIcon, StarIcon } from 'lucide-react';
const TopChoice = () => {
  // Mock data for top choices
  const categories = [{
    id: 1,
    name: 'Best Pizza Places',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38',
    count: 12
  }, {
    id: 2,
    name: 'Hidden Gems',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5',
    count: 8
  }, {
    id: 3,
    name: "Vloggers' Favorites",
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
    count: 15
  }];
  const featuredRestaurants = [{
    id: 1,
    name: "Roberta's Pizza",
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38',
    rating: 4.7,
    cuisine: 'Italian',
    price: '$$',
    featured: 'Best Margherita Pizza'
  }, {
    id: 2,
    name: 'Ichiran Ramen',
    image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8',
    rating: 4.5,
    cuisine: 'Japanese',
    price: '$$',
    featured: 'Top Rated Ramen'
  }, {
    id: 3,
    name: 'Shake Shack',
    image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    rating: 4.3,
    cuisine: 'American',
    price: '$$',
    featured: 'Best Burger Joint'
  }];
  return <div className="bg-gray-50 min-h-full p-4">
      {/* Curated Collections */}
      <section className="mb-6">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-semibold">Curated Collections</h2>
          <button className="text-orange-500 text-sm">See All</button>
        </div>
        <div className="space-y-3">
          {categories.map(category => <div key={category.id} className="bg-white rounded-lg overflow-hidden shadow-sm flex items-center">
              <div className="w-1/3 h-24">
                <img src={category.image} alt={category.name} className="h-full w-full object-cover" />
              </div>
              <div className="flex-1 p-3 flex justify-between items-center">
                <div>
                  <h3 className="font-bold">{category.name}</h3>
                  <p className="text-sm text-gray-500">
                    {category.count} places
                  </p>
                </div>
                <ChevronRightIcon className="h-5 w-5 text-gray-400" />
              </div>
            </div>)}
        </div>
      </section>
      {/* Award Winners */}
      <section>
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-semibold">Award Winners</h2>
          <button className="text-orange-500 text-sm">See All</button>
        </div>
        <div className="space-y-4">
          {featuredRestaurants.map(restaurant => <div key={restaurant.id} className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="relative">
                <img src={restaurant.image} alt={restaurant.name} className="w-full h-40 object-cover" />
                <div className="absolute top-0 right-0 bg-orange-500 text-white px-3 py-1 rounded-bl-lg text-sm font-medium">
                  {restaurant.featured}
                </div>
              </div>
              <div className="p-3">
                <h3 className="font-bold text-lg">{restaurant.name}</h3>
                <div className="flex items-center mt-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => <StarIcon key={i} className={`h-4 w-4 ${i < Math.floor(restaurant.rating) ? 'text-yellow-500' : 'text-gray-300'}`} fill={i < Math.floor(restaurant.rating) ? 'currentColor' : 'none'} />)}
                  </div>
                  <span className="ml-1 text-sm">{restaurant.rating}</span>
                </div>
                <div className="flex mt-2 text-sm text-gray-600">
                  <span>{restaurant.cuisine}</span>
                  <span className="mx-2">•</span>
                  <span>{restaurant.price}</span>
                </div>
              </div>
            </div>)}
        </div>
      </section>
    </div>;
};
export default TopChoice;