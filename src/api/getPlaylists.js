import createAuthorizedAxios from "./createAuthorizedAxios";

export const getPlaylists = async () => {
  const url = `${process.env.REACT_APP_SPOTIFY_API_BASE_URL}/v1/browse/featured-playlists`;
  const authAxios = await createAuthorizedAxios();

  const { data } = await authAxios.get(url);

  return data;
};
