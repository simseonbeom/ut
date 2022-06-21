import './App.css';
import { ThemeProvider } from '@emotion/react';
import Header from './Components/Template/Header/Header';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [themeName, setThemeName] = useState('light');

  const [loading, setLoading] = useState(true);
  const [global, setGlobal] = useState(null);
  const [theme, setTheme] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('https://simseonbeom.github.io/tokens/theme/global.json')
      .then(({ data }) => setGlobal(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    axios
      .get(`https://simseonbeom.github.io/tokens/theme/${themeName}.json`)
      .then(({ data }) => setTheme(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [themeName]);

  if (loading) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <div role="alert">{error.message}</div>;
  }

  return (
    <div className="App">
      <ThemeProvider theme={{ global, themeConfig: theme }}>
        <Header />
        <button
          type="button"
          onClick={() =>
            setThemeName(themeName.includes('light') ? 'dark' : 'light')
          }
        >
          change theme
        </button>
      </ThemeProvider>
    </div>
  );
}

export default App;
