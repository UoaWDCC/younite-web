"use client";
import { getLargestImage } from "@/shared/util";
import { useState } from "react";
import { RoleSection } from "./page";

export default function Teams({ teams }: { teams: RoleSection[] }) {
	const [active, setActive] = useState(0);

	const activeTeam = teams[active];

	return (
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
				{activeTeam.Members?.map(
					(
						member // Ensure members exist within attributes
					) => (
						<div key={member.Name} className="relative shadow-lg">
							<img
								src={getLargestImage(member.Photo)}
								alt={member.Name}
								className="w-full"
							/>
							<div className="absolute bottom-0 left-0 w-full bg-white text-center py-2 font-bold">
								{member.Name}
							</div>
						</div>
					)
				)}
			</div>
		</section>
	);
}