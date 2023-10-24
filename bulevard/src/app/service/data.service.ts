import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  private languageCodeSubject: BehaviorSubject<string> =
    new BehaviorSubject<string>('en');
  languageCode$ = this.languageCodeSubject.asObservable();

  setLanguage = (code: string) => {
    this.languageCodeSubject.next(code);
  };

  getMenuData = (): Observable<any> => {
    return this.languageCode$.pipe(
      switchMap((languageCode) =>
        this.http.get(
          `../assets/data/${languageCode}/menu.${languageCode}.json`
        )
      )
    );
  };

  getHeroData = (): Observable<any> => {
    return this.languageCode$.pipe(
      switchMap((languageCode) =>
        this.http.get(
          `../assets/data/${languageCode}/hero.${languageCode}.json`
        )
      )
    );
  };
}
