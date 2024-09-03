import { default as blobleft, default as blobright } from '@/assets/projects/blobleft.png';
import Image from 'next/image';
import React from 'react';

interface ModalProps {
  // onClose: () => void;
  title: string;
  description: string;
  imageUrl: string;
  signUpUrl: string;
}

const ProjectModal: React.FC<ModalProps> = ({ title, description, imageUrl, signUpUrl }) => {
  return (

    <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white bg-opacity-67 rounded-lg overflow-hidden w-96 relative shadow-lg">
          <div className="relative w-full h-32 relative z-20">
            <Image
              src={imageUrl}
              alt="Project Image"
              layout="fill"
              objectFit="cover"
            />
          </div>

        <div className="p-6"
        style={{
            background: 'linear-gradient(to top, #A2D6E5, #FABD6E)'}}>
          <h2 className="text-white text-xl font-bold mb-4 text-center relative z-20"> {title} </h2>
          <p className="text-white text-center mb-6 relative z-20"> {description}  </p>

          <a
            href={signUpUrl}
            className="mx-auto block w-40 text-[12.5px] font-bold bg-white text-black text-center py-2 rounded-3xl relative z-20"
          >
            Click Here to Sign Up
          </a>

          {/* Add the blobs */}
          <div className="absolute bottom-10 top-43 -left-9">
            <Image
            src={blobleft}
            alt="BlobLeft"
            width={140} // Adjust width as needed
            height={140}
            />
            </div>

            <div className="absolute -bottom-20 top-20 -right-5">
            <Image
            src={blobright}
            alt="BlobRight"
            width={140} // Adjust width as needed
            height={140}
            />
            </div>

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