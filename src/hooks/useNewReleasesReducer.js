import React from "react";
import { reducerFactory } from "utils/reducer-factory";
import { getNewReleases } from "api";

export const useNewReleasesReducer = () => {
  const [state, dispatch] = React.useReducer(reducerFactory(), {
    status: "loading",
  });

  React.useEffect(() => {
    async function getData() {
      try {
        const { albums } = await getNewReleases();
        dispatch({ type: "success", payload: albums.items });
      } catch (error) {
        dispatch({ type: "error", error });
      }
    }

    getData();
  }, []);

  return { newReleasesStatus: state.status, newReleasesPayload: state.payload };
};
