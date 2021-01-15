import { DDGInstance } from "@/api/instances";

export default {
  getOrderList: () => {
    const url = `/hackathonJabamaMyOrder/7677`;

    return DDGInstance.get(url);
  },

  getOrderList2: () => {
    const url = `/hackathonJabamaMyOrder/7557`;

    return DDGInstance.get(url);
  },
};
