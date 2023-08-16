import { TotalSocial } from "../../type/type";
import facebook from "../../images/icon-facebook.svg";
import instagram from "../../images/icon-instagram.svg";
import twitter from "../../images/icon-twitter.svg";
import youtube from "../../images/icon-youtube.svg";
import Postive from "../../images/icon-up.svg";
import Negative from "../../images/icon-down.svg";
import { useContext } from "react";
import ThemeContext from "../../Context/Theme";

const SocialMedia = ({
  id,
  socialmediaName,
  nikeNameUser,
  people,
  statisticsToDay,
  statisticsYesterday,
  situation,
}: TotalSocial) => {
  let cheackStatisticsToDay = statisticsToDay;
  let newStatisticsToDay = "";

  const themeContext = useContext(ThemeContext);


  let card = "";
  let mainText = "";
  let secanderText = "";


  themeContext?.theme.map((theme) => {
    if (theme.active) {
      card = theme.card;
      mainText = theme.mainText;
      secanderText = theme.secanderText;
    }
  });

  if (statisticsToDay >= 10000) {
    cheackStatisticsToDay = statisticsToDay / 1000;
    newStatisticsToDay = `${cheackStatisticsToDay} K`;
  } else {
    newStatisticsToDay = statisticsToDay.toString();
  }

  let img = "";
  let colorBgBx = "";

  switch (socialmediaName) {
    case "facebook":
      img = facebook;
      colorBgBx = "hsl(208, 92%, 53%)";
      break;
    case "instagram":
      img = instagram;
      colorBgBx =
        "linear-gradient(to right , hsl(37, 97%, 70%),hsl(329, 70%, 58%))";
      break;
    case "youtube":
      img = youtube;
      colorBgBx = "hsl(348, 97%, 39%)";
      break;
    case "twitter":
      img = twitter;
      colorBgBx = "hsl(203, 89%, 53%)";
      break;
    default:
      img = "";
  }

  let statusClass = "";
  let statusimg = "";

  if (situation === "postive") {
    statusClass = "postive";
    statusimg = Postive;
  } else {
    statusClass = "negative";
    statusimg = Negative;
  }

  return (
    <div className="col-md-3">
      <div className="socialMedia" style={{backgroundColor: card,color:mainText}}>
        <div
          className="bgBx"
          style={{ backgroundColor: colorBgBx, backgroundImage: colorBgBx }}
        ></div>
        <div className="d-flex align-items-center justify-content-center">
          <img src={img} alt="" />
          <span>{nikeNameUser}</span>
        </div>
        <h5 style={{color:secanderText}}>{newStatisticsToDay}</h5>
        <span className="text">{people}</span>
        <div className="status">
          <img src={statusimg} alt="" />
          <span className={statusClass}>{statisticsYesterday} Today</span>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
