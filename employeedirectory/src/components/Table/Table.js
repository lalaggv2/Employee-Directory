import React from 'react';
import TableHeader from './Table-header';
import TableRow from './Table-row';
import './table.css';

function Table(props) {
  const { users } = props
  return (
    <div className="uk-container table-container">
      <table className="uk-table uk-table-striped table">
        {/* <table className='table'> */}
        <TableHeader sort={props.sort} headings={['', 'Name', 'Gender', 'Birthday', 'Email', 'Phone']} />
        {
          users && (
            users.map(item => {
              let date = new Date(item.dob.date);
              let dateStr = date.toLocaleDateString();

              return <TableRow imgSrc={item.picture.thumbnail}
                name={`${item.name.first} ${item.name.last}`}
                gender={item.gender}
                birthday={dateStr}
                email={item.email}
                phone={item.phone} />
            })
          )
        }
      </table >
    </div>
  );
};

export default Table;
