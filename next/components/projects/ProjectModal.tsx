import { default as blobleft, default as blobright } from '@/assets/projects/blobleft.png';
import Image from "next/image";

export type ModalProps = {
  title: string;
  description: string;
  imageUrl: string;
  signupobjects?: {
    signUpUrl: string;
    signUpText: string;
  }[];
};


const ProjectModal = ({
  title,
  description,
  imageUrl,
  signupobjects = [],
}: ModalProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="relative w-[32rem] h-auto z-10 p-6 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
        <div className="relative w-full h-[9rem] z-10">
          <Image
            src={imageUrl}
            alt="Project Image"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="relative p-6 bg-[linear-gradient(to_top,#A2D6E5,#FABD6E)] overflow-hidden">
          <h1 className="text-white text-[27px] text-xl font-black mb-5 mt-2 text-center relative z-10">
            {title}
          </h1>
          <p className="text-white text-[16px] text-center mb-6 relative z-10">
            {description}
          </p>

          {/* sign up buttons links */}
          {signupobjects.map((signupobject, index) => (
            <div key={index} className="text-center">
              <a
                href={signupobject.signUpUrl}
                className="mx-auto block w-48 text-[12.5px] mt-2 font-bold bg-white text-black text-center py-2 rounded-3xl relative"
                target="sign up button"
              >
                {signupobject.signUpText}
              </a>
            </div>
          ))}

          {/* Add the blobs */}
          <div className="absolute -bottom-8 -left-8 z-0">
            <Image src={blobleft} alt="BlobLeft" width={140} height={140} />
          </div>

          <div className="absolute -top-8 -right-8 z-0">
            <Image src={blobright} alt="BlobRight" width={140} height={140} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;