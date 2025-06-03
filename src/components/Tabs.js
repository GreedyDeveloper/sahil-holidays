import React, {useEffect, useState} from 'react';
import styled from '@emotion/styled';
import searchIcon from '../assets/search-icon.png';
import destinationsIcon from '../assets/destinations.avif';
import dealsIcon from '../assets/super-deals.avif';
import featuredIcon from '../assets/featured.avif';

const Container = styled.div`
  background-color: #fff;
  border-radius: 8px;
  margin: 24px auto 0;
  width: 1200px;
  min-height: 200px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: flex-start;
`;

const TabContainer = styled.div`
  background-color: #eaf5ff;
  border-radius: 8px 8px 0 0;
  padding: 10px 0 0;
  display: flex;
  align-self: stretch;
  z-index: 10;
`;

const Tab = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  border-right: 1px solid #d8d8d8;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  color: ${(props) => (props.active ? '#2276E3' : '#333')};
  border-bottom: ${(props) => (props.active ? '3px solid #2276E3' : '3px solid transparent')};

  &:last-child {
    border-right: 0;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -9px;
    left: 50%;
    transform: translateX(-50%);
    border-left: 9px solid transparent;
    border-right: 9px solid transparent;
    border-top: ${(props) => (props.active ? '9px solid #2276E3' : 'none')};
    height: 0;
    width: 0;
  }
`;

const Icon = styled.img`
  border-radius: 50%;
  flex-shrink: 0;
  height: 24px;
  width: 24px;
  margin-right: 10px;
  overflow: hidden;
`;

const Tabs = ({onSelect, children}) => {
  const [activeTab, setActiveTab] = useState('search');

  const tabs = [
    {id: 'search', label: 'Search', icon: searchIcon},
    {id: 'destinations', label: 'Destinations', icon: destinationsIcon},
    {id: 'deals', label: 'Super Deals', icon: dealsIcon},
    {id: 'featured', label: 'Featured', icon: featuredIcon},
  ];

  useEffect(() => {
    onSelect(activeTab);
  }, [activeTab, onSelect]);

  return (
    <Container>
      <TabContainer>
        {tabs.map((tab) => (
          <Tab
            key={tab.id}
            active={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
          >
            <Icon src={tab.icon} alt={tab.label} />
            <span>{tab.label}</span>
          </Tab>
        ))}
      </TabContainer>
      <div style={{marginTop: '20px', width: '100%'}}>{children}</div>
    </Container>
  );
};

export default Tabs;
