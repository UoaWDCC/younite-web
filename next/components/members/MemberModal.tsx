import { Member } from "@/schemas/collection/Team";
import { getLargestImageUrl } from "@/util/image";
import Image from "next/image";

function MemberModal({ activeMember }: { activeMember: Member }) {
  return (
    <div>
      <Image
        className="max-h-[80vh] w-full object-cover"
        src={getLargestImageUrl(activeMember.Photo)}
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
    </div>
  );
}

export default MemberModal;