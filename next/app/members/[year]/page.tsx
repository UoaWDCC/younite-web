import ScribbleLeft from "@/assets/members/scribble-left.png";
import ScribbleRight from "@/assets/members/scribble-right.png";
import RichText from "@/components/blocks/RichText";
import { teamSchema } from "@/schemas/collection/Team";
import { getLargestImageUrl } from "@/util/image";
import fetchStrapi from "@/util/strapi";
import Image from "next/image";
import { z } from "zod";
import Chairman from "../../../components/members/Chairman";
import Teams from "../../../components/members/Teams";

export default async function MemberPage({
  params,
}: {
  params: { year: string };
}) {
  const teams = await fetchStrapi("member-teams", z.array(teamSchema), {
    "filters[CommitteeYear][$eq]": params.year,
  });
  const team = teams[0];
  const chairs = team.Chairs;
  const roleSections = team.RoleSection;

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-6 mt-header pt-24">
        <h1 className="uppercase flex flex-col items-center mx-auto mb-24">
          <span className="md:text-6xl text-5xl leading-[0.95]">Meet the</span>
          <span className="md:text-8xl text-6xl text-center font-bold leading-[0.95]">
            {team.CommitteeYear} Team
          </span>
        </h1>
        <div className="relative w-full grid place-items-center isolate">
          <img
            className="w-full max-w-5xl"
            src={getLargestImageUrl(team.teamPhoto)}
            alt=""
          />
          <div className="absolute md:bottom-8 md:right-12 m-3 p-8 pr-16 max-w-lg bg-white shadow-lg rounded-3xl text-b-dark-blue __markdown">
            <RichText
              props={{
                text: team.description,
              }}
            />
            <a
              className="block mr-auto w-fit bg-b-blue px-5 py-3 rounded-full font-bold mt-8"
              href="#chairs"
            >
              MEET THE TEAM
            </a>
          </div>
          <Image
            className="absolute bottom-0 left-0 hidden md:visible"
            src={ScribbleLeft}
            alt=""
          />
          <Image
            className="absolute top-0 right-0 -translate-y-12 -z-10 hidden md:visible"
            src={ScribbleRight}
            alt=""
          />
        </div>
      </div>
      {/* adjust minimum height of components */}
      <Chairman chairs={chairs} />
      <Teams teams={roleSections} />
    </>
  );
}
