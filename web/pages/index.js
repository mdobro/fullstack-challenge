import React from "react";
import Link from 'next/link'
export default class HomeScreen extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to GGG</h1>
        <Link href='/contacts'>View Contacts</Link>
      </div>
    );
  }
}