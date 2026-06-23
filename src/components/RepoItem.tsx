import React from "react";
import { Repository } from "../interfaces/Repository";
import { IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonThumbnail } from "@ionic/react";
import { pencil, trash } from "ionicons/icons";

const RepoItem: React.FC<Repository> = (Repository: Repository) => {
    return(
      <IonItemSliding>
        <IonItem>
          <IonThumbnail slot="start">
            <img
              src={Repository.owner.avatar_url}
              alt={Repository.name}
            />
          </IonThumbnail>
        
          <IonLabel>
            <h3>{Repository.name}</h3>
            { Repository.description && (
            <p>{Repository.description}</p>
            )}
            { Repository.language && (
            <p>
              <strong>Lenguaje:</strong> {Repository.language}
            </p>
            )}
          </IonLabel>
          </IonItem>
        
            <IonItemOptions>
              <IonItemOption>
                <IonIcon icon={pencil} slot="icon-only" />
              </IonItemOption>
        
              <IonItemOption color="danger">
                <IonIcon icon={trash} slot="icon-only" />
              </IonItemOption>
            </IonItemOptions>
      </IonItemSliding>
    );
}
 export default RepoItem