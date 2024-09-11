import React from 'react';

interface ModalProps {
  // onClose: () => void;
  title: string;
  description: string;
  imageUrl: string;
}

const ValueModal: React.FC<ModalProps> = ({ title, description, imageUrl = [] }) => {
  return (
    <div>
        <h1>Still in Learning Progress</h1>
        <p>Remember Practice makes Perfect! 🌟</p>
    </div>
  );
}

export default ValueModal;
