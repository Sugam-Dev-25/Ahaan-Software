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

export default API;
