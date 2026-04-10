import React from 'react';
import './App.css';
import Listing from './components/Listing';
import etsyData from './data/etsy.json';
import { ListingItem } from './types/listing.types';

// Типизируем импортированные данные
const typedEtsyData = etsyData as ListingItem[];

const App: React.FC = () => {
  return (
    <div className="container">
      <Listing items={typedEtsyData} />
    </div>
  );
};

export default App;