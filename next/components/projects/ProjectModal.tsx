import { default as blobleft, default as blobright } from '@/assets/projects/blobleft.png';
import Image from 'next/image';
import React from 'react';

export type ModalProps = {
  // onClose: () => void;
  title: string;
  description: string;
  imageUrl: string;
  signupobjects: {
    signUpUrl: string;
    signUpText: string;
  }[];
}

const ProjectModal: React.FC<ModalProps> = ({ title, description, imageUrl, signupobjects = [] }) => {

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
          <h1 className="text-white text-[27px] text-xl font-[1000] mb-5 mt-2 text-center relative z-20"> {title} </h1>
          <p className="text-white text-[16px] text-center mb-6 relative z-20"> {description}  </p>

        {/* sign up buttons links */}
        {signupobjects.map((signupobject, index) => (
          <div key={index} className="text-center">
            <a
              href={signupobject.signUpUrl}
              className= "mx-auto block w-48 text-[12.5px] mt-2 font-bold bg-white text-black text-center py-2 rounded-3xl relative z-20"
              target="_blank"
            >
              {signupobject.signUpText}
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