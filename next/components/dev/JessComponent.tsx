import ProjectModal from "@/components/projects/ProjectModal";

export default function JessComponent() {
    return (
      <div>
        <ProjectModal
        title="PROJECT TITLE"
        description="A group of young people eager to enact positive change in the
            Devonport-Takapuna community. Believing in youth voices and youth
            leadership."
        imageUrl="http://127.0.0.1:1337/uploads/priscilla_du_preez_n_F8xh_L_Mmg0c_unsplash_1_7b7bcfcb87.png"
        signupobjects={[
          { signUpUrl: "https://www.google.com", signUpText: "Click here to Sign up" },
          { signUpUrl: "https://www.youtube.com", signUpText: "Sign Up Here" } ]}/>
      </div>
    );
  }