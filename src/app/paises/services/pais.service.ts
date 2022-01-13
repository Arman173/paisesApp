import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v2';

  constructor(
    private _http: HttpClient
  ) { }

  buscarPais( termino: string ): Observable<Country[]> {

    const url = `${ this.apiUrl }/name/${ termino }`;
    return this._http.get<Country[]>( url );
  }

  buscarPaisPorCapital( termino: string ): Observable<Country[]> {

    const url = `${ this.apiUrl }/capital/${ termino }`;
    return this._http.get<Country[]>( url );
  }

  getPaisPorAlpha( id: string ): Observable<Country> {

    const url = `${ this.apiUrl }/alpha/${ id }`;
    return this._http.get<Country>( url );
  }

}
