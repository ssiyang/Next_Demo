import React, { useEffect } from "react";
import { useRouter } from "next/router";

const Test5 = () => {
  const router = useRouter();
  console.log(router);
  useEffect(() => {
    if (router.query.isReplace === 'Y') {
      router.replace("/Home?path=fromLink");
    }
  },[]);
  return (
    <>
      <div>
        <button onClick={() => router.back()}>回上一頁</button>
      </div>
    </>
  );
};

export default Test5;
