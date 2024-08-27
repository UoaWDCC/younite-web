import Image from 'next/image';
import React from 'react';

interface ModalProps {
  // onClose: () => void;
  title: string;
  description: string;
  imageUrl: string;
  // signUpUrl: string;
}

const ProjectModal: React.FC<ModalProps> = ({ title, description, imageUrl }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <Image
            src={imageUrl}
            alt="Project Image"
             width={100}
             height={100}
            />
    </div>
  );
};

export default ProjectModal;