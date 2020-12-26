import PropTypes from 'prop-types';
import { useState } from 'react';
import Modal from '../Modal';

export default function ImageGalleryItem({ largeImageUrl, src, alt }) {
  const [showModal, setshowModal] = useState(false);

  const toggleModal = () => {
    setshowModal(!showModal);
  };

  return (
    <li className="ImageGalleryItem">
      <img
        src={src}
        alt={alt}
        onClick={toggleModal}
        className="ImageGalleryItem-image"
      />
      {showModal && (
        <Modal onClose={toggleModal} src={largeImageUrl} alt={alt} />
      )}
    </li>
  );
}

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  largeImageUrl: PropTypes.string.isRequired,
};
