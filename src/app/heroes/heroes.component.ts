import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes',  //tạo thẻ hiện trong app html
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  hero = "windStorm" //thuoc tinh, co the goi qua ben hero.html bang cu phap {{hero}}
  objHero = {
    id:1,
    name:"fireMan"
  }
}
