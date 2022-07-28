import dayjs from "dayjs";
import React from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
} from "@ionic/react";
import { calculateBiorhythms } from '../calculations';
import BiorhythmChart from "./BiorhythmChart";
import './BiorhythmCard.css';

function formatDate(isoString) {
  return dayjs(isoString).format("D MMM YYYY");
}

function BiorhythmCard({ birthDate, targetDate }){
  const {physical,emotional,intellactual} = calculateBiorhythms(birthDate,targetDate);
  return (
      <IonCard className="biorhythm-card ion-text-center">
        <IonCardHeader>
          <IonCardTitle>{formatDate(targetDate)}</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <BiorhythmChart birthDate={birthDate} targetDate={targetDate}></BiorhythmChart>
          <p className="physical">Physical: {physical.toFixed(4)}</p>
          <p className="emotional">Emotional: {emotional.toFixed(4)}</p>
          <p className="intellactual">Intellactual:{intellactual.toFixed(4)}</p>
        </IonCardContent>
      </IonCard>
    
  );
};
export default BiorhythmCard;
