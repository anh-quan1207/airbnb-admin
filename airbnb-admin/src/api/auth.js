import axiosAPI from ".";

export const signInAPI = (userLogin) => {
    return axiosAPI.post(`/login`, userLogin);
}