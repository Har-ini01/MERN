import React from "react";
//import assest from "../../assests/1.png";
import { beauty } from "../../assests/images";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
export const Image = () => {
  return (
    <div>
      <p>Image - React</p>

      {/* image via local storage */}
      {/* <img src={assest} alt="image-1" /> */}

      {/* image via CDN */}
      {/* <img src={beauty} alt="cdn-image-1" /> */}

      <LazyLoadImage
        alt={beauty}
        effect="blur"
        wrapperProps={{
          // If you need to, you can tweak the effect transition using the wrapper style.
          style: { transitionDelay: "1s" },
        }}
        src={beauty}
      />
    </div>
  );
};

export default Image;
