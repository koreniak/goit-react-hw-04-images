import PropTypes from 'prop-types';
import { useState } from "react";
import { GalleryItem, GalleryImage } from "./ImageGalleryItem.styled";
import Modal from "components/Modal";

const ImageGalleryItem = ({ smallImageURL, largeImageURL, alt }) => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    if (showModal) {
      setShowModal(false);
    };
  };

  const openModal = () => {
    if (!showModal) {
      setShowModal(true)
    };
  };

  return (<GalleryItem onClick={openModal} >
    <GalleryImage src={smallImageURL} alt={alt} />
    {showModal && <Modal onClose={closeModal}><img src={largeImageURL} alt={alt} /></Modal>}
  </GalleryItem>)
};

ImageGalleryItem.propTypes = {
    smallImageURL: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
};

export default ImageGalleryItem;