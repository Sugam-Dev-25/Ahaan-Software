import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

const API = axios.create({ baseURL: BASE_URL });

export const createForm = async (data) => {
  try {
    const response = await API.post("/form", data);
    return response.data;
  } catch (error) {
    console.error("❌ Error submitting form:", error);
    throw error;
  }
};

export const createContact = async (data) => {
  return API.post("/contact/add", data);
};
export default API;
