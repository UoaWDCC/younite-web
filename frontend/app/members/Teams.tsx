"use client";
import React, { useState } from 'react';
import Image from "next/image";
// import WeDidItGuys from "../../assets/members/we_did_it_guys.png";
import PlaceholderImage from "../../assets/members/memplaceolder1.png"; // dummy image

const Teams = () => {
    const [selectedTeam, setSelectedTeam] = useState("Community Involvement");

    // Sample data, replace this with fetched data from Strapi in the future
    const teamTypes = ["Community Involvement", "Political Subcommittee", "Arts & Culture"];
    const teamDetails = {
        "Community Involvement": {
            description: "This COMMUNITYY team focuses on ...",
            members: [
                { name: "John", image: PlaceholderImage },
                //... other members
            ],
        },
		"Political Subcommittee": {
            description: "This the political team",
            members: [
                { name: "Bob", image: PlaceholderImage },
                //... other members
            ],
        },
		"Arts & Culture": {
            description: "This the art and craft team",
            members: [
                { name: "Lisa", image: PlaceholderImage },
                //... other members
            ],
        },
        //... other teams
    };

    const selectedTeamDetails = selectedTeam ? teamDetails[selectedTeam] : null;

    return (
		
        <section
            className="px-gutter py-20 text-b-dark-blue"
            style={{
                background:
                    "radial-gradient(49.73% 34.21% at 25.21% 41.21%, rgba(253, 141, 93, 0.61) 0%, rgba(255, 255, 255, 0.00) 100%), radial-gradient(66.83% 44.73% at 78.61% 81.23%, rgba(250, 171, 54, 0.65) 0%, rgba(255, 255, 255, 0.00) 97.76%), linear-gradient(180deg, #FFF 0%, #F4A5A0 100%)",
            }}
        >
			
            <div className="flex justify-center space-x-6 mb-6">
                {teamTypes.map((team) => (
                    <button
                        key={team}
                        onClick={() => setSelectedTeam(team)}
                        className={selectedTeam === team ? "font-bold" : ""}
                    >
                        {team}
                    </button>
                ))}
            </div>

            {selectedTeamDetails && (
                <>
                    <h2 className="text-4xl text-center mb-4">{selectedTeam}</h2>
                    <p className="text-center max-w-5xl mx-auto mb-20">{selectedTeamDetails.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {selectedTeamDetails.members.map((member) => (
                            <div key={member.name} className="relative">
                                <Image src={member.image} alt={member.name} className="w-full" />
                                <div className="absolute bottom-0 left-0 w-full bg-white text-center py-2">
                                    {member.name}
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </section>
    );
};

export default Teams;
