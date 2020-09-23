import React from 'react';
import './Hello.css';

const names = ['Shuwen', 'Yang', 'Xuanyi'];

const Hello = () => names.map(name => 
    <h1 className='greet badge badge-info' key={name} style={{border: '1px solid black'}} >
        Hello {name}
    </h1>
    ); 

export default Hello;