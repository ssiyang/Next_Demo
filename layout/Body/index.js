import React from "react";

function Body(props) {
  return (
    <>
      <main id="main-content" role="main" className="main-content">
        <div className="container">{props.children}</div>
      </main>
      <style jsx>{`
        .main-content {
          height: 100%;
          margin: 0px 10px;
          padding-bottom: 10px;
          .container {
            position: relative;
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}

export default Body;
