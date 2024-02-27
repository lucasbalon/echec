export interface Player {
  pseudo: string;
  email: string;
  dateDeNaissance: Date;
  eLO: number;
  genre: Genre;
}

export enum Genre {
  GARCON,
  FILLE,
  AUTRE
}
