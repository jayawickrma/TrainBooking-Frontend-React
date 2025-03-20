import React from 'react';
import styles from '../CSS/Gallery.module.css';

interface GalleryProps {
    images: {
        id: string;
        src: string;
        alt: string;
    }[];
    title?: string;
}

const Gallery: React.FC<GalleryProps> = ({ images, title = "Gallery" }) => {
    return (
        <div className={styles.galleryContainer}>
            <h2 className={styles.galleryTitle}>{title}</h2>

            <div className={styles.galleryGrid}>
                {images.map((image) => (
                    <div key={image.id} className={styles.galleryItem}>
                        <img
                            src={image.src}
                            alt={image.alt}
                            className={styles.galleryImage}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;