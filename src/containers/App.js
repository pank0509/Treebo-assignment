import React from 'react';
import '../styles/Index.scss';
import Header from "../components/Header";
import "../styles/App.scss";

const App = (props) => (
  <div className="app-container">
    <Header/>
    <div className="app-content-container">
      {props.children}
    </div>
  </div>
)

export default App;
