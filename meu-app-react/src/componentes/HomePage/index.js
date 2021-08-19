import React from 'react';
import Card from '../Card/';
import Contador from '../Contador/';
import './style.css';

export default function HomePage() {
  return (
    <div>
      <div className="home-page">
        <Card />
        <Card />
        <Card />
      </div>
      <Contador />
    </div>
  );
}