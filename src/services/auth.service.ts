import { decodedToken } from "@/utils/jwtDecode";
import {
  getFromLocalStorage,
  removeFromLocalStorage,
  setToLocalStorage,
} from "@/utils/local-storage";
import { authKey } from "@/constants/authKey";

// 1. store userInfo as accessToken
export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
  return setToLocalStorage(authKey, accessToken);
};

// 2. decode and use userInfo from accessToken
export const getUserInfo = () => {
  const authToken = getFromLocalStorage(authKey);

  if (authToken) {
    const decodedData: any = decodedToken(authToken);
    return {
      ...decodedData,
      role: decodedData?.role?.toLowerCase(),
      // role: "user",
    };
  }
};

// 3. Check that if any user is logged in at this moment through boolean value, It will be use for conditional rendering.
export const isLoggedIn = () => {
  const authToken = getFromLocalStorage(authKey);
  if (authToken) {
    return !!authToken;
  }
};

// 4. Remove the user (use mainly for logout)
export const removeUser = () => {
  return removeFromLocalStorage(authKey);
};
