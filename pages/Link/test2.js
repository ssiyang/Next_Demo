import React from "react";
import { useRouter } from 'next/router';

const Test2 = () => {
  const router = useRouter();
  console.log(router)
  const id = router.query.id
  const name = router.query.name
  // const id = 
  return (
    <>
      <div>
        <p>我是靜態命名頁面</p>
        <p>我帶的參數1為 id={id}</p>
        <p>我帶的參數2為 id={name}</p>
      </div>
    </>
  );
};

export default Test2;
