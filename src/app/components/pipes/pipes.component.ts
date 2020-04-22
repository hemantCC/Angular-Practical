import { Component, OnInit } from '@angular/core';
import { HEROES } from './heroes';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  
  CarName: string = 'Lamborghini Aventador';
  TurboBoost= 0.50;
  Price = 47000000;
  AllCars = {
    "Brand":"BMW",
    "Model":"M5 Coupe"
  }
  DateOfJoining = new Date(2020, 0 ,17);
  toggle = true ;

  //custom pipes
  power = 5;
  factor = 1;

  heroes:any [] = [];
  canFly = true;
  mutate = true;
  birthDate = '';

  constructor() {
    this.reset();
   }

  ngOnInit(): void {
  }

  get format()
  {
    return this.toggle ? 'shortDate':'fullDate';
  }
  toggleFormat()
  {
     this.toggle = !this.toggle;
  }

  //custome Pipe Methods
  addHero(name: string) {
    name = name.trim();
    if (!name) { return; }
    let hero = {name, canFly: this.canFly};
    if (this.mutate) {
   
    this.heroes.push(hero);
    } else {

      this.heroes = this.heroes.concat(hero);
    }
  }

  reset(){ this.heroes = HEROES.slice();}

}


// //For Impure Pipe
// @Component({
//   selector: 'app-pipes-impure',
//   templateUrl: './pipes.component.html',
//   styleUrls: ['./pipes.component.css']
// })
// export class FlyingHeroesImpureComponent extends PipesComponent {
  
// }
