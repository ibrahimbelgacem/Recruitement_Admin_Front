import { Candidat } from './candidat';
import { Langue } from './langue';
export class NiveauLangue{

	idNiveauLangue:number;
	niveau:number;
	attesation:string;
	langue:Langue;
	candidat:Candidat;
}
