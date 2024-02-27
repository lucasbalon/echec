import {Component} from '@angular/core';
import {TournamentService} from "../../services/tournament.service";
import {Categorie, Statut, TournamentList, TournamentSearchForm} from "../../models/Tournament";
import {Page} from "../../models/Page";

@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrl: './tournaments.component.css'
})
export class TournamentsComponent {

  tournamentSearchForm!: TournamentSearchForm;
  page !: Page;

  constructor(private _tournamentsService: TournamentService) {
    this.tournamentSearchForm = new TournamentSearchForm();
    this.tournamentSearchForm.nom = "";
    this.tournamentSearchForm.statut = Statut.EN_ATTENTE_DE_JOUEURS;
    this.tournamentSearchForm.categories = [Categorie.SENIOR];

    this.page = new Page();
    this.page.page = 0;
    this.page.size = 5;
    this.page.sort = ["asc"];
  }

  tournaments!: TournamentList;

  ngOnInit() {
    this.getTournaments();
  }

  getTournaments() {
    this._tournamentsService.recherche(this.page, this.tournamentSearchForm)
      .subscribe({
        next: (resp) => {
          this.tournaments = resp;
          console.log(this.tournaments.content.length)
        },
        error: (err) => {
          console.log(err);
        }
      });
  }

}
