import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _history: string[] = [];
  private apiUrl: string = 'https://api.giphy.com/v1/gifs';
  private apiKey: string = 'LbTPPgIwkEcwug0ffZ3vZDpNYLsnxqlX';

  public results: Gif[] = [];

  get history() {
    return [...this._history];
  }

  constructor(private http: HttpClient) {
    this._history = JSON.parse(localStorage.getItem('localHistory')!) || [];
    this.results = JSON.parse(localStorage.getItem('lastSearch')!) || [];
  }

  searchGifs(query: string = '') {
    query = query.trim().toLocaleLowerCase();

    // Insert the unique term into the last position
    if (!this._history.includes(query) && query.length != 0) {
      this._history.unshift(query);

      // Show only last 5 search terms
      this._history = this.history.splice(0, 5);

      //Save in localStorage variable
      localStorage.setItem('localHistory', JSON.stringify(this._history));
    }

    const params = new HttpParams()
      .set('apiKey', this.apiKey)
      .set('limit', '10')
      .set('q', query);

    this.http
      .get<SearchGifsResponse>(`${this.apiUrl}/search`, { params })
      .subscribe((resp) => {
        this.results = resp.data;
        localStorage.setItem('lastSearch', JSON.stringify(this.results));
      });
  }
}
