import React, { useContext } from "react";

const Header = () => {
  return (
    <>
      <div>
        <ul>
          <li>
            <a href="/Home">Home</a>
          </li>
          <li>
            <a href="/Css">Css</a>
          </li>
          <li>
            <a href="/Link">Link</a>
          </li>
          <li>
            <a href="/Data">Data</a>
          </li>
        </ul>
      </div>
      <style jsx>{`
        .ul {
          display: inline-block;
        }
        div {
            background-color:lightGreen;
        }
      `}</style>
    </>
  );
};

export default Header;
