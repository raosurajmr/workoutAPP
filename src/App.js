
import React from "react";
import {
  IonApp,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,IonList,IonItem,IonLabel,IonRouterOutlet
} from "@ionic/react";
import { IonReactRouter } from '@ionic/react-router';
import Workout from './workout'
import { Route,Redirect } from 'react-router-dom';

function App() {
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>WORKOUT APP</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/workout" component={Workout} exact={true} />
          <Route exact path="/" render={() => <Redirect to="/workout" />} />
          <IonItem routerLink="/workout">
            <IonLabel>Workout</IonLabel>
          </IonItem>
          <IonItem routerLink="/logs">
            <IonLabel>Logs</IonLabel>
          </IonItem>
        </IonRouterOutlet>
      </IonReactRouter>
      </IonContent>
    </IonApp>
  );
}

export default App;