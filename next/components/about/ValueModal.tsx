import Image from 'next/image';
import React from 'react';
import { useModal } from '../modal/ModalContextProvider';

interface ModalProps {
  title: string;
  description: string;
  imageUrl: string;
}

const ValueModal = ({ title, description, imageUrl }: ModalProps) => {

  const { close } = useModal();

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="rounded-xl overflow-hidden w-[30rem] sm:w-[36rem] md:w-[44rem] aspect-video relative flex"
      style = {{
        border: '12px solid rgba(255, 255, 255)',
        background: 'linear-gradient(to top, #A2D6E5, #FABD6E)'
      }}>

        <button
          className="absolute top-2 right-4 text-2xl font-bold text-white z-30" onClick={close}>
            &#x2715;
          </button>

        {/* Left side of the modal text title */}
        <div className="flex-1 flex flex-col justify-center p-8 text-center relative z-30">
          <h1 className="font-extrabold text-[30px] text-white mb-4">{title}</h1>
          <p className="text-white text-base">{description}</p>
        </div>

        {/* Right side of the modal image */}
        <div className="flex-1 relative">
          <div className="w-full h-full justify-center items-center pt-[10%] overflow-hidden rounded-lg" style={{clipPath: 'path("M 0 0 L 60% 0 Q 100% 25% 100% 50% Q 100% 75% 60% 100% L 0 100% Z")',}}>
              <Image
                src={imageUrl}
                alt="Value Image"
                width={500}
                height={500}
                layout="responsive"
                objectFit='cover'
              />
            </div>

          {/* Transparent overlay on image*/}
          <div className="absolute inset-0 bg-white opacity-30 rounded-xl"></div>
          </div>
        </div>
    </div>
  );
};

export default ValueModal;

