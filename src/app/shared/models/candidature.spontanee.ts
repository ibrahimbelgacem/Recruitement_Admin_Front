import { Candidat } from './candidat';
import { Offre } from "./offre.model";

export class CandidatureSpontanee{
  idCandidatureSpontanee:string;
	date:Date;
  etat:string;
	cv:string;
	lettreMotivation:string;

	offre:Offre;

	candidat:Candidat;

}
