export type TotalSocial = {
  id: number;
  socialmediaName: string;
  nikeNameUser: string;
  people: string;
  statisticsToDay: number;
  statisticsYesterday: number;
  situation: string;
};

export type TotalSocialContextType = {
  totalSocial: TotalSocial[];
};

export type Overview = {
  id: number;
  title: string;
  socialmediaName: string;
  statisticsToDay: number;
  statisticsYesterday: number;
  situation: string;
};

export type OverviewContextType = {
  overview: Overview[];
};

export type Theme = {
  theme: string;
  active: boolean;
  BG: string;
  BGH: string;
  card: string;
  mainText: string;
  secanderText: string;
};

export type ThemeContextType ={
  theme : Theme[]
}

export type HeaderProps ={
  onChange: () => void
}
