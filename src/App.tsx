import GlobalStyles from './assets/theme/globalStyles';
import { ThemeProvider } from 'styled-components';
import { DefaultTheme } from './assets/theme/defaultTheme';
import MainPage from './pages/mainPage/mainPage';
import ErrorBoundary from './utils/errorBoundary/errorBoundary';
import { Routes, Route } from 'react-router-dom';
import NotFoundPage from './pages/notFoundPage/notFoundPage';
import MainLayout from './components/layouts/mainLayout/mainLayout';


function App() {

  return (
    <ErrorBoundary>
      <ThemeProvider theme={DefaultTheme}>
        <GlobalStyles />
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index path="/" element={<MainPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
