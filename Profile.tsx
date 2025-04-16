import React, { useState } from 'react';
import { SettingsIcon, BookmarkIcon, ClockIcon, HeartIcon, EditIcon } from 'lucide-react';
const Profile = () => {
  // Mock user data
  const user = {
    name: 'Yubisha Piya',
    username: '@yubifoodie',
    avatar: 'https://www.beautycrew.com.au/media/55194/vanilla-girl.png',
    following: 14,
    followers: 1253,
    bio: 'Food enthusiast exploring the best eats in Nepal. Always hungry for new culinary adventures!'
  };
  // Mock activity data
  const activityTabs = [{
    id: 'saved',
    name: 'Saved',
    icon: BookmarkIcon
  }, {
    id: 'history',
    name: 'History',
    icon: ClockIcon
  }, {
    id: 'liked',
    name: 'Liked',
    icon: HeartIcon
  }];
  const [activeTab, setActiveTab] = useState('saved');
  // Mock saved places
  const savedPlaces = [{
    id: 1,
    name: "Roberta's Pizza",
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38',
    type: 'Restaurant',
    savedDate: '2 days ago'
  }, {
    id: 2,
    name: 'Best Ramen Spots in NYC',
    image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8',
    type: 'Collection',
    savedDate: '1 week ago'
  }];
  return <div className="bg-gray-50 min-h-full">
      {/* Profile Header */}
      <div className="bg-white p-4">
        <div className="flex justify-end">
          <button className="p-2">
            <SettingsIcon className="h-5 w-5 text-gray-600" />
          </button>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative">
            <img src={user.avatar} alt={user.name} className="w-24 h-24 rounded-full object-cover" />
            <button className="absolute bottom-0 right-0 bg-orange-500 text-white p-1 rounded-full">
              <EditIcon className="h-4 w-4" />
            </button>
          </div>
          <h2 className="font-bold text-xl mt-2">{user.name}</h2>
          <p className="text-gray-600">{user.username}</p>
          <div className="flex space-x-6 mt-3">
            <div className="text-center">
              <p className="font-bold">{user.following}</p>
              <p className="text-sm text-gray-600">Following</p>
            </div>
            <div className="text-center">
              <p className="font-bold">{user.followers}</p>
              <p className="text-sm text-gray-600">Followers</p>
            </div>
          </div>
          <p className="text-sm text-gray-700 mt-3 text-center max-w-xs">
            {user.bio}
          </p>
        </div>
      </div>
      {/* Activity Tabs */}
      <div className="bg-white mt-2">
        <div className="flex border-b">
          {activityTabs.map(tab => {
          const Icon = tab.icon;
          return <button key={tab.id} className={`flex-1 py-3 flex flex-col items-center ${activeTab === tab.id ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-500'}`} onClick={() => setActiveTab(tab.id)}>
                <Icon className="h-5 w-5" />
                <span className="text-xs mt-1">{tab.name}</span>
              </button>;
        })}
        </div>
      </div>
      {/* Activity Content */}
      <div className="p-4">
        {activeTab === 'saved' && <div className="space-y-3">
            <h3 className="font-medium text-gray-700">Saved Places</h3>
            {savedPlaces.map(place => <div key={place.id} className="bg-white rounded-lg overflow-hidden shadow-sm flex">
                <div className="w-1/3 h-24">
                  <img src={place.image} alt={place.name} className="h-full w-full object-cover" />
                </div>
                <div className="p-3 flex-1">
                  <div className="flex justify-between items-start">
                    <h4 className="font-medium">{place.name}</h4>
                    <span className="text-xs text-gray-500">
                      {place.savedDate}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{place.type}</p>
                </div>
              </div>)}
          </div>}
        {activeTab === 'history' && <div className="flex flex-col items-center justify-center h-40 text-gray-500">
            <ClockIcon className="h-10 w-10 mb-2" />
            <p>Your viewing history will appear here</p>
          </div>}
        {activeTab === 'liked' && <div className="flex flex-col items-center justify-center h-40 text-gray-500">
            <HeartIcon className="h-10 w-10 mb-2" />
            <p>Videos you've liked will appear here</p>
          </div>}
      </div>
    </div>;
};
export default Profile;