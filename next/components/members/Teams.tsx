"use client";
import { Member, RoleSection } from "@/schemas/collection/Team";
import Image from "next/image";
import { useState } from "react";
import MemberModal from "./MemberModal";
import { useModal } from "../modal/ModalContextProvider";

export default function Teams({ teams }: { teams: RoleSection[] }) {
  const [active, setActive] = useState(0);
  const activeTeam = teams[active];
  const { open } = useModal();

  function handleCardClick(member: Member) {
    open(<MemberModal activeMember={member} />);
  }

  return (
    <>
      <section
        className="px-gutter py-20 text-b-dark-blue"
        style={{
          background:
            "radial-gradient(49.73% 34.21% at 25.21% 41.21%, rgba(253, 141, 93, 0.61) 0%, rgba(255, 255, 255, 0.00) 100%), radial-gradient(66.83% 44.73% at 78.61% 81.23%, rgba(250, 171, 54, 0.65) 0%, rgba(255, 255, 255, 0.00) 97.76%), linear-gradient(180deg, #FFF 0%, #F4A5A0 100%)",
        }}
      >
        <div className="flex justify-center items-center space-x-4 mb-8">
          {teams.map((team, i) => (
            <div key={i}>
              <button
                onClick={() => setActive(i)}
                className={`px-4 py-2 text-xl transform transition-transform duration-150 border-transparent border ${
                  i === active ? "font-bold border-0" : "border-l-1 border-r-1"
                }`}
              >
                {team.SectionName}
              </button>
            </div>
          ))}
        </div>
        <h2 className="text-5xl text-center mb-4">{activeTeam.SectionName}</h2>
        <p className="text-center max-w-5xl mx-auto mb-20">
          {activeTeam.Description}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {activeTeam.Members?.map((member, i) => (
            <button
              key={member.Name}
              className="relative shadow-lg"
              onClick={() => handleCardClick(member)}
            >
              <Image
                className="w-full"
                src="http://127.0.0.1:1337/uploads/priscilla_du_preez_n_F8xh_L_Mmg0c_unsplash_1_7b7bcfcb87.png" //Instead or URL, supposed to be src={getLargestImageUrl(member.Photo)}, but it does not work
                alt={member.Name}
                objectFit="cover"
                width={100}
                height={100}
              />
              <div className="absolute bottom-0 left-0 w-full bg-white text-center py-2 font-bold">
                {member.Name}
              </div>
            </button>
          ))}
        </div>
      </section>
    </>
  );
}
