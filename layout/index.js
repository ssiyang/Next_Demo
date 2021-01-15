import React, { useState, useEffect, useContext } from 'react';
import Header from "./Header"
import Body from "./Body"

const Layout = (props) => {

    return (
        <div id="page-site" className="page-site">
          <Header />
          <Body>{props.children}</Body>
        </div>
      );
}

export default Layout;
