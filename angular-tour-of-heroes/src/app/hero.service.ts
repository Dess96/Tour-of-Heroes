import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({ //Dependency injection
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { } //Service-in-service scenario

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES); 
  }
}
