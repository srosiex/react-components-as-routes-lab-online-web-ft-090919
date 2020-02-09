import React from 'react';
import { actors } from '../data';
import Movies from './Movies';



const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
        {actors.map(n => n.name)}
    </div>
  );
};

export default Actors;
