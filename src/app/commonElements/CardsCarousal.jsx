import React, { useRef } from "react";
import "../styles/projects.css";
import { CarouselScrollButton } from "./commonSvgs";

function CardsCarousal({
  allCards,
  dataLength,
  containerClass,
  scrollSize = 3000,
  gap = 16,
}) {
  const isMobile = false;

  const containerRef = useRef(null);
  const onScrollingLeftAndRight = (direction) => {
    const ele = containerRef.current;
    if (ele)
      direction == "L"
        ? (ele.scrollLeft -= scrollSize + gap)
        : (ele.scrollLeft += scrollSize + gap);
  };

  return (
    <div
      className={`cardCarouselMainCon ${
        containerClass ? containerClass : ""
      }`}
    >
      {!isMobile &&
        dataLength != undefined &&
        dataLength != null &&
        dataLength >= 2 && (
          <button
            className={`srcollButton srcollButtonLeft`}
            onClick={() => onScrollingLeftAndRight("L")}
            aria-label="Scroll carousel left"
          >
            <CarouselScrollButton className="srcollButtonIcons" />
          </button>
        )}

      <div ref={containerRef} className="cardsHoldingContainer">
        <div
          className="cardsHoldingInnerContainer"
          style={{ gap: `${gap}px` }}
        >
          {allCards}
        </div>
      </div>

      {!isMobile &&
        dataLength != undefined &&
        dataLength != null &&
        dataLength >= 2 && (
          <button
            className={`srcollButton srcollButtonRight`}
            onClick={() => onScrollingLeftAndRight("R")}
             aria-label="Scroll carousel Right"
          >
            <CarouselScrollButton className="srcollButtonIcons" />
          </button>
        )}
    </div>
  );
}

export default CardsCarousal;
