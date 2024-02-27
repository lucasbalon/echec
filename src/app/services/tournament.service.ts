import {Inject, Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {Auth} from "../models/Auth";
import {HttpClient} from "@angular/common/http";
import {Page} from "../models/Page";
import {TournamentList, TournamentSearchForm} from "../models/Tournament";

@Injectable({
  providedIn: 'root'
})
export class TournamentService {

  constructor(private readonly _httpClient: HttpClient,
              @Inject('urlBackEnd') private readonly _urlBack: string) { }

  recherche(page: Page, tournamentSearchForm: TournamentSearchForm): Observable<TournamentList> {
    return this._httpClient.post<TournamentList>(`${this._urlBack}/tournoi/recherche?page=${page.page}&size=${page.size}&sort=${page.sort}`, tournamentSearchForm);
  }
}
