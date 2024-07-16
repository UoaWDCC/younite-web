import ScribbleLeft from "@/assets/members/scribble-left.png";
import ScribbleRight from "@/assets/members/scribble-right.png";
import RichText from "@/components/blocks/RichText";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
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
    <main className={`bg-gradient-1 isolate min-h-full`}>
      {/* @ts-ignore */}
      <Header />
      <div className="flex flex-col items-center justify-center gap-6">
        <h1 className="uppercase flex flex-col items-center mx-auto mt-12 mb-24">
          <span className="text-6xl leading-[0.95]">Meet the</span>
          <span className="text-8xl font-bold leading-[0.95]">
            {team.CommitteeYear} Team
          </span>
        </h1>

        <div className="relative w-full grid place-items-center isolate">
          <img
            className="w-full max-w-5xl"
            src={getLargestImageUrl(team.teamPhoto)}
            alt=""
          />
          <div className="absolute bottom-8 right-12 p-8 pr-16 max-w-lg bg-white shadow-lg rounded-3xl text-b-dark-blue __markdown">
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
            className="absolute bottom-0 left-0"
            src={ScribbleLeft}
            alt=""
          />
          <Image
            className="absolute top-0 right-0 -translate-y-12 -z-10"
            src={ScribbleRight}
            alt=""
          />
        </div>
      </div>
      {/* adjust minimum height of components */}
      <Chairman chairs={chairs} />
      <Teams teams={roleSections} />
      <Footer />
    </main>
  );
}
