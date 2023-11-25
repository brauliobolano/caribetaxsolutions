import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./queries.css";
import { IntlProvider } from 'react-intl'; //language translation library
import English  from './locales/en.json'; // Englis language translation file
import Spanish  from './locales/es.json'; //Spanish language translation file

// language translation library
const local = navigator.language; //get the browser language by default 

let language;

switch (local) { //switch case to set the language
  case /^en-/.test(local) ? local : 'en': //if the language is English or the browser language is English
  //Includes all English versions (en-US, en-UK, etc.)   
  language = English; //set the language to English
    break;
  case /^es-/.test(local) ? local : 'es': //if the language is Spanish or the browser language is Spanish
  //Includes all Spanish versions (es-MX, es-ES, etc.)
  language = Spanish; //set the language to Spanish
    break;
  default: //default language is Spanish for all other cases
  language = Spanish;
    break;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <IntlProvider locale={local} messages={language}> 
    {/* language translation library 
    IntlProvider is a component that provides React context for react-intl. 
    */}
      <App />  
    </IntlProvider>
  </React.StrictMode>
);
