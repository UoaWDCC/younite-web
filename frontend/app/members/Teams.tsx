import Image from "next/image";
import WeDidItGuys from "../../assets/members/we_did_it_guys.png";

const Teams = () => {
	return (
		<section
			className="px-gutter py-20 text-b-dark-blue"
			style={{
				background:
					"radial-gradient(49.73% 34.21% at 25.21% 41.21%, rgba(253, 141, 93, 0.61) 0%, rgba(255, 255, 255, 0.00) 100%), radial-gradient(66.83% 44.73% at 78.61% 81.23%, rgba(250, 171, 54, 0.65) 0%, rgba(255, 255, 255, 0.00) 97.76%), linear-gradient(180deg, #FFF 0%, #F4A5A0 100%)",
			}}
		>
			<Image src={WeDidItGuys} alt="" className="max-w-6xl mx-auto" />
		</section>
	);
};

export default Teams;
