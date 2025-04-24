import './App.css';
import Card from './components/Card';
import HeaderLogo from './components/HeaderLogo';
import Package from './components/Package';
import PageBackground from './components/PageBackground';
import Tabs from './components/Tabs';
import packages from './data/packages.json'


function App() {
  return (
    <div className="App">
      <PageBackground />
      <HeaderLogo />
      <Tabs />
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
  );
}

export default App;
