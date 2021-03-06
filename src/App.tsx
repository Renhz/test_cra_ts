import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';

import './App.css';
import Dashboard from './components/Dashboard';
import { store } from './features/store';
import Homepage from './pages/Homepage';
import PageNotFound from './pages/PageNotFound';
import Test0 from './pages/Test0';
import Test1 from './pages/Test1';
import TestJ from './pages/TestJ';

function Router(props: { children: React.ReactNode }) {
  const { children } = props;
  if (typeof window === 'undefined') {
    return <StaticRouter location="/">{children}</StaticRouter>;
  }
  return <BrowserRouter>{children}</BrowserRouter>;
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route index element={<Homepage />} />
            <Route path="test0" element={<Test0 />} />
            <Route path="test1" element={<Test1 />} />
            <Route path="testJ" element={<TestJ />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
