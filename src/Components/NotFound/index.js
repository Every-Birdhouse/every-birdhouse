import React from 'react';
import { Link } from 'react-router-dom'

import './style.css';

export default function NotFound() {
  return (
    <div>
      <h1>
        Not finding that page.
      </h1>
      <Link to='/'>
      Go home.
      </Link>
    </div>
  )
}
