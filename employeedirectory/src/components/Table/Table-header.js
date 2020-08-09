import React from 'react';
// import './Table.css';

function TableHeader({ headings, sort }) {
  return (
    <thead>
      {headings && (
        headings.map(item => {
          return <th onClick={() => sort(item)}>{item}</th>
        })
      )}
    </thead>
  );
}

export default TableHeader;
