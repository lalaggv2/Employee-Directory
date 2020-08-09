import React from 'react';
import './App.css';
import Header from './components/Header';
import Table from './components/Table/Table';
import SearchForm from './components/Search-form';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchForm />
      <Table />
    </div>
  );
}

export default App;
