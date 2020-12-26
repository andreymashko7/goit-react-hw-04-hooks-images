import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import galeryAPI from '../../services/pixabay-api';
import ImageGallery from '../ImageGallery';
import Loader from '../Loader';
import Button from '../Button';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

function ImagesInfo({ imageName, images, page, setImages, setPage }) {
  const [error, setError] = useState({});
  const [status, setStatus] = useState(Status.IDLE);
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    if (!imageName) {
      return;
    }

    setStatus(Status.PENDING);

    galeryAPI
      .fetchImages(imageName, page)
      .then(newImages => {
        if (newImages.total > 0) {
          setImages(prevImages => [...prevImages, ...newImages.hits]);
          setStatus(Status.RESOLVED);
          newImages.total < 1 ? setShowButton(false) : setShowButton(true);
        } else
          return Promise.reject(
            new Error(`
                Could not find pictures for the request : "${imageName}"`),
          );
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [imageName, page, setImages]);

  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth',
  });

  if (status === Status.IDLE) {
    return <p className="InfoText">Please enter some search keyword</p>;
  }

  if (status === Status.PENDING) {
    return <Loader />;
  }

  if (status === Status.REJECTED) {
    return <p className="ErrorText">{error.message}</p>;
  }

  if (status === Status.RESOLVED) {
    return (
      <>
        <ImageGallery images={images} />
        {<Button onClick={() => setPage(page + 1)} />}
      </>
    );
  }
}

ImagesInfo.propTypes = {
  imageName: PropTypes.string.isRequired,
  images: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
  setImages: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired,
};

export default ImagesInfo;
