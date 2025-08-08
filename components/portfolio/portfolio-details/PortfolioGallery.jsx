// components/portfolio/portfolio-details/PortfolioGallery.jsx
"use client";

import { useEffect, useMemo, useState } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import Image from "next/image";

const PortfolioGallery = ({ mainImage, gallery }) => {
  // Build a flat list of image sources used in the gallery grid
  const baseImages = useMemo(() => {
    const items = [];
    if (mainImage) {
      items.push({ src: mainImage, alt: "Main Image" });
    }
    (gallery || []).forEach((src, index) => {
      items.push({ src, alt: `Gallery Image ${index + 1}` });
    });
    return items;
  }, [mainImage, gallery]);

  // Resolve natural dimensions for each image so PhotoSwipe opens at the correct size
  const [resolvedImages, setResolvedImages] = useState([]);

  useEffect(() => {
    let cancelled = false;

    const loadDimensions = async () => {
      const loaders = baseImages.map(
        (img) =>
          new Promise((resolve) => {
            const probe = new window.Image();
            probe.onload = () => {
              resolve({
                src: img.src,
                alt: img.alt,
                width: probe.naturalWidth || 1600,
                height: probe.naturalHeight || 1200,
              });
            };
            probe.onerror = () => {
              // Fallback dimensions to keep aspect reasonable if probing fails
              resolve({ src: img.src, alt: img.alt, width: 1600, height: 1200 });
            };
            probe.src = img.src;
          })
      );

      const results = await Promise.all(loaders);
      if (!cancelled) setResolvedImages(results);
    };

    if (baseImages.length) {
      loadDimensions();
    } else {
      setResolvedImages([]);
    }

    return () => {
      cancelled = true;
    };
  }, [baseImages]);

  if (resolvedImages.length === 0) return null;

  return (
    <Gallery options={{ initialZoomLevel: "fit" }}>
      {resolvedImages.map((image, index) => (
        <div
          className={`col-12 ${
            index === resolvedImages.length - 1 && resolvedImages.length % 2 === 1 ? "" : "col-sm-6"
          }`}
          key={image.src + index}
        >
          <div className="img-meta mt-30" data-aos="fade-right">
            <Item original={image.src} thumbnail={image.src} width={image.width} height={image.height}>
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