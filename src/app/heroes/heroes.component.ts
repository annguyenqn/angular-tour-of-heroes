import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-Heroes';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-heroes',  //tạo thẻ hiện trong app html
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  //thuoc tinh, co the goi qua ben hero.html bang cu phap {{hero}}
  // hero: Hero = {
  //   id:1,
  //   name:"fireMan11"
  // }
  // heroes = HEROES
  heroes:Hero[]= []
  constructor(private heroService:HeroService){}
  ngOnInit(): void {
    this.getHeroes();
  }

  selectedHero?: Hero;
  onSelect(hero: Hero): void {
  this.selectedHero = hero;
}
getHeroes(): void {
  this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
}
}
