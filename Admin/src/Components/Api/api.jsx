import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

const API = axios.create({
  baseURL: BASE_URL,
});

// GET All Form Submissions
export const getForms = async () => {
  try {
    const response = await API.get("/form");
    return response.data;
  } catch (error) {
    console.error("❌ Error fetching forms:", error);
    throw error;
  }
};

export const getContact = async (data) => {
  return API.get("/contact/all", data);
};
export const getContactCount = async () => {
  return API.get("/contact/count");
};

export default API;
