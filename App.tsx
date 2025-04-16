import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Explore from './pages/Explore';
import Nearby from './pages/Nearby';
import TopChoice from './pages/TopChoice';
import Following from './pages/Following';
import Profile from './pages/Profile';
export function App() {
  return <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/explore" element={<Explore />} />
          <Route path="/nearby" element={<Nearby />} />
          <Route path="/top-choice" element={<TopChoice />} />
          <Route path="/following" element={<Following />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Navigate to="/explore" replace />} />
        </Routes>
      </Layout>
    </BrowserRouter>;
}