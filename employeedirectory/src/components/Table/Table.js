import React, { useState } from 'react';
import TableHeader from './Table-header';
import TableRow from './Table-row';
// import './Table.css';

function Table() {
  const [users, setUsers] = useState(null);
  if (!users) {

    fetch('https://randomuser.me/api/?results=15')
      .then(res => {
        res.json().then(json => {
          // console.log(json)
          setUsers(json.results)
        })
      })
  }
  return (
    <table className='table'>
      <TableHeader headings={['', 'Name', 'Gender', 'Birthday', 'Email', 'Phone']} />
      {
        users && (
          users.map(item => {
            return <TableRow imgSrc={item.picture.thumbnail}
              name={`${item.name.first} ${item.name.last}`}
              gender={item.gender}
              birthday={item.dob.date}
              email={item.email}
              phone={item.phone} />
          })
        )
      }
    </table>
  );
}

export default Table;
