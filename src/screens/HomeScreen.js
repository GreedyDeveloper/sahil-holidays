import React, { useState } from 'react';
import Tabs from 'components/Tabs';
import SearchComponent from 'components/SearchComponent';
import Card from 'components/Card';
import Package from 'components/Package';
import { isDesktop } from 'styles/breakpoints';
import packages from 'data/packages.json';
import PageBackground from 'components/PageBackground';

function HomeScreen() {
  const [selectedTab, setSelectedTab] = useState('search');

  const renderSelectedComponent = () => {
    switch (selectedTab) {
      case 'search':
        return <SearchComponent />;
      default:
        return <div>{selectedTab}</div>;
    }
  };

  return (
    <div>
      {isDesktop() ? <PageBackground /> : null}
      {isDesktop() ? (
        <Tabs onSelect={(tab) => setSelectedTab(tab)}>{renderSelectedComponent()}</Tabs>
      ) : (
        <SearchComponent />
      )}
      <Card title={"Top Holiday Packages"} description={"Book now to grab best offers!"}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 10,
            width: '100%',
            overflowX: 'auto',
            marginTop: 20,
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
            scrollBehavior: 'smooth',
          }}
        >
          {packages.map((p) => (
            <Package title={p.name} picture={p.image} />
          ))}
        </div>
      </Card>
    </div>
  );
}

export default HomeScreen;