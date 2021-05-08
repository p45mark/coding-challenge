import axios from "axios";

export const getToken = async () => {
  const url = `${process.env.SPOTIFY_ACCOUNTS_BASE_URL}/api/token`;
  const params = new URLSearchParams();
  params.append("grant_type", "client_credentials");
  const config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    auth: {
      username: process.env.SPOTIFY_CLIENT_ID,
      password: process.env.SPOTIFY_CLIENT_SECRET,
    },
  };
  const { data } = await axios.post(url, params, config);
  return data;
};
