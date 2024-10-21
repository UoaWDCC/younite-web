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
    <>
      <div className="relative w-full h-[7rem] z-10">
        <Image
          src={imageUrl}
          alt="Project Image"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="p-6 -z-50 bg-[linear-gradient(to_top,#A2D6E5,#FABD6E)]">
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
              target="_blank"
            >
              {signupobject.signUpText}
            </a>
          </div>
        ))}

        {/* Add the blobs */}
        <div className="absolute bottom-10 top-43 -left-9">
          <Image src={blobleft} alt="BlobLeft" width={140} height={140} />
        </div>

        <div className="absolute -bottom-20 top-20 -right-5">
          <Image src={blobright} alt="BlobRight" width={140} height={140} />
        </div>
      </div>
    </>
  );
};

export default ProjectModal;