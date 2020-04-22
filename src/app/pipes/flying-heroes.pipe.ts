import { Pipe , PipeTransform } from '@angular/core';
import { Flyer } from 'src/app/components/pipes/HEROES';

@Pipe({  name :'flyingHeroes' })

export class FlyingHeroesPipe implements PipeTransform{
    transform(allHeroes: Flyer[]){
        return allHeroes.filter(hero => hero.canFly);
    }
}


