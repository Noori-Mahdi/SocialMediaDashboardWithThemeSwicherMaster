import { useContext } from "react";
import TotalSocialContext from "../../Context/TotalSocial";
import SocialMedia from "./SocialMedia";

const SocaialMediaList = () => {
  const totalSocialContext = useContext(TotalSocialContext);
  return (
    <div className="row">
      {totalSocialContext?.totalSocial.map((e) => {
        return (
          <SocialMedia
            id={e.id}
            socialmediaName={e.socialmediaName}
            nikeNameUser={e.nikeNameUser}
            people ={e.people}
            statisticsToDay={e.statisticsToDay}
            statisticsYesterday ={e.statisticsYesterday}
            situation ={e.situation}
          />
        );
      })}
    </div>
  );
};

export default SocaialMediaList;
