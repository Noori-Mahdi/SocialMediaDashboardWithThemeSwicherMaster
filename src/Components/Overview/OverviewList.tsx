import { useContext } from "react";
import OverviewContext from "../../Context/Overview";
import OverviewCard from "./OverviewCard";

const OverviewList = () => {
  const overviewContext = useContext(OverviewContext);

  return (
    <div className="overview">
      <div>
        <span>overview - today</span>
      </div>
      <div className="row">
        {overviewContext?.overview.map((e) => {
          return (
            <OverviewCard
              id={e.id}
              situation={e.situation}
              title={e.title}
              statisticsToDay={e.statisticsToDay}
              statisticsYesterday={e.statisticsYesterday}
              socialmediaName={e.socialmediaName}
            />
          );
        })}
      </div>
    </div>
  );
};

export default OverviewList;
