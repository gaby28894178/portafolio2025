import React from 'react';

const Modal = ({ isOpen, onClose, images }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-3xl w-full">
        <button 
          onClick={onClose} 
          className="text-black float-right text-2xl font-bold hover:text-red-600"
        >
          &times;
        </button>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, idx) => (
            <img key={idx} src={img} alt="gallery" className="rounded-lg object-cover w-full h-48" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
