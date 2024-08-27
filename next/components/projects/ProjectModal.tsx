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
    // <div>
    //   <h2>{title}</h2>
    //   <p>{description}</p>
    //   <Image
    //         src={imageUrl}
    //         alt="Project Image"
    //          width={100}
    //          height={100}
    //         />
    // </div>

    <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white bg-opacity-67 rounded-lg overflow-hidden w-96 relative shadow-lg">
          <div className="relative w-full h-48">
          <Image
            src={imageUrl}
            alt="Project Image"
            layout="fill"
            objectFit="cover"
          />

        <div className="p-6 bg-gradient-to-t from-orange-200 to-blue-200">
          <h2 className="text-white text-xl font-bold mb-4 text-center"> PROJECT TITLE </h2>
          <p className="text-white text-center mb-6">
            A group of young people eager to enact positive change in the
            Devonport-Takapuna community. Believing in youth voices and youth
            leadership.
          </p>

          <a
            href="/signup" // Replace with your sign-up URL
            className="block bg-blue-500 text-white text-center py-2 rounded-lg"
          >
            Click Here to Sign up
          </a>
        </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectModal;