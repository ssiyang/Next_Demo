import React from "react";
import RenderMonthList from "@/components/List/RenderMonthList";

const RenderList = () => {
  return (
    <>
      <ul>
        <li className="Mon">星期一</li>
        <li className="Tue">星期二</li>
        <li className="Wen">
          星期三
          <p className="action">去爬山</p>
        </li>
        <li className="Thu">星期四</li>
        <li className="Fri">星期五</li>
      </ul>
      <style jsx>{`
        .Tue {
          color: red;
        }
        //Sass
        .Wen {
          color: #009100;
          .action {
            text-decoration:underline
          }
        }
        /* 
        .Wen {
            color: #009100;
          }
        .Wen .action {
            text-decoration:underline
          }
        */

        /*
        .Wen {
          color: #009100;
        }
        .action {
            text-decoration:underline
        }
        */

        /*
        .Thu {
            color:red;
            font-size:50px;
        } */
      `}</style>
    </>
  );
};

const About = () => {
  return (
    <>
      <div>
        <p>{RenderList()}</p>
      </div>
      <div>
        <p>
          <RenderMonthList color={"purple"} />
        </p>
      </div>
      <style global jsx>{`
        .Mon {
          color: blue;
        }
        .Jan {
          color: blue;
        }
        ul {
            font-size:20px
        }
      `}</style>
      <style jsx>{`
        .Fri {
          color: red;
        }
        .May {
          color: red;
        }
      `}</style>
    </>
  );
};

export default About;
