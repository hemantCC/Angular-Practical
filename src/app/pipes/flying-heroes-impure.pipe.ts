import { Pipe , PipeTransform } from '@angular/core';
import { FlyingHeroesPipe } from 'src/app/pipes/flying-heroes.pipe';

//For Impure Pipe
@Pipe({
    name: 'flyingHeroesImpure',
    pure: false
  })
  export class FlyingHeroesImpurePipe extends FlyingHeroesPipe {}