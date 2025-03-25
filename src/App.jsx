import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getUserDataFromApi,
  getUserActivityFromApi,
  getUserAverageSessionsFromApi,
  getUserPerformanceFromApi,
} from "./api";

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
        const userDataResponse = await getUserDataFromApi(id);
        const userActivityResponse = await getUserActivityFromApi(id);
        const userAverageSessionsResponse = await getUserAverageSessionsFromApi(id);
        const userPerformanceResponse = await getUserPerformanceFromApi(id);

        console.log("Données utilisateur récupérées :", userDataResponse);
        setUserData(userDataResponse);

        console.log("Données d'activité récupérées :", userActivityResponse);
        setUserActivity(userActivityResponse?.data);

        console.log(
          "Données de sessions moyennes récupérées :",
          userAverageSessionsResponse
        );
        setUserAverageSessions(userAverageSessionsResponse?.data);

        console.log(
          "Données de performance récupérées :",
          userPerformanceResponse
        );
        setUserPerformance(userPerformanceResponse?.data);

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