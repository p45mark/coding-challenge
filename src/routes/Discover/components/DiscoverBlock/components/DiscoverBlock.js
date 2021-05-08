import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faSpinner,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";
import DiscoverItem from "./DiscoverItem";
import "../styles/_discover-block.scss";

function scrollContainer(id, { isNegative } = {}) {
  return () => {
    const scrollableContainer = document.getElementById(id);
    const amount = isNegative
      ? -scrollableContainer.offsetWidth
      : scrollableContainer.offsetWidth;

    scrollableContainer.scrollLeft = scrollableContainer.scrollLeft + amount;
  };
}

export default function DiscoverBlock({
  text,
  id,
  data,
  status,
  imagesKey = "images",
}) {
  const isLoading = status === "loading";
  const isError = status === "error";
  const isSuccess = status === "success";

  return (
    <div className="discover-block">
      <div className="discover-block__header">
        <h2>{text}</h2>
        <span />
        <div className="animate__animated animate__fadeIn">
          <FontAwesomeIcon
            icon={faChevronLeft}
            onClick={scrollContainer(id, { isNegative: true })}
          />
          <FontAwesomeIcon
            icon={faChevronRight}
            onClick={scrollContainer(id)}
          />
        </div>
      </div>

      <div className="discover-block__row" id={id}>
        {isLoading && (
          <div className="discover-block--loading">
            <FontAwesomeIcon icon={faSpinner} spin />
          </div>
        )}
        {isError && (
          <div className="discover-block--error">
            <p>
              <FontAwesomeIcon icon={faExclamationTriangle} />
              We've encountered an error.
            </p>
          </div>
        )}
        {isSuccess && data && (
          <>
            {data.map(({ [imagesKey]: images, name }) => (
              <DiscoverItem key={name} images={images} name={name} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}
