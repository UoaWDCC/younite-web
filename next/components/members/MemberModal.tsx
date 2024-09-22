import { Member } from "@/schemas/collection/Team";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

function MemberModal({
  activeMember,
  callback,
}: {
  activeMember?: Member;
  callback: () => void;
}) {
  if (!activeMember) return null;

  return (
    <div className="fixed inset-0 grid place-items-center isolate">
      <motion.div
        className="absolute -z-10 w-lvh h-lvh md:w-full md:h-full bg-black backdrop-blur-md bg-opacity-40"
        onClick={callback}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: "spring", bounce: 0, duration: 0.3 }}
      ></motion.div>
      <motion.div
        className="md:h-fit md:w-full h-lvh w-lvh md:max-w-6xl grid grid-cols-[2fr_3fr] text-b-dark-blue"
        style={{
          background:
            "radial-gradient(47.21% 33.08% at 23.96% 39.49%, rgba(253, 141, 93, 0.20) 0%, rgba(255, 255, 255, 0.00) 100%), radial-gradient(66.83% 44.73% at 78.61% 81.23%, rgba(250, 171, 54, 0.20) 0%, rgba(255, 255, 255, 0.00) 97.76%), linear-gradient(180deg, #FFF 0%, #F6D09E 100%)",
        }}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", bounce: 0, duration: 0.15 }}
      >
        <Image
          className="max-h-[80vh] w-full object-cover"
          src="http://127.0.0.1:1337/uploads/priscilla_du_preez_n_F8xh_L_Mmg0c_unsplash_1_7b7bcfcb87.png" //Instead of URL, its supposed to be src={getLargestImageUrl(member.Photo)}, but it does not work
          alt=""
          objectFit="cover"
          width={100}
          height={100}
        />
        <div className="px-8 py-12 w-[65%]">
          <h2 className="mb-4 text-3xl font-bold">{activeMember.Name}</h2>
          <h3 className="mb-8 text-lg font-bold max-w-[18ch]">
            {activeMember.Role}
          </h3>
          <p className="mb-12 max-w-[75ch]">{activeMember.About}</p>
          <p className="max-w-[75ch] italic text-[14px]">
            {activeMember.funFact}
          </p>
        </div>
      </motion.div>
      <button onClick={callback} className="absolute top-4 right-4">
        <IoClose className="w-10 h-10" />
      </button>
    </div>
  );
}

export default MemberModal;