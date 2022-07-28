import {
  IonApp,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonItem,
  IonLabel,
  IonDatetime,
} from "@ionic/react";
import React, { useState } from "react";
import BiorhythmCard from "./components/BiorhythmCard";
import {useLocalStorage} from './hooks';

function App() {
  const [birthDate, setBirthDate] = useLocalStorage('birthDate','');
  const [targetDate,setTargetDate] = useState(new Date().toISOString());
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Biorhythms</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {birthDate && (
          <BiorhythmCard
            birthDate={birthDate}
            targetDate={targetDate}
          ></BiorhythmCard>
        )}
        <IonItem>
          <IonLabel position="stacked">Date of Birth:</IonLabel>
          <IonDatetime
            displayFormat="DD MMMM YYYY"
            value={birthDate}
            onIonChange={(event) => setBirthDate(event.detail.value)}
          ></IonDatetime>
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Target Date:</IonLabel>
          <IonDatetime
            displayFormat="DD MMMM YYYY"
            value={targetDate}
            onIonChange={(event) => setTargetDate(event.detail.value)}
          ></IonDatetime>
        </IonItem>
      </IonContent>
    </IonApp>
  );
}

export default App;
