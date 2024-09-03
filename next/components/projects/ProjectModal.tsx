import { default as blobleft, default as blobright } from '@/assets/projects/blobleft.png';
import Image from 'next/image';
import React from 'react';

interface ModalProps {
  // onClose: () => void;
  title: string;
  description: string;
  imageUrl: string;
  signUpUrl: string[];
}

const ProjectModal: React.FC<ModalProps> = ({ title, description, imageUrl, signUpUrl =[] }) => {
  const urls = Array.isArray(signUpUrl) ? signUpUrl : [signUpUrl];

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 ">
        <div className="rounded-lg overflow-hidden w-96 relative shadow-lg"
        style = {{
          border: '12px solid rgba(255, 255, 255, 0.67)',
        }}>
          <button
            // onClick={onClose}
            className="absolute top-4 right-4 text-2xl font-bold text-white z-30">
              &#x2715;
            </button>

          <div className="relative w-full h-32 relative z-20 ">
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

        {/* sign up buttons */}
        {urls.map((url, index) => (
          <div key={index} className="text-center">
            <a
              href={url}
              className="block w-40 text-[12.5px] font-bold bg-white text-black text-center py-2 rounded-3xl relative z-20"
            >
              Click Here to Sign Up
            </a>
          </div>
        ))}

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
      </div>
    </div>
  );
};

export default ProjectModal;