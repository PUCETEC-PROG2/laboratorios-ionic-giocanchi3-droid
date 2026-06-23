import { IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="card-contntainer">
          <IonCard className= "card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPhXgkIQ6IU8Y_Cy5vCI5hRshD3ulY_5OMKdphpz1eMfy9GyF83wh3LwV_&s=10" alt= "Avatar"/>
            <IonHeader>
              <IonCardTitle>Giovanny Canchi</IonCardTitle>
              <IonCardSubtitle>giovannycanchi</IonCardSubtitle>
              <IonCardContent>
                <p>Desarrollador de software junior</p>
              </IonCardContent>
            </IonHeader>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
