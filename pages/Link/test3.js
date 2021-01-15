import React from "react";
import { useRouter } from 'next/router';

const Test3 = () => {
  const router = useRouter();
  console.log(router)
  const id = router.query.id
  const name = router.query.name
  return (
    <>
      <div>
        <p>我的路徑跟參數分開</p>
        <p>我帶的參數1為 id={id}</p>
        <p>我帶的參數2為 id={name}</p>
      </div>
    </>
  );
};

export default Test3;
