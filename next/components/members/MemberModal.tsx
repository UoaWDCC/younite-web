import { Member } from "@/schemas/collection/Team";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

function MemberModal({
  activeMember
}: {
  activeMember?: Member;
}) {
  if (!activeMember) return null;

  return (
    <div>
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
      <button className="absolute top-4 right-4">
        <IoClose className="w-10 h-10" />
      </button>
    </div>
  );
}

export default MemberModal;