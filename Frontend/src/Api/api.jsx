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

// USER register
export const registerChatUser = (data) =>
  API.post("/chat/register", data);

// Get messages
export const getMessages = (conversationId) =>
  API.get(`/chat/messages/${conversationId}`);

// Save message
export const saveMessage = (payload) =>
  API.post("/chat/messages", payload);

// ➤ Get all team members
export const getTeams = async () => {
  try {
    const response = await API.get("/team/all");
    return Array.isArray(response.data) ? response.data : response.data.team || response.data.data || [];
  } catch (error) {
    console.error("❌ Error fetching teams:", error);
    return [];
  }
};


export default API;
