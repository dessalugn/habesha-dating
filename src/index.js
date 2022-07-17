import "bootstrap/dist/css/bootstrap.min.css";
import { createRoot } from 'react-dom/client';

import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Router>
  <App />   
  </Router>
);
