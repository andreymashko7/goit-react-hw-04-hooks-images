import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';

function ImageGallery({ images }) {
  return (
    <ul className="ImageGallery">
      {images.map(image => (
        <ImageGalleryItem
          src={image.webformatURL}
          alt={image.tags}
          key={image.id}
          largeImageUrl={image.largeImageURL}
        />
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ImageGallery;
