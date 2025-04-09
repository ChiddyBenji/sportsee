import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getUserData,
  getUserActivity,
  getUserAverageSessions,
  getUserPerformance,
} from "./service/userdata";

import Nav from "./components/nav";
import NavBar from "./components/navbar";
import "./styles/styles.scss";
import Front from "./pages/front";

function App() {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);
  const [userActivity, setUserActivity] = useState(null);
  const [userAverageSessions, setUserAverageSessions] = useState(null);
  const [userPerformance, setUserPerformance] = useState(null);

  useEffect(() => {
    if (!id) {
      return <p>Identifiant utilisateur manquant.</p>;
    }

    const fetchData = async () => {
      try {
        const userDataResponse = await getUserData(id);

        const userActivityResponse = await getUserActivity(id);
        const userAverageSessionsResponse = await getUserAverageSessions(id);
        const userPerformanceResponse = await getUserPerformance(id);

        setUserData(userDataResponse);

        setUserActivity(userActivityResponse);

        setUserAverageSessions(userAverageSessionsResponse);

        setUserPerformance(userPerformanceResponse.data || userPerformanceResponse);
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <Nav userData={userData} />
      <NavBar />
      {userData ? (
        <Front
          userData={userData}
          userActivity={userActivity}
          userAverageSessions={userAverageSessions}
          userPerformance={userPerformance}
        />
      ) : (
        <p>Chargement des données...</p>
      )}
    </div>
  );
}

export default App;
