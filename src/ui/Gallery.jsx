import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

/**
 * @param {Object} props
 * @param {string[]} props.images - Array of image URLs
 */
function Gallery({ images }) {
    const galleryItems = images.map((img) => ({
        original: img,
        thumbnail: img,
    }));

    return (
        <ImageGallery
            originalHeight="400"
            originalWidth="400"
            thumbnailPosition={"left"}
            showPlayButton={false}
            items={galleryItems}
        />
    );
}

export default Gallery;
