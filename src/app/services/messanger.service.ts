import { Injectable } from '@angular/core';
import { Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessangerService {
  subject = new Subject()

  constructor() { }

  sendMsg(product){
    this.subject.next(product) //This trggers an event 
  }

  getMsg(){
    return this.subject.asObservable()
  }

}
