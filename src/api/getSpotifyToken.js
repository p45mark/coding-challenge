import axios from "axios";

export const getSpotifyToken = async () => {
  const url = `${process.env.REACT_APP_LOCAL_SERVER_BASE_URL}/token`;
  const { data } = await axios.get(url);

  return data;
};
