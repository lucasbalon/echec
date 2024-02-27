import {Player} from "./Player";
import {Validators} from "@angular/forms";

export enum Statut {
  EN_ATTENTE_DE_JOUEURS = "EN_ATTENTE_DE_JOUEURS",
  EN_COURS = "EN_COURS",
  TERMINE = "TERMINE"
}

export enum Categorie {
  JUNIOR = "JUNIOR",
  SENIOR = "SENIOR",
  VETERAN = "VETERAN"
}

export class TournamentData {
  id!: number;
  nom!: string;
  lieu!: string;
  nombreJoueursInscrits!: number;
  nombreMinJoueurs!: number;
  nombreMaxJoueurs!: number;
  eLOMin!: number;
  eLOMax!: number;
  categories!: Categorie[];
  statut!: Statut;
  womenOnly!: boolean;
  dateFinInscriptions!: Date;
  rondeCourante!: number;
  joueursInscrits!: Player[];
}

interface Sort {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}

interface Pageable {
  offset: number;
  sort: Sort;
  pageNumber: number;
  pageSize: number;
  paged: boolean;
  unpaged: boolean;
}

export interface TournamentList {
  totalPages: number;
  totalElements: number;
  size: number;
  content: TournamentData[];
  number: number;
  sort: Sort;
  pageable: Pageable;
  first: boolean;
  last: boolean;
  numberOfElements: number;
  empty: boolean;
}

export class TournamentSearchForm {
  nom!: string;
  statut!: Statut;
  categories!: Categorie[];
}

export const SEARCH_FORM ={
  nom:'',
  statut:'',
  categorie: ''
}
