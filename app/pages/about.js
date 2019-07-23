import React, { Component } from 'react';
import Link from 'next/link';

export default class About extends Component {
  render() {
    return (
      <main>
        <h1>Hi from about.js.</h1>
        <p>
          <Link href='/p/someid'>
            <a>Visit with id</a>
          </Link>
          <Link href='/about'>
            <a>About page</a>
          </Link>
        </p>
      </main>
    );
  }
}
