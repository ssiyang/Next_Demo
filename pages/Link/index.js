import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const About = () => {
  const router = useRouter();
  return (
    <>
      <div>
        <p className="HomeTxt">Link Example</p>
      </div>
      <div>
        <ul>
          <li>
            <Link href={"/Link/test1"}>我是Link，純Href跳轉</Link>
          </li>
          <li>
            <Link href={"/Link/test2?id=1&name=Static"}>
              <a>
                我是Link，會帶參數跳轉，並且我會帶到
                <strong>靜態</strong>
                命名頁面
              </a>
            </Link>
          </li>
          <li>
            <Link href={"/Link/2?name=Dynamic"}>
              <a>
                我是Link，會帶參數跳轉，並且我會帶到<strong>動態</strong>
                命名頁面
              </a>
            </Link>
          </li>
          <li>
            <Link
              href={{
                pathname: "/Link/test3",
                query: { id: "3", name: "FromQuery" },
              }}
            >
              <a>我是Link，會帶參數跳轉，但我的路徑跟參數分開</a>
            </Link>
          </li>
          <li>
            <Link href={"/Link/test6?isReplace=Y"}>
              <a>測試router replace</a>
            </Link>
          </li>
          <li>
            <Link href={"/Link/test6?isReplace=N"}>
              <a>測試router back</a>
            </Link>
          </li>
        </ul>
        <button onClick={() => router.push("/Link/test4")}>
          我是router，純Href跳轉
        </button>
        <button
          onClick={() => router.push("/Link/test2?id=5&name=routerStatic")}
        >
          我是router，帶到靜態頁面
        </button>
        <button onClick={() => router.push("/Link/6?name=routerDynamic")}>
          我是router，帶到動態頁面
        </button>
        <button
          onClick={() =>
            router.push({
              pathname: "/Link/test3",
              query: { id: "7", name: "routerFromQuery" },
            })
          }
        >
          我是router，路徑跟參數分開
        </button>
      </div>
      <style jsx>{`
        strong {
          color: red;
        }
        li {
          padding-top: 5px;
        }
        button {
          background-color: #d0d0d0;
          border: 1px solid black;
          border-radius: 5px;
          margin-left: 5px;
        }
      `}</style>
    </>
  );
};

export default About;
