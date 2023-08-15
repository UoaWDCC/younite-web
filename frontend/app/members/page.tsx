import RichText from "@/components/blocks/RichText";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import { Inter } from "next/font/google";
import { getLargestImage } from "@/shared/util";
import Image from "next/image";
import MembersBanner from "../../assets/membersbanner.jpg";
import styles from "./page.module.css";
import Chairman from "./Chairman";
import Teams from "./Teams";

// async function getData() {
// 	const res = await fetch(
// 		`http://localhost:1337/api/home-page?populate[textWithImage][populate]=*`,
// 		{
// 			headers: {
// 				authorization: "Bearer " + process.env.STRAPI_KEY,
// 			},
// 			cache: "no-cache",
// 		}
// 	);

// 	const json = await res.json();
// 	const attributes = json.data.attributes;

// 	const schema = z.object({
// 		heroParagraph: z.string(),
// 		blob1: z.string(),
// 		blob2: z.string(),
// 		blob3: z.string(),
// 		textWithImage: z.any(),
// 	});

// 	return schema.parse(attributes);
// }

type Member = {
  name: string;
  role: string;
  description: string;
  funFact: string;
};

const member: Member = {
  name: "John Sutter",
  role: "Sub-Committee Leader + Wellbeing Officer",
  description:
    "Hey, I’m Hunter (he/him) and I’m entering my legacy arc in Younite. I’m passionate about local politics and grassroots activism and excited to hand over the baton to the next group of young leaders. In my spare time I run and watch far too many movies (send me your Letterboxd lists!)",
  funFact:
    "I used to live in Costa Rica (although my spanish is now very bad). It’s great to meet you all!",
};

function MemberModal({
  member,
  visible,
}: {
  member: Member;
  visible: boolean;
}) {
  const { name, role, description, funFact } = member;

  return (
    <div className="modal">
      <div>
        <Image className="member" src={MembersBanner} alt={""} />
      </div>
      <div>
        <h1>member</h1>
      </div>
    </div>
  );
}

export default async function Home() {
  // const data = await getData();

  return (
    <main className={`${styles.main} bg-gradient-1 isolate min-h-full`}>
      <Header />
      <div className="flex flex-col items-center justify-center gap-6">
        <h1 className="uppercase flex flex-col items-center mx-auto mt-12 mb-24">
          <span className="text-6xl leading-[0.95]">Meet the</span>
          <span className="text-8xl font-bold leading-[0.95]">2023 Team</span>
        </h1>

        <div className="relative w-full max-w-6xl grid place-items-center">
          <Image className="w-full max-w-5xl" src={MembersBanner} alt="" />
          <div className="absolute bottom-8 right-0 px-8 py-12 max-w-lg bg-white shadow-lg rounded-3xl text-b-dark-blue __markdown">
            <RichText
              props={{
                text: "# Meet the 2023 YOUNITE Team!\n\nA group of young people eager to enact positive change in the Devonport-Takapuna community. Believing in youth voices and youth leadership.",
              }}
            />
            <button className="bg-b-blue px-5 py-3 rounded-full font-bold mt-8">
              MEET THE TEAM
            </button>
          </div>
        </div>
      </div>
      <MemberModal member={member} visible={true} />

      {/* adjust minimum height of components */}
      <Chairman className="bg-blue-500 p-4 flex items-center justify-center h-[500px] min-h-[500px]" />
      <Teams className="bg-green-500 p-6 flex items-center justify-center h-[500px] min-h-[500px]" />
      <Footer />
    </main>
  );
}
