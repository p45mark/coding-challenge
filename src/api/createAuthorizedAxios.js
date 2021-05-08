import axios from "axios";
import { getSpotifyToken } from "./getSpotifyToken";

const createAuthorizedAxios = async () => {
  // Normally we'd have this token after the user logs in and wouldn't make this API call each time
  const { data } = await getSpotifyToken();

  const extendedConfig = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      common: {
        Authorization: `Bearer ${data?.access_token}`,
      },
    },
  };

  const authorizedAxios = axios.create({
    ...extendedConfig,
  });

  return authorizedAxios;
};

export default createAuthorizedAxios;
