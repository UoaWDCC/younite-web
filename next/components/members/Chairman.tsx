import Flair1 from "@/assets/members/flair1.png";
import Flair2 from "@/assets/members/flair2.png";
import { Member } from "@/schemas/collection/Team";
import { getLargestImageUrl } from "@/util/image";
import Image from "next/image";

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

      <div className="grid grid-cols-[repeat(13,minmax(0,1fr))] grid-rows-2 max-w-6xl isolate mx-auto">
        <div className="relative col-span-12 ml-5 md:col-span-7 drop-shadow-xl">
          <Image
            className="w-full max-md:hidden outline md:visible absolute top-0 -right-full h-72 object-contain"
            src={Flair2}
            alt=""
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
        <div className="md:relative ml-5 row-start-2 col-span-12 md:col-span-7 md:col-start-7 drop-shadow-xl md:-translate-y-[30%] -z-10">
          <Image
            className="w-full max-md:hidden absolute bottom-0 -left-full h-80 object-contain"
            src={Flair1}
            alt=""
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
