
import React from "react";
import {
  IonApp,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,IonList,IonItem,IonLabel,IonRouterOutlet
} from "@ionic/react";

function App() {
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>WORKOUT APP</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonRouterOutlet>
          <IonItem routerLink="/workout">
            <IonLabel>Workout</IonLabel>
          </IonItem>
          <IonItem routerLink="/logs">
            <IonLabel>Logs</IonLabel>
          </IonItem>
        </IonRouterOutlet>
      </IonContent>
    </IonApp>
  );
}

export default App;