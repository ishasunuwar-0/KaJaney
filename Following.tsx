import React from 'react';
import VideoCard from '../components/VideoCard/VideoCard';
import { PlusIcon } from 'lucide-react';
const Following = () => {
  // Mock data for vloggers
  const vloggers = [{
    id: 1,
    name: 'FoodieAdventures',
    avatar: 'https://randomuser.me/api/portraits/women/42.jpg',
    newContent: true
  }, {
    id: 2,
    name: 'NoodleHunter',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    newContent: true
  }, {
    id: 3,
    name: 'BurgerQueen',
    avatar: 'https://randomuser.me/api/portraits/women/63.jpg',
    newContent: false
  }, {
    id: 4,
    name: 'SushiMaster',
    avatar: 'https://randomuser.me/api/portraits/men/83.jpg',
    newContent: false
  }, {
    id: 5,
    name: 'VeganVibes',
    avatar: 'https://randomuser.me/api/portraits/women/22.jpg',
    newContent: true
  }];
  // Mock data for videos from followed vloggers
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
  }];
  // Mock data for suggested vloggers
  const suggestedVloggers = [{
    id: 101,
    name: 'DessertDiva',
    avatar: 'https://randomuser.me/api/portraits/women/52.jpg',
    followers: '245K'
  }, {
    id: 102,
    name: 'StreetFoodKing',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
    followers: '512K'
  }];
  return <div className="bg-gray-50 min-h-full">
      {/* Vloggers Stories */}
      <div className="bg-white p-4 overflow-x-auto">
        <div className="flex space-x-4">
          {vloggers.map(vlogger => <div key={vlogger.id} className="flex flex-col items-center">
              <div className={`relative ${vlogger.newContent ? 'ring-2 ring-orange-500 rounded-full p-0.5' : ''}`}>
                <img src={vlogger.avatar} alt={vlogger.name} className="w-16 h-16 rounded-full object-cover" />
              </div>
              <span className="text-xs mt-1 max-w-[70px] truncate">
                {vlogger.name}
              </span>
            </div>)}
        </div>
      </div>
      {/* Videos Feed */}
      <div className="p-4 space-y-4">
        {videos.map(video => <VideoCard key={video.id} {...video} />)}
      </div>
      {/* Suggested Vloggers */}
      <div className="p-4 bg-white mt-2">
        <h3 className="font-semibold mb-3">Suggested Vloggers</h3>
        <div className="space-y-3">
          {suggestedVloggers.map(vlogger => <div key={vlogger.id} className="flex items-center justify-between">
              <div className="flex items-center">
                <img src={vlogger.avatar} alt={vlogger.name} className="w-10 h-10 rounded-full mr-3" />
                <div>
                  <p className="font-medium">{vlogger.name}</p>
                  <p className="text-xs text-gray-500">
                    {vlogger.followers} followers
                  </p>
                </div>
              </div>
              <button className="bg-orange-500 text-white rounded-full p-1">
                <PlusIcon className="h-5 w-5" />
              </button>
            </div>)}
        </div>
      </div>
    </div>;
};
export default Following;