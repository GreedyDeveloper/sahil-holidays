import './App.css';
import HeaderLogo from './components/HeaderLogo';
import PageBackground from './components/PageBackground';
import Tabs from './components/Tabs';

function App() {
  return (
    <div className="App">
      <PageBackground />
      <HeaderLogo />
      <Tabs />
    </div>
  );
}

export default App;
