import Flair1 from "@/assets/members/flair1.png";
import Flair2 from "@/assets/members/flair2.png";
import { Member } from "@/schemas/collection/Team";
import { getLargestImageUrl } from "@/util/image";
import Image from "next/image";
import FunFactArrow1 from "./FunFactArrow1";
import FunFactArrow2 from "./FunFactArrow2";

const Chairman = ({ chairs }: { chairs: Member[] }) => {
  const chair1 = chairs[0];
  const chair2 = chairs[1];

  return (
    <section
      className="px-gutter py-20 text-b-dark-blue"
      id="chairs"
      style={{
        background:
          "radial-gradient(47.21% 33.08% at 23.96% 39.49%, #FD8D5D 0%, rgba(255, 255, 255, 0.00) 100%), radial-gradient(66.83% 44.73% at 78.61% 81.23%, #FAAB36 0%, rgba(255, 255, 255, 0.00) 97.76%), linear-gradient(180deg, #FFF 0%, #FABD6E 100%)",
      }}
    >
      <h2 className="md:text-7xl text-5xl text-center mb-4">
        Meet the <span className="font-bold">Chairs</span>
      </h2>
      <p className="text-center max-w-5xl mx-auto mb-20">
        Introducing the Chairmen, they are the passionate leaders of Younite.
        This team of influential young minds is committed to empowering their
        peers and fostering a sense of unity, growth, and inspiration among
        youth. Join them today and witness the trans-formative power of youthful
        leadership in action!
      </p>

      <div className="grid relative grid-cols-[repeat(13,minmax(0,1fr))] grid-rows-[repeat(2),minmax(0))] max-w-6xl isolate mx-auto">
        <div className="relative col-span-12 ml-5 md:col-span-7 drop-shadow-xl">
        <FunFactArrow1
            funFact = {chair1.funFact}
            imgSrc = {Flair2}
            className = "absolute lg:-right-[24em] -right-[22em] max-md:hidden sm:visible"
          />
          <img
            className="w-full"
            src={getLargestImageUrl(chair1.Photo)}
            alt=""
          />
          <div className="bg-white px-8 py-6">
            <h3 className="text-2xl font-bold drop-shadow-md">{chair1.Name}</h3>
            <p className="text-black font-bold mb-3">{chair1.Role}</p>
            <p>{chair1.About}</p>
          </div>
        </div>
        <div className="md:relative ml-5 row-start-2 col-span-12 md:col-span-7 md:col-start-7 drop-shadow-xl md:-translate-y-[20%] -z-10">
          <FunFactArrow2 funFact = {chair2.funFact}
            imgSrc = {Flair1}
            className = "absolute lg:-left-[22rem] -left-[22rem] top-[11rem] lg:top-[16rem] max-md:hidden sm:visible"
          />
          <img
            className="w-full"
            src={getLargestImageUrl(chair2.Photo)}
            alt=""
          />
          <div className="bg-white px-8 py-6">
            <h3 className="text-2xl font-bold drop-shadow-md">{chair2.Name}</h3>
            <p className="text-black font-bold mb-3">{chair2.Role}</p>
            <p>{chair2.About}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chairman;