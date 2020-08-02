import React from 'react';
// import './Table.css';

function TableHeader({ headings }) {
  return (
    <thead>
      {headings && (
        headings.map(item => {
          return <th>{item}</th>
        })
      )}
    </thead>
  );
}

export default TableHeader;
