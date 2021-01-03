import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) { //Use for simple initialization not methods 
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes() 
    .subscribe(heroes => this.heroes = heroes); //The new version waits for the Observable to emit the array of heroes—which could happen now or several minutes 
    //from now. The subscribe() method passes the emitted array to the callback, which sets the component's heroes property.
  }

}
