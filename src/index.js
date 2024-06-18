import React from 'react';
import ReactDOM from 'react-dom/client';
import "./Css/Loading.css";
import "./Css/alerts.css";
import "./all.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import "./Css/profile.css";
import "./Css/sign.css";
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import MenuContext from './Context/MenuContext';
import WindowContext from './Context/WindowContext';
// import EmailProvider from './Pages/Context/EmailContext';
// import UserProvider from './Pages/Context/UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WindowContext>
    <MenuContext>
    {/* <EmailProvider> */}
    {/* <UserProvider> */}
    <Router>
    < App />
    </Router>
    {/* </UserProvider> */}
    {/* </EmailProvider> */}

    </MenuContext>
    </WindowContext> 
  </React.StrictMode>
);

