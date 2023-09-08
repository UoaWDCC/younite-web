import Image from "next/image";
import Flair1 from "../../assets/members/flair1.png";
import Flair2 from "../../assets/members/flair2.png";
import PlaceholderMem1 from "../../assets/members/memplaceolder1.png";
import PlaceholderMem2 from "../../assets/members/memplaceolder2.png";

const Chairman = () => {
	return (
		<section
			className="px-gutter py-20 text-b-dark-blue"
			style={{
				background:
					"radial-gradient(47.21% 33.08% at 23.96% 39.49%, #FD8D5D 0%, rgba(255, 255, 255, 0.00) 100%), radial-gradient(66.83% 44.73% at 78.61% 81.23%, #FAAB36 0%, rgba(255, 255, 255, 0.00) 97.76%), linear-gradient(180deg, #FFF 0%, #FABD6E 100%)",
			}}
		>
			<h2 className="text-7xl text-center mb-4">
				Meet the <span className="font-bold">Chairs</span>
			</h2>
			<p className="text-center max-w-5xl mx-auto mb-20">
				Introducing the Chairmen, they are the passionate leaders of Younite.
				This team of influential young minds is committed to empowering their
				peers and fostering a sense of unity, growth, and inspiration among
				youth. Join them today and witness the trans-formative power of youthful
				leadership in action!
			</p>

			<div className="grid grid-cols-1 md:grid-cols-[repeat(13,minmax(0,1fr))] grid-rows-2 max-w-6xl isolate mx-auto">
				<div className="relative col-span-12 md:col-span-7 drop-shadow-xl">
					<Image
						className="w-full absolute top-0 -right-full h-72 object-contain"
						src={Flair2}
						alt=""
					/>
					<Image className="w-full" src={PlaceholderMem2} alt="" />
					<div className="bg-white px-8 py-6">
						<h3 className="text-2xl font-bold drop-shadow-md">Lisa</h3>
						<p className="text-black font-bold mb-3">Co-Chairman</p>
						<p>
							I’m Lisa (she/her), a 17 year old, in yr13 at Kristin. Through the
							opportunities in Younite, I feel empowered & motivates as a Youth
							voice representing our community. My greatest honour of being
							Co-chair is facilitating passionate & unique individuals who are
							able to come together to achieve fulfilling and selfless outcomes.
						</p>
					</div>
				</div>
				<div className="relative row-start-2 col-span-1 md:col-span-7 md:col-start-7 md:drop-shadow-xl md:-translate-y-[30%] md:-z-10">
					<Image
						className="w-full absolute bottom-0 -left-full h-80 object-contain"
						src={Flair1}
						alt=""
					/>
					<Image className="w-full" src={PlaceholderMem1} alt="" />
					<div className="bg-white px-8 py-6">
						<h3 className="text-2xl font-bold drop-shadow-md">Lisa</h3>
						<p className="text-black font-bold mb-3">Co-Chairman</p>
						<p>
							I’m Lisa (she/her), a 17 year old, in yr13 at Kristin. Through the
							opportunities in Younite, I feel empowered & motivates as a Youth
							voice representing our community. My greatest honour of being
							Co-chair is facilitating passionate & unique individuals who are
							able to come together to achieve fulfilling and selfless outcomes.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Chairman;
