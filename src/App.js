import React, {useState} from 'react';
import 'App.css';
import Card from 'components/Card';
import HeaderLogo from 'components/HeaderLogo';
import Package from 'components/Package';
import PageBackground from 'components/PageBackground';
import Tabs from 'components/Tabs';
import packages from 'data/packages.json';
import {isDesktop} from 'styles/breakpoints';
import {ThemeProvider} from 'styled-components';
import {theme} from 'styles/theme';
import GlobalStyle from 'styles/GlobalStyle';
import SearchComponent from 'components/SearchComponent';

function App() {
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
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        {isDesktop() ? <PageBackground /> : null}
        <HeaderLogo />
        {isDesktop() ?
          <Tabs onSelect={(tab) => setSelectedTab(tab)}>{renderSelectedComponent()}</Tabs>
          : <SearchComponent />}
        <Card title={"Top Holiday Packages"} description={"Book now to grab best offers!"}>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 10,
            width: '100%',
            overflowX: 'auto',
            marginTop: 20,
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
            scrollBehavior: 'smooth'
          }}>
            {packages.map((p) => <Package title={p.name} picture={p.image} />)}
          </div>
        </Card>
      </div>
    </ThemeProvider>
  );
}

export default App;
