import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-Heroes';
import { Observable, of } from 'rxjs';
// angular ko choc thang vao db de lay du lieu ma phai thong qua service
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }
}
