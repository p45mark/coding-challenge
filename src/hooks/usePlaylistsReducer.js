import React from "react";
import { reducerFactory } from "utils/reducer-factory";
import { getPlaylists } from "api";

export const usePlaylistsReducer = () => {
  const [state, dispatch] = React.useReducer(reducerFactory(), {
    status: "loading",
  });

  React.useEffect(() => {
    async function getData() {
      try {
        const { playlists } = await getPlaylists();
        dispatch({ type: "success", payload: playlists.items });
      } catch (error) {
        dispatch({ type: "error", error });
      }
    }

    getData();
  }, []);

  return {
    playlistsStatus: state.status,
    playlistsPayload: state.payload,
  };
};
