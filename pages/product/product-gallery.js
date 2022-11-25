import { isEmpty } from "lodash";
import Image from "../../src/components/image";
import React, { useState } from "react";
import { Zoom, HeartSolid, Share } from "../../src/components/icons";
import { HeartIcon } from "@heroicons/react/24/outline";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import FsLightbox
import FsLightbox from "fslightbox-react";

export default function ProductGallery({ gallery }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [toggler, setToggler] = useState(false);

  const [wishlist, setWishlist] = useState(false);

  let gallaryources = [];
  !isEmpty(gallery) && gallery.length
    ? gallery.slice(1).map((image) => gallaryources.push(image.src))
    : null;

  console.log(gallaryources);

  return (
    <div className="relative product-gallery">
      <button
        onClick={() => setToggler(!toggler)}
        className="group/item transition bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full shadow-md absolute top-5 left-5 z-10"
      >
        <Zoom className="group-hover/item:text-teal-700 transition text-gray-700 h-6 w-6" />
      </button>

      <div className="top-5 right-5 absolute z-10">
        <button
          onClick={() => setWishlist(!wishlist)}
          className="group/item transition bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full shadow-md block mb-3 "
        >
          {wishlist == true ? (
            <HeartSolid className="transition group-hover/item:text-gray-600 text-red-700 h-6 w-6 top-2" />
          ) : (
            <HeartIcon
              className="transition group-hover/item:text-red-600 text-gray-700 h-6 w-6"
              aria-hidden="true"
            />
          )}
        </button>

        <button className="group/item transition bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full shadow-md block">
          <Share
            className="group-hover/item:text-purple-700 transition text-gray-700 h-6 w-6"
            aria-hidden="true"
          />
        </button>
      </div>

      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 mb-3"
      >
        {!isEmpty(gallery) && gallery.length
          ? gallery.slice(1).map((image, index) => (
              <SwiperSlide key={index}>
                <Image
                  sourceUrl={image.src}
                  altText={image.alt}
                  title={image.name}
                  width="655"
                  height="874"
                  className="object-cover object-top w-full"
                />
              </SwiperSlide>
            ))
          : null}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {!isEmpty(gallery) && gallery.length
          ? gallery.slice(1).map((image, index) => (
              <SwiperSlide key={index + 1}>
                <Image
                  sourceUrl={image.src}
                  altText={image.alt}
                  title={image.name}
                  width="380"
                  height="580"
                  className="object-cover object-top w-full"
                />
              </SwiperSlide>
            ))
          : null}
      </Swiper>

      <FsLightbox toggler={toggler} sources={gallaryources} />
    </div>
  );
}
