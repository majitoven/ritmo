// components/portfolio/portfolio-details/PortfolioGallery.jsx
"use client";

import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import Image from "next/image";

const PortfolioGallery = ({ mainImage, gallery }) => {
  // Combine mainImage with gallery images
  const images = mainImage
    ? [
        {
          src: mainImage,
          width: 460, // Placeholder width
          height: 400, // Placeholder height
          alt: "Main Image",
        },
        ...(gallery || []).map((src, index) => ({
          src,
          width: 460,
          height: 400,
          alt: `Gallery Image ${index + 1}`,
        })),
      ]
    : (gallery || []).map((src, index) => ({
        src,
        width: 460,
        height: 400,
        alt: `Gallery Image ${index + 1}`,
      }));

  if (images.length === 0) {
    return null;
  }

  return (
    <Gallery>
      {images.map((image, index) => (
        <div
          className={`col-12 ${index === images.length - 1 && images.length % 2 === 1 ? "" : "col-sm-6"}`}
          key={index}
        >
          <div className="img-meta mt-30" data-aos="fade-right">
            <Item
              original={image.src}
              thumbnail={image.src}
              width={image.width}
              height={image.height}
            >
              {({ ref, open }) => (
                <span
                  role="button"
                  className="fancybox d-block"
                  title="Click for large view"
                  ref={ref}
                  onClick={open}
                >
                  <Image
                    width={460}
                    height={400}
                    src={image.src}
                    alt={image.alt}
                    className="lazy-img w-100"
                    style={{ objectFit: "cover", borderRadius: "8px" }}
                  />
                </span>
              )}
            </Item>
          </div>
        </div>
      ))}
    </Gallery>
  );
};

export default PortfolioGallery;