import React from 'react';

function TableRow(props) {
  const { imgSrc,
    name,
    gender,
    birthday,
    email,
    phone } = props
  //console.log(imgSrc)
  return (<tr>
    <td><img src={imgSrc} alt={name} /></td>
    <td>{name}</td>
    <td>{gender}</td>
    <td>{birthday}</td>
    <td>{email}</td>
    <td>{phone}</td>
  </tr>
  );
}

export default TableRow;
