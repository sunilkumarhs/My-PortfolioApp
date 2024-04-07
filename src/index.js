import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from "./App";
import Appjs from "./Appjs";
// import ThemesContext from "./utils/ThemesContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <ThemesContext.Provider value={{}}> */}
    <Appjs />
    {/* </ThemesContext.Provider> */}
  </React.StrictMode>
);

