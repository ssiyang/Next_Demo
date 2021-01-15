import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import api from "@/api";

const getData = (props) => {
  const [orderList, setOrderList] = useState([]);
  const router = useRouter();
  console.log(props.orderData);
  useEffect(() => {
    getOrderListData();
    if (router.query.isReplace === "Y") {
      router.replace("/Home");
    }
  }, []);

  const getOrderListData = async () => {
    const orderData = await api.account.getOrderList();
    setOrderList(orderData.myOrderList);
  };

  return (
    <>
      <div>
        <ul>
          <li>Server Side</li>
          {props.orderData.myOrderList.map((item) => (
            <li>{item.STORE_NAME}</li>
          ))}
        </ul>
        <ul>
          <li>Client Side</li>
          {orderList.map((item) => (
            <li>{item.SCORE}</li>
          ))}
        </ul>
      </div>
      <style jsx>{`
        div {
          display: flex;
          flex-decoration: row;
        }
      `}</style>
    </>
  );
};

export async function getServerSideProps(context) {
  console.log("start");
  const orderData = await api.account.getOrderList();
  console.log("123", orderData);
  return { props: { orderData } };
}

// getData.getInitialProps = async (context) => {
//   console.log("start");
//   const orderData = await api.account.getOrderList();
//   console.log(orderData);
//   return { orderData };
// };

export default getData;
