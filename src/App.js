import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InputField from './components/input-fieled.js';

const App = () => (

      <div>
          <InputField placeholder="Name" className="input-field" errorMsg="wrong Name" type="text"/>
      </div>
);


export default App;
