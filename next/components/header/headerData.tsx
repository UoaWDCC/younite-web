export type Navigation = {
  title: string;
  slug: string;
};

export type Member = {
  CommitteeYear: number;
};

export type Project = {
  Title: string;
  slug: string;
};

export type HeaderData = {
  navigation: Navigation[];
  Logo?: any;
  members: Member[];
  projects?: Project[];
};