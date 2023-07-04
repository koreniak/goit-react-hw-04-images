import PropTypes from 'prop-types';
import { useState } from "react";
import { GalleryItem, GalleryImage } from "./ImageGalleryItem.styled";
import Modal from "components/Modal";

const ImageGalleryItem = ({ smallImageURL, largeImageURL, alt }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (<GalleryItem onClick={toggleModal} >
    <GalleryImage src={smallImageURL} alt={alt} />
    {showModal && <Modal onClose={toggleModal}><img src={largeImageURL} alt={alt} /></Modal>}
  </GalleryItem>)
};

ImageGalleryItem.propTypes = {
    smallImageURL: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
};

export default ImageGalleryItem;