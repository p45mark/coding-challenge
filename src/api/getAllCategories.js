import createAuthorizedAxios from "./createAuthorizedAxios";

export const getAllCategories = async () => {
  const url = `${process.env.REACT_APP_SPOTIFY_API_BASE_URL}/v1/browse/categories?locale=en_US&`;
  const authAxios = await createAuthorizedAxios();

  const { data } = await authAxios.get(url);

  return data;
};
