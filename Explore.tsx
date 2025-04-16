import React from 'react';
import VideoCard from '../components/VideoCard/VideoCard';
const Explore = () => {
  // Mock data for wireframe demonstration
  const videos = [{
    id: 1,
    thumbnail: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38',
    title: 'Best Pizza in Brooklyn',
    vloggerName: 'FoodieAdventures',
    vloggerAvatar: 'https://randomuser.me/api/portraits/women/42.jpg',
    restaurantName: "Roberta's Pizza",
    location: 'Brooklyn, NY',
    likes: 2453,
    comments: 87
  }, {
    id: 2,
    thumbnail: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8',
    title: 'Hidden Ramen Spot',
    vloggerName: 'NoodleHunter',
    vloggerAvatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    restaurantName: 'Ichiran Ramen',
    location: 'Manhattan, NY',
    likes: 1876,
    comments: 56
  }, {
    id: 3,
    thumbnail: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Ultimate Burger Challenge',
    vloggerName: 'BurgerQueen',
    vloggerAvatar: 'https://randomuser.me/api/portraits/women/63.jpg',
    restaurantName: 'Shake Shack',
    location: 'Queens, NY',
    likes: 3542,
    comments: 112
  }];
  return <div className="bg-gray-50 min-h-full p-4">
      {/* Categories */}
      <div className="mb-4 overflow-x-auto">
        <div className="flex space-x-2 pb-2">
          {['All', 'Pizza', 'Ramen', 'Burger', 'Sushi', 'Dessert', 'Vegan', 'Breakfast'].map(category => <button key={category} className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${category === 'All' ? 'bg-orange-500 text-white' : 'bg-white text-gray-700 border border-gray-200'}`}>
              {category}
            </button>)}
        </div>
      </div>
      {/* Videos Feed */}
      <div className="space-y-4">
        {videos.map(video => <VideoCard key={video.id} {...video} />)}
      </div>
    </div>;
};
export default Explore;