import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

// =================================================
// AXIOS INSTANCE
// =================================================
const API = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // important for cookie-based auth
});

// ================================================= 
// AUTO ATTACH TOKEN
// =================================================
API.interceptors.request.use((config) => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user?.token) {
    config.headers.Authorization = `Bearer ${user.token}`;
  }
  return config;
});

// =================================================
// AUTH APIS
// =================================================
export const registerAPI = (formData) => API.post("/auth/register", formData);

export const loginAPI = (data) => API.post("/auth/login", data);

export const profileAPI = () => API.get("/auth/profile");

export const logoutAPI = () => API.post("/auth/logout");


// =================================================
// CONTACT + FORM APIs
// =================================================
export const getForms = async () => {
  try {
    const response = await API.get("/form");
    return response.data;
  } catch (error) {
    console.error("❌ Error fetching forms:", error);
    throw error;
  }
};

export const getContact = () => API.get("/contact/all");

export const getContactCount = () => API.get("/contact/count");


// =================================================
// CHAT SYSTEM APIs
// =================================================

// 👉 সব conversation (admin panel)
export const getAllConversations = () => API.get("/chat/conversations");

// 👉 নির্দিষ্ট conversation এর message
export const getMessages = (conversationId) =>
  API.get(`/chat/messages/${conversationId}`);

// 👉 admin → user message পাঠাবে
export const sendMessage = (data) => API.post("/chat/messages", data);


// =================================================
// TEAM APIs
// =================================================
export const createTeam = (data) => API.post("/team/create", data);

export const getAllTeams = async () => {
  try {
    const res = await API.get("/team/all");
    return res.data; // backend returns { success: true, teams: [...] }
  } catch (error) {
    console.error("❌ Error fetching teams:", error);
    throw error;
  }
};

export const updateTeam = (id, data) => API.put(`/team/update/${id}`, data);

export const deleteTeam = (id) => API.delete(`/team/delete/${id}`);

export const getSingleTeam = (id) => API.get(`/team/${id}`);


// =================================================
// EXPORT DEFAULT
// =================================================
export default API;

