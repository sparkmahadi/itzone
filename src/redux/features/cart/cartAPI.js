import axiosHook from "../../../utils/axios.config"

export const fetchOrders = async (mobile) => {
    console.log(mobile);
    const data = await axiosHook.get(`/orders/${mobile}`);
    console.log(data.data);
    return data.data;
}

export const postOrder = async (orderData) => {
    await axiosHook.post("/orders", orderData)
}