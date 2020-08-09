import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Information from './info-json';

class App extends Component {

  render() {
    const styleInfo = {
      paddingRight: '10px'
    }
    const elementStyle = {
      border: 'solid',
      borderRadius: '10px',
      position: 'relative',
      left: '10vh',
      height: '3vh',
      width: '20vh',
      marginTop: '5vh',
      marginBottom: '10vh'
    }
    const items = Information.map(data => {
      return (
        <div>
          <ul>
            <li style={{ position: 'relative', left: '10vh' }}>
              <span style={styleInfo}>{data.name}</span>
              <span style={styleInfo}>{data.age}</span>
              <span style={styleInfo}>{data.country}</span>
            </li>
          </ul>
        </div>
      )
    })

    return (
      <div>
        <input type="text" placeholder="Enter item to be searched" style={elementStyle} onChange={(e) => this.searchSpace(e)} />
        {items}
      </div>
    )
  }
}

export default App;