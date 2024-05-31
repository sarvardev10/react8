import React from "react";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import imgcar from "../../assets/Model X.png";
import imgcar2 from "../../assets/model3.png";
import imgcar3 from "../../assets/models.png";
import imgcar4 from "../../assets/modely.png";

import "./main.css";

const Index = () => {
  return (
    <main>
      <div className="black-background">
        <CCarousel controls transition="crossfade">
          <CCarouselItem>
            <CImage
              className="d-block w-100 slider"
              src={imgcar2}
              alt="slide 1"
            />
          </CCarouselItem>
          <CCarouselItem>
            <CImage
              className="d-block w-100 slider"
              src={imgcar}
              alt="slide 2"
            />
          </CCarouselItem>
          <CCarouselItem>
            <CImage
              className="d-block w-100 slider"
              src={imgcar3}
              alt="slide 3"
            />
          </CCarouselItem>
          <CCarouselItem>
            <CImage
              className="d-block w-100 slider"
              src={imgcar4}
              alt="slide 3"
            />
          </CCarouselItem>
        </CCarousel>
      </div>
    </main>
  );
};

export default Index;
