
export interface Forfait {
    id: string;
    destination : string,
    villedepart : string,
    datedepart : string,
    dateretour : string,
    hotel: Hotel;
    prix : number,
    vedette: boolean,
    rabais : number
}

export interface Hotel {
    nom: string;
    coordonnees: string;
    etoiles: number;
    chambres: number;
    caracteristiques: [string,string,];
  }