import fetchStrapi from "@/util/strapi";
import { headerSchema } from "@/schemas/single/Header";
import { z } from "zod";

export async function getHeaderData() {
    const resData = await fetchStrapi("header", headerSchema);
    const membersData = await fetchStrapi("member-teams", z.any());
    const members = Array.isArray(membersData)
        ? membersData.map((item) => ({
              ...item,
              CommitteeYear: Number(item.CommitteeYear),
          })).sort((a, b) => b.CommitteeYear - a.CommitteeYear)
        : [];

    const projects = [
        { Title: new Date().getFullYear().toString(), slug: "current" },
        { Title: "Past", slug: "past" },
    ];

    return {
        ...resData,
        members,
        projects,
    };
}