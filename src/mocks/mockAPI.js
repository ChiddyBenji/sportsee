import mockData from './mockData.json';

export function fetchUserData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData.user);
    }, 500);
  });
}

export function fetchUserActivities() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData.activities);
    }, 500);
  });
}

export function fetchUserSessions() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData.sessions);
    }, 500);
  });
}

export function fetchUserPerformance() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData.performance);
    }, 500);
  });
}

