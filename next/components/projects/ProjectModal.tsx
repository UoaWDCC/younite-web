import { default as blobleft, default as blobright } from '@/assets/projects/blobleft.png';
import Image from 'next/image';
import React from 'react';

interface ModalProps {
  // onClose: () => void;
  title: string;
  description: string;
  imageUrl: string;
  signUpUrl: string[];
  signUpText: string[];
}

const ProjectModal: React.FC<ModalProps> = ({ title, description, imageUrl, signUpUrl, signUpText =[] }) => {
  const urls = Array.isArray(signUpUrl) ? signUpUrl : [signUpUrl];

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 ">
        <div className="rounded-lg overflow-hidden w-[27rem] relative shadow-lg"
        style = {{
          border: '12px solid rgba(255, 255, 255, 0.67)',
        }}>
          <button
            // onClick={onClose}
            className="absolute top-4 right-4 text-2xl font-bold text-white z-30">
              &#x2715;
            </button>

          <div className="relative w-full h-[7rem] relative z-20 ">
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
          <h2 className="text-white text-[28px] text-xl font-bold mb-5 mt-2 text-center relative z-20"> {title} </h2>
          <p className="text-white text-[16px] text-center mb-6 relative z-20"> {description}  </p>

        {/* sign up buttons links */}
        {urls.map((url, index) => (
          <div key={index} className="text-center">
            <a
              href={url}
              className= "mx-auto block w-48 text-[12.5px] mt-2 font-bold bg-white text-black text-center py-2 rounded-3xl relative z-20"
              target="_blank"
            >
              {signUpText[index]}
            </a>
          </div>
        ))}

          {/* Add the blobs */}
          <div className="absolute bottom-10 top-43 -left-9">
            <Image
            src={blobleft}
            alt="BlobLeft"
            width={140}
            height={140}
            />
            </div>

            <div className="absolute -bottom-20 top-20 -right-5">
            <Image
            src={blobright}
            alt="BlobRight"
            width={140}
            height={140}
            />
            </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectModal;