import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Table from './components/Table/Table';
import SearchForm from './components/Search-form';

function App() {

  const [users, setUsers] = useState(null);
  const [filteredUsers, setFilteredUsers] = useState(null);
  if (!users) {

    fetch('https://randomuser.me/api/?results=30')
      .then(res => {
        res.json().then(json => {
          //console.log(json)
          setUsers(json.results)
          console.log(json.results)
        })
      })
  }

  const filter = (e) => {
    const term = e.target.value.toLowerCase();
    const filteredResults = users.filter(x => {
      return (x.name.first.toLowerCase().includes(term) || x.name.last.toLowerCase().includes(term))
    });
    console.log(filteredResults);
    if (filteredResults.length > 0) {
      setFilteredUsers(filteredResults)
    }
  }

  const sort = (e) => {
    const field = e.toLowerCase()
    let sortedUsers = [...users];
    sortedUsers.sort((a, b) => {
      if (a.name.first < b.name.first) {
        return -1;
      } else {
        return a[field] < b[field]
      }
    })
    console.log(sortedUsers)
    setUsers(sortedUsers)
  }


  return (
    <div className="App">
      <Header />
      <SearchForm filter={filter} />
      <Table sort={sort} users={filteredUsers ? filteredUsers : users} />
    </div>
  );
}

export default App;
