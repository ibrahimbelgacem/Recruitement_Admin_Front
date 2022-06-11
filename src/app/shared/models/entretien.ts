import { Responsable } from './responsable';
import { Candidat } from './candidat';
export class Entretien{

idEntretien:number;
jour:Date;
heure:Date;
decision:string
candidat:Candidat;

responsable:Responsable;
}
