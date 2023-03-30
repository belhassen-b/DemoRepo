import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store';

/*
  Pour brancher le store à notre application, il va falloir passer par un Provider, qui est un composant disponible dans le package 'react-redux'

  Ce provider a pour rôle de brancher notre interface au store global. Pour ce faire, il ne faut pas oublier de passer en attribut du Provider le store
  
  Enfin, pour le rendre disponible dans toute l'application, on passe le composant <App /> dans son 'props.children' via la notation en double balises
*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
