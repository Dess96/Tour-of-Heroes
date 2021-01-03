import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  selectedHero: Hero; //Property of type hero

  heroes: Hero[];

  constructor(private heroService: HeroService, private messageService: MessageService) { //Use for simple initialization not methods 
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
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeroes(): void {
    this.heroService.getHeroes() 
    .subscribe(heroes => this.heroes = heroes); //The new version waits for the Observable to emit the array of heroes—which could happen now or several minutes 
    //from now. The subscribe() method passes the emitted array to the callback, which sets the component's heroes property.
  }

}
