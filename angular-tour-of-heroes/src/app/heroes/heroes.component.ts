import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES; //Heroes array 
  selectedHero: Hero; //Property of type hero

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Sets the property to the hero object that was clicked on
   * @param hero The selected hero
   */
  onSelect(hero: Hero): void { 
    this.selectedHero = hero;
  }

}
