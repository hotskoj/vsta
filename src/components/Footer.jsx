import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="container-fluid text-center">
      <p>Copyright ⓒ {year}</p>
    </footer>
  );
}