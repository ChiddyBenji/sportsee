import {
  fetchUserData,
  fetchUserActivities,
  fetchUserSessions,
  fetchUserPerformance,
} from "../mocks/mockAPI";

import {
  getUserDataFromApi,
  getUserActivityFromApi,
  getUserAverageSessionsFromApi,
  getUserPerformanceFromApi,
} from "../api";


export const getUserData = async (userId) => {
  console.log(import.meta.env.VITE_IS_MOCKED_DATA);
  if (import.meta.env.VITE_IS_MOCKED_DATA == "true") {
    return await fetchUserData()
  }
  else {
    return await getUserDataFromApi(userId)
  }
};

export const getUserActivity = async (userId) => {
  if (import.meta.env.VITE_IS_MOCKED_DATA == "true") {
    return await fetchUserActivities()
  }
  else {
    return await getUserActivityFromApi(userId)
  }
};

export const getUserAverageSessions = async (userId) => {
  if (import.meta.env.VITE_IS_MOCKED_DATA == "true") {
    return await fetchUserSessions()
  }
  else {
    return await getUserAverageSessionsFromApi(userId)
  }
};

export const getUserPerformance = async (userId) => {
  if (import.meta.env.VITE_IS_MOCKED_DATA == "true") {
    return await fetchUserPerformance()
  }
  else {
    return await getUserPerformanceFromApi(userId)
  }
};

