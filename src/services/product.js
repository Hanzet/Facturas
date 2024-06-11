import axios from "axios";

const URL_API = "https://6667a79bf53957909ff4d8b4.mockapi.io/api/products";

export const getProducts = async () => {
    try {
        const response = await axios.get(URL_API);
        if(response.status === 200){
            return response.data;
        } else {
            return [];
        }
    } catch (error) {
        return [];
    }
}

export const deleteProductService = async (id) => {
    try {
        const response = await axios.delete(`${URL_API}/${id}`);
        console.log(response)
        if(response.status === 200){
            return response.status;
        }
    } catch (error) {
        return false;
    }
}