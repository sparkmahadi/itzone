import axiosHook from "../../../utils/axios.config"

export const fetchUser = async (mobile) => {
    console.log(mobile);
    const data = await axiosHook.get(`/user/${mobile}`);
    console.log(data.data);
    return data.data;
}

export const postUser = async (userData) => {
    await axiosHook.post("/user", userData);
}