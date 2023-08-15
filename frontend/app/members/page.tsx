import Header from "@/components/header/header";
import { Inter } from "next/font/google";
import Member from "@/assets/younitelogo.png";
import Image from "next/image";
import styles from "../page.module.css";
import { getLargestImage } from "@/shared/util";

const inter = Inter({ subsets: ["latin"] });

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

export default async function Members() {
  return (
    <main className={styles.main}>
      <Header />
      MEMBERS
      <MemberModal member={member} visible={true} />
    </main>
  );
}

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
        <Image className="member" src={Member} />
      </div>
      <div>
        <h1>member</h1>
      </div>
    </div>
  );
}
