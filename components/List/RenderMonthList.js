import React from "react";

const RenderMonthList = (props) => {
  //inline style
  const wedStyle = {
    color: `${props.color}`
  }
  
  return (
    <>
      <ul>
        <li className="Jan">一月</li>
        <li className="Feb">二月</li>
        <li className="Mar" style={wedStyle}>三月</li>
        <li className="Apr">四月</li>
        <li className="May">五月</li>
      </ul>
      <style jsx>{`
        .Feb {
          color: red;
        }
        .Apr {
          color: ${props.color};
        }
      `}</style>
    </>
  );
};

export default RenderMonthList;
