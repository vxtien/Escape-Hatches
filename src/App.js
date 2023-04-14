import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { data } from "./data";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <div className="app">
        <ul>
          {components.map(({link, title}) => (
            <li><Link to={link}>{title}</Link></li>
          ))}
        </ul>
      </div>
      <Routes>
        {components.map(({link, component}) => 
          <Route path={link} element={component}/>
        )}
      </Routes>
    </div>
  );
};
export default App;
