import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getPhotos } from "services/gallery-api";
import { useEffect, useState } from "react";
import { AppField } from "./App.styled";
import Searchbar from "components/Searchbar";
import ImageGallery from "components/ImageGallery";
import Button from "components/Button";
import Loader from "components/Loader";

export const App = () => {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (!query) {
      return
    };
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await getPhotos(query, page);
        if (response.hits.length === 0) {
          return toast.error(`Sorry, but nothing was found for your query: ${query}.`);
        }
        setPhotos(prevPhotos => [...prevPhotos, ...response.hits])
        setTotal(response.totalHits)
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      };
    }
    fetchData();
  }, [query, page]);

  const onSubmit = ({ query }) => {
    if (query.trim() === "") {
      return toast.error(`Enter the query to search for`);
    }
    setQuery(query);
    setPhotos([]);
    setPage(1);
    setError(null);
  }

  const onLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const allPages = total / photos.length;
  const shouldRenderLoadMoreButton = allPages > 1 && !isLoading && photos.length !== 0;

  return (
    <AppField>
      <Searchbar onSubmit={onSubmit} />
      {isLoading && <Loader />}
      {error && <h2>Something went wrong... We can't upload the photo</h2>}
      {photos.length > 1 && <ImageGallery items={photos} />}
      {shouldRenderLoadMoreButton && <Button onClick={onLoadMore} isLoading={isLoading} />}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </AppField>
  );
};
