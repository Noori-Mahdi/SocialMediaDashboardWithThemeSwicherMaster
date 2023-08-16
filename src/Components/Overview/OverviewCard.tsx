import { Overview } from "../../type/type";
import facebook from "../../images/icon-facebook.svg";
import instagram from "../../images/icon-instagram.svg";
import twitter from "../../images/icon-twitter.svg";
import youtube from "../../images/icon-youtube.svg";
import Postive from "../../images/icon-up.svg";
import Negative from "../../images/icon-down.svg";
import { useContext } from "react";
import ThemeContext from "../../Context/Theme";


const OverviewCard = ({
  id,
  title,
  socialmediaName,
  statisticsToDay,
  statisticsYesterday,
  situation,
}: Overview) => {

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

  let img = "";
  let socialClass = ""
  switch (socialmediaName) {
    case "facebook":
      img = facebook;
      break;
    case "instagram":
      img = instagram;
      break;
    case "youtube":
      img = youtube;
      break;
    case "twitter":
      img = twitter;
      break;
    default:
      img = "";
  }

  let cheackStatisticsToDay = statisticsToDay
  let newStatisticsToDay = ""

  if(statisticsToDay >= 10000){
    cheackStatisticsToDay = statisticsToDay/1000
    newStatisticsToDay = `${cheackStatisticsToDay} K`
  }else{
    newStatisticsToDay = statisticsToDay.toString()
  }

  let statusimg = "";
  let statusClass = "";
  if (situation === "postive") {
    statusClass = "postive";
    statusimg = Postive;

  } else {
    statusClass = "negative";
    statusimg = Negative;
  }

  return (
    <div className="col-md-3">
      <div style={{backgroundColor:card,color:mainText}} className="overviewCard">
        <div>
          <span>{title}</span>
          <img src={img} alt="" />
        </div>
        <div>
          <span style={{color:secanderText}} >{newStatisticsToDay}</span>
          <div>
            <img src={statusimg} alt="" />
            <span className={statusClass}>{statisticsYesterday}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewCard;
