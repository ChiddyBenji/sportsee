import React from "react";
import Activity from "../components/activity";
import Cardsid from "../components/cardsid";
import Performance from "../components/performance";
import Radarcard from "../components/radarcard";
import Score from "../components/score";

function Front({
  userData,
  userActivity,
  userPerformance,
  userAverageSessions,
}) {
  const firstName = userData?.data?.userInfos?.firstName || "Nom inconnu";
  const score = userData?.data?.todayScore ?? userData?.data?.score;
  const cardsid = userData?.data?.keyData || "Cards inconnues";

  const congratulationsMessage =
    score > 0.5
      ? "Super travail ! Vous avez atteint un score exceptionnel 👏"
      : score <= 0.2
      ? "Bonne performance, continuez comme ça ! 💪"
      : "Félicitations ! Vous avez explosé vos objectifs hier 👏";

  return (
    <div className="content-front">
      <div className="content-message">
        <h1>
          Bonjour, <span className="hello">{firstName}</span>
        </h1>
        <p>{congratulationsMessage}</p>
      </div>
      <div className="content-graphs">
        <div className="content-graphone">
          <div className="content-activity">
            <Activity activityData={userActivity} />
          </div>
          <div className="cards">
            <Performance activityData={userAverageSessions} />
            <Radarcard activityData={userPerformance} />
            <Score score={score} />
          </div>
        </div>
        <div className="content-graphtwo">
          <Cardsid activityData={cardsid} />
        </div>
      </div>
    </div>
  );
}

export default Front;
