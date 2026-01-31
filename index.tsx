import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);

/**
 * We fetch the site configuration JSON file before mounting the React application.
 * This ensures the configuration is available throughout the component tree
 * and avoids issues with experimental JSON module imports in different browser environments.
 */
fetch('./config/site.json')
  .then(response => {
    if (!response.ok) {
      throw new Error(`Failed to load configuration: ${response.status} ${response.statusText}`);
    }
    return response.json();
  })
  .then(siteConfig => {
    root.render(
      <React.StrictMode>
        <App config={siteConfig} />
      </React.StrictMode>
    );
  })
  .catch(error => {
    console.error("Critical Configuration Error:", error);
    rootElement.innerHTML = `
      <div style="padding: 40px; text-align: center; font-family: system-ui, -apple-system, sans-serif;">
        <h1 style="color: #0c2340; margin-bottom: 16px;">Configuration Loading Error</h1>
        <p style="color: #64748b; max-width: 400px; margin: 0 auto 24px;">
          We encountered an error while loading the school's configuration file (site.json). 
          Please ensure the file exists and is valid JSON.
        </p>
        <button onclick="window.location.reload()" style="padding: 12px 24px; background: #0c2340; color: white; border: none; border-radius: 8px; font-weight: bold; cursor: pointer;">
          Retry Loading
        </button>
      </div>
    `;
  });
