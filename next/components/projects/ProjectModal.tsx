import Image from 'next/image';
import React from 'react';

interface ModalProps {
  // onClose: () => void;
  title: string;
  description: string;
  imageUrl: string;
  signUpUrl: string[];
}

const ProjectModal: React.FC<ModalProps> = ({ title, description, imageUrl, signUpUrl }) => {
  return (

    <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white bg-opacity-67 rounded-lg overflow-hidden w-96 relative shadow-lg">
          <div className="relative w-full h-48">
            <Image
              src={imageUrl}
              alt="Project Image"
              layout="fill"
              objectFit="cover"
            />
          </div>

        <div className="p-6 bg-gradient-to-t from-blue-200 to-orange-200">
          <h2 className="text-white text-xl font-bold mb-4 text-center"> {title} </h2>
          <p className="text-white text-center mb-6"> {description}  </p>
        {signUpUrl.map((url, index) => (}
          <a
            href={signUpUrl}
            className="block bg-white text-black text-center py-2 rounded-lg"
          >
            Click Here to Sign up
          </a>
        </div>

        {/* <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          &#x2715;
        </button> */}

      </div>
    </div>
  );
};

export default ProjectModal;