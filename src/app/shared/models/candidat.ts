import { DiplomeCondidat } from './diplome.condidat';
import { Langue } from './langue';
import { Condidature } from './condidature';
import { Competence } from './competence';
import { Experience } from './experience';
import { Certificat } from './certificat';
export class Candidat{

  idCandidat: number;
  nom: string;
  prenom: string;
  password: string;
  email: string;
  dateNaiss: Date;
  etatCivil: string;
  profil: string;
  anneeExp: number;
  adresse: string;
  ville: string;
  statut: number;
  certificat: Certificat[];
  experience: Experience[];
  competence: Competence[];
  candidatures: Condidature[];
  niveauLangues: Langue[];
  diplomeCandidats: DiplomeCondidat[];
}

