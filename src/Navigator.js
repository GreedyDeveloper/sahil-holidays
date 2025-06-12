import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeScreen from 'screens/HomeScreen';
import ItineraryPage from 'screens/ItineraryScreen';
import SearchScreen from 'screens/SearchScreen';
import TravelPlannerForm from 'screens/TravelPlannerForm';

function Navigator() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/search" element={<SearchScreen />} />
      <Route path="/itinerary" element={<ItineraryPage />} />
      <Route path="/planner" element={<TravelPlannerForm />} />
    </Routes>
  );
}

export default Navigator;