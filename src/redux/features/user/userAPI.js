import axiosHook from "../../../utils/axios.config"

export const postUser = async (userData) => {
    await axiosHook.post("/user", userData)
}