import Image from 'next/image';
import React from 'react';

interface ModalProps {
  // onClose: () => void;
  title: string;
  description: string;
  imageUrl: string;
}

const ValueModal: React.FC<ModalProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="rounded-xl overflow-hidden w-[44rem] h-[27rem] relative flex"
      style = {{
        border: '12px solid rgba(255, 255, 255)',
        background: 'linear-gradient(to top, #A2D6E5, #FABD6E)'
      }}>

        <button
          // onClick={onClose}
          className="absolute top-2 right-4 text-2xl font-bold text-white z-30">
            &#x2715;
          </button>

        <div className="flex-1 flex flex-col justify-center p-8">
          <h1 className="font-bold text-[30px] text-white mb-4">{title}</h1>
          <p className="text-white text-base">{description}</p>
        </div>

            <div className="flex-1 relative">
              <div className="w-full h-full overflow-hidden rounded-lg" style={{clipPath: 'polygon(30% 0%, 100% 100%, 0%, 100%)'}}>
              <Image
                src={imageUrl}
                alt="Value Image"
                width={500}
                height={500}
              />
            </div>

              {/* Transparent overlay on image*/}
              <div className="absolute inset-0 bg-white opacity-30 rounded-xl"></div>
          </div>
        </div>
    </div>
  );
}

export default ValueModal;