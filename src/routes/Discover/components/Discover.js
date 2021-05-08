import React from "react";

import DiscoverBlock from "./DiscoverBlock/components/DiscoverBlock";
import {
  useNewReleasesReducer,
  useCategoriesReducer,
  usePlaylistsReducer,
} from "hooks";

import "../styles/_discover.scss";

const Discover = () => {
  const { newReleasesPayload, newReleasesStatus } = useNewReleasesReducer();
  const { categoriesPayload, categoriesStatus } = useCategoriesReducer();
  const { playlistsPayload, playlistsStatus } = usePlaylistsReducer();

  return (
    <div className="discover">
      <DiscoverBlock
        text="RELEASED THIS WEEK"
        id="released"
        status={newReleasesStatus}
        data={newReleasesPayload}
      />
      <DiscoverBlock
        text="FEATURED PLAYLISTS"
        id="featured"
        status={playlistsStatus}
        data={playlistsPayload}
      />
      <DiscoverBlock
        text="BROWSE"
        id="browse"
        status={categoriesStatus}
        data={categoriesPayload}
        imagesKey="icons"
      />
    </div>
  );
};

export default Discover;
