import axios from "axios";

const API_URL = "http://localhost:3001";

export const getUserDataFromApi = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/user/${userId}`);
    return response.data.data;
  } catch (error) {
    
    return null;
  }
};

export const getUserActivityFromApi = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/user/${userId}/activity`);
    return response.data.data;
  } catch (error) {
    
    return null;
  }
};

export const getUserAverageSessionsFromApi = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/user/${userId}/average-sessions`);
    return response.data.data;
  } catch (error) {
    
    return null;
  }
};


export const getUserPerformanceFromApi = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/user/${userId}/performance`);
    console.log("Réponse complète API performance :", response);
    return response.data?.data || null; 
  } catch (error) {
    
    return null;
  }
};



