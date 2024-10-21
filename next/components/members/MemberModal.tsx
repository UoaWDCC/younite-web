import { Member } from "@/schemas/collection/Team";
import { getLargestImageUrl } from "@/util/image";
import Image from "next/image";

function MemberModal({ activeMember }: { activeMember: Member }) {
  return (
    <div className="inset-0 flex w-[60rem] justify-center items-center">
      <div className="flex flex-row items-center w-[60rem] h-[29rem] bg-gradient-to-t from-[#F6D09E] to-[#e9e6e1] ">
      <Image
        className="max-h-[80vh] w-3/5 object-cover"
        src={getLargestImageUrl(activeMember.Photo)}
        alt={activeMember.Name}
        objectFit="cover"
        width={150}
        height={150}
      />
      <div className="text-[#014788] ml-5 px-8 py-12 w-[95%]">
        <h2 className="mb-4 text-3xl font-bold">{activeMember.Name}</h2>
        <h3 className="mb-8 text-lg font-bold max-w-[18ch]">
          {activeMember.Role}
        </h3>
        <p className="mb-12 max-w-[75ch] text-[15px]"> {activeMember.About}</p>
        <p className="max-w-[75ch] italic text-[14px]">
          {activeMember.funFact}
        </p>
      </div>
    </div>
    </div>
  );
}

export default MemberModal;