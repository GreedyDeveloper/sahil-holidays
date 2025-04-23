import React, {useState} from 'react';
import searchIcon from '../assets/search-icon.png';
import destinationsIcon from '../assets/destinations-icon.png';
import dealsIcon from '../assets/deals-icon.png';
import featuredIcon from '../assets/featured-icon.png'
import styles from './Tabs.module.css';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('search');

  const tabs = [
    {id: 'search', label: 'Search', icon: searchIcon},
    {id: 'destinations', label: 'Destinations', icon: destinationsIcon},
    {id: 'deals', label: 'Super Deals', icon: dealsIcon},
    {id: 'featured', label: 'Featured', icon: featuredIcon},
  ];

  return (
    <div className={styles.container}>
      <div className={styles.tabContainer}>
        {tabs.map((tab) => (
          <div
            className={`${styles.tab} ${activeTab === tab.id ? styles.active : ''}`}
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              borderBottom: activeTab === tab.id ? '3px solid #2276E3' : '3px solid transparent',
              color: activeTab === tab.id ? '#2276E3' : '#333',
            }}
          >
            <img src={tab.icon} alt={tab.label} className={styles.icon} />
            <span>{tab.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
