import { addItem } from './addItem';
import { Observable } from 'rxjs';


let observable = Observable.create((observer:any) => {

  let counter:number = 0;
  let interval = setInterval( () => {
    counter++;
    observer.next(`Event ${counter} occured`);
  }, 1000);

  // clearInterval(interval);

  // observer.complete();
  // observer.next('Event 3 will not be sent');
});




// Code below remains as is
observable.subscribe( (x:any) => addItem(x));
