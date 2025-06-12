import React, { useEffect, createContext, useState } from 'react';
import 'App.css';
import HeaderLogo from 'components/HeaderLogo';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { muiTheme } from 'styles/theme';
import Navigator from './Navigator';
import { fetchData } from 'services/Api';
import { useNavigate } from 'react-router-dom';

export const DataContext = createContext(null);

function App() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    packages: [],
    destinations: [],
    cities: [],
  });


  useEffect(() => {
    fetchData().then((packages) => {
      const destinationNames = new Set();
      const cities = new Set();
      packages.forEach(pkg => {
        if (pkg.destination) {
          destinationNames.add(pkg.destination.trim());
        }
        if (pkg.cities) {
          pkg.cities.forEach(city => cities.add(city.trim()));
        }
      });

      const destinations = Array.from(destinationNames).map(name => {
        return { name, image: packages.find(pkg => pkg.destination.trim() === name)?.image || '' };
      })

      setData({
        packages,
        destinations: destinations,
        cities: Array.from(cities),
      });
    }).catch((error) => {
      console.error("Error fetching packages:", error);
    });
  }, []);

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <DataContext.Provider value={data}>
        <div className="App">
          <HeaderLogo />
          <Navigator />
        </div>
      </DataContext.Provider>
    </ThemeProvider>
  );
}

export default App;
