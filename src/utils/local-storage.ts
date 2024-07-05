// 1. Set accessToken to browser
export const setToLocalStorage = (key: string, token: string) => {
  // it means, if key is not provided or the root window is blank or undefined then nothing have to set in local-storage
  if (!key || typeof window === "undefined") {
    return "";
  }
  return localStorage.setItem(key, token);
};

// 2. get accessToken from the browser
export const getFromLocalStorage = (key: string) => {
  if (!key || typeof window === "undefined") {
    return "";
  }
  return localStorage.getItem(key);
};

// 3. Remove the user (remove accessToken from local storage)
export const removeFromLocalStorage = (key: string) => {
  if (!key || typeof window === "undefined") {
    return "";
  }
  return localStorage.removeItem(key);
};
