import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ Satyam | {year}</p>
    </footer>
  );
}

export default Footer;
