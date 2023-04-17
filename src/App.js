import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { data } from "./data";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <div className="app">
        <ul>
          {data.map(({link, title}) => (
            <li><Link to={link}>{title}</Link></li>
          ))}
        </ul>
      </div>
      <Routes>
        {data.map(({link, component}) => 
          <Route path={link} element={component}/>
        )}
      </Routes>
    </div>
  );
};
export default App;
