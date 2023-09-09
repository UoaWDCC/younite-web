"use client";
import React, { useState, useEffect } from 'react';
import { z } from 'zod';


async function getTeamsData() {
    const res = await fetch(`http://localhost:1337/api/teams?populate[members][populate]=*`, {
        headers: {
            authorization: `Bearer${process.env.STRAPI_KEY}`
        },
        cache: "no-cache",
    });

    if (!res.ok) {
        throw new Error('Failed to fetch team data');
    }

    const json = await res.json();

    const memberPictureSchema = z.object({
        data: z.object({
            attributes: z.object({
                url: z.string()
            })
        })
    });

    const teamSchema = z.object({
        data: z.array(
            z.object({
                attributes: z.object({
                    teamName: z.string(),
                    description: z.string(),
                    members: z.array(
                        z.object({
                            memberName: z.string(),
                            memberPicture: memberPictureSchema
                        })
                    )
                })
            })
        )
    });

    console.log(json);
    return teamSchema.parse(json);
}

export default function Teams() {

    const [teams, setTeams] = useState([]);
    const [selectedTeam, setSelectedTeam] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        getTeamsData()
            .then(data => {
                setTeams(data.data);  // Adjusted for the response structure
                setSelectedTeam(data.data[0]?.attributes.teamName); // Adjusted for the response structure
            })
            .catch(err => {
                setError(err.message);
            });
    }, []);

    const selectedTeamDetails = selectedTeam ? teams.find(team => team.attributes.teamName === selectedTeam) : null;
    
    if (error) {
        return <div className="text-red-500">{error}</div>;
    }

    return (
        <section
            className="px-gutter py-20 text-b-dark-blue"
            style={{
                background:
                    "radial-gradient(49.73% 34.21% at 25.21% 41.21%, rgba(253, 141, 93, 0.61) 0%, rgba(255, 255, 255, 0.00) 100%), radial-gradient(66.83% 44.73% at 78.61% 81.23%, rgba(250, 171, 54, 0.65) 0%, rgba(255, 255, 255, 0.00) 97.76%), linear-gradient(180deg, #FFF 0%, #F4A5A0 100%)",
            }}
        >
             <div className="flex justify-center space-x-6 mb-6">
                {teams.map((team) => (
                    <button
                        key={team.attributes.teamName}
                        onClick={() => setSelectedTeam(team.attributes.teamName)}
                        className={selectedTeam === team.attributes.teamName ? "font-bold" : ""}
                    >
                        {team.attributes.teamName}
                    </button>
                ))}
            </div>
    
            {selectedTeamDetails && (
                <>
                    <h2 className="text-4xl text-center mb-4">{selectedTeamDetails.attributes.teamName}</h2>
                    <p className="text-center max-w-5xl mx-auto mb-20">{selectedTeamDetails.attributes.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
    {selectedTeamDetails?.attributes.members?.map((member) => (  // Ensure members exist within attributes
        <div key={member.memberName} className="relative">
            <img src={`http://localhost:1337${member.memberPicture.data.attributes.url}`} alt={member.memberName} className="w-full" />
            <div className="absolute bottom-0 left-0 w-full bg-white text-center py-2">
                {member.memberName}
            </div>
        </div>
    ))}
</div>
                </>
            )}
        </section>
    );    
};
