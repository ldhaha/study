import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import store from './store/index.ts';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import 'tailwindcss/tailwind.css';
import './style/index.css';
import '@arco-design/web-react/dist/css/arco.css';
createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
