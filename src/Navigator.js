import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import CustomerReviewForm from 'screens/CustomerReviewForm';
import HomeScreen from 'screens/HomeScreen';
import ItineraryPage from 'screens/ItineraryScreen';
import SearchScreen from 'screens/SearchScreen';
import TravelPlannerForm from 'screens/TravelPlannerForm';

function Navigator() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<SearchScreen />} />
        <Route path="/search" element={<SearchScreen />} />
        <Route path="/itinerary" element={<ItineraryPage />} />
        <Route path="/planner" element={<TravelPlannerForm />} />
        <Route path="/review" element={<CustomerReviewForm />} />
      </Routes>
    </HashRouter>
  );
}

export default Navigator;