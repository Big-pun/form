export interface Personne {
  nom: string;
  prenom: string;
  courriel: string;
  sexe: 'masculin' | 'feminin' | 'autre';
  dateNaissance: Date;
  nbEnfants: number;
}
