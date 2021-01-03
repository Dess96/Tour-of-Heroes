import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;
  selectedHero: Hero; //Property of type hero

  hero: Hero[];

  constructor(private heroService: HeroService) { //Use for simple initialization not methods 
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  /**
   * Sets the property to the hero object that was clicked on
   * @param hero The selected hero
   */
  onSelect(hero: Hero): void { 
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes(); //SYNCHRONOUS
  }

}
