import { useState } from "react";
import ThemeContext from "./Context/Theme";
import TotalSocialContext from "./Context/TotalSocial";
import Header from "./Components/Header/Header";
import SocaialMediaList from "./Components/TotalSocialMedia/SocialMediaList";
import OverviewContext from "./Context/Overview";
import OverviewList from "./Components/Overview/OverviewList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [totalSocial, setTotalSocial] = useState([
    {
      id: 1,
      socialmediaName: "facebook",
      nikeNameUser: "@nathant",
      statisticsToDay: 1987,
      statisticsYesterday: 12,
      situation: "postive",
      people: "Followers",
    },
    {
      id: 2,
      socialmediaName: "twitter",
      nikeNameUser: "@nathant",
      statisticsToDay: 1044,
      statisticsYesterday: 99,
      situation: "postive",
      people: "Followers",
    },
    {
      id: 3,
      socialmediaName: "instagram",
      nikeNameUser: "@realnathanf",
      statisticsToDay: 11000,
      statisticsYesterday: 1099,
      situation: "postive",
      people: "Followers",
    },
    {
      id: 4,
      socialmediaName: "youtube",
      nikeNameUser: "@nathan F.",
      statisticsToDay: 8239,
      statisticsYesterday: 144,
      situation: "negative",
      people: "subscribers",
    },
  ]);

  const [overview, setOverview] = useState([
    {
      id: 1,
      title: "page views",
      socialmediaName: "facebook",
      statisticsToDay: 87,
      statisticsYesterday: 3,
      situation: "postive",
    },
    {
      id: 2,
      title: "likes",
      socialmediaName: "facebook",
      statisticsToDay: 52,
      statisticsYesterday: 2,
      situation: "negative",
    },
    {
      id: 3,
      title: "likes",
      socialmediaName: "instagram",
      statisticsToDay: 5462,
      statisticsYesterday: 2257,
      situation: "postive",
    },
    {
      id: 4,
      title: "profile views",
      socialmediaName: "instagram",
      statisticsToDay: 52000,
      statisticsYesterday: 1375,
      situation: "postive",
    },
    {
      id: 5,
      title: "retweets",
      socialmediaName: "twitter",
      statisticsToDay: 117,
      statisticsYesterday: 303,
      situation: "postive",
    },
    {
      id: 6,
      title: "likes",
      socialmediaName: "twitter",
      statisticsToDay: 507,
      statisticsYesterday: 553,
      situation: "postive",
    },
    {
      id: 7,
      title: "likes",
      socialmediaName: "youtube",
      statisticsToDay: 107,
      statisticsYesterday: 19,
      situation: "negative",
    },
    {
      id: 8,
      title: "total views",
      socialmediaName: "youtube",
      statisticsToDay: 1407,
      statisticsYesterday: 12,
      situation: "negative",
    },
  ]);

  const [theme, setTheme] = useState([
    {
      theme: "Dark Mode",
      active: true,
      BG: "hsl(230, 17%, 14%)",
      BGH: "hsl(232, 19%, 15%)",
      card: "hsl(228, 28%, 20%)",
      mainText: "hsl(228, 34%, 66%)",
      secanderText: "hsl(0, 0%, 100%)",
    },
    {
      theme: "Light Mode",
      active: false,
      BG: "hsl(0, 0%, 100%)",
      BGH: "hsl(225, 100%, 98%)",
      card: "hsl(227, 47%, 96%)",
      mainText: "hsl(228, 12%, 44%)",
      secanderText: "hsl(230, 17%, 14%)",
    },
  ]);

  const changeTheme = () => {
    const newTheme = [...theme]
    newTheme.map((e) => {
      if (e.active) {
        e.active = false;
        return e;
      } else {
        e.active = true;
        return e;
      }
    });
    setTheme(newTheme)
  };

  let BG = "";

  theme.map((t) => {
    if (t.active) {
      BG = t.BG;
    }
  });

  return (
    <div className="mainPage container-fluid" style={{ backgroundColor: BG }}>
      <ThemeContext.Provider value={{ theme: theme}}>
        <TotalSocialContext.Provider value={{ totalSocial: totalSocial }}>
          <OverviewContext.Provider value={{ overview: overview }}>
            <Header onChange={changeTheme}/>
            <SocaialMediaList />
            <OverviewList />
          </OverviewContext.Provider>
        </TotalSocialContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
