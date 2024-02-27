import {Component} from '@angular/core';
import {TournamentService} from "../../services/tournament.service";
import {
  Categorie,
  SEARCH_FORM,
  Statut,
  TournamentData,
  TournamentList,
  TournamentSearchForm
} from "../../models/Tournament";
import {Page} from "../../models/Page";
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {LOGIN_FORM} from "../../models/Auth";

@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrl: './tournaments.component.css'
})
export class TournamentsComponent {
  rechercheForm: FormGroup;
  tournamentSearchForm!: TournamentSearchForm;
  page !: Page;
  statuts = Object.keys(Statut);
  categories = Object.keys(Categorie);

  constructor(private _tournamentsService: TournamentService, private readonly _formBuilder: FormBuilder) {

    this.rechercheForm = this._formBuilder.group({
      name: '',
      statut: '',
      categorie: this._formBuilder.array([])
    });

    this.tournamentSearchForm = new TournamentSearchForm();
    this.tournamentSearchForm.nom = "";
    this.tournamentSearchForm.statut = Statut.EN_ATTENTE_DE_JOUEURS;
    this.tournamentSearchForm.categories = [Categorie.SENIOR];

    this.page = new Page();
    this.page.page = 0;
    this.page.size = 5;
    this.page.sort = ["asc"];
  }

  tournaments!: TournamentData[];

  ngOnInit() {
  }

  getTournaments() {
    this._tournamentsService.recherche(this.page, this.tournamentSearchForm)
      .subscribe({
        next: (resp) => {
          this.tournaments = resp.content;
        },
        error: (err) => {
          console.log(err);
        }
      });
  }

  submit() {
    let formValues = this.rechercheForm.value;
    this.tournamentSearchForm.nom = formValues.nom;
    this.tournamentSearchForm.statut = formValues.statut;
    this.tournamentSearchForm.categories = formValues.categorie;
    console.log("coucou" + formValues.nom);
    this.getTournaments();
  }

  get categorieFormArray() {
    return this.rechercheForm.get('categorie') as FormArray;
  }

  onCheckboxChange(e: any) {
    if (e.target.checked) {
      this.categorieFormArray.push(this._formBuilder.control(e.target.value));
    } else {
      let removeIndex = this.categorieFormArray.value.indexOf(e.target.value);
      if (removeIndex !== -1) {
        this.categorieFormArray.removeAt(removeIndex);
      }
    }
  }

}
