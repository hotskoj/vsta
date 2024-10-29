import React from 'react'

export default function Header() {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const today = new Date();
    let date = today.toLocaleDateString('en-US', options);

  return (
    <div className="header pt-3 ps-3 pe-4 d-flex justify-content-between align-items-end">
      <h1>Welcome</h1>
      <p>{date}</p>
    </div>
  )
}