import React from 'react';
import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { AuthContext } from "./authContext";

const AppWrapper = () => {
  const [login, setLogin] = useState(false);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("login")) === true) setLogin(true);
    return () => {};
  }, []);

  return (
    <React.StrictMode>
      <AuthContext.Provider value={{ login, setLogin }}>
        <App />
      </AuthContext.Provider>
    </React.StrictMode>
  );
};

window.addEventListener('error', function (event) {
  if (event.message.includes('SyntaxError')) {
    console.error('Caught an error:', event.error);
    event.preventDefault();
  }
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppWrapper />);
reportWebVitals();
