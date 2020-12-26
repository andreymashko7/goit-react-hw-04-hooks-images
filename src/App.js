import './App.css';
import { ToastContainer } from 'react-toastify';
import ImagesInfo from './components/imagesInfo';
import Searchbar from './components/Searchbar';
import { useState } from 'react';

export default function App() {
  const [imageName, setImageName] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);

  const onSearch = imageName => {
    setImageName(imageName);
    setImages([]);
    setPage(1);
  };

  return (
    <>
      <Searchbar onSubmit={onSearch} />
      <ImagesInfo
        imageName={imageName}
        images={images}
        page={page}
        setImages={setImages}
        setPage={setPage}
      />
      <ToastContainer autoClose={3000} />
    </>
  );
}
