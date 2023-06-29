import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <App id="light" />
    </QueryClientProvider>
  </React.StrictMode >,
);
