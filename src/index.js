import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from "@aws-amplify/ui-react";
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
import "@aws-amplify/ui-react/styles.css";
import { studioTheme } from "./ui-components";
import { AmplifyProvider, Authenticator } from "@aws-amplify/ui-react";

Amplify.configure(awsconfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={studioTheme} >
    {/* <AmplifyProvider> */}
      <Authenticator.Provider>
        <App />
      </Authenticator.Provider>
    {/* </AmplifyProvider> */}
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
