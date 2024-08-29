import React from "react";
import s from "./ImageModal.module.css";
import { Image } from "../../App.types";
import Modal from "react-modal";

interface ImageCardProps {
  isOpen: boolean;
  onRequestClose: () => void;
  image: Image | null;
}

Modal.setAppElement("#root");

const ImageModal: React.FC<ImageCardProps> = ({
  isOpen,
  onRequestClose,
  image,
}) => {
  if (!image) return null;
  return (
    <div className={s.div}>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        className={s.modal}
        overlayClassName={s.overlay}
      >
        <p>{image.description || image.alt_description}</p>
        <img
          src={image.urls.regular}
          alt={image.alt_description || "Image"}
          className={s.image}
        />
        <button className={s.closeBtn} onClick={onRequestClose}>
          X
        </button>
      </Modal>
    </div>
  );
};

export default ImageModal;
