"use client";
import { Team } from "@/schemas/collection/Team";
import { Member } from "@/schemas/components/Member";
import { RoleSection } from "@/schemas/components/RoleSection";
import { getLargestImage } from "@/shared/util";
import { motion } from "framer-motion";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

export default function Teams({ teams }: { teams: RoleSection[] }) {
  const [active, setActive] = useState(0);

  const activeTeam = teams[active];

  const [selected, setSelected] = useState(-1);

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
              onClick={() => setSelected(i)}
            >
              <img
                src={getLargestImage(member.Photo)}
                alt={member.Name}
                className="w-full"
              />
              <div className="absolute bottom-0 left-0 w-full bg-white text-center py-2 font-bold">
                {member.Name}
              </div>
            </button>
          ))}
        </div>
      </section>
      <MemberModal
        activeMember={activeTeam.Members[selected] || undefined}
        callback={() => setSelected(-1)}
      />
    </>
  );
}

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
        className="absolute -z-10 w-full h-full bg-black backdrop-blur-md bg-opacity-40"
        onClick={callback}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: "spring", bounce: 0, duration: 0.3 }}
      ></motion.div>
      <motion.div
        className="h-fit w-full max-w-6xl grid grid-cols-[2fr_3fr] text-b-dark-blue"
        style={{
          background:
            "radial-gradient(47.21% 33.08% at 23.96% 39.49%, rgba(253, 141, 93, 0.20) 0%, rgba(255, 255, 255, 0.00) 100%), radial-gradient(66.83% 44.73% at 78.61% 81.23%, rgba(250, 171, 54, 0.20) 0%, rgba(255, 255, 255, 0.00) 97.76%), linear-gradient(180deg, #FFF 0%, #F6D09E 100%)",
        }}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", bounce: 0, duration: 0.15 }}
      >
        <img
          className="max-h-[80vh] w-full object-cover"
          src={getLargestImage(activeMember.Photo)}
          alt=""
        />
        <div className="px-8 py-12 w-[65%]">
          <h2 className="mb-4 text-3xl font-bold">{activeMember.Name}</h2>
          <h3 className="mb-8 text-lg font-bold max-w-[18ch]">
            {activeMember.Role}
          </h3>
          <p className="mb-12 max-w-[75ch]">{activeMember.About}</p>
          <p className="max-w-[75ch]">{activeMember.funFact}</p>
        </div>
      </motion.div>
      <button onClick={callback} className="absolute top-4 right-4">
        <IoClose className="w-10 h-10" />
      </button>
    </div>
  );
}
